var r,t,e,n,a;function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function i(r){return+r.replace("$","").replace(",","")}r=document.querySelector("ul"),(e=function(r){if(Array.isArray(r))return o(r)}(t=document.querySelectorAll("li"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(r,t){if(r){if("string"==typeof r)return o(r,void 0);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort(function(r,t){return i(t.dataset.salary)-i(r.dataset.salary)}),e.forEach(function(t){return r.appendChild(t)}),n=document.querySelector("ul"),a=[],n.querySelectorAll("li").forEach(function(r){var t={name:r.innerText,position:r.dataset.position,salary:i(r.dataset.salary),age:r.dataset.age};a.push(t)});
//# sourceMappingURL=index.e2c82013.js.map