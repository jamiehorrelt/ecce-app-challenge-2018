// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","../utils"],function(b,c,d,e){return b([c,d],{templateString:"\x3cdiv\x3ePlease create a sub class\x3c/div\x3e",type:"BaseDijit",config:null,inSettingPage:!0,appConfig:null,constructor:function(a){this.config=a.config},setInSettingPage:function(a){this.inSettingPage=a},setConfig:function(a){this.config=a},setMap:function(a){this.map=a},setDataSource:function(a){e.checkDSIsVaild(a,this.map,this.appConfig)&&(this.dataSource=a)},
resize:function(){},setAppConfig:function(a){this.appConfig=a},onDataSourceDataUpdate:function(a){this.data=a},isDarkTheme:function(){var a=!1;this.appConfig&&("DashboardTheme"!==this.appConfig.theme.name||"default"!==this.appConfig.theme.styles[0]&&"style3"!==this.appConfig.theme.styles[0]?"DartTheme"===this.appConfig.theme.name&&(a=!0):a=!0);return a}})});