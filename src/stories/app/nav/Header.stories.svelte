<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Header from "@/components/app/nav/Header.svelte";
</script>

<Meta title="Header" component={Header} />

<Template id="Default">
  <Header />
</Template>

<Story name="Default" template="Default" />
