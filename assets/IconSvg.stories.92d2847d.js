import{I as o}from"./IconSvg.9134cd12.js";import t from"./ArrowRight.8efa4011.js";import"./vue.esm-bundler.70f8ee4d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const c={title:"Design System/Icons/IconSvg.vue",component:o,parameters:{storySource:{source:`// Button.stories.js

import IconSvg from "./IconSvg.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import horizontalAlign from "./List/ArrowRight";
export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Design System/Icons/IconSvg.vue",
  component: IconSvg,
  parameters: {
    componentSubtitle: "Displays a SVG icon with path in props",
  },
} as Meta<typeof IconSvg>;

const Template: StoryFn<typeof IconSvg> = (args) => ({
  components: { IconSvg },
  setup() {
    return { args };
  },
  template: '<IconSvg v-bind="args" />',
});

export const Example = Template.bind({});
Example.args = {
  path: horizontalAlign,
};
`,locationsMap:{example:{startLoc:{col:42,line:18},endLoc:{col:2,line:24},startBody:{col:42,line:18},endBody:{col:2,line:24}}}},componentSubtitle:"Displays a SVG icon with path in props"}},e=n=>({components:{IconSvg:o},setup(){return{args:n}},template:'<IconSvg v-bind="args" />'}),r=e.bind({});r.args={path:t};const l=["Example"];export{r as Example,l as __namedExportsOrder,c as default};
//# sourceMappingURL=IconSvg.stories.92d2847d.js.map
