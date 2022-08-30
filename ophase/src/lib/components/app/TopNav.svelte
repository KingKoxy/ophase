<script lang="ts">
    import { PAGES } from "../../services/stores";

    import { link } from "svelte-routing";

    export let active: string;
</script>

<div class="text-lg sm:block hidden">
    {#each Object.entries(PAGES) as [url, name], i}
        {#if active !== url}
            <a
                href={url}
                use:link
                class="mx-1 pb-2 hover:no-underline hover:text-white transition-all"
            >
                {name}
            </a>
        {:else}
            <span class="mx-1 text-white cursor-default font-semibold">
                {name}
            </span>
        {/if}
        {#if i !== Object.keys(PAGES).length - 1}
            <span class="mx-1">|</span>
        {/if}
    {/each}
</div>
<div class="sm:hidden block text-xl font-semibold flex items-center">
    {PAGES[active]}
</div>
