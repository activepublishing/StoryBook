import{q as v,s as B,x as A,C as f,v as h}from"./vue.esm-bundler-a0839515.js";import{A as y}from"./IconSvg-588b4cf3.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import p from"./Drag-1beb55e8.js";const S=["title","id"],m=v({__name:"ActionButton",props:{callback:{required:!0,type:Function},icon:String,active:Boolean,label:String,id:String},setup(o){const n=o,_=b=>{n.callback()};return(b,D)=>(h(),B("button",{class:f({active:o.active}),onMousedown:_,title:n.label,id:n.id},[A(y,{width:20,height:20,path:n.icon,iconColor:"var(--white)"},null,8,["path","iconColor"])],42,S))}});const u=k(m,[["__scopeId","data-v-c0957b78"]]);m.__docgenInfo={exportName:"default",displayName:"ActionButton",description:"",tags:{},props:[{name:"callback",description:"Callback function on click",type:{name:"func"},required:!0},{name:"icon",description:"SVG path",type:{name:"string"}},{name:"active",description:"Add a class active on the button",type:{name:"boolean"}},{name:"label",description:"Display on hover",type:{name:"string"}},{name:"id",type:{name:"string"}}],sourceFiles:["/home/runner/work/wireframe/wireframe/src/DesignSystem/Buttons/ActionButton.vue"]};const I={title:"Design System/Buttons/ActionButton",component:u,parameters:{componentSubtitle:"Displays a ActionsButtons button"}},d=o=>({components:{ActionsButtons:u},setup(){return{args:o}},template:'<ActionsButtons v-bind="args" />'}),g=()=>{console.log("callBack click")},t=d.bind({});t.args={label:"Drag element",icon:p,active:!0,callback:g};const e=d.bind({});e.args={label:"Drag element",icon:p,active:!1,callback:g};var s,a,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    ActionsButtons
  },
  setup() {
    return {
      args
    };
  },
  template: '<ActionsButtons v-bind="args" />'
})`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    ActionsButtons
  },
  setup() {
    return {
      args
    };
  },
  template: '<ActionsButtons v-bind="args" />'
})`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const N=["Active","Disable"];export{t as Active,e as Disable,N as __namedExportsOrder,I as default};
//# sourceMappingURL=ActionButton.stories-7fc16faf.js.map
