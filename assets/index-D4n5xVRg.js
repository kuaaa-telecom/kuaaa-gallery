import{u as $,r as a,j as e,n as s,L as M,R as v,a as G}from"./index-B7G7gEan.js";import{c as k,L as C,g as T}from"./galleryItems-DVVNJGFq.js";/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var R=k("outline","arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var L=k("outline","arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]);const q=s.li`
  aspect-ratio: 1;
`,z=s(M)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus {
    & .gallery-image {
      transform: scale(1.1);
    }
    & .gallery-title {
      opacity: 1;
    }
    & .gallery-border {
      opacity: 1;
    }
  }
`,A=s.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s;
`,E=s.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  opacity: 0;
  transition: opacity 0.2s;
`,N=s.span`
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition:
    opacity 0.8s,
    transform 0.2s;
`,U=s.span`
  font-size: 16px;
`,D=({item:o})=>{const{register:n,deregister:i}=$(),r=a.useRef(null),[l,c]=a.useState(!1);return a.useEffect(()=>{if(r.current&&!l)return n(r.current,p=>{if(p.intersectionRatio>0){const h=new Image;h.onload=()=>{c(!0)},h.src="https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev"+o.thumbnail}}),()=>{i()}},[i,l,o.thumbnail,n]),e.jsx(q,{ref:r,children:e.jsxs(z,{href:`/kuaaa-gallery//${o.id.replace(/^\//,"").replace(/\/$/,"")}/`,children:[e.jsx(N,{style:{...l&&{backgroundImage:`url(https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev${o.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",opacity:1},transitionDelay:`${Math.random()*.4}s, 0s`},className:"gallery-image"}),e.jsx(A,{className:"gallery-title",children:e.jsx(U,{children:o.title})}),e.jsx(E,{className:"gallery-border"})]})})},P=s.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
`,y=s.div`
  width: ${o=>o.$width};
  height: ${o=>o.$height};
`,Q=s.input`
  width: 100%;
  height: auto;
  line-height: normal;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.8em 0.5em;
  background: #282828;
  color: white;
  border-bottom: 1px solid white;
`,B=s.div`
  position: absolute;
  right: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  color: white;
  gap: 8px;
`,I=s.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  &:hover {
    background-color: #ffffff35;
  }
`,F=s.ul`
  display: grid;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  @media (max-width: 1920px) {
    grid-template-columns: repeat(4, 1fr); /* 240px - 480px */
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr); /* 180px - 320px */
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr); /* 0px - 270px */
  }
`,H=({items:o,queryParam:n,navigate:i})=>{const[r,l]=a.useState(n),[c,p]=a.useState("desc"),h=a.useMemo(()=>{let t;return m=>{clearTimeout(t),t=setTimeout(()=>l(m),200)}},[]),w=a.useMemo(()=>{let t;return()=>{clearTimeout(t),t=setTimeout(()=>{i(r?{search:{query:r}}:{to:"/kuaaa-gallery/",search:{query:""}})},200)}},[i,r]);a.useEffect(()=>{w()},[r,w]);const f=a.useMemo(()=>o.filter(t=>{var g,d,u,b,j;return r?t.title.includes(r)||((g=t.author)==null?void 0:g.includes(r))||((d=t.description)==null?void 0:d.includes(r))||((u=t.equipments)==null?void 0:u.some(x=>{if(x.includes(r))return!0}))||((b=t.softwares)==null?void 0:b.some(x=>{if(x.includes(r))return!0}))||((j=t.location)==null?void 0:j.includes(r)):!0}),[o,r]),S=a.useMemo(()=>{const t=f.toSorted((m,g)=>{var d,u;return(((d=m.date)==null?void 0:d.getTime())||0)-(((u=g.date)==null?void 0:u.getTime())||0)});return c==="asc"?t:t.reverse()},[f,c]);return console.log(f),e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:[e.jsx(y,{$height:"80px"}),e.jsx(Q,{type:"text",placeholder:"찾아보기",defaultValue:n,onChange:t=>h(t.target.value)}),e.jsx(y,{$height:"80px"}),e.jsxs(B,{children:[c==="asc"?e.jsx(I,{children:e.jsx(L,{size:24,onClick:()=>p("desc")})}):e.jsx(I,{children:e.jsx(R,{size:24,onClick:()=>p("asc")})}),"촬영일"]}),e.jsx(y,{$height:"80px"})]}),e.jsx(F,{children:S.map(t=>e.jsx(D,{item:t},t.id))})]})},J=function(){const{query:n}=v.useSearch(),i=G({from:v.fullPath});return e.jsx(C,{children:e.jsx(H,{items:T,queryParam:n,navigate:i})})};export{J as component};
