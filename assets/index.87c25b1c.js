import{B as g}from"./index.91fedec9.js";import{I as y}from"./index.4e162609.js";import{A as C}from"./AppType.e6037b59.js";import{S as m}from"./index.a1f4865b.js";import{c as d}from"./index.45528475.js";import{d as b}from"./index.77fe3760.js";import{u as h,a as _,_ as x,b as S,c as E}from"./en-US.f8762106.js";import{w as A,a as F,b as v}from"./utils.77a9ee56.js";import{_ as T}from"./elevation.49b7c3d2.js";import{C as j,e as s,o as w,c as z,i as t,j as u,F as L,m as o,t as n}from"./vendor.efca09d3.js";import"./index.b50b8baf.js";import"./index.6a5b4e65.js";import"./shared.61f3a471.js";import"./components.7ab0cf36.js";import"./elements.a1d73ee7.js";import"./zIndex.2548bfbd.js";import"./lock.363e6814.js";var D={themeColorButton:"\u4E3B\u9898\u8272\u6309\u94AE",defaultButton:"\u9ED8\u8BA4\u6309\u94AE",primaryButton:"\u4E3B\u8981\u6309\u94AE",infoButton:"\u4FE1\u606F\u6309\u94AE",successButton:"\u6210\u529F\u6309\u94AE",warningButton:"\u8B66\u544A\u6309\u94AE",dangerButton:"\u5371\u9669\u6309\u94AE",textButton:"\u6587\u5B57\u6309\u94AE",plainTextButton:"\u7EAF\u6587\u5B57\u6309\u94AE",outlineButton:"\u5916\u8FB9\u6846\u6309\u94AE",disabledStatus:"\u7981\u7528\u72B6\u6001",loadingStatus:"\u52A0\u8F7D\u72B6\u6001",buttonSize:"\u6309\u94AE\u5C3A\u5BF8",normalButton:"\u5E38\u89C4\u6309\u94AE",smallButton:"\u5C0F\u578B\u6309\u94AE",miniButton:"\u8FF7\u4F60\u6309\u94AE",largeButton:"\u5927\u578B\u6309\u94AE",blockButton:"\u5757\u7EA7\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",backgroundTextColor:"\u80CC\u666F/\u6587\u5B57",linearGradientColor:"\u4F7F\u7528\u6E10\u53D8",roundButton:"\u5706\u5F62\u6309\u94AE",event:"\u6CE8\u518C\u4E8B\u4EF6",click:"\u70B9\u51FB",touchstart:"\u89E6\u6478",autoLoading:"\u81EA\u52A8\u52A0\u8F7D",clickSuccess:"\u70B9\u51FB\u6210\u529F",touchstartSuccess:"\u89E6\u6478\u6210\u529F"},N={themeColorButton:"Theme Color Button",defaultButton:"Default Button",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Event",click:"Click",touchstart:"Touchstart",autoLoading:"Auto Loading",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success"};const{add:k,use:I,pack:p,packs:nt,merge:et}=h(),U=c=>{E(c),I(c)};_("zh-CN",x);_("en-US",S);k("zh-CN",D);k("en-US",N);const G={components:{VarButton:g,VarIcon:y,AppType:C},setup(){const c=()=>{m.success(p.value.clickSuccess)},B=()=>{m.success(p.value.touchstartSuccess)},f=()=>new Promise(i=>{setTimeout(i,2e3)});A(U),F(b);const a=d.touchmoveForbid;return v(i=>{i==="pc"&&(d.touchmoveForbid=!1)}),j(()=>{d.touchmoveForbid=a}),{pack:p,handleClick:c,handleTouchstart:B,handleAutoLoadingClick:f}}};function P(c,B,f,a,i,V){const l=s("app-type"),e=s("var-button"),r=s("var-icon");return w(),z(L,null,[t(l,null,{default:u(()=>[o(n(a.pack.themeColorButton),1)]),_:1}),t(e,null,{default:u(()=>[o(n(a.pack.defaultButton),1)]),_:1}),t(e,{type:"primary"},{default:u(()=>[o(n(a.pack.primaryButton),1)]),_:1}),t(e,{type:"info"},{default:u(()=>[o(n(a.pack.infoButton),1)]),_:1}),t(e,{type:"success"},{default:u(()=>[o(n(a.pack.successButton),1)]),_:1}),t(e,{type:"warning"},{default:u(()=>[o(n(a.pack.warningButton),1)]),_:1}),t(e,{type:"danger"},{default:u(()=>[o(n(a.pack.dangerButton),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.textButton),1)]),_:1}),t(e,{text:"",outline:"",type:"primary"},{default:u(()=>[o(n(a.pack.outlineButton),1)]),_:1}),t(e,{text:"",type:"primary"},{default:u(()=>[o(n(a.pack.plainTextButton),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.disabledStatus),1)]),_:1}),t(e,{disabled:""},{default:u(()=>[o(n(a.pack.disabledStatus),1)]),_:1}),t(e,{disabled:"",text:"",outline:""},{default:u(()=>[o(n(a.pack.disabledStatus),1)]),_:1}),t(e,{disabled:"",text:""},{default:u(()=>[o(n(a.pack.disabledStatus),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"primary"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"info","loading-type":"rect"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"success","loading-type":"disappear"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"danger","loading-type":"cube"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"warning","loading-type":"wave"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.buttonSize),1)]),_:1}),t(e,{type:"primary"},{default:u(()=>[o(n(a.pack.normalButton),1)]),_:1}),t(e,{type:"success",size:"small"},{default:u(()=>[o(n(a.pack.smallButton),1)]),_:1}),t(e,{type:"warning",size:"mini"},{default:u(()=>[o(n(a.pack.miniButton),1)]),_:1}),t(e,{type:"danger",size:"large"},{default:u(()=>[o(n(a.pack.largeButton),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.blockButton),1)]),_:1}),t(e,{block:"",type:"primary"},{default:u(()=>[o(n(a.pack.blockButton),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.customColor),1)]),_:1}),t(e,{color:"#69dbaa","text-color":"#eee"},{default:u(()=>[o(n(a.pack.backgroundTextColor),1)]),_:1}),t(e,{color:"linear-gradient(to right, #69dbaa, #3a7afe)","text-color":"#fff"},{default:u(()=>[o(n(a.pack.linearGradientColor),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.roundButton),1)]),_:1}),t(e,{type:"primary",round:""},{default:u(()=>[t(r,{name:"plus"})]),_:1}),t(e,{type:"info",round:""},{default:u(()=>[t(r,{name:"information"})]),_:1}),t(e,{type:"success",round:""},{default:u(()=>[t(r,{name:"check"})]),_:1}),t(e,{type:"warning",round:""},{default:u(()=>[t(r,{name:"warning"})]),_:1}),t(e,{type:"danger",round:""},{default:u(()=>[t(r,{name:"window-close"})]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.event),1)]),_:1}),t(e,{type:"success",onClick:a.handleClick},{default:u(()=>[o(n(a.pack.click),1)]),_:1},8,["onClick"]),t(e,{type:"success",onTouchstart:a.handleTouchstart},{default:u(()=>[o(n(a.pack.touchstart),1)]),_:1},8,["onTouchstart"]),t(e,{type:"success",onClick:a.handleAutoLoadingClick,"auto-loading":""},{default:u(()=>[o(n(a.pack.autoLoading),1)]),_:1},8,["onClick"])],64)}var lt=T(G,[["render",P],["__scopeId","data-v-25afff66"]]);export{lt as default};
