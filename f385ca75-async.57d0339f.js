(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]||[]).push([["f385ca75"],{f385ca75:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return d;}});var r=t("777fffbe"),n=t("a4446a09"),l=t("e7242881"),s=t("fda1afd4"),o=t("78539509"),u=r._(t("d6562b02")),f=t("653be5f0");let i=({name:e,avatar:a})=>{let[t,r]=(0,l.useState)(!0),[s,u]=(0,l.useState)(!1);return((0,l.useLayoutEffect)(()=>{let e=new Image;e.src=a,e.onload=()=>r(!1),e.onerror=()=>u(!0);},[]),s)?null:t?(0,n.jsx)(o.Skeleton.Avatar,{size:"small",active:!0}):(0,n.jsx)(o.Avatar,{size:"small",src:a,alt:e,children:e});};var d=()=>{let e=(0,f.useRouteMeta)(),a=(0,l.useMemo)(()=>{let{author:a}=e.frontmatter;return a?"string"==typeof a?a.split(",").map(e=>({name:e,avatar:`https://github.com/${e}.png`})):Array.isArray(a)?a:[]:[];},[e.frontmatter.author]);return e.frontmatter.date||e.frontmatter.author?(0,n.jsx)(o.Typography.Paragraph,{children:(0,n.jsxs)(o.Flex,{gap:"small",children:[e.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(s.CalendarOutlined,{})," ",(0,u.default)(e.frontmatter.date).format("YYYY-MM-DD")]}),a.map(e=>(0,n.jsx)("a",{href:`https://github.com/${e.name}`,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(o.Flex,{gap:4,children:[(0,n.jsx)(i,{name:e.name,avatar:e.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",e.name]})]})},e.name))]})}):null;};}}]);
//# sourceMappingURL=f385ca75-async.57d0339f.js.map