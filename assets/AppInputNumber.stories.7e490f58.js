import{l as i,k as m,p,y as c,G as f,v as d,C as y,A as b,u as a}from"./vue.esm-bundler.70f8ee4d.js";import{I as N}from"./InputNumber.6b4e096b.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const I={key:0,class:"labelGrid"},r=i({__name:"AppInputNumber",props:{properties:null,propertyName:null,id:null,label:null,unit:{default:"mm"},float:{type:Boolean,default:!1},step:{default:1},canReset:{type:Boolean,default:!1}},setup(n){const e=n,l=m(()=>{const t=e.properties[e.propertyName];if(!!t)return e.float?parseFloat(t):parseInt(t)});function u(t){e.properties[e.propertyName]=t+e.unit}return(t,S)=>(a(),p("div",{class:b(["number-input",e.canReset?"withReset":""])},[e.label?(a(),p("label",I,c(n.label),1)):f("",!0),d(N,{value:y(l),step:e.step,onChangeCallback:u},null,8,["value","step"])],2))}});const o=g(r,[["__scopeId","data-v-78ae765d"]]);r.__docgenInfo={exportName:"default",displayName:"AppInputNumber",description:"",tags:{},props:[{name:"properties",required:!0,type:{name:"{ [key: string]: string }"}},{name:"propertyName",required:!0,type:{name:"string"}},{name:"id",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"unit",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"mm"'}},{name:"float",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"canReset",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"newProperties",defaultValue:{func:!1,value:"Object"}}]};const k={title:"Components/Bases/AppInputNumber",component:o,parameters:{storySource:{source:`// Button.stories.js

import AppInputNumber from "./AppInputNumber.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Bases/AppInputNumber",
  component: AppInputNumber,
  parameters: {
    componentSubtitle:
      "Displays a AppInputNumber with icon from front awesome with callback on click",
  },
} as Meta<typeof AppInputNumber>;

const Template: StoryFn<typeof AppInputNumber> = (props) => ({
  components: { AppInputNumber },
  setup() {
    return { props };
  },

  template: \`<AppInputNumber :property="props.property" :propertyName="props.propertyName" :label="props.label" :unit="props.unit" :float="props.float" :step="props.step" :canReset="props.canReset"/>\`,
});

export const Integer = Template.bind({});
Integer.args = {
  property: { Size: "22mm" },
  propertyName: "Size",
  label: "Size",
  unit: "mm",
  float: false,
  step: 10,
  canReset: false,
};

export const Float = Template.bind({});
Float.args = {
  property: { Size: "7.2pt" },
  propertyName: "Size",
  label: "Size",
  unit: "pt",
  float: true,
  step: 0.1,
  canReset: true,
};
`,locationsMap:{integer:{startLoc:{col:49,line:19},endLoc:{col:2,line:26},startBody:{col:49,line:19},endBody:{col:2,line:26}},float:{startLoc:{col:49,line:19},endLoc:{col:2,line:26},startBody:{col:49,line:19},endBody:{col:2,line:26}}}},componentSubtitle:"Displays a AppInputNumber with icon from front awesome with callback on click"}},s=n=>({components:{AppInputNumber:o},setup(){return{props:n}},template:'<AppInputNumber :property="props.property" :propertyName="props.propertyName" :label="props.label" :unit="props.unit" :float="props.float" :step="props.step" :canReset="props.canReset"/>'}),_=s.bind({});_.args={property:{Size:"22mm"},propertyName:"Size",label:"Size",unit:"mm",float:!1,step:10,canReset:!1};const v=s.bind({});v.args={property:{Size:"7.2pt"},propertyName:"Size",label:"Size",unit:"pt",float:!0,step:.1,canReset:!0};const R=["Integer","Float"];export{v as Float,_ as Integer,R as __namedExportsOrder,k as default};
//# sourceMappingURL=AppInputNumber.stories.7e490f58.js.map
