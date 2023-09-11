import{M as c,b as r}from"./chunk-S4VUQJ4A-1c79f873.js";import{j as e}from"./jsx-runtime-5eb1fd4d.js";import{u as a}from"./index-dd38c803.js";import"./iframe-2ff05a3f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-61c75cc2.js";import"./index-356e4a49.js";function i(s){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a"},a(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Events"}),`
`,e.jsx(n.h1,{id:"subscriber",children:"Subscriber"}),`
`,e.jsx(n.p,{children:"@subscriber is an implementation of observer  pattern"}),`
`,e.jsx(n.p,{children:"The subscriber run a function when a specific event is emit"}),`
`,e.jsx(n.p,{children:"You can subscribe an event with his name and a callback function"}),`
`,e.jsx(r,{language:"ts",dark:!0,code:"window.ActiveWireframe.subscribe(eventName, callback)"}),`
`,e.jsx(r,{language:"ts",dark:!0,code:`
type subscriberType = {
list: list;
publish(eventName: string, data: object): void;
dispatch(event: WireframeEventInterface): void;
subscribe(eventName: string, callback: Function): void;
};
`}),`
`,e.jsx(r,{language:"ts",dark:!0,code:`
type list = {
[key: string]: Function[];
};
`}),`
`,e.jsx(n.h1,{id:"events-list-",children:"Events list :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/docs/events-list-pagereindex--docs",children:"pages reindex"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/docs/events-list-pagechange--docs",children:"pages change"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`Todo ...
Move,
drag,
resize,
etc ...`}),`
`]}),`
`]})]})}function o(s={}){const{wrapper:n}=Object.assign({},a(),s.components);return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const t={title:"Events",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:o};const v=["__page"];export{v as __namedExportsOrder,d as __page,t as default};
//# sourceMappingURL=Subscriber.stories-cd8062f5.js.map
