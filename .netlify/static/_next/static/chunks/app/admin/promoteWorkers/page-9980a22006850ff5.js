(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{7735:function(e,r,s){Promise.resolve().then(s.bind(s,6516))},5653:function(e,r,s){"use strict";s.d(r,{I:function(){return c},db:function(){return d}});var t=s(4752),n=s(738),o=s(5978),a=s(6834);let i=(0,n.ZF)({apiKey:"AIzaSyCHCfOYdJGc7lpbNHeE7-pz0-wk2Y0ywM0",authDomain:"eventmaster-database.firebaseapp.com",projectId:"eventmaster-database",storageBucket:"eventmaster-database.firebaseapp.com",messagingSenderId:"594662023462",appId:"1:594662023462:web:ec42c0d6f019882bdf61e7",measurementId:"G-3PQRS2J4ZD"}),d=(0,o.ad)(i);(0,a.Gb)().then(e=>{e&&(0,a.IH)(i)});let c=(0,t.v0)(i)},9376:function(e,r,s){"use strict";var t=s(5475);s.o(t,"useRouter")&&s.d(r,{useRouter:function(){return t.useRouter}})},6516:function(e,r,s){"use strict";s.r(r);var t=s(7437),n=s(2265),o=s(5653),a=s(9376),i=s(5978),d=s(4752);r.default=()=>{let[e,r]=(0,n.useState)(null),[s,c]=(0,n.useState)(null),[u,l]=(0,n.useState)([]),[m,h]=(0,n.useState)(!0),p=(0,a.useRouter)();(0,n.useEffect)(()=>{let e=(0,d.Aj)(o.I,async e=>{if(e){r(e);try{let r=(0,i.JU)(o.db,"users",e.uid),s=await (0,i.QT)(r);if(s.exists()){let e=s.data();c(e.isAdmin||!1),e.isAdmin||p.push("/dashboard")}else console.warn("No user document found."),p.push("/dashboard")}catch(e){console.error("Error checking admin status:",e),p.push("/dashboard")}}else p.push("/signin")});return()=>e()},[p]),(0,n.useEffect)(()=>{(async()=>{h(!0);try{let e=(0,i.hJ)(o.db,"users"),r=(await (0,i.PL)(e)).docs.map(e=>{let r=e.data();return{id:e.id,name:r.name||"Unknown",email:r.email||"No Email",isAdmin:!0===r.isAdmin,isWorker:!0===r.isWorker}}).filter(e=>!1===e.isWorker);l(r)}catch(e){console.error("Error fetching users:",e)}finally{h(!1)}})()},[]);let f=async(e,r)=>{if(window.confirm("Are you sure you want to promote ".concat(r," to a Worker?")))try{let s=(0,i.JU)(o.db,"users",e);await (0,i.r7)(s,{isWorker:!0}),alert("".concat(r," has been promoted to worker.")),l(r=>r.filter(r=>r.id!==e))}catch(e){console.error("Error promoting user to worker:",e),alert("Failed to promote user. Please try again.")}};return m?(0,t.jsx)("p",{children:"Loading..."}):(0,t.jsxs)("div",{className:"admin-container",children:[(0,t.jsx)("h1",{children:"Promote to Worker"}),(0,t.jsx)("div",{className:"user-list",children:u.map(e=>(0,t.jsxs)("div",{className:"user-item",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Name:"})," ",e.name||"Unknown"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Email:"})," ",e.email]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Admin Status:"})," ",e.isAdmin?"Admin":"Not Admin"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Worker Status:"})," ",e.isWorker?"Worker":"Not Worker"]}),(0,t.jsx)("button",{onClick:()=>f(e.id,e.name||"this user"),className:"promote-btn",style:{backgroundColor:"green",color:"white",padding:"10px 20px",borderRadius:"5px"},children:"Promote to Worker"}),(0,t.jsx)("hr",{})]},e.id))}),(0,t.jsx)("button",{onClick:()=>p.push("/dashboard"),style:{display:"block",margin:"20px auto",padding:"10px",fontSize:"16px",backgroundColor:"#6c757d",color:"#FFF",border:"none",borderRadius:"4px",cursor:"pointer",maxWidth:"200px"},children:"Back to Home"})]})}}},function(e){e.O(0,[358,400,957,971,117,744],function(){return e(e.s=7735)}),_N_E=e.O()}]);