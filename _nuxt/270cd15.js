(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{606:function(t,e,n){"use strict";n(286);var r=n(287);e.a=Object(r.a)("flex")},883:function(t,e,n){"use strict";n.r(e);var r={name:"Verification",layout:"auth",middleware:"verification",data:function(){return{verification:null}},created:function(){this.getData()},methods:{getData:function(){var t=this,e=this.$route.query.str;this.$axios.get("/api/verification/"+e).then((function(e){t.verification=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},o=n(65),c=n(83),d=n.n(c),l=n(126),f=n(52),v=n(590),h=n(606),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-flex",{attrs:{md6:"","offset-md3":"",xs12:""}},[n("v-card",[n("v-card-title",{staticStyle:{"background-color":"green",color:"white"}},[t._v("\n        Verifikasi Dokumen\n      ")]),t._v(" "),n("v-card-text",[t.verification?n("span",{domProps:{innerHTML:t._s(t.verification)}}):n("span",[t._v("Dokumen tidak ditemukan")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:l.a,VCardText:f.c,VCardTitle:f.d,VContainer:v.a,VFlex:h.a})}}]);