/* ============================================================
   TE WAIPOUNAMU — app
   Renders everything from data.js + images.js. No build step.
   ============================================================ */

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const eur = (n) => (n === 0 ? "free" : `€${n}`);

function img(key) {
  const v = IMAGES[key];
  return Array.isArray(v) ? v[0] : v || null;
}
function imgSet(key) {
  const v = IMAGES[key];
  return Array.isArray(v) ? v : v ? [v] : [];
}
function gallerySet(keys) {
  const urls = [];
  (keys || []).forEach((k) => imgSet(k).forEach((u) => { if (!urls.includes(u)) urls.push(u); }));
  return urls;
}
const NUM_WORDS = ["zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"];
const numWord = (n) => NUM_WORDS[n] || String(n);
const TRIP_KM = TRIP.stats[0].value;

function coordLabel(c, name) {
  if (!c) return "";
  const lat = Math.abs(c[0]).toFixed(3), lng = Math.abs(c[1]).toFixed(3);
  return `${lat}° S — ${lng}° E · ${name}`;
}

/* booking-link builders (2 adults, EUR, prefilled dates) */
const bookingSearch = (town, ci, co) =>
  `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(town + ", New Zealand")}&checkin=${ci}&checkout=${co}&group_adults=2&no_rooms=1&group_children=0&selected_currency=EUR&order=bayesian_review_score`;
const airbnbSearch = (town, ci, co) =>
  `https://www.airbnb.com/s/${encodeURIComponent(town + "--New-Zealand")}/homes?checkin=${ci}&checkout=${co}&adults=2&currency=EUR`;
const camperMateSearch = (town) =>
  `https://campermate.com/en/search?q=${encodeURIComponent(town + " New Zealand")}`;
const DOC_PORTAL = "https://bookings.doc.govt.nz/";

/* ---------- hero ---------- */
(function hero() {
  const heroUrl = img("hero_nz");
  if (heroUrl) $("#heroImg").style.backgroundImage = `url("${heroUrl}")`;
  $("#heroStats").innerHTML = TRIP.stats.map(
    (s) => `<div class="hero-stat"><div class="v">${esc(s.value)}<small>${esc(s.unit)}</small></div><div class="l">${esc(s.label)}</div></div>`
  ).join("");
})();

/* ---------- nav ---------- */
(function nav() {
  const nav = $("#nav");
  const onScroll = () => {
    nav.classList.toggle("on", window.scrollY > window.innerHeight * 0.7);
    const h = document.documentElement;
    $("#progressBar").style.width = `${(h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100}%`;
    const dayEls = document.querySelectorAll(".day");
    let current = 0;
    dayEls.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight * 0.5) current = +el.dataset.n; });
    $("#navCount").textContent = current ? `day ${String(current).padStart(2, "0")} / ${DAYS.length}` : "";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------- route strip ---------- */
(function routeStrip() {
  const chips = NIGHTS.map((nt) =>
    `<span class="route-chip ${nt.type}" title="night ${nt.n} · ${esc(nt.date)}"><span class="dot"></span>${esc(nt.place)}</span>`
  );
  $("#routeStrip").innerHTML =
    `<span class="route-chip"><span class="dot" style="background:#888"></span>Christchurch ✈</span><span class="route-arrow">→</span>` +
    chips.join(`<span class="route-arrow">→</span>`) +
    `<span class="route-arrow">→</span><span class="route-chip"><span class="dot" style="background:#888"></span>Christchurch ✈</span>`;
})();

