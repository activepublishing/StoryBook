import"./index.173e6475.js";import{c as e,A as a,M as s}from"./Props.830813ef.js";import"./iframe.c61b1a90.js";import"./IconList.0ae2ab5d.js";import"./createType.fcd25b20.js";import"./doctrine.b1312238.js";import"./parameters.3e94ffc5.js";import"./vue.esm-bundler.70f8ee4d.js";import"./IconSvg.9134cd12.js";import"./_plugin-vue_export-helper.cdc0426e.js";const p={},i="wrapper";function o({components:n,...r}){return e(i,{...p,...r,components:n,mdxType:"MDXLayout"},e(s,{title:"Design System/Icons/HowToUse",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"},mdxType:"Meta"}),e("h2",null,"IconSvg"),e("p",null,"A component for render an svg"),e("h3",null,"How to use"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`
//import the path
import arrowLeft from "@/DesignSystem/Icons/List/ArrowLeft";

//import the component
import IconSvg from "@/DesignSystem/Icons/IconSvg.vue";

// Use IconSvg
      <IconSvg
        :width="20"
        :height="20"
        :path="arrowLeft"
        :iconColor="'var(--white)'"
      />
`)),e("h3",null,"How to add an icon in project"),e("p",null,"Add a file with path of svg in this folder : ",e("strong",{parentName:"p"},"/src/DesignSystem/Icons/List"),";"),e("p",null,"The format must be typescript and in the folder mentioned above Viewbox: ",e("strong",{parentName:"p"},"0 0 500 500")),e("p",null,"This will update the story and add the icon to the list of available icons"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`// bottomAlign.ts

const bottomAlign =
"M61.79,27.6c0-6.85,0-13.7,0-20.54C61.79,2.81,58.99,0,54.76,0c-4.16,0-8.32,0-12.48,0-4.15,0-6.97,2.82-6.97,6.96,0,13.74,0,27.49,0,41.23,0,4.15,2.81,6.97,6.96,6.98,4.21,0,8.41,0,12.62,0,4.06,0,6.9-2.84,6.91-6.89,0-6.89,0-13.79,0-20.68ZM30.9,36.4c0-3.91,0-7.81,0-11.72,0-4.19-2.81-7.02-6.98-7.02-4.18,0-8.36,0-12.55,0-4.1,0-6.95,2.83-6.95,6.92,0,7.9,0,15.81,0,23.71,0,4.02,2.84,6.87,6.84,6.88,4.27,0,8.55,.01,12.82,0,3.96-.01,6.8-2.87,6.81-6.85,0-3.98,0-7.95,0-11.93ZM33.14,64c10.09,0,20.18,0,30.27,0,.25,0,.51,.01,.76,0,1.15-.1,2.04-1.07,2.03-2.22-.01-1.14-.92-2.1-2.08-2.18-.16-.01-.32,0-.48,0-20.36,0-40.73,0-61.09,0-.34,0-.7,.02-1.02,.12-1.02,.31-1.64,1.3-1.52,2.34,.12,1,.95,1.82,1.96,1.93,.27,.03,.55,.01,.83,.01,10.11,0,20.23,0,30.34,0Z";
export default bottomAlign;
`)))}o.isMDXComponent=!0;const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const t={title:"Design System/Icons/HowToUse",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"},includeStories:["__page"]},c={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(a,{mdxStoryNameToKey:c,mdxComponentAnnotations:t},e(o,null))};const S=["__page"];export{S as __namedExportsOrder,m as __page,t as default};
//# sourceMappingURL=HowToUse.stories.693284b6.js.map
