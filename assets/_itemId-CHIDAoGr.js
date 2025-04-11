import{r,j as e,n,R as k}from"./index-wMNINhJA.js";import{g as C,L as I}from"./galleryItems-BM3AjnDL.js";/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var M={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(o,i,t,s)=>{const c=r.forwardRef(({color:m="currentColor",size:l=24,stroke:v=2,title:d,className:f,children:a,...u},w)=>r.createElement("svg",{ref:w,...M[o],width:l,height:l,className:["tabler-icon",`tabler-icon-${i}`,f].join(" "),strokeWidth:v,stroke:m,...u},[d&&r.createElement("title",{key:"svg-title"},d),...s.map(([j,y])=>r.createElement(j,y)),...Array.isArray(a)?a:[a]]));return c.displayName=`${t}`,c};/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var b=g("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=g("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]);const R=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cacaca;
  font-size: 16px;
  font-weight: 300;
  padding-top: calc(50svh - 96px);
`,E=()=>e.jsx(R,{children:"사진이 존재하지 않습니다."}),L=n.img`
  width: 100%;
  height: calc(100vh - 96px);
  object-fit: contain;
`,D=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,A=n.div`
  width: 100%;
  max-width: 1200px;
  padding: 64px 2em;
  color: white;
`,B=n.div`
  font-weight: 700;
  font-size: 2em;
`,h=n.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #636363;
  margin: 32px 0;
`,p=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`,x=n.div`
  font-weight: 300;
  font-size: 1em;
  color: #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,N=n.div`
  font-weight: 400;
  font-size: 1em;
  color: #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,S=o=>{const{itemId:i}=o,t=C.find(s=>s.id===i);return t?e.jsxs(e.Fragment,{children:[e.jsx(L,{src:"/kuaaa-gallery/"+t.image[0]}),e.jsx(D,{children:e.jsxs(A,{children:[e.jsxs(p,{children:[e.jsx(B,{children:t.title})," ",e.jsxs(x,{children:[e.jsx(b,{size:"1.2em"})," ",t.date.toLocaleDateString()]})]}),e.jsx(h,{}),t.author&&e.jsx(p,{children:e.jsxs(x,{children:[e.jsx(z,{size:"1.2em"})," ",t.author]})}),e.jsx(h,{}),t.description&&e.jsx(N,{children:t.description})]})})]}):e.jsx(E,{})},P=function(){const{itemId:i}=k.useParams();return e.jsx(I,{children:e.jsx(S,{itemId:i})})};export{P as component};
