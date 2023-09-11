import{M as i,b as o}from"./chunk-S4VUQJ4A-1c79f873.js";import{j as e}from"./jsx-runtime-5eb1fd4d.js";import{u as a}from"./index-dd38c803.js";import"./iframe-2ff05a3f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-61c75cc2.js";import"./index-356e4a49.js";function s(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Api/AddElements"}),`
`,e.jsx(n.h1,{id:"apiaddelements",children:"Api/addElements"}),`
`,e.jsx(n.p,{children:"Method for add Elements"}),`
`,e.jsx(n.p,{children:"Send an array of ElementInterface and page name"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{language:"ts",dark:!0,code:"window.ActiveWireframe.addElements(blocks: ElementInterface[], page: string)"}),`
`,e.jsx(n.h2,{id:"element-interface",children:"Element Interface"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface ElementInterface {
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

`})})]})}function c(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Api/AddElements",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:c};const j=["__page"];export{j as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=addElement.stories-c306a9a5.js.map
