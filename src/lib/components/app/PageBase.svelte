<script lang="ts">
  import BottomNav from "@/components/app/nav/BottomNav.svelte";
  import Header from "@/components/app/nav/Header.svelte";

  let headerHeight = 0,
    footerHeight = 0;
</script>

<Header bind:headerHeight />
<div
  class="w-full flex justify-center dark:text-white p-7 md:p-10 pt-7 xl:pt-0"
>
  <div
    style:margin-top={`${headerHeight}px`}
    style:margin-bottom={`${footerHeight}px`}
    class="xl:w-[60%] w-full"
  >
    <slot />
  </div>
</div>

<BottomNav bind:footerHeight />
