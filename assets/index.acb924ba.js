import{t as m,e as $}from"./shared.506a394a.js";import{b as j,f as N}from"./components.8013e964.js";import{a as O,b as z}from"./index.580852d3.js";import{t as P}from"./elements.6395be39.js";import{_ as h}from"./elevation.f7de2a7a.js";import{d as k,r as w,b as t,y as R,o as U,c as B,G as E,p as L,n as I}from"./vendor.efca09d3.js";const K={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},onClick:{type:Function},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]}};function W(){const{parentProvider:e,bindParent:n}=j(O),{index:s}=N(z);return(!e||!n||!s)&&console.warn("col must in row"),{index:s,row:e,bindRow:n}}const Y=k({name:"VarCol",props:K,setup(e){const n=w({left:0,right:0}),s=t(()=>m(e.span)),u=t(()=>m(e.offset)),p=t(()=>e.xs),c=t(()=>e.sm),i=t(()=>e.md),S=t(()=>e.lg),v=t(()=>e.xl),{row:l,bindRow:f}=W(),y={setPadding(o){n.value=o}},C=(o,a)=>{if(!a)return[];const r=[];if($(a)){const{span:g,offset:b}=a;g&&r.push(`var-col--span-${o}-${g}`),b&&r.push(`var-col--offset-${o}-${b}`)}else r.push(`var-col--span-${o}-${a}`);return r};return R([()=>e.span,()=>e.offset],()=>{l==null||l.computePadding()}),f==null||f(y),{padding:n,toNumber:m,toSizeUnit:P,getSize:C,span:s,offset:u,xs:p,sm:c,md:i,lg:S,xl:v}}});function A(e,n,s,u,p,c){return U(),B("div",{class:L(["var-col var--box",[e.span?`var-col--span-${e.toNumber(e.span)}`:null,e.offset?`var-col--offset-${e.toNumber(e.offset)}`:null,...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl)]]),style:I({paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...i)=>e.onClick&&e.onClick(...i))},[E(e.$slots,"default")],6)}var d=h(Y,[["render",A]]);d.install=function(e){e.component(d.name,d)};export{d as C};
