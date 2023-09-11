import{q as _,s as m,B as a,v as f,D as g,E as x}from"./vue.esm-bundler-a0839515.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const s=e=>(g("data-v-ab3380b0"),e=e(),x(),e),h=["value"],I=s(()=>a("span",{class:"bottom"},null,-1)),b=s(()=>a("span",{class:"right"},null,-1)),A=s(()=>a("span",{class:"top"},null,-1)),T=s(()=>a("span",{class:"left"},null,-1)),u=_({__name:"InputTextArea",props:{value:{type:String,required:!1,default:""},onChangeCallback:{type:Function,required:!0}},setup(e){const n=e,d=r=>{const o=r.target;n.onChangeCallback(o.value)};return(r,o)=>(f(),m("div",null,[a("textarea",{class:"input",value:n.value,onChange:d},null,40,h),I,b,A,T]))}});const i=v(u,[["__scopeId","data-v-ab3380b0"]]);u.__docgenInfo={exportName:"default",displayName:"InputTextArea",description:"",tags:{},props:[{name:"value",description:"Actual value to display",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"onChangeCallback",description:"Callback function on click",type:{name:"func"},required:!0}],sourceFiles:["/home/runner/work/wireframe/wireframe/src/DesignSystem/Form/InputTextArea.vue"]};const S={title:"Design System/Form/InputTextArea",component:i,parameters:{componentSubtitle:"Display a InputTextArea"}},y=e=>({components:{InputTextArea:i},setup(){return{args:e}},template:'<InputTextArea v-bind="args" />'}),t=y.bind({});t.args={};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    InputTextArea
  },
  setup() {
    return {
      args
    };
  },
  template: '<InputTextArea v-bind="args" />'
})`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,S as default};
//# sourceMappingURL=InputTextArea.stories-4609c923.js.map
