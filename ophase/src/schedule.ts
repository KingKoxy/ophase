export interface IDay {
    name: string;
    events: IEvent[];
}

export interface IEvent {
    title: string;
    start: string;
    location: string;
    locationLink: string | null;
}