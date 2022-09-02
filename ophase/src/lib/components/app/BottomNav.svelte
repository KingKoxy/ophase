<script lang="ts">
    import {
        CalendarIcon,
        HomeIcon,
        LinkIcon,
        UserIcon,
    } from "svelte-feather-icons";
    import { PAGES } from "../../services/stores";

    import { link } from "svelte-routing";
    export let location: string;
    export let footerHeight;
</script>

<div
bind:clientHeight={footerHeight}
    class="flex sm:hidden select-none items-center justify-evenly bg-grasshopperGreen-500 fixed bottom-0 left-0 right-0 p-3 w-full shadow"
>
    {#each Object.entries(PAGES) as [url, name]}
        <a
            href={url}
            use:link
            class="transform w-[25%] font-semibold {location === url
                ? 'scale-110 text-white'
                : 'scale-90'} flex flex-col items-center hover:text-white transition-all hover:no-underline text-center text-sm "
        >
            {#if url === "/"}
                <HomeIcon />
            {:else if url === "/schedule"}
                <CalendarIcon />
            {:else if url === "/about"}
                <UserIcon />
            {:else}
                <LinkIcon />
            {/if}
            <span class="pt-1">
                {name}
            </span>
        </a>
    {/each}
</div>