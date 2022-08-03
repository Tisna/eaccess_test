(window.webpackJsonp=window.webpackJsonp||[]).push([[45,46,48],{682:function(t,e,o){"use strict";o.r(e);var r={name:"MasterUserWhs",data:function(){return{totalDataWhs:0,totalDataUserWhs:0,singleSelect:!1,dialogWhs:!1,loadingUserWhs:!0,loadingWhs:!0,allDataWhs:[],allDataUserWhs:[],selectedWhs:[],selectedUserWhs:[],optionWhs:{},optionUserWhs:{},dataUser:{},dataCompany:{},headerUserWhs:[{text:"Warehouse",value:"U_WhsCode"}],headerWhs:[{text:"Warehouse",value:"WhsCode"}]}},methods:{openWarehouse:function(t,e){this.dataCompany=Object.assign({},t),this.dataUser=Object.assign({},e),this.dialogWhs=!0,this.getWhs(this.dataUser,t),this.getUserWhs(this.dataUser,t)},addWhs:function(){var t=this;this.$axios.post("/api/master/add-whs",{form:this.selectedWhs,user:this.dataUser,company:this.dataCompany}).then((function(e){t.getWhs(t.dataUser,t.dataCompany),t.getUserWhs(t.dataUser,t.dataCompany),t.selectedUserWhs=[],t.selectedWhs=[]}))},removeWhs:function(){var t=this;this.$axios.post("/api/master/remove-whs",{form:this.selectedUserWhs,user:this.dataUser,company:this.dataCompany}).then((function(e){t.getWhs(t.dataUser,t.dataCompany),t.getUserWhs(t.dataUser,t.dataCompany),t.selectedUserWhs=[],t.selectedWhs=[]}))},getWhs:function(t,e){var o=this;this.$axios.get("/api/master/whs",{params:{options:this.optionWhs,type:"userCompany",user:t,company:e}}).then((function(t){o.loadingWhs=!1,o.allDataWhs=t.data.rows,o.totalDataWhs=t.data.total})).catch((function(t){o.loadingWhs=!1,console.log(t.response.data)}))},getUserWhs:function(t,e){var o=this;this.$axios.get("/api/master/user-whs",{params:{options:this.optionUserWhs,user:t,company:e}}).then((function(t){o.loadingUserWhs=!1,o.allDataUserWhs=t.data.rows,o.totalDataUserWhs=t.data.total})).catch((function(t){o.loadingUserWhs=!1,console.log(t.response.data)}))}}},n=o(82),l=o(90),c=o.n(l),d=o(107),m=o(124),v=o(55),h=o(384),U=o(583),C=o(864),y=o(281),_=o(131),f=o(386),I=o(280),G=o(567),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"900px"},model:{value:t.dialogWhs,callback:function(e){t.dialogWhs=e},expression:"dialogWhs"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Warehouse "+t._s(t.dataUser.U_UserName))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",color:"green",dark:""},on:{click:t.addWhs}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-plus-circle")])],1)]}}])},[t._v(" "),o("span",[t._v("Add User Warehouse")])]),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",color:"red",dark:""},on:{click:t.removeWhs}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-minus-circle")])],1)]}}])},[t._v(" "),o("span",[t._v("Remove User Warehouse")])])],1),t._v(" "),o("v-card-text",[o("div",{staticClass:"mt-2"},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,"item-key":"WhsCode","show-select":"",headers:t.headerWhs,items:t.allDataWhs,"items-per-page":5,"single-select":t.singleSelect,loading:t.loadingWhs},model:{value:t.selectedWhs,callback:function(e){t.selectedWhs=e},expression:"selectedWhs"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,"item-key":"U_DocEntry","show-select":"",headers:t.headerUserWhs,items:t.allDataUserWhs,"items-per-page":5,"single-select":t.singleSelect,loading:t.loadingUserWhs},model:{value:t.selectedUserWhs,callback:function(e){t.selectedUserWhs=e},expression:"selectedUserWhs"}})],1)],1)],1)],1)]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogWhs=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:U.a,VDataTable:C.a,VDialog:y.a,VIcon:_.a,VRow:f.a,VSpacer:I.a,VTooltip:G.a})},683:function(t,e,o){"use strict";o.r(e);var r={name:"MasterUserItemGroups",data:function(){return{totalDataItemGroups:0,totalDataUserItemGroups:0,singleSelect:!1,dialogItemGroups:!1,loadingUserItemGroups:!0,loadingItemGroups:!0,allDataItemGroups:[],allDataUserItemGroups:[],selectedItemGroups:[],selectedUserItemGroups:[],optionItemGroups:{},optionUserItemGroups:{},dataUser:{},dataCompany:{},headerItemGroups:[{text:"Item Group",value:"ItmsGrpCod"},{text:"Group Name",value:"ItmsGrpNam"}],headerUserItemGroups:[{text:"Item Group",value:"U_ItmsGrpCod"}]}},methods:{openItemGroups:function(t,e){this.dataCompany=Object.assign({},t),this.dataUser=Object.assign({},e),this.dialogItemGroups=!0,this.getItemGroups(this.dataUser,t),this.getUserItemGroups(this.dataUser,t)},addItemGroups:function(){var t=this;this.$axios.post("/api/master/add-item-groups",{form:this.selectedItemGroups,user:this.dataUser,company:this.dataCompany}).then((function(e){t.getItemGroups(t.dataUser,t.dataCompany),t.getUserItemGroups(t.dataUser,t.dataCompany),t.selectedUserItemGroups=[],t.selectedItemGroups=[]}))},removeItemGroups:function(){var t=this;this.$axios.post("/api/master/remove-item-groups",{form:this.selectedUserItemGroups,user:this.dataUser}).then((function(e){t.getItemGroups(t.dataUser,t.dataCompany),t.getUserItemGroups(t.dataUser,t.dataCompany),t.selectedUserItemGroups=[],t.selectedItemGroups=[]}))},getItemGroups:function(t,e){var o=this;this.$axios.get("/api/master/item-groups",{params:{options:this.optionItemGroups,type:"userCompany",user:t,company:e}}).then((function(t){o.loadingItemGroups=!1,o.allDataItemGroups=t.data.rows,o.totalDataItemGroups=t.data.total})).catch((function(t){o.loadingItemGroups=!1,console.log(t.response.data)}))},getUserItemGroups:function(t,e){var o=this;this.$axios.get("/api/master/user-item-groups",{params:{options:this.optionUserItemGroups,user:t,company:e}}).then((function(t){o.loadingUserItemGroups=!1,o.allDataUserItemGroups=t.data.rows,o.totalDataUserItemGroups=t.data.total})).catch((function(t){o.loadingUserItemGroups=!1,console.log(t.response.data)}))}}},n=o(82),l=o(90),c=o.n(l),d=o(107),m=o(124),v=o(55),h=o(384),U=o(583),C=o(864),y=o(281),_=o(131),f=o(386),I=o(280),G=o(567),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"900px"},model:{value:t.dialogItemGroups,callback:function(e){t.dialogItemGroups=e},expression:"dialogItemGroups"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Item Groups "+t._s(t.dataUser.U_UserName))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",color:"green",dark:""},on:{click:t.addItemGroups}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-plus-circle")])],1)]}}])},[t._v(" "),o("span",[t._v("Add Item Groups")])]),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",color:"red",dark:""},on:{click:t.removeItemGroups}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-minus-circle")])],1)]}}])},[t._v(" "),o("span",[t._v("Remove Item Groups")])])],1),t._v(" "),o("v-card-text",[o("div",{staticClass:"mt-2"},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,"item-key":"LineNum","show-select":"",headers:t.headerItemGroups,items:t.allDataItemGroups,"items-per-page":5,"single-select":t.singleSelect,loading:t.loadingItemGroups},model:{value:t.selectedItemGroups,callback:function(e){t.selectedItemGroups=e},expression:"selectedItemGroups"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,"item-key":"U_DocEntry","show-select":"",headers:t.headerUserItemGroups,items:t.allDataUserItemGroups,"items-per-page":5,"single-select":t.singleSelect,loading:t.loadingUserItemGroups},model:{value:t.selectedUserItemGroups,callback:function(e){t.selectedUserItemGroups=e},expression:"selectedUserItemGroups"}})],1)],1)],1)],1)]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogItemGroups=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:U.a,VDataTable:C.a,VDialog:y.a,VIcon:_.a,VRow:f.a,VSpacer:I.a,VTooltip:G.a})},728:function(t,e,o){"use strict";o.r(e);var r={name:"MasterUserCompany",data:function(){return{totalDataCompany:0,totalDataUserCompany:0,dialogCompany:!1,singleSelect:!1,loadingCompany:!0,loadingUserCompany:!0,allDataCompany:[],allDataUserCompany:[],selectedCompany:[],selectedUserCompany:[],optionCompany:{},optionUserCompany:{},dataUser:{},dataCompany:{},headerCompany:[{text:"DB Code",value:"U_DbCode"}],headerUserCompany:[{text:"DB Code",value:"U_DbCode"},{text:"Action",value:"ACTIONS",sortable:!1}]}},methods:{openUserCompany:function(t){this.dataUser=Object.assign({},t),this.dialogCompany=!0,this.getCompany(t),this.getUserCompany(t)},openItemGroups:function(t){this.$refs.itemGroups.openItemGroups(t,this.dataUser)},openStages:function(t){this.$refs.stages.openStages(t,this.dataUser)},openWarehouse:function(t){this.$refs.warehouse.openWarehouse(t,this.dataUser)},getCompany:function(t){var e=this;this.$axios.get("/api/master/company",{params:{options:this.optionCompany,type:"userCompany",user:t}}).then((function(t){e.loadingCompany=!1,e.allDataCompany=t.data.rows,e.totalDataCompany=t.data.total})).catch((function(t){e.loadingCompany=!1,console.log(t.response.data)}))},getUserCompany:function(t){var e=this;this.$axios.get("/api/master/users-company",{params:{options:this.optionUserCompany,user:t}}).then((function(t){e.loadingUserCompany=!1,e.allDataUserCompany=t.data.rows,e.totalDataUserCompany=t.data.total})).catch((function(t){e.loadingUserCompany=!1,console.log(t.response.data)}))},addCompany:function(){var t=this;this.$axios.post("/api/master/users-add-company",{form:this.selectedCompany,user:this.dataUser}).then((function(e){t.getUserCompany(t.dataUser),t.getCompany(t.dataUser),t.selectedUserCompany=[],t.selectedCompany=[]}))},removeCompany:function(){var t=this;this.$axios.post("/api/master/users-remove-company",{form:this.selectedUserCompany,user:this.dataUser}).then((function(e){t.getUserCompany(t.dataUser),t.getCompany(t.dataUser),t.selectedUserCompany=[],t.selectedCompany=[]}))}}},n=o(82),l=o(90),c=o.n(l),d=o(107),m=o(124),v=o(55),h=o(384),U=o(583),C=o(864),y=o(281),_=o(131),f=o(386),I=o(280),G=o(567),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:t.dialogCompany,callback:function(e){t.dialogCompany=e},expression:"dialogCompany"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Company "+t._s(t.dataUser.U_UserName))]),t._v(" "),o("v-spacer"),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",color:"green",dark:""},on:{click:t.addCompany}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-plus-circle")])],1)]}}])},[t._v(" "),o("span",[t._v("Add Company")])]),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",color:"red",dark:""},on:{click:t.removeCompany}},"v-btn",n,!1),r),[o("v-icon",[t._v("mdi-minus-circle")])],1)]}}])},[t._v(" "),o("span",[t._v("Remove Company")])])],1),t._v(" "),o("v-card-text",[o("div",{staticClass:"mt-2"},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"5"}},[o("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,"item-key":"U_DbCode","show-select":"",headers:t.headerCompany,items:t.allDataCompany,"items-per-page":5,"single-select":t.singleSelect,loading:t.loadingCompany},model:{value:t.selectedCompany,callback:function(e){t.selectedCompany=e},expression:"selectedCompany"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"7"}},[o("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,"item-key":"U_DbCode","show-select":"",headers:t.headerUserCompany,items:t.allDataUserCompany,"items-per-page":5,"single-select":t.singleSelect,loading:t.loadingUserCompany},scopedSlots:t._u([{key:"item.ACTIONS",fn:function(e){var r=e.item;return[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.openItemGroups(r)}}},"v-icon",l,!1),n),[t._v("\n                        mdi-cube-outline\n                      ")])]}}],null,!0)},[t._v(" "),o("span",[t._v("Open Item Groups")])]),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(e){return t.openStages(r)}}},"v-icon",l,!1),n),[t._v("\n                        mdi-stairs\n                      ")])]}}],null,!0)},[t._v(" "),o("span",[t._v("Open User Stages")])]),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[o("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(e){return t.openWarehouse(r)}}},"v-icon",l,!1),n),[t._v("\n                        mdi-factory\n                      ")])]}}],null,!0)},[t._v(" "),o("span",[t._v("Open User Warehouse")])])]}},{key:"no-data",fn:function(){return[o("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("\n                    Reset\n                  ")])]},proxy:!0}],null,!0),model:{value:t.selectedUserCompany,callback:function(e){t.selectedUserCompany=e},expression:"selectedUserCompany"}})],1)],1)],1)],1)]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogCompany=!1}}},"v-btn",n,!1),r),[t._v("\n            Close\n          ")])]}}])},[t._v(" "),o("span",[t._v("Close")])])],1)],1),t._v(" "),o("MasterUserWhs",{ref:"warehouse"}),t._v(" "),o("MasterUserItemGroups",{ref:"itemGroups"})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{MasterUserWhs:o(682).default,MasterUserItemGroups:o(683).default}),c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VContainer:U.a,VDataTable:C.a,VDialog:y.a,VIcon:_.a,VRow:f.a,VSpacer:I.a,VTooltip:G.a})}}]);