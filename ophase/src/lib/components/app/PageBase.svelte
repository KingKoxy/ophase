<script lang="ts">
    import Header from "./Header.svelte";
    export let location: string;
</script>

<Header {location}/>
<div class="w-full flex justify-center dark:text-white p-10 pt-7 xl:pt-0">
    <div class="xl:w-[60%] w-full">
        <slot />
    </div>
</div>
