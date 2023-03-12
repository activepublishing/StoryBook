import{A as e}from"./ActiveSelect.4178b767.js";import"./vue.esm-bundler.70f8ee4d.js";import"./EditionStore.df7a532c.js";import"./pinia.1d630759.js";import"./IconSvg.9134cd12.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ArrowLeft.354ad175.js";import"./ArrowLeftEnd.b1de3920.js";import"./ArrowRightEnd.4ba6bad1.js";import"./ArrowRight.8efa4011.js";import"./InputSelect.fa3de9e1.js";const f={title:"Components/ActiveSelect",component:e,parameters:{storySource:{source:`// Button.stories.js

import ActiveSelect from "./ActiveSelect.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/ActiveSelect",
  component: ActiveSelect,
  parameters: {
    componentSubtitle: "Displays an ActiveSelect ",
  },
} as Meta<typeof ActiveSelect>;

const Template: StoryFn<typeof ActiveSelect> = (props) => ({
  components: { ActiveSelect },
  setup() {
    return { props };
  },

  template: \`<ActiveSelect :property="props.property" :propertyName="props.propertyName" :label="props.label" :unit="props.unit" :float="props.float" :step="props.step" :canReset="props.canReset"/>\`,
});

export const Base = Template.bind({});
Base.args = {
  propertyName: "Size",
  label: "Size",
  unit: "mm",
  float: false,
  step: 10,
  canReset: false,
};
`,locationsMap:{base:{startLoc:{col:47,line:18},endLoc:{col:2,line:25},startBody:{col:47,line:18},endBody:{col:2,line:25}}}},componentSubtitle:"Displays an ActiveSelect "}},o=t=>({components:{ActiveSelect:e},setup(){return{props:t}},template:'<ActiveSelect :property="props.property" :propertyName="props.propertyName" :label="props.label" :unit="props.unit" :float="props.float" :step="props.step" :canReset="props.canReset"/>'}),p=o.bind({});p.args={propertyName:"Size",label:"Size",unit:"mm",float:!1,step:10,canReset:!1};const v=["Base"];export{p as Base,v as __namedExportsOrder,f as default};
//# sourceMappingURL=ActiveSelect.stories.04a2fc23.js.map
