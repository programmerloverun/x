(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@ant-design/x"]||[]).push([["b3ac73c0"],{"1211b0bf":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return f;}});var a=t("777fffbe"),i=t("a4446a09");t("d4ae9a71");var n=t("fda1afd4"),s=t("735a2091"),r=t("78539509"),d=a._(t("79f41d8f")),o=a._(t("7917e9a7"));let u={cn:{placeholder:"\u5360\u4F4D\u7B26"},en:{placeholder:"Placeholder"}},p={cn:{list:"\u5217\u8868\u5BB9\u5668",item:"\u5217\u8868\u9879"},en:{list:"List container",item:"List item"}},c=Array.from({length:3}).map((e,l)=>({uid:String(l),name:`file-${l}.jpg`,status:"done",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}));var f=()=>{let[e]=(0,o.default)(u),[l]=(0,o.default)(p);return(0,i.jsxs)(r.Flex,{vertical:!0,children:[(0,i.jsx)(d.default,{semantics:[{name:"placeholder",desc:e.placeholder}],children:(0,i.jsx)(s.Attachments,{placeholder:{icon:(0,i.jsx)(n.CloudUploadOutlined,{}),title:"Upload File",description:"Drag or click to upload file."}})}),(0,i.jsx)(r.Divider,{style:{margin:0,padding:0}}),(0,i.jsx)(d.default,{semantics:[{name:"list",desc:l.list},{name:"item",desc:l.item}],children:(0,i.jsx)(s.Attachments,{items:c})})]});};},"20b49999":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return u;}});var a=t("777fffbe"),i=t("a4446a09");t("71aa37ec");var n=t("fda1afd4"),s=t("735a2091"),r=t("78539509"),d=a._(t("e7242881"));let o=()=>{let{message:e}=r.App.useApp(),[l,t]=d.default.useState(!1),a=d.default.useRef(null);return(0,i.jsxs)(r.Flex,{vertical:!0,gap:"middle",align:"flex-start",ref:a,children:[(0,i.jsx)(s.Sender,{prefix:(0,i.jsx)(s.Attachments,{beforeUpload:()=>!1,onChange:({file:l})=>{e.info(`Mock upload: ${l.name}`);},getDropContainer:()=>l?document.body:a.current,placeholder:{icon:(0,i.jsx)(n.CloudUploadOutlined,{}),title:"Drag & Drop files here",description:"Support file type: image, video, audio, document, etc."},children:(0,i.jsx)(r.Button,{type:"text",icon:(0,i.jsx)(n.LinkOutlined,{})})})}),(0,i.jsx)(r.Switch,{checked:l,onChange:t,checkedChildren:"Full screen drop",unCheckedChildren:"Full screen drop"})]});};var u=()=>(0,i.jsx)(r.App,{children:(0,i.jsx)(o,{})});},"6608ae91":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return u;}});var a=t("777fffbe"),i=t("a4446a09");t("c388bfc1");var n=t("fda1afd4"),s=t("735a2091"),r=t("78539509"),d=a._(t("e7242881"));let o=Array.from({length:30}).map((e,l)=>({uid:String(l),name:`file-${l}.jpg`,status:"done",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}));var u=()=>{let[e,l]=d.default.useState("wrap"),[t,a]=d.default.useState(o),[u,p]=d.default.useState(!1);return(0,i.jsxs)(r.Flex,{vertical:!0,gap:"middle",children:[(0,i.jsxs)(r.Flex,{gap:"middle",align:"center",children:[(0,i.jsx)(r.Segmented,{options:[{value:"wrap",label:"Wrap"},{value:"scrollX",label:"Scroll X"},{value:"scrollY",label:"Scroll Y"}],value:e,onChange:l,style:{marginInlineEnd:"auto"}}),(0,i.jsx)(r.Switch,{checked:0!==t.length,onChange:()=>a(e=>e.length?[]:o),checkedChildren:"Data",unCheckedChildren:"Data"}),(0,i.jsx)(r.Switch,{checked:u,onChange:p,checkedChildren:"Disabled",unCheckedChildren:"Disabled"})]}),(0,i.jsx)(s.Attachments,{overflow:e,items:t,onChange:e=>a(e.fileList),beforeUpload:()=>!1,placeholder:{icon:(0,i.jsx)(n.CloudUploadOutlined,{}),title:"Click or Drop files here",description:"Support file type: image, video, audio, document, etc."},disabled:u})]});};},"8496b938":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return p;}});var a=t("777fffbe"),i=t("a4446a09");t("44957fa0");var n=t("fda1afd4"),s=t("735a2091"),r=t("78539509"),d=a._(t("e7242881"));let o=[{uid:"1",name:"uploading file.xlsx",status:"uploading",url:"http://www.baidu.com/xxx.png",percent:93},{uid:"2",name:"uploaded file.docx",status:"done",size:123456,description:"Customize description",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"upload error with long text file name.zip",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"},{uid:"4",name:"image uploading preview.png",status:"uploading",percent:33,thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"5",name:"image done preview.png",status:"done",size:123456,thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"6",name:"image error preview.png",status:"error",response:"Server Error 500",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}],u=e=>l=>"drop"===l?{title:"Drop file here"}:e;var p=()=>{let{token:e}=r.theme.useToken(),[l,t]=d.default.useState([]),a={borderRadius:e.borderRadius,overflow:"hidden",background:e.colorBgContainer},p={beforeUpload:()=>!1,items:l,onChange:({fileList:e})=>{console.log("onChange:",e),t(e);}};return(0,i.jsxs)(r.Flex,{vertical:!0,gap:"middle",style:{padding:e.padding,background:e.colorBgContainerDisabled},children:[(0,i.jsx)("div",{style:a,children:(0,i.jsx)(s.Attachments,{...p,placeholder:u({icon:(0,i.jsx)(n.CloudUploadOutlined,{}),title:"Click or Drop files here",description:"Support file type: image, video, audio, document, etc."})})}),(0,i.jsx)("div",{style:a,children:(0,i.jsx)(s.Attachments,{...p,placeholder:u((0,i.jsx)(r.Result,{title:"Custom Placeholder Node",icon:(0,i.jsx)(n.CloudUploadOutlined,{}),extra:(0,i.jsx)(r.Button,{type:"primary",children:"Do Upload"}),style:{padding:0}}))})}),(0,i.jsxs)(r.Flex,{gap:"middle",children:[(0,i.jsx)(r.Button,{style:{flex:"1 1 50%"},disabled:!!l.length,type:"primary",onClick:()=>t(o),children:"Fill Files"}),(0,i.jsx)(r.Button,{style:{flex:"1 1 50%"},disabled:!l.length,onClick:()=>t([]),children:"Reset Files"})]})]});};},d1c765ee:function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return r;}});var a=t("a4446a09");t("8fb2b3a0");var i=t("735a2091"),n=t("78539509");let s=()=>(0,a.jsx)(n.Flex,{vertical:!0,gap:"middle",children:[{uid:"1",name:"excel-file.xlsx",size:111111},{uid:"2",name:"word-file.docx",size:222222},{uid:"3",name:"image-file.png",size:333333},{uid:"4",name:"pdf-file.pdf",size:444444},{uid:"5",name:"ppt-file.pptx",size:555555},{uid:"6",name:"video-file.mp4",size:666666},{uid:"7",name:"audio-file.mp3",size:777777},{uid:"8",name:"zip-file.zip",size:888888},{uid:"9",name:"markdown-file.md",size:999999,description:"Custom description here"},{uid:"10",name:"image-file.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",size:123456}].map((e,l)=>(0,a.jsx)(i.Attachments.FileCard,{item:e},l))});var r=()=>(0,a.jsx)(n.App,{children:(0,a.jsx)(s,{})});},da8eee95:function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return u;}});var a=t("777fffbe"),i=t("a4446a09");t("c0dbabb2");var n=t("fda1afd4"),s=t("735a2091"),r=t("78539509"),d=a._(t("e7242881"));let o=()=>{let[e,l]=d.default.useState(!0),[t,a]=d.default.useState([]),[o,u]=d.default.useState(""),{notification:p}=r.App.useApp(),c=d.default.useRef(null),f=(0,i.jsx)(s.Sender.Header,{title:"Attachments",open:e,onOpenChange:l,styles:{content:{padding:0}},children:(0,i.jsx)(s.Attachments,{beforeUpload:()=>!1,items:t,onChange:({fileList:e})=>a(e),placeholder:e=>"drop"===e?{title:"Drop file here"}:{icon:(0,i.jsx)(n.CloudUploadOutlined,{}),title:"Upload files",description:"Click or drag files to this area to upload"},getDropContainer:()=>c.current})});return(0,i.jsx)(r.Flex,{style:{minHeight:250},align:"flex-end",children:(0,i.jsx)(s.Sender,{ref:c,header:f,prefix:(0,i.jsx)(r.Badge,{dot:t.length>0&&!e,children:(0,i.jsx)(r.Button,{onClick:()=>l(!e),icon:(0,i.jsx)(n.LinkOutlined,{})})}),value:o,onChange:u,onSubmit:()=>{p.info({message:"Mock Submit",description:(0,i.jsx)(r.Typography,{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["You said: ",o]}),(0,i.jsxs)("li",{children:["Attachments count: ",t.length,(0,i.jsx)("ul",{children:t.map(e=>(0,i.jsx)("li",{children:e.name},e.uid))})]})]})})}),a([]),u("");}})});};var u=()=>(0,i.jsx)(r.App,{children:(0,i.jsx)(o,{})});}}]);
//# sourceMappingURL=b3ac73c0-async.5930355a.js.map