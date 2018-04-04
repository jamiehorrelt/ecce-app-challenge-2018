// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","./settingComponents","./SettingObject"],function(c,l,m,a,d){return c(d,{_inputControl:null,constructor:function(b,c,f,g,d,h,k){b=[];var e;e=a.checkboxCtl("inline-block",!1);b.push(e.div);this._inputControl=e.ctl;k&&this.own(m(this._inputControl,"change",l.hitch(this,k)));h&&b.push(a.text("hint",h));this._mainDiv=a.container("flexbox "+(c||""),"minorTrailingHorizGap",[a.container("inline-block "+(f?f:""),"",[a.text("static-text",d)]),a.container("inline-block "+
(g?g:""),"minorTrailingVertGap",b)])},setValue:function(a){this._inputControl&&this._inputControl.set("value",a)},getValue:function(){if(this._inputControl)return"on"===this._inputControl.get("value")},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(){this._inputControl&&(this._config=this.getValue())}})});