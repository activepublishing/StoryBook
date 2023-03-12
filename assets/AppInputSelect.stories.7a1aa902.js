import{l as c,p as a,y as d,G as l,z as g,v as u,A as b,u as p,k as m,C as i,H as v}from"./vue.esm-bundler.70f8ee4d.js";import{I}from"./IconSvg.9134cd12.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import h from"./Reset.e8612679.js";import{a as A,u as B}from"./EditionStore.df7a532c.js";import{I as N}from"./InputSelect.fa3de9e1.js";import"./pinia.1d630759.js";const k={key:0,class:"subtitle"},w=["id"],S=c({__name:"IconsSvg",props:{label:String,icon:{type:String,required:!0},id:String,fill:String,active:{default:!1,type:Boolean}},setup(t){const e=t;return(o,n)=>(p(),a("div",{class:b(["activeButton",e.label&&"withLabel"])},[e.label?(p(),a("span",k,d(e.label),1)):l("",!0),g("button",{class:"unset",id:e.id},[u(I,{width:20,height:20,path:e.icon,iconColor:e.fill},null,8,["path","iconColor"])],8,w)],2))}});const x=y(S,[["__scopeId","data-v-be607d5b"]]);S.__docgenInfo={exportName:"default",displayName:"IconsSvg",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"icon",type:{name:"string"},required:!0},{name:"id",type:{name:"string"}},{name:"fill",type:{name:"string"}},{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};function C(){const t=A(),e=B(),{targets:o}=e;return m(()=>{const n=[];return o.forEach(s=>{const r=t.getElementById(s.id);r&&n.push(r)}),n})}const E=(t,e)=>{C().value.forEach(n=>{n&&(n.properties[t]=e)})},V={key:0,class:"label"},_=c({__name:"AppInputSelect",props:{label:String,properties:Object,propertyName:String,id:String,canReset:Boolean,options:{type:Array,required:!0}},setup(t){const e=t,o=m(()=>e.properties!=null&&e.propertyName!=null&&e.properties[e.propertyName]!=null?e.properties[e.propertyName]:"");function n(r){E(e.propertyName,r)}function s(){e.properties!=null&&e.propertyName!=null&&e.properties[e.propertyName]!=null&&delete e.properties[e.propertyName]}return(r,T)=>(p(),a("div",null,[e.label?(p(),a("label",V,d(t.label),1)):l("",!0),u(N,{options:t.options,actualValue:i(o),onChangeCallback:n},null,8,["options","actualValue"]),e.canReset?(p(),v(x,{key:1,onClick:s,icon:i(h)},null,8,["icon"])):l("",!0)]))}});const f=y(_,[["__scopeId","data-v-a095d381"]]);_.__docgenInfo={exportName:"default",displayName:"AppInputSelect",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"properties",type:{name:"object"}},{name:"propertyName",type:{name:"string"}},{name:"id",type:{name:"string"}},{name:"canReset",type:{name:"boolean"}},{name:"options",type:{name:"Array<string>"},required:!0}]};const O={title:"Components/Bases/AppInputSelect",component:f,parameters:{storySource:{source:`// Button.stories.js

import AppInputSelect from "./AppInputSelect.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Bases/AppInputSelect",
  component: AppInputSelect,
  parameters: {
    componentSubtitle:
      "Displays a AppInputSelect with icon from front awesome with callback on click",
  },
} as Meta<typeof AppInputSelect>;

const Template: StoryFn<typeof AppInputSelect> = (args) => ({
  components: { AppInputSelect },
  setup() {
    return { args };
  },
  template: '<AppInputSelect v-bind="args" />',
});

export const BorderStyle = Template.bind({});
BorderStyle.args = {
  property: { "border-style": "none" },
  label: "Border type",
  propertyName: "border-style",
  options: ["none", "dotted", "solid", "double", "dashed"],
};
`,locationsMap:{"border-style":{startLoc:{col:49,line:19},endLoc:{col:2,line:25},startBody:{col:49,line:19},endBody:{col:2,line:25}}}},componentSubtitle:"Displays a AppInputSelect with icon from front awesome with callback on click"}},D=t=>({components:{AppInputSelect:f},setup(){return{args:t}},template:'<AppInputSelect v-bind="args" />'}),F=D.bind({});F.args={property:{"border-style":"none"},label:"Border type",propertyName:"border-style",options:["none","dotted","solid","double","dashed"]};const P=["BorderStyle"];export{F as BorderStyle,P as __namedExportsOrder,O as default};
//# sourceMappingURL=AppInputSelect.stories.7a1aa902.js.map
