import{u as d,r as s,j as e,n as a,L as m}from"./index-BDoXr_yc.js";import{L as u,g}from"./galleryItems-CVOk_Dc1.js";const y=a.li`
  aspect-ratio: 1;
`,f=a(m)`
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
`,h=a.span`
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
`,x=a.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  opacity: 0;
  transition: opacity 0.2s;
`,b=a.span`
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
`,w=a.span`
  font-size: 16px;
`,I=({item:t})=>{const{register:r,deregister:l}=d(),i=s.useRef(null),[n,c]=s.useState(!1);return s.useEffect(()=>{if(i.current&&!n)return r(i.current,p=>{if(p.intersectionRatio>0){const o=new Image;o.onload=()=>{c(!0)},o.src="https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev"+t.thumbnail}}),()=>{l()}},[l,n,t.thumbnail,r]),e.jsx(y,{ref:i,children:e.jsxs(f,{href:`/kuaaa-gallery//${t.id.replace(/^\//,"").replace(/\/$/,"")}/`,children:[e.jsx(b,{style:{...n&&{backgroundImage:`url(https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev${t.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",opacity:1},transitionDelay:`${Math.random()*.4}s, 0s`},className:"gallery-image"}),e.jsx(h,{className:"gallery-title",children:e.jsx(w,{children:t.title})}),e.jsx(x,{className:"gallery-border"})]})})},j=a.ul`
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
`,k=({items:t})=>e.jsx(j,{children:t.map(r=>e.jsx(I,{item:r},r.id))}),L=function(){return e.jsx(u,{children:e.jsx(k,{items:g})})};export{L as component};
