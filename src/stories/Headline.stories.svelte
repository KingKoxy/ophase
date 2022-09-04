<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "@/components/app/Headline.svelte";
</script>

<Meta title="Button" component={Button} />

<Template let:args>
  <Button {...args} />
</Template>

<Story name="Primary" args={{ primary: true }} />
