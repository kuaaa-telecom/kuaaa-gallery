import{u as q,r as l,j as e,n as i,L as T,R as k,a as $}from"./index-xzhIli1V.js";import{c as M,L as A,g as G}from"./galleryItems-CAGxsr6X.js";/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=M("outline","arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var L=M("outline","arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]]);const y={ㅂ:"q",ㅃ:"q",ㅈ:"w",ㅉ:"w",ㄷ:"e",ㄸ:"e",ㄱ:"r",ㄲ:"r",ㅅ:"t",ㅆ:"t",ㅛ:"y",ㅕ:"u",ㅑ:"i",ㅐ:"o",ㅒ:"o",ㅔ:"p",ㅖ:"p",ㅁ:"a",ㄴ:"s",ㅇ:"d",ㄹ:"f",ㅎ:"g",ㅗ:"h",ㅓ:"j",ㅏ:"k",ㅣ:"l",ㅋ:"z",ㅌ:"x",ㅊ:"c",ㅍ:"v",ㅠ:"b",ㅜ:"n",ㅡ:"m",ㅘ:"hk",ㅙ:"ho",ㅚ:"hl",ㅝ:"nj",ㅞ:"np",ㅟ:"nl",ㅢ:"ml",ᆨ:"q",ᆩ:"q",ᆪ:"rt",ᆫ:"s",ᆬ:"sw",ᆭ:"sg",ᆮ:"e",ᆯ:"f",ᆰ:"fr",ᆱ:"fa",ᆲ:"fq",ᆳ:"ft",ᆴ:"fx",ᆵ:"fv",ᆶ:"fg",ᆷ:"a",ᆸ:"q",ᆹ:"qt",ᆺ:"t",ᆻ:"T",ᆼ:"d",ᆽ:"w",ᆾ:"c",ᆿ:"z",ᇀ:"x",ᇁ:"v",ᇂ:"g"},I={ᄀ:"ㄱ",ᄁ:"ㄲ",ᄂ:"ㄴ",ᄃ:"ㄷ",ᄄ:"ㄸ",ᄅ:"ㄹ",ᄆ:"ㅁ",ᄇ:"ㅂ",ᄈ:"ㅃ",ᄉ:"ㅅ",ᄊ:"ㅆ",ᄋ:"ㅇ",ᄌ:"ㅈ",ᄍ:"ㅉ",ᄎ:"ㅊ",ᄏ:"ㅋ",ᄐ:"ㅌ",ᄑ:"ㅍ",ᄒ:"ㅎ",ᅡ:"ㅏ",ᅢ:"ㅐ",ᅣ:"ㅑ",ᅤ:"ㅒ",ᅥ:"ㅓ",ᅦ:"ㅔ",ᅧ:"ㅕ",ᅨ:"ㅖ",ᅩ:"ㅗ",ᅪ:"ㅘ",ᅫ:"ㅙ",ᅬ:"ㅚ",ᅭ:"ㅛ",ᅮ:"ㅜ",ᅯ:"ㅝ",ᅰ:"ㅞ",ᅱ:"ㅟ",ᅲ:"ㅠ",ᅳ:"ㅡ",ᅴ:"ㅢ",ᅵ:"ㅣ"},R=r=>r.split("").map(o=>{const n=o.charCodeAt(0);if(n<44032||n>55203)return o;const s=Math.floor((n-44032)/588),c=Math.floor((n-44032)%588/28),d=(n-44032)%28;return d?String.fromCharCode(4352+s,4449+c,4519+d):String.fromCharCode(4352+s,4449+c)}).join(""),N=r=>r.split("").map(o=>{if(o in y)return y[o];if(o in I){const n=I[o];return y[n]}return o}).join(""),u=r=>N(R(r)).trim().toLowerCase().replace(/[^a-zA-Z0-9]/g,""),Q=i.li`
  aspect-ratio: 1;
`,U=i(T)`
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
`,_=i.span`
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
`,D=i.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  opacity: 0;
  transition: opacity 0.2s;
`,E=i.span`
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
`,H=i.span`
  font-size: 16px;
`,P=({item:r})=>{const{register:o,deregister:n}=q(),s=l.useRef(null),[c,d]=l.useState(!1);return l.useEffect(()=>{if(s.current&&!c)return o(s.current,m=>{if(m.intersectionRatio>0){const g=new Image;g.onload=()=>{d(!0)},g.src="https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev"+r.thumbnail}}),()=>{n()}},[n,c,r.thumbnail,o]),e.jsx(Q,{ref:s,children:e.jsxs(U,{href:`/kuaaa-gallery//${r.id.replace(/^\//,"").replace(/\/$/,"")}/`,children:[e.jsx(E,{style:{...c&&{backgroundImage:`url(https://pub-ff8a0fbd3b564db39a4670376b4d99de.r2.dev${r.thumbnail})`,backgroundSize:"cover",backgroundPosition:"center",opacity:1},transitionDelay:`${Math.random()*.4}s, 0s`},className:"gallery-image"}),e.jsx(_,{className:"gallery-title",children:e.jsx(H,{children:r.title})}),e.jsx(D,{className:"gallery-border"})]})})},O=i.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
`,w=i.div`
  width: ${r=>r.$width};
  height: ${r=>r.$height};
`,F=i.input`
  width: 100%;
  height: auto;
  line-height: normal;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.8em 0.5em;
  background: #282828;
  color: white;
  border-bottom: 1px solid white;
`,B=i.div`
  position: absolute;
  right: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  color: white;
  gap: 8px;
`,S=i.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  &:hover {
    background-color: #ffffff35;
  }
`,V=i.ul`
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
`,W=({items:r,queryParam:o,navigate:n})=>{const[s,c]=l.useState(o),[d,m]=l.useState("desc"),g=l.useMemo(()=>{let t;return a=>{clearTimeout(t),t=setTimeout(()=>c(a),200)}},[]),b=l.useMemo(()=>{let t;return()=>{clearTimeout(t),t=setTimeout(()=>{n(s?{search:{query:s}}:{to:"/kuaaa-gallery/",search:{query:""}})},200)}},[n,s]);l.useEffect(()=>{b()},[s,b]);const f=l.useMemo(()=>{const t=u(s);return r.filter(a=>{var p,h,v;return t?u(a.title).includes(t)||u(a.author??"").includes(t)||u(a.description??"").includes(t)||((p=a.equipments)==null?void 0:p.some(x=>u(x).includes(t)))||((h=a.softwares)==null?void 0:h.some(x=>u(x).includes(t)))||((v=a.location)==null?void 0:v.includes(t)):!0})},[r,s]),C=l.useMemo(()=>{const t=f.toSorted((a,j)=>{var p,h;return(((p=a.date)==null?void 0:p.getTime())||0)-(((h=j.date)==null?void 0:h.getTime())||0)});return d==="asc"?t:t.reverse()},[f,d]);return console.log(f),e.jsxs(e.Fragment,{children:[e.jsxs(O,{children:[e.jsx(w,{$height:"80px"}),e.jsx(F,{type:"text",placeholder:"찾아보기",defaultValue:o,onChange:t=>g(t.target.value)}),e.jsx(w,{$height:"80px"}),e.jsxs(B,{children:[d==="asc"?e.jsx(S,{children:e.jsx(L,{size:24,onClick:()=>m("desc")})}):e.jsx(S,{children:e.jsx(z,{size:24,onClick:()=>m("asc")})}),"촬영일"]}),e.jsx(w,{$height:"80px"})]}),e.jsx(V,{children:C.map(t=>e.jsx(P,{item:t},t.id))})]})},J=function(){const{query:o}=k.useSearch(),n=$({from:k.fullPath});return e.jsx(A,{children:e.jsx(W,{items:G,queryParam:o,navigate:n})})};export{J as component};
