import{I as F}from"./index.4e162609.js";import{R as S}from"./index.b50b8baf.js";import{S as k}from"./index.a1f4865b.js";import{A as j}from"./AppType.e6037b59.js";import{c as p}from"./index.45528475.js";import{q as z,r as _,x as I,L as B,C as N,e as x,f as E,o as d,c as f,i as o,j as t,a as b,F as g,k as A,m as l,t as n,w as L,n as U}from"./vendor.efca09d3.js";import{d as D}from"./index.77fe3760.js";import{u as T,a as v,_ as V,b as q,c as M}from"./en-US.f8762106.js";import{w as R,a as P,b as G}from"./utils.77a9ee56.js";import{_ as H}from"./elevation.49b7c3d2.js";import"./shared.61f3a471.js";import"./elements.a1d73ee7.js";import"./index.6a5b4e65.js";import"./zIndex.2548bfbd.js";import"./components.7ab0cf36.js";import"./lock.363e6814.js";var J=["checkbox-marked-circle","check-circle-outline","information","information-outline","warning","alert-outline","error","alert-circle-outline","checkbox-marked","checkbox-marked-outline","checkbox-blank-outline","radio-marked","checkbox-marked-circle-outline","radio-blank","close-circle","close-circle-outline","close-box","close-box-outline","minus-circle","minus-circle-outline","star","star-half-full","star-outline","heart","heart-half-full","heart-outline","delete","trash-can","trash-can-outline","minus-box","minus-box-outline","account-circle","account-circle-outline","cog","cog-outline","map-marker-radius","map-marker-radius-outline","camera","camera-outline","cart","cart-outline","phone","phone-outline","image","image-outline","bell","bell-outline","home","home-outline","map-marker","map-marker-outline","magnify-plus","magnify-plus-outline","magnify-minus","magnify-minus-outline","play-circle","play-circle-outline","help-circle","help-circle-outline","plus-circle","plus-circle-outline","check","window-close","plus","minus","chevron-up","chevron-down","chevron-left","chevron-right","menu-up","menu-down","menu-left","menu-right","upload","download","format-list-checkbox","menu","menu-open","dots-vertical","message-text-outline","message-processing-outline","white-balance-sunny","weather-cloudy","weather-lightning","weather-pouring","weather-snowy","weather-rainy","translate","magnify","github","refresh","arrow-down","power","file-document-outline","fire","wifi","wrench","cake-variant","notebook","cellphone","weather-night","xml","content-copy","qrcode-scan","barcode-scan","shopping","shopping-outline","card-account-details","card-account-details-outline"],K={iconSize:"\u56FE\u6807\u5C3A\u5BF8",iconColor:"\u56FE\u6807\u989C\u8272",useImage:"\u4F7F\u7528\u56FE\u7247",events:"\u6CE8\u518C\u4E8B\u4EF6",iconAnimation:"\u56FE\u6807\u5207\u6362\u52A8\u753B (\u70B9\u51FB\u5207\u6362)",toggle:"\u5207\u6362",iconList:"\u56FE\u6807\u5217\u8868 (\u70B9\u51FB\u590D\u5236)",copySuccess:"\u590D\u5236\u6210\u529F",clickSuccess:"\u70B9\u51FB\u6210\u529F"},O={iconSize:"Icon Size",iconColor:"Icon color",useImage:"Use Image",events:"Events",iconAnimation:"Icon Animation (click toggle)",toggle:"Toggle",iconList:"Icon List (click copy)",copySuccess:"copy success",clickSuccess:"Click success"};const{add:w,use:Q,pack:y,packs:_e,merge:xe}=T(),W=r=>{M(r),Q(r)};v("zh-CN",V);v("en-US",q);w("zh-CN",K);w("en-US",O);const X={name:"IconExample",components:{VarIcon:F,AppType:j},directives:{Ripple:S},setup(){const r=z(J),i=_("information"),m=_("#fff"),e=()=>{i.value=i.value==="information"?"checkbox-marked-circle":"information"};I(()=>{new B(".example__icon",{text:c=>`<var-icon name="${c.getAttribute("data-clipboard-text")}" />`}).on("success",c=>{k.success(`${c.text}${y.value.copySuccess}!`)})}),R(W),P(D,s=>{m.value=s==="darkThemes"?"#303030":"#fff"});const h=p.touchmoveForbid;return G(s=>{s==="pc"&&(p.touchmoveForbid=!1)}),N(()=>{p.touchmoveForbid=h}),{pack:y,background:m,iconNames:r,iconName:i,toggle:e,Snackbar:k}}},Y={class:"example__icons"},Z=["data-clipboard-text"],$={class:"example__icon-name"};function ee(r,i,m,e,h,s){const c=x("app-type"),a=x("var-icon"),C=E("ripple");return d(),f(g,null,[o(c,null,{default:t(()=>[l(n(e.pack.iconSize),1)]),_:1}),o(a,{class:"example__animation-icon",name:"checkbox-marked-circle"}),o(a,{class:"example__animation-icon",name:"checkbox-marked-circle",size:26}),o(c,null,{default:t(()=>[l(n(e.pack.iconColor),1)]),_:1}),o(a,{class:"example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff"}),o(a,{class:"example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",size:26}),o(c,null,{default:t(()=>[l(n(e.pack.useImage),1)]),_:1}),o(a,{class:"example__animation-icon",name:"https://varlet.gitee.io/varlet-ui/cat.jpg",size:32}),o(c,null,{default:t(()=>[l(n(e.pack.events),1)]),_:1}),o(a,{class:"example__animation-icon",name:"checkbox-marked-circle",color:"#2979ff",onClick:i[0]||(i[0]=()=>e.Snackbar.success(e.pack.clickSuccess))}),o(c,null,{default:t(()=>[l(n(e.pack.iconAnimation),1)]),_:1}),o(a,{class:"example__animation-icon",color:"#2979ff",size:30,transition:300,name:e.iconName,onClick:e.toggle},null,8,["name","onClick"]),o(c,null,{default:t(()=>[l(n(e.pack.iconList),1)]),_:1}),b("div",Y,[(d(!0),f(g,null,A(e.iconNames,u=>L((d(),f("div",{class:"example__icon var-elevation--2",style:U({background:e.background}),"data-clipboard-text":u,key:u},[o(a,{name:u},null,8,["name"]),b("div",$,n(u),1)],12,Z)),[[C]])),128))])],64)}var be=H(X,[["render",ee],["__scopeId","data-v-3c6fd01c"]]);export{be as default};
