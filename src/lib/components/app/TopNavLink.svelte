<script lang="ts">
  import { Link } from "svelte-routing";

  export let url: string;
  let active = false;

  function getProps({ isCurrent }) {
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
