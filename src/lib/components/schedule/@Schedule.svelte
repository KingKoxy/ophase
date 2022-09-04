<script lang="ts">
  import DayItem from "@/components/schedule/DayItem.svelte";
  import Headline from "@/components/app/Headline.svelte";
  import { schedule } from "@/services/stores.js";
</script>

<Headline>Zeitplan</Headline>
<!-- <div class="text-xl">CUMMING SOON 💦</div> -->
<div class="md:mx-10 mt-5">
  {#each $schedule.sort((a, b) => {
    return a.index - b.index;
  }) as day}
    <DayItem {day} />
  {/each}
</div>
