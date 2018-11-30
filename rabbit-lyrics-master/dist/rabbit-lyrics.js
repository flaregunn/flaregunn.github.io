!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});n(1);class i{constructor(e){this.element=e.element,this.element.classList.contains("rabbit-lyrics--enabled")||(this.element.classList.add("rabbit-lyrics"),e.mediaElement?this.mediaElement=e.mediaElement:this.mediaElement=this.findMediaElementBefore(this.element),e.viewMode?this.viewMode=e.viewMode:this.viewMode="default",this.element.classList.add("rabbit-lyrics--"+this.viewMode),"full"!==this.viewMode&&e.height&&(this.element.style.height=e.height+"px"),e.alignment&&(this.element.style.textAlign=e.alignment),this.scrollerIntervalDuration=200,this.scrollerIntervalStep=10,this.lineElements=[],this.setStatus=this.setStatus.bind(this),this.synchronize=this.synchronize.bind(this),this.scroll=this.scroll.bind(this),this.parseLyrics(),this.enableLyrics())}findMediaElementBefore(e){if(!e)return null;let t=e.previousElementSibling;for(;t;){if("audio"===t.tagName.toLowerCase()||"video"===t.tagName.toLowerCase())return t;{const e=t.querySelector("audio, video");if(e)return e[e.length-1]}t=t.previousElementSibling}return e.parentElement?this.findMediaElementBefore(e.parentElement):null}parseLyrics(){if(!this.element)return this;let e=this.element.textContent.trim().split("\n");this.element.textContent="";let t=0,n=[];for(let i=0;i<e.length;i++){let r=document.createElement("div");r.className="rabbit-lyrics__line",this.element.appendChild(r),this.lineElements.push(r);let s=e[i].trim(),o=s.match(/\[\d+:\d+\.\d+\]/g)||[],a=s.match(/^\[\d+:\d+\.\d+\]/g)||[],l=s.match(/\[\d+:\d+\.\d+\]$/g)||[];o.length&&n.length&&(n.forEach(function(e){e.dataset.end=this.decodeTimeStamp(o[0])},this),n=[]),a.length>0?(r.dataset.start=this.decodeTimeStamp(a[0]),t=this.decodeTimeStamp(a[0])):r.dataset.start=t,l.length>0?(r.dataset.end=this.decodeTimeStamp(l[0]),t=this.decodeTimeStamp(l[0])):(r.dataset.end=1/0,n.push(r)),(s=s.replace(/\[\d+:\d+\.\d+\]/g,""))||(s="&nbsp;"),r.innerHTML=s}return this}enableLyrics(){return this.mediaElement?(this.element.scrollTop=0,this.mediaElement.ontimeupdate=this.synchronize,this.mediaElement.onplay=this.setStatus,this.mediaElement.onplaying=this.setStatus,this.mediaElement.onpause=this.setStatus,this.mediaElement.onwaiting=this.setStatus,this.mediaElement.onended=this.setStatus,this.element.classList.add("rabbit-lyrics--enabled"),this):this}setStatus(e){let t;switch(e.type){case"play":case"playing":t="playing";break;case"pause":t="paused";break;case"waiting":t="waiting";break;case"ended":t="ended"}this.element.classList.remove("rabbit-lyrics--playing","rabbit-lyrics--paused","rabbit-lyrics--waiting","rabbit-lyrics--ended"),t&&this.element.classList.add("rabbit-lyrics--"+t)}synchronize(){let e=this.mediaElement.currentTime,t=!1,n=[];if(this.lineElements.forEach(i=>{e>=i.dataset.start&&e<=i.dataset.end?(i.classList.contains("rabbit-lyrics__line--active")||(t=!0,i.classList.add("rabbit-lyrics__line--active")),n.push(i)):i.classList.contains("rabbit-lyrics__line--active")&&(t=!0,i.classList.remove("rabbit-lyrics__line--active"))}),t&&n.length>0){let e=(n[0].offsetTop+n[n.length-1].offsetTop+n[n.length-1].offsetHeight)/2;this.scrollTop=e-this.element.clientHeight/2,clearInterval(this.scrollerInterval),this.scrollerTimer=this.scrollerIntervalDuration,this.scrollerInterval=setInterval(this.scroll,this.scrollerIntervalStep)}}scroll(){if(this.scrollerTimer<=0)return void clearInterval(this.scrollerInterval);let e=(this.scrollTop-this.element.scrollTop)*this.scrollerIntervalStep/this.scrollerTimer;this.element.scrollTop+=e,this.scrollerTimer-=this.scrollerIntervalStep}decodeTimeStamp(e){if(!e||"string"!=typeof e)return 0;let t;return(t=e.match(/\[(\d+):(\d+):(\d+\.\d+)\]/))&&4===t.length?60*parseInt(t[1])*60+60*parseInt(t[2])+parseFloat(t[3]):(t=e.match(/\[(\d+):(\d+\.\d+)\]/))&&3===t.length?60*parseInt(t[1])+parseFloat(t[2]):0}}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByClassName("rabbit-lyrics");for(let t=0;t<e.length;t++){let n=e[t],r=document.querySelector(n.dataset.media),s=r?r[0]:null,{viewMode:o,height:a,alignment:l}=n.dataset;new i({element:n,mediaElement:s,viewMode:o,height:a,alignment:l})}},!1)},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"/* Framed view mode (default) */\n\n.rabbit-lyrics {\n  position: relative; /* Must be relative, otherwise cannot calculate offset */\n  height: 16.5em;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.rabbit-lyrics__line {\n  min-height: 1.5em;\n}\n\n.rabbit-lyrics__line--active {\n  color: #41bdff;\n}\n\n/* Mini view mode */\n\n.rabbit-lyrics--mini {\n  height: 1.5em;\n  overflow-y: hidden;\n}\n\n.rabbit-lyrics--mini .rabbit-lyrics__line {\n  display: none;\n}\n\n.rabbit-lyrics--mini .rabbit-lyrics__line--active {\n  display: inline-block;\n}\n\n/* Full view mode, no scroll bar */\n\n.rabbit-lyrics--full {\n  height: auto;\n  overflow-y: initial;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),s=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(s).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(i[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){var i={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),o=null,a=0,l=[],c=n(5);function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=i[r.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](r.parts[o]);for(;o<r.parts.length;o++)s.parts.push(b(r.parts[o],t))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(b(r.parts[o],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],i={},r=0;r<e.length;r++){var s=e[r],o=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[o]?i[o].parts.push(a):n.push(i[o]={id:o,parts:[a]})}return n}function f(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,n);n.insertBefore(t,r)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function p(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,i,r,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var l=a++;n=o||(o=p(t)),i=y.bind(null,n,l,!1),r=y.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||s)&&(i=c(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){h(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return u(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var o=n[s];(a=i[o.id]).refs--,r.push(a)}e&&u(d(e,t),t);for(s=0;s<r.length;s++){var a;if(0===(a=r[s]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var s=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(r=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);