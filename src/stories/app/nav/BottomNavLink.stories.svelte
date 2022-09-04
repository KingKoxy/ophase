<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import BottomNavLink from "@/components/app/nav/BottomNavLink.svelte";
</script>

<Meta title="BottomNavLink" component={BottomNavLink} />

<Template id="Default">
  <BottomNavLink />
</Template>

<Story name="Default" template="Default" />
