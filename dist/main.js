(()=>{"use strict";var t={310:(t,e,n)=>{t.exports=n.p+"184ab64ac31bbe46aa92.png"}},e={};function n(c){var o=e[c];if(void 0!==o)return o.exports;var r=e[c]={exports:{}};return t[c](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var c=e.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t=n(310),e=()=>{e=document.getElementById("header");var n=document.createElement("img");n.src=t,e.appendChild(n);const c=function(t,n){var c=document.createElement("button");c.id=t,c.textContent=n,e.appendChild(c)};c("mainPageBtn","Main Page"),c("menuBtn","Menu"),c("contactBtn","Contact Us")};const c=()=>{const t=document.createElement("div");t.textContent="You're gonna love our meats!",content=document.getElementById("content"),content.appendChild(t)};e(),c(),document.getElementById("mainPageBtn").addEventListener("click",(function(){document.getElementById("content").innerHTML="",c()})),document.getElementById("menuBtn").addEventListener("click",(function(){document.getElementById("content").innerHTML="",(()=>{const t=["Lasagna","Pasta","Soup","Breadsticks"],e=document.createElement("ol");for(let n of t){let t=document.createElement("li");t.textContent=n,e.appendChild(t)}content=document.getElementById("content"),content.appendChild(e)})()})),document.getElementById("contactBtn").addEventListener("click",(function(){document.getElementById("content").innerHTML="",(()=>{const t=document.createElement("div");t.textContent="Contact us at this number: 1-123-456-7890",content=document.getElementById("content"),content.appendChild(t)})()}))})()})();