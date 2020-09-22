System.register(["react","react-dom","single-spa"],(function(e){var t,n,r;return{setters:[function(e){t=e},function(e){n=e},function(e){r=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},function(e,t,n){e.exports=n(13)()},,function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),a=n(1),i=n(2),c=n.n(i),u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:{};function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var l=o.a.createContext||function(e,t){var n,o,i,l="__create-react-context-"+((u[i="__global_unique_id__"]=(u[i]||0)+1)+"__"),p=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=s(t.props.value),t}Object(a.a)(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((a=r)===(i=o)?0!==a||1/a==1/i:a!=a&&i!=i)?n=0:(n="function"==typeof t?t(r,o):1073741823,0!==(n|=0)&&this.emitter.set(e.value,n))}var a,i},r.render=function(){return this.props.children},n}(r.Component);p.childContextTypes=((n={})[l]=c.a.object.isRequired,n);var f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}Object(a.a)(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},r.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},r.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},r.getValue=function(){return this.context[l]?this.context[l].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return f.contextTypes=((o={})[l]=c.a.object,o),{Provider:p,Consumer:f}};t.a=l}).call(this,n(15))},function(e,t,n){var r=n(16);e.exports=h,e.exports.parse=a,e.exports.compile=function(e,t){return c(a(e,t),t)},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var n,r=[],a=0,i=0,c="",l=t&&t.delimiter||"/";null!=(n=o.exec(e));){var p=n[0],f=n[1],h=n.index;if(c+=e.slice(i,h),i=h+p.length,f)c+=f[1];else{var m=e[i],d=n[2],y=n[3],v=n[4],g=n[5],b=n[6],w=n[7];c&&(r.push(c),c="");var E=null!=d&&null!=m&&m!==d,O="+"===b||"*"===b,x="?"===b||"*"===b,C=n[2]||l,P=v||g;r.push({name:y||a++,prefix:d||"",delimiter:C,optional:x,repeat:O,partial:E,asterisk:!!w,pattern:P?s(P):w?".*":"[^"+u(C)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",p(t)));return function(t,o){for(var a="",c=t||{},u=(o||{}).pretty?i:encodeURIComponent,s=0;s<e.length;s++){var l=e[s];if("string"!=typeof l){var p,f=c[l.name];if(null==f){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!n[s].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===h?l.prefix:l.delimiter)+p}}else{if(p=l.asterisk?encodeURI(f).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):u(f),!n[s].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+p+'"');a+=l.prefix+p}}else a+=l}return a}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e&&e.sensitive?"":"i"}function f(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=u(s);else{var f=u(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+f+h+")*"),i+=h=s.optional?s.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var m=u(n.delimiter||"/"),d=i.slice(-m.length)===m;return o||(i=(d?i.slice(0,-m.length):i)+"(?:"+m+"(?=$))?"),i+=a?"$":o&&d?"":"(?="+m+"|$)",l(new RegExp("^"+i,p(n)),t)}function h(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):function(e,t,n){return f(a(e,n),t,n)}(e,t,n)}},function(e,t,n){"use strict";e.exports=n(17)},function(e,t,n){function r(e,t){const n=document.createElement("a");n.href=e;const r="/"===n.pathname[0]?n.pathname:"/"+n.pathname;let o=0,a=r.length;for(;o!==t&&a>=0;){"/"===r[--a]&&o++}if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);const i=r.slice(0,a+1);return n.protocol+"//"+n.host+i}t.setPublicPath=function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||!o(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let a;try{if(a=window.System.resolve(e),!a)throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=r(a,t)},t.resolveDirectory=r;const o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},function(e,t){e.exports=n},function(e,t,n){!function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.SingleSpaContext=null;var o={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function a(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function i(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=l(e,t),i=function(e,t){var n=e(t);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(o,t);s({elementToRender:a,domElement:i,whenFinished:function(){n(this)},opts:e}),e.domElements[t.name]=i}))}function c(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function u(e,t){return new Promise((function(n,r){s({elementToRender:l(e,t),domElement:e.domElements[t.name],whenFinished:function(){n(this)},opts:e})}))}function s(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(r).render(n,o):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(r).render(n,o):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,r,o):t.ReactDOM.render(n,r,o)}function l(t,n){var r=t.React.createElement(t.rootComponent,n),o=e.SingleSpaContext?t.React.createElement(e.SingleSpaContext.Provider,{value:n},r):r;return t.errorBoundary&&(t.errorBoundaryClass=t.errorBoundaryClass||function(e){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(t),o=t.React.createElement(t.errorBoundaryClass,n,o)),o}e.default=function(s){if("object"!==t(s))throw new Error("single-spa-react requires a configuration object");var l=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{},s);if(!l.React)throw new Error("single-spa-react must be passed opts.React");if(!l.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!l.rootComponent&&!l.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(l.errorBoundary&&"function"!=typeof l.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!e.SingleSpaContext&&l.React.createContext&&(e.SingleSpaContext=l.React.createContext());var p={bootstrap:a.bind(null,l),mount:i.bind(null,l),unmount:c.bind(null,l)};return l.parcelCanUpdate&&(p.update=u.bind(null,l)),p},Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t){e.exports=r},function(e,t,n){"use strict";var r=n(6),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var s=Object.defineProperty,l=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var o=h(n);o&&o!==m&&e(t,o,r)}var i=l(n);p&&(i=i.concat(p(n)));for(var c=u(t),d=u(n),y=0;y<i.length;++y){var v=i[y];if(!(a[v]||r&&r[v]||d&&d[v]||c&&c[v])){var g=f(n,v);try{s(t,v,g)}catch(e){}}}}return t}},function(e,t,n){!function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t),o={error:null},a=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state=o,t.updatedWithError=!1,t.resetErrorBoundary=function(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];null==t.props.onReset||(e=t.props).onReset.apply(e,r),t.reset()},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.getDerivedStateFromError=function(e){return{error:e}};var i=a.prototype;return i.reset=function(){this.updatedWithError=!1,this.setState(o)},i.componentDidCatch=function(e,t){var n,r;null==(n=(r=this.props).onError)||n.call(r,e,t)},i.componentDidUpdate=function(e){var t,n,r,o,a=this.state.error,i=this.props.resetKeys;null===a||this.updatedWithError?null!==a&&(void 0===(r=e.resetKeys)&&(r=[]),void 0===(o=i)&&(o=[]),r.length!==o.length||r.some((function(e,t){return!Object.is(e,o[t])})))&&(null==(t=(n=this.props).onResetKeysChange)||t.call(n,e.resetKeys,i),this.reset()):this.updatedWithError=!0},i.render=function(){var e=this.state.error,t=this.props,n=t.fallbackRender,o=t.FallbackComponent,a=t.fallback;if(null!==e){var i={error:e,resetErrorBoundary:this.resetErrorBoundary};if(r.default.isValidElement(a))return a;if("function"==typeof n)return n(i);if(o)return r.default.createElement(o,i);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},a}(r.default.Component);e.ErrorBoundary=a,e.useErrorHandler=function(e){var t=r.default.useState(null),n=t[0],o=t[1];if(e)throw e;if(n)throw n;return o},e.withErrorBoundary=function(e,t){function n(n){return r.default.createElement(a,t,r.default.createElement(e,n))}var o=e.displayName||e.name||"Unknown";return n.displayName="withErrorBoundary("+o+")",n},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(0))},function(e,t,n){"use strict";var r=n(14);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case f:case i:case u:case c:case m:return e;default:switch(e=e&&e.$$typeof){case l:case h:case v:case y:case s:return e;default:return t}}case a:return t}}}function x(e){return O(e)===f}t.AsyncMode=p,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=s,t.Element=o,t.ForwardRef=h,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=a,t.Profiler=u,t.StrictMode=c,t.Suspense=m,t.isAsyncMode=function(e){return x(e)||O(e)===p},t.isConcurrentMode=x,t.isContextConsumer=function(e){return O(e)===l},t.isContextProvider=function(e){return O(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===h},t.isFragment=function(e){return O(e)===i},t.isLazy=function(e){return O(e)===v},t.isMemo=function(e){return O(e)===y},t.isPortal=function(e){return O(e)===a},t.isProfiler=function(e){return O(e)===u},t.isStrictMode=function(e){return O(e)===c},t.isSuspense=function(e){return O(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===u||e===c||e===m||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===h||e.$$typeof===b||e.$$typeof===w||e.$$typeof===E||e.$$typeof===g)},t.typeOf=O},function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return Ee})),n.d(t,"mount",(function(){return Oe})),n.d(t,"unmount",(function(){return xe}));var r=n(7);Object(r.setPublicPath)("@ericgibby/single-spa-react-app-plus");var o=n(0),a=n.n(o),i=n(8),c=n.n(i),u=n(9),s=n.n(u),l=n(12),p=n(1);n(2);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){return"/"===e.charAt(0)}function m(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var d=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],a=e&&h(e),i=t&&h(t),c=a||i;if(e&&h(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var s=0,l=o.length;l>=0;l--){var p=o[l];"."===p?m(o,l):".."===p?(m(o,l),s++):s&&(m(o,l),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&h(o[0])||o.unshift("");var f=o.join("/");return n&&"/"!==f.substr(-1)&&(f+="/"),f};function y(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}var v=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every((function(t,r){return e(t,n[r])}));if("object"==typeof t||"object"==typeof n){var r=y(t),o=y(n);return r!==t||o!==n?e(r,o):Object.keys(Object.assign({},t,n)).every((function(r){return e(t[r],n[r])}))}return!1};var g=function(e,t){if(!e)throw new Error("Invariant failed")};function b(e){return"/"===e.charAt(0)?e:"/"+e}function w(e){return"/"===e.charAt(0)?e.substr(1):e}function E(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function O(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function x(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function C(e,t,n,r){var o;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=f({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=d(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function P(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var S=!("undefined"==typeof window||!window.document||!window.document.createElement);function R(e,t){t(window.confirm(e))}function j(){try{return window.history.state||{}}catch(e){return{}}}function k(e){void 0===e&&(e={}),S||g(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),a=e,i=a.forceRefresh,c=void 0!==i&&i,u=a.getUserConfirmation,s=void 0===u?R:u,l=a.keyLength,p=void 0===l?6:l,h=e.basename?O(b(e.basename)):"";function m(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return h&&(a=E(a,h)),C(a,r,n)}function d(){return Math.random().toString(36).substr(2,p)}var y=P();function v(e){f(N,e),N.length=n.length,y.notifyListeners(N.location,N.action)}function w(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||A(m(e.state))}function k(){A(m(j()))}var T=!1;function A(e){if(T)T=!1,v();else{y.confirmTransitionTo(e,"POP",s,(function(t){t?v({action:"POP",location:e}):function(e){var t=N.location,n=M.indexOf(t.key);-1===n&&(n=0);var r=M.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(T=!0,$(o))}(e)}))}}var _=m(j()),M=[_.key];function D(e){return h+x(e)}function $(e){n.go(e)}var U=0;function L(e){1===(U+=e)&&1===e?(window.addEventListener("popstate",w),o&&window.addEventListener("hashchange",k)):0===U&&(window.removeEventListener("popstate",w),o&&window.removeEventListener("hashchange",k))}var B=!1;var N={length:n.length,action:"POP",location:_,createHref:D,push:function(e,t){var o=C(e,t,d(),N.location);y.confirmTransitionTo(o,"PUSH",s,(function(e){if(e){var t=D(o),a=o.key,i=o.state;if(r)if(n.pushState({key:a,state:i},null,t),c)window.location.href=t;else{var u=M.indexOf(N.location.key),s=M.slice(0,u+1);s.push(o.key),M=s,v({action:"PUSH",location:o})}else window.location.href=t}}))},replace:function(e,t){var o=C(e,t,d(),N.location);y.confirmTransitionTo(o,"REPLACE",s,(function(e){if(e){var t=D(o),a=o.key,i=o.state;if(r)if(n.replaceState({key:a,state:i},null,t),c)window.location.replace(t);else{var u=M.indexOf(N.location.key);-1!==u&&(M[u]=o.key),v({action:"REPLACE",location:o})}else window.location.replace(t)}}))},go:$,goBack:function(){$(-1)},goForward:function(){$(1)},block:function(e){void 0===e&&(e=!1);var t=y.setPrompt(e);return B||(L(1),B=!0),function(){return B&&(B=!1,L(-1)),t()}},listen:function(e){var t=y.appendListener(e);return L(1),function(){L(-1),t()}}};return N}var T={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+w(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:w,decodePath:b},slash:{encodePath:b,decodePath:b}};function A(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function _(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function M(e){window.location.replace(A(window.location.href)+"#"+e)}function D(e){void 0===e&&{},S||g(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),r=n.getUserConfirmation,o=void 0===r?R:r,a=n.hashType,i=void 0===a?"slash":a,c=e.basename?O(b(e.basename)):"",u=T[i],s=u.encodePath,l=u.decodePath;function p(){var e=l(_());return c&&E(e,c),C(e)}var h=P();function m(e){f(N,e),N.length=t.length,h.notifyListeners(N.location,N.action)}var d=!1,y=null;function v(){var e,t,n=_(),r=s(n);if(n!==r)M(r);else{var a=p(),i=N.location;if(!d&&(a,i.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(y===x(a))return;null,function(e){if(d)!1,m();else{h.confirmTransitionTo(e,"POP",o,(function(t){t?m({action:"POP",location:e}):function(e){var t=N.location,n=D.lastIndexOf(x(t));-1===n&&0;var r=D.lastIndexOf(x(e));-1===r&&0;var o=n-r;o&&(!0,$(o))}(e)}))}}(a)}}var w=_(),j=s(w);w!==j&&M(j);var k=p(),D=[x(k)];function $(e){t.go(e)}var U=0;function L(e){1===(U+=e)&&1===e?window.addEventListener("hashchange",v):0===U&&window.removeEventListener("hashchange",v)}var B=!1;var N={length:t.length,action:"POP",location:k,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&A(window.location.href),n+"#"+s(c+x(e))},push:function(e,t){var n=C(e,void 0,void 0,N.location);h.confirmTransitionTo(n,"PUSH",o,(function(e){if(e){var t=x(n),r=s(c+t);if(_()!==r){t,function(e){window.location.hash=e}(r);var o=D.lastIndexOf(x(N.location)),a=D.slice(0,o+1);a.push(t),a,m({action:"PUSH",location:n})}else m()}}))},replace:function(e,t){var n=C(e,void 0,void 0,N.location);h.confirmTransitionTo(n,"REPLACE",o,(function(e){if(e){var t=x(n),r=s(c+t);_()!==r&&(t,M(r));var o=D.indexOf(x(N.location));-1!==o&&(D[o]=t),m({action:"REPLACE",location:n})}}))},go:$,goBack:function(){$(-1)},goForward:function(){$(1)},block:function(e){void 0===e&&!1;var t=h.setPrompt(e);return B||(L(1),!0),function(){return B&&(!1,L(-1)),t()}},listen:function(e){var t=h.appendListener(e);return L(1),function(){L(-1),t()}}};return N}function $(e,t,n){return Math.min(Math.max(e,t),n)}function U(e){void 0===e&&{};var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,a=t.initialIndex,i=void 0===a?0:a,c=t.keyLength,u=void 0===c?6:c,s=P();function l(e){f(v,e),v.length=v.entries.length,s.notifyListeners(v.location,v.action)}function p(){return Math.random().toString(36).substr(2,u)}var h=$(i,0,o.length-1),m=o.map((function(e){return C(e,void 0,"string"==typeof e?p():e.key||p())})),d=x;function y(e){var t=$(v.index+e,0,v.entries.length-1),r=v.entries[t];s.confirmTransitionTo(r,"POP",n,(function(e){e?l({action:"POP",location:r,index:t}):l()}))}var v={length:m.length,action:"POP",location:m[h],index:h,entries:m,createHref:d,push:function(e,t){var r=C(e,t,p(),v.location);s.confirmTransitionTo(r,"PUSH",n,(function(e){if(e){var t=v.index+1,n=v.entries.slice(0);n.length>t?n.splice(t,n.length-t,r):n.push(r),l({action:"PUSH",location:r,index:t,entries:n})}}))},replace:function(e,t){var r=C(e,t,p(),v.location);s.confirmTransitionTo(r,"REPLACE",n,(function(e){e&&(v.entries[v.index]=r,l({action:"REPLACE",location:r}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(e){var t=v.index+e;return t>=0&&t<v.entries.length},block:function(e){return void 0===e&&!1,s.setPrompt(e)},listen:function(e){return s.appendListener(e)}};return v}var L=n(4),B=n(5),N=n.n(B);n(6);function F(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(11);var I=function(e){var t=Object(L.a)();return t.displayName=e,t}("Router-History"),G=function(e){var t=Object(L.a)();return t.displayName=e,t}("Router"),W=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}Object(p.a)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return a.a.createElement(G.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a.a.createElement(I.Provider,{children:this.props.children||null,value:this.props.history}))},t}(a.a.Component);a.a.Component;var H=function(e){function t(){return e.apply(this,arguments)||this}Object(p.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},t}(a.a.Component);var K={},q=0;function V(e,t){return void 0===e&&(e="/"),void 0===t&&(t={}),"/"===e?e:function(e){if(K[e])return K[e];var t=N.a.compile(e);return q<1e4&&(K[e]=t,q++),t}(e)(t,{pretty:!0})}function z(e){var t=e.computedMatch,n=e.to,r=e.push,o=void 0!==r&&r;return a.a.createElement(G.Consumer,null,(function(e){e||g(!1);var r=e.history,i=e.staticContext,c=o?r.push:r.replace,u=C(t?"string"==typeof n?V(n,t.params):f({},n,{pathname:V(n.pathname,t.params)}):n);return i?(c(u),null):a.a.createElement(H,{onMount:function(){c(u)},onUpdate:function(e,t){var n,r,o=C(t.to);n=o,r=f({},u,{key:o.key}),n.pathname===r.pathname&&n.search===r.search&&n.hash===r.hash&&n.key===r.key&&v(n.state,r.state)||c(u)},to:n})}))}var J={},Y=0;function Q(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,c=void 0!==i&&i,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=J[n]||(J[n]={});if(r[e])return r[e];var o=[],a={regexp:N()(e,o,t),keys:o};return Y<1e4&&(r[e]=a,Y++),a}(n,{end:a,strict:c,sensitive:s}),o=r.regexp,i=r.keys,u=o.exec(e);if(!u)return null;var l=u[0],p=u.slice(1),f=e===l;return a&&!f?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:f,params:i.reduce((function(e,t,n){return e[t.name]=p[n],e}),{})}}),null)}var X=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.render=function(){var e=this;return a.a.createElement(G.Consumer,null,(function(t){t||g(!1);var n=e.props.location||t.location,r=f({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?Q(n.pathname,e.props):t.match}),o=e.props,i=o.children,c=o.component,u=o.render;return Array.isArray(i)&&0===i.length&&(i=null),a.a.createElement(G.Provider,{value:r},r.match?i?"function"==typeof i?i(r):i:c?a.a.createElement(c,r):u?u(r):null:"function"==typeof i?i(r):null)}))},t}(a.a.Component);function Z(e){return"/"===e.charAt(0)?e:"/"+e}function ee(e,t){if(!e)return t;var n=Z(e);return 0!==t.pathname.indexOf(n)?t:f({},t,{pathname:t.pathname.substr(n.length)})}function te(e){return"string"==typeof e?e:x(e)}function ne(e){return function(){g(!1)}}function re(){}a.a.Component;var oe=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.render=function(){var e=this;return a.a.createElement(G.Consumer,null,(function(t){t||g(!1);var n,r,o=e.props.location||t.location;return a.a.Children.forEach(e.props.children,(function(e){if(null==r&&a.a.isValidElement(e)){n=e;var i=e.props.path||e.props.from;r=i?Q(o.pathname,f({},e.props,{path:i})):t.match}})),r?a.a.cloneElement(n,{location:o,computedMatch:r}):null}))},t}(a.a.Component);a.a.useContext;var ae=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=k(t.props),t}return Object(p.a)(t,e),t.prototype.render=function(){return a.a.createElement(W,{history:this.history,children:this.props.children})},t}(a.a.Component);a.a.Component;var ie=function(e,t){return"function"==typeof e?e(t):e},ce=function(e,t){return"string"==typeof e?C(e,null,null,t):e},ue=function(e){return e},se=a.a.forwardRef;void 0===se&&(se=ue);var le=se((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=F(e,["innerRef","navigate","onClick"]),c=i.target,u=f({},i,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=ue!==se&&t||n,a.a.createElement("a",u)}));var pe=se((function(e,t){var n=e.component,r=void 0===n?le:n,o=e.replace,i=e.to,c=e.innerRef,u=F(e,["component","replace","to","innerRef"]);return a.a.createElement(G.Consumer,null,(function(e){e||g(!1);var n=e.history,s=ce(ie(i,e.location),e.location),l=s?n.createHref(s):"",p=f({},u,{href:l,navigate:function(){var t=ie(i,e.location);(o?n.replace:n.push)(t)}});return ue!==se?p.ref=t||c:p.innerRef=c,a.a.createElement(r,p)}))})),fe=function(e){return e},he=a.a.forwardRef;void 0===he&&(he=fe);he((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,o=e.activeClassName,i=void 0===o?"active":o,c=e.activeStyle,u=e.className,s=e.exact,l=e.isActive,p=e.location,h=e.sensitive,m=e.strict,d=e.style,y=e.to,v=e.innerRef,b=F(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.a.createElement(G.Consumer,null,(function(e){e||g(!1);var n=p||e.location,o=ce(ie(y,n),n),w=o.pathname,E=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=E?Q(n.pathname,{path:E,exact:s,sensitive:h,strict:m}):null,x=!!(l?l(O,n):O),C=x?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(u,i):u,P=x?f({},d,{},c):d,S=f({"aria-current":x&&r||null,className:C,style:P,to:o},b);return fe!==he?S.ref=t||v:S.innerRef=v,a.a.createElement(pe,S)}))}));function me(e){var t=e.error;return a.a.createElement("div",null,a.a.createElement("p",null,"Something when wrong:"),a.a.createElement("pre",{style:{color:"red"}},t.message))}var de=n(10);function ye(e){var t=e.children,n=e.to,r=function(e,t){if(null==e)return{};var n,r,o=F(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children","to"]);return a.a.createElement("a",f({},r,{href:n,onClick:function(e){e.preventDefault(),Object(de.navigateToUrl)(n)}}),t)}function ve(e){var t=e.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Four"),t&&a.a.createElement("h3",null,t),a.a.createElement("p",null,"Intelligentsia health goth lyft woke. Tumblr mixtape celiac hot chicken hammock. Squid before they sold out meditation man braid distillery williamsburg vice messenger bag sustainable deep v. Glossier enamel pin vinyl photo booth. Bicycle rights dreamcatcher sustainable kale chips readymade. Keffiyeh franzen tumblr, small batch cray thundercats four loko asymmetrical waistcoat poutine taxidermy shaman gluten-free irony adaptogen."),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(ye,{to:"/one"},"Go to One")),a.a.createElement("li",null,a.a.createElement(ye,{to:"/two"},"Go to Two")),a.a.createElement("li",null,a.a.createElement(pe,{to:"/three"},"Go to Three"))))}function ge(e){var t=e.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Three"),t&&a.a.createElement("h3",null,t),a.a.createElement("p",null,"Normcore chartreuse mumblecore, slow-carb banjo vice hot chicken cold-pressed raw denim gastropub 90's swag jianbing. Raclette twee austin taiyaki, seitan tbh whatever. Yr tbh wolf, health goth beard chia flannel. Stumptown keffiyeh single-origin coffee locavore mlkshk chia fingerstache. Four loko twee distillery ramps tofu, glossier humblebrag hella. Pug lyft heirloom, gochujang pop-up vexillologist austin seitan cronut cold-pressed bitters echo park post-ironic la croix mumblecore."),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(ye,{to:"/one"},"Go to One")),a.a.createElement("li",null,a.a.createElement(ye,{to:"/two"},"Go to Two")),a.a.createElement("li",null,a.a.createElement(pe,{to:"/four"},"Go to Four"))))}var be={React:a.a,ReactDOM:c.a,rootComponent:function(e){var t=e.name;return a.a.createElement(l.ErrorBoundary,{FallbackComponent:me},a.a.createElement("header",null,a.a.createElement("h1",null,t)),a.a.createElement(ae,{basename:"plus"},a.a.createElement(oe,null,a.a.createElement(X,{path:"/three"},a.a.createElement(ge,{name:t})),a.a.createElement(X,{path:"/four"},a.a.createElement(ve,{name:t})),a.a.createElement(z,{path:"*",to:"/three"}))))},suppressComponentDidCatchWarning:!0},we=s()(be),Ee=we.bootstrap,Oe=we.mount,xe=we.unmount}]))}}}));
//# sourceMappingURL=ericgibby-single-spa-react-app-plus.js.map