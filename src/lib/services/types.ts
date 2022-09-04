export const DAY_MAP = {
  0: "Montag",
  1: "Dienstag",
  2: "Mittwoch 🐸",
  3: "Donnerstag",
  4: "Freitag",
  5: "Samstag",
  6: "Sonntag",
};

export interface IScheduleQuery {
  eventCollection: {
    items: {
      title: string;
      startTime: string;
      locationName: string;
      locationGoogleMapsLink: string;
    }[];
  };
}

export interface IDay {
  index: number; // starts with monday: 0, tuesday: 1, ...
  events: IEvent[];
}

export interface IEvent {
  title: string;
  startTime: string;
  location: string;
  locationLink?: string;
}
