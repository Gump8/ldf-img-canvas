!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a=e();for(var n in a)("object"==typeof exports?exports:t)[n]=a[n]}}(this,function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){var a=function(){var t=this;t.removeDom(),t.createDom()};a.prototype={options:{maxWH:1024,quality:600},backData:{dataURL:"",Blob:"",fileFormData:"",W:0,H:0,size:0},init:function(t,e){var a=this;t.maxWH&&(a.options.maxWH=t.maxWH),t.quality&&(a.options.quality=t.quality);var n=document.getElementById("inputfile");n.click(),n.addEventListener("change",function(t){var n=t.target.files,i=n[0],o=i.type,r=Math.round(i.size/1024),c=i.name;a.backData.size=r;var u=new FileReader;u.readAsDataURL(i),u.onload=function(){var t=u.result;a.WHcompress(o,c,t,a.options.quality,function(t){t.compressSizeRate<1?a.sizeCompress(o,c,t.newImgData,t.compressSizeRate,function(){"function"==typeof e&&e(a.backData)}):"function"==typeof e&&e(a.backData)})}})},createDom:function(){(document.body||document.documentElement).insertAdjacentHTML("beforeEnd",'<div class="dom-container" style="display: none">\n                            <canvas id="canvas"></canvas>\n                            <input id="inputfile" type="file" accept="image/*">\n                         </div>')},removeDom:function(){for(var t=document.getElementsByClassName("dom-container"),e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e])},WHcompress:function(t,e,a,n,i){var o=this,r=new Image;r.src=a,r.onload=function(){var a=r.width,n=r.height,c=o.dWH(a,n,o.options.maxWH),u=document.getElementById("canvas"),d=u.getContext("2d");u.width=c.width,u.height=c.height,d.clearRect(0,0,u.width,u.height),d.drawImage(r,0,0,u.width,u.height);var s=u.toDataURL(t,1),l=o.fileSizeKB(s),f=o.qualityRate(s,o.options.quality);if(o.backData.H=c.width,o.backData.W=c.height,o.backData.size=l,f>=1){var h=o.dataURLtoBlob(s,t),m=o.toFileFormData("",h,e);o.backData.dataURL=s,o.backData.size=l,o.backData.Blob=h,o.backData.fileFormData=m}"function"==typeof i&&i({compressSizeRate:f,newImgData:s})}},sizeCompress:function(t,e,a,n,i){var o=this,r=new Image;r.src=a,r.onload=function(){var a=r.width,c=r.height,u=o.dWH(a,c,o.options.maxWH),d=document.getElementById("canvas"),s=d.getContext("2d");d.width=u.width,d.height=u.height,s.clearRect(0,0,d.width,d.height),s.drawImage(r,0,0,d.width,d.height);var l=d.toDataURL(t,n),f=o.fileSizeKB(l),h=o.dataURLtoBlob(l,e),m=o.toFileFormData("",h,e);o.backData.dataURL=l,o.backData.size=f,o.backData.Blob=h,o.backData.fileFormData=m,"function"==typeof i&&i({newImgData:l})}},dWH:function(t,e,a){var n={width:t,height:e};return Math.max(t,e)>a?t>e?(n.width=a,n.height=Math.round(e*(a/t)),n):(n.height=a,n.width=Math.round(t*(a/e)),n):n},fileSizeKB:function(t){return Math.round(3*t.split(",")[1].length/4/1024)},qualityRate:function(t,e){var a=this,n=a.fileSizeKB(t),i=Math.round((e-1)/n*100)/100;return i},dataURLtoBlob:function(t,e,a){for(var n=atob(t.split(",")[1]),i=t.split(",")[0].split(":")[1].split(";")[0],o=new ArrayBuffer(n.length),r=new Uint8Array(o),c=0;c<n.length;c++)r[c]=n.charCodeAt(c);return e&&(i=e),new Blob([o],{type:i,name:a,lastModifiedDate:new Date})},toFileFormData:function(t,e,a){var n=this,i=new FormData;if(e)return i.append("picture",e,a),i;var o=n.dataURLtoBlob(t,a);return i.append("picture",o,a),i}},t.LDFimg=a}(window),e.LDFimg=LDFimg}])});