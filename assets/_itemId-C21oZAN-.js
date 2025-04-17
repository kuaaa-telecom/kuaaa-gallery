import{j as e,n as i,b as l}from"./index-BWIUi_LV.js";import{c as d,g as p,b as x,I as h,a as m,L as g}from"./galleryItems-B841lVbJ.js";/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var f=d("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j=d("outline","edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]);const v=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cacaca;
  font-size: 16px;
  font-weight: 300;
  padding-top: calc(50svh - 96px);
`,w=()=>e.jsx(v,{children:"사진이 존재하지 않습니다."}),u=i.img`
  width: 100%;
  max-height: 100vmin;
  object-fit: contain;
`,y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,I=i.div`
  width: 100%;
  max-width: 1200px;
  padding: 64px 2em;
  color: white;
`,b=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`,M=i.div`
  font-weight: 700;
  font-size: 2em;
`,r=i.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #636363;
  margin: 32px 0;
`,c=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`,s=i.div`
  font-weight: 300;
  font-size: 1em;
  color: #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,k=i.div`
  font-weight: 400;
  font-size: 1em;
  color: #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  word-break: keep-all;
  line-height: 1.4em;
`,z=o=>{const{itemId:a}=o,t=p.find(n=>n.id===a);return t?e.jsxs(e.Fragment,{children:[e.jsx(u,{src:"https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev"+t.image[0]}),e.jsx(y,{children:e.jsxs(I,{children:[e.jsxs(b,{children:[e.jsx(M,{children:t.title})," ",e.jsxs(c,{children:[t.date&&e.jsxs(s,{children:[e.jsx(f,{size:"1.2em"}),t.date.toLocaleDateString()]}),t.author&&e.jsxs(s,{children:[e.jsx(x,{size:"1.2em"})," ",t.author]}),t.location&&e.jsxs(s,{children:[e.jsx(h,{size:"1.2em"})," ",t.location]})]})]}),(t.equipments||t.softwares)&&e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsxs(c,{children:[t.equipments&&t.equipments.map(n=>e.jsxs(s,{children:[e.jsx(m,{size:"1.2em"})," ",n]},n)),t.softwares&&t.softwares.map(n=>e.jsxs(s,{children:[e.jsx(j,{size:"1.2em"})," ",n]},n))]})]}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(k,{children:t.description})]})]})})]}):e.jsx(w,{})},D=function(){const{itemId:a}=l.useParams();return e.jsx(g,{children:e.jsx(z,{itemId:a})})};export{D as component};
