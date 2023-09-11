import{M as a}from"./chunk-S4VUQJ4A-1c79f873.js";import{j as e}from"./jsx-runtime-5eb1fd4d.js";import{u as t}from"./index-dd38c803.js";import"./iframe-2ff05a3f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-61c75cc2.js";import"./index-356e4a49.js";function s(r){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},t(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Bases/composable/stringToNumber"}),`
`,e.jsx(n.h1,{id:"composables",children:"Composables"}),`
`,e.jsx(n.h2,{id:"stringtonumber",children:"stringToNumber"}),`
`,e.jsx(n.p,{children:"This composable return a computed value."}),`
`,e.jsx(n.p,{children:`This value will be a number that matches the propertyName of properties.
The float flag returns a boolean value`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface propsInterface {
  properties: { [key: string]: string };
  propertyName: string;
  float: boolean;
}
`})}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// AppInputNumber.vue
import { stringToNumber } from "@/Components/Bases/composables/stringToNumber";

const props = defineProps({
  properties:{ [key: string]: string };
  propertyName: String,
  float: boolean;
});

const valueTodisplay = stringToNumber(props);

`})})]})}function p(r={}){const{wrapper:n}=Object.assign({},t(),r.components);return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const o={title:"Components/Bases/composable/stringToNumber",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:p};const j=["__page"];export{j as __namedExportsOrder,i as __page,o as default};
//# sourceMappingURL=stringToNumber.stories-648bb688.js.map
