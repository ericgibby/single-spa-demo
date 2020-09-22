System.register(["single-spa"],(function(e){var t;return{setters:[function(e){t=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s="undefined"!=typeof window;function l(e,t){if("object"!==n(t)||Array.isArray(t)||null===t)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(t)?"array":t," but expected a plain object"))}function p(e,t,n,r){if(!r){var o=Object.keys(t),i=[];o.forEach((function(e){n.indexOf(e)<0&&i.push(e)})),i.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(i.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function d(e,t){if("string"!=typeof t||""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a non-blank string"))}function f(e,t,r){if(!Array.isArray(t)&&("object"!==n(n(t))||"number"!==t.length))throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an array"));for(var o=arguments.length,i=new Array(o>3?o-3:0),a=3;a<o;a++)i[a-3]=arguments[a];for(var c=0;c<t.length;c++)r.apply(void 0,[t[c],"".concat(e,"[").concat(c,"]")].concat(i))}function h(e,t){return"/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t}function v(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}function m(e,t){if(s)return e.getAttribute(t);var n=v(e.attrs,(function(e){return e.name===t}));return n?n.value:null}function y(e,t){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var n={type:"application",name:m(e,"name")},r=m(e,"loader");if(r){if(!t.loaders||!t.loaders.hasOwnProperty(r))throw Error("Application loader '".concat(r,"' was not defined in the htmlLayoutData"));n.loader=t.loaders[r]}return b(e,n,t),[n]}if("route"===e.nodeName.toLowerCase()){var o={type:"route",routes:[]},i=m(e,"path");i&&(o.path=i),function(e,t){return s?e.hasAttribute("default"):e.attrs.some((function(e){return"default"===e.name}))}(e)&&(o.default=!0),b(e,o,t);for(var c=0;c<e.childNodes.length;c++){var u;(u=o.routes).push.apply(u,a(y(e.childNodes[c],t)))}return[o]}if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var l=0;l<e.childNodes.length;l++){var p;(p=e.routes).push.apply(p,a(y(e.childNodes[l],t)))}}return[e]}if(e.childNodes){for(var d={type:e.nodeName.toLowerCase(),routes:[]},f=0;f<e.childNodes.length;f++){var h;(h=d.routes).push.apply(h,a(y(e.childNodes[f],t)))}return[d]}return[]}function b(e,t,n){for(var r=(m(e,"props")||"").split(","),o=0;o<r.length;o++){var i=r[o].trim();if(0!==i.length){if(t.props||(t.props={}),!n.props||!n.props.hasOwnProperty(i))throw Error("Prop '".concat(i,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[i]=n.props[i]}}}function g(e,t,n){n&&n.nextSibling?n.parentNode.insertBefore(e,n.nextSibling):t.appendChild(e)}function w(e){return"single-spa-application:".concat(e)}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(i({},e),t)}function O(){return!0}e.constructApplications=function(e){var n=e.routes,r=e.loadApp,o={};return function e(t,n,r,o){o.forEach((function(o){"application"===o.type?(t[o.name]||(t[o.name]=[]),t[o.name].push({activeWhen:n,props:E(r,o.props),loader:o.loader})):"route"===o.type?e(t,o.activeWhen,E(r,o.props),o.routes):o.routes&&e(t,n,r,o.routes)}))}(o,O,{},n.routes),Object.keys(o).map((function(e){var n=o[e];return{name:e,customProps:function(e,t){var r=v(n,(function(e){return e.activeWhen(t)}));return r?r.props:{}},activeWhen:n.map((function(e){return e.activeWhen})),app:function(){var o;s&&(o=v(n,(function(e){return e.activeWhen(window.location)})));var i=r({name:e});return o&&o.loader?function(e,n,r){return Promise.resolve().then((function(){var o,i=w(e),a=document.getElementById(i);a||((a=document.createElement("div")).id=i,a.style.display="none",document.body.appendChild(a),o=function(){a.style.removeProperty("display"),""===a.getAttribute("style")&&a.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var u,s="string"==typeof n.loader?(u=n.loader,{bootstrap:function(){return Promise.resolve()},mount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=u}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}):n.loader,l=t.mountRootParcel(s,{name:"application-loader:".concat(e),domElement:a});return Promise.all([l.mountPromise,r]).then((function(e){var t,n=function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),2!==n.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t)||c(t,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=(n[0],n[1]);return l.unmount().then((function(){return o&&o(),r}))}))}))}(e,o,i):i}}}))},e.constructLayoutEngine=function(e){var t=e.routes,n=(e.applications,e.active),r=void 0===n||n,o=!1,i=[],a=t.base.slice(0,t.base.length-1),c={isActive:function(){return o},activate:function(){o||(o=!0,s&&(window.addEventListener("single-spa:before-mount-routing-event",u),window.addEventListener("single-spa:routing-event",l),u()))},deactivate:function(){o&&(o=!1,s&&(window.removeEventListener("single-spa:before-mount-routing-event",u),window.removeEventListener("single-spa:routing-event",l)))}};return r&&c.activate(),c;function u(){if(0===location["hash"===t.mode?"hash":"pathname"].indexOf(a)){var e="string"==typeof t.containerEl?document.querySelector(t.containerEl):t.containerEl;!function e(t){var n=t.location,r=t.routes,o=t.parentContainer,i=t.previousSibling,a=t.shouldMount,c=t.pendingRemovals;return r.forEach((function(t,r){if("application"===t.type){var u=w(t.name),s=document.getElementById(u);a&&(s||((s=document.createElement("div")).id=u),g(s,o,i),i=s)}else if("route"===t.type)i=e({location:n,routes:t.routes,parentContainer:o,previousSibling:i,shouldMount:a&&t.activeWhen(n),pendingRemovals:c});else if(t instanceof Node)if(a){if(!t.connectedNode){var l=t.cloneNode(!1);t.connectedNode=l}g(t.connectedNode,o,i),t.routes&&e({location:n,routes:t.routes,parentContainer:t.connectedNode,previousSibling:null,shouldMount:a,pendingRemovals:c}),i=t.connectedNode}else c.push((function(){var e;(e=t.connectedNode)&&(e.remove?e.remove():e.parentNode.removeChild(e)),delete t.connectedNode}))})),i}({location:window.location,routes:t.routes,parentContainer:e,shouldMount:!0,pendingRemovals:i})}}function l(e){var t=e.detail.appsByNewStatus;i.forEach((function(e){return e()})),i=[],t.NOT_MOUNTED.concat(t.NOT_LOADED).forEach((function(e){var t=document.getElementById(w(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}},e.constructRoutes=function(e,r){if(e&&e.nodeName)e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));s&&e.isConnected&&e.parentNode.removeChild(e);var n={routes:[]};m(e,"mode")&&(n.mode=m(e,"mode")),m(e,"base")&&(n.base=m(e,"base"));for(var r=0;r<e.childNodes.length;r++){var o;(o=n.routes).push.apply(o,a(y(e.childNodes[r],t)))}return n}(e,r);else if(r)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(e){l("routesConfig",e);var r,o=e.disableWarnings;p("routesConfig",e,["mode","base","containerEl","routes","disableWarnings"],o),e.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(s&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,e.containerEl):e.containerEl="body",e.hasOwnProperty("mode")||(e.mode="history"),function(e,t,n){if(n.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(n.join(", ")))}(0,e.mode,["history","hash"]),e.hasOwnProperty("base")?(d("routesConfig.base",e.base),e.base=(0!==(r=e.base).indexOf("/")&&(r="/"+r),"/"!==r[r.length-1]&&(r+="/"),r)):e.base="/";var i=s?window.location.pathname:"/",a="hash"===e.mode?i+"#":"";f("routesConfig.routes",e.routes,(function e(r,i,a){var c,u=a.parentPath,s=a.siblingActiveWhens;if(l(i,r),"application"===r.type)p(i,r,["type","name","props","loader"],o),r.props&&l("".concat(i,".props"),r.props),d("".concat(i,".name"),r.name);else if("route"===r.type){p(i,r,["type","path","routes","props","default"],o);var v,m=r.hasOwnProperty("path"),y=r.hasOwnProperty("default");if(m)d("".concat(i,".path"),r.path),v=h(u,r.path),r.activeWhen=t.pathToActiveWhen(v),s.push(r.activeWhen);else{if(!y)throw Error("Invalid ".concat(i,": routes must have either a path or default property."));!function(e,t){if("boolean"!=typeof t)throw Error("Invalid ".concat(e,": received ").concat(n(t),", but expected a boolean"))}("".concat(i,".default"),r.default),v=u,r.activeWhen=(c=s,function(e){return!c.some((function(t){return t(e)}))})}if(m&&y&&r.default)throw Error("Invalid ".concat(i,": cannot have both path and set default to true."));r.routes&&f("".concat(i,".routes"),r.routes,e,{parentPath:v,siblingActiveWhens:[]})}else{if("undefined"!=typeof Node&&r instanceof Node);else for(var b in r)"routes"!==b&&d("".concat(i,"['").concat(b,"']"),r[b]);r.routes&&f("".concat(i,".routes"),r.routes,e,{parentPath:u,siblingActiveWhens:s})}}),{parentPath:a+e.base,siblingActiveWhens:[]}),delete e.disableWarnings}(e),e},e.matchRoute=function(e,t){d("path",t);var n=i({},e),r=e.base.slice(0,e.base.length-1);if(0===t.indexOf(r)){var o=s?window.location.origin:"http://localhost",a=new URL(h(o,t));n.routes=function e(t,n){var r=[];return n.forEach((function(n){"application"===n.type?r.push(n):"route"===n.type?n.activeWhen(t)&&r.push(i(i({},n),{},{routes:e(t,n.routes)})):Array.isArray(n.routes)&&r.push(i(i({},n),{},{routes:e(t,n.routes)}))})),r}(a,e.routes)}else n.routes=[];return n},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(0))},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=Object(o.constructRoutes)(document.querySelector("#single-spa-layout")),a=Object(o.constructApplications)({routes:i,loadApp:function(e){var t=e.name;return System.import(t)}}),c=Object(o.constructLayoutEngine)({routes:i,applications:a});a.forEach(r.registerApplication),c.activate(),Object(r.start)()}]))}}}));
//# sourceMappingURL=ericgibby-root-config.js.map