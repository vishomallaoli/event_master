(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{90:function(e,r,s){Promise.resolve().then(s.bind(s,4793))},5653:function(e,r,s){"use strict";s.d(r,{I:function(){return c},db:function(){return d}});var t=s(4752),a=s(738),n=s(5978),i=s(6834);let o=(0,a.ZF)({apiKey:"AIzaSyCHCfOYdJGc7lpbNHeE7-pz0-wk2Y0ywM0",authDomain:"eventmaster-database.firebaseapp.com",projectId:"eventmaster-database",storageBucket:"eventmaster-database.firebaseapp.com",messagingSenderId:"594662023462",appId:"1:594662023462:web:ec42c0d6f019882bdf61e7",measurementId:"G-3PQRS2J4ZD"}),d=(0,n.ad)(o);(0,i.Gb)().then(e=>{e&&(0,i.IH)(o)});let c=(0,t.v0)(o)},9376:function(e,r,s){"use strict";var t=s(5475);s.o(t,"useRouter")&&s.d(r,{useRouter:function(){return t.useRouter}})},4793:function(e,r,s){"use strict";s.r(r);var t=s(7437),a=s(2265),n=s(5653),i=s(9376),o=s(5978);r.default=()=>{let[e,r]=(0,a.useState)(!1),[s,d]=(0,a.useState)(!0),[c,u]=(0,a.useState)([]),l=(0,i.useRouter)();(0,a.useEffect)(()=>{(async()=>{let e=n.I.currentUser;if(!e){l.push("/signin");return}try{let s=(0,o.JU)(n.db,"users",e.uid),t=await (0,o.QT)(s);if(!t.exists()||!t.data().isWorker){r(!1),l.push("/dashboard");return}r(!0),await h(e.uid)}catch(e){console.error("Error checking worker status:",e),r(!1),l.push("/dashboard")}finally{d(!1)}})()},[l]);let h=async e=>{try{let r=(0,o.hJ)(n.db,"confirmed_reservations"),s=(await (0,o.PL)((0,o.IO)(r,(0,o.ar)("assignedWorkers","array-contains",e)))).docs.map(e=>({id:e.id,...e.data()}));u(s)}catch(e){console.error("Error fetching reservations:",e)}};return s?(0,t.jsx)("p",{children:"Loading..."}):e?(0,t.jsxs)("div",{className:"workers-page",children:[(0,t.jsx)("h1",{children:"You are scheduled for the following reservations: "}),0===c.length?(0,t.jsx)("p",{children:"You are not scheduled for any reservations at this time."}):(0,t.jsx)("div",{className:"reservation-list",children:c.map(e=>(0,t.jsxs)("div",{className:"reservation-item",children:[(0,t.jsxs)("h2",{children:[(0,t.jsx)("strong",{children:"Reservation Name:"})," ",e.name]})," ",(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Venue:"})," ",e.name||"Unknown Venue"]})," ",(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Date:"})," ",e.date]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Status:"})," ",e.status]}),(0,t.jsx)("br",{})]},e.id))}),(0,t.jsx)("button",{onClick:()=>l.push("/dashboard"),style:{display:"block",margin:"20px auto",padding:"10px",fontSize:"16px",backgroundColor:"#6c757d",color:"#FFF",border:"none",borderRadius:"4px",cursor:"pointer",maxWidth:"200px"},children:"Back to Home"})]}):(0,t.jsx)("p",{children:"You are not authorized to view this page."})}}},function(e){e.O(0,[358,400,957,971,117,744],function(){return e(e.s=90)}),_N_E=e.O()}]);