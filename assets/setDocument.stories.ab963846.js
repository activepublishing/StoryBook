import"./index.173e6475.js";import{c as e,A as a,M as m,S as u}from"./Props.830813ef.js";import"./iframe.c61b1a90.js";import"./createType.fcd25b20.js";import"./doctrine.b1312238.js";import"./parameters.3e94ffc5.js";const s={},p="wrapper";function r({components:o,...n}){return e(p,{...s,...n,components:o,mdxType:"MDXLayout"},e(m,{title:"Api/SetDocument",mdxType:"Meta"}),e("h1",null,"Api/SetDocument"),e("p",null,"Method for set or update document parameters"),e("p",null,"Just send a new object like WireframeDocument Interface for override current document "),e("h2",null,"Example"),e(u,{language:"ts",dark:!0,code:"window.ActiveWireframe.setDocument({height:290, width:210, backgroundColor:'#CCC', measurementUnit:'mm'})",mdxType:"Source"}),e("h2",null,"Document Interface"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`  interface WireFrameDocument {
    properties: {
      height: number;
      width: number;
      backgroundColor: string;
      measurementUnit: string;
      bleed?: BleedBox;
      margin?: object;
    };
    pages: ActivePage[];
    name: string;
  }

interface BleedBox {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

`)))}r.isMDXComponent=!0;const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const t={title:"Api/SetDocument",includeStories:["__page"]},i={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(a,{mdxStoryNameToKey:i,mdxComponentAnnotations:t},e(r,null))};const D=["__page"];export{D as __namedExportsOrder,c as __page,t as default};
//# sourceMappingURL=setDocument.stories.ab963846.js.map
