/* ============================================================
   TE WAIPOUNAMU — South Island Grand Loop · data
   Justine & Anthony · 4–21 Nov 2026 · Christchurch round trip
   Campervan · 9 camp nights / 8 lodge nights
   Money: EUR, 1 NZD ≈ €0.50 · lodging = per night FOR TWO
   Sources: Booking.com live checks (Jun 2026), DOC & operator
   websites (researched 12 Jun 2026; re-verified 19 Jul 2026;
   re-dated for the November flights 3 Aug 2026; re-dated again
   for the BOOKED China Southern flights 5 Aug 2026)

   v3 — CLOCKWISE. The loop was reversed when the dates moved to
   November: new moon falls on 9 Nov, so running Banks Peninsula
   → Mackenzie first puts the Dark Sky tour and the free Pukaki
   camp on 6 and 8 Nov, in the darkest window of the trip.

   v4 — the flights are BOOKED (China Southern, €2,323 for two).
   They land 4 Nov 17:20 and leave 21 Nov 22:30, which buys one
   extra night at the front and a whole extra day at the back.
   The loop itself is UNTOUCHED: CZ617 lands after the campervan
   depot closes (16:30), so night 1 is an airport hotel and the
   van is collected on the morning of 5 Nov — meaning every
   moon-, lambing- and whale-dated day below keeps its date.
   ============================================================ */

const TRIP = {
  title: "Te Waipounamu",
  subtitle: "The South Island, end to end",
  arrive: "Wed 4 Nov 2026 · 17:20 Christchurch",
  depart: "Sat 21 Nov 2026 · 22:30 Christchurch",
  travellers: "Justine & Anthony",
  nights: 17,
  stats: [
    { value: "2,730", unit: "km", label: "one grand loop, clockwise" },
    { value: "9", unit: "nights", label: "camped wild & lakeside" },
    { value: "8", unit: "nights", label: "lodges, incl. the landing night" },
    { value: "5", unit: "parks", label: "national parks crossed" },
  ],
};

/* ---------- the 17 nights ----------
   type "camp" | "lodge" · stay.free = legal freedom camping
   price = € per night for two · DOC fees = per-adult × 2 */

