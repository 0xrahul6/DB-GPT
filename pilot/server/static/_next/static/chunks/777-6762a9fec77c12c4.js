"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{95131:function(e,o,t){t.d(o,{Z:function(){return i}});var r=t(40431),a=t(86006),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},n=t(1240),i=a.forwardRef(function(e,o){return a.createElement(n.Z,(0,r.Z)({},e,{ref:o,icon:l}))})},70900:function(e,o,t){var r=t(24493),a=t(50645),l=t(88930);let n=(0,r.Z)({createStyledComponent:(0,a.Z)("div",{name:"JoyStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>(0,l.Z)({props:e,name:"JoyStack"})});o.Z=n},83192:function(e,o,t){t.d(o,{Z:function(){return T}});var r=t(46750),a=t(40431),l=t(86006),n=t(89791),i=t(53832),d=t(47562),s=t(88930),c=t(47093),u=t(50645),h=t(18587);function p(e){return(0,h.d6)("JoyTable",e)}(0,h.sI)("JoyTable",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","stickyHeader","noWrap","hoverRow","borderAxisNone","borderAxisX","borderAxisXBetween","borderAxisY","borderAxisYBetween","borderAxisBoth","borderAxisBothBetween"]);var b=t(22046),g=t(9268);let v=["className","component","children","borderAxis","hoverRow","noWrap","size","variant","color","stripe","stickyHeader"],m=e=>{let{size:o,variant:t,color:r,borderAxis:a,stickyHeader:l,noWrap:n,hoverRow:s}=e,c={root:["root",l&&"stickyHeader",n&&"noWrap",s&&"hoverRow",a&&`borderAxis${(0,i.Z)(a)}`,t&&`variant${(0,i.Z)(t)}`,r&&`color${(0,i.Z)(r)}`,o&&`size${(0,i.Z)(o)}`]};return(0,d.Z)(c,p,{})},f={getColumn:e=>"number"==typeof e&&e<0?`& tr > *:nth-last-child(${Math.abs(e)})`:`& tr > *:nth-child(${e})`,getColumnExceptFirst:()=>"& tr > *:not(:first-child)",getCell:()=>"& th, & td",getHeadCell:()=>"& th",getHeaderCell:()=>"& thead th",getHeaderCellOfRow:e=>`& thead tr:nth-child(${e}) th`,getBottomHeaderCell:()=>"& thead th:not([colspan])",getHeaderNestedFirstColumn:()=>"& thead tr:not(:first-of-type) th:not([colspan]):first-child",getDataCell:()=>"& td",getDataCellExceptLastRow:()=>"& tr:not(:last-child) > td",getBodyCellExceptLastRow(){return`${this.getDataCellExceptLastRow()}, & tr:not(:last-child) > th[scope="row"]`},getBodyCellOfRow:e=>"number"==typeof e&&e<0?`& tbody tr:nth-last-child(${Math.abs(e)}) td, & tbody tr:nth-last-child(${Math.abs(e)}) th[scope="row"]`:`& tbody tr:nth-child(${e}) td, & tbody tr:nth-child(${e}) th[scope="row"]`,getBodyRow:e=>void 0===e?"& tbody tr":`& tbody tr:nth-child(${e})`,getFooterCell:()=>"& tfoot th, & tfoot td"},C=(0,u.Z)("table",{name:"JoyTable",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{var t,r,l,n,i,d,s;let c=null==(t=e.variants[o.variant])?void 0:t[o.color];return[(0,a.Z)({"--Table-headerUnderlineThickness":"2px","--TableCell-borderColor":null!=(r=null==c?void 0:c.borderColor)?r:e.vars.palette.divider,"--TableCell-headBackground":`var(--Sheet-background, ${e.vars.palette.background.surface})`},"sm"===o.size&&{"--unstable_TableCell-height":"var(--TableCell-height, 32px)","--TableCell-paddingX":"0.25rem","--TableCell-paddingY":"0.25rem",fontSize:e.vars.fontSize.xs},"md"===o.size&&{"--unstable_TableCell-height":"var(--TableCell-height, 40px)","--TableCell-paddingX":"0.5rem","--TableCell-paddingY":"0.375rem",fontSize:e.vars.fontSize.sm},"lg"===o.size&&{"--unstable_TableCell-height":"var(--TableCell-height, 48px)","--TableCell-paddingX":"0.75rem","--TableCell-paddingY":"0.5rem",fontSize:e.vars.fontSize.md},{tableLayout:"fixed",width:"100%",borderSpacing:"0px",borderCollapse:"separate",color:e.vars.palette.text.primary},null==(l=e.variants[o.variant])?void 0:l[o.color],{"& caption":{color:e.vars.palette.text.tertiary,padding:"calc(2 * var(--TableCell-paddingY)) var(--TableCell-paddingX)"},[f.getDataCell()]:(0,a.Z)({padding:"var(--TableCell-paddingY) var(--TableCell-paddingX)",height:"var(--unstable_TableCell-height)",borderColor:"var(--TableCell-borderColor)",backgroundColor:"var(--TableCell-dataBackground)"},o.noWrap&&{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),[f.getHeadCell()]:{textAlign:"left",padding:"var(--TableCell-paddingY) var(--TableCell-paddingX)",backgroundColor:"var(--TableCell-headBackground)",height:"var(--unstable_TableCell-height)",fontWeight:e.vars.fontWeight.lg,borderColor:"var(--TableCell-borderColor)",color:e.vars.palette.text.secondary,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},[f.getHeaderCell()]:{verticalAlign:"bottom","&:first-child":{borderTopLeftRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))"},"&:last-child":{borderTopRightRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))"}},"& tfoot tr > *":{backgroundColor:`var(--TableCell-footBackground, ${e.vars.palette.background.level1})`,"&:first-child":{borderBottomLeftRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))"},"&:last-child":{borderBottomRightRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))"}}}),((null==(n=o.borderAxis)?void 0:n.startsWith("x"))||(null==(i=o.borderAxis)?void 0:i.startsWith("both")))&&{[f.getHeaderCell()]:{borderBottomWidth:1,borderBottomStyle:"solid"},[f.getBottomHeaderCell()]:{borderBottomWidth:"var(--Table-headerUnderlineThickness)",borderBottomStyle:"solid"},[f.getBodyCellExceptLastRow()]:{borderBottomWidth:1,borderBottomStyle:"solid"},[f.getFooterCell()]:{borderTopWidth:1,borderTopStyle:"solid"}},((null==(d=o.borderAxis)?void 0:d.startsWith("y"))||(null==(s=o.borderAxis)?void 0:s.startsWith("both")))&&{[`${f.getColumnExceptFirst()}, ${f.getHeaderNestedFirstColumn()}`]:{borderLeftWidth:1,borderLeftStyle:"solid"}},("x"===o.borderAxis||"both"===o.borderAxis)&&{[f.getHeaderCellOfRow(1)]:{borderTopWidth:1,borderTopStyle:"solid"},[f.getBodyCellOfRow(-1)]:{borderBottomWidth:1,borderBottomStyle:"solid"},[f.getFooterCell()]:{borderBottomWidth:1,borderBottomStyle:"solid"}},("y"===o.borderAxis||"both"===o.borderAxis)&&{[f.getColumn(1)]:{borderLeftWidth:1,borderLeftStyle:"solid"},[f.getColumn(-1)]:{borderRightWidth:1,borderRightStyle:"solid"}},o.stripe&&{[f.getBodyRow(o.stripe)]:{background:`var(--TableRow-stripeBackground, ${e.vars.palette.background.level1})`,color:e.vars.palette.text.primary}},o.hoverRow&&{[f.getBodyRow()]:{"&:hover":{background:`var(--TableRow-hoverBackground, ${e.vars.palette.background.level2})`}}},o.stickyHeader&&{[f.getHeadCell()]:{position:"sticky",top:0},[f.getHeaderCell()]:{zIndex:e.vars.zIndex.table},[f.getHeaderCellOfRow(2)]:{top:"var(--unstable_TableCell-height)"}}]}),y=l.forwardRef(function(e,o){let t=(0,s.Z)({props:e,name:"JoyTable"}),{className:l,component:i,children:d,borderAxis:u="xBetween",hoverRow:h=!1,noWrap:p=!1,size:f="md",variant:y="plain",color:T="neutral",stripe:x,stickyHeader:w=!1}=t,k=(0,r.Z)(t,v),{getColor:S}=(0,c.VT)(y),R=S(e.color,T),B=(0,a.Z)({},t,{borderAxis:u,hoverRow:h,noWrap:p,component:i,size:f,color:R,variant:y,stripe:x,stickyHeader:w}),Z=m(B);return(0,g.jsx)(b.eu.Provider,{value:!0,children:(0,g.jsx)(C,(0,a.Z)({as:i,ownerState:B,className:(0,n.Z)(Z.root,l),ref:o},k,{children:d}))})});var T=y},24493:function(e,o,t){t.d(o,{Z:function(){return w}});var r=t(46750),a=t(40431),l=t(86006),n=t(89791),i=t(95135),d=t(47562),s=t(13809),c=t(96263),u=t(38295),h=t(86601),p=t(89587),b=t(91559),g=t(48527),v=t(9268);let m=["component","direction","spacing","divider","children","className","useFlexGap"],f=(0,p.Z)(),C=(0,c.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function y(e){return(0,u.Z)({props:e,name:"MuiStack",defaultTheme:f})}let T=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],x=({ownerState:e,theme:o})=>{let t=(0,a.Z)({display:"flex",flexDirection:"column"},(0,b.k9)({theme:o},(0,b.P$)({values:e.direction,breakpoints:o.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let r=(0,g.hB)(o),a=Object.keys(o.breakpoints.values).reduce((o,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(o[t]=!0),o),{}),l=(0,b.P$)({values:e.direction,base:a}),n=(0,b.P$)({values:e.spacing,base:a});"object"==typeof l&&Object.keys(l).forEach((e,o,t)=>{let r=l[e];if(!r){let r=o>0?l[t[o-1]]:"column";l[e]=r}}),t=(0,i.Z)(t,(0,b.k9)({theme:o},n,(o,t)=>e.useFlexGap?{gap:(0,g.NA)(r,o)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${T(t?l[t]:e.direction)}`]:(0,g.NA)(r,o)}}))}return(0,b.dt)(o.breakpoints,t)};function w(e={}){let{createStyledComponent:o=C,useThemeProps:t=y,componentName:i="MuiStack"}=e,c=()=>(0,d.Z)({root:["root"]},e=>(0,s.Z)(i,e),{}),u=o(x),p=l.forwardRef(function(e,o){let i=t(e),d=(0,h.Z)(i),{component:s="div",direction:p="column",spacing:b=0,divider:g,children:f,className:C,useFlexGap:y=!1}=d,T=(0,r.Z)(d,m),x=c();return(0,v.jsx)(u,(0,a.Z)({as:s,ownerState:{direction:p,spacing:b,useFlexGap:y},ref:o,className:(0,n.Z)(x.root,C)},T,{children:g?function(e,o){let t=l.Children.toArray(e).filter(Boolean);return t.reduce((e,r,a)=>(e.push(r),a<t.length-1&&e.push(l.cloneElement(o,{key:`separator-${a}`})),e),[])}(f,g):f}))});return p}},96263:function(e,o,t){var r=t(9312);let a=(0,r.ZP)();o.Z=a},3146:function(e,o,t){t.d(o,{Z:function(){return a}});var r=t(86006);function a(){let[,e]=r.useReducer(e=>e+1,0);return e}},42442:function(e,o,t){t.d(o,{Z:function(){return n}});var r=t(88684),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function l(e,o){return 0===e.indexOf(o)}function n(e){var o,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,r.Z)({},t);var n={};return Object.keys(e).forEach(function(t){(o.aria&&("role"===t||l(t,"aria-"))||o.data&&l(t,"data-")||o.attr&&a.includes(t))&&(n[t]=e[t])}),n}}}]);