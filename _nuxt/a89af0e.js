(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{922:function(e,t,o){"use strict";o.r(t);o(44),o(231),o(56);var l={name:"ApprovalDetails",data:function(){return{dialog:!1,loading:!1,singleSelect:!1,selected:[],itemGroupSearch:[],selectedItems:[],itemSearch:["Category","DocNum","Item Code","Item Name","Whs"],search:"",searchType:"",row:"",itemGroups:null,totalData:0,options:{},form:{},allData:[],headers:[{text:"Approver",value:"user_name"},{text:"Approval Status",value:"status"},{text:"Response Time",value:"response_date"},{text:"Approval Notes",value:"notes"}]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{formatDate:function(e){return e.ResponseDate?this.$moment(new Date(parseInt(e.ResponseDate.substr(6)))).format("YYYY-MM-DD HH:mm:ss"):""},openApprovalStages:function(e){var t=this;this.dialog=!0,this.row=e,this.search="",this.searchType="",this.selected=[],this.allData=[],setTimeout((function(){return t.getDataFromApi()}),100),this.form=e},closeDialog:function(){this.dialog=!1},selectItems:function(){this.$emit("selectItems",{row:this.row,selected:this.selected}),this.closeDialog()},changeSelect:function(e){this.selectedItems=e,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loading=!0;var t=this,o=window.localStorage.getItem("cherry_token");this.$axios.get("/api/approval/stages",{params:{options:t.options,doc_id:t.form.id,searchType:t.searchType,selectedItems:t.selectedItems,itemGroups:t.itemGroups,search:t.search,cherry_token:o}}).then((function(t){e.loading=!1,e.allData=t.data.data.rows,e.totalData=t.data.data.total})).catch((function(t){e.loading=!1}))}}},n=o(65),r=o(83),c=o.n(r),d=o(108),h=o(126),m=o(52),v=o(875),f=o(285),D=o(284),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-dialog",{attrs:{persistent:"","max-width":"900px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"font-weight-medium"},[e._v("Approval Details")])]),e._v(" "),o("v-card-text",[o("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,dense:"",headers:e.headers,loading:e.loading,items:e.allData,options:e.options,"single-select":e.singleSelect,"server-items-length":e.totalData,"item-key":"Keys","show-select":""},on:{"update:options":function(t){e.options=t}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDataTable:v.a,VDialog:f.a,VSpacer:D.a})}}]);