!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a=e();for(var n in a)("object"==typeof exports?exports:t)[n]=a[n]}}(this,function(){return function(t){function e(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){var a=function(){var t=this;t.removeDom(),t.createDom()};a.prototype={options:{maxWH:1024,quality:600,FDkey:"picture"},backData:{dataURL:"",Blob:"",fileFormData:"",W:0,H:0,size:0},init:function(t,e){var a=this;if(t.maxWH&&(a.options.maxWH=t.maxWH),t.quality&&(a.options.quality=t.quality),t.FDkey){if("string"!=typeof t.FDkey)return void alert("FDkey应为字符!");a.options.FDkey=t.FDkey}var n=document.getElementById("inputfile");n.click(),n.addEventListener("change",function(t){var n=t.target.files,o=n[0],i=o.type,r=Math.round(o.size/1024),c=o.name;a.backData.size=r;var u=new FileReader;u.readAsDataURL(o),u.onload=function(){var t=u.result;a.WHcompress(i,c,t,a.options.quality,function(t){t.compressSizeRate<1?a.sizeCompress(i,c,t.newImgData,t.compressSizeRate,function(){"function"==typeof e&&e(a.backData)}):"function"==typeof e&&e(a.backData)})},u.onloadend=function(){a.removeDom(),a.createDom()}})},createDom:function(){(document.body||document.documentElement).insertAdjacentHTML("beforeEnd",'<div class="dom-container" style="display: none">\n                            <canvas id="canvas"></canvas>\n                            <input id="inputfile" type="file" accept="image/*">\n                         </div>')},removeDom:function(){for(var t=document.getElementsByClassName("dom-container"),e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e])},WHcompress:function(t,e,a,n,o){var i=this,r=new Image;r.src=a,r.onload=function(){var a=r.width,n=r.height,c=i.dWH(a,n,i.options.maxWH),u=document.getElementById("canvas"),d=u.getContext("2d");u.width=c.width,u.height=c.height,d.clearRect(0,0,u.width,u.height),d.drawImage(r,0,0,u.width,u.height);var s=u.toDataURL(t,1),f=i.fileSizeKB(s),l=i.qualityRate(s,i.options.quality);if(i.backData.H=c.width,i.backData.W=c.height,i.backData.size=f,l>=1){var m=i.dataURLtoBlob(s,t),h=i.toFileFormData("",m,e);i.backData.dataURL=s,i.backData.size=f,i.backData.Blob=m,i.backData.fileFormData=h}"function"==typeof o&&o({compressSizeRate:l,newImgData:s})}},sizeCompress:function(t,e,a,n,o){var i=this,r=new Image;r.src=a,r.onload=function(){var a=r.width,c=r.height,u=i.dWH(a,c,i.options.maxWH),d=document.getElementById("canvas"),s=d.getContext("2d");d.width=u.width,d.height=u.height,s.clearRect(0,0,d.width,d.height),s.drawImage(r,0,0,d.width,d.height);var f=d.toDataURL(t,n),l=i.fileSizeKB(f),m=i.dataURLtoBlob(f,e),h=i.toFileFormData("",m,e);i.backData.dataURL=f,i.backData.size=l,i.backData.Blob=m,i.backData.fileFormData=h,"function"==typeof o&&o({newImgData:f})}},dWH:function(t,e,a){var n={width:t,height:e};return Math.max(t,e)>a?t>e?(n.width=a,n.height=Math.round(e*(a/t)),n):(n.height=a,n.width=Math.round(t*(a/e)),n):n},fileSizeKB:function(t){return Math.round(3*t.split(",")[1].length/4/1024)},qualityRate:function(t,e){var a=this,n=a.fileSizeKB(t),o=Math.round((e-1)/n*100)/100;return o},dataURLtoBlob:function(t,e,a){for(var n=atob(t.split(",")[1]),o=t.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(n.length),r=new Uint8Array(i),c=0;c<n.length;c++)r[c]=n.charCodeAt(c);return e&&(o=e),new Blob([i],{type:o,name:a,lastModifiedDate:new Date})},toFileFormData:function(t,e,a){var n=this,o=new FormData,i=n.options.FDkey;if(e)return o.append(i,e,a),o;var r=n.dataURLtoBlob(t,a);return o.append(i,r,a),o}},t.LDFimg=a}(window),e.LDFimg=LDFimg}])});