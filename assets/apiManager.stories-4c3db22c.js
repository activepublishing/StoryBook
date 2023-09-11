import{M as s,b as a}from"./chunk-S4VUQJ4A-1c79f873.js";import"./apiManager-9893dc12.js";import{j as e}from"./jsx-runtime-5eb1fd4d.js";import{u as o}from"./index-dd38c803.js";import"./iframe-2ff05a3f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-61c75cc2.js";import"./index-356e4a49.js";function i(t){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li",a:"a"},o(),t.components);return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{title:"Api/ApiManager"}),`
`,e.jsx(n.h1,{id:"apimanager",children:"ApiManager"}),`
`,e.jsx(n.p,{children:"This API allows you to interact with the wireframe from the outside"}),`
`,e.jsxs(n.p,{children:["When the wireframe is loaded a ",e.jsx(n.strong,{children:"wireframe-ready"})," event is send to the window object"]}),`
`,e.jsx(a,{language:"js",code:'window.dispatchEvent(new Event("wireframe-ready"));'}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"ApiManager"})," we can define few methods to expose globally."]}),`
`,e.jsx(n.p,{children:"This is to allow other scripts to simply communicate with the wireframe."}),`
`,e.jsx(n.p,{children:"For example the pimcore plugin, to add blocks but also to retrieve styles"}),`
`,e.jsx(n.h2,{id:"how-to-call-a-method",children:"How to call a method"}),`
`,e.jsx(n.p,{children:"ActiveWireframe.methodTocall()"}),`
`,e.jsx(n.p,{children:"Example :"}),`
`,e.jsx(a,{language:"ts",code:"window.ActiveWireframe.setDocument({height:290, width:210, backgroundColor:'#CCC', measurementUnit:'mm'})"}),`
`,e.jsx(n.h2,{id:"how-to-add-a-method-in-apimanager",children:"How to add a method in ApiManager"}),`
`,e.jsx(n.p,{children:"apiManager.addFunction(fn, 'name')"}),`
`,e.jsx(a,{language:"ts",code:`
import apiManager from "@/api/apiManager";
apiManager.addFunction(methodForSetADocument, "setDocument");
`}),`
`,e.jsx(n.h3,{id:"list-methods",children:"List methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/story/api-setdocument--page",children:"setDocument"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/story/api-AddStyle--page",children:"addStyle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/story/api-AddElements--page",children:"addElements"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/story/api-AddPage--page",children:"addPage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/story/api-Subscribe--page",children:"subscribe"})}),`
`,e.jsx(n.li,{children:"exportDocument"}),`
`]})]})}function d(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const r={title:"Api/ApiManager",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:d};const y=["__page"];export{y as __namedExportsOrder,c as __page,r as default};
//# sourceMappingURL=apiManager.stories-4c3db22c.js.map
