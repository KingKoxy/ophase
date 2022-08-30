<script lang="ts">
    import PageBase from "../app/PageBase.svelte";
    import { SCHEDULE } from "../../services/schedule";

    import DayItem from "./DayItem.svelte";
import Headline from "../app/Headline.svelte";
</script>

<PageBase location="/schedule">
    <Headline>Zeitplan</Headline>
    <div class="text-xl">CUMMING SOON 💦</div>
    <!-- <div class="md:mx-10 mt-5">
        {#each SCHEDULE as day}
            <DayItem {day} />
        {/each}
    </div> -->
</PageBase>
