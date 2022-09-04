<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Headline from "@/components/app/Headline.svelte";
</script>

<Meta title="Headline" component={Headline} />

<Template id="Default">
  <Headline>Test</Headline>
</Template>

<Template id="Empty">
  <Headline />
</Template>

<Template id="LongText">
  <Headline
    >Lorem ipsum dolor sit amet consecetur amici amet et frater dolci est. Cur
    est oculus dolens.
  </Headline>
</Template>

<Story name="Default" template="Default" />
<Story name="Empty" template="Empty" />
<Story name="Long Text" template="LongText" />
