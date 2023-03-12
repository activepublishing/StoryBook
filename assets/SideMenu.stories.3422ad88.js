import{l as M,r as c,p as i,z as d,H as b,C as x,G as m,F as y,q as k,A as C,y as v,u as o,v as L}from"./vue.esm-bundler.70f8ee4d.js";import{I as S}from"./IconSvg.9134cd12.js";import h from"./ArrowLeft.354ad175.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import D from"./Capital.b60bb338.js";import B from"./StyleLibrary.aa5c8baf.js";import z from"./Layers.9d3b6e0e.js";import F from"./Front.ad5274aa.js";import w from"./Resize.fda168a4.js";const E=["onMouseover","onClick"],H={class:"label-content"},N={key:0,class:"panelTitle"},T={key:0,class:"subtitle"};c([]);const f=M({__name:"SideHeaderMenu",props:{list:Array,onInteraction:{type:Function,required:!1}},setup(r){const s=r,a=c(null),n=c(null),p=(u,t)=>{t.preventDefault(),n.value=u,s.onInteraction&&s.onInteraction(n)};return(u,t)=>(o(),i(y,null,[d("div",{class:C([n.value?"displayRow":"displayColumn","menuWrapper"])},[n.value?(o(),b(S,{key:0,class:"restore-menu",path:x(h),iconColorHover:"var(--primary)",onClick:t[0]||(t[0]=e=>p("",e))},null,8,["path","iconColorHover"])):m("",!0),(o(!0),i(y,null,k(s.list,e=>(o(),i("div",{key:e.name,class:"label",onMouseover:l=>a.value=e.name,onMouseleave:t[1]||(t[1]=l=>a.value=null),onClick:l=>p(e.name,l)},[d("div",H,[L(S,{path:e.icon,iconColor:a.value===e.name||n.value===e.name&&!a.value?"var(--primary)":"var(--white)"},null,8,["path","iconColor"]),n.value?m("",!0):(o(),i("span",N,v(e.name),1))])],40,E))),128))],2),n.value?(o(),i("div",T,v(a.value||n.value),1)):m("",!0)],64))}});const g=I(f,[["__scopeId","data-v-6ee17069"]]);f.__docgenInfo={exportName:"default",displayName:"SideHeaderMenu",description:"",tags:{},props:[{name:"list",description:"an array of Object with path icon and label to display",type:{name:"PanelMenu[]"}},{name:"onInteraction",description:"a callback function, get string label of current menu",type:{name:"func"},required:!1}]};const J={title:"Design System/Navigation/SideMenu",component:g,parameters:{storySource:{source:`// Button.stories.js

import SideMenu from "./SideHeaderMenu.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import Capital from "@/DesignSystem/Icons/List/Capital";
import StyleLibrary from "@/DesignSystem/Icons/List/StyleLibrary";
import Layers from "@/DesignSystem/Icons/List/Layers";
import Front from "@/DesignSystem/Icons/List/Front";
import Resize from "@/DesignSystem/Icons/List/Resize";

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Design System/Navigation/SideMenu",
  component: SideMenu,
  parameters: {
    componentSubtitle: "Displays a SideMenu",
  },
} as Meta<typeof SideMenu>;

const Template: StoryFn<typeof SideMenu> = (args) => ({
  components: { SideMenu },
  setup() {
    return { args };
  },
  template: '<SideMenu v-bind="args" />',
});

export const Example = Template.bind({});
Example.args = {
  list: [
    { icon: Capital, name: "Size & Alignment" },
    { icon: Front, name: "Spacing" },
    { icon: StyleLibrary, name: "Background" },
    { icon: Layers, name: "Text" },
    { icon: Resize, name: "Style" },
  ],
};
Example.decorators = [
  () => ({ template: '<div style="width: 210px;"><story/></div>' }),
];
`,locationsMap:{example:{startLoc:{col:43,line:23},endLoc:{col:2,line:29},startBody:{col:43,line:23},endBody:{col:2,line:29}}}},componentSubtitle:"Displays a SideMenu"}},A=r=>({components:{SideMenu:g},setup(){return{args:r}},template:'<SideMenu v-bind="args" />'}),_=A.bind({});_.args={list:[{icon:D,name:"Size & Alignment"},{icon:F,name:"Spacing"},{icon:B,name:"Background"},{icon:z,name:"Text"},{icon:w,name:"Style"}]};_.decorators=[()=>({template:'<div style="width: 210px;"><story/></div>'})];const K=["Example"];export{_ as Example,K as __namedExportsOrder,J as default};
//# sourceMappingURL=SideMenu.stories.3422ad88.js.map
