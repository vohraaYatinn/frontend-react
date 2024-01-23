"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[229],{40229:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});var r=a(29867),l=a(34436),i=a(82513),t=a(35002),n=a(47689),d=a(4904),o=a(27625),c=a(56009),u=a(7625),h=a(65007),m=a(73094),x=a(37557),p=a(28339),g=a(92834);const v=()=>{var e,s,a,v,b,j,y,f;const _=(0,m.v9)(x.$V),k=localStorage.getItem("refresh");(0,r.useEffect)((()=>{k&&1==k&&(localStorage.setItem("refresh",2),window.location.reload())}));const[N,A,$,w]=(0,h.Z)(),[C,F]=(0,r.useState)({total_orders:!1,orderLastWeek:!1,pendingQuery:!1,pendingOrders:!1,orderDelivered:!1,graphOrders:!1,Insights:!1});(0,r.useEffect)((()=>{null!==_&&void 0!==_&&_.email&&w((0,p.u)({email:null===_||void 0===_?void 0:_.email}))}),[_]),(0,r.useEffect)((()=>{"success"==(null===N||void 0===N?void 0:N.result)&&null!==N&&void 0!==N&&N.data&&F((e=>{var s,a,r,l,i,t,n;return{...e,total_orders:null===N||void 0===N||null===(s=N.data)||void 0===s?void 0:s.total_orders,orderLastWeek:null===N||void 0===N||null===(a=N.data)||void 0===a?void 0:a.orderLastWeek,pendingQuery:null===N||void 0===N||null===(r=N.data)||void 0===r?void 0:r.pendingQuery,pendingOrders:null===N||void 0===N||null===(l=N.data)||void 0===l?void 0:l.pendingOrders,orderDelivered:null===N||void 0===N||null===(i=N.data)||void 0===i?void 0:i.orderDelivered,graphOrders:null===N||void 0===N||null===(t=N.data)||void 0===t?void 0:t.graphOrders,Insights:null===N||void 0===N||null===(n=N.data)||void 0===n?void 0:n.Insights}}))}),[N]);const J=[{title:"Total Amount",value:_.user_coins.length>0?null===(e=_.user_coins[0])||void 0===e?void 0:e.coin:"N/A",percent:40,color:"success"},{title:"Last Transaction",value:null===C||void 0===C||null===(s=C.Insights)||void 0===s?void 0:s.last_transaction,percent:20,color:"info"},{title:"Last Topup",value:null===C||void 0===C||null===(a=C.Insights)||void 0===a?void 0:a.last_topup,percent:60,color:"warning"},{title:"Last Withdraw",value:null===C||void 0===C||null===(v=C.Insights)||void 0===v?void 0:v.last_withdraw,percent:80,color:"danger"}];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.Z,{dashboardCounts:C}),_.user_coins.length>0&&(null===(b=_.user_coins[0])||void 0===b?void 0:b.coin)<=100&&(0,g.jsx)(u.Z,{className:"mobile-steps-track",style:{marginBottom:"1rem"},items:[{title:"Login",status:"finish",icon:(0,g.jsx)(l.Z,{})},{title:"Topup Amount",status:"process",icon:(0,g.jsx)(i.Z,{})},{title:"List Products",status:"wait",icon:(0,g.jsx)(t.Z,{})},{title:"Place Order",status:"wait",icon:(0,g.jsx)(n.Z,{})}]}),(0,g.jsx)(d.xH,{className:"mb-4",children:(0,g.jsx)(d.Bt,{children:(0,g.jsx)(d.rb,{xs:{cols:1},md:{cols:4},className:"text-center",children:J.map(((e,s)=>(0,g.jsxs)(d.b7,{className:"mb-sm-2 mb-0",children:[(0,g.jsx)("div",{className:"text-medium-emphasis",children:e.title}),(0,g.jsxs)("strong",{children:["$ ",e.value]}),(0,g.jsx)(d.yI,{thin:!0,className:"mt-2",color:e.color,value:100})]},s)))})})}),(0,g.jsxs)(d.rb,{children:[(0,g.jsx)(d.b7,{xs:12,sm:6,lg:8,children:(0,g.jsxs)(d.xH,{className:"mb-4",children:[(0,g.jsx)(d.bn,{children:"Bar Chart"}),(0,g.jsx)(d.sl,{children:(0,g.jsx)(o.JZ,{data:{labels:["December","January","February","March","April","May","June"],datasets:[{label:"Orders Placed",backgroundColor:"#f87979",data:null===C||void 0===C||null===(j=C.graphOrders)||void 0===j?void 0:j.order_counts_list}]},labels:"months"})})]})}),(0,g.jsx)(d.b7,{xs:12,sm:6,lg:4,children:(0,g.jsxs)(d.xH,{className:"mb-4",children:[(0,g.jsx)(d.bn,{children:"Pie Chart"}),(0,g.jsx)(d.sl,{children:(0,g.jsx)(o.fH,{data:{labels:["Pending","Delivered"],datasets:[{data:[null===C||void 0===C||null===(y=C.graphOrders)||void 0===y?void 0:y.order_counts_list_pending,null===C||void 0===C||null===(f=C.graphOrders)||void 0===f?void 0:f.order_counts_list_delivered],backgroundColor:["#FF6384","#36A2EB"],hoverBackgroundColor:["#FF6384","#36A2EB"]}]}})})]})})]})]})}},56009:(e,s,a)=>{a.d(s,{Z:()=>o});a(29867);var r=a(4904),l=a(30701),i=a(27625),t=a(68803),n=a(65421),d=a(92834);const o=e=>{let{dashboardCounts:s=!1}=e;return(0,d.jsxs)(r.rb,{children:[(0,d.jsx)(r.b7,{sm:6,lg:3,children:(0,d.jsx)(r.co,{className:"mb-4",color:"primary",value:(0,d.jsxs)(d.Fragment,{children:[null===s||void 0===s?void 0:s.total_orders," "]}),title:"Total Orders",action:(0,d.jsxs)(r.w5,{alignment:"end",children:[(0,d.jsx)(r.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:n.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(r.$H,{children:[(0,d.jsx)(r.$f,{children:"Action"}),(0,d.jsx)(r.$f,{children:"Another action"}),(0,d.jsx)(r.$f,{children:"Something else here..."}),(0,d.jsx)(r.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(i.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,l.Z)("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(r.b7,{sm:6,lg:3,children:(0,d.jsx)(r.co,{className:"mb-4",color:"info",value:(0,d.jsxs)(d.Fragment,{children:[null===s||void 0===s?void 0:s.pendingOrders," "]}),title:"Pending Orders",action:(0,d.jsxs)(r.w5,{alignment:"end",children:[(0,d.jsx)(r.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:n.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(r.$H,{children:[(0,d.jsx)(r.$f,{children:"Action"}),(0,d.jsx)(r.$f,{children:"Another action"}),(0,d.jsx)(r.$f,{children:"Something else here..."}),(0,d.jsx)(r.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(i.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,l.Z)("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(r.b7,{sm:6,lg:3,children:(0,d.jsx)(r.co,{className:"mb-4",color:"warning",value:(0,d.jsxs)(d.Fragment,{children:[null===s||void 0===s?void 0:s.orderLastWeek," "]}),title:"Orders Last Week",action:(0,d.jsxs)(r.w5,{alignment:"end",children:[(0,d.jsx)(r.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:n.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(r.$H,{children:[(0,d.jsx)(r.$f,{children:"Action"}),(0,d.jsx)(r.$f,{children:"Another action"}),(0,d.jsx)(r.$f,{children:"Something else here..."}),(0,d.jsx)(r.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(i.oK,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(r.b7,{sm:6,lg:3,children:(0,d.jsx)(r.co,{className:"mb-4",color:"danger",value:(0,d.jsxs)(d.Fragment,{children:[null===s||void 0===s?void 0:s.orderDelivered," "]}),title:"Order Delivered",action:(0,d.jsxs)(r.w5,{alignment:"end",children:[(0,d.jsx)(r.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:n.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(r.$H,{children:[(0,d.jsx)(r.$f,{children:"Action"}),(0,d.jsx)(r.$f,{children:"Another action"}),(0,d.jsx)(r.$f,{children:"Something else here..."}),(0,d.jsx)(r.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(i.JZ,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})}}}]);
//# sourceMappingURL=229.a112e1e9.chunk.js.map