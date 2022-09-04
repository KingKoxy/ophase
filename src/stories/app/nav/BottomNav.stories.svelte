<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import BottomNav from "@/components/app/nav/BottomNav.svelte";
</script>

<Meta title="BottomNav" component={BottomNav} />

<Template id="Default">
  <BottomNav />
</Template>

<Story name="Default" template="Default" />
