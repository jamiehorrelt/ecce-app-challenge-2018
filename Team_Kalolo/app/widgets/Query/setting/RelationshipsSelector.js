// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array jimu/dijit/SimpleTable".split(" "),function(g,h,k,l,b,c,m){return g([h,k,l],{baseClass:"jimu-query-setting-relationships-selector",templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"tableDiv"\x3e\x3c/div\x3e\x3c/div\x3e',nls:null,allRelationshipInfos:null,postCreate:function(){this.inherited(arguments);this._initTable()},setSelectedRelationshipInfos:function(a){if(a&&
0<=a.length){var e=b.clone(a),f=c.map(e,function(a){return a.relationship});a=this.table.getRows();var d={};c.forEach(a,b.hitch(this,function(a){var b=this.table.getRowData(a),b=f.indexOf(b.relationship);0<=b?(this.table.editRow(a,{cbx:!0,label:e[b].label}),d[b]=a):this.table.editRow(a,{cbx:!1})}));for(a=f.length-1;0<=a;a--)d[a]&&this.table.moveToTop(d[a])}},getSelectedRelationships:function(){var a=this.table.getData(),a=c.filter(a,b.hitch(this,function(a){return a.cbx}));return c.map(a,b.hitch(this,
function(a){return{relationship:a.relationship,label:a.label}}))},_initTable:function(){this.table=new m({autoHeight:!1,style:"height:277px",fields:[{name:"cbx",title:"",type:"checkbox",width:"40px"},{name:"relationship",title:"",type:"text",hidden:!0},{name:"nls",title:this.nls.relationship,type:"text"},{name:"label",title:this.nls.label,type:"text",editable:!0},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"],width:"120px"}]});this.table.placeAt(this.tableDiv);var a=c.map(this.allRelationshipInfos,
b.hitch(this,function(a){return{cbx:!0,relationship:a.relationship,nls:a.nls,label:a.label}}));this.table.addRows(a)}})});