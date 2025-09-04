(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[998],{9662:function(e,t,n){var r=n(7854),i=n(614),s=n(6330),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},6077:function(e,t,n){var r=n(7854),i=n(614),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7854),i=n(7976),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},9670:function(e,t,n){var r=n(7854),i=n(111),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),l=s(c),u=i(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4326:function(e,t,n){var r=n(3812),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(7854),i=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),l=r.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=l(e),c))?n:u?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(3812),i=r("".replace),s=function(e){return String(Error(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=i(e,o,"");return e}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(1320),a=n(3505),c=n(9920),l=n(4705);e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,_=e.global,g=e.stat;if(u=_?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(_?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},3812:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(3812),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),i=n(3812),s=n(7293),o=n(4326),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(3812),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,s,o=n(8536),a=n(7854),c=n(3812),l=n(111),u=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",_=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw _("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new g),w=c(b.get),E=c(b.has),k=c(b.set);r=function(e,t){if(E(b,e))throw new _(m);return t.facade=e,k(b,e,t),t},i=function(e){return w(b,e)||{}},s=function(e){return E(b,e)}}else{var C=f("state");p[C]=!0,r=function(e,t){if(h(e,C))throw new _(m);return t.facade=e,u(e,C,t),t},i=function(e){return h(e,C)?e[C]:{}},s=function(e){return h(e,C)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),i=n(5005),s=n(614),o=n(7976),a=n(3307),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},133:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(7854),i=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),l=r.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(3812);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(3812),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~o(u,n)||c(u,n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(3812),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(7854),i=n(6916),s=n(614),o=n(111),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(3812),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},1320:function(e,t,n){var r=n(7854),i=n(614),s=n(2597),o=n(8880),a=n(3505),c=n(2788),l=n(9909),u=n(6530).CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var l,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,_=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(_).slice(0,7)&&(_="["+String(_).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==_)&&o(n,"name",_),l=d(n),l.source||(l.source=f.join("string"==typeof _?_:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},4488:function(e,t,n){var r=n(7854),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3505),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!==r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),i=n(4488),s=r.Object;e.exports=function(e){return s(i(e))}},7593:function(e,t,n){var r=n(7854),i=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),l=n(5112),u=r.TypeError,h=l("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(7854),i=n(648),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e,t,n){var r=n(7854),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(3812),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),l=i("wks"),u=r.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&s(u,e)?l[e]=u[e]:l[e]=c&&h?h(t):d(t)}return l[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),l=n(9587),u=n(6277),h=n(8340),d=n(7741),f=n(2914),p=n(1913);e.exports=function(e,t,n,m){var _=m?2:1,g=e.split("."),v=g[g.length-1],y=r.apply(null,g);if(y){var b=y.prototype;if(!p&&i(b,"cause")&&delete b.cause,!n)return y;var w=r("Error"),E=t((function(e,t){var n=u(m?t:e,void 0),r=m?new y(e):new y;return void 0!==n&&s(r,"message",n),f&&s(r,"stack",d(r.stack,2)),this&&o(b,this)&&l(r,this,E),arguments.length>_&&h(r,arguments[_]),r}));if(E.prototype=b,"Error"!==v&&(a?a(E,w):c(E,w,{name:!0})),c(E,y),!p)try{b.name!==v&&s(b,"name",v),b.constructor=E}catch(k){}return E}}},1703:function(e,t,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],l=7!==Error("e",{cause:7}).cause,u=function(e,t){var n={};n[e]=o(e,t,l),r({global:!0,forced:l},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,l),r({target:a,stat:!0,forced:l},n)}};u("Error",(function(e){return function(t){return s(e,this,arguments)}})),u("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),u("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),u("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),u("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),u("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),u("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},2801:function(e,t,n){"use strict";var r=n(2109),i=n(5005),s=n(9114),o=n(3070).f,a=n(2597),c=n(5787),l=n(9587),u=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",m=i("Error"),_=i(p),g=function(){c(this,v);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),r=new _(t,n),i=m(t);return i.name=p,o(r,"stack",s(1,d(i.stack,1))),l(r,this,g),r},v=g.prototype=_.prototype,y="stack"in m(p),b="stack"in new _(1,2),w=y&&!b;r({global:!0,forced:f||w},{DOMException:w?g:_});var E=i(p),k=E.prototype;if(k.constructor!==E)for(var C in f||o(k,"constructor",s(1,E)),h)if(a(h,C)){var T=h[C],I=T.s;a(E,I)||o(E,I,s(6,T.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return m},DV:function(){return D},GJ:function(){return A},L:function(){return u},LL:function(){return I},Pz:function(){return P},UI:function(){return F},US:function(){return c},Yr:function(){return w},ZR:function(){return T},b$:function(){return y},cI:function(){return N},dS:function(){return Y},eu:function(){return k},g5:function(){return s},gK:function(){return G},gQ:function(){return H},h$:function(){return l},hl:function(){return E},hu:function(){return i},m9:function(){return Q},ne:function(){return V},p$:function(){return d},pd:function(){return q},r3:function(){return L},ru:function(){return v},tV:function(){return h},uI:function(){return g},ug:function(){return J},vZ:function(){return U},w1:function(){return b},w9:function(){return x},xO:function(){return j},xb:function(){return M},z$:function(){return _},zd:function(){return W}});n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=o(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function E(){return"object"===typeof indexedDB}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="FirebaseError";class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new T(r,o,n);return a}}function S(e,t){return e.replace(O,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return JSON.parse(e)}function P(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=N(h(s[0])||""),n=N(h(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:r,signature:i}},x=function(e){const t=R(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},A=function(e){const t=R(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if($(n)&&$(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function W(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):u<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const e=(s<<5|s>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<t){if(0===s)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<t)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function V(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=z(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},J=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){return e&&e._delegate?e._delegate:e}},7522:function(e,t,n){"use strict";n.d(t,{ZP:function(){return T}});var r=n(3396),i=n(9242),s=n(7139);const o=["innerHTML"];function a(e,t,n,a,c,l){return(0,r.wg)(),(0,r.j4)(i.uT,{"enter-active-class":l.transition.enter,"leave-active-class":l.transition.leave},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("div",{class:(0,s.C_)(["c-toast",`c-toast--${n.type}`,`c-toast--${n.position}`]),onMouseover:t[0]||(t[0]=e=>l.toggleTimer(!0)),onMouseleave:t[1]||(t[1]=e=>l.toggleTimer(!1)),onClick:t[2]||(t[2]=(...e)=>l.click&&l.click(...e)),role:"alert",innerHTML:n.message},null,42,o),[[i.F8,c.isActive]])])),_:1},8,["enter-active-class","leave-active-class"])}const c=e=>{"undefined"!==typeof e.remove?e.remove():e.parentNode.removeChild(e)};class l{constructor(e,t){this.startedAt=Date.now(),this.callback=e,this.delay=t,this.timer=setTimeout(e,t)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const u={TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"};var h=Object.freeze(u);function d(e,t,n){let r=null;switch(e){case u.TOP:case u.TOP_RIGHT:case u.TOP_LEFT:r=t;break;case u.BOTTOM:case u.BOTTOM_RIGHT:case u.BOTTOM_LEFT:r=n;break}return r}class f{constructor(){this.queue={}}$on(e,t){this.queue[e]=this.queue[e]||[],this.queue[e].push(t)}$off(e,t){if(this.queue[e])for(var n=0;n<this.queue[e].length;n++)if(this.queue[e][n]===t){this.queue[e].splice(n,1);break}}$emit(e,t){this.queue[e]&&this.queue[e].forEach((function(e){e(t)}))}}var p=new f,m={name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"default"},position:{type:String,default:h.BOTTOM_RIGHT,validator(e){return Object.values(h).includes(e)}},maxToasts:{type:[Number,Boolean],default:!1},duration:{type:[Number,Boolean],default:4e3},dismissible:{type:Boolean,default:!0},queue:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},useDefaultCss:{type:Boolean,default:!0},onClose:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1,timer:null}},beforeMount(){this.createParents(),this.setDefaultCss(),this.setupContainer()},mounted(){this.showNotice(),p.$on("toast-clear",this.close)},methods:{createParents(){this.parentTop=document.querySelector(".c-toast-container--top"),this.parentBottom=document.querySelector(".c-toast-container--bottom"),this.parentTop&&this.parentBottom||(this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="c-toast-container c-toast-container--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="c-toast-container c-toast-container--bottom"))},setDefaultCss(){const e=this.useDefaultCss?"add":"remove";this.parentTop.classList[e]("v--default-css"),this.parentBottom.classList[e]("v--default-css")},setupContainer(){const e=document.body;e.appendChild(this.parentTop),e.appendChild(this.parentBottom)},shouldQueue(){return!(!this.queue&&!1===this.maxToasts)&&(!1!==this.maxToasts?this.maxToasts<=this.parentTop.childElementCount+this.parentBottom.childElementCount:this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},showNotice(){this.shouldQueue()?this.queueTimer=setTimeout(this.showNotice,250):(this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.timer=!1!==this.duration?new l(this.close,this.duration):null)},click(){this.onClick.apply(null,arguments),this.dismissible&&this.close()},toggleTimer(e){this.timer&&this.pauseOnHover&&(e?this.timer.pause():this.timer.resume())},stopTimer(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer)},close(){this.stopTimer(),this.isActive=!1,setTimeout((()=>{this.onClose.apply(null,arguments),c(this.$el)}),150)}},computed:{correctParent(){return d(this.position,this.parentTop,this.parentBottom)},transition(){return d(this.position,{enter:"fadeInDown",leave:"fadeOut"},{enter:"fadeInUp",leave:"fadeOut"})}},beforeUnmount(){p.$off("toast-clear",this.close)}},_=n(89);const g=(0,_.Z)(m,[["render",a]]);var v=g;const y=()=>"undefined"!==typeof document&&document.createElement("div"),b=(e,{props:t,children:n,element:s,app:o}={})=>{let a=s||y(),c=(0,r.h)(e,t,n);o&&o._context&&(c.appContext=o._context),(0,i.sY)(c,a);const l=()=>{a&&(0,i.sY)(null,a),a=null,c=null};return{vNode:c,destroy:l,el:a}};var w=b;const E=(e={})=>({show(t,n={}){let r={message:t,...n};const i=w(v,{props:{...e,...r}});return i},clear(){p.$emit("toast-clear")},success(e,t={}){return t.type="success",this.show(e,t)},error(e,t={}){return t.type="error",this.show(e,t)},info(e,t={}){return t.type="info",this.show(e,t)},warning(e,t={}){return t.type="warning",this.show(e,t)}});var k=E;const C=(e,t={})=>{let n=k(t);e.$toast=n,e.config.globalProperties.$toast=n};v.install=C;var T=v},1448:function(e,t,n){"use strict";n.r(t),n.d(t,{afterMain:function(){return E},afterRead:function(){return y},afterWrite:function(){return T},applyStyles:function(){return L},arrow:function(){return ie},auto:function(){return a},basePlacements:function(){return c},beforeMain:function(){return b},beforeRead:function(){return g},beforeWrite:function(){return k},bottom:function(){return i},clippingParents:function(){return h},computeStyles:function(){return ue},createPopper:function(){return at},createPopperBase:function(){return st},createPopperLite:function(){return lt},detectOverflow:function(){return Re},end:function(){return u},eventListeners:function(){return fe},flip:function(){return De},hide:function(){return $e},left:function(){return o},main:function(){return w},modifierPhases:function(){return I},offset:function(){return qe},placements:function(){return _},popper:function(){return f},popperGenerator:function(){return it},popperOffsets:function(){return Ve},preventOverflow:function(){return Ke},read:function(){return v},reference:function(){return p},right:function(){return s},start:function(){return l},top:function(){return r},variationPlacements:function(){return m},viewport:function(){return d},write:function(){return C}});var r="top",i="bottom",s="right",o="left",a="auto",c=[r,i,s,o],l="start",u="end",h="clippingParents",d="viewport",f="popper",p="reference",m=c.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+u])}),[]),_=[].concat(c,[a]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+u])}),[]),g="beforeRead",v="read",y="afterRead",b="beforeMain",w="main",E="afterMain",k="beforeWrite",C="write",T="afterWrite",I=[g,v,y,b,w,E,k,C,T];function S(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function N(e){var t=O(e).Element;return e instanceof t||e instanceof Element}function P(e){var t=O(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function R(e){if("undefined"===typeof ShadowRoot)return!1;var t=O(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function x(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];P(i)&&S(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function A(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});P(r)&&S(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var L={name:"applyStyles",enabled:!0,phase:"write",fn:x,effect:A,requires:["computeStyles"]};function D(e){return e.split("-")[0]}var M=Math.max,F=Math.min,U=Math.round;function $(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,i=1;if(P(e)&&t){var s=e.offsetHeight,o=e.offsetWidth;o>0&&(r=U(n.width)/o||1),s>0&&(i=U(n.height)/s||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function j(e){var t=$(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function W(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&R(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function q(e){return O(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(S(e))>=0}function V(e){return((N(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return"html"===S(e)?e:e.assignedSlot||e.parentNode||(R(e)?e.host:null)||V(e)}function z(e){return P(e)&&"fixed"!==q(e).position?e.offsetParent:null}function K(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&P(e)){var r=q(e);if("fixed"===r.position)return null}var i=B(e);R(i)&&(i=i.host);while(P(i)&&["html","body"].indexOf(S(i))<0){var s=q(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function G(e){var t=O(e),n=z(e);while(n&&H(n)&&"static"===q(n).position)n=z(n);return n&&("html"===S(n)||"body"===S(n)&&"static"===q(n).position)?t:n||K(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e,t,n){return M(e,F(t,n))}function Q(e,t,n){var r=J(e,t,n);return r>n?n:r}function X(){return{top:0,right:0,bottom:0,left:0}}function Z(e){return Object.assign({},X(),e)}function ee(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var te=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Z("number"!==typeof e?e:ee(e,c))};function ne(e){var t,n=e.state,a=e.name,c=e.options,l=n.elements.arrow,u=n.modifiersData.popperOffsets,h=D(n.placement),d=Y(h),f=[o,s].indexOf(h)>=0,p=f?"height":"width";if(l&&u){var m=te(c.padding,n),_=j(l),g="y"===d?r:o,v="y"===d?i:s,y=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],b=u[d]-n.rects.reference[d],w=G(l),E=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,k=y/2-b/2,C=m[g],T=E-_[p]-m[v],I=E/2-_[p]/2+k,S=J(C,I,T),O=d;n.modifiersData[a]=(t={},t[O]=S,t.centerOffset=S-I,t)}}function re(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&W(t.elements.popper,i)&&(t.elements.arrow=i)}var ie={name:"arrow",enabled:!0,phase:"main",fn:ne,effect:re,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(e){return e.split("-")[1]}var oe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:U(t*i)/i||0,y:U(n*i)/i||0}}function ce(e){var t,n=e.popper,a=e.popperRect,c=e.placement,l=e.variation,h=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,_=e.isFixed,g=h.x,v=void 0===g?0:g,y=h.y,b=void 0===y?0:y,w="function"===typeof m?m({x:v,y:b}):{x:v,y:b};v=w.x,b=w.y;var E=h.hasOwnProperty("x"),k=h.hasOwnProperty("y"),C=o,T=r,I=window;if(p){var S=G(n),N="clientHeight",P="clientWidth";if(S===O(n)&&(S=V(n),"static"!==q(S).position&&"absolute"===d&&(N="scrollHeight",P="scrollWidth")),S=S,c===r||(c===o||c===s)&&l===u){T=i;var R=_&&S===I&&I.visualViewport?I.visualViewport.height:S[N];b-=R-a.height,b*=f?1:-1}if(c===o||(c===r||c===i)&&l===u){C=s;var x=_&&S===I&&I.visualViewport?I.visualViewport.width:S[P];v-=x-a.width,v*=f?1:-1}}var A,L=Object.assign({position:d},p&&oe),D=!0===m?ae({x:v,y:b}):{x:v,y:b};return v=D.x,b=D.y,f?Object.assign({},L,(A={},A[T]=k?"0":"",A[C]=E?"0":"",A.transform=(I.devicePixelRatio||1)<=1?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",A)):Object.assign({},L,(t={},t[T]=k?b+"px":"",t[C]=E?v+"px":"",t.transform="",t))}function le(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:D(t.placement),variation:se(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ce(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ce(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ue={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:le,data:{}},he={passive:!0};function de(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=O(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,he)})),a&&c.addEventListener("resize",n.update,he),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,he)})),a&&c.removeEventListener("resize",n.update,he)}}var fe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:de,data:{}},pe={left:"right",right:"left",bottom:"top",top:"bottom"};function me(e){return e.replace(/left|right|bottom|top/g,(function(e){return pe[e]}))}var _e={start:"end",end:"start"};function ge(e){return e.replace(/start|end/g,(function(e){return _e[e]}))}function ve(e){var t=O(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function ye(e){return $(V(e)).left+ve(e).scrollLeft}function be(e){var t=O(e),n=V(e),r=t.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+ye(e),y:a}}function we(e){var t,n=V(e),r=ve(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=M(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+ye(e),c=-r.scrollTop;return"rtl"===q(i||n).direction&&(a+=M(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Ee(e){var t=q(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function ke(e){return["html","body","#document"].indexOf(S(e))>=0?e.ownerDocument.body:P(e)&&Ee(e)?e:ke(B(e))}function Ce(e,t){var n;void 0===t&&(t=[]);var r=ke(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=O(r),o=i?[s].concat(s.visualViewport||[],Ee(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(Ce(B(o)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ie(e){var t=$(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Se(e,t){return t===d?Te(be(e)):N(t)?Ie(t):Te(we(V(e)))}function Oe(e){var t=Ce(B(e)),n=["absolute","fixed"].indexOf(q(e).position)>=0,r=n&&P(e)?G(e):e;return N(r)?t.filter((function(e){return N(e)&&W(e,r)&&"body"!==S(e)})):[]}function Ne(e,t,n){var r="clippingParents"===t?Oe(e):[].concat(t),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(t,n){var r=Se(e,n);return t.top=M(r.top,t.top),t.right=F(r.right,t.right),t.bottom=F(r.bottom,t.bottom),t.left=M(r.left,t.left),t}),Se(e,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Pe(e){var t,n=e.reference,a=e.element,c=e.placement,h=c?D(c):null,d=c?se(c):null,f=n.x+n.width/2-a.width/2,p=n.y+n.height/2-a.height/2;switch(h){case r:t={x:f,y:n.y-a.height};break;case i:t={x:f,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:p};break;case o:t={x:n.x-a.width,y:p};break;default:t={x:n.x,y:n.y}}var m=h?Y(h):null;if(null!=m){var _="y"===m?"height":"width";switch(d){case l:t[m]=t[m]-(n[_]/2-a[_]/2);break;case u:t[m]=t[m]+(n[_]/2-a[_]/2);break;default:}}return t}function Re(e,t){void 0===t&&(t={});var n=t,o=n.placement,a=void 0===o?e.placement:o,l=n.boundary,u=void 0===l?h:l,m=n.rootBoundary,_=void 0===m?d:m,g=n.elementContext,v=void 0===g?f:g,y=n.altBoundary,b=void 0!==y&&y,w=n.padding,E=void 0===w?0:w,k=Z("number"!==typeof E?E:ee(E,c)),C=v===f?p:f,T=e.rects.popper,I=e.elements[b?C:v],S=Ne(N(I)?I:I.contextElement||V(e.elements.popper),u,_),O=$(e.elements.reference),P=Pe({reference:O,element:T,strategy:"absolute",placement:a}),R=Te(Object.assign({},T,P)),x=v===f?R:O,A={top:S.top-x.top+k.top,bottom:x.bottom-S.bottom+k.bottom,left:S.left-x.left+k.left,right:x.right-S.right+k.right},L=e.modifiersData.offset;if(v===f&&L){var D=L[a];Object.keys(A).forEach((function(e){var t=[s,i].indexOf(e)>=0?1:-1,n=[r,i].indexOf(e)>=0?"y":"x";A[e]+=D[n]*t}))}return A}function xe(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=void 0===l?_:l,h=se(r),d=h?a?m:m.filter((function(e){return se(e)===h})):c,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Re(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[D(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Ae(e){if(D(e)===a)return[];var t=me(e);return[ge(e),t,ge(t)]}function Le(e){var t=e.state,n=e.options,c=e.name;if(!t.modifiersData[c]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,_=n.boundary,g=n.rootBoundary,v=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,E=t.options.placement,k=D(E),C=k===E,T=p||(C||!b?[me(E)]:Ae(E)),I=[E].concat(T).reduce((function(e,n){return e.concat(D(n)===a?xe(t,{placement:n,boundary:_,rootBoundary:g,padding:m,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),S=t.rects.reference,O=t.rects.popper,N=new Map,P=!0,R=I[0],x=0;x<I.length;x++){var A=I[x],L=D(A),M=se(A)===l,F=[r,i].indexOf(L)>=0,U=F?"width":"height",$=Re(t,{placement:A,boundary:_,rootBoundary:g,altBoundary:v,padding:m}),j=F?M?s:o:M?i:r;S[U]>O[U]&&(j=me(j));var W=me(j),q=[];if(h&&q.push($[L]<=0),f&&q.push($[j]<=0,$[W]<=0),q.every((function(e){return e}))){R=A,P=!1;break}N.set(A,q)}if(P)for(var H=b?3:1,V=function(e){var t=I.find((function(t){var n=N.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},B=H;B>0;B--){var z=V(B);if("break"===z)break}t.placement!==R&&(t.modifiersData[c]._skip=!0,t.placement=R,t.reset=!0)}}var De={name:"flip",enabled:!0,phase:"main",fn:Le,requiresIfExists:["offset"],data:{_skip:!1}};function Me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Fe(e){return[r,s,i,o].some((function(t){return e[t]>=0}))}function Ue(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=Re(t,{elementContext:"reference"}),a=Re(t,{altBoundary:!0}),c=Me(o,r),l=Me(a,i,s),u=Fe(c),h=Fe(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var $e={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ue};function je(e,t,n){var i=D(e),a=[o,r].indexOf(i)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*a,[o,s].indexOf(i)>=0?{x:u,y:l}:{x:l,y:u}}function We(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=_.reduce((function(e,n){return e[n]=je(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var qe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:We};function He(e){var t=e.state,n=e.name;t.modifiersData[n]=Pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ve={name:"popperOffsets",enabled:!0,phase:"read",fn:He,data:{}};function Be(e){return"x"===e?"y":"x"}function ze(e){var t=e.state,n=e.options,a=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,_=n.padding,g=n.tether,v=void 0===g||g,y=n.tetherOffset,b=void 0===y?0:y,w=Re(t,{boundary:f,rootBoundary:p,padding:_,altBoundary:m}),E=D(t.placement),k=se(t.placement),C=!k,T=Y(E),I=Be(T),S=t.modifiersData.popperOffsets,O=t.rects.reference,N=t.rects.popper,P="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,R="number"===typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),x=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(S){if(u){var L,U="y"===T?r:o,$="y"===T?i:s,W="y"===T?"height":"width",q=S[T],H=q+w[U],V=q-w[$],B=v?-N[W]/2:0,z=k===l?O[W]:N[W],K=k===l?-N[W]:-O[W],Z=t.elements.arrow,ee=v&&Z?j(Z):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:X(),ne=te[U],re=te[$],ie=J(0,O[W],ee[W]),oe=C?O[W]/2-B-ie-ne-R.mainAxis:z-ie-ne-R.mainAxis,ae=C?-O[W]/2+B+ie+re+R.mainAxis:K+ie+re+R.mainAxis,ce=t.elements.arrow&&G(t.elements.arrow),le=ce?"y"===T?ce.clientTop||0:ce.clientLeft||0:0,ue=null!=(L=null==x?void 0:x[T])?L:0,he=q+oe-ue-le,de=q+ae-ue,fe=J(v?F(H,he):H,q,v?M(V,de):V);S[T]=fe,A[T]=fe-q}if(d){var pe,me="x"===T?r:o,_e="x"===T?i:s,ge=S[I],ve="y"===I?"height":"width",ye=ge+w[me],be=ge-w[_e],we=-1!==[r,o].indexOf(E),Ee=null!=(pe=null==x?void 0:x[I])?pe:0,ke=we?ye:ge-O[ve]-N[ve]-Ee+R.altAxis,Ce=we?ge+O[ve]+N[ve]-Ee-R.altAxis:be,Te=v&&we?Q(ke,ge,Ce):J(v?ke:ye,ge,v?Ce:be);S[I]=Te,A[I]=Te-ge}t.modifiersData[a]=A}}var Ke={name:"preventOverflow",enabled:!0,phase:"main",fn:ze,requiresIfExists:["offset"]};function Ge(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ye(e){return e!==O(e)&&P(e)?Ge(e):ve(e)}function Je(e){var t=e.getBoundingClientRect(),n=U(t.width)/e.offsetWidth||1,r=U(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function Qe(e,t,n){void 0===n&&(n=!1);var r=P(t),i=P(t)&&Je(t),s=V(t),o=$(e,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==S(t)||Ee(s))&&(a=Ye(t)),P(t)?(c=$(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=ye(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Xe(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function Ze(e){var t=Xe(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function et(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function tt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var nt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function it(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?nt:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},nt,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;u(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:N(e)?Ce(e):e.contextElement?Ce(e.contextElement):[],popper:Ce(t)};var a=Ze(tt([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(rt(t,n)){i.rects={reference:Qe(t,G(n),"fixed"===i.options.strategy),popper:j(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(i=o({state:i,options:u,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:et((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){u(),a=!0}};if(!rt(e,t))return c;function l(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var st=it(),ot=[fe,Ve,ue,L,qe,De,Ke,ie,$e],at=it({defaultModifiers:ot}),ct=[fe,Ve,ue,L],lt=it({defaultModifiers:ct})},4870:function(e,t,n){"use strict";n.d(t,{$y:function(){return Te},B:function(){return o},BK:function(){return qe},Bj:function(){return s},Fl:function(){return ze},IU:function(){return Oe},Jd:function(){return C},PG:function(){return Ce},SU:function(){return $e},Um:function(){return we},WL:function(){return We},X$:function(){return O},X3:function(){return Se},XI:function(){return Me},Xl:function(){return Ne},dq:function(){return Le},iH:function(){return De},j:function(){return I},lk:function(){return T},qj:function(){return be},qq:function(){return b},yT:function(){return Ie}});var r=n(7139);let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return i=this,e()}finally{i=this.parent}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const _=30;let g;const v=Symbol(""),y=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=g,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,E=!0,m=1<<++p,p<=_?h(this):w(this),this.fn()}finally{p<=_&&d(this),m=1<<--p,g=this.parent,E=t,this.parent=void 0}}stop(){this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const k=[];function C(){k.push(E),E=!1}function T(){const e=k.pop();E=void 0===e||e}function I(e,t,n){if(E&&g){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;S(r,i)}}function S(e,t){let n=!1;p<=_?u(e)||(e.n|=m,n=!l(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function O(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(v)),(0,r._N)(e)&&l.push(a.get(y)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(v)),(0,r._N)(e)&&l.push(a.get(y)));break;case"set":(0,r._N)(e)&&l.push(a.get(v));break}if(1===l.length)l[0]&&N(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);N(c(e))}}function N(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=(0,r.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),x=F(),A=F(!1,!0),L=F(!0),D=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Oe(this);for(let t=0,i=this.length;t<i;t++)I(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Oe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){C();const n=Oe(this)[t].apply(this,e);return T(),n}})),e}function F(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ge:_e:t?me:pe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(D,i))return Reflect.get(D,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?R.has(i):P(i))return a;if(e||I(n,"get",i),t)return a;if(Le(a)){const e=!o||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?Ee(a):be(a):a}}const U=j(),$=j(!0);function j(e=!1){return function(t,n,i,s){let o=t[n];if(Te(o)&&Le(o)&&!Le(i))return!1;if(!e&&!Te(i)&&(Ie(i)||(i=Oe(i),o=Oe(o)),!(0,r.kJ)(t)&&Le(o)&&!Le(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Oe(s)&&(a?(0,r.aU)(i,o)&&O(t,"set",n,i,o):O(t,"add",n,i)),c}}function W(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&O(e,"delete",t,void 0,i),s}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&R.has(t)||I(e,"has",t),n}function H(e){return I(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const V={get:x,set:U,deleteProperty:W,has:q,ownKeys:H},B={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},z=(0,r.l7)({},V,{get:A,set:$}),K=e=>e,G=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Oe(e),s=Oe(t);t!==s&&!n&&I(i,"get",t),!n&&I(i,"get",s);const{has:o}=G(i),a=r?K:n?Re:Pe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function J(e,t=!1){const n=this["__v_raw"],r=Oe(n),i=Oe(e);return e!==i&&!t&&I(r,"has",e),!t&&I(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function Q(e,t=!1){return e=e["__v_raw"],!t&&I(Oe(e),"iterate",v),Reflect.get(e,"size",e)}function X(e){e=Oe(e);const t=Oe(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),O(t,"add",e,e)),this}function Z(e,t){t=Oe(t);const n=Oe(this),{has:i,get:s}=G(n);let o=i.call(n,e);o||(e=Oe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&O(n,"set",e,t,a):O(n,"add",e,t),this}function ee(e){const t=Oe(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=Oe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&O(t,"delete",e,void 0,s),o}function te(){const e=Oe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&O(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Oe(s),a=t?K:e?Re:Pe;return!e&&I(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Oe(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?K:t?Re:Pe;return!t&&I(o,"iterate",l?y:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return Y(this,e)},get size(){return Q(this)},has:J,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return Q(this)},has:J,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return Y(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[oe,ae,ce,le]=se();function ue(e,t){const n=t?e?le:ce:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},fe={get:ue(!0,!1)};const pe=new WeakMap,me=new WeakMap,_e=new WeakMap,ge=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ye(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,r.W7)(e))}function be(e){return Te(e)?e:ke(e,!1,V,he,pe)}function we(e){return ke(e,!1,z,de,me)}function Ee(e){return ke(e,!0,B,fe,_e)}function ke(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ye(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ce(e){return Te(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function Se(e){return Ce(e)||Te(e)}function Oe(e){const t=e&&e["__v_raw"];return t?Oe(t):e}function Ne(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Pe=e=>(0,r.Kn)(e)?be(e):e,Re=e=>(0,r.Kn)(e)?Ee(e):e;function xe(e){E&&g&&(e=Oe(e),S(e.dep||(e.dep=c())))}function Ae(e,t){e=Oe(e),e.dep&&N(e.dep)}function Le(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Fe(e,!1)}function Me(e){return Fe(e,!0)}function Fe(e,t){return Le(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Oe(e),this._value=t?e:Pe(e)}get value(){return xe(this),this._value}set value(e){e=this.__v_isShallow?e:Oe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Pe(e),Ae(this,e))}}function $e(e){return Le(e)?e.value:e}const je={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function We(e){return Ce(e)?e:new Proxy(e,je)}function qe(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=Ve(e,n);return t}class He{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ve(e,t,n){const r=e[t];return Le(r)?r:new He(e,t,n)}class Be{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Ae(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Oe(this);return xe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ze(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Be(i,s,o||!s,n);return a}Promise.resolve()},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Ah:function(){return xe},Cn:function(){return W},FN:function(){return yn},Fl:function(){return Dn},HY:function(){return At},JJ:function(){return Q},Jd:function(){return Re},Ko:function(){return hn},LL:function(){return Pt},P$:function(){return ce},Q6:function(){return pe},U2:function(){return ue},Uk:function(){return nn},Us:function(){return wt},Wm:function(){return Xt},Y3:function(){return E},Y8:function(){return se},YP:function(){return ee},_:function(){return Qt},aZ:function(){return me},bv:function(){return Oe},dD:function(){return j},f3:function(){return X},h:function(){return Mn},iD:function(){return Vt},ic:function(){return Pe},j4:function(){return Bt},kq:function(){return sn},nK:function(){return fe},uE:function(){return rn},up:function(){return Ot},w5:function(){return q},wF:function(){return Se},wg:function(){return $t},wy:function(){return ft},xv:function(){return Lt}});n(1703);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,m=0;const _=[];let g=null,v=0;const y=Promise.resolve();let b=null,w=null;function E(e){const t=b||y;return e?t.then(this?e.bind(this):e):t}function k(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=x(h[r]);i<e?t=r+1:n=r}return t}function C(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||e===w||(null==e.id?h.push(e):h.splice(k(e.id),0,e),T())}function T(){l||u||(u=!0,b=y.then(A))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function S(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),T()}function O(e){S(e,p,f,m)}function N(e){S(e,g,_,v)}function P(e,t=null){if(f.length){for(w=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,w=null,P(e,t)}}function R(e){if(_.length){const e=[...new Set(_)];if(_.length=0,g)return void g.push(...e);for(g=e,g.sort(((e,t)=>x(e)-x(t))),v=0;v<g.length;v++)g[v]();g=null,v=0}}const x=e=>null==e.id?1/0:e.id;function A(e){u=!1,l=!0,P(e),h.sort(((e,t)=>x(e)-x(t)));i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,R(e),l=!1,b=null,(h.length||f.length||_.length)&&A(e)}}new Set;new Map;function L(e,t,...n){const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(i.He))}let l;let u=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(t))]),u&&o(u,e,6,s);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function D(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=D(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function M(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let F=null,U=null;function $(e){const t=F;return F=e,U=e&&e.type.__scopeId||null,t}function j(e){U=e}function W(){U=null}function q(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&qt(-1);const i=$(t),s=e(...n);return $(i),r._d&&qt(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function H(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:_,inheritAttrs:g}=e;let v,y;const b=$(e);try{if(4&n.shapeFlag){const e=s||r;v=on(d.call(e,e,f,o,m,p,_)),y=u}else{const e=t;0,v=on(e.length>1?e(o,{attrs:u,slots:l,emit:h}):e(o,null)),y=t.props?u:V(u)}}catch(E){Ft.length=0,a(E,e,1),v=Xt(Dt)}let w=v;if(y&&!1!==g){const e=Object.keys(y),{shapeFlag:t}=w;e.length&&7&t&&(c&&e.some(i.tR)&&(y=B(y,c)),w=tn(w,y))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,$(b),v}const V=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},B=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function z(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||K(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?K(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(l,n))return!0}}return!1}function K(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!M(n,s))return!0}return!1}function G({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Y=e=>e.__isSuspense;function J(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):N(e)}function Q(e,t){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[e]=t}else 0}function X(e,t,n=!1){const r=vn||F;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const Z={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=i.kT){const h=vn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some(r.PG),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ie(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[_])}:i.dG,t&&a){const e=d;d=()=>ie(e())}let _=e=>{f=b.onStop=()=>{s(e,h,4)}};if(Tn)return _=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,_]):d(),i.dG;let g=m?[]:Z;const v=()=>{if(b.active)if(t){const e=b.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,g[t]))):(0,i.aU)(e,g)))&&(f&&f(),o(t,h,3,[e,g===Z?void 0:g,_]),g=e)}else b.run()};let y;v.allowRecurse=!!t,y="sync"===c?v:"post"===c?()=>bt(v,h&&h.suspense):()=>{!h||h.isMounted?O(v):v()};const b=new r.qq(d,y);return t?n?v():g=b.run():"post"===c?bt(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function ne(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?re(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=vn;bn(this);const c=te(s,o.bind(r),n);return a?bn(a):wn(),c}function re(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ie(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ie(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ie(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ie(e,t)}));else if((0,i.PO)(e))for(const n in e)ie(e[n],t);return e}function se(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oe((()=>{e.isMounted=!0})),Re((()=>{e.isUnmounting=!0})),e}const oe=[Function,Array],ae={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:oe,onEnter:oe,onAfterEnter:oe,onEnterCancelled:oe,onBeforeLeave:oe,onLeave:oe,onAfterLeave:oe,onLeaveCancelled:oe,onBeforeAppear:oe,onAppear:oe,onAfterAppear:oe,onAppearCancelled:oe},setup(e,{slots:t}){const n=yn(),i=se();let s;return()=>{const o=t.default&&pe(t.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(e),{mode:c}=a;const l=o[0];if(i.isLeaving)return he(l);const u=de(l);if(!u)return he(l);const h=ue(u,a,i,n);fe(u,h);const d=n.subTree,f=d&&de(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Dt&&(!Kt(u,f)||p)){const e=ue(f,a,i,n);if(fe(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},he(l);"in-out"===c&&u.type!==Dt&&(e.delayLeave=(e,t,n)=>{const r=le(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return l}}},ce=ae;function le(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ue(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),w=le(n,e),E=(e,t)=>{e&&o(e,r,9,t)},k={mode:s,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!i)return;r=_||c}t._leaveCb&&t._leaveCb(!0);const s=w[b];s&&Kt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=u,s=h;if(!n.isMounted){if(!i)return;t=g||l,r=v||u,s=y||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,E(t?s:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),E(n?m:p,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return ue(e,t,n,r)}};return k}function he(e){if(ge(e))return e=tn(e),e.children=null,e}function de(e){return ge(e)?e.children?e.children[0]:void 0:e}function fe(e,t){6&e.shapeFlag&&e.component?fe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pe(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===At?(128&s.patchFlag&&r++,n=n.concat(pe(s.children,t))):(t||s.type!==Dt)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function me(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const _e=e=>!!e.type.__asyncLoader;const ge=e=>e.type.__isKeepAlive;RegExp,RegExp;function ve(e,t){return(0,i.kJ)(e)?e.some((e=>ve(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ye(e,t){we(e,"a",t)}function be(e,t){we(e,"da",t)}function we(e,t,n=vn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Te(t,r,n),n){let e=n.parent;while(e&&e.parent)ge(e.parent.vnode)&&Ee(r,t,n,e),e=e.parent}}function Ee(e,t,n,r){const s=Te(t,e,r,!0);xe((()=>{(0,i.Od)(r[t],s)}),n)}function ke(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ce(e){return 128&e.shapeFlag?e.ssContent:e}function Te(e,t,n=vn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),bn(n);const s=o(t,n,e,i);return wn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ie=e=>(t,n=vn)=>(!Tn||"sp"===e)&&Te(e,t,n),Se=Ie("bm"),Oe=Ie("m"),Ne=Ie("bu"),Pe=Ie("u"),Re=Ie("bum"),xe=Ie("um"),Ae=Ie("sp"),Le=Ie("rtg"),De=Ie("rtc");function Me(e,t=vn){Te("ec",e,t)}let Fe=!0;function Ue(e){const t=qe(e),n=e.proxy,s=e.ctx;Fe=!1,t.beforeCreate&&je(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:_,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:E,render:k,renderTracked:C,renderTriggered:T,errorCaptured:I,serverPrefetch:S,expose:O,inheritAttrs:N,components:P,directives:R,filters:x}=t,A=null;if(h&&$e(h,s,A,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Fe=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Dn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)We(l[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{Q(t,e[t])}))}function L(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&je(d,e,"c"),L(Se,f),L(Oe,p),L(Ne,m),L(Pe,_),L(ye,g),L(be,v),L(Me,I),L(De,C),L(Le,T),L(Re,b),L(xe,E),L(Ae,S),(0,i.kJ)(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});k&&e.render===i.dG&&(e.render=k),null!=N&&(e.inheritAttrs=N),P&&(e.components=P),R&&(e.directives=R)}function $e(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=Ke(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?X(n.from||o,n.default,!0):X(n.from||o):X(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function je(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function We(e,t,n,r){const s=r.includes(".")?re(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&ee(s,n)}else if((0,i.mf)(e))ee(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>We(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&ee(s,r,e)}else 0}function qe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>He(c,e,o,!0))),He(c,t,o)):c=t,s.set(t,c),c}function He(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&He(e,s,n,!0),i&&i.forEach((t=>He(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ve[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ve={data:Be,props:Ye,emits:Ye,methods:Ye,computed:Ye,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Ye,directives:Ye,watch:Je,provide:Be,inject:ze};function Be(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function ze(e,t){return Ye(Ke(e),Ke(t))}function Ke(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Ye(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function Je(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=Ge(e[r],t[r]);return n}function Qe(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Gt,1),e.propsDefaults=Object.create(null),Ze(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Xe(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Ze(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=et(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const c=t[s];if(u)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=et(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Ze(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:M(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=et(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return l}function et(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(bn(s),r=i[n]=e.call(null,t),wn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function tt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=tt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);nt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(nt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=st(Boolean,r.type),n=st(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function nt(e){return"$"!==e[0]}function rt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function it(e,t){return rt(e)===rt(t)}function st(e,t){return(0,i.kJ)(t)?t.findIndex((t=>it(t,e))):(0,i.mf)(t)&&it(t,e)?0:-1}const ot=e=>"_"===e[0]||"$stable"===e,at=e=>(0,i.kJ)(e)?e.map(on):[on(e)],ct=(e,t,n)=>{const r=q(((...e)=>at(t(...e))),n);return r._c=!1,r},lt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ot(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=ct(s,n,r);else if(null!=n){0;const e=at(n);t[s]=()=>e}}},ut=(e,t)=>{const n=at(t);e.slots.default=()=>n},ht=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):lt(t,e.slots={})}else e.slots={},t&&ut(e,t);(0,i.Nj)(e.slots,Gt,1)},dt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,lt(t,s)),a=t}else t&&(ut(e,t),a={default:1});if(o)for(const i in s)ot(i)||i in a||delete s[i]};function ft(e,t){const n=F;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ie(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function pt(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),o(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}function mt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _t=0;function gt(e,t){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const s=mt(),o=new Set;let a=!1;const c=s.app={_uid:_t++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Fn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,l){if(!a){const u=Xt(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,xn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function vt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>vt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(_e(o)&&!a)return;const c=4&o.shapeFlag?xn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,u,12,[l,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const s=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?f[h]=[c]:(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,i.RI)(p,h)&&(p[h]=l)):(0,r.dq)(h)&&(h.value=l,e.k&&(f[e.k]=l))};l?(s.id=-1,bt(s,n)):s()}else 0}}function yt(){}const bt=J;function wt(e){return Et(e)}function Et(e,t){yt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:_,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Z(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Lt:y(e,t,n,r);break;case Dt:b(e,t,n,r);break;case Mt:null==e&&w(t,n,r,o);break;case At:D(e,t,n,r,i,s,o,a,c);break;default:1&h?T(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,te)}null!=u&&i&&vt(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},T=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?S(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},S=(e,t,n,r,o,l,u,h)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,patchFlag:b,dirs:w}=e;if(e.el&&void 0!==_&&-1===b)f=e.el=_(e.el);else{if(f=e.el=c(e.type,l,g&&g.is,g),8&v?d(f,e.children):16&v&&N(e.children,f,null,r,o,l&&"foreignObject"!==m,u,h),w&&pt(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],l,e.children,r,o,X);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&un(p,r,e)}O(f,e,e.scopeId,u,r)}w&&pt(e,null,r,"beforeMount");const E=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;E&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||E||w)&&bt((()=>{p&&un(p,r,e),E&&y.enter(f),w&&pt(e,null,r,"mounted")}),o)},O=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?an(e[l]):on(e[l]);v(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let _;n&&kt(n,!1),(_=m.onVnodeBeforeUpdate)&&un(_,n,t,e),f&&pt(t,e,n,"beforeUpdate"),n&&kt(n,!0);const g=s&&"foreignObject"!==t.type;if(h?A(e.dynamicChildren,h,l,n,r,g,o):c||W(e,t,l,null,n,r,g,o,!1),u>0){if(16&u)L(l,t,p,m,n,r,s);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,s),4&u&&a(l,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],u=m[o];u===c&&"value"!==o||a(l,o,c,u,s,e.children,n,r,X)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||L(l,t,p,m,n,r,s);((_=m.onVnodeUpdated)||f)&&bt((()=>{_&&un(_,n,t,e),f&&pt(t,e,n,"updated")}),r)},A=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===At||!Kt(c,l)||70&c.shapeFlag)?f(c.el):n;v(c,l,u,null,r,i,s,o,!0)}},L=(e,t,n,r,s,o,c)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,s,o,X)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,s,o,X);"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Ct(e,t,!0)):W(e,t,n,d,i,o,a,c,u)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):U(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=gn(e,r,i);if(ge(e)&&(a.ctx.renderer=te),In(a),a.asyncDep){if(i&&i.registerDep(a,$),!e.el){const e=a.subTree=Xt(Dt);b(null,e,t,n)}}else $(a,e,t,n,i,s,o)},U=(e,t,n)=>{const r=t.component=e.component;if(z(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,I(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},$=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:l,vnode:u}=e,h=n;0,kt(e,!1),n?(n.el=u.el,j(e,n,c)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&un(t,l,n,u),kt(e,!0);const d=H(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Z(p),e,o,a),n.el=d.el,null===h&&G(e,d.el),s&&bt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&bt((()=>un(t,l,n,u)),o)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=_e(t);if(kt(e,!1),u&&(0,i.ir)(u),!f&&(r=l&&l.onVnodeBeforeMount)&&un(r,d,t),kt(e,!0),c&&re){const n=()=>{e.subTree=H(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=H(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&bt(h,o),!f&&(r=l&&l.onVnodeMounted)){const e=t;bt((()=>un(r,d,e)),o)}256&t.shapeFlag&&e.a&&bt(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new r.qq(l,(()=>C(e.update)),e.scope),h=e.update=u.run.bind(u);h.id=e.uid,kt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Xe(e,t.props,i,n),dt(e,t.children,n),(0,r.Jd)(),P(void 0,e.update),(0,r.lk)()},W=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void V(l,h,n,r,i,s,o,a,c);if(256&f)return void q(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&X(l,i,s),h!==l&&d(n,h)):16&u?16&p?V(l,h,n,r,i,s,o,a,c):X(l,i,s,!0):(8&u&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},q=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?an(t[f]):on(t[f]);v(e[f],r,n,null,s,o,a,c,l)}u>h?X(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,l,d)},V=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?an(t[u]):on(t[u]);if(!Kt(r,i))break;v(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?an(t[f]):on(t[f]);if(!Kt(r,i))break;v(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)v(null,t[u]=l?an(t[u]):on(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)K(e[u],s,o,!0),u++;else{const p=u,m=u,_=new Map;for(u=m;u<=f;u++){const e=t[u]=l?an(t[u]):on(t[u]);null!=e.key&&_.set(e.key,u)}let g,y=0;const b=f-m+1;let w=!1,E=0;const k=new Array(b);for(u=0;u<b;u++)k[u]=0;for(u=p;u<=d;u++){const r=e[u];if(y>=b){K(r,s,o,!0);continue}let i;if(null!=r.key)i=_.get(r.key);else for(g=m;g<=f;g++)if(0===k[g-m]&&Kt(r,t[g])){i=g;break}void 0===i?K(r,s,o,!0):(k[i-m]=u+1,i>=E?E=i:w=!0,v(r,t[i],n,null,s,o,a,c,l),y++)}const C=w?Tt(k):i.Z6;for(g=C.length-1,u=b-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===k[u]?v(null,i,n,d,s,o,a,c,l):w&&(g<0||u!==C[g]?B(i,n,d,2):g--)}}},B=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void B(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===At){s(o,t,n);for(let e=0;e<l.length;e++)B(l[e],t,n,r);return void s(e.anchor,t,n)}if(a===Mt)return void E(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),bt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&vt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!_e(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&un(m,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&pt(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):l&&(s!==At||h>0&&64&h)?X(l,t,n,!1,!0):(s===At&&384&h||!i&&16&u)&&X(c,t,n),r&&Y(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&bt((()=>{m&&un(m,t,e),f&&pt(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===At)return void J(n,r);if(t===Mt)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,K(a,e,t,n)),c&&bt(c,t),bt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),R(),t._vnode=e},te={p:v,um:K,m:B,r:Y,mt:F,mc:N,pc:W,pbc:A,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:gt(ee,ne)}}function kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ct(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=an(s[i]),t.el=e.el),n||Ct(e,t))}}function Tt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const It=e=>e.__isTeleport;const St="components";function Ot(e,t){return Rt(St,e,!0,t)||e}const Nt=Symbol();function Pt(e){return(0,i.HD)(e)?Rt(St,e,!1)||e:e||Nt}function Rt(e,t,n=!0,r=!1){const s=F||vn;if(s){const n=s.type;if(e===St){const e=An(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=xt(s[e]||n[e],t)||xt(s.appContext[e],t);return!o&&r?n:o}}function xt(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const At=Symbol(void 0),Lt=Symbol(void 0),Dt=Symbol(void 0),Mt=Symbol(void 0),Ft=[];let Ut=null;function $t(e=!1){Ft.push(Ut=e?null:[])}function jt(){Ft.pop(),Ut=Ft[Ft.length-1]||null}let Wt=1;function qt(e){Wt+=e}function Ht(e){return e.dynamicChildren=Wt>0?Ut||i.Z6:null,jt(),Wt>0&&Ut&&Ut.push(e),e}function Vt(e,t,n,r,i,s){return Ht(Qt(e,t,n,r,i,s,!0))}function Bt(e,t,n,r,i){return Ht(Xt(e,t,n,r,i,!0))}function zt(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Gt="__vInternal",Yt=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function Qt(e,t=null,n=null,r=0,s=null,o=(e===At?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yt(t),ref:t&&Jt(t),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(cn(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),Wt>0&&!a&&Ut&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Ut.push(l),l}const Xt=Zt;function Zt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Nt||(e=Dt),zt(e)){const r=tn(e,t,!0);return n&&cn(r,n),r}if(Ln(e)&&(e=e.__vccOpts),t){t=en(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:Y(e)?128:It(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Qt(e,t,n,s,o,c,a,!0)}function en(e){return e?(0,r.X3)(e)||Gt in e?(0,i.l7)({},e):e:null}function tn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?ln(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Yt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Jt(t)):[s,Jt(t)]:Jt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==At?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tn(e.ssContent),ssFallback:e.ssFallback&&tn(e.ssFallback),el:e.el,anchor:e.anchor};return l}function nn(e=" ",t=0){return Xt(Lt,null,e,t)}function rn(e,t){const n=Xt(Mt,null,e);return n.staticCount=t,n}function sn(e="",t=!1){return t?($t(),Bt(Dt,null,e)):Xt(Dt,null,e)}function on(e){return null==e||"boolean"===typeof e?Xt(Dt):(0,i.kJ)(e)?Xt(At,null,e.slice()):"object"===typeof e?an(e):Xt(Lt,null,String(e))}function an(e){return null===e.el||e.memo?e:tn(e)}function cn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),cn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Gt in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,i.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[nn(t)]):n=8);e.children=t,e.shapeFlag|=n}function ln(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function un(e,t,n,r=null){o(e,t,7,[n,r])}function hn(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const dn=e=>e?En(e)?xn(e)||e.proxy:dn(e.parent):null,fn=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>dn(e.parent),$root:e=>dn(e.root),$emit:e=>e.emit,$options:e=>qe(e),$forceUpdate:e=>()=>C(e.update),$nextTick:e=>E.bind(e.proxy),$watch:e=>ne.bind(e)}),pn={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Fe&&(c[t]=0)}}const d=fn[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(fn,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?this.set(e,t,n.get(),null):null!=n.value&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const mn=mt();let _n=0;function gn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||mn,a={uid:_n++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tt(s,o),emitsOptions:D(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=L.bind(null,a),e.ce&&e.ce(a),a}let vn=null;const yn=()=>vn||F,bn=e=>{vn=e,e.scope.on()},wn=()=>{vn&&vn.scope.off(),vn=null};function En(e){return 4&e.vnode.shapeFlag}let kn,Cn,Tn=!1;function In(e,t=!1){Tn=t;const{props:n,children:r}=e.vnode,i=En(e);Qe(e,n,i,t),ht(e,r);const s=i?Sn(e,t):void 0;return Tn=!1,s}function Sn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,pn));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Rn(e):null;bn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),wn(),(0,i.tI)(c)){if(c.then(wn,wn),t)return c.then((n=>{On(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else On(e,c,t)}else Nn(e,t)}function On(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Nn(e,n)}function Nn(e,t,n){const s=e.type;if(!e.render){if(!t&&kn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=kn(t,c)}}e.render=s.render||i.dG,Cn&&Cn(e)}bn(e),(0,r.Jd)(),Ue(e),(0,r.lk)(),wn()}function Pn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Rn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Pn(e))},slots:e.slots,emit:e.emit,expose:t}}function xn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in fn?fn[n](e):void 0}}))}function An(e){return(0,i.mf)(e)&&e.displayName||e.name}function Ln(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Dn=(e,t)=>(0,r.Fl)(e,t,Tn);function Mn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?zt(t)?Xt(e,null,[t]):Xt(e,t):Xt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&zt(n)&&(n=[n]),Xt(e,t,n))}Symbol("");const Fn="3.2.31"},9242:function(e,t,n){"use strict";n.d(t,{D2:function(){return Te},F8:function(){return Ie},G2:function(){return _e},W3:function(){return ie},bM:function(){return ge},e8:function(){return pe},iM:function(){return ke},nr:function(){return fe},ri:function(){return xe},sY:function(){return Re},uT:function(){return U}});var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=_(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function _(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const g="http://www.w3.org/1999/xlink";function v(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function y(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=(0,r.yA)(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let b=Date.now,w=!1;if("undefined"!==typeof window){b()>document.createEvent("Event").timeStamp&&(b=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);w=!!(e&&Number(e[1])<=53)}let E=0;const k=Promise.resolve(),C=()=>{E=0},T=()=>E||(k.then(C),E=b());function I(e,t,n,r){e.addEventListener(t,n,r)}function S(e,t,n,r){e.removeEventListener(t,n,r)}function O(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=P(t);if(r){const o=s[t]=R(r,i);I(e,n,o,a)}else o&&(S(e,n,o,a),s[t]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function P(e){let t;if(N.test(e)){let n;t={};while(n=e.match(N))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function R(e,t){const n=e=>{const r=e.timeStamp||b();(w||r>=n.attached-1)&&(0,i.$d)(x(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function x(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const A=/^on[a-z]/,L=(e,t,n,i,s=!1,o,a,c,l)=>{"class"===t?u(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||O(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?y(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),v(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&A.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!A.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",F="animation",U=(e,{slots:t})=>(0,i.h)(i.P$,H(e),t);U.displayName="Transition";const $={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},j=U.props=(0,r.l7)({},i.P$.props,$),W=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},q=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function H(e){const t={};for(const r in e)r in $||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=V(s),_=m&&m[0],g=m&&m[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:w,onLeaveCancelled:E,onBeforeAppear:k=v,onAppear:C=y,onAppearCancelled:T=b}=t,I=(e,t,n)=>{K(e,t?h:c),K(e,t?u:a),n&&n()},S=(e,t)=>{K(e,p),K(e,f),t&&t()},O=e=>(t,n)=>{const r=e?C:y,s=()=>I(t,e,n);W(r,[t,s]),G((()=>{K(t,e?l:o),z(t,e?h:c),q(r)||J(t,i,_,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){W(v,[e]),z(e,o),z(e,a)},onBeforeAppear(e){W(k,[e]),z(e,l),z(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){const n=()=>S(e,t);z(e,d),ee(),z(e,f),G((()=>{K(e,d),z(e,p),q(w)||J(e,i,g,n)})),W(w,[e,n])},onEnterCancelled(e){I(e,!1),W(b,[e])},onAppearCancelled(e){I(e,!0),W(T,[e])},onLeaveCancelled(e){S(e),W(E,[e])}})}function V(e){if(null==e)return null;if((0,r.Kn)(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=(0,r.He)(e);return t}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function G(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Y=0;function J(e,t,n,r){const i=e._endId=++Y,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Q(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(M+"Delay"),s=r(M+"Duration"),o=X(i,s),a=r(F+"Delay"),c=r(F+"Duration"),l=X(a,c);let u=null,h=0,d=0;t===M?o>0&&(u=M,h=o,d=s.length):t===F?l>0&&(u=F,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?M:F:null,d=u?u===M?s.length:c.length:0);const f=u===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Z(t)+Z(e[n]))))}function Z(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},j,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ce(o[0].el,n.vnode.el,t))return;o.forEach(se),o.forEach(oe);const r=o.filter(ae);ee(),r.forEach((e=>{const n=e.el,r=n.style;z(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,K(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),l=H(c);let u=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,l,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,l,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}},ie=re;function se(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function oe(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ce(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=Q(r);return i.removeChild(r),s}const le=e=>{const t=e.props["onUpdate:modelValue"];return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ue(e){e.target.composing=!0}function he(e){const t=e.target;t.composing&&(t.composing=!1,de(t,"input"))}function de(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const fe={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=le(s);const o=i||s.props&&"number"===s.props.type;I(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():o&&(i=(0,r.He)(i)),e._assign(i)})),n&&I(e,"change",(()=>{e.value=e.value.trim()})),t||(I(e,"compositionstart",ue),I(e,"compositionend",he),I(e,"change",he))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=le(o),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},pe={deep:!0,created(e,t,n){e._assign=le(n),I(e,"change",(()=>{const t=e._modelValue,n=ye(e),i=e.checked,s=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(i&&!o)s(t.concat(n));else if(!i&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),s(e)}else s(be(e,i))}))},mounted:me,beforeUpdate(e,t,n){e._assign=le(n),me(e,t,n)}};function me(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,be(e,!0)))}const _e={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=le(n),I(e,"change",(()=>{e._assign(ye(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=le(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},ge={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);I(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(ye(e)):ye(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=le(i)},mounted(e,{value:t}){ve(e,t)},beforeUpdate(e,t,n){e._assign=le(n)},updated(e,{value:t}){ve(e,t)}};function ve(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=ye(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(ye(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ye(e){return"_value"in e?e._value:e.value}function be(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const we=["ctrl","shift","alt","meta"],Ee={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>we.some((n=>e[`${n}Key`]&&!t.includes(n)))},ke=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Ee[t[e]];if(r&&r(n,t))return}return e(n,...r)},Ce={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Te=(e,t)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return t.some((e=>e===i||Ce[e]===i))?e(n):void 0},Ie={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Se(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),Se(e,!0),r.enter(e)):r.leave(e,(()=>{Se(e,!1)})):Se(e,t))},beforeUnmount(e,{value:t}){Se(e,t)}};function Se(e,t){e.style.display=t?e._vod:"none"}const Oe=(0,r.l7)({patchProp:L},l);let Ne;function Pe(){return Ne||(Ne=(0,i.Us)(Oe))}const Re=(...e)=>{Pe().render(...e)},xe=(...e)=>{const t=Pe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Ae(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Ae(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return x},E9:function(){return re},F7:function(){return C},Gg:function(){return V},HD:function(){return D},He:function(){return te},Kn:function(){return F},NO:function(){return E},Nj:function(){return ee},Od:function(){return S},PO:function(){return q},Pq:function(){return a},RI:function(){return N},S0:function(){return H},W7:function(){return W},WV:function(){return m},Z6:function(){return b},_A:function(){return K},_N:function(){return R},aU:function(){return X},dG:function(){return w},e1:function(){return s},fY:function(){return r},hR:function(){return Q},hq:function(){return _},ir:function(){return Z},j5:function(){return l},kC:function(){return J},kJ:function(){return P},kT:function(){return y},l7:function(){return I},mf:function(){return L},rs:function(){return Y},tI:function(){return U},tR:function(){return T},yA:function(){return c},yk:function(){return M},zw:function(){return g}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function l(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=D(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return D(e)||F(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(D(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=A(e),r=A(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=P(e),r=P(t),n||r)return!(!n||!r)&&p(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex((e=>m(e,t)))}const g=e=>D(e)?e:null==e?"":P(e)||F(e)&&(e.toString===$||!L(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):R(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:x(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||P(t)||q(t)?t:String(t),y={},b=[],w=()=>{},E=()=>!1,k=/^on[^a-z]/,C=e=>k.test(e),T=e=>e.startsWith("onUpdate:"),I=Object.assign,S=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},O=Object.prototype.hasOwnProperty,N=(e,t)=>O.call(e,t),P=Array.isArray,R=e=>"[object Map]"===j(e),x=e=>"[object Set]"===j(e),A=e=>e instanceof Date,L=e=>"function"===typeof e,D=e=>"string"===typeof e,M=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,U=e=>F(e)&&L(e.then)&&L(e.catch),$=Object.prototype.toString,j=e=>$.call(e),W=e=>j(e).slice(8,-1),q=e=>"[object Object]"===j(e),H=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,V=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),B=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,K=B((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,Y=B((e=>e.replace(G,"-$1").toLowerCase())),J=B((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=B((e=>e?`on${J(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},8052:function(e,t,n){n(1703),
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,r){e.exports=r(n(1448))}(0,(function(e){"use strict";function t(e){if(e&&e.__esModule)return e;const t=Object.create(null);if(e)for(const n in e)if("default"!==n){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}return t.default=e,Object.freeze(t)}const n=t(e),r=1e6,i=1e3,s="transitionend",o=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{do{e+=Math.floor(Math.random()*r)}while(document.getElementById(e));return e},c=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},l=e=>{const t=c(e);return t&&document.querySelector(t)?t:null},u=e=>{const t=c(e);return t?document.querySelector(t):null},h=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),s=Number.parseFloat(n);return r||s?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*i):0},d=e=>{e.dispatchEvent(new Event(s))},f=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),p=e=>f(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,m=(e,t,n)=>{Object.keys(n).forEach((r=>{const i=n[r],s=t[r],a=s&&f(s)?"element":o(s);if(!new RegExp(i).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${i}".`)}))},_=e=>!(!f(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),g=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),v=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?v(e.parentNode):null},y=()=>{},b=e=>{e.offsetHeight},w=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},E=[],k=e=>{"loading"===document.readyState?(E.length||document.addEventListener("DOMContentLoaded",(()=>{E.forEach((e=>e()))})),E.push(e)):e()},C=()=>"rtl"===document.documentElement.dir,T=e=>{k((()=>{const t=w();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},I=e=>{"function"===typeof e&&e()},S=(e,t,n=!0)=>{if(!n)return void I(e);const r=5,i=h(t)+r;let o=!1;const a=({target:n})=>{n===t&&(o=!0,t.removeEventListener(s,a),I(e))};t.addEventListener(s,a),setTimeout((()=>{o||d(t)}),i)},O=(e,t,n,r)=>{let i=e.indexOf(t);if(-1===i)return e[!n&&r?e.length-1:0];const s=e.length;return i+=n?1:-1,r&&(i=(i+s)%s),e[Math.max(0,Math.min(i,s-1))]},N=/[^.]*(?=\..*)\.|.*/,P=/\..*/,R=/::\d+$/,x={};let A=1;const L={mouseenter:"mouseover",mouseleave:"mouseout"},D=/^(mouseenter|mouseleave)/i,M=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function F(e,t){return t&&`${t}::${A++}`||e.uidEvent||A++}function U(e){const t=F(e);return e.uidEvent=t,x[t]=x[t]||{},x[t]}function $(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&K.off(e,r.type,t),t.apply(e,[r])}}function j(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&K.off(e,i.type,t,n),n.apply(o,[i]);return null}}function W(e,t,n=null){const r=Object.keys(e);for(let i=0,s=r.length;i<s;i++){const s=e[r[i]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function q(e,t,n){const r="string"===typeof t,i=r?n:t;let s=z(e);const o=M.has(s);return o||(s=e),[r,i,s]}function H(e,t,n,r,i){if("string"!==typeof t||!e)return;if(n||(n=r,r=null),D.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[s,o,a]=q(t,n,r),c=U(e),l=c[a]||(c[a]={}),u=W(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=F(o,t.replace(N,"")),d=s?j(e,n,r):$(e,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function V(e,t,n,r,i){const s=W(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function B(e,t,n,r){const i=t[n]||{};Object.keys(i).forEach((s=>{if(s.includes(r)){const r=i[s];V(e,t,n,r.originalHandler,r.delegationSelector)}}))}function z(e){return e=e.replace(P,""),L[e]||e}const K={on(e,t,n,r){H(e,t,n,r,!1)},one(e,t,n,r){H(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=q(t,n,r),a=o!==t,c=U(e),l=t.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void V(e,c,o,s,i?n:null)}l&&Object.keys(c).forEach((n=>{B(e,c,n,t.slice(1))}));const u=c[o]||{};Object.keys(u).forEach((n=>{const r=n.replace(R,"");if(!a||t.includes(r)){const t=u[n];V(e,c,o,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=w(),i=z(t),s=t!==i,o=M.has(i);let a,c=!0,l=!0,u=!1,h=null;return s&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((e=>{Object.defineProperty(h,e,{get(){return n[e]}})})),u&&h.preventDefault(),l&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},G=new Map,Y={set(e,t,n){G.has(e)||G.set(e,new Map);const r=G.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return G.has(e)&&G.get(e).get(t)||null},remove(e,t){if(!G.has(e))return;const n=G.get(e);n.delete(t),0===n.size&&G.delete(e)}},J="5.1.3";class Q{constructor(e){e=p(e),e&&(this._element=e,Y.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Y.remove(this._element,this.constructor.DATA_KEY),K.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){S(e,t,n)}static getInstance(e){return Y.get(p(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return J}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const X=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;K.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),g(this))return;const i=u(this)||this.closest(`.${r}`),s=e.getOrCreateInstance(i);s[t]()}))},Z="alert",ee="bs.alert",te=`.${ee}`,ne=`close${te}`,re=`closed${te}`,ie="fade",se="show";class oe extends Q{static get NAME(){return Z}close(){const e=K.trigger(this._element,ne);if(e.defaultPrevented)return;this._element.classList.remove(se);const t=this._element.classList.contains(ie);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),K.trigger(this._element,re),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=oe.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}X(oe,"close"),T(oe);const ae="button",ce="bs.button",le=`.${ce}`,ue=".data-api",he="active",de='[data-bs-toggle="button"]',fe=`click${le}${ue}`;class pe extends Q{static get NAME(){return ae}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(he))}static jQueryInterface(e){return this.each((function(){const t=pe.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function me(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function _e(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}K.on(document,fe,de,(e=>{e.preventDefault();const t=e.target.closest(de),n=pe.getOrCreateInstance(t);n.toggle()})),T(pe);const ge={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${_e(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${_e(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=me(e.dataset[n])})),t},getDataAttribute(e,t){return me(e.getAttribute(`data-bs-${_e(t)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},ve=3,ye={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let r=e.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==ve)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!g(e)&&_(e)))}},be="carousel",we="bs.carousel",Ee=`.${we}`,ke=".data-api",Ce="ArrowLeft",Te="ArrowRight",Ie=500,Se=40,Oe={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Ne={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Pe="next",Re="prev",xe="left",Ae="right",Le={[Ce]:Ae,[Te]:xe},De=`slide${Ee}`,Me=`slid${Ee}`,Fe=`keydown${Ee}`,Ue=`mouseenter${Ee}`,$e=`mouseleave${Ee}`,je=`touchstart${Ee}`,We=`touchmove${Ee}`,qe=`touchend${Ee}`,He=`pointerdown${Ee}`,Ve=`pointerup${Ee}`,Be=`dragstart${Ee}`,ze=`load${Ee}${ke}`,Ke=`click${Ee}${ke}`,Ge="carousel",Ye="active",Je="slide",Qe="carousel-item-end",Xe="carousel-item-start",Ze="carousel-item-next",et="carousel-item-prev",tt="pointer-event",nt=".active",rt=".active.carousel-item",it=".carousel-item",st=".carousel-item img",ot=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",ct="[data-bs-target]",lt="[data-bs-slide], [data-bs-slide-to]",ut='[data-bs-ride="carousel"]',ht="touch",dt="pen";class ft extends Q{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=ye.findOne(at,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Oe}static get NAME(){return be}next(){this._slide(Pe)}nextWhenVisible(){!document.hidden&&_(this._element)&&this.next()}prev(){this._slide(Re)}pause(e){e||(this._isPaused=!0),ye.findOne(ot,this._element)&&(d(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=ye.findOne(rt,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void K.one(this._element,Me,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const n=e>t?Pe:Re;this._slide(n,this._items[e])}_getConfig(e){return e={...Oe,...ge.getDataAttributes(this._element),..."object"===typeof e?e:{}},m(be,e,Ne),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Se)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Ae:xe)}_addEventListeners(){this._config.keyboard&&K.on(this._element,Fe,(e=>this._keydown(e))),"hover"===this._config.pause&&(K.on(this._element,Ue,(e=>this.pause(e))),K.on(this._element,$e,(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===dt||e.pointerType===ht),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},r=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),Ie+this._config.interval))};ye.find(st,this._element).forEach((e=>{K.on(e,Be,(e=>e.preventDefault()))})),this._pointerEvent?(K.on(this._element,He,(e=>t(e))),K.on(this._element,Ve,(e=>r(e))),this._element.classList.add(tt)):(K.on(this._element,je,(e=>t(e))),K.on(this._element,We,(e=>n(e))),K.on(this._element,qe,(e=>r(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Le[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?ye.find(it,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Pe;return O(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),r=this._getItemIndex(ye.findOne(rt,this._element));return K.trigger(this._element,De,{relatedTarget:e,direction:t,from:r,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=ye.findOne(nt,this._indicatorsElement);t.classList.remove(Ye),t.removeAttribute("aria-current");const n=ye.find(ct,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[r].classList.add(Ye),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||ye.findOne(rt,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),r=ye.findOne(rt,this._element),i=this._getItemIndex(r),s=t||this._getItemByOrder(n,r),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Pe,l=c?Xe:Qe,u=c?Ze:et,h=this._orderToDirection(n);if(s&&s.classList.contains(Ye))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!r||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{K.trigger(this._element,Me,{relatedTarget:s,direction:h,from:i,to:o})};if(this._element.classList.contains(Je)){s.classList.add(u),b(s),r.classList.add(l),s.classList.add(l);const e=()=>{s.classList.remove(l,u),s.classList.add(Ye),r.classList.remove(Ye,u,l),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,r,!0)}else r.classList.remove(Ye),s.classList.add(Ye),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[Ae,xe].includes(e)?C()?e===xe?Re:Pe:e===xe?Pe:Re:e}_orderToDirection(e){return[Pe,Re].includes(e)?C()?e===Re?xe:Ae:e===Re?Ae:xe:e}static carouselInterface(e,t){const n=ft.getOrCreateInstance(e,t);let{_config:r}=n;"object"===typeof t&&(r={...r,...t});const i="string"===typeof t?t:r.slide;if("number"===typeof t)n.to(t);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){ft.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=u(this);if(!t||!t.classList.contains(Ge))return;const n={...ge.getDataAttributes(t),...ge.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),ft.carouselInterface(t,n),r&&ft.getInstance(t).to(r),e.preventDefault()}}K.on(document,Ke,lt,ft.dataApiClickHandler),K.on(window,ze,(()=>{const e=ye.find(ut);for(let t=0,n=e.length;t<n;t++)ft.carouselInterface(e[t],ft.getInstance(e[t]))})),T(ft);const pt="collapse",mt="bs.collapse",_t=`.${mt}`,gt=".data-api",vt={toggle:!0,parent:null},yt={toggle:"boolean",parent:"(null|element)"},bt=`show${_t}`,wt=`shown${_t}`,Et=`hide${_t}`,kt=`hidden${_t}`,Ct=`click${_t}${gt}`,Tt="show",It="collapse",St="collapsing",Ot="collapsed",Nt=`:scope .${It} .${It}`,Pt="collapse-horizontal",Rt="width",xt="height",At=".collapse.show, .collapse.collapsing",Lt='[data-bs-toggle="collapse"]';class Dt extends Q{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=ye.find(Lt);for(let r=0,i=n.length;r<i;r++){const e=n[r],t=l(e),i=ye.find(t).filter((e=>e===this._element));null!==t&&i.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return vt}static get NAME(){return pt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=ye.find(Nt,this._config.parent);t=ye.find(At,this._config.parent).filter((t=>!e.includes(t)))}const n=ye.findOne(this._selector);if(t.length){const r=t.find((e=>n!==e));if(e=r?Dt.getInstance(r):null,e&&e._isTransitioning)return}const r=K.trigger(this._element,bt);if(r.defaultPrevented)return;t.forEach((t=>{n!==t&&Dt.getOrCreateInstance(t,{toggle:!1}).hide(),e||Y.set(t,mt,null)}));const i=this._getDimension();this._element.classList.remove(It),this._element.classList.add(St),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(It,Tt),this._element.style[i]="",K.trigger(this._element,wt)},o=i[0].toUpperCase()+i.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=K.trigger(this._element,Et);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,b(this._element),this._element.classList.add(St),this._element.classList.remove(It,Tt);const n=this._triggerArray.length;for(let i=0;i<n;i++){const e=this._triggerArray[i],t=u(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(It),K.trigger(this._element,kt)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Tt)}_getConfig(e){return e={...vt,...ge.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=p(e.parent),m(pt,e,yt),e}_getDimension(){return this._element.classList.contains(Pt)?Rt:xt}_initializeChildren(){if(!this._config.parent)return;const e=ye.find(Nt,this._config.parent);ye.find(Lt,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=u(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(Ot):e.classList.add(Ot),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=Dt.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}K.on(document,Ct,Lt,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=l(this),n=ye.find(t);n.forEach((e=>{Dt.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),T(Dt);const Mt="dropdown",Ft="bs.dropdown",Ut=`.${Ft}`,$t=".data-api",jt="Escape",Wt="Space",qt="Tab",Ht="ArrowUp",Vt="ArrowDown",Bt=2,zt=new RegExp(`${Ht}|${Vt}|${jt}`),Kt=`hide${Ut}`,Gt=`hidden${Ut}`,Yt=`show${Ut}`,Jt=`shown${Ut}`,Qt=`click${Ut}${$t}`,Xt=`keydown${Ut}${$t}`,Zt=`keyup${Ut}${$t}`,en="show",tn="dropup",nn="dropend",rn="dropstart",sn="navbar",on='[data-bs-toggle="dropdown"]',an=".dropdown-menu",cn=".navbar-nav",ln=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",un=C()?"top-end":"top-start",hn=C()?"top-start":"top-end",dn=C()?"bottom-end":"bottom-start",fn=C()?"bottom-start":"bottom-end",pn=C()?"left-start":"right-start",mn=C()?"right-start":"left-start",_n={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},gn={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class vn extends Q{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return _n}static get DefaultType(){return gn}static get NAME(){return Mt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(g(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=K.trigger(this._element,Yt,e);if(t.defaultPrevented)return;const n=vn.getParentFromElement(this._element);this._inNavbar?ge.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(cn)&&[].concat(...document.body.children).forEach((e=>K.on(e,"mouseover",y))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(en),this._element.classList.add(en),K.trigger(this._element,Jt,e)}hide(){if(g(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=K.trigger(this._element,Kt,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>K.off(e,"mouseover",y))),this._popper&&this._popper.destroy(),this._menu.classList.remove(en),this._element.classList.remove(en),this._element.setAttribute("aria-expanded","false"),ge.removeDataAttribute(this._menu,"popper"),K.trigger(this._element,Gt,e))}_getConfig(e){if(e={...this.constructor.Default,...ge.getDataAttributes(this._element),...e},m(Mt,e,this.constructor.DefaultType),"object"===typeof e.reference&&!f(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Mt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if("undefined"===typeof n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:f(this._config.reference)?t=p(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const r=this._getPopperConfig(),i=r.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=n.createPopper(t,this._menu,r),i&&ge.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(en)}_getMenuElement(){return ye.next(this._element,an)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(nn))return pn;if(e.classList.contains(rn))return mn;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(tn)?t?hn:un:t?fn:dn}_detectNavbar(){return null!==this._element.closest(`.${sn}`)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=ye.find(ln,this._menu).filter(_);n.length&&O(n,t,e===Vt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=vn.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Bt||"keyup"===e.type&&e.key!==qt))return;const t=ye.find(on);for(let n=0,r=t.length;n<r;n++){const r=vn.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&e.key===qt||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(i.clickEvent=e)}r._completeHide(i)}}static getParentFromElement(e){return u(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Wt||e.key!==jt&&(e.key!==Vt&&e.key!==Ht||e.target.closest(an)):!zt.test(e.key))return;const t=this.classList.contains(en);if(!t&&e.key===jt)return;if(e.preventDefault(),e.stopPropagation(),g(this))return;const n=this.matches(on)?this:ye.prev(this,on)[0],r=vn.getOrCreateInstance(n);if(e.key!==jt)return e.key===Ht||e.key===Vt?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==Wt||vn.clearMenus());r.hide()}}K.on(document,Xt,on,vn.dataApiKeydownHandler),K.on(document,Xt,an,vn.dataApiKeydownHandler),K.on(document,Qt,vn.clearMenus),K.on(document,Zt,vn.clearMenus),K.on(document,Qt,on,(function(e){e.preventDefault(),vn.getOrCreateInstance(this).toggle()})),T(vn);const yn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",bn=".sticky-top";class wn{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(yn,"paddingRight",(t=>t+e)),this._setElementAttributes(bn,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(i))}px`};this._applyManipulationCallback(e,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(yn,"paddingRight"),this._resetElementAttributes(bn,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&ge.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=ge.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(ge.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){f(e)?t(e):ye.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const En={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},kn={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Cn="backdrop",Tn="fade",In="show",Sn=`mousedown.bs.${Cn}`;class On{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&b(this._getElement()),this._getElement().classList.add(In),this._emulateAnimation((()=>{I(e)}))):I(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(In),this._emulateAnimation((()=>{this.dispose(),I(e)}))):I(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Tn),this._element=e}return this._element}_getConfig(e){return e={...En,..."object"===typeof e?e:{}},e.rootElement=p(e.rootElement),m(Cn,e,kn),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),K.on(this._getElement(),Sn,(()=>{I(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(K.off(this._element,Sn),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){S(e,this._getElement(),this._config.isAnimated)}}const Nn={trapElement:null,autofocus:!0},Pn={trapElement:"element",autofocus:"boolean"},Rn="focustrap",xn="bs.focustrap",An=`.${xn}`,Ln=`focusin${An}`,Dn=`keydown.tab${An}`,Mn="Tab",Fn="forward",Un="backward";class $n{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),K.off(document,An),K.on(document,Ln,(e=>this._handleFocusin(e))),K.on(document,Dn,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,K.off(document,An))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const r=ye.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===Un?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===Mn&&(this._lastTabNavDirection=e.shiftKey?Un:Fn)}_getConfig(e){return e={...Nn,..."object"===typeof e?e:{}},m(Rn,e,Pn),e}}const jn="modal",Wn="bs.modal",qn=`.${Wn}`,Hn=".data-api",Vn="Escape",Bn={backdrop:!0,keyboard:!0,focus:!0},zn={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Kn=`hide${qn}`,Gn=`hidePrevented${qn}`,Yn=`hidden${qn}`,Jn=`show${qn}`,Qn=`shown${qn}`,Xn=`resize${qn}`,Zn=`click.dismiss${qn}`,er=`keydown.dismiss${qn}`,tr=`mouseup.dismiss${qn}`,nr=`mousedown.dismiss${qn}`,rr=`click${qn}${Hn}`,ir="modal-open",sr="fade",or="show",ar="modal-static",cr=".modal.show",lr=".modal-dialog",ur=".modal-body",hr='[data-bs-toggle="modal"]';class dr extends Q{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=ye.findOne(lr,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new wn}static get Default(){return Bn}static get NAME(){return jn}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=K.trigger(this._element,Jn,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ir),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),K.on(this._dialog,nr,(()=>{K.one(this._element,tr,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=K.trigger(this._element,Kn);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(or),K.off(this._element,Zn),K.off(this._dialog,nr),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>K.off(e,qn))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new On({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $n({trapElement:this._element})}_getConfig(e){return e={...Bn,...ge.getDataAttributes(this._element),..."object"===typeof e?e:{}},m(jn,e,zn),e}_showElement(e){const t=this._isAnimated(),n=ye.findOne(ur,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&b(this._element),this._element.classList.add(or);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,K.trigger(this._element,Qn,{relatedTarget:e})};this._queueCallback(r,this._dialog,t)}_setEscapeEvent(){this._isShown?K.on(this._element,er,(e=>{this._config.keyboard&&e.key===Vn?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Vn||this._triggerBackdropTransition()})):K.off(this._element,er)}_setResizeEvent(){this._isShown?K.on(window,Xn,(()=>this._adjustDialog())):K.off(window,Xn)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ir),this._resetAdjustments(),this._scrollBar.reset(),K.trigger(this._element,Yn)}))}_showBackdrop(e){K.on(this._element,Zn,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(sr)}_triggerBackdropTransition(){const e=K.trigger(this._element,Gn);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||t.contains(ar)||(i||(r.overflowY="hidden"),t.add(ar),this._queueCallback((()=>{t.remove(ar),i||this._queueCallback((()=>{r.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!C()||n&&!e&&C())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!C()||!n&&e&&C())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=dr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}K.on(document,rr,hr,(function(e){const t=u(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),K.one(t,Jn,(e=>{e.defaultPrevented||K.one(t,Yn,(()=>{_(this)&&this.focus()}))}));const n=ye.findOne(cr);n&&dr.getInstance(n).hide();const r=dr.getOrCreateInstance(t);r.toggle(this)})),X(dr),T(dr);const fr="offcanvas",pr="bs.offcanvas",mr=`.${pr}`,_r=".data-api",gr=`load${mr}${_r}`,vr="Escape",yr={backdrop:!0,keyboard:!0,scroll:!1},br={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},wr="show",Er="offcanvas-backdrop",kr=".offcanvas.show",Cr=`show${mr}`,Tr=`shown${mr}`,Ir=`hide${mr}`,Sr=`hidden${mr}`,Or=`click${mr}${_r}`,Nr=`keydown.dismiss${mr}`,Pr='[data-bs-toggle="offcanvas"]';class Rr extends Q{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return fr}static get Default(){return yr}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=K.trigger(this._element,Cr,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new wn).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(wr);const n=()=>{this._config.scroll||this._focustrap.activate(),K.trigger(this._element,Tr,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=K.trigger(this._element,Ir);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(wr),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new wn).reset(),K.trigger(this._element,Sr)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...yr,...ge.getDataAttributes(this._element),..."object"===typeof e?e:{}},m(fr,e,br),e}_initializeBackDrop(){return new On({className:Er,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new $n({trapElement:this._element})}_addEventListeners(){K.on(this._element,Nr,(e=>{this._config.keyboard&&e.key===vr&&this.hide()}))}static jQueryInterface(e){return this.each((function(){const t=Rr.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}K.on(document,Or,Pr,(function(e){const t=u(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),g(this))return;K.one(t,Sr,(()=>{_(this)&&this.focus()}));const n=ye.findOne(kr);n&&n!==t&&Rr.getInstance(n).hide();const r=Rr.getOrCreateInstance(t);r.toggle(this)})),K.on(window,gr,(()=>ye.find(kr).forEach((e=>Rr.getOrCreateInstance(e).show())))),X(Rr),T(Rr);const xr=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ar=/^aria-[\w-]*$/i,Lr=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Dr=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Mr=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!xr.has(n)||Boolean(Lr.test(e.nodeValue)||Dr.test(e.nodeValue));const r=t.filter((e=>e instanceof RegExp));for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},Fr={"*":["class","dir","id","lang","role",Ar],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Ur(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const e=s[o],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const r=[].concat(...e.attributes),i=[].concat(t["*"]||[],t[n]||[]);r.forEach((t=>{Mr(t,i)||e.removeAttribute(t.nodeName)}))}return i.body.innerHTML}const $r="tooltip",jr="bs.tooltip",Wr=`.${jr}`,qr="bs-tooltip",Hr=new Set(["sanitize","allowList","sanitizeFn"]),Vr={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Br={AUTO:"auto",TOP:"top",RIGHT:C()?"left":"right",BOTTOM:"bottom",LEFT:C()?"right":"left"},zr={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Fr,popperConfig:null},Kr={HIDE:`hide${Wr}`,HIDDEN:`hidden${Wr}`,SHOW:`show${Wr}`,SHOWN:`shown${Wr}`,INSERTED:`inserted${Wr}`,CLICK:`click${Wr}`,FOCUSIN:`focusin${Wr}`,FOCUSOUT:`focusout${Wr}`,MOUSEENTER:`mouseenter${Wr}`,MOUSELEAVE:`mouseleave${Wr}`},Gr="fade",Yr="modal",Jr="show",Qr="show",Xr="out",Zr=".tooltip-inner",ei=`.${Yr}`,ti="hide.bs.modal",ni="hover",ri="focus",ii="click",si="manual";class oi extends Q{constructor(e,t){if("undefined"===typeof n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return zr}static get NAME(){return $r}static get Event(){return Kr}static get DefaultType(){return Vr}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(Jr))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),K.off(this._element.closest(ei),ti,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=K.trigger(this._element,this.constructor.Event.SHOW),t=v(this._element),r=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!r)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(Zr).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const i=this.getTipElement(),s=a(this.constructor.NAME);i.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&i.classList.add(Gr);const o="function"===typeof this._config.placement?this._config.placement.call(this,i,this._element):this._config.placement,c=this._getAttachment(o);this._addAttachmentClass(c);const{container:l}=this._config;Y.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.append(i),K.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=n.createPopper(this._element,i,this._getPopperConfig(c)),i.classList.add(Jr);const u=this._resolvePossibleFunction(this._config.customClass);u&&i.classList.add(...u.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>{K.on(e,"mouseover",y)}));const h=()=>{const e=this._hoverState;this._hoverState=null,K.trigger(this._element,this.constructor.Event.SHOWN),e===Xr&&this._leave(null,this)},d=this.tip.classList.contains(Gr);this._queueCallback(h,this.tip,d)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==Qr&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),K.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=K.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(Jr),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>K.off(e,"mouseover",y))),this._activeTrigger[ii]=!1,this._activeTrigger[ri]=!1,this._activeTrigger[ni]=!1;const r=this.tip.classList.contains(Gr);this._queueCallback(t,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(Gr,Jr),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Zr)}_sanitizeAndSetContent(e,t,n){const r=ye.findOne(n,e);t||!r?this.setElementContent(r,t):r.remove()}setElementContent(e,t){if(null!==e)return f(t)?(t=p(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Ur(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Br[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach((e=>{if("click"===e)K.on(this._element,this.constructor.Event.CLICK,this._config.selector,(e=>this.toggle(e)));else if(e!==si){const t=e===ni?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===ni?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;K.on(this._element,t,this._config.selector,(e=>this._enter(e))),K.on(this._element,n,this._config.selector,(e=>this._leave(e)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},K.on(this._element.closest(ei),ti,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?ri:ni]=!0),t.getTipElement().classList.contains(Jr)||t._hoverState===Qr?t._hoverState=Qr:(clearTimeout(t._timeout),t._hoverState=Qr,t._config.delay&&t._config.delay.show?t._timeout=setTimeout((()=>{t._hoverState===Qr&&t.show()}),t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?ri:ni]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Xr,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout((()=>{t._hoverState===Xr&&t.hide()}),t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=ge.getDataAttributes(this._element);return Object.keys(t).forEach((e=>{Hr.has(e)&&delete t[e]})),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:p(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),m($r,e,this.constructor.DefaultType),e.sanitize&&(e.template=Ur(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map((e=>e.trim())).forEach((t=>e.classList.remove(t)))}_getBasicClassPrefix(){return qr}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=oi.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}T(oi);const ai="popover",ci="bs.popover",li=`.${ci}`,ui="bs-popover",hi={...oi.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},di={...oi.DefaultType,content:"(string|element|function)"},fi={HIDE:`hide${li}`,HIDDEN:`hidden${li}`,SHOW:`show${li}`,SHOWN:`shown${li}`,INSERTED:`inserted${li}`,CLICK:`click${li}`,FOCUSIN:`focusin${li}`,FOCUSOUT:`focusout${li}`,MOUSEENTER:`mouseenter${li}`,MOUSELEAVE:`mouseleave${li}`},pi=".popover-header",mi=".popover-body";class _i extends oi{static get Default(){return hi}static get NAME(){return ai}static get Event(){return fi}static get DefaultType(){return di}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),pi),this._sanitizeAndSetContent(e,this._getContent(),mi)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return ui}static jQueryInterface(e){return this.each((function(){const t=_i.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}T(_i);const gi="scrollspy",vi="bs.scrollspy",yi=`.${vi}`,bi=".data-api",wi={offset:10,method:"auto",target:""},Ei={offset:"number",method:"string",target:"(string|element)"},ki=`activate${yi}`,Ci=`scroll${yi}`,Ti=`load${yi}${bi}`,Ii="dropdown-item",Si="active",Oi='[data-bs-spy="scroll"]',Ni=".nav, .list-group",Pi=".nav-link",Ri=".nav-item",xi=".list-group-item",Ai=`${Pi}, ${xi}, .${Ii}`,Li=".dropdown",Di=".dropdown-toggle",Mi="offset",Fi="position";class Ui extends Q{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,K.on(this._scrollElement,Ci,(()=>this._process())),this.refresh(),this._process()}static get Default(){return wi}static get NAME(){return gi}refresh(){const e=this._scrollElement===this._scrollElement.window?Mi:Fi,t="auto"===this._config.method?e:this._config.method,n=t===Fi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=ye.find(Ai,this._config.target);r.map((e=>{const r=l(e),i=r?ye.findOne(r):null;if(i){const e=i.getBoundingClientRect();if(e.width||e.height)return[ge[t](i).top+n,r]}return null})).filter((e=>e)).sort(((e,t)=>e[0]-t[0])).forEach((e=>{this._offsets.push(e[0]),this._targets.push(e[1])}))}dispose(){K.off(this._scrollElement,yi),super.dispose()}_getConfig(e){return e={...wi,...ge.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=p(e.target)||document.documentElement,m(gi,e,Ei),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=Ai.split(",").map((t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),n=ye.findOne(t.join(","),this._config.target);n.classList.add(Si),n.classList.contains(Ii)?ye.findOne(Di,n.closest(Li)).classList.add(Si):ye.parents(n,Ni).forEach((e=>{ye.prev(e,`${Pi}, ${xi}`).forEach((e=>e.classList.add(Si))),ye.prev(e,Ri).forEach((e=>{ye.children(e,Pi).forEach((e=>e.classList.add(Si)))}))})),K.trigger(this._scrollElement,ki,{relatedTarget:e})}_clear(){ye.find(Ai,this._config.target).filter((e=>e.classList.contains(Si))).forEach((e=>e.classList.remove(Si)))}static jQueryInterface(e){return this.each((function(){const t=Ui.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}K.on(window,Ti,(()=>{ye.find(Oi).forEach((e=>new Ui(e)))})),T(Ui);const $i="tab",ji="bs.tab",Wi=`.${ji}`,qi=".data-api",Hi=`hide${Wi}`,Vi=`hidden${Wi}`,Bi=`show${Wi}`,zi=`shown${Wi}`,Ki=`click${Wi}${qi}`,Gi="dropdown-menu",Yi="active",Ji="fade",Qi="show",Xi=".dropdown",Zi=".nav, .list-group",es=".active",ts=":scope > li > .active",ns='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',rs=".dropdown-toggle",is=":scope > .dropdown-menu .active";class ss extends Q{static get NAME(){return $i}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Yi))return;let e;const t=u(this._element),n=this._element.closest(Zi);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?ts:es;e=ye.find(t,n),e=e[e.length-1]}const r=e?K.trigger(e,Hi,{relatedTarget:this._element}):null,i=K.trigger(this._element,Bi,{relatedTarget:e});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{K.trigger(e,Vi,{relatedTarget:this._element}),K.trigger(this._element,zi,{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,n){const r=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?ye.children(t,es):ye.find(ts,t),i=r[0],s=n&&i&&i.classList.contains(Ji),o=()=>this._transitionComplete(e,i,n);i&&s?(i.classList.remove(Qi),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove(Yi);const e=ye.findOne(is,t.parentNode);e&&e.classList.remove(Yi),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(Yi),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),b(e),e.classList.contains(Ji)&&e.classList.add(Qi);let r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(Gi)){const t=e.closest(Xi);t&&ye.find(rs,t).forEach((e=>e.classList.add(Yi))),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=ss.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}K.on(document,Ki,ns,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),g(this))return;const t=ss.getOrCreateInstance(this);t.show()})),T(ss);const os="toast",as="bs.toast",cs=`.${as}`,ls=`mouseover${cs}`,us=`mouseout${cs}`,hs=`focusin${cs}`,ds=`focusout${cs}`,fs=`hide${cs}`,ps=`hidden${cs}`,ms=`show${cs}`,_s=`shown${cs}`,gs="fade",vs="hide",ys="show",bs="showing",ws={animation:"boolean",autohide:"boolean",delay:"number"},Es={animation:!0,autohide:!0,delay:5e3};class ks extends Q{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ws}static get Default(){return Es}static get NAME(){return os}show(){const e=K.trigger(this._element,ms);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(gs);const t=()=>{this._element.classList.remove(bs),K.trigger(this._element,_s),this._maybeScheduleHide()};this._element.classList.remove(vs),b(this._element),this._element.classList.add(ys),this._element.classList.add(bs),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(ys))return;const e=K.trigger(this._element,fs);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(vs),this._element.classList.remove(bs),this._element.classList.remove(ys),K.trigger(this._element,ps)};this._element.classList.add(bs),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(ys)&&this._element.classList.remove(ys),super.dispose()}_getConfig(e){return e={...Es,...ge.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},m(os,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){K.on(this._element,ls,(e=>this._onInteraction(e,!0))),K.on(this._element,us,(e=>this._onInteraction(e,!1))),K.on(this._element,hs,(e=>this._onInteraction(e,!0))),K.on(this._element,ds,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=ks.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}X(ks),T(ks);const Cs={Alert:oe,Button:pe,Carousel:ft,Collapse:Dt,Dropdown:vn,Modal:dr,Offcanvas:Rr,Popover:_i,ScrollSpy:Ui,Tab:ss,Toast:ks,Tooltip:oi};return Cs}))},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="9.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},34:function(e,t,n){"use strict";n.d(t,{Xb:function(){return ct},v0:function(){return hr},e5:function(){return lt},w7:function(){return dt},ck:function(){return ht}});n(1703);var r=n(223),i=n(7077);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw _(e,...t)}function p(e,...t){return _(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function g(e,t,...n){if(!e)throw _(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},A=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},x),t);try{const t=new $(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed")}}async function F(e,t,n,r,i={}){const s=await D(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}class ${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),A.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=z(i);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:H(B(s.auth_time)),issuedAtTime:H(B(s.iat)),expirationTime:H(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function z(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function K(e){const t=z(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,q(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=U(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return V(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:k}=t;g(y&&k,e,"internal-error");const C=re.fromJSON(this.name,k);g("string"===typeof y,e,"internal-error"),ie(u,e.name),ie(h,e.name),g("boolean"===typeof b,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(_,e.name),ie(v,e.name);const T=new se({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:_,lastLoginAt:v});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||w(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=se._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new le(i,e,n)):new le(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function _e(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function ye(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ve(e)||me(e)||ge(e)||_e(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.beforeStateQueue=new Ce(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return g(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ie(e){return(0,r.m9)(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function xe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Oe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ae(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ae(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ne(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="http://localhost";class Me extends Oe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Me(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Le(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:De,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Ue(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function $e(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const je={["USER_NOT_FOUND"]:"user-not-found"};async function We(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),je)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Oe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ue(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return $e(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return We(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new qe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ve(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class Be{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=He(null!==(i=c["mode"])&&void 0!==i?i:null);g(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ve(e);try{return new Be(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Ae._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Be.parseLink(t);return g(n,"argument-error"),Ae._fromEmailAndCode(e,n.code,n.tenantId)}}ze.PROVIDER_ID="password",ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Ke{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ye.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Me._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ge{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch(t){return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com",Qe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Me._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ze(e,t){return F(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.TWITTER_SIGN_IN_METHOD="twitter.com",Xe.PROVIDER_ID="twitter.com";class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=tt(n),o=new et({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tt(n);return new et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nt(e,t,n,r)}}function rt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw nt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return et._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await G(e,rt(r,i,t,e),n);g(s.idToken,r,"internal-error");const o=z(s.idToken);g(o,r,"internal-error");const{sub:a}=o;return g(e.uid===a,r,"user-mismatch"),et._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r="signIn",i=await rt(e,r,t),s=await et._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function at(e,t){return ot(Ie(e),t)}async function ct(e,t,n){const r=Ie(e),i=await Ze(r,{returnSecureToken:!0,email:t,password:n}),s=await et._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function lt(e,t,n){return at((0,r.m9)(e),ze.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await G(i,ut(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function dt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function pt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const mt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mt,"1"),this.storage.removeItem(mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){const e=(0,r.z$)();return de(e)||ve(e)}const vt=1e3,yt=10;class bt extends _t{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gt()&&Ee(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bt.type="LOCAL";const wt=bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends _t{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Et.type="SESSION";const kt=Et;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Tt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ct(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.receivers=[];class St{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=It("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function Nt(e){Ot().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return"undefined"!==typeof Ot()["WorkerGlobalScope"]&&"function"===typeof Ot()["importScripts"]}async function Rt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function xt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function At(){return Pt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="firebaseLocalStorageDb",Dt=1,Mt="firebaseLocalStorage",Ft="fbase_key";class Ut{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function $t(e,t){return e.transaction([Mt],t?"readwrite":"readonly").objectStore(Mt)}function jt(){const e=indexedDB.deleteDatabase(Lt);return new Ut(e).toPromise()}function Wt(){const e=indexedDB.open(Lt,Dt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Mt,{keyPath:Ft})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Mt)?t(n):(n.close(),await jt(),t(await Wt()))}))}))}async function qt(e,t,n){const r=$t(e,!0).put({[Ft]:t,value:n});return new Ut(r).toPromise()}async function Ht(e,t){const n=$t(e,!1).get(t),r=await new Ut(n).toPromise();return void 0===r?null:r.value}function Vt(e,t){const n=$t(e,!0).delete(t);return new Ut(n).toPromise()}const Bt=800,zt=3;class Kt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Wt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tt._getInstance(At()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rt(),!this.activeServiceWorker)return;this.sender=new St(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&xt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await qt(e,mt,"1"),await Vt(e,mt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>qt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Ht(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Vt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=$t(e,!1).getAll();return new Ut(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Kt.type="LOCAL";const Gt=Kt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Jt(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Xt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Qt().appendChild(r)}))}function Zt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Zt("rcb"),new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en="recaptcha";async function tn(e,t,n){var r;const i=await n.verify();try{let s;if(g("string"===typeof i,e,"argument-error"),g(n.type===en,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){g("enroll"===t.type,e,"internal-error");const n=await ft(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;g(n,e,"missing-multi-factor-info");const o=await Yt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Fe(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(e){this.providerId=nn.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return tn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return qe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return nn.credentialFromTaggedObject(t)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qe._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.PROVIDER_ID="phone",nn.PHONE_SIGN_IN_METHOD="phone";class sn extends Oe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function on(e){return ot(e.auth,new sn(e),e.bypassAuthState)}function an(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),st(n,new sn(e),e.bypassAuthState)}async function cn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),it(n,new sn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return cn;case"reauthViaPopup":case"reauthViaRedirect":return an;default:f(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new N(2e3,1e4);class hn extends ln{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=It();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,un.get())};e()}}hn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dn="pendingRedirect",fn=new Map;class pn extends ln{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=fn.get(this.auth._key());if(!e){try{const t=await mn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}fn.set(this.auth._key(),e)}return this.bypassAuthState||fn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function mn(e,t){const n=vn(t),r=gn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function _n(e,t){fn.set(e._key(),t)}function gn(e){return w(e._redirectPersistence)}function vn(e){return ce(dn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e,t,n=!1){const r=Ie(e),i=rn(r,t),s=new pn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=6e5;class wn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Cn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!kn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bn&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(e))}saveEventToCache(e){this.cachedEventUids.add(En(e)),this.lastProcessedEventTime=Date.now()}}function En(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function kn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Cn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sn=/^https?/;async function On(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tn(e);for(const r of t)try{if(Nn(r))return}catch(n){}f(e,"unauthorized-domain")}function Nn(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Sn.test(n))return!1;if(In.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new N(3e4,6e4);function Rn(){const e=Ot().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xn(e){return new Promise(((t,n)=>{var r,i,s;function o(){Rn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Rn(),n(p(e,"network-request-failed"))},timeout:Pn.get()})}if(null===(i=null===(r=Ot().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ot().gapi)||void 0===s?void 0:s.load)){const t=Zt("iframefcb");return Ot()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Xt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw An=null,e}))}let An=null;function Ln(e){return An=An||xn(e),An}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new N(5e3,15e3),Mn="__/auth/iframe",Fn="emulator/auth/iframe",Un={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$n=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,Fn):`https://${e.config.authDomain}/${Mn}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=$n.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Wn(e){const t=await Ln(e),n=Ot().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:jn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Un,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=Ot().setTimeout((()=>{r(i)}),Dn.get());function o(){Ot().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hn=500,Vn=600,Bn="_blank",zn="http://localhost";class Kn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gn(e,t,n,i=Hn,s=Vn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},qn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(c=fe(u)?Bn:n),he(u)&&(t=t||zn,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ye(u)&&"_self"!==c)return Yn(t||"",c),new Kn(null);const d=window.open(t||"",c,h);g(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Kn(d)}function Yn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="__/auth/handler",Qn="emulator/auth/handler";function Xn(e,t,n,s,o,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof Ke){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${Zn(e)}?${(0,r.xO)(l).slice(1)}`}function Zn({config:e}){return e.emulator?P(e,Qn):`https://${e.authDomain}/${Jn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="webStorageSupport";class tr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kt,this._completeRedirectFn=yn,this._overrideRedirectResult=_n}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Xn(e,t,n,C(),r);return Gn(e,s,It())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Nt(Xn(e,t,n,C(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Wn(e),n=new wn(e);return t.register("authEvent",(t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(er,{type:er},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[er];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=On(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||ve()}}const nr=tr;class rr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class ir extends rr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ir(e)}_finalizeEnroll(e,t,n){return pt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Jt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sr{constructor(){}static assertion(e){return ir._fromCredential(e)}}sr.FACTOR_ID="phone";var or="@firebase/auth",ar="0.20.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ur(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{g(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},a=new Te(t,r,i);return k(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new cr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(or,ar,lr(e)),(0,i.KN)(or,ar,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():E(e,{popupRedirectResolver:nr,persistence:[Gt,wt,kt]})}ur("Browser")},1178:function(e,t,n){"use strict";n.d(t,{iU:function(){return Ko},N8:function(){return ca},jM:function(){return ea},VF:function(){return Go},iH:function(){return zo},t8:function(){return Yo},Vx:function(){return Jo}});n(1703);var r=n(7077),i=n(7142),s=n(223),o=n(5168);const a="@firebase/database",c="0.13.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.Pz)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),_=new o.Yd("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,s.dS)(e),n=new s.gQ;n.update(t);const r=n.digest();return s.US.encodeByteArray(r)},y=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=y.apply(null,r):t+="object"===typeof r?(0,s.Pz)(r):r,t+=" "}return t};let b=null,w=!0;const E=function(e,t){(0,s.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(_.logLevel=o["in"].VERBOSE,b=_.log.bind(_),t&&m.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,m.remove("logging_enabled"))},k=function(...e){if(!0===w&&(w=!1,null===b&&!0===m.get("logging_enabled")&&E(!0)),b){const t=y.apply(null,e);b(t)}},C=function(e){return function(...t){k(e,...t)}},T=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);_.error(t)},I=function(...e){const t=`FIREBASE FATAL ERROR: ${y(...e)}`;throw _.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+y(...e);_.warn(t)},O=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if((0,s.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},R="[MIN_NAME]",x="[MAX_NAME]",A=function(e,t){if(e===t)return 0;if(e===R||t===x)return-1;if(t===R||e===x)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.Pz)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,s.Pz)(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,s.Pz)(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function U(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $=function(e){(0,s.hu)(!N(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,a,c,l;0===e?(o=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},j=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},W=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function q(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const H=new RegExp("^-?(0*)\\d{1,10}$"),V=-2147483648,B=2147483647,z=function(e){if(H.test(e)){const t=Number(e);if(t>=V&&t<=B)return t}return null},K=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t}),Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if((0,s.hu)("string"===typeof t,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return U(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},me={};function _e(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ge(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&K((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",be="close",we="pLPCommand",Ee="pRTLPCB",ke="id",Ce="pw",Te="ser",Ie="cb",Se="seg",Oe="ts",Ne="d",Pe="dframe",Re=1870,xe=30,Ae=Re-xe,Le=25e3,De=3e4;class Me{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(e),this.stats_=_e(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(De)),P((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=r;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Te]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ie]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!j()&&!W())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.h$)(t),r=F(n,Ae);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pe]="t",n[ke]=e,n[Ce]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.Pz)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[we+this.uniqueCallbackIdentifier]=e,window[Ee+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){k("frame writing exception"),i.stack&&k(i.stack),k(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||k("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ke]=this.myID,e[Ce]=this.myPW,e[Te]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+xe+n.length<=Re))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+r+"="+e.seg+"&"+Oe+r+"="+e.ts+"&"+Ne+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Le)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){(0,s.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{k("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=16384,$e=45e3;let je=null;"undefined"!==typeof MozWebSocket?je=MozWebSocket:"undefined"!==typeof WebSocket&&(je=WebSocket);class We{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=_e(t),this.connURL=We.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[ee]=Z,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(o[ne]=re),t&&(o[te]=t),n&&(o[se]=n),r&&(o[ae]=r),i&&(o[oe]=i),de(e,ce,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,s.Yr)()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",VUE_APP_API_P2ENDPOINT_URL:"https://jsonplaceholder.typicode.com/",VUE_APP_API_P4ENDPOINT_URL:"https://swapi.dev/api/people/1/",VUE_APP_API_P5ENDPOINT_API_KEY:"2q93XK0bBuplr5E4ApPOCHEcn6pzNdSZ",VUE_APP_ERROR_CODE:"",VUE_APP_I18N_FALLBACK_LOCALE:"ru",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_SUPPORTED_LOCALE:"ru,en",BASE_URL:"/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(t["proxy"]={origin:r})}this.mySock=new je(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==je&&!We.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Ue);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor($e))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2,We.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,We]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=We&&We["isAvailable"]();let n=t&&!We.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[We];else{const e=this.transports_=[];for(const t of qe.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);qe.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qe.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const He=6e4,Ve=5e3,Be=10240,ze=102400,Ke="t",Ge="d",Ye="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new qe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Be?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ke in e){const t=e[Ke];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D(Ke,e);if(Ge in e){const n=e[Ge];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?T("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):T("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(He))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Ve))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){(0,s.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ot}getInitialEvent(e){return(0,s.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function _t(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function gt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return bt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=_t(e,0),r=_t(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=A(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Et(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function kt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Ct{constructor(e,t){this.errorPrefix_=t,this.parts_=_t(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);St(this)}}function Tt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.ug)(t),St(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=(0,s.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function St(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Ot(e))}function Ot(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Nt}getInitialEvent(e){return(0,s.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=1e3,Rt=3e5,xt=3e3,At=3e4,Lt=1.3,Dt=3e4,Mt="server_kill",Ft=3;class Ut extends it{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ut.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pt,this.maxReconnectDelay_=Rt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,s.Pz)(i)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new s.BH,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),xt),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(s,i,(i=>{const s=i["d"],o=i["s"];Ut.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.r3)(e,"w")){const n=(0,s.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=At)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.Pz)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):T("Unrecognized action received from server: "+(0,s.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Pt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Lt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ut.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)}),i))}catch(T){this.log_("Failed to get token: "+T),o||(this.repoInfo_.nodeAdmin&&S(T),c())}}}interrupt(e){k("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){k("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>M(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){k("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=At,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){k("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,s.uI)()?e["framework.cordova"]=1:(0,s.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0,Ut.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $t(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new $t(R,e),r=new $t(R,t);return 0!==this.compare(n,r)}minPost(){return $t.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt;class qt extends jt{static get __EMPTY_NODE(){return Wt}static set __EMPTY_NODE(e){Wt=e}compare(e,t){return A(e.name,t.name)}isDefinedOn(e){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $t.MIN}maxPost(){return new $t(x,Wt)}makePost(e,t){return(0,s.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new $t(e,Wt)}toString(){return".key"}}const Ht=new qt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Bt.RED,this.left=null!=r?r:Kt.EMPTY_NODE,this.right=null!=i?i:Kt.EMPTY_NODE}copy(e,t,n,r,i){return new Bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Kt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0,Bt.BLACK=!1;class zt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,t=Kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return A(e.name,t.name)}function Yt(e,t){return A(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt;function Qt(e){Jt=e}Kt.EMPTY_NODE=new zt;const Xt=function(e){return"number"===typeof e?"number:"+$(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.r3)(t,".sv"),"Priority must be a string or number.")}else(0,s.hu)(e===Jt||e.isEmpty(),"priority of unexpected type.");(0,s.hu)(e===Jt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ht(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:((0,s.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=rn.VALUE_TYPE_ORDER.indexOf(t),i=rn.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(r>=0,"Unknown leaf type: "+t),(0,s.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){tn=e}function on(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends jt{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?A(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $t.MIN}maxPost(){return new $t(x,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new $t(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,ln=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/ln,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Bt(a,o.node,Bt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],a=n?n(o):o,new Bt(a,o.node,Bt.BLACK,l,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),u=e[s],h=n?n(u):u;c(new Bt(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Bt.BLACK):(a(r,Bt.BLACK),a(r,Bt.RED))}return s},o=new un(e.length),a=s(o);return new Kt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const fn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.hu)(fn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":cn}),dn}get(e){const t=(0,s.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kt?t:null}hasIndex(e){return(0,s.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.hu)(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator($t.Wrap);let o,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?hn(n,e.getCompare()):fn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new pn(u,l)}addToIndexes(e,t){const n=(0,s.UI)(this.indexes_,((n,r)=>{const i=(0,s.DV)(this.indexSet_,r);if((0,s.hu)(i,"Missing index implementation for "+r),n===fn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator($t.Wrap);let s=r.getNext();while(s)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),hn(n,i.getCompare())}return fn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new $t(e.name,r))),i.insert(e,e.node)}}));return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.UI)(this.indexes_,(n=>{if(n===fn)return n;{const r=t.get(e.name);return r?n.remove(new $t(e.name,r)):n}}));return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;class _n{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mn||(mn=new _n(new Kt(Yt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mn}updatePriority(e){return this.children_.isEmpty()?this:new _n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?mn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new $t(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?mn:this.priorityNode_;return new _n(r,s,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{(0,s.hu)(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(cn,((s,o)=>{t[s]=o.val(e),n++,i&&_n.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(cn,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new $t(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $t(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $t(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,$t.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,$t.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends _n{constructor(){super(new Kt(Yt),_n.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _n.EMPTY_NODE}isEmpty(){return!1}}const vn=new gn;Object.defineProperties($t,{MIN:{value:new $t(R,_n.EMPTY_NODE)},MAX:{value:new $t(x,vn)}}),qt.__EMPTY_NODE=_n.EMPTY_NODE,rn.__childrenNodeConstructor=_n,Qt(vn),on(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function bn(e,t=null){if(null===e)return _n.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,bn(t))}if(e instanceof Array||!yn){let n=_n.EMPTY_NODE;return U(e,((t,r)=>{if((0,s.r3)(e,t)&&"."!==t.substring(0,1)){const e=bn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(bn(t))}{const n=[];let r=!1;const i=e;if(U(i,((e,t)=>{if("."!==e.substring(0,1)){const i=bn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new $t(e,i)))}})),0===n.length)return _n.EMPTY_NODE;const s=hn(n,Gt,(e=>e.name),Yt);if(r){const e=hn(n,cn.getCompare());return new _n(s,bn(t),new pn({".priority":e},{".priority":cn}))}return new _n(s,bn(t),pn.Default)}}sn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends jt{constructor(e){super(),this.indexPath_=e,(0,s.hu)(!yt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?A(e.name,t.name):i}makePost(e,t){const n=bn(e),r=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new $t(t,r)}maxPost(){const e=_n.EMPTY_NODE.updateChild(this.indexPath_,vn);return new $t(x,e)}toString(){return _t(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends jt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?A(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $t.MIN}maxPost(){return $t.MAX}makePost(e,t){const n=bn(e);return new $t(t,n)}toString(){return".value"}}const kn=new En,Cn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tn=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=Cn.charAt(n%64),n=Math.floor(n/64);(0,s.hu)(0===n,"Cannot push at time == 0");let a=o.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=Cn.charAt(t[i]);return(0,s.hu)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(e){return{type:"value",snapshotNode:e}}function Sn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function On(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Nn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Pn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){(0,s.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(On(t,a)):(0,s.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Sn(t,n)):o.trackChildChange(Nn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,((e,r)=>{t.hasChild(e)||n.trackChildChange(On(e,r))})),t.isLeafNode()||t.forEachChild(cn,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Nn(t,r,i))}else n.trackChildChange(Sn(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_n.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.indexedFilter_=new Rn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xn.getStartPost_(e),this.endPost_=xn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new $t(t,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_n.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(_n.EMPTY_NODE);const i=this;return t.forEachChild(cn,((e,t)=>{i.matches(new $t(e,t))||(r=r.updateImmediateChild(e,_n.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.rangedFilter_=new xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new $t(t,n))||(n=_n.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=_n.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(_n.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&i(t,n)<=0;c?o++:r=r.updateImmediateChild(t.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,s.hu)(a.numChildren()===this.limit_,"");const c=new $t(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Nn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(On(t,e));const n=a.updateImmediateChild(t,_n.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(Sn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=i&&(i.trackChildChange(On(l.name,l.node)),i.trackChildChange(Sn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,_n.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new Ln;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dn(e){return e.loadsAllData()?new Rn(e.getIndex()):e.hasLimit()?new An(e):new xn(e)}function Mn(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===kn?n="$value":e.index_===Ht?n="$key":((0,s.hu)(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.Pz)(n),e.startSet_&&(t["startAt"]=(0,s.Pz)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,s.Pz)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,s.Pz)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,s.Pz)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Fn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=C("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Un.getListenId_(e,n),a={};this.listens_[o]=a;const c=Mn(e._queryParams);this.restRequest_(i+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,s.DV)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Un.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mn(e._queryParams),n=e._path.toString(),r=new s.BH;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.xO)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.cI)(a.responseText)}catch(e){S("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return{value:null,children:new Map}}function Wn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,jn());const i=e.children.get(r);t=ft(t),Wn(i,t,n)}}function qn(e,t,n){null!==e.value?n(t,e.value):Hn(e,((e,r)=>{const i=new lt(t.toString()+"/"+e);qn(r,i,n)}))}function Hn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&U(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=1e4,zn=3e4,Kn=3e5;class Gn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vn(e);const n=Bn+(zn-Bn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;U(e,((e,r)=>{r>0&&(0,s.r3)(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Kn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn;function Jn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));class Zn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Yn.ACK_USER_WRITE,this.source=Jn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Zn(ut(),t,this.revert)}}return(0,s.hu)(ht(this.path)===e,"operationForChild called for unrelated child."),new Zn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.source=e,this.path=t,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new er(this.source,ut()):new er(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Yn.OVERWRITE}operationForChild(e){return yt(this.path)?new tr(this.source,ut(),this.snap.getImmediateChild(e)):new tr(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Yn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new tr(this.source,ut(),t.value):new nr(this.source,ut(),t)}return(0,s.hu)(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nr(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sr(e,t,n,r){const i=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Pn(t.childName,t.snapshotNode))})),or(e,i,"child_removed",t,r,n),or(e,i,"child_added",t,r,n),or(e,i,"child_moved",s,r,n),or(e,i,"child_changed",t,r,n),or(e,i,"value",t,r,n),i}function or(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>cr(e,t,n))),o.forEach((n=>{const r=ar(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function ar(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function cr(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const r=new $t(t.childName,t.snapshotNode),i=new $t(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e,t){return{eventCache:e,serverCache:t}}function ur(e,t,n,r){return lr(new rr(t,n,r),e.serverCache)}function hr(e,t,n,r){return lr(e.eventCache,new rr(t,n,r))}function dr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;const mr=()=>(pr||(pr=new Kt(L)),pr);class _r{constructor(e,t=mr()){this.value=e,this.children=t}static fromObject(e){let t=new _r(null);return U(e,((e,n)=>{t=t.set(new lt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(yt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=vt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new _r(null)}}set(e,t){if(yt(e))return new _r(t,this.children);{const n=ht(e),r=this.children.get(n)||new _r(null),i=r.set(ft(e),t),s=this.children.insert(n,i);return new _r(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new _r(null):new _r(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new _r(null):new _r(this.value,i)}return this}}get(e){if(yt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ht(e),r=this.children.get(n)||new _r(null),i=r.setTree(ft(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new _r(this.value,s)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(vt(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(yt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),vt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),vt(t,r),n):new _r(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(vt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.writeTree_=e}static empty(){return new gr(new _r(null))}}function vr(e,t,n){if(yt(t))return new gr(new _r(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=bt(i,t);return s=s.updateChild(o,n),new gr(e.writeTree_.set(i,s))}{const r=new _r(n),i=e.writeTree_.setTree(t,r);return new gr(i)}}}function yr(e,t,n){let r=e;return U(n,((e,n)=>{r=vr(r,vt(t,e),n)})),r}function br(e,t){if(yt(t))return gr.empty();{const n=e.writeTree_.setTree(t,new _r(null));return new gr(n)}}function wr(e,t){return null!=Er(e,t)}function Er(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function kr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,((e,n)=>{t.push(new $t(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new $t(e,n.value))})),t}function Cr(e,t){if(yt(t))return e;{const n=Er(e,t);return new gr(null!=n?new _r(n):e.writeTree_.subtree(t))}}function Tr(e){return e.writeTree_.isEmpty()}function Ir(e,t){return Sr(ut(),e.writeTree_,t)}function Sr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?((0,s.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Sr(vt(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(vt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e,t){return Qr(t,e)}function Nr(e,t,n,r,i){(0,s.hu)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=vr(e.visibleWrites,t,n)),e.lastWriteId=r}function Pr(e,t,n,r){(0,s.hu)(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=yr(e.visibleWrites,t,n),e.lastWriteId=r}function Rr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function xr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ar(t,r.path)?i=!1:kt(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return Lr(e),!0;if(r.snap)e.visibleWrites=br(e.visibleWrites,r.path);else{const t=r.children;U(t,(t=>{e.visibleWrites=br(e.visibleWrites,vt(r.path,t))}))}return!0}return!1}function Ar(e,t){if(e.snap)return kt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&kt(vt(e.path,n),t))return!0;return!1}function Lr(e){e.visibleWrites=Mr(e.allWrites,Dr,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Dr(e){return e.visible}function Mr(e,t,n){let r=gr.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)kt(n,e)?(t=bt(n,e),r=vr(r,t,o.snap)):kt(e,n)&&(t=bt(e,n),r=vr(r,ut(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(kt(n,e))t=bt(n,e),r=yr(r,t,o.children);else if(kt(e,n))if(t=bt(e,n),yt(t))r=yr(r,ut(),o.children);else{const e=(0,s.DV)(o.children,ht(t));if(e){const n=e.getChild(ft(t));r=vr(r,ut(),n)}}}}}return r}function Fr(e,t,n,r,i){if(r||i){const s=Cr(e.visibleWrites,t);if(!i&&Tr(s))return n;if(i||null!=n||wr(s,ut())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(kt(e.path,t)||kt(t,e.path))},o=Mr(e.allWrites,s,t),a=n||_n.EMPTY_NODE;return Ir(o,a)}return null}{const r=Er(e.visibleWrites,t);if(null!=r)return r;{const r=Cr(e.visibleWrites,t);if(Tr(r))return n;if(null!=n||wr(r,ut())){const e=n||_n.EMPTY_NODE;return Ir(r,e)}return null}}}function Ur(e,t,n){let r=_n.EMPTY_NODE;const i=Er(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cn,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Cr(e.visibleWrites,t);return n.forEachChild(cn,((e,t)=>{const n=Ir(Cr(i,new lt(e)),t);r=r.updateImmediateChild(e,n)})),kr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=Cr(e.visibleWrites,t);return kr(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function $r(e,t,n,r,i){(0,s.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=vt(t,n);if(wr(e.visibleWrites,o))return null;{const t=Cr(e.visibleWrites,o);return Tr(t)?i.getChild(n):Ir(t,i.getChild(n))}}function jr(e,t,n,r){const i=vt(t,n),s=Er(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const t=Cr(e.visibleWrites,i);return Ir(t,r.getNode().getImmediateChild(n))}return null}function Wr(e,t){return Er(e.visibleWrites,t)}function qr(e,t,n,r,i,s,o){let a;const c=Cr(e.visibleWrites,t),l=Er(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Ir(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function Hr(){return{visibleWrites:gr.empty(),allWrites:[],lastWriteId:-1}}function Vr(e,t,n,r){return Fr(e.writeTree,e.treePath,t,n,r)}function Br(e,t){return Ur(e.writeTree,e.treePath,t)}function zr(e,t,n,r){return $r(e.writeTree,e.treePath,t,n,r)}function Kr(e,t){return Wr(e.writeTree,vt(e.treePath,t))}function Gr(e,t,n,r,i,s){return qr(e.writeTree,e.treePath,t,n,r,i,s)}function Yr(e,t,n){return jr(e.writeTree,e.treePath,t,n)}function Jr(e,t){return Qr(vt(e.treePath,t),e.writeTree)}function Qr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Nn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,On(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Sn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,s.g5)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Nn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const ei=new Zr;class ti{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:fr(this.viewCache_),i=Gr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){return{filter:e}}function ri(e,t){(0,s.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ii(e,t,n,r,i){const o=new Xr;let a,c;if(n.type===Yn.OVERWRITE){const l=n;l.source.fromUser?a=ci(e,t,l.path,l.snap,r,i,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=ai(e,t,l.path,l.snap,r,i,c,o))}else if(n.type===Yn.MERGE){const l=n;l.source.fromUser?a=ui(e,t,l.path,l.children,r,i,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=di(e,t,l.path,l.children,r,i,c,o))}else if(n.type===Yn.ACK_USER_WRITE){const s=n;a=s.revert?mi(e,t,s.path,r,i,o):fi(e,t,s.path,s.affectedTree,r,i,o)}else{if(n.type!==Yn.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=pi(e,t,n.path,r,o)}const l=o.getChanges();return si(t,a,l),{viewCache:a,changes:l}}function si(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=dr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(In(dr(t)))}}function oi(e,t,n,r,i,o){const a=t.eventCache;if(null!=Kr(r,n))return t;{let c,l;if(yt(n))if((0,s.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=fr(t),i=n instanceof _n?n:_n.EMPTY_NODE,s=Br(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=Vr(r,fr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ht(n);if(".priority"===u){(0,s.hu)(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const o=zr(r,n,i,l);c=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=zr(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Yr(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,i,o):a.getNode()}}return ur(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function ai(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,i,ei,null)}const h=hr(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new ti(i,h,s);return oi(e,h,n,i,d,a)}function ci(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const u=new ti(i,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=ur(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=ur(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ft(n),l=a.getNode().getImmediateChild(i);let h;if(yt(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===pt(s)&&e.getChild(gt(s)).isEmpty()?e:e.updateChild(s,r):_n.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,s,u,o);c=ur(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function li(e,t){return e.eventCache.isCompleteForChild(t)}function ui(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,c)=>{const l=vt(n,r);li(t,ht(l))&&(a=ci(e,a,l,c,i,s,o))})),r.foreach(((r,c)=>{const l=vt(n,r);li(t,ht(l))||(a=ci(e,a,l,c,i,s,o))})),a}function hi(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function di(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?r:new _r(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=hi(e,c,r);l=ai(e,l,new lt(n),u,i,s,o,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=hi(e,c,r);l=ai(e,l,new lt(n),u,i,s,o,a)}})),l}function fi(e,t,n,r,i,s,o){if(null!=Kr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ai(e,t,n,c.getNode().getChild(n),i,s,a,o);if(yt(n)){let r=new _r(null);return c.getNode().forEachChild(Ht,((e,t)=>{r=r.set(new lt(e),t)})),di(e,t,n,r,i,s,a,o)}return t}{let l=new _r(null);return r.foreach(((e,t)=>{const r=vt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),di(e,t,n,l,i,s,a,o)}}function pi(e,t,n,r,i){const s=t.serverCache,o=hr(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return oi(e,o,n,r,ei,i)}function mi(e,t,n,r,i,o){let a;if(null!=Kr(r,n))return t;{const c=new ti(r,t,i),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Vr(r,fr(t));else{const e=t.serverCache.getNode();(0,s.hu)(e instanceof _n,"serverChildren would be complete if leaf node"),n=Br(r,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const i=ht(n);let s=Yr(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=l.getImmediateChild(i)),u=null!=s?e.filter.updateChild(l,i,s,ft(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,_n.EMPTY_NODE,ft(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Vr(r,fr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Kr(r,ut()),ur(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Rn(n.getIndex()),i=Dn(n);this.processor_=ni(i);const s=t.serverCache,o=t.eventCache,a=r.updateFullNode(_n.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),l=new rr(a,s.isFullyInitialized(),r.filtersNodes()),u=new rr(c,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=lr(u,l),this.eventGenerator_=new ir(this.query_)}get query(){return this.query_}}function gi(e){return e.viewCache_.serverCache.getNode()}function vi(e,t){const n=fr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function yi(e){return 0===e.eventRegistrations_.length}function bi(e,t){e.eventRegistrations_.push(t)}function wi(e,t,n){const r=[];if(n){(0,s.hu)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Ei(e,t,n,r){t.type===Yn.MERGE&&null!==t.source.queryId&&((0,s.hu)(fr(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(dr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=ii(e.processor_,i,t,n,r);return ri(e.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Ci(e,o.changes,o.viewCache.eventCache.getNode(),null)}function ki(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,((e,t)=>{r.push(Sn(e,t))}))}return n.isFullyInitialized()&&r.push(In(n.getNode())),Ci(e,r,n.getNode(),t)}function Ci(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return sr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti,Ii;class Si{constructor(){this.views=new Map}}function Oi(e){(0,s.hu)(!Ti,"__referenceConstructor has already been defined"),Ti=e}function Ni(){return(0,s.hu)(Ti,"Reference.ts has not been loaded"),Ti}function Pi(e){return 0===e.views.size}function Ri(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),Ei(o,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Ei(s,t,n,r));return i}}function xi(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Vr(n,i?r:null),s=!1;e?s=!0:r instanceof _n?(e=Br(n,r),s=!1):(e=_n.EMPTY_NODE,s=!1);const o=lr(new rr(e,s,!1),new rr(r,i,!1));return new _i(t,o)}return o}function Ai(e,t,n,r,i,s){const o=xi(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),bi(o,n),ki(o,n)}function Li(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=$i(e);if("default"===i)for(const[c,l]of e.views.entries())o=o.concat(wi(l,n,r)),yi(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const t=e.views.get(i);t&&(o=o.concat(wi(t,n,r)),yi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!$i(e)&&s.push(new(Ni())(t._repo,t._path)),{removed:s,events:o}}function Di(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Mi(e,t){let n=null;for(const r of e.views.values())n=n||vi(r,t);return n}function Fi(e,t){const n=t._queryParams;if(n.loadsAllData())return ji(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ui(e,t){return null!=Fi(e,t)}function $i(e){return null!=ji(e)}function ji(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){(0,s.hu)(!Ii,"__referenceConstructor has already been defined"),Ii=e}function qi(){return(0,s.hu)(Ii,"Reference.ts has not been loaded"),Ii}let Hi=1;class Vi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _r(null),this.pendingWriteTree_=Hr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bi(e,t,n,r,i){return Nr(e.pendingWriteTree_,t,n,r,i),i?rs(e,new tr(Jn(),t,n)):[]}function zi(e,t,n,r){Pr(e.pendingWriteTree_,t,n,r);const i=_r.fromObject(n);return rs(e,new nr(Jn(),t,i))}function Ki(e,t,n=!1){const r=Rr(e.pendingWriteTree_,t),i=xr(e.pendingWriteTree_,t);if(i){let t=new _r(null);return null!=r.snap?t=t.set(ut(),!0):U(r.children,(e=>{t=t.set(new lt(e),!0)})),rs(e,new Zn(r.path,t,n))}return[]}function Gi(e,t,n){return rs(e,new tr(Qn(),t,n))}function Yi(e,t,n){const r=_r.fromObject(n);return rs(e,new nr(Qn(),t,r))}function Ji(e,t){return rs(e,new er(Qn(),t))}function Qi(e,t,n){const r=ls(e,n);if(r){const n=us(r),i=n.path,s=n.queryId,o=bt(i,t),a=new er(Xn(s),o);return hs(e,i,a)}return[]}function Xi(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||Ui(s,t))){const a=Li(s,t,n,r);Pi(s)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;o=a.events;const l=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>$i(t)));if(l&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=ds(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=os(e,r);e.listenProvider_.startListening(fs(i),as(e,i),s.hashFn,s.onComplete)}}}if(!u&&c.length>0&&!r)if(l){const n=null;e.listenProvider_.stopListening(fs(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(cs(t));e.listenProvider_.stopListening(fs(t),n)}));ps(e,c)}return o}function Zi(e,t,n,r){const i=ls(e,r);if(null!=i){const r=us(i),s=r.path,o=r.queryId,a=bt(s,t),c=new tr(Xn(o),a,n);return hs(e,s,c)}return[]}function es(e,t,n,r){const i=ls(e,r);if(i){const r=us(i),s=r.path,o=r.queryId,a=bt(s,t),c=_r.fromObject(n),l=new nr(Xn(o),a,c);return hs(e,s,l)}return[]}function ts(e,t,n){const r=t._path;let i=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=bt(e,r);i=i||Mi(t,n),o=o||$i(t)}));let a,c=e.syncPointTree_.get(r);if(c?(o=o||$i(c),i=i||Mi(c,ut())):(c=new Si,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=_n.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=Mi(t,ut());n&&(i=i.updateImmediateChild(e,n))}))}const l=Ui(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=cs(t);(0,s.hu)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ms();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const u=Or(e.pendingWriteTree_,r);let h=Ai(c,t,n,u,i,a);if(!l&&!o){const n=Fi(c,t);h=h.concat(_s(e,t,n))}return h}function ns(e,t,n){const r=!0,i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=bt(e,t),i=Mi(n,r);if(i)return i}));return Fr(i,t,s,n,r)}function rs(e,t){return is(t,e.syncPointTree_,null,Or(e.pendingWriteTree_,ut()))}function is(e,t,n,r){if(yt(e.path))return ss(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Mi(i,ut()));let s=[];const o=ht(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Jr(r,o);s=s.concat(is(a,c,e,t))}return i&&(s=s.concat(Ri(i,e,r,n))),s}}function ss(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Mi(i,ut()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Jr(r,t),c=e.operationForChild(t);c&&(s=s.concat(ss(c,i,o,a)))})),i&&(s=s.concat(Ri(i,e,r,n))),s}function os(e,t){const n=t.query,r=as(e,n);return{hashFn:()=>{const e=gi(t)||_n.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Qi(e,n._path,r):Ji(e,n._path);{const r=q(t,n);return Xi(e,n,null,r)}}}}function as(e,t){const n=cs(t);return e.queryToTagMap.get(n)}function cs(e){return e._path.toString()+"$"+e._queryIdentifier}function ls(e,t){return e.tagToQueryMap.get(t)}function us(e){const t=e.indexOf("$");return(0,s.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function hs(e,t,n){const r=e.syncPointTree_.get(t);(0,s.hu)(r,"Missing sync point for query tag that we're tracking");const i=Or(e.pendingWriteTree_,t);return Ri(r,n,i,null)}function ds(e){return e.fold(((e,t,n)=>{if(t&&$i(t)){const e=ji(t);return[e]}{let e=[];return t&&(e=Di(t)),U(n,((t,n)=>{e=e.concat(n)})),e}}))}function fs(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(qi())(e._repo,e._path):e}function ps(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=cs(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ms(){return Hi++}function _s(e,t,n){const r=t._path,i=as(e,t),o=os(e,n),a=e.listenProvider_.startListening(fs(t),i,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,s.hu)(!$i(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!yt(e)&&t&&$i(t))return[ji(t).query];{let e=[];return t&&(e=e.concat(Di(t).map((e=>e.query)))),U(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(fs(r),as(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gs(t)}node(){return this.node_}}class vs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new vs(this.syncTree_,t)}node(){return ns(this.syncTree_,this.path_)}}const ys=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},bs=function(e,t,n){return e&&"object"===typeof e?((0,s.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?ws(e[".sv"],t,n):"object"===typeof e[".sv"]?Es(e[".sv"],t):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ws=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+e)}},Es=function(e,t,n){e.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&(0,s.hu)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,s.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},ks=function(e,t,n,r){return Ts(t,new vs(n,e),r)},Cs=function(e,t,n){return Ts(e,new gs(t),n)};function Ts(e,t,n){const r=e.getPriority().val(),i=bs(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=bs(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new rn(s,bn(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new rn(i))),r.forEachChild(cn,((e,r)=>{const i=Ts(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ss(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=(0,s.DV)(r.node.children,i)||{children:{},childCount:0};r=new Is(i,r,e),n=ft(n),i=ht(n)}return r}function Os(e){return e.node.value}function Ns(e,t){e.node.value=t,Ms(e)}function Ps(e){return e.node.childCount>0}function Rs(e){return void 0===Os(e)&&!Ps(e)}function xs(e,t){U(e.node.children,((n,r)=>{t(new Is(n,e,r))}))}function As(e,t,n,r){n&&!r&&t(e),xs(e,(e=>{As(e,t,!0,r)})),n&&r&&t(e)}function Ls(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Ds(e){return new lt(null===e.parent?e.name:Ds(e.parent)+"/"+e.name)}function Ms(e){null!==e.parent&&Fs(e.parent,e.name,e)}function Fs(e,t,n){const r=Rs(n),i=(0,s.r3)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Ms(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Ms(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=/[\[\].#$\/\u0000-\u001F\u007F]/,$s=/[\[\].#$\u0000-\u001F\u007F]/,js=10485760,Ws=function(e){return"string"===typeof e&&0!==e.length&&!Us.test(e)},qs=function(e){return"string"===typeof e&&0!==e.length&&!$s.test(e)},Hs=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),qs(e)},Vs=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!N(e)||e&&"object"===typeof e&&(0,s.r3)(e,".sv")},Bs=function(e,t,n,r){r&&void 0===t||zs((0,s.gK)(e,"value"),t,n)},zs=function(e,t,n){const r=n instanceof lt?new Ct(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ot(r));if("function"===typeof t)throw new Error(e+"contains a function "+Ot(r)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+Ot(r));if("string"===typeof t&&t.length>js/3&&(0,s.ug)(t)>js)throw new Error(e+"contains a string greater than "+js+" utf8 bytes "+Ot(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(U(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Ws(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ot(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Tt(r,t),zs(e,s,r),It(r)})),n&&i)throw new Error(e+' contains ".value" child '+Ot(r)+" in addition to actual children.")}},Ks=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=_t(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Ws(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&kt(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Gs=function(e,t,n,r){if(r&&void 0===t)return;const i=(0,s.gK)(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const o=[];U(t,((e,t)=>{const r=new lt(e);if(zs(i,t,vt(n,r)),".priority"===pt(r)&&!Vs(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(r)})),Ks(i,o)},Ys=function(e,t,n,r){if((!r||void 0!==n)&&!qs(n))throw new Error((0,s.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Js=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ys(e,t,n,r)},Qs=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Xs=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ws(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Hs(n))throw new Error((0,s.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eo(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Et(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function to(e,t,n){eo(e,n),ro(e,(e=>Et(e,t)))}function no(e,t,n){eo(e,n),ro(e,(e=>kt(e,t)||kt(t,e)))}function ro(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(io(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function io(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();b&&k("event: "+n.toString()),K(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="repo_interrupt",oo=25;class ao{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jn(),this.transactionQueueTree_=new Is,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function co(e,t,n){if(e.stats_=_e(e.repoInfo_),e.forceRestClient_||G())e.server_=new Un(e.repoInfo_,((t,n,r,i)=>{ho(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>fo(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Pz)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Ut(e.repoInfo_,t,((t,n,r,i)=>{ho(e,t,n,r,i)}),(t=>{fo(e,t)}),(t=>{po(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ge(e.repoInfo_,(()=>new Gn(e.stats_,e.server_))),e.infoData_=new $n,e.infoSyncTree_=new Vi({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Gi(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),mo(e,"connected",!1),e.serverSyncTree_=new Vi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);no(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function lo(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function uo(e){return ys({timestamp:lo(e)})}function ho(e,t,n,r,i){e.dataUpdateCount++;const o=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,s.UI)(n,(e=>bn(e)));a=es(e.serverSyncTree_,o,t,i)}else{const t=bn(n);a=Zi(e.serverSyncTree_,o,t,i)}else if(r){const t=(0,s.UI)(n,(e=>bn(e)));a=Yi(e.serverSyncTree_,o,t)}else{const t=bn(n);a=Gi(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Oo(e,o)),no(e.eventQueue_,c,a)}function fo(e,t){mo(e,"connected",t),!1===t&&yo(e)}function po(e,t){U(t,((t,n)=>{mo(e,t,n)}))}function mo(e,t,n){const r=new lt("/.info/"+t),i=bn(n);e.infoData_.updateSnapshot(r,i);const s=Gi(e.infoSyncTree_,r,i);no(e.eventQueue_,r,s)}function _o(e){return e.nextWriteId_++}function go(e,t,n,r,i){ko(e,"set",{path:t.toString(),value:n,priority:r});const s=uo(e),o=bn(n,r),a=ns(e.serverSyncTree_,t),c=Cs(o,a,s),l=_o(e),u=Bi(e.serverSyncTree_,t,c,l,!0);eo(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||S("set at "+t+" failed: "+n);const o=Ki(e.serverSyncTree_,l,!s);no(e.eventQueue_,t,o),Co(e,i,n,r)}));const h=Lo(e,t);Oo(e,h),no(e.eventQueue_,h,[])}function vo(e,t,n,r){ko(e,"update",{path:t.toString(),value:n});let i=!0;const s=uo(e),o={};if(U(n,((n,r)=>{i=!1,o[n]=ks(vt(t,n),bn(r),e.serverSyncTree_,s)})),i)k("update() called with empty data.  Don't do anything."),Co(e,r,"ok",void 0);else{const i=_o(e),s=zi(e.serverSyncTree_,t,o,i);eo(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||S("update at "+t+" failed: "+n);const a=Ki(e.serverSyncTree_,i,!o),c=a.length>0?Oo(e,t):t;no(e.eventQueue_,c,a),Co(e,r,n,s)})),U(n,(n=>{const r=Lo(e,vt(t,n));Oo(e,r)})),no(e.eventQueue_,t,[])}}function yo(e){ko(e,"onDisconnectEvents");const t=uo(e),n=jn();qn(e.onDisconnect_,ut(),((r,i)=>{const s=ks(r,i,e.serverSyncTree_,t);Wn(n,r,s)}));let r=[];qn(n,ut(),((t,n)=>{r=r.concat(Gi(e.serverSyncTree_,t,n));const i=Lo(e,t);Oo(e,i)})),e.onDisconnect_=jn(),no(e.eventQueue_,ut(),r)}function bo(e,t,n){let r;r=".info"===ht(t._path)?ts(e.infoSyncTree_,t,n):ts(e.serverSyncTree_,t,n),to(e.eventQueue_,t._path,r)}function wo(e,t,n){let r;r=".info"===ht(t._path)?Xi(e.infoSyncTree_,t,n):Xi(e.serverSyncTree_,t,n),to(e.eventQueue_,t._path,r)}function Eo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(so)}function ko(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),k(n,...t)}function Co(e,t,n,r){t&&K((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function To(e,t,n){return ns(e.serverSyncTree_,t,n)||_n.EMPTY_NODE}function Io(e,t=e.transactionQueueTree_){if(t||Ao(e,t),Os(t)){const n=Ro(e,t);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&So(e,Ds(t),n)}else Ps(t)&&xs(t,(t=>{Io(e,t)}))}function So(e,t,n){const r=n.map((e=>e.currentWriteId)),i=To(e,t,r);let o=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=bt(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,(r=>{ko(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ki(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ao(e,Ss(e.transactionQueueTree_,t)),Io(e,e.transactionQueueTree_),no(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)K(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Oo(e,t)}}),a)}function Oo(e,t){const n=Po(e,t),r=Ds(n),i=Ro(e,n);return No(e,i,r),r}function No(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const o=t[c],l=bt(n,o.path);let u,h=!1;if((0,s.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,i=i.concat(Ki(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=oo)h=!0,u="maxretry",i=i.concat(Ki(e.serverSyncTree_,o.currentWriteId,!0));else{const n=To(e,o.path,a);o.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){zs("transaction failed: Data returned ",r,o.path);let t=bn(r);const c="object"===typeof r&&null!=r&&(0,s.r3)(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=uo(e),h=Cs(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=_o(e),a.splice(a.indexOf(l),1),i=i.concat(Bi(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat(Ki(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Ki(e.serverSyncTree_,o.currentWriteId,!0))}no(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):r.push((()=>t[c].onComplete(new Error(u),!1,null)))))}Ao(e,e.transactionQueueTree_);for(let s=0;s<r.length;s++)K(r[s]);Io(e,e.transactionQueueTree_)}function Po(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Os(r))r=Ss(r,n),t=ft(t),n=ht(t);return r}function Ro(e,t){const n=[];return xo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function xo(e,t,n){const r=Os(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);xs(t,(t=>{xo(e,t,n)}))}function Ao(e,t){const n=Os(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ns(t,n.length>0?n:void 0)}xs(t,(t=>{Ao(e,t)}))}function Lo(e,t){const n=Ds(Po(e,t)),r=Ss(e.transactionQueueTree_,t);return Ls(r,(t=>{Do(e,t)})),Do(e,r),As(r,(t=>{Do(e,t)})),n}function Do(e,t){const n=Os(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Ki(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ns(t,void 0):n.length=o+1,no(e.eventQueue_,Ds(t),i);for(let e=0;e<r.length;e++)K(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Fo(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const Uo=function(e,t){const n=$o(e),r=n.namespace;"firebase.com"===n.domain&&I(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new lt(n.pathString)}},$o=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=Mo(e.substring(u,h)));const d=Fo(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.Pz)(this.snapshot.exportVal())}}class Wo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,s.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ho{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new Vo(this._repo,this._path)}get _queryIdentifier(){const e=Fn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Fn(this._queryParams)}isEqual(e){if(e=(0,s.m9)(e),!(e instanceof Ho))return!1;const t=this._repo===e._repo,n=Et(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class Vo extends Ho{constructor(e,t){super(e,t,new Ln,!1)}get parent(){const e=gt(this._path);return null===e?null:new Vo(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Bo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Ko(this.ref,e);return new Bo(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Bo(n,Ko(this.ref,t),cn))))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zo(e,t){return e=(0,s.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Ko(e._root,t):e._root}function Ko(e,t){return e=(0,s.m9)(e),null===ht(e._path)?Js("child","path",t,!1):Ys("child","path",t,!1),new Vo(e._repo,vt(e._path,t))}function Go(e,t){e=(0,s.m9)(e),Qs("push",e._path),Bs("push",t,e._path,!0);const n=lo(e._repo),r=Tn(n),i=Ko(e,r),o=Ko(e,r);let a;return a=null!=t?Yo(o,t).then((()=>o)):Promise.resolve(o),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Yo(e,t){e=(0,s.m9)(e),Qs("set",e._path),Bs("set",t,e._path,!1);const n=new s.BH;return go(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Jo(e,t){Gs("update",t,e._path,!1);const n=new s.BH;return vo(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class Qo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new jo("value",this,new Bo(e.snapshotNode,new Vo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Wo(this,e,t):null}matches(e){return e instanceof Qo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Xo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Wo(this,e,t):null}createEvent(e,t){(0,s.hu)(null!=e.childName,"Child events should have a childName.");const n=Ko(new Vo(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new jo(e.type,this,new Bo(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Xo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Zo(e,t,n,r,i){let s;if("object"===typeof r&&(s=void 0,i=r),"function"===typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{wo(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new qo(n,s||void 0),a="value"===t?new Qo(o):new Xo(t,o);return bo(e._repo,e,a),()=>wo(e._repo,e,a)}function ea(e,t,n,r){return Zo(e,"value",t,n,r)}Oi(Vo),Wi(Vo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ta="FIREBASE_DATABASE_EMULATOR_HOST",na={};let ra=!1;function ia(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||I("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Uo(s,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",VUE_APP_API_P2ENDPOINT_URL:"https://jsonplaceholder.typicode.com/",VUE_APP_API_P4ENDPOINT_URL:"https://swapi.dev/api/people/1/",VUE_APP_API_P5ENDPOINT_API_KEY:"2q93XK0bBuplr5E4ApPOCHEcn6pzNdSZ",VUE_APP_ERROR_CODE:"",VUE_APP_I18N_FALLBACK_LOCALE:"ru",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_SUPPORTED_LOCALE:"ru,en",BASE_URL:"/"}[ta]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Uo(s,i),l=c.repoInfo):o=!c.repoInfo.secure;const u=i&&o?new X(X.OWNER):new Q(e.name,e.options,t);Xs("Invalid Firebase Database URL",c),yt(c.path)||I("Database URL must point to the root of a Firebase Database (not including a child path).");const h=oa(l,e,u,new J(e.name,n));return new aa(h,e)}function sa(e,t){const n=na[t];n&&n[e.key]===e||I(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Eo(e),delete n[e.key]}function oa(e,t,n,r){let i=na[t.name];i||(i={},na[t.name]=i);let s=i[e.toURLString()];return s&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ao(e,ra,n,r),i[e.toURLString()]=s,s}class aa{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(co(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vo(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(sa(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&I("Cannot call "+e+" on a deleted database.")}}function ca(e=(0,r.Mq)(),t){return(0,r.qX)(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function la(e){u(r.Jn),(0,r.Xd)(new i.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ia(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(a,c,e),(0,r.KN)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ut.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};la()},4301:function(e,t,n){"use strict";n.d(t,{WB:function(){return C},Q_:function(){return M}});n(1703);var r=!1;function i(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}var s=n(4870),o=n(3396);
/*!
  * pinia v2.0.12
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let a;const c=e=>a=e,l=Symbol();function u(e){return e&&"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!==typeof e.toJSON}var h;(function(e){e["direct"]="direct",e["patchObject"]="patch object",e["patchFunction"]="patch function"})(h||(h={}));const d="undefined"!==typeof window,f=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof n.g&&n.g.global===n.g?n.g:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function p(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e}function m(e,t,n){const r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){b(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function _(e){const t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return t.status>=200&&t.status<=299}function g(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const v="object"===typeof navigator?navigator:{userAgent:""},y=(()=>/Macintosh/.test(v.userAgent)&&/AppleWebKit/.test(v.userAgent)&&!/Safari/.test(v.userAgent))(),b=d?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!y?w:"msSaveOrOpenBlob"in v?E:k:()=>{};function w(e,t="download",n){const r=document.createElement("a");r.download=t,r.rel="noopener","string"===typeof e?(r.href=e,r.origin!==location.origin?_(r.href)?m(e,t,n):(r.target="_blank",g(r)):g(r)):(r.href=URL.createObjectURL(e),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){g(r)}),0))}function E(e,t="download",n){if("string"===typeof e)if(_(e))m(e,t,n);else{const t=document.createElement("a");t.href=e,t.target="_blank",setTimeout((function(){g(t)}))}else navigator.msSaveOrOpenBlob(p(e,n),t)}function k(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof e)return m(e,t,n);const i="application/octet-stream"===e.type,s=/constructor/i.test(String(f.HTMLElement))||"safari"in f,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||y)&&"undefined"!==typeof FileReader){const t=new FileReader;t.onloadend=function(){let e=t.result;if("string"!==typeof e)throw r=null,new Error("Wrong reader.result type");e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{const t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout((function(){URL.revokeObjectURL(t)}),4e4)}}function C(){const e=(0,s.B)(!0),t=e.run((()=>(0,s.iH)({})));let n=[],i=[];const o=(0,s.Xl)({install(e){c(o),r||(o._a=e,e.provide(l,o),e.config.globalProperties.$pinia=o,i.forEach((e=>n.push(e))),i=[])},use(e){return this._a||r?n.push(e):i.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const T=()=>{};function I(e,t,n,r=T){e.push(t);const i=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),r())};return!n&&(0,o.FN)()&&(0,o.Ah)(i),i}function S(e,...t){e.slice().forEach((e=>{e(...t)}))}function O(e,t){for(const n in t){const r=t[n],i=e[n];u(i)&&u(r)&&!(0,s.dq)(r)&&!(0,s.PG)(r)?e[n]=O(i,r):e[n]=r}return e}const N=Symbol(),P=new WeakMap;function R(e){return r?!P.has(e):!u(e)||!e.hasOwnProperty(N)}const{assign:x}=Object;function A(e){return!(!(0,s.dq)(e)||!e.effect)}function L(e,t,n,a){const{state:l,actions:u,getters:h}=t,d=n.state.value[e];let f;function p(){d||(r?i(n.state.value,e,l?l():{}):n.state.value[e]=l?l():{});const t=(0,s.BK)(n.state.value[e]);return x(t,u,Object.keys(h||{}).reduce(((t,i)=>(t[i]=(0,s.Xl)((0,o.Fl)((()=>{c(n);const t=n._s.get(e);if(!r||t._r)return h[i].call(t,t)}))),t)),{}))}return f=D(e,p,t,n,a),f.$reset=function(){const e=l?l():{};this.$patch((t=>{x(t,e)}))},f}function D(e,t,n={},a,l){let u;const d=n.state,f=x({actions:{}},n);const p={deep:!0};let m,_;let g,v=(0,s.Xl)([]),y=(0,s.Xl)([]);const b=a.state.value[e];d||b||(r?i(a.state.value,e,{}):a.state.value[e]={});(0,s.iH)({});function w(t){let n;m=_=!1,"function"===typeof t?(t(a.state.value[e]),n={type:h.patchFunction,storeId:e,events:g}):(O(a.state.value[e],t),n={type:h.patchObject,payload:t,storeId:e,events:g}),(0,o.Y3)().then((()=>{m=!0})),_=!0,S(v,n,a.state.value[e])}const E=T;function k(){u.stop(),v=[],y=[],a._s.delete(e)}function C(t,n){return function(){c(a);const r=Array.from(arguments),i=[],s=[];function o(e){i.push(e)}function l(e){s.push(e)}let u;S(y,{args:r,name:t,store:P,after:o,onError:l});try{u=n.apply(this&&this.$id===e?this:P,r)}catch(h){throw S(s,h),h}return u instanceof Promise?u.then((e=>(S(i,e),e))).catch((e=>(S(s,e),Promise.reject(e)))):(S(i,u),u)}}const N={_p:a,$id:e,$onAction:I.bind(null,y),$patch:w,$reset:E,$subscribe(t,n={}){const r=I(v,t,n.detached,(()=>i())),i=u.run((()=>(0,o.YP)((()=>a.state.value[e]),(r=>{("sync"===n.flush?_:m)&&t({storeId:e,type:h.direct,events:g},r)}),x({},p,n))));return r},$dispose:k};r&&(N._r=!1);const P=(0,s.qj)(x({},N));a._s.set(e,P);const L=a._e.run((()=>(u=(0,s.B)(),u.run((()=>t())))));for(const o in L){const t=L[o];if((0,s.dq)(t)&&!A(t)||(0,s.PG)(t))d||(b&&R(t)&&((0,s.dq)(t)?t.value=b[o]:O(t,b[o])),r?i(a.state.value[e],o,t):a.state.value[e][o]=t);else if("function"===typeof t){const e=C(o,t);r?i(L,o,e):L[o]=e,f.actions[o]=t}else 0}return r?Object.keys(L).forEach((e=>{i(P,e,L[e])})):(x(P,L),x((0,s.IU)(P),L)),Object.defineProperty(P,"$state",{get:()=>a.state.value[e],set:e=>{w((t=>{x(t,e)}))}}),r&&(P._r=!0),a._p.forEach((e=>{x(P,u.run((()=>e({store:P,app:a._a,pinia:a,options:f}))))})),b&&d&&n.hydrate&&n.hydrate(P.$state,b),m=!0,_=!0,P}function M(e,t,n){let r,i;const s="function"===typeof t;function u(e,n){const u=(0,o.FN)();e=e||u&&(0,o.f3)(l),e&&c(e),e=a,e._s.has(r)||(s?D(r,t,i,e):L(r,i,e));const h=e._s.get(r);return h}return"string"===typeof e?(r=e,i=s?n:t):(i=e,r=e.id),u.$id=r,u}},4940:function(e,t,n){"use strict";n.d(t,{o:function(){return Rn},QT:function(){return xn}});const r="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>r?Symbol(e):e,s=(e,t,n)=>o({l:e,k:t,s:n}),o=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),a=e=>"number"===typeof e&&isFinite(e),c=e=>"[object Date]"===C(e),l=e=>"[object RegExp]"===C(e),u=e=>T(e)&&0===Object.keys(e).length;function h(e,t){"undefined"!==typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const d=Object.assign;let f;const p=()=>f||(f="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});function m(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const _=Object.prototype.hasOwnProperty;function g(e,t){return _.call(e,t)}const v=Array.isArray,y=e=>"function"===typeof e,b=e=>"string"===typeof e,w=e=>"boolean"===typeof e,E=e=>null!==e&&"object"===typeof e,k=Object.prototype.toString,C=e=>k.call(e),T=e=>"[object Object]"===C(e),I=e=>null==e?"":v(e)||T(e)&&e.toString===k?JSON.stringify(e,null,2):String(e);function S(){const e=new Map,t={events:e,on(t,n){const r=e.get(t),i=r&&r.push(n);i||e.set(t,[n])},off(t,n){const r=e.get(t);r&&r.splice(r.indexOf(n)>>>0,1)},emit(t,n){(e.get(t)||[]).slice().map((e=>e(n))),(e.get("*")||[]).slice().map((e=>e(t,n)))}};return t}const O=Object.prototype.hasOwnProperty;function N(e,t){return O.call(e,t)}const P=e=>null!==e&&"object"===typeof e,R=[];R[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},R[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},R[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},R[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},R[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},R[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},R[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const x=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function A(e){return x.test(e)}function L(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}function D(e){if(void 0===e||null===e)return"o";const t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function M(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(A(t)?L(t):"*"+t)}function F(e){const t=[];let n,r,i,s,o,a,c,l=-1,u=0,h=0;const d=[];function f(){const t=e[l+1];if(5===u&&"'"===t||6===u&&'"'===t)return l++,i="\\"+t,d[0](),!0}d[0]=()=>{void 0===r?r=i:r+=i},d[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},d[2]=()=>{d[0](),h++},d[3]=()=>{if(h>0)h--,u=4,d[0]();else{if(h=0,void 0===r)return!1;if(r=M(r),!1===r)return!1;d[1]()}};while(null!==u)if(l++,n=e[l],"\\"!==n||!f()){if(s=D(n),c=R[u],o=c[s]||c["l"]||8,8===o)return;if(u=o[0],void 0!==o[1]&&(a=d[o[1]],a&&(i=n,!1===a())))return;if(7===u)return t}}const U=new Map;function $(e,t){if(!P(e))return null;let n=U.get(t);if(n||(n=F(t),n&&U.set(t,n)),!n)return null;const r=n.length;let i=e,s=0;while(s<r){const e=i[n[s]];if(void 0===e)return null;i=e,s++}return i}function j(e){if(!P(e))return e;for(const t in e)if(N(e,t))if(t.includes(".")){const n=t.split("."),r=n.length-1;let i=e;for(let e=0;e<r;e++)n[e]in i||(i[n[e]]={}),i=i[n[e]];i[n[r]]=e[t],delete e[t],P(i[n[r]])&&j(i[n[r]])}else P(e[t])&&j(e[t]);return e}
/*!
  * @intlify/runtime v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const W=e=>e,q=e=>"",H="text",V=e=>0===e.length?"":e.join(""),B=I;function z(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function K(e){const t=a(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(a(e.named.count)||a(e.named.n))?a(e.named.count)?e.named.count:a(e.named.n)?e.named.n:t:t}function G(e,t){t.count||(t.count=e),t.n||(t.n=e)}function Y(e={}){const t=e.locale,n=K(e),r=E(e.pluralRules)&&b(t)&&y(e.pluralRules[t])?e.pluralRules[t]:z,i=E(e.pluralRules)&&b(t)&&y(e.pluralRules[t])?z:void 0,s=e=>e[r(n,e.length,i)],o=e.list||[],c=e=>o[e],l=e.named||{};a(e.pluralIndex)&&G(n,l);const u=e=>l[e];function h(t){const n=y(e.messages)?e.messages(t):!!E(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):q)}const d=t=>e.modifiers?e.modifiers[t]:W,f=T(e.processor)&&y(e.processor.normalize)?e.processor.normalize:V,p=T(e.processor)&&y(e.processor.interpolate)?e.processor.interpolate:B,m=T(e.processor)&&b(e.processor.type)?e.processor.type:H,_={["list"]:c,["named"]:u,["plural"]:s,["linked"]:(e,t)=>{const n=h(e)(_);return b(t)?d(t)(n):n},["message"]:h,["type"]:m,["interpolate"]:p,["normalize"]:f};return _}n(1703);function J(e,t,n={}){const{domain:r,messages:i,args:s}=n,o=e,a=new SyntaxError(String(o));return a.code=e,t&&(a.location=t),a.domain=r,a}function Q(e){throw e}function X(e,t,n){return{line:e,column:t,offset:n}}function Z(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const ee=" ",te="\r",ne="\n",re=String.fromCharCode(8232),ie=String.fromCharCode(8233);function se(e){const t=e;let n=0,r=1,i=1,s=0;const o=e=>t[e]===te&&t[e+1]===ne,a=e=>t[e]===ne,c=e=>t[e]===ie,l=e=>t[e]===re,u=e=>o(e)||a(e)||c(e)||l(e),h=()=>n,d=()=>r,f=()=>i,p=()=>s,m=e=>o(e)||c(e)||l(e)?ne:t[e],_=()=>m(n),g=()=>m(n+s);function v(){return s=0,u(n)&&(r++,i=0),o(n)&&n++,n++,i++,t[n]}function y(){return o(n+s)&&s++,s++,t[n+s]}function b(){n=0,r=1,i=1,s=0}function w(e=0){s=e}function E(){const e=n+s;while(e!==n)v();s=0}return{index:h,line:d,column:f,peekOffset:p,charAt:m,currentChar:_,currentPeek:g,next:v,peek:y,reset:b,resetPeek:w,skipToPeek:E}}const oe=void 0,ae="'",ce="tokenizer";function le(e,t={}){const n=!1!==t.location,r=se(e),i=()=>r.index(),s=()=>X(r.line(),r.column(),r.index()),o=s(),a=i(),c={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},l=()=>c,{onError:u}=t;function h(e,t,n,...r){const i=l();if(t.column+=n,t.offset+=n,u){const n=Z(i.startLoc,t),s=J(e,n,{domain:ce,args:r});u(s)}}function d(e,t,r){e.endLoc=s(),e.currentType=t;const i={type:t};return n&&(i.loc=Z(e.startLoc,e.endLoc)),null!=r&&(i.value=r),i}const f=e=>d(e,14);function p(e,t){return e.currentChar()===t?(e.next(),t):(h(0,s(),0,t),"")}function m(e){let t="";while(e.currentPeek()===ee||e.currentPeek()===ne)t+=e.currentPeek(),e.peek();return t}function _(e){const t=m(e);return e.skipToPeek(),t}function g(e){if(e===oe)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function v(e){if(e===oe)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}function y(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=g(e.currentPeek());return e.resetPeek(),r}function b(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r="-"===e.currentPeek()?e.peek():e.currentPeek(),i=v(r);return e.resetPeek(),i}function w(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=e.currentPeek()===ae;return e.resetPeek(),r}function E(e,t){const{currentType:n}=t;if(8!==n)return!1;m(e);const r="."===e.currentPeek();return e.resetPeek(),r}function k(e,t){const{currentType:n}=t;if(9!==n)return!1;m(e);const r=g(e.currentPeek());return e.resetPeek(),r}function C(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;m(e);const r=":"===e.currentPeek();return e.resetPeek(),r}function T(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?g(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===ee||!t)&&(t===ne?(e.peek(),r()):g(t))},i=r();return e.resetPeek(),i}function I(e){m(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function S(e,t=!0){const n=(t=!1,r="",i=!1)=>{const s=e.currentPeek();return"{"===s?"%"!==r&&t:"@"!==s&&s?"%"===s?(e.peek(),n(t,"%",!0)):"|"===s?!("%"!==r&&!i)||!(r===ee||r===ne):s===ee?(e.peek(),n(!0,ee,i)):s!==ne||(e.peek(),n(!0,ne,i)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function O(e,t){const n=e.currentChar();return n===oe?oe:t(n)?(e.next(),n):null}function N(e){const t=e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t};return O(e,t)}function P(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57};return O(e,t)}function R(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102};return O(e,t)}function x(e){let t="",n="";while(t=P(e))n+=t;return n}function A(e){let t="";while(1){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!S(e))break;t+=n,e.next()}else if(n===ee||n===ne)if(S(e))t+=n,e.next();else{if(I(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function L(e){_(e);let t="",n="";while(t=N(e))n+=t;return e.currentChar()===oe&&h(6,s(),0),n}function D(e){_(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${x(e)}`):t+=x(e),e.currentChar()===oe&&h(6,s(),0),t}function M(e){_(e),p(e,"'");let t="",n="";const r=e=>e!==ae&&e!==ne;while(t=O(e,r))n+="\\"===t?F(e):t;const i=e.currentChar();return i===ne||i===oe?(h(2,s(),0),i===ne&&(e.next(),p(e,"'")),n):(p(e,"'"),n)}function F(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return U(e,t,4);case"U":return U(e,t,6);default:return h(3,s(),0,t),""}}function U(e,t,n){p(e,t);let r="";for(let i=0;i<n;i++){const n=R(e);if(!n){h(4,s(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function $(e){_(e);let t="",n="";const r=e=>"{"!==e&&"}"!==e&&e!==ee&&e!==ne;while(t=O(e,r))n+=t;return n}function j(e){let t="",n="";while(t=N(e))n+=t;return n}function W(e){const t=(n=!1,r)=>{const i=e.currentChar();return"{"!==i&&"%"!==i&&"@"!==i&&"|"!==i&&i?i===ee?r:i===ne?(r+=i,e.next(),t(n,r)):(r+=i,e.next(),t(!0,r)):r};return t(!1,"")}function q(e){_(e);const t=p(e,"|");return _(e),t}function H(e,t){let n=null;const r=e.currentChar();switch(r){case"{":return t.braceNest>=1&&h(8,s(),0),e.next(),n=d(t,2,"{"),_(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&h(7,s(),0),e.next(),n=d(t,3,"}"),t.braceNest--,t.braceNest>0&&_(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&h(6,s(),0),n=V(e,t)||f(t),t.braceNest=0,n;default:let r=!0,i=!0,o=!0;if(I(e))return t.braceNest>0&&h(6,s(),0),n=d(t,1,q(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return h(6,s(),0),t.braceNest=0,B(e,t);if(r=y(e,t))return n=d(t,5,L(e)),_(e),n;if(i=b(e,t))return n=d(t,6,D(e)),_(e),n;if(o=w(e,t))return n=d(t,7,M(e)),_(e),n;if(!r&&!i&&!o)return n=d(t,13,$(e)),h(1,s(),0,n.value),_(e),n;break}return n}function V(e,t){const{currentType:n}=t;let r=null;const i=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||i!==ne&&i!==ee||h(9,s(),0),i){case"@":return e.next(),r=d(t,8,"@"),t.inLinked=!0,r;case".":return _(e),e.next(),d(t,9,".");case":":return _(e),e.next(),d(t,10,":");default:return I(e)?(r=d(t,1,q(e)),t.braceNest=0,t.inLinked=!1,r):E(e,t)||C(e,t)?(_(e),V(e,t)):k(e,t)?(_(e),d(t,12,j(e))):T(e,t)?(_(e),"{"===i?H(e,t)||r:d(t,11,W(e))):(8===n&&h(9,s(),0),t.braceNest=0,t.inLinked=!1,B(e,t))}}function B(e,t){let n={type:14};if(t.braceNest>0)return H(e,t)||f(t);if(t.inLinked)return V(e,t)||f(t);const r=e.currentChar();switch(r){case"{":return H(e,t)||f(t);case"}":return h(5,s(),0),e.next(),d(t,3,"}");case"@":return V(e,t)||f(t);default:if(I(e))return n=d(t,1,q(e)),t.braceNest=0,t.inLinked=!1,n;if(S(e))return d(t,0,A(e));if("%"===r)return e.next(),d(t,4,"%");break}return n}function z(){const{currentType:e,offset:t,startLoc:n,endLoc:o}=c;return c.lastType=e,c.lastOffset=t,c.lastStartLoc=n,c.lastEndLoc=o,c.offset=i(),c.startLoc=s(),r.currentChar()===oe?d(c,14):B(r,c)}return{nextToken:z,currentOffset:i,currentPosition:s,context:l}}const ue="parser",he=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function de(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function fe(e={}){const t=!1!==e.location,{onError:n}=e;function r(e,t,r,i,...s){const o=e.currentPosition();if(o.offset+=i,o.column+=i,n){const e=Z(r,o),i=J(t,e,{domain:ue,args:s});n(i)}}function i(e,n,r){const i={type:e,start:n,end:n};return t&&(i.loc={start:r,end:r}),i}function s(e,n,r,i){e.end=n,i&&(e.type=i),t&&e.loc&&(e.loc.end=r)}function o(e,t){const n=e.context(),r=i(3,n.offset,n.startLoc);return r.value=t,s(r,e.currentOffset(),e.currentPosition()),r}function a(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=i(5,r,o);return a.index=parseInt(t,10),e.nextToken(),s(a,e.currentOffset(),e.currentPosition()),a}function c(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=i(4,r,o);return a.key=t,e.nextToken(),s(a,e.currentOffset(),e.currentPosition()),a}function l(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=i(9,r,o);return a.value=t.replace(he,de),e.nextToken(),s(a,e.currentOffset(),e.currentPosition()),a}function u(e){const t=e.nextToken(),n=e.context(),{lastOffset:o,lastStartLoc:a}=n,c=i(8,o,a);return 12!==t.type?(r(e,11,n.lastStartLoc,0),c.value="",s(c,o,a),{nextConsumeToken:t,node:c}):(null==t.value&&r(e,13,n.lastStartLoc,0,pe(t)),c.value=t.value||"",s(c,e.currentOffset(),e.currentPosition()),{node:c})}function h(e,t){const n=e.context(),r=i(7,n.offset,n.startLoc);return r.value=t,s(r,e.currentOffset(),e.currentPosition()),r}function f(e){const t=e.context(),n=i(6,t.offset,t.startLoc);let o=e.nextToken();if(9===o.type){const t=u(e);n.modifier=t.node,o=t.nextConsumeToken||e.nextToken()}switch(10!==o.type&&r(e,13,t.lastStartLoc,0,pe(o)),o=e.nextToken(),2===o.type&&(o=e.nextToken()),o.type){case 11:null==o.value&&r(e,13,t.lastStartLoc,0,pe(o)),n.key=h(e,o.value||"");break;case 5:null==o.value&&r(e,13,t.lastStartLoc,0,pe(o)),n.key=c(e,o.value||"");break;case 6:null==o.value&&r(e,13,t.lastStartLoc,0,pe(o)),n.key=a(e,o.value||"");break;case 7:null==o.value&&r(e,13,t.lastStartLoc,0,pe(o)),n.key=l(e,o.value||"");break;default:r(e,12,t.lastStartLoc,0);const u=e.context(),d=i(7,u.offset,u.startLoc);return d.value="",s(d,u.offset,u.startLoc),n.key=d,s(n,u.offset,u.startLoc),{nextConsumeToken:o,node:n}}return s(n,e.currentOffset(),e.currentPosition()),{node:n}}function p(e){const t=e.context(),n=1===t.currentType?e.currentOffset():t.offset,u=1===t.currentType?t.endLoc:t.startLoc,h=i(2,n,u);h.items=[];let d=null;do{const n=d||e.nextToken();switch(d=null,n.type){case 0:null==n.value&&r(e,13,t.lastStartLoc,0,pe(n)),h.items.push(o(e,n.value||""));break;case 6:null==n.value&&r(e,13,t.lastStartLoc,0,pe(n)),h.items.push(a(e,n.value||""));break;case 5:null==n.value&&r(e,13,t.lastStartLoc,0,pe(n)),h.items.push(c(e,n.value||""));break;case 7:null==n.value&&r(e,13,t.lastStartLoc,0,pe(n)),h.items.push(l(e,n.value||""));break;case 8:const i=f(e);h.items.push(i.node),d=i.nextConsumeToken||null;break}}while(14!==t.currentType&&1!==t.currentType);const p=1===t.currentType?t.lastOffset:e.currentOffset(),m=1===t.currentType?t.lastEndLoc:e.currentPosition();return s(h,p,m),h}function m(e,t,n,o){const a=e.context();let c=0===o.items.length;const l=i(1,t,n);l.cases=[],l.cases.push(o);do{const t=p(e);c||(c=0===t.items.length),l.cases.push(t)}while(14!==a.currentType);return c&&r(e,10,n,0),s(l,e.currentOffset(),e.currentPosition()),l}function _(e){const t=e.context(),{offset:n,startLoc:r}=t,i=p(e);return 14===t.currentType?i:m(e,n,r,i)}function g(n){const o=le(n,d({},e)),a=o.context(),c=i(0,a.offset,a.startLoc);return t&&c.loc&&(c.loc.source=n),c.body=_(o),14!==a.currentType&&r(o,13,a.lastStartLoc,0,n[a.offset]||""),s(c,o.currentOffset(),o.currentPosition()),c}return{parse:g}}function pe(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function me(e,t={}){const n={ast:e,helpers:new Set},r=()=>n,i=e=>(n.helpers.add(e),e);return{context:r,helper:i}}function _e(e,t){for(let n=0;n<e.length;n++)ge(e[n],t)}function ge(e,t){switch(e.type){case 1:_e(e.cases,t),t.helper("plural");break;case 2:_e(e.items,t);break;case 6:const n=e;ge(n.key,t),t.helper("linked");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function ve(e,t={}){const n=me(e);n.helper("normalize"),e.body&&ge(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function ye(e,t){const{sourceMap:n,filename:r,breakLineCode:i,needIndent:s}=t,o={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0},a=()=>o;function c(e,t){o.code+=e}function l(e,t=!0){const n=t?i:"";c(s?n+"  ".repeat(e):n)}function u(e=!0){const t=++o.indentLevel;e&&l(t)}function h(e=!0){const t=--o.indentLevel;e&&l(t)}function d(){l(o.indentLevel)}const f=e=>`_${e}`,p=()=>o.needIndent;return{context:a,push:c,indent:u,deindent:h,newline:d,helper:f,needIndent:p}}function be(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),Ce(e,t.key),t.modifier&&(e.push(", "),Ce(e,t.modifier)),e.push(")")}function we(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const i=t.items.length;for(let s=0;s<i;s++){if(Ce(e,t.items[s]),s===i-1)break;e.push(", ")}e.deindent(r()),e.push("])")}function Ee(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const i=t.cases.length;for(let n=0;n<i;n++){if(Ce(e,t.cases[n]),n===i-1)break;e.push(", ")}e.deindent(r()),e.push("])")}}function ke(e,t){t.body?Ce(e,t.body):e.push("null")}function Ce(e,t){const{helper:n}=e;switch(t.type){case 0:ke(e,t);break;case 1:Ee(e,t);break;case 2:we(e,t);break;case 6:be(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:0}}const Te=(e,t={})=>{const n=b(t.mode)?t.mode:"normal",r=b(t.filename)?t.filename:"message.intl",i=!!t.sourceMap,s=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",o=t.needIndent?t.needIndent:"arrow"!==n,a=e.helpers||[],c=ye(e,{mode:n,filename:r,sourceMap:i,breakLineCode:s,needIndent:o});c.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),c.indent(o),a.length>0&&(c.push(`const { ${a.map((e=>`${e}: _${e}`)).join(", ")} } = ctx`),c.newline()),c.push("return "),Ce(c,e),c.deindent(o),c.push("}");const{code:l,map:u}=c.context();return{ast:e,code:l,map:u?u.toJSON():void 0}};function Ie(e,t={}){const n=d({},t),r=fe(n),i=r.parse(e);return ve(i,n),Te(i,n)}
/*!
  * @intlify/devtools-if v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const Se={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};
/*!
  * @intlify/core-base v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
let Oe=null;function Ne(e){Oe=e}function Pe(e,t,n){Oe&&Oe.emit(Se.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const Re=xe(Se.FunctionTranslate);function xe(e){return t=>Oe&&Oe.emit(e,t)}const Ae="9.1.9",Le=-1,De="";function Me(){return{upper:e=>b(e)?e.toUpperCase():e,lower:e=>b(e)?e.toLowerCase():e,capitalize:e=>b(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}}let Fe;function Ue(e){Fe=e}let $e=null;const je=e=>{$e=e},We=()=>$e;let qe=0;function He(e={}){const t=b(e.version)?e.version:Ae,n=b(e.locale)?e.locale:"en-US",r=v(e.fallbackLocale)||T(e.fallbackLocale)||b(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,i=T(e.messages)?e.messages:{[n]:{}},s=T(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=T(e.numberFormats)?e.numberFormats:{[n]:{}},a=d({},e.modifiers||{},Me()),c=e.pluralRules||{},u=y(e.missing)?e.missing:null,f=!w(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,p=!w(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,m=!!e.fallbackFormat,_=!!e.unresolving,g=y(e.postTranslation)?e.postTranslation:null,k=T(e.processor)?e.processor:null,C=!w(e.warnHtmlMessage)||e.warnHtmlMessage,I=!!e.escapeParameter,S=y(e.messageCompiler)?e.messageCompiler:Fe,O=y(e.onWarn)?e.onWarn:h,N=e,P=E(N.__datetimeFormatters)?N.__datetimeFormatters:new Map,R=E(N.__numberFormatters)?N.__numberFormatters:new Map,x=E(N.__meta)?N.__meta:{};qe++;const A={version:t,cid:qe,locale:n,fallbackLocale:r,messages:i,datetimeFormats:s,numberFormats:o,modifiers:a,pluralRules:c,missing:u,missingWarn:f,fallbackWarn:p,fallbackFormat:m,unresolving:_,postTranslation:g,processor:k,warnHtmlMessage:C,escapeParameter:I,messageCompiler:S,onWarn:O,__datetimeFormatters:P,__numberFormatters:R,__meta:x};return __INTLIFY_PROD_DEVTOOLS__&&Pe(A,t,x),A}function Ve(e,t,n,r,i){const{missing:s,onWarn:o}=e;if(null!==s){const r=s(e,n,t,i);return b(r)?r:t}return t}function Be(e,t,n){const r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let i=r.__localeChainCache.get(n);if(!i){i=[];let e=[n];while(v(e))e=ze(i,e,t);const s=v(t)?t:T(t)?t["default"]?t["default"]:null:t;e=b(s)?[s]:s,v(e)&&ze(i,e,!1),r.__localeChainCache.set(n,i)}return i}function ze(e,t,n){let r=!0;for(let i=0;i<t.length&&w(r);i++){const s=t[i];b(s)&&(r=Ke(e,t[i],n))}return r}function Ke(e,t,n){let r;const i=t.split("-");do{const t=i.join("-");r=Ge(e,t,n),i.splice(-1,1)}while(i.length&&!0===r);return r}function Ge(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const i=t.replace(/!/g,"");e.push(i),(v(n)||T(n))&&n[i]&&(r=n[i])}return r}function Ye(e,t,n){const r=e;r.__localeChainCache=new Map,Be(e,n,t)}const Je=e=>e;let Qe=Object.create(null);function Xe(e,t={}){{const n=t.onCacheKey||Je,r=n(e),i=Qe[r];if(i)return i;let s=!1;const o=t.onError||Q;t.onError=e=>{s=!0,o(e)};const{code:a}=Ie(e,t),c=new Function(`return ${a}`)();return s?c:Qe[r]=c}}function Ze(e){return J(e,null,void 0)}const et=()=>"",tt=e=>y(e);function nt(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:i,fallbackLocale:s,messages:o}=e,[a,c]=at(...t),l=w(c.missingWarn)?c.missingWarn:e.missingWarn,u=w(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,h=w(c.escapeParameter)?c.escapeParameter:e.escapeParameter,f=!!c.resolvedMessage,p=b(c.default)||w(c.default)?w(c.default)?a:c.default:n?a:"",m=n||""!==p,_=b(c.locale)?c.locale:e.locale;h&&rt(c);let[g,v,y]=f?[a,_,o[_]||{}]:it(e,a,_,s,u,l),E=a;if(f||b(g)||tt(g)||m&&(g=p,E=g),!f&&(!b(g)&&!tt(g)||!b(v)))return i?Le:a;let k=!1;const C=()=>{k=!0},T=tt(g)?g:st(e,a,v,g,E,C);if(k)return g;const I=lt(e,v,y,c),S=Y(I),O=ot(e,T,S),N=r?r(O):O;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:b(a)?a:tt(g)?g.key:"",locale:v||(tt(g)?g.locale:""),format:b(g)?g:tt(g)?g.source:"",message:N};t.meta=d({},e.__meta,We()||{}),Re(t)}return N}function rt(e){v(e.list)?e.list=e.list.map((e=>b(e)?m(e):e)):E(e.named)&&Object.keys(e.named).forEach((t=>{b(e.named[t])&&(e.named[t]=m(e.named[t]))}))}function it(e,t,n,r,i,s){const{messages:o,onWarn:a}=e,c=Be(e,r,n);let l,u={},h=null,d=n,f=null;const p="translate";for(let m=0;m<c.length;m++){l=f=c[m],u=o[l]||{};if(null===(h=$(u,t))&&(h=u[t]),b(h)||y(h))break;const n=Ve(e,t,l,s,p);n!==t&&(h=n),d=f}return[h,l,u]}function st(e,t,n,r,i,s){const{messageCompiler:o,warnHtmlMessage:a}=e;if(tt(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}const c=o(r,ct(e,n,i,r,a,s));return c.locale=n,c.key=t,c.source=r,c}function ot(e,t,n){const r=t(n);return r}function at(...e){const[t,n,r]=e,i={};if(!b(t)&&!a(t)&&!tt(t))throw Ze(14);const s=a(t)?String(t):(tt(t),t);return a(n)?i.plural=n:b(n)?i.default=n:T(n)&&!u(n)?i.named=n:v(n)&&(i.list=n),a(r)?i.plural=r:b(r)?i.default=r:T(r)&&d(i,r),[s,i]}function ct(e,t,n,r,i,o){return{warnHtmlMessage:i,onError:e=>{throw o&&o(e),e},onCacheKey:e=>s(t,n,e)}}function lt(e,t,n,r){const{modifiers:i,pluralRules:s}=e,o=r=>{const i=$(n,r);if(b(i)){let n=!1;const s=()=>{n=!0},o=st(e,r,t,i,r,s);return n?et:o}return tt(i)?i:et},c={locale:t,modifiers:i,pluralRules:s,messages:o};return e.processor&&(c.processor=e.processor),r.list&&(c.list=r.list),r.named&&(c.named=r.named),a(r.plural)&&(c.pluralIndex=r.plural),c}const ut="undefined"!==typeof Intl;ut&&Intl.DateTimeFormat,ut&&Intl.NumberFormat;function ht(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:i,onWarn:s}=e,{__datetimeFormatters:o}=e;const[a,c,l,h]=dt(...t),f=w(l.missingWarn)?l.missingWarn:e.missingWarn,p=(w(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,!!l.part),m=b(l.locale)?l.locale:e.locale,_=Be(e,i,m);if(!b(a)||""===a)return new Intl.DateTimeFormat(m).format(c);let g,v={},y=null,E=m,k=null;const C="datetime format";for(let u=0;u<_.length;u++){if(g=k=_[u],v=n[g]||{},y=v[a],T(y))break;Ve(e,a,g,f,C),E=k}if(!T(y)||!b(g))return r?Le:a;let I=`${g}__${a}`;u(h)||(I=`${I}__${JSON.stringify(h)}`);let S=o.get(I);return S||(S=new Intl.DateTimeFormat(g,d({},y,h)),o.set(I,S)),p?S.formatToParts(c):S.format(c)}function dt(...e){const[t,n,r,i]=e;let s,o={},l={};if(b(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw Ze(16);s=new Date(t);try{s.toISOString()}catch(u){throw Ze(16)}}else if(c(t)){if(isNaN(t.getTime()))throw Ze(15);s=t}else{if(!a(t))throw Ze(14);s=t}return b(n)?o.key=n:T(n)&&(o=n),b(r)?o.locale=r:T(r)&&(l=r),T(i)&&(l=i),[o.key||"",s,o,l]}function ft(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function pt(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:i,onWarn:s}=e,{__numberFormatters:o}=e;const[a,c,l,h]=mt(...t),f=w(l.missingWarn)?l.missingWarn:e.missingWarn,p=(w(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,!!l.part),m=b(l.locale)?l.locale:e.locale,_=Be(e,i,m);if(!b(a)||""===a)return new Intl.NumberFormat(m).format(c);let g,v={},y=null,E=m,k=null;const C="number format";for(let u=0;u<_.length;u++){if(g=k=_[u],v=n[g]||{},y=v[a],T(y))break;Ve(e,a,g,f,C),E=k}if(!T(y)||!b(g))return r?Le:a;let I=`${g}__${a}`;u(h)||(I=`${I}__${JSON.stringify(h)}`);let S=o.get(I);return S||(S=new Intl.NumberFormat(g,d({},y,h)),o.set(I,S)),p?S.formatToParts(c):S.format(c)}function mt(...e){const[t,n,r,i]=e;let s={},o={};if(!a(t))throw Ze(14);const c=t;return b(n)?s.key=n:T(n)&&(s=n),b(r)?s.locale=r:T(r)&&(o=r),T(i)&&(o=i),[s.key||"",c,s,o]}function _t(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(p().__INTLIFY_PROD_DEVTOOLS__=!1);var gt=n(3396),vt=n(4870);function yt(){return bt().__VUE_DEVTOOLS_GLOBAL_HOOK__}function bt(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const wt="function"===typeof Proxy,Et="devtools-plugin:setup",kt="plugin:settings:set";let Ct,Tt;function It(){var e;return void 0!==Ct||("undefined"!==typeof window&&window.performance?(Ct=!0,Tt=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(Ct=!0,Tt=n.g.perf_hooks.performance):Ct=!1),Ct}function St(){return It()?Tt.now():Date.now()}class Ot{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e},now(){return St()}},t&&t.on(kt,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function Nt(e,t){const n=e,r=bt(),i=yt(),s=wt&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&s){const e=s?new Ot(n,i):null,o=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(Et,e,t)}
/*!
  * @intlify/vue-devtools v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const Pt={["vue-devtools-plugin-vue-i18n"]:"Vue I18n devtools",["vue-i18n-resource-inspector"]:"I18n Resources",["vue-i18n-timeline"]:"Vue I18n"},Rt={["vue-i18n-resource-inspector"]:"Search for scopes ..."},xt={["vue-i18n-timeline"]:16764185},At="9.1.9";function Lt(){let e=!1;"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(e=!0,p().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(e=!0,p().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __VUE_I18N_PROD_DEVTOOLS__&&(e=!0,p().__VUE_I18N_PROD_DEVTOOLS__=!1),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(p().__INTLIFY_PROD_DEVTOOLS__=!1)}function Dt(e,...t){return J(e,null,void 0)}const Mt="__INTLIFY_META__",Ft=i("__transrateVNode"),Ut=i("__datetimeParts"),$t=i("__numberParts"),jt=i("__enableEmitter"),Wt=i("__disableEmitter"),qt=i("__setPluralRules");i("__intlifyMeta");const Ht=i("__injectWithOption");let Vt=0;function Bt(e){return(t,n,r,i)=>e(n,r,(0,gt.FN)()||void 0,i)}function zt(e,t){const{messages:n,__i18n:r}=t,i=T(n)?n:v(r)?{}:{[e]:{}};if(v(r)&&r.forEach((({locale:e,resource:t})=>{e?(i[e]=i[e]||{},Gt(t,i[e])):Gt(t,i)})),t.flatJson)for(const s in i)g(i,s)&&j(i[s]);return i}const Kt=e=>!E(e)||v(e);function Gt(e,t){if(Kt(e)||Kt(t))throw Dt(20);for(const n in e)g(e,n)&&(Kt(e[n])||Kt(t[n])?t[n]=e[n]:Gt(e[n],t[n]))}const Yt=()=>{const e=(0,gt.FN)();return e&&e.type[Mt]?{[Mt]:e.type[Mt]}:null};function Jt(e={}){const{__root:t}=e,n=void 0===t;let r=!w(e.inheritLocale)||e.inheritLocale;const i=(0,vt.iH)(t&&r?t.locale.value:b(e.locale)?e.locale:"en-US"),s=(0,vt.iH)(t&&r?t.fallbackLocale.value:b(e.fallbackLocale)||v(e.fallbackLocale)||T(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:i.value),o=(0,vt.iH)(zt(i.value,e)),c=(0,vt.iH)(T(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),u=(0,vt.iH)(T(e.numberFormats)?e.numberFormats:{[i.value]:{}});let h=t?t.missingWarn:!w(e.missingWarn)&&!l(e.missingWarn)||e.missingWarn,f=t?t.fallbackWarn:!w(e.fallbackWarn)&&!l(e.fallbackWarn)||e.fallbackWarn,p=t?t.fallbackRoot:!w(e.fallbackRoot)||e.fallbackRoot,m=!!e.fallbackFormat,_=y(e.missing)?e.missing:null,g=y(e.missing)?Bt(e.missing):null,k=y(e.postTranslation)?e.postTranslation:null,C=!w(e.warnHtmlMessage)||e.warnHtmlMessage,I=!!e.escapeParameter;const S=t?t.modifiers:T(e.modifiers)?e.modifiers:{};let O,N=e.pluralRules||t&&t.pluralRules;function P(){return He({version:At,locale:i.value,fallbackLocale:s.value,messages:o.value,datetimeFormats:c.value,numberFormats:u.value,modifiers:S,pluralRules:N,missing:null===g?void 0:g,missingWarn:h,fallbackWarn:f,fallbackFormat:m,unresolving:!0,postTranslation:null===k?void 0:k,warnHtmlMessage:C,escapeParameter:I,__datetimeFormatters:T(O)?O.__datetimeFormatters:void 0,__numberFormatters:T(O)?O.__numberFormatters:void 0,__v_emitter:T(O)?O.__v_emitter:void 0,__meta:{framework:"vue"}})}function R(){return[i.value,s.value,o.value,c.value,u.value]}O=P(),Ye(O,i.value,s.value);const x=(0,gt.Fl)({get:()=>i.value,set:e=>{i.value=e,O.locale=i.value}}),A=(0,gt.Fl)({get:()=>s.value,set:e=>{s.value=e,O.fallbackLocale=s.value,Ye(O,i.value,e)}}),L=(0,gt.Fl)((()=>o.value)),D=(0,gt.Fl)((()=>c.value)),M=(0,gt.Fl)((()=>u.value));function F(){return y(k)?k:null}function U(e){k=e,O.postTranslation=e}function j(){return _}function W(e){null!==e&&(g=Bt(e)),_=e,O.missing=g}function q(e,n,r,i,s,o){let c;if(R(),__INTLIFY_PROD_DEVTOOLS__)try{je(Yt()),c=e(O)}finally{je(null)}else c=e(O);if(a(c)&&c===Le){const[e,r]=n();return t&&p?i(t):s(e)}if(o(c))return c;throw Dt(14)}function H(...e){return q((t=>nt(t,...e)),(()=>at(...e)),"translate",(t=>t.t(...e)),(e=>e),(e=>b(e)))}function V(...e){const[t,n,r]=e;if(r&&!E(r))throw Dt(15);return H(t,n,d({resolvedMessage:!0},r||{}))}function B(...e){return q((t=>ht(t,...e)),(()=>dt(...e)),"datetime format",(t=>t.d(...e)),(()=>De),(e=>b(e)))}function z(...e){return q((t=>pt(t,...e)),(()=>mt(...e)),"number format",(t=>t.n(...e)),(()=>De),(e=>b(e)))}function K(e){return e.map((e=>b(e)?(0,gt.Wm)(gt.xv,null,e,0):e))}const G=e=>e,Y={normalize:K,interpolate:G,type:"vnode"};function J(...e){return q((t=>{let n;const r=t;try{r.processor=Y,n=nt(r,...e)}finally{r.processor=null}return n}),(()=>at(...e)),"translate",(t=>t[Ft](...e)),(e=>[(0,gt.Wm)(gt.xv,null,e,0)]),(e=>v(e)))}function Q(...e){return q((t=>pt(t,...e)),(()=>mt(...e)),"number format",(t=>t[$t](...e)),(()=>[]),(e=>b(e)||v(e)))}function X(...e){return q((t=>ht(t,...e)),(()=>dt(...e)),"datetime format",(t=>t[Ut](...e)),(()=>[]),(e=>b(e)||v(e)))}function Z(e){N=e,O.pluralRules=N}function ee(e,t){const n=b(t)?t:i.value,r=re(n);return null!==$(r,e)}function te(e){let t=null;const n=Be(O,s.value,i.value);for(let r=0;r<n.length;r++){const i=o.value[n[r]]||{},s=$(i,e);if(null!=s){t=s;break}}return t}function ne(e){const n=te(e);return null!=n?n:t&&t.tm(e)||{}}function re(e){return o.value[e]||{}}function ie(e,t){o.value[e]=t,O.messages=o.value}function se(e,t){o.value[e]=o.value[e]||{},Gt(t,o.value[e]),O.messages=o.value}function oe(e){return c.value[e]||{}}function ae(e,t){c.value[e]=t,O.datetimeFormats=c.value,ft(O,e,t)}function ce(e,t){c.value[e]=d(c.value[e]||{},t),O.datetimeFormats=c.value,ft(O,e,t)}function le(e){return u.value[e]||{}}function ue(e,t){u.value[e]=t,O.numberFormats=u.value,_t(O,e,t)}function he(e,t){u.value[e]=d(u.value[e]||{},t),O.numberFormats=u.value,_t(O,e,t)}Vt++,t&&((0,gt.YP)(t.locale,(e=>{r&&(i.value=e,O.locale=e,Ye(O,i.value,s.value))})),(0,gt.YP)(t.fallbackLocale,(e=>{r&&(s.value=e,O.fallbackLocale=e,Ye(O,i.value,s.value))})));const de={id:Vt,locale:x,fallbackLocale:A,get inheritLocale(){return r},set inheritLocale(e){r=e,e&&t&&(i.value=t.locale.value,s.value=t.fallbackLocale.value,Ye(O,i.value,s.value))},get availableLocales(){return Object.keys(o.value).sort()},messages:L,datetimeFormats:D,numberFormats:M,get modifiers(){return S},get pluralRules(){return N||{}},get isGlobal(){return n},get missingWarn(){return h},set missingWarn(e){h=e,O.missingWarn=h},get fallbackWarn(){return f},set fallbackWarn(e){f=e,O.fallbackWarn=f},get fallbackRoot(){return p},set fallbackRoot(e){p=e},get fallbackFormat(){return m},set fallbackFormat(e){m=e,O.fallbackFormat=m},get warnHtmlMessage(){return C},set warnHtmlMessage(e){C=e,O.warnHtmlMessage=e},get escapeParameter(){return I},set escapeParameter(e){I=e,O.escapeParameter=e},t:H,rt:V,d:B,n:z,te:ee,tm:ne,getLocaleMessage:re,setLocaleMessage:ie,mergeLocaleMessage:se,getDateTimeFormat:oe,setDateTimeFormat:ae,mergeDateTimeFormat:ce,getNumberFormat:le,setNumberFormat:ue,mergeNumberFormat:he,getPostTranslationHandler:F,setPostTranslationHandler:U,getMissingHandler:j,setMissingHandler:W,[Ft]:J,[$t]:Q,[Ut]:X,[qt]:Z,[Ht]:e.__injectWithOption};return de}function Qt(e){const t=b(e.locale)?e.locale:"en-US",n=b(e.fallbackLocale)||v(e.fallbackLocale)||T(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:t,r=y(e.missing)?e.missing:void 0,i=!w(e.silentTranslationWarn)&&!l(e.silentTranslationWarn)||!e.silentTranslationWarn,s=!w(e.silentFallbackWarn)&&!l(e.silentFallbackWarn)||!e.silentFallbackWarn,o=!w(e.fallbackRoot)||e.fallbackRoot,a=!!e.formatFallbackMessages,c=T(e.modifiers)?e.modifiers:{},u=e.pluralizationRules,h=y(e.postTranslation)?e.postTranslation:void 0,f=!b(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,p=!!e.escapeParameterHtml,m=!w(e.sync)||e.sync;let _=e.messages;if(T(e.sharedMessages)){const t=e.sharedMessages,n=Object.keys(t);_=n.reduce(((e,n)=>{const r=e[n]||(e[n]={});return d(r,t[n]),e}),_||{})}const{__i18n:g,__root:E,__injectWithOption:k}=e,C=e.datetimeFormats,I=e.numberFormats,S=e.flatJson;return{locale:t,fallbackLocale:n,messages:_,flatJson:S,datetimeFormats:C,numberFormats:I,missing:r,missingWarn:i,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:c,pluralRules:u,postTranslation:h,warnHtmlMessage:f,escapeParameter:p,inheritLocale:m,__i18n:g,__root:E,__injectWithOption:k}}function Xt(e={}){const t=Jt(Qt(e)),n={id:t.id,get locale(){return t.locale.value},set locale(e){t.locale.value=e},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(e){t.fallbackLocale.value=e},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(e){},get missing(){return t.getMissingHandler()},set missing(e){t.setMissingHandler(e)},get silentTranslationWarn(){return w(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(e){t.missingWarn=w(e)?!e:e},get silentFallbackWarn(){return w(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(e){t.fallbackWarn=w(e)?!e:e},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(e){t.fallbackFormat=e},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(e){t.setPostTranslationHandler(e)},get sync(){return t.inheritLocale},set sync(e){t.inheritLocale=e},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){t.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(e){t.escapeParameter=e},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...e){const[n,r,i]=e,s={};let o=null,a=null;if(!b(n))throw Dt(15);const c=n;return b(r)?s.locale=r:v(r)?o=r:T(r)&&(a=r),v(i)?o=i:T(i)&&(a=i),t.t(c,o||a||{},s)},rt(...e){return t.rt(...e)},tc(...e){const[n,r,i]=e,s={plural:1};let o=null,c=null;if(!b(n))throw Dt(15);const l=n;return b(r)?s.locale=r:a(r)?s.plural=r:v(r)?o=r:T(r)&&(c=r),b(i)?s.locale=i:v(i)?o=i:T(i)&&(c=i),t.t(l,o||c||{},s)},te(e,n){return t.te(e,n)},tm(e){return t.tm(e)},getLocaleMessage(e){return t.getLocaleMessage(e)},setLocaleMessage(e,n){t.setLocaleMessage(e,n)},mergeLocaleMessage(e,n){t.mergeLocaleMessage(e,n)},d(...e){return t.d(...e)},getDateTimeFormat(e){return t.getDateTimeFormat(e)},setDateTimeFormat(e,n){t.setDateTimeFormat(e,n)},mergeDateTimeFormat(e,n){t.mergeDateTimeFormat(e,n)},n(...e){return t.n(...e)},getNumberFormat(e){return t.getNumberFormat(e)},setNumberFormat(e,n){t.setNumberFormat(e,n)},mergeNumberFormat(e,n){t.mergeNumberFormat(e,n)},getChoiceIndex(e,t){return-1},__onComponentInstanceCreated(t){const{componentInstanceCreatedListener:r}=e;r&&r(t,n)}};return n}const Zt={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}},en={name:"i18n-t",props:d({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>a(e)||!isNaN(e)}},Zt),setup(e,t){const{slots:n,attrs:r}=t,i=e.i18n||xn({useScope:e.scope,__useComponent:!0}),s=Object.keys(n).filter((e=>"_"!==e));return()=>{const n={};e.locale&&(n.locale=e.locale),void 0!==e.plural&&(n.plural=b(e.plural)?+e.plural:e.plural);const o=tn(t,s),a=i[Ft](e.keypath,o,n),c=d({},r);return b(e.tag)||E(e.tag)?(0,gt.h)(e.tag,c,a):(0,gt.h)(gt.HY,c,a)}}};function tn({slots:e},t){return 1===t.length&&"default"===t[0]?e.default?e.default():[]:t.reduce(((t,n)=>{const r=e[n];return r&&(t[n]=r()),t}),{})}function nn(e,t,n,r){const{slots:i,attrs:s}=t;return()=>{const t={part:!0};let o={};e.locale&&(t.locale=e.locale),b(e.format)?t.key=e.format:E(e.format)&&(b(e.format.key)&&(t.key=e.format.key),o=Object.keys(e.format).reduce(((t,r)=>n.includes(r)?d({},t,{[r]:e.format[r]}):t),{}));const a=r(e.value,t,o);let c=[t.key];v(a)?c=a.map(((e,t)=>{const n=i[e.type];return n?n({[e.type]:e.value,index:t,parts:a}):[e.value]})):b(a)&&(c=[a]);const l=d({},s);return b(e.tag)||E(e.tag)?(0,gt.h)(e.tag,l,c):(0,gt.h)(gt.HY,l,c)}}const rn=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],sn={name:"i18n-n",props:d({value:{type:Number,required:!0},format:{type:[String,Object]}},Zt),setup(e,t){const n=e.i18n||xn({useScope:"parent",__useComponent:!0});return nn(e,t,rn,((...e)=>n[$t](...e)))}},on=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],an={name:"i18n-d",props:d({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Zt),setup(e,t){const n=e.i18n||xn({useScope:"parent",__useComponent:!0});return nn(e,t,on,((...e)=>n[Ut](...e)))}};function cn(e,t){const n=e;if("composition"===e.mode)return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return null!=r?r.__composer:e.global.__composer}}function ln(e){const t=(t,{instance:n,value:r,modifiers:i})=>{if(!n||!n.$)throw Dt(22);const s=cn(e,n.$);const o=un(r);t.textContent=s.t(...hn(o))};return{beforeMount:t,beforeUpdate:t}}function un(e){if(b(e))return{path:e};if(T(e)){if(!("path"in e))throw Dt(19,"path");return e}throw Dt(20)}function hn(e){const{path:t,locale:n,args:r,choice:i,plural:s}=e,o={},c=r||{};return b(n)&&(o.locale=n),a(i)&&(o.plural=i),a(s)&&(o.plural=s),[t,c,o]}function dn(e,t,...n){const r=T(n[0])?n[0]:{},i=!!r.useI18nComponentName,s=!w(r.globalInstall)||r.globalInstall;s&&(e.component(i?"i18n":en.name,en),e.component(sn.name,sn),e.component(an.name,an)),e.directive("t",ln(t))}const fn="vue-i18n: composer properties";let pn;async function mn(e,t){return new Promise(((n,r)=>{try{Nt({id:"vue-devtools-plugin-vue-i18n",label:Pt["vue-devtools-plugin-vue-i18n"],packageName:"vue-i18n",homepage:"https://vue-i18n.intlify.dev",logo:"https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",componentStateTypes:[fn],app:e},(r=>{pn=r,r.on.visitComponentTree((({componentInstance:e,treeNode:n})=>{_n(e,n,t)})),r.on.inspectComponent((({componentInstance:e,instanceData:n})=>{e.vnode.el.__VUE_I18N__&&n&&("legacy"===t.mode?e.vnode.el.__VUE_I18N__!==t.global.__composer&&gn(n,e.vnode.el.__VUE_I18N__):gn(n,e.vnode.el.__VUE_I18N__))})),r.addInspector({id:"vue-i18n-resource-inspector",label:Pt["vue-i18n-resource-inspector"],icon:"language",treeFilterPlaceholder:Rt["vue-i18n-resource-inspector"]}),r.on.getInspectorTree((n=>{n.app===e&&"vue-i18n-resource-inspector"===n.inspectorId&&kn(n,t)})),r.on.getInspectorState((n=>{n.app===e&&"vue-i18n-resource-inspector"===n.inspectorId&&Tn(n,t)})),r.on.editInspectorState((n=>{n.app===e&&"vue-i18n-resource-inspector"===n.inspectorId&&On(n,t)})),r.addTimelineLayer({id:"vue-i18n-timeline",label:Pt["vue-i18n-timeline"],color:xt["vue-i18n-timeline"]}),n(!0)}))}catch(i){console.error(i),r(!1)}}))}function _n(e,t,n){const r="composition"===n.mode?n.global:n.global.__composer;if(e&&e.vnode.el.__VUE_I18N__&&e.vnode.el.__VUE_I18N__!==r){const n=e.type.name||e.type.displayName||e.type.__file,r={label:`i18n (${n} Scope)`,textColor:0,backgroundColor:16764185};t.tags.push(r)}}function gn(e,t){const n=fn;e.state.push({type:n,key:"locale",editable:!0,value:t.locale.value}),e.state.push({type:n,key:"availableLocales",editable:!1,value:t.availableLocales}),e.state.push({type:n,key:"fallbackLocale",editable:!0,value:t.fallbackLocale.value}),e.state.push({type:n,key:"inheritLocale",editable:!0,value:t.inheritLocale}),e.state.push({type:n,key:"messages",editable:!1,value:vn(t.messages.value)}),e.state.push({type:n,key:"datetimeFormats",editable:!1,value:t.datetimeFormats.value}),e.state.push({type:n,key:"numberFormats",editable:!1,value:t.numberFormats.value})}function vn(e){const t={};return Object.keys(e).forEach((n=>{const r=e[n];y(r)&&"source"in r?t[n]=En(r):E(r)?t[n]=vn(r):t[n]=r})),t}const yn={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function bn(e){return e.replace(/[<>"&]/g,wn)}function wn(e){return yn[e]||e}function En(e){const t=e.source?`("${bn(e.source)}")`:"(?)";return{_custom:{type:"function",display:`<span>ƒ</span> ${t}`}}}function kn(e,t){e.rootNodes.push({id:"global",label:"Global Scope"});const n="composition"===t.mode?t.global:t.global.__composer;for(const[r,i]of t.__instances){const s="composition"===t.mode?i:i.__composer;if(n===s)continue;const o=r.type.name||r.type.displayName||r.type.__file;e.rootNodes.push({id:s.id.toString(),label:`${o} Scope`})}}function Cn(e,t){if("global"===e)return"composition"===t.mode?t.global:t.global.__composer;{const n=Array.from(t.__instances.values()).find((t=>t.id.toString()===e));return n?"composition"===t.mode?n:n.__composer:null}}function Tn(e,t){const n=Cn(e.nodeId,t);n&&(e.state=In(n))}function In(e){const t={},n="Locale related info",r=[{type:n,key:"locale",editable:!0,value:e.locale.value},{type:n,key:"fallbackLocale",editable:!0,value:e.fallbackLocale.value},{type:n,key:"availableLocales",editable:!1,value:e.availableLocales},{type:n,key:"inheritLocale",editable:!0,value:e.inheritLocale}];t[n]=r;const i="Locale messages info",s=[{type:i,key:"messages",editable:!1,value:vn(e.messages.value)}];t[i]=s;const o="Datetime formats info",a=[{type:o,key:"datetimeFormats",editable:!1,value:e.datetimeFormats.value}];t[o]=a;const c="Datetime formats info",l=[{type:c,key:"numberFormats",editable:!1,value:e.numberFormats.value}];return t[c]=l,t}function Sn(e,t){if(pn){let n;t&&"groupId"in t&&(n=t.groupId,delete t.groupId),pn.addTimelineEvent({layerId:"vue-i18n-timeline",event:{title:e,groupId:n,time:Date.now(),meta:{},data:t||{},logType:"compile-error"===e?"error":"fallback"===e||"missing"===e?"warning":"default"}})}}function On(e,t){const n=Cn(e.nodeId,t);if(n){const[t]=e.path;"locale"===t&&b(e.state.value)?n.locale.value=e.state.value:"fallbackLocale"===t&&(b(e.state.value)||v(e.state.value)||E(e.state.value))?n.fallbackLocale.value=e.state.value:"inheritLocale"===t&&w(e.state.value)&&(n.inheritLocale=e.state.value)}}function Nn(e,t,n){return{beforeCreate(){const r=(0,gt.FN)();if(!r)throw Dt(22);const i=this.$options;if(i.i18n){const n=i.i18n;i.__i18n&&(n.__i18n=i.__i18n),n.__root=t,this===this.$root?this.$i18n=Pn(e,n):(n.__injectWithOption=!0,this.$i18n=Xt(n))}else i.__i18n?this===this.$root?this.$i18n=Pn(e,i):this.$i18n=Xt({__i18n:i.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;e.__onComponentInstanceCreated(this.$i18n),n.__setInstance(r,this.$i18n),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,t)=>this.$i18n.te(e,t),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e)},mounted(){if(__VUE_I18N_PROD_DEVTOOLS__){this.$el.__VUE_I18N__=this.$i18n.__composer;const e=this.__v_emitter=S(),t=this.$i18n;t.__enableEmitter&&t.__enableEmitter(e),e.on("*",Sn)}},beforeUnmount(){const e=(0,gt.FN)();if(!e)throw Dt(22);if(__VUE_I18N_PROD_DEVTOOLS__){this.__v_emitter&&(this.__v_emitter.off("*",Sn),delete this.__v_emitter);const e=this.$i18n;e.__disableEmitter&&e.__disableEmitter(),delete this.$el.__VUE_I18N__}delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(e),delete this.$i18n}}}function Pn(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[qt](t.pluralizationRules||e.pluralizationRules);const n=zt(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach((t=>e.mergeLocaleMessage(t,n[t]))),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach((n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n]))),t.numberFormats&&Object.keys(t.numberFormats).forEach((n=>e.mergeNumberFormat(n,t.numberFormats[n]))),e}function Rn(e={}){const t=__VUE_I18N_LEGACY_API__&&w(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=!!e.globalInjection,r=new Map,s=__VUE_I18N_LEGACY_API__&&t?Xt(e):Jt(e),o=i(""),a={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},async install(e,...r){if(__VUE_I18N_PROD_DEVTOOLS__&&(e.__VUE_I18N__=a),e.__VUE_I18N_SYMBOL__=o,e.provide(e.__VUE_I18N_SYMBOL__,a),!t&&n&&Fn(e,a.global),__VUE_I18N_FULL_INSTALL__&&dn(e,a,...r),__VUE_I18N_LEGACY_API__&&t&&e.mixin(Nn(s,s.__composer,a)),__VUE_I18N_PROD_DEVTOOLS__){const n=await mn(e,a);if(!n)throw Dt(21);const r=S();if(t){const e=s;e.__enableEmitter&&e.__enableEmitter(r)}else{const e=s;e[jt]&&e[jt](r)}r.on("*",Sn)}},get global(){return s},__instances:r,__getInstance(e){return r.get(e)||null},__setInstance(e,t){r.set(e,t)},__deleteInstance(e){r.delete(e)}};return a}function xn(e={}){const t=(0,gt.FN)();if(null==t)throw Dt(16);if(!t.appContext.app.__VUE_I18N_SYMBOL__)throw Dt(17);const n=(0,gt.f3)(t.appContext.app.__VUE_I18N_SYMBOL__);if(!n)throw Dt(22);const r="composition"===n.mode?n.global:n.global.__composer,i=u(e)?"__i18n"in t.type?"local":"global":e.useScope?e.useScope:"local";if("global"===i){let n=E(e.messages)?e.messages:{};"__i18nGlobal"in t.type&&(n=zt(r.locale.value,{messages:n,__i18n:t.type.__i18nGlobal}));const i=Object.keys(n);if(i.length&&i.forEach((e=>{r.mergeLocaleMessage(e,n[e])})),E(e.datetimeFormats)){const t=Object.keys(e.datetimeFormats);t.length&&t.forEach((t=>{r.mergeDateTimeFormat(t,e.datetimeFormats[t])}))}if(E(e.numberFormats)){const t=Object.keys(e.numberFormats);t.length&&t.forEach((t=>{r.mergeNumberFormat(t,e.numberFormats[t])}))}return r}if("parent"===i){let i=An(n,t,e.__useComponent);return null==i&&(i=r),i}if("legacy"===n.mode)throw Dt(18);const s=n;let o=s.__getInstance(t);if(null==o){const n=t.type,i=d({},e);n.__i18n&&(i.__i18n=n.__i18n),r&&(i.__root=r),o=Jt(i),Ln(s,t,o),s.__setInstance(t,o)}return o}function An(e,t,n=!1){let r=null;const i=t.root;let s=t.parent;while(null!=s){const t=e;if("composition"===e.mode)r=t.__getInstance(s);else{const e=t.__getInstance(s);null!=e&&(r=e.__composer),n&&r&&!r[Ht]&&(r=null)}if(null!=r)break;if(i===s)break;s=s.parent}return r}function Ln(e,t,n){let r=null;(0,gt.bv)((()=>{if(__VUE_I18N_PROD_DEVTOOLS__&&t.vnode.el){t.vnode.el.__VUE_I18N__=n,r=S();const e=n;e[jt]&&e[jt](r),r.on("*",Sn)}}),t),(0,gt.Ah)((()=>{if(__VUE_I18N_PROD_DEVTOOLS__&&t.vnode.el&&t.vnode.el.__VUE_I18N__){r&&r.off("*",Sn);const e=n;e[Wt]&&e[Wt](),delete t.vnode.el.__VUE_I18N__}e.__deleteInstance(t)}),t)}const Dn=["locale","fallbackLocale","availableLocales"],Mn=["t","rt","d","n","tm"];function Fn(e,t){const n=Object.create(null);Dn.forEach((e=>{const r=Object.getOwnPropertyDescriptor(t,e);if(!r)throw Dt(22);const i=(0,vt.dq)(r.value)?{get(){return r.value.value},set(e){r.value.value=e}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,e,i)})),e.config.globalProperties.$i18n=n,Mn.forEach((n=>{const r=Object.getOwnPropertyDescriptor(t,n);if(!r||!r.value)throw Dt(22);Object.defineProperty(e.config.globalProperties,`$${n}`,r)}))}if(Ue(Xe),Lt(),__INTLIFY_PROD_DEVTOOLS__){const e=p();e.__INTLIFY__=!0,Ne(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},678:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return z},tv:function(){return st},yj:function(){return ot}});n(1703);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),l=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const _=()=>{};const g=/\/$/,v=e=>e.replace(g,"");function y(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=S(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function E(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&k(t.matched[r],n.matched[i])&&C(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function k(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function C(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!T(e[n],t[n]))return!1;return!0}function T(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function S(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var O,N;(function(e){e["pop"]="pop",e["push"]="push"})(O||(O={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(N||(N={}));function P(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const R=/^[^#]+#/;function x(e,t){return e.replace(R,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=A(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const F=new Map;function U(e,t){F.set(e,t)}function $(e){const t=F.get(e);return F.delete(e),t}let j=()=>location.protocol+"//"+location.host;function W(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+r+i}function q(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=W(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:O.pop,direction:u?u>0?N.forward:N.back:N.unknown})}))};function c(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:L()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function H(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function V(e){const{history:t,location:n}=window,r={value:W(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:j()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,H(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=p({},i.value,t.state,{forward:e,scroll:L()});s(o.current,o,!0);const a=p({},H(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function B(e){e=P(e);const t=V(e),n=q(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function z(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),B(e)}function K(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const Y={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=o("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function X(e,t){return p(new Error,{type:e,[J]:!0},t)}function Z(e,t){return e instanceof Error&&J in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function re(e,t){const n=p({},te,t),r=[];let i=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ne,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ie(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ie(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function le(e,t,n){const r=re(ce(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=de(e);a.aliasOf=r&&r.record;const l=_e(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=le(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!pe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:_}function o(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&se(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function l(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw X(1,{location:e});o=i.record.name,a=p(he(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw X(1,{location:e,currentLocation:t});o=i.record.name,a=p({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:me(c)}}return t=_e({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function he(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function me(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function _e(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some((t=>t===e||ge(e,t)))}const ve=/#/g,ye=/&/g,be=/\//g,we=/=/g,Ee=/\?/g,ke=/\+/g,Ce=/%5B/g,Te=/%5D/g,Ie=/%5E/g,Se=/%60/g,Oe=/%7B/g,Ne=/%7C/g,Pe=/%7D/g,Re=/%20/g;function xe(e){return encodeURI(""+e).replace(Ne,"|").replace(Ce,"[").replace(Te,"]")}function Ae(e){return xe(e).replace(Oe,"{").replace(Pe,"}").replace(Ie,"^")}function Le(e){return xe(e).replace(ke,"%2B").replace(Re,"+").replace(ve,"%23").replace(ye,"%26").replace(Se,"`").replace(Oe,"{").replace(Pe,"}").replace(Ie,"^")}function De(e){return Le(e).replace(we,"%3D")}function Me(e){return xe(e).replace(ve,"%23").replace(Ee,"%3F")}function Fe(e){return null==e?"":Me(e).replace(be,"%2F")}function Ue(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function $e(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ke," "),n=e.indexOf("="),s=Ue(n<0?e:e.slice(0,n)),o=n<0?null:Ue(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function je(e){let t="";for(let n in e){const r=e[n];if(n=De(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Le(e))):[r&&Le(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function We(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function qe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function He(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):K(e)?a(X(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function Ve(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Be(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(He(c,n,r,s,e))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&He(c,n,r,s,e)()}))))}}return i}function Be(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,r.f3)(l),n=(0,r.f3)(u),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(k.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(k.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&C(n.params,s.value.params)));function h(n={}){return Ye(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(_):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const Ke=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,i.qj)(ze(e)),{options:s}=(0,r.f3)(l),o=(0,r.Fl)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ge=Ke;function Ye(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(h),o=(0,r.Fl)((()=>e.route||s.value)),l=(0,r.f3)(c,0),u=(0,r.Fl)((()=>o.value.matched[l]));(0,r.JJ)(c,l+1),(0,r.JJ)(a,u),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&k(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return et(n.default,{Component:a,route:i});const l=s.props[e.name],h=l?!0===l?i.params:"function"===typeof l?l(i):l:null,f=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return et(n.default,{Component:m,route:i})||m}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=ue(e.routes,e),n=e.parseQuery||$e,s=e.stringifyQuery||je,o=e.history;const a=qe(),c=qe(),f=qe(),g=(0,i.XI)(Y);let v=Y;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=m.bind(null,(e=>""+e)),k=m.bind(null,Fe),C=m.bind(null,Ue);function T(e,n){let r,i;return G(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function N(e){return!!t.getRecordMatcher(e)}function P(e,r){if(r=p({},r||g.value),"string"===typeof e){const i=y(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:C(s.params),hash:Ue(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:y(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:k(e.params)}),r.params=k(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=w(C(a.params));const l=b(s,p({},e,{hash:Ae(c),path:a.path})),u=o.createHref(l);return p({fullPath:l,hash:c,query:s===je?We(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function R(e){return"string"===typeof e?y(n,e,g.value.path):p({},e)}function x(e,t){if(v!==e)return X(8,{from:t,to:e})}function A(e){return W(e)}function F(e){return A(p(R(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function W(e,t){const n=v=P(e),r=g.value,i=e.state,o=e.force,a=!0===e.replace,c=j(n);if(c)return W(p(R(c),{state:i,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&E(s,r,n)&&(u=X(16,{to:l,from:r}),ie(r,r,!0,!1)),(u?Promise.resolve(u):H(l,r)).catch((e=>Z(e)?Z(e,2)?e:re(e):te(e,l,r))).then((e=>{if(e){if(Z(e,2))return W(p(R(e.to),{state:i,force:o,replace:a}),t||l)}else e=B(l,r,!0,a,i);return V(l,r,e),e}))}function q(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e,t){let n;const[r,i,s]=it(e,t);n=Ve(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(He(r,e,t))}));const o=q.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of a.list())n.push(He(r,e,t));return n.push(o),rt(n)})).then((()=>{n=Ve(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(He(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(He(i,e,t));else n.push(He(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ve(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of c.list())n.push(He(r,e,t));return n.push(o),rt(n)})).catch((e=>Z(e,8)?e:Promise.reject(e)))}function V(e,t,n){for(const r of f.list())r(e,t,n)}function B(e,t,n,r,i){const s=x(e,t);if(s)return s;const a=t===Y,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),g.value=e,ie(e,t,n,a),re()}let z;function K(){z=o.listen(((e,t,n)=>{const r=P(e),i=j(r);if(i)return void W(p(i,{replace:!0}),r).catch(_);v=r;const s=g.value;d&&U(M(s.fullPath,n.delta),L()),H(r,s).catch((e=>Z(e,12)?e:Z(e,2)?(W(e.to,r).then((e=>{Z(e,20)&&!n.delta&&n.type===O.pop&&o.go(-1,!1)})).catch(_),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,s)))).then((e=>{e=e||B(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===O.pop&&Z(e,20)&&o.go(-1,!1)),V(r,s,e)})).catch(_)}))}let J,Q=qe(),ee=qe();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return J&&g.value!==Y?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function re(e){return J||(J=!e,K(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ie(t,n,i,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!i&&$(M(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&D(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:g,addRoute:T,removeRoute:I,hasRoute:N,getRoutes:S,resolve:P,options:e,push:A,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(g)}),d&&!oe&&g.value===Y&&(oe=!0,A(o.location).catch((e=>{0})));const n={};for(const i in Y)n[i]=(0,r.Fl)((()=>g.value[i]));e.provide(l,t),e.provide(u,(0,i.qj)(n)),e.provide(h,g);const s=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=Y,z&&z(),g.value=Y,oe=!1,J=!1),s()}}};return ce}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>k(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>k(e,a)))||i.push(a))}return[n,r,i]}function st(){return(0,r.f3)(l)}function ot(){return(0,r.f3)(u)}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return me},qX:function(){return he},Xd:function(){return ue},Mq:function(){return ge},ZF:function(){return _e},KN:function(){return ve}});var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function _(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function g(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(k(this),t),E(h.get(this))}:function(...t){return E(e.apply(k(this),t))}:function(t,...n){const r=e.call(k(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&g(e),o(e,l())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return _(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const k=e=>m.get(e);function C(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],S=new Map;function O(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return S.set(t,s),s}y((e=>({...e,get:(t,n,r)=>O(t,n)||e.get(t,n,r),has:(t,n)=>!!O(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(P(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function P(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",x="0.7.24",A=new i.Yd("@firebase/app"),L="@firebase/app-compat",D="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",$="@firebase/auth",j="@firebase/auth-compat",W="@firebase/database",q="@firebase/database-compat",H="@firebase/functions",V="@firebase/functions-compat",B="@firebase/installations",z="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.8.1",se="[DEFAULT]",oe={[R]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[D]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[$]:"fire-auth",[j]:"fire-auth-compat",[W]:"fire-rtdb",[q]:"fire-rtdb-compat",[H]:"fire-fn",[V]:"fire-fn-compat",[B]:"fire-iid",[z]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){A.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return A.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function _e(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw fe.create("bad-app-name",{appName:String(i)});const o=ae.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw fe.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ce.values())a.addComponent(r);const c=new pe(e,n,a);return ae.set(i,c),c}function ge(e=se){const t=ae.get(e);if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void A.warn(e.join(" "))}ue(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ye="firebase-heartbeat-database",be=1,we="firebase-heartbeat-store";let Ee=null;function ke(){return Ee||(Ee=C(ye,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw fe.create("storage-open",{originalErrorMessage:e.message})}))),Ee}async function Ce(e){try{const t=await ke();return t.transaction(we).objectStore(we).get(Ie(e))}catch(t){throw fe.create("storage-get",{originalErrorMessage:t.message})}}async function Te(e,t){try{const n=await ke(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,Ie(e)),r.done}catch(n){throw fe.create("storage-set",{originalErrorMessage:n.message})}}function Ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1024,Oe=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Oe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pe(),{heartbeatsToSend:t,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=Se){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ae(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ae(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ae(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){ue(new r.wA("platform-logger",(e=>new N(e)),"PRIVATE")),ue(new r.wA("heartbeat",(e=>new Ne(e)),"PRIVATE")),ve(R,x,e),ve(R,x,"esm2017"),ve("fire-js","")}Le("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return l},in:function(){return i}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}}]);
//# sourceMappingURL=chunk-vendors.4d6f816f.js.map