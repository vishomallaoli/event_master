(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{5547:function(e,r,n){Promise.resolve().then(n.bind(n,5140))},5653:function(e,r,n){"use strict";n.d(r,{I:function(){return d},db:function(){return c}});var s=n(4752),t=n(738),o=n(5978),i=n(6834);let a=(0,t.ZF)({apiKey:"AIzaSyCHCfOYdJGc7lpbNHeE7-pz0-wk2Y0ywM0",authDomain:"eventmaster-database.firebaseapp.com",projectId:"eventmaster-database",storageBucket:"eventmaster-database.firebaseapp.com",messagingSenderId:"594662023462",appId:"1:594662023462:web:ec42c0d6f019882bdf61e7",measurementId:"G-3PQRS2J4ZD"}),c=(0,o.ad)(a);(0,i.Gb)().then(e=>{e&&(0,i.IH)(a)});let d=(0,s.v0)(a)},9376:function(e,r,n){"use strict";var s=n(5475);n.o(s,"useRouter")&&n.d(r,{useRouter:function(){return s.useRouter}})},5140:function(e,r,n){"use strict";n.r(r);var s=n(7437),t=n(2265),o=n(5653),i=n(5978),a=n(9376),c=n(4752);r.default=()=>{let[e,r]=(0,t.useState)([]),n=(0,a.useRouter)();(0,t.useEffect)(()=>{(async()=>{try{let e=(0,c.v0)().currentUser,n=e?e.uid:null;if(!n){console.log("No user is authenticated.");return}console.log("Fetching reservations for userID:",n);let s=(0,i.hJ)(o.db,"pending_reservations"),t=(0,i.IO)(s,(0,i.ar)("userID","==",n));console.log("Query for pending reservations:",t);let a=await (0,i.PL)(t);console.log("Query snapshot:",a);let d=[];a.forEach(e=>{let r=e.data();d.push({...r,id:e.id})}),console.log("Reservations found:",d),r(d)}catch(e){console.error("Error fetching reservations: ",e)}})()},[]);let d=async e=>{if(window.confirm("Are you sure you want to cancel your reservation request?"))try{await (0,i.oe)((0,i.JU)(o.db,"pending_reservations",e)),r(r=>r.filter(r=>r.id!==e)),alert("Your reservation request has been cancelled.")}catch(e){console.error("Error cancelling reservation: ",e),alert("There was an error cancelling your reservation.")}};return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Pending Reservations"}),0===e.length?(0,s.jsx)("p",{children:"No pending reservations found."}):(0,s.jsx)("ul",{children:e.map(e=>(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Party Name:"})," ",e.name]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Attendees:"})," ",e.attendees]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Date:"})," ",e.date]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Price:"})," ","$"+e.price]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Payment Method:"})," ",e.paymentMethod]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Status:"})," ",e.status]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Venue:"})," ",e.venueId]}),(0,s.jsx)("button",{onClick:()=>d(e.id),style:{backgroundColor:"#ff5c5c",color:"#fff",padding:"10px",border:"none",cursor:"pointer",marginTop:"10px"},children:"Cancel Reservation"})]},e.id))}),(0,s.jsx)("button",{onClick:()=>n.push("/dashboard"),style:{display:"block",margin:"20px auto",padding:"10px",fontSize:"16px",backgroundColor:"#6c757d",color:"#FFF",border:"none",borderRadius:"4px",cursor:"pointer",maxWidth:"200px"},children:"Back to Home"})]})}}},function(e){e.O(0,[358,400,957,971,117,744],function(){return e(e.s=5547)}),_N_E=e.O()}]);