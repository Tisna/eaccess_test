(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{613:function(t,e,n){"use strict";n(287);var o=n(288);e.a=Object(o.a)("layout")},615:function(t,e,n){"use strict";n(287);var o=n(288);e.a=Object(o.a)("flex")},616:function(t,e,n){"use strict";var o=n(3),r=(n(47),n(67),n(289),n(12),n(11),n(56),n(101),n(13),n(10),n(16),n(17),n(6)),l=n(111),c=n(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},617:function(t,e,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("c6bd0f6a",content,!0,{sourceMap:!1})},618:function(t,e,n){var o=n(18)(!1);o.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=o},627:function(t,e,n){"use strict";n(13),n(10),n(16),n(11),n(17);var o=n(3),r=(n(84),n(12),n(86),n(101),n(189),n(47),n(67),n(617),n(625)),l=n(190),c=n(76),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.t)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},m),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var o=e[this.$refs.menu.listIndex];o?this.setMenuIndex(t.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.r)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null==(e=t.clipboardData)||e.setData("text/plain",r),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}})},940:function(t,e,n){"use strict";n.r(e);var o={props:{defaultForm:{type:Object,default:function(){return{}}}},data:function(){return{submitLoad:!1,dialog:!1,disabled:!1,formTitle:"",httpType:"",menu1:"",menu2:"",menu3:"",url:"",itemRole:[],form:this.defaultForm}},created:function(){this.getUserSubRole()},methods:{openForm:function(t,e,form){var n=this;this.httpType=e,this.url=t,this.dialog=!0,this.formTitle="Activity",this.getUserSubRole(),this.form=Object.assign({},form),this.form.id&&this.$axios.get("/api/enviro-activity/"+this.form.id).then((function(t){n.form=Object.assign({},t.data.data.rows)}))},close:function(){this.dialog=!1},save:function(){var t=this,e=this;this.$axios({method:e.httpType,url:e.url,data:e.form}).then((function(e){t.dialog=!1,t.$emit("reload")})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getUserSubRole:function(){var t=this;this.$axios.get("/api/user-sub-role").then((function(e){t.itemRole=e.data}))}}},r=n(65),l=n(83),c=n.n(l),d=n(627),h=n(108),f=n(126),m=n(52),v=n(883),x=n(286),_=n(615),y=n(616),I=n(613),S=n(592),O=n(285),w=n(190),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formTitle)}})]),t._v(" "),n("v-card-text",[n("v-form",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-autocomplete",{attrs:{items:t.itemRole,"hide-no-data":"",label:"Activity",outlined:"",dense:"","item-value":"id","item-text":"name","hide-details":"auto"},model:{value:t.form.sub_role_id,callback:function(e){t.$set(t.form,"sub_role_id",e)},expression:"form.sub_role_id"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-menu",{ref:"menu1",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.act_date,callback:function(e){t.$set(t.form,"act_date",e)},expression:"form.act_date"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",readonly:t.disabled},on:{input:function(e){t.menu1=!1}},model:{value:t.form.act_date,callback:function(e){t.$set(t.form,"act_date",e)},expression:"form.act_date"}})],1)],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Problem",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.problem_desc,callback:function(e){t.$set(t.form,"problem_desc",e)},expression:"form.problem_desc"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-menu",{ref:"menu2",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Problem Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.problem_date,callback:function(e){t.$set(t.form,"problem_date",e)},expression:"form.problem_date"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",readonly:t.disabled},on:{input:function(e){t.menu2=!1}},model:{value:t.form.problem_date,callback:function(e){t.$set(t.form,"problem_date",e)},expression:"form.problem_date"}})],1)],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Solution",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.solution_desc,callback:function(e){t.$set(t.form,"solution_desc",e)},expression:"form.solution_desc"}})],1),t._v(" "),n("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[n("v-menu",{ref:"menu3",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Problem Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.solution_date,callback:function(e){t.$set(t.form,"solution_date",e)},expression:"form.solution_date"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",readonly:t.disabled},on:{input:function(e){t.menu3=!1}},model:{value:t.form.solution_date,callback:function(e){t.$set(t.form,"solution_date",e)},expression:"form.solution_date"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){return t.close()}}},[t._v("\n      Close\n    ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n      Save\n    ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAutocomplete:d.a,VBtn:h.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDatePicker:v.a,VDialog:x.a,VFlex:_.a,VForm:y.a,VLayout:I.a,VMenu:S.a,VSpacer:O.a,VTextField:w.a})}}]);