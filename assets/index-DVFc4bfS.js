import{u as j,r as n,j as r,n as i,L as I,R as b,a as k}from"./index-Cz_W-wc2.js";import{L as $,g as v}from"./galleryItems-DCNPm9Wf.js";const S=i.li`
  aspect-ratio: 1;
`,G=i(I)`
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
`,L=i.span`
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
`,R=i.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  opacity: 0;
  transition: opacity 0.2s;
`,T=i.span`
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
`,q=i.span`
  font-size: 16px;
`,C=({item:a})=>{const{register:o,deregister:s}=j(),t=n.useRef(null),[l,d]=n.useState(!1);return n.useEffect(()=>{if(t.current&&!l)return o(t.current,u=>{if(u.intersectionRatio>0){const c=new Image;c.onload=()=>{d(!0)},c.src="https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev"+a.thumbnail}}),()=>{s()}},[s,l,a.thumbnail,o]),r.jsx(S,{ref:t,children:r.jsxs(G,{href:`/kuaaa-gallery//${a.id.replace(/^\//,"").replace(/\/$/,"")}/`,children:[r.jsx(T,{style:{...l&&{backgroundImage:`url(https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev${a.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",opacity:1},transitionDelay:`${Math.random()*.4}s, 0s`},className:"gallery-image"}),r.jsx(L,{className:"gallery-title",children:r.jsx(q,{children:a.title})}),r.jsx(R,{className:"gallery-border"})]})})},M=i.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
`,w=i.div`
  width: ${a=>a.$width};
  height: ${a=>a.$height};
`,E=i.input`
  width: 100%;
  height: auto;
  line-height: normal;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.8em 0.5em;
  background: #282828;
  color: white;
  border-bottom: 1px solid white;
`,N=i.ul`
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
`,z=({items:a,queryParam:o,navigate:s})=>{const[t,l]=n.useState(o),d=n.useMemo(()=>{let e;return h=>{clearTimeout(e),e=setTimeout(()=>l(h),200)}},[]),u=n.useMemo(()=>{let e;return()=>{clearTimeout(e),e=setTimeout(()=>{s(t?{search:{query:t}}:{to:"/kuaaa-gallery/",search:{query:""}})},200)}},[s,t]);n.useEffect(()=>{u()},[t,u]);const c=n.useMemo(()=>a.filter(e=>{var m,g,f,y,x;return t?e.title.includes(t)||((m=e.author)==null?void 0:m.includes(t))||((g=e.description)==null?void 0:g.includes(t))||((f=e.equipments)==null?void 0:f.some(p=>{if(p.includes(t))return!0}))||((y=e.softwares)==null?void 0:y.some(p=>{if(p.includes(t))return!0}))||((x=e.location)==null?void 0:x.includes(t)):!0}),[a,t]);return console.log(c),r.jsxs(r.Fragment,{children:[r.jsxs(M,{children:[r.jsx(w,{$height:"80px"}),r.jsx(E,{type:"text",placeholder:"찾아보기",defaultValue:o,onChange:e=>d(e.target.value)}),r.jsx(w,{$height:"80px"})]}),r.jsx(N,{children:c.map(e=>r.jsx(C,{item:e},e.id))})]})},U=function(){const{query:o}=b.useSearch(),s=k({from:b.fullPath});return r.jsx($,{children:r.jsx(z,{items:v,queryParam:o,navigate:s})})};export{U as component};
