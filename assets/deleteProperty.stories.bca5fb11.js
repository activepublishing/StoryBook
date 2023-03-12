import"./index.173e6475.js";import{c as e,A as p,M as s}from"./Props.830813ef.js";import"./iframe.c61b1a90.js";import"./createType.fcd25b20.js";import"./doctrine.b1312238.js";import"./parameters.3e94ffc5.js";const n={},l="wrapper";function o({components:r,...a}){return e(l,{...n,...a,components:r,mdxType:"MDXLayout"},e(s,{title:"Components/Bases/composable/DeleteProperty",mdxType:"Meta"}),e("h1",null,"Composables"),e("h2",null,"deleteProperty"),e("p",null,"This composable return a computed value."),e("p",null,`This value will be a number that matches the propertyName of properties.
The float flag returns a boolean value`),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`interface propsInterface {
  properties: { [key: string]: string };
  propertyName: string;
  float: boolean;
}
`)),e("h3",null,"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`// AppInputNumber.vue
import { stringToNumber } from "@/Components/Bases/composables/stringToNumber";

const props = defineProps({
  properties:{ [key: string]: string };
  propertyName: String,
  float: boolean;
});

const valueTodisplay = stringToNumber(props);

`)))}o.isMDXComponent=!0;const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const t={title:"Components/Bases/composable/DeleteProperty",includeStories:["__page"]},u={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(p,{mdxStoryNameToKey:u,mdxComponentAnnotations:t},e(o,null))};const f=["__page"];export{f as __namedExportsOrder,m as __page,t as default};
//# sourceMappingURL=deleteProperty.stories.bca5fb11.js.map
