(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]||[]).push([["ff81122a"],{"0739ecd4":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return n;}});var l=a("777fffbe"),o=a("a4446a09"),i=l._(a("fda1afd4"));let d=e=>(0,o.jsxs)("svg",{width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor",...e,children:[(0,o.jsx)("title",{children:"Theme icon"}),(0,o.jsx)("g",{fillRule:"evenodd",children:(0,o.jsx)("g",{fillRule:"nonzero",children:(0,o.jsx)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"})})})]});var n=e=>(0,o.jsx)(i.default,{component:d,...e});},ff81122a:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return h;}});var l=a("777fffbe"),o=a("a4446a09"),i=a("fda1afd4"),d=a("78539509"),n=a("b50b318e"),s=a("653be5f0"),c=a("18266aac"),r=l._(a("510d7e18")),u=l._(a("0739ecd4")),h=e=>{let{value:t=["light"],onChange:a}=e,{pathname:l,search:h}=(0,s.useLocation)(),f=t.includes("dark");return l.startsWith("/index")||""===l?null:(0,o.jsxs)(d.FloatButton.Group,{trigger:"click",icon:(0,o.jsx)(u.default,{}),"aria-label":"Theme Switcher",badge:{dot:!0},children:[(0,o.jsx)(r.default,{to:(0,c.getLocalizedPathname)("/theme-editor",(0,c.isZhCN)(l),h),style:{display:"block"},children:(0,o.jsx)(d.FloatButton,{icon:(0,o.jsx)(i.BgColorsOutlined,{}),tooltip:(0,o.jsx)(s.FormattedMessage,{id:"app.footer.theme"})})}),(0,o.jsx)(d.FloatButton,{icon:(0,o.jsx)(n.DarkTheme,{}),type:f?"primary":"default",onClick:()=>{f?a(t.filter(e=>"dark"!==e)):a([...t,"dark"]);},tooltip:(0,o.jsx)(s.FormattedMessage,{id:"app.theme.switch.dark"})}),(0,o.jsx)(d.FloatButton,{icon:(0,o.jsx)(n.CompactTheme,{}),type:t.includes("compact")?"primary":"default",onClick:()=>{t.includes("compact")?a(t.filter(e=>"compact"!==e)):a([...t,"compact"]);},tooltip:(0,o.jsx)(s.FormattedMessage,{id:"app.theme.switch.compact"})})]});};}}]);
//# sourceMappingURL=ff81122a-async.9c39891f.js.map