(window.webpackJsonp=window.webpackJsonp||[]).push([[124,25],{1092:function(t,e,n){"use strict";n.r(e);var o=n(111),r=n(415),c=n(649),l=n(1070),d=n(137),m=n(279),h=n(186),f=n(25),v=n(641),D=n(278),w=n(277),S=n(414),_=(n(34),n(240),n(54),{name:"MasterRole",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,dialogLoading:!1,statusProcessing:"insert",dialog:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,loadingPermission:!0,allData:[],documentType:[],documentStatus:[],itemSearch:[],selected:[],searchStatus:"draft",searchItem:"",search:"",department:{},form:{},singleRow:{},defaultItem:{},options:{},optionDivision:{},headers:[{text:"Approval Name",value:"name"},{text:"Callback",value:"callback"},{text:"Show Speciment",value:"show_speciment"},{text:"Priority",value:"priority"},{text:"Action",value:"ACTIONS",align:"center"}],url:"/api/master/approval"}},head:function(){return{title:"Approval"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"},batchItems:function(){return["Delete","Duplicate"]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){},methods:{emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},actions:function(t,e){switch(t){case"Edit":this.editItem(e);break;case"Speciment":this.openSpeciment(e);break;case"View Files":this.openAttchment(e);break;case"Submit Approval":this.submitDocument(e);break;case"Cancel Approval":this.cancelDocument(e);break;case"Download Document":this.downloadDocument(e);break;case"Delete":this.batchDeleteDocument([e.id]);break;case"Approval Stages":this.$refs.approvalStages.openApprovalStages(e);break;case"Open Editor":this.$refs.formEditor.newData(e.attachment.file_path,e)}},getItemActions:function(t){return"draft"===t.status?["View Files","Open Editor","Submit Approval","Delete"]:"pending"===t.status?["Approval Stages","Cancel Approval"]:"approved"===t.status?["Edit"]:["Edit","Duplicate","Delete"]},getDataFromApi:function(){var t=this;this.loading=!0;this.$axios.get(this.url,{params:{options:this.options}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.defaultItem=Object.assign({},e.data.data.form),t.form=Object.assign({},e.data.data.form),t.documentType=e.data.data.document_type,t.$refs.forms.setDocumentType(t.documentType),t.$refs.forms.setCompany(e.data.data.company),t.$refs.forms.setDepartment(e.data.data.department)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form,this.defaultItem),this.$refs.forms.setDocumentType(this.documentType)},editItem:function(t){this.$refs.forms.editItem(t,"")},openSpeciment:function(t){var e=this;this.$refs.dialogForm.openDialog(),t.speciment&&setTimeout((function(){e.$refs.specimentSign.drawImageToCanvas(t.speciment)}),500),this.singleRow=t},saveSpeciment:function(){var t=this,image=this.$refs.specimentSign.saveImage(),e=this.singleRow;this.$axios.post("/api/master/approval-speciment",{image:image,singleRow:e}).then((function(e){t.$swal({type:"success",title:"Success",text:e.data.message}),t.$refs.specimentSign.closeDialog(),t.getDataFromApi()})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},close:function(){var t=this;this.dialog=!1,this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},batchActions:function(t){},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",form=this.form,e=this.statusProcessing;"insert"===e?(this.store("post",this.url,form,"insert",t),this.submitLoad=!1):"update"===e&&(this.store("put",this.url+"/"+this.form.id,form,"update",t),this.submitLoad=!1)},store:function(t,e,data,n){var o=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){"Error"===t.data.status?(o.$swal({type:"error",title:"Error",text:t.data.message}),r.submitLoad=!1):(o.dialog=!1,o.message=t.data.message,setTimeout((function(){return o.message=!1}),8e3),o.getDataFromApi())})).catch((function(t){o.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))}}}),k=_,x=n(61),component=Object(x.a)(k,(function(){var t=this,e=t._self._c;return e(c.a,[e(S.a,[e(r.a,{attrs:{cols:"12"}},[e("div",{staticClass:"mt-0"},[e(D.a,{attrs:{value:t.loading}},[e(w.a,{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),e(l.a,{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"73vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Approval Rules","new-data-text":"New Approval","show-batch-action":!0,"batch-actions":t.batchItems,"show-search-button":!0,"show-search-data":!0,"show-search-item":!1,"show-document-status":!1},on:{emitData:t.emitData,newData:t.newData,batchActions:t.batchActions}})]},proxy:!0},{key:"item.ACTIONS",fn:function(n){var r=n.item;return[e(o.a,{staticClass:"font-weight-bold text-right",attrs:{color:"primary",text:"",small:""},on:{click:function(e){return t.actions("Edit",r)}}},[t._v("\n              Edit\n            ")]),t._v(" "),e(v.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({staticClass:"mr-2",attrs:{color:"black",dark:"",icon:""}},"v-btn",c,!1),r),[e(d.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e(m.a,t._l(t.getItemActions(r),(function(n,i){return e(h.a,{key:i,on:{click:function(e){return t.actions(n,r)}}},[e(f.a,[e(f.c,[t._v(t._s(n))])],1)],1)})),1)],1)]}},{key:"item.id",fn:function(n){var o=n.item;return[e(d.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(o)}}},[t._v("\n              mdi-pencil-circle\n            ")]),t._v(" "),e(d.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.dialogPermission.openRolePermissions(o,"Role Permissions","role")}}},[t._v("\n              mdi-gate\n            ")])]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),e("LazyMasterFormApproval",{ref:"forms",attrs:{"form-data":t.form,"document-type":t.documentType,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"700px","dialog-title":"Speciment Sign","button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e("ApprovalSpecimentSignCanvas",{ref:"specimentSign"})]},proxy:!0},{key:"saveData",fn:function(){return[e(o.a,{attrs:{color:"green darken-1",dark:"",small:""},on:{click:function(e){return t.saveSpeciment()}}},[t._v("\n            Save\n            "),e(d.a,{attrs:{right:"",dark:""}},[t._v(" mdi-content-save-move ")])],1)]},proxy:!0}])}),t._v(" "),t.dialogLoading?e("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogForm:n(681).default})},681:function(t,e,n){"use strict";n.r(e);var o=n(111),r=n(128),c=n(53),l=n(649),d=n(303),m=n(640),h=n(137),f=n(302),v={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},D=n(61),component=Object(D.a)(v,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"","max-width":t.maxWidth,transition:"dialog-top-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,[e(c.d,[e("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),e(f.a),t._v(" "),e(o.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[e(h.a,[t._v("mdi-close-circle")])],1)],1),t._v(" "),e(m.a),t._v(" "),e(c.c,{staticClass:"pl-0 pr-0"},[e(l.a,{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),e(m.a),t._v(" "),e(c.a,[e(f.a),t._v(" "),t._t("addLine"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);