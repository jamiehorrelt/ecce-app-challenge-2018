// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare","dojo/Deferred"],function(d,e,f){return e(null,{save:function(a,c){var b=new f;a=d.map(a,function(a){return'"'+a.join('","')+'"\n'});this._createAndSaveCSV(a,c);b.resolve(!0);return b},_createAndSaveCSV:function(a,c){a=new Blob(a,{type:"text/csv"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(a,c+".csv");else{var b=window.document.createElement("a");b.href=window.URL.createObjectURL(a);b.download=c+".csv";document.body.appendChild(b);
b.click();document.body.removeChild(b);window.URL.revokeObjectURL(a)}}})});