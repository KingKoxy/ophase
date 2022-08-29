<script lang="ts">
    import { Link } from "svelte-navigator";

    export let active: string;

    const LINKS = {
        "/": "Home",
        "/schedule": "Wochenplan",
        "/about": "Über uns",
        // "/contact": "Kontakt",
        "/links": "Links",
    };
</script>

<div class="text-lg">
    {#each Object.entries(LINKS) as [link, name], i}
        {#if active !== link}
            <Link to={link}>
                <span class="mx-1 pb-2">
                    {name}
                </span>
            </Link>
        {:else}
            <span class="mx-1 text-white cursor-default font-semibold">
                {name}
            </span>
        {/if}
        {#if i !== Object.keys(LINKS).length - 1}
            <span class="mx-1">|</span>
        {/if}
    {/each}
</div>
