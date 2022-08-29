<script lang="ts">
    import { MoonIcon, SunIcon } from "svelte-feather-icons";
    import { get } from "svelte/store";

    import Nav from "./Nav.svelte";
    import { darkMode } from "../../services/stores";

    export let location: string;

    let headerHeight;
</script>

<div class="fixed w-full flex z-50" bind:clientHeight={headerHeight}>
    <div
        class="md:block hidden bg-grasshopperGreen-700 p-5 rounded-br-xl w-[280px] h-[140px] object-cover z-20 shadow-lg shadow-black/30"
    >
        <img
            src="images/logo.png"
            class="object-contain w-full h-full"
            alt="HIGHtech O-Phasen Logo"
        />
    </div>
    <header class="flex-grow">
        <div
            class="h-[70px] lg:h-[50%] flex justify-between items-center p-4 bg-grasshopperGreen-500 shadow-lg shadow-black/30 z-10"
        >
            <div class="h-full flex items-center">
                <div class="md:hidden h-full mr-3">
                    <img
                        src="images/logo.png"
                        class="object-contain h-full"
                        alt="HIGHtech O-Phasen Logo"
                    />
                </div>
                <Nav active={location} />
            </div>

            <div
                class="flex items-center"
                on:click={() => {
                    darkMode.set(!get(darkMode));
                }}
            >
                {#if $darkMode}
                    <MoonIcon />
                {:else}
                    <SunIcon />
                {/if}
            </div>
        </div>
    </header>
</div>
<div class="md:h-[{headerHeight}px] h-[{headerHeight/2}px]" />
