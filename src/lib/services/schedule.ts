export interface IDay {
  name: string;
  events: IEvent[];
}

export interface IEvent {
  title: string;
  start: string;
  location: string;
  locationLink?: string;
}

export const SCHEDULE: IDay[] = [
  {
    name: "Montag",
    events: [
      {
        title: "Begrüßung",
        start: "11:00",
        location: "Forum",
        locationLink: "https://goo.gl/maps/p1acZ4q91mgADVSm7",
      },
      {
        title: "Essen im Oxford",
        start: "12:00",
        location: "Oxford Pub",
        locationLink: "https://goo.gl/maps/tbcHChHENiiFcH1V7",
      },
      {
        title: "Campusführung",
        start: "15:00",
        location: "Ehrenhof",
        locationLink: "https://goo.gl/maps/cGoupo9He7cUk47t5",
      },
      {
        title: "Fachschaftsgrillen",
        start: "18:00",
        location: "Infobau",
        locationLink: "https://goo.gl/maps/WAGkze3PejKyFGik8",
      },
      {
        title: "Cocktails und Cranker Techno in der K2 Bar",
        start: "20:00",
        location: "K2 Bar",
        locationLink: "https://goo.gl/maps/STjW9TXCB3mTVA29A",
      },
    ],
  },
  {
    name: "Dienstag",
    events: [
      {
        title: "KIT-Karten abholen",
        start: "11:00",
        location: "Steinbänke vor der Mensa am Adenauerring",
        locationLink: "https://goo.gl/maps/swf8abqRc8jUmEWz8",
      },
      {
        title: "[kœri]-Frühstück in der Mensa",
        start: "12:00",
        location: "Steinbänke vor der Mensa am Adenauerring",
        locationLink: "https://goo.gl/maps/swf8abqRc8jUmEWz8",
      },
      {
        title: "FBIs",
        start: "14:00",
        location: "Steinbänke vor der Mensa am Adenauerring",
        locationLink: "https://goo.gl/maps/swf8abqRc8jUmEWz8",
      },
      {
        title: "O-Rave mit Grillen und Kürbissuppe",
        start: "16:00",
        location: "Fasanengarten",
        locationLink: "https://goo.gl/maps/UfJLDgcWi3NCcSiQ7",
      },
      {
        title: "Knicklichtpary",
        start: "22:00",
        location: "Hello Club",
        locationLink: "https://g.page/helloclubkarlsruhe?share",
      },
    ],
  },
  {
    name: "Mittwoch 🐸",
    events: [
      {
        title: "O-Rallye",
        start: "11:00",
        location: "<TBD>",
      },
      {
        title: "Flunkyball mit Malibu",
        start: "15:00",
        location: "<TBD>",
      },
      {
        title: "Chilli sin Carne in der K2 Bar",
        start: "18:00",
        location: "K2 Bar",
        locationLink: "https://goo.gl/maps/STjW9TXCB3mTVA29A",
      },
      {
        title: "K2 Barabend",
        start: "21:00",
        location: "K2 Bar",
        locationLink: "https://goo.gl/maps/STjW9TXCB3mTVA29A",
      },
      {
        title: "Techn-O-Phase",
        start: "23:00",
        location: "Die Stadtmitte",
        locationLink: "https://goo.gl/maps/dHWAUQ4GAzncik9E9",
      },
    ],
  },
  {
    name: "Donnerstag",
    events: [
      {
        title: "Frühstück in der Kippe",
        start: "12:00",
        location: "Kippe 23",
        locationLink: "https://goo.gl/maps/jjJVmHM8pADkvVxR7",
      },
      {
        title: "AKK- und AStA-Führung mit Brezeln",
        start: "14:00",
        location: "Vor dem AKK",
        locationLink: "https://goo.gl/maps/vuccuMutMBZgcGKH6",
      },
      {
        title: "Studienberatung",
        start: "16:00",
        location: "Infobau (Raum <TBD>)",
        locationLink: "https://goo.gl/maps/WAGkze3PejKyFGik8",
      },
      {
        title: "Bierpongtunier",
        start: "17:00",
        location: "Infobau",
        locationLink: "https://goo.gl/maps/WAGkze3PejKyFGik8",
      },
      {
        title: "Kalte Platte mit Apthin",
        start: "20:00",
        location: "Infobau (Raum <TBD>)",
        locationLink: "https://goo.gl/maps/WAGkze3PejKyFGik8",
      },
      {
        title: "DonnerstAGO",
        start: "22:00",
        location: "Agostea",
        locationLink: "https://goo.gl/maps/CbE9948oY7ApcCDz5",
      },
    ],
  },
  {
    name: "Freitag",
    events: [
      {
        title: "Flammkuchen Frühstück",
        start: "12:00",
        location: "Marianne's Flammkuchen",
        locationLink: "https://g.page/MariannesFlammkuchenKarlsruhe?share",
      },
      {
        title: "Bierkastenlauf und Grillen",
        start: "14:00",
        location: "<TBD>",
      },
      {
        title: "Kneipentour",
        start: "20:00",
        location: "Garten in Daxlanden",
        locationLink: "https://goo.gl/maps/R31CFS7PvU78JaAJ6",
      },
    ],
  },
  {
    name: "Samstag",
    events: [
      {
        title: "Mädelsbrunch",
        start: "10:00",
        location: "Mathebau UG",
        locationLink: "https://goo.gl/maps/9MLH8ZhSpo65517P6",
      },
      {
        title: "Utopia Brunch",
        start: "12:00",
        location: "<TBD>",
      },
      {
        title: "Abendessen bei Selas und Vorglühen in der K2 Bar",
        start: "18:00",
        location: "K2 Bar",
        locationLink: "https://goo.gl/maps/STjW9TXCB3mTVA29A",
      },
      {
        title: "Gotec",
        start: "23:00",
        location: "Gotec",
        locationLink: "https://goo.gl/maps/WmpdZP3eChwht1jn8",
      },
    ],
  },
  {
    name: "Sonntag",
    events: [
      {
        title: "Wandern",
        start: "12:00",
        location: "<TBD>",
      },
      {
        title: "Abschlussgrillen",
        start: "17:00",
        location: "HaDiKo",
        locationLink: "https://g.page/HaDiKo?share",
      },
    ],
  },
];
