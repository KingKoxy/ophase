import type { ReadableQuery } from "svelte-apollo";
import type { Readable } from "svelte/store";
import { derived } from "svelte/store";
import { query } from "svelte-apollo";
import { GET_ALL_EVENTS } from "@/services/queries";
import type { IDay, IScheduleQuery } from "@/services/types";
import { DAY_MAP } from "@/services/types";
import { schedule } from "@/services/stores";

export class TransformedQuery<T, S> {
  private readonly query: ReadableQuery<T>;
  private readonly derived: Readable<S>;

  fetch(): Readable<S> {
    return this.derived;
  }

  refetch(variables: any) {
    return this.query.refetch(variables);
  }

  constructor(query: ReadableQuery<T>, transformation: (T) => S) {
    this.query = query;

    this.derived = derived(this.query, (query) => {
      if (query.data) {
        return transformation(query.data);
      }
      return undefined;
    });
  }
}

export function fetchSchedule() {
  //TODO: types
  const QUERY = new TransformedQuery(
    query<IScheduleQuery>(GET_ALL_EVENTS),
    (data) => {
      if (!data) return [] as IDay[];
      let items = data.eventCollection.items;
      let dayMap = new Map<number, any[]>();

      for (const item of items) {
        let date = new Date(item.startTime);
        let startTime = date.toLocaleTimeString(["de"], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //For anyone wondering: https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
        const weekDay = (((date.getDay() - 1) % 7) + 7) % 7;
        const events = dayMap.get(weekDay) ?? [];
        events.push({
          title: item.title,
          startTime,
          location: item.locationName,
          locationLink: item.locationGoogleMapsLink,
        });
        dayMap.set(weekDay, events);
      }

      let days: IDay[] = [];
      for (const [key, value] of dayMap) {
        days.push({
          index: key,
          events: value,
        });
      }
      return days;
    }
  );

  QUERY.fetch().subscribe((data) => {
    if (data) schedule.set(data);
  });
}
