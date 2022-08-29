<script lang="ts">
    import { clickOutside } from "../../services/clickOutside";

    import { link } from "svelte-routing";
    import { ChevronDownIcon } from "svelte-feather-icons";

    export let active: string;

    const LINKS = {
        "/": "Home",
        "/schedule": "Wochenplan",
        "/about": "Über uns",
        // "/contact": "Kontakt",
        "/links": "Links",
    };

    console.log(
        Object.entries(LINKS).filter(([url, name]) => {
            return url !== active;
        })
    );

    let showMenu = false;
</script>

<div class="text-lg md:block hidden">
    {#each Object.entries(LINKS) as [url, name], i}
        {#if active !== url}
            <a
                href={url}
                use:link
                class="mx-1 pb-2 hover:no-underline hover:text-white"
            >
                {name}
            </a>
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

<div
    class="block md:hidden relative select-none"
    use:clickOutside
    on:click_outside={() => {
        showMenu = false;
    }}
>
    <div
        class="text-xl font-semibold flex items-center cursor-pointer"
        on:click|stopPropagation={() => {
            showMenu = !showMenu;
        }}
    >
        {LINKS[active]}
        <span
            class="ml-1 flex items-center {showMenu
                ? 'rotate-180'
                : ''} transition-all"
        >
            <ChevronDownIcon />
        </span>
    </div>
    {#if showMenu}
        <div
            class="bg-grasshopperGreen-700 shadow-xl shadow-black/20 absolute w-[180px] p-4 py-2 flex flex-col mt-2 rounded-md "
            style="transform: translateX(-25%);"
        >
            {#each Object.entries(LINKS).filter(([url, name]) => {
                return url !== active;
            }) as [url, name], i}
                {#if active !== url}
                    <a
                        href={url}
                        use:link
                        class="hover:no-underline hover:text-grasshopperGreen-500 my-2 text-white text-lg"
                    >
                        {name} >
                    </a>
                    {#if i !== Object.keys(LINKS).length - 2}
                    <hr class="text-gray-400" />
                    {/if}
                {/if}
            {/each}
        </div>
    {/if}
</div>

<style>
    .rotate-180 {
        transform: rotate(180deg);
    }
</style>
