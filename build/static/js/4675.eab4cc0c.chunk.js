"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4675],{84675:(e,r,a)=>{a.r(r),a.d(r,{default:()=>p});var s=a(29867),i=a(4904),l=(a(72276),a(42613),a(83372)),o=a(65007),t=a(73094),d=a(37557),n=a(28339),c=a(2526),u=a(92834);const p=()=>{const[e,r,a,p]=(0,o.Z)(),[h,v,m,x]=(0,o.Z)(),[y,g,b,j]=(0,o.Z)(),f=(0,t.v9)(d.$V),[_,C]=(0,s.useState)({}),Z=(0,c.t)();(0,s.useEffect)((()=>{var e;f.user_coins.length>0&&(null===(e=f.user_coins[0])||void 0===e?void 0:e.coin)<100&&Z.push("/amount/:topuprequired")}),[]);const[k,w]=(0,s.useState)({showMessage:!1,isError:"",message:""}),M=()=>{p((0,n.kD)({email:null===f||void 0===f?void 0:f.email}))};(0,s.useEffect)((()=>{j((0,n.My)({email:null===f||void 0===f?void 0:f.email})),M()}),[]),(0,s.useEffect)((()=>{"success"==(null===e||void 0===e?void 0:e.result)&&H(null===e||void 0===e?void 0:e.data)}),[e]),(0,s.useEffect)((()=>{"success"==(null===h||void 0===h?void 0:h.result)&&(M(),w((e=>({...e,showMessage:!0,isError:!1,message:null===h||void 0===h?void 0:h.message}))))}),[h]),(0,s.useEffect)((()=>{"success"==(null===y||void 0===y?void 0:y.result)&&C((e=>{var r,a,s,i;return{...e,total_orders:null===y||void 0===y||null===(r=y.data)||void 0===r?void 0:r.total_orders,orders_last_Week:null===y||void 0===y||null===(a=y.data)||void 0===a?void 0:a.orders_last_Week,pending_orders:null===y||void 0===y||null===(s=y.data)||void 0===s?void 0:s.pending_orders,order_delivered:null===y||void 0===y||null===(i=y.data)||void 0===i?void 0:i.order_delivered}}))}),[y]);const[N,H]=(0,s.useState)([]),A=e=>parseInt(e.map((e=>e.quantity*e.product_obj.quoted_price)).reduce(((e,r)=>e+r),0),10);function J(e){switch(e.toLowerCase()){case"pending":return 10;case"packed":return 40;case"shipped":return 70;case"delivered":return 100;default:return-1}}return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Z,{withCharts:!0,data:_}),(0,u.jsx)(i.rb,{children:(0,u.jsxs)(i.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,u.jsx)(i.V,{color:"light",children:(0,u.jsx)(i.T6,{children:(0,u.jsx)(i.is,{className:"text-center",children:"Your Orders"})})}),(0,u.jsx)(i.NR,{children:N.map((e=>(0,u.jsx)(i.T6,{children:(0,u.jsx)(i.NN,{children:(0,u.jsxs)(i.xH,{style:{marginTop:"1rem",padding:"2rem"},children:[(0,u.jsxs)("div",{style:{marginBottom:"2rem",display:"flex",justifyContent:"space-between"},children:[(0,u.jsxs)("h3",{style:{marginBottom:"1rem"},children:["Order Id: #",e.order_unique_id]}),(0,u.jsxs)("span",{children:[(0,u.jsx)("strong",{children:"Ships to "}),(0,u.jsx)("br",{}),e.customer_address]})]}),null===e||void 0===e?void 0:e.order_id.map(((e,r)=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:e.product_obj.product_name}),(0,u.jsx)("div",{className:"small text-medium-emphasis",children:new Date(null===e||void 0===e?void 0:e.created_at).toLocaleString()}),(0,u.jsxs)("div",{className:"small text-medium-emphasis",children:["quantity ",null===e||void 0===e?void 0:e.quantity]})]}),(0,u.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,u.jsx)(i.yI,{thin:!0,color:"primary",value:J(e.status)}),(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,u.jsx)("p",{children:"Placed"}),(0,u.jsx)("p",{children:"Packed"}),(0,u.jsx)("p",{children:"Shipped"}),(0,u.jsx)("p",{children:"Delivered"})]}),(0,u.jsx)("div",{children:(0,u.jsxs)("select",{id:"status",name:"status",style:{marginBottom:"2rem"},value:e.status,onChange:r=>x((0,n.Xh)({lineId:e.id,status:r.target.value})),children:[(0,u.jsx)("option",{value:"pending",children:"Placed"}),(0,u.jsx)("option",{value:"packed",children:"Packed"}),(0,u.jsx)("option",{value:"shipped",children:"Shipped"}),(0,u.jsx)("option",{value:"delivered",children:"Deliver"})]})})]})]}))),(0,u.jsx)("div",{style:{textAlign:"end"},children:(0,u.jsxs)("strong",{children:["Total Amount: $",A(null===e||void 0===e?void 0:e.order_id)]})})]})})})))})]})})]})}},83372:(e,r,a)=>{a.d(r,{Z:()=>u});a(29867);var s=a(4904),i=a(68803),l=a(65725),o=a(59098),t=a(19784),d=a(46837),n=a(27625),c=a(92834);const u=e=>{let{withCharts:r,data:a=!1}=e;const u={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}};return(0,c.jsxs)(s.rb,{children:[(0,c.jsx)(s.b7,{sm:6,lg:3,children:(0,c.jsx)(s.bP,{className:"mb-4",...r&&{chart:(0,c.jsx)(n.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:u})},icon:(0,c.jsx)(i.Z,{icon:l.h,height:52,className:"my-4 text-white"}),values:[{title:"Total Orders",value:null===a||void 0===a?void 0:a.total_orders}],style:{"--cui-card-cap-bg":"#3b5998"}})}),(0,c.jsx)(s.b7,{sm:6,lg:3,children:(0,c.jsx)(s.bP,{className:"mb-4",...r&&{chart:(0,c.jsx)(n.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:u})},icon:(0,c.jsx)(i.Z,{icon:o.$,height:52,className:"my-4 text-white"}),values:[{title:"Pending Orders",value:null===a||void 0===a?void 0:a.pending_orders}],style:{"--cui-card-cap-bg":"#00aced"}})}),(0,c.jsx)(s.b7,{sm:6,lg:3,children:(0,c.jsx)(s.bP,{className:"mb-4",...r&&{chart:(0,c.jsx)(n.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:u})},icon:(0,c.jsx)(i.Z,{icon:t.J,height:52,className:"my-4 text-white"}),values:[{title:"Orders Last Week",value:null===a||void 0===a?void 0:a.orders_last_Week}],style:{"--cui-card-cap-bg":"#4875b4"}})}),(0,c.jsx)(s.b7,{sm:6,lg:3,children:(0,c.jsx)(s.bP,{className:"mb-4",color:"warning",...r&&{chart:(0,c.jsx)(n.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:u})},icon:(0,c.jsx)(i.Z,{icon:d.F,height:52,className:"my-4 text-white"}),values:[{title:"Delivered Orders",value:null===a||void 0===a?void 0:a.order_delivered}]})})]})}},65725:(e,r,a)=>{a.d(r,{h:()=>s});var s=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z' class='ci-primary'/>"]},19784:(e,r,a)=>{a.d(r,{J:()=>s});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M199.066,456l-7.379-7.514-3.94-3.9-86.2-86.2.053-.055L17.936,274.665l97.614-97.613,83.565,83.565L398.388,61.344,496,158.958,296.729,358.229,285.469,369.6ZM146.6,358.183l52.459,52.46.1-.1.054.054,52.311-52.311,11.259-11.368L450.746,158.958,398.388,106.6,199.115,305.871,115.55,222.306,63.191,274.665l83.464,83.463Z' class='ci-primary'/>"]},59098:(e,r,a)=>{a.d(r,{$:()=>s});var s=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='271.514 95.5 239.514 95.5 239.514 273.611 355.127 328.559 368.864 299.657 271.514 253.389 271.514 95.5' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16Zm0,448C141.125,464,48,370.875,48,256S141.125,48,256,48s208,93.125,208,208S370.875,464,256,464Z' class='ci-primary'/>"]},46837:(e,r,a)=>{a.d(r,{F:()=>s});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M441.885,141.649A32.028,32.028,0,0,0,415.669,128H336V80a32.036,32.036,0,0,0-32-32H48A32.036,32.036,0,0,0,16,80V408H69.082a67.982,67.982,0,0,0,133.836,0H309.082a67.982,67.982,0,0,0,133.836,0H496V226.522a23.882,23.882,0,0,0-4.338-13.763ZM47.98,80H304V256H48ZM136,432a36,36,0,1,1,36-36A36.04,36.04,0,0,1,136,432Zm240,0a36,36,0,1,1,36-36A36.04,36.04,0,0,1,376,432Zm88-56H440.994a68,68,0,0,0-129.988,0H200.994a68,68,0,0,0-129.988,0H48V288H464Zm0-120H336V160h79.669L464,229.044Z' class='ci-primary'/>"]},72276:(e,r,a)=>{e.exports=a.p+"static/media/1.34eedf58c0876517e858.jpg"},42613:(e,r,a)=>{e.exports=a.p+"static/media/2.0c06e43dc16bee6cdfed.jpg"}}]);
//# sourceMappingURL=4675.eab4cc0c.chunk.js.map