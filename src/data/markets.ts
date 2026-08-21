export type Stall = {
  id: string;
  x: number;
  y: number;
  name: string;
  trade: string;
  status: "open" | "busy" | "closed";
};

export type Cluster = {
  id: string;
  slug: string;
  name: string;
  nameHa: string;
  lga: string;
  specialty: string;
  specialtyHa: string;
  hours: string;
  stalls: number;
  traders: number;
  gmv30: number;
  blurb: string;
  blurbHa: string;
  association: string;
  map: Stall[];
};

export const clusters: Cluster[] = [
  {
    id: "kwari",
    slug: "kantin-kwari",
    name: "Kantin Kwari",
    nameHa: "Kantin Kwari",
    lga: "Kano Municipal",
    specialty: "Textiles, wax print, guinea brocade",
    specialtyHa: "Yadi, ankara, guinea",
    hours: "Sat–Thu 8:00–18:30 · Fri half-day",
    stalls: 2140,
    traders: 1860,
    gmv30: 1.84,
    blurb: "West Africa’s fabric floor. Bales from Sharada mills, rumfa rows A–H, association dues on Fridays.",
    blurbHa: "Babban kasuwar yadi. Daga masana’antun Sharada zuwa rumfunan A–H.",
    association: "Kantin Kwari Traders Association",
    map: [
      { id: "A12", x: 18, y: 22, name: "Aisha Fashion (inlet)", trade: "Ankara", status: "open" },
      { id: "B08", x: 38, y: 28, name: "Stall 214 Umar", trade: "Guinea", status: "busy" },
      { id: "C22", x: 58, y: 24, name: "Hajiya Lami", trade: "Lining", status: "open" },
      { id: "D04", x: 78, y: 32, name: "Kwari Thread", trade: "Notions", status: "open" },
      { id: "E19", x: 28, y: 48, name: "Bello Wax", trade: "Print", status: "closed" },
      { id: "F02", x: 62, y: 52, name: "Gate mill drop", trade: "Bales", status: "busy" },
    ],
  },
  {
    id: "sabon",
    slug: "sabon-gari",
    name: "Sabon Gari",
    nameHa: "Sabon Gari",
    lga: "Fagge",
    specialty: "Electronics, phones, spare parts",
    specialtyHa: "Na’urori, wayoyi, kayan gyara",
    hours: "Mon–Sat 8:00–19:00",
    stalls: 1620,
    traders: 1410,
    gmv30: 2.1,
    blurb: "France Road electronics, phone villages, generator lanes. Agents cash-in for traders who still bank in notes.",
    blurbHa: "Titin France — wayoyi da janareta. Wakilai suna taimakawa da kuɗin hannu.",
    association: "Sabon Gari Electronics Forum",
    map: [
      { id: "FR1", x: 22, y: 30, name: "Baita Electronics", trade: "Inverters", status: "open" },
      { id: "FR8", x: 44, y: 26, name: "Sultan Gadgets", trade: "Phones", status: "busy" },
      { id: "SG4", x: 70, y: 40, name: "Charger lane", trade: "Accessories", status: "open" },
      { id: "GN2", x: 36, y: 54, name: "Genset row", trade: "2.5kVA", status: "open" },
    ],
  },
  {
    id: "dawanau",
    slug: "dawanau",
    name: "Dawanau",
    nameHa: "Dawanau",
    lga: "Dawakin Tofa",
    specialty: "Grains, rice, beans, oil",
    specialtyHa: "Hatsi, shinkafa, wake, mai",
    hours: "Daily 6:00–17:00",
    stalls: 980,
    traders: 740,
    gmv30: 3.2,
    blurb: "Grain corridor. Sack units, truck slots at dawn, mill-to-shop rice for Hotoro restaurants.",
    blurbHa: "Kasuwar hatsi. Buhunan shinkafa da motocin safe.",
    association: "Dawanau Grain Dealers",
    map: [
      { id: "R1", x: 24, y: 28, name: "Arewa Foods bay", trade: "Rice 50kg", status: "busy" },
      { id: "R4", x: 52, y: 22, name: "Beans row", trade: "White beans", status: "open" },
      { id: "T2", x: 74, y: 44, name: "Truck slot 2", trade: "Dispatch", status: "busy" },
      { id: "O1", x: 40, y: 56, name: "Oil drums", trade: "25L", status: "open" },
    ],
  },
  {
    id: "singer",
    slug: "singer-market",
    name: "Singer Market",
    nameHa: "Kasuwar Singer",
    lga: "Fagge",
    specialty: "Tailoring machines, spare parts, notions",
    specialtyHa: "Na’urar dinki, kayan gyara",
    hours: "Mon–Sat 9:00–18:00",
    stalls: 420,
    traders: 310,
    gmv30: 0.41,
    blurb: "Machines and spare parts that keep Kwari tailors running.",
    blurbHa: "Na’urorin dinki na ’yan Kwari.",
    association: "Singer Spare Parts Union",
    map: [
      { id: "S1", x: 30, y: 34, name: "Needle & oil", trade: "Notions", status: "open" },
      { id: "S7", x: 58, y: 42, name: "Motor rewind", trade: "Service", status: "busy" },
    ],
  },
  {
    id: "wambai",
    slug: "kofar-wambai",
    name: "Kofar Wambai",
    nameHa: "Kofar Wambai",
    lga: "Kano Municipal",
    specialty: "Household, plastics, cookware",
    specialtyHa: "Kayan gida da tukwane",
    hours: "Daily 8:00–18:00",
    stalls: 760,
    traders: 640,
    gmv30: 0.62,
    blurb: "City-wall market for household goods feeding neighbourhood shops.",
    blurbHa: "Kasuwar kayan gida kusa da garu.",
    association: "Wambai Traders",
    map: [
      { id: "W3", x: 28, y: 36, name: "Plastic bales", trade: "Household", status: "open" },
      { id: "W9", x: 64, y: 48, name: "Cookware", trade: "Pots", status: "open" },
    ],
  },
  {
    id: "sharada",
    slug: "sharada",
    name: "Sharada Industrial",
    nameHa: "Sharada",
    lga: "Kumbotso",
    specialty: "Mills, power parts, factory gate",
    specialtyHa: "Masana’antu da kayan wuta",
    hours: "Mon–Sat 7:30–17:00",
    stalls: 214,
    traders: 180,
    gmv30: 1.12,
    blurb: "Mill gates that feed Kwari. Agent visits for KYC photos and cash-assist.",
    blurbHa: "Ƙofar masana’antu. Wakilai suna hoto da taimakon kuɗi.",
    association: "Sharada Manufacturers",
    map: [
      { id: "M1", x: 26, y: 30, name: "Kano Textile Mills", trade: "Fabric", status: "busy" },
      { id: "M4", x: 62, y: 46, name: "Power Parts", trade: "Inverters", status: "open" },
    ],
  },
];
