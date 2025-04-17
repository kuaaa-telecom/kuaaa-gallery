import{j as e,n,b as d}from"./index-B7G7gEan.js";import{c as a,g as p,L as h}from"./galleryItems-DVVNJGFq.js";/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var x=a("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var g=a("outline","edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var m=a("outline","map","IconMap",[["path",{d:"M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13",key:"svg-0"}],["path",{d:"M9 4v13",key:"svg-1"}],["path",{d:"M15 7v13",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var v=a("outline","telescope","IconTelescope",[["path",{d:"M6 21l6 -5l6 5",key:"svg-0"}],["path",{d:"M12 13v8",key:"svg-1"}],["path",{d:"M3.294 13.678l.166 .281c.52 .88 1.624 1.265 2.605 .91l14.242 -5.165a1.023 1.023 0 0 0 .565 -1.456l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-12.694 7.618c-1.02 .613 -1.357 1.897 -.76 2.905z",key:"svg-2"}],["path",{d:"M14 5l3 5.5",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var f=a("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]);const j=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cacaca;
  font-size: 16px;
  font-weight: 300;
  padding-top: calc(50svh - 96px);
`,y=()=>e.jsx(j,{children:"사진이 존재하지 않습니다."}),u=n.img`
  width: 100%;
  max-height: 100vmin;
  object-fit: contain;
`,w=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,M=n.div`
  width: 100%;
  max-width: 1200px;
  padding: 64px 2em;
  color: white;
`,k=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`,I=n.div`
  font-weight: 700;
  font-size: 2em;
`,c=n.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #636363;
  margin: 32px 0;
`,l=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`,s=n.div`
  font-weight: 300;
  font-size: 1em;
  color: #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,z=n.div`
  font-weight: 400;
  font-size: 1em;
  color: #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  word-break: keep-all;
  line-height: 1.4em;
`,b=r=>{const{itemId:o}=r,t=p.find(i=>i.id===o);return t?e.jsxs(e.Fragment,{children:[e.jsx(u,{src:"https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev"+t.image[0]}),e.jsx(w,{children:e.jsxs(M,{children:[e.jsxs(k,{children:[e.jsx(I,{children:t.title})," ",e.jsxs(l,{children:[t.date&&e.jsxs(s,{children:[e.jsx(x,{size:"1.2em"}),t.date.toLocaleDateString()]}),t.author&&e.jsxs(s,{children:[e.jsx(f,{size:"1.2em"})," ",t.author]}),t.location&&e.jsxs(s,{children:[e.jsx(m,{size:"1.2em"})," ",t.location]})]})]}),(t.equipments||t.softwares)&&e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsxs(l,{children:[t.equipments&&t.equipments.map(i=>e.jsxs(s,{children:[e.jsx(v,{size:"1.2em"})," ",i]})),t.softwares&&t.softwares.map(i=>e.jsxs(s,{children:[e.jsx(g,{size:"1.2em"})," ",i]}))]})]}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(z,{children:t.description})]})]})})]}):e.jsx(y,{})},D=function(){const{itemId:o}=d.useParams();return e.jsx(h,{children:e.jsx(b,{itemId:o})})};export{D as component};
