(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1094:function(t,e,n){"use strict";n.r(e);var o=n(111),r=n(128),l=n(53),c=n(640),d=n(671),f=n(137),h=n(668),m=n(302),v=n(71),D=n(113),w=(n(6),{name:"MasterRole",data:function(){return{totalData:0,loading:!1,submitLoad:!1,statusProcessing:"insert",dialog:!1,formData:[],url:"/api/master/config"}},head:function(){return{title:"Config"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.loading=!0,this.$axios.get(this.url).then((function(e){t.loading=!1,t.$refs.childDetails.setDataToDetails(e.data.data.rows,e.data.data.columns,e.data.data.header,t.formData)}))},removeData:function(data){var t=this;this.$axios.delete(this.url+"/0",{params:{id:data.id}}).then((function(e){t.$swal({type:"success",title:"Success!",text:e.data.message}),t.getData()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message}),t.getData()}))},save:function(){var t=this;this.submitLoad=!0;var details=this.$refs.childDetails.getAddData();this.$axios.post(this.url,{details:details,formData:this.formData}).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message}),t.getData()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.submitLoad=!1}))}}}),x=n(61),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return e(h.a,[e(d.a,{attrs:{sm12:""}},[e(r.a,{staticClass:"mt-2"},[e(v.a,{attrs:{flat:"",color:"white",dense:""}},[e(D.a,{staticClass:"hidden-xs-only"},[t._v("Master Config")]),t._v(" "),e(c.a,{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),e(m.a),t._v(" "),e(o.a,{attrs:{loading:t.loading,icon:""},on:{click:t.getData}},[e(f.a,[t._v("mdi-refresh")])],1)],1),t._v(" "),e("LazyTableSimpleNormal",{ref:"childDetails",on:{removeData:t.removeData}}),t._v(" "),e(l.a,[e(o.a,{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(e){return t.$refs.childDetails.addLine()}}},[t._v("\n          Add Line\n        ")]),t._v(" "),e(m.a),t._v(" "),e(o.a,{attrs:{color:"blue darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},668:function(t,e,n){"use strict";n(304);var o=n(305);e.a=Object(o.a)("layout")},671:function(t,e,n){"use strict";n(304);var o=n(305);e.a=Object(o.a)("flex")}}]);