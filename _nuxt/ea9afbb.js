(window.webpackJsonp=window.webpackJsonp||[]).push([[116,40],{613:function(t,e,n){"use strict";n(287);var o=n(288);e.a=Object(o.a)("layout")},615:function(t,e,n){"use strict";n(287);var o=n(288);e.a=Object(o.a)("flex")},616:function(t,e,n){"use strict";var o=n(3),r=(n(47),n(67),n(289),n(12),n(11),n(56),n(101),n(13),n(10),n(16),n(17),n(6)),l=n(111),c=n(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},617:function(t,e,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("c6bd0f6a",content,!0,{sourceMap:!1})},618:function(t,e,n){var o=n(18)(!1);o.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=o},627:function(t,e,n){"use strict";n(13),n(10),n(16),n(11),n(17);var o=n(3),r=(n(84),n(12),n(86),n(101),n(189),n(47),n(67),n(617),n(625)),l=n(190),c=n(76),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.t)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var o=e[this.$refs.menu.listIndex];o?this.setMenuIndex(t.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.r)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null==(e=t.clipboardData)||e.setData("text/plain",r),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}})},669:function(t,e,n){"use strict";n.r(e);n(28);var o={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var t=this;this.$axios.get("/api/master/permissions").then((function(e){t.$auth.$storage.setLocalStorage("permission_list",JSON.stringify(e.data.data.simple))}))},openDialogPermission:function(t,title){this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t),this.canAddData=!0,this.getPermissionUser(t),this.type="user"},getPermissionUser:function(t){var e=this;this.userRole=null,this.$axios.get("/api/master/users/permission",{params:{form:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(t,title,e){var n=this;this.type=e,this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t);var o="";"user"===e?o="/api/master/users/roles":(this.canAddData=!0,o="/api/master/permission-role"),this.$axios.get(o,{params:{form:this.form}}).then((function(t){"user"===e?(n.userRole=t.data.data.rows,n.changeTab(n.userRole[0])):(n.$refs.childDetails.setDataToDetails(t.data.data.rows),n.loadingPermission=!1)}))},changeTab:function(t){var e=this;this.loadingPermission=!0,this.$axios.get("/api/master/permission-role",{params:{form:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},getRolePermissionUser:function(t){var e=this;this.$axios.get("/api/master/users/role-permission",{params:{item:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},getPermissionRole:function(t){var e=this;this.$axios.get("/api/master/permission-role",{params:{form:this.form}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data.rows)})).finally((function(t){e.loadingPermission=!1}))},saveRolePermission:function(){var t=this;this.loadingPermission=!0;var details=this.$refs.childDetails.getAddData(),e="";e="user"===this.type?"/api/master/users/permission":"/api/master/permission-role",this.$axios.post(e,{details:details,form:this.form}).then((function(e){t.$swal({icon:"success",title:"Success",text:e.data.message}),"user"===t.type?t.getPermissionUser(t.form):t.getPermissionRole(t.form)})).catch((function(e){t.$swal({icon:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.loadingPermission=!1}))}}},r=n(65),l=n(83),c=n.n(l),d=n(108),h=n(126),m=n(52),f=n(286),v=n(132),x=n(285),I=n(587),_=n(588),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:t.dialogPermission,callback:function(e){t.dialogPermission=e},expression:"dialogPermission"}},[n("v-card",{attrs:{loading:t.loadingPermission}},[n("v-card-title",[n("span",{staticClass:"font-weight-medium"},[t._v("\n          "+t._s(t.dialogTitle)+"\n        ")])]),t._v(" "),n("v-card-text",[t.userRole?n("v-tabs",{attrs:{centered:"","slider-color":"green"},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}},t._l(t.userRole,(function(e,o){return n("v-tab",{key:o,attrs:{href:"#tab-"+o},on:{change:function(n){return t.changeTab(e)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),1):t._e(),t._v(" "),n("div",{staticClass:"scroll-container"},[n("LazyMasterPermissionList",{ref:"childDetails"})],1)],1),t._v(" "),n("v-card-actions",[t.canAddData?n("v-btn",{staticClass:"white--text",attrs:{"x-small":"",color:"orange darken-1"},on:{click:function(e){return t.$refs.childDetails.addLine()}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("\n          mdi-plus\n        ")])],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:t.closeDialogPermission}},[t._v("\n        close\n      ")]),t._v(" "),t.canAddData?n("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingPermission},on:{click:function(e){return t.saveRolePermission()}}},[t._v("\n        Save\n      ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:f.a,VIcon:v.a,VSpacer:x.a,VTab:I.a,VTabs:_.a})},909:function(t,e,n){"use strict";n.r(e);n(56);var o={name:"MasterRole",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,statusProcessing:"insert",dialog:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,loadingPermission:!0,allData:[],itemWhs:[],itemGroupCode:[],itemApps:[],department:{},form:{id:null,name:null,document_type:null,whs:null,item_group:null,apps:null,description:null},defaultItem:{id:null,name:null,document_type:null,whs:null,item_group:null,apps:null,description:null},options:{},optionDivision:{},headers:[{text:"Role Name",value:"name"},{text:"Description",value:"description"},{text:"Guard",value:"guard_name"},{text:"Action",value:"ACTIONS",align:"center"}]}},head:function(){return{title:"Master Roles"}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.getDataFromApi(),this.getItemGroupCode(),this.getWhs(),this.getApps()},methods:{getItemGroupCode:function(){var t=this;this.$axios.get("/api/master/item-group-code").then((function(e){t.itemGroupCode=e.data.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getApps:function(){var t=this;this.$axios.get("/api/master/apps").then((function(e){t.itemApps=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getWhs:function(){var t=this;this.$axios.get("/api/master/whs").then((function(e){t.itemWhs=e.data.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getDataFromApi:function(){var t=this;this.loading=!0;this.$axios.get("/api/master/roles",{params:{options:this.options}}).then((function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},newData:function(){this.dialog=!0,this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem),this.message=!1},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},t),this.statusProcessing="update",this.dialog=!0,this.insert=!1},close:function(){var t=this;this.dialog=!1,this.statusProcessing="insert",setTimeout((function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,form=this.form,n=this.statusProcessing,data={form:form,status:n};"insert"===n?(this.store("post","/api/master/roles",data,"insert",t),e.submitLoad=!1):"update"===n&&(this.store("put","/api/master/roles/"+this.form.id,data,"update",t),e.submitLoad=!1)},store:function(t,e,data,n){var o=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){"Error"===t.data.status?(o.$swal({type:"error",title:"Error",text:t.data.message}),r.submitLoad=!1):(o.dialog=!1,o.message=t.data.message,setTimeout((function(){return o.message=!1}),8e3),o.getDataFromApi())})).catch((function(t){o.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))}}},r=o,l=n(65),c=n(83),d=n.n(c),h=n(627),m=n(108),f=n(126),v=n(52),x=n(884),I=n(286),_=n(591),y=n(615),D=n(616),w=n(132),S=n(613),P=n(285),$=n(190),O=n(73),C=n(110),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:"",md6:"","offset-md3":""}},[n("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[n("v-toolbar-title",{staticClass:"hidden-xs-only"},[t._v("Master Roles")]),t._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"green",dark:""},on:{click:function(e){return t.newData()}}},[n("v-icon",[t._v("mdi-plus-circle")])],1),t._v(" "),n("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[n("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.ACTIONS",fn:function(e){var o=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(o)}}},[t._v("\n            mdi-pencil-circle\n          ")]),t._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.dialogPermission.openRolePermissions(o,"Role Permissions","role")}}},[t._v("\n            mdi-gate\n          ")])]}}],null,!0)})],1)],1),t._v(" "),n("v-dialog",{attrs:{persistent:"","no-click-animation":"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-card-text",[n("v-form",[n("v-layout",{attrs:{wrap:""}},[t.message?n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"red darken-2 text-xs-center"},[n("span",{staticClass:"white--text"},[t._v(t._s(t.message))])])]):t._e(),t._v(" "),n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-2",attrs:{md12:""}},[n("v-text-field",{attrs:{label:"Role Name",placeholder:"Role Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{md12:""}},[n("v-text-field",{attrs:{label:"Description",placeholder:"Description",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:t.itemApps,chips:"","deletable-chips":"","small-chips":"","hide-no-data":"",label:"Apps Access",multiple:"",outlined:"",dense:"","item-value":"id","item-text":"name","hide-details":"auto"},model:{value:t.form.apps,callback:function(e){t.$set(t.form,"apps",e)},expression:"form.apps"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:t.itemWhs,chips:"","deletable-chips":"","small-chips":"",label:"Whs Access",multiple:"",outlined:"",dense:"","hide-details":"auto","item-value":"name","item-text":"name"},model:{value:t.form.whs,callback:function(e){t.$set(t.form,"whs",e)},expression:"form.whs"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:t.itemGroupCode,chips:"","deletable-chips":"","small-chips":"",label:"Item Group Access",multiple:"",outlined:"",dense:"","hide-details":"auto","item-value":"item_group_code","item-text":"item_group_name"},model:{value:t.form.item_group,callback:function(e){t.$set(t.form,"item_group",e)},expression:"form.item_group"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-1 pb-2",attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:["Item","Service"],chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"Document Type",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.document_type,callback:function(e){t.$set(t.form,"document_type",e)},expression:"form.document_type"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1),t._v(" "),n("MasterDialogPermission",{ref:"dialogPermission"})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{MasterDialogPermission:n(669).default}),d()(component,{VAutocomplete:h.a,VBtn:m.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VDataTable:x.a,VDialog:I.a,VDivider:_.a,VFlex:y.a,VForm:D.a,VIcon:w.a,VLayout:S.a,VSpacer:P.a,VTextField:$.a,VToolbar:O.a,VToolbarTitle:C.a})}}]);