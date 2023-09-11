import{M as p}from"./chunk-S4VUQJ4A-1c79f873.js";import{j as e}from"./jsx-runtime-5eb1fd4d.js";import{u as s}from"./index-dd38c803.js";import"./iframe-2ff05a3f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-61c75cc2.js";import"./index-356e4a49.js";function o(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/Bases/composable/DeleteProperty"}),`
`,e.jsx(r.h1,{id:"composables",children:"Composables"}),`
`,e.jsx(r.h2,{id:"deleteproperty",children:"deleteProperty"}),`
`,e.jsx(r.p,{children:"This composable return a computed value."}),`
`,e.jsx(r.p,{children:`This value will be a number that matches the propertyName of properties.
The float flag returns a boolean value`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`interface propsInterface {
  properties: { [key: string]: string };
  propertyName: string;
  float: boolean;
}
`})}),`
`,e.jsx(r.h3,{id:"example",children:"Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`// AppInputNumber.vue
import { stringToNumber } from "@/Components/Bases/composables/stringToNumber";

const props = defineProps({
  properties:{ [key: string]: string };
  propertyName: String,
  float: boolean;
});

const valueTodisplay = stringToNumber(props);

`})})]})}function a(n={}){const{wrapper:r}=Object.assign({},s(),n.components);return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const t={title:"Components/Bases/composable/DeleteProperty",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:a};const j=["__page"];export{j as __namedExportsOrder,i as __page,t as default};
//# sourceMappingURL=deleteProperty.stories-f37976dd.js.map
