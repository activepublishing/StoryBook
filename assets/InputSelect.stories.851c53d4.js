import{I as t}from"./InputSelect.fa3de9e1.js";import"./vue.esm-bundler.70f8ee4d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const r={title:"Design System/Form/Select",component:t,parameters:{storySource:{source:`// Button.stories.js

import InputSelect from "./InputSelect.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Design System/Form/Select",
  component: InputSelect,
  parameters: {
    componentSubtitle: "Display a InputSelect button",
  },
} as Meta<typeof InputSelect>;

const Template: StoryFn<typeof InputSelect> = (args) => ({
  components: { InputSelect },
  setup() {
    return { args };
  },
  template: '<InputSelect v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  options: ["Value 1", "Value 2", "Value 3", "Value 4"],
  actualValue: "Value 2",
};
`,locationsMap:{default:{startLoc:{col:46,line:18},endLoc:{col:2,line:24},startBody:{col:46,line:18},endBody:{col:2,line:24}}}},componentSubtitle:"Display a InputSelect button"}},n=e=>({components:{InputSelect:t},setup(){return{args:e}},template:'<InputSelect v-bind="args" />'}),o=n.bind({});o.args={options:["Value 1","Value 2","Value 3","Value 4"],actualValue:"Value 2"};const p=["Default"];export{o as Default,p as __namedExportsOrder,r as default};
//# sourceMappingURL=InputSelect.stories.851c53d4.js.map
