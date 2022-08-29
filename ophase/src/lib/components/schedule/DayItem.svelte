<script lang="ts">
    import type { IDay } from "src/lib/services/schedule";

    export let day: IDay;
</script>

<div class="text-lg mb-3 font-semibold">{day.name}</div>
<div class="border-gray-500 border-2 border-b-0 mb-10">
    {#each day.events as event}
        <div class="border-gray-500 border-b-2 grid grid-cols-12">
            <div
                class="col-span-1 flex justify-center items-center p-3 border-gray-500 border-r-2"
            >
                {event.start}
            </div>
            <div class="col-span-10 p-3 text-sm">
                <div class="text-base">{event.title}</div>
                {#if event.locationLink}
                <div class="text-grasshopperGreen-500">
                    <a href={event.locationLink}>{event.location}</a>
                </div>
                {:else}
                    <p>{event.location}</p>
                {/if}
            </div>
        </div>
    {/each}
</div>
