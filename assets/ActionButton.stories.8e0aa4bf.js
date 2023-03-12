import{l as r,p,v as u,A as m,u as d}from"./vue.esm-bundler.70f8ee4d.js";import{I as b}from"./IconSvg.9134cd12.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import e from"./Drag.542fbe8b.js";const v=["title","id"],o=r({__name:"ActionButton",props:{callback:{required:!0,type:Function},icon:String,active:Boolean,label:String,id:String},setup(t){const n=t,i=l=>{n.callback()};return(l,_)=>(d(),p("button",{class:m({active:t.active}),onMousedown:i,title:n.label,id:n.id},[u(b,{width:20,height:20,path:n.icon,iconColor:"var(--white)"},null,8,["path","iconColor"])],42,v))}});const a=g(o,[["__scopeId","data-v-c0957b78"]]);o.__docgenInfo={exportName:"default",displayName:"ActionButton",description:"",tags:{},props:[{name:"callback",description:"Callback function on click",type:{name:"func"},required:!0},{name:"icon",description:"SVG path",type:{name:"string"}},{name:"active",description:"Add a class active on the button",type:{name:"boolean"}},{name:"label",description:"Display on hover",type:{name:"string"}},{name:"id",type:{name:"string"}}]};const h={title:"Design System/Buttons/ActionButton",component:a,parameters:{storySource:{source:`// Button.stories.js

import ActionsButtons from "./ActionButton.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import Drag from "@/DesignSystem/Icons/List/Drag";
export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  title: "Design System/Buttons/ActionButton",
  component: ActionsButtons,
  parameters: {
    componentSubtitle: "Displays a ActionsButtons button",
  },
} as Meta<typeof ActionsButtons>;

const Template: StoryFn<typeof ActionsButtons> = (args) => ({
  components: { ActionsButtons },

  setup() {
    return { args };
  },
  template: '<ActionsButtons v-bind="args" />',
});

const callback = () => {
  console.log("callBack click");
};
export const Active = Template.bind({});

Active.args = {
  label: "Drag element",
  icon: Drag,
  active: true,
  callback: callback,
};

export const Disable = Template.bind({});

Disable.args = {
  label: "Drag element",
  icon: Drag,
  active: false,
  callback: callback,
};
`,locationsMap:{active:{startLoc:{col:49,line:19},endLoc:{col:2,line:26},startBody:{col:49,line:19},endBody:{col:2,line:26}},disable:{startLoc:{col:49,line:19},endLoc:{col:2,line:26},startBody:{col:49,line:19},endBody:{col:2,line:26}}}},componentSubtitle:"Displays a ActionsButtons button"}},c=t=>({components:{ActionsButtons:a},setup(){return{args:t}},template:'<ActionsButtons v-bind="args" />'}),s=()=>{console.log("callBack click")},B=c.bind({});B.args={label:"Drag element",icon:e,active:!0,callback:s};const y=c.bind({});y.args={label:"Drag element",icon:e,active:!1,callback:s};const S=["Active","Disable"];export{B as Active,y as Disable,S as __namedExportsOrder,h as default};
//# sourceMappingURL=ActionButton.stories.8e0aa4bf.js.map
