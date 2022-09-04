<script lang="ts">
  import { PAGES } from "@/services/stores";

  import BottomNavLink from "@/components/app/BottomNavLink.svelte";

  export let footerHeight: number;
</script>

<div
  bind:clientHeight={footerHeight}
  class="flex sm:hidden select-none items-center justify-evenly bg-grasshopperGreen-500 fixed bottom-0 left-0 right-0 p-3 w-full shadow"
>
  {#each Object.entries(PAGES) as [url, name]}
    <BottomNavLink {url} {name} />
  {/each}
</div>
