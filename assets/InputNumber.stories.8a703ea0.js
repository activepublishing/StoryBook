import{I as t}from"./InputNumber.6b4e096b.js";import"./vue.esm-bundler.70f8ee4d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const p={title:"Design System/Form/InputNumber",component:t,parameters:{storySource:{source:`// Button.stories.js

import InputNumber from "./InputNumber.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Design System/Form/InputNumber",
  component: InputNumber,
  parameters: {
    componentSubtitle: "Display a InputNumber button",
  },
} as Meta<typeof InputNumber>;

const Template: StoryFn<typeof InputNumber> = (args) => ({
  components: { InputNumber },
  setup() {
    return { args };
  },
  template: '<InputNumber v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // options: ["Value 1", "Value 2", "Value 3", "Value 4"],
  // actualValue: "Value 2",
};
`,locationsMap:{default:{startLoc:{col:46,line:18},endLoc:{col:2,line:24},startBody:{col:46,line:18},endBody:{col:2,line:24}}}},componentSubtitle:"Display a InputNumber button"}},n=e=>({components:{InputNumber:t},setup(){return{args:e}},template:'<InputNumber v-bind="args" />'}),o=n.bind({});o.args={};const s=["Default"];export{o as Default,s as __namedExportsOrder,p as default};
//# sourceMappingURL=InputNumber.stories.8a703ea0.js.map
