import"./index.173e6475.js";import{c as e,A as o,M as s}from"./Props.830813ef.js";import"./iframe.c61b1a90.js";import"./createType.fcd25b20.js";import"./doctrine.b1312238.js";import"./parameters.3e94ffc5.js";const l={},p="wrapper";function a({components:n,...r}){return e(p,{...l,...r,components:n,mdxType:"MDXLayout"},e(s,{title:"Components/SideBar/MenuPanel",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"},mdxType:"Meta"}),e("h1",null,"Use"),e("p",null,`Create a new panel by providing it with the label and icon props
And inside add your template and your logic`),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`//myCustomPanel.vue
<script setup lang="ts">
  import Panel from "@/InterfaceUi/SidePanel.vue";
<\/script>

<template>
  <Panel :icon="svgText" :label="'Text'">
    //custom panel template
    // ...
  </Panel>
</template>
`)),e("p",null,"This component must then be imported inside the sidebar menu"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`//SideBar.vue
  <MenuSidebar>
    <PanelDimension :targets="targets" />
    <PanelSpacing :targets="targets" />
    <PanelBackground :targets="targets" />
    <PanelText :targets="targets" />
  </MenuSidebar>
`)),e("p",null,`The wiring will be automatic.
The icon and the label are added in the header and the panel will be displayed when selected`))}a.isMDXComponent=!0;const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const t={title:"Components/SideBar/MenuPanel",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"},includeStories:["__page"]},d={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(o,{mdxStoryNameToKey:d,mdxComponentAnnotations:t},e(a,null))};const M=["__page"];export{M as __namedExportsOrder,i as __page,t as default};
//# sourceMappingURL=SideMenuInfo.stories.340d8a76.js.map
