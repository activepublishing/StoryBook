import{B as t}from"./ButtonLabel.454eb813.js";import"./vue.esm-bundler.70f8ee4d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const i={title:"Design System/Buttons/ButtonLabel",component:t,parameters:{storySource:{source:`// Button.stories.js

import ButtonLabel from "./ButtonLabel.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Design System/Buttons/ButtonLabel",
  component: ButtonLabel,

  parameters: {
    componentSubtitle: "Displays a ButtonLabel button",
  },
} as Meta<typeof ButtonLabel>;

const Template: StoryFn<typeof ButtonLabel> = (args) => ({
  components: { ButtonLabel },
  setup() {
    return { args };
  },
  template: '<ButtonLabel v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Export Indesign",
  textColor: "var(--white)",
  fontSize: "14px",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Export Indesign",
  textColor: "var(--white)",
  backgroundColor: "var(--secondary)",
  fontSize: "14px",
};
`,locationsMap:{primary:{startLoc:{col:46,line:20},endLoc:{col:2,line:26},startBody:{col:46,line:20},endBody:{col:2,line:26}},secondary:{startLoc:{col:46,line:20},endLoc:{col:2,line:26},startBody:{col:46,line:20},endBody:{col:2,line:26}}}},componentSubtitle:"Displays a ButtonLabel button"}},n=o=>({components:{ButtonLabel:t},setup(){return{args:o}},template:'<ButtonLabel v-bind="args" />'}),e=n.bind({});e.args={label:"Export Indesign",textColor:"var(--white)",fontSize:"14px"};const r=n.bind({});r.args={label:"Export Indesign",textColor:"var(--white)",backgroundColor:"var(--secondary)",fontSize:"14px"};const p=["Primary","Secondary"];export{e as Primary,r as Secondary,p as __namedExportsOrder,i as default};
//# sourceMappingURL=ButtonLabel.stories.1cc0adc7.js.map
