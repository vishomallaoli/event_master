(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{7826:function(e,s,t){Promise.resolve().then(t.bind(t,441))},5653:function(e,s,t){"use strict";t.d(s,{I:function(){return c},db:function(){return d}});var n=t(4752),a=t(738),i=t(5978),r=t(6834);let o=(0,a.ZF)({apiKey:"AIzaSyCHCfOYdJGc7lpbNHeE7-pz0-wk2Y0ywM0",authDomain:"eventmaster-database.firebaseapp.com",projectId:"eventmaster-database",storageBucket:"eventmaster-database.firebaseapp.com",messagingSenderId:"594662023462",appId:"1:594662023462:web:ec42c0d6f019882bdf61e7",measurementId:"G-3PQRS2J4ZD"}),d=(0,i.ad)(o);(0,r.Gb)().then(e=>{e&&(0,r.IH)(o)});let c=(0,n.v0)(o)},441:function(e,s,t){"use strict";t.r(s);var n=t(7437),a=t(2265),i=t(4752),r=t(5653),o=t(9376),d=t(7648),c=t(5978);s.default=()=>{let[e,s]=(0,a.useState)(null),[t,l]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[b,m]=(0,a.useState)(!0),v=(0,o.useRouter)();return((0,a.useEffect)(()=>{let e=(0,i.Aj)(r.I,async e=>{if(e){s(e);try{let s=(0,c.JU)(r.db,"users",e.uid),t=await (0,c.QT)(s);if(t.exists()){let e=t.data();l(e.isAdmin||!1),h(e.isWorker||!1)}else console.warn("No user document found"),l(!1),h(!1)}catch(e){console.error("Error fetching user document:",e),l(!1),h(!1)}}else d.default;m(!1)});return()=>e()},[v]),b)?(0,n.jsx)("p",{children:"Loading..."}):(0,n.jsxs)("div",{className:"dashboard-container",children:[(0,n.jsx)("button",{className:"sign-out-btn",onClick:()=>{(0,i.w7)(r.I).then(()=>{console.log("Signed out successfully"),v.push("/signin")}).catch(e=>{console.error("Error signing out:",e)})},children:"Sign Out"}),(0,n.jsx)("h1",{children:"Dashboard"}),(0,n.jsx)("div",{className:"action-buttons",children:(0,n.jsx)(d.default,{href:"/reservation/venues",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"View Venues"})})}),(0,n.jsx)(d.default,{href:"/reservation/userViewPendingReservation",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"View Your Pending Reservation Requests"})}),(0,n.jsx)("div",{className:"button-divider"}),t&&(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("h1",{children:"Admins: "}),(0,n.jsxs)("div",{className:"action-buttons",children:[(0,n.jsx)(d.default,{href:"/admin/reviewReservations",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"Review pending reservations"})}),(0,n.jsx)("div",{className:"button-divider"}),(0,n.jsx)(d.default,{href:"/admin/viewConfirmedReservations",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"View confirmed reservations"})}),(0,n.jsx)("div",{className:"button-divider"}),(0,n.jsx)(d.default,{href:"/admin/assignAdmins",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"Promote Admins"})}),(0,n.jsx)("div",{className:"button-divider"}),(0,n.jsx)(d.default,{href:"/admin/promoteWorkers",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"Promote Workers"})}),(0,n.jsx)("div",{className:"button-divider"}),(0,n.jsx)(d.default,{href:"/admin/createVenue",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"Add Venues"})}),(0,n.jsx)("div",{className:"button-divider"}),(0,n.jsx)(d.default,{href:"/admin/editVenue",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"Edit Venues"})})]})]}),u&&(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)("h1",{}),(0,n.jsx)("h1",{children:"Workers:"}),(0,n.jsx)("div",{className:"action-buttons",children:(0,n.jsx)(d.default,{href:"/workers",legacyBehavior:!0,children:(0,n.jsx)("button",{className:"action-button",children:"View Your Work Schedule"})})})]})]})}}},function(e){e.O(0,[358,400,957,448,971,117,744],function(){return e(e.s=7826)}),_N_E=e.O()}]);