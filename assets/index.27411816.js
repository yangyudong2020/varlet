import{d as k,r as b,x as g,Y as h,e as i,o as l,c as d,G as y,p as j,R as B,i as u,j as _,F as x,k as C,l as T,m as S,t as $}from"./vendor.efca09d3.js";import{B as w}from"./index.91fedec9.js";import{I as V}from"./index.4e162609.js";import{h as E,j as L,c as N,t as I}from"./shared.61f3a471.js";import{b as M,s as F,c as H}from"./elements.a1d73ee7.js";import{_ as v}from"./elevation.49b7c3d2.js";import{C as D}from"./index.cbf408fe.js";import{d as q}from"./index.77fe3760.js";import{a as z}from"./utils.77a9ee56.js";import"./index.b50b8baf.js";import"./index.45528475.js";import"./index.6a5b4e65.js";import"./components.7ab0cf36.js";const A={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},target:{type:String},onClick:{type:Function}};const G=k({name:"VarBackTop",components:{VarButton:w,VarIcon:V},props:A,setup(e){let t;const n=b(!1),s=o=>{var f;(f=e.onClick)==null||f.call(e,o);const r=M(t);F(t,{left:r,duration:e.duration,animation:E})},c=L(()=>{n.value=H(t)>=I(e.visibilityHeight)},200),a=()=>{if(!N(e.target))throw Error('[Varlet] BackTop: type of prop "target" should be a string');const o=document.querySelector(e.target);if(!o)throw Error('[Varlet] BackTop: "target" should be a selector');return o};return g(()=>{t=e.target?a():window,t.addEventListener("scroll",c)}),h(()=>{t.removeEventListener("scroll",c)}),{show:n,click:s}}});function O(e,t,n,s,p,c){const a=i("var-icon"),o=i("var-button");return l(),d("div",{class:j(["var-back-top",[e.show?"var-back-top--active":null]]),onClick:t[0]||(t[0]=B((...r)=>e.click&&e.click(...r),["stop"]))},[y(e.$slots,"default",{},()=>[u(o,{type:"primary",round:"","var-back-top-cover":""},{default:_(()=>[u(a,{name:"chevron-up"})]),_:1})])],2)}var m=v(G,[["render",O]]);m.install=function(e){e.component(m.name,m)};const R=[...Array(100).keys()],U={name:"BackTopExample",components:{VarBackTop:m,VarCell:D},setup(){return z(q),{lists:R}}};function Y(e,t,n,s,p,c){const a=i("var-cell"),o=i("var-back-top");return l(),d("div",null,[(l(!0),d(x,null,C(s.lists,r=>(l(),T(a,{key:r},{default:_(()=>[S("Scroll to bottom "+$(r),1)]),_:2},1024))),128)),u(o,{duration:300})])}var se=v(U,[["render",Y]]);export{se as default};
