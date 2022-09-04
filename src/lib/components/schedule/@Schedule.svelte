<script lang="ts">
  import { SCHEDULE } from "@/services/schedule";

  import DayItem from "@/components/schedule/DayItem.svelte";
  import Headline from "@/components/app/Headline.svelte";
</script>

<Headline>Zeitplan</Headline>
<!-- <div class="text-xl">CUMMING SOON 💦</div> -->
<div class="md:mx-10 mt-5">
  {#each SCHEDULE as day}
    <DayItem {day} />
  {/each}
</div>
