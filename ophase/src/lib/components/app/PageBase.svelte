<script lang="ts">
    import BottomNav from "./BottomNav.svelte";
    import Header from "./Header.svelte";
    export let location: string;

    let headerHeight, footerHeight;
</script>

<Header {location} bind:headerHeight />
<div
    class=" w-full flex justify-center dark:text-white p-7 md:p-10 pt-7 xl:pt-0"
>
    <div class="mt-[{headerHeight}px] mb-[{footerHeight}px] xl:w-[60%] w-full">
        <slot />
    </div>
</div>

<BottomNav {location} bind:footerHeight/>
