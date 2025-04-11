import{r as s,j as e,n as r,L as d}from"./index-6PyNlUgn.js";import{u as m,L as g,g as u}from"./Layout-YAm8_LR0.js";const y=r.li`
  aspect-ratio: 1;
`,x=r(d)`
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
`,h=r.span`
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
`,f=r.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  opacity: 0;
  transition: opacity 0.2s;
`,b=r.span`
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
`,w=r.span`
  font-size: 16px;
`,I=({item:t})=>{const{register:a,deregister:o}=m(),i=s.useRef(null),[n,c]=s.useState(!1);return s.useEffect(()=>{if(i.current&&!n)return a(i.current,p=>{if(p.intersectionRatio>0){const l=new Image;l.onload=()=>{c(!0)},l.src=t.thumbnail}}),()=>{o()}},[o,n,t.thumbnail,a]),e.jsx(y,{ref:i,children:e.jsxs(x,{href:`/${t.id.replace(/^\//,"").replace(/\/$/,"")}/`,children:[e.jsx(b,{style:{...n&&{backgroundImage:`url(${t.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",opacity:1},transitionDelay:`${Math.random()*.4}s, 0s`},className:"gallery-image"}),e.jsx(h,{className:"gallery-title",children:e.jsx(w,{children:t.title})}),e.jsx(f,{className:"gallery-border"})]})})},j=r.ul`
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
`,G=({items:t})=>e.jsx(j,{children:t.map(a=>e.jsx(I,{item:a},a.id))}),L=function(){return e.jsx(g,{children:e.jsx(G,{items:u})})};export{L as component};
