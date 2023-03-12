import"./index.173e6475.js";import{c as e,A as s,M as n}from"./Props.830813ef.js";import"./iframe.c61b1a90.js";import"./createType.fcd25b20.js";import"./doctrine.b1312238.js";import"./parameters.3e94ffc5.js";const p={},m="wrapper";function t({components:r,...a}){return e(m,{...p,...a,components:r,mdxType:"MDXLayout"},e(n,{title:"Components/Bases/composable/stringToNumber",mdxType:"Meta"}),e("h1",null,"Composables"),e("h2",null,"stringToNumber"),e("p",null,"This composable return a computed value."),e("p",null,`This value will be a number that matches the propertyName of properties.
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

`)))}t.isMDXComponent=!0;const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const o={title:"Components/Bases/composable/stringToNumber",includeStories:["__page"]},u={};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(s,{mdxStoryNameToKey:u,mdxComponentAnnotations:o},e(t,null))};const N=["__page"];export{N as __namedExportsOrder,l as __page,o as default};
//# sourceMappingURL=stringToNumber.stories.2cb243b2.js.map
