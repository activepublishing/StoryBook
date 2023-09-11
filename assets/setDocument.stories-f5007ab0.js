import{M as a,b as c}from"./chunk-S4VUQJ4A-1c79f873.js";import{j as e}from"./jsx-runtime-5eb1fd4d.js";import{u as i}from"./index-dd38c803.js";import"./iframe-2ff05a3f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-61c75cc2.js";import"./index-356e4a49.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Api/SetDocument"}),`
`,e.jsx(n.h1,{id:"apisetdocument",children:"Api/SetDocument"}),`
`,e.jsx(n.p,{children:"Method for set or update document parameters"}),`
`,e.jsx(n.p,{children:"Just send a new object like WireframeDocument Interface for override current document"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{language:"ts",dark:!0,code:"window.ActiveWireframe.setDocument({height:290, width:210, backgroundColor:'#CCC', measurementUnit:'mm'})"}),`
`,e.jsx(n.h2,{id:"document-interface",children:"Document Interface"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  interface WireFrameDocument {
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

`})}),`
`,e.jsx(n.h2,{id:"page-interface",children:"Page Interface"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  interface ActivePage {
    name: string;
    elements?: ElementInterface[];
    pagePosition: Int;
  }

`})}),`
`,e.jsx(n.h2,{id:"elements-interface",children:"Elements Interface"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`
  interface ElementInterface {
    id: string;
    type: string;
    properties: CssProperties;
    value?: string;
    styleName?: string;
    parentId?: string;
    label?: string;
    size: Size;
  }
  interface Size {
    width: number;
    height: number;
    left: number;
    top: number;
  }

  interface BlockInterface extends ElementInterface {
    type: "BLOCK";
  }
  interface Text extends ElementInterface {
    type: "TEXT";
    parentId: string;
  }
  interface Picture extends ElementInterface {
    type: "PICTURE";
    parentId: string;
  }

  interface Table extends ElementInterface {
    type: "TABLE";
    parentId: string;
  }
  interface CssProperties {
    [key: string]: string;
  }

`})})]})}function o(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const r={title:"Api/SetDocument",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:o};const b=["__page"];export{b as __namedExportsOrder,m as __page,r as default};
//# sourceMappingURL=setDocument.stories-f5007ab0.js.map
