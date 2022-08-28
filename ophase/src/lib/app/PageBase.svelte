<script>
    import Header from "../../lib/app/Header.svelte";
</script>

<Header active="/home"/>
<div class="w-full flex justify-center mt-5 dark:text-white">
    <div class="w-[50%]">
        <slot />
    </div>
</div>
