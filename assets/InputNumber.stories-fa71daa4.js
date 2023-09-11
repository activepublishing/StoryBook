import{q as d,s as _,B as a,v as f,D as b,E as v}from"./vue.esm-bundler-a0839515.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const n=e=>(b("data-v-a95f0e25"),e=e(),v(),e),I=["value","step"],N=n(()=>a("span",{class:"bottom"},null,-1)),h=n(()=>a("span",{class:"right"},null,-1)),y=n(()=>a("span",{class:"top"},null,-1)),C=n(()=>a("span",{class:"left"},null,-1)),c=d({__name:"InputNumber",props:{value:{type:Number,required:!1,default:0},step:{type:Number,required:!1,default:1},onChangeCallback:{type:Function,required:!0}},setup(e){const s=e,i=r=>{const u=r.target;s.onChangeCallback(u.value)};return(r,u)=>(f(),_("div",null,[a("input",{type:"number",class:"input",value:s.value,step:s.step,onInput:i,ref:"inputRefElement"},null,40,I),N,h,y,C]))}});const m=g(c,[["__scopeId","data-v-a95f0e25"]]);c.__docgenInfo={exportName:"default",displayName:"InputNumber",description:"",tags:{},props:[{name:"value",description:"Actual value to display",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"step",description:"Step increment/decrement value",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"onChangeCallback",description:"Callback function on click",type:{name:"func"},required:!0}],sourceFiles:["/home/runner/work/wireframe/wireframe/src/DesignSystem/Form/InputNumber.vue"]};const x={title:"Design System/Form/InputNumber",component:m,parameters:{componentSubtitle:"Display a InputNumber button"}},k=e=>({components:{InputNumber:m},setup(){return{args:e}},template:'<InputNumber v-bind="args" />'}),t=k.bind({});t.args={};var o,p,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    InputNumber
  },
  setup() {
    return {
      args
    };
  },
  template: '<InputNumber v-bind="args" />'
})`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,x as default};
//# sourceMappingURL=InputNumber.stories-fa71daa4.js.map
