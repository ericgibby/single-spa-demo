System.register(["react","shared-components","react-dom"],(function(t){var e,n,r;return{setters:[function(t){e=t},function(t){n=t},function(t){r=t}],execute:function(){t(function(t){function e(e){for(var n,o,a=e[0],i=e[1],c=0,s=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);for(u&&u(e);s.length;)s.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(t){return o.p+""+t+".ericgibby-single-spa-react-app.js"}(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[t]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp_single-spa-react-app"]=window["webpackJsonp_single-spa-react-app"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=i;return o(o.s=24)}([function(t,n){t.exports=e},function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return g}));var r=n(3),o=n(0),a=n.n(o),i=(n(7),n(5)),c=n(9),u=n(4),s=n(2),l=n(10),f=n.n(l),p=(n(13),n(6)),d=(n(17),function(t){var e=Object(c.a)();return e.displayName=t,e}("Router-History")),h=function(t){var e=Object(c.a)();return e.displayName=t,e}("Router"),m=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Object(r.a)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return a.a.createElement(h.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a.a.createElement(d.Provider,{children:this.props.children||null,value:this.props.history}))},e}(a.a.Component);a.a.Component;a.a.Component;var y={},v=0;function g(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,c=void 0!==i&&i,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=y[n]||(y[n]={});if(r[t])return r[t];var o=[],a={regexp:f()(t,o,e),keys:o};return v<1e4&&(r[t]=a,v++),a}(n,{end:a,strict:c,sensitive:s}),o=r.regexp,i=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],p=u.slice(1),d=t===l;return a&&!d?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:d,params:i.reduce((function(t,e,n){return t[e.name]=p[n],t}),{})}}),null)}var b=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return a.a.createElement(h.Consumer,null,(function(e){e||Object(u.a)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?g(n.pathname,t.props):e.match,o=Object(s.a)({},e,{location:n,match:r}),i=t.props,c=i.children,l=i.component,f=i.render;return Array.isArray(c)&&0===c.length&&(c=null),a.a.createElement(h.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:l?a.a.createElement(l,o):f?f(o):null:"function"==typeof c?c(o):null)}))},e}(a.a.Component);function w(t){return"/"===t.charAt(0)?t:"/"+t}function E(t,e){if(!t)return e;var n=w(t);return 0!==e.pathname.indexOf(n)?e:Object(s.a)({},e,{pathname:e.pathname.substr(n.length)})}function O(t){return"string"==typeof t?t:Object(i.e)(t)}function x(t){return function(){Object(u.a)(!1)}}function P(){}a.a.Component;var C=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return a.a.createElement(h.Consumer,null,(function(e){e||Object(u.a)(!1);var n,r,o=t.props.location||e.location;return a.a.Children.forEach(t.props.children,(function(t){if(null==r&&a.a.isValidElement(t)){n=t;var i=t.props.path||t.props.from;r=i?g(o.pathname,Object(s.a)({},t.props,{path:i})):e.match}})),r?a.a.cloneElement(n,{location:o,computedMatch:r}):null}))},e}(a.a.Component);a.a.useContext},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";e.a=function(t,e){if(!t)throw new Error("Invariant failed")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"b",(function(){return j})),n.d(e,"d",(function(){return R})),n.d(e,"c",(function(){return m})),n.d(e,"f",(function(){return y})),n.d(e,"e",(function(){return h}));var r=n(2);function o(t){return"/"===t.charAt(0)}function a(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var i=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],i=e&&e.split("/")||[],c=t&&o(t),u=e&&o(e),s=c||u;if(t&&o(t)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var l=i[i.length-1];n="."===l||".."===l||""===l}else n=!1;for(var f=0,p=i.length;p>=0;p--){var d=i[p];"."===d?a(i,p):".."===d?(a(i,p),f++):f&&(a(i,p),f--)}if(!s)for(;f--;f)i.unshift("..");!s||""===i[0]||i[0]&&o(i[0])||i.unshift("");var h=i.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h};function c(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var u=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"==typeof e||"object"==typeof n){var r=c(e),o=c(n);return r!==e||o!==n?t(r,o):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1},s=n(4);function l(t){return"/"===t.charAt(0)?t:"/"+t}function f(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function d(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function h(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function m(t,e,n,o){var a;"string"==typeof t?(a=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var a=e.indexOf("?");return-1!==a&&(n=e.substr(a),e=e.substr(0,a)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(a=Object(r.a)({},t)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==e&&void 0===a.state&&(a.state=e));try{a.pathname=decodeURI(a.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(a.key=n),o?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=i(a.pathname,o.pathname)):a.pathname=o.pathname:a.pathname||(a.pathname="/"),a}function y(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&u(t.state,e.state)}function v(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var a="function"==typeof t?t(e,n):t;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var g=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(t,e){e(window.confirm(t))}function w(){try{return window.history.state||{}}catch(t){return{}}}function E(t){void 0===t&&(t={}),g||Object(s.a)(!1);var e,n=window.history,o=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,a=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,c=i.forceRefresh,u=void 0!==c&&c,f=i.getUserConfirmation,y=void 0===f?b:f,E=i.keyLength,O=void 0===E?6:E,x=t.basename?d(l(t.basename)):"";function P(t){var e=t||{},n=e.key,r=e.state,o=window.location,a=o.pathname+o.search+o.hash;return x&&(a=p(a,x)),m(a,r,n)}function C(){return Math.random().toString(36).substr(2,O)}var j=v();function S(t){Object(r.a)(U,t),U.length=n.length,j.notifyListeners(U.location,U.action)}function R(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||A(P(t.state))}function k(){A(P(w()))}var T=!1;function A(t){if(T)T=!1,S();else{j.confirmTransitionTo(t,"POP",y,(function(e){e?S({action:"POP",location:t}):function(t){var e=U.location,n=M.indexOf(e.key);-1===n&&(n=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(T=!0,L(o))}(t)}))}}var _=P(w()),M=[_.key];function $(t){return x+h(t)}function L(t){n.go(t)}var D=0;function B(t){1===(D+=t)&&1===t?(window.addEventListener("popstate",R),a&&window.addEventListener("hashchange",k)):0===D&&(window.removeEventListener("popstate",R),a&&window.removeEventListener("hashchange",k))}var N=!1;var U={length:n.length,action:"POP",location:_,createHref:$,push:function(t,e){var r=m(t,e,C(),U.location);j.confirmTransitionTo(r,"PUSH",y,(function(t){if(t){var e=$(r),a=r.key,i=r.state;if(o)if(n.pushState({key:a,state:i},null,e),u)window.location.href=e;else{var c=M.indexOf(U.location.key),s=M.slice(0,c+1);s.push(r.key),M=s,S({action:"PUSH",location:r})}else window.location.href=e}}))},replace:function(t,e){var r=m(t,e,C(),U.location);j.confirmTransitionTo(r,"REPLACE",y,(function(t){if(t){var e=$(r),a=r.key,i=r.state;if(o)if(n.replaceState({key:a,state:i},null,e),u)window.location.replace(e);else{var c=M.indexOf(U.location.key);-1!==c&&(M[c]=r.key),S({action:"REPLACE",location:r})}else window.location.replace(e)}}))},go:L,goBack:function(){L(-1)},goForward:function(){L(1)},block:function(t){void 0===t&&(t=!1);var e=j.setPrompt(t);return N||(B(1),N=!0),function(){return N&&(N=!1,B(-1)),e()}},listen:function(t){var e=j.appendListener(t);return B(1),function(){B(-1),e()}}};return U}var O={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+f(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:f,decodePath:l},slash:{encodePath:l,decodePath:l}};function x(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function P(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function C(t){window.location.replace(x(window.location.href)+"#"+t)}function j(t){void 0===t&&(t={}),g||Object(s.a)(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),o=n.getUserConfirmation,a=void 0===o?b:o,i=n.hashType,c=void 0===i?"slash":i,u=t.basename?d(l(t.basename)):"",f=O[c],y=f.encodePath,w=f.decodePath;function E(){var t=w(P());return u&&(t=p(t,u)),m(t)}var j=v();function S(t){Object(r.a)(U,t),U.length=e.length,j.notifyListeners(U.location,U.action)}var R=!1,k=null;function T(){var t,e,n=P(),r=y(n);if(n!==r)C(r);else{var o=E(),i=U.location;if(!R&&(e=o,(t=i).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(k===h(o))return;k=null,function(t){if(R)R=!1,S();else{j.confirmTransitionTo(t,"POP",a,(function(e){e?S({action:"POP",location:t}):function(t){var e=U.location,n=$.lastIndexOf(h(e));-1===n&&(n=0);var r=$.lastIndexOf(h(t));-1===r&&(r=0);var o=n-r;o&&(R=!0,L(o))}(t)}))}}(o)}}var A=P(),_=y(A);A!==_&&C(_);var M=E(),$=[h(M)];function L(t){e.go(t)}var D=0;function B(t){1===(D+=t)&&1===t?window.addEventListener("hashchange",T):0===D&&window.removeEventListener("hashchange",T)}var N=!1;var U={length:e.length,action:"POP",location:M,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=x(window.location.href)),n+"#"+y(u+h(t))},push:function(t,e){var n=m(t,void 0,void 0,U.location);j.confirmTransitionTo(n,"PUSH",a,(function(t){if(t){var e=h(n),r=y(u+e);if(P()!==r){k=e,function(t){window.location.hash=t}(r);var o=$.lastIndexOf(h(U.location)),a=$.slice(0,o+1);a.push(e),$=a,S({action:"PUSH",location:n})}else S()}}))},replace:function(t,e){var n=m(t,void 0,void 0,U.location);j.confirmTransitionTo(n,"REPLACE",a,(function(t){if(t){var e=h(n),r=y(u+e);P()!==r&&(k=e,C(r));var o=$.indexOf(h(U.location));-1!==o&&($[o]=e),S({action:"REPLACE",location:n})}}))},go:L,goBack:function(){L(-1)},goForward:function(){L(1)},block:function(t){void 0===t&&(t=!1);var e=j.setPrompt(t);return N||(B(1),N=!0),function(){return N&&(N=!1,B(-1)),e()}},listen:function(t){var e=j.appendListener(t);return B(1),function(){B(-1),e()}}};return U}function S(t,e,n){return Math.min(Math.max(t,e),n)}function R(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,o=e.initialEntries,a=void 0===o?["/"]:o,i=e.initialIndex,c=void 0===i?0:i,u=e.keyLength,s=void 0===u?6:u,l=v();function f(t){Object(r.a)(w,t),w.length=w.entries.length,l.notifyListeners(w.location,w.action)}function p(){return Math.random().toString(36).substr(2,s)}var d=S(c,0,a.length-1),y=a.map((function(t){return m(t,void 0,"string"==typeof t?p():t.key||p())})),g=h;function b(t){var e=S(w.index+t,0,w.entries.length-1),r=w.entries[e];l.confirmTransitionTo(r,"POP",n,(function(t){t?f({action:"POP",location:r,index:e}):f()}))}var w={length:y.length,action:"POP",location:y[d],index:d,entries:y,createHref:g,push:function(t,e){var r=m(t,e,p(),w.location);l.confirmTransitionTo(r,"PUSH",n,(function(t){if(t){var e=w.index+1,n=w.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),f({action:"PUSH",location:r,index:e,entries:n})}}))},replace:function(t,e){var r=m(t,e,p(),w.location);l.confirmTransitionTo(r,"REPLACE",n,(function(t){t&&(w.entries[w.index]=r,f({action:"REPLACE",location:r}))}))},go:b,goBack:function(){b(-1)},goForward:function(){b(1)},canGo:function(t){var e=w.index+t;return e>=0&&e<w.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return w}},function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},function(t,e,n){t.exports=n(19)()},,function(t,e,n){"use strict";(function(t){var r=n(0),o=n.n(r),a=n(3),i=n(7),c=n.n(i),u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:{};function s(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var l=o.a.createContext||function(t,e){var n,o,i,l="__create-react-context-"+((u[i="__global_unique_id__"]=(u[i]||0)+1)+"__"),f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=s(e.props.value),e}Object(a.a)(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[l]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((a=r)===(i=o)?0!==a||1/a==1/i:a!=a&&i!=i)?n=0:(n="function"==typeof e?e(r,o):1073741823,0!==(n|=0)&&this.emitter.set(t.value,n))}var a,i},r.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[l]=c.a.object.isRequired,n);var p=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Object(a.a)(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},r.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},r.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},r.getValue=function(){return this.context[l]?this.context[l].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.Component);return p.contextTypes=((o={})[l]=c.a.object,o),{Provider:f,Consumer:p}};e.a=l}).call(this,n(21))},function(t,e,n){var r=n(22);t.exports=d,t.exports.parse=a,t.exports.compile=function(t,e){return c(a(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t,e){for(var n,r=[],a=0,i=0,c="",l=e&&e.delimiter||"/";null!=(n=o.exec(t));){var f=n[0],p=n[1],d=n.index;if(c+=t.slice(i,d),i=d+f.length,p)c+=p[1];else{var h=t[i],m=n[2],y=n[3],v=n[4],g=n[5],b=n[6],w=n[7];c&&(r.push(c),c="");var E=null!=m&&null!=h&&h!==m,O="+"===b||"*"===b,x="?"===b||"*"===b,P=n[2]||l,C=v||g;r.push({name:y||a++,prefix:m||"",delimiter:P,optional:x,repeat:O,partial:E,asterisk:!!w,pattern:C?s(C):w?".*":"[^"+u(P)+"]+?"})}}return i<t.length&&(c+=t.substr(i)),c&&r.push(c),r}function i(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",f(e)));return function(e,o){for(var a="",c=e||{},u=(o||{}).pretty?i:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=u(p[d]),!n[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===d?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');a+=l.prefix+f}}else a+=l}return a}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function f(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)i+=u(s);else{var p=u(s.prefix),d="(?:"+s.pattern+")";e.push(s),s.repeat&&(d+="(?:"+p+d+")*"),i+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=u(n.delimiter||"/"),m=i.slice(-h.length)===h;return o||(i=(m?i.slice(0,-h.length):i)+"(?:"+h+"(?=$))?"),i+=a?"$":o&&m?"":"(?="+h+"|$)",l(new RegExp("^"+i,f(n)),e)}function d(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(d(t[o],e,n).source);return l(new RegExp("(?:"+r.join("|")+")",f(n)),e)}(t,e,n):function(t,e,n){return p(a(t,n),e,n)}(t,e,n)}},function(t,e){t.exports=n},function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return v}));var r=n(1),o=n(3),a=n(0),i=n.n(a),c=n(5),u=(n(7),n(2)),s=n(6),l=n(4),f=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=Object(c.a)(e.props),e}return Object(o.a)(e,t),e.prototype.render=function(){return i.a.createElement(r.b,{history:this.history,children:this.props.children})},e}(i.a.Component);i.a.Component;var p=function(t,e){return"function"==typeof t?t(e):t},d=function(t,e){return"string"==typeof t?Object(c.c)(t,null,null,e):t},h=function(t){return t},m=i.a.forwardRef;void 0===m&&(m=h);var y=m((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,a=Object(s.a)(t,["innerRef","navigate","onClick"]),c=a.target,l=Object(u.a)({},a,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=h!==m&&e||n,i.a.createElement("a",l)}));var v=m((function(t,e){var n=t.component,o=void 0===n?y:n,a=t.replace,c=t.to,f=t.innerRef,v=Object(s.a)(t,["component","replace","to","innerRef"]);return i.a.createElement(r.d.Consumer,null,(function(t){t||Object(l.a)(!1);var n=t.history,r=d(p(c,t.location),t.location),s=r?n.createHref(r):"",y=Object(u.a)({},v,{href:s,navigate:function(){var e=p(c,t.location);(a?n.replace:n.push)(e)}});return h!==m?y.ref=e||f:y.innerRef=f,i.a.createElement(o,y)}))})),g=function(t){return t},b=i.a.forwardRef;void 0===b&&(b=g);b((function(t,e){var n=t["aria-current"],o=void 0===n?"page":n,a=t.activeClassName,c=void 0===a?"active":a,f=t.activeStyle,h=t.className,m=t.exact,y=t.isActive,w=t.location,E=t.sensitive,O=t.strict,x=t.style,P=t.to,C=t.innerRef,j=Object(s.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(r.d.Consumer,null,(function(t){t||Object(l.a)(!1);var n=w||t.location,a=d(p(P,n),n),s=a.pathname,S=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=S?Object(r.e)(n.pathname,{path:S,exact:m,sensitive:E,strict:O}):null,k=!!(y?y(R,n):R),T=k?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(h,c):h,A=k?Object(u.a)({},x,{},f):x,_=Object(u.a)({"aria-current":k&&o||null,className:T,style:A,to:a},j);return g!==b?_.ref=e||C:_.innerRef=C,i.a.createElement(v,_)}))}))},function(t,e,n){"use strict";t.exports=n(23)},function(t,e){t.exports=r},function(t,e,n){!function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}t.SingleSpaContext=null;var o={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function a(t,e){return t.rootComponent?Promise.resolve():t.loadRootComponent(e).then((function(e){t.rootComponent=e}))}function i(t,e){return new Promise((function(n,r){t.suppressComponentDidCatchWarning||!function(t){if(!(t&&"string"==typeof t.version&&t.version.indexOf(".")>=0))return!1;var e=t.version.slice(0,t.version.indexOf("."));try{return Number(e)>=16}catch(t){return!1}}(t.React)||t.errorBoundary||(t.rootComponent.prototype?t.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(e.name||e.appName||e.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(e.name||e.appName||e.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=function(t,e){return(e=e&&e.customProps?e.customProps:e).domElement?function(){return e.domElement}:e.domElementGetter?e.domElementGetter:t.domElementGetter?t.domElementGetter:function(t){var e=t.appName||t.name;if(!e)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(e);return function(){var t=document.getElementById(n);return t||((t=document.createElement("div")).id=n,document.body.appendChild(t)),t}}(e)}(t,e);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(e.appName||e.name,"' is not a function"));var a=l(t,e),i=function(t,e){var n=t(e);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(e.appName||e.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(o,e);s({elementToRender:a,domElement:i,whenFinished:function(){n(this)},opts:t}),t.domElements[e.name]=i}))}function c(t,e){return Promise.resolve().then((function(){t.ReactDOM.unmountComponentAtNode(t.domElements[e.name]),delete t.domElements[e.name]}))}function u(t,e){return new Promise((function(n,r){s({elementToRender:l(t,e),domElement:t.domElements[e.name],whenFinished:function(){n(this)},opts:t})}))}function s(t){var e=t.opts,n=t.elementToRender,r=t.domElement,o=t.whenFinished;return"createRoot"===e.renderType?e.ReactDOM.createRoot(r).render(n,o):"createBlockingRoot"===e.renderType?e.ReactDOM.createBlockingRoot(r).render(n,o):"hydrate"===e.renderType?e.ReactDOM.hydrate(n,r,o):e.ReactDOM.render(n,r,o)}function l(e,n){var r=e.React.createElement(e.rootComponent,n),o=t.SingleSpaContext?e.React.createElement(t.SingleSpaContext.Provider,{value:n},r):r;return e.errorBoundary&&(e.errorBoundaryClass=e.errorBoundaryClass||function(t){function e(n){t.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},e.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return e.prototype=Object.create(t.React.Component.prototype),e.prototype.render=function(){return this.state.caughtError?t.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},e.prototype.componentDidCatch=function(t,e){this.setState({caughtError:t,caughtErrorInfo:e})},e}(e),o=e.React.createElement(e.errorBoundaryClass,n,o)),o}t.default=function(s){if("object"!==e(s))throw new Error("single-spa-react requires a configuration object");var l=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},o,{},s);if(!l.React)throw new Error("single-spa-react must be passed opts.React");if(!l.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!l.rootComponent&&!l.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(l.errorBoundary&&"function"!=typeof l.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!t.SingleSpaContext&&l.React.createContext&&(t.SingleSpaContext=l.React.createContext());var f={bootstrap:a.bind(null,l),mount:i.bind(null,l),unmount:c.bind(null,l)};return l.parcelCanUpdate&&(f.update=u.bind(null,l)),f},Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){!function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(e),o={error:null},a=function(t){var e,n;function a(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).state=o,e.updatedWithError=!1,e.resetErrorBoundary=function(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];null==e.props.onReset||(t=e.props).onReset.apply(t,r),e.reset()},e}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.getDerivedStateFromError=function(t){return{error:t}};var i=a.prototype;return i.reset=function(){this.updatedWithError=!1,this.setState(o)},i.componentDidCatch=function(t,e){var n,r;null==(n=(r=this.props).onError)||n.call(r,t,e)},i.componentDidUpdate=function(t){var e,n,r,o,a=this.state.error,i=this.props.resetKeys;null===a||this.updatedWithError?null!==a&&(void 0===(r=t.resetKeys)&&(r=[]),void 0===(o=i)&&(o=[]),r.length!==o.length||r.some((function(t,e){return!Object.is(t,o[e])})))&&(null==(e=(n=this.props).onResetKeysChange)||e.call(n,t.resetKeys,i),this.reset()):this.updatedWithError=!0},i.render=function(){var t=this.state.error,e=this.props,n=e.fallbackRender,o=e.FallbackComponent,a=e.fallback;if(null!==t){var i={error:t,resetErrorBoundary:this.resetErrorBoundary};if(r.default.isValidElement(a))return a;if("function"==typeof n)return n(i);if(o)return r.default.createElement(o,i);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},a}(r.default.Component);t.ErrorBoundary=a,t.useErrorHandler=function(t){var e=r.default.useState(null),n=e[0],o=e[1];if(t)throw t;if(n)throw n;return o},t.withErrorBoundary=function(t,e){function n(n){return r.default.createElement(a,e,r.default.createElement(t,n))}var o=t.displayName||t.name||"Unknown";return n.displayName="withErrorBoundary("+o+")",n},Object.defineProperty(t,"__esModule",{value:!0})}(e,n(0))},function(t,e,n){"use strict";var r=n(13),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?i:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(h){var o=d(n);o&&o!==h&&t(e,o,r)}var i=l(n);f&&(i=i.concat(f(n)));for(var c=u(e),m=u(n),y=0;y<i.length;++y){var v=i[y];if(!(a[v]||r&&r[v]||m&&m[v]||c&&c[v])){var g=p(n,v);try{s(e,v,g)}catch(t){}}}}return e}},function(t,e,n){function r(t,e){const n=document.createElement("a");n.href=t;const r="/"===n.pathname[0]?n.pathname:"/"+n.pathname;let o=0,a=r.length;for(;o!==e&&a>=0;){"/"===r[--a]&&o++}if(o!==e)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+e+") is greater than the number of directories ("+o+") in the URL path "+t);const i=r.slice(0,a+1);return n.protocol+"//"+n.host+i}e.setPublicPath=function(t,e){if(e||(e=1),"string"!=typeof t||0===t.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof e||e<=0||!o(e))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let a;try{if(a=window.System.resolve(t),!a)throw Error()}catch(e){throw Error("systemjs-webpack-interop: There is no such module '"+t+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=r(a,e)},e.resolveDirectory=r;const o=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}},function(t,e,n){"use strict";var r=n(20);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function O(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case f:case p:case i:case u:case c:case h:return t;default:switch(t=t&&t.$$typeof){case l:case d:case v:case y:case s:return t;default:return e}}case a:return e}}}function x(t){return O(t)===p}e.AsyncMode=f,e.ConcurrentMode=p,e.ContextConsumer=l,e.ContextProvider=s,e.Element=o,e.ForwardRef=d,e.Fragment=i,e.Lazy=v,e.Memo=y,e.Portal=a,e.Profiler=u,e.StrictMode=c,e.Suspense=h,e.isAsyncMode=function(t){return x(t)||O(t)===f},e.isConcurrentMode=x,e.isContextConsumer=function(t){return O(t)===l},e.isContextProvider=function(t){return O(t)===s},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return O(t)===d},e.isFragment=function(t){return O(t)===i},e.isLazy=function(t){return O(t)===v},e.isMemo=function(t){return O(t)===y},e.isPortal=function(t){return O(t)===a},e.isProfiler=function(t){return O(t)===u},e.isStrictMode=function(t){return O(t)===c},e.isSuspense=function(t){return O(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===p||t===u||t===c||t===h||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===v||t.$$typeof===y||t.$$typeof===s||t.$$typeof===l||t.$$typeof===d||t.$$typeof===b||t.$$typeof===w||t.$$typeof===E||t.$$typeof===g)},e.typeOf=O},function(t,e,n){"use strict";n.r(e),n.d(e,"bootstrap",(function(){return g})),n.d(e,"mount",(function(){return b})),n.d(e,"unmount",(function(){return w}));var r=n(0),o=n.n(r),a=n(14),i=n.n(a),c=n(15),u=n.n(c),s=n(16),l=n(12),f=n(1),p=n(11),d=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,25))})),h=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,26))}));var m=n(18);Object(m.setPublicPath)("@ericgibby/single-spa-react-app");var y={React:o.a,ReactDOM:i.a,rootComponent:function(t){var e=t.name;return o.a.createElement(s.ErrorBoundary,{FallbackComponent:p.ErrorFallback},o.a.createElement("header",null,o.a.createElement("h1",null,e)),o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(l.a,{basename:"single-spa-demo"},o.a.createElement(f.c,null,o.a.createElement(f.a,{path:"/one"},o.a.createElement(d,{name:e})),o.a.createElement(f.a,{path:"/two"},o.a.createElement(h,{name:e}))))))},suppressComponentDidCatchWarning:!0},v=u()(y),g=v.bootstrap,b=v.mount,w=v.unmount}]))}}}));
//# sourceMappingURL=ericgibby-single-spa-react-app.js.map