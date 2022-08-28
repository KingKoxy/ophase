<script lang="ts">
    import type { IDay, IEvent } from "src/schedule";

    import DayItem from "./DayItem.svelte";

    let week: IDay[] = [
        {
            name: "Montag",
            events: [
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
            ],
        },
        {
            name: "Dienstag",
            events: [
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
            ],
        },
        {
            name: "Mittwoch",
            events: [
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
            ],
        },
        {
            name: "Donnerstag",
            events: [
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
            ],
        },
        {
            name: "Freitag",
            events: [
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
            ],
        },
        {
            name: "Samstag",
            events: [
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
            ],
        },
        {
            name: "Sonntag",
            events: [
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
                createMockEvent(),
            ],
        },
    ];
    function createMockEvent(): IEvent {
        return {
            title: "Mock Event",
            start: Math.floor(Math.random() * 24) + ":00",
            location: "Mock Location",
            locationLink: "https://www.google.com",
        };
    }
</script>

<div class="mx-10 mt-5">
    {#each week as day}
        <DayItem {day} />
    {/each}
</div>
