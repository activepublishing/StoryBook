import{M as o}from"./chunk-S4VUQJ4A-1c79f873.js";import{j as e}from"./jsx-runtime-5eb1fd4d.js";import{u as s}from"./index-dd38c803.js";import"./iframe-2ff05a3f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-23102255.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-61c75cc2.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/SideBar/MenuPanel",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"}}),`
`,e.jsx(n.h1,{id:"use",children:"Use"}),`
`,e.jsx(n.p,{children:`Create a new panel by providing it with the label and icon props
And inside add your template and your logic`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//myCustomPanel.vue
<script setup lang="ts">
  import Panel from "@/InterfaceUi/SidePanel.vue";
<\/script>

<template>
  <Panel :icon="svgText" :label="'Text'">
    //custom panel template
    // ...
  </Panel>
</template>
`})}),`
`,e.jsx(n.p,{children:"This component must then be imported inside the sidebar menu"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//SideBar.vue
  <MenuSidebar>
    <PanelDimension :targets="targets" />
    <PanelSpacing :targets="targets" />
    <PanelBackground :targets="targets" />
    <PanelText :targets="targets" />
  </MenuSidebar>
`})}),`
`,e.jsx(n.p,{children:`The wiring will be automatic.
The icon and the label are added in the header and the panel will be displayed when selected`})]})}function i(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const a={title:"Components/SideBar/MenuPanel",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"},tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:i};const b=["__page"];export{b as __namedExportsOrder,d as __page,a as default};
//# sourceMappingURL=SideMenuInfo.stories-0b27f7fc.js.map
