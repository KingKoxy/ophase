<script lang="ts">
    import {
        CalendarIcon,
        HomeIcon,
        LinkIcon,
        UserIcon,
    } from "svelte-feather-icons";

    import { Link } from "svelte-routing";

    export let url, name: string;
    let active = false;
    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        // The object returned here is spread on the anchor element's attributes
        active = isCurrent;
        return {};
    }
</script>

<Link
    to={url}
    {getProps}
    class="mx-1 pb-2 hover:no-underline hover:text-white transition-all {active
        ? 'text-white font-semibold'
        : ''}"
>
    <slot />
</Link>

<Link
    to={url}
    class="transform w-[25%] font-semibold {active
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
</Link>
