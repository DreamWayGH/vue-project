import{d as u,o as p,c as d,a as n,b as C,s as k,u as $,r as S,e as r,f as e,w as i,g as h,h as g}from"./index-jzzUqM07.js";const z="/img/logo.jpg",y="/img/logoIcon.png",B={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},I=n("path",{d:"M368 192H192v-80a64 64 0 1 1 128 0a16 16 0 0 0 32 0a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64z",fill:"currentColor"},null,-1),W=[I],M=u({name:"LockOpen",render:function(a,s){return p(),d("svg",B,W)}}),b={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},K=n("path",{d:"M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88z",fill:"currentColor"},null,-1),P=n("path",{d:"M467.83 432H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432z",fill:"currentColor"},null,-1),U=n("path",{d:"M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91z",fill:"currentColor"},null,-1),V=n("path",{d:"M212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z",fill:"currentColor"},null,-1),L=[K,P,U,V],A=u({name:"People",render:function(a,s){return p(),d("svg",b,L)}}),H=C("user",{state(){return{loginStatus:!1}},actions:{}}),N={class:"logoWrap"},O=n("img",{src:z,alt:""},null,-1),R={class:"loginWrap"},j=n("div",{class:"loginImg"},[n("img",{src:y,alt:""})],-1),E={class:"loginInputWrap"},T={class:"loginInputWrap"},q=n("div",null,[n("span",null,[n("div")]),n("p",null,"或"),n("span",null,[n("div")])],-1),G=u({__name:"LoginView",setup(_){const a=H(),{loginStatus:s}=k(a),w=$(),t=S({username:"",password:""}),c=()=>{s.value=!0},f=()=>{s.value=!1,w.push("/home")};return(D,o)=>{const m=r("n-icon"),v=r("n-input"),x=r("n-space");return p(),d("div",N,[O,n("div",R,[j,e(x,{vertical:""},{default:i(()=>[n("div",E,[e(v,{value:t.value.username,"onUpdate:value":o[0]||(o[0]=l=>t.value.username=l),placeholder:"Username",id:"username",onKeydown:o[1]||(o[1]=h(l=>c(),["enter"])),maxlength:20,class:"loginInputStyle",size:"large"},{prefix:i(()=>[e(m,{component:g(A)},null,8,["component"])]),_:1},8,["value"])]),n("div",T,[e(v,{value:t.value.password,"onUpdate:value":o[2]||(o[2]=l=>t.value.password=l),type:"password","show-password-on":"click",placeholder:"Password",maxlength:20,size:"large",class:"loginInputStyle",id:"password",onKeydown:h(c,["enter"])},{prefix:i(()=>[e(m,{component:g(M)},null,8,["component"])]),_:1},8,["value","onKeydown"])])]),_:1}),n("div",{class:"loginBtnWrap"},[n("button",{onClick:c},"登入"),n("div",{class:"visitorWrap"},[q,n("p",{onClick:f},"使用訪客登入")])])])])}}});export{G as default};
