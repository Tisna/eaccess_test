(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{668:function(t,e,r){"use strict";r(304);var n=r(305);e.a=Object(n.a)("layout")},671:function(t,e,r){"use strict";r(304);var n=r(305);e.a=Object(n.a)("flex")},674:function(t,e,r){"use strict";var n=r(3),o=(r(48),r(63),r(306),r(13),r(6),r(12),r(54),r(102),r(14),r(11),r(16),r(17),r(8)),l=r(114),d=r(139);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},712:function(t,e,r){"use strict";r.r(e);var n=r(111),o=r(128),l=r(53),d=r(1069),c=r(671),m=r(674),f=r(137),h=r(668),_=r(641),v=r(684),y=r(302),k=r(198),x=(r(662),r(6),r(44),r(48),r(63),r(54),{name:"FormRapidOut",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu3:"",menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:[],defaultForm:{},isLoading:!1,model:null,model2:null,search:null,entries:this.employee,disabled:!0,display:!1,leaveLists:[]}},methods:{formatCurrentDate:function(t){var e=new Date(t),dd=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return e=n+"-"+r+"-"+dd},checkSwabDate:function(t){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();e=n+"-"+r+"-"+dd;var o=new Date(e);return new Date(t)<=o},changeSelect:function(t){t?(this.disabled=!1,this.display=!0):this.display=!1},checkClinic:function(t){return this.$gates.hasAnyRole("Superuser|Admin Klinik")},checkDisabled:function(){return!this.$gates.hasAnyRole("Superuser|Admin Klinik")&&this.disabled},getDataEmployee:function(){var t=this;this.isLoading=!0,this.$axios.get("/api/employees",{params:{alias:this.alias}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.ktp=this.model.IdNumber,this.form.occupation=this.model.JobPosition,this.form.department=this.model.Department,this.form.company=this.model.Company,this.form.no_hp=this.model.MobilePhone,this.form.address=this.model.AlamatKTP,this.form.name_boss=this.model.DirectSuperiorName,this.form.nik_boss=this.model.DirectSuperiorNIK,this.form.position_boss=this.model.DirectSuperiorPosition,this.form.work_location=this.model.WorkLocation,this.$emit("leaveList",this.form.id_card)},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber,this.model2.jenisCuti.includes("Cuti Family Visit")?this.form.payment="Ditagihkan kepada User/Departemen/Perusahaan":this.form.payment="Dibayar Tunai"},setLeaveList:function(data){this.leaveLists=data},setForm:function(form,t,e){var r=this;if(this.httpMethod=t,this.disabled="patch"===t,this.form=Object.assign({},form),"post"===t){this.display=!0,this.form.payment="Dibayar Tunai";var n=new Date,dd=String(n.getDate()).padStart(2,"0"),o=String(n.getMonth()+1).padStart(2,"0"),l=n.getFullYear();n=l+"-"+o+"-"+dd,this.form.paper_date=n,this.form.for_self=e}else this.display=!0,this.$emit("leaveList",this.form.id_card),setTimeout((function(){r.form=Object.assign({},form),r.form.for_self=e}),300)},close:function(){this.$emit("close")},save:function(){this.$emit("save",{form:this.form,defaultForm:this.defaultForm})}}}),w=r(61),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e(o.a,[e(l.d,[e("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formTitle)}}),t._v(" "),e(y.a),t._v(" "),e(n.a,{attrs:{icon:"",dark:"",color:"red"},on:{click:t.close}},[e(f.a,[t._v("mdi-close")])],1)],1),t._v(" "),e(l.c,[e(m.a,[e(h.a,{attrs:{wrap:""}},[e(c.a,{staticClass:"d-flex",attrs:{md12:""}},[e(h.a,{attrs:{wrap:""}},[e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(_.a,{ref:"menu2",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(k.a,t._g(t._b({attrs:{label:"Tanggal Surat","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(d.a,{attrs:{readonly:"","no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[e(k.a,{attrs:{label:"Nama",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.user_name,callback:function(e){t.$set(t.form,"user_name",e)},expression:"form.user_name"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"No. ID Card",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.id_card,callback:function(e){t.$set(t.form,"id_card",e)},expression:"form.id_card"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"NIK KTP",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.ktp,callback:function(e){t.$set(t.form,"ktp",e)},expression:"form.ktp"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"Departemen",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"Perusahaan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"Jabatan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.occupation,callback:function(e){t.$set(t.form,"occupation",e)},expression:"form.occupation"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"Nomor Telepon Aktif",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.no_hp,callback:function(e){t.$set(t.form,"no_hp",e)},expression:"form.no_hp"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"Alamat Domisili",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[e(v.a,{attrs:{disabled:t.disabled,items:t.itemBilling,label:"Penagihan dilakukan melalui ?","item-text":"text","item-value":"Value",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.payment,callback:function(e){t.$set(t.form,"payment",e)},expression:"form.payment"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"Nama Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name_boss,callback:function(e){t.$set(t.form,"name_boss",e)},expression:"form.name_boss"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"Jabatan Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.position_boss,callback:function(e){t.$set(t.form,"position_boss",e)},expression:"form.position_boss"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"NIK Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.nik_boss,callback:function(e){t.$set(t.form,"nik_boss",e)},expression:"form.nik_boss"}})],1),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(_.a,{ref:"menu3",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(k.a,t._g(t._b({attrs:{label:"Tanggal Swab","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.swab_date,callback:function(e){t.$set(t.form,"swab_date",e)},expression:"form.swab_date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t._v(" "),e(d.a,{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu3=!1}},model:{value:t.form.swab_date,callback:function(e){t.$set(t.form,"swab_date",e)},expression:"form.swab_date"}})],1)],1),t._v(" "),t.checkSwabDate(t.form.swab_date)?e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(k.a,{attrs:{disabled:t.disabled,label:"Keterangan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reason_swab,callback:function(e){t.$set(t.form,"reason_swab",e)},expression:"form.reason_swab"}})],1):t._e(),t._v(" "),"active"===t.form.status?e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[t.checkClinic()?e(v.a,{attrs:{items:["Positif","Negatif"],label:"Response Dari Klinik",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.clinic_response,callback:function(e){t.$set(t.form,"clinic_response",e)},expression:"form.clinic_response"}}):t._e()],1):t._e(),t._v(" "),e(c.a,{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[e(n.a,{staticClass:"white--text",attrs:{color:"orange darken-1",small:""},on:{click:function(e){return t.$emit("openAttachment",t.form)}}},[t._v("\n                Upload Attachment\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),e(l.a,[e(y.a),t._v(" "),e(n.a,{attrs:{color:"green darken-1",small:"",dark:"",disabled:t.checkDisabled(),loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);