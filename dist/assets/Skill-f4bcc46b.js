import{r as m,j as s}from"./index-86cf052c.js";import{A as p}from"./aos-e5825626.js";const a="https://sam6091260.github.io/shane_page/assets/ok_hand-7d60bd30.png";function g(){const r=m.useRef(null);m.useEffect(()=>{p.init();const e=r.current;if(!e)return;let n=!1,i,l;const d=o=>{n=!0,i=o.pageX,l=e.scrollLeft,e.classList.add("active")},c=o=>{if(!n)return;o.preventDefault();const f=o.pageX-i;e.scrollLeft=l-f},u=()=>{n=!1,e.classList.remove("active")};return e.addEventListener("mousedown",d),e.addEventListener("mousemove",c),e.addEventListener("mouseup",u),()=>{e.removeEventListener("mousedown",d),e.removeEventListener("mousemove",c),e.removeEventListener("mouseup",u)}},[]);const t=e=>{window.innerWidth&&window.scrollTo({top:e,behavior:"smooth"})};return s.jsx(s.Fragment,{children:s.jsxs("section",{children:[s.jsxs("div",{className:"section-top",children:[s.jsx("img",{src:a,alt:"ok","data-aos":"fade-down","data-aos-delay":50}),s.jsx("img",{src:a,alt:"ok","data-aos":"fade-down","data-aos-delay":150}),s.jsx("img",{src:a,alt:"ok","data-aos":"fade-down","data-aos-delay":250})]}),s.jsxs("div",{className:"section-bottom",ref:r,children:[s.jsx("p",{onClick:()=>t(0),children:"user Interface Design"}),s.jsx("p",{onClick:()=>t(1400),children:"graphic Design"}),s.jsx("p",{onClick:()=>t(1860),children:"logo"}),s.jsx("p",{onClick:()=>t(2310),children:"brand"}),s.jsx("p",{onClick:()=>t(900),children:"digital illustration"})]})]})})}export{g as default};