/* ---------- map ---------- */
(function makeMap() {
  const map = L.map("map", { scrollWheelZoom: false, zoomSnap: 0.25 });
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Esri World Imagery", maxZoom: 17,
  }).addTo(map);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png", {
    attribution: "© CARTO © OpenStreetMap", maxZoom: 17, opacity: 0.85,
  }).addTo(map);

  const styleFor = (t) =>
    t === "daytrip"
      ? { color: "#ece5d4", weight: 2, dashArray: "2 7", opacity: 0.75 }
      : { color: "#6ac7ca", weight: 3, opacity: 0.92 };
  LEGS.forEach((leg) => {
    L.polyline(leg.pts, styleFor(leg.type)).addTo(map).bindTooltip(leg.label, { sticky: true });
  });

  const allPts = [];
  NIGHTS.forEach((nt) => {
    allPts.push(nt.coords);
    const icon = L.divIcon({
      className: "", iconSize: [30, 30], iconAnchor: [15, 15],
      html: `<div class="pin ${nt.type}"><div class="pin-core">${nt.n}</div></div>`,
    });
    const stayLine = nt.stay.free
      ? `${esc(nt.stay.name)} · <b style="color:#8fd14f">FREE</b>`
      : `${esc(nt.stay.name)} · €${nt.stay.price}/night`;
    L.marker(nt.coords, { icon }).addTo(map).bindPopup(
      `<div class="pp-m">night ${nt.n} · ${esc(nt.date)} · ${nt.type === "camp" ? "⛺ camp" : "🏡 lodge"}</div>
       <div class="pp-t">${esc(nt.place)}</div>
       <div class="pp-n">${stayLine}</div>`
    );
  });
  POIS.forEach((p) => {
    const icon = L.divIcon({ className: "", iconSize: [14, 14], iconAnchor: [7, 7], html: `<div class="pin poi"><div class="pin-core"></div></div>` });
    L.marker(p.coords, { icon }).addTo(map).bindPopup(
      `<div class="pp-m">${esc(p.kind)}</div><div class="pp-t">${esc(p.name)}</div><div class="pp-n">${esc(p.note)}</div>`
    );
  });
  map.fitBounds(L.latLngBounds(allPts).pad(0.12));

  $("#mapLegend").innerHTML = `
    <span class="sw" style="background:#6ac7ca"></span>camp night ⛺<br>
    <span class="sw" style="background:#e2a13f"></span>lodge night 🏡<br>
    <span class="ln" style="border-color:#6ac7ca"></span>the loop · ${TRIP_KM} km<br>
    <span class="ln" style="border-color:#ece5d4; border-top-style:dashed"></span>side trips`;
})();

/* ---------- days ---------- */
(function days() {
  const root = $("#daysRoot");
  root.innerHTML = DAYS.map((d) => {
    const night = d.nightN ? NIGHTS.find((x) => x.n === d.nightN) : null;
    const gal = gallerySet(d.gallery && d.gallery.length ? d.gallery : [d.imgKey]);
    const main = img(d.imgKey) || gal[0];

    const drive = d.drive
      ? `<div class="day-drive"><span>🚐</span><b>${esc(d.drive.from)}</b><span>→</span><b>${esc(d.drive.to)}</b><span>·</span><span>${d.drive.km} km</span><span>·</span><span>${esc(d.drive.time)}</span></div>`
      : "";

    const acts = (d.acts || []).map((a) => {
      const nm = a.url ? `<a href="${a.url}" target="_blank" rel="noopener">${esc(a.name)}</a>` : esc(a.name);
      const pr = a.price == null ? "" : a.price === 0 ? `<span class="a-price free">free</span>` : `<span class="a-price">€${a.price} pp</span>`;
      const must = a.must ? `<span class="must">book</span>` : "";
      const altLine = (a.alts || []).map((x) => {
        const xn = x.url ? `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.name)}</a>` : esc(x.name);
        return `${xn} ${x.price === 0 ? "(free)" : `(€${x.price} pp)`}`;
      }).join(" · ");
      return `<li><span class="a-name">${nm}</span><span class="a-dots"></span>${pr}${must}</li>` +
        (altLine ? `<li class="day-alts" style="display:block">↳ or: ${altLine}</li>` : "");
    }).join("");

    let tonight = "";
    if (night) {
      const s = night.stay;
      const thumb = img(s.imgKey);
      const meta = [
        s.free ? `<span class="free-badge">FREE — self-contained only</span>` : `<span class="price">${eur(s.price)} / night for two</span>`,
        s.score ? `<span class="score">★ ${s.score}</span>` : "",
        s.doc ? `<span>DOC site</span>` : "",
      ].filter(Boolean).join("");
      const links = [
        s.url ? `<a class="btn ${night.type === "camp" ? "solid" : "amber"}" href="${s.url}" target="_blank" rel="noopener">${s.doc ? "book on DOC" : night.type === "camp" ? "campsite ↗" : "property ↗"}</a>` : "",
        night.type === "lodge" ? `<a class="btn" href="${bookingSearch(night.searchTown, night.checkin, night.checkout)}" target="_blank" rel="noopener">Booking.com</a>` : "",
        night.type === "lodge" ? `<a class="btn" href="${airbnbSearch(night.searchTown, night.checkin, night.checkout)}" target="_blank" rel="noopener">Airbnb</a>` : "",
        night.type === "camp" ? `<a class="btn" href="${camperMateSearch(night.place)}" target="_blank" rel="noopener">CamperMate</a>` : "",
      ].filter(Boolean).join("");
      const alts = (night.alts || []).map((a) => {
        const nm = a.url ? `<a href="${a.url}" target="_blank" rel="noopener">${esc(a.name)}</a>` : esc(a.name);
        return `<div class="alt"><span class="kind ${a.kind}">${a.kind}</span><span>${nm}${a.note ? ` — ${esc(a.note)}` : ""}</span><span class="dots"></span><span class="p">${a.price === 0 ? "free" : `€${a.price}`}${a.score ? ` · ★${a.score}` : ""}</span></div>`;
      }).join("");
      tonight = `
        <div class="tonight ${night.type}">
          <div class="tonight-head"><span>tonight · night ${night.n} of ${NIGHTS.length}</span><span>${night.type === "camp" ? "⛺ camp" : "🏡 lodge"}</span></div>
          <div class="tonight-body">
            ${thumb ? `<img class="tonight-thumb" src="${thumb}" alt="${esc(s.name)}" loading="lazy" data-lb="${esc(s.name)}" data-imgs="${esc(JSON.stringify(imgSet(s.imgKey)))}">` : ""}
            <div>
              <div class="tonight-name">${esc(s.name)}</div>
              <div class="tonight-meta">${meta}</div>
              <div class="tonight-note">${esc(s.note)}</div>
              <div class="tonight-links">${links}</div>
              ${alts ? `<button class="alts-toggle" data-alts>+ ${night.alts.length} alternatives</button><div class="alts-list">${alts}</div>` : ""}
            </div>
          </div>
        </div>`;
    }

    return `
      <article class="day io" data-n="${d.n}">
        <div class="day-no"><span class="n">${String(d.n).padStart(2, "0")}</span><span class="d">${esc(d.date.split(" ")[0])}</span></div>
        <div class="day-main">
          <figure class="day-fig" data-lb="${esc(d.title)}" data-imgs="${esc(JSON.stringify(gal))}">
            <img src="${main}" alt="${esc(d.title)}" loading="lazy">
            <figcaption class="fig-coord">${esc(coordLabel(night ? night.coords : null, night ? night.place : d.title))}</figcaption>
            ${gal.length > 1 ? `<span class="fig-count">⊞ ${gal.length}</span>` : ""}
          </figure>
          <div class="day-head">
            <p class="day-date">Day ${d.n} — ${esc(d.date)}</p>
            <h3 class="day-title">${esc(d.title)}</h3>
            ${drive}
            <p class="day-body">${esc(d.body)}</p>
            <ul class="day-acts">${acts}</ul>
            ${tonight}
          </div>
        </div>
      </article>`;
  }).join("");

  root.addEventListener("click", (e) => {
    const t = e.target.closest("[data-alts]");
    if (t) {
      const list = t.nextElementSibling;
      const open = list.classList.toggle("open");
      t.textContent = open ? "– hide alternatives" : t.textContent.replace("– hide alternatives", "+ alternatives");
      if (!open) t.textContent = `+ ${list.querySelectorAll(".alt").length} alternatives`;
    }
  });
})();

/* ---------- camp grid ---------- */
(function camps() {
  const camps = NIGHTS.filter((n) => n.type === "camp");
  $("#campsLede").textContent =
    `${numWord(camps.length)} nights in the van — total cost for both of you: €${camps.reduce((s, c) => s + (c.stay.price || 0), 0)}. ` +
    `${numWord(camps.filter((c) => c.stay.doc).length)} are DOC conservation campsites inside or beside national parks, ` +
    `and one is the most famous free camp in the country — booked, this time, for the eve of a new moon. ` +
    `This is the half of the trip the lodges can't give you.`;
  $("#campGrid").innerHTML = camps.map((c) => {
    const u = img(c.stay.imgKey) || img("doc_camp");
    const meta = c.stay.free
      ? `<span class="free-badge">FREE</span> · self-contained only · 1 night max`
      : `${eur(c.stay.price)} / night for two${c.stay.doc ? " · DOC" : ""}`;
    return `
      <div class="camp-card io" data-lb="${esc(c.stay.name)}" data-imgs="${esc(JSON.stringify(imgSet(c.stay.imgKey)))}">
        <img src="${u}" alt="${esc(c.stay.name)}" loading="lazy">
        <div class="cc-veil"></div>
        ${c.stay.url ? `<div class="cc-book"><a class="btn" href="${c.stay.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${c.stay.doc ? "book · DOC" : c.stay.free ? "rules ↗" : "book ↗"}</a></div>` : ""}
        <div class="cc-txt">
          <div class="cc-night">night ${c.n} · ${esc(c.date)}</div>
          <div class="cc-name">${esc(c.stay.name)}</div>
          <div class="cc-meta">${esc(c.place)} · ${meta}</div>
        </div>
      </div>`;
  }).join("");

  $("#campRules").innerHTML = `
    <div>
      <h3>${esc(CAMP_RULES.headline)}</h3>
      <p>${esc(CAMP_RULES.body)}</p>
      <p class="fine">⚠ ${esc(CAMP_RULES.fine)}</p>
    </div>
    <ul class="camp-apps">
      ${CAMP_RULES.apps.map((a) => `<li><a href="${a.url}" target="_blank" rel="noopener">${esc(a.name)} ↗</a><div class="d">${esc(a.note)}</div></li>`).join("")}
    </ul>`;
})();

/* ---------- stay finder ---------- */
(function finder() {
  const root = $("#finderRoot");
  root.innerHTML = `
    <div class="finder-row">
      <label><span>where</span>
        <select id="fPlace">${FINDER_PLACES.map((p, i) => `<option value="${i}">${esc(p.label)} — ${p.checkin.slice(5)} → ${p.checkout.slice(5)}</option>`).join("")}</select>
      </label>
      <label><span>check-in</span><input type="date" id="fIn" value="${FINDER_PLACES[0].checkin}"></label>
      <label><span>check-out</span><input type="date" id="fOut" value="${FINDER_PLACES[0].checkout}"></label>
      <div class="finder-adults">2 adults · EUR</div>
    </div>
    <div class="finder-btns">
      <a class="btn solid" id="fBooking" target="_blank" rel="noopener">search Booking.com ↗</a>
      <a class="btn amber" id="fAirbnb" target="_blank" rel="noopener">search Airbnb ↗</a>
      <a class="btn" id="fCamper" target="_blank" rel="noopener">campsites · CamperMate ↗</a>
      <a class="btn" href="${DOC_PORTAL}" target="_blank" rel="noopener">DOC campsite bookings ↗</a>
    </div>
    <p class="finder-hint">Tip: Booking.com results open sorted by <b>review score</b>; add the “Entire homes &amp; apartments”
    filter for cottage-style stays. Dates follow the itinerary but are <b>fully editable</b> above.</p>`;

  const sync = () => {
    const town = FINDER_PLACES[+$("#fPlace").value].town;
    const ci = $("#fIn").value, co = $("#fOut").value;
    $("#fBooking").href = bookingSearch(town, ci, co);
    $("#fAirbnb").href = airbnbSearch(town, ci, co);
    $("#fCamper").href = camperMateSearch(town);
  };
  $("#fPlace").addEventListener("change", () => {
    const p = FINDER_PLACES[+$("#fPlace").value];
    $("#fIn").value = p.checkin; $("#fOut").value = p.checkout; sync();
  });
  $("#fIn").addEventListener("change", sync);
  $("#fOut").addEventListener("change", sync);
  sync();
})();

/* ---------- book it: flights ---------- */
(function flights() {
  $("#bookFlights").innerHTML = `
    <div class="book-card io">
      <h3>✈ Flights — Belgium → Christchurch, return</h3>
      <p class="sub">${esc(FLIGHTS.out.route)} · out ${esc(FLIGHTS.out.date)} · home ${esc(FLIGHTS.home.date)}</p>
      <div class="flight-opts">
        ${FLIGHTS.options.map((o) => `
          <div class="opt">
            <span class="tag ${o.hot ? "hot" : ""}">${esc(o.tag)}</span>
            <span class="nm">${esc(o.name)}</span>
            <span class="pr">${esc(o.price)}</span>
            <span class="nt">${esc(o.note)}</span>
            <a class="btn" href="${o.url}" target="_blank" rel="noopener">search ↗</a>
          </div>`).join("")}
      </div>
      <p class="book-extra">${esc(FLIGHTS.advice)}</p>
    </div>`;
})();

/* ---------- book it: camper ---------- */
(function camper() {
  $("#bookCamper").innerHTML = `
    <div class="book-card io">
      <h3>🚐 The campervan — ${CAMPER.days} days, CHC ↔ CHC</h3>
      <p class="sub">certified self-contained (green warrant) — non-negotiable for the free nights</p>
      <p class="book-extra" style="margin-top:0">${esc(CAMPER.summary)}</p>
      <div class="van-opts">
        ${CAMPER.options.map((o) => `
          <div class="opt">
            <span class="tag ${o.pick === "value" ? "hot" : ""}">${esc(o.pickLabel)}</span>
            ${img(o.imgKey) ? `<img src="${img(o.imgKey)}" alt="${esc(o.co)} ${esc(o.model)}" loading="lazy">` : ""}
            <span class="nm">${esc(o.co)} — ${esc(o.model)}</span>
            <span class="pr">≈ NZ$${o.perDay} /day · ≈ €${Math.round(o.perDay * 0.5 * CAMPER.days)} total</span>
            <span class="nt">${esc(o.note)}</span>
            <a class="btn" href="${o.url}" target="_blank" rel="noopener">quote ↗</a>
          </div>`).join("")}
      </div>
      <p class="book-extra">${esc(CAMPER.extras)} Compare all of them at once on
      <a href="${CAMPER.compareUrl}" target="_blank" rel="noopener">Motorhome Republic ↗</a>.</p>
    </div>`;
})();

/* ---------- checklist ---------- */
(function checklist() {
  $("#checklistRoot").innerHTML = CHECKLIST.map((c) => `
    <div class="check-item io">
      <span class="check-when ${/first|now/i.test(c.when) ? "hot" : ""}">${esc(c.when)}</span>
      <span class="check-what">${esc(c.what)}<span class="check-why">${esc(c.why)}</span></span>
      <span class="check-price">${esc(c.price || "")}</span>
      <span class="check-link">${c.link ? `<a class="btn" href="${c.link}" target="_blank" rel="noopener">book ↗</a>` : ""}</span>
    </div>`).join("");
})();

/* ---------- budget ---------- */
(function budget() {
  $("#budgetNote").textContent = BUDGET.note;
  const max = Math.max(...BUDGET.rows.map((r) => r.pp));
  $("#budgetRoot").innerHTML = `
    <div class="budget-rows">
      ${BUDGET.rows.map((r) => `
        <div class="brow io">
          <div class="brow-top"><span class="cat">${esc(r.cat)}</span><span class="val">€${r.pp.toLocaleString("en")} pp</span></div>
          <div class="bar"><div class="fill" data-w="${(r.pp / max) * 100}"></div></div>
        </div>`).join("")}
    </div>
    <aside class="budget-side io">
      <div class="budget-total">
        <div class="t-label">all-in, per person</div>
        <div class="t-value">€${BUDGET.total.toLocaleString("en")}<small> /pp</small></div>
        <div class="t-note">full premium programme · €${(BUDGET.total * 2).toLocaleString("en")} for two ·
          heli-hike upgrade +€${BUDGET.heliUpgrade} pp</div>
      </div>
      <div class="save-tips">
        <h4>trim it back to ≈ €${BUDGET.trimmed.toLocaleString("en")}</h4>
        <ul>${BUDGET.saveTips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      </div>
    </aside>`;
})();

/* ---------- footer notes ---------- */
(function footer() {
  $("#footerNotes").innerHTML = [
    { t: "November weather", b: "Late alpine spring: 8–20 °C, ~15 hours of daylight, sunset near 20:45. Snow still possible on the passes; waterfalls still fat with snowmelt. Sandflies are awake in Fiordland — bring repellent." },
    { t: "Driving", b: "Left side, ~80 km/h average in a van. Fuel up before Haast and the Milford Road — no stations for 120 km+." },
    { t: "The green warrant", b: "Blue self-containment cards died 7 June 2026. Confirm in writing the rental carries the green warrant, or the free nights are illegal." },
    { t: "Booking cadence", b: "Flights & van now · Onsen now (released to 31 Dec) · DOC White Horse Hill, Moke Lk & Otto's now · Cascade Creek releases during Aug 2026 — check the portal." },
    { t: "Dates that matter", b: "New moon 9 Nov — the loop runs clockwise to put Mt John and the Pukaki free camp on the 6th and 8th. Roy's Peak reopens 11 Nov after lambing. Canterbury Show Week peaks Fri 13 Nov, while you're safely in Otago." },
  ].map((n) => `<div class="fnote"><div class="fn-t">${esc(n.t)}</div><div class="fn-b">${esc(n.b)}</div></div>`).join("");
})();

/* ---------- lightbox ---------- */
(function lightbox() {
  const lb = $("#lightbox"), im = $("#lightboxImg"), cap = $("#lightboxCap");
  let urls = [], idx = 0, title = "";
  const show = () => {
    im.src = urls[idx];
    cap.textContent = `${title} — ${idx + 1} / ${urls.length}`;
    $("#lightboxPrev").style.display = $("#lightboxNext").style.display = urls.length > 1 ? "" : "none";
  };
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-lb]");
    if (!t) return;
    try { urls = JSON.parse(t.dataset.imgs || "[]"); } catch { urls = []; }
    if (!urls.length) return;
    title = t.dataset.lb; idx = 0;
    lb.hidden = false; document.body.style.overflow = "hidden";
    show();
  });
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; };
  $("#lightboxX").addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  $("#lightboxPrev").addEventListener("click", () => { idx = (idx - 1 + urls.length) % urls.length; show(); });
  $("#lightboxNext").addEventListener("click", () => { idx = (idx + 1) % urls.length; show(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") { idx = (idx - 1 + urls.length) % urls.length; show(); }
    if (e.key === "ArrowRight") { idx = (idx + 1) % urls.length; show(); }
  });
})();

/* ---------- scroll reveals ---------- */
(function reveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        en.target.querySelectorAll(".fill[data-w]").forEach((f) => { f.style.width = f.dataset.w + "%"; });
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".io").forEach((el) => io.observe(el));
})();
