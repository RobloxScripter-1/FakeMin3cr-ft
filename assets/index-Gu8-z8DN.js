(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var dd={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function ey(){if(Yg)return Bo;Yg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=t,Bo.jsx=i,Bo.jsxs=i,Bo}var Zg;function ty(){return Zg||(Zg=1,dd.exports=ey()),dd.exports}var Y=ty(),hd={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function ny(){if(Kg)return _t;Kg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function b(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,y={};function v(P,J,Te){this.props=P,this.context=J,this.refs=y,this.updater=Te||T}v.prototype.isReactComponent={},v.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=v.prototype;function L(P,J,Te){this.props=P,this.context=J,this.refs=y,this.updater=Te||T}var N=L.prototype=new w;N.constructor=L,D(N,v.prototype),N.isPureReactComponent=!0;var k=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function B(P,J,Te){var Ne=Te.ref;return{$$typeof:s,type:P,key:J,ref:Ne!==void 0?Ne:null,props:Te}}function K(P,J){return B(P.type,J,P.props)}function F(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function j(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Te){return J[Te]})}var ce=/\/+/g;function pe(P,J){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):J.toString(36)}function q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(U,U):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,J,Te,Ne,Oe){var le=typeof P;(le==="undefined"||le==="boolean")&&(P=null);var Ae=!1;if(P===null)Ae=!0;else switch(le){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(P.$$typeof){case s:case t:Ae=!0;break;case S:return Ae=P._init,O(Ae(P._payload),J,Te,Ne,Oe)}}if(Ae)return Oe=Oe(P),Ae=Ne===""?"."+pe(P,0):Ne,k(Oe)?(Te="",Ae!=null&&(Te=Ae.replace(ce,"$&/")+"/"),O(Oe,J,Te,"",function(ut){return ut})):Oe!=null&&(F(Oe)&&(Oe=K(Oe,Te+(Oe.key==null||P&&P.key===Oe.key?"":(""+Oe.key).replace(ce,"$&/")+"/")+Ae)),J.push(Oe)),1;Ae=0;var De=Ne===""?".":Ne+":";if(k(P))for(var qe=0;qe<P.length;qe++)Ne=P[qe],le=De+pe(Ne,qe),Ae+=O(Ne,J,Te,le,Oe);else if(qe=b(P),typeof qe=="function")for(P=qe.call(P),qe=0;!(Ne=P.next()).done;)Ne=Ne.value,le=De+pe(Ne,qe++),Ae+=O(Ne,J,Te,le,Oe);else if(le==="object"){if(typeof P.then=="function")return O(q(P),J,Te,Ne,Oe);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function H(P,J,Te){if(P==null)return P;var Ne=[],Oe=0;return O(P,Ne,"","",function(le){return J.call(Te,le,Oe++)}),Ne}function ee(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(Te){(P._status===0||P._status===-1)&&(P._status=1,P._result=Te)},function(Te){(P._status===0||P._status===-1)&&(P._status=2,P._result=Te)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var ve=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Ee={map:H,forEach:function(P,J,Te){H(P,function(){J.apply(this,arguments)},Te)},count:function(P){var J=0;return H(P,function(){J++}),J},toArray:function(P){return H(P,function(J){return J})||[]},only:function(P){if(!F(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return _t.Activity=x,_t.Children=Ee,_t.Component=v,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=L,_t.StrictMode=r,_t.Suspense=m,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,_t.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},_t.cache=function(P){return function(){return P.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(P,J,Te){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ne=D({},P.props),Oe=P.key;if(J!=null)for(le in J.key!==void 0&&(Oe=""+J.key),J)!E.call(J,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&J.ref===void 0||(Ne[le]=J[le]);var le=arguments.length-2;if(le===1)Ne.children=Te;else if(1<le){for(var Ae=Array(le),De=0;De<le;De++)Ae[De]=arguments[De+2];Ne.children=Ae}return B(P.type,Oe,Ne)},_t.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},_t.createElement=function(P,J,Te){var Ne,Oe={},le=null;if(J!=null)for(Ne in J.key!==void 0&&(le=""+J.key),J)E.call(J,Ne)&&Ne!=="key"&&Ne!=="__self"&&Ne!=="__source"&&(Oe[Ne]=J[Ne]);var Ae=arguments.length-2;if(Ae===1)Oe.children=Te;else if(1<Ae){for(var De=Array(Ae),qe=0;qe<Ae;qe++)De[qe]=arguments[qe+2];Oe.children=De}if(P&&P.defaultProps)for(Ne in Ae=P.defaultProps,Ae)Oe[Ne]===void 0&&(Oe[Ne]=Ae[Ne]);return B(P,le,Oe)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(P){return{$$typeof:p,render:P}},_t.isValidElement=F,_t.lazy=function(P){return{$$typeof:S,_payload:{_status:-1,_result:P},_init:ee}},_t.memo=function(P,J){return{$$typeof:h,type:P,compare:J===void 0?null:J}},_t.startTransition=function(P){var J=I.T,Te={};I.T=Te;try{var Ne=P(),Oe=I.S;Oe!==null&&Oe(Te,Ne),typeof Ne=="object"&&Ne!==null&&typeof Ne.then=="function"&&Ne.then(U,ve)}catch(le){ve(le)}finally{J!==null&&Te.types!==null&&(J.types=Te.types),I.T=J}},_t.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},_t.use=function(P){return I.H.use(P)},_t.useActionState=function(P,J,Te){return I.H.useActionState(P,J,Te)},_t.useCallback=function(P,J){return I.H.useCallback(P,J)},_t.useContext=function(P){return I.H.useContext(P)},_t.useDebugValue=function(){},_t.useDeferredValue=function(P,J){return I.H.useDeferredValue(P,J)},_t.useEffect=function(P,J){return I.H.useEffect(P,J)},_t.useEffectEvent=function(P){return I.H.useEffectEvent(P)},_t.useId=function(){return I.H.useId()},_t.useImperativeHandle=function(P,J,Te){return I.H.useImperativeHandle(P,J,Te)},_t.useInsertionEffect=function(P,J){return I.H.useInsertionEffect(P,J)},_t.useLayoutEffect=function(P,J){return I.H.useLayoutEffect(P,J)},_t.useMemo=function(P,J){return I.H.useMemo(P,J)},_t.useOptimistic=function(P,J){return I.H.useOptimistic(P,J)},_t.useReducer=function(P,J,Te){return I.H.useReducer(P,J,Te)},_t.useRef=function(P){return I.H.useRef(P)},_t.useState=function(P){return I.H.useState(P)},_t.useSyncExternalStore=function(P,J,Te){return I.H.useSyncExternalStore(P,J,Te)},_t.useTransition=function(){return I.H.useTransition()},_t.version="19.2.7",_t}var Qg;function Zh(){return Qg||(Qg=1,hd.exports=ny()),hd.exports}var ct=Zh(),pd={exports:{}},Io={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function iy(){return Jg||(Jg=1,(function(s){function t(O,H){var ee=O.length;O.push(H);e:for(;0<ee;){var ve=ee-1>>>1,Ee=O[ve];if(0<l(Ee,H))O[ve]=H,O[ee]=Ee,ee=ve;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var H=O[0],ee=O.pop();if(ee!==H){O[0]=ee;e:for(var ve=0,Ee=O.length,P=Ee>>>1;ve<P;){var J=2*(ve+1)-1,Te=O[J],Ne=J+1,Oe=O[Ne];if(0>l(Te,ee))Ne<Ee&&0>l(Oe,Te)?(O[ve]=Oe,O[Ne]=ee,ve=Ne):(O[ve]=Te,O[J]=ee,ve=J);else if(Ne<Ee&&0>l(Oe,ee))O[ve]=Oe,O[Ne]=ee,ve=Ne;else break e}}return H}function l(O,H){var ee=O.sortIndex-H.sortIndex;return ee!==0?ee:O.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,x=null,g=3,b=!1,T=!1,D=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var H=i(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=O)r(h),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(h)}}function k(O){if(D=!1,N(O),!T)if(i(m)!==null)T=!0,U||(U=!0,j());else{var H=i(h);H!==null&&q(k,H.startTime-O)}}var U=!1,I=-1,E=5,B=-1;function K(){return y?!0:!(s.unstable_now()-B<E)}function F(){if(y=!1,U){var O=s.unstable_now();B=O;var H=!0;try{e:{T=!1,D&&(D=!1,w(I),I=-1),b=!0;var ee=g;try{t:{for(N(O),x=i(m);x!==null&&!(x.expirationTime>O&&K());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,g=x.priorityLevel;var Ee=ve(x.expirationTime<=O);if(O=s.unstable_now(),typeof Ee=="function"){x.callback=Ee,N(O),H=!0;break t}x===i(m)&&r(m),N(O)}else r(m);x=i(m)}if(x!==null)H=!0;else{var P=i(h);P!==null&&q(k,P.startTime-O),H=!1}}break e}finally{x=null,g=ee,b=!1}H=void 0}}finally{H?j():U=!1}}}var j;if(typeof L=="function")j=function(){L(F)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=F,j=function(){pe.postMessage(null)}}else j=function(){v(F,0)};function q(O,H){I=v(function(){O(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(O){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ee=g;g=H;try{return O()}finally{g=ee}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ee=g;g=O;try{return H()}finally{g=ee}},s.unstable_scheduleCallback=function(O,H,ee){var ve=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ve+ee:ve):ee=ve,O){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ee+Ee,O={id:S++,callback:H,priorityLevel:O,startTime:ee,expirationTime:Ee,sortIndex:-1},ee>ve?(O.sortIndex=ee,t(h,O),i(m)===null&&O===i(h)&&(D?(w(I),I=-1):D=!0,q(k,ee-ve))):(O.sortIndex=Ee,t(m,O),T||b||(T=!0,U||(U=!0,j()))),O},s.unstable_shouldYield=K,s.unstable_wrapCallback=function(O){var H=g;return function(){var ee=g;g=H;try{return O.apply(this,arguments)}finally{g=ee}}}})(gd)),gd}var $g;function ay(){return $g||($g=1,md.exports=iy()),md.exports}var _d={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function ry(){if(e_)return On;e_=1;var s=Zh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:S}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,S)},On.flushSync=function(m){var h=d.T,S=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=S,r.d.f()}},On.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:b}):S==="script"&&r.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},On.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},On.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin);r.d.L(m,S,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},On.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,h){return m(h)},On.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.7",On}var t_;function sy(){if(t_)return _d.exports;t_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),_d.exports=ry(),_d.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function oy(){if(n_)return Io;n_=1;var s=ay(),t=Zh(),i=sy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case U:return"SuspenseList";case B:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var q=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ve=[],Ee=-1;function P(e){return{current:e}}function J(e){0>Ee||(e.current=ve[Ee],ve[Ee]=null,Ee--)}function Te(e,n){Ee++,ve[Ee]=e.current,e.current=n}var Ne=P(null),Oe=P(null),le=P(null),Ae=P(null);function De(e,n){switch(Te(le,n),Te(Oe,e),Te(Ne,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_g(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_g(n),e=vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Ne),Te(Ne,e)}function qe(){J(Ne),J(Oe),J(le)}function ut(e){e.memoizedState!==null&&Te(Ae,e);var n=Ne.current,a=vg(n,e.type);n!==a&&(Te(Oe,e),Te(Ne,a))}function he(e){Oe.current===e&&(J(Ne),J(Oe)),Ae.current===e&&(J(Ae),Lo._currentValue=ee)}var Pe,ze;function He(e){if(Pe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Pe=n&&n[1]||"",ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+ze}var at=!1;function Re(e,n){if(!e||at)return"";at=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(fe){var oe=fe}Reflect.construct(e,[],be)}else{try{be.call()}catch(fe){oe=fe}e.call(be.prototype)}}else{try{throw Error()}catch(fe){oe=fe}(be=e())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(fe){if(fe&&oe&&typeof fe.stack=="string")return[fe.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var G=_.split(`
`),ne=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ne.length)for(o=G.length-1,u=ne.length-1;1<=o&&0<=u&&G[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ne[u]){var me=`
`+G[o].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=o&&0<=u);break}}}finally{at=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?He(a):""}function Ye(e,n){switch(e.tag){case 26:case 27:case 5:return He(e.type);case 16:return He("Lazy");case 13:return e.child!==n&&n!==null?He("Suspense Fallback"):He("Suspense");case 19:return He("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return He("Activity");default:return""}}function tt(e){try{var n="",a=null;do n+=Ye(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qe=Object.prototype.hasOwnProperty,z=s.unstable_scheduleCallback,nt=s.unstable_cancelCallback,xe=s.unstable_shouldYield,je=s.unstable_requestPaint,ye=s.unstable_now,dt=s.unstable_getCurrentPriorityLevel,C=s.unstable_ImmediatePriority,M=s.unstable_UserBlockingPriority,V=s.unstable_NormalPriority,ue=s.unstable_LowPriority,_e=s.unstable_IdlePriority,Ce=s.log,Me=s.unstable_setDisableYieldValue,re=null,de=null;function Le(e){if(typeof Ce=="function"&&Me(e),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(re,e)}catch{}}var Ge=Math.clz32?Math.clz32:mt,Ie=Math.log,Be=Math.LN2;function mt(e){return e>>>=0,e===0?32:31-(Ie(e)/Be|0)|0}var gt=256,Et=262144,X=4194304;function Ue(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ge(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ue(o):(_&=R,_!==0?u=Ue(_):a||(a=R&~e,a!==0&&(u=Ue(a))))):(R=o&~f,R!==0?u=Ue(R):_!==0?u=Ue(_):a||(a=o&~e,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Xe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function it(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function pt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function an(e,n,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,ne=e.hiddenUpdates;for(a=_&~a;0<a;){var me=31-Ge(a),be=1<<me;R[me]=0,G[me]=-1;var oe=ne[me];if(oe!==null)for(ne[me]=null,me=0;me<oe.length;me++){var fe=oe[me];fe!==null&&(fe.lane&=-536870913)}a&=~be}o!==0&&It(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function It(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ge(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ci(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ge(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Kn(e,n){var a=n&-n;return a=(a&42)!==0?1:lr(a),(a&(e.suspendedLanes|n))!==0?0:a}function lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ws(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Gg(e.type))}function qs(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Un=Math.random().toString(36).slice(2),cn="__reactFiber$"+Un,An="__reactProps$"+Un,Zi="__reactContainer$"+Un,ba="__reactEvents$"+Un,tl="__reactListeners$"+Un,Gr="__reactHandles$"+Un,js="__reactResources$"+Un,Ea="__reactMarker$"+Un;function Ys(e){delete e[cn],delete e[An],delete e[ba],delete e[tl],delete e[Gr]}function Ta(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Zi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Tg(e);e!==null;){if(a=e[cn])return a;e=Tg(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[cn]||e[Zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function cr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ra(e){var n=e[js];return n||(n=e[js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(e){e[Ea]=!0}var nl=new Set,A={};function Z(e,n){se(e,n),se(e+"Capture",n)}function se(e,n){for(A[e]=n,e=0;e<n.length;e++)nl.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},ke={};function Ke(e){return Qe.call(ke,e)?!0:Qe.call(ae,e)?!1:ie.test(e)?ke[e]=!0:(ae[e]=!0,!1)}function Ve(e,n,a){if(Ke(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $e(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Je(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function st(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pt(e){if(!e._valueTracker){var n=xt(e)?"checked":"value";e._valueTracker=st(e,n,""+e[n])}}function en(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=xt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Vt(e){return e.replace(Gt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ze(e,n,a,o,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ot(n)):e.value!==""+ot(n)&&(e.value=""+ot(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Tt(e,_,ot(n)):a!=null?Tt(e,_,ot(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ot(R):e.removeAttribute("name")}function Ln(e,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Pt(e);return}a=a!=null?""+ot(a):"",n=n!=null?""+ot(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Pt(e)}function Tt(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Qn(e,n,a){if(n!=null&&(n=""+ot(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ot(a):""}function Ei(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(q(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ot(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pt(e)}function Jn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||kt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ti(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&tn(e,f,n[f])}function Ht(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ur(e){return Ca.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var lu=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vr=null,kr=null;function gp(e){var n=Aa(e);if(n&&(e=n.stateNode)){var a=e[An]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ze(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(r(90));Ze(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&en(o)}break e;case"textarea":Qn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(e,!!a.multiple,n,!1)}}}var uu=!1;function _p(e,n,a){if(uu)return e(n,a);uu=!0;try{var o=e(n);return o}finally{if(uu=!1,(Vr!==null||kr!==null)&&(kl(),Vr&&(n=Vr,e=kr,kr=Vr=null,gp(n),e)))for(n=0;n<e.length;n++)gp(e[n])}}function Zs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(Qi)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{fu=!1}var wa=null,du=null,il=null;function vp(){if(il)return il;var e,n=du,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return il=u.slice(e,1<o?1-o:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function xp(){return!1}function Vn(e){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:xp,this.isPropagationStopped=xp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Vn(fr),Qs=x({},fr,{view:0,detail:0}),Jv=Vn(Qs),hu,pu,Js,ol=x({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Js&&(Js&&e.type==="mousemove"?(hu=e.screenX-Js.screenX,pu=e.screenY-Js.screenY):pu=hu=0,Js=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),Sp=Vn(ol),$v=x({},ol,{dataTransfer:0}),ex=Vn($v),tx=x({},Qs,{relatedTarget:0}),mu=Vn(tx),nx=x({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=Vn(nx),ax=x({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rx=Vn(ax),sx=x({},fr,{data:0}),yp=Vn(sx),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ux(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=cx[e])?!!n[e]:!1}function gu(){return ux}var fx=x({},Qs,{key:function(e){if(e.key){var n=ox[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dx=Vn(fx),hx=x({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Vn(hx),px=x({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),mx=Vn(px),gx=x({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=Vn(gx),vx=x({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=Vn(vx),Sx=x({},fr,{newState:0,oldState:0}),yx=Vn(Sx),Mx=[9,13,27,32],_u=Qi&&"CompositionEvent"in window,$s=null;Qi&&"documentMode"in document&&($s=document.documentMode);var bx=Qi&&"TextEvent"in window&&!$s,bp=Qi&&(!_u||$s&&8<$s&&11>=$s),Ep=" ",Tp=!1;function Ap(e,n){switch(e){case"keyup":return Mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function Ex(e,n){switch(e){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(Tp=!0,Ep);case"textInput":return e=n.data,e===Ep&&Tp?null:e;default:return null}}function Tx(e,n){if(Xr)return e==="compositionend"||!_u&&Ap(e,n)?(e=vp(),il=du=wa=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var Ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ax[e.type]:n==="textarea"}function wp(e,n,a,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=Kl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,to=null;function Rx(e){fg(e,0)}function ll(e){var n=cr(e);if(en(n))return e}function Dp(e,n){if(e==="change")return n}var Np=!1;if(Qi){var vu;if(Qi){var xu="oninput"in document;if(!xu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),xu=typeof Up.oninput=="function"}vu=xu}else vu=!1;Np=vu&&(!document.documentMode||9<document.documentMode)}function Lp(){eo&&(eo.detachEvent("onpropertychange",Op),to=eo=null)}function Op(e){if(e.propertyName==="value"&&ll(to)){var n=[];wp(n,to,e,cu(e)),_p(Rx,n)}}function Cx(e,n,a){e==="focusin"?(Lp(),eo=n,to=a,eo.attachEvent("onpropertychange",Op)):e==="focusout"&&Lp()}function wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(to)}function Dx(e,n){if(e==="click")return ll(n)}function Nx(e,n){if(e==="input"||e==="change")return ll(n)}function Ux(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Ux;function no(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qe.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,n){var a=Pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Lx=Qi&&"documentMode"in document&&11>=document.documentMode,Wr=null,yu=null,io=null,Mu=!1;function Fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Wr==null||Wr!==Kt(o)||(o=Wr,"selectionStart"in o&&Su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=Kl(yu,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Wr)))}function dr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qr={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},bu={},Hp={};Qi&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function hr(e){if(bu[e])return bu[e];if(!qr[e])return e;var n=qr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hp)return bu[e]=n[a];return e}var Gp=hr("animationend"),Vp=hr("animationiteration"),kp=hr("animationstart"),Ox=hr("transitionrun"),Px=hr("transitionstart"),zx=hr("transitioncancel"),Xp=hr("transitionend"),Wp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Ai(e,n){Wp.set(e,n),Z(n,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],jr=0,Tu=0;function ul(){for(var e=jr,n=Tu=jr=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&qp(a,u,f)}}function fl(e,n,a,o){ui[jr++]=e,ui[jr++]=n,ui[jr++]=a,ui[jr++]=o,Tu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Au(e,n,a,o){return fl(e,n,a,o),dl(e)}function pr(e,n){return fl(e,null,null,n),dl(e)}function qp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ge(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<Ao)throw Ao=0,zf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Yr={};function Bx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new Bx(e,n,a,o)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,o,u,f){var _=0;if(o=e,typeof e=="function")Ru(e)&&(_=1);else if(typeof e=="string")_=VS(e,a,Ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case B:return e=ei(31,a,n,u),e.elementType=B,e.lanes=f,e;case D:return mr(a.children,u,f,n);case y:_=8,u|=24;break;case v:return e=ei(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case k:return e=ei(13,a,n,u),e.elementType=k,e.lanes=f,e;case U:return e=ei(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:_=10;break e;case w:_=9;break e;case N:_=11;break e;case I:_=14;break e;case E:_=16,o=null;break e}_=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ei(_,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function mr(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function Cu(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function Yp(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function wu(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zp=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=Zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:tt(n)},Zp.set(e,n),n)}return{value:e,source:n,stack:tt(n)}}var Zr=[],Kr=0,pl=null,ao=0,di=[],hi=0,Da=null,Pi=1,zi="";function $i(e,n){Zr[Kr++]=ao,Zr[Kr++]=pl,pl=e,ao=n}function Kp(e,n,a){di[hi++]=Pi,di[hi++]=zi,di[hi++]=Da,Da=e;var o=Pi;e=zi;var u=32-Ge(o)-1;o&=~(1<<u),a+=1;var f=32-Ge(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Pi=1<<32-Ge(n)+u|a<<u|o,zi=f+e}else Pi=1<<f|a<<u|o,zi=e}function Du(e){e.return!==null&&($i(e,1),Kp(e,1,0))}function Nu(e){for(;e===pl;)pl=Zr[--Kr],Zr[Kr]=null,ao=Zr[--Kr],Zr[Kr]=null;for(;e===Da;)Da=di[--hi],di[hi]=null,zi=di[--hi],di[hi]=null,Pi=di[--hi],di[hi]=null}function Qp(e,n){di[hi++]=Pi,di[hi++]=zi,di[hi++]=Da,Pi=n.id,zi=n.overflow,Da=e}var Rn=null,Jt=null,Dt=!1,Na=null,pi=!1,Uu=Error(r(519));function Ua(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(fi(n,e)),Uu}function Jp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[An]=o,a){case"dialog":Rt("cancel",n),Rt("close",n);break;case"iframe":case"object":case"embed":Rt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Rt(Co[a],n);break;case"source":Rt("error",n);break;case"img":case"image":case"link":Rt("error",n),Rt("load",n);break;case"details":Rt("toggle",n);break;case"input":Rt("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Rt("invalid",n);break;case"textarea":Rt("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||mg(n.textContent,a)?(o.popover!=null&&(Rt("beforetoggle",n),Rt("toggle",n)),o.onScroll!=null&&Rt("scroll",n),o.onScrollEnd!=null&&Rt("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Ua(e,!0)}function $p(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function Qr(e){if(e!==Rn)return!1;if(!Dt)return $p(e),Dt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&Jt&&Ua(e),$p(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Jt=Eg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Jt=Eg(e)}else n===27?(n=Jt,qa(e.type)?(e=nd,nd=null,Jt=e):Jt=n):Jt=Rn?gi(e.stateNode.nextSibling):null;return!0}function gr(){Jt=Rn=null,Dt=!1}function Lu(){var e=Na;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Na=null),e}function ro(e){Na===null?Na=[e]:Na.push(e)}var Ou=P(null),_r=null,ea=null;function La(e,n,a){Te(Ou,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=Ou.current,J(Ou)}function Pu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function zu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Pu(f.return,a,e),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Pu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Jr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=u.type;$n(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===Ae.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&zu(n,e,a,o),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vr(e){_r=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return em(_r,e)}function gl(e,n){return _r===null&&vr(e),em(e,n)}function em(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(r(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var Ix=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Fx=s.unstable_scheduleCallback,Hx=s.unstable_NormalPriority,hn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new Ix,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&Fx(Hx,function(){e.controller.abort()})}var oo=null,Iu=0,$r=0,es=null;function Gx(e,n){if(oo===null){var a=oo=[];Iu=0,$r=Vf(),es={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(tm,tm),n}function tm(){if(--Iu===0&&oo!==null){es!==null&&(es.status="fulfilled");var e=oo;oo=null,$r=0,es=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Vx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var nm=O.S;O.S=function(e,n){F0=ye(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Gx(e,n),nm!==null&&nm(e,n)};var xr=P(null);function Fu(){var e=xr.current;return e!==null?e:Qt.pooledCache}function _l(e,n){n===null?Te(xr,xr.current):Te(xr,n.pool)}function im(){var e=Fu();return e===null?null:{parent:hn._currentValue,pool:e}}var ts=Error(r(460)),Hu=Error(r(474)),vl=Error(r(542)),xl={then:function(){}};function am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,om(e),e;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(e=Qt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,om(e),e}throw yr=n,ts}}function Sr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(yr=a,ts):a}}var yr=null;function sm(){if(yr===null)throw Error(r(459));var e=yr;return yr=null,e}function om(e){if(e===ts||e===vl)throw Error(r(483))}var ns=null,lo=0;function Sl(e){var n=lo;return lo+=1,ns===null&&(ns=[]),rm(ns,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lm(e){function n(Q,W){if(e){var te=Q.deletions;te===null?(Q.deletions=[W],Q.flags|=16):te.push(W)}}function a(Q,W){if(!e)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function u(Q,W){return Q=Ji(Q,W),Q.index=0,Q.sibling=null,Q}function f(Q,W,te){return Q.index=te,e?(te=Q.alternate,te!==null?(te=te.index,te<W?(Q.flags|=67108866,W):te):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function _(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,W,te,Se){return W===null||W.tag!==6?(W=Cu(te,Q.mode,Se),W.return=Q,W):(W=u(W,te),W.return=Q,W)}function G(Q,W,te,Se){var lt=te.type;return lt===D?me(Q,W,te.props.children,Se,te.key):W!==null&&(W.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===E&&Sr(lt)===W.type)?(W=u(W,te.props),co(W,te),W.return=Q,W):(W=hl(te.type,te.key,te.props,null,Q.mode,Se),co(W,te),W.return=Q,W)}function ne(Q,W,te,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=wu(te,Q.mode,Se),W.return=Q,W):(W=u(W,te.children||[]),W.return=Q,W)}function me(Q,W,te,Se,lt){return W===null||W.tag!==7?(W=mr(te,Q.mode,Se,lt),W.return=Q,W):(W=u(W,te),W.return=Q,W)}function be(Q,W,te){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Cu(""+W,Q.mode,te),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return te=hl(W.type,W.key,W.props,null,Q.mode,te),co(te,W),te.return=Q,te;case T:return W=wu(W,Q.mode,te),W.return=Q,W;case E:return W=Sr(W),be(Q,W,te)}if(q(W)||j(W))return W=mr(W,Q.mode,te,null),W.return=Q,W;if(typeof W.then=="function")return be(Q,Sl(W),te);if(W.$$typeof===L)return be(Q,gl(Q,W),te);yl(Q,W)}return null}function oe(Q,W,te,Se){var lt=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return lt!==null?null:R(Q,W,""+te,Se);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case b:return te.key===lt?G(Q,W,te,Se):null;case T:return te.key===lt?ne(Q,W,te,Se):null;case E:return te=Sr(te),oe(Q,W,te,Se)}if(q(te)||j(te))return lt!==null?null:me(Q,W,te,Se,null);if(typeof te.then=="function")return oe(Q,W,Sl(te),Se);if(te.$$typeof===L)return oe(Q,W,gl(Q,te),Se);yl(Q,te)}return null}function fe(Q,W,te,Se,lt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(te)||null,R(W,Q,""+Se,lt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case b:return Q=Q.get(Se.key===null?te:Se.key)||null,G(W,Q,Se,lt);case T:return Q=Q.get(Se.key===null?te:Se.key)||null,ne(W,Q,Se,lt);case E:return Se=Sr(Se),fe(Q,W,te,Se,lt)}if(q(Se)||j(Se))return Q=Q.get(te)||null,me(W,Q,Se,lt,null);if(typeof Se.then=="function")return fe(Q,W,te,Sl(Se),lt);if(Se.$$typeof===L)return fe(Q,W,te,gl(W,Se),lt);yl(W,Se)}return null}function et(Q,W,te,Se){for(var lt=null,zt=null,rt=W,yt=W=0,wt=null;rt!==null&&yt<te.length;yt++){rt.index>yt?(wt=rt,rt=null):wt=rt.sibling;var Bt=oe(Q,rt,te[yt],Se);if(Bt===null){rt===null&&(rt=wt);break}e&&rt&&Bt.alternate===null&&n(Q,rt),W=f(Bt,W,yt),zt===null?lt=Bt:zt.sibling=Bt,zt=Bt,rt=wt}if(yt===te.length)return a(Q,rt),Dt&&$i(Q,yt),lt;if(rt===null){for(;yt<te.length;yt++)rt=be(Q,te[yt],Se),rt!==null&&(W=f(rt,W,yt),zt===null?lt=rt:zt.sibling=rt,zt=rt);return Dt&&$i(Q,yt),lt}for(rt=o(rt);yt<te.length;yt++)wt=fe(rt,Q,yt,te[yt],Se),wt!==null&&(e&&wt.alternate!==null&&rt.delete(wt.key===null?yt:wt.key),W=f(wt,W,yt),zt===null?lt=wt:zt.sibling=wt,zt=wt);return e&&rt.forEach(function(Qa){return n(Q,Qa)}),Dt&&$i(Q,yt),lt}function ft(Q,W,te,Se){if(te==null)throw Error(r(151));for(var lt=null,zt=null,rt=W,yt=W=0,wt=null,Bt=te.next();rt!==null&&!Bt.done;yt++,Bt=te.next()){rt.index>yt?(wt=rt,rt=null):wt=rt.sibling;var Qa=oe(Q,rt,Bt.value,Se);if(Qa===null){rt===null&&(rt=wt);break}e&&rt&&Qa.alternate===null&&n(Q,rt),W=f(Qa,W,yt),zt===null?lt=Qa:zt.sibling=Qa,zt=Qa,rt=wt}if(Bt.done)return a(Q,rt),Dt&&$i(Q,yt),lt;if(rt===null){for(;!Bt.done;yt++,Bt=te.next())Bt=be(Q,Bt.value,Se),Bt!==null&&(W=f(Bt,W,yt),zt===null?lt=Bt:zt.sibling=Bt,zt=Bt);return Dt&&$i(Q,yt),lt}for(rt=o(rt);!Bt.done;yt++,Bt=te.next())Bt=fe(rt,Q,yt,Bt.value,Se),Bt!==null&&(e&&Bt.alternate!==null&&rt.delete(Bt.key===null?yt:Bt.key),W=f(Bt,W,yt),zt===null?lt=Bt:zt.sibling=Bt,zt=Bt);return e&&rt.forEach(function($S){return n(Q,$S)}),Dt&&$i(Q,yt),lt}function Zt(Q,W,te,Se){if(typeof te=="object"&&te!==null&&te.type===D&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case b:e:{for(var lt=te.key;W!==null;){if(W.key===lt){if(lt=te.type,lt===D){if(W.tag===7){a(Q,W.sibling),Se=u(W,te.props.children),Se.return=Q,Q=Se;break e}}else if(W.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===E&&Sr(lt)===W.type){a(Q,W.sibling),Se=u(W,te.props),co(Se,te),Se.return=Q,Q=Se;break e}a(Q,W);break}else n(Q,W);W=W.sibling}te.type===D?(Se=mr(te.props.children,Q.mode,Se,te.key),Se.return=Q,Q=Se):(Se=hl(te.type,te.key,te.props,null,Q.mode,Se),co(Se,te),Se.return=Q,Q=Se)}return _(Q);case T:e:{for(lt=te.key;W!==null;){if(W.key===lt)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(Q,W.sibling),Se=u(W,te.children||[]),Se.return=Q,Q=Se;break e}else{a(Q,W);break}else n(Q,W);W=W.sibling}Se=wu(te,Q.mode,Se),Se.return=Q,Q=Se}return _(Q);case E:return te=Sr(te),Zt(Q,W,te,Se)}if(q(te))return et(Q,W,te,Se);if(j(te)){if(lt=j(te),typeof lt!="function")throw Error(r(150));return te=lt.call(te),ft(Q,W,te,Se)}if(typeof te.then=="function")return Zt(Q,W,Sl(te),Se);if(te.$$typeof===L)return Zt(Q,W,gl(Q,te),Se);yl(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,W!==null&&W.tag===6?(a(Q,W.sibling),Se=u(W,te),Se.return=Q,Q=Se):(a(Q,W),Se=Cu(te,Q.mode,Se),Se.return=Q,Q=Se),_(Q)):a(Q,W)}return function(Q,W,te,Se){try{lo=0;var lt=Zt(Q,W,te,Se);return ns=null,lt}catch(rt){if(rt===ts||rt===vl)throw rt;var zt=ei(29,rt,null,Q.mode);return zt.lanes=Se,zt.return=Q,zt}finally{}}}var Mr=lm(!0),cm=lm(!1),Oa=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=dl(e),qp(e,null,a),n}return fl(e,o,n,a),dl(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ci(e,a)}}function ku(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Xu=!1;function fo(){if(Xu){var e=es;if(e!==null)throw e}}function ho(e,n,a,o){Xu=!1;var u=e.updateQueue;Oa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,ne=G.next;G.next=null,_===null?f=ne:_.next=ne,_=G;var me=e.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==_&&(R===null?me.firstBaseUpdate=ne:R.next=ne,me.lastBaseUpdate=G))}if(f!==null){var be=u.baseState;_=0,me=ne=G=null,R=f;do{var oe=R.lane&-536870913,fe=oe!==R.lane;if(fe?(Ct&oe)===oe:(o&oe)===oe){oe!==0&&oe===$r&&(Xu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var et=e,ft=R;oe=n;var Zt=a;switch(ft.tag){case 1:if(et=ft.payload,typeof et=="function"){be=et.call(Zt,be,oe);break e}be=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=ft.payload,oe=typeof et=="function"?et.call(Zt,be,oe):et,oe==null)break e;be=x({},be,oe);break e;case 2:Oa=!0}}oe=R.callback,oe!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[oe]:fe.push(oe))}else fe={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(ne=me=fe,G=be):me=me.next=fe,_|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);me===null&&(G=be),u.baseState=G,u.firstBaseUpdate=ne,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Ga|=_,e.lanes=_,e.memoizedState=be}}function um(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function fm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)um(a[e],n)}var is=P(null),Ml=P(0);function dm(e,n){e=ua,Te(Ml,e),Te(is,n),ua=e|n.baseLanes}function Wu(){Te(Ml,ua),Te(is,is.current)}function qu(){ua=Ml.current,J(is),J(Ml)}var ti=P(null),mi=null;function Ba(e){var n=e.alternate;Te(un,un.current&1),Te(ti,e),mi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(mi=e)}function ju(e){Te(un,un.current),Te(ti,e),mi===null&&(mi=e)}function hm(e){e.tag===22?(Te(un,un.current),Te(ti,e),mi===null&&(mi=e)):Ia()}function Ia(){Te(un,un.current),Te(ti,ti.current)}function ni(e){J(ti),mi===e&&(mi=null),J(un)}var un=P(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ed(a)||td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,St=null,jt=null,pn=null,El=!1,as=!1,br=!1,Tl=0,po=0,rs=null,kx=0;function sn(){throw Error(r(321))}function Yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function Zu(e,n,a,o,u,f){return na=f,St=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Km:ff,br=!1,f=a(o,u),br=!1,as&&(f=mm(n,a,o,u)),pm(e),f}function pm(e){O.H=_o;var n=jt!==null&&jt.next!==null;if(na=0,pn=jt=St=null,El=!1,po=0,rs=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&ml(e)&&(mn=!0))}function mm(e,n,a,o){St=e;var u=0;do{if(as&&(rs=null),po=0,as=!1,25<=u)throw Error(r(301));if(u+=1,pn=jt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Qm,f=n(a,o)}while(as);return f}function Xx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(jt!==null?jt.memoizedState:null)!==e&&(St.flags|=1024),n}function Ku(){var e=Tl!==0;return Tl=0,e}function Qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ju(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}na=0,pn=jt=St=null,as=!1,po=Tl=0,rs=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?St.memoizedState=pn=e:pn=pn.next=e,pn}function fn(){if(jt===null){var e=St.alternate;e=e!==null?e.memoizedState:null}else e=jt.next;var n=pn===null?St.memoizedState:pn.next;if(n!==null)pn=n,jt=e;else{if(e===null)throw St.alternate===null?Error(r(467)):Error(r(310));jt=e,e={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},pn===null?St.memoizedState=pn=e:pn=pn.next=e}return pn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,rs===null&&(rs=[]),e=rm(rs,e,n),n=St,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Km:ff),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===L)return Cn(e)}throw Error(r(438,String(e)))}function $u(e){var n=null,a=St.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=St.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),St.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=K;return n.index++,a}function ia(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=fn();return ef(n,jt,e)}function ef(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,G=null,ne=n,me=!1;do{var be=ne.lane&-536870913;if(be!==ne.lane?(Ct&be)===be:(na&be)===be){var oe=ne.revertLane;if(oe===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),be===$r&&(me=!0);else if((na&oe)===oe){ne=ne.next,oe===$r&&(me=!0);continue}else be={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(R=G=be,_=f):G=G.next=be,St.lanes|=oe,Ga|=oe;be=ne.action,br&&a(f,be),f=ne.hasEagerState?ne.eagerState:a(f,be)}else oe={lane:be,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(R=G=oe,_=f):G=G.next=oe,St.lanes|=be,Ga|=be;ne=ne.next}while(ne!==null&&ne!==n);if(G===null?_=f:G.next=R,!$n(f,e.memoizedState)&&(mn=!0,me&&(a=es,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function tf(e){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);$n(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function gm(e,n,a){var o=St,u=fn(),f=Dt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!$n((jt||u).memoizedState,a);if(_&&(u.memoizedState=a,mn=!0),u=u.queue,rf(xm.bind(null,o,u,e),[e]),u.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},vm.bind(null,o,u,a,n),null),Qt===null)throw Error(r(349));f||(na&127)!==0||_m(o,n,a)}return a}function _m(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=St.updateQueue,n===null?(n=Al(),St.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vm(e,n,a,o){n.value=a,n.getSnapshot=o,Sm(n)&&ym(e)}function xm(e,n,a){return a(function(){Sm(n)&&ym(e)})}function Sm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function ym(e){var n=pr(e,2);n!==null&&jn(n,e,2)}function nf(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),br){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},n}function Mm(e,n,a,o){return e.baseState=a,ef(e,jt,typeof o=="function"?o:ia)}function Wx(e,n,a,o,u){if(Nl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(u,o),G=O.S;G!==null&&G(_,R),Em(e,n,R)}catch(ne){af(e,n,ne)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,o),Em(e,n,f)}catch(ne){af(e,n,ne)}}function Em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tm(e,n,o)},function(o){return af(e,n,o)}):Tm(e,n,a)}function Tm(e,n,a){n.status="fulfilled",n.value=a,Am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bm(e,a)))}function af(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}e.action=null}function Am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rm(e,n){return n}function Cm(e,n){if(Dt){var a=Qt.formState;if(a!==null){e:{var o=St;if(Dt){if(Jt){t:{for(var u=Jt,f=pi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Jt=gi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=jm.bind(null,St,o),o.dispatch=a,o=nf(!1),f=uf.bind(null,St,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Wx.bind(null,St,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function wm(e){var n=fn();return Dm(n,jt,e)}function Dm(e,n,a){if(n=ef(e,n,Rm)[0],e=Cl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(_){throw _===ts?vl:_}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(St.flags|=2048,ss(9,{destroy:void 0},qx.bind(null,u,a),null)),[o,f,e]}function qx(e,n){e.action=n}function Nm(e){var n=fn(),a=jt;if(a!==null)return Dm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ss(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=St.updateQueue,n===null&&(n=Al(),St.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Um(){return fn().memoizedState}function wl(e,n,a,o){var u=Fn();St.flags|=e,u.memoizedState=ss(1|n,{destroy:void 0},a,o===void 0?null:o)}function Dl(e,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;jt!==null&&o!==null&&Yu(o,jt.memoizedState.deps)?u.memoizedState=ss(n,f,a,o):(St.flags|=e,u.memoizedState=ss(1|n,f,a,o))}function Lm(e,n){wl(8390656,8,e,n)}function rf(e,n){Dl(2048,8,e,n)}function jx(e){St.flags|=4;var n=St.updateQueue;if(n===null)n=Al(),St.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Om(e){var n=fn().memoizedState;return jx({ref:n,nextImpl:e}),function(){if((Ft&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Pm(e,n){return Dl(4,2,e,n)}function zm(e,n){return Dl(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Im(e,n,a){a=a!=null?a.concat([e]):null,Dl(4,4,Bm.bind(null,n,e),a)}function sf(){}function Fm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Hm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=e(),br){Le(!0);try{e()}finally{Le(!1)}}return a.memoizedState=[o,n],o}function of(e,n,a){return a===void 0||(na&1073741824)!==0&&(Ct&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=G0(),St.lanes|=e,Ga|=e,a)}function Gm(e,n,a,o){return $n(a,n)?a:is.current!==null?(e=of(e,a,o),$n(e,n)||(mn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Ct&261930)===0?(mn=!0,e.memoizedState=a):(e=G0(),St.lanes|=e,Ga|=e,n)}function Vm(e,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,uf(e,!1,n,a);try{var G=u(),ne=O.S;if(ne!==null&&ne(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var me=Vx(G,o);go(e,n,me,ri(e))}else go(e,n,o,ri(e))}catch(be){go(e,n,{then:function(){},status:"rejected",reason:be},ri())}finally{H.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function Yx(){}function lf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=km(e).queue;Vm(e,u,n,ee,a===null?Yx:function(){return Xm(e),a(o)})}function km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xm(e){var n=km(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},ri())}function cf(){return Cn(Lo)}function Wm(){return fn().memoizedState}function qm(){return fn().memoizedState}function Zx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Pa(a);var o=za(n,e,a);o!==null&&(jn(o,n,a),uo(o,n,a)),n={cache:Bu()},e.payload=n;return}n=n.return}}function Kx(e,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?Ym(n,a):(a=Au(e,n,a,o),a!==null&&(jn(a,e,o),Zm(a,n,o)))}function jm(e,n,a){var o=ri();go(e,n,a,o)}function go(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))Ym(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,_))return fl(e,n,u,0),Qt===null&&ul(),!1}catch{}finally{}if(a=Au(e,n,u,o),a!==null)return jn(a,e,o),Zm(a,n,o),!0}return!1}function uf(e,n,a,o){if(o={lane:2,revertLane:Vf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(r(479))}else n=Au(e,a,o,2),n!==null&&jn(n,e,2)}function Nl(e){var n=e.alternate;return e===St||n!==null&&n===St}function Ym(e,n){as=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ci(e,a)}}var _o={readContext:Cn,use:Rl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};_o.useEffectEvent=sn;var Km={readContext:Cn,use:Rl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Lm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,Bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(br){Le(!0);try{e()}finally{Le(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(br){Le(!0);try{a(n)}finally{Le(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Kx.bind(null,St,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=nf(e);var n=e.queue,a=jm.bind(null,St,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(e,n){var a=Fn();return of(a,e,n)},useTransition:function(){var e=nf(!1);return e=Vm.bind(null,St,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=St,u=Fn();if(Dt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Qt===null)throw Error(r(349));(Ct&127)!==0||_m(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Lm(xm.bind(null,o,f,e),[e]),o.flags|=2048,ss(9,{destroy:void 0},vm.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=Qt.identifierPrefix;if(Dt){var a=zi,o=Pi;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:cf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,St,!0,a),a.dispatch=n,[e,n]},useMemoCache:$u,useCacheRefresh:function(){return Fn().memoizedState=Zx.bind(null,St)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:Cn,use:Rl,useCallback:Fm,useContext:Cn,useEffect:rf,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Hm,useReducer:Cl,useRef:Um,useState:function(){return Cl(ia)},useDebugValue:sf,useDeferredValue:function(e,n){var a=fn();return Gm(a,jt.memoizedState,e,n)},useTransition:function(){var e=Cl(ia)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:cf,useFormState:wm,useActionState:wm,useOptimistic:function(e,n){var a=fn();return Mm(a,jt,e,n)},useMemoCache:$u,useCacheRefresh:qm};ff.useEffectEvent=Om;var Qm={readContext:Cn,use:Rl,useCallback:Fm,useContext:Cn,useEffect:rf,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Hm,useReducer:tf,useRef:Um,useState:function(){return tf(ia)},useDebugValue:sf,useDeferredValue:function(e,n){var a=fn();return jt===null?of(a,e,n):Gm(a,jt.memoizedState,e,n)},useTransition:function(){var e=tf(ia)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:cf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=fn();return jt!==null?Mm(a,jt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:qm};Qm.useEffectEvent=Om;function df(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(jn(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(jn(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(jn(n,e,a),uo(n,e,a))}};function Jm(e,n,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,f):!0}function $m(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&hf.enqueueReplaceState(n,n.state,null)}function Er(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function e0(e){cl(e)}function t0(e){console.error(e)}function n0(e){cl(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function i0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function a0(e){return e=Pa(e),e.tag=3,e}function r0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){i0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){i0(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Qx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?Xl():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(e,o,u)),!1;case 22:return a.flags|=65536,o===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(e,o,u)),!1}throw Error(r(435,a.tag))}return Ff(e,o,u),Xl(),!1}if(Dt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(r(422),{cause:o}),ro(fi(e,a)))):(o!==Uu&&(n=Error(r(423),{cause:o}),ro(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=pf(e.stateNode,o,u),ku(e,u),on!==4&&(on=2)),!1;var f=Error(r(520),{cause:o});if(f=fi(f,a),To===null?To=[f]:To.push(f),on!==4&&(on=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=pf(a.stateNode,o,e),ku(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=a0(u),r0(u,e,a,o),ku(a,u),!1}a=a.return}while(a!==null);return!1}var mf=Error(r(461)),mn=!1;function wn(e,n,a,o){n.child=e===null?cm(n,null,a,o):Mr(n,e.child,a,o)}function s0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return vr(n),o=Zu(e,n,a,_,f,u),R=Ku(),e!==null&&!mn?(Qu(e,n,u),aa(e,n,u)):(Dt&&R&&Du(n),n.flags|=1,wn(e,n,o,u),n.child)}function o0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,l0(e,n,f,o,u)):(e=hl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!bf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(_,o)&&e.ref===n.ref)return aa(e,n,u)}return n.flags|=1,e=Ji(f,o),e.ref=n.ref,e.return=n,n.child=e}function l0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(no(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,bf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,aa(e,n,u)}return gf(e,n,a,o,u)}function c0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return u0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&_l(n,f!==null?f.cachePool:null),f!==null?dm(n,f):Wu(),hm(n);else return o=n.lanes=536870912,u0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(_l(n,f.cachePool),dm(n,f),Ia(),n.memoizedState=null):(e!==null&&_l(n,null),Wu(),Ia());return wn(e,n,u,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function u0(e,n,a,o,u){var f=Fu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&_l(n,null),Wu(),hm(n),e!==null&&Jr(e,n,o,!0),n.childLanes=u,null}function Ll(e,n){return n=Pl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function f0(e,n,a){return Mr(n,e.child,null,a),e=Ll(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function Jx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Dt){if(o.mode==="hidden")return e=Ll(n,o),n.lanes=536870912,vo(null,e);if(ju(n),(e=Jt)?(e=bg(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(e),a.return=n,n.child=a,Rn=n,Jt=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Ll(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=f0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||Jr(e,n,a,!1),u=(a&e.childLanes)!==0,mn||u){if(o=Qt,o!==null&&(_=Kn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,pr(e,_),jn(o,e,_),mf;Xl(),n=f0(e,n,a)}else e=f.treeContext,Jt=gi(_.nextSibling),Rn=n,Dt=!0,Na=null,pi=!1,e!==null&&Qp(n,e),n=Ll(n,o),n.flags|=4096;return n}return e=Ji(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ol(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function gf(e,n,a,o,u){return vr(n),a=Zu(e,n,a,o,void 0,u),o=Ku(),e!==null&&!mn?(Qu(e,n,u),aa(e,n,u)):(Dt&&o&&Du(n),n.flags|=1,wn(e,n,a,u),n.child)}function d0(e,n,a,o,u,f){return vr(n),n.updateQueue=null,a=mm(n,o,a,u),pm(e),o=Ku(),e!==null&&!mn?(Qu(e,n,f),aa(e,n,f)):(Dt&&o&&Du(n),n.flags|=1,wn(e,n,a,f),n.child)}function h0(e,n,a,o,u){if(vr(n),n.stateNode===null){var f=Yr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Gu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):Yr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(df(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&hf.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Er(a,R);f.props=G;var ne=f.context,me=a.contextType;_=Yr,typeof me=="object"&&me!==null&&(_=Cn(me));var be=a.getDerivedStateFromProps;me=typeof be=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ne!==_)&&$m(n,f,o,_),Oa=!1;var oe=n.memoizedState;f.state=oe,ho(n,o,f,u),fo(),ne=n.memoizedState,R||oe!==ne||Oa?(typeof be=="function"&&(df(n,a,be,o),ne=n.memoizedState),(G=Oa||Jm(n,a,G,o,oe,ne,_))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=_,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Vu(e,n),_=n.memoizedProps,me=Er(a,_),f.props=me,be=n.pendingProps,oe=f.context,ne=a.contextType,G=Yr,typeof ne=="object"&&ne!==null&&(G=Cn(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==be||oe!==G)&&$m(n,f,o,G),Oa=!1,oe=n.memoizedState,f.state=oe,ho(n,o,f,u),fo();var fe=n.memoizedState;_!==be||oe!==fe||Oa||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof R=="function"&&(df(n,a,R,o),fe=n.memoizedState),(me=Oa||Jm(n,a,me,o,oe,fe,G)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,fe,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,fe,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),f.props=o,f.state=fe,f.context=G,o=me):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ol(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Mr(n,e.child,null,u),n.child=Mr(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=aa(e,n,u),e}function p0(e,n,a,o){return gr(),n.flags|=256,wn(e,n,a,o),n.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:im()}}function xf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function m0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Dt){if(u?Ba(n):Ia(),(e=Jt)?(e=bg(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(e),a.return=n,n.child=a,Rn=n,Jt=null)):e=null,e===null)throw Ua(n);return td(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ia(),u=n.mode,R=Pl({mode:"hidden",children:R},u),o=mr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=vf(a),o.childLanes=xf(e,_,a),n.memoizedState=_f,vo(null,o)):(Ba(n),Sf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=yf(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),R=o.fallback,u=n.mode,o=Pl({mode:"visible",children:o.children},u),R=mr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Mr(n,e.child,null,a),o=n.child,o.memoizedState=vf(a),o.childLanes=xf(e,_,a),n.memoizedState=_f,n=vo(null,o));else if(Ba(n),td(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ne=_.dgst;_=ne,o=Error(r(419)),o.stack="",o.digest=_,ro({value:o,source:null,stack:null}),n=yf(e,n,a)}else if(mn||Jr(e,n,a,!1),_=(a&e.childLanes)!==0,mn||_){if(_=Qt,_!==null&&(o=Kn(_,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,pr(e,o),jn(_,e,o),mf;ed(R)||Xl(),n=yf(e,n,a)}else ed(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Jt=gi(R.nextSibling),Rn=n,Dt=!0,Na=null,pi=!1,e!==null&&Qp(n,e),n=Sf(n,o.children),n.flags|=4096);return n}return u?(Ia(),R=o.fallback,u=n.mode,G=e.child,ne=G.sibling,o=Ji(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ne!==null?R=Ji(ne,R):(R=mr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,vo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=vf(a):(u=R.cachePool,u!==null?(G=hn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=im(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=xf(e,_,a),n.memoizedState=_f,vo(e.child,o)):(Ba(n),a=e.child,e=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Sf(e,n){return n=Pl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pl(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function yf(e,n,a){return Mr(n,e.child,null,a),e=Sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function g0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Pu(e.return,n,a)}function Mf(e,n,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function _0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=un.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Te(un,_),wn(e,n,o,a),o=Dt?ao:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&g0(e,a,n);else if(e.tag===19)g0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Mf(n,!0,a,null,f,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function $x(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),La(n,hn,e.memoizedState.cache),gr();break;case 27:case 5:ut(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?m0(e,n,a):(Ba(n),e=aa(e,n,a),e!==null?e.sibling:null);Ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return _0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Te(un,un.current),o)break;return null;case 22:return n.lanes=0,c0(e,n,a,n.pendingProps);case 24:La(n,hn,e.memoizedState.cache)}return aa(e,n,a)}function v0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!bf(e,a)&&(n.flags&128)===0)return mn=!1,$x(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Dt&&(n.flags&1048576)!==0&&Kp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Sr(n.elementType),n.type=e,typeof e=="function")Ru(e)?(o=Er(e,o),n.tag=1,n=h0(null,n,e,o,a)):(n.tag=0,n=gf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=s0(null,n,e,o,a);break e}else if(u===I){n.tag=14,n=o0(null,n,e,o,a);break e}}throw n=pe(e)||e,Error(r(306,n,""))}}return n;case 0:return gf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Er(o,n.pendingProps),h0(e,n,o,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Vu(e,n),ho(n,o,null,a);var _=n.memoizedState;if(o=_.cache,La(n,hn,o),o!==f.cache&&zu(n,[hn],a,!0),fo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=p0(e,n,o,a);break e}else if(o!==u){u=fi(Error(r(424)),n),ro(u),n=p0(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Jt=gi(e.firstChild),Rn=n,Dt=!0,Na=null,pi=!0,a=cm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gr(),o===u){n=aa(e,n,a);break e}wn(e,n,o,a)}n=n.child}return n;case 26:return Ol(e,n),e===null?(a=wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,e=n.pendingProps,o=Ql(le.current).createElement(a),o[cn]=n,o[An]=e,Dn(o,a,e),dn(o),n.stateNode=o):n.memoizedState=wg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ut(n),e===null&&Dt&&(o=n.stateNode=Ag(n.type,n.pendingProps,le.current),Rn=n,pi=!0,u=Jt,qa(n.type)?(nd=u,Jt=gi(o.firstChild)):Jt=u),wn(e,n,n.pendingProps.children,a),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Dt&&((u=o=Jt)&&(o=wS(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,Jt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Ua(n)),ut(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,Qf(u,f)?o=null:_!==null&&Qf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,Xx,null,null,a),Lo._currentValue=u),Ol(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&Dt&&((e=a=Jt)&&(a=DS(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,Jt=null,e=!0):e=!1),e||Ua(n)),null;case 13:return m0(e,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Mr(n,null,o,a):wn(e,n,o,a),n.child;case 11:return s0(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vr(n),u=Cn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return o0(e,n,n.type,n.pendingProps,a);case 15:return l0(e,n,n.type,n.pendingProps,a);case 19:return _0(e,n,a);case 31:return Jx(e,n,a);case 22:return c0(e,n,a,n.pendingProps);case 24:return vr(n),o=Cn(hn),e===null?(u=Fu(),u===null&&(u=Qt,f=Bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Gu(n),La(n,hn,u)):((e.lanes&a)!==0&&(Vu(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,hn,o)):(o=f.cache,La(n,hn,o),o!==u.cache&&zu(n,[hn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ra(e){e.flags|=4}function Ef(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(W0())e.flags|=8192;else throw yr=xl,Hu}else e.flags&=-16777217}function x0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Og(n))if(W0())e.flags|=8192;else throw yr=xl,Hu}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?we():536870912,e.lanes|=n,us|=n)}function xo(e,n){if(!Dt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $t(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function eS(e,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(hn),qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qr(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),$t(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?($t(n),x0(n,f)):($t(n),Ef(n,u,null,o,a))):f?f!==e.memoizedState?(ra(n),$t(n),x0(n,f)):($t(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(n),$t(n),Ef(n,u,e,o,a)),null;case 27:if(he(n),a=le.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return $t(n),null}e=Ne.current,Qr(n)?Jp(n):(e=Ag(u,o,a),n.stateNode=e,ra(n))}return $t(n),null;case 5:if(he(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return $t(n),null}if(f=Ne.current,Qr(n))Jp(n);else{var _=Ql(le.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[cn]=n,f[An]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ra(n)}}return $t(n),Ef(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=le.current,Qr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||mg(e.nodeValue,a)),e||Ua(n,!0)}else e=Ql(e).createTextNode(o),e[cn]=n,n.stateNode=e}return $t(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Qr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[cn]=n}else gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),e=!1}else a=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return $t(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),$t(n),null);case 4:return qe(),e===null&&qf(n.stateNode.containerInfo),$t(n),null;case 10:return ta(n.type),$t(n),null;case 19:if(J(un),o=n.memoizedState,o===null)return $t(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,xo(o,!1),e=f.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)jp(a,e),a=a.sibling;return Te(un,un.current&1|2),Dt&&$i(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ye()>Gl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(e=bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Dt)return $t(n),null}else 2*ye()-o.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ye(),e.sibling=null,a=un.current,Te(un,u?a&1|2:a&1),Dt&&$i(n,o.treeForkCount),e):($t(n),null);case 22:case 23:return ni(n),qu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(xr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(hn),$t(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function tS(e,n){switch(Nu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(hn),qe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(un),null;case 4:return qe(),null;case 10:return ta(n.type),null;case 22:case 23:return ni(n),qu(),e!==null&&J(xr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(hn),null;case 25:return null;default:return null}}function S0(e,n){switch(Nu(n),n.tag){case 3:ta(hn),qe();break;case 26:case 27:case 5:he(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:J(un);break;case 10:ta(n.type);break;case 22:case 23:ni(n),qu(),e!==null&&J(xr);break;case 24:ta(hn)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Wt(n,n.return,R)}}function Fa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var G=a,ne=R;try{ne()}catch(me){Wt(u,G,me)}}}o=o.next}while(o!==f)}}catch(me){Wt(n,n.return,me)}}function y0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{fm(n,a)}catch(o){Wt(e,e.return,o)}}}function M0(e,n,a){a.props=Er(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(e,n,o)}}function yo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Wt(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(e,n,u)}else a.current=null}function b0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(e,e.return,u)}}function Tf(e,n,a){try{var o=e.stateNode;bS(o,e.type,a,n),o[An]=n}catch(u){Wt(e,e.return,u)}}function E0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function Af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||E0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Rf(e,n,a),e=e.sibling;e!==null;)Rf(e,n,a),e=e.sibling}function Bl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bl(e,n,a),e=e.sibling;e!==null;)Bl(e,n,a),e=e.sibling}function T0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[cn]=e,n[An]=a}catch(f){Wt(e,e.return,f)}}var sa=!1,gn=!1,Cf=!1,A0=typeof WeakSet=="function"?WeakSet:Set,En=null;function nS(e,n){if(e=e.containerInfo,Zf=ac,e=Ip(e),Su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,G=-1,ne=0,me=0,be=e,oe=null;t:for(;;){for(var fe;be!==a||u!==0&&be.nodeType!==3||(R=_+u),be!==f||o!==0&&be.nodeType!==3||(G=_+o),be.nodeType===3&&(_+=be.nodeValue.length),(fe=be.firstChild)!==null;)oe=be,be=fe;for(;;){if(be===e)break t;if(oe===a&&++ne===u&&(R=_),oe===f&&++me===o&&(G=_),(fe=be.nextSibling)!==null)break;be=oe,oe=be.parentNode}be=fe}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:e,selectionRange:a},ac=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var et=Er(a.type,u);e=o.getSnapshotBeforeUpdate(et,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ft){Wt(a,a.return,ft)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function R0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),o&4&&So(5,a);break;case 1:if(la(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Wt(a,a.return,_)}else{var u=Er(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Wt(a,a.return,_)}}o&64&&y0(a),o&512&&yo(a,a.return);break;case 3:if(la(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fm(e,n)}catch(_){Wt(a,a.return,_)}}break;case 27:n===null&&o&4&&T0(a);case 26:case 5:la(e,a),n===null&&o&4&&b0(a),o&512&&yo(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),o&4&&D0(e,a);break;case 13:la(e,a),o&4&&N0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fS.bind(null,a),NS(e,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||gn,u=sa;var f=gn;sa=o,(gn=n)&&!f?ca(e,a,(a.subtreeFlags&8772)!==0):la(e,a),sa=u,gn=f}break;case 30:break;default:la(e,a)}}function C0(e){var n=e.alternate;n!==null&&(e.alternate=null,C0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ys(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,kn=!1;function oa(e,n,a){for(a=a.child;a!==null;)w0(e,n,a),a=a.sibling}function w0(e,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(re,a)}catch{}switch(a.tag){case 26:gn||Bi(a,n),oa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Bi(a,n);var o=nn,u=kn;qa(a.type)&&(nn=a.stateNode,kn=!1),oa(e,n,a),Do(a.stateNode),nn=o,kn=u;break;case 5:gn||Bi(a,n);case 6:if(o=nn,u=kn,nn=null,oa(e,n,a),nn=o,kn=u,nn!==null)if(kn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(f){Wt(a,n,f)}else try{nn.removeChild(a.stateNode)}catch(f){Wt(a,n,f)}break;case 18:nn!==null&&(kn?(e=nn,yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vs(e)):yg(nn,a.stateNode));break;case 4:o=nn,u=kn,nn=a.stateNode.containerInfo,kn=!0,oa(e,n,a),nn=o,kn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),gn||Fa(4,a,n),oa(e,n,a);break;case 1:gn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&M0(a,n,o)),oa(e,n,a);break;case 21:oa(e,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,oa(e,n,a),gn=o;break;default:oa(e,n,a)}}function D0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vs(e)}catch(a){Wt(n,n.return,a)}}}function N0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vs(e)}catch(a){Wt(n,n.return,a)}}function iS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new A0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new A0),n;default:throw Error(r(435,e.tag))}}function Il(e,n){var a=iS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=dS.bind(null,e,o);o.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){nn=R.stateNode,kn=!1;break e}break;case 5:nn=R.stateNode,kn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if(nn===null)throw Error(r(160));w0(f,_,u),nn=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)U0(n,e),n=n.sibling}var Ri=null;function U0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(Fa(3,e,e.return),So(3,e),Fa(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(gn||a===null||Bi(a,a.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Xn(n,e),Wn(e),o&512&&(gn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ea]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[cn]=e,dn(f),o=f;break e;case"link":var _=Ug("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Ug("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[cn]=e,dn(f),o=f}e.stateNode=o}else Lg(u,e.type,e.stateNode);else e.stateNode=Ng(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Lg(u,e.type,e.stateNode):Ng(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(gn||a===null||Bi(a,a.return)),a!==null&&o&4&&Tf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(gn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{Jn(u,"")}catch(et){Wt(e,e.return,et)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Tf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Cf=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(et){Wt(e,e.return,et)}}break;case 3:if(ec=null,u=Ri,Ri=Jl(n.containerInfo),Xn(n,e),Ri=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vs(n.containerInfo)}catch(et){Wt(e,e.return,et)}Cf&&(Cf=!1,L0(e));break;case 4:o=Ri,Ri=Jl(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ri=o;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Il(e,o)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=ye()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Il(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ne=sa,me=gn;if(sa=ne||u,gn=me||G,Xn(n,e),gn=me,sa=ne,Wn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||sa||gn||Tr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=G.stateNode;var be=G.memoizedProps.style,oe=be!=null&&be.hasOwnProperty("display")?be.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(et){Wt(G,G.return,et)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(et){Wt(G,G.return,et)}}}else if(n.tag===18){if(a===null){G=n;try{var fe=G.stateNode;u?Mg(fe,!0):Mg(G.stateNode,!1)}catch(et){Wt(G,G.return,et)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Il(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Il(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(E0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Af(e);Bl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Jn(_,""),a.flags&=-33);var R=Af(e);Bl(e,R,_);break;case 3:case 4:var G=a.stateNode.containerInfo,ne=Af(e);Rf(e,ne,G);break;default:throw Error(r(161))}}catch(me){Wt(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function L0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;L0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)R0(e,n.alternate,n),n=n.sibling}function Tr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Tr(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&M0(n,n.return,a),Tr(n);break;case 27:Do(n.stateNode);case 26:case 5:Bi(n,n.return),Tr(n);break;case 22:n.memoizedState===null&&Tr(n);break;case 30:Tr(n);break;default:Tr(n)}e=e.sibling}}function ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),So(4,f);break;case 1:if(ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Wt(o,o.return,ne)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)um(G[u],R)}catch(ne){Wt(o,o.return,ne)}}a&&_&64&&y0(f),yo(f,f.return);break;case 27:T0(f);case 26:case 5:ca(u,f,a),a&&o===null&&_&4&&b0(f),yo(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&_&4&&D0(u,f);break;case 13:ca(u,f,a),a&&_&4&&N0(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),yo(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O0(e,n,a,o),n=n.sibling}function O0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&So(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Wt(n,n.return,G)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):Mo(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,os(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&wf(_,n);break;case 24:Ci(e,n,a,o),u&2048&&Df(n.alternate,n);break;default:Ci(e,n,a,o)}}function os(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,G=o,ne=_.flags;switch(_.tag){case 0:case 11:case 15:os(f,_,R,G,u),So(8,_);break;case 23:break;case 22:var me=_.stateNode;_.memoizedState!==null?me._visibility&2?os(f,_,R,G,u):Mo(f,_):(me._visibility|=2,os(f,_,R,G,u)),u&&ne&2048&&wf(_.alternate,_);break;case 24:os(f,_,R,G,u),u&&ne&2048&&Df(_.alternate,_);break;default:os(f,_,R,G,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&wf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Df(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var bo=8192;function ls(e,n,a){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)P0(e,n,a),e=e.sibling}function P0(e,n,a){switch(e.tag){case 26:ls(e,n,a),e.flags&bo&&e.memoizedState!==null&&kS(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:ls(e,n,a);break;case 3:case 4:var o=Ri;Ri=Jl(e.stateNode.containerInfo),ls(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,ls(e,n,a),bo=o):ls(e,n,a));break;default:ls(e,n,a)}}function z0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,I0(o,e)}z0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)B0(e),e=e.sibling}function B0(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):Eo(e);break;default:Eo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,I0(o,e)}z0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function I0(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=e;En!==null;){o=En;var u=o.sibling,f=o.return;if(C0(o),o===a){En=null;break e}if(u!==null){u.return=f,En=u;break e}En=f}}}var aS={getCacheForType:function(e){var n=Cn(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},rS=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Qt=null,At=null,Ct=0,Xt=0,ii=null,Ha=!1,cs=!1,Nf=!1,ua=0,on=0,Ga=0,Ar=0,Uf=0,ai=0,us=0,To=null,qn=null,Lf=!1,Hl=0,F0=0,Gl=1/0,Vl=null,Va=null,xn=0,ka=null,fs=null,fa=0,Of=0,Pf=null,H0=null,Ao=0,zf=null;function ri(){return(Ft&2)!==0&&Ct!==0?Ct&-Ct:O.T!==null?Vf():Ws()}function G0(){if(ai===0)if((Ct&536870912)===0||Dt){var e=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),ai=e}else ai=536870912;return e=ti.current,e!==null&&(e.flags|=32),ai}function jn(e,n,a){(e===Qt&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(ds(e,0),Xa(e,Ct,ai,!1)),pt(e,a),((Ft&2)===0||e!==Qt)&&(e===Qt&&((Ft&2)===0&&(Ar|=a),on===4&&Xa(e,Ct,ai,!1)),Ii(e))}function V0(e,n,a){if((Ft&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xe(e,n),u=o?lS(e,n):If(e,n,!0),f=o;do{if(u===0){cs&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!sS(a)){u=If(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=e;u=To;var G=R.current.memoizedState.isDehydrated;if(G&&(ds(R,_).flags|=256),_=If(R,_,!1),_!==2){if(Nf&&!G){R.errorRecoveryDisabledLanes|=f,Ar|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ds(e,0),Xa(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ai,!Ha);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Hl+300-ye(),10<u)){if(Xa(o,n,ai,!Ha),ge(o,0,!0)!==0)break e;fa=n,o.timeoutHandle=xg(k0.bind(null,o,a,qn,Vl,Lf,n,ai,Ar,us,Ha,f,"Throttled",-0,0),u);break e}k0(o,a,qn,Vl,Lf,n,ai,Ar,us,Ha,f,null,-0,0)}}break}while(!0);Ii(e)}function k0(e,n,a,o,u,f,_,R,G,ne,me,be,oe,fe){if(e.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},P0(n,f,be);var et=(f&62914560)===f?Hl-ye():(f&4194048)===f?F0-ye():0;if(et=XS(be,et),et!==null){fa=f,e.cancelPendingCommit=et(Q0.bind(null,e,n,f,a,o,u,_,R,G,me,be,null,oe,fe)),Xa(e,f,_,!ne);return}}Q0(e,n,f,a,o,u,_,R,G)}function sS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~Uf,n&=~Ar,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ge(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&It(e,a,n)}function kl(){return(Ft&6)===0?(Ro(0),!1):!0}function Bf(){if(At!==null){if(Xt===0)var e=At.return;else e=At,ea=_r=null,Ju(e),ns=null,lo=0,e=At;for(;e!==null;)S0(e.alternate,e),e=e.return;At=null}}function ds(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,AS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Bf(),Qt=e,At=a=Ji(e.current,null),Ct=n,Xt=0,ii=null,Ha=!1,cs=Xe(e,n),Nf=!1,us=ai=Uf=Ar=Ga=on=0,qn=To=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ge(o),f=1<<u;n|=e[u],o&=~f}return ua=n,ul(),a}function X0(e,n){St=null,O.H=_o,n===ts||n===vl?(n=sm(),Xt=3):n===Hu?(n=sm(),Xt=4):Xt=n===mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,At===null&&(on=1,Ul(e,fi(n,e.current)))}function W0(){var e=ti.current;return e===null?!0:(Ct&4194048)===Ct?mi===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?e===mi:!1}function q0(){var e=O.H;return O.H=_o,e===null?_o:e}function j0(){var e=O.A;return O.A=aS,e}function Xl(){on=4,Ha||(Ct&4194048)!==Ct&&ti.current!==null||(cs=!0),(Ga&134217727)===0&&(Ar&134217727)===0||Qt===null||Xa(Qt,Ct,ai,!1)}function If(e,n,a){var o=Ft;Ft|=2;var u=q0(),f=j0();(Qt!==e||Ct!==n)&&(Vl=null,ds(e,n)),n=!1;var _=on;e:do try{if(Xt!==0&&At!==null){var R=At,G=ii;switch(Xt){case 8:Bf(),_=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ne=Xt;if(Xt=0,ii=null,hs(e,R,G,ne),a&&cs){_=0;break e}break;default:ne=Xt,Xt=0,ii=null,hs(e,R,G,ne)}}oS(),_=on;break}catch(me){X0(e,me)}while(!0);return n&&e.shellSuspendCounter++,ea=_r=null,Ft=o,O.H=u,O.A=f,At===null&&(Qt=null,Ct=0,ul()),_}function oS(){for(;At!==null;)Y0(At)}function lS(e,n){var a=Ft;Ft|=2;var o=q0(),u=j0();Qt!==e||Ct!==n?(Vl=null,Gl=ye()+500,ds(e,n)):cs=Xe(e,n);e:do try{if(Xt!==0&&At!==null){n=At;var f=ii;t:switch(Xt){case 1:Xt=0,ii=null,hs(e,n,f,1);break;case 2:case 9:if(am(f)){Xt=0,ii=null,Z0(n);break}n=function(){Xt!==2&&Xt!==9||Qt!==e||(Xt=7),Ii(e)},f.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:am(f)?(Xt=0,ii=null,Z0(n)):(Xt=0,ii=null,hs(e,n,f,7));break;case 5:var _=null;switch(At.tag){case 26:_=At.memoizedState;case 5:case 27:var R=At;if(_?Og(_):R.stateNode.complete){Xt=0,ii=null;var G=R.sibling;if(G!==null)At=G;else{var ne=R.return;ne!==null?(At=ne,Wl(ne)):At=null}break t}}Xt=0,ii=null,hs(e,n,f,5);break;case 6:Xt=0,ii=null,hs(e,n,f,6);break;case 8:Bf(),on=6;break e;default:throw Error(r(462))}}cS();break}catch(me){X0(e,me)}while(!0);return ea=_r=null,O.H=o,O.A=u,Ft=a,At!==null?0:(Qt=null,Ct=0,ul(),on)}function cS(){for(;At!==null&&!xe();)Y0(At)}function Y0(e){var n=v0(e.alternate,e,ua);e.memoizedProps=e.pendingProps,n===null?Wl(e):At=n}function Z0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=d0(a,n,n.pendingProps,n.type,void 0,Ct);break;case 11:n=d0(a,n,n.pendingProps,n.type.render,n.ref,Ct);break;case 5:Ju(n);default:S0(a,n),n=At=jp(n,ua),n=v0(a,n,ua)}e.memoizedProps=e.pendingProps,n===null?Wl(e):At=n}function hs(e,n,a,o){ea=_r=null,Ju(n),ns=null,lo=0;var u=n.return;try{if(Qx(e,u,n,a,Ct)){on=1,Ul(e,fi(a,e.current)),At=null;return}}catch(f){if(u!==null)throw At=u,f;on=1,Ul(e,fi(a,e.current)),At=null;return}n.flags&32768?(Dt||o===1?e=!0:cs||(Ct&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),K0(n,e)):Wl(n)}function Wl(e){var n=e;do{if((n.flags&32768)!==0){K0(n,Ha);return}e=n.return;var a=eS(n.alternate,n,ua);if(a!==null){At=a;return}if(n=n.sibling,n!==null){At=n;return}At=n=e}while(n!==null);on===0&&(on=5)}function K0(e,n){do{var a=tS(e.alternate,e);if(a!==null){a.flags&=32767,At=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){At=e;return}At=e=a}while(e!==null);on=6,At=null}function Q0(e,n,a,o,u,f,_,R,G){e.cancelPendingCommit=null;do ql();while(xn!==0);if((Ft&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Tu,an(e,a,f,_,R,G),e===Qt&&(At=Qt=null,Ct=0),fs=n,ka=e,fa=a,Of=f,Pf=u,H0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hS(V,function(){return ng(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=H.p,H.p=2,_=Ft,Ft|=4;try{nS(e,n,a)}finally{Ft=_,H.p=u,O.T=o}}xn=1,J0(),$0(),eg()}}function J0(){if(xn===1){xn=0;var e=ka,n=fs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Ft;Ft|=4;try{U0(n,e);var f=Kf,_=Ip(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Bp(R.ownerDocument.documentElement,R)){if(G!==null&&Su(R)){var ne=G.start,me=G.end;if(me===void 0&&(me=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(me,R.value.length);else{var be=R.ownerDocument||document,oe=be&&be.defaultView||window;if(oe.getSelection){var fe=oe.getSelection(),et=R.textContent.length,ft=Math.min(G.start,et),Zt=G.end===void 0?ft:Math.min(G.end,et);!fe.extend&&ft>Zt&&(_=Zt,Zt=ft,ft=_);var Q=zp(R,ft),W=zp(R,Zt);if(Q&&W&&(fe.rangeCount!==1||fe.anchorNode!==Q.node||fe.anchorOffset!==Q.offset||fe.focusNode!==W.node||fe.focusOffset!==W.offset)){var te=be.createRange();te.setStart(Q.node,Q.offset),fe.removeAllRanges(),ft>Zt?(fe.addRange(te),fe.extend(W.node,W.offset)):(te.setEnd(W.node,W.offset),fe.addRange(te))}}}}for(be=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&be.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var Se=be[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}ac=!!Zf,Kf=Zf=null}finally{Ft=u,H.p=o,O.T=a}}e.current=n,xn=2}}function $0(){if(xn===2){xn=0;var e=ka,n=fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var u=Ft;Ft|=4;try{R0(e,n.alternate,n)}finally{Ft=u,H.p=o,O.T=a}}xn=3}}function eg(){if(xn===4||xn===3){xn=0,je();var e=ka,n=fs,a=fa,o=H0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,fs=ka=null,tg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),Xs(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=H.p,H.p=2,O.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,H.p=u}}(fa&3)!==0&&ql(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===zf?Ao++:(Ao=0,zf=e):Ao=0,Ro(0)}}function tg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function ql(){return J0(),$0(),eg(),ng()}function ng(){if(xn!==5)return!1;var e=ka,n=Of;Of=0;var a=Xs(fa),o=O.T,u=H.p;try{H.p=32>a?32:a,O.T=null,a=Pf,Pf=null;var f=ka,_=fa;if(xn=0,fs=ka=null,fa=0,(Ft&6)!==0)throw Error(r(331));var R=Ft;if(Ft|=4,B0(f.current),O0(f,f.current,_,a),Ft=R,Ro(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(re,f)}catch{}return!0}finally{H.p=u,O.T=o,tg(e,n)}}function ig(e,n,a){n=fi(a,n),n=pf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(pt(e,2),Ii(e))}function Wt(e,n,a){if(e.tag===3)ig(e,e,a);else for(;n!==null;){if(n.tag===3){ig(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=fi(a,e),a=a0(2),o=za(n,a,2),o!==null&&(r0(a,o,n,e),pt(o,2),Ii(o));break}}n=n.return}}function Ff(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new rS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),e=uS.bind(null,e,n,a),n.then(e,e))}function uS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qt===e&&(Ct&a)===a&&(on===4||on===3&&(Ct&62914560)===Ct&&300>ye()-Hl?(Ft&2)===0&&ds(e,0):Uf|=a,us===Ct&&(us=0)),Ii(e)}function ag(e,n){n===0&&(n=we()),e=pr(e,n),e!==null&&(pt(e,n),Ii(e))}function fS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ag(e,a)}function dS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),ag(e,a)}function hS(e,n){return z(e,n)}var jl=null,ps=null,Hf=!1,Yl=!1,Gf=!1,Wa=0;function Ii(e){e!==ps&&e.next===null&&(ps===null?jl=ps=e:ps=ps.next=e),Yl=!0,Hf||(Hf=!0,mS())}function Ro(e,n){if(!Gf&&Yl){Gf=!0;do for(var a=!1,o=jl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ge(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,lg(o,f))}else f=Ct,f=ge(o,o===Qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Xe(o,f)||(a=!0,lg(o,f));o=o.next}while(a);Gf=!1}}function pS(){rg()}function rg(){Yl=Hf=!1;var e=0;Wa!==0&&TS()&&(e=Wa);for(var n=ye(),a=null,o=jl;o!==null;){var u=o.next,f=sg(o,n);f===0?(o.next=null,a===null?jl=u:a.next=u,u===null&&(ps=a)):(a=o,(e!==0||(f&3)!==0)&&(Yl=!0)),o=u}xn!==0&&xn!==5||Ro(e),Wa!==0&&(Wa=0)}function sg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Ge(f),R=1<<_,G=u[_];G===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Fe(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=Qt,a=Ct,a=ge(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&nt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&nt(o),Xs(a)){case 2:case 8:a=M;break;case 32:a=V;break;case 268435456:a=_e;break;default:a=V}return o=og.bind(null,e),a=z(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&nt(o),e.callbackPriority=2,e.callbackNode=null,2}function og(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var o=Ct;return o=ge(e,e===Qt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(V0(e,o,n),sg(e,ye()),e.callbackNode!=null&&e.callbackNode===a?og.bind(null,e):null)}function lg(e,n){if(ql())return null;V0(e,n,!0)}function mS(){RS(function(){(Ft&6)!==0?z(C,pS):rg()})}function Vf(){if(Wa===0){var e=$r;e===0&&(e=gt,gt<<=1,(gt&261888)===0&&(gt=256)),Wa=e}return Wa}function cg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ur(""+e)}function ug(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=cg((u[An]||null).action),_=o.submitter;_&&(n=(n=_[An]||null)?cg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new sl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var G=_?ug(u,_):new FormData(u);lf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=_?ug(u,_):new FormData(u),lf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var kf=0;kf<Eu.length;kf++){var Xf=Eu[kf],_S=Xf.toLowerCase(),vS=Xf[0].toUpperCase()+Xf.slice(1);Ai(_S,"on"+vS)}Ai(Gp,"onAnimationEnd"),Ai(Vp,"onAnimationIteration"),Ai(kp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Ox,"onTransitionRun"),Ai(Px,"onTransitionStart"),Ai(zx,"onTransitionCancel"),Ai(Xp,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],G=R.instance,ne=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ne;try{f(u)}catch(me){cl(me)}u.currentTarget=null,f=G}else for(_=0;_<o.length;_++){if(R=o[_],G=R.instance,ne=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ne;try{f(u)}catch(me){cl(me)}u.currentTarget=null,f=G}}}}function Rt(e,n){var a=n[ba];a===void 0&&(a=n[ba]=new Set);var o=e+"__bubble";a.has(o)||(dg(n,e,2,!1),a.add(o))}function Wf(e,n,a){var o=0;n&&(o|=4),dg(a,e,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function qf(e){if(!e[Zl]){e[Zl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(xS.has(a)||Wf(a,!1,e),Wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Wf("selectionchange",!1,n))}}function dg(e,n,a,o){switch(Gg(n)){case 2:var u=jS;break;case 8:u=YS;break;default:u=od}a=u.bind(null,n,a,e),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function jf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Ta(R),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){o=f=_;continue e}R=R.parentNode}}o=o.return}_p(function(){var ne=f,me=cu(a),be=[];e:{var oe=Wp.get(e);if(oe!==void 0){var fe=sl,et=e;switch(e){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":fe=dx;break;case"focusin":et="focus",fe=mu;break;case"focusout":et="blur",fe=mu;break;case"beforeblur":case"afterblur":fe=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=mx;break;case Gp:case Vp:case kp:fe=ix;break;case Xp:fe=_x;break;case"scroll":case"scrollend":fe=Jv;break;case"wheel":fe=xx;break;case"copy":case"cut":case"paste":fe=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Mp;break;case"toggle":case"beforetoggle":fe=yx}var ft=(n&4)!==0,Zt=!ft&&(e==="scroll"||e==="scrollend"),Q=ft?oe!==null?oe+"Capture":null:oe;ft=[];for(var W=ne,te;W!==null;){var Se=W;if(te=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||te===null||Q===null||(Se=Zs(W,Q),Se!=null&&ft.push(wo(W,Se,te))),Zt)break;W=W.return}0<ft.length&&(oe=new fe(oe,et,null,a,me),be.push({event:oe,listeners:ft}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",oe&&a!==lu&&(et=a.relatedTarget||a.fromElement)&&(Ta(et)||et[Zi]))break e;if((fe||oe)&&(oe=me.window===me?me:(oe=me.ownerDocument)?oe.defaultView||oe.parentWindow:window,fe?(et=a.relatedTarget||a.toElement,fe=ne,et=et?Ta(et):null,et!==null&&(Zt=c(et),ft=et.tag,et!==Zt||ft!==5&&ft!==27&&ft!==6)&&(et=null)):(fe=null,et=ne),fe!==et)){if(ft=Sp,Se="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ft=Mp,Se="onPointerLeave",Q="onPointerEnter",W="pointer"),Zt=fe==null?oe:cr(fe),te=et==null?oe:cr(et),oe=new ft(Se,W+"leave",fe,a,me),oe.target=Zt,oe.relatedTarget=te,Se=null,Ta(me)===ne&&(ft=new ft(Q,W+"enter",et,a,me),ft.target=te,ft.relatedTarget=Zt,Se=ft),Zt=Se,fe&&et)t:{for(ft=SS,Q=fe,W=et,te=0,Se=Q;Se;Se=ft(Se))te++;Se=0;for(var lt=W;lt;lt=ft(lt))Se++;for(;0<te-Se;)Q=ft(Q),te--;for(;0<Se-te;)W=ft(W),Se--;for(;te--;){if(Q===W||W!==null&&Q===W.alternate){ft=Q;break t}Q=ft(Q),W=ft(W)}ft=null}else ft=null;fe!==null&&hg(be,oe,fe,ft,!1),et!==null&&Zt!==null&&hg(be,Zt,et,ft,!0)}}e:{if(oe=ne?cr(ne):window,fe=oe.nodeName&&oe.nodeName.toLowerCase(),fe==="select"||fe==="input"&&oe.type==="file")var zt=Dp;else if(Cp(oe))if(Np)zt=Nx;else{zt=wx;var rt=Cx}else fe=oe.nodeName,!fe||fe.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ne&&Ht(ne.elementType)&&(zt=Dp):zt=Dx;if(zt&&(zt=zt(e,ne))){wp(be,zt,a,me);break e}rt&&rt(e,oe,ne),e==="focusout"&&ne&&oe.type==="number"&&ne.memoizedProps.value!=null&&Tt(oe,"number",oe.value)}switch(rt=ne?cr(ne):window,e){case"focusin":(Cp(rt)||rt.contentEditable==="true")&&(Wr=rt,yu=ne,io=null);break;case"focusout":io=yu=Wr=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Fp(be,a,me);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":Fp(be,a,me)}var yt;if(_u)e:{switch(e){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Xr?Ap(e,a)&&(wt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(bp&&a.locale!=="ko"&&(Xr||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Xr&&(yt=vp()):(wa=me,du="value"in wa?wa.value:wa.textContent,Xr=!0)),rt=Kl(ne,wt),0<rt.length&&(wt=new yp(wt,e,null,a,me),be.push({event:wt,listeners:rt}),yt?wt.data=yt:(yt=Rp(a),yt!==null&&(wt.data=yt)))),(yt=bx?Ex(e,a):Tx(e,a))&&(wt=Kl(ne,"onBeforeInput"),0<wt.length&&(rt=new yp("onBeforeInput","beforeinput",null,a,me),be.push({event:rt,listeners:wt}),rt.data=yt)),gS(be,e,ne,a,me)}fg(be,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zs(e,a),u!=null&&o.unshift(wo(e,u,f)),u=Zs(e,n),u!=null&&o.push(wo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function SS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hg(e,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,G=R.alternate,ne=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||ne===null||(G=ne,u?(ne=Zs(a,f),ne!=null&&_.unshift(wo(a,ne,G))):u||(ne=Zs(a,f),ne!=null&&_.push(wo(a,ne,G)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var yS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function pg(e){return(typeof e=="string"?e:""+e).replace(yS,`
`).replace(MS,"")}function mg(e,n){return n=pg(n),pg(e)===n}function Yt(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Jn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Jn(e,""+o);break;case"className":$e(e,"class",o);break;case"tabIndex":$e(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(e,a,o);break;case"style":Ti(e,o,f);break;case"data":if(n!=="object"){$e(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ur(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Yt(e,n,"name",u.name,u,null),Yt(e,n,"formEncType",u.formEncType,u,null),Yt(e,n,"formMethod",u.formMethod,u,null),Yt(e,n,"formTarget",u.formTarget,u,null)):(Yt(e,n,"encType",u.encType,u,null),Yt(e,n,"method",u.method,u,null),Yt(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ur(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"onScroll":o!=null&&Rt("scroll",e);break;case"onScrollEnd":o!=null&&Rt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ur(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Rt("beforetoggle",e),Rt("toggle",e),Ve(e,"popover",o);break;case"xlinkActuate":Je(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Je(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Je(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Je(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Je(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Je(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Je(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Je(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Je(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Ve(e,a,o))}}function Yf(e,n,a,o,u,f){switch(a){case"style":Ti(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Jn(e,o):(typeof o=="number"||typeof o=="bigint")&&Jn(e,""+o);break;case"onScroll":o!=null&&Rt("scroll",e);break;case"onScrollEnd":o!=null&&Rt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[An]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ve(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",e),Rt("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(e,n,f,_,a,null)}}u&&Yt(e,n,"srcSet",a.srcSet,a,null),o&&Yt(e,n,"src",a.src,a,null);return;case"input":Rt("invalid",e);var R=f=_=u=null,G=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":_=me;break;case"checked":G=me;break;case"defaultChecked":ne=me;break;case"value":f=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Yt(e,n,o,me,a,null)}}Ln(e,f,R,G,ne,_,u,!1);return;case"select":Rt("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Yt(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!o,n!=null?vn(e,!!o,n,!1):a!=null&&vn(e,!!o,a,!0);return;case"textarea":Rt("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Yt(e,n,_,R,a,null)}Ei(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Yt(e,n,G,o,a,null)}return;case"dialog":Rt("beforetoggle",e),Rt("toggle",e),Rt("cancel",e),Rt("close",e);break;case"iframe":case"object":Rt("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)Rt(Co[o],e);break;case"image":Rt("error",e),Rt("load",e);break;case"details":Rt("toggle",e);break;case"embed":case"source":case"link":Rt("error",e),Rt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(e,n,ne,o,a,null)}return;default:if(Ht(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Yf(e,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Yt(e,n,R,o,a,null))}function bS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,G=null,ne=null,me=null;for(fe in a){var be=a[fe];if(a.hasOwnProperty(fe)&&be!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":G=be;default:o.hasOwnProperty(fe)||Yt(e,n,fe,null,o,be)}}for(var oe in o){var fe=o[oe];if(be=a[oe],o.hasOwnProperty(oe)&&(fe!=null||be!=null))switch(oe){case"type":f=fe;break;case"name":u=fe;break;case"checked":ne=fe;break;case"defaultChecked":me=fe;break;case"value":_=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==be&&Yt(e,n,oe,fe,o,be)}}Ze(e,_,R,G,ne,me,f,u);return;case"select":fe=_=R=oe=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":fe=G;default:o.hasOwnProperty(f)||Yt(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==G&&Yt(e,n,u,f,o,G)}n=R,a=_,o=fe,oe!=null?vn(e,!!a,oe,!1):!!o!=!!a&&(n!=null?vn(e,!!a,n,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":fe=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Yt(e,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":oe=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Yt(e,n,_,u,o,f)}Qn(e,oe,fe);return;case"option":for(var et in a)if(oe=a[et],a.hasOwnProperty(et)&&oe!=null&&!o.hasOwnProperty(et))switch(et){case"selected":e.selected=!1;break;default:Yt(e,n,et,null,o,oe)}for(G in o)if(oe=o[G],fe=a[G],o.hasOwnProperty(G)&&oe!==fe&&(oe!=null||fe!=null))switch(G){case"selected":e.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Yt(e,n,G,oe,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)oe=a[ft],a.hasOwnProperty(ft)&&oe!=null&&!o.hasOwnProperty(ft)&&Yt(e,n,ft,null,o,oe);for(ne in o)if(oe=o[ne],fe=a[ne],o.hasOwnProperty(ne)&&oe!==fe&&(oe!=null||fe!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Yt(e,n,ne,oe,o,fe)}return;default:if(Ht(n)){for(var Zt in a)oe=a[Zt],a.hasOwnProperty(Zt)&&oe!==void 0&&!o.hasOwnProperty(Zt)&&Yf(e,n,Zt,void 0,o,oe);for(me in o)oe=o[me],fe=a[me],!o.hasOwnProperty(me)||oe===fe||oe===void 0&&fe===void 0||Yf(e,n,me,oe,o,fe);return}}for(var Q in a)oe=a[Q],a.hasOwnProperty(Q)&&oe!=null&&!o.hasOwnProperty(Q)&&Yt(e,n,Q,null,o,oe);for(be in o)oe=o[be],fe=a[be],!o.hasOwnProperty(be)||oe===fe||oe==null&&fe==null||Yt(e,n,be,oe,o,fe)}function gg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ES(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&gg(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ne=G.startTime;if(ne>R)break;var me=G.transferSize,be=G.initiatorType;me&&gg(be)&&(G=G.responseEnd,_+=me*(G<R?1:(R-ne)/(G-ne)))}if(--o,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zf=null,Kf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function _g(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function TS(){var e=window.event;return e&&e.type==="popstate"?e===Jf?!1:(Jf=e,!0):(Jf=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(CS)}:xg;function CS(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function yg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),vs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ea]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Do(e.ownerDocument.body);a=u}while(a);vs(n)}function Mg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function $f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),Ys(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ea])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function DS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function bg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function ed(e){return e.data==="$?"||e.data==="$~"}function td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function NS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var nd=null;function Eg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Tg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ag(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ys(e)}var _i=new Map,Rg=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=H.d;H.d={f:US,r:LS,D:OS,C:PS,L:zS,m:BS,X:FS,S:IS,M:HS};function US(){var e=da.f(),n=kl();return e||n}function LS(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?Xm(n):da.r(e)}var ms=typeof document>"u"?null:document;function Cg(e,n,a){var o=ms;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Rg.has(u)||(Rg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),dn(n),o.head.appendChild(n)))}}function OS(e){da.D(e),Cg("dns-prefetch",e,null)}function PS(e,n){da.C(e,n),Cg("preconnect",e,n)}function zS(e,n,a){da.L(e,n,a);var o=ms;if(o&&e&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(e)+'"]';var f=u;switch(n){case"style":f=gs(e);break;case"script":f=_s(e)}_i.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),Dn(n,"link",e),dn(n),o.head.appendChild(n)))}}function BS(e,n){da.m(e,n);var a=ms;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=_s(e)}if(!_i.has(f)&&(e=x({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),Dn(o,"link",e),dn(o),a.head.appendChild(o)}}}function IS(e,n,a){da.S(e,n,a);var o=ms;if(o&&e){var u=Ra(o).hoistableStyles,f=gs(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(No(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&id(e,a);var G=_=o.createElement("link");dn(G),Dn(G,"link",e),G._p=new Promise(function(ne,me){G.onload=ne,G.onerror=me}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,$l(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function FS(e,n){da.X(e,n);var a=ms;if(a&&e){var o=Ra(a).hoistableScripts,u=_s(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=x({src:e,async:!0},n),(n=_i.get(u))&&ad(e,n),f=a.createElement("script"),dn(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function HS(e,n){da.M(e,n);var a=ms;if(a&&e){var o=Ra(a).hoistableScripts,u=_s(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&ad(e,n),f=a.createElement("script"),dn(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function wg(e,n,a,o){var u=(u=le.current)?Jl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gs(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gs(a.href);var f=Ra(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(No(e)))&&!f._p&&(_.instance=f,_.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||GS(u,e,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_s(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function gs(e){return'href="'+Vt(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function Dg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function GS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),dn(n),e.head.appendChild(n))}function _s(e){return'[src="'+Vt(e)+'"]'}function Uo(e){return"script[async]"+e}function Ng(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),dn(o),Dn(o,"style",u),$l(o,a.precedence,e),n.instance=o;case"stylesheet":u=gs(a.href);var f=e.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=Dg(a),(u=_i.get(u))&&id(o,u),f=(e.ownerDocument||e).createElement("link"),dn(f);var _=f;return _._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Dn(f,"link",o),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=_s(a.src),(u=e.querySelector(Uo(f)))?(n.instance=u,dn(u),u):(o=a,(u=_i.get(f))&&(o=x({},a),ad(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),dn(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,e));return n.instance}function $l(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ad(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ec=null;function Ug(e,n,a){if(ec===null){var o=new Map,u=ec=new Map;u.set(a,o)}else u=ec,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ea]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function Lg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function VS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Og(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=gs(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=Dg(o),(u=_i.get(u))&&id(o,u),f=f.createElement("link"),dn(f);var _=f;_._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Dn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var rd=0;function XS(e,n){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&rd===0&&(rd=62500*ES());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>rd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(WS,e),nc=null,tc.call(e))}function WS(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var o=a.get(null);else{a=new Map,nc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:L,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function qS(e,n,a,o,u,f,_,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Pg(e,n,a,o,u,f,_,R,G,ne,me,be){return e=new qS(e,n,a,_,G,ne,me,be,R),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),e.current=f,f.stateNode=e,n=Bu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Gu(f),e}function zg(e){return e?(e=Yr,e):Yr}function Bg(e,n,a,o,u,f){u=zg(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(jn(a,e,n),uo(a,e,n))}function Ig(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function sd(e,n){Ig(e,n),(e=e.alternate)&&Ig(e,n)}function Fg(e){if(e.tag===13||e.tag===31){var n=pr(e,67108864);n!==null&&jn(n,e,67108864),sd(e,67108864)}}function Hg(e){if(e.tag===13||e.tag===31){var n=ri();n=lr(n);var a=pr(e,n);a!==null&&jn(a,e,n),sd(e,n)}}var ac=!0;function jS(e,n,a,o){var u=O.T;O.T=null;var f=H.p;try{H.p=2,od(e,n,a,o)}finally{H.p=f,O.T=u}}function YS(e,n,a,o){var u=O.T;O.T=null;var f=H.p;try{H.p=8,od(e,n,a,o)}finally{H.p=f,O.T=u}}function od(e,n,a,o){if(ac){var u=ld(o);if(u===null)jf(e,n,o,rc,a),Vg(e,o);else if(KS(u,e,n,a,o))o.stopPropagation();else if(Vg(e,o),n&4&&-1<ZS.indexOf(e)){for(;u!==null;){var f=Aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ue(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var G=1<<31-Ge(_);R.entanglements[1]|=G,_&=~G}Ii(f),(Ft&6)===0&&(Gl=ye()+500,Ro(0))}}break;case 31:case 13:R=pr(f,2),R!==null&&jn(R,f,2),kl(),sd(f,2)}if(f=ld(o),f===null&&jf(e,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else jf(e,n,o,null,a)}}function ld(e){return e=cu(e),cd(e)}var rc=null;function cd(e){if(rc=null,e=Ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function Gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case C:return 2;case M:return 8;case V:case ue:return 32;case _e:return 268435456;default:return 32}default:return 32}}var ud=!1,ja=null,Ya=null,Za=null,Oo=new Map,Po=new Map,Ka=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Fg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function KS(e,n,a,o,u){switch(n){case"focusin":return ja=zo(ja,e,n,a,o,u),!0;case"dragenter":return Ya=zo(Ya,e,n,a,o,u),!0;case"mouseover":return Za=zo(Za,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,zo(Oo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,zo(Po.get(f)||null,e,n,a,o,u)),!0}return!1}function kg(e){var n=Ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,qs(e.priority,function(){Hg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,qs(e.priority,function(){Hg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ld(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return n=Aa(a),n!==null&&Fg(n),e.blockedOn=a,!1;n.shift()}return!0}function Xg(e,n,a){sc(e)&&a.delete(n)}function QS(){ud=!1,ja!==null&&sc(ja)&&(ja=null),Ya!==null&&sc(Ya)&&(Ya=null),Za!==null&&sc(Za)&&(Za=null),Oo.forEach(Xg),Po.forEach(Xg)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,ud||(ud=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,QS)))}var lc=null;function Wg(e){lc!==e&&(lc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(cd(o||a)===null)continue;break}var f=Aa(a);f!==null&&(e.splice(n,3),n-=3,lf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vs(e){function n(G){return oc(G,e)}ja!==null&&oc(ja,e),Ya!==null&&oc(Ya,e),Za!==null&&oc(Za,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)kg(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[An]||null;if(typeof f=="function")_||Wg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[An]||null)R=_.formAction;else if(cd(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Wg(a)}}}function qg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fd(e){this._internalRoot=e}cc.prototype.render=fd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ri();Bg(a,o,e,n,null,null)},cc.prototype.unmount=fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bg(e.current,2,null,e,null,null),kl(),n[Zi]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ws();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&kg(e)}};var jg=t.version;if(jg!=="19.2.7")throw Error(r(527,jg,"19.2.7"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var JS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{re=uc.inject(JS),de=uc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=e0,f=t0,_=n0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Pg(e,1,!1,null,null,a,o,null,u,f,_,qg),e[Zi]=n.current,qf(e),new fd(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=e0,_=t0,R=n0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Pg(e,1,!0,n,a??null,o,u,G,f,_,R,qg),n.context=zg(null),a=n.current,o=ri(),o=lr(o),u=Pa(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,pt(n,a),Ii(n),e[Zi]=n.current,qf(e),new cc(n)},Io.version="19.2.7",Io}var i_;function ly(){if(i_)return pd.exports;i_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),pd.exports=oy(),pd.exports}var cy=ly();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fy=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),a_=s=>{const t=fy(s);return t.charAt(0).toUpperCase()+t.slice(1)},pv=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),dy=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=ct.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...p},m)=>ct.createElement("svg",{ref:m,...hy,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:pv("lucide",l),...!c&&!dy(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,S])=>ct.createElement(h,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=(s,t)=>{const i=ct.forwardRef(({className:r,...l},c)=>ct.createElement(py,{ref:c,iconNode:t,className:pv(`lucide-${uy(a_(s))}`,`lucide-${s}`,r),...l}));return i.displayName=a_(s),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],gy=bn("circle-question-mark",my);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],vy=bn("compass",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]],Sy=bn("feather",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],My=bn("flame",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Ey=bn("gamepad-2",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ay=bn("globe",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Cy=bn("info",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Dy=bn("layers",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Uy=bn("moon",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Oy=bn("rotate-ccw",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],zy=bn("save",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],r_=bn("settings",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],mv=bn("sparkles",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],vd=bn("sun",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Gy=bn("trash-2",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ky=bn("volume-2",Vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Wy=bn("volume-x",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],s_=bn("x",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Yy=bn("zap",jy);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="184",Zy=0,o_=1,Ky=2,Hc=1,gv=2,jo=3,sr=0,Zn=1,Ui=2,xa=0,Os=1,th=2,l_=3,c_=4,Qy=5,Lr=100,Jy=101,$y=102,eM=103,tM=104,nM=200,iM=201,aM=202,rM=203,nh=204,ih=205,sM=206,oM=207,lM=208,cM=209,uM=210,fM=211,dM=212,hM=213,pM=214,ah=0,rh=1,sh=2,zs=3,oh=4,lh=5,ch=6,uh=7,_v=0,mM=1,gM=2,Xi=0,vv=1,xv=2,Sv=3,yv=4,Mv=5,bv=6,Ev=7,Tv=300,Br=301,Bs=302,xd=303,Sd=304,iu=306,Zo=1e3,va=1001,fh=1002,Sn=1003,_M=1004,fc=1005,Bn=1006,yd=1007,Pr=1008,li=1009,Av=1010,Rv=1011,Ko=1012,Qh=1013,ji=1014,Vi=1015,ya=1016,Jh=1017,$h=1018,Qo=1020,Cv=35902,wv=35899,Dv=1021,Nv=1022,Li=1023,Ma=1026,zr=1027,Uv=1028,ep=1029,Ir=1030,tp=1031,np=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,dh=35840,hh=35841,ph=35842,mh=35843,gh=36196,_h=37492,vh=37496,xh=37488,Sh=37489,jc=37490,yh=37491,Mh=37808,bh=37809,Eh=37810,Th=37811,Ah=37812,Rh=37813,Ch=37814,wh=37815,Dh=37816,Nh=37817,Uh=37818,Lh=37819,Oh=37820,Ph=37821,zh=36492,Bh=36494,Ih=36495,Fh=36283,Hh=36284,Yc=36285,Gh=36286,vM=3200,Vh=0,xM=1,ar="",xi="srgb",Zc="srgb-linear",Kc="linear",qt="srgb",xs=7680,u_=519,SM=512,yM=513,MM=514,ip=515,bM=516,EM=517,ap=518,TM=519,f_=35044,d_="300 es",ki=2e3,Jo=2001;function AM(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function RM(){const s=Qc("canvas");return s.style.display="block",s}const h_={};function p_(...s){const t="THREE."+s.shift();console.log(t,...s)}function Lv(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ht(...s){s=Lv(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Lt(...s){s=Lv(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function kh(...s){const t=s.join(" ");t in h_||(h_[t]=!0,ht(...s))}function CM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const wM={[ah]:rh,[sh]:ch,[oh]:uh,[zs]:lh,[rh]:ah,[ch]:sh,[uh]:oh,[lh]:zs};class Hr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,Xh=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Ut(s,t,i){return Math.max(t,Math.min(i,s))}function DM(s,t){return(s%t+t)%t}function Md(s,t,i){return(1-i)*s+i*t}function Fo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fp=class fp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ut(this.x,t.x,i.x),this.y=Ut(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ut(this.x,t,i),this.y=Ut(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ut(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fp.prototype.isVector2=!0;let Ot=fp;class Hs{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],S=r[l+2],x=r[l+3],g=c[d+0],b=c[d+1],T=c[d+2],D=c[d+3];if(x!==D||m!==g||h!==b||S!==T){let y=m*g+h*b+S*T+x*D;y<0&&(g=-g,b=-b,T=-T,D=-D,y=-y);let v=1-p;if(y<.9995){const w=Math.acos(y),L=Math.sin(w);v=Math.sin(v*w)/L,p=Math.sin(p*w)/L,m=m*v+g*p,h=h*v+b*p,S=S*v+T*p,x=x*v+D*p}else{m=m*v+g*p,h=h*v+b*p,S=S*v+T*p,x=x*v+D*p;const w=1/Math.sqrt(m*m+h*h+S*S+x*x);m*=w,h*=w,S*=w,x*=w}}t[i]=m,t[i+1]=h,t[i+2]=S,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],S=r[l+3],x=c[d],g=c[d+1],b=c[d+2],T=c[d+3];return t[i]=p*T+S*x+m*b-h*g,t[i+1]=m*T+S*g+h*x-p*b,t[i+2]=h*T+S*b+p*g-m*x,t[i+3]=S*T-p*x-m*g-h*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(r/2),S=p(l/2),x=p(c/2),g=m(r/2),b=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*S*x+h*b*T,this._y=h*b*x-g*S*T,this._z=h*S*T+g*b*x,this._w=h*S*x-g*b*T;break;case"YXZ":this._x=g*S*x+h*b*T,this._y=h*b*x-g*S*T,this._z=h*S*T-g*b*x,this._w=h*S*x+g*b*T;break;case"ZXY":this._x=g*S*x-h*b*T,this._y=h*b*x+g*S*T,this._z=h*S*T+g*b*x,this._w=h*S*x-g*b*T;break;case"ZYX":this._x=g*S*x-h*b*T,this._y=h*b*x+g*S*T,this._z=h*S*T-g*b*x,this._w=h*S*x+g*b*T;break;case"YZX":this._x=g*S*x+h*b*T,this._y=h*b*x+g*S*T,this._z=h*S*T-g*b*x,this._w=h*S*x-g*b*T;break;case"XZY":this._x=g*S*x-h*b*T,this._y=h*b*x-g*S*T,this._z=h*S*T+g*b*x,this._w=h*S*x+g*b*T;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],x=i[10],g=r+p+x;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(S-m)*b,this._y=(c-h)*b,this._z=(d-l)*b}else if(r>p&&r>x){const b=2*Math.sqrt(1+r-p-x);this._w=(S-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+h)/b}else if(p>x){const b=2*Math.sqrt(1+p-r-x);this._w=(c-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+S)/b}else{const b=2*Math.sqrt(1+x-r-p);this._w=(d-l)/b,this._x=(c+h)/b,this._y=(m+S)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=r*S+d*p+l*h-c*m,this._y=l*S+d*m+c*p-r*h,this._z=c*S+d*h+r*m-l*p,this._w=d*S-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dp=class dp{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(m_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(m_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*r),S=2*(p*i-c*l),x=2*(c*r-d*i);return this.x=i+m*h+d*x-p*S,this.y=r+m*S+p*h-c*x,this.z=l+m*x+c*S-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ut(this.x,t.x,i.x),this.y=Ut(this.y,t.y,i.y),this.z=Ut(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ut(this.x,t,i),this.y=Ut(this.y,t,i),this.z=Ut(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return bd.copy(this).projectOnVector(t),this.sub(bd)}reflect(t){return this.sub(bd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ut(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dp.prototype.isVector3=!0;let $=dp;const bd=new $,m_=new Hs,hp=class hp{constructor(t,i,r,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h)}set(t,i,r,l,c,d,p,m,h){const S=this.elements;return S[0]=t,S[1]=l,S[2]=p,S[3]=i,S[4]=c,S[5]=m,S[6]=r,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],S=r[4],x=r[7],g=r[2],b=r[5],T=r[8],D=l[0],y=l[3],v=l[6],w=l[1],L=l[4],N=l[7],k=l[2],U=l[5],I=l[8];return c[0]=d*D+p*w+m*k,c[3]=d*y+p*L+m*U,c[6]=d*v+p*N+m*I,c[1]=h*D+S*w+x*k,c[4]=h*y+S*L+x*U,c[7]=h*v+S*N+x*I,c[2]=g*D+b*w+T*k,c[5]=g*y+b*L+T*U,c[8]=g*v+b*N+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8];return i*d*S-i*p*h-r*c*S+r*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8],x=S*d-p*h,g=p*m-S*c,b=h*c-d*m,T=i*x+r*g+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return t[0]=x*D,t[1]=(l*h-S*r)*D,t[2]=(p*r-l*d)*D,t[3]=g*D,t[4]=(S*i-l*m)*D,t[5]=(l*c-p*i)*D,t[6]=b*D,t[7]=(r*m-h*i)*D,t[8]=(d*i-r*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Ed.makeScale(t,i)),this}rotate(t){return this.premultiply(Ed.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ed.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hp.prototype.isMatrix3=!0;let vt=hp;const Ed=new vt,g_=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),__=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NM(){const s={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ar?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return kh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return kh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zc]:{primaries:t,whitePoint:r,transfer:Kc,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:r,transfer:qt,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Nt=NM();function Sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ss;class UM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ss===void 0&&(Ss=Qc("canvas")),Ss.width=t.width,Ss.height=t.height;const l=Ss.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ss}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Qc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Sa(i[r]/255)*255):i[r]=Sa(i[r]);return{data:i,width:t.width,height:t.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LM=0;class rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Td(l[d].image)):c.push(Td(l[d]))}else c=Td(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Td(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?UM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let OM=0;const Ad=new $;class In extends Hr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=va,l=va,c=Bn,d=Pr,p=Li,m=li,h=In.DEFAULT_ANISOTROPY,S=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=$o(),this.name="",this.source=new rp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ad).x}get height(){return this.source.getSize(Ad).y}get depth(){return this.source.getSize(Ad).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ht(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Tv;In.DEFAULT_ANISOTROPY=1;const pp=class pp{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,h=m[0],S=m[4],x=m[8],g=m[1],b=m[5],T=m[9],D=m[2],y=m[6],v=m[10];if(Math.abs(S-g)<.01&&Math.abs(x-D)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+g)<.1&&Math.abs(x+D)<.1&&Math.abs(T+y)<.1&&Math.abs(h+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(h+1)/2,N=(b+1)/2,k=(v+1)/2,U=(S+g)/4,I=(x+D)/4,E=(T+y)/4;return L>N&&L>k?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=U/r,c=I/r):N>k?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=U/l,c=E/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=I/c,l=E/c),this.set(r,l,c,i),this}let w=Math.sqrt((y-T)*(y-T)+(x-D)*(x-D)+(g-S)*(g-S));return Math.abs(w)<.001&&(w=1),this.x=(y-T)/w,this.y=(x-D)/w,this.z=(g-S)/w,this.w=Math.acos((h+b+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ut(this.x,t.x,i.x),this.y=Ut(this.y,t.y,i.y),this.z=Ut(this.z,t.z,i.z),this.w=Ut(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ut(this.x,t,i),this.y=Ut(this.y,t,i),this.z=Ut(this.z,t,i),this.w=Ut(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pp.prototype.isVector4=!0;let ln=pp;class PM extends Hr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new In(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new rp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends PM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Ov extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zM extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=class nu{constructor(t,i,r,l,c,d,p,m,h,S,x,g,b,T,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h,S,x,g,b,T,D,y)}set(t,i,r,l,c,d,p,m,h,S,x,g,b,T,D,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=S,v[10]=x,v[14]=g,v[3]=b,v[7]=T,v[11]=D,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nu().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/ys.setFromMatrixColumn(t,0).length(),c=1/ys.setFromMatrixColumn(t,1).length(),d=1/ys.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),S=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=d*S,b=d*x,T=p*S,D=p*x;i[0]=m*S,i[4]=-m*x,i[8]=h,i[1]=b+T*h,i[5]=g-D*h,i[9]=-p*m,i[2]=D-g*h,i[6]=T+b*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*S,b=m*x,T=h*S,D=h*x;i[0]=g+D*p,i[4]=T*p-b,i[8]=d*h,i[1]=d*x,i[5]=d*S,i[9]=-p,i[2]=b*p-T,i[6]=D+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*S,b=m*x,T=h*S,D=h*x;i[0]=g-D*p,i[4]=-d*x,i[8]=T+b*p,i[1]=b+T*p,i[5]=d*S,i[9]=D-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*S,b=d*x,T=p*S,D=p*x;i[0]=m*S,i[4]=T*h-b,i[8]=g*h+D,i[1]=m*x,i[5]=D*h+g,i[9]=b*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,b=d*h,T=p*m,D=p*h;i[0]=m*S,i[4]=D-g*x,i[8]=T*x+b,i[1]=x,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=b*x+T,i[10]=g-D*x}else if(t.order==="XZY"){const g=d*m,b=d*h,T=p*m,D=p*h;i[0]=m*S,i[4]=-x,i[8]=h*S,i[1]=g*x+D,i[5]=d*S,i[9]=b*x-T,i[2]=T*x-b,i[6]=p*S,i[10]=D*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(BM,t,IM)}lookAt(t,i,r){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Ja.crossVectors(r,si),Ja.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ja.crossVectors(r,si)),Ja.normalize(),dc.crossVectors(si,Ja),l[0]=Ja.x,l[4]=dc.x,l[8]=si.x,l[1]=Ja.y,l[5]=dc.y,l[9]=si.y,l[2]=Ja.z,l[6]=dc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],S=r[1],x=r[5],g=r[9],b=r[13],T=r[2],D=r[6],y=r[10],v=r[14],w=r[3],L=r[7],N=r[11],k=r[15],U=l[0],I=l[4],E=l[8],B=l[12],K=l[1],F=l[5],j=l[9],ce=l[13],pe=l[2],q=l[6],O=l[10],H=l[14],ee=l[3],ve=l[7],Ee=l[11],P=l[15];return c[0]=d*U+p*K+m*pe+h*ee,c[4]=d*I+p*F+m*q+h*ve,c[8]=d*E+p*j+m*O+h*Ee,c[12]=d*B+p*ce+m*H+h*P,c[1]=S*U+x*K+g*pe+b*ee,c[5]=S*I+x*F+g*q+b*ve,c[9]=S*E+x*j+g*O+b*Ee,c[13]=S*B+x*ce+g*H+b*P,c[2]=T*U+D*K+y*pe+v*ee,c[6]=T*I+D*F+y*q+v*ve,c[10]=T*E+D*j+y*O+v*Ee,c[14]=T*B+D*ce+y*H+v*P,c[3]=w*U+L*K+N*pe+k*ee,c[7]=w*I+L*F+N*q+k*ve,c[11]=w*E+L*j+N*O+k*Ee,c[15]=w*B+L*ce+N*H+k*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],S=t[2],x=t[6],g=t[10],b=t[14],T=t[3],D=t[7],y=t[11],v=t[15],w=m*b-h*g,L=p*b-h*x,N=p*g-m*x,k=d*b-h*S,U=d*g-m*S,I=d*x-p*S;return i*(D*w-y*L+v*N)-r*(T*w-y*k+v*U)+l*(T*L-D*k+v*I)-c*(T*N-D*U+y*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8],x=t[9],g=t[10],b=t[11],T=t[12],D=t[13],y=t[14],v=t[15],w=i*p-r*d,L=i*m-l*d,N=i*h-c*d,k=r*m-l*p,U=r*h-c*p,I=l*h-c*m,E=S*D-x*T,B=S*y-g*T,K=S*v-b*T,F=x*y-g*D,j=x*v-b*D,ce=g*v-b*y,pe=w*ce-L*j+N*F+k*K-U*B+I*E;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/pe;return t[0]=(p*ce-m*j+h*F)*q,t[1]=(l*j-r*ce-c*F)*q,t[2]=(D*I-y*U+v*k)*q,t[3]=(g*U-x*I-b*k)*q,t[4]=(m*K-d*ce-h*B)*q,t[5]=(i*ce-l*K+c*B)*q,t[6]=(y*N-T*I-v*L)*q,t[7]=(S*I-g*N+b*L)*q,t[8]=(d*j-p*K+h*E)*q,t[9]=(r*K-i*j-c*E)*q,t[10]=(T*U-D*N+v*w)*q,t[11]=(x*N-S*U-b*w)*q,t[12]=(p*B-d*F-m*E)*q,t[13]=(i*F-r*B+l*E)*q,t[14]=(D*L-T*k-y*w)*q,t[15]=(S*k-x*L+g*w)*q,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,p=t.y,m=t.z,h=c*d,S=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+r,S*m-l*d,0,h*m-l*p,S*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,S=d+d,x=p+p,g=c*h,b=c*S,T=c*x,D=d*S,y=d*x,v=p*x,w=m*h,L=m*S,N=m*x,k=r.x,U=r.y,I=r.z;return l[0]=(1-(D+v))*k,l[1]=(b+N)*k,l[2]=(T-L)*k,l[3]=0,l[4]=(b-N)*U,l[5]=(1-(g+v))*U,l[6]=(y+w)*U,l[7]=0,l[8]=(T+L)*I,l[9]=(y-w)*I,l[10]=(1-(g+D))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let d=ys.set(l[0],l[1],l[2]).length();const p=ys.set(l[4],l[5],l[6]).length(),m=ys.set(l[8],l[9],l[10]).length();c<0&&(d=-d),wi.copy(this);const h=1/d,S=1/p,x=1/m;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=S,wi.elements[5]*=S,wi.elements[6]*=S,wi.elements[8]*=x,wi.elements[9]*=x,wi.elements[10]*=x,i.setFromRotationMatrix(wi),r.x=d,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,d,p=ki,m=!1){const h=this.elements,S=2*c/(i-t),x=2*c/(r-l),g=(i+t)/(i-t),b=(r+l)/(r-l);let T,D;if(m)T=c/(d-c),D=d*c/(d-c);else if(p===ki)T=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(p===Jo)T=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,l,c,d,p=ki,m=!1){const h=this.elements,S=2/(i-t),x=2/(r-l),g=-(i+t)/(i-t),b=-(r+l)/(r-l);let T,D;if(m)T=1/(d-c),D=d/(d-c);else if(p===ki)T=-2/(d-c),D=-(d+c)/(d-c);else if(p===Jo)T=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=T,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};nu.prototype.isMatrix4=!0;let rn=nu;const ys=new $,wi=new rn,BM=new $(0,0,0),IM=new $(1,1,1),Ja=new $,dc=new $,si=new $,v_=new rn,x_=new Hs;class or{constructor(t=0,i=0,r=0,l=or.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],x=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ut(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-S,b),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return v_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(v_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return x_.setFromEuler(this),this.setFromQuaternion(x_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FM=0;const S_=new $,Ms=new Hs,ha=new rn,hc=new $,Ho=new $,HM=new $,GM=new Hs,y_=new $(1,0,0),M_=new $(0,1,0),b_=new $(0,0,1),E_={type:"added"},VM={type:"removed"},bs={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Nn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new $,i=new or,r=new Hs,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new vt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ms.setFromAxisAngle(t,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,i){return Ms.setFromAxisAngle(t,i),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(M_,t)}rotateZ(t){return this.rotateOnAxis(b_,t)}translateOnAxis(t,i){return S_.copy(t).applyQuaternion(this.quaternion),this.position.add(S_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(M_,t)}translateZ(t){return this.translateOnAxis(b_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hc.copy(t):hc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Ho,hc,this.up):ha.lookAt(hc,Ho,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(ha),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),bs.child=t,this.dispatchEvent(bs),bs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VM),Rd.child=t,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,HM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,GM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const x=m[h];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),S=d(t.images),x=d(t.shapes),g=d(t.skeletons),b=d(t.animations),T=d(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),S.length>0&&(r.images=S),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new $(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pc extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const D of t.hand.values()){const y=i.getJointPose(D,r),v=this._getHandJoint(h,D);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const S=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=S.position.distanceTo(x.position),b=.02,T=.005;h.inputState.pinching&&g>b+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=b-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new pc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},mc={h:0,s:0,l:0};function wd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class bt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Nt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Nt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Nt.workingColorSpace){if(t=DM(t,1),i=Ut(i,0,1),r=Ut(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=wd(d,c,t+1/3),this.g=wd(d,c,t),this.b=wd(d,c,t-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function r(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ht("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const r=Pv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Nt.workingToColorSpace(zn.copy(this),t),Math.round(Ut(zn.r*255,0,255))*65536+Math.round(Ut(zn.g*255,0,255))*256+Math.round(Ut(zn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nt.workingColorSpace){Nt.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=S<=.5?x/(d+p):x/(2-d-p),d){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=h,t.l=S,t}getRGB(t,i=Nt.workingColorSpace){return Nt.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=xi){Nt.workingToColorSpace(zn.copy(this),t);const i=zn.r,r=zn.g,l=zn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(mc);const r=Md($a.h,mc.h,i),l=Md($a.s,mc.s,i),c=Md($a.l,mc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new bt;bt.NAMES=Pv;class Jc{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=i}clone(){return new Jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class XM extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new $,pa=new $,Dd=new $,ma=new $,Es=new $,Ts=new $,T_=new $,Nd=new $,Ud=new $,Ld=new $,Od=new ln,Pd=new ln,zd=new ln;class yi{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Di.subVectors(l,i),pa.subVectors(r,i),Dd.subVectors(t,i);const d=Di.dot(Di),p=Di.dot(pa),m=Di.dot(Dd),h=pa.dot(pa),S=pa.dot(Dd),x=d*h-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,b=(h*m-p*S)*g,T=(d*S-p*m)*g;return c.set(1-b-T,T,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,i,r,l,c,d,p,m){return this.getBarycoord(t,i,r,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(d,ma.y),m.addScaledVector(p,ma.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Od.setScalar(0),Pd.setScalar(0),zd.setScalar(0),Od.fromBufferAttribute(t,i),Pd.fromBufferAttribute(t,r),zd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Od,c.x),d.addScaledVector(Pd,c.y),d.addScaledVector(zd,c.z),d}static isFrontFacing(t,i,r,l){return Di.subVectors(r,i),pa.subVectors(t,i),Di.cross(pa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Di.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,p;Es.subVectors(l,r),Ts.subVectors(c,r),Nd.subVectors(t,r);const m=Es.dot(Nd),h=Ts.dot(Nd);if(m<=0&&h<=0)return i.copy(r);Ud.subVectors(t,l);const S=Es.dot(Ud),x=Ts.dot(Ud);if(S>=0&&x<=S)return i.copy(l);const g=m*x-S*h;if(g<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(r).addScaledVector(Es,d);Ld.subVectors(t,c);const b=Es.dot(Ld),T=Ts.dot(Ld);if(T>=0&&b<=T)return i.copy(c);const D=b*h-m*T;if(D<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(r).addScaledVector(Ts,p);const y=S*T-b*x;if(y<=0&&x-S>=0&&b-T>=0)return T_.subVectors(c,l),p=(x-S)/(x-S+(b-T)),i.copy(l).addScaledVector(T_,p);const v=1/(y+D+g);return d=D*v,p=g*v,i.copy(r).addScaledVector(Es,d).addScaledVector(Ts,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class el{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ni):Ni.fromBufferAttribute(c,d),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),_c.subVectors(this.max,Go),As.subVectors(t.a,Go),Rs.subVectors(t.b,Go),Cs.subVectors(t.c,Go),er.subVectors(Rs,As),tr.subVectors(Cs,Rs),Rr.subVectors(As,Cs);let i=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Rr.z,Rr.y,er.z,0,-er.x,tr.z,0,-tr.x,Rr.z,0,-Rr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Rr.y,Rr.x,0];return!Bd(i,As,Rs,Cs,_c)||(i=[1,0,0,0,1,0,0,0,1],!Bd(i,As,Rs,Cs,_c))?!1:(vc.crossVectors(er,tr),i=[vc.x,vc.y,vc.z],Bd(i,As,Rs,Cs,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ga=[new $,new $,new $,new $,new $,new $,new $,new $],Ni=new $,gc=new el,As=new $,Rs=new $,Cs=new $,er=new $,tr=new $,Rr=new $,Go=new $,_c=new $,vc=new $,Cr=new $;function Bd(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Cr.fromArray(s,c);const p=l.x*Math.abs(Cr.x)+l.y*Math.abs(Cr.y)+l.z*Math.abs(Cr.z),m=t.dot(Cr),h=i.dot(Cr),S=r.dot(Cr);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const _n=new $,xc=new Ot;let WM=0;class qi extends Hr{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=f_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(t),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==f_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class zv extends qi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Bv extends qi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Gn extends qi{constructor(t,i,r){super(new Float32Array(t),i,r)}}const qM=new el,Vo=new $,Id=new $;class au{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):qM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Id)),this.expandByPoint(Vo.copy(t.center).sub(Id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let jM=0;const vi=new rn,Fd=new Nn,ws=new $,oi=new el,ko=new el,Tn=new $;class bi extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(AM(t)?Bv:zv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new vt().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,r){return vi.makeTranslation(t,i,r),this.applyMatrix4(vi),this}scale(t,i,r){return vi.makeScale(t,i,r),this.applyMatrix4(vi),this}lookAt(t){return Fd.lookAt(t),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];ko.setFromBufferAttribute(p),this.morphTargetsRelative?(Tn.addVectors(oi.min,ko.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,ko.max),oi.expandByPoint(Tn)):(oi.expandByPoint(ko.min),oi.expandByPoint(ko.max))}oi.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)Tn.fromBufferAttribute(p,h),m&&(ws.fromBufferAttribute(t,h),Tn.add(ws)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<r.count;E++)p[E]=new $,m[E]=new $;const h=new $,S=new $,x=new $,g=new Ot,b=new Ot,T=new Ot,D=new $,y=new $;function v(E,B,K){h.fromBufferAttribute(r,E),S.fromBufferAttribute(r,B),x.fromBufferAttribute(r,K),g.fromBufferAttribute(c,E),b.fromBufferAttribute(c,B),T.fromBufferAttribute(c,K),S.sub(h),x.sub(h),b.sub(g),T.sub(g);const F=1/(b.x*T.y-T.x*b.y);isFinite(F)&&(D.copy(S).multiplyScalar(T.y).addScaledVector(x,-b.y).multiplyScalar(F),y.copy(x).multiplyScalar(b.x).addScaledVector(S,-T.x).multiplyScalar(F),p[E].add(D),p[B].add(D),p[K].add(D),m[E].add(y),m[B].add(y),m[K].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let E=0,B=w.length;E<B;++E){const K=w[E],F=K.start,j=K.count;for(let ce=F,pe=F+j;ce<pe;ce+=3)v(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const L=new $,N=new $,k=new $,U=new $;function I(E){k.fromBufferAttribute(l,E),U.copy(k);const B=p[E];L.copy(B),L.sub(k.multiplyScalar(k.dot(B))).normalize(),N.crossVectors(U,B);const F=N.dot(m[E])<0?-1:1;d.setXYZW(E,L.x,L.y,L.z,F)}for(let E=0,B=w.length;E<B;++E){const K=w[E],F=K.start,j=K.count;for(let ce=F,pe=F+j;ce<pe;ce+=3)I(t.getX(ce+0)),I(t.getX(ce+1)),I(t.getX(ce+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,b=r.count;g<b;g++)r.setXYZ(g,0,0,0);const l=new $,c=new $,d=new $,p=new $,m=new $,h=new $,S=new $,x=new $;if(t)for(let g=0,b=t.count;g<b;g+=3){const T=t.getX(g+0),D=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),S.subVectors(d,c),x.subVectors(l,c),S.cross(x),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,D),h.fromBufferAttribute(r,y),p.add(S),m.add(S),h.add(S),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),S.subVectors(d,c),x.subVectors(l,c),S.cross(x),r.setXYZ(g+0,S.x,S.y,S.z),r.setXYZ(g+1,S.x,S.y,S.z),r.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(p,m){const h=p.array,S=p.itemSize,x=p.normalized,g=new h.constructor(m.length*S);let b=0,T=0;for(let D=0,y=m.length;D<y;D++){p.isInterleavedBufferAttribute?b=m[D]*p.data.stride+p.offset:b=m[D]*S;for(let v=0;v<S;v++)g[T++]=h[b++]}return new qi(g,S,x)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new bi,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let S=0,x=h.length;S<x;S++){const g=h[S],b=t(g,r);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let x=0,g=h.length;x<g;x++){const b=h[x];S.push(b.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const c=t.morphAttributes;for(const h in c){const S=[],x=c[h];for(let g=0,b=x.length;g<b;g++)S.push(x[g].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,S=d.length;h<S;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let YM=0;class Gs extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Os,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ht(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nh&&(r.blendSrc=this.blendSrc),this.blendDst!==ih&&(r.blendDst=this.blendDst),this.blendEquation!==Lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const _a=new $,Hd=new $,Sc=new $,nr=new $,Gd=new $,yc=new $,Vd=new $;class op{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_a)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=_a.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Hd.copy(t).add(i).multiplyScalar(.5),Sc.copy(i).sub(t).normalize(),nr.copy(this.origin).sub(Hd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Sc),p=nr.dot(this.direction),m=-nr.dot(Sc),h=nr.lengthSq(),S=Math.abs(1-d*d);let x,g,b,T;if(S>0)if(x=d*m-p,g=d*p-m,T=c*S,x>=0)if(g>=-T)if(g<=T){const D=1/S;x*=D,g*=D,b=x*(x+d*g+2*p)+g*(d*x+g+2*m)+h}else g=c,x=Math.max(0,-(d*g+p)),b=-x*x+g*(g+2*m)+h;else g=-c,x=Math.max(0,-(d*g+p)),b=-x*x+g*(g+2*m)+h;else g<=-T?(x=Math.max(0,-(-d*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),b=-x*x+g*(g+2*m)+h):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+h):(x=Math.max(0,-(d*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),b=-x*x+g*(g+2*m)+h);else g=d>0?-c:c,x=Math.max(0,-(d*g+p)),b=-x*x+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Hd).addScaledVector(Sc,g),b}intersectSphere(t,i){_a.subVectors(t.center,this.origin);const r=_a.dot(this.direction),l=_a.dot(_a)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(r=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(r=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),S>=0?(c=(t.min.y-g.y)*S,d=(t.max.y-g.y)*S):(c=(t.max.y-g.y)*S,d=(t.min.y-g.y)*S),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,_a)!==null}intersectTriangle(t,i,r,l,c){Gd.subVectors(i,t),yc.subVectors(r,t),Vd.crossVectors(Gd,yc);let d=this.direction.dot(Vd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;nr.subVectors(this.origin,t);const m=p*this.direction.dot(yc.crossVectors(nr,yc));if(m<0)return null;const h=p*this.direction.dot(Gd.cross(nr));if(h<0||m+h>d)return null;const S=-p*nr.dot(Vd);return S<0?null:this.at(S/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $c extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=_v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const A_=new rn,wr=new op,Mc=new au,R_=new $,bc=new $,Ec=new $,Tc=new $,kd=new $,Ac=new $,C_=new $,Rc=new $;class Mi extends Nn{constructor(t=new bi,i=new $c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Ac.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const S=p[m],x=c[m];S!==0&&(kd.fromBufferAttribute(x,t),d?Ac.addScaledVector(kd,S):Ac.addScaledVector(kd.sub(i),S))}i.add(Ac)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(c),wr.copy(t.ray).recast(t.near),!(Mc.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Mc,R_)===null||wr.origin.distanceToSquared(R_)>(t.far-t.near)**2))&&(A_.copy(c).invert(),wr.copy(t.ray).applyMatrix4(A_),!(r.boundingBox!==null&&wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,wr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,S=c.attributes.uv1,x=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,D=g.length;T<D;T++){const y=g[T],v=d[y.materialIndex],w=Math.max(y.start,b.start),L=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let N=w,k=L;N<k;N+=3){const U=p.getX(N),I=p.getX(N+1),E=p.getX(N+2);l=Cc(this,v,t,r,h,S,x,U,I,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),D=Math.min(p.count,b.start+b.count);for(let y=T,v=D;y<v;y+=3){const w=p.getX(y),L=p.getX(y+1),N=p.getX(y+2);l=Cc(this,d,t,r,h,S,x,w,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,D=g.length;T<D;T++){const y=g[T],v=d[y.materialIndex],w=Math.max(y.start,b.start),L=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let N=w,k=L;N<k;N+=3){const U=N,I=N+1,E=N+2;l=Cc(this,v,t,r,h,S,x,U,I,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),D=Math.min(m.count,b.start+b.count);for(let y=T,v=D;y<v;y+=3){const w=y,L=y+1,N=y+2;l=Cc(this,d,t,r,h,S,x,w,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ZM(s,t,i,r,l,c,d,p){let m;if(t.side===Zn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,t.side===sr,p),m===null)return null;Rc.copy(p),Rc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Rc);return h<i.near||h>i.far?null:{distance:h,point:Rc.clone(),object:s}}function Cc(s,t,i,r,l,c,d,p,m,h){s.getVertexPosition(p,bc),s.getVertexPosition(m,Ec),s.getVertexPosition(h,Tc);const S=ZM(s,t,i,r,bc,Ec,Tc,C_);if(S){const x=new $;yi.getBarycoord(C_,bc,Ec,Tc,x),l&&(S.uv=yi.getInterpolatedAttribute(l,p,m,h,x,new Ot)),c&&(S.uv1=yi.getInterpolatedAttribute(c,p,m,h,x,new Ot)),d&&(S.normal=yi.getInterpolatedAttribute(d,p,m,h,x,new $),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new $,materialIndex:0};yi.getNormal(bc,Ec,Tc,g.normal),S.face=g,S.barycoord=x}return S}class KM extends In{constructor(t=null,i=1,r=1,l,c,d,p,m,h=Sn,S=Sn,x,g){super(null,d,p,m,h,S,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xd=new $,QM=new $,JM=new vt;class Nr{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Xd.subVectors(r,i).cross(QM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(Xd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||JM.getNormalMatrix(t),l=this.coplanarPoint(Xd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new au,$M=new Ot(.5,.5),wc=new $;class lp{constructor(t=new Nr,i=new Nr,r=new Nr,l=new Nr,c=new Nr,d=new Nr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ki,r=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],S=c[4],x=c[5],g=c[6],b=c[7],T=c[8],D=c[9],y=c[10],v=c[11],w=c[12],L=c[13],N=c[14],k=c[15];if(l[0].setComponents(h-d,b-S,v-T,k-w).normalize(),l[1].setComponents(h+d,b+S,v+T,k+w).normalize(),l[2].setComponents(h+p,b+x,v+D,k+L).normalize(),l[3].setComponents(h-p,b-x,v-D,k-L).normalize(),r)l[4].setComponents(m,g,y,N).normalize(),l[5].setComponents(h-m,b-g,v-y,k-N).normalize();else if(l[4].setComponents(h-m,b-g,v-y,k-N).normalize(),i===ki)l[5].setComponents(h+m,b+g,v+y,k+N).normalize();else if(i===Jo)l[5].setComponents(m,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);const i=$M.distanceTo(t.center);return Dr.radius=.7071067811865476+i,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Iv extends Gs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eu=new $,tu=new $,w_=new rn,Xo=new op,Dc=new au,Wd=new $,D_=new $;class e1 extends Nn{constructor(t=new bi,i=new Iv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)eu.fromBufferAttribute(i,l-1),tu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=eu.distanceTo(tu);t.setAttribute("lineDistance",new Gn(r,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,t.ray.intersectsSphere(Dc)===!1)return;w_.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(w_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,S=r.index,g=r.attributes.position;if(S!==null){const b=Math.max(0,d.start),T=Math.min(S.count,d.start+d.count);for(let D=b,y=T-1;D<y;D+=h){const v=S.getX(D),w=S.getX(D+1),L=Nc(this,t,Xo,m,v,w,D);L&&i.push(L)}if(this.isLineLoop){const D=S.getX(T-1),y=S.getX(b),v=Nc(this,t,Xo,m,D,y,T-1);v&&i.push(v)}}else{const b=Math.max(0,d.start),T=Math.min(g.count,d.start+d.count);for(let D=b,y=T-1;D<y;D+=h){const v=Nc(this,t,Xo,m,D,D+1,D);v&&i.push(v)}if(this.isLineLoop){const D=Nc(this,t,Xo,m,T-1,b,T-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Nc(s,t,i,r,l,c,d){const p=s.geometry.attributes.position;if(eu.fromBufferAttribute(p,l),tu.fromBufferAttribute(p,c),i.distanceSqToSegment(eu,tu,Wd,D_)>r)return;Wd.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Wd);if(!(h<t.near||h>t.far))return{distance:h,point:D_.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const N_=new $,U_=new $;class t1 extends e1{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)N_.fromBufferAttribute(i,l),U_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+N_.distanceTo(U_);t.setAttribute("lineDistance",new Gn(r,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fv extends In{constructor(t=[],i=Br,r,l,c,d,p,m,h,S){super(t,i,r,l,c,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class n1 extends In{constructor(t,i,r,l,c,d,p,m,h){super(t,i,r,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Is extends In{constructor(t,i,r=ji,l,c,d,p=Sn,m=Sn,h,S=Ma,x=1){if(S!==Ma&&S!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,d,p,m,S,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class i1 extends Is{constructor(t,i=ji,r=Br,l,c,d=Sn,p=Sn,m,h=Ma){const S={width:t,height:t,depth:1},x=[S,S,S,S,S,S];super(t,t,i,r,l,c,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fr extends bi{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],S=[],x=[];let g=0,b=0;T("z","y","x",-1,-1,r,i,t,d,c,0),T("z","y","x",1,-1,r,i,-t,d,c,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,c,4),T("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(S,3)),this.setAttribute("uv",new Gn(x,2));function T(D,y,v,w,L,N,k,U,I,E,B){const K=N/I,F=k/E,j=N/2,ce=k/2,pe=U/2,q=I+1,O=E+1;let H=0,ee=0;const ve=new $;for(let Ee=0;Ee<O;Ee++){const P=Ee*F-ce;for(let J=0;J<q;J++){const Te=J*K-j;ve[D]=Te*w,ve[y]=P*L,ve[v]=pe,h.push(ve.x,ve.y,ve.z),ve[D]=0,ve[y]=0,ve[v]=U>0?1:-1,S.push(ve.x,ve.y,ve.z),x.push(J/I),x.push(1-Ee/E),H+=1}}for(let Ee=0;Ee<E;Ee++)for(let P=0;P<I;P++){const J=g+P+q*Ee,Te=g+P+q*(Ee+1),Ne=g+(P+1)+q*(Ee+1),Oe=g+(P+1)+q*Ee;m.push(J,Te,Oe),m.push(Te,Ne,Oe),ee+=6}p.addGroup(b,ee,B),b+=ee,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Uc=new $,Lc=new $,qd=new $,Oc=new yi;class a1 extends bi{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Wc*i),d=t.getIndex(),p=t.getAttribute("position"),m=d?d.count:p.count,h=[0,0,0],S=["a","b","c"],x=new Array(3),g={},b=[];for(let T=0;T<m;T+=3){d?(h[0]=d.getX(T),h[1]=d.getX(T+1),h[2]=d.getX(T+2)):(h[0]=T,h[1]=T+1,h[2]=T+2);const{a:D,b:y,c:v}=Oc;if(D.fromBufferAttribute(p,h[0]),y.fromBufferAttribute(p,h[1]),v.fromBufferAttribute(p,h[2]),Oc.getNormal(qd),x[0]=`${Math.round(D.x*l)},${Math.round(D.y*l)},${Math.round(D.z*l)}`,x[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,x[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let w=0;w<3;w++){const L=(w+1)%3,N=x[w],k=x[L],U=Oc[S[w]],I=Oc[S[L]],E=`${N}_${k}`,B=`${k}_${N}`;B in g&&g[B]?(qd.dot(g[B].normal)<=c&&(b.push(U.x,U.y,U.z),b.push(I.x,I.y,I.z)),g[B]=null):E in g||(g[E]={index0:h[w],index1:h[L],normal:qd.clone()})}}for(const T in g)if(g[T]){const{index0:D,index1:y}=g[T];Uc.fromBufferAttribute(p,D),Lc.fromBufferAttribute(p,y),b.push(Uc.x,Uc.y,Uc.z),b.push(Lc.x,Lc.y,Lc.z)}this.setAttribute("position",new Gn(b,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ru extends bi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,S=m+1,x=t/p,g=i/m,b=[],T=[],D=[],y=[];for(let v=0;v<S;v++){const w=v*g-d;for(let L=0;L<h;L++){const N=L*x-c;T.push(N,-w,0),D.push(0,0,1),y.push(L/p),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<p;w++){const L=w+h*v,N=w+h*(v+1),k=w+1+h*(v+1),U=w+1+h*v;b.push(L,N,U),b.push(N,k,U)}this.setIndex(b),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(D,3)),this.setAttribute("uv",new Gn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.width,t.height,t.widthSegments,t.heightSegments)}}class cp extends bi{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+p,Math.PI);let h=0;const S=[],x=new $,g=new $,b=[],T=[],D=[],y=[];for(let v=0;v<=r;v++){const w=[],L=v/r;let N=0;v===0&&d===0?N=.5/i:v===r&&m===Math.PI&&(N=-.5/i);for(let k=0;k<=i;k++){const U=k/i;x.x=-t*Math.cos(l+U*c)*Math.sin(d+L*p),x.y=t*Math.cos(d+L*p),x.z=t*Math.sin(l+U*c)*Math.sin(d+L*p),T.push(x.x,x.y,x.z),g.copy(x).normalize(),D.push(g.x,g.y,g.z),y.push(U+N,1-L),w.push(h++)}S.push(w)}for(let v=0;v<r;v++)for(let w=0;w<i;w++){const L=S[v][w+1],N=S[v][w],k=S[v+1][w],U=S[v+1][w+1];(v!==0||d>0)&&b.push(L,N,U),(v!==r-1||m<Math.PI)&&b.push(N,k,U)}this.setIndex(b),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(D,3)),this.setAttribute("uv",new Gn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Fs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];if(L_(l))l.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if(L_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();t[i][r]=c}else t[i][r]=l.slice();else t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=Fs(s[i]);for(const l in r)t[l]=r[l]}return t}function L_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function r1(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Gv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}const s1={clone:Fs,merge:Hn};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=l1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=r1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class c1 extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ur extends Gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class u1 extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f1 extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vv extends Nn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const jd=new rn,O_=new $,P_=new $;class d1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;O_.setFromMatrixPosition(t.matrixWorld),i.position.copy(O_),P_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(P_),i.updateMatrixWorld(),jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Jo||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(jd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pc=new $,zc=new Hs,Fi=new $;class kv extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pc,zc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Pc,zc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new $,z_=new Ot,B_=new Ot;class Si extends kv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-t/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ir.x,ir.y).multiplyScalar(-t/ir.z)}getViewSize(t,i){return this.getViewBounds(t,z_,B_),i.subVectors(B_,z_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class up extends kv{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class h1 extends d1{constructor(){super(new up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p1 extends Vv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new h1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class m1 extends Vv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ds=-90,Ns=1;class g1 extends Nn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Ds,Ns,t,i);l.layers=this.layers,this.add(l);const c=new Si(Ds,Ns,t,i);c.layers=this.layers,this.add(c);const d=new Si(Ds,Ns,t,i);d.layers=this.layers,this.add(d);const p=new Si(Ds,Ns,t,i);p.layers=this.layers,this.add(p);const m=new Si(Ds,Ns,t,i);m.layers=this.layers,this.add(m);const h=new Si(Ds,Ns,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Jo)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,S]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),r.texture.generateMipmaps=D,t.setRenderTarget(r,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(x,g,b),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class _1 extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const I_=new rn;class v1{constructor(t,i,r=0,l=1/0){this.ray=new op(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Lt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return I_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(I_),this}intersectObject(t,i=!0,r=[]){return Wh(t,this,r,i),r.sort(F_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Wh(t[l],this,r,i);return r.sort(F_),r}}function F_(s,t){return s.distance-t.distance}function Wh(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,p=c.length;d<p;d++)Wh(c[d],t,i,!0)}}const mp=class mp{constructor(t,i,r,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=r,c[3]=l,this}};mp.prototype.isMatrix2=!0;let H_=mp;function G_(s,t,i,r){const l=x1(r);switch(i){case Dv:return s*t;case Uv:return s*t/l.components*l.byteLength;case ep:return s*t/l.components*l.byteLength;case Ir:return s*t*2/l.components*l.byteLength;case tp:return s*t*2/l.components*l.byteLength;case Nv:return s*t*3/l.components*l.byteLength;case Li:return s*t*4/l.components*l.byteLength;case np:return s*t*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kc:case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hh:case mh:return Math.max(s,16)*Math.max(t,8)/4;case dh:case ph:return Math.max(s,8)*Math.max(t,8)/2;case gh:case _h:case xh:case Sh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vh:case jc:case yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Th:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zh:case Bh:case Ih:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Fh:case Hh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Yc:case Gh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function x1(s){switch(s){case li:case Av:return{byteLength:1,components:1};case Ko:case Rv:case ya:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case ji:case Qh:case Vi:return{byteLength:4,components:1};case Cv:case wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xv(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function S1(s){const t=new WeakMap;function i(p,m){const h=p.array,S=p.usage,x=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,S),p.onUploadCallback();let b;if(h instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=s.SHORT;else if(h instanceof Uint32Array)b=s.UNSIGNED_INT;else if(h instanceof Int32Array)b=s.INT;else if(h instanceof Int8Array)b=s.BYTE;else if(h instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,h){const S=m.array,x=m.updateRanges;if(s.bindBuffer(h,p),x.length===0)s.bufferSubData(h,0,S);else{x.sort((b,T)=>b.start-T.start);let g=0;for(let b=1;b<x.length;b++){const T=x[g],D=x[b];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,x[g]=D)}x.length=g+1;for(let b=0,T=x.length;b<T;b++){const D=x[b];s.bufferSubData(h,D.start*S.BYTES_PER_ELEMENT,S,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=t.get(p);(!S||S.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,D1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,db=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:y1,alphahash_pars_fragment:M1,alphamap_fragment:b1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:A1,aomap_fragment:R1,aomap_pars_fragment:C1,batching_pars_vertex:w1,batching_vertex:D1,begin_vertex:N1,beginnormal_vertex:U1,bsdfs:L1,iridescence_fragment:O1,bumpmap_pars_fragment:P1,clipping_planes_fragment:z1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:F1,color_fragment:H1,color_pars_fragment:G1,color_pars_vertex:V1,color_vertex:k1,common:X1,cube_uv_reflection_fragment:W1,defaultnormal_vertex:q1,displacementmap_pars_vertex:j1,displacementmap_vertex:Y1,emissivemap_fragment:Z1,emissivemap_pars_fragment:K1,colorspace_fragment:Q1,colorspace_pars_fragment:J1,envmap_fragment:$1,envmap_common_pars_fragment:eb,envmap_pars_fragment:tb,envmap_pars_vertex:nb,envmap_physical_pars_fragment:hb,envmap_vertex:ib,fog_vertex:ab,fog_pars_vertex:rb,fog_fragment:sb,fog_pars_fragment:ob,gradientmap_pars_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:fb,lights_pars_begin:db,lights_toon_fragment:pb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:_b,lights_physical_fragment:vb,lights_physical_pars_fragment:xb,lights_fragment_begin:Sb,lights_fragment_maps:yb,lights_fragment_end:Mb,lightprobes_pars_fragment:bb,logdepthbuf_fragment:Eb,logdepthbuf_pars_fragment:Tb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:Rb,map_fragment:Cb,map_pars_fragment:wb,map_particle_fragment:Db,map_particle_pars_fragment:Nb,metalnessmap_fragment:Ub,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Ob,morphcolor_vertex:Pb,morphnormal_vertex:zb,morphtarget_pars_vertex:Bb,morphtarget_vertex:Ib,normal_fragment_begin:Fb,normal_fragment_maps:Hb,normal_pars_fragment:Gb,normal_pars_vertex:Vb,normal_vertex:kb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:qb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Yb,opaque_fragment:Zb,packing:Kb,premultiplied_alpha_fragment:Qb,project_vertex:Jb,dithering_fragment:$b,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:xE,worldpos_vertex:SE,background_vert:yE,background_frag:ME,backgroundCube_vert:bE,backgroundCube_frag:EE,cube_vert:TE,cube_frag:AE,depth_vert:RE,depth_frag:CE,distance_vert:wE,distance_frag:DE,equirect_vert:NE,equirect_frag:UE,linedashed_vert:LE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:zE,meshlambert_vert:BE,meshlambert_frag:IE,meshmatcap_vert:FE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:XE,meshphysical_vert:WE,meshphysical_frag:qE,meshtoon_vert:jE,meshtoon_frag:YE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:eT},We={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Hn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Hn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Hn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Hn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new bt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Hn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Hn([We.points,We.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Hn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Hn([We.common,We.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Hn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Hn([We.sprite,We.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Hn([We.common,We.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Hn([We.lights,We.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Bc={r:0,b:0,g:0},tT=new rn,Wv=new vt;Wv.set(-1,0,0,0,1,0,0,0,1);function nT(s,t,i,r,l,c){const d=new bt(0);let p=l===!0?0:1,m,h,S=null,x=0,g=null;function b(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){const N=w.backgroundBlurriness>0;L=t.get(L,N)}return L}function T(w){let L=!1;const N=b(w);N===null?y(d,p):N&&N.isColor&&(y(N,1),L=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(w,L){const N=b(L);N&&(N.isCubeTexture||N.mapping===iu)?(h===void 0&&(h=new Mi(new Fr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Fs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=N,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(L.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Wv),h.material.toneMapped=Nt.getTransfer(N.colorSpace)!==qt,(S!==N||x!==N.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,S=N,x=N.version,g=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Mi(new ru(2,2),new Yi({name:"BackgroundMaterial",uniforms:Fs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(N.colorSpace)!==qt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||x!==N.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,S=N,x=N.version,g=s.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function y(w,L){w.getRGB(Bc,Gv(s)),i.buffers.color.setClear(Bc.r,Bc.g,Bc.b,L,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,L=1){d.set(w),p=L,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,y(d,p)},render:T,addToRenderList:D,dispose:v}}function iT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(F,j,ce,pe,q){let O=!1;const H=x(F,pe,ce,j);c!==H&&(c=H,h(c.object)),O=b(F,pe,ce,q),O&&T(F,pe,ce,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,N(F,j,ce,pe),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function m(){return s.createVertexArray()}function h(F){return s.bindVertexArray(F)}function S(F){return s.deleteVertexArray(F)}function x(F,j,ce,pe){const q=pe.wireframe===!0;let O=r[j.id];O===void 0&&(O={},r[j.id]=O);const H=F.isInstancedMesh===!0?F.id:0;let ee=O[H];ee===void 0&&(ee={},O[H]=ee);let ve=ee[ce.id];ve===void 0&&(ve={},ee[ce.id]=ve);let Ee=ve[q];return Ee===void 0&&(Ee=g(m()),ve[q]=Ee),Ee}function g(F){const j=[],ce=[],pe=[];for(let q=0;q<i;q++)j[q]=0,ce[q]=0,pe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:pe,object:F,attributes:{},index:null}}function b(F,j,ce,pe){const q=c.attributes,O=j.attributes;let H=0;const ee=ce.getAttributes();for(const ve in ee)if(ee[ve].location>=0){const P=q[ve];let J=O[ve];if(J===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),P===void 0||P.attribute!==J||J&&P.data!==J.data)return!0;H++}return c.attributesNum!==H||c.index!==pe}function T(F,j,ce,pe){const q={},O=j.attributes;let H=0;const ee=ce.getAttributes();for(const ve in ee)if(ee[ve].location>=0){let P=O[ve];P===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(P=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(P=F.instanceColor));const J={};J.attribute=P,P&&P.data&&(J.data=P.data),q[ve]=J,H++}c.attributes=q,c.attributesNum=H,c.index=pe}function D(){const F=c.newAttributes;for(let j=0,ce=F.length;j<ce;j++)F[j]=0}function y(F){v(F,0)}function v(F,j){const ce=c.newAttributes,pe=c.enabledAttributes,q=c.attributeDivisors;ce[F]=1,pe[F]===0&&(s.enableVertexAttribArray(F),pe[F]=1),q[F]!==j&&(s.vertexAttribDivisor(F,j),q[F]=j)}function w(){const F=c.newAttributes,j=c.enabledAttributes;for(let ce=0,pe=j.length;ce<pe;ce++)j[ce]!==F[ce]&&(s.disableVertexAttribArray(ce),j[ce]=0)}function L(F,j,ce,pe,q,O,H){H===!0?s.vertexAttribIPointer(F,j,ce,q,O):s.vertexAttribPointer(F,j,ce,pe,q,O)}function N(F,j,ce,pe){D();const q=pe.attributes,O=ce.getAttributes(),H=j.defaultAttributeValues;for(const ee in O){const ve=O[ee];if(ve.location>=0){let Ee=q[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(Ee=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(Ee=F.instanceColor)),Ee!==void 0){const P=Ee.normalized,J=Ee.itemSize,Te=t.get(Ee);if(Te===void 0)continue;const Ne=Te.buffer,Oe=Te.type,le=Te.bytesPerElement,Ae=Oe===s.INT||Oe===s.UNSIGNED_INT||Ee.gpuType===Qh;if(Ee.isInterleavedBufferAttribute){const De=Ee.data,qe=De.stride,ut=Ee.offset;if(De.isInstancedInterleavedBuffer){for(let he=0;he<ve.locationSize;he++)v(ve.location+he,De.meshPerAttribute);F.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let he=0;he<ve.locationSize;he++)y(ve.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let he=0;he<ve.locationSize;he++)L(ve.location+he,J/ve.locationSize,Oe,P,qe*le,(ut+J/ve.locationSize*he)*le,Ae)}else{if(Ee.isInstancedBufferAttribute){for(let De=0;De<ve.locationSize;De++)v(ve.location+De,Ee.meshPerAttribute);F.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let De=0;De<ve.locationSize;De++)y(ve.location+De);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let De=0;De<ve.locationSize;De++)L(ve.location+De,J/ve.locationSize,Oe,P,J*le,J/ve.locationSize*De*le,Ae)}}else if(H!==void 0){const P=H[ee];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(ve.location,P);break;case 3:s.vertexAttrib3fv(ve.location,P);break;case 4:s.vertexAttrib4fv(ve.location,P);break;default:s.vertexAttrib1fv(ve.location,P)}}}}w()}function k(){B();for(const F in r){const j=r[F];for(const ce in j){const pe=j[ce];for(const q in pe){const O=pe[q];for(const H in O)S(O[H].object),delete O[H];delete pe[q]}}delete r[F]}}function U(F){if(r[F.id]===void 0)return;const j=r[F.id];for(const ce in j){const pe=j[ce];for(const q in pe){const O=pe[q];for(const H in O)S(O[H].object),delete O[H];delete pe[q]}}delete r[F.id]}function I(F){for(const j in r){const ce=r[j];for(const pe in ce){const q=ce[pe];if(q[F.id]===void 0)continue;const O=q[F.id];for(const H in O)S(O[H].object),delete O[H];delete q[F.id]}}}function E(F){for(const j in r){const ce=r[j],pe=F.isInstancedMesh===!0?F.id:0,q=ce[pe];if(q!==void 0){for(const O in q){const H=q[O];for(const ee in H)S(H[ee].object),delete H[ee];delete q[O]}delete ce[pe],Object.keys(ce).length===0&&delete r[j]}}}function B(){K(),d=!0,c!==l&&(c=l,h(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:B,resetDefaultState:K,dispose:k,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:y,disableUnusedAttributes:w}}function aT(s,t,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,S){S!==0&&(s.drawArraysInstanced(r,m,h,S),i.update(h,r,S))}function p(m,h,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,S);let g=0;for(let b=0;b<S;b++)g+=h[b];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function rT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Li&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const E=I===ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==li&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vi&&!E)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(ht("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:N,maxSamples:k,samples:U}}function sT(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Nr,p=new vt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const b=x.length!==0||g||r!==0||l;return l=g,r=x.length,b},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=S(x,g,0)},this.setState=function(x,g,b){const T=x.clippingPlanes,D=x.clipIntersection,y=x.clipShadows,v=s.get(x);if(!l||T===null||T.length===0||c&&!y)c?S(null):h();else{const w=c?0:r,L=w*4;let N=v.clippingState||null;m.value=N,N=S(T,g,L,b);for(let k=0;k!==L;++k)N[k]=i[k];v.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function S(x,g,b,T){const D=x!==null?x.length:0;let y=null;if(D!==0){if(y=m.value,T!==!0||y===null){const v=b+D*4,w=g.matrixWorldInverse;p.getNormalMatrix(w),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,N=b;L!==D;++L,N+=4)d.copy(x[L]).applyMatrix4(w,p),d.normal.toArray(y,N),y[N+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,y}}const rr=4,V_=[.125,.215,.35,.446,.526,.582],Or=20,oT=256,Wo=new up,k_=new bt;let Yd=null,Zd=0,Kd=0,Qd=!1;const lT=new $;class X_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=lT}=c;Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yd,Zd,Kd),this._renderer.xr.enabled=Qd,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Br||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ya,format:Li,colorSpace:Zc,depthBuffer:!1},l=W_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W_(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cT(c)),this._blurMaterial=fT(c,t,i),this._ggxMaterial=uT(c,t,i)}return l}_compileMaterial(t){const i=new Mi(new bi,t);this._renderer.compile(i,Wo)}_sceneToCubeUV(t,i,r,l,c){const m=new Si(90,1,i,r),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,b=x.toneMapping;x.getClearColor(k_),x.toneMapping=Xi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new Fr,new $c({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let v=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,v=!0):(y.color.copy(k_),v=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,h[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[L],c.y,c.z)):N===1?(m.up.set(0,0,h[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[L],c.z)):(m.up.set(0,h[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[L]));const k=this._cubeSize;Us(l,N*k,L>2?k:0,k,k),x.setRenderTarget(l),v&&x.render(D,m),x.render(t,m)}x.toneMapping=b,x.autoClear=g,t.background=w}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Br||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Us(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Wo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-S*S),g=0+h*1.25,b=x*g,{_lodMax:T}=this,D=this._sizeLods[r],y=3*D*(r>T-rr?r-T+rr:0),v=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=T-i,Us(c,y,v,3*D,2*D),l.setRenderTarget(c),l.render(p,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Us(t,y,v,3*D,2*D),l.setRenderTarget(t),l.render(p,Wo)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=h;const g=h.uniforms,b=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Or-1),D=c/T,y=isFinite(c)?1+Math.floor(S*D):Or;y>Or&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Or}`);const v=[];let w=0;for(let I=0;I<Or;++I){const E=I/D,B=Math.exp(-E*E/2);v.push(B),I===0?w+=B:I<y&&(w+=2*B)}for(let I=0;I<v.length;I++)v[I]=v[I]/w;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-r;const N=this._sizeLods[l],k=3*N*(l>L-rr?l-L+rr:0),U=4*(this._cubeSize-N);Us(i,k,U,3*N,2*N),m.setRenderTarget(i),m.render(x,Wo)}}function cT(s){const t=[],i=[],r=[];let l=s;const c=s-rr+1+V_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>s-rr?m=V_[d-s+rr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,x=1+h,g=[S,S,x,S,x,x,S,S,x,x,S,x],b=6,T=6,D=3,y=2,v=1,w=new Float32Array(D*T*b),L=new Float32Array(y*T*b),N=new Float32Array(v*T*b);for(let U=0;U<b;U++){const I=U%3*2/3-1,E=U>2?0:-1,B=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];w.set(B,D*T*U),L.set(g,y*T*U);const K=[U,U,U,U,U,U];N.set(K,v*T*U)}const k=new bi;k.setAttribute("position",new qi(w,D)),k.setAttribute("uv",new qi(L,y)),k.setAttribute("faceIndex",new qi(N,v)),r.push(new Mi(k,null)),l>rr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function W_(s,t,i){const r=new Wi(s,t,i);return r.texture.mapping=iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Us(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function uT(s,t,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function fT(s,t,i){const r=new Float32Array(Or),l=new $(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function q_(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function j_(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class qv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Fr(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:xa});c.uniforms.tEquirect.value=i;const d=new Mi(l,c),p=i.minFilter;return i.minFilter===Pr&&(i.minFilter=Bn),new g1(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}function dT(s){let t=new WeakMap,i=new WeakMap,r=null;function l(g,b=!1){return g==null?null:b?d(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===xd||b===Sd)if(t.has(g)){const T=t.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const D=new qv(T.height);return D.fromEquirectangularTexture(s,g),t.set(g,D),g.addEventListener("dispose",h),p(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,T=b===xd||b===Sd,D=b===Br||b===Bs;if(T||D){let y=i.get(g);const v=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new X_(s)),y=T?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return T&&w&&w.height>0||D&&w&&m(w)?(r===null&&(r=new X_(s)),y=T?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",S),y.texture):null}}}return g}function p(g,b){return b===xd?g.mapping=Br:b===Sd&&(g.mapping=Bs),g}function m(g){let b=0;const T=6;for(let D=0;D<T;D++)g[D]!==void 0&&b++;return b===T}function h(g){const b=g.target;b.removeEventListener("dispose",h);const T=t.get(b);T!==void 0&&(t.delete(b),T.dispose())}function S(g){const b=g.target;b.removeEventListener("dispose",S);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function hT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&kh("WebGLRenderer: "+r+" extension not supported."),l}}}function pT(s,t,i,r){const l={},c=new WeakMap;function d(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const b=c.get(g);b&&(t.remove(b),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const b in g)t.update(g[b],s.ARRAY_BUFFER)}function h(x){const g=[],b=x.index,T=x.attributes.position;let D=0;if(T===void 0)return;if(b!==null){const w=b.array;D=b.version;for(let L=0,N=w.length;L<N;L+=3){const k=w[L+0],U=w[L+1],I=w[L+2];g.push(k,U,U,I,I,k)}}else{const w=T.array;D=T.version;for(let L=0,N=w.length/3-1;L<N;L+=3){const k=L+0,U=L+1,I=L+2;g.push(k,U,U,I,I,k)}}const y=new(T.count>=65535?Bv:zv)(g,1);y.version=D;const v=c.get(x);v&&t.remove(v),c.set(x,y)}function S(x){const g=c.get(x);if(g){const b=x.index;b!==null&&g.version<b.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:S}}function mT(s,t,i){let r;function l(x){r=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function m(x,g){s.drawElements(r,g,c,x*d),i.update(g,r,1)}function h(x,g,b){b!==0&&(s.drawElementsInstanced(r,g,c,x*d,b),i.update(g,r,b))}function S(x,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,x,0,b);let D=0;for(let y=0;y<b;y++)D+=g[y];i.update(D,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function gT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Lt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function _T(s,t,i){const r=new WeakMap,l=new ln;function c(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let g=r.get(p);if(g===void 0||g.count!==x){let K=function(){E.dispose(),r.delete(p),p.removeEventListener("dispose",K)};var b=K;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],L=p.morphAttributes.color||[];let N=0;T===!0&&(N=1),D===!0&&(N=2),y===!0&&(N=3);let k=p.attributes.position.count*N,U=1;k>t.maxTextureSize&&(U=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*U*4*x),E=new Ov(I,k,U,x);E.type=Vi,E.needsUpdate=!0;const B=N*4;for(let F=0;F<x;F++){const j=v[F],ce=w[F],pe=L[F],q=k*U*4*F;for(let O=0;O<j.count;O++){const H=O*B;T===!0&&(l.fromBufferAttribute(j,O),I[q+H+0]=l.x,I[q+H+1]=l.y,I[q+H+2]=l.z,I[q+H+3]=0),D===!0&&(l.fromBufferAttribute(ce,O),I[q+H+4]=l.x,I[q+H+5]=l.y,I[q+H+6]=l.z,I[q+H+7]=0),y===!0&&(l.fromBufferAttribute(pe,O),I[q+H+8]=l.x,I[q+H+9]=l.y,I[q+H+10]=l.z,I[q+H+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:E,size:new Ot(k,U)},r.set(p,g),p.addEventListener("dispose",K)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const D=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",D),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function vT(s,t,i,r,l){let c=new WeakMap;function d(h){const S=l.render.frame,x=h.geometry,g=t.get(h,x);if(c.get(g)!==S&&(t.update(g),c.set(g,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==S&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,S))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==S&&(b.update(),c.set(b,S))}return g}function p(){c=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const xT={[vv]:"LINEAR_TONE_MAPPING",[xv]:"REINHARD_TONE_MAPPING",[Sv]:"CINEON_TONE_MAPPING",[yv]:"ACES_FILMIC_TONE_MAPPING",[bv]:"AGX_TONE_MAPPING",[Ev]:"NEUTRAL_TONE_MAPPING",[Mv]:"CUSTOM_TONE_MAPPING"};function ST(s,t,i,r,l){const c=new Wi(t,i,{type:s,depthBuffer:r,stencilBuffer:l,depthTexture:r?new Is(t,i):void 0}),d=new Wi(t,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),p=new bi;p.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const m=new c1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Mi(p,m),S=new up(-1,1,1,-1,0,1);let x=null,g=null,b=!1,T,D=null,y=[],v=!1;this.setSize=function(w,L){c.setSize(w,L),d.setSize(w,L);for(let N=0;N<y.length;N++){const k=y[N];k.setSize&&k.setSize(w,L)}},this.setEffects=function(w){y=w,v=y.length>0&&y[0].isRenderPass===!0;const L=c.width,N=c.height;for(let k=0;k<y.length;k++){const U=y[k];U.setSize&&U.setSize(L,N)}},this.begin=function(w,L){if(b||w.toneMapping===Xi&&y.length===0)return!1;if(D=L,L!==null){const N=L.width,k=L.height;(c.width!==N||c.height!==k)&&this.setSize(N,k)}return v===!1&&w.setRenderTarget(c),T=w.toneMapping,w.toneMapping=Xi,!0},this.hasRenderPass=function(){return v},this.end=function(w,L){w.toneMapping=T,b=!0;let N=c,k=d;for(let U=0;U<y.length;U++){const I=y[U];if(I.enabled!==!1&&(I.render(w,k,N,L),I.needsSwap!==!1)){const E=N;N=k,k=E}}if(x!==w.outputColorSpace||g!==w.toneMapping){x=w.outputColorSpace,g=w.toneMapping,m.defines={},Nt.getTransfer(x)===qt&&(m.defines.SRGB_TRANSFER="");const U=xT[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(D),w.render(h,S),D=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const jv=new In,qh=new Is(1,1),Yv=new Ov,Zv=new zM,Kv=new Fv,Y_=[],Z_=[],K_=new Float32Array(16),Q_=new Float32Array(9),J_=new Float32Array(4);function Vs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Y_[l];if(c===void 0&&(c=new Float32Array(l),Y_[l]=c),t!==0){r.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,s[d].toArray(c,p)}return c}function yn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Mn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ou(s,t){let i=Z_[t];i===void 0&&(i=new Int32Array(t),Z_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function yT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function MT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;s.uniform2fv(this.addr,t),Mn(i,t)}}function bT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;s.uniform3fv(this.addr,t),Mn(i,t)}}function ET(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;s.uniform4fv(this.addr,t),Mn(i,t)}}function TT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(yn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,r))return;J_.set(r),s.uniformMatrix2fv(this.addr,!1,J_),Mn(i,r)}}function AT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(yn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,r))return;Q_.set(r),s.uniformMatrix3fv(this.addr,!1,Q_),Mn(i,r)}}function RT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(yn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,r))return;K_.set(r),s.uniformMatrix4fv(this.addr,!1,K_),Mn(i,r)}}function CT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function wT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;s.uniform2iv(this.addr,t),Mn(i,t)}}function DT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;s.uniform3iv(this.addr,t),Mn(i,t)}}function NT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;s.uniform4iv(this.addr,t),Mn(i,t)}}function UT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function LT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;s.uniform2uiv(this.addr,t),Mn(i,t)}}function OT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;s.uniform3uiv(this.addr,t),Mn(i,t)}}function PT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;s.uniform4uiv(this.addr,t),Mn(i,t)}}function zT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(qh.compareFunction=i.isReversedDepthBuffer()?ap:ip,c=qh):c=jv,i.setTexture2D(t||c,l)}function BT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Zv,l)}function IT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Kv,l)}function FT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Yv,l)}function HT(s){switch(s){case 5126:return yT;case 35664:return MT;case 35665:return bT;case 35666:return ET;case 35674:return TT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return wT;case 35668:case 35672:return DT;case 35669:case 35673:return NT;case 5125:return UT;case 36294:return LT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return FT}}function GT(s,t){s.uniform1fv(this.addr,t)}function VT(s,t){const i=Vs(t,this.size,2);s.uniform2fv(this.addr,i)}function kT(s,t){const i=Vs(t,this.size,3);s.uniform3fv(this.addr,i)}function XT(s,t){const i=Vs(t,this.size,4);s.uniform4fv(this.addr,i)}function WT(s,t){const i=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function qT(s,t){const i=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function jT(s,t){const i=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function YT(s,t){s.uniform1iv(this.addr,t)}function ZT(s,t){s.uniform2iv(this.addr,t)}function KT(s,t){s.uniform3iv(this.addr,t)}function QT(s,t){s.uniform4iv(this.addr,t)}function JT(s,t){s.uniform1uiv(this.addr,t)}function $T(s,t){s.uniform2uiv(this.addr,t)}function eA(s,t){s.uniform3uiv(this.addr,t)}function tA(s,t){s.uniform4uiv(this.addr,t)}function nA(s,t,i){const r=this.cache,l=t.length,c=ou(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=qh:d=jv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function iA(s,t,i){const r=this.cache,l=t.length,c=ou(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Zv,c[d])}function aA(s,t,i){const r=this.cache,l=t.length,c=ou(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Kv,c[d])}function rA(s,t,i){const r=this.cache,l=t.length,c=ou(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Yv,c[d])}function sA(s){switch(s){case 5126:return GT;case 35664:return VT;case 35665:return kT;case 35666:return XT;case 35674:return WT;case 35675:return qT;case 35676:return jT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return rA}}class oA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=HT(i.type)}}class lA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sA(i.type)}}class cA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function $_(s,t){s.seq.push(t),s.map[t.id]=t}function uA(s,t,i){const r=s.name,l=r.length;for(Jd.lastIndex=0;;){const c=Jd.exec(r),d=Jd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){$_(i,h===void 0?new oA(p,s,t):new lA(p,s,t));break}else{let x=i.map[p];x===void 0&&(x=new cA(p),$_(i,x)),i=x}}}class qc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);uA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function ev(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const fA=37297;let dA=0;function hA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const tv=new vt;function pA(s){Nt._getMatrix(tv,Nt.workingColorSpace,s);const t=`mat3( ${tv.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(s)){case Kc:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function nv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+hA(s.getShaderSource(t),p)}else return c}function mA(s,t){const i=pA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const gA={[vv]:"Linear",[xv]:"Reinhard",[Sv]:"Cineon",[yv]:"ACESFilmic",[bv]:"AgX",[Ev]:"Neutral",[Mv]:"Custom"};function _A(s,t){const i=gA[t];return i===void 0?(ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new $;function vA(){Nt.getLuminanceCoefficients(Ic);const s=Ic.x.toFixed(4),t=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function SA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function yA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:p}}return i}function Yo(s){return s!==""}function iv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function av(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(s){return s.replace(MA,EA)}const bA=new Map;function EA(s,t){let i=Mt[t];if(i===void 0){const r=bA.get(t);if(r!==void 0)i=Mt[r],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return jh(i)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(s){return s.replace(TA,AA)}function AA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function sv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const RA={[Hc]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function CA(s){return RA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wA={[Br]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function DA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":wA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const NA={[Bs]:"ENVMAP_MODE_REFRACTION"};function UA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":NA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LA={[_v]:"ENVMAP_BLENDING_MULTIPLY",[mM]:"ENVMAP_BLENDING_MIX",[gM]:"ENVMAP_BLENDING_ADD"};function OA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":LA[s.combine]||"ENVMAP_BLENDING_NONE"}function PA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function zA(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=CA(i),h=DA(i),S=UA(i),x=OA(i),g=PA(i),b=xA(i),T=SA(c),D=l.createProgram();let y,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),v.length>0&&(v+=`
`)):(y=[sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),v=[sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?Mt.tonemapping_pars_fragment:"",i.toneMapping!==Xi?_A("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,mA("linearToOutputTexel",i.outputColorSpace),vA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),d=jh(d),d=iv(d,i),d=av(d,i),p=jh(p),p=iv(p,i),p=av(p,i),d=rv(d),p=rv(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===d_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===d_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=w+y+d,N=w+v+p,k=ev(l,l.VERTEX_SHADER,L),U=ev(l,l.FRAGMENT_SHADER,N);l.attachShader(D,k),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function I(F){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(D)||"",ce=l.getShaderInfoLog(k)||"",pe=l.getShaderInfoLog(U)||"",q=j.trim(),O=ce.trim(),H=pe.trim();let ee=!0,ve=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,D,k,U);else{const Ee=nv(l,k,"vertex"),P=nv(l,U,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+Ee+`
`+P)}else q!==""?ht("WebGLProgram: Program Info Log:",q):(O===""||H==="")&&(ve=!1);ve&&(F.diagnostics={runnable:ee,programLog:q,vertexShader:{log:O,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(k),l.deleteShader(U),E=new qc(l,D),B=yA(l,D)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let B;this.getAttributes=function(){return B===void 0&&I(this),B};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(D,fA)),K},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dA++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=k,this.fragmentShader=U,this}let BA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new FA(t),i.set(t,r)),r}}class FA{constructor(t){this.id=BA++,this.code=t,this.usedTimes=0}}function HA(s){return s===Ir||s===jc||s===Yc}function GA(s,t,i,r,l,c){const d=new sp,p=new IA,m=new Set,h=[],S=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function D(E,B,K,F,j,ce){const pe=F.fog,q=j.geometry,O=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ee=t.get(E.envMap||O,H),ve=ee&&ee.mapping===iu?ee.image.height:null,Ee=b[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ht("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const P=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,J=P!==void 0?P.length:0;let Te=0;q.morphAttributes.position!==void 0&&(Te=1),q.morphAttributes.normal!==void 0&&(Te=2),q.morphAttributes.color!==void 0&&(Te=3);let Ne,Oe,le,Ae;if(Ee){const pt=Gi[Ee];Ne=pt.vertexShader,Oe=pt.fragmentShader}else Ne=E.vertexShader,Oe=E.fragmentShader,p.update(E),le=p.getVertexShaderID(E),Ae=p.getFragmentShaderID(E);const De=s.getRenderTarget(),qe=s.state.buffers.depth.getReversed(),ut=j.isInstancedMesh===!0,he=j.isBatchedMesh===!0,Pe=!!E.map,ze=!!E.matcap,He=!!ee,at=!!E.aoMap,Re=!!E.lightMap,Ye=!!E.bumpMap,tt=!!E.normalMap,Qe=!!E.displacementMap,z=!!E.emissiveMap,nt=!!E.metalnessMap,xe=!!E.roughnessMap,je=E.anisotropy>0,ye=E.clearcoat>0,dt=E.dispersion>0,C=E.iridescence>0,M=E.sheen>0,V=E.transmission>0,ue=je&&!!E.anisotropyMap,_e=ye&&!!E.clearcoatMap,Ce=ye&&!!E.clearcoatNormalMap,Me=ye&&!!E.clearcoatRoughnessMap,re=C&&!!E.iridescenceMap,de=C&&!!E.iridescenceThicknessMap,Le=M&&!!E.sheenColorMap,Ge=M&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,Be=!!E.specularColorMap,mt=!!E.specularIntensityMap,gt=V&&!!E.transmissionMap,Et=V&&!!E.thicknessMap,X=!!E.gradientMap,Ue=!!E.alphaMap,ge=E.alphaTest>0,Xe=!!E.alphaHash,Fe=!!E.extensions;let we=Xi;E.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(we=s.toneMapping);const it={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:Ne,fragmentShader:Oe,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:Ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:he,batchingColor:he&&j._colorsTexture!==null,instancing:ut,instancingColor:ut&&j.instanceColor!==null,instancingMorph:ut&&j.morphTexture!==null,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Pe,matcap:ze,envMap:He,envMapMode:He&&ee.mapping,envMapCubeUVHeight:ve,aoMap:at,lightMap:Re,bumpMap:Ye,normalMap:tt,displacementMap:Qe,emissiveMap:z,normalMapObjectSpace:tt&&E.normalMapType===xM,normalMapTangentSpace:tt&&E.normalMapType===Vh,packedNormalMap:tt&&E.normalMapType===Vh&&HA(E.normalMap.format),metalnessMap:nt,roughnessMap:xe,anisotropy:je,anisotropyMap:ue,clearcoat:ye,clearcoatMap:_e,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Me,dispersion:dt,iridescence:C,iridescenceMap:re,iridescenceThicknessMap:de,sheen:M,sheenColorMap:Le,sheenRoughnessMap:Ge,specularMap:Ie,specularColorMap:Be,specularIntensityMap:mt,transmission:V,transmissionMap:gt,thicknessMap:Et,gradientMap:X,opaque:E.transparent===!1&&E.blending===Os&&E.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ge,alphaHash:Xe,combine:E.combine,mapUv:Pe&&T(E.map.channel),aoMapUv:at&&T(E.aoMap.channel),lightMapUv:Re&&T(E.lightMap.channel),bumpMapUv:Ye&&T(E.bumpMap.channel),normalMapUv:tt&&T(E.normalMap.channel),displacementMapUv:Qe&&T(E.displacementMap.channel),emissiveMapUv:z&&T(E.emissiveMap.channel),metalnessMapUv:nt&&T(E.metalnessMap.channel),roughnessMapUv:xe&&T(E.roughnessMap.channel),anisotropyMapUv:ue&&T(E.anisotropyMap.channel),clearcoatMapUv:_e&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(E.sheenRoughnessMap.channel),specularMapUv:Ie&&T(E.specularMap.channel),specularColorMapUv:Be&&T(E.specularColorMap.channel),specularIntensityMapUv:mt&&T(E.specularIntensityMap.channel),transmissionMapUv:gt&&T(E.transmissionMap.channel),thicknessMapUv:Et&&T(E.thicknessMap.channel),alphaMapUv:Ue&&T(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(tt||je),vertexNormals:!!q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(Pe||Ue),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||q.attributes.normal===void 0&&tt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:qe,skinning:j.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Te,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&Nt.getTransfer(E.map.colorSpace)===qt,decodeVideoTextureEmissive:z&&E.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(E.emissiveMap.colorSpace)===qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ui,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return it.vertexUv1s=m.has(1),it.vertexUv2s=m.has(2),it.vertexUv3s=m.has(3),m.clear(),it}function y(E){const B=[];if(E.shaderID?B.push(E.shaderID):(B.push(E.customVertexShaderID),B.push(E.customFragmentShaderID)),E.defines!==void 0)for(const K in E.defines)B.push(K),B.push(E.defines[K]);return E.isRawShaderMaterial===!1&&(v(B,E),w(B,E),B.push(s.outputColorSpace)),B.push(E.customProgramCacheKey),B.join()}function v(E,B){E.push(B.precision),E.push(B.outputColorSpace),E.push(B.envMapMode),E.push(B.envMapCubeUVHeight),E.push(B.mapUv),E.push(B.alphaMapUv),E.push(B.lightMapUv),E.push(B.aoMapUv),E.push(B.bumpMapUv),E.push(B.normalMapUv),E.push(B.displacementMapUv),E.push(B.emissiveMapUv),E.push(B.metalnessMapUv),E.push(B.roughnessMapUv),E.push(B.anisotropyMapUv),E.push(B.clearcoatMapUv),E.push(B.clearcoatNormalMapUv),E.push(B.clearcoatRoughnessMapUv),E.push(B.iridescenceMapUv),E.push(B.iridescenceThicknessMapUv),E.push(B.sheenColorMapUv),E.push(B.sheenRoughnessMapUv),E.push(B.specularMapUv),E.push(B.specularColorMapUv),E.push(B.specularIntensityMapUv),E.push(B.transmissionMapUv),E.push(B.thicknessMapUv),E.push(B.combine),E.push(B.fogExp2),E.push(B.sizeAttenuation),E.push(B.morphTargetsCount),E.push(B.morphAttributeCount),E.push(B.numDirLights),E.push(B.numPointLights),E.push(B.numSpotLights),E.push(B.numSpotLightMaps),E.push(B.numHemiLights),E.push(B.numRectAreaLights),E.push(B.numDirLightShadows),E.push(B.numPointLightShadows),E.push(B.numSpotLightShadows),E.push(B.numSpotLightShadowsWithMaps),E.push(B.numLightProbes),E.push(B.shadowMapType),E.push(B.toneMapping),E.push(B.numClippingPlanes),E.push(B.numClipIntersection),E.push(B.depthPacking)}function w(E,B){d.disableAll(),B.instancing&&d.enable(0),B.instancingColor&&d.enable(1),B.instancingMorph&&d.enable(2),B.matcap&&d.enable(3),B.envMap&&d.enable(4),B.normalMapObjectSpace&&d.enable(5),B.normalMapTangentSpace&&d.enable(6),B.clearcoat&&d.enable(7),B.iridescence&&d.enable(8),B.alphaTest&&d.enable(9),B.vertexColors&&d.enable(10),B.vertexAlphas&&d.enable(11),B.vertexUv1s&&d.enable(12),B.vertexUv2s&&d.enable(13),B.vertexUv3s&&d.enable(14),B.vertexTangents&&d.enable(15),B.anisotropy&&d.enable(16),B.alphaHash&&d.enable(17),B.batching&&d.enable(18),B.dispersion&&d.enable(19),B.batchingColor&&d.enable(20),B.gradientMap&&d.enable(21),B.packedNormalMap&&d.enable(22),B.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),B.fog&&d.enable(0),B.useFog&&d.enable(1),B.flatShading&&d.enable(2),B.logarithmicDepthBuffer&&d.enable(3),B.reversedDepthBuffer&&d.enable(4),B.skinning&&d.enable(5),B.morphTargets&&d.enable(6),B.morphNormals&&d.enable(7),B.morphColors&&d.enable(8),B.premultipliedAlpha&&d.enable(9),B.shadowMapEnabled&&d.enable(10),B.doubleSided&&d.enable(11),B.flipSided&&d.enable(12),B.useDepthPacking&&d.enable(13),B.dithering&&d.enable(14),B.transmission&&d.enable(15),B.sheen&&d.enable(16),B.opaque&&d.enable(17),B.pointsUvs&&d.enable(18),B.decodeVideoTexture&&d.enable(19),B.decodeVideoTextureEmissive&&d.enable(20),B.alphaToCoverage&&d.enable(21),B.numLightProbeGrids>0&&d.enable(22),E.push(d.mask)}function L(E){const B=b[E.type];let K;if(B){const F=Gi[B];K=s1.clone(F.uniforms)}else K=E.uniforms;return K}function N(E,B){let K=S.get(B);return K!==void 0?++K.usedTimes:(K=new zA(s,B,E,l),h.push(K),S.set(B,K)),K}function k(E){if(--E.usedTimes===0){const B=h.indexOf(E);h[B]=h[h.length-1],h.pop(),S.delete(E.cacheKey),E.destroy()}}function U(E){p.remove(E)}function I(){p.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:L,acquireProgram:N,releaseProgram:k,releaseShaderCache:U,programs:h,dispose:I}}function VA(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function kA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ov(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function lv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,T,D,y,v){let w=s[t];return w===void 0?(w={id:g.id,object:g,geometry:b,material:T,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:y,group:v},s[t]=w):(w.id=g.id,w.object=g,w.geometry=b,w.material=T,w.materialVariant=d(g),w.groupOrder=D,w.renderOrder=g.renderOrder,w.z=y,w.group=v),t++,w}function m(g,b,T,D,y,v){const w=p(g,b,T,D,y,v);T.transmission>0?r.push(w):T.transparent===!0?l.push(w):i.push(w)}function h(g,b,T,D,y,v){const w=p(g,b,T,D,y,v);T.transmission>0?r.unshift(w):T.transparent===!0?l.unshift(w):i.unshift(w)}function S(g,b){i.length>1&&i.sort(g||kA),r.length>1&&r.sort(b||ov),l.length>1&&l.sort(b||ov)}function x(){for(let g=t,b=s.length;g<b;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:x,sort:S}}function XA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new lv,s.set(r,[d])):l>=c.length?(d=new lv,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function WA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new bt};break;case"SpotLight":i={position:new $,direction:new $,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=i,i}}}function qA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let jA=0;function YA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ZA(s){const t=new WA,i=qA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new $);const l=new $,c=new rn,d=new rn;function p(h){let S=0,x=0,g=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let b=0,T=0,D=0,y=0,v=0,w=0,L=0,N=0,k=0,U=0,I=0;h.sort(YA);for(let B=0,K=h.length;B<K;B++){const F=h[B],j=F.color,ce=F.intensity,pe=F.distance;let q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ir?q=F.shadow.map.texture:q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)S+=j.r*ce,x+=j.g*ce,g+=j.b*ce;else if(F.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(F.sh.coefficients[O],ce);I++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const H=F.shadow,ee=i.get(F);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.directionalShadow[b]=ee,r.directionalShadowMap[b]=q,r.directionalShadowMatrix[b]=F.shadow.matrix,w++}r.directional[b]=O,b++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(j).multiplyScalar(ce),O.distance=pe,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,r.spot[D]=O;const H=F.shadow;if(F.map&&(r.spotLightMap[k]=F.map,k++,H.updateMatrices(F),F.castShadow&&U++),r.spotLightMatrix[D]=H.matrix,F.castShadow){const ee=i.get(F);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.spotShadow[D]=ee,r.spotShadowMap[D]=q,N++}D++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(j).multiplyScalar(ce),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=O,y++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const H=F.shadow,ee=i.get(F);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,r.pointShadow[T]=ee,r.pointShadowMap[T]=q,r.pointShadowMatrix[T]=F.shadow.matrix,L++}r.point[T]=O,T++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(ce),O.groundColor.copy(F.groundColor).multiplyScalar(ce),r.hemi[v]=O,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=x,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==b||E.pointLength!==T||E.spotLength!==D||E.rectAreaLength!==y||E.hemiLength!==v||E.numDirectionalShadows!==w||E.numPointShadows!==L||E.numSpotShadows!==N||E.numSpotMaps!==k||E.numLightProbes!==I)&&(r.directional.length=b,r.spot.length=D,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=N+k-U,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=I,E.directionalLength=b,E.pointLength=T,E.spotLength=D,E.rectAreaLength=y,E.hemiLength=v,E.numDirectionalShadows=w,E.numPointShadows=L,E.numSpotShadows=N,E.numSpotMaps=k,E.numLightProbes=I,r.version=jA++)}function m(h,S){let x=0,g=0,b=0,T=0,D=0;const y=S.matrixWorldInverse;for(let v=0,w=h.length;v<w;v++){const L=h[v];if(L.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),x++}else if(L.isSpotLight){const N=r.spot[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),b++}else if(L.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),d.identity(),c.copy(L.matrixWorld),c.premultiply(y),d.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const N=r.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const N=r.hemi[D];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(y),D++}}}return{setup:p,setupView:m,state:r}}function cv(s){const t=new ZA(s),i=[],r=[],l=[];function c(g){x.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){t.setup(i)}function S(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function KA(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new cv(s),t.set(l,[p])):c>=d.length?(p=new cv(s),d.push(p)):p=d[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$A=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],e2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],uv=new rn,qo=new $,$d=new $;function t2(s,t,i){let r=new lp;const l=new Ot,c=new Ot,d=new ln,p=new u1,m=new f1,h={},S=i.maxTextureSize,x={[sr]:Zn,[Zn]:sr,[Ui]:Ui},g=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:QA,fragmentShader:JA}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const T=new bi;T.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Mi(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let v=this.type;this.render=function(U,I,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===gv&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hc);const B=s.getRenderTarget(),K=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),j=s.state;j.setBlending(xa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=v!==this.type;ce&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(q=>q.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,q=U.length;pe<q;pe++){const O=U[pe],H=O.shadow;if(H===void 0){ht("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ee=H.getFrameExtents();l.multiply(ee),c.copy(H.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/ee.x),l.x=c.x*ee.x,H.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/ee.y),l.y=c.y*ee.y,H.mapSize.y=c.y));const ve=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ve,H.map===null||ce===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===jo){if(O.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wi(l.x,l.y,{format:Ir,type:ya,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Is(l.x,l.y,Vi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Ma,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn}else O.isPointLight?(H.map=new qv(l.x),H.map.depthTexture=new i1(l.x,ji)):(H.map=new Wi(l.x,l.y),H.map.depthTexture=new Is(l.x,l.y,ji)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Ma,this.type===Hc?(H.map.depthTexture.compareFunction=ve?ap:ip,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn);H.camera.updateProjectionMatrix()}const Ee=H.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Ee;P++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,P),s.clear();else{P===0&&(s.setRenderTarget(H.map),s.clear());const J=H.getViewport(P);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),j.viewport(d)}if(O.isPointLight){const J=H.camera,Te=H.matrix,Ne=O.distance||J.far;Ne!==J.far&&(J.far=Ne,J.updateProjectionMatrix()),qo.setFromMatrixPosition(O.matrixWorld),J.position.copy(qo),$d.copy(J.position),$d.add($A[P]),J.up.copy(e2[P]),J.lookAt($d),J.updateMatrixWorld(),Te.makeTranslation(-qo.x,-qo.y,-qo.z),uv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(uv,J.coordinateSystem,J.reversedDepth)}else H.updateMatrices(O);r=H.getFrustum(),N(I,E,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===jo&&w(H,E),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(B,K,F)};function w(U,I){const E=t.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,b.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Wi(l.x,l.y,{format:Ir,type:ya})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(I,null,E,g,D,null),b.uniforms.shadow_pass.value=U.mapPass.texture,b.uniforms.resolution.value=U.mapSize,b.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(I,null,E,b,D,null)}function L(U,I,E,B){let K=null;const F=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(F!==void 0)K=F;else if(K=E.isPointLight===!0?m:p,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=K.uuid,ce=I.uuid;let pe=h[j];pe===void 0&&(pe={},h[j]=pe);let q=pe[ce];q===void 0&&(q=K.clone(),pe[ce]=q,I.addEventListener("dispose",k)),K=q}if(K.visible=I.visible,K.wireframe=I.wireframe,B===jo?K.side=I.shadowSide!==null?I.shadowSide:I.side:K.side=I.shadowSide!==null?I.shadowSide:x[I.side],K.alphaMap=I.alphaMap,K.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,K.map=I.map,K.clipShadows=I.clipShadows,K.clippingPlanes=I.clippingPlanes,K.clipIntersection=I.clipIntersection,K.displacementMap=I.displacementMap,K.displacementScale=I.displacementScale,K.displacementBias=I.displacementBias,K.wireframeLinewidth=I.wireframeLinewidth,K.linewidth=I.linewidth,E.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const j=s.properties.get(K);j.light=E}return K}function N(U,I,E,B,K){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&K===jo)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const ce=t.update(U),pe=U.material;if(Array.isArray(pe)){const q=ce.groups;for(let O=0,H=q.length;O<H;O++){const ee=q[O],ve=pe[ee.materialIndex];if(ve&&ve.visible){const Ee=L(U,ve,B,K);U.onBeforeShadow(s,U,I,E,ce,Ee,ee),s.renderBufferDirect(E,null,ce,Ee,U,ee),U.onAfterShadow(s,U,I,E,ce,Ee,ee)}}}else if(pe.visible){const q=L(U,pe,B,K);U.onBeforeShadow(s,U,I,E,ce,q,null),s.renderBufferDirect(E,null,ce,q,U,null),U.onAfterShadow(s,U,I,E,ce,q,null)}}const j=U.children;for(let ce=0,pe=j.length;ce<pe;ce++)N(j[ce],I,E,B,K)}function k(U){U.target.removeEventListener("dispose",k);for(const E in h){const B=h[E],K=U.target.uuid;K in B&&(B[K].dispose(),delete B[K])}}}function n2(s,t){function i(){let X=!1;const Ue=new ln;let ge=null;const Xe=new ln(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!X&&(s.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){X=Fe},setClear:function(Fe,we,it,pt,an){an===!0&&(Fe*=pt,we*=pt,it*=pt),Ue.set(Fe,we,it,pt),Xe.equals(Ue)===!1&&(s.clearColor(Fe,we,it,pt),Xe.copy(Ue))},reset:function(){X=!1,ge=null,Xe.set(-1,0,0,0)}}}function r(){let X=!1,Ue=!1,ge=null,Xe=null,Fe=null;return{setReversed:function(we){if(Ue!==we){const it=t.get("EXT_clip_control");we?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Ue=we;const pt=Fe;Fe=null,this.setClear(pt)}},getReversed:function(){return Ue},setTest:function(we){we?De(s.DEPTH_TEST):qe(s.DEPTH_TEST)},setMask:function(we){ge!==we&&!X&&(s.depthMask(we),ge=we)},setFunc:function(we){if(Ue&&(we=wM[we]),Xe!==we){switch(we){case ah:s.depthFunc(s.NEVER);break;case rh:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case oh:s.depthFunc(s.EQUAL);break;case lh:s.depthFunc(s.GEQUAL);break;case ch:s.depthFunc(s.GREATER);break;case uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Xe=we}},setLocked:function(we){X=we},setClear:function(we){Fe!==we&&(Fe=we,Ue&&(we=1-we),s.clearDepth(we))},reset:function(){X=!1,ge=null,Xe=null,Fe=null,Ue=!1}}}function l(){let X=!1,Ue=null,ge=null,Xe=null,Fe=null,we=null,it=null,pt=null,an=null;return{setTest:function(It){X||(It?De(s.STENCIL_TEST):qe(s.STENCIL_TEST))},setMask:function(It){Ue!==It&&!X&&(s.stencilMask(It),Ue=It)},setFunc:function(It,ci,Kn){(ge!==It||Xe!==ci||Fe!==Kn)&&(s.stencilFunc(It,ci,Kn),ge=It,Xe=ci,Fe=Kn)},setOp:function(It,ci,Kn){(we!==It||it!==ci||pt!==Kn)&&(s.stencilOp(It,ci,Kn),we=It,it=ci,pt=Kn)},setLocked:function(It){X=It},setClear:function(It){an!==It&&(s.clearStencil(It),an=It)},reset:function(){X=!1,Ue=null,ge=null,Xe=null,Fe=null,we=null,it=null,pt=null,an=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let S={},x={},g={},b=new WeakMap,T=[],D=null,y=!1,v=null,w=null,L=null,N=null,k=null,U=null,I=null,E=new bt(0,0,0),B=0,K=!1,F=null,j=null,ce=null,pe=null,q=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const ve=s.getParameter(s.VERSION);ve.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ve)[1]),H=ee>=1):ve.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),H=ee>=2);let Ee=null,P={};const J=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),Ne=new ln().fromArray(J),Oe=new ln().fromArray(Te);function le(X,Ue,ge,Xe){const Fe=new Uint8Array(4),we=s.createTexture();s.bindTexture(X,we),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ge;it++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Xe,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Ue+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return we}const Ae={};Ae[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),De(s.DEPTH_TEST),d.setFunc(zs),Ye(!1),tt(o_),De(s.CULL_FACE),at(xa);function De(X){S[X]!==!0&&(s.enable(X),S[X]=!0)}function qe(X){S[X]!==!1&&(s.disable(X),S[X]=!1)}function ut(X,Ue){return g[X]!==Ue?(s.bindFramebuffer(X,Ue),g[X]=Ue,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ue),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function he(X,Ue){let ge=T,Xe=!1;if(X){ge=b.get(Ue),ge===void 0&&(ge=[],b.set(Ue,ge));const Fe=X.textures;if(ge.length!==Fe.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let we=0,it=Fe.length;we<it;we++)ge[we]=s.COLOR_ATTACHMENT0+we;ge.length=Fe.length,Xe=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Xe=!0);Xe&&s.drawBuffers(ge)}function Pe(X){return D!==X?(s.useProgram(X),D=X,!0):!1}const ze={[Lr]:s.FUNC_ADD,[Jy]:s.FUNC_SUBTRACT,[$y]:s.FUNC_REVERSE_SUBTRACT};ze[eM]=s.MIN,ze[tM]=s.MAX;const He={[nM]:s.ZERO,[iM]:s.ONE,[aM]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[uM]:s.SRC_ALPHA_SATURATE,[lM]:s.DST_COLOR,[sM]:s.DST_ALPHA,[rM]:s.ONE_MINUS_SRC_COLOR,[ih]:s.ONE_MINUS_SRC_ALPHA,[cM]:s.ONE_MINUS_DST_COLOR,[oM]:s.ONE_MINUS_DST_ALPHA,[fM]:s.CONSTANT_COLOR,[dM]:s.ONE_MINUS_CONSTANT_COLOR,[hM]:s.CONSTANT_ALPHA,[pM]:s.ONE_MINUS_CONSTANT_ALPHA};function at(X,Ue,ge,Xe,Fe,we,it,pt,an,It){if(X===xa){y===!0&&(qe(s.BLEND),y=!1);return}if(y===!1&&(De(s.BLEND),y=!0),X!==Qy){if(X!==v||It!==K){if((w!==Lr||k!==Lr)&&(s.blendEquation(s.FUNC_ADD),w=Lr,k=Lr),It)switch(X){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case th:s.blendFunc(s.ONE,s.ONE);break;case l_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case c_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Lt("WebGLState: Invalid blending: ",X);break}else switch(X){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case th:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case l_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case c_:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",X);break}L=null,N=null,U=null,I=null,E.set(0,0,0),B=0,v=X,K=It}return}Fe=Fe||Ue,we=we||ge,it=it||Xe,(Ue!==w||Fe!==k)&&(s.blendEquationSeparate(ze[Ue],ze[Fe]),w=Ue,k=Fe),(ge!==L||Xe!==N||we!==U||it!==I)&&(s.blendFuncSeparate(He[ge],He[Xe],He[we],He[it]),L=ge,N=Xe,U=we,I=it),(pt.equals(E)===!1||an!==B)&&(s.blendColor(pt.r,pt.g,pt.b,an),E.copy(pt),B=an),v=X,K=!1}function Re(X,Ue){X.side===Ui?qe(s.CULL_FACE):De(s.CULL_FACE);let ge=X.side===Zn;Ue&&(ge=!ge),Ye(ge),X.blending===Os&&X.transparent===!1?at(xa):at(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Xe=X.stencilWrite;p.setTest(Xe),Xe&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),z(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?De(s.SAMPLE_ALPHA_TO_COVERAGE):qe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(X){F!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),F=X)}function tt(X){X!==Zy?(De(s.CULL_FACE),X!==j&&(X===o_?s.cullFace(s.BACK):X===Ky?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qe(s.CULL_FACE),j=X}function Qe(X){X!==ce&&(H&&s.lineWidth(X),ce=X)}function z(X,Ue,ge){X?(De(s.POLYGON_OFFSET_FILL),(pe!==Ue||q!==ge)&&(pe=Ue,q=ge,d.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,ge))):qe(s.POLYGON_OFFSET_FILL)}function nt(X){X?De(s.SCISSOR_TEST):qe(s.SCISSOR_TEST)}function xe(X){X===void 0&&(X=s.TEXTURE0+O-1),Ee!==X&&(s.activeTexture(X),Ee=X)}function je(X,Ue,ge){ge===void 0&&(Ee===null?ge=s.TEXTURE0+O-1:ge=Ee);let Xe=P[ge];Xe===void 0&&(Xe={type:void 0,texture:void 0},P[ge]=Xe),(Xe.type!==X||Xe.texture!==Ue)&&(Ee!==ge&&(s.activeTexture(ge),Ee=ge),s.bindTexture(X,Ue||Ae[X]),Xe.type=X,Xe.texture=Ue)}function ye(){const X=P[Ee];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function dt(){try{s.compressedTexImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function M(){try{s.texSubImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function V(){try{s.texSubImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Ce(){try{s.texStorage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Me(){try{s.texStorage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function re(){try{s.texImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function de(){try{s.texImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Le(X){return x[X]!==void 0?x[X]:s.getParameter(X)}function Ge(X,Ue){x[X]!==Ue&&(s.pixelStorei(X,Ue),x[X]=Ue)}function Ie(X){Ne.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ne.copy(X))}function Be(X){Oe.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Oe.copy(X))}function mt(X,Ue){let ge=h.get(Ue);ge===void 0&&(ge=new WeakMap,h.set(Ue,ge));let Xe=ge.get(X);Xe===void 0&&(Xe=s.getUniformBlockIndex(Ue,X.name),ge.set(X,Xe))}function gt(X,Ue){const Xe=h.get(Ue).get(X);m.get(Ue)!==Xe&&(s.uniformBlockBinding(Ue,Xe,X.__bindingPointIndex),m.set(Ue,Xe))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),S={},x={},Ee=null,P={},g={},b=new WeakMap,T=[],D=null,y=!1,v=null,w=null,L=null,N=null,k=null,U=null,I=null,E=new bt(0,0,0),B=0,K=!1,F=null,j=null,ce=null,pe=null,q=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:De,disable:qe,bindFramebuffer:ut,drawBuffers:he,useProgram:Pe,setBlending:at,setMaterial:Re,setFlipSided:Ye,setCullFace:tt,setLineWidth:Qe,setPolygonOffset:z,setScissorTest:nt,activeTexture:xe,bindTexture:je,unbindTexture:ye,compressedTexImage2D:dt,compressedTexImage3D:C,texImage2D:re,texImage3D:de,pixelStorei:Ge,getParameter:Le,updateUBOMapping:mt,uniformBlockBinding:gt,texStorage2D:Ce,texStorage3D:Me,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Ie,viewport:Be,reset:Et}}function i2(s,t,i,r,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,S=new WeakMap,x=new Set;let g;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(C,M){return T?new OffscreenCanvas(C,M):Qc("canvas")}function y(C,M,V){let ue=1;const _e=dt(C);if((_e.width>V||_e.height>V)&&(ue=V/Math.max(_e.width,_e.height)),ue<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ce=Math.floor(ue*_e.width),Me=Math.floor(ue*_e.height);g===void 0&&(g=D(Ce,Me));const re=M?D(Ce,Me):g;return re.width=Ce,re.height=Me,re.getContext("2d").drawImage(C,0,0,Ce,Me),ht("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Ce+"x"+Me+")."),re}else return"data"in C&&ht("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),C;return C}function v(C){return C.generateMipmaps}function w(C){s.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(C,M,V,ue,_e,Ce=!1){if(C!==null){if(s[C]!==void 0)return s[C];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Me;ue&&(Me=t.get("EXT_texture_norm16"),Me||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=M;if(M===s.RED&&(V===s.FLOAT&&(re=s.R32F),V===s.HALF_FLOAT&&(re=s.R16F),V===s.UNSIGNED_BYTE&&(re=s.R8),V===s.UNSIGNED_SHORT&&Me&&(re=Me.R16_EXT),V===s.SHORT&&Me&&(re=Me.R16_SNORM_EXT)),M===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(re=s.R8UI),V===s.UNSIGNED_SHORT&&(re=s.R16UI),V===s.UNSIGNED_INT&&(re=s.R32UI),V===s.BYTE&&(re=s.R8I),V===s.SHORT&&(re=s.R16I),V===s.INT&&(re=s.R32I)),M===s.RG&&(V===s.FLOAT&&(re=s.RG32F),V===s.HALF_FLOAT&&(re=s.RG16F),V===s.UNSIGNED_BYTE&&(re=s.RG8),V===s.UNSIGNED_SHORT&&Me&&(re=Me.RG16_EXT),V===s.SHORT&&Me&&(re=Me.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(re=s.RG8UI),V===s.UNSIGNED_SHORT&&(re=s.RG16UI),V===s.UNSIGNED_INT&&(re=s.RG32UI),V===s.BYTE&&(re=s.RG8I),V===s.SHORT&&(re=s.RG16I),V===s.INT&&(re=s.RG32I)),M===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(re=s.RGB8UI),V===s.UNSIGNED_SHORT&&(re=s.RGB16UI),V===s.UNSIGNED_INT&&(re=s.RGB32UI),V===s.BYTE&&(re=s.RGB8I),V===s.SHORT&&(re=s.RGB16I),V===s.INT&&(re=s.RGB32I)),M===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),V===s.UNSIGNED_INT&&(re=s.RGBA32UI),V===s.BYTE&&(re=s.RGBA8I),V===s.SHORT&&(re=s.RGBA16I),V===s.INT&&(re=s.RGBA32I)),M===s.RGB&&(V===s.UNSIGNED_SHORT&&Me&&(re=Me.RGB16_EXT),V===s.SHORT&&Me&&(re=Me.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(re=s.R11F_G11F_B10F)),M===s.RGBA){const de=Ce?Kc:Nt.getTransfer(_e);V===s.FLOAT&&(re=s.RGBA32F),V===s.HALF_FLOAT&&(re=s.RGBA16F),V===s.UNSIGNED_BYTE&&(re=de===qt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&Me&&(re=Me.RGBA16_EXT),V===s.SHORT&&Me&&(re=Me.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&t.get("EXT_color_buffer_float"),re}function k(C,M){let V;return C?M===null||M===ji||M===Qo?V=s.DEPTH24_STENCIL8:M===Vi?V=s.DEPTH32F_STENCIL8:M===Ko&&(V=s.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ji||M===Qo?V=s.DEPTH_COMPONENT24:M===Vi?V=s.DEPTH_COMPONENT32F:M===Ko&&(V=s.DEPTH_COMPONENT16),V}function U(C,M){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){const M=C.target;M.removeEventListener("dispose",I),B(M),M.isVideoTexture&&S.delete(M),M.isHTMLTexture&&x.delete(M)}function E(C){const M=C.target;M.removeEventListener("dispose",E),F(M)}function B(C){const M=r.get(C);if(M.__webglInit===void 0)return;const V=C.source,ue=b.get(V);if(ue){const _e=ue[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&K(C),Object.keys(ue).length===0&&b.delete(V)}r.remove(C)}function K(C){const M=r.get(C);s.deleteTexture(M.__webglTexture);const V=C.source,ue=b.get(V);delete ue[M.__cacheKey],d.memory.textures--}function F(C){const M=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(M.__webglFramebuffer[ue]))for(let _e=0;_e<M.__webglFramebuffer[ue].length;_e++)s.deleteFramebuffer(M.__webglFramebuffer[ue][_e]);else s.deleteFramebuffer(M.__webglFramebuffer[ue]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ue])}else{if(Array.isArray(M.__webglFramebuffer))for(let ue=0;ue<M.__webglFramebuffer.length;ue++)s.deleteFramebuffer(M.__webglFramebuffer[ue]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ue=0;ue<M.__webglColorRenderbuffer.length;ue++)M.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ue]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let ue=0,_e=V.length;ue<_e;ue++){const Ce=r.get(V[ue]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),d.memory.textures--),r.remove(V[ue])}r.remove(C)}let j=0;function ce(){j=0}function pe(){return j}function q(C){j=C}function O(){const C=j;return C>=l.maxTextures&&ht("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),j+=1,C}function H(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ee(C,M){const V=r.get(C);if(C.isVideoTexture&&je(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const ue=C.image;if(ue===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+M)}function ve(C,M){const V=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){qe(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+M)}function Ee(C,M){const V=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){qe(V,C,M);return}i.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+M)}function P(C,M){const V=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){ut(V,C,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+M)}const J={[Zo]:s.REPEAT,[va]:s.CLAMP_TO_EDGE,[fh]:s.MIRRORED_REPEAT},Te={[Sn]:s.NEAREST,[_M]:s.NEAREST_MIPMAP_NEAREST,[fc]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[yd]:s.LINEAR_MIPMAP_NEAREST,[Pr]:s.LINEAR_MIPMAP_LINEAR},Ne={[SM]:s.NEVER,[TM]:s.ALWAYS,[yM]:s.LESS,[ip]:s.LEQUAL,[MM]:s.EQUAL,[ap]:s.GEQUAL,[bM]:s.GREATER,[EM]:s.NOTEQUAL};function Oe(C,M){if(M.type===Vi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===yd||M.magFilter===fc||M.magFilter===Pr||M.minFilter===Bn||M.minFilter===yd||M.minFilter===fc||M.minFilter===Pr)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Te[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Te[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==fc&&M.minFilter!==Pr||M.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function le(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));const ue=M.source;let _e=b.get(ue);_e===void 0&&(_e={},b.set(ue,_e));const Ce=H(M);if(Ce!==C.__cacheKey){_e[Ce]===void 0&&(_e[Ce]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,V=!0),_e[Ce].usedTimes++;const Me=_e[C.__cacheKey];Me!==void 0&&(_e[C.__cacheKey].usedTimes--,Me.usedTimes===0&&K(M)),C.__cacheKey=Ce,C.__webglTexture=_e[Ce].texture}return V}function Ae(C,M,V){return Math.floor(Math.floor(C/V)/M)}function De(C,M,V,ue){const Ce=C.updateRanges;if(Ce.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,V,ue,M.data);else{Ce.sort((Ge,Ie)=>Ge.start-Ie.start);let Me=0;for(let Ge=1;Ge<Ce.length;Ge++){const Ie=Ce[Me],Be=Ce[Ge],mt=Ie.start+Ie.count,gt=Ae(Be.start,M.width,4),Et=Ae(Ie.start,M.width,4);Be.start<=mt+1&&gt===Et&&Ae(Be.start+Be.count-1,M.width,4)===gt?Ie.count=Math.max(Ie.count,Be.start+Be.count-Ie.start):(++Me,Ce[Me]=Be)}Ce.length=Me+1;const re=i.getParameter(s.UNPACK_ROW_LENGTH),de=i.getParameter(s.UNPACK_SKIP_PIXELS),Le=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ge=0,Ie=Ce.length;Ge<Ie;Ge++){const Be=Ce[Ge],mt=Math.floor(Be.start/4),gt=Math.ceil(Be.count/4),Et=mt%M.width,X=Math.floor(mt/M.width),Ue=gt,ge=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,Et,X,Ue,ge,V,ue,M.data)}C.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,re),i.pixelStorei(s.UNPACK_SKIP_PIXELS,de),i.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function qe(C,M,V){let ue=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ue=s.TEXTURE_3D);const _e=le(C,M),Ce=M.source;i.bindTexture(ue,C.__webglTexture,s.TEXTURE0+V);const Me=r.get(Ce);if(Ce.version!==Me.__version||_e===!0){if(i.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ge=Nt.getPrimaries(Nt.workingColorSpace),Xe=M.colorSpace===ar?null:Nt.getPrimaries(M.colorSpace),Fe=M.colorSpace===ar||ge===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let de=y(M.image,!1,l.maxTextureSize);de=ye(M,de);const Le=c.convert(M.format,M.colorSpace),Ge=c.convert(M.type);let Ie=N(M.internalFormat,Le,Ge,M.normalized,M.colorSpace,M.isVideoTexture);Oe(ue,M);let Be;const mt=M.mipmaps,gt=M.isVideoTexture!==!0,Et=Me.__version===void 0||_e===!0,X=Ce.dataReady,Ue=U(M,de);if(M.isDepthTexture)Ie=k(M.format===zr,M.type),Et&&(gt?i.texStorage2D(s.TEXTURE_2D,1,Ie,de.width,de.height):i.texImage2D(s.TEXTURE_2D,0,Ie,de.width,de.height,0,Le,Ge,null));else if(M.isDataTexture)if(mt.length>0){gt&&Et&&i.texStorage2D(s.TEXTURE_2D,Ue,Ie,mt[0].width,mt[0].height);for(let ge=0,Xe=mt.length;ge<Xe;ge++)Be=mt[ge],gt?X&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Be.width,Be.height,Le,Ge,Be.data):i.texImage2D(s.TEXTURE_2D,ge,Ie,Be.width,Be.height,0,Le,Ge,Be.data);M.generateMipmaps=!1}else gt?(Et&&i.texStorage2D(s.TEXTURE_2D,Ue,Ie,de.width,de.height),X&&De(M,de,Le,Ge)):i.texImage2D(s.TEXTURE_2D,0,Ie,de.width,de.height,0,Le,Ge,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){gt&&Et&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ie,mt[0].width,mt[0].height,de.depth);for(let ge=0,Xe=mt.length;ge<Xe;ge++)if(Be=mt[ge],M.format!==Li)if(Le!==null)if(gt){if(X)if(M.layerUpdates.size>0){const Fe=G_(Be.width,Be.height,M.format,M.type);for(const we of M.layerUpdates){const it=Be.data.subarray(we*Fe/Be.data.BYTES_PER_ELEMENT,(we+1)*Fe/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,we,Be.width,Be.height,1,Le,it)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Be.width,Be.height,de.depth,Le,Be.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Be.width,Be.height,de.depth,0,Be.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Be.width,Be.height,de.depth,Le,Ge,Be.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Be.width,Be.height,de.depth,0,Le,Ge,Be.data)}else{gt&&Et&&i.texStorage2D(s.TEXTURE_2D,Ue,Ie,mt[0].width,mt[0].height);for(let ge=0,Xe=mt.length;ge<Xe;ge++)Be=mt[ge],M.format!==Li?Le!==null?gt?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Be.width,Be.height,Le,Be.data):i.compressedTexImage2D(s.TEXTURE_2D,ge,Ie,Be.width,Be.height,0,Be.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?X&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Be.width,Be.height,Le,Ge,Be.data):i.texImage2D(s.TEXTURE_2D,ge,Ie,Be.width,Be.height,0,Le,Ge,Be.data)}else if(M.isDataArrayTexture)if(gt){if(Et&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ie,de.width,de.height,de.depth),X)if(M.layerUpdates.size>0){const ge=G_(de.width,de.height,M.format,M.type);for(const Xe of M.layerUpdates){const Fe=de.data.subarray(Xe*ge/de.data.BYTES_PER_ELEMENT,(Xe+1)*ge/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xe,de.width,de.height,1,Le,Ge,Fe)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Le,Ge,de.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,Le,Ge,de.data);else if(M.isData3DTexture)gt?(Et&&i.texStorage3D(s.TEXTURE_3D,Ue,Ie,de.width,de.height,de.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Le,Ge,de.data)):i.texImage3D(s.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,Le,Ge,de.data);else if(M.isFramebufferTexture){if(Et)if(gt)i.texStorage2D(s.TEXTURE_2D,Ue,Ie,de.width,de.height);else{let ge=de.width,Xe=de.height;for(let Fe=0;Fe<Ue;Fe++)i.texImage2D(s.TEXTURE_2D,Fe,Ie,ge,Xe,0,Le,Ge,null),ge>>=1,Xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),de.parentNode!==ge){ge.appendChild(de),x.add(M),ge.onpaint=pt=>{const an=pt.changedElements;for(const It of x)an.includes(It.image)&&(It.needsUpdate=!0)},ge.requestPaint();return}const Xe=0,Fe=s.RGBA,we=s.RGBA,it=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Xe,Fe,we,it,de),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(mt.length>0){if(gt&&Et){const ge=dt(mt[0]);i.texStorage2D(s.TEXTURE_2D,Ue,Ie,ge.width,ge.height)}for(let ge=0,Xe=mt.length;ge<Xe;ge++)Be=mt[ge],gt?X&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le,Ge,Be):i.texImage2D(s.TEXTURE_2D,ge,Ie,Le,Ge,Be);M.generateMipmaps=!1}else if(gt){if(Et){const ge=dt(de);i.texStorage2D(s.TEXTURE_2D,Ue,Ie,ge.width,ge.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,Ge,de)}else i.texImage2D(s.TEXTURE_2D,0,Ie,Le,Ge,de);v(M)&&w(ue),Me.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ut(C,M,V){if(M.image.length!==6)return;const ue=le(C,M),_e=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);const Ce=r.get(_e);if(_e.version!==Ce.__version||ue===!0){i.activeTexture(s.TEXTURE0+V);const Me=Nt.getPrimaries(Nt.workingColorSpace),re=M.colorSpace===ar?null:Nt.getPrimaries(M.colorSpace),de=M.colorSpace===ar||Me===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,Ie=[];for(let we=0;we<6;we++)!Le&&!Ge?Ie[we]=y(M.image[we],!0,l.maxCubemapSize):Ie[we]=Ge?M.image[we].image:M.image[we],Ie[we]=ye(M,Ie[we]);const Be=Ie[0],mt=c.convert(M.format,M.colorSpace),gt=c.convert(M.type),Et=N(M.internalFormat,mt,gt,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,Ue=Ce.__version===void 0||ue===!0,ge=_e.dataReady;let Xe=U(M,Be);Oe(s.TEXTURE_CUBE_MAP,M);let Fe;if(Le){X&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,Et,Be.width,Be.height);for(let we=0;we<6;we++){Fe=Ie[we].mipmaps;for(let it=0;it<Fe.length;it++){const pt=Fe[it];M.format!==Li?mt!==null?X?ge&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,it,0,0,pt.width,pt.height,mt,pt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,it,Et,pt.width,pt.height,0,pt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,it,0,0,pt.width,pt.height,mt,gt,pt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,it,Et,pt.width,pt.height,0,mt,gt,pt.data)}}}else{if(Fe=M.mipmaps,X&&Ue){Fe.length>0&&Xe++;const we=dt(Ie[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,Et,we.width,we.height)}for(let we=0;we<6;we++)if(Ge){X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ie[we].width,Ie[we].height,mt,gt,Ie[we].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Et,Ie[we].width,Ie[we].height,0,mt,gt,Ie[we].data);for(let it=0;it<Fe.length;it++){const an=Fe[it].image[we].image;X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,it+1,0,0,an.width,an.height,mt,gt,an.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,it+1,Et,an.width,an.height,0,mt,gt,an.data)}}else{X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,mt,gt,Ie[we]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Et,mt,gt,Ie[we]);for(let it=0;it<Fe.length;it++){const pt=Fe[it];X?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,it+1,0,0,mt,gt,pt.image[we]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,it+1,Et,mt,gt,pt.image[we])}}}v(M)&&w(s.TEXTURE_CUBE_MAP),Ce.__version=_e.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function he(C,M,V,ue,_e,Ce){const Me=c.convert(V.format,V.colorSpace),re=c.convert(V.type),de=N(V.internalFormat,Me,re,V.normalized,V.colorSpace),Le=r.get(M),Ge=r.get(V);if(Ge.__renderTarget=M,!Le.__hasExternalTextures){const Ie=Math.max(1,M.width>>Ce),Be=Math.max(1,M.height>>Ce);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?i.texImage3D(_e,Ce,de,Ie,Be,M.depth,0,Me,re,null):i.texImage2D(_e,Ce,de,Ie,Be,0,Me,re,null)}i.bindFramebuffer(s.FRAMEBUFFER,C),xe(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,_e,Ge.__webglTexture,0,nt(M)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,_e,Ge.__webglTexture,Ce),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(C,M,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const ue=M.depthTexture,_e=ue&&ue.isDepthTexture?ue.type:null,Ce=k(M.stencilBuffer,_e),Me=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xe(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt(M),Ce,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt(M),Ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,C)}else{const ue=M.textures;for(let _e=0;_e<ue.length;_e++){const Ce=ue[_e],Me=c.convert(Ce.format,Ce.colorSpace),re=c.convert(Ce.type),de=N(Ce.internalFormat,Me,re,Ce.normalized,Ce.colorSpace);xe(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt(M),de,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt(M),de,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,de,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ze(C,M,V){const ue=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(M.depthTexture);if(_e.__renderTarget=M,(!_e.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ue){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),_e.__webglTexture===void 0){_e.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,M.depthTexture);const Le=c.convert(M.depthTexture.format),Ge=c.convert(M.depthTexture.type);let Ie;M.depthTexture.format===Ma?Ie=s.DEPTH_COMPONENT24:M.depthTexture.format===zr&&(Ie=s.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ie,M.width,M.height,0,Le,Ge,null)}}else ee(M.depthTexture,0);const Ce=_e.__webglTexture,Me=nt(M),re=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,de=M.depthTexture.format===zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ma)xe(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,re,Ce,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,de,re,Ce,0);else if(M.depthTexture.format===zr)xe(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,re,Ce,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,de,re,Ce,0);else throw new Error("Unknown depthTexture format")}function He(C){const M=r.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const ue=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ue){const _e=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ue.removeEventListener("dispose",_e)};ue.addEventListener("dispose",_e),M.__depthDisposeCallback=_e}M.__boundDepthTexture=ue}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let ue=0;ue<6;ue++)ze(M.__webglFramebuffer[ue],C,ue);else{const ue=C.texture.mipmaps;ue&&ue.length>0?ze(M.__webglFramebuffer[0],C,0):ze(M.__webglFramebuffer,C,0)}else if(V){M.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ue]),M.__webglDepthbuffer[ue]===void 0)M.__webglDepthbuffer[ue]=s.createRenderbuffer(),Pe(M.__webglDepthbuffer[ue],C,!1);else{const _e=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Ce)}}else{const ue=C.texture.mipmaps;if(ue&&ue.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Pe(M.__webglDepthbuffer,C,!1);else{const _e=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Ce)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function at(C,M,V){const ue=r.get(C);M!==void 0&&he(ue.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&He(C)}function Re(C){const M=C.texture,V=r.get(C),ue=r.get(M);C.addEventListener("dispose",E);const _e=C.textures,Ce=C.isWebGLCubeRenderTarget===!0,Me=_e.length>1;if(Me||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=M.version,d.memory.textures++),Ce){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let de=0;de<M.mipmaps.length;de++)V.__webglFramebuffer[re][de]=s.createFramebuffer()}else V.__webglFramebuffer[re]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)V.__webglFramebuffer[re]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Me)for(let re=0,de=_e.length;re<de;re++){const Le=r.get(_e[re]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),d.memory.textures++)}if(C.samples>0&&xe(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<_e.length;re++){const de=_e[re];V.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[re]);const Le=c.convert(de.format,de.colorSpace),Ge=c.convert(de.type),Ie=N(de.internalFormat,Le,Ge,de.normalized,de.colorSpace,C.isXRRenderTarget===!0),Be=nt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Ie,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,V.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(V.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)he(V.__webglFramebuffer[re][de],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else he(V.__webglFramebuffer[re],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);v(M)&&w(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Me){for(let re=0,de=_e.length;re<de;re++){const Le=_e[re],Ge=r.get(Le);let Ie=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ie=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ie,Ge.__webglTexture),Oe(Ie,Le),he(V.__webglFramebuffer,C,Le,s.COLOR_ATTACHMENT0+re,Ie,0),v(Le)&&w(Ie)}i.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(re,ue.__webglTexture),Oe(re,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)he(V.__webglFramebuffer[de],C,M,s.COLOR_ATTACHMENT0,re,de);else he(V.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,re,0);v(M)&&w(re),i.unbindTexture()}C.depthBuffer&&He(C)}function Ye(C){const M=C.textures;for(let V=0,ue=M.length;V<ue;V++){const _e=M[V];if(v(_e)){const Ce=L(C),Me=r.get(_e).__webglTexture;i.bindTexture(Ce,Me),w(Ce),i.unbindTexture()}}}const tt=[],Qe=[];function z(C){if(C.samples>0){if(xe(C)===!1){const M=C.textures,V=C.width,ue=C.height;let _e=s.COLOR_BUFFER_BIT;const Ce=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=r.get(C),re=M.length>1;if(re)for(let Le=0;Le<M.length;Le++)i.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const de=C.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const Ge=r.get(M[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,V,ue,0,0,V,ue,_e,s.NEAREST),m===!0&&(tt.length=0,Qe.length=0,tt.push(s.COLOR_ATTACHMENT0+Le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(tt.push(Ce),Qe.push(Ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Le=0;Le<M.length;Le++){i.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const Ge=r.get(M[Le]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,Ge,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function nt(C){return Math.min(l.maxSamples,C.samples)}function xe(C){const M=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function je(C){const M=d.render.frame;S.get(C)!==M&&(S.set(C,M),C.update())}function ye(C,M){const V=C.colorSpace,ue=C.format,_e=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Zc&&V!==ar&&(Nt.getTransfer(V)===qt?(ue!==Li||_e!==li)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",V)),M}function dt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=ce,this.getTextureUnits=pe,this.setTextureUnits=q,this.setTexture2D=ee,this.setTexture2DArray=ve,this.setTexture3D=Ee,this.setTextureCube=P,this.rebindTextures=at,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=he,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function a2(s,t){function i(r,l=ar){let c;const d=Nt.getTransfer(l);if(r===li)return s.UNSIGNED_BYTE;if(r===Jh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===wv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Av)return s.BYTE;if(r===Rv)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===Qh)return s.INT;if(r===ji)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===ya)return s.HALF_FLOAT;if(r===Dv)return s.ALPHA;if(r===Nv)return s.RGB;if(r===Li)return s.RGBA;if(r===Ma)return s.DEPTH_COMPONENT;if(r===zr)return s.DEPTH_STENCIL;if(r===Uv)return s.RED;if(r===ep)return s.RED_INTEGER;if(r===Ir)return s.RG;if(r===tp)return s.RG_INTEGER;if(r===np)return s.RGBA_INTEGER;if(r===Gc||r===Vc||r===kc||r===Xc)if(d===qt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dh||r===hh||r===ph||r===mh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===dh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ph)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gh||r===_h||r===vh||r===xh||r===Sh||r===jc||r===yh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===gh||r===_h)return d===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===vh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===xh)return c.COMPRESSED_R11_EAC;if(r===Sh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===jc)return c.COMPRESSED_RG11_EAC;if(r===yh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Mh||r===bh||r===Eh||r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Nh||r===Uh||r===Lh||r===Oh||r===Ph)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Mh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Th)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ch)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ph)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zh||r===Bh||r===Ih)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===zh)return d===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ih)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fh||r===Hh||r===Yc||r===Gh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Fh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const r2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Hv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Yi({vertexShader:r2,fragmentShader:s2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new ru(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l2 extends Hr{constructor(t,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,S=null,x=null,g=null,b=null,T=null;const D=typeof XRWebGLBinding<"u",y=new o2,v={},w=i.getContextAttributes();let L=null,N=null;const k=[],U=[],I=new Ot;let E=null;const B=new Si;B.viewport=new ln;const K=new Si;K.viewport=new ln;const F=[B,K],j=new _1;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Ae=k[le];return Ae===void 0&&(Ae=new Cd,k[le]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(le){let Ae=k[le];return Ae===void 0&&(Ae=new Cd,k[le]=Ae),Ae.getGripSpace()},this.getHand=function(le){let Ae=k[le];return Ae===void 0&&(Ae=new Cd,k[le]=Ae),Ae.getHandSpace()};function q(le){const Ae=U.indexOf(le.inputSource);if(Ae===-1)return;const De=k[Ae];De!==void 0&&(De.update(le.inputSource,le.frame,h||d),De.dispatchEvent({type:le.type,data:le.inputSource}))}function O(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let le=0;le<k.length;le++){const Ae=U[le];Ae!==null&&(U[le]=null,k[le].disconnect(Ae))}ce=null,pe=null,y.reset();for(const le in v)delete v[le];t.setRenderTarget(L),b=null,g=null,x=null,l=null,N=null,Oe.stop(),r.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){c=le,r.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){p=le,r.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(le){h=le},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(le){if(l=le,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,qe=null,ut=null;w.depth&&(ut=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=w.stencil?zr:Ma,qe=w.stencil?Qo:ji);const he={colorFormat:i.RGBA8,depthFormat:ut,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(he),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Wi(g.textureWidth,g.textureHeight,{format:Li,type:li,depthTexture:new Is(g.textureWidth,g.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const De={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new Wi(b.framebufferWidth,b.framebufferHeight,{format:Li,type:li,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(le){for(let Ae=0;Ae<le.removed.length;Ae++){const De=le.removed[Ae],qe=U.indexOf(De);qe>=0&&(U[qe]=null,k[qe].disconnect(De))}for(let Ae=0;Ae<le.added.length;Ae++){const De=le.added[Ae];let qe=U.indexOf(De);if(qe===-1){for(let he=0;he<k.length;he++)if(he>=U.length){U.push(De),qe=he;break}else if(U[he]===null){U[he]=De,qe=he;break}if(qe===-1)break}const ut=k[qe];ut&&ut.connect(De)}}const ee=new $,ve=new $;function Ee(le,Ae,De){ee.setFromMatrixPosition(Ae.matrixWorld),ve.setFromMatrixPosition(De.matrixWorld);const qe=ee.distanceTo(ve),ut=Ae.projectionMatrix.elements,he=De.projectionMatrix.elements,Pe=ut[14]/(ut[10]-1),ze=ut[14]/(ut[10]+1),He=(ut[9]+1)/ut[5],at=(ut[9]-1)/ut[5],Re=(ut[8]-1)/ut[0],Ye=(he[8]+1)/he[0],tt=Pe*Re,Qe=Pe*Ye,z=qe/(-Re+Ye),nt=z*-Re;if(Ae.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(nt),le.translateZ(z),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ut[10]===-1)le.projectionMatrix.copy(Ae.projectionMatrix),le.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const xe=Pe+z,je=ze+z,ye=tt-nt,dt=Qe+(qe-nt),C=He*ze/je*xe,M=at*ze/je*xe;le.projectionMatrix.makePerspective(ye,dt,C,M,xe,je),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function P(le,Ae){Ae===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Ae.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(l===null)return;let Ae=le.near,De=le.far;y.texture!==null&&(y.depthNear>0&&(Ae=y.depthNear),y.depthFar>0&&(De=y.depthFar)),j.near=K.near=B.near=Ae,j.far=K.far=B.far=De,(ce!==j.near||pe!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),ce=j.near,pe=j.far),j.layers.mask=le.layers.mask|6,B.layers.mask=j.layers.mask&-5,K.layers.mask=j.layers.mask&-3;const qe=le.parent,ut=j.cameras;P(j,qe);for(let he=0;he<ut.length;he++)P(ut[he],qe);ut.length===2?Ee(j,B,K):j.projectionMatrix.copy(B.projectionMatrix),J(le,j,qe)};function J(le,Ae,De){De===null?le.matrix.copy(Ae.matrixWorld):(le.matrix.copy(De.matrixWorld),le.matrix.invert(),le.matrix.multiply(Ae.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Ae.projectionMatrix),le.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Xh*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(le){m=le,g!==null&&(g.fixedFoveation=le),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(le){return v[le]};let Te=null;function Ne(le,Ae){if(S=Ae.getViewerPose(h||d),T=Ae,S!==null){const De=S.views;b!==null&&(t.setRenderTargetFramebuffer(N,b.framebuffer),t.setRenderTarget(N));let qe=!1;De.length!==j.cameras.length&&(j.cameras.length=0,qe=!0);for(let ze=0;ze<De.length;ze++){const He=De[ze];let at=null;if(b!==null)at=b.getViewport(He);else{const Ye=x.getViewSubImage(g,He);at=Ye.viewport,ze===0&&(t.setRenderTargetTextures(N,Ye.colorTexture,Ye.depthStencilTexture),t.setRenderTarget(N))}let Re=F[ze];Re===void 0&&(Re=new Si,Re.layers.enable(ze),Re.viewport=new ln,F[ze]=Re),Re.matrix.fromArray(He.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(He.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(at.x,at.y,at.width,at.height),ze===0&&(j.matrix.copy(Re.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),qe===!0&&j.cameras.push(Re)}const ut=l.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=r.getBinding();const ze=x.getDepthInformation(De[0]);ze&&ze.isValid&&ze.texture&&y.init(ze,l.renderState)}if(ut&&ut.includes("camera-access")&&D){t.state.unbindTexture(),x=r.getBinding();for(let ze=0;ze<De.length;ze++){const He=De[ze].camera;if(He){let at=v[He];at||(at=new Hv,v[He]=at);const Re=x.getCameraImage(He);at.sourceTexture=Re}}}}for(let De=0;De<k.length;De++){const qe=U[De],ut=k[De];qe!==null&&ut!==void 0&&ut.update(qe,Ae,h||d)}Te&&Te(le,Ae),Ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ae}),T=null}const Oe=new Xv;Oe.setAnimationLoop(Ne),this.setAnimationLoop=function(le){Te=le},this.dispose=function(){}}}const c2=new rn,Qv=new vt;Qv.set(-1,0,0,0,1,0,0,0,1);function u2(s,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Gv(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,w,L,N){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(y,v):v.isMeshLambertMaterial?(c(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(y,v),x(y,v)):v.isMeshPhongMaterial?(c(y,v),S(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(y,v),g(y,v),v.isMeshPhysicalMaterial&&b(y,v,N)):v.isMeshMatcapMaterial?(c(y,v),T(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),D(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&p(y,v)):v.isPointsMaterial?m(y,v,w,L):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Zn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Zn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const w=t.get(v),L=w.envMap,N=w.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(c2.makeRotationFromEuler(N)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Qv),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function p(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,w,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*w,y.scale.value=L*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function S(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function b(y,v,w){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function D(y,v){const w=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function f2(s,t,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,L){const N=L.program;r.uniformBlockBinding(w,N)}function h(w,L){let N=l[w.id];N===void 0&&(T(w),N=S(w),l[w.id]=N,w.addEventListener("dispose",y));const k=L.program;r.updateUBOMapping(w,k);const U=t.render.frame;c[w.id]!==U&&(g(w),c[w.id]=U)}function S(w){const L=x();w.__bindingPointIndex=L;const N=s.createBuffer(),k=w.__size,U=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,k,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,N),N}function x(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const L=l[w.id],N=w.uniforms,k=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let U=0,I=N.length;U<I;U++){const E=Array.isArray(N[U])?N[U]:[N[U]];for(let B=0,K=E.length;B<K;B++){const F=E[B];if(b(F,U,B,k)===!0){const j=F.__offset,ce=Array.isArray(F.value)?F.value:[F.value];let pe=0;for(let q=0;q<ce.length;q++){const O=ce[q],H=D(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,j+pe,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):ArrayBuffer.isView(O)?F.__data.set(new O.constructor(O.buffer,O.byteOffset,F.__data.length)):(O.toArray(F.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(w,L,N,k){const U=w.value,I=L+"_"+N;if(k[I]===void 0)return typeof U=="number"||typeof U=="boolean"?k[I]=U:ArrayBuffer.isView(U)?k[I]=U.slice():k[I]=U.clone(),!0;{const E=k[I];if(typeof U=="number"||typeof U=="boolean"){if(E!==U)return k[I]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(E.equals(U)===!1)return E.copy(U),!0}}return!1}function T(w){const L=w.uniforms;let N=0;const k=16;for(let I=0,E=L.length;I<E;I++){const B=Array.isArray(L[I])?L[I]:[L[I]];for(let K=0,F=B.length;K<F;K++){const j=B[K],ce=Array.isArray(j.value)?j.value:[j.value];for(let pe=0,q=ce.length;pe<q;pe++){const O=ce[pe],H=D(O),ee=N%k,ve=ee%H.boundary,Ee=ee+ve;N+=ve,Ee!==0&&k-Ee<H.storage&&(N+=k-Ee),j.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=N,N+=H.storage}}}const U=N%k;return U>0&&(N+=k-U),w.__size=N,w.__cache={},this}function D(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(L.boundary=16,L.storage=w.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",w),L}function y(w){const L=w.target;L.removeEventListener("dispose",y);const N=d.indexOf(L.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const w in l)s.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:m,update:h,dispose:v}}const d2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function h2(){return Hi===null&&(Hi=new KM(d2,16,16,Ir,ya),Hi.name="DFG_LUT",Hi.minFilter=Bn,Hi.magFilter=Bn,Hi.wrapS=va,Hi.wrapT=va,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class p2{constructor(t={}){const{canvas:i=RM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:b=li}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const D=b,y=new Set([np,tp,ep]),v=new Set([li,ji,Ko,Qo,Jh,$h]),w=new Uint32Array(4),L=new Int32Array(4),N=new $;let k=null,U=null;const I=[],E=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let F=!1,j=null;this._outputColorSpace=xi;let ce=0,pe=0,q=null,O=-1,H=null;const ee=new ln,ve=new ln;let Ee=null;const P=new bt(0);let J=0,Te=i.width,Ne=i.height,Oe=1,le=null,Ae=null;const De=new ln(0,0,Te,Ne),qe=new ln(0,0,Te,Ne);let ut=!1;const he=new lp;let Pe=!1,ze=!1;const He=new rn,at=new $,Re=new ln,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Qe(){return q===null?Oe:1}let z=r;function nt(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kh}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",pt,!1),z===null){const Z="webgl2";if(z=nt(Z,A),z===null)throw nt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Lt("WebGLRenderer: "+A.message),A}let xe,je,ye,dt,C,M,V,ue,_e,Ce,Me,re,de,Le,Ge,Ie,Be,mt,gt,Et,X,Ue,ge;function Xe(){xe=new hT(z),xe.init(),X=new a2(z,xe),je=new rT(z,xe,t,X),ye=new n2(z,xe),je.reversedDepthBuffer&&g&&ye.buffers.depth.setReversed(!0),dt=new gT(z),C=new VA,M=new i2(z,xe,ye,C,je,X,dt),V=new dT(K),ue=new S1(z),Ue=new iT(z,ue),_e=new pT(z,ue,dt,Ue),Ce=new vT(z,_e,ue,Ue,dt),mt=new _T(z,je,M),Ge=new sT(C),Me=new GA(K,V,xe,je,Ue,Ge),re=new u2(K,C),de=new XA,Le=new KA(xe),Be=new nT(K,V,ye,Ce,T,m),Ie=new t2(K,Ce,je),ge=new f2(z,dt,je,ye),gt=new aT(z,xe,dt),Et=new mT(z,xe,dt),dt.programs=Me.programs,K.capabilities=je,K.extensions=xe,K.properties=C,K.renderLists=de,K.shadowMap=Ie,K.state=ye,K.info=dt}Xe(),D!==li&&(B=new ST(D,i.width,i.height,l,c));const Fe=new l2(K,z);this.xr=Fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(A){A!==void 0&&(Oe=A,this.setSize(Te,Ne,!1))},this.getSize=function(A){return A.set(Te,Ne)},this.setSize=function(A,Z,se=!0){if(Fe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=A,Ne=Z,i.width=Math.floor(A*Oe),i.height=Math.floor(Z*Oe),se===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(Te*Oe,Ne*Oe).floor()},this.setDrawingBufferSize=function(A,Z,se){Te=A,Ne=Z,Oe=se,i.width=Math.floor(A*se),i.height=Math.floor(Z*se),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(D===li){Lt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(De)},this.setViewport=function(A,Z,se,ie){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,Z,se,ie),ye.viewport(ee.copy(De).multiplyScalar(Oe).round())},this.getScissor=function(A){return A.copy(qe)},this.setScissor=function(A,Z,se,ie){A.isVector4?qe.set(A.x,A.y,A.z,A.w):qe.set(A,Z,se,ie),ye.scissor(ve.copy(qe).multiplyScalar(Oe).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){ye.setScissorTest(ut=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){Ae=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,se=!0){let ie=0;if(A){let ae=!1;if(q!==null){const ke=q.texture.format;ae=y.has(ke)}if(ae){const ke=q.texture.type,Ke=v.has(ke),Ve=Be.getClearColor(),$e=Be.getClearAlpha(),Je=Ve.r,ot=Ve.g,xt=Ve.b;Ke?(w[0]=Je,w[1]=ot,w[2]=xt,w[3]=$e,z.clearBufferuiv(z.COLOR,0,w)):(L[0]=Je,L[1]=ot,L[2]=xt,L[3]=$e,z.clearBufferiv(z.COLOR,0,L))}else ie|=z.COLOR_BUFFER_BIT}Z&&(ie|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ie|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",pt,!1),Be.dispose(),de.dispose(),Le.dispose(),C.dispose(),V.dispose(),Ce.dispose(),Ue.dispose(),ge.dispose(),Me.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ws),Fe.removeEventListener("sessionend",qs),Un.stop()};function we(A){A.preventDefault(),p_("WebGLRenderer: Context Lost."),F=!0}function it(){p_("WebGLRenderer: Context Restored."),F=!1;const A=dt.autoReset,Z=Ie.enabled,se=Ie.autoUpdate,ie=Ie.needsUpdate,ae=Ie.type;Xe(),dt.autoReset=A,Ie.enabled=Z,Ie.autoUpdate=se,Ie.needsUpdate=ie,Ie.type=ae}function pt(A){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function an(A){const Z=A.target;Z.removeEventListener("dispose",an),It(Z)}function It(A){ci(A),C.remove(A)}function ci(A){const Z=C.get(A).programs;Z!==void 0&&(Z.forEach(function(se){Me.releaseProgram(se)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,se,ie,ae,ke){Z===null&&(Z=Ye);const Ke=ae.isMesh&&ae.matrixWorld.determinant()<0,Ve=Ta(A,Z,se,ie,ae);ye.setMaterial(ie,Ke);let $e=se.index,Je=1;if(ie.wireframe===!0){if($e=_e.getWireframeAttribute(se),$e===void 0)return;Je=2}const ot=se.drawRange,xt=se.attributes.position;let st=ot.start*Je,Pt=(ot.start+ot.count)*Je;ke!==null&&(st=Math.max(st,ke.start*Je),Pt=Math.min(Pt,(ke.start+ke.count)*Je)),$e!==null?(st=Math.max(st,0),Pt=Math.min(Pt,$e.count)):xt!=null&&(st=Math.max(st,0),Pt=Math.min(Pt,xt.count));const en=Pt-st;if(en<0||en===1/0)return;Ue.setup(ae,ie,Ve,se,$e);let Kt,Gt=gt;if($e!==null&&(Kt=ue.get($e),Gt=Et,Gt.setIndex(Kt)),ae.isMesh)ie.wireframe===!0?(ye.setLineWidth(ie.wireframeLinewidth*Qe()),Gt.setMode(z.LINES)):Gt.setMode(z.TRIANGLES);else if(ae.isLine){let Vt=ie.linewidth;Vt===void 0&&(Vt=1),ye.setLineWidth(Vt*Qe()),ae.isLineSegments?Gt.setMode(z.LINES):ae.isLineLoop?Gt.setMode(z.LINE_LOOP):Gt.setMode(z.LINE_STRIP)}else ae.isPoints?Gt.setMode(z.POINTS):ae.isSprite&&Gt.setMode(z.TRIANGLES);if(ae.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))Gt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Vt=ae._multiDrawStarts,Ze=ae._multiDrawCounts,Ln=ae._multiDrawCount,Tt=$e?ue.get($e).bytesPerElement:1,vn=C.get(ie).currentProgram.getUniforms();for(let Qn=0;Qn<Ln;Qn++)vn.setValue(z,"_gl_DrawID",Qn),Gt.render(Vt[Qn]/Tt,Ze[Qn])}else if(ae.isInstancedMesh)Gt.renderInstances(st,en,ae.count);else if(se.isInstancedBufferGeometry){const Vt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ze=Math.min(se.instanceCount,Vt);Gt.renderInstances(st,en,Ze)}else Gt.render(st,en)};function Kn(A,Z,se){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Gr(A,Z,se),A.side=sr,A.needsUpdate=!0,Gr(A,Z,se),A.side=Ui):Gr(A,Z,se)}this.compile=function(A,Z,se=null){se===null&&(se=A),U=Le.get(se),U.init(Z),E.push(U),se.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),A!==se&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),U.setupLights();const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const ke=ae.material;if(ke)if(Array.isArray(ke))for(let Ke=0;Ke<ke.length;Ke++){const Ve=ke[Ke];Kn(Ve,se,ae),ie.add(Ve)}else Kn(ke,se,ae),ie.add(ke)}),U=E.pop(),ie},this.compileAsync=function(A,Z,se=null){const ie=this.compile(A,Z,se);return new Promise(ae=>{function ke(){if(ie.forEach(function(Ke){C.get(Ke).currentProgram.isReady()&&ie.delete(Ke)}),ie.size===0){ae(A);return}setTimeout(ke,10)}xe.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let lr=null;function Xs(A){lr&&lr(A)}function Ws(){Un.stop()}function qs(){Un.start()}const Un=new Xv;Un.setAnimationLoop(Xs),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){lr=A,Fe.setAnimationLoop(A),A===null?Un.stop():Un.start()},Fe.addEventListener("sessionstart",Ws),Fe.addEventListener("sessionend",qs),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;j!==null&&j.renderStart(A,Z);const se=Fe.enabled===!0&&Fe.isPresenting===!0,ie=B!==null&&(q===null||se)&&B.begin(K,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(Z),Z=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(K,A,Z,q),U=Le.get(A,E.length),U.init(Z),U.state.textureUnits=M.getTextureUnits(),E.push(U),He.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),he.setFromProjectionMatrix(He,ki,Z.reversedDepth),ze=this.localClippingEnabled,Pe=Ge.init(this.clippingPlanes,ze),k=de.get(A,I.length),k.init(),I.push(k),Fe.enabled===!0&&Fe.isPresenting===!0){const Ke=K.xr.getDepthSensingMesh();Ke!==null&&cn(Ke,Z,-1/0,K.sortObjects)}cn(A,Z,0,K.sortObjects),k.finish(),K.sortObjects===!0&&k.sort(le,Ae),tt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,tt&&Be.addToRenderList(k,A),this.info.render.frame++,Pe===!0&&Ge.beginShadows();const ae=U.state.shadowsArray;if(Ie.render(ae,A,Z),Pe===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&B.hasRenderPass())===!1){const Ke=k.opaque,Ve=k.transmissive;if(U.setupLights(),Z.isArrayCamera){const $e=Z.cameras;if(Ve.length>0)for(let Je=0,ot=$e.length;Je<ot;Je++){const xt=$e[Je];Zi(Ke,Ve,A,xt)}tt&&Be.render(A);for(let Je=0,ot=$e.length;Je<ot;Je++){const xt=$e[Je];An(k,A,xt,xt.viewport)}}else Ve.length>0&&Zi(Ke,Ve,A,Z),tt&&Be.render(A),An(k,A,Z)}q!==null&&pe===0&&(M.updateMultisampleRenderTarget(q),M.updateRenderTargetMipmap(q)),ie&&B.end(K),A.isScene===!0&&A.onAfterRender(K,A,Z),Ue.resetDefaultState(),O=-1,H=null,E.pop(),E.length>0?(U=E[E.length-1],M.setTextureUnits(U.state.textureUnits),Pe===!0&&Ge.setGlobalState(K.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?k=I[I.length-1]:k=null,j!==null&&j.renderEnd()};function cn(A,Z,se,ie){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||he.intersectsSprite(A)){ie&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(He);const Ke=Ce.update(A),Ve=A.material;Ve.visible&&k.push(A,Ke,Ve,se,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||he.intersectsObject(A))){const Ke=Ce.update(A),Ve=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Re.copy(Ke.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(He)),Array.isArray(Ve)){const $e=Ke.groups;for(let Je=0,ot=$e.length;Je<ot;Je++){const xt=$e[Je],st=Ve[xt.materialIndex];st&&st.visible&&k.push(A,Ke,st,se,Re.z,xt)}}else Ve.visible&&k.push(A,Ke,Ve,se,Re.z,null)}}const ke=A.children;for(let Ke=0,Ve=ke.length;Ke<Ve;Ke++)cn(ke[Ke],Z,se,ie)}function An(A,Z,se,ie){const{opaque:ae,transmissive:ke,transparent:Ke}=A;U.setupLightsView(se),Pe===!0&&Ge.setGlobalState(K.clippingPlanes,se),ie&&ye.viewport(ee.copy(ie)),ae.length>0&&ba(ae,Z,se),ke.length>0&&ba(ke,Z,se),Ke.length>0&&ba(Ke,Z,se),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Zi(A,Z,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ie.id]===void 0){const st=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ie.id]=new Wi(1,1,{generateMipmaps:!0,type:st?ya:li,minFilter:Pr,samples:Math.max(4,je.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const ke=U.state.transmissionRenderTarget[ie.id],Ke=ie.viewport||ee;ke.setSize(Ke.z*K.transmissionResolutionScale,Ke.w*K.transmissionResolutionScale);const Ve=K.getRenderTarget(),$e=K.getActiveCubeFace(),Je=K.getActiveMipmapLevel();K.setRenderTarget(ke),K.getClearColor(P),J=K.getClearAlpha(),J<1&&K.setClearColor(16777215,.5),K.clear(),tt&&Be.render(se);const ot=K.toneMapping;K.toneMapping=Xi;const xt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),U.setupLightsView(ie),Pe===!0&&Ge.setGlobalState(K.clippingPlanes,ie),ba(A,se,ie),M.updateMultisampleRenderTarget(ke),M.updateRenderTargetMipmap(ke),xe.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Pt=0,en=Z.length;Pt<en;Pt++){const Kt=Z[Pt],{object:Gt,geometry:Vt,material:Ze,group:Ln}=Kt;if(Ze.side===Ui&&Gt.layers.test(ie.layers)){const Tt=Ze.side;Ze.side=Zn,Ze.needsUpdate=!0,tl(Gt,se,ie,Vt,Ze,Ln),Ze.side=Tt,Ze.needsUpdate=!0,st=!0}}st===!0&&(M.updateMultisampleRenderTarget(ke),M.updateRenderTargetMipmap(ke))}K.setRenderTarget(Ve,$e,Je),K.setClearColor(P,J),xt!==void 0&&(ie.viewport=xt),K.toneMapping=ot}function ba(A,Z,se){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,ke=A.length;ae<ke;ae++){const Ke=A[ae],{object:Ve,geometry:$e,group:Je}=Ke;let ot=Ke.material;ot.allowOverride===!0&&ie!==null&&(ot=ie),Ve.layers.test(se.layers)&&tl(Ve,Z,se,$e,ot,Je)}}function tl(A,Z,se,ie,ae,ke){A.onBeforeRender(K,Z,se,ie,ae,ke),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(K,Z,se,ie,A,ke),ae.transparent===!0&&ae.side===Ui&&ae.forceSinglePass===!1?(ae.side=Zn,ae.needsUpdate=!0,K.renderBufferDirect(se,Z,ie,ae,A,ke),ae.side=sr,ae.needsUpdate=!0,K.renderBufferDirect(se,Z,ie,ae,A,ke),ae.side=Ui):K.renderBufferDirect(se,Z,ie,ae,A,ke),A.onAfterRender(K,Z,se,ie,ae,ke)}function Gr(A,Z,se){Z.isScene!==!0&&(Z=Ye);const ie=C.get(A),ae=U.state.lights,ke=U.state.shadowsArray,Ke=ae.state.version,Ve=Me.getParameters(A,ae.state,ke,Z,se,U.state.lightProbeGridArray),$e=Me.getProgramCacheKey(Ve);let Je=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,ie.fog=Z.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=V.get(A.envMap||ie.environment,ot),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",an),Je=new Map,ie.programs=Je);let xt=Je.get($e);if(xt!==void 0){if(ie.currentProgram===xt&&ie.lightsStateVersion===Ke)return Ea(A,Ve),xt}else Ve.uniforms=Me.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,se,Ve),A.onBeforeCompile(Ve,K),xt=Me.acquireProgram(Ve,$e),Je.set($e,xt),ie.uniforms=Ve.uniforms;const st=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=Ge.uniform),Ea(A,Ve),ie.needsLights=cr(A),ie.lightsStateVersion=Ke,ie.needsLights&&(st.ambientLightColor.value=ae.state.ambient,st.lightProbe.value=ae.state.probe,st.directionalLights.value=ae.state.directional,st.directionalLightShadows.value=ae.state.directionalShadow,st.spotLights.value=ae.state.spot,st.spotLightShadows.value=ae.state.spotShadow,st.rectAreaLights.value=ae.state.rectArea,st.ltc_1.value=ae.state.rectAreaLTC1,st.ltc_2.value=ae.state.rectAreaLTC2,st.pointLights.value=ae.state.point,st.pointLightShadows.value=ae.state.pointShadow,st.hemisphereLights.value=ae.state.hemi,st.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,st.spotLightMatrix.value=ae.state.spotLightMatrix,st.spotLightMap.value=ae.state.spotLightMap,st.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=U.state.lightProbeGridArray.length>0,ie.currentProgram=xt,ie.uniformsList=null,xt}function js(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=qc.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Ea(A,Z){const se=C.get(A);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.batchingColor=Z.batchingColor,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.instancingMorph=Z.instancingMorph,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Ys(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;N.setFromMatrixPosition(Z.matrixWorld);for(let se=0,ie=A.length;se<ie;se++){const ae=A[se];if(ae.texture!==null&&ae.boundingBox.containsPoint(N))return ae}return null}function Ta(A,Z,se,ie,ae){Z.isScene!==!0&&(Z=Ye),M.resetTextureUnits();const ke=Z.fog,Ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Z.environment:null,Ve=q===null?K.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Nt.workingColorSpace,$e=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Je=V.get(ie.envMap||Ke,$e),ot=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,xt=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),st=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,en=!!se.morphAttributes.color;let Kt=Xi;ie.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Kt=K.toneMapping);const Gt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Vt=Gt!==void 0?Gt.length:0,Ze=C.get(ie),Ln=U.state.lights;if(Pe===!0&&(ze===!0||A!==H)){const Ht=A===H&&ie.id===O;Ge.setState(ie,A,Ht)}let Tt=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ln.state.version||Ze.outputColorSpace!==Ve||ae.isBatchedMesh&&Ze.batching===!1||!ae.isBatchedMesh&&Ze.batching===!0||ae.isBatchedMesh&&Ze.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ze.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ze.instancing===!1||!ae.isInstancedMesh&&Ze.instancing===!0||ae.isSkinnedMesh&&Ze.skinning===!1||!ae.isSkinnedMesh&&Ze.skinning===!0||ae.isInstancedMesh&&Ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ze.instancingMorph===!1&&ae.morphTexture!==null||Ze.envMap!==Je||ie.fog===!0&&Ze.fog!==ke||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ge.numPlanes||Ze.numIntersection!==Ge.numIntersection)||Ze.vertexAlphas!==ot||Ze.vertexTangents!==xt||Ze.morphTargets!==st||Ze.morphNormals!==Pt||Ze.morphColors!==en||Ze.toneMapping!==Kt||Ze.morphTargetsCount!==Vt||!!Ze.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Ze.__version=ie.version);let vn=Ze.currentProgram;Tt===!0&&(vn=Gr(ie,Z,ae),j&&ie.isNodeMaterial&&j.onUpdateProgram(ie,vn,Ze));let Qn=!1,Ei=!1,Jn=!1;const kt=vn.getUniforms(),tn=Ze.uniforms;if(ye.useProgram(vn.program)&&(Qn=!0,Ei=!0,Jn=!0),ie.id!==O&&(O=ie.id,Ei=!0),Ze.needsLights){const Ht=Ys(U.state.lightProbeGridArray,ae);Ze.lightProbeGrid!==Ht&&(Ze.lightProbeGrid=Ht,Ei=!0)}if(Qn||H!==A){ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(z,"projectionMatrix",A.projectionMatrix),kt.setValue(z,"viewMatrix",A.matrixWorldInverse);const Oi=kt.map.cameraPosition;Oi!==void 0&&Oi.setValue(z,at.setFromMatrixPosition(A.matrixWorld)),je.logarithmicDepthBuffer&&kt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&kt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Ei=!0,Jn=!0)}if(Ze.needsLights&&(Ln.state.directionalShadowMap.length>0&&kt.setValue(z,"directionalShadowMap",Ln.state.directionalShadowMap,M),Ln.state.spotShadowMap.length>0&&kt.setValue(z,"spotShadowMap",Ln.state.spotShadowMap,M),Ln.state.pointShadowMap.length>0&&kt.setValue(z,"pointShadowMap",Ln.state.pointShadowMap,M)),ae.isSkinnedMesh){kt.setOptional(z,ae,"bindMatrix"),kt.setOptional(z,ae,"bindMatrixInverse");const Ht=ae.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),kt.setValue(z,"boneTexture",Ht.boneTexture,M))}ae.isBatchedMesh&&(kt.setOptional(z,ae,"batchingTexture"),kt.setValue(z,"batchingTexture",ae._matricesTexture,M),kt.setOptional(z,ae,"batchingIdTexture"),kt.setValue(z,"batchingIdTexture",ae._indirectTexture,M),kt.setOptional(z,ae,"batchingColorTexture"),ae._colorsTexture!==null&&kt.setValue(z,"batchingColorTexture",ae._colorsTexture,M));const Ti=se.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&mt.update(ae,se,vn),(Ei||Ze.receiveShadow!==ae.receiveShadow)&&(Ze.receiveShadow=ae.receiveShadow,kt.setValue(z,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Z.environment!==null&&(tn.envMapIntensity.value=Z.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=h2()),Ei){if(kt.setValue(z,"toneMappingExposure",K.toneMappingExposure),Ze.needsLights&&Aa(tn,Jn),ke&&ie.fog===!0&&re.refreshFogUniforms(tn,ke),re.refreshMaterialUniforms(tn,ie,Oe,Ne,U.state.transmissionRenderTarget[A.id]),Ze.needsLights&&Ze.lightProbeGrid){const Ht=Ze.lightProbeGrid;tn.probesSH.value=Ht.texture,tn.probesMin.value.copy(Ht.boundingBox.min),tn.probesMax.value.copy(Ht.boundingBox.max),tn.probesResolution.value.copy(Ht.resolution)}qc.upload(z,js(Ze),tn,M)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(qc.upload(z,js(Ze),tn,M),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&kt.setValue(z,"center",ae.center),kt.setValue(z,"modelViewMatrix",ae.modelViewMatrix),kt.setValue(z,"normalMatrix",ae.normalMatrix),kt.setValue(z,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Ht=ie.uniformsGroups;for(let Oi=0,Ca=Ht.length;Oi<Ca;Oi++){const ur=Ht[Oi];ge.update(ur,vn),ge.bind(ur,vn)}}return vn}function Aa(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function cr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Z,se){const ie=C.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=Z,C.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const se=C.get(A);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0};const Ra=z.createFramebuffer();this.setRenderTarget=function(A,Z=0,se=0){q=A,ce=Z,pe=se;let ie=null,ae=!1,ke=!1;if(A){const Ve=C.get(A);if(Ve.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(z.FRAMEBUFFER,Ve.__webglFramebuffer),ee.copy(A.viewport),ve.copy(A.scissor),Ee=A.scissorTest,ye.viewport(ee),ye.scissor(ve),ye.setScissorTest(Ee),O=-1;return}else if(Ve.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Ve.__hasExternalTextures)M.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Ve.__boundDepthTexture!==ot){if(ot!==null&&C.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ke=!0);const Je=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[Z])?ie=Je[Z][se]:ie=Je[Z],ae=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ie=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?ie=Je[se]:ie=Je,ee.copy(A.viewport),ve.copy(A.scissor),Ee=A.scissorTest}else ee.copy(De).multiplyScalar(Oe).floor(),ve.copy(qe).multiplyScalar(Oe).floor(),Ee=ut;if(se!==0&&(ie=Ra),ye.bindFramebuffer(z.FRAMEBUFFER,ie)&&ye.drawBuffers(A,ie),ye.viewport(ee),ye.scissor(ve),ye.setScissorTest(Ee),ae){const Ve=C.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ve.__webglTexture,se)}else if(ke){const Ve=Z;for(let $e=0;$e<A.textures.length;$e++){const Je=C.get(A.textures[$e]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+$e,Je.__webglTexture,se,Ve)}}else if(A!==null&&se!==0){const Ve=C.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ve.__webglTexture,se)}O=-1},this.readRenderTargetPixels=function(A,Z,se,ie,ae,ke,Ke,Ve=0){if(!(A&&A.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke]),$e){ye.bindFramebuffer(z.FRAMEBUFFER,$e);try{const Je=A.textures[Ve],ot=Je.format,xt=Je.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ve),!je.textureFormatReadable(ot)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(xt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ie&&se>=0&&se<=A.height-ae&&z.readPixels(Z,se,ie,ae,X.convert(ot),X.convert(xt),ke)}finally{const Je=q!==null?C.get(q).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,Z,se,ie,ae,ke,Ke,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke]),$e)if(Z>=0&&Z<=A.width-ie&&se>=0&&se<=A.height-ae){ye.bindFramebuffer(z.FRAMEBUFFER,$e);const Je=A.textures[Ve],ot=Je.format,xt=Je.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ve),!je.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,st),z.bufferData(z.PIXEL_PACK_BUFFER,ke.byteLength,z.STREAM_READ),z.readPixels(Z,se,ie,ae,X.convert(ot),X.convert(xt),0);const Pt=q!==null?C.get(q).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Pt);const en=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await CM(z,en,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,st),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ke),z.deleteBuffer(st),z.deleteSync(en),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,se=0){const ie=Math.pow(2,-se),ae=Math.floor(A.image.width*ie),ke=Math.floor(A.image.height*ie),Ke=Z!==null?Z.x:0,Ve=Z!==null?Z.y:0;M.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,Ke,Ve,ae,ke),ye.unbindTexture()};const dn=z.createFramebuffer(),nl=z.createFramebuffer();this.copyTextureToTexture=function(A,Z,se=null,ie=null,ae=0,ke=0){let Ke,Ve,$e,Je,ot,xt,st,Pt,en;const Kt=A.isCompressedTexture?A.mipmaps[ke]:A.image;if(se!==null)Ke=se.max.x-se.min.x,Ve=se.max.y-se.min.y,$e=se.isBox3?se.max.z-se.min.z:1,Je=se.min.x,ot=se.min.y,xt=se.isBox3?se.min.z:0;else{const tn=Math.pow(2,-ae);Ke=Math.floor(Kt.width*tn),Ve=Math.floor(Kt.height*tn),A.isDataArrayTexture?$e=Kt.depth:A.isData3DTexture?$e=Math.floor(Kt.depth*tn):$e=1,Je=0,ot=0,xt=0}ie!==null?(st=ie.x,Pt=ie.y,en=ie.z):(st=0,Pt=0,en=0);const Gt=X.convert(Z.format),Vt=X.convert(Z.type);let Ze;Z.isData3DTexture?(M.setTexture3D(Z,0),Ze=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(M.setTexture2DArray(Z,0),Ze=z.TEXTURE_2D_ARRAY):(M.setTexture2D(Z,0),Ze=z.TEXTURE_2D),ye.activeTexture(z.TEXTURE0),ye.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),ye.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),ye.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ln=ye.getParameter(z.UNPACK_ROW_LENGTH),Tt=ye.getParameter(z.UNPACK_IMAGE_HEIGHT),vn=ye.getParameter(z.UNPACK_SKIP_PIXELS),Qn=ye.getParameter(z.UNPACK_SKIP_ROWS),Ei=ye.getParameter(z.UNPACK_SKIP_IMAGES);ye.pixelStorei(z.UNPACK_ROW_LENGTH,Kt.width),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Kt.height),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,Je),ye.pixelStorei(z.UNPACK_SKIP_ROWS,ot),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,xt);const Jn=A.isDataArrayTexture||A.isData3DTexture,kt=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const tn=C.get(A),Ti=C.get(Z),Ht=C.get(tn.__renderTarget),Oi=C.get(Ti.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ca=0;Ca<$e;Ca++)Jn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,C.get(A).__webglTexture,ae,xt+Ca),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,C.get(Z).__webglTexture,ke,en+Ca)),z.blitFramebuffer(Je,ot,Ke,Ve,st,Pt,Ke,Ve,z.DEPTH_BUFFER_BIT,z.NEAREST);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||C.has(A)){const tn=C.get(A),Ti=C.get(Z);ye.bindFramebuffer(z.READ_FRAMEBUFFER,dn),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,nl);for(let Ht=0;Ht<$e;Ht++)Jn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,ae,xt+Ht):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,ae),kt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ti.__webglTexture,ke,en+Ht):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ti.__webglTexture,ke),ae!==0?z.blitFramebuffer(Je,ot,Ke,Ve,st,Pt,Ke,Ve,z.COLOR_BUFFER_BIT,z.NEAREST):kt?z.copyTexSubImage3D(Ze,ke,st,Pt,en+Ht,Je,ot,Ke,Ve):z.copyTexSubImage2D(Ze,ke,st,Pt,Je,ot,Ke,Ve);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ze,ke,st,Pt,en,Ke,Ve,$e,Gt,Vt,Kt.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,ke,st,Pt,en,Ke,Ve,$e,Gt,Kt.data):z.texSubImage3D(Ze,ke,st,Pt,en,Ke,Ve,$e,Gt,Vt,Kt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ke,st,Pt,Ke,Ve,Gt,Vt,Kt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ke,st,Pt,Kt.width,Kt.height,Gt,Kt.data):z.texSubImage2D(z.TEXTURE_2D,ke,st,Pt,Ke,Ve,Gt,Vt,Kt);ye.pixelStorei(z.UNPACK_ROW_LENGTH,Ln),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,vn),ye.pixelStorei(z.UNPACK_SKIP_ROWS,Qn),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,Ei),ke===0&&Z.generateMipmaps&&z.generateMipmap(Ze),ye.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){ce=0,pe=0,q=null,ye.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Nt._getUnpackColorSpace()}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Fc(s){const t=document.createElement("canvas");t.width=16,t.height=16;const i=t.getContext("2d");switch(s){case"grass_top":for(let l=0;l<16;l++)for(let c=0;c<16;c++){const d=100+Math.random()*45;i.fillStyle=`rgb(${Math.floor(d*.4)}, ${Math.floor(d)}, ${Math.floor(d*.3)})`,i.fillRect(l,c,1,1)}break;case"dirt":for(let l=0;l<16;l++)for(let c=0;c<16;c++){const d=Math.random()*30;Math.random()<.15?i.fillStyle=`rgb(${70-d}, ${50-d}, ${40-d})`:i.fillStyle=`rgb(${110-d}, ${75-d}, ${50-d})`,i.fillRect(l,c,1,1)}break;case"grass_side":for(let l=0;l<16;l++)for(let c=0;c<16;c++){const d=Math.random()*25;i.fillStyle=`rgb(${110-d}, ${75-d}, ${50-d})`,i.fillRect(l,c,1,1)}for(let l=0;l<16;l++){const c=4+Math.floor(Math.sin(l*12)*1.5+Math.random()*2);for(let d=0;d<c;d++){const p=100+Math.random()*40;i.fillStyle=`rgb(${Math.floor(p*.4)}, ${Math.floor(p)}, ${Math.floor(p*.3)})`,i.fillRect(l,d,1,1)}}break;case"stone":for(let l=0;l<16;l++)for(let c=0;c<16;c++){const d=110+Math.floor(Math.random()*40);i.fillStyle=`rgb(${d}, ${d}, ${d+4})`,i.fillRect(l,c,1,1)}i.fillStyle="rgba(70,70,70,0.4)",i.fillRect(2,3,4,1),i.fillRect(3,4,1,3),i.fillRect(10,8,3,1),i.fillRect(11,9,1,4);break;case"wood":for(let l=0;l<16;l++)for(let c=0;c<16;c++){const d=Math.floor(c/4),p=Math.random()*15;i.fillStyle=`rgb(${150-d*15-p}, ${100-d*10-p}, ${60-d*7-p})`,i.fillRect(l,c,1,1)}i.fillStyle="rgba(50,25,10,0.5)",i.fillRect(0,3,16,1),i.fillRect(0,7,16,1),i.fillRect(0,11,16,1),i.fillRect(0,15,16,1),i.fillRect(6,0,1,4),i.fillRect(11,4,1,4),i.fillRect(4,8,1,4),i.fillRect(13,12,1,4);break;case"leaves":for(let l=0;l<16;l++)for(let c=0;c<16;c++)if(Math.random()<.15)i.fillStyle="rgba(0,0,0,0)",i.clearRect(l,c,1,1);else{const p=70+Math.random()*50;i.fillStyle=`rgb(${Math.floor(p*.15)}, ${Math.floor(p)}, ${Math.floor(p*.2)})`,i.fillRect(l,c,1,1)}break;case"glass":i.fillStyle="rgba(230, 245, 255, 0.15)",i.fillRect(0,0,16,16),i.fillStyle="rgba(150, 220, 255, 0.6)",i.strokeRect(0,0,16,16),i.fillStyle="rgba(255, 255, 255, 0.85)",i.fillRect(3,3,4,1),i.fillRect(3,4,1,3),i.fillRect(10,10,3,1);break;case"brick":i.fillStyle="#6d757a",i.fillRect(0,0,16,16);for(let l=0;l<4;l++){const c=l*4,d=l%2===0?0:4;i.fillStyle="#b73c24";for(let p=0;p<2;p++){let m=p*8+d;m>=16&&(m-=16),i.fillStyle=`rgb(${155+Math.random()*30}, ${40+Math.random()*15}, ${20+Math.random()*10})`,i.fillRect(m,c,7,3),i.fillStyle="rgba(0,0,0,0.15)",i.fillRect(m,c+2,7,1),i.fillRect(m+6,c,1,3)}}break;case"tnt":for(let l=0;l<16;l++)for(let c=0;c<16;c++){if(c>=5&&c<=10)i.fillStyle="#ffffff";else{const p=l%4===0,m=Math.random()*20;i.fillStyle=p?`rgb(${140-m}, 5, 5)`:`rgb(${210-m}, 20, 20)`}i.fillRect(l,c,1,1)}i.font="bold 7px sans-serif",i.fillStyle="#000000",i.textAlign="center",i.textBaseline="middle",i.fillText("TNT",8,8);break;case"bedrock":for(let l=0;l<16;l++)for(let c=0;c<16;c++){const d=15+Math.floor(Math.random()*35);i.fillStyle=`rgb(${d}, ${d}, ${d})`,i.fillRect(l,c,1,1)}i.fillStyle="rgba(100,100,100,0.3)",i.fillRect(1,1,3,2),i.fillRect(8,7,2,3),i.fillRect(12,11,3,2);break;case"gold":for(let l=0;l<16;l++)for(let c=0;c<16;c++){const d=220+Math.random()*35,p=175+Math.random()*30;i.fillStyle=`rgb(${d}, ${p}, 10)`,i.fillRect(l,c,1,1)}i.fillStyle="rgba(130,100,0,0.6)",i.strokeRect(0,0,16,16),i.fillStyle="rgba(255,255,255,0.8)",i.fillRect(2,2,2,2),i.fillRect(3,4,1,1),i.fillRect(10,11,2,2);break;default:i.fillStyle="#ff00ff",i.fillRect(0,0,16,16)}const r=new n1(t);return r.magFilter=Sn,r.minFilter=Sn,r.wrapS=Zo,r.wrapT=Zo,r}function fv(s){let t,i,r;if(s==="grass")t=Fc("grass_top"),i=Fc("grass_side"),r=Fc("dirt");else{const c=Fc(s);t=c,i=c,r=c}const l=c=>({map:c,roughness:s==="gold"?.2:.8,metalness:s==="gold"?.8:0,transparent:s==="glass"||s==="leaves",opacity:s==="glass"?.4:s==="leaves"?.85:1,side:Ui,shadowSide:Ui});return[new Ur(l(i)),new Ur(l(i)),new Ur(l(t)),new Ur(l(r)),new Ur(l(i)),new Ur(l(i))]}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Ls=null;function ks(){if(!Ls){const s=window.AudioContext||window.webkitAudioContext;Ls=new s}return Ls&&Ls.state==="suspended"&&Ls.resume(),Ls}function eh(){try{const s=ks(),t=s.createOscillator(),i=s.createGain();t.connect(i),i.connect(s.destination),t.type="triangle",t.frequency.setValueAtTime(120,s.currentTime),t.frequency.exponentialRampToValueAtTime(40,s.currentTime+.15),i.gain.setValueAtTime(.3,s.currentTime),i.gain.exponentialRampToValueAtTime(.01,s.currentTime+.15),t.start(),t.stop(s.currentTime+.16)}catch(s){console.warn("Audio play failed",s)}}function m2(s){try{const t=ks(),i=t.sampleRate*.12,r=t.createBuffer(1,i,t.sampleRate),l=r.getChannelData(0);for(let m=0;m<i;m++)l[m]=Math.random()*2-1;const c=t.createBufferSource();c.buffer=r;const d=t.createBiquadFilter();d.type="bandpass",s==="wood"||s==="leaves"?d.frequency.setValueAtTime(400,t.currentTime):s==="glass"?d.frequency.setValueAtTime(2500,t.currentTime):d.frequency.setValueAtTime(180,t.currentTime);const p=t.createGain();if(p.gain.setValueAtTime(s==="glass"?.15:.4,t.currentTime),p.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),c.connect(d),d.connect(p),p.connect(t.destination),c.start(),s==="glass"){const m=t.createOscillator(),h=t.createGain();m.type="sine",m.frequency.setValueAtTime(4e3,t.currentTime),m.frequency.exponentialRampToValueAtTime(2e3,t.currentTime+.1),h.gain.setValueAtTime(.1,t.currentTime),h.gain.exponentialRampToValueAtTime(.01,t.currentTime+.1),m.connect(h),h.connect(t.destination),m.start(),m.stop(t.currentTime+.11)}}catch(t){console.warn("Audio play failed",t)}}function g2(){try{const s=ks(),t=s.createOscillator(),i=s.createGain();t.connect(i),i.connect(s.destination),t.type="sine",t.frequency.setValueAtTime(150,s.currentTime),t.frequency.exponentialRampToValueAtTime(280,s.currentTime+.08),i.gain.setValueAtTime(.3,s.currentTime),i.gain.exponentialRampToValueAtTime(.01,s.currentTime+.08),t.start(),t.stop(s.currentTime+.09)}catch(s){console.warn("Audio play failed",s)}}function _2(){try{const s=ks(),t=s.createOscillator(),i=s.createGain();t.connect(i),i.connect(s.destination),t.type="triangle",t.frequency.setValueAtTime(80,s.currentTime),t.frequency.exponentialRampToValueAtTime(220,s.currentTime+.15),i.gain.setValueAtTime(.2,s.currentTime),i.gain.exponentialRampToValueAtTime(.01,s.currentTime+.15),t.start(),t.stop(s.currentTime+.16)}catch(s){console.warn("Audio play failed",s)}}function v2(){try{const s=ks(),t=s.sampleRate*.8,i=s.createBuffer(1,t,s.sampleRate),r=i.getChannelData(0);for(let h=0;h<t;h++)r[h]=Math.random()*2-1;const l=s.createBufferSource();l.buffer=i;const c=s.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(1e3,s.currentTime),c.frequency.exponentialRampToValueAtTime(30,s.currentTime+.7);const d=s.createGain();d.gain.setValueAtTime(.8,s.currentTime),d.gain.linearRampToValueAtTime(.4,s.currentTime+.2),d.gain.exponentialRampToValueAtTime(.01,s.currentTime+.8),l.connect(c),c.connect(d),d.connect(s.destination),l.start();const p=s.createOscillator(),m=s.createGain();p.type="sawtooth",p.frequency.setValueAtTime(80,s.currentTime),p.frequency.exponentialRampToValueAtTime(20,s.currentTime+.4),m.gain.setValueAtTime(.6,s.currentTime),m.gain.exponentialRampToValueAtTime(.01,s.currentTime+.4),p.connect(m),m.connect(s.destination),p.start(),p.stop(s.currentTime+.45)}catch(s){console.warn("Audio play failed",s)}}function Yh(){try{const s=ks(),t=s.createOscillator(),i=s.createGain();t.connect(i),i.connect(s.destination),t.type="sine",t.frequency.setValueAtTime(800,s.currentTime),t.frequency.setValueAtTime(1200,s.currentTime+.03),i.gain.setValueAtTime(.1,s.currentTime),i.gain.exponentialRampToValueAtTime(.001,s.currentTime+.08),t.start(),t.stop(s.currentTime+.09)}catch(s){console.warn("Audio play failed",s)}}const dv={day:{sky:11193599,light:16777215,ground:9482448,intensity:1},sunset:{sky:16737860,light:16755302,ground:7356480,intensity:.6},night:{sky:328981,light:3359846,ground:328976,intensity:.15},sunrise:{sky:16751018,light:16764074,ground:6312016,intensity:.7}},x2=ct.forwardRef(function({selectedBlock:t,isFlying:i,lightMode:r,worldConfig:l,actionMode:c,soundEnabled:d,setStats:p,setCurrentPos:m,joystickState:h,onUpdateConfig:S,id:x},g){const b=ct.useRef(null),T=ct.useRef(null),D=ct.useRef(null),y=ct.useRef(null),v=ct.useRef(null),w=ct.useRef(null),L=ct.useRef(null),N=ct.useRef(new Map),k=ct.useRef(null),U=ct.useRef(null),I=ct.useRef(new $(0,10,0)),E=ct.useRef(new $(0,0,0)),B=ct.useRef(!1),K=ct.useRef({}),F=ct.useRef([]),j=ct.useRef(!1),ce=ct.useRef(null),pe=ct.useRef({x:0,y:0}),q=ct.useRef([]);ct.useEffect(()=>{if(!b.current)return;const he=new XM;T.current=he;const Pe=dv[r];he.background=new bt(Pe.sky),he.fog=new Jc(Pe.sky,.045);const ze=new Si(70,b.current.clientWidth/b.current.clientHeight,.1,100);ze.rotation.order="YXZ",D.current=ze;const He=new p2({antialias:!0,logarithmicDepthBuffer:!0});He.setSize(b.current.clientWidth,b.current.clientHeight),He.setPixelRatio(Math.min(window.devicePixelRatio,2)),He.shadowMap.enabled=!0,He.shadowMap.type=gv,b.current.appendChild(He.domElement),y.current=He;const at=new m1(Pe.ground,.4);he.add(at),w.current=at;const Re=new p1(Pe.light,.8);Re.position.set(10,40,20),Re.castShadow=!0,Re.shadow.mapSize.width=1024,Re.shadow.mapSize.height=1024,Re.shadow.camera.near=.5,Re.shadow.camera.far=80;const Ye=25;Re.shadow.camera.left=-Ye,Re.shadow.camera.right=Ye,Re.shadow.camera.top=Ye,Re.shadow.camera.bottom=-Ye,he.add(Re),v.current=Re;const tt=new Fr(1,1,1);k.current=tt;const Qe=new a1(tt),z=new Iv({color:16711680,linewidth:2}),nt=new t1(Qe,z);nt.visible=!1,he.add(nt),U.current=nt,L.current=new v1,L.current.far=6,ve(l);const xe=M=>{const V=M.key.toLowerCase();K.current[V]=!0;const ue=parseInt(V);if(ue>=1&&ue<=9){const Ce=["grass","dirt","stone","wood","leaves","glass","brick","tnt","bedrock","gold"][ue-1];Ce&&window.setGameBlockType&&window.setGameBlockType(Ce)}},je=M=>{K.current[M.key.toLowerCase()]=!1};window.addEventListener("keydown",xe),window.addEventListener("keyup",je);const ye=()=>{!b.current||!ze||!He||(ze.aspect=b.current.clientWidth/b.current.clientHeight,ze.updateProjectionMatrix(),He.setSize(b.current.clientWidth,b.current.clientHeight))},dt=new ResizeObserver(()=>ye());dt.observe(b.current);let C=requestAnimationFrame(ut);return()=>{if(cancelAnimationFrame(C),window.removeEventListener("keydown",xe),window.removeEventListener("keyup",je),dt.disconnect(),tt.dispose(),Qe.dispose(),z.dispose(),N.current.forEach(M=>{he.remove(M.mesh),Array.isArray(M.mesh.material)?M.mesh.material.forEach(V=>V.dispose()):M.mesh.material.dispose()}),N.current.clear(),q.current.forEach(M=>{he.remove(M.mesh),Array.isArray(M.mesh.material)?M.mesh.material.forEach(V=>V.dispose()):M.mesh.material.dispose()}),q.current=[],F.current.forEach(M=>{he.remove(M.mesh),M.mesh.material.dispose()}),y.current&&(y.current.dispose(),b.current&&y.current.domElement))try{b.current.removeChild(y.current.domElement)}catch{}}},[]),ct.useEffect(()=>{window.setGameBlockType=he=>{const Pe=document.getElementById(`hotbar-slot-${he}`);Pe&&Pe.click()}},[t]),ct.useEffect(()=>{const he=T.current;if(!he)return;const Pe=dv[r],ze=800,He=Date.now(),at=he.background instanceof bt?he.background.clone():new bt,Re=new bt(Pe.sky),Ye=()=>{const tt=Date.now()-He,Qe=Math.min(tt/ze,1),z=at.clone().lerp(Re,Qe);he.background=z,he.fog=new Jc(z.getHex(),.045),v.current&&(v.current.color.lerp(new bt(Pe.light),Qe),v.current.intensity=Pe.intensity*.8),w.current&&w.current.color.lerp(new bt(Pe.ground),Qe),Qe<1&&requestAnimationFrame(Ye)};Ye()},[r]);const O=(he,Pe,ze)=>`${Math.round(he)},${Math.round(Pe)},${Math.round(ze)}`,H=(he,Pe,ze)=>N.current.get(O(he,Pe,ze)),ee=(he,Pe,ze)=>N.current.has(O(he,Pe,ze)),ve=he=>{const Pe=T.current;if(!Pe)return;N.current.forEach(Qe=>{Pe.remove(Qe.mesh),Array.isArray(Qe.mesh.material)?Qe.mesh.material.forEach(z=>z.dispose()):Qe.mesh.material.dispose()}),N.current.clear();const ze=-Math.floor(he.sizeX/2),He=Math.floor(he.sizeX/2),at=-Math.floor(he.sizeZ/2),Re=Math.floor(he.sizeZ/2),Ye=he.seed.split("").reduce((Qe,z)=>Qe+z.charCodeAt(0),0)||5;for(let Qe=ze;Qe<=He;Qe++)for(let z=at;z<=Re;z++){let nt=0;if(he.type==="flat")nt=0;else if(he.type==="hills"){const xe=Qe+Ye,je=z-Ye;nt=Math.floor(Math.sin(xe*.2)*Math.cos(je*.2)*3+Math.sin(xe*.08)*1.5+3)}else if(he.type==="mountains"){const xe=Qe*.12+Ye%7,je=z*.12-Ye%3;nt=Math.floor((Math.sin(xe)*Math.cos(je)+Math.cos(xe*.5)*Math.sin(je*.5))*6+5)}else if(he.type==="caves"){const xe=Qe+Ye,je=z;nt=Math.floor(Math.cos(xe*.15)*Math.sin(je*.15)*2+3)}nt=Math.max(0,Math.min(nt,he.heightLimit));for(let xe=0;xe<=nt;xe++){let je="dirt";if(xe===nt?je="grass":xe>=nt-2?je="dirt":xe===0?je="bedrock":je="stone",he.type==="caves"&&xe>1&&xe<nt&&Math.sin(Qe*.4)+Math.cos(z*.4)>.4){xe===1&&Math.random()<.25&&Ee(Qe,xe,z,"gold");continue}Ee(Qe,xe,z,je)}}if(he.type!=="flat"){const Qe=Math.floor(he.sizeX*.15)+2;for(let z=0;z<Qe;z++){const nt=Math.floor(Math.random()*(he.sizeX-4))-Math.floor(he.sizeX/2)+2,xe=Math.floor(Math.random()*(he.sizeZ-4))-Math.floor(he.sizeZ/2)+2;let je=-1;for(let dt=he.heightLimit;dt>=0;dt--)if(ee(nt,dt,xe)){je=dt;break}const ye=H(nt,je,xe);if(je!==-1&&ye&&ye.type==="grass"){const dt=3+Math.floor(Math.random()*2);for(let M=1;M<=dt;M++)Ee(nt,je+M,xe,"wood");const C=je+dt+1;for(let M=-2;M<=2;M++)for(let V=-2;V<=2;V++)for(let ue=-1;ue<=1;ue++){if(M===0&&V===0&&ue<=0||Math.abs(M)+Math.abs(V)+Math.abs(ue)>3)continue;const _e=nt+M,Ce=C+ue,Me=xe+V;ee(_e,Ce,Me)||Ee(_e,Ce,Me,"leaves")}}}}let tt=6;for(let Qe=he.heightLimit;Qe>=0;Qe--)if(ee(0,Qe,0)){tt=Qe+2;break}I.current.set(0,tt,0),E.current.set(0,0,0),pe.current={x:0,y:0},D.current&&D.current.rotation.set(0,0,0)},Ee=(he,Pe,ze,He)=>{const at=T.current,Re=k.current,Ye=fv(He),tt=new Mi(Re,Ye);return tt.position.set(he,Pe,ze),tt.castShadow=!0,tt.receiveShadow=!0,tt.userData={coords:{x:he,y:Pe,z:ze},blockType:He},at.add(tt),N.current.set(O(he,Pe,ze),{type:He,mesh:tt}),tt},P=(he,Pe,ze,He)=>{const at=T.current;if(!at)return;const Re=new Fr(.15,.15,.15);let Ye=8934707;He==="grass"&&(Ye=3385907),(He==="stone"||He==="bedrock")&&(Ye=8947848),He==="leaves"&&(Ye=2263074),He==="glass"&&(Ye=12320767),He==="brick"&&(Ye=11158579),He==="tnt"&&(Ye=14492194),He==="gold"&&(Ye=16768256);const tt=new Ur({color:Ye,roughness:.9}),Qe=He==="tnt"?30:12;for(let z=0;z<Qe;z++){const nt=new Mi(Re,tt);nt.position.set(he+(Math.random()-.5)*.8,Pe+(Math.random()-.5)*.8,ze+(Math.random()-.5)*.8),at.add(nt);const xe=new $((Math.random()-.5)*.15,Math.random()*.2+.05,(Math.random()-.5)*.15);F.current.push({mesh:nt,velocity:xe,life:0,maxLife:25+Math.floor(Math.random()*15)})}},J=ct.useCallback(()=>{(B.current||i)&&(d&&_2(),E.current.y=i?.14:.22)},[i,d]),Te=(he,Pe,ze,He)=>{if(!T.current)return;const Re=N.current.get(He);if(!Re)return;const Ye=Re.mesh;N.current.delete(He);const tt=`tnt_${Date.now()}_${Math.random()}`;q.current.push({id:tt,mesh:Ye,flashCount:0,pos:{x:he,y:Pe,z:ze}});let Qe=0;const z=9,nt=()=>{const xe=q.current.find(je=>je.id===tt);if(xe)if(Qe++,xe.flashCount=Qe,Qe>=z)Ne(he,Pe,ze,tt);else{if(d&&eh(),Qe%2===1){const dt=new $c({color:16777215});Ye.material=Array(6).fill(dt)}else Ye.material=fv("tnt");const ye=1+Qe*.025;Ye.scale.set(ye,ye,ye),setTimeout(nt,200)}};nt()},Ne=(he,Pe,ze,He)=>{const at=T.current;if(!at)return;const Re=q.current.findIndex(V=>V.id===He);if(Re!==-1){const V=q.current[Re];at.remove(V.mesh),Array.isArray(V.mesh.material)?V.mesh.material.forEach(ue=>ue.dispose()):V.mesh.material.dispose(),q.current.splice(Re,1)}d&&v2(),p(V=>({...V,tntExploded:V.tntExploded+1}));const Ye=3,tt=[];N.current.forEach((V,ue)=>{const{x:_e,y:Ce,z:Me}=V.mesh.userData.coords,re=_e-he,de=Ce-Pe,Le=Me-ze;Math.sqrt(re*re+de*de+Le*Le)<=Ye&&V.type!=="bedrock"&&tt.push({x:_e,y:Ce,z:Me,type:V.type})}),tt.forEach(V=>{const ue=O(V.x,V.y,V.z),_e=N.current.get(ue);_e&&(at.remove(_e.mesh),Array.isArray(_e.mesh.material)?_e.mesh.material.forEach(Ce=>Ce.dispose()):_e.mesh.material.dispose(),N.current.delete(ue),P(V.x,V.y,V.z,V.type))});const Qe=new cp(Ye*1.1,16,16),z=new $c({color:16755268,transparent:!0,opacity:.9,blending:th}),nt=new Mi(Qe,z);nt.position.set(he,Pe,ze),at.add(nt);let xe=.5;const je=()=>{xe+=.08,nt.scale.set(xe,xe,xe),z.opacity-=.08,z.opacity>0?requestAnimationFrame(je):(at.remove(nt),Qe.dispose(),z.dispose())};je();const ye=I.current.x-he,dt=I.current.y-Pe,C=I.current.z-ze,M=Math.sqrt(ye*ye+dt*dt+C*C);if(M<Ye+1.5){const V=(Ye+2-M)*.15,ue=new $(ye,dt+.5,C).normalize();E.current.addScaledVector(ue,V)}},Oe=he=>{const Pe=T.current,ze=D.current,He=L.current;if(!Pe||!ze||!He)return;He.setFromCamera(new Ot(0,0),ze);const at=Array.from(N.current.values()).map(Ye=>Ye.mesh),Re=He.intersectObjects(at);if(Re.length>0){const Ye=Re[0],tt=Ye.object,{x:Qe,y:z,z:nt}=tt.userData.coords,xe=O(Qe,z,nt),je=N.current.get(xe);if(he==="break"&&je){if(je.type==="bedrock"){d&&eh();return}je.type==="tnt"?Te(Qe,z,nt,xe):(Pe.remove(tt),Array.isArray(tt.material)?tt.material.forEach(ye=>ye.dispose()):tt.material.dispose(),N.current.delete(xe),p(ye=>({...ye,blocksBroken:ye.blocksBroken+1})),d&&m2(je.type),P(Qe,z,nt,je.type))}else if(he==="place"){const ye=Ye.face;if(!ye)return;const dt=Qe+Math.round(ye.normal.x),C=z+Math.round(ye.normal.y),M=nt+Math.round(ye.normal.z);if(C<0||C>l.heightLimit||ee(dt,C,M))return;const V=Math.round(I.current.x),ue=Math.floor(I.current.y),_e=Math.floor(I.current.y+.9),Ce=Math.round(I.current.z);if(dt===V&&M===Ce&&(C===ue||C===_e))return;Ee(dt,C,M,t),d&&g2(),p(Me=>({...Me,blocksPlaced:Me.blocksPlaced+1}))}}},le=he=>{var Pe;if(document.pointerLockElement)he.button===0?Oe("break"):he.button===2&&Oe("place");else{const ze=(Pe=y.current)==null?void 0:Pe.domElement;ze&&!("ontouchstart"in window)?ze.requestPointerLock():Oe(c)}},Ae=he=>{const Pe=he.target;if(Pe.closest("#virtual-joystick")||Pe.closest("#hotbar")||Pe.closest("button"))return;j.current=!0;const ze=he.touches[0];ce.current={x:ze.clientX,y:ze.clientY}},De=he=>{if(!j.current||!ce.current||!D.current)return;const Pe=he.touches[0],ze=Pe.clientX-ce.current.x,He=Pe.clientY-ce.current.y;ce.current={x:Pe.clientX,y:Pe.clientY},pe.current.y-=ze*.007,pe.current.x-=He*.007,pe.current.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,pe.current.x)),D.current.rotation.y=pe.current.y,D.current.rotation.x=pe.current.x},qe=()=>{j.current=!1,ce.current=null};ct.useImperativeHandle(g,()=>({triggerJump(){J()},clearWorld(){ve(l)},saveWorld(){try{const he=[];N.current.forEach(Pe=>{const{x:ze,y:He,z:at}=Pe.mesh.userData.coords;he.push({x:ze,y:He,z:at,type:Pe.type})}),localStorage.setItem("minecraft_saved_config",JSON.stringify(l)),localStorage.setItem("minecraft_saved_blocks",JSON.stringify(he)),alert("Minecraft world successfully saved in your browser storage! 🌱")}catch{alert("Failed saving block arrays to localstorage")}},loadWorld(){const he=T.current;if(!he)return;const Pe=localStorage.getItem("minecraft_saved_config"),ze=localStorage.getItem("minecraft_saved_blocks");if(!ze){alert("No saved world found! Compile a build and save one first.");return}try{if(N.current.forEach(Re=>{he.remove(Re.mesh),Array.isArray(Re.mesh.material)?Re.mesh.material.forEach(Ye=>Ye.dispose()):Re.mesh.material.dispose()}),N.current.clear(),Pe){const Re=JSON.parse(Pe);S(Re)}JSON.parse(ze).forEach(Re=>{Ee(Re.x,Re.y,Re.z,Re.type)});let at=8;for(let Re=l.heightLimit;Re>=0;Re--)if(ee(0,Re,0)){at=Re+2;break}I.current.set(0,at,0),E.current.set(0,0,0),alert("Saved voxel world restored successfully! 🪵")}catch{alert("Error parsing custom stored world configuration.")}}}));const ut=()=>{requestAnimationFrame(ut);const he=D.current,Pe=T.current,ze=y.current,He=L.current,at=U.current;if(!Pe||!he||!ze)return;const Re=new $(0,0,0);(K.current.w||K.current.arrowup)&&(Re.z-=1),(K.current.s||K.current.arrowdown)&&(Re.z+=1),(K.current.a||K.current.arrowleft)&&(Re.x-=1),(K.current.d||K.current.arrowright)&&(Re.x+=1),(h.moveX!==0||h.moveY!==0)&&(Re.x=h.moveX,Re.z=-h.moveY),Re.normalize(),i&&((K.current[" "]||K.current.spacebar)&&(Re.y+=.8),K.current.shift&&(Re.y-=.8));const Ye=new $,tt=he.rotation.y;Ye.x=Re.x*Math.cos(tt)+Re.z*Math.sin(tt),Ye.y=i?Re.y*.12:0,Ye.z=Re.z*Math.cos(tt)-Re.x*Math.sin(tt);const Qe=i?.18:.085;E.current.x=Ye.x*Qe,E.current.z=Ye.z*Qe,i?Ye.y!==0?E.current.y=Ye.y:E.current.y*=.82:(E.current.y-=.012,E.current.y=Math.max(-.4,E.current.y));const z=.22,nt=1.6,xe=I.current,je=E.current,ye=xe.y+je.y;B.current=!1;let dt=!1;const C=[{x:xe.x-z,z:xe.z-z},{x:xe.x+z,z:xe.z-z},{x:xe.x-z,z:xe.z+z},{x:xe.x+z,z:xe.z+z}];if(je.y<0){for(const Me of C)if(ee(Me.x,ye,Me.z)){dt=!0;break}dt?(xe.y=Math.ceil(ye),je.y=0,B.current=!0):xe.y=ye}else{const Me=ye+nt;for(const re of C)if(ee(re.x,Me,re.z)){dt=!0;break}dt?(xe.y=Math.floor(Me)-nt-.05,je.y=0):xe.y=ye}const M=xe.x+je.x;let V=!1;const ue=[.1,.8,1.5];for(const Me of ue)if(ee(M-z,xe.y+Me,xe.z-z)||ee(M+z,xe.y+Me,xe.z-z)||ee(M-z,xe.y+Me,xe.z+z)||ee(M+z,xe.y+Me,xe.z+z)){V=!0;break}V?je.x=0:xe.x=M;const _e=xe.z+je.z;let Ce=!1;for(const Me of ue)if(ee(xe.x-z,xe.y+Me,_e-z)||ee(xe.x+z,xe.y+Me,_e-z)||ee(xe.x-z,xe.y+Me,_e+z)||ee(xe.x+z,xe.y+Me,_e+z)){Ce=!0;break}if(Ce?je.z=0:xe.z=_e,xe.y<-5&&(xe.set(0,10,0),je.set(0,0,0),d&&eh()),Re.lengthSq()>0&&p(Me=>({...Me,distanceTraveled:Me.distanceTraveled+1})),he.position.set(xe.x,xe.y+1.5,xe.z),m({x:Math.round(xe.x),y:Math.round(xe.y),z:Math.round(xe.z)}),He){He.setFromCamera(new Ot(0,0),he);const Me=Array.from(N.current.values()).map(de=>de.mesh),re=He.intersectObjects(Me);if(re.length>0){const Le=re[0].object;at&&(at.position.copy(Le.position),at.visible=!0)}else at&&(at.visible=!1)}for(let Me=F.current.length-1;Me>=0;Me--){const re=F.current[Me];re.life++,re.velocity.y-=.005,re.mesh.position.add(re.velocity),re.mesh.rotation.x+=.05,re.mesh.rotation.y+=.05;const Le=1-re.life/re.maxLife;re.mesh.scale.set(Le,Le,Le),re.life>=re.maxLife&&(Pe.remove(re.mesh),re.mesh.material.dispose(),F.current.splice(Me,1))}ze.render(Pe,he)};return Y.jsx("div",{id:x||"game-3d-canvas-wrapper",ref:b,className:"w-full h-full cursor-crosshair bg-sky-200 select-none overflow-hidden touch-none outline-none",onMouseDown:le,onTouchStart:Ae,onTouchMove:De,onTouchEnd:qe,onTouchCancel:qe})}),hv=[{type:"grass",label:"Grass Block",icon:"🟢",desc:"Lush top soil",color:"bg-emerald-600"},{type:"dirt",label:"Dirt",icon:"🟫",desc:"Standard earth",color:"bg-amber-800"},{type:"stone",label:"Stone",icon:"🪨",desc:"Sturdy granite",color:"bg-neutral-500"},{type:"wood",label:"Wood Trunk",icon:"🪵",desc:"Natural forest logs",color:"bg-orange-800"},{type:"leaves",label:"Leaves",icon:"🍃",desc:"Translucent bush",color:"bg-green-700/80 hover:bg-green-700"},{type:"glass",label:"Glass",icon:"💎",desc:"See-through crystal",color:"bg-cyan-200/40 hover:bg-cyan-200"},{type:"brick",label:"Bricks",icon:"🧱",desc:"Neat masonry",color:"bg-red-600"},{type:"tnt",label:"TNT Box",icon:"💥",desc:"Explosive block",color:"bg-red-500 animate-pulse"},{type:"bedrock",label:"Bedrock",icon:"⬛",desc:"Indestructible coal",color:"bg-stone-900"},{type:"gold",label:"Gold Ore",icon:"👑",desc:"Golden metal",color:"bg-yellow-400 text-yellow-950 font-bold"}];function S2({selectedBlock:s,setSelectedBlock:t,isFlying:i,setIsFlying:r,lightMode:l,setLightMode:c,onClearWorld:d,onSaveWorld:p,onLoadWorld:m,onTriggerJump:h,onTriggerAction:S,actionMode:x,setActionMode:g,stats:b,currentPos:T,soundEnabled:D,setSoundEnabled:y,worldConfig:v,onUpdateConfig:w,id:L}){var K;const[N,k]=ct.useState(!1),[U,I]=ct.useState(!1),E=F=>{D&&Yh(),F()},B=F=>{E(()=>t(F))};return Y.jsxs("div",{id:L||"game-ui-overlay",className:"absolute inset-0 pointer-events-none flex flex-col justify-between p-4 font-sans select-none overflow-hidden z-20",children:[Y.jsxs("div",{className:"flex justify-between items-start w-full pointer-events-auto",children:[Y.jsxs("div",{id:"stats-hud",className:"bg-black/50 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 flex flex-col gap-1 text-xs max-w-sm",children:[Y.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[Y.jsx("span",{className:"text-sm font-semibold tracking-wider text-green-400",children:"MINECRAFT VIRTUAL"}),Y.jsx("span",{className:"bg-yellow-500 text-black font-extrabold px-1 rounded text-[9px] animate-pulse",children:"MOBILE POCKET"})]}),Y.jsxs("div",{className:"font-mono text-gray-300 flex flex-col gap-0.5",children:[Y.jsxs("div",{children:["📍 Pos: ",Y.jsxs("span",{className:"text-white font-semibold",children:["X: ",T.x,", Y: ",T.y,", Z: ",T.z]})]}),Y.jsxs("div",{className:"flex gap-2 text-[10px] text-gray-400 mt-1",children:[Y.jsxs("span",{children:["⛏️ Broke: ",b.blocksBroken]}),Y.jsxs("span",{children:["🧱 Placed: ",b.blocksPlaced]}),Y.jsxs("span",{children:["💣 TNT: ",b.tntExploded]})]})]}),Y.jsx("div",{className:"flex gap-1 mt-1.5 pt-1 border-t border-white/5",children:Array.from({length:5}).map((F,j)=>Y.jsx("span",{className:"text-[11px] text-red-500 animate-pulse",children:"❤️"},j))})]}),Y.jsxs("div",{id:"top-bar-buttons",className:"flex gap-2",children:[Y.jsx("button",{id:"tutorials-btn",onClick:()=>E(()=>I(!0)),className:"w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 text-white flex items-center justify-center border border-white/10 transition active:scale-95 shadow-lg pointer-events-auto",title:"How to Play",children:Y.jsx(gy,{size:18})}),Y.jsx("button",{id:"audio-toggle-btn",onClick:()=>E(()=>y(!D)),className:"w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 text-white flex items-center justify-center border border-white/10 transition active:scale-95 shadow-lg pointer-events-auto",title:"Toggle SFX",children:D?Y.jsx(ky,{size:18}):Y.jsx(Wy,{size:18})}),Y.jsx("button",{id:"flying-toggle-btn",onClick:()=>E(()=>r(!i)),className:`w-10 h-10 rounded-xl flex items-center justify-center border transition active:scale-95 shadow-lg pointer-events-auto ${i?"bg-blue-600 border-blue-400 text-white animate-bounce":"bg-black/50 border-white/10 text-white hover:bg-black/75"}`,title:"Toggle Fly Mode",children:Y.jsx(Sy,{size:18})}),Y.jsxs("button",{id:"time-of-day-btn",onClick:()=>{E(()=>{c({day:"sunset",sunset:"night",night:"sunrise",sunrise:"day"}[l])})},className:"w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 text-white flex items-center justify-center border border-white/10 transition active:scale-95 shadow-lg pointer-events-auto",title:"Cycle Time",children:[l==="day"&&Y.jsx(vd,{size:18,className:"text-amber-400"}),l==="sunset"&&Y.jsx(vd,{size:18,className:"text-orange-500 animate-pulse"}),l==="night"&&Y.jsx(Uy,{size:18,className:"text-sky-300"}),l==="sunrise"&&Y.jsx(vd,{size:18,className:"text-pink-400"})]}),Y.jsx("button",{id:"settings-trigger-btn",onClick:()=>E(()=>k(!N)),className:"w-10 h-10 rounded-xl bg-black/50 hover:bg-black/75 text-white flex items-center justify-center border border-white/10 transition active:scale-95 shadow-lg pointer-events-auto",title:"Settings Panel",children:Y.jsx(r_,{size:18})})]})]}),N&&Y.jsxs("div",{id:"side-settings-card",className:"absolute top-16 right-4 max-h-[80%] w-72 bg-neutral-900/95 backdrop-blur-md rounded-2xl border border-white/10 text-white shadow-2xl p-5 pointer-events-auto flex flex-col gap-4 overflow-y-auto",children:[Y.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-white/10",children:[Y.jsxs("h3",{className:"text-sm font-bold tracking-wider text-yellow-500 flex items-center gap-1.5",children:[Y.jsx(r_,{size:16})," GAME SETTINGS"]}),Y.jsx("button",{id:"close-settings-btn",onClick:()=>E(()=>k(!1)),className:"text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition",children:Y.jsx(s_,{size:16})})]}),Y.jsxs("div",{className:"flex flex-col gap-3 text-xs",children:[Y.jsxs("div",{className:"flex flex-col gap-1.5",children:[Y.jsx("label",{className:"text-gray-400 font-medium",children:"World Generation Type"}),Y.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:["hills","flat","caves","mountains"].map(F=>Y.jsx("button",{onClick:()=>E(()=>w({type:F})),className:`p-2 rounded-lg border capitalize font-semibold tracking-wide transition ${v.type===F?"bg-green-600 border-green-500 text-white":"bg-black/35 border-white/5 text-gray-300 hover:bg-black/50"}`,children:F},F))})]}),Y.jsxs("div",{className:"flex flex-col gap-1 pt-1",children:[Y.jsxs("div",{className:"flex justify-between text-gray-400",children:[Y.jsx("span",{children:"World Scale:"}),Y.jsxs("span",{className:"text-white font-mono font-bold",children:[v.sizeX,"x",v.sizeZ]})]}),Y.jsx("input",{type:"range",min:"10",max:"30",step:"5",value:v.sizeX,onChange:F=>{const j=parseInt(F.target.value);w({sizeX:j,sizeZ:j})},className:"w-full accent-green-500 cursor-pointer text-green-500 bg-neutral-800"})]}),Y.jsxs("div",{className:"flex flex-col gap-1",children:[Y.jsx("label",{className:"text-gray-400",children:"Custom Seed:"}),Y.jsx("input",{type:"text",maxLength:12,value:v.seed,onChange:F=>w({seed:F.target.value}),className:"p-2 rounded-lg bg-black/40 border border-white/10 text-white font-mono placeholder-gray-500 outline-none focus:border-green-500",placeholder:"e.g. 123456"})]}),Y.jsxs("div",{className:"flex flex-col gap-2 mt-2 pt-3 border-t border-white/5",children:[Y.jsxs("button",{id:"save-world-btn",onClick:()=>E(p),className:"p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 border border-blue-400 font-bold tracking-wide shadow-md",children:[Y.jsx(zy,{size:14})," Save World State"]}),Y.jsxs("button",{id:"load-world-btn",onClick:()=>E(m),className:"p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center gap-2 border border-slate-500 font-bold tracking-wide shadow-md",children:[Y.jsx(Oy,{size:14})," Restore Previous Save"]}),Y.jsxs("button",{id:"reset-world-btn",onClick:()=>{confirm("Rebuild entire world with active seed? Custom blocks will be reset.")&&E(d)},className:"p-2.5 rounded-xl bg-red-800 hover:bg-red-700 text-white flex items-center justify-center gap-2 border border-red-500 font-bold tracking-wide shadow-md",children:[Y.jsx(Gy,{size:14})," Rebuild Voxel World"]})]})]})]}),U&&Y.jsx("div",{id:"tutorial-overlay",className:"absolute inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center font-sans p-4 pointer-events-auto z-40",children:Y.jsxs("div",{id:"tutorial-card",className:"bg-neutral-900 border border-white/15 text-white max-w-lg w-full rounded-2xl p-6 flex flex-col gap-4 shadow-2xl relative",children:[Y.jsx("button",{id:"close-tutorial-top-btn",onClick:()=>E(()=>I(!1)),className:"absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/5 p-1 rounded-lg",children:Y.jsx(s_,{size:18})}),Y.jsxs("h2",{className:"text-lg font-extrabold text-yellow-500 tracking-wider flex items-center gap-1.5",children:[Y.jsx(mv,{className:"animate-bounce",size:20})," HOW TO CONTROLS"]}),Y.jsxs("div",{className:"flex flex-col gap-3.5 text-xs text-gray-300 leading-relaxed overflow-y-auto max-h-[70vh]",children:[Y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Y.jsxs("div",{className:"bg-black/30 p-3 rounded-xl border border-white/5",children:[Y.jsx("h4",{className:"font-bold text-white mb-2 pb-1 border-b border-white/10",children:"📱 MOBILE CONTROLS"}),Y.jsxs("ul",{className:"flex flex-col gap-1.5",children:[Y.jsxs("li",{children:["🕹️ ",Y.jsx("span",{className:"font-semibold text-white",children:"Left Joystick"}),": Slide to go Forward/Back/Left/Right."]}),Y.jsxs("li",{children:["👆 ",Y.jsx("span",{className:"font-semibold text-white",children:"Swipe Right Side"}),": Drag with finger on screen to aim / look around."]}),Y.jsxs("li",{children:["⛏️/🧱 ",Y.jsx("span",{className:"font-semibold text-white",children:"Action Toggle"}),": Choose ",Y.jsx("span",{className:"text-yellow-500 font-bold",children:"DIG"})," or ",Y.jsx("span",{className:"text-yellow-500 font-bold",children:"BUILD"})," mode, then TAP directly on any block in the center cursor to destroy or build!"]}),Y.jsxs("li",{children:["🏃‍♀️ ",Y.jsx("span",{className:"font-semibold text-white",children:"On-Screen HUD Buttons"}),": Use Jump, fly, or action triggers on the right side."]})]})]}),Y.jsxs("div",{className:"bg-black/30 p-3 rounded-xl border border-white/5",children:[Y.jsx("h4",{className:"font-bold text-white mb-2 pb-1 border-b border-white/10",children:"💻 DESKTOP CONTROLS"}),Y.jsxs("ul",{className:"flex flex-col gap-1.5",children:[Y.jsxs("li",{children:["⌨️ ",Y.jsx("span",{className:"font-semibold text-white",children:"WASD Keys"}),": Walk and navigate the landscape."]}),Y.jsxs("li",{children:["🐭 ",Y.jsx("span",{className:"font-semibold text-white",children:"Mouse Drag / Locked Eye"}),": Swing around for direction."]}),Y.jsxs("li",{children:["🖱️ ",Y.jsx("span",{className:"font-semibold text-white",children:"Left Click"}),": Mine / Break highlighted block."]}),Y.jsxs("li",{children:["🖱️ ",Y.jsx("span",{className:"font-semibold text-white",children:"Right Click"}),": Place selected Block style."]}),Y.jsxs("li",{children:["⌨️ ",Y.jsx("span",{className:"font-semibold text-white",children:"Spacebar"}),": Tap to jump up."]}),Y.jsxs("li",{children:["⌨️ ",Y.jsx("span",{className:"font-semibold text-white",children:"Keys [1-9]"}),": Quick Hotbar slot selector."]})]})]})]}),Y.jsxs("div",{className:"bg-amber-950/30 p-3 rounded-xl border border-amber-900/30 text-amber-200",children:[Y.jsxs("h4",{className:"font-bold mb-1 flex items-center gap-1",children:[Y.jsx(My,{size:12})," SPECIAL BLOCK: TNT BOX"]}),Y.jsxs("p",{children:["Equip and place ",Y.jsx("span",{className:"font-semibold",children:"TNT"}),". Under ",Y.jsx("b",{children:"⛏️ DIG MODE"}),", clicking on an existing TNT block will arm it. The TNT flashes 5 times with warning clicks before detonating in a powerful sonic dust blast, shattering all surrounding structures! Try it!"]})]}),Y.jsxs("div",{className:"bg-blue-950/20 p-3 rounded-xl border border-blue-900/20 text-blue-200",children:[Y.jsxs("h4",{className:"font-bold mb-1 flex items-center gap-1 pt-0.5",children:[Y.jsx(Yy,{size:11})," DESKTOP LOOK DRAG"]}),Y.jsx("p",{className:"text-[11px]",children:"To look around on PC, click and drag on the screen, or just turn your camera. Mobile players can drag anywhere in the upper half of the window."})]})]}),Y.jsx("button",{id:"confirm-tutorial-btn",onClick:()=>E(()=>I(!1)),className:"bg-green-600 hover:bg-green-500 py-3.5 rounded-xl font-extrabold text-xs text-white uppercase tracking-wider transition hover:shadow-lg shadow-green-900/20",children:"Start Minining & Building!"})]})}),Y.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:Y.jsxs("div",{className:"w-[18px] h-[18px] relative flex items-center justify-center",children:[Y.jsx("div",{className:"absolute w-[18px] h-[2px] bg-white opacity-80 mix-blend-difference"}),Y.jsx("div",{className:"absolute w-[2px] h-[18px] bg-white opacity-80 mix-blend-difference"})]})}),Y.jsxs("div",{id:"bottom-ui-hud-panel",className:"flex justify-between items-end w-full",children:[Y.jsx("div",{className:"w-36 h-36 flex items-center justify-center pointer-events-auto"}),Y.jsxs("div",{id:"hotbar",className:"flex flex-col gap-2 items-center bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10 pointer-events-auto mb-1 max-w-[50vw] sm:max-w-none",children:[Y.jsxs("span",{className:"text-[11px] font-bold text-yellow-400 bg-neutral-900/40 px-2 py-0.5 rounded-full border border-yellow-500/10 shadow-sm animate-pulse",children:["Active: ",(K=hv.find(F=>F.type===s))==null?void 0:K.label]}),Y.jsx("div",{className:"flex gap-1.5 overflow-x-auto pb-1 max-w-[80vw] no-scrollbar",children:hv.map(F=>Y.jsxs("button",{id:`hotbar-slot-${F.type}`,onClick:()=>B(F.type),className:`w-11 h-11 flex flex-col items-center justify-center rounded-xl transition cursor-pointer relative ${s===F.type?"bg-yellow-500 shadow-lg border-2 border-white scale-110 -translate-y-1":"bg-black/40 border border-white/5 text-gray-300 hover:bg-black/60 hover:-translate-y-0.5"}`,title:`${F.label} - ${F.desc}`,children:[Y.jsx("span",{className:"text-xl leading-none",children:F.icon}),s===F.type&&Y.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"})]},F.type))})]}),Y.jsxs("div",{id:"mobile-right-triggers",className:"flex gap-3 pointer-events-auto items-end mb-1",children:[Y.jsxs("div",{className:"flex flex-col gap-2",children:[Y.jsxs("button",{id:"mobile-action-mode-dig-btn",onClick:()=>E(()=>g("break")),className:`w-14 h-14 rounded-full flex flex-col items-center justify-center font-bold text-xs transition active:scale-90 border shadow-lg ${x==="break"?"bg-red-600 border-red-400 text-white font-extrabold animate-pulse":"bg-neutral-800/80 border-white/15 text-gray-300 hover:bg-neutral-800"}`,children:[Y.jsx("span",{className:"text-lg",children:"⛏️"}),Y.jsx("span",{className:"text-[9px] uppercase tracking-tighter mt-0.5 leading-none",children:"Dig"})]}),Y.jsxs("button",{id:"mobile-action-mode-build-btn",onClick:()=>E(()=>g("place")),className:`w-14 h-14 rounded-full flex flex-col items-center justify-center font-bold text-xs transition active:scale-90 border shadow-lg ${x==="place"?"bg-green-600 border-green-500 text-white font-extrabold animate-pulse":"bg-neutral-800/80 border-white/15 text-gray-300 hover:bg-neutral-800"}`,children:[Y.jsx("span",{className:"text-lg",children:"🧱"}),Y.jsx("span",{className:"text-[9px] uppercase tracking-tighter mt-0.5 leading-none",children:"Build"})]})]}),Y.jsxs("button",{id:"mobile-jump-btn",onClick:()=>h(),className:"w-18 h-18 rounded-full bg-blue-600/90 active:bg-blue-500 active:scale-90 hover:bg-blue-500 border border-blue-400 text-white flex flex-col items-center justify-center select-none cursor-pointer font-bold shadow-2xl",children:[Y.jsx("span",{className:"text-2xl",children:"🦘"}),Y.jsx("span",{className:"text-[9px] uppercase tracking-widest text-blue-200 mt-1",children:"Jump"})]})]})]})]})}function y2({onChange:s,id:t}){const[i,r]=ct.useState(!1),[l,c]=ct.useState({x:0,y:0}),d=ct.useRef(null),p=ct.useRef(null);ct.useEffect(()=>{i||(c({x:0,y:0}),s(0,0))},[i,s]);const m=x=>{if(i)return;const g=x.changedTouches[0];p.current=g.identifier,r(!0),h(x)},h=x=>{if(!i||p.current===null||!d.current)return;let g=null;for(let U=0;U<x.touches.length;U++)if(x.touches[U].identifier===p.current){g=x.touches[U];break}if(!g)return;const b=d.current.getBoundingClientRect(),T=b.left+b.width/2,D=b.top+b.height/2,y=g.clientX-T,v=g.clientY-D,w=b.width/2,L=Math.sqrt(y*y+v*v);let N=0,k=0;if(L===0)c({x:0,y:0});else{const U=Math.min(L,w),I=Math.atan2(v,y),E=Math.cos(I)*U,B=Math.sin(I)*U;c({x:E,y:B}),N=E/w,k=-(B/w)}s(N,k)},S=x=>{if(!i)return;let g=!1;for(let b=0;b<x.changedTouches.length;b++)if(x.changedTouches[b].identifier===p.current){g=!0;break}g&&(r(!1),p.current=null)};return Y.jsxs("div",{id:t||"virtual-joystick",ref:d,className:"relative w-32 h-32 rounded-full border-4 border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center select-none active:scale-95 transition-transform duration-100 touch-none",onTouchStart:m,onTouchMove:h,onTouchEnd:S,onTouchCancel:S,children:[Y.jsx("div",{className:"absolute w-2 h-2 rounded-full bg-white/10"}),Y.jsx("div",{className:"w-14 h-14 rounded-full bg-neutral-200 border-2 border-white shadow-xl flex items-center justify-center select-none cursor-pointer transition-shadow",style:{transform:`translate(${l.x}px, ${l.y}px)`,boxShadow:i?"0 10px 20px rgba(0,0,0,0.4)":"0 4px 6px rgba(0,0,0,0.2)"},children:Y.jsx("div",{className:"w-10 h-10 rounded-full border border-black/10 bg-neutral-300 flex items-center justify-center",children:Y.jsx("div",{className:"w-6 h-6 rounded-full border border-black/15 bg-neutral-400/80"})})})]})}function M2(){const[s,t]=ct.useState(!1),[i,r]=ct.useState("grass"),[l,c]=ct.useState(!1),[d,p]=ct.useState("day"),[m,h]=ct.useState("break"),[S,x]=ct.useState(!0),[g,b]=ct.useState({x:0,y:10,z:0}),[T,D]=ct.useState({blocksPlaced:0,blocksBroken:0,tntExploded:0,distanceTraveled:0}),[y,v]=ct.useState({seed:"777",type:"hills",sizeX:15,sizeZ:15,heightLimit:12}),[w,L]=ct.useState({moveX:0,moveY:0}),N=ct.useRef(null),k=ct.useCallback((j,ce)=>{L({moveX:j,moveY:ce})},[]),U=ct.useCallback(j=>{v(ce=>({...ce,...j}))},[]),I=ct.useCallback(()=>{N.current&&N.current.triggerJump()},[]),E=ct.useCallback(()=>{N.current&&N.current.clearWorld()},[]),B=ct.useCallback(()=>{N.current&&N.current.saveWorld()},[]),K=ct.useCallback(()=>{N.current&&N.current.loadWorld()},[]),F=()=>{S&&Yh(),t(!0)};return Y.jsx("div",{className:"w-screen h-screen relative bg-neutral-950 overflow-hidden font-sans select-none flex items-center justify-center",children:s?Y.jsxs("div",{id:"game-active-viewport",className:"w-full h-full relative",children:[Y.jsx(x2,{ref:N,selectedBlock:i,isFlying:l,lightMode:d,worldConfig:y,actionMode:m,soundEnabled:S,setStats:D,setCurrentPos:b,joystickState:w,onUpdateConfig:U}),Y.jsx("div",{className:"absolute bottom-6 left-6 pointer-events-auto z-30",children:Y.jsx(y2,{onChange:k})}),Y.jsx(S2,{selectedBlock:i,setSelectedBlock:r,isFlying:l,setIsFlying:c,lightMode:d,setLightMode:p,onClearWorld:E,onSaveWorld:B,onLoadWorld:K,onTriggerJump:I,onTriggerAction:j=>h(j),actionMode:m,setActionMode:h,stats:T,currentPos:g,soundEnabled:S,setSoundEnabled:x,worldConfig:y,onUpdateConfig:U}),Y.jsx("button",{id:"quit-game-to-launcher-btn",onClick:()=>{S&&Yh(),t(!1)},className:"absolute top-4 left-44 w-10 h-10 rounded-xl bg-red-950/80 hover:bg-red-900/90 text-red-200 flex items-center justify-center border border-red-800/30 transition shadow-lg pointer-events-auto z-30 hover:scale-105",title:"Quit back to Launcher",children:"❌"})]}):Y.jsxs("div",{id:"launcher-splash-screen",className:"relative w-full max-w-4xl min-h-[550px] p-8 md:p-12 mx-4 bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-3xl text-white shadow-2xl flex flex-col justify-between overflow-hidden",children:[Y.jsx("div",{className:"absolute inset-0 -z-10 bg-radial-gradient from-emerald-500/10 via-amber-500/5 to-transparent pointer-events-none"}),Y.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[Y.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest animate-pulse",children:[Y.jsx(mv,{size:11})," 100% Client-Side WebGL Edition"]}),Y.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-emerald-400 select-all font-display text-center drop-shadow-xl mt-2 pb-1",children:"MINECRAFT POCKET"}),Y.jsx("p",{className:"text-xs text-neutral-400 text-center font-mono tracking-wider",children:"Designed for Mobile Controllers & Laptop Controls. No Installs."})]}),Y.jsxs("div",{id:"launcher-modules-grid",className:"grid grid-cols-1 md:grid-cols-3 gap-6 my-8",children:[Y.jsxs("div",{className:"bg-neutral-950/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-between gap-4",children:[Y.jsxs("div",{children:[Y.jsxs("span",{className:"text-[10px] text-green-400 font-extrabold uppercase tracking-widest flex items-center gap-1 mb-2",children:[Y.jsx(vy,{size:11})," 01 / SEED SCANNER"]}),Y.jsx("h3",{className:"text-sm font-bold text-white mb-1.5",children:"Procedural Seed"}),Y.jsx("p",{className:"text-[11px] text-gray-500 leading-normal",children:"Type custom seed coordinates or random letters. Changes how landscapes shape."})]}),Y.jsx("input",{type:"text",maxLength:10,value:y.seed,onChange:j=>U({seed:j.target.value}),placeholder:"e.g. 777, 888",className:"w-full text-xs font-mono p-3 bg-neutral-900 border border-white/10 rounded-xl text-yellow-400 uppercase tracking-widest outline-none focus:border-yellow-500 text-center uppercase"})]}),Y.jsxs("div",{className:"bg-neutral-950/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-between gap-4",children:[Y.jsxs("div",{children:[Y.jsxs("span",{className:"text-[10px] text-indigo-400 font-extrabold uppercase tracking-widest flex items-center gap-1 mb-2",children:[Y.jsx(Ay,{size:11})," 02 / BIOMES"]}),Y.jsx("h3",{className:"text-sm font-bold text-white mb-1.5",children:"Voxel Landscapes"}),Y.jsx("p",{className:"text-[11px] text-gray-500 leading-normal",children:"Chose procedural environment patterns, mountains, or flat sands."})]}),Y.jsx("div",{className:"grid grid-cols-2 gap-1.5 text-xs font-semibold",children:["hills","flat","caves","mountains"].map(j=>Y.jsx("button",{onClick:()=>U({type:j}),className:`py-2 px-1 rounded-xl border capitalize transition active:scale-95 ${y.type===j?"bg-gradient-to-r from-emerald-600 to-green-600 border-green-400 text-white font-extrabold shadow-lg":"bg-neutral-900/60 border-white/5 text-gray-400 hover:text-white hover:bg-neutral-800"}`,children:j},j))})]}),Y.jsxs("div",{className:"bg-neutral-950/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-between gap-4",children:[Y.jsxs("div",{children:[Y.jsxs("span",{className:"text-[10px] text-pink-400 font-extrabold uppercase tracking-widest flex items-center gap-1 mb-2",children:[Y.jsx(Dy,{size:11})," 03 / DIMENSION"]}),Y.jsx("h3",{className:"text-sm font-bold text-white mb-1.5",children:"Boundary Scales"}),Y.jsx("p",{className:"text-[11px] text-gray-500 leading-normal",children:"Expand block render ranges (Bigger worlds might limit framerates on phones)."})]}),Y.jsxs("div",{className:"flex flex-col gap-2",children:[Y.jsxs("div",{className:"flex justify-between text-[11px]",children:[Y.jsxs("span",{className:"text-gray-400 font-mono",children:["Bound: ",y.sizeX,"x",y.sizeZ]}),Y.jsx("span",{className:"text-yellow-400",children:"FPS Optimized"})]}),Y.jsx("input",{type:"range",min:"10",max:"30",step:"5",value:y.sizeX,onChange:j=>{const ce=parseInt(j.target.value);U({sizeX:ce,sizeZ:ce})},className:"w-full h-1.5 rounded bg-neutral-900 text-green-500 cursor-pointer accent-emerald-500"})]})]})]}),Y.jsxs("div",{className:"p-4 bg-neutral-950/30 border border-white/5 rounded-2xl flex items-start gap-3 mt-1 text-xs",children:[Y.jsx("div",{className:"p-2 rounded-lg bg-orange-600/10 text-orange-400 border border-orange-500/10 shrink-0",children:Y.jsx(Cy,{size:14,className:"animate-pulse"})}),Y.jsxs("div",{className:"flex flex-col gap-0.5 leading-normal text-neutral-400",children:[Y.jsx("strong",{className:"text-white",children:"Mobile Touch Optimization"}),Y.jsxs("span",{children:["To look around on phone, swipe your finger on empty regions of the scene. Tap on any voxel using ",Y.jsx("b",{children:"DIG ⛏️"})," or ",Y.jsx("b",{children:"BUILD 🧱"})," mode to break or place blocks. Move analog stick on left to crawl."]})]})]}),Y.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center justify-between mt-8 pt-4 border-t border-white/5 w-full",children:[Y.jsxs("div",{className:"flex gap-4 items-center",children:[Y.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-gray-400 cursor-pointer hover:text-white transition",children:[Y.jsx("input",{type:"checkbox",checked:S,onChange:j=>x(j.target.checked),className:"w-4 h-4 rounded border-gray-700 bg-neutral-950 text-emerald-500 focus:ring-emerald-500 cursor-pointer"}),"Enable Retro Audio SFX"]}),Y.jsxs("label",{className:"flex items-center gap-2 text-xs font-semibold text-gray-400 cursor-pointer hover:text-white transition",children:[Y.jsx("input",{type:"checkbox",checked:l,onChange:j=>c(j.target.checked),className:"w-4 h-4 rounded border-gray-700 bg-neutral-950 text-emerald-500 focus:ring-emerald-500 cursor-pointer"}),"Spawn In Flight Mode"]})]}),Y.jsxs("button",{id:"launcher-start-gameloop-btn",onClick:F,className:"py-4 px-10 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 border border-green-400 hover:from-green-400 hover:to-emerald-500 hover:shadow-2xl hover:shadow-green-500/25 transition duration-150 active:scale-95 font-extrabold text-sm tracking-widest text-shadow uppercase flex items-center gap-3 shadow-lg pointer-events-auto",children:[Y.jsx(Ey,{size:16})," LAUNCH MINECRAFT WORLD"]})]})]})})}cy.createRoot(document.getElementById("root")).render(Y.jsx(ct.StrictMode,{children:Y.jsx(M2,{})}));