const NIGHTS = [
  {
    n: 1, date: "Wed 4 Nov", place: "Christchurch Airport", region: "Ōtautahi · the landing night",
    coords: [-43.4876, 172.5374], type: "lodge",
    checkin: "2026-11-04", checkout: "2026-11-05", searchTown: "Christchurch Airport",
    stay: { name: "Sudima Christchurch Airport", price: 140, imgKey: "christchurch2",
            note: "This night exists because of the booked flight, not because anyone wanted it: CZ617 touches down at 17:20 and the Britz/Maui depot closes at 16:30 (last airport shuttle 16:00), so the van simply cannot be collected today. Sudima is directly across the forecourt from the terminal — a two-minute walk with the trolleys after 32 hours in the air. Sleep, then take the van at 08:00 with a whole clear day ahead. Rate is an indication, not a live check.",
            url: "https://www.sudimahotels.com/hotels/new-zealand/christchurch-airport/" },
    alts: [
      { name: "Novotel Christchurch Airport", kind: "lodge", price: 155, note: "the other walk-across-the-road option, right at the terminal", url: "https://all.accor.com/hotel/8060/index.en.shtml" },
      { name: "Airport Gateway Motor Lodge", kind: "lodge", price: 100, note: "free shuttle, 5 minutes out — the same idea for a third less", url: "https://www.airportgateway.co.nz/" },
      { name: "Orari Boutique Hotel, in town", kind: "lodge", price: 115, note: "if you'd rather have a real first dinner in the city — 20 min in, and a taxi back out to the depot at 08:00", url: "https://www.orari.co.nz/" },
    ],
  },
  {
    n: 2, date: "Thu 5 Nov", place: "Akaroa", region: "Banks Peninsula",
    coords: [-43.8035, 172.9683], type: "lodge",
    checkin: "2026-11-05", checkout: "2026-11-06", searchTown: "Akaroa",
    stay: { name: "French Bay House", score: 9.7, price: 175, imgKey: "french_bay",
            note: "1874 Carpenter-Gothic B&B in the heart of the French village — four king rooms, breakfast from their own hens, loaner bicycles. Only 84 km from the airport: the gentlest possible landing after 36 hours in the air.",
            url: "https://www.booking.com/hotel/nz/french-bay-house.html" },
    alts: [
      { name: "Newton Heights B&B", kind: "lodge", price: 150, note: "architect-designed, panoramic harbour views from every room + outdoor spa", url: "https://www.newtonheights.nz/" },
      { name: "L'abri Boutique B&B", kind: "lodge", price: 165, note: "harbour-view rooms 4 km out, garden-to-table breakfast", url: "https://labri.co.nz/" },
      { name: "Akaroa TOP 10 Holiday Park", kind: "camp", price: 32, note: "harbour-view terraces if you'd rather start in the van" },
    ],
  },
  {
    n: 3, date: "Fri 6 Nov", place: "Lake Tekapo", region: "Mackenzie Basin · Dark Sky Reserve",
    coords: [-44.0046, 170.4771], type: "camp",
    checkin: "2026-11-06", checkout: "2026-11-07", searchTown: "Lake Tekapo",
    stay: { name: "Lakes Edge Holiday Park, Tekapo", price: 30, imgKey: "tekapo",
            note: "Powered lakeshore site, hot showers, Tekapo Springs next door — and Mt John's observatory road starts ten minutes away. You are sleeping inside the UNESCO Dark Sky Reserve on a night three days before the new moon.",
            url: "https://lakesedgeholidaypark.co.nz/holiday-park-accommodation/powered-and-non-powered-sites/" },
    alts: [
      { name: "Lake McGregor Campground", kind: "camp", price: 10, note: "basic, beautiful, honesty-box cash — 20 min north on the Lilybank road", url: "https://www.mackenzie.govt.nz/services/parks-venues-and-recreation/camping" },
      { name: "Tekapo TOP 10 Holiday Park", kind: "camp", price: 35, note: "village-edge park, walk to the Church of the Good Shepherd" },
      { name: "Peppers Bluewater Resort", kind: "lodge", price: 165, note: "if the Dark Sky tour runs late and you want a real bed" },
    ],
  },
  {
    n: 4, date: "Sat 7 Nov", place: "White Horse Hill", region: "Aoraki / Mt Cook NP",
    coords: [-43.7180, 170.0920], type: "camp",
    checkin: "2026-11-07", checkout: "2026-11-08", searchTown: "Mount Cook Village",
    stay: { name: "White Horse Hill DOC campground", price: 20, imgKey: "camp_whitehorse", doc: true,
            note: "Park beneath Mount Sefton's hanging glaciers AT the Hooker Valley trailhead — arguably the most scenic place you can legally sleep in New Zealand. DOC's busiest campsite; bookings are open now, right through to 30 June 2027.",
            url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/white-horse-hill-campground/" },
    alts: [
      { name: "Glentanner Park Centre", kind: "camp", price: 40, note: "powered sites + hot showers, 20 min down Lake Pukaki", url: "https://www.glentanner.co.nz/power-sites/" },
      { name: "Aoraki Court Motel", kind: "lodge", price: 180, note: "village motel if the forecast turns feral" },
    ],
  },
  {
    n: 5, date: "Sun 8 Nov", place: "Lake Pukaki", region: "Mackenzie Basin · Dark Sky Reserve",
    coords: [-44.1700, 170.1200], type: "camp",
    checkin: "2026-11-08", checkout: "2026-11-09", searchTown: "Lake Tekapo",
    stay: { name: "Lake Pukaki Overflow — “The Pines”", price: 0, free: true, imgKey: "camp_pukaki",
            note: "THE famous free one: self-contained vans on the turquoise shore, Aoraki floating at the head of the lake, dead centre of the Dark Sky Reserve. The new moon is TOMORROW — this is the darkest sky of the entire trip, and it costs nothing. One night max, gravelly ground, arrive by ~4 pm for a good spot.",
            url: "https://www.mackenzie.govt.nz/services/parks-venues-and-recreation/camping" },
    alts: [
      { name: "Lake Ruataniwha campground, Twizel", kind: "camp", price: 24, note: "powered rowing-lake sites 20 min south if The Pines is full" },
      { name: "Lake McGregor Campground", kind: "camp", price: 10, note: "basic, beautiful, honesty-box cash", url: "https://www.mackenzie.govt.nz/services/parks-venues-and-recreation/camping" },
    ],
  },
  {
    n: 6, date: "Mon 9 Nov", place: "Queenstown", region: "Lake Wakatipu",
    coords: [-45.0312, 168.6626], type: "lodge",
    checkin: "2026-11-09", checkout: "2026-11-10", searchTown: "Queenstown",
    stay: { name: "Moonlight Escape Lodge", score: 9.8, price: 200, imgKey: "moonlight_escape",
            note: "Adults-only hillside lodge above the Shotover with Remarkables views, five suites only — the big-town night, done properly, after four nights in the van.",
            url: "https://www.moonlightescape.co.nz/" },
    alts: [
      { name: "Kamana Lakehouse", kind: "lodge", price: 195, score: 8.4, note: "highest hotel in town — outdoor hot tubs over Lake Wakatipu", url: "https://kamana.co.nz/" },
      { name: "Manata Homestead & Lodge", kind: "lodge", price: 150, score: 9.1, note: "garden homestead, gentler price" },
      { name: "Hulbert House", kind: "lodge", price: 534, score: 9.7, note: "full splurge: 1888 villa over the bay" },
    ],
  },
  {
    n: 7, date: "Tue 10 Nov", place: "Te Anau", region: "Fiordland gateway",
    coords: [-45.4145, 167.7180], type: "lodge",
    checkin: "2026-11-10", checkout: "2026-11-11", searchTown: "Te Anau",
    stay: { name: "Blue Thistle Cottages", score: 9.6, price: 150, imgKey: "blue_thistle",
            note: "Garden cottages with mountain views on the Milford highway — hot shower, real bed, alarm set for Piopiotahi.",
            url: "https://bluethistlecottages.com/" },
    alts: [
      { name: "Te Anau Haven", kind: "lodge", price: 111, score: 8.9, note: "budget alt near the lakefront" },
      { name: "Tasman Holiday Parks Te Anau", kind: "camp", price: 31, note: "lakeside park if you'd rather keep camping" },
    ],
  },
  {
    n: 8, date: "Wed 11 Nov", place: "Cascade Creek", region: "Eglinton Valley · Fiordland NP",
    coords: [-44.8900, 168.0600], type: "camp",
    checkin: "2026-11-11", checkout: "2026-11-12", searchTown: "Te Anau",
    stay: { name: "Cascade Creek DOC campsite", price: 18, imgKey: "camp_cascade", doc: true,
            note: "Sleep INSIDE Fiordland National Park: red-tussock valley floor under the Earl Mountains, 49 km short of Milford. ⚠ The Oct 2026–Jun 2027 booking window opens THIS MONTH (Aug 2026) — check the DOC portal now and book the instant it appears. Henry Creek is bookable already as the safety net.",
            url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/cascade-creek-campsite/" },
    alts: [
      { name: "Henry Creek DOC campsite", kind: "camp", price: 18, note: "Lake Te Anau shore, 23 km up the Milford Road — bookable NOW", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/campsites/henry-creek-campsite/" },
      { name: "Milford Sound Lodge — powered sites", kind: "camp", price: 35, note: "the only camping AT Milford itself, 20 sites — books out months ahead", url: "https://milfordlodge.com/stay/campervans/" },
      { name: "Eglinton Valley Camp, Knobs Flat", kind: "camp", price: 35, note: "private, with HOT showers + kitchen", url: "https://eglintonvalleycamp.nz/stay/" },
    ],
  },
  {
    n: 9, date: "Thu 12 Nov", place: "Moke Lake", region: "Queenstown backcountry",
    coords: [-45.0044, 168.5550], type: "camp",
    checkin: "2026-11-12", checkout: "2026-11-13", searchTown: "Queenstown",
    stay: { name: "Moke Lake DOC campsite", price: 18, imgKey: "camp_moke", doc: true,
            note: "A horseshoe lake folded into silent hills, 30 minutes from Queenstown and a world away. No cell reception, zero light pollution. Bookings open now to 30 June 2027 — and no spaces are held for anyone turning up without one.",
            url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/queenstown-area/things-to-do/moke-lake-campsite/" },
    alts: [
      { name: "Twelve Mile Delta campsite", kind: "camp", price: 15, note: "Lake Wakatipu terraces on the Glenorchy road — cash, no bookings", url: "https://www.queenstowncamping.co.nz/facilities-rates" },
      { name: "Queenstown Lakeview Holiday Park", kind: "camp", price: 45, note: "town on foot, gondola next door" },
    ],
  },
  {
    n: 10, date: "Fri 13 Nov", place: "Wanaka", region: "Otago lakes",
    coords: [-44.7032, 169.1321], type: "lodge",
    checkin: "2026-11-13", checkout: "2026-11-14", searchTown: "Wanaka",
    stay: { name: "Black Diamond Retreat — Private Spa", score: 10, price: 136, imgKey: "black_diamond",
            note: "A perfect-10 score and a private outdoor spa pool under the mountains. Tomorrow you climb Roy's Peak, so soak tonight.",
            url: "https://www.booking.com/hotel/nz/black-diamond-retreat-private-spa.html" },
    alts: [
      { name: "Scandi Lake-view Studio", kind: "lodge", price: 114, score: 9.0, note: "budget alt with lake views" },
      { name: "Wanaka Homestead Lodge", kind: "lodge", price: 230, score: 9.4, note: "splurge: timber lodge near the lakefront" },
    ],
  },
  {
    n: 11, date: "Sat 14 Nov", place: "Glendhu Bay", region: "Lake Wanaka shore",
    coords: [-44.6680, 168.9990], type: "camp",
    checkin: "2026-11-14", checkout: "2026-11-15", searchTown: "Wanaka",
    stay: { name: "Glendhu Bay Lakeside Holiday Park", price: 35, imgKey: "camp_glendhu",
            note: "Wanaka's only lakefront camp: willow-lined sites staring across the water at Roy's Peak — whose trailhead is five minutes back down the road.",
            url: "https://hampshireholidayparks.co.nz/park/glendhu-holiday-park/" },
    alts: [
      { name: "Albert Town Campground", kind: "camp", price: 12, note: "grassy terraces on the Clutha river, pay-on-arrival", url: "https://hampshireholidayparks.co.nz/park/albert-town-campground/" },
      { name: "Wānaka Rec Centre carpark", kind: "free", price: 0, note: "QLDC designated free spot, 18 spaces, max 2 nights", url: "https://www.qldc.govt.nz/recreation/responsible-camping/" },
    ],
  },
  {
    n: 12, date: "Sun 15 Nov", place: "Franz Josef / Waiau", region: "Glacier country",
    coords: [-43.3870, 170.1833], type: "lodge",
    checkin: "2026-11-15", checkout: "2026-11-16", searchTown: "Franz Josef",
    stay: { name: "Rainforest Retreat — Deluxe Tree Hut", score: 9.0, price: 175, imgKey: "rainforest_treehut",
            note: "Your pick survives another rewrite: a tree-hut suite in the rainforest canopy, glacier up the road. (Base ~NZ$220–350 shoulder-season — November sits below the December peak, but confirm the live rate at booking.)",
            url: "https://rainforest.nz/room/deluxe-tree-hut/" },
    alts: [
      { name: "Te Awa Cottages", kind: "lodge", price: 109, score: 9.2, note: "charming budget alt by the river" },
      { name: "58 On Cron Motel", kind: "lodge", price: 120, score: 8.9, note: "simple, central, spotless" },
    ],
  },
  {
    n: 13, date: "Mon 16 Nov", place: "Lake Mapourika", region: "Westland Tai Poutini NP",
    coords: [-43.3128, 170.2020], type: "camp",
    checkin: "2026-11-16", checkout: "2026-11-17", searchTown: "Franz Josef",
    stay: { name: "Otto's / MacDonalds DOC campsite", price: 18, imgKey: "camp_mapourika", doc: true,
            note: "DOC site on the bush edge of mirror-still Lake Mapourika, 15 min north of Franz Josef. Booking mandatory and open now. Dawn here is absurd.",
            url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/westland-tai-poutini-national-park/things-to-do/campsites/otto-macdonalds-campsite/" },
    alts: [
      { name: "Franz Josef TOP 10 Holiday Park", kind: "camp", price: 38, note: "powered site + hot showers in the village", url: "https://top10.co.nz/park/west-coast/franz-josef-top-10-holiday-park/powered-site/" },
    ],
  },
  {
    n: 14, date: "Tue 17 Nov", place: "Punakaiki", region: "Paparoa National Park",
    coords: [-42.1089, 171.3372], type: "camp",
    checkin: "2026-11-17", checkout: "2026-11-18", searchTown: "Punakaiki",
    stay: { name: "Punakaiki Beach Camp", price: 26, imgKey: "camp_punakaiki",
            note: "Sites in the flax dunes metres from the Tasman, beneath the Paparoa cliffs — fall asleep to surf, wake 700 m from the Pancake Rocks. (~NZ$50 powered for two.)",
            url: "https://www.punakaikibeachcamp.co.nz/" },
    alts: [
      { name: "Fox River freedom camping area", kind: "free", price: 0, note: "river-mouth spot 12 km north — ~5 spots, max 2 nights, toilets", url: "https://bullerdc.govt.nz/recreation/freedom-camping/" },
      { name: "Seal Colony Tourist Park, Westport", kind: "camp", price: 30, note: "if you push on to Cape Foulwind" },
    ],
  },
  {
    n: 15, date: "Wed 18 Nov", place: "Hanmer Springs", region: "Alpine spa village",
    coords: [-42.5215, 172.8278], type: "camp",
    checkin: "2026-11-18", checkout: "2026-11-19", searchTown: "Hanmer Springs",
    stay: { name: "Hanmer Springs TOP 10 Holiday Park", price: 35, imgKey: "camp_hanmer",
            note: "Powered site, heated bathrooms, five minutes' walk from the thermal pools — the reward for the longest driving day of the trip.",
            url: "https://www.hanmerspringstop10.co.nz/accommodation/type/sites" },
    alts: [
      { name: "Hanmer Springs River Reserve", kind: "free", price: 0, note: "council freedom camp on the river terrace — ~10 spots, max 2 nights, flush toilets nearby", url: "https://www.hurunui.govt.nz/rrl/freedom-camping" },
      { name: "Alpine Adventure Holiday Park", kind: "camp", price: 30, note: "quieter forest-edge park" },
    ],
  },
  {
    n: 16, date: "Thu 19 Nov", place: "Kaikōura", region: "Whale coast",
    coords: [-42.4008, 173.6814], type: "lodge",
    checkin: "2026-11-19", checkout: "2026-11-20", searchTown: "Kaikoura",
    stay: { name: "Deerbrooke Kaikōura Chalets", score: 9.8, price: 194, imgKey: "deerbrooke",
            note: "Private chalet, the Kaikōura Range filling the window — super-sized shower and a bath after two weeks of DOC ablution blocks. Two chalets only.",
            url: "https://www.booking.com/hotel/nz/deerbrooke-kaikoura-chalets-unit-1.html" },
    alts: [
      { name: "Dover Terrace Sea-view B&B", kind: "lodge", price: 111, score: 9.0, note: "budget alt, Pacific-view breakfast" },
      { name: "Glenburn Coastal Retreat", kind: "lodge", price: 267, score: 9.9, note: "splurge: coastal farm retreat" },
      { name: "Alpine-Pacific Holiday Park", kind: "camp", price: 30, note: "powered site if you'd rather bank the money" },
    ],
  },
  {
    n: 17, date: "Fri 20 Nov", place: "Christchurch", region: "Ōtautahi",
    coords: [-43.5321, 172.6362], type: "lodge",
    checkin: "2026-11-20", checkout: "2026-11-21", searchTown: "Christchurch",
    stay: { name: "The Observatory Hotel", score: 9.1, price: 175, imgKey: "observatory",
            note: "Boutique hotel inside the Gothic-revival Arts Centre, across the road from the Botanic Gardens — the characterful last night. Show Week crowds have cleared out by the 20th.",
            url: "https://www.booking.com/hotel/nz/the-observatory-christchurch.html" },
    alts: [
      { name: "Orari Boutique Hotel", kind: "lodge", price: 115, score: 9.2, note: "1893 villa, cooked breakfast + evening wine, 3 min from the Gardens", url: "https://www.orari.co.nz/" },
      { name: "The Classic Villa", kind: "lodge", price: 160, note: "the pink Italianate villa opposite the Arts Centre" },
    ],
  },
];

/* ---------- the 17 days ---------- */
const DAYS = [
  {
    n: 1, date: "Wed 4 Nov", title: "Thirty-two hours, then the ground", nightN: 1,
    imgKey: "christchurch2", gallery: ["christchurch2", "christchurch"],
    body: "Not a day so much as a landing. CZ617 comes in over the Canterbury Plains at 17:20, and after biosecurity — which is slow and thorough here, and slower if there's a tent or muddy boots in the bag — you'll be in the arrivals hall around half six, blinking, thirty-two hours out of Amsterdam and twelve hours out of step with your own body. The campervan depot shut at 16:30, which turns out to be a gift: instead of signing for an unfamiliar six-metre vehicle and driving it over a volcano on the wrong side of the road while your brain is still somewhere over the Tasman, you walk two minutes across the forecourt, eat something, and go horizontal. Set an alarm anyway — the point of tonight is to be standing at the depot at eight tomorrow, awake.",
    acts: [
      { name: "Biosecurity — declare the boots, the tent, any food", price: 0, note: "instant NZ$400 fine if you don't; the queue is the slow part" },
      { name: "Grab NZ SIMs / eSIM data at the terminal", price: 15 },
      { name: "Sleep. Genuinely, that's the itinerary.", price: 0 },
    ],
  },
  {
    n: 2, date: "Thu 5 Nov", title: "Touchdown → the French harbour", nightN: 2,
    imgKey: "akaroa", gallery: ["akaroa", "banks_peninsula", "akaroa2"],
    drive: { from: "Christchurch Airport", to: "Akaroa", km: 84, time: "1 h 30 m" },
    body: "At the depot for eight, slept and on New Zealand time — which is the whole reason last night's hotel exists. Sign for the campervan, allow an hour for the briefing (and get the green self-containment warrant confirmed in writing before you drive off), raid a supermarket for the first few days of van food, and then take the kindest first drive imaginable: 84 km south-east, out across the plains and up over the rim of an extinct volcano, before dropping into Akaroa. New Zealand's only French settlement: rues instead of streets, a pastel harbour, the world's smallest dolphins somewhere out in the bay. You arrive by lunchtime instead of late afternoon, so there's a whole afternoon for the Summit Road and the lighthouse. Sunset isn't until half past eight in November. Moules-frites, because of course. Then sleep — you're in the water at nine.",
    acts: [
      { name: "Pick up campervan, CHC Airport (depot opens 08:00)", price: null, note: "allow 1 h for the briefing" },
      { name: "Summit Road viewpoints, Banks Peninsula", price: 0 },
      { name: "Akaroa village & lighthouse stroll", price: 0 },
    ],
  },
  {
    n: 3, date: "Fri 6 Nov", title: "Hector's dolphins → the darkest sky", nightN: 3,
    imgKey: "hectorsdolphin", gallery: ["hectorsdolphin", "akaroa", "tekapo", "tekapo_stars", "mtjohn"],
    drive: { from: "Akaroa", to: "Lake Tekapo", km: 290, time: "3 h 45 m" },
    body: "Morning on the water with Black Cat — swim with (or cruise beside) Hector's dolphins, the world's smallest and rarest, found only here. Your dates sit in settled mid-season now rather than the opening fortnight, so boats are running properly. Climb out of the crater by lunchtime and head west: the famous pie at Fairlie Bakehouse, cheese in Geraldine, then up over Burkes Pass and the moment the Mackenzie Basin opens out in front of you. Tekapo by late afternoon. And tonight is the one you rearranged the whole trip for — the Dark Sky Project's summit tour at Mt John observatory, three days out from a new moon, with your campsite ten minutes down the hill.",
    acts: [
      { name: "Black Cat — swim with Hector's dolphins", price: 125, must: true, url: "https://www.blackcat.co.nz/swimming-with-dolphins/",
        alts: [{ name: "harbour nature cruise (no swim)", price: 65, url: "https://www.blackcat.co.nz/akaroa-harbour-nature-cruise/" }, { name: "Pohatu penguins 4WD tour", price: 63, url: "https://www.pohatu.co.nz/Tours/Penguin+Tours.html" }] },
      { name: "Fairlie Bakehouse pie stop", price: 7 },
      { name: "Dark Sky Project — Summit Experience, Mt John", price: 110, must: true, url: "https://www.darkskyproject.co.nz/experiences/the-summit-experience/",
        alts: [{ name: "Crater Experience (cheaper sibling tour)", price: 65, url: "https://www.darkskyproject.co.nz/experiences/" }, { name: "the sky above your campsite — same Dark Sky Reserve", price: 0 }] },
    ],
  },
  {
    n: 4, date: "Sat 7 Nov", title: "Into Aoraki's shadow", nightN: 4,
    imgKey: "mtcook", gallery: ["mtcook", "tekapo2", "pukaki", "mtcook2"],
    drive: { from: "Lake Tekapo", to: "White Horse Hill, Mt Cook", km: 105, time: "1 h 30 m" },
    body: "A genuinely slow morning for once — the Church of the Good Shepherd before the tour buses, then a long soak at Tekapo Springs looking at the lake you slept beside. The drive west is only ninety minutes, and it contains one of the great pull-over-now moments: SH8 crests, and Lake Pukaki's impossible blue opens up with Aoraki floating at the far end. Turn north on SH80 and follow the water for 55 km into the national park. In mid-November the sun sets close to nine, so golden hour on the Hooker Valley Track starts around seven — three swing bridges to a glacier lake beneath the country's highest mountain. Walk back to the van. You're parked at the trailhead, under Sefton's ice.",
    acts: [
      { name: "Church of the Good Shepherd, Tekapo", price: 0 },
      { name: "Tekapo Springs hot pools", price: 21, url: "https://tekaposprings.co.nz/our-prices/" },
      { name: "Hooker Valley Track (10 km, 3 h, golden hour)", price: 0, must: true },
      { name: "Big Sky Stargazing, the Hermitage (21:30 session)", price: 80, url: "https://www.hermitage.co.nz/experience/big-sky-stargazing/" },
    ],
  },
  {
    n: 5, date: "Sun 8 Nov", title: "Icebergs → the new-moon camp", nightN: 5,
    imgKey: "tasmanglacier", gallery: ["tasmanglacier", "sealytarns", "pukaki", "camp_pukaki"],
    drive: { from: "Mt Cook", to: "Tasman Valley → Lake Pukaki Overflow", km: 70, time: "1 h 15 m total" },
    body: "Morning by energy level: Glacier Explorers boats you among floating icebergs on the Tasman Glacier's terminal lake (season runs 1 Sep–Apr, so November is comfortably in), or it's 2,200 steps up to Sealy Tarns for the look-down over everything you walked yesterday. Lunch is non-negotiable — Aoraki salmon sashimi from the Mt Cook Alpine Salmon shack on Pukaki's shore. Then a short drive to The Pines, park facing up the lake, and wait. Tomorrow is the new moon. There will be no moon at all tonight, you are in the middle of a UNESCO Dark Sky Reserve, and it costs nothing. This is the best night of the trip and it isn't close.",
    acts: [
      { name: "Glacier Explorers — Tasman Glacier lake boat", price: 104, url: "https://www.hermitage.co.nz/experience/glacier-explorers/",
        alts: [{ name: "Sealy Tarns ‘stairway’ (2,200 steps)", price: 0 }, { name: "Tasman Glacier viewpoint walk", price: 0 }] },
      { name: "Mt Cook Alpine Salmon shop, Lake Pukaki", price: 15 },
      { name: "The Milky Way, from your own van", price: 0, must: true },
    ],
  },
  {
    n: 6, date: "Mon 9 Nov", title: "Lindis Pass → Queenstown", nightN: 6,
    imgKey: "lindispass", gallery: ["lindispass", "queenstown", "queenstown2", "kea"],
    drive: { from: "Lake Pukaki", to: "Queenstown", km: 270, time: "3 h 30 m" },
    body: "Unzip the curtains for sunrise on Aoraki across the lake — the best free breakfast view in the country. Then south through the burnt-gold moonscape of Lindis Pass, a fruit-and-icecream stop in Cromwell, and the Kawarau Gorge, where you can wave at whoever is currently upside down beneath the bridge. Queenstown by mid-afternoon. This is the one big-town night: gondola up to Bob's Peak for dinner above the lights, or a private cedar tub at Onsen watching the Shotover canyon go dark. Onsen releases availability well ahead and it's already open through December — book it before you read any further.",
    acts: [
      { name: "Kawarau Bridge bungy viewpoint (watching is free)", price: 0 },
      { name: "Fergburger, Queenstown (trust us)", price: 10 },
      { name: "Skyline Gondola, Bob's Peak", price: 32, url: "https://queenstown.skyline.co.nz/pricing-and-packages/",
        alts: [{ name: "gondola + 3 luge rides combo", price: 50, url: "https://queenstown.skyline.co.nz/pricing-and-packages/" }] },
      { name: "Onsen Hot Pools — private cedar tub for two", price: 44, must: true, url: "https://www.onsen.co.nz/experiences/original-onsen-soak-only/" },
    ],
  },
  {
    n: 7, date: "Tue 10 Nov", title: "Glenorchy → into Fiordland", nightN: 7,
    imgKey: "glenorchy", gallery: ["glenorchy", "paradise_glenorchy", "teanau"],
    drive: { from: "Queenstown", to: "Te Anau via Glenorchy", km: 300, time: "4 h 15 m total" },
    body: "Start with one of the world's great drives and then come back down it: the Glenorchy road, 45 minutes of Lake Wakatipu cliff-edge cinema. Photograph the red wharf shed, take a peek up the Dart Valley towards Paradise (Isengard, if you must), then turn south along the Devil's Staircase and run down through Kingston and Lumsden to Te Anau — Fiordland's quiet lakeside base. Early dinner, fuel up tonight rather than tomorrow, alarm set for quarter past six. Tomorrow is the big one.",
    acts: [
      { name: "Glenorchy wharf & lagoon boardwalk", price: 0 },
      { name: "Dart River Funyaks, Glenorchy (full-day splurge option)", price: 258, url: "https://www.dartriver.co.nz/choose-your-experience/funyaks/" },
      { name: "Ata Whenua — Fiordland on Film (rainy-day gem)", price: 7, url: "https://www.fiordlandcinema.co.nz/" },
    ],
  },
  {
    n: 8, date: "Wed 11 Nov", title: "Milford Sound / Piopiotahi", nightN: 8,
    imgKey: "milford", gallery: ["milford", "milfordroad", "mirrorlakes", "milford2", "homertunnel"],
    drive: { from: "Te Anau", to: "Milford → back to Cascade Creek", km: 165, time: "2 h 45 m driving" },
    body: "Leave by 7:15. The Milford Road is a destination in its own right — the Eglinton Valley's golden flats, Mirror Lakes, the avalanche-country approach to the Homer Tunnel, then the long dark hole through the mountain and THAT reveal on the other side. Cruise beneath Mitre Peak among waterfalls still fat with snowmelt. November has you past the worst of the avalanche-closure season with the falls still running hard — the good half of both worlds. One warning: Fiordland's sandflies properly wake up this month, so repellent is not optional. Tonight you don't leave the park: camp at Cascade Creek and have the Eglinton Valley to yourselves at dusk.",
    acts: [
      { name: "Milford cruise — Mitre Peak Cruises (small boat)", price: 85, must: true, url: "https://www.mitrepeak.com/",
        alts: [{ name: "Pure Milford early/late sailing", price: 76, url: "https://puremilford.co.nz/" }, { name: "RealNZ Signature Cruise", price: 88, url: "https://www.realnz.com/en/experiences/day-cruises/milford-sound-signature-cruise/" }, { name: "Rosco's ‘Morning Glory’ kayak (5.5 h)", price: 170, url: "https://www.roscosmilfordkayaks.com/Our-Adventures/" }, { name: "Milford Mariner OVERNIGHT cruise (cabin, dinner, kayaks)", price: 335, url: "https://www.realnz.com/en/experiences/overnight-cruises/milford-sound-overnight-cruise/" }] },
      { name: "Mirror Lakes · Eglinton Valley · The Chasm stops", price: 0 },
    ],
  },
  {
    n: 9, date: "Thu 12 Nov", title: "Key Summit → a lake of your own", nightN: 9,
    imgKey: "keysummit", gallery: ["keysummit", "milfordroad", "mokelake"],
    drive: { from: "Cascade Creek", to: "Moke Lake", km: 250, time: "3 h 45 m" },
    body: "You wake at the trailhead. Key Summit — the day-walk section of the Routeburn — climbs to alpine tarns with a 360° amphitheatre of Fiordland peaks around you. Three hours return; go early, while the tarns are still glass. Then the long run back: Te Anau for lunch, Devil's Staircase, past Queenstown for supplies and a burger, and finally the escape — a gravel road up into the hills behind the town, where Moke Lake sits as a perfect horseshoe with room for your van beside it. No reception, no light. After Milford's crowds, the silence is the point.",
    acts: [
      { name: "Key Summit Track via the Routeburn (3 h)", price: 0, must: true },
      { name: "Shotover Jet (option, 25 min of madness)", price: 100, url: "https://www.shotoverjet.com/prices/individual/" },
    ],
  },
  {
    n: 10, date: "Fri 13 Nov", title: "Crown Range → Wanaka", nightN: 10,
    imgKey: "cardrona", gallery: ["cardrona", "arrowtown", "wanaka", "wanaka2"],
    drive: { from: "Moke Lake", to: "Wanaka via Arrowtown & the Crown Range", km: 95, time: "2 h 0 m" },
    body: "A short day, deliberately. Morning lap of the Moke Lake loop track, then down into Arrowtown for the gold-rush lanes and the restored Chinese settlement. Up over the Crown Range — New Zealand's highest sealed road, hairpins and a view back over the whole Wakatipu basin — with the mandatory stop at the 1863 Cardrona Hotel for the photograph and a pint. Into Wanaka by mid-afternoon, spa pool by five. (Footnote: today is Canterbury Anniversary Day and the middle of Show Week back in Christchurch, which snarls up that end of the island. You are 400 km away in Otago. Well played.)",
    acts: [
      { name: "Moke Lake loop track (1.5 h)", price: 0 },
      { name: "Arrowtown & the Chinese settlement", price: 0 },
      { name: "Cardrona Hotel stop", price: 0 },
    ],
  },
  {
    n: 11, date: "Sat 14 Nov", title: "Roy's Peak — open, finally", nightN: 11,
    imgKey: "royspeak", gallery: ["royspeak", "wanaka", "glendhubay", "wanaka2"],
    drive: { from: "Wanaka", to: "Glendhu Bay", km: 12, time: "15 m" },
    body: "Here is a straight gift from the calendar. Roy's Peak crosses private farmland and closes every year for lambing from 1 October to 10 November — the October version of this trip would have driven to the trailhead and found the gate shut. It reopened three days ago. So: 16 km, 1,300 metres up, relentless switchbacks, and the most photographed ridgeline in the country waiting at the top. Mid-November hands you around fifteen hours of daylight to do it in. Gentler door: Diamond Lake & Rocky Mountain, half the effort for eighty per cent of the view. Either way, finish at That Wanaka Tree for golden hour, eat on the lakefront, then roll fifteen minutes out to Glendhu Bay and sleep at the foot of the mountain you just climbed.",
    acts: [
      { name: "Roy's Peak Track (16 km, 5–6 h, strong)", price: 0, must: true,
        alts: [{ name: "Diamond Lake & Rocky Mountain (3 h, moderate)", price: 0 }, { name: "Isthmus Peak (the lambing-season stand-in, open year-round)", price: 0 }] },
      { name: "That Wanaka Tree at sunset", price: 0 },
    ],
  },
  {
    n: 12, date: "Sun 15 Nov", title: "Haast Pass → glacier country", nightN: 12,
    imgKey: "bluepools", gallery: ["bluepools", "thundercreek", "haastpass", "lakehawea", "franzjosef"],
    drive: { from: "Glendhu Bay", to: "Franz Josef", km: 285, time: "4 h 0 m + stops" },
    body: "The drive that earns the superlatives, run in reverse. North past Lake Hāwea and The Neck where the two great lakes almost touch, then into Haast Pass: the Blue Pools' glacial glass, Fantail Falls, Thunder Creek. Out the western side into rainforest and onto the coast — Ship Creek's dune and swamp-forest walks, surf hammering below Knights Point — then the long green run north to Franz Josef. Tonight is the tree-hut, and after dark the free glowworm forest walk at the edge of the village.",
    acts: [
      { name: "Blue Pools walk (1 h return)", price: 0, must: true },
      { name: "Thunder Creek Falls & Fantail Falls (roadside)", price: 0 },
      { name: "Ship Creek dune & swamp-forest walks", price: 0 },
      { name: "Glowworm forest walk, Franz Josef (after dark)", price: 0 },
    ],
  },
  {
    n: 13, date: "Mon 16 Nov", title: "Helicopter onto the glacier", nightN: 13,
    imgKey: "franzjosef2", gallery: ["franzjosef2", "franzjosef", "lakematheson", "lakemapourika", "foxglacier"],
    drive: { from: "Franz Josef", to: "Lake Matheson loop → Lake Mapourika", km: 60, time: "1 h 15 m total" },
    body: "The big-ticket morning: a heli-hike drops you ON Franz Josef Glacier for up to 2.5 hours among ice caves and blue crevasses — the only way onto the ice now, and the trip's grand splurge. Cheaper plan: a 25-minute scenic flight with a snow landing. Free plan: the valley walk to the terminal face. All of it is weather-dependent with a full refund if cancelled, so take the first slot of the day — and note you have a second shot tomorrow morning before the drive north, which is exactly why the glaciers sit here in the itinerary. Late afternoon, the Lake Matheson mirror loop for the classic reflection of Aoraki and Tasman, then a dead-quiet DOC night on Lake Mapourika.",
    acts: [
      { name: "Franz Josef heli-hike (4 h, 2.5 h on ice)", price: 450, must: true, url: "https://www.franzjosefglacier.com/choose-your-experience/glacier-heli-hike/",
        alts: [{ name: "Scenic heli + snow landing, 25 min", price: 193, url: "https://www.helicopter.co.nz/franz-josef" }, { name: "Fox Glacier ‘Flying Fox’ heli-hike (3 h ice)", price: 398, url: "https://www.foxguides.co.nz/experiences/flying-fox-heli-hike/" }, { name: "Glacier valley walk", price: 0 }] },
      { name: "Lake Matheson mirror loop (1.5 h, golden hour)", price: 0, must: true },
    ],
  },
  {
    n: 14, date: "Tue 17 Nov", title: "Hokitika Gorge → the wild coast", nightN: 14,
    imgKey: "hokitikagorge", gallery: ["hokitikagorge", "hokitika", "punakaiki", "punakaiki2", "westcoast"],
    drive: { from: "Lake Mapourika", to: "Punakaiki", km: 280, time: "4 h 0 m + stops" },
    body: "If yesterday's flight blew out, this morning is the retry. Otherwise: north through the rainforest to Hokitika — driftwood-sign beach, greenstone carvers, arguably the best pies on the coast — with an inland detour to Hokitika Gorge, where the water is a turquoise that looks colour-graded (free, 45-minute loop, two swing bridges). Then the coast road north of Greymouth with the Tasman on your left and rainforest cliffs on your right. Time your arrival at Punakaiki for high tide, when the Pancake Rocks blowholes detonate. Paddle the limestone gorge of the Pororari if there's light left — there will be. Camp in the dunes, surf all night.",
    acts: [
      { name: "Hokitika Gorge walk & swing bridges", price: 0, must: true },
      { name: "Hokitika beach sign & greenstone galleries", price: 0 },
      { name: "Pancake Rocks & blowholes (high tide)", price: 0, must: true },
      { name: "Truman Track (30 min return)", price: 0 },
      { name: "Waka Puna kayak — Pororari River gorge", price: 25, url: "https://www.wakapuna.co.nz/" },
    ],
  },
  {
    n: 15, date: "Wed 18 Nov", title: "Lewis Pass → thermal water", nightN: 15,
    imgKey: "lewispass", gallery: ["lewispass", "westcoast", "hanmer"],
    drive: { from: "Punakaiki", to: "Hanmer Springs", km: 285, time: "4 h 0 m" },
    body: "The last big transit, and a good one. South down the coast, then inland at Greymouth: coffee in gold-rush Reefton, beech forest, one-lane bridges, and up over Lewis Pass — the quietest of the three alpine crossings and the prettiest in late spring, when the rivers are still loud. Down the far side into the Hurunui and along to Hanmer Springs, arriving with the whole late afternoon spare. Then dissolve two weeks of driving in forty-degree thermal water until the stars come out. Tomorrow is whales.",
    acts: [
      { name: "Reefton — gold-rush main street & coffee", price: 0 },
      { name: "Hanmer Springs Thermal Pools (online saver)", price: 20, must: true, url: "https://hanmersprings.co.nz/buy-online/entry-tickets" },
    ],
  },
  {
    n: 16, date: "Thu 19 Nov", title: "Sperm whales off the canyon", nightN: 16,
    imgKey: "whale", gallery: ["whale", "dolphins_dusky", "kaikoura", "kaikoura2", "seals"],
    drive: { from: "Hanmer Springs", to: "Kaikōura", km: 130, time: "1 h 45 m" },
    body: "A short inland run over the Hundalees brings you to the coast well before lunch, and the timing matters: from November, Whale Watch adds a fourth daily sailing at 3:30 pm on top of 7:15, 10:00 and 12:45. Take an early-afternoon boat. A kilometre-deep ocean canyon sits right offshore, which is why resident sperm whales are here all year, with dusky dolphins and wandering albatross as the warm-up act — 95% sighting rate, 80% refunded if they don't show. And if the sea says no today, you still have tomorrow morning before you drive: the only reason the last two days are laid out this way. Afterwards, Point Kean seals at low tide, crayfish from Nin's Bin up the coast, and a chalet with a bath in it.",
    acts: [
      { name: "Whale Watch Kaikōura (early-afternoon sailing)", price: 88, must: true, url: "https://whalewatch.co.nz/",
        alts: [{ name: "Wings over Whales flight", price: 125, url: "https://www.whales.co.nz/" }, { name: "Dolphin Encounter swim", price: 123, url: "https://www.dolphinencounter.co.nz/" }] },
      { name: "Point Kean seal colony walk", price: 0 },
      { name: "Crayfish at Nin's Bin caravan", price: 25 },
    ],
  },
  {
    n: 17, date: "Fri 20 Nov", title: "Seal coast → Ōtautahi", nightN: 17,
    imgKey: "kaikoura2", gallery: ["kaikoura2", "seals", "christchurch2", "chc_punting"],
    drive: { from: "Kaikōura", to: "Christchurch", km: 180, time: "2 h 30 m" },
    body: "Your spare whale slot, if you need it. If you don't, run 25 km north instead to Ohau Point and meet a few hundred fur seals from the roadside, then turn and drive the coast road south with the Pacific on your left the whole way — the drive you'd have done jet-lagged and blinking on day one if you'd gone the other way round. Into Christchurch by early afternoon: check into the hotel inside the Arts Centre, give the van a well-earned vacuum and empty the tanks, then Riverside Market for dinner and a slow walk through a city that has spent fifteen years rebuilding itself — street art, the cardboard cathedral, New Regent Street's pastel arcade.",
    acts: [
      { name: "Ohau Point seal colony (roadside)", price: 0 },
      { name: "Street art, Transitional Cathedral, New Regent Street", price: 0 },
      { name: "Riverside Market dinner", price: 20, url: "https://riverside.nz/" },
    ],
  },
  {
    n: 18, date: "Sat 21 Nov", title: "A whole last day → home", nightN: null,
    imgKey: "chc_punting", gallery: ["chc_punting", "christchurch", "christchurch2", "banks_peninsula"],
    drive: { from: "Christchurch", to: "Lyttelton / Sumner → CHC Airport", km: 55, time: "1 h 30 m total" },
    body: "The booked flight's one unambiguous gift: CZ618 doesn't leave until 22:30, so this is a real day, not a scramble to an eleven o'clock van return. Keep the camper — the hire is charged to today either way — and use it. Breakfast, then the Botanic Gardens across the road at their late-November peak, deep in roses. After that you have hours to spend: over the Port Hills to Lyttelton for the Saturday farmers' market and the harbour you looked down on from the Summit Road sixteen days ago, or out to Sumner for fish and chips on the beach and a last look at the Pacific. Back into town mid-afternoon for the tram, the cardboard cathedral and a final flat white on New Regent Street. Then refuel, empty the tanks, and hand the keys back by half four — the depot closes at 16:30 and that is a hard edge, the one piece of timing today that isn't relaxed. Shuttle across, dinner airside, wheels up at half ten. Guangzhou tomorrow morning, Amsterdam at 18:35 tomorrow evening. Kia ora, Te Waipounamu — you were ridiculous.",
    acts: [
      { name: "Botanic Gardens", price: 0 },
      { name: "Lyttelton Farmers' Market (Saturdays, 10:00–13:00)", price: 0, url: "https://www.lytteltonfarmersmarket.co.nz/" },
      { name: "Sumner beach + fish & chips", price: 15 },
      { name: "Punting on the Avon (option)", price: 23, url: "https://www.christchurchattractions.nz/punting/",
        alts: [{ name: "tram + gondola + punting day pass", price: 61, url: "https://www.christchurchattractions.nz/packages/" }] },
      { name: "Refuel + return campervan — HARD deadline 16:30", price: null, must: true },
    ],
  },
];

/* ---------- route geometry (approx. road-following, clockwise) ---------- */
const LEGS = [
  { type: "drive", label: "CHC Airport → Akaroa · 84 km", pts: [[-43.4876,172.5374],[-43.5321,172.6362],[-43.62,172.50],[-43.66,172.70],[-43.75,172.85],[-43.8035,172.9683]] },
  { type: "drive", label: "Akaroa → Lake Tekapo · 290 km", pts: [[-43.8035,172.9683],[-43.75,172.85],[-43.66,172.70],[-43.62,172.50],[-43.75,172.27],[-43.91,171.75],[-44.097,171.245],[-44.099,170.83],[-44.0046,170.4771]] },
  { type: "drive", label: "Tekapo → White Horse Hill, Mt Cook · 105 km", pts: [[-44.0046,170.4771],[-44.05,170.35],[-44.10,170.22],[-44.192,170.157],[-44.1700,170.1200],[-44.06,170.11],[-43.90,170.10],[-43.7180,170.0920]] },
  { type: "daytrip", label: "Tasman Valley → Pukaki Overflow · Day 5", pts: [[-43.7180,170.0920],[-43.7250,170.1650],[-43.7180,170.0920],[-43.90,170.10],[-44.06,170.11],[-44.1700,170.1200]] },
  { type: "drive", label: "Pukaki → Queenstown via Lindis Pass · 270 km", pts: [[-44.1700,170.1200],[-44.255,170.10],[-44.486,169.97],[-44.59,169.64],[-44.86,169.21],[-45.038,169.196],[-45.01,168.93],[-45.0312,168.6626]] },
  { type: "drive", label: "Queenstown → Te Anau via Glenorchy · 300 km", pts: [[-45.0312,168.6626],[-44.97,168.50],[-44.8486,168.3852],[-44.97,168.50],[-45.0312,168.6626],[-45.20,168.72],[-45.33,168.71],[-45.55,168.40],[-45.67,168.24],[-45.55,167.95],[-45.4145,167.7180]] },
  { type: "drive", label: "Te Anau → Milford → Cascade Creek · 165 km", pts: [[-45.4145,167.7180],[-45.16,167.85],[-44.97,168.00],[-44.8900,168.0600],[-44.83,168.07],[-44.77,167.99],[-44.6717,167.9256],[-44.77,167.99],[-44.83,168.07],[-44.8900,168.0600]] },
  { type: "drive", label: "Cascade Creek → Moke Lake · 250 km", pts: [[-44.8900,168.0600],[-44.97,168.00],[-45.16,167.85],[-45.4145,167.7180],[-45.55,167.95],[-45.67,168.24],[-45.55,168.40],[-45.33,168.71],[-45.13,168.74],[-45.0312,168.6626],[-45.02,168.60],[-45.0044,168.5550]] },
  { type: "drive", label: "Moke Lake → Wanaka via Crown Range · 95 km", pts: [[-45.0044,168.5550],[-45.02,168.60],[-45.0312,168.6626],[-45.02,168.74],[-44.9410,168.8350],[-44.95,168.91],[-44.8746,168.9882],[-44.7032,169.1321]] },
  { type: "drive", label: "Wanaka → Glendhu Bay · 12 km", pts: [[-44.7032,169.1321],[-44.6680,168.9990]] },
  { type: "drive", label: "Glendhu → Franz Josef via Haast Pass · 285 km", pts: [[-44.6680,168.9990],[-44.7032,169.1321],[-44.61,169.25],[-44.40,169.27],[-44.23,169.23],[-44.158,169.295],[-44.107,169.354],[-44.00,169.10],[-43.881,169.042],[-43.71,169.30],[-43.59,169.59],[-43.3870,170.1833]] },
  { type: "daytrip", label: "Lake Matheson loop → Lake Mapourika · Day 13", pts: [[-43.3870,170.1833],[-43.4646,170.0176],[-43.4480,169.9640],[-43.4646,170.0176],[-43.3870,170.1833],[-43.3128,170.2020]] },
  { type: "drive", label: "Mapourika → Punakaiki via Hokitika Gorge · 280 km", pts: [[-43.3128,170.2020],[-43.3870,170.1833],[-43.26,170.36],[-43.10,170.85],[-42.9469,171.0210],[-42.7170,170.9633],[-42.45,171.21],[-42.35,171.25],[-42.1089,171.3372]] },
  { type: "drive", label: "Punakaiki → Hanmer via Lewis Pass · 285 km", pts: [[-42.1089,171.3372],[-42.35,171.25],[-42.45,171.21],[-42.32,171.55],[-42.12,171.86],[-42.33,172.18],[-42.38,172.24],[-42.45,172.40],[-42.55,172.70],[-42.5215,172.8278]] },
  { type: "drive", label: "Hanmer Springs → Kaikōura · 130 km", pts: [[-42.5215,172.8278],[-42.54,172.95],[-42.62,173.10],[-42.55,173.30],[-42.48,173.55],[-42.4008,173.6814]] },
  { type: "drive", label: "Kaikōura → Christchurch · 180 km", pts: [[-42.4008,173.6814],[-42.52,173.51],[-42.75,173.30],[-42.90,173.05],[-43.10,172.75],[-43.32,172.62],[-43.5321,172.6362]] },
  { type: "daytrip", label: "Lyttelton & Sumner → CHC Airport · Day 18", pts: [[-43.5321,172.6362],[-43.5900,172.7050],[-43.6033,172.7233],[-43.5667,172.7550],[-43.5321,172.6362],[-43.4876,172.5374]] },
];

const POIS = [
  { name: "Christchurch Airport", coords: [-43.4876, 172.5374], kind: "day 1, 2 & 18", note: "Land Wed 4 Nov 17:20 (depot shut) · camper pick-up Thu 5 Nov 08:00 · drop-off Sat 21 Nov by 16:30 · fly 22:30" },
  { name: "Mt John Observatory", coords: [-43.9866, 170.4650], kind: "day 3", note: "Dark Sky Summit tour — 3 days before new moon" },
  { name: "Church of the Good Shepherd", coords: [-44.0035, 170.4730], kind: "day 4", note: "Lake Tekapo" },
  { name: "Hooker Valley Track", coords: [-43.7340, 170.0966], kind: "day 4", note: "Golden hour, straight from your campsite" },
  { name: "Lake Pukaki Overflow — The Pines", coords: [-44.1700, 170.1200], kind: "day 5", note: "Free camp on the eve of the new moon" },
  { name: "Glenorchy", coords: [-44.8486, 168.3852], kind: "day 7", note: "The road in is the point" },
  { name: "Milford Sound / Piopiotahi", coords: [-44.6717, 167.9256], kind: "day 8", note: "Cruise €76–88 · kayak €170" },
  { name: "Roy's Peak trailhead", coords: [-44.6920, 169.0500], kind: "day 11", note: "16 km · 1,300 m up · reopens 11 Nov after lambing" },
  { name: "Blue Pools, Haast Pass", coords: [-44.1580, 169.2950], kind: "day 12", note: "Free, 1 h return" },
  { name: "Franz Josef Glacier heli-hike", coords: [-43.4670, 170.1880], kind: "day 13", note: "€450 pp (snow-landing flight €193)" },
  { name: "Hokitika Gorge", coords: [-42.9469, 171.0210], kind: "day 14", note: "Turquoise water, swing bridges — free" },
  { name: "Pancake Rocks, Punakaiki", coords: [-42.1140, 171.3260], kind: "day 14", note: "Blowholes at high tide — free" },
];

/* ---------- the campervan ---------- */
const CAMPER = {
  summary: "One certified self-contained 2-berth, Christchurch ↔ Christchurch, 16 days — collected 08:00 Thu 5 Nov, back by 16:30 Sat 21 Nov. (Note the hire did NOT get longer when the flights moved: the 4 Nov arrival lands after the depot closes, so that night is a hotel, and the 21 Nov departure is late enough to keep the van all day. Same 16 rental days, more trip.) November is still officially shoulder season (Sep–Nov) — cheaper than the December–February peak — but it is the last month before rates climb, and the October promo window has closed: THL's ‘500FIVE’ deal expired 24 Jul, and Britz's current ‘every 10th day free’ offer only covers travel to 31 Oct 2026. The 5%-off long-hire deal needs 21+ days, so 16 days misses it too. Assume list price, then beat it with a live comparison quote — real November quotes still tend to land under the sticker rates below.",
  days: 16,
  options: [
    { co: "Britz", model: "Venturer · 2-berth coachbuilt", perDay: 190, pick: "value", pickLabel: "the pick — best value",
      note: "Confirmed certified self-contained with a fixed built-in toilet AND shower. Fleet ≤ 2.5 yrs, diesel auto, CHC-airport depot. Excess reduction ≈ NZ$65/day or use a standalone excess policy.",
      url: "https://www.britz.com/nz/en/campervan-hire/2-berth-venturer", imgKey: "van_britz" },
    { co: "Mighty", model: "Deuce · 2-berth", perDay: 150, pick: "save", pickLabel: "smart save",
      note: "Same Sprinter-class body as the Britz, 5+ yr-old fleet — the cheapest real shower/toilet motorhome.",
      url: "https://www.mightycampers.com/nz/en/campervan-hire/2-berth-deuce", imgKey: "van_mighty" },
    { co: "Maui", model: "Ultima · 2-berth premium", perDay: 240, pick: "comfort", pickLabel: "comfort",
      note: "Newest fleet, apartment-grade interior, diesel cabin heating — still welcome on cold Mackenzie and Fiordland nights in November.",
      url: "https://www.maui-rentals.com/motorhome-hire-new-zealand/2-berth-campervan-ultima", imgKey: "van_maui" },
    { co: "Mad Campers", model: "MAD2+ · 2-berth", perDay: 160, pick: "offgrid", pickLabel: "off-grid boutique",
      note: "2024+ builds with 300 W solar + lithium + inverter — built for exactly this trip's nine unpowered and DOC nights. Small fleet, book early.",
      url: "https://www.madcampers.co.nz/mad2plus", imgKey: null },
    { co: "Spaceships", model: "Beta 2S self-contained", perDay: 95, pick: "budget", pickLabel: "shoestring",
      note: "Cheapest legal freedom-camper in NZ (fixed toilet, green warrant), petrol so no road-user charges. No shower — pair with holiday-park nights.",
      url: "https://spaceshipsrentals.co.nz/vehicles/beta-2s-self-contained", imgKey: "van_spaceships" },
  ],
  extras: "Budget the real extras: insurance excess reduction NZ$50–70/day (or a standalone excess policy from Belgium at €5–10/day — usually far cheaper), diesel road-user charges NZ$8 per 100 km (≈ NZ$230 for this loop; petrol vans exempt), bedding usually included at the brands above.",
  compareUrl: "https://www.motorhomerepublic.com/",
};

/* ---------- flights ---------- */
const FLIGHTS = {
  out: { route: "Amsterdam → Christchurch · 1 stop, Guangzhou", date: "Mon 2 Nov 21:40 → Wed 4 Nov 17:20 · 31 h 40" },
  home: { route: "Christchurch → Amsterdam · 1 stop, Guangzhou", date: "Sat 21 Nov 22:30 → Sun 22 Nov 18:35 · 32 h 05" },
  price: 1162,
  options: [
    { tag: "BOOKED ✓ · confirmed", hot: true, name: "China Southern via Guangzhou", price: "€1,162 pp · €2,323 for two",
      note: "Ticketed and confirmed for two. Out AMS Mon 2 Nov 21:40, landing CHC Wed 4 Nov 17:20; home CHC Sat 21 Nov 22:30, into AMS Sun 22 Nov 18:35. The long legs are China Southern's Guangzhou–Christchurch nonstop, back on the map since 26 Oct 2026 and daily on 787s through 27 Mar 2027: inbound CZ617 departs Guangzhou 00:50 and arrives 17:20, outbound CZ618 leaves Christchurch 22:30 and lands Guangzhou 05:20. Two consequences run through this whole plan. The 17:20 arrival is after the campervan depot closes at 16:30, so night 1 is an airport hotel and the van is collected on the morning of the 5th. And the 22:30 departure hands you a genuinely full final day in Christchurch instead of an 11:00 van return. €1,162 pp also came in €131 under the Cathay quote this plan was previously built on.",
      url: "https://www.csair.com/en/" },
  ],
  advice: "Two things still need doing on the flights themselves. First, the Guangzhou ground time: the booked elapsed times (31 h 40 out, 32 h 05 back) minus the known Guangzhou–Christchurch legs imply roughly nine hours on the ground at CAN outbound — arriving mid-afternoon on 3 Nov and not leaving until 00:50 — and something like seven or eight hours on the way home, arriving 05:20 and leaving early afternoon. Confirm the exact AMS–CAN leg times on the ticket, then decide per direction whether you stay airside or clear immigration; nine evening hours in a terminal is a long time, and Guangzhou's airport transit hotels book out. Second, check the entry paperwork for a stop that long — China's visa-free arrangements for Belgian passports and its transit exemptions have both been moving targets, so verify what applies to you on your actual dates rather than trusting anything written here in August. Beyond that: seats, meals and the NZ Traveller Declaration (free, online, within 24 h of departure).",
};

/* ---------- freedom camping rules ---------- */
const CAMP_RULES = {
  headline: "Freedom camping, legally",
  body: "Freedom camping in a vehicle is only legal in a CERTIFIED SELF-CONTAINED van — and since 7 June 2026 only the new GREEN warrant counts (fixed plumbed-in toilet; the old blue cards are void). Your November rental must display one — get it confirmed in writing. With it, the South Island opens up: council free spots like Lake Pukaki, DOC sites from €9 pp, and apps that show every legal spot live.",
  apps: [
    { name: "CamperMate", url: "https://www.campermate.com/", note: "The essential app — every legal site, toilet & dump station, live" },
    { name: "Rankers Camping NZ", url: "https://camping.rankers.co.nz/", note: "Community reviews of every spot" },
    { name: "DOC campsite bookings", url: "https://bookings.doc.govt.nz/", note: "Otto's, Moke Lake & White Horse Hill are bookable now, to 30 Jun 2027 — Cascade Creek releases this month" },
  ],
  fine: "Fines: NZ$400 standard, up to NZ$1,000 for waste dumping — and the spots get checked.",
};

/* ---------- budget (€ per person) ---------- */
const BUDGET = {
  note: "Lodge prices are live Booking.com checks; camp fees, camper rates and activity prices come from the operators' own 2026 published rates (researched June 2026, re-verified July, re-confirmed against the November dates on 3 Aug 2026). Flights are now the ACTUAL BOOKED China Southern fare — €2,323 for two, €1,162 pp — not an estimate. 1 NZD ≈ €0.50. This is the full premium programme — the panel shows how to trim it.",
  total: 4642, trimmed: 3670, heliUpgrade: 257,
  rows: [
    { cat: "Flights AMS ⇄ Christchurch return (China Southern, BOOKED)", pp: 1162 },
    { cat: "Campervan · 16 days + insurance + road charges", pp: 1015 },
    { cat: "Camp nights × 9 (one is free)", pp: 100 },
    { cat: "Lodge nights × 8 (7 boutique picks + the airport landing night)", pp: 670 },
    { cat: "Fuel · 2,730 km diesel (2,925 incl. side trips)", pp: 145 },
    { cat: "Food & drink (the van cooks half the nights, 18 days now)", pp: 670 },
    { cat: "Activities — dolphins, dark sky, Milford, heli, whales…", pp: 695 },
    { cat: "Travel insurance & misc", pp: 185 },
  ],
  saveTips: [
    "Spaceships van instead of Britz: –€512 pp (you lose the onboard shower).",
    "Scenic snow-landing flight → free glacier valley walk: –€193 pp.",
    "Dark Sky Summit tour → the free sky over your Pukaki camp on new-moon eve: –€110 pp.",
    "Dolphin swim → nature cruise: –€60 pp.",
    "Budget lodge alts (Te Awa, Orari, Newton Heights…): –€100 pp.",
  ],
};

/* ---------- booking checklist (in order) ---------- */
const CHECKLIST = [
  { when: "DONE ✓", what: "Flights — China Southern AMS ⇄ Christchurch, 2–22 Nov", why: "Booked and confirmed for two. Land CHC Wed 4 Nov 17:20, fly home Sat 21 Nov 22:30. Everything else on this list is dated off those two times — including the airport hotel below, which exists only because the 17:20 arrival lands after the camper depot shuts", price: "€1,162 pp · €2,323 total", link: "https://www.csair.com/en/" },
  { when: "Book NOW", what: "Airport hotel for the landing night (4 Nov) — new, and required", why: "CZ617 lands 17:20; the Britz/Maui depot closes 16:30 with the last airport shuttle at 16:00, so the van cannot be picked up on arrival day. Sudima and Novotel are both a two-minute walk from the terminal and both are small — a Wednesday in early November is not busy, but book it while you're thinking about it", price: "≈ €140 for two", link: "https://www.sudimahotels.com/hotels/new-zealand/christchurch-airport/" },
  { when: "Book NOW", what: "Cascade Creek DOC campsite (11 Nov) — the release window is THIS MONTH", why: "DOC opens 1 Oct 2026–30 Jun 2027 bookings during August 2026. Check the portal today; book the moment it appears. Henry Creek is the bookable safety net", price: "€18 for two", link: "https://bookings.doc.govt.nz/" },
  { when: "Book NOW", what: "DOC campsites: White Horse Hill (7 Nov) · Moke Lake (12 Nov) · Otto's (16 Nov)", why: "All three confirmed open for booking to 30 Jun 2027. White Horse Hill is DOC's busiest site in the country and no spaces are held for walk-ups", price: "€18–20 /night for two", link: "https://bookings.doc.govt.nz/" },
  { when: "Book NOW", what: "Campervan — 16 days (5–21 Nov), certified self-contained (GREEN warrant, in writing)", why: "November is still shoulder season, but every October promo has expired and none of the current THL deals cover a 16-day November hire — so shop it hard across brands", price: "≈ NZ$150–240/day", link: "https://www.motorhomerepublic.com/" },
  { when: "Book NOW", what: "Onsen Hot Pools private tub, Queenstown (9 Nov evening)", why: "Confirmed: availability is already released through 31 Dec 2026, and the sunset tubs go first. Nothing is stopping you booking this today", price: "€88 /tub for two", link: "https://www.onsen.co.nz/experiences/original-onsen-soak-only/" },
  { when: "Within days", what: "Franz Josef tree-hut (15 Nov) & Queenstown lodge (9 Nov)", why: "Small room counts — Moonlight Escape has five suites. Confirm the live November rate at booking; the tree hut sits below its December peak but above October", price: "€175 / €200", link: "https://rainforest.nz/room/deluxe-tree-hut/" },
  { when: "Within days", what: "Remaining lodges — Akaroa, Te Anau, Wanaka, Kaikōura, Christchurch", why: "Small boutiques with 2–10 rooms. All five confirmed operating and taking 2026 bookings", price: "€115–194 /night", link: null },
  { when: "Aug–Sep", what: "Dark Sky Project Summit Experience, Mt John (6 Nov)", why: "The whole loop was reversed to put this three days before the 9 Nov new moon. NZ$219 is published only to 30 Sep 2026 — reconfirm the November rate when you book", price: "≈ €110 pp", link: "https://www.darkskyproject.co.nz/experiences/the-summit-experience/" },
  { when: "Aug–Sep", what: "Black Cat dolphin swim (6 Nov) + Milford cruise or kayak (11 Nov)", why: "Swim season runs 1 Oct–30 Apr so you're in settled mid-season, 12 swimmers per boat. Mid-morning small boats at Milford go first", price: "€125 / €76–170 pp", link: "https://www.blackcat.co.nz/swimming-with-dolphins/" },
  { when: "Sep", what: "Franz heli-hike (16 Nov, first slot) + Whale Watch (19 Nov, early afternoon)", why: "Both weather-dependent, both deliberately placed so you have a second morning to retry. November adds a 4th daily whale sailing at 15:30", price: "€193–450 / €88 pp", link: "https://whalewatch.co.nz/" },
  { when: "On the ground", what: "Hanmer pools, Tekapo Springs, gondola, Glacier Explorers, punting", why: "Walk-up or day-before online is fine in November — you're ahead of the December peak and outside school holidays", price: "€10–104", link: null },
];

/* ---------- stay finder ---------- */
const FINDER_PLACES = [
  { town: "Christchurch Airport", label: "CHC Airport (landing night)", checkin: "2026-11-04", checkout: "2026-11-05" },
  { town: "Akaroa", label: "Akaroa", checkin: "2026-11-05", checkout: "2026-11-06" },
  { town: "Lake Tekapo", label: "Lake Tekapo", checkin: "2026-11-06", checkout: "2026-11-07" },
  { town: "Mount Cook Village", label: "Aoraki / Mt Cook", checkin: "2026-11-07", checkout: "2026-11-09" },
  { town: "Queenstown", label: "Queenstown (lodge night)", checkin: "2026-11-09", checkout: "2026-11-10" },
  { town: "Te Anau", label: "Te Anau / Milford Road", checkin: "2026-11-10", checkout: "2026-11-12" },
  { town: "Queenstown", label: "Queenstown (Moke Lake night)", checkin: "2026-11-12", checkout: "2026-11-13" },
  { town: "Wanaka", label: "Wanaka", checkin: "2026-11-13", checkout: "2026-11-15" },
  { town: "Franz Josef", label: "Franz Josef", checkin: "2026-11-15", checkout: "2026-11-17" },
  { town: "Punakaiki", label: "Punakaiki", checkin: "2026-11-17", checkout: "2026-11-18" },
  { town: "Hanmer Springs", label: "Hanmer Springs", checkin: "2026-11-18", checkout: "2026-11-19" },
  { town: "Kaikoura", label: "Kaikōura", checkin: "2026-11-19", checkout: "2026-11-20" },
  { town: "Christchurch", label: "Christchurch", checkin: "2026-11-20", checkout: "2026-11-21" },
];
