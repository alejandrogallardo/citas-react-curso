import{j as N,r as d,R as k,a as F}from"./vendor.bb35272f.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};A();const e=N.exports.jsx,a=N.exports.jsxs,S=N.exports.Fragment,j=({children:s})=>e("div",{className:"bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md",children:s}),C=({pacientes:s,setPacientes:n,paciente:o,setPaciente:i})=>{const[t,r]=d.exports.useState(""),[l,m]=d.exports.useState(""),[u,h]=d.exports.useState(""),[b,f]=d.exports.useState(""),[x,g]=d.exports.useState(""),[w,y]=d.exports.useState(!1);d.exports.useEffect(()=>{Object.keys(o).length>0&&(r(o.nombre),m(o.propietario),h(o.email),f(o.fecha),g(o.sintomas))},[o]);const E=()=>{const c=Math.random().toString(36).substr(2),p=Date.now().toString(36);return c+p};return a("div",{className:"md:w-1/2 lg:w-2/5 mx-5",children:[e("h2",{className:"font-black text-3xl text-center",children:"Seguimiento Pacientes"}),a("p",{className:"text-lg mt-5 text-center mb-10",children:["A\xF1ade Pacientes y ","",e("span",{className:"text-indigo-600 font-bold ",children:"Administralos"})]}),a("form",{onSubmit:c=>{if(c.preventDefault(),[t,l,u,b,x].includes("")){console.log("Hay Al Menos un campo vacio"),y(!0);return}y(!1);const p={nombre:t,propietario:l,email:u,fecha:b,sintomas:x};if(o.id){p.id=o.id;const P=s.map(v=>v.id===o.id?p:v);n(P),i({})}else p.id=E(),n([...s,p]);r(""),m(""),h(""),f(""),g("")},className:"bg-white shadow-md rounded-lg py-10 px-5 mb-10",children:[w&&e(j,{children:e("p",{children:"Todos los campos son obligatorios"})}),a("div",{className:"mb-5",children:[e("label",{htmlFor:"mascota",className:"block text-gray-700 uppercase font-bold",children:"Nombre Mascota"}),e("input",{id:"mascota",type:"text",placeholder:"Nombre de la Mascota",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:t,onChange:c=>r(c.target.value)})]}),a("div",{className:"mb-5",children:[e("label",{htmlFor:"propietario",className:"block text-gray-700 uppercase font-bold",children:"Nombre Propietario"}),e("input",{id:"propietario",type:"text",placeholder:"Nombre del Propietario",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:l,onChange:c=>m(c.target.value)})]}),a("div",{className:"mb-5",children:[e("label",{htmlFor:"email",className:"block text-gray-700 uppercase font-bold",children:"Email"}),e("input",{id:"email",type:"email",placeholder:"Email Contacto Propietario",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:u,onChange:c=>h(c.target.value)})]}),a("div",{className:"mb-5",children:[e("label",{htmlFor:"alta",className:"block text-gray-700 uppercase font-bold",children:"Alta"}),e("input",{id:"alta",type:"date",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",value:b,onChange:c=>f(c.target.value)})]}),a("div",{className:"mb-5",children:[e("label",{htmlFor:"sintomas",className:"block text-gray-700 uppercase font-bold",children:"S\xEDntomas"}),e("textarea",{id:"sintomas",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",placeholder:"Describe los S\xEDntomas",value:x,onChange:c=>g(c.target.value)})]}),e("input",{type:"submit",className:"bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors",value:o.id?"Editar Paciente":"Agregar Paciente"})]})]})},L=()=>a("h1",{className:"font-black text-5xl text-center md:w-2/3 mx-auto",children:["Seguimiento Pacientes ","",e("span",{className:"text-indigo-700",children:"Veterinaria"})]}),D=({paciente:s,setPaciente:n,eliminarPaciente:o})=>{const{nombre:i,propietario:t,email:r,fecha:l,sintomas:m,id:u}=s;return a("div",{className:"mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl",children:[a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Nombre: ","",e("span",{className:"font-normal normal-case",children:i})]}),a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Propietario: ","",e("span",{className:"font-normal normal-case",children:t})]}),a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Email: ","",e("span",{className:"font-normal normal-case",children:r})]}),a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Fecha Alta: ","",e("span",{className:"font-normal normal-case",children:l})]}),a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["S\xEDntomas: ","",e("span",{className:"font-normal normal-case",children:m})]}),a("div",{className:"flex justify-between mt-10",children:[e("button",{type:"button",className:"py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg",onClick:()=>n(s),children:"Editar"}),e("button",{type:"button",className:"py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg",onClick:()=>{confirm("Deseas eliminar este paciente?")&&o(u)},children:"Eliminar"})]})]})},O=({pacientes:s,setPaciente:n,eliminarPaciente:o})=>e("div",{className:"md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll",children:s&&s.length?a(S,{children:[e("h2",{className:"font-black text-3xl text-center",children:"Listado Pacientes"}),a("p",{className:"text-xl mt-5 mb-10 text-center",children:["Administra tus ","",e("span",{className:"text-indigo-600 font-bold ",children:"Pacientes y Citas"})]}),s.map(i=>e(D,{paciente:i,setPaciente:n,eliminarPaciente:o},i.id))]}):a(S,{children:[e("h2",{className:"font-black text-3xl text-center",children:"No hay pacientes"}),a("p",{className:"text-xl mt-5 mb-10 text-center",children:["Comienza agregando pacientes ","",e("span",{className:"text-indigo-600 font-bold ",children:"y aparecer\xE1n en este lugar"})]})]})});function M(){const[s,n]=d.exports.useState([]),[o,i]=d.exports.useState({});return d.exports.useEffect(()=>{(()=>{var m;const l=(m=JSON.parse(localStorage.getItem("pacientes")))!=null?m:[];n(l)})()},[]),d.exports.useEffect(()=>{localStorage.setItem("pacientes",JSON.stringify(s))},[s]),a("div",{className:"container mx-auto mt-20",children:[e(L,{}),a("div",{className:"mt-12 md:flex",children:[e(C,{pacientes:s,setPacientes:n,paciente:o,setPaciente:i}),e(O,{pacientes:s,setPaciente:i,eliminarPaciente:r=>{const l=s.filter(m=>m.id!==r);n(l)}})]})]})}k.render(e(F.StrictMode,{children:e(M,{})}),document.getElementById("root"));
