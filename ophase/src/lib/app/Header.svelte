<script lang="ts">
    import Nav from "./Nav.svelte";
    import { MoonIcon, SunIcon } from "svelte-feather-icons";

    import { darkMode } from "../../stores";
    import { get } from "svelte/store";

    export let active: string;
</script>

<div class="fixed w-full flex">
    <div
        class="bg-grasshopperGreen-700 p-3 rounded-br-xl w-[250px] h-[120px] object-cover z-20 shadow-lg shadow-black/30"
    >
        <img
            src="images/logo.png"
            class="object-contain w-full h-full"
            alt="HIGHtech O-Phasen Logo"
        />
    </div>
    <div class="flex-grow">
        <div
            class="h-[50%] flex justify-between items-center p-4 bg-grasshopperGreen-500 shadow-lg shadow-black/30 z-10"
        >
            <Nav {active} />
            <div
                class="flex items-center"
                on:click={() => {
                    darkMode.set(!get(darkMode));
                }}
            >
                {#if !$darkMode}
                    <MoonIcon />
                {:else}
                    <SunIcon />
                {/if}
            </div>
        </div>
    </div>
</div>
<div class="h-[120px]" />
