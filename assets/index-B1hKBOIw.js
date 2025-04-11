import{r as n,j as e,n as a,L as d}from"./index-rGvmUVkC.js";import{u as m,L as g,g as u}from"./galleryItems-B-y9P-et.js";const y=a.li`
  aspect-ratio: 1;
`,x=a(d)`
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
`,f=a.span`
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
`,I=({item:t})=>{const{register:r,deregister:o}=m(),i=n.useRef(null),[l,c]=n.useState(!1);return n.useEffect(()=>{if(i.current&&!l)return console.log(i.current),r(i.current,p=>{if(p.intersectionRatio>0){const s=new Image;s.onload=()=>{c(!0)},s.src="/kuaaa-gallery/"+t.thumbnail}}),()=>{o()}},[o,l,t.thumbnail,r]),e.jsx(y,{ref:i,children:e.jsxs(x,{href:`/kuaaa-gallery//${t.id.replace(/^\//,"").replace(/\/$/,"")}/`,children:[e.jsx(b,{style:{...l&&{backgroundImage:`url(/kuaaa-gallery/${t.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",opacity:1},transitionDelay:`${Math.random()*.4}s, 0s`},className:"gallery-image"}),e.jsx(h,{className:"gallery-title",children:e.jsx(w,{children:t.title})}),e.jsx(f,{className:"gallery-border"})]})})},j=a.ul`
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
`,k=({items:t})=>e.jsx(j,{children:t.map(r=>e.jsx(I,{item:r},r.id))}),L=function(){return e.jsx(g,{children:e.jsx(k,{items:u})})};export{L as component};
