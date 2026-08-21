"use client";

import { useStore } from "@/lib/store";

export const dict = {
  en: {
    services: "Services",
    how: "How it works",
    marketplace: "Marketplace",
    wholesale: "Wholesale",
    markets: "Markets",
    signIn: "Sign in",
    createBiz: "Create business",
    searchPh: "Search Kano shops & products",
    kanoState: "Kano State",
    marketSub: "Verified shops. Same-day delivery in metro LGAs.",
    advSearch: "Advanced search",
    featured: "Featured businesses",
    popular: "Popular near you",
    clustersTitle: "Kano market clusters",
    clustersSub: "Digital maps of Kantin Kwari, Sabon Gari, Dawanau and more — stalls, not GPS.",
    stalls: "Stalls",
    traders: "Traders",
    hours: "Hours",
    openMap: "Open stall map",
    lang: "Language",
    english: "English",
    hausa: "Hausa",
    agent: "Agent",
    cashAssist: "Cash assist",
    partnerNote: "Cash-in and cash-out are processed by participating licensed financial partners. KanoHub is not a bank.",
    solutions: "Solutions",
    partners: "Partners",
    trust: "Trust",
    merchants: "Merchants",
    riders: "Riders",
    pricing: "Pricing",
  },
  ha: {
    services: "Ayyuka",
    how: "Yadda yake aiki",
    marketplace: "Kasuwa",
    wholesale: "Gidajen sayar da jumla",
    markets: "Kasuwoyi",
    signIn: "Shiga",
    createBiz: "Buɗe kasuwanci",
    searchPh: "Nemi shaguna da kayayyaki na Kano",
    kanoState: "Jihar Kano",
    marketSub: "Shaguna masu tabbaci. Isarwa cikin gari a rana ɗaya.",
    advSearch: "Bincike mai zurfi",
    featured: "Shaguna na musamman",
    popular: "Wanda aka fi saya kusa da kai",
    clustersTitle: "Gungun kasuwannin Kano",
    clustersSub: "Taswirar Kantin Kwari, Sabon Gari, Dawanau da sauransu — rumfuna, ba GPS ba.",
    stalls: "Rumfuna",
    traders: "’Yan kasuwa",
    hours: "Lokacin aiki",
    openMap: "Buɗe taswirar rumfa",
    lang: "Harshe",
    english: "Turanci",
    hausa: "Hausa",
    agent: "Wakili",
    cashAssist: "Taimakon kuɗi",
    partnerNote:
      "Shigar da fitar da kuɗi na hannu ta hanyar abokan hulɗa masu lasisi. KanoHub ba banki ba ne.",
    solutions: "Hanyoyi",
    partners: "Abokan hulɗa",
    trust: "Aminci",
    merchants: "’Yan kasuwa",
    riders: "Masu jigilar kaya",
    pricing: "Farashi",
  },
} as const;

export type I18nKey = keyof typeof dict.en;

export function useT() {
  const { lang } = useStore();
  return (k: I18nKey) => dict[lang][k];
}
