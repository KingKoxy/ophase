<script lang="ts">
  import type { IDay } from "@/services/types";
  import { DAY_MAP } from "@/services/types";

  export let day: IDay;
</script>

<div class="text-lg mb-3 font-semibold">{DAY_MAP[day.index]}</div>
<div class="border-gray-500 border-2 border-b-0 mb-10">
  {#each day.events.sort((a, b) => {
    return a.startTime.localeCompare(b.startTime);
  }) as event}
    <div class="border-gray-500 border-b-2 flex">
      <div
        class="w-[64px] flex justify-center items-center p-3 border-gray-500 border-r-2"
      >
        {event.startTime}
      </div>
      <div class="flex-grow p-3 text-sm">
        <div class="text-base">{event.title}</div>
        {#if event.locationLink}
          <div class="text-grasshopperGreen-500">
            <a href={event.locationLink} class="">{event.location}</a>
          </div>
        {:else}
          <p>{event.location}</p>
        {/if}
      </div>
    </div>
  {/each}
</div>
