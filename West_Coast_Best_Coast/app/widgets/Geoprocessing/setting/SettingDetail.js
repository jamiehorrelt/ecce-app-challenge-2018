// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/setting/SettingDetail.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"nav-pane jimu-float-leading" data-dojo-attach-point\x3d"navPaneNode"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"setting-pane jimu-float-trailing" data-dojo-attach-point\x3d"settingPaneNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojo/Deferred dojo/text!./SettingDetail.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/TitlePane jimu/dijit/ViewStack jimu/dijit/LoadingShelter jimu/dijit/Message ./ParamSetting ./ParamNodeList ./LayerOrder ./Options ../utils".split(" "),function(k,c,d,g,e,h,l,m,n,p,q,r,t,u,v,w,x,y,f){return k([n,p],{baseClass:"jimu-widget-setting-gp-detail",templateString:m,postCreate:function(){this.inherited(arguments);
this.paramSetting=new v({map:this.map,nls:this.nls});this.layerOrder=new x({nls:this.nls});this.options=new y({nls:this.nls});this.own(e(this.options,"result-map-service",c.hitch(this,function(a){this._outputInResultMap(a)})));this.viewStack=new r({viewType:"dijit",views:[this.paramSetting,this.layerOrder,this.options]},this.settingPaneNode);this.loadingCover=new t({hidden:!0});this.loadingCover.placeAt(this.domNode);this.loadingCover.startup()},startup:function(){this.inherited(arguments);this.viewStack.startup()},
setConfig:function(a){a=c.clone(a);this.hasInputParam=!0;this.config&&this.config.taskUrl===a.taskUrl?(this.config=a,"serverInfo"in a&&(!this.config.serverInfo.hasResultMapServer||this.config.serverInfo.resultMapServerName)?this._initNavPane():(this.loadingCover.show(),f.getServiceDescription(this.config.taskUrl).then(c.hitch(this,function(a){this.loadingCover.hide();this.config.serverInfo=a.serverInfo;this._initNavPane()})))):(this.config=a,this.loadingCover.show(),f.getServiceDescription(this.config.taskUrl).then(c.hitch(this,
function(a){this.loadingCover.hide();this._changeTaskInfoToConfig(a);this._initNavPane()})))},getConfig:function(){if(!this.config.taskUrl)return new u({message:this.nls.serviceURLPlaceholder}),!1;this.paramSetting.param&&this.paramSetting.acceptValue();this.layerOrder.acceptValue();this.options.acceptValue();this.config.inputParams=this.inputParamNodes.getConfig();this.config.outputParams=this.outputParamNodes.getConfig();return this.config},_changeTaskInfoToConfig:function(a){var b=this.config.taskUrl;
this.config=a;this.config.taskUrl=b;this.config.isSynchronous="esriExecutionTypeSynchronous"===this.config.executionType?!0:!1;delete this.config.executionType;this.config.inputParams=[];this.config.outputParams=[];g.forEach(a.parameters,function(a){a.label=a.displayName;delete a.displayName;"esriGPParameterDirectionInput"===a.direction?this.config.inputParams.push(a):this.config.outputParams.push(a);delete a.direction;a.visible=!0;a.required="esriGPParameterTypeRequired"===a.parameterType?!0:!1;
delete a.parameterType;"GPFeatureRecordSetLayer"===a.dataType&&(a.featureSetMode="layers")},this);this.config.shareResults=f.allowShareResult(this.config);delete this.config.parameters},_initNavPane:function(){d.empty(this.navPaneNode);this._createParamsSection("input").then(c.hitch(this,function(){return this._createParamsSection("output")})).then(c.hitch(this,function(){this._createLayerOrderNode();this._createOptionsNode();this.layerOrder.setConfig(this.config);this.options.setConfig(this.config);
this.paramSetting.setConfig(this.config)}))},_onParamChange:function(a,b){h(".jimu-state-active",this.domNode).removeClass("jimu-state-active");"input"===b?this._clearParamSelection("output"):this._clearParamSelection("input");this.paramSetting.param&&this.paramSetting.acceptValue();this.layerOrder.acceptValue();this.options.acceptValue();"none"===d.getStyle(this.viewStack.domNode,"display")&&d.setStyle(this.viewStack.domNode,"display","");this.viewStack.switchView(this.paramSetting);this.paramSetting.setParam(a,
b)},_setActiveLinkNode:function(a){h(".jimu-state-active",this.domNode).removeClass("jimu-state-active");this._clearParamSelection();d.addClass(a,"jimu-state-active")},_createParamsSection:function(a){var b=new l,d="input"===a?this.config.inputParams:this.config.outputParams;if("output"===a&&this.config.serverInfo.resultMapServerName&&!g.some(d,function(a){return"MapServiceLayer"===a.dataType}))return f.getResultMapLayers(this.config.taskUrl,this.config.serverInfo.resultMapServerName).then(c.hitch(this,
function(c){d.push({name:this.config.serverInfo.resultMapServerName,label:this.config.serverInfo.resultMapServerName,tooltip:this.config.serverInfo.resultMapServerName,dataType:"MapServiceLayer",layerNames:c,visible:!0,required:""});this._doCreateParamsSection(d,a);b.resolve()})),b;this._doCreateParamsSection(d,a);b.resolve();return b},_doCreateParamsSection:function(a,b){a=new w({params:a,nls:this.nls,direction:b,useResultMapServer:this.config.useResultMapServer});this.own(e(a,"select-param",c.hitch(this,
this._onParamChange)));"input"===b?this.inputParamNodes=a:this.outputParamNodes=a;(new q({title:this.nls[b],content:a.domNode,open:0<this.inputParamNodes.getSize()?"input"===b:"output"===b})).placeAt(this.navPaneNode);this.inputParamNodes&&0<this.inputParamNodes.getSize()?setTimeout(c.hitch(this,function(){this.inputParamNodes.selectDefault()}),100):this.outputParamNodes&&0<this.outputParamNodes.getSize()&&setTimeout(c.hitch(this,function(){this.outputParamNodes.selectDefault()}),100)},_createLayerOrderNode:function(){var a=
d.create("div",{"class":"link-action-node nav-pane-node layer-order-node",innerHTML:this.nls.layerOrder},this.navPaneNode);this.own(e(a,"click",c.hitch(this,function(){this.options.acceptValue();this.paramSetting.param&&this.paramSetting.acceptValue();this._setActiveLinkNode(a);this.layerOrder.setConfig(this.config);this.viewStack.switchView(this.layerOrder)})))},_createOptionsNode:function(){var a=d.create("div",{"class":"link-action-node nav-pane-node options-node",innerHTML:this.nls.options},this.navPaneNode);
this.own(e(a,"click",c.hitch(this,function(){this.paramSetting.param&&this.paramSetting.acceptValue();this.layerOrder.acceptValue();this._setActiveLinkNode(a);this.viewStack.switchView(this.options)})))},_clearParamSelection:function(a){("input"===a||"undefined"===typeof a)&&this.inputParamNodes&&0<this.inputParamNodes.getSize()&&this.inputParamNodes.clearSelection();("output"===a||"undefined"===typeof a)&&this.outputParamNodes&&0<this.outputParamNodes.getSize()&&this.outputParamNodes.clearSelection()},
_outputInResultMap:function(a){!0===a?this.outputParamNodes.hideOutputInResultMap():this.outputParamNodes.showOutputInResultMap()}})});