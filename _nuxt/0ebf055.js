(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1136:function(t,e,o){"use strict";o.r(e);var n=o(32),r=(o(6),o(12),o(54),o(694)),c=(o(697),o(689));Object(c.a)();var l={name:"FlightReservation",components:{HotTable:r.a},data:function(){return{httpMethod:"",countAttachment:0,detailsRoot:"detailsRoot",settings:{licenseKey:"non-commercial-and-evaluation",startRows:1,colHeaders:["Title","Propose Passenger Name","Nationality","ID No.","Employee/Guest","Company Name","Seat No","ID"],columns:[{data:"name_title",width:30,height:26,wordWrap:!1,type:"dropdown",source:["Mr.","Mrs.","Ms."]},{data:"name",width:180,height:26,wordWrap:!1,type:"autocomplete",strict:!1,filter:!0,allowInvalid:!0,source:function(t,e){e(window.details.$auth.$storage.getState("employee_pluck"))}},{data:"nationality",width:100,height:26,wordWrap:!1,type:"autocomplete",strict:!1,filter:!0,allowInvalid:!0,source:function(t,e){e(window.details.$auth.$storage.getLocalStorage("country"))}},{data:"id_card",width:70,height:26,wordWrap:!1},{data:"employee_type",width:60,height:26,wordWrap:!1,type:"dropdown",source:["Employee","Guest"]},{data:"company",width:100,height:26,wordWrap:!1,type:"autocomplete",strict:!1,filter:!0,allowInvalid:!0,source:function(t,e){e(window.details.$auth.$storage.getLocalStorage("company"))}},{data:"seat_no",width:70,height:26,wordWrap:!1},{data:"id",width:50,height:26,wordWrap:!1}],currentRowClassName:"currentRow",currentColClassName:"currentCol",manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!1,columnSorting:!0,rowHeights:23,persistentState:!0,width:"100%",stretchH:"all",beforeRemoveRow:function(t,e,o,source){var n=window.details,r=prompt("Do you want to delete a row? Type y to remove"),c=[];return"y"===r&&(o.forEach((function(t,e){var o=n.$refs.details.hotInstance.getDataAtRowProp(t,"LineEntry");o&&c.push(o)})),c.length>0&&n.removeData(c),!0)},dataSchema:{employee_type:"Employee",nationality:"Indonesia",name_title:"Mr."},afterChange:function(t,source){var e=window.details;t&&("edit"!==source&&"autofill"!==source&&"paste"!==source||t.forEach((function(t){var o=Object(n.a)(t,4),r=o[0],c=o[1],l=(o[2],o[3]);"name"===c&&e.$axios.get("/api/master/employee-by-name",{params:{name:l}}).then((function(t){t.data&&(e.$refs.details.hotInstance.setDataAtRowProp(r,"id_card",t.data.IdNumber),e.$refs.details.hotInstance.setDataAtRowProp(r,"company",t.data.Company))}))})))},contextMenu:{callback:function(t,e){var o=window.details;"remove_row"===t&&(o.isInvDetailChanges=!0,o.isInvChanges=!0)}},hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[6,7]}}}},computed:{checkIsDataSet:function(){return this.isDataSet}},watch:{checkIsDataSet:function(){if(this.checkIsDataSet){var data=JSON.parse(localStorage.getItem("approvalDetails"));this.setDataToDetails(data)}}},created:function(){this.instance()},methods:{getDetailSourceData:function(){return this.$refs.details.hotInstance.getSourceData()},checkEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},insertRow:function(t,e){this.$refs.details.hotInstance.loadData([]),this.$refs.details.hotInstance.alter("insert_row",t,e)},instance:function(){window.details=this},countDetailsRows:function(){return this.$refs.details.hotInstance.countRows()},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1),this.$refs.details.hotInstance.setDataAtRowProp([[t,"ReqDate",this.form.DocDate],[t,"WhsCode",this.form.WhsCode]])},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},getDataAtRowPropDetails:function(t,e){return this.$refs.details.hotInstance.getDataAtRowProp(t,e)},setDataToHttpMethod:function(t){this.httpMethod=t},setDataToDetails:function(data){var t=this;setTimeout((function(){t.$refs.details.hotInstance.loadData(data)}),300)},removeData:function(t){var e=this;this.$axios.delete("/api/reservation/master/1",{params:{doc_entry:t}}).then((function(t){e.$swal({type:"success",title:"Success!",text:t.data.message}),e.$emit("getData")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message}),e.$emit("getData")}))},setCountAttachment:function(t,e){this.$refs.details.hotInstance.setDataAtRowProp(e,"CountAttachment",t)},updateTableSettings:function(){this.$refs.details.hotInstance.updateSettings({})}}},d=o(61),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("HotTable",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)}),[],!1,null,null,null);e.default=component.exports},662:function(t,e,o){"use strict";var n=o(7),r=o(679).start;n({target:"String",proto:!0,forced:o(680)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},679:function(t,e,o){var n=o(22),r=o(140),c=o(45),l=o(308),d=o(76),h=n(l),w=n("".slice),f=Math.ceil,m=function(t){return function(e,o,n){var l,m,y=c(d(e)),D=r(o),v=y.length,R=void 0===n?" ":c(n);return D<=v||""==R?y:((m=h(R,f((l=D-v)/R.length))).length>l&&(m=w(m,0,l)),t?y+m:m+y)}};t.exports={start:m(!1),end:m(!0)}},680:function(t,e,o){var n=o(116);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)}}]);