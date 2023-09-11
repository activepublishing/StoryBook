import{q as b,A as g,s as y,B as _,z as B,v as x}from"./vue.esm-bundler-a0839515.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const S={class:"label"},p=b({__name:"ButtonLabel",props:{label:String,textColor:{type:String,default:"#ffffff"},fontSize:{type:String,default:"14px"},backgroundColor:{type:String,default:"var(--primary)"},onInteraction:{type:Function,required:!1}},setup(e){const n=e;g(o=>({"96611d30":e.fontSize,"27362f5d":e.backgroundColor,"02306cbe":e.textColor}));const d=o=>{n.onInteraction&&n.onInteraction("click")};return(o,C)=>(x(),y("button",{class:"button",onClick:d},[_("span",S,B(n.label),1)]))}});const f=v(p,[["__scopeId","data-v-f5f5f9d5"]]);p.__docgenInfo={exportName:"default",displayName:"ButtonLabel",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"textColor",type:{name:"string"},defaultValue:{func:!1,value:'"#ffffff"'}},{name:"fontSize",type:{name:"string"},defaultValue:{func:!1,value:'"14px"'}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:'"var(--primary)"'}},{name:"onInteraction",type:{name:"func"},required:!1}],sourceFiles:["/home/runner/work/wireframe/wireframe/src/DesignSystem/Buttons/ButtonLabel.vue"]};const I={title:"Design System/Buttons/ButtonLabel",component:f,parameters:{componentSubtitle:"Displays a ButtonLabel button"}},m=e=>({components:{ButtonLabel:f},setup(){return{args:e}},template:'<ButtonLabel v-bind="args" />'}),t=m.bind({});t.args={label:"Export Indesign",textColor:"var(--white)",fontSize:"14px"};const a=m.bind({});a.args={label:"Export Indesign",textColor:"var(--white)",backgroundColor:"var(--secondary)",fontSize:"14px"};var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    ButtonLabel
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonLabel v-bind="args" />'
})`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    ButtonLabel
  },
  setup() {
    return {
      args
    };
  },
  template: '<ButtonLabel v-bind="args" />'
})`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const h=["Primary","Secondary"];export{t as Primary,a as Secondary,h as __namedExportsOrder,I as default};
//# sourceMappingURL=ButtonLabel.stories-756d5f01.js.map
