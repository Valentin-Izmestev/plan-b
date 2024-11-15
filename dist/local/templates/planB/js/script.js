const googleKey = '6LcLMYMpAAAAADK7BMqMojyJEp8A88Zt9oiqSNLs';
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).SimpleBar=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r,n,i,o="object",s=function(t){return t&&t.Math==Math&&t},a=s(typeof globalThis==o&&globalThis)||s(typeof window==o&&window)||s(typeof self==o&&self)||s(typeof t==o&&t)||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},l=!c((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),u={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,h={f:f&&!u.call({1:2},1)?function(t){var e=f(this,t);return!!e&&e.enumerable}:u},d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},p={}.toString,v=function(t){return p.call(t).slice(8,-1)},g="".split,y=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==v(t)?g.call(t,""):Object(t)}:Object,b=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},m=function(t){return y(b(t))},x=function(t){return"object"==typeof t?null!==t:"function"==typeof t},E=function(t,e){if(!x(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!x(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,O=function(t,e){return w.call(t,e)},_=a.document,S=x(_)&&x(_.createElement),A=function(t){return S?_.createElement(t):{}},k=!l&&!c((function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a})),L=Object.getOwnPropertyDescriptor,M={f:l?L:function(t,e){if(t=m(t),e=E(e,!0),k)try{return L(t,e)}catch(t){}if(O(t,e))return d(!h.f.call(t,e),t[e])}},T=function(t){if(!x(t))throw TypeError(String(t)+" is not an object");return t},j=Object.defineProperty,R={f:l?j:function(t,e,r){if(T(t),e=E(e,!0),T(r),k)try{return j(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},W=l?function(t,e,r){return R.f(t,e,d(1,r))}:function(t,e,r){return t[e]=r,t},z=function(t,e){try{W(a,t,e)}catch(r){a[t]=e}return e},C=e((function(t){var e=a["__core-js_shared__"]||z("__core-js_shared__",{});(t.exports=function(t,r){return e[t]||(e[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),N=C("native-function-to-string",Function.toString),I=a.WeakMap,D="function"==typeof I&&/native code/.test(N.call(I)),P=0,V=Math.random(),F=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++P+V).toString(36)},B=C("keys"),H=function(t){return B[t]||(B[t]=F(t))},q={},$=a.WeakMap;if(D){var X=new $,Y=X.get,G=X.has,U=X.set;r=function(t,e){return U.call(X,t,e),e},n=function(t){return Y.call(X,t)||{}},i=function(t){return G.call(X,t)}}else{var Q=H("state");q[Q]=!0,r=function(t,e){return W(t,Q,e),e},n=function(t){return O(t,Q)?t[Q]:{}},i=function(t){return O(t,Q)}}var K={set:r,get:n,has:i,enforce:function(t){return i(t)?n(t):r(t,{})},getterFor:function(t){return function(e){var r;if(!x(e)||(r=n(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},J=e((function(t){var e=K.get,r=K.enforce,n=String(N).split("toString");C("inspectSource",(function(t){return N.call(t)})),(t.exports=function(t,e,i,o){var s=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof e||O(i,"name")||W(i,"name",e),r(i).source=n.join("string"==typeof e?e:"")),t!==a?(s?!l&&t[e]&&(c=!0):delete t[e],c?t[e]=i:W(t,e,i)):c?t[e]=i:z(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||N.call(this)}))})),Z=a,tt=function(t){return"function"==typeof t?t:void 0},et=function(t,e){return arguments.length<2?tt(Z[t])||tt(a[t]):Z[t]&&Z[t][e]||a[t]&&a[t][e]},rt=Math.ceil,nt=Math.floor,it=function(t){return isNaN(t=+t)?0:(t>0?nt:rt)(t)},ot=Math.min,st=function(t){return t>0?ot(it(t),9007199254740991):0},at=Math.max,ct=Math.min,lt=function(t){return function(e,r,n){var i,o=m(e),s=st(o.length),a=function(t,e){var r=it(t);return r<0?at(r+e,0):ct(r,e)}(n,s);if(t&&r!=r){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===r)return t||a||0;return!t&&-1}},ut={includes:lt(!0),indexOf:lt(!1)}.indexOf,ft=function(t,e){var r,n=m(t),i=0,o=[];for(r in n)!O(q,r)&&O(n,r)&&o.push(r);for(;e.length>i;)O(n,r=e[i++])&&(~ut(o,r)||o.push(r));return o},ht=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],dt=ht.concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return ft(t,dt)}},vt={f:Object.getOwnPropertySymbols},gt=et("Reflect","ownKeys")||function(t){var e=pt.f(T(t)),r=vt.f;return r?e.concat(r(t)):e},yt=function(t,e){for(var r=gt(e),n=R.f,i=M.f,o=0;o<r.length;o++){var s=r[o];O(t,s)||n(t,s,i(e,s))}},bt=/#|\.prototype\./,mt=function(t,e){var r=Et[xt(t)];return r==Ot||r!=wt&&("function"==typeof e?c(e):!!e)},xt=mt.normalize=function(t){return String(t).replace(bt,".").toLowerCase()},Et=mt.data={},wt=mt.NATIVE="N",Ot=mt.POLYFILL="P",_t=mt,St=M.f,At=function(t,e){var r,n,i,o,s,c=t.target,l=t.global,u=t.stat;if(r=l?a:u?a[c]||z(c,{}):(a[c]||{}).prototype)for(n in e){if(o=e[n],i=t.noTargetGet?(s=St(r,n))&&s.value:r[n],!_t(l?n:c+(u?".":"#")+n,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;yt(o,i)}(t.sham||i&&i.sham)&&W(o,"sham",!0),J(r,n,o,t)}},kt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Lt=function(t,e,r){if(kt(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}},Mt=function(t){return Object(b(t))},Tt=Array.isArray||function(t){return"Array"==v(t)},jt=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),Rt=a.Symbol,Wt=C("wks"),zt=function(t){return Wt[t]||(Wt[t]=jt&&Rt[t]||(jt?Rt:F)("Symbol."+t))},Ct=zt("species"),Nt=function(t,e){var r;return Tt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Tt(r.prototype)?x(r)&&null===(r=r[Ct])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},It=[].push,Dt=function(t){var e=1==t,r=2==t,n=3==t,i=4==t,o=6==t,s=5==t||o;return function(a,c,l,u){for(var f,h,d=Mt(a),p=y(d),v=Lt(c,l,3),g=st(p.length),b=0,m=u||Nt,x=e?m(a,g):r?m(a,0):void 0;g>b;b++)if((s||b in p)&&(h=v(f=p[b],b,d),t))if(e)x[b]=h;else if(h)switch(t){case 3:return!0;case 5:return f;case 6:return b;case 2:It.call(x,f)}else if(i)return!1;return o?-1:n||i?i:x}},Pt={forEach:Dt(0),map:Dt(1),filter:Dt(2),some:Dt(3),every:Dt(4),find:Dt(5),findIndex:Dt(6)},Vt=function(t,e){var r=[][t];return!r||!c((function(){r.call(null,e||function(){throw 1},1)}))},Ft=Pt.forEach,Bt=Vt("forEach")?function(t){return Ft(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach;At({target:"Array",proto:!0,forced:[].forEach!=Bt},{forEach:Bt});var Ht={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var qt in Ht){var $t=a[qt],Xt=$t&&$t.prototype;if(Xt&&Xt.forEach!==Bt)try{W(Xt,"forEach",Bt)}catch(t){Xt.forEach=Bt}}var Yt=!("undefined"==typeof window||!window.document||!window.document.createElement),Gt=zt("species"),Ut=Pt.filter;At({target:"Array",proto:!0,forced:!function(t){return!c((function(){var e=[];return(e.constructor={})[Gt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("filter")},{filter:function(t){return Ut(this,t,arguments.length>1?arguments[1]:void 0)}});var Qt=Object.keys||function(t){return ft(t,ht)},Kt=l?Object.defineProperties:function(t,e){T(t);for(var r,n=Qt(e),i=n.length,o=0;i>o;)R.f(t,r=n[o++],e[r]);return t},Jt=et("document","documentElement"),Zt=H("IE_PROTO"),te=function(){},ee=function(){var t,e=A("iframe"),r=ht.length;for(e.style.display="none",Jt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ee=t.F;r--;)delete ee.prototype[ht[r]];return ee()},re=Object.create||function(t,e){var r;return null!==t?(te.prototype=T(t),r=new te,te.prototype=null,r[Zt]=t):r=ee(),void 0===e?r:Kt(r,e)};q[Zt]=!0;var ne=zt("unscopables"),ie=Array.prototype;null==ie[ne]&&W(ie,ne,re(null));var oe,se,ae,ce=function(t){ie[ne][t]=!0},le={},ue=!c((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),fe=H("IE_PROTO"),he=Object.prototype,de=ue?Object.getPrototypeOf:function(t){return t=Mt(t),O(t,fe)?t[fe]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?he:null},pe=zt("iterator"),ve=!1;[].keys&&("next"in(ae=[].keys())?(se=de(de(ae)))!==Object.prototype&&(oe=se):ve=!0),null==oe&&(oe={}),O(oe,pe)||W(oe,pe,(function(){return this}));var ge={IteratorPrototype:oe,BUGGY_SAFARI_ITERATORS:ve},ye=R.f,be=zt("toStringTag"),me=function(t,e,r){t&&!O(t=r?t:t.prototype,be)&&ye(t,be,{configurable:!0,value:e})},xe=ge.IteratorPrototype,Ee=function(){return this},we=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return T(r),function(t){if(!x(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(r,n):r.__proto__=n,r}}():void 0),Oe=ge.IteratorPrototype,_e=ge.BUGGY_SAFARI_ITERATORS,Se=zt("iterator"),Ae=function(){return this},ke=function(t,e,r,n,i,o,s){!function(t,e,r){var n=e+" Iterator";t.prototype=re(xe,{next:d(1,r)}),me(t,n,!1),le[n]=Ee}(r,e,n);var a,c,l,u=function(t){if(t===i&&g)return g;if(!_e&&t in p)return p[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},f=e+" Iterator",h=!1,p=t.prototype,v=p[Se]||p["@@iterator"]||i&&p[i],g=!_e&&v||u(i),y="Array"==e&&p.entries||v;if(y&&(a=de(y.call(new t)),Oe!==Object.prototype&&a.next&&(de(a)!==Oe&&(we?we(a,Oe):"function"!=typeof a[Se]&&W(a,Se,Ae)),me(a,f,!0))),"values"==i&&v&&"values"!==v.name&&(h=!0,g=function(){return v.call(this)}),p[Se]!==g&&W(p,Se,g),le[e]=g,i)if(c={values:u("values"),keys:o?g:u("keys"),entries:u("entries")},s)for(l in c)!_e&&!h&&l in p||J(p,l,c[l]);else At({target:e,proto:!0,forced:_e||h},c);return c},Le=K.set,Me=K.getterFor("Array Iterator"),Te=ke(Array,"Array",(function(t,e){Le(this,{type:"Array Iterator",target:m(t),index:0,kind:e})}),(function(){var t=Me(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");le.Arguments=le.Array,ce("keys"),ce("values"),ce("entries");var je=Object.assign,Re=!je||c((function(){var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=je({},t)[r]||"abcdefghijklmnopqrst"!=Qt(je({},e)).join("")}))?function(t,e){for(var r=Mt(t),n=arguments.length,i=1,o=vt.f,s=h.f;n>i;)for(var a,c=y(arguments[i++]),u=o?Qt(c).concat(o(c)):Qt(c),f=u.length,d=0;f>d;)a=u[d++],l&&!s.call(c,a)||(r[a]=c[a]);return r}:je;At({target:"Object",stat:!0,forced:Object.assign!==Re},{assign:Re});var We=zt("toStringTag"),ze="Arguments"==v(function(){return arguments}()),Ce=function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),We))?r:ze?v(e):"Object"==(n=v(e))&&"function"==typeof e.callee?"Arguments":n},Ne={};Ne[zt("toStringTag")]="z";var Ie="[object z]"!==String(Ne)?function(){return"[object "+Ce(this)+"]"}:Ne.toString,De=Object.prototype;Ie!==De.toString&&J(De,"toString",Ie,{unsafe:!0});var Pe="\t\n\v\f\r                　\u2028\u2029\ufeff",Ve="["+Pe+"]",Fe=RegExp("^"+Ve+Ve+"*"),Be=RegExp(Ve+Ve+"*$"),He=function(t){return function(e){var r=String(b(e));return 1&t&&(r=r.replace(Fe,"")),2&t&&(r=r.replace(Be,"")),r}},qe={start:He(1),end:He(2),trim:He(3)}.trim,$e=a.parseInt,Xe=/^[+-]?0[Xx]/,Ye=8!==$e(Pe+"08")||22!==$e(Pe+"0x16")?function(t,e){var r=qe(String(t));return $e(r,e>>>0||(Xe.test(r)?16:10))}:$e;At({global:!0,forced:parseInt!=Ye},{parseInt:Ye});var Ge=function(t){return function(e,r){var n,i,o=String(b(e)),s=it(r),a=o.length;return s<0||s>=a?t?"":void 0:(n=o.charCodeAt(s))<55296||n>56319||s+1===a||(i=o.charCodeAt(s+1))<56320||i>57343?t?o.charAt(s):n:t?o.slice(s,s+2):i-56320+(n-55296<<10)+65536}},Ue={codeAt:Ge(!1),charAt:Ge(!0)},Qe=Ue.charAt,Ke=K.set,Je=K.getterFor("String Iterator");ke(String,"String",(function(t){Ke(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=Je(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=Qe(r,n),e.index+=t.length,{value:t,done:!1})}));var Ze=function(t,e,r){for(var n in e)J(t,n,e[n],r);return t},tr=!c((function(){return Object.isExtensible(Object.preventExtensions({}))})),er=e((function(t){var e=R.f,r=F("meta"),n=0,i=Object.isExtensible||function(){return!0},o=function(t){e(t,r,{value:{objectID:"O"+ ++n,weakData:{}}})},s=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!x(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!O(t,r)){if(!i(t))return"F";if(!e)return"E";o(t)}return t[r].objectID},getWeakData:function(t,e){if(!O(t,r)){if(!i(t))return!0;if(!e)return!1;o(t)}return t[r].weakData},onFreeze:function(t){return tr&&s.REQUIRED&&i(t)&&!O(t,r)&&o(t),t}};q[r]=!0})),rr=(er.REQUIRED,er.fastKey,er.getWeakData,er.onFreeze,zt("iterator")),nr=Array.prototype,ir=zt("iterator"),or=function(t,e,r,n){try{return n?e(T(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&T(i.call(t)),e}},sr=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,r,n,i,o){var s,a,c,l,u,f,h,d=Lt(r,n,i?2:1);if(o)s=t;else{if("function"!=typeof(a=function(t){if(null!=t)return t[ir]||t["@@iterator"]||le[Ce(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(h=a)&&(le.Array===h||nr[rr]===h)){for(c=0,l=st(t.length);l>c;c++)if((u=i?d(T(f=t[c])[0],f[1]):d(t[c]))&&u instanceof e)return u;return new e(!1)}s=a.call(t)}for(;!(f=s.next()).done;)if((u=or(s,d,f.value,i))&&u instanceof e)return u;return new e(!1)}).stop=function(t){return new e(!0,t)}})),ar=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t},cr=zt("iterator"),lr=!1;try{var ur=0,fr={next:function(){return{done:!!ur++}},return:function(){lr=!0}};fr[cr]=function(){return this},Array.from(fr,(function(){throw 2}))}catch(t){}var hr=function(t,e,r,n,i){var o=a[t],s=o&&o.prototype,l=o,u=n?"set":"add",f={},h=function(t){var e=s[t];J(s,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(i&&!x(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return i&&!x(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(i&&!x(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(_t(t,"function"!=typeof o||!(i||s.forEach&&!c((function(){(new o).entries().next()})))))l=r.getConstructor(e,t,n,u),er.REQUIRED=!0;else if(_t(t,!0)){var d=new l,p=d[u](i?{}:-0,1)!=d,v=c((function(){d.has(1)})),g=function(t,e){if(!e&&!lr)return!1;var r=!1;try{var n={};n[cr]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r}((function(t){new o(t)})),y=!i&&c((function(){for(var t=new o,e=5;e--;)t[u](e,e);return!t.has(-0)}));g||((l=e((function(e,r){ar(e,l,t);var i=function(t,e,r){var n,i;return we&&"function"==typeof(n=e.constructor)&&n!==r&&x(i=n.prototype)&&i!==r.prototype&&we(t,i),t}(new o,e,l);return null!=r&&sr(r,i[u],i,n),i}))).prototype=s,s.constructor=l),(v||y)&&(h("delete"),h("has"),n&&h("get")),(y||p)&&h(u),i&&s.clear&&delete s.clear}return f[t]=l,At({global:!0,forced:l!=o},f),me(l,t),i||r.setStrong(l,t,n),l},dr=er.getWeakData,pr=K.set,vr=K.getterFor,gr=Pt.find,yr=Pt.findIndex,br=0,mr=function(t){return t.frozen||(t.frozen=new xr)},xr=function(){this.entries=[]},Er=function(t,e){return gr(t.entries,(function(t){return t[0]===e}))};xr.prototype={get:function(t){var e=Er(this,t);if(e)return e[1]},has:function(t){return!!Er(this,t)},set:function(t,e){var r=Er(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=yr(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}};var wr={getConstructor:function(t,e,r,n){var i=t((function(t,o){ar(t,i,e),pr(t,{type:e,id:br++,frozen:void 0}),null!=o&&sr(o,t[n],t,r)})),o=vr(e),s=function(t,e,r){var n=o(t),i=dr(T(e),!0);return!0===i?mr(n).set(e,r):i[n.id]=r,t};return Ze(i.prototype,{delete:function(t){var e=o(this);if(!x(t))return!1;var r=dr(t);return!0===r?mr(e).delete(t):r&&O(r,e.id)&&delete r[e.id]},has:function(t){var e=o(this);if(!x(t))return!1;var r=dr(t);return!0===r?mr(e).has(t):r&&O(r,e.id)}}),Ze(i.prototype,r?{get:function(t){var e=o(this);if(x(t)){var r=dr(t);return!0===r?mr(e).get(t):r?r[e.id]:void 0}},set:function(t,e){return s(this,t,e)}}:{add:function(t){return s(this,t,!0)}}),i}},Or=(e((function(t){var e,r=K.enforce,n=!a.ActiveXObject&&"ActiveXObject"in a,i=Object.isExtensible,o=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},s=t.exports=hr("WeakMap",o,wr,!0,!0);if(D&&n){e=wr.getConstructor(o,"WeakMap",!0),er.REQUIRED=!0;var c=s.prototype,l=c.delete,u=c.has,f=c.get,h=c.set;Ze(c,{delete:function(t){if(x(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),l.call(this,t)||n.frozen.delete(t)}return l.call(this,t)},has:function(t){if(x(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),u.call(this,t)||n.frozen.has(t)}return u.call(this,t)},get:function(t){if(x(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),u.call(this,t)?f.call(this,t):n.frozen.get(t)}return f.call(this,t)},set:function(t,n){if(x(t)&&!i(t)){var o=r(this);o.frozen||(o.frozen=new e),u.call(this,t)?h.call(this,t,n):o.frozen.set(t,n)}else h.call(this,t,n);return this}})}})),zt("iterator")),_r=zt("toStringTag"),Sr=Te.values;for(var Ar in Ht){var kr=a[Ar],Lr=kr&&kr.prototype;if(Lr){if(Lr[Or]!==Sr)try{W(Lr,Or,Sr)}catch(t){Lr[Or]=Sr}if(Lr[_r]||W(Lr,_r,Ar),Ht[Ar])for(var Mr in Te)if(Lr[Mr]!==Te[Mr])try{W(Lr,Mr,Te[Mr])}catch(t){Lr[Mr]=Te[Mr]}}}var Tr="Expected a function",jr=NaN,Rr="[object Symbol]",Wr=/^\s+|\s+$/g,zr=/^[-+]0x[0-9a-f]+$/i,Cr=/^0b[01]+$/i,Nr=/^0o[0-7]+$/i,Ir=parseInt,Dr="object"==typeof t&&t&&t.Object===Object&&t,Pr="object"==typeof self&&self&&self.Object===Object&&self,Vr=Dr||Pr||Function("return this")(),Fr=Object.prototype.toString,Br=Math.max,Hr=Math.min,qr=function(){return Vr.Date.now()};function $r(t,e,r){var n,i,o,s,a,c,l=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(Tr);function d(e){var r=n,o=i;return n=i=void 0,l=e,s=t.apply(o,r)}function p(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=o}function v(){var t=qr();if(p(t))return g(t);a=setTimeout(v,function(t){var r=e-(t-c);return f?Hr(r,o-(t-l)):r}(t))}function g(t){return a=void 0,h&&n?d(t):(n=i=void 0,s)}function y(){var t=qr(),r=p(t);if(n=arguments,i=this,c=t,r){if(void 0===a)return function(t){return l=t,a=setTimeout(v,e),u?d(t):s}(c);if(f)return a=setTimeout(v,e),d(c)}return void 0===a&&(a=setTimeout(v,e)),s}return e=Yr(e)||0,Xr(r)&&(u=!!r.leading,o=(f="maxWait"in r)?Br(Yr(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=i=a=void 0},y.flush=function(){return void 0===a?s:g(qr())},y}function Xr(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Yr(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Fr.call(t)==Rr}(t))return jr;if(Xr(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Xr(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Wr,"");var r=Cr.test(t);return r||Nr.test(t)?Ir(t.slice(2),r?2:8):zr.test(t)?jr:+t}var Gr=function(t,e,r){var n=!0,i=!0;if("function"!=typeof t)throw new TypeError(Tr);return Xr(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),$r(t,e,{leading:n,maxWait:e,trailing:i})},Ur="Expected a function",Qr=NaN,Kr="[object Symbol]",Jr=/^\s+|\s+$/g,Zr=/^[-+]0x[0-9a-f]+$/i,tn=/^0b[01]+$/i,en=/^0o[0-7]+$/i,rn=parseInt,nn="object"==typeof t&&t&&t.Object===Object&&t,on="object"==typeof self&&self&&self.Object===Object&&self,sn=nn||on||Function("return this")(),an=Object.prototype.toString,cn=Math.max,ln=Math.min,un=function(){return sn.Date.now()};function fn(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function hn(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&an.call(t)==Kr}(t))return Qr;if(fn(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=fn(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Jr,"");var r=tn.test(t);return r||en.test(t)?rn(t.slice(2),r?2:8):Zr.test(t)?Qr:+t}var dn=function(t,e,r){var n,i,o,s,a,c,l=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(Ur);function d(e){var r=n,o=i;return n=i=void 0,l=e,s=t.apply(o,r)}function p(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=o}function v(){var t=un();if(p(t))return g(t);a=setTimeout(v,function(t){var r=e-(t-c);return f?ln(r,o-(t-l)):r}(t))}function g(t){return a=void 0,h&&n?d(t):(n=i=void 0,s)}function y(){var t=un(),r=p(t);if(n=arguments,i=this,c=t,r){if(void 0===a)return function(t){return l=t,a=setTimeout(v,e),u?d(t):s}(c);if(f)return a=setTimeout(v,e),d(c)}return void 0===a&&(a=setTimeout(v,e)),s}return e=hn(e)||0,fn(r)&&(u=!!r.leading,o=(f="maxWait"in r)?cn(hn(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=i=a=void 0},y.flush=function(){return void 0===a?s:g(un())},y},pn="Expected a function",vn="__lodash_hash_undefined__",gn="[object Function]",yn="[object GeneratorFunction]",bn=/^\[object .+?Constructor\]$/,mn="object"==typeof t&&t&&t.Object===Object&&t,xn="object"==typeof self&&self&&self.Object===Object&&self,En=mn||xn||Function("return this")();var wn=Array.prototype,On=Function.prototype,_n=Object.prototype,Sn=En["__core-js_shared__"],An=function(){var t=/[^.]+$/.exec(Sn&&Sn.keys&&Sn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),kn=On.toString,Ln=_n.hasOwnProperty,Mn=_n.toString,Tn=RegExp("^"+kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jn=wn.splice,Rn=Vn(En,"Map"),Wn=Vn(Object,"create");function zn(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Cn(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Nn(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function In(t,e){for(var r,n,i=t.length;i--;)if((r=t[i][0])===(n=e)||r!=r&&n!=n)return i;return-1}function Dn(t){return!(!Bn(t)||(e=t,An&&An in e))&&(function(t){var e=Bn(t)?Mn.call(t):"";return e==gn||e==yn}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Tn:bn).test(function(t){if(null!=t){try{return kn.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function Pn(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function Vn(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Dn(r)?r:void 0}function Fn(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(pn);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s),s};return r.cache=new(Fn.Cache||Nn),r}function Bn(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}zn.prototype.clear=function(){this.__data__=Wn?Wn(null):{}},zn.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},zn.prototype.get=function(t){var e=this.__data__;if(Wn){var r=e[t];return r===vn?void 0:r}return Ln.call(e,t)?e[t]:void 0},zn.prototype.has=function(t){var e=this.__data__;return Wn?void 0!==e[t]:Ln.call(e,t)},zn.prototype.set=function(t,e){return this.__data__[t]=Wn&&void 0===e?vn:e,this},Cn.prototype.clear=function(){this.__data__=[]},Cn.prototype.delete=function(t){var e=this.__data__,r=In(e,t);return!(r<0)&&(r==e.length-1?e.pop():jn.call(e,r,1),!0)},Cn.prototype.get=function(t){var e=this.__data__,r=In(e,t);return r<0?void 0:e[r][1]},Cn.prototype.has=function(t){return In(this.__data__,t)>-1},Cn.prototype.set=function(t,e){var r=this.__data__,n=In(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Nn.prototype.clear=function(){this.__data__={hash:new zn,map:new(Rn||Cn),string:new zn}},Nn.prototype.delete=function(t){return Pn(this,t).delete(t)},Nn.prototype.get=function(t){return Pn(this,t).get(t)},Nn.prototype.has=function(t){return Pn(this,t).has(t)},Nn.prototype.set=function(t,e){return Pn(this,t).set(t,e),this},Fn.Cache=Nn;var Hn=Fn,qn=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var r=-1;return t.some((function(t,n){return t[0]===e&&(r=n,!0)})),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var r=t(this.__entries__,e),n=this.__entries__[r];return n&&n[1]},e.prototype.set=function(e,r){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=r:this.__entries__.push([e,r])},e.prototype.delete=function(e){var r=this.__entries__,n=t(r,e);~n&&r.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var r=0,n=this.__entries__;r<n.length;r++){var i=n[r];t.call(e,i[1],i[0])}},e}()}(),$n="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Xn="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Yn="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Xn):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},Gn=2;var Un=20,Qn=["top","right","bottom","left","width","height","size","weight"],Kn="undefined"!=typeof MutationObserver,Jn=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var r=!1,n=!1,i=0;function o(){r&&(r=!1,t()),n&&a()}function s(){Yn(o)}function a(){var t=Date.now();if(r){if(t-i<Gn)return;n=!0}else r=!0,n=!1,setTimeout(s,e);i=t}return a}(this.refresh.bind(this),Un)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,r=e.indexOf(t);~r&&e.splice(r,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){$n&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Kn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){$n&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,r=void 0===e?"":e;Qn.some((function(t){return!!~r.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Zn=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},ti=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Xn},ei=ai(0,0,0,0);function ri(t){return parseFloat(t)||0}function ni(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce((function(e,r){return e+ri(t["border-"+r+"-width"])}),0)}function ii(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return ei;var n=ti(t).getComputedStyle(t),i=function(t){for(var e={},r=0,n=["top","right","bottom","left"];r<n.length;r++){var i=n[r],o=t["padding-"+i];e[i]=ri(o)}return e}(n),o=i.left+i.right,s=i.top+i.bottom,a=ri(n.width),c=ri(n.height);if("border-box"===n.boxSizing&&(Math.round(a+o)!==e&&(a-=ni(n,"left","right")+o),Math.round(c+s)!==r&&(c-=ni(n,"top","bottom")+s)),!function(t){return t===ti(t).document.documentElement}(t)){var l=Math.round(a+o)-e,u=Math.round(c+s)-r;1!==Math.abs(l)&&(a-=l),1!==Math.abs(u)&&(c-=u)}return ai(i.left,i.top,a,c)}var oi="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof ti(t).SVGGraphicsElement}:function(t){return t instanceof ti(t).SVGElement&&"function"==typeof t.getBBox};function si(t){return $n?oi(t)?function(t){var e=t.getBBox();return ai(0,0,e.width,e.height)}(t):ii(t):ei}function ai(t,e,r,n){return{x:t,y:e,width:r,height:n}}var ci=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ai(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=si(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),li=function(t,e){var r,n,i,o,s,a,c,l=(n=(r=e).x,i=r.y,o=r.width,s=r.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),Zn(c,{x:n,y:i,width:o,height:s,top:i,right:n+o,bottom:s+i,left:n}),c);Zn(this,{target:t,contentRect:l})},ui=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new qn,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof ti(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new ci(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof ti(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new li(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),fi="undefined"!=typeof WeakMap?new WeakMap:new qn,hi=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=Jn.getInstance(),n=new ui(e,r,this);fi.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){hi.prototype[t]=function(){var e;return(e=fi.get(this))[t].apply(e,arguments)}}));var di=void 0!==Xn.ResizeObserver?Xn.ResizeObserver:hi,pi=null,vi=null;function gi(){if(null===pi){if("undefined"==typeof document)return pi=0;var t=document.body,e=document.createElement("div");e.classList.add("simplebar-hide-scrollbar"),t.appendChild(e);var r=e.getBoundingClientRect().right;t.removeChild(e),pi=r}return pi}Yt&&window.addEventListener("resize",(function(){vi!==window.devicePixelRatio&&(vi=window.devicePixelRatio,pi=null)}));var yi=function(t){return function(e,r,n,i){kt(r);var o=Mt(e),s=y(o),a=st(o.length),c=t?a-1:0,l=t?-1:1;if(n<2)for(;;){if(c in s){i=s[c],c+=l;break}if(c+=l,t?c<0:a<=c)throw TypeError("Reduce of empty array with no initial value")}for(;t?c>=0:a>c;c+=l)c in s&&(i=r(i,s[c],c,o));return i}},bi={left:yi(!1),right:yi(!0)}.left;At({target:"Array",proto:!0,forced:Vt("reduce")},{reduce:function(t){return bi(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var mi=R.f,xi=Function.prototype,Ei=xi.toString,wi=/^\s*function ([^ (]*)/;!l||"name"in xi||mi(xi,"name",{configurable:!0,get:function(){try{return Ei.call(this).match(wi)[1]}catch(t){return""}}});var Oi,_i,Si=function(){var t=T(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ai=RegExp.prototype.exec,ki=String.prototype.replace,Li=Ai,Mi=(Oi=/a/,_i=/b*/g,Ai.call(Oi,"a"),Ai.call(_i,"a"),0!==Oi.lastIndex||0!==_i.lastIndex),Ti=void 0!==/()??/.exec("")[1];(Mi||Ti)&&(Li=function(t){var e,r,n,i,o=this;return Ti&&(r=new RegExp("^"+o.source+"$(?!\\s)",Si.call(o))),Mi&&(e=o.lastIndex),n=Ai.call(o,t),Mi&&n&&(o.lastIndex=o.global?n.index+n[0].length:e),Ti&&n&&n.length>1&&ki.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n});var ji=Li;At({target:"RegExp",proto:!0,forced:/./.exec!==ji},{exec:ji});var Ri=zt("species"),Wi=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),zi=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),Ci=function(t,e,r,n){var i=zt(t),o=!c((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),s=o&&!c((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[Ri]=function(){return r}),r[i](""),!e}));if(!o||!s||"replace"===t&&!Wi||"split"===t&&!zi){var a=/./[i],l=r(i,""[t],(function(t,e,r,n,i){return e.exec===ji?o&&!i?{done:!0,value:a.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),u=l[0],f=l[1];J(String.prototype,t,u),J(RegExp.prototype,i,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}),n&&W(RegExp.prototype[i],"sham",!0)}},Ni=Ue.charAt,Ii=function(t,e,r){return e+(r?Ni(t,e).length:1)},Di=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==v(t))throw TypeError("RegExp#exec called on incompatible receiver");return ji.call(t,e)};Ci("match",1,(function(t,e,r){return[function(e){var r=b(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=T(t),o=String(this);if(!i.global)return Di(i,o);var s=i.unicode;i.lastIndex=0;for(var a,c=[],l=0;null!==(a=Di(i,o));){var u=String(a[0]);c[l]=u,""===u&&(i.lastIndex=Ii(o,st(i.lastIndex),s)),l++}return 0===l?null:c}]}));var Pi=Math.max,Vi=Math.min,Fi=Math.floor,Bi=/\$([$&'`]|\d\d?|<[^>]*>)/g,Hi=/\$([$&'`]|\d\d?)/g;Ci("replace",2,(function(t,e,r){return[function(r,n){var i=b(this),o=null==r?void 0:r[t];return void 0!==o?o.call(r,i,n):e.call(String(i),r,n)},function(t,i){var o=r(e,t,this,i);if(o.done)return o.value;var s=T(t),a=String(this),c="function"==typeof i;c||(i=String(i));var l=s.global;if(l){var u=s.unicode;s.lastIndex=0}for(var f=[];;){var h=Di(s,a);if(null===h)break;if(f.push(h),!l)break;""===String(h[0])&&(s.lastIndex=Ii(a,st(s.lastIndex),u))}for(var d,p="",v=0,g=0;g<f.length;g++){h=f[g];for(var y=String(h[0]),b=Pi(Vi(it(h.index),a.length),0),m=[],x=1;x<h.length;x++)m.push(void 0===(d=h[x])?d:String(d));var E=h.groups;if(c){var w=[y].concat(m,b,a);void 0!==E&&w.push(E);var O=String(i.apply(void 0,w))}else O=n(y,a,b,m,E,i);b>=v&&(p+=a.slice(v,b)+O,v=b+y.length)}return p+a.slice(v)}];function n(t,r,n,i,o,s){var a=n+t.length,c=i.length,l=Hi;return void 0!==o&&(o=Mt(o),l=Bi),e.call(s,l,(function(e,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(a);case"<":l=o[s.slice(1,-1)];break;default:var u=+s;if(0===u)return e;if(u>c){var f=Fi(u/10);return 0===f?e:f<=c?void 0===i[f-1]?s.charAt(1):i[f-1]+s.charAt(1):e}l=i[u-1]}return void 0===l?"":l}))}}));var qi=function(t){return Array.prototype.reduce.call(t,(function(t,e){var r=e.name.match(/data-simplebar-(.+)/);if(r){var n=r[1].replace(/\W+(.)/g,(function(t,e){return e.toUpperCase()}));switch(e.value){case"true":t[n]=!0;break;case"false":t[n]=!1;break;case void 0:t[n]=!0;break;default:t[n]=e.value}}return t}),{})};function $i(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:window}function Xi(t){return t&&t.ownerDocument?t.ownerDocument:document}var Yi=function(){function t(e,r){var n=this;this.onScroll=function(){var t=$i(n.el);n.scrollXTicking||(t.requestAnimationFrame(n.scrollX),n.scrollXTicking=!0),n.scrollYTicking||(t.requestAnimationFrame(n.scrollY),n.scrollYTicking=!0)},this.scrollX=function(){n.axis.x.isOverflowing&&(n.showScrollbar("x"),n.positionScrollbar("x")),n.scrollXTicking=!1},this.scrollY=function(){n.axis.y.isOverflowing&&(n.showScrollbar("y"),n.positionScrollbar("y")),n.scrollYTicking=!1},this.onMouseEnter=function(){n.showScrollbar("x"),n.showScrollbar("y")},this.onMouseMove=function(t){n.mouseX=t.clientX,n.mouseY=t.clientY,(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&n.onMouseMoveForAxis("x"),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&n.onMouseMoveForAxis("y")},this.onMouseLeave=function(){n.onMouseMove.cancel(),(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&n.onMouseLeaveForAxis("x"),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&n.onMouseLeaveForAxis("y"),n.mouseX=-1,n.mouseY=-1},this.onWindowResize=function(){n.scrollbarWidth=n.getScrollbarWidth(),n.hideNativeScrollbar()},this.hideScrollbars=function(){n.axis.x.track.rect=n.axis.x.track.el.getBoundingClientRect(),n.axis.y.track.rect=n.axis.y.track.el.getBoundingClientRect(),n.isWithinBounds(n.axis.y.track.rect)||(n.axis.y.scrollbar.el.classList.remove(n.classNames.visible),n.axis.y.isVisible=!1),n.isWithinBounds(n.axis.x.track.rect)||(n.axis.x.scrollbar.el.classList.remove(n.classNames.visible),n.axis.x.isVisible=!1)},this.onPointerEvent=function(t){var e,r;n.axis.x.track.rect=n.axis.x.track.el.getBoundingClientRect(),n.axis.y.track.rect=n.axis.y.track.el.getBoundingClientRect(),(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&(e=n.isWithinBounds(n.axis.x.track.rect)),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&(r=n.isWithinBounds(n.axis.y.track.rect)),(e||r)&&(t.preventDefault(),t.stopPropagation(),"mousedown"===t.type&&(e&&(n.axis.x.scrollbar.rect=n.axis.x.scrollbar.el.getBoundingClientRect(),n.isWithinBounds(n.axis.x.scrollbar.rect)?n.onDragStart(t,"x"):n.onTrackClick(t,"x")),r&&(n.axis.y.scrollbar.rect=n.axis.y.scrollbar.el.getBoundingClientRect(),n.isWithinBounds(n.axis.y.scrollbar.rect)?n.onDragStart(t,"y"):n.onTrackClick(t,"y"))))},this.drag=function(e){var r=n.axis[n.draggedAxis].track,i=r.rect[n.axis[n.draggedAxis].sizeAttr],o=n.axis[n.draggedAxis].scrollbar,s=n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],a=parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr],10);e.preventDefault(),e.stopPropagation();var c=(("y"===n.draggedAxis?e.pageY:e.pageX)-r.rect[n.axis[n.draggedAxis].offsetAttr]-n.axis[n.draggedAxis].dragOffset)/(i-o.size)*(s-a);"x"===n.draggedAxis&&(c=n.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?c-(i+o.size):c,c=n.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-c:c),n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr]=c},this.onEndDrag=function(t){var e=Xi(n.el),r=$i(n.el);t.preventDefault(),t.stopPropagation(),n.el.classList.remove(n.classNames.dragging),e.removeEventListener("mousemove",n.drag,!0),e.removeEventListener("mouseup",n.onEndDrag,!0),n.removePreventClickId=r.setTimeout((function(){e.removeEventListener("click",n.preventClick,!0),e.removeEventListener("dblclick",n.preventClick,!0),n.removePreventClickId=null}))},this.preventClick=function(t){t.preventDefault(),t.stopPropagation()},this.el=e,this.minScrollbarWidth=20,this.options=Object.assign({},t.defaultOptions,{},r),this.classNames=Object.assign({},t.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,t.instances.has(this.el)||(this.recalculate=Gr(this.recalculate.bind(this),64),this.onMouseMove=Gr(this.onMouseMove.bind(this),64),this.hideScrollbars=dn(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=dn(this.onWindowResize.bind(this),64,{leading:!0}),t.getRtlHelpers=Hn(t.getRtlHelpers),this.init())}t.getRtlHelpers=function(){var e=document.createElement("div");e.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var r=e.firstElementChild;document.body.appendChild(r);var n=r.firstElementChild;r.scrollLeft=0;var i=t.getOffset(r),o=t.getOffset(n);r.scrollLeft=999;var s=t.getOffset(n);return{isRtlScrollingInverted:i.left!==o.left&&o.left-s.left!=0,isRtlScrollbarInverted:i.left!==o.left}},t.getOffset=function(t){var e=t.getBoundingClientRect(),r=Xi(t),n=$i(t);return{top:e.top+(n.pageYOffset||r.documentElement.scrollTop),left:e.left+(n.pageXOffset||r.documentElement.scrollLeft)}};var e=t.prototype;return e.init=function(){t.instances.set(this.el,this),Yt&&(this.initDOM(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.initDOM=function(){var t=this;if(Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(t.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var e=document.createElement("div"),r=document.createElement("div");e.classList.add(this.classNames.track),r.classList.add(this.classNames.scrollbar),e.appendChild(r),this.axis.x.track.el=e.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=e.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},e.initListeners=function(){var t=this,e=$i(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){t.el.addEventListener(e,t.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){t.el.addEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize);var r=!1,n=e.ResizeObserver||di;this.resizeObserver=new n((function(){r&&t.recalculate()})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame((function(){r=!0})),this.mutationObserver=new e.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},e.recalculate=function(){var t=$i(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var e=this.heightAutoObserverEl.offsetHeight<=1,r=this.heightAutoObserverEl.offsetWidth<=1,n=this.contentEl.offsetWidth,i=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,s=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var a=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=r?n+"px":"auto",this.placeholderEl.style.height=a+"px";var l=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=c>n,this.axis.y.isOverflowing=a>l,this.axis.x.isOverflowing="hidden"!==o&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==s&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var u=this.axis.x.isOverflowing?this.scrollbarWidth:0,f=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>i-f,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>l-u,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},e.getScrollbarSize=function(t){if(void 0===t&&(t="y"),!this.axis[t].isOverflowing)return 0;var e,r=this.contentEl[this.axis[t].scrollSizeAttr],n=this.axis[t].track.el[this.axis[t].offsetSizeAttr],i=n/r;return e=Math.max(~~(i*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(e=Math.min(e,this.options.scrollbarMaxSize)),e},e.positionScrollbar=function(e){if(void 0===e&&(e="y"),this.axis[e].isOverflowing){var r=this.contentWrapperEl[this.axis[e].scrollSizeAttr],n=this.axis[e].track.el[this.axis[e].offsetSizeAttr],i=parseInt(this.elStyles[this.axis[e].sizeAttr],10),o=this.axis[e].scrollbar,s=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=(s="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-s:s)/(r-i),c=~~((n-o.size)*a);c="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?c+(n-o.size):c,o.el.style.transform="x"===e?"translate3d("+c+"px, 0, 0)":"translate3d(0, "+c+"px, 0)"}},e.toggleTrackVisibility=function(t){void 0===t&&(t="y");var e=this.axis[t].track.el,r=this.axis[t].scrollbar.el;this.axis[t].isOverflowing||this.axis[t].forceVisible?(e.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll"):(e.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden"),this.axis[t].isOverflowing?r.style.display="block":r.style.display="none"},e.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},e.onMouseMoveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.rect=this.axis[t].track.el.getBoundingClientRect(),this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[t].scrollbar.rect)?this.axis[t].scrollbar.el.classList.add(this.classNames.hover):this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[t].track.rect)?(this.showScrollbar(t),this.axis[t].track.el.classList.add(this.classNames.hover)):this.axis[t].track.el.classList.remove(this.classNames.hover)},e.onMouseLeaveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.el.classList.remove(this.classNames.hover),this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)},e.showScrollbar=function(t){void 0===t&&(t="y");var e=this.axis[t].scrollbar.el;this.axis[t].isVisible||(e.classList.add(this.classNames.visible),this.axis[t].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},e.onDragStart=function(t,e){void 0===e&&(e="y");var r=Xi(this.el),n=$i(this.el),i=this.axis[e].scrollbar,o="y"===e?t.pageY:t.pageX;this.axis[e].dragOffset=o-i.rect[this.axis[e].offsetAttr],this.draggedAxis=e,this.el.classList.add(this.classNames.dragging),r.addEventListener("mousemove",this.drag,!0),r.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(r.addEventListener("click",this.preventClick,!0),r.addEventListener("dblclick",this.preventClick,!0)):(n.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.onTrackClick=function(t,e){var r=this;if(void 0===e&&(e="y"),this.options.clickOnTrack){var n=$i(this.el);this.axis[e].scrollbar.rect=this.axis[e].scrollbar.el.getBoundingClientRect();var i=this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],o=parseInt(this.elStyles[this.axis[e].sizeAttr],10),s=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=("y"===e?this.mouseY-i:this.mouseX-i)<0?-1:1,c=-1===a?s-o:s+o;!function t(){var i,o;-1===a?s>c&&(s-=r.options.clickOnTrackSpeed,r.contentWrapperEl.scrollTo(((i={})[r.axis[e].offsetAttr]=s,i)),n.requestAnimationFrame(t)):s<c&&(s+=r.options.clickOnTrackSpeed,r.contentWrapperEl.scrollTo(((o={})[r.axis[e].offsetAttr]=s,o)),n.requestAnimationFrame(t))}()}},e.getContentElement=function(){return this.contentEl},e.getScrollElement=function(){return this.contentWrapperEl},e.getScrollbarWidth=function(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:gi()}catch(t){return gi()}},e.removeListeners=function(){var t=this,e=$i(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){t.el.removeEventListener(e,t.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){t.el.removeEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},e.unMount=function(){this.removeListeners(),t.instances.delete(this.el)},e.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},e.findChild=function(t,e){var r=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,(function(t){return r.call(t,e)}))[0]},t}();return Yi.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},Yi.instances=new WeakMap,Yi.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(t){"init"===t.getAttribute("data-simplebar")||Yi.instances.has(t)||new Yi(t,qi(t.attributes))}))},Yi.removeObserver=function(){this.globalObserver.disconnect()},Yi.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(Yi.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},Yi.handleMutations=function(t){t.forEach((function(t){Array.prototype.forEach.call(t.addedNodes,(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?!Yi.instances.has(t)&&new Yi(t,qi(t.attributes)):Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"),(function(t){"init"===t.getAttribute("data-simplebar")||Yi.instances.has(t)||new Yi(t,qi(t.attributes))})))})),Array.prototype.forEach.call(t.removedNodes,(function(t){1===t.nodeType&&(t.hasAttribute('[data-simplebar="init"]')?Yi.instances.has(t)&&Yi.instances.get(t).unMount():Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'),(function(t){Yi.instances.has(t)&&Yi.instances.get(t).unMount()})))}))}))},Yi.getOptions=qi,Yt&&Yi.initHtmlApi(),Yi}));;
/*! For license information please see choices.min.js.LICENSE.txt */
!function(){"use strict";var e={282:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.clearChoices=t.activateChoices=t.filterChoices=t.addChoice=void 0;var n=i(883);t.addChoice=function(e){var t=e.value,i=e.label,r=e.id,s=e.groupId,o=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,h=e.keyCode;return{type:n.ACTION_TYPES.ADD_CHOICE,value:t,label:i,id:r,groupId:s,disabled:o,elementId:a,customProperties:c,placeholder:l,keyCode:h}},t.filterChoices=function(e){return{type:n.ACTION_TYPES.FILTER_CHOICES,results:e}},t.activateChoices=function(e){return void 0===e&&(e=!0),{type:n.ACTION_TYPES.ACTIVATE_CHOICES,active:e}},t.clearChoices=function(){return{type:n.ACTION_TYPES.CLEAR_CHOICES}}},783:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.addGroup=void 0;var n=i(883);t.addGroup=function(e){var t=e.value,i=e.id,r=e.active,s=e.disabled;return{type:n.ACTION_TYPES.ADD_GROUP,value:t,id:i,active:r,disabled:s}}},464:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.highlightItem=t.removeItem=t.addItem=void 0;var n=i(883);t.addItem=function(e){var t=e.value,i=e.label,r=e.id,s=e.choiceId,o=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:n.ACTION_TYPES.ADD_ITEM,value:t,label:i,id:r,choiceId:s,groupId:o,customProperties:a,placeholder:c,keyCode:l}},t.removeItem=function(e,t){return{type:n.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:n.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},137:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.setIsLoading=t.resetTo=t.clearAll=void 0;var n=i(883);t.clearAll=function(){return{type:n.ACTION_TYPES.CLEAR_ALL}},t.resetTo=function(e){return{type:n.ACTION_TYPES.RESET_TO,state:e}},t.setIsLoading=function(e){return{type:n.ACTION_TYPES.SET_IS_LOADING,isLoading:e}}},373:function(e,t,i){var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,r=0,s=t.length;r<s;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=r(i(996)),o=r(i(221)),a=i(282),c=i(783),l=i(464),h=i(137),u=i(520),d=i(883),p=i(789),f=i(799),m=i(655),v=r(i(744)),g=r(i(686)),_="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,y={},E=function(){function e(t,i){void 0===t&&(t="[data-choice]"),void 0===i&&(i={});var r=this;void 0===i.allowHTML&&console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."),this.config=s.default.all([p.DEFAULT_CONFIG,e.defaults.options,i],{arrayMerge:function(e,t){return n([],t,!0)}});var o=(0,f.diff)(this.config,p.DEFAULT_CONFIG);o.length&&console.warn("Unknown config option(s) passed",o.join(", "));var a="string"==typeof t?document.querySelector(t):t;if(!(a instanceof HTMLInputElement||a instanceof HTMLSelectElement))throw TypeError("Expected one of the following types text|select-one|select-multiple");if(this._isTextElement=a.type===d.TEXT_TYPE,this._isSelectOneElement=a.type===d.SELECT_ONE_TYPE,this._isSelectMultipleElement=a.type===d.SELECT_MULTIPLE_TYPE,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this.config.searchEnabled=this._isSelectMultipleElement||this.config.searchEnabled,["auto","always"].includes("".concat(this.config.renderSelectedChoices))||(this.config.renderSelectedChoices="auto"),i.addItemFilter&&"function"!=typeof i.addItemFilter){var c=i.addItemFilter instanceof RegExp?i.addItemFilter:new RegExp(i.addItemFilter);this.config.addItemFilter=c.test.bind(c)}if(this._isTextElement?this.passedElement=new u.WrappedInput({element:a,classNames:this.config.classNames,delimiter:this.config.delimiter}):this.passedElement=new u.WrappedSelect({element:a,classNames:this.config.classNames,template:function(e){return r._templates.option(e)}}),this.initialised=!1,this._store=new v.default,this._initialState=m.defaultState,this._currentState=m.defaultState,this._prevState=m.defaultState,this._currentValue="",this._canSearch=!!this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=(0,f.generateId)(this.passedElement.element,"choices-"),this._direction=this.passedElement.dir,!this._direction){var l=window.getComputedStyle(this.passedElement.element).direction;l!==window.getComputedStyle(document.documentElement).direction&&(this._direction=l)}if(this._idNames={itemChoice:"item-choice"},this._isSelectElement&&(this._presetGroups=this.passedElement.optionGroups,this._presetOptions=this.passedElement.options),this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&this._isTextElement){var h=this.passedElement.value.split(this.config.delimiter);this._presetItems=this._presetItems.concat(h)}if(this.passedElement.options&&this.passedElement.options.forEach((function(e){r._presetChoices.push({value:e.value,label:e.innerHTML,selected:!!e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:""===e.value||e.hasAttribute("placeholder"),customProperties:(0,f.parseCustomProperties)(e.dataset.customProperties)})})),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onSelectKey=this._onSelectKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive)return this.config.silent||console.warn("Trying to initialise Choices on element already initialised",{element:t}),void(this.initialised=!0);this.init()}return Object.defineProperty(e,"defaults",{get:function(){return Object.preventExtensions({get options(){return y},get templates(){return g.default}})},enumerable:!1,configurable:!0}),e.prototype.init=function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&"function"==typeof e&&e.call(this)}},e.prototype.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this.clearStore(),this._isSelectElement&&(this.passedElement.options=this._presetOptions),this._templates=g.default,this.initialised=!1)},e.prototype.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},e.prototype.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},e.prototype.highlightItem=function(e,t){if(void 0===t&&(t=!0),!e||!e.id)return this;var i=e.id,n=e.groupId,r=void 0===n?-1:n,s=e.value,o=void 0===s?"":s,a=e.label,c=void 0===a?"":a,h=r>=0?this._store.getGroupById(r):null;return this._store.dispatch((0,l.highlightItem)(i,!0)),t&&this.passedElement.triggerEvent(d.EVENTS.highlightItem,{id:i,value:o,label:c,groupValue:h&&h.value?h.value:null}),this},e.prototype.unhighlightItem=function(e){if(!e||!e.id)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,r=e.value,s=void 0===r?"":r,o=e.label,a=void 0===o?"":o,c=n>=0?this._store.getGroupById(n):null;return this._store.dispatch((0,l.highlightItem)(t,!1)),this.passedElement.triggerEvent(d.EVENTS.highlightItem,{id:t,value:s,label:a,groupValue:c&&c.value?c.value:null}),this},e.prototype.highlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.highlightItem(t)})),this},e.prototype.unhighlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.unhighlightItem(t)})),this},e.prototype.removeActiveItemsByValue=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.value===e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeActiveItems=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.id!==e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeHighlightedItems=function(e){var t=this;return void 0===e&&(e=!1),this._store.highlightedActiveItems.forEach((function(i){t._removeItem(i),e&&t._triggerChange(i.value)})),this},e.prototype.showDropdown=function(e){var t=this;return this.dropdown.isActive||requestAnimationFrame((function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(d.EVENTS.showDropdown,{})})),this},e.prototype.hideDropdown=function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame((function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(d.EVENTS.hideDropdown,{})})),this):this},e.prototype.getValue=function(e){void 0===e&&(e=!1);var t=this._store.activeItems.reduce((function(t,i){var n=e?i.value:i;return t.push(n),t}),[]);return this._isSelectOneElement?t[0]:t},e.prototype.setValue=function(e){var t=this;return this.initialised?(e.forEach((function(e){return t._setChoiceOrItem(e)})),this):this},e.prototype.setChoiceByValue=function(e){var t=this;return!this.initialised||this._isTextElement||(Array.isArray(e)?e:[e]).forEach((function(e){return t._findAndSelectChoiceByValue(e)})),this},e.prototype.setChoices=function(e,t,i,n){var r=this;if(void 0===e&&(e=[]),void 0===t&&(t="value"),void 0===i&&(i="label"),void 0===n&&(n=!1),!this.initialised)throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if("string"!=typeof t||!t)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(n&&this.clearChoices(),"function"==typeof e){var s=e(this);if("function"==typeof Promise&&s instanceof Promise)return new Promise((function(e){return requestAnimationFrame(e)})).then((function(){return r._handleLoadingState(!0)})).then((function(){return s})).then((function(e){return r.setChoices(e,t,i,n)})).catch((function(e){r.config.silent||console.error(e)})).then((function(){return r._handleLoadingState(!1)})).then((function(){return r}));if(!Array.isArray(s))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof s));return this.setChoices(s,t,i,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._startLoading(),e.forEach((function(e){if(e.choices)r._addGroup({id:e.id?parseInt("".concat(e.id),10):null,group:e,valueKey:t,labelKey:i});else{var n=e;r._addChoice({value:n[t],label:n[i],isSelected:!!n.selected,isDisabled:!!n.disabled,placeholder:!!n.placeholder,customProperties:n.customProperties})}})),this._stopLoading(),this},e.prototype.clearChoices=function(){return this._store.dispatch((0,a.clearChoices)()),this},e.prototype.clearStore=function(){return this._store.dispatch((0,h.clearAll)()),this},e.prototype.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0))),this},e.prototype._render=function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}},e.prototype._renderChoices=function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,r=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame((function(){return e.choiceList.scrollToTop()})),i.length>=1&&!this._isSearching){var s=n.filter((function(e){return!0===e.placeholder&&-1===e.groupId}));s.length>=1&&(r=this._createChoicesFragment(s,r)),r=this._createGroupsFragment(i,n,r)}else n.length>=1&&(r=this._createChoicesFragment(n,r));if(r.childNodes&&r.childNodes.length>0){var o=this._store.activeItems,a=this._canAddItem(o,this.input.value);if(a.response)this.choiceList.append(r),this._highlightChoice();else{var c=this._getTemplate("notice",a.notice);this.choiceList.append(c)}}else{var l=void 0;c=void 0,this._isSearching?(c="function"==typeof this.config.noResultsText?this.config.noResultsText():this.config.noResultsText,l=this._getTemplate("notice",c,"no-results")):(c="function"==typeof this.config.noChoicesText?this.config.noChoicesText():this.config.noChoicesText,l=this._getTemplate("notice",c,"no-choices")),this.choiceList.append(l)}},e.prototype._renderItems=function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)},e.prototype._createGroupsFragment=function(e,t,i){var n=this;return void 0===i&&(i=document.createDocumentFragment()),this.config.shouldSort&&e.sort(this.config.sorter),e.forEach((function(e){var r=function(e){return t.filter((function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)}))}(e);if(r.length>=1){var s=n._getTemplate("choiceGroup",e);i.appendChild(s),n._createChoicesFragment(r,i,!0)}})),i},e.prototype._createChoicesFragment=function(e,t,i){var r=this;void 0===t&&(t=document.createDocumentFragment()),void 0===i&&(i=!1);var s=this.config,o=s.renderSelectedChoices,a=s.searchResultLimit,c=s.renderChoiceLimit,l=this._isSearching?f.sortByScore:this.config.sorter,h=function(e){if("auto"!==o||r._isSelectOneElement||!e.selected){var i=r._getTemplate("choice",e,r.config.itemSelectText);t.appendChild(i)}},u=e;"auto"!==o||this._isSelectOneElement||(u=e.filter((function(e){return!e.selected})));var d=u.reduce((function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e}),{placeholderChoices:[],normalChoices:[]}),p=d.placeholderChoices,m=d.normalChoices;(this.config.shouldSort||this._isSearching)&&m.sort(l);var v=u.length,g=this._isSelectOneElement?n(n([],p,!0),m,!0):m;this._isSearching?v=a:c&&c>0&&!i&&(v=c);for(var _=0;_<v;_+=1)g[_]&&h(g[_]);return t},e.prototype._createItemsFragment=function(e,t){var i=this;void 0===t&&(t=document.createDocumentFragment());var n=this.config,r=n.shouldSortItems,s=n.sorter,o=n.removeItemButton;return r&&!this._isSelectOneElement&&e.sort(s),this._isTextElement?this.passedElement.value=e.map((function(e){return e.value})).join(this.config.delimiter):this.passedElement.options=e,e.forEach((function(e){var n=i._getTemplate("item",e,o);t.appendChild(n)})),t},e.prototype._triggerChange=function(e){null!=e&&this.passedElement.triggerEvent(d.EVENTS.change,{value:e})},e.prototype._selectPlaceholderChoice=function(e){this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value)},e.prototype._handleButtonAction=function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode&&t.parentNode.dataset.id,n=i&&e.find((function(e){return e.id===parseInt(i,10)}));n&&(this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._store.placeholderChoice&&this._selectPlaceholderChoice(this._store.placeholderChoice))}},e.prototype._handleItemAction=function(e,t,i){var n=this;if(void 0===i&&(i=!1),e&&t&&this.config.removeItems&&!this._isSelectOneElement){var r=t.dataset.id;e.forEach((function(e){e.id!==parseInt("".concat(r),10)||e.highlighted?!i&&e.highlighted&&n.unhighlightItem(e):n.highlightItem(e)})),this.input.focus()}},e.prototype._handleChoiceAction=function(e,t){if(e&&t){var i=t.dataset.id,n=i&&this._store.getChoiceById(i);if(n){var r=e[0]&&e[0].keyCode?e[0].keyCode:void 0,s=this.dropdown.isActive;n.keyCode=r,this.passedElement.triggerEvent(d.EVENTS.choice,{choice:n}),n.selected||n.disabled||this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value)),this.clearInput(),s&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},e.prototype._handleBackspace=function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some((function(e){return e.highlighted}));this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}},e.prototype._startLoading=function(){this._store.dispatch((0,h.setIsLoading)(!0))},e.prototype._stopLoading=function(){this._store.dispatch((0,h.setIsLoading)(!1))},e.prototype._handleLoadingState=function(e){void 0===e&&(e=!0);var t=this.itemList.getChild(".".concat(this.config.classNames.placeholder));e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText))&&this.itemList.append(t):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t&&(t.innerHTML=this._placeholderValue||""):this.input.placeholder=this._placeholderValue||"")},e.prototype._handleSearch=function(e){if(this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,r=i.searchChoices,s=t.some((function(e){return!e.active}));if(null!=e&&e.length>=n){var o=r?this._searchChoices(e):0;this.passedElement.triggerEvent(d.EVENTS.search,{value:e,resultCount:o})}else s&&(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0)))}},e.prototype._canAddItem=function(e,t){var i=!0,n="function"==typeof this.config.addItemText?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var r=(0,f.existsInArray)(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n="function"==typeof this.config.maxItemText?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&r&&i&&(i=!1,n="function"==typeof this.config.uniqueItemText?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&"function"==typeof this.config.addItemFilter&&!this.config.addItemFilter(t)&&(i=!1,n="function"==typeof this.config.customAddItemText?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}},e.prototype._searchChoices=function(e){var t="string"==typeof e?e.trim():e,i="string"==typeof this._currentValue?this._currentValue.trim():this._currentValue;if(t.length<1&&t==="".concat(i," "))return 0;var r=this._store.searchableChoices,s=t,c=Object.assign(this.config.fuseOptions,{keys:n([],this.config.searchFields,!0),includeMatches:!0}),l=new o.default(r,c).search(s);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch((0,a.filterChoices)(l)),l.length},e.prototype._addEventListeners=function(){var e=document.documentElement;e.addEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.addEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus,{passive:!0}),this.containerOuter.element.addEventListener("blur",this._onBlur,{passive:!0})),this.input.element.addEventListener("keyup",this._onKeyUp,{passive:!0}),this.input.element.addEventListener("focus",this._onFocus,{passive:!0}),this.input.element.addEventListener("blur",this._onBlur,{passive:!0}),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},e.prototype._removeEventListeners=function(){var e=document.documentElement;e.removeEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.removeEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("keyup",this._onKeyUp),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},e.prototype._onKeyDown=function(e){var t=e.keyCode,i=this._store.activeItems,n=this.input.isFocussed,r=this.dropdown.isActive,s=this.itemList.hasChildren(),o=String.fromCharCode(t),a=/[^\x00-\x1F]/.test(o),c=d.KEY_CODES.BACK_KEY,l=d.KEY_CODES.DELETE_KEY,h=d.KEY_CODES.ENTER_KEY,u=d.KEY_CODES.A_KEY,p=d.KEY_CODES.ESC_KEY,f=d.KEY_CODES.UP_KEY,m=d.KEY_CODES.DOWN_KEY,v=d.KEY_CODES.PAGE_UP_KEY,g=d.KEY_CODES.PAGE_DOWN_KEY;switch(this._isTextElement||r||!a||(this.showDropdown(),this.input.isFocussed||(this.input.value+=e.key.toLowerCase())),t){case u:return this._onSelectKey(e,s);case h:return this._onEnterKey(e,i,r);case p:return this._onEscapeKey(r);case f:case v:case m:case g:return this._onDirectionKey(e,r);case l:case c:return this._onDeleteKey(e,i,n)}},e.prototype._onKeyUp=function(e){var t=e.target,i=e.keyCode,n=this.input.value,r=this._store.activeItems,s=this._canAddItem(r,n),o=d.KEY_CODES.BACK_KEY,c=d.KEY_CODES.DELETE_KEY;if(this._isTextElement)if(s.notice&&n){var l=this._getTemplate("notice",s.notice);this.dropdown.element.innerHTML=l.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0);else{var h=(i===o||i===c)&&t&&!t.value,u=!this._isTextElement&&this._isSearching,p=this._canSearch&&s.response;h&&u?(this._isSearching=!1,this._store.dispatch((0,a.activateChoices)(!0))):p&&this._handleSearch(this.input.rawValue)}this._canSearch=this.config.searchEnabled},e.prototype._onSelectKey=function(e,t){var i=e.ctrlKey,n=e.metaKey;(i||n)&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())},e.prototype._onEnterKey=function(e,t,i){var n=e.target,r=d.KEY_CODES.ENTER_KEY,s=n&&n.hasAttribute("data-button");if(this._isTextElement&&n&&n.value){var o=this.input.value;this._canAddItem(t,o).response&&(this.hideDropdown(!0),this._addItem({value:o}),this._triggerChange(o),this.clearInput())}if(s&&(this._handleButtonAction(t,n),e.preventDefault()),i){var a=this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));a&&(t[0]&&(t[0].keyCode=r),this._handleChoiceAction(t,a)),e.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),e.preventDefault())},e.prototype._onEscapeKey=function(e){e&&(this.hideDropdown(!0),this.containerOuter.focus())},e.prototype._onDirectionKey=function(e,t){var i=e.keyCode,n=e.metaKey,r=d.KEY_CODES.DOWN_KEY,s=d.KEY_CODES.PAGE_UP_KEY,o=d.KEY_CODES.PAGE_DOWN_KEY;if(t||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var a=i===r||i===o?1:-1,c="[data-choice-selectable]",l=void 0;if(n||i===o||i===s)l=a>0?this.dropdown.element.querySelector("".concat(c,":last-of-type")):this.dropdown.element.querySelector(c);else{var h=this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));l=h?(0,f.getAdjacentEl)(h,c,a):this.dropdown.element.querySelector(c)}l&&((0,f.isScrolledIntoView)(l,this.choiceList.element,a)||this.choiceList.scrollToChildElement(l,a),this._highlightChoice(l)),e.preventDefault()}},e.prototype._onDeleteKey=function(e,t,i){var n=e.target;this._isSelectOneElement||n.value||!i||(this._handleBackspace(t),e.preventDefault())},e.prototype._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},e.prototype._onTouchEnd=function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation()),this._wasTap=!0},e.prototype._onMouseDown=function(e){var t=e.target;if(t instanceof HTMLElement){if(_&&this.choiceList.element.contains(t)){var i=this.choiceList.element.firstElementChild,n="ltr"===this._direction?e.offsetX>=i.offsetWidth:e.offsetX<i.offsetLeft;this._isScrollingOnIe=n}if(t!==this.input.element){var r=t.closest("[data-button],[data-item],[data-choice]");if(r instanceof HTMLElement){var s=e.shiftKey,o=this._store.activeItems,a=r.dataset;"button"in a?this._handleButtonAction(o,r):"item"in a?this._handleItemAction(o,r,s):"choice"in a&&this._handleChoiceAction(o,r)}e.preventDefault()}}},e.prototype._onMouseOver=function(e){var t=e.target;t instanceof HTMLElement&&"choice"in t.dataset&&this._highlightChoice(t)},e.prototype._onClick=function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems.length>0&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))},e.prototype._onFocus=function(e){var t,i=this,n=e.target;n&&this.containerOuter.element.contains(n)&&((t={})[d.TEXT_TYPE]=function(){n===i.input.element&&i.containerOuter.addFocusState()},t[d.SELECT_ONE_TYPE]=function(){i.containerOuter.addFocusState(),n===i.input.element&&i.showDropdown(!0)},t[d.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.showDropdown(!0),i.containerOuter.addFocusState())},t)[this.passedElement.element.type]()},e.prototype._onBlur=function(e){var t,i=this,n=e.target;if(n&&this.containerOuter.element.contains(n)&&!this._isScrollingOnIe){var r=this._store.activeItems.some((function(e){return e.highlighted}));((t={})[d.TEXT_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),r&&i.unhighlightAll(),i.hideDropdown(!0))},t[d.SELECT_ONE_TYPE]=function(){i.containerOuter.removeFocusState(),(n===i.input.element||n===i.containerOuter.element&&!i._canSearch)&&i.hideDropdown(!0)},t[d.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),i.hideDropdown(!0),r&&i.unhighlightAll())},t)[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()},e.prototype._onFormReset=function(){this._store.dispatch((0,h.resetTo)(this._initialState))},e.prototype._highlightChoice=function(e){var t=this;void 0===e&&(e=null);var i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){var n=e;Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach((function(e){e.classList.remove(t.config.classNames.highlightedState),e.setAttribute("aria-selected","false")})),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(d.EVENTS.highlightChoice,{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}},e.prototype._addItem=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,r=e.choiceId,s=void 0===r?-1:r,o=e.groupId,a=void 0===o?-1:o,c=e.customProperties,h=void 0===c?{}:c,u=e.placeholder,p=void 0!==u&&u,f=e.keyCode,m=void 0===f?-1:f,v="string"==typeof t?t.trim():t,g=this._store.items,_=n||v,y=s||-1,E=a>=0?this._store.getGroupById(a):null,b=g?g.length+1:1;this.config.prependValue&&(v=this.config.prependValue+v.toString()),this.config.appendValue&&(v+=this.config.appendValue.toString()),this._store.dispatch((0,l.addItem)({value:v,label:_,id:b,choiceId:y,groupId:a,customProperties:h,placeholder:p,keyCode:m})),this._isSelectOneElement&&this.removeActiveItems(b),this.passedElement.triggerEvent(d.EVENTS.addItem,{id:b,value:v,label:_,customProperties:h,groupValue:E&&E.value?E.value:null,keyCode:m})},e.prototype._removeItem=function(e){var t=e.id,i=e.value,n=e.label,r=e.customProperties,s=e.choiceId,o=e.groupId,a=o&&o>=0?this._store.getGroupById(o):null;t&&s&&(this._store.dispatch((0,l.removeItem)(t,s)),this.passedElement.triggerEvent(d.EVENTS.removeItem,{id:t,value:i,label:n,customProperties:r,groupValue:a&&a.value?a.value:null}))},e.prototype._addChoice=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,r=e.isSelected,s=void 0!==r&&r,o=e.isDisabled,c=void 0!==o&&o,l=e.groupId,h=void 0===l?-1:l,u=e.customProperties,d=void 0===u?{}:u,p=e.placeholder,f=void 0!==p&&p,m=e.keyCode,v=void 0===m?-1:m;if(null!=t){var g=this._store.choices,_=n||t,y=g?g.length+1:1,E="".concat(this._baseId,"-").concat(this._idNames.itemChoice,"-").concat(y);this._store.dispatch((0,a.addChoice)({id:y,groupId:h,elementId:E,value:t,label:_,disabled:c,customProperties:d,placeholder:f,keyCode:v})),s&&this._addItem({value:t,label:_,choiceId:y,customProperties:d,placeholder:f,keyCode:v})}},e.prototype._addGroup=function(e){var t=this,i=e.group,n=e.id,r=e.valueKey,s=void 0===r?"value":r,o=e.labelKey,a=void 0===o?"label":o,l=(0,f.isType)("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),h=n||Math.floor((new Date).valueOf()*Math.random()),u=!!i.disabled&&i.disabled;l?(this._store.dispatch((0,c.addGroup)({value:i.label,id:h,active:!0,disabled:u})),l.forEach((function(e){var i=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[s],label:(0,f.isType)("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:h,customProperties:e.customProperties,placeholder:e.placeholder})}))):this._store.dispatch((0,c.addGroup)({value:i.label,id:i.id,active:!1,disabled:i.disabled}))},e.prototype._getTemplate=function(e){for(var t,i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return(t=this._templates[e]).call.apply(t,n([this,this.config],i,!1))},e.prototype._createTemplates=function(){var e=this.config.callbackOnCreateTemplates,t={};e&&"function"==typeof e&&(t=e.call(this,f.strToEl)),this._templates=(0,s.default)(g.default,t)},e.prototype._createElements=function(){this.containerOuter=new u.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type,this.config.labelId),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new u.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new u.Input({element:this._getTemplate("input",this._placeholderValue),classNames:this.config.classNames,type:this.passedElement.element.type,preventPaste:!this.config.paste}),this.choiceList=new u.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new u.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new u.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})},e.prototype._createStructure=function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth()),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement&&(this._highlightPosition=0,this._isSearching=!1,this._startLoading(),this._presetGroups.length?this._addPredefinedGroups(this._presetGroups):this._addPredefinedChoices(this._presetChoices),this._stopLoading()),this._isTextElement&&this._addPredefinedItems(this._presetItems)},e.prototype._addPredefinedGroups=function(e){var t=this,i=this.passedElement.placeholderOption;i&&i.parentNode&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),e.forEach((function(e){return t._addGroup({group:e,id:e.id||null})}))},e.prototype._addPredefinedChoices=function(e){var t=this;this.config.shouldSort&&e.sort(this.config.sorter);var i=e.some((function(e){return e.selected})),n=e.findIndex((function(e){return void 0===e.disabled||!e.disabled}));e.forEach((function(e,r){var s=e.value,o=void 0===s?"":s,a=e.label,c=e.customProperties,l=e.placeholder;if(t._isSelectElement)if(e.choices)t._addGroup({group:e,id:e.id||null});else{var h=!(!t._isSelectOneElement||i||r!==n)||e.selected,u=e.disabled;t._addChoice({value:o,label:a,isSelected:!!h,isDisabled:!!u,placeholder:!!l,customProperties:c})}else t._addChoice({value:o,label:a,isSelected:!!e.selected,isDisabled:!!e.disabled,placeholder:!!e.placeholder,customProperties:c})}))},e.prototype._addPredefinedItems=function(e){var t=this;e.forEach((function(e){"object"==typeof e&&e.value&&t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}),"string"==typeof e&&t._addItem({value:e})}))},e.prototype._setChoiceOrItem=function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[(0,f.getType)(e).toLowerCase()]()},e.prototype._findAndSelectChoiceByValue=function(e){var t=this,i=this._store.choices.find((function(i){return t.config.valueComparer(i.value,e)}));i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})},e.prototype._generatePlaceholderValue=function(){if(this._isSelectElement&&this.passedElement.placeholderOption){var e=this.passedElement.placeholderOption;return e?e.text:null}var t=this.config,i=t.placeholder,n=t.placeholderValue,r=this.passedElement.element.dataset;if(i){if(n)return n;if(r.placeholder)return r.placeholder}return null},e}();t.default=E},613:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),r=i(883),s=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,r=e.position;this.element=t,this.classNames=n,this.type=i,this.position=r,this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return e.prototype.addEventListeners=function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)},e.prototype.removeEventListeners=function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.shouldFlip=function(e){if("number"!=typeof e)return!1;var t=!1;return"auto"===this.position?t=!window.matchMedia("(min-height: ".concat(e+1,"px)")).matches:"top"===this.position&&(t=!0),t},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype.open=function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)},e.prototype.close=function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.addFocusState=function(){this.element.classList.add(this.classNames.focusState)},e.prototype.removeFocusState=function(){this.element.classList.remove(this.classNames.focusState)},e.prototype.enable=function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===r.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},e.prototype.disable=function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===r.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},e.prototype.wrap=function(e){(0,n.wrap)(e,this.element)},e.prototype.unwrap=function(e){this.element.parentNode&&(this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element))},e.prototype.addLoadingState=function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},e.prototype.removeLoadingState=function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=s},217:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){var t=e.element,i=e.type,n=e.classNames;this.element=t,this.classNames=n,this.type=i,this.isActive=!1}return Object.defineProperty(e.prototype,"distanceFromTopWindow",{get:function(){return this.element.getBoundingClientRect().bottom},enumerable:!1,configurable:!0}),e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.show=function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},e.prototype.hide=function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},e}();t.default=i},520:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WrappedSelect=t.WrappedInput=t.List=t.Input=t.Container=t.Dropdown=void 0;var r=n(i(217));t.Dropdown=r.default;var s=n(i(613));t.Container=s.default;var o=n(i(11));t.Input=o.default;var a=n(i(624));t.List=a.default;var c=n(i(541));t.WrappedInput=c.default;var l=n(i(982));t.WrappedSelect=l.default},11:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),r=i(883),s=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,r=e.preventPaste;this.element=t,this.type=i,this.classNames=n,this.preventPaste=r,this.isFocussed=this.element.isEqualNode(document.activeElement),this.isDisabled=t.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return Object.defineProperty(e.prototype,"placeholder",{set:function(e){this.element.placeholder=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return(0,n.sanitise)(this.element.value)},set:function(e){this.element.value=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rawValue",{get:function(){return this.element.value},enumerable:!1,configurable:!0}),e.prototype.addEventListeners=function(){this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("input",this._onInput,{passive:!0}),this.element.addEventListener("focus",this._onFocus,{passive:!0}),this.element.addEventListener("blur",this._onBlur,{passive:!0})},e.prototype.removeEventListeners=function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.isDisabled=!0},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.blur=function(){this.isFocussed&&this.element.blur()},e.prototype.clear=function(e){return void 0===e&&(e=!0),this.element.value&&(this.element.value=""),e&&this.setWidth(),this},e.prototype.setWidth=function(){var e=this.element,t=e.style,i=e.value,n=e.placeholder;t.minWidth="".concat(n.length+1,"ch"),t.width="".concat(i.length+1,"ch")},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype._onInput=function(){this.type!==r.SELECT_ONE_TYPE&&this.setWidth()},e.prototype._onPaste=function(e){this.preventPaste&&e.preventDefault()},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=s},624:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(883),r=function(){function e(e){var t=e.element;this.element=t,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}return e.prototype.clear=function(){this.element.innerHTML=""},e.prototype.append=function(e){this.element.appendChild(e)},e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.hasChildren=function(){return this.element.hasChildNodes()},e.prototype.scrollToTop=function(){this.element.scrollTop=0},e.prototype.scrollToChildElement=function(e,t){var i=this;if(e){var n=this.element.offsetHeight,r=this.element.scrollTop+n,s=e.offsetHeight,o=e.offsetTop+s,a=t>0?this.element.scrollTop+o-r:e.offsetTop;requestAnimationFrame((function(){i._animateScroll(a,t)}))}},e.prototype._scrollDown=function(e,t,i){var n=(i-e)/t,r=n>1?n:1;this.element.scrollTop=e+r},e.prototype._scrollUp=function(e,t,i){var n=(e-i)/t,r=n>1?n:1;this.element.scrollTop=e-r},e.prototype._animateScroll=function(e,t){var i=this,r=n.SCROLLING_SPEED,s=this.element.scrollTop,o=!1;t>0?(this._scrollDown(s,r,e),s<e&&(o=!0)):(this._scrollUp(s,r,e),s>e&&(o=!0)),o&&requestAnimationFrame((function(){i._animateScroll(e,t)}))},e}();t.default=r},730:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=i(799),r=function(){function e(e){var t=e.element,i=e.classNames;if(this.element=t,this.classNames=i,!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))throw new TypeError("Invalid element passed");this.isDisabled=!1}return Object.defineProperty(e.prototype,"isActive",{get:function(){return"active"===this.element.dataset.choice},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dir",{get:function(){return this.element.dir},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.value=e},enumerable:!1,configurable:!0}),e.prototype.conceal=function(){this.element.classList.add(this.classNames.input),this.element.hidden=!0,this.element.tabIndex=-1;var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("data-choice","active")},e.prototype.reveal=function(){this.element.classList.remove(this.classNames.input),this.element.hidden=!1,this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},e.prototype.triggerEvent=function(e,t){(0,n.dispatchEvent)(this.element,e,t)},e}();t.default=r},541:function(e,t,i){var n,r=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var i=t.element,n=t.classNames,r=t.delimiter,s=e.call(this,{element:i,classNames:n})||this;return s.delimiter=r,s}return r(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.setAttribute("value",e),this.element.value=e},enumerable:!1,configurable:!0}),t}(s(i(730)).default);t.default=o},982:function(e,t,i){var n,r=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var i=t.element,n=t.classNames,r=t.template,s=e.call(this,{element:i,classNames:n})||this;return s.template=r,s}return r(t,e),Object.defineProperty(t.prototype,"placeholderOption",{get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"optionGroups",{get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return Array.from(this.element.options)},set:function(e){var t=this,i=document.createDocumentFragment();e.forEach((function(e){return n=e,r=t.template(n),void i.appendChild(r);var n,r})),this.appendDocFragment(i)},enumerable:!1,configurable:!0}),t.prototype.appendDocFragment=function(e){this.element.innerHTML="",this.element.appendChild(e)},t}(s(i(730)).default);t.default=o},883:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SCROLLING_SPEED=t.SELECT_MULTIPLE_TYPE=t.SELECT_ONE_TYPE=t.TEXT_TYPE=t.KEY_CODES=t.ACTION_TYPES=t.EVENTS=void 0,t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice",unhighlightItem:"unhighlightItem"},t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL",RESET_TO:"RESET_TO",SET_IS_LOADING:"SET_IS_LOADING"},t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},t.TEXT_TYPE="text",t.SELECT_ONE_TYPE="select-one",t.SELECT_MULTIPLE_TYPE="select-multiple",t.SCROLLING_SPEED=4},789:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CONFIG=t.DEFAULT_CLASSNAMES=void 0;var n=i(799);t.DEFAULT_CLASSNAMES={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",selectedState:"is-selected",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"},t.DEFAULT_CONFIG={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilter:null,removeItems:!0,removeItemButton:!1,editItems:!1,allowHTML:!0,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:n.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'.concat((0,n.sanitise)(e),'"</b>')},maxItemText:function(e){return"Only ".concat(e," values can be added")},valueComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},labelId:"",callbackOnInit:null,callbackOnCreateTemplates:null,classNames:t.DEFAULT_CLASSNAMES}},18:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},978:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},948:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},359:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},285:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},533:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},187:function(e,t,i){var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),r=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),r(i(18),t),r(i(978),t),r(i(948),t),r(i(359),t),r(i(285),t),r(i(533),t),r(i(287),t),r(i(132),t),r(i(837),t),r(i(598),t),r(i(369),t),r(i(37),t),r(i(47),t),r(i(923),t),r(i(876),t)},287:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},132:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},837:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},598:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},37:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},369:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},47:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},923:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},876:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},799:function(e,t){var i;Object.defineProperty(t,"__esModule",{value:!0}),t.parseCustomProperties=t.diff=t.cloneObject=t.existsInArray=t.dispatchEvent=t.sortByScore=t.sortByAlpha=t.strToEl=t.sanitise=t.isScrolledIntoView=t.getAdjacentEl=t.wrap=t.isType=t.getType=t.generateId=t.generateChars=t.getRandomNumber=void 0,t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.generateChars=function(e){return Array.from({length:e},(function(){return(0,t.getRandomNumber)(0,36).toString(36)})).join("")},t.generateId=function(e,i){var n=e.id||e.name&&"".concat(e.name,"-").concat((0,t.generateChars)(2))||(0,t.generateChars)(4);return n=n.replace(/(:|\.|\[|\]|,)/g,""),"".concat(i,"-").concat(n)},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.isType=function(e,i){return null!=i&&(0,t.getType)(i)===e},t.wrap=function(e,t){return void 0===t&&(t=document.createElement("div")),e.parentNode&&(e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)),t.appendChild(e)},t.getAdjacentEl=function(e,t,i){void 0===i&&(i=1);for(var n="".concat(i>0?"next":"previous","ElementSibling"),r=e[n];r;){if(r.matches(t))return r;r=r[n]}return r},t.isScrolledIntoView=function(e,t,i){return void 0===i&&(i=1),!!e&&(i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop)},t.sanitise=function(e){return"string"!=typeof e?e:e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},t.strToEl=(i=document.createElement("div"),function(e){var t=e.trim();i.innerHTML=t;for(var n=i.children[0];i.firstChild;)i.removeChild(i.firstChild);return n}),t.sortByAlpha=function(e,t){var i=e.value,n=e.label,r=void 0===n?i:n,s=t.value,o=t.label,a=void 0===o?s:o;return r.localeCompare(a,[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},t.sortByScore=function(e,t){var i=e.score,n=void 0===i?0:i,r=t.score;return n-(void 0===r?0:r)},t.dispatchEvent=function(e,t,i){void 0===i&&(i=null);var n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)},t.existsInArray=function(e,t,i){return void 0===i&&(i="value"),e.some((function(e){return"string"==typeof t?e[i]===t.trim():e[i]===t}))},t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))},t.diff=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter((function(e){return n.indexOf(e)<0}))},t.parseCustomProperties=function(e){if(void 0!==e)try{return JSON.parse(e)}catch(t){return e}return{}}},273:function(e,t){var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,r=0,s=t.length;r<s;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_CHOICE":var r=n,s={id:r.id,elementId:r.elementId,groupId:r.groupId,value:r.value,label:r.label||r.value,disabled:r.disabled||!1,selected:!1,active:!0,score:9999,customProperties:r.customProperties,placeholder:r.placeholder||!1};return i(i([],e,!0),[s],!1);case"ADD_ITEM":var o=n;return o.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt("".concat(o.choiceId),10)&&(t.selected=!0),t})):e;case"REMOVE_ITEM":var a=n;return a.choiceId&&a.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt("".concat(a.choiceId),10)&&(t.selected=!1),t})):e;case"FILTER_CHOICES":var c=n;return e.map((function(e){var t=e;return t.active=c.results.some((function(e){var i=e.item,n=e.score;return i.id===t.id&&(t.score=n,!0)})),t}));case"ACTIVATE_CHOICES":var l=n;return e.map((function(e){var t=e;return t.active=l.active,t}));case"CLEAR_CHOICES":return t.defaultState;default:return e}}},871:function(e,t){var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,r=0,s=t.length;r<s;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_GROUP":var r=n;return i(i([],e,!0),[{id:r.id,value:r.value,active:r.active,disabled:r.disabled}],!1);case"CLEAR_CHOICES":return[];default:return e}}},655:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0;var r=i(791),s=n(i(52)),o=n(i(871)),a=n(i(273)),c=n(i(502)),l=i(799);t.defaultState={groups:[],items:[],choices:[],loading:!1};var h=(0,r.combineReducers)({items:s.default,groups:o.default,choices:a.default,loading:c.default});t.default=function(e,i){var n=e;if("CLEAR_ALL"===i.type)n=t.defaultState;else if("RESET_TO"===i.type)return(0,l.cloneObject)(i.state);return h(n,i)}},52:function(e,t){var i=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,r=0,s=t.length;r<s;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=[],t.default=function(e,n){switch(void 0===e&&(e=t.defaultState),void 0===n&&(n={}),n.type){case"ADD_ITEM":var r=n;return i(i([],e,!0),[{id:r.id,choiceId:r.choiceId,groupId:r.groupId,value:r.value,label:r.label,active:!0,highlighted:!1,customProperties:r.customProperties,placeholder:r.placeholder||!1,keyCode:null}],!1).map((function(e){var t=e;return t.highlighted=!1,t}));case"REMOVE_ITEM":return e.map((function(e){var t=e;return t.id===n.id&&(t.active=!1),t}));case"HIGHLIGHT_ITEM":var s=n;return e.map((function(e){var t=e;return t.id===s.id&&(t.highlighted=s.highlighted),t}));default:return e}}},502:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=void 0,t.defaultState=!1,t.default=function(e,i){return void 0===e&&(e=t.defaultState),void 0===i&&(i={}),"SET_IS_LOADING"===i.type?i.isLoading:e}},744:function(e,t,i){var n=this&&this.__spreadArray||function(e,t,i){if(i||2===arguments.length)for(var n,r=0,s=t.length;r<s;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(791),o=r(i(655)),a=function(){function e(){this._store=(0,s.createStore)(o.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}return e.prototype.subscribe=function(e){this._store.subscribe(e)},e.prototype.dispatch=function(e){this._store.dispatch(e)},Object.defineProperty(e.prototype,"state",{get:function(){return this._store.getState()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){return this.state.items},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeItems",{get:function(){return this.items.filter((function(e){return!0===e.active}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"highlightedActiveItems",{get:function(){return this.items.filter((function(e){return e.active&&e.highlighted}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"choices",{get:function(){return this.state.choices},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeChoices",{get:function(){return this.choices.filter((function(e){return!0===e.active}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectableChoices",{get:function(){return this.choices.filter((function(e){return!0!==e.disabled}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"searchableChoices",{get:function(){return this.selectableChoices.filter((function(e){return!0!==e.placeholder}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"placeholderChoice",{get:function(){return n([],this.choices,!0).reverse().find((function(e){return!0===e.placeholder}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"groups",{get:function(){return this.state.groups},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeGroups",{get:function(){var e=this.groups,t=this.choices;return e.filter((function(e){var i=!0===e.active&&!1===e.disabled,n=t.some((function(e){return!0===e.active&&!1===e.disabled}));return i&&n}),[])},enumerable:!1,configurable:!0}),e.prototype.isLoading=function(){return this.state.loading},e.prototype.getChoiceById=function(e){return this.activeChoices.find((function(t){return t.id===parseInt(e,10)}))},e.prototype.getGroupById=function(e){return this.groups.find((function(t){return t.id===e}))},e}();t.default=a},686:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i={containerOuter:function(e,t,i,n,r,s,o){var a=e.classNames.containerOuter,c=Object.assign(document.createElement("div"),{className:a});return c.dataset.type=s,t&&(c.dir=t),n&&(c.tabIndex=0),i&&(c.setAttribute("role",r?"combobox":"listbox"),r&&c.setAttribute("aria-autocomplete","list")),c.setAttribute("aria-haspopup","true"),c.setAttribute("aria-expanded","false"),o&&c.setAttribute("aria-labelledby",o),c},containerInner:function(e){var t=e.classNames.containerInner;return Object.assign(document.createElement("div"),{className:t})},itemList:function(e,t){var i=e.classNames,n=i.list,r=i.listSingle,s=i.listItems;return Object.assign(document.createElement("div"),{className:"".concat(n," ").concat(t?r:s)})},placeholder:function(e,t){var i,n=e.allowHTML,r=e.classNames.placeholder;return Object.assign(document.createElement("div"),((i={className:r})[n?"innerHTML":"innerText"]=t,i))},item:function(e,t,i){var n,r,s=e.allowHTML,o=e.classNames,a=o.item,c=o.button,l=o.highlightedState,h=o.itemSelectable,u=o.placeholder,d=t.id,p=t.value,f=t.label,m=t.customProperties,v=t.active,g=t.disabled,_=t.highlighted,y=t.placeholder,E=Object.assign(document.createElement("div"),((n={className:a})[s?"innerHTML":"innerText"]=f,n));if(Object.assign(E.dataset,{item:"",id:d,value:p,customProperties:m}),v&&E.setAttribute("aria-selected","true"),g&&E.setAttribute("aria-disabled","true"),y&&E.classList.add(u),E.classList.add(_?l:h),i){g&&E.classList.remove(h),E.dataset.deletable="";var b="Remove item",S=Object.assign(document.createElement("button"),((r={type:"button",className:c})[s?"innerHTML":"innerText"]=b,r));S.setAttribute("aria-label","".concat(b,": '").concat(p,"'")),S.dataset.button="",E.appendChild(S)}return E},choiceList:function(e,t){var i=e.classNames.list,n=Object.assign(document.createElement("div"),{className:i});return t||n.setAttribute("aria-multiselectable","true"),n.setAttribute("role","listbox"),n},choiceGroup:function(e,t){var i,n=e.allowHTML,r=e.classNames,s=r.group,o=r.groupHeading,a=r.itemDisabled,c=t.id,l=t.value,h=t.disabled,u=Object.assign(document.createElement("div"),{className:"".concat(s," ").concat(h?a:"")});return u.setAttribute("role","group"),Object.assign(u.dataset,{group:"",id:c,value:l}),h&&u.setAttribute("aria-disabled","true"),u.appendChild(Object.assign(document.createElement("div"),((i={className:o})[n?"innerHTML":"innerText"]=l,i))),u},choice:function(e,t,i){var n,r=e.allowHTML,s=e.classNames,o=s.item,a=s.itemChoice,c=s.itemSelectable,l=s.selectedState,h=s.itemDisabled,u=s.placeholder,d=t.id,p=t.value,f=t.label,m=t.groupId,v=t.elementId,g=t.disabled,_=t.selected,y=t.placeholder,E=Object.assign(document.createElement("div"),((n={id:v})[r?"innerHTML":"innerText"]=f,n.className="".concat(o," ").concat(a),n));return _&&E.classList.add(l),y&&E.classList.add(u),E.setAttribute("role",m&&m>0?"treeitem":"option"),Object.assign(E.dataset,{choice:"",id:d,value:p,selectText:i}),g?(E.classList.add(h),E.dataset.choiceDisabled="",E.setAttribute("aria-disabled","true")):(E.classList.add(c),E.dataset.choiceSelectable=""),E},input:function(e,t){var i=e.classNames,n=i.input,r=i.inputCloned,s=Object.assign(document.createElement("input"),{type:"search",name:"search_terms",className:"".concat(n," ").concat(r),autocomplete:"off",autocapitalize:"off",spellcheck:!1});return s.setAttribute("role","textbox"),s.setAttribute("aria-autocomplete","list"),s.setAttribute("aria-label",t),s},dropdown:function(e){var t=e.classNames,i=t.list,n=t.listDropdown,r=document.createElement("div");return r.classList.add(i,n),r.setAttribute("aria-expanded","false"),r},notice:function(e,t,i){var n,r=e.allowHTML,s=e.classNames,o=s.item,a=s.itemChoice,c=s.noResults,l=s.noChoices;void 0===i&&(i="");var h=[o,a];return"no-choices"===i?h.push(l):"no-results"===i&&h.push(c),Object.assign(document.createElement("div"),((n={})[r?"innerHTML":"innerText"]=t,n.className=h.join(" "),n))},option:function(e){var t=e.label,i=e.value,n=e.customProperties,r=e.active,s=e.disabled,o=new Option(t,i,!1,r);return n&&(o.dataset.customProperties="".concat(n)),o.disabled=!!s,o}};t.default=i},996:function(e){var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===i}(e)}(e)},i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?a((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function r(e,t,i){return e.concat(t).map((function(e){return n(e,i)}))}function s(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function o(e,t){try{return t in e}catch(e){return!1}}function a(e,i,c){(c=c||{}).arrayMerge=c.arrayMerge||r,c.isMergeableObject=c.isMergeableObject||t,c.cloneUnlessOtherwiseSpecified=n;var l=Array.isArray(i);return l===Array.isArray(e)?l?c.arrayMerge(e,i,c):function(e,t,i){var r={};return i.isMergeableObject(e)&&s(e).forEach((function(t){r[t]=n(e[t],i)})),s(t).forEach((function(s){(function(e,t){return o(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,s)||(o(e,s)&&i.isMergeableObject(t[s])?r[s]=function(e,t){if(!t.customMerge)return a;var i=t.customMerge(e);return"function"==typeof i?i:a}(s,i)(e[s],t[s],i):r[s]=n(t[s],i))})),r}(e,i,c):n(i,c)}a.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,i){return a(e,i,t)}),{})};var c=a;e.exports=c},221:function(e,t,i){function n(e){return Array.isArray?Array.isArray(e):"[object Array]"===l(e)}function r(e){return"string"==typeof e}function s(e){return"number"==typeof e}function o(e){return"object"==typeof e}function a(e){return null!=e}function c(e){return!e.trim().length}function l(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}i.r(t),i.d(t,{default:function(){return R}});const h=Object.prototype.hasOwnProperty;class u{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let i=d(e);t+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function d(e){let t=null,i=null,s=null,o=1,a=null;if(r(e)||n(e))s=e,t=p(e),i=f(e);else{if(!h.call(e,"name"))throw new Error("Missing name property in key");const n=e.name;if(s=n,h.call(e,"weight")&&(o=e.weight,o<=0))throw new Error((e=>`Property 'weight' in key '${e}' must be a positive integer`)(n));t=p(n),i=f(n),a=e.getFn}return{path:t,id:i,weight:o,src:s,getFn:a}}function p(e){return n(e)?e:e.split(".")}function f(e){return n(e)?e.join("."):e}var m={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,useExtendedSearch:!1,getFn:function(e,t){let i=[],c=!1;const h=(e,t,u)=>{if(a(e))if(t[u]){const d=e[t[u]];if(!a(d))return;if(u===t.length-1&&(r(d)||s(d)||function(e){return!0===e||!1===e||function(e){return o(e)&&null!==e}(e)&&"[object Boolean]"==l(e)}(d)))i.push(function(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}(d));else if(n(d)){c=!0;for(let e=0,i=d.length;e<i;e+=1)h(d[e],t,u+1)}else t.length&&h(d,t,u+1)}else i.push(e)};return h(e,r(t)?t.split("."):t,0),c?i:i[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};const v=/[^ ]+/g;class g{constructor({getFn:e=m.getFn,fieldNormWeight:t=m.fieldNormWeight}={}){this.norm=function(e=1,t=3){const i=new Map,n=Math.pow(10,t);return{get(t){const r=t.match(v).length;if(i.has(r))return i.get(r);const s=1/Math.pow(r,.5*e),o=parseFloat(Math.round(s*n)/n);return i.set(r,o),o},clear(){i.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,r(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();r(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,i=this.size();t<i;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!a(e)||c(e))return;let i={v:e,i:t,n:this.norm.get(e)};this.records.push(i)}_addObject(e,t){let i={i:t,$:{}};this.keys.forEach(((t,s)=>{let o=t.getFn?t.getFn(e):this.getFn(e,t.path);if(a(o))if(n(o)){let e=[];const t=[{nestedArrIndex:-1,value:o}];for(;t.length;){const{nestedArrIndex:i,value:s}=t.pop();if(a(s))if(r(s)&&!c(s)){let t={v:s,i:i,n:this.norm.get(s)};e.push(t)}else n(s)&&s.forEach(((e,i)=>{t.push({nestedArrIndex:i,value:e})}))}i.$[s]=e}else if(r(o)&&!c(o)){let e={v:o,n:this.norm.get(o)};i.$[s]=e}})),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function _(e,t,{getFn:i=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){const r=new g({getFn:i,fieldNormWeight:n});return r.setKeys(e.map(d)),r.setSources(t),r.create(),r}function y(e,{errors:t=0,currentLocation:i=0,expectedLocation:n=0,distance:r=m.distance,ignoreLocation:s=m.ignoreLocation}={}){const o=t/e.length;if(s)return o;const a=Math.abs(n-i);return r?o+a/r:a?1:o}const E=32;function b(e){let t={};for(let i=0,n=e.length;i<n;i+=1){const r=e.charAt(i);t[r]=(t[r]||0)|1<<n-i-1}return t}class S{constructor(e,{location:t=m.location,threshold:i=m.threshold,distance:n=m.distance,includeMatches:r=m.includeMatches,findAllMatches:s=m.findAllMatches,minMatchCharLength:o=m.minMatchCharLength,isCaseSensitive:a=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){if(this.options={location:t,threshold:i,distance:n,includeMatches:r,findAllMatches:s,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:c},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:b(e),startIndex:t})},h=this.pattern.length;if(h>E){let e=0;const t=h%E,i=h-t;for(;e<i;)l(this.pattern.substr(e,E),e),e+=E;if(t){const e=h-E;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:i}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return i&&(t.indices=[[0,e.length-1]]),t}const{location:n,distance:r,threshold:s,findAllMatches:o,minMatchCharLength:a,ignoreLocation:c}=this.options;let l=[],h=0,u=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:p})=>{const{isMatch:f,score:v,indices:g}=function(e,t,i,{location:n=m.location,distance:r=m.distance,threshold:s=m.threshold,findAllMatches:o=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,includeMatches:c=m.includeMatches,ignoreLocation:l=m.ignoreLocation}={}){if(t.length>E)throw new Error("Pattern length exceeds max of 32.");const h=t.length,u=e.length,d=Math.max(0,Math.min(n,u));let p=s,f=d;const v=a>1||c,g=v?Array(u):[];let _;for(;(_=e.indexOf(t,f))>-1;){let e=y(t,{currentLocation:_,expectedLocation:d,distance:r,ignoreLocation:l});if(p=Math.min(e,p),f=_+h,v){let e=0;for(;e<h;)g[_+e]=1,e+=1}}f=-1;let b=[],S=1,O=h+u;const I=1<<h-1;for(let n=0;n<h;n+=1){let s=0,a=O;for(;s<a;)y(t,{errors:n,currentLocation:d+a,expectedLocation:d,distance:r,ignoreLocation:l})<=p?s=a:O=a,a=Math.floor((O-s)/2+s);O=a;let c=Math.max(1,d-a+1),m=o?u:Math.min(d+a,u)+h,_=Array(m+2);_[m+1]=(1<<n)-1;for(let s=m;s>=c;s-=1){let o=s-1,a=i[e.charAt(o)];if(v&&(g[o]=+!!a),_[s]=(_[s+1]<<1|1)&a,n&&(_[s]|=(b[s+1]|b[s])<<1|1|b[s+1]),_[s]&I&&(S=y(t,{errors:n,currentLocation:o,expectedLocation:d,distance:r,ignoreLocation:l}),S<=p)){if(p=S,f=o,f<=d)break;c=Math.max(1,2*d-f)}}if(y(t,{errors:n+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:l})>p)break;b=_}const C={isMatch:f>=0,score:Math.max(.001,S)};if(v){const e=function(e=[],t=m.minMatchCharLength){let i=[],n=-1,r=-1,s=0;for(let o=e.length;s<o;s+=1){let o=e[s];o&&-1===n?n=s:o||-1===n||(r=s-1,r-n+1>=t&&i.push([n,r]),n=-1)}return e[s-1]&&s-n>=t&&i.push([n,s-1]),i}(g,a);e.length?c&&(C.indices=e):C.isMatch=!1}return C}(e,t,d,{location:n+p,distance:r,threshold:s,findAllMatches:o,minMatchCharLength:a,includeMatches:i,ignoreLocation:c});f&&(u=!0),h+=v,f&&g&&(l=[...l,...g])}));let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&i&&(d.indices=l),d}}class O{constructor(e){this.pattern=e}static isMultiMatch(e){return I(e,this.multiRegex)}static isSingleMatch(e){return I(e,this.singleRegex)}search(){}}function I(e,t){const i=e.match(t);return i?i[1]:null}class C extends O{constructor(e,{location:t=m.location,threshold:i=m.threshold,distance:n=m.distance,includeMatches:r=m.includeMatches,findAllMatches:s=m.findAllMatches,minMatchCharLength:o=m.minMatchCharLength,isCaseSensitive:a=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){super(e),this._bitapSearch=new S(e,{location:t,threshold:i,distance:n,includeMatches:r,findAllMatches:s,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class T extends O{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,i=0;const n=[],r=this.pattern.length;for(;(t=e.indexOf(this.pattern,i))>-1;)i=t+r,n.push([t,i-1]);const s=!!n.length;return{isMatch:s,score:s?0:1,indices:n}}}const L=[class extends O{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},T,class extends O{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends O{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends O{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends O{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends O{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},C],w=L.length,A=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,M=new Set([C.type,T.type]);const P=[];function x(e,t){for(let i=0,n=P.length;i<n;i+=1){let n=P[i];if(n.condition(e,t))return new n(e,t)}return new S(e,t)}const N="$and",D=e=>!(!e.$and&&!e.$or),j=e=>({[N]:Object.keys(e).map((t=>({[t]:e[t]})))});function F(e,t,{auto:i=!0}={}){const s=e=>{let a=Object.keys(e);const c=(e=>!!e.$path)(e);if(!c&&a.length>1&&!D(e))return s(j(e));if((e=>!n(e)&&o(e)&&!D(e))(e)){const n=c?e.$path:a[0],s=c?e.$val:e[n];if(!r(s))throw new Error((e=>`Invalid value for key ${e}`)(n));const o={keyId:f(n),pattern:s};return i&&(o.searcher=x(s,t)),o}let l={children:[],operator:a[0]};return a.forEach((t=>{const i=e[t];n(i)&&i.forEach((e=>{l.children.push(s(e))}))})),l};return D(e)||(e=j(e)),s(e)}function k(e,t){const i=e.matches;t.matches=[],a(i)&&i.forEach((e=>{if(!a(e.indices)||!e.indices.length)return;const{indices:i,value:n}=e;let r={indices:i,value:n};e.key&&(r.key=e.key.src),e.idx>-1&&(r.refIndex=e.idx),t.matches.push(r)}))}function K(e,t){t.score=e.score}class R{constructor(e,t={},i){this.options={...m,...t},this.options.useExtendedSearch,this._keyStore=new u(this.options.keys),this.setCollection(e,i)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof g))throw new Error("Incorrect 'index' type");this._myIndex=t||_(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){a(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let i=0,n=this._docs.length;i<n;i+=1){const r=this._docs[i];e(r,i)&&(this.removeAt(i),i-=1,n-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:i,includeScore:n,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let l=r(e)?r(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=m.ignoreFieldNorm}){e.forEach((e=>{let i=1;e.matches.forEach((({key:e,norm:n,score:r})=>{const s=e?e.weight:null;i*=Math.pow(0===r&&s?Number.EPSILON:r,(s||1)*(t?1:n))})),e.score=i}))}(l,{ignoreFieldNorm:c}),o&&l.sort(a),s(t)&&t>-1&&(l=l.slice(0,t)),function(e,t,{includeMatches:i=m.includeMatches,includeScore:n=m.includeScore}={}){const r=[];return i&&r.push(k),n&&r.push(K),e.map((e=>{const{idx:i}=e,n={item:t[i],refIndex:i};return r.length&&r.forEach((t=>{t(e,n)})),n}))}(l,this._docs,{includeMatches:i,includeScore:n})}_searchStringList(e){const t=x(e,this.options),{records:i}=this._myIndex,n=[];return i.forEach((({v:e,i:i,n:r})=>{if(!a(e))return;const{isMatch:s,score:o,indices:c}=t.searchIn(e);s&&n.push({item:e,idx:i,matches:[{score:o,value:e,norm:r,indices:c}]})})),n}_searchLogical(e){const t=F(e,this.options),i=(e,t,n)=>{if(!e.children){const{keyId:i,searcher:r}=e,s=this._findMatches({key:this._keyStore.get(i),value:this._myIndex.getValueForItemAtKeyId(t,i),searcher:r});return s&&s.length?[{idx:n,item:t,matches:s}]:[]}const r=[];for(let s=0,o=e.children.length;s<o;s+=1){const o=e.children[s],a=i(o,t,n);if(a.length)r.push(...a);else if(e.operator===N)return[]}return r},n=this._myIndex.records,r={},s=[];return n.forEach((({$:e,i:n})=>{if(a(e)){let o=i(t,e,n);o.length&&(r[n]||(r[n]={idx:n,item:e,matches:[]},s.push(r[n])),o.forEach((({matches:e})=>{r[n].matches.push(...e)})))}})),s}_searchObjectList(e){const t=x(e,this.options),{keys:i,records:n}=this._myIndex,r=[];return n.forEach((({$:e,i:n})=>{if(!a(e))return;let s=[];i.forEach(((i,n)=>{s.push(...this._findMatches({key:i,value:e[n],searcher:t}))})),s.length&&r.push({idx:n,item:e,matches:s})})),r}_findMatches({key:e,value:t,searcher:i}){if(!a(t))return[];let r=[];if(n(t))t.forEach((({v:t,i:n,n:s})=>{if(!a(t))return;const{isMatch:o,score:c,indices:l}=i.searchIn(t);o&&r.push({score:c,key:e,value:t,idx:n,norm:s,indices:l})}));else{const{v:n,n:s}=t,{isMatch:o,score:a,indices:c}=i.searchIn(n);o&&r.push({score:a,key:e,value:n,norm:s,indices:c})}return r}}R.version="6.6.2",R.createIndex=_,R.parseIndex=function(e,{getFn:t=m.getFn,fieldNormWeight:i=m.fieldNormWeight}={}){const{keys:n,records:r}=e,s=new g({getFn:t,fieldNormWeight:i});return s.setKeys(n),s.setIndexRecords(r),s},R.config=m,R.parseQuery=F,function(...e){P.push(...e)}(class{constructor(e,{isCaseSensitive:t=m.isCaseSensitive,includeMatches:i=m.includeMatches,minMatchCharLength:n=m.minMatchCharLength,ignoreLocation:r=m.ignoreLocation,findAllMatches:s=m.findAllMatches,location:o=m.location,threshold:a=m.threshold,distance:c=m.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:i,minMatchCharLength:n,findAllMatches:s,ignoreLocation:r,location:o,threshold:a,distance:c},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let i=e.trim().split(A).filter((e=>e&&!!e.trim())),n=[];for(let e=0,r=i.length;e<r;e+=1){const r=i[e];let s=!1,o=-1;for(;!s&&++o<w;){const e=L[o];let i=e.isMultiMatch(r);i&&(n.push(new e(i,t)),s=!0)}if(!s)for(o=-1;++o<w;){const e=L[o];let i=e.isSingleMatch(r);if(i){n.push(new e(i,t));break}}}return n}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let r=0,s=[],o=0;for(let n=0,a=t.length;n<a;n+=1){const a=t[n];s.length=0,r=0;for(let t=0,n=a.length;t<n;t+=1){const n=a[t],{isMatch:c,indices:l,score:h}=n.search(e);if(!c){o=0,r=0,s.length=0;break}if(r+=1,o+=h,i){const e=n.constructor.type;M.has(e)?s=[...s,...l]:s.push(l)}}if(r){let e={isMatch:!0,score:o/r};return i&&(e.indices=s),e}}return{isMatch:!1,score:1}}})},791:function(e,t,i){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t,i){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t);if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}i.r(t),i.d(t,{__DO_NOT_USE__ActionTypes:function(){return h},applyMiddleware:function(){return _},bindActionCreators:function(){return v},combineReducers:function(){return f},compose:function(){return g},createStore:function(){return d},legacy_createStore:function(){return p}});var c="function"==typeof Symbol&&Symbol.observable||"@@observable",l=function(){return Math.random().toString(36).substring(7).split("").join(".")},h={INIT:"@@redux/INIT"+l(),REPLACE:"@@redux/REPLACE"+l(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+l()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function d(e,t,i){var n;if("function"==typeof t&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error(a(0));if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error(a(1));return i(d)(e,t)}if("function"!=typeof e)throw new Error(a(2));var r=e,s=t,o=[],l=o,p=!1;function f(){l===o&&(l=o.slice())}function m(){if(p)throw new Error(a(3));return s}function v(e){if("function"!=typeof e)throw new Error(a(4));if(p)throw new Error(a(5));var t=!0;return f(),l.push(e),function(){if(t){if(p)throw new Error(a(6));t=!1,f();var i=l.indexOf(e);l.splice(i,1),o=null}}}function g(e){if(!u(e))throw new Error(a(7));if(void 0===e.type)throw new Error(a(8));if(p)throw new Error(a(9));try{p=!0,s=r(s,e)}finally{p=!1}for(var t=o=l,i=0;i<t.length;i++)(0,t[i])();return e}function _(e){if("function"!=typeof e)throw new Error(a(10));r=e,g({type:h.REPLACE})}function y(){var e,t=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(a(11));function i(){e.next&&e.next(m())}return i(),{unsubscribe:t(i)}}})[c]=function(){return this},e}return g({type:h.INIT}),(n={dispatch:g,subscribe:v,getState:m,replaceReducer:_})[c]=y,n}var p=d;function f(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];"function"==typeof e[r]&&(i[r]=e[r])}var s,o=Object.keys(i);try{!function(e){Object.keys(e).forEach((function(t){var i=e[t];if(void 0===i(void 0,{type:h.INIT}))throw new Error(a(12));if(void 0===i(void 0,{type:h.PROBE_UNKNOWN_ACTION()}))throw new Error(a(13))}))}(i)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var n=!1,r={},c=0;c<o.length;c++){var l=o[c],h=i[l],u=e[l],d=h(u,t);if(void 0===d)throw t&&t.type,new Error(a(14));r[l]=d,n=n||d!==u}return(n=n||o.length!==Object.keys(e).length)?r:e}}function m(e,t){return function(){return t(e.apply(this,arguments))}}function v(e,t){if("function"==typeof e)return m(e,t);if("object"!=typeof e||null===e)throw new Error(a(16));var i={};for(var n in e){var r=e[n];"function"==typeof r&&(i[n]=m(r,t))}return i}function g(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function _(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),n=function(){throw new Error(a(15))},r={getState:i.getState,dispatch:function(){return n.apply(void 0,arguments)}},s=t.map((function(e){return e(r)}));return n=g.apply(void 0,s)(i.dispatch),o(o({},i),{},{dispatch:n})}}}}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,i),s.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n,r,s={};n=i(373),r=i.n(n),i(187),i(883),i(789),i(686),s.default=r(),window.Choices=s.default}();;
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
  })(this, (function (exports) { 'use strict';
  
    /** Checks if value is string */
    function isString(str) {
      return typeof str === 'string' || str instanceof String;
    }
  
    /** Checks if value is object */
    function isObject(obj) {
      return typeof obj === 'object' && obj != null && obj?.constructor?.name === 'Object';
    }
    function pick(obj, keys) {
      if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
      return Object.entries(obj).reduce((acc, _ref) => {
        let [k, v] = _ref;
        if (keys(v, k)) acc[k] = v;
        return acc;
      }, {});
    }
  
    /** Direction */
    const DIRECTION = {
      NONE: 'NONE',
      LEFT: 'LEFT',
      FORCE_LEFT: 'FORCE_LEFT',
      RIGHT: 'RIGHT',
      FORCE_RIGHT: 'FORCE_RIGHT'
    };
  
    /** Direction */
  
    function forceDirection(direction) {
      switch (direction) {
        case DIRECTION.LEFT:
          return DIRECTION.FORCE_LEFT;
        case DIRECTION.RIGHT:
          return DIRECTION.FORCE_RIGHT;
        default:
          return direction;
      }
    }
  
    /** Escapes regular expression control chars */
    function escapeRegExp(str) {
      return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
    }
  
    // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
    function objectIncludes(b, a) {
      if (a === b) return true;
      const arrA = Array.isArray(a),
        arrB = Array.isArray(b);
      let i;
      if (arrA && arrB) {
        if (a.length != b.length) return false;
        for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      if (a && b && typeof a === 'object' && typeof b === 'object') {
        const dateA = a instanceof Date,
          dateB = b instanceof Date;
        if (dateA && dateB) return a.getTime() == b.getTime();
        if (dateA != dateB) return false;
        const regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
        if (regexpA && regexpB) return a.toString() == b.toString();
        if (regexpA != regexpB) return false;
        const keys = Object.keys(a);
        // if (keys.length !== Object.keys(b).length) return false;
  
        for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
        return true;
      } else if (a && b && typeof a === 'function' && typeof b === 'function') {
        return a.toString() === b.toString();
      }
      return false;
    }
  
    /** Selection range */
  
    /** Provides details of changing input */
    class ActionDetails {
      /** Current input value */
  
      /** Current cursor position */
  
      /** Old input value */
  
      /** Old selection */
  
      constructor(opts) {
        Object.assign(this, opts);
  
        // double check if left part was changed (autofilling, other non-standard input triggers)
        while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
          --this.oldSelection.start;
        }
  
        // double check right part
        while (this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end)) {
          if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end;else ++this.cursorPos;
        }
      }
  
      /** Start changing position */
      get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
  
      /** Inserted symbols count */
      get insertedCount() {
        return this.cursorPos - this.startChangePos;
      }
  
      /** Inserted symbols */
      get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
  
      /** Removed symbols count */
      get removedCount() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos ||
        // for Delete
        this.oldValue.length - this.value.length, 0);
      }
  
      /** Removed symbols */
      get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
  
      /** Unchanged head symbols */
      get head() {
        return this.value.substring(0, this.startChangePos);
      }
  
      /** Unchanged tail symbols */
      get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
  
      /** Remove direction */
      get removeDirection() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;
  
        // align right if delete at right
        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
        // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }
  
    /** Applies mask on element */
    function IMask(el, opts) {
      // currently available only for input-like elements
      return new IMask.InputMask(el, opts);
    }
  
    // TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
    // export function maskedClass(mask: string): typeof MaskedPattern;
    // export function maskedClass(mask: DateConstructor): typeof MaskedDate;
    // export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
    // export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
    // export function maskedClass(mask: MaskedDate): typeof MaskedDate;
    // export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
    // export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
    // export function maskedClass(mask: MaskedRange): typeof MaskedRange;
    // export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
    // export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
    // export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
    // export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
    // export function maskedClass(mask: Masked): typeof Masked;
    // export function maskedClass(mask: typeof Masked): typeof Masked;
    // export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
    // export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
    // export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
    // export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
    // export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
    // export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
    // export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
    // export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
    // export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
    // export function maskedClass(mask: RegExp): typeof MaskedRegExp;
    // export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;
  
    /** Get Masked class by mask type */
    function maskedClass(mask) /* TODO */{
      if (mask == null) throw new Error('mask property should be defined');
      if (mask instanceof RegExp) return IMask.MaskedRegExp;
      if (isString(mask)) return IMask.MaskedPattern;
      if (mask === Date) return IMask.MaskedDate;
      if (mask === Number) return IMask.MaskedNumber;
      if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
      if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
      if (IMask.Masked && mask instanceof IMask.Masked) return mask.constructor;
      if (mask instanceof Function) return IMask.MaskedFunction;
      console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
      return IMask.Masked;
    }
    function normalizeOpts(opts) {
      if (!opts) throw new Error('Options in not defined');
      if (IMask.Masked) {
        if (opts.prototype instanceof IMask.Masked) return {
          mask: opts
        };
  
        /*
          handle cases like:
          1) opts = Masked
          2) opts = { mask: Masked, ...instanceOpts }
        */
        const {
          mask = undefined,
          ...instanceOpts
        } = opts instanceof IMask.Masked ? {
          mask: opts
        } : isObject(opts) && opts.mask instanceof IMask.Masked ? opts : {};
        if (mask) {
          const _mask = mask.mask;
          return {
            ...pick(mask, (_, k) => !k.startsWith('_')),
            mask: mask.constructor,
            _mask,
            ...instanceOpts
          };
        }
      }
      if (!isObject(opts)) return {
        mask: opts
      };
      return {
        ...opts
      };
    }
  
    // TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
  
    // From masked
    // export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
    // // From masked class
    // export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
    // // From mask opts
    // export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
    // export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
  
    /** Creates new {@link Masked} depending on mask type */
    function createMask(opts) {
      if (IMask.Masked && opts instanceof IMask.Masked) return opts;
      const nOpts = normalizeOpts(opts);
      const MaskedClass = maskedClass(nOpts.mask);
      if (!MaskedClass) throw new Error(`Masked class is not found for provided mask ${nOpts.mask}, appropriate module needs to be imported manually before creating mask.`);
      if (nOpts.mask === MaskedClass) delete nOpts.mask;
      if (nOpts._mask) {
        nOpts.mask = nOpts._mask;
        delete nOpts._mask;
      }
      return new MaskedClass(nOpts);
    }
    IMask.createMask = createMask;
  
    /**  Generic element API to use with mask */
    class MaskElement {
      /** */
  
      /** */
  
      /** */
  
      /** Safely returns selection start */
      get selectionStart() {
        let start;
        try {
          start = this._unsafeSelectionStart;
        } catch {}
        return start != null ? start : this.value.length;
      }
  
      /** Safely returns selection end */
      get selectionEnd() {
        let end;
        try {
          end = this._unsafeSelectionEnd;
        } catch {}
        return end != null ? end : this.value.length;
      }
  
      /** Safely sets element selection */
      select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
        try {
          this._unsafeSelect(start, end);
        } catch {}
      }
  
      /** */
      get isActive() {
        return false;
      }
      /** */
  
      /** */
  
      /** */
    }
    IMask.MaskElement = MaskElement;
  
    const KEY_Z = 90;
    const KEY_Y = 89;
  
    /** Bridge between HTMLElement and {@link Masked} */
    class HTMLMaskElement extends MaskElement {
      /** HTMLElement to use mask on */
  
      constructor(input) {
        super();
        this.input = input;
        this._onKeydown = this._onKeydown.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onBeforeinput = this._onBeforeinput.bind(this);
        this._onCompositionEnd = this._onCompositionEnd.bind(this);
      }
      get rootElement() {
        return this.input.getRootNode?.() ?? document;
      }
  
      /** Is element in focus */
      get isActive() {
        return this.input === this.rootElement.activeElement;
      }
  
      /** Binds HTMLElement events to mask internal events */
      bindEvents(handlers) {
        this.input.addEventListener('keydown', this._onKeydown);
        this.input.addEventListener('input', this._onInput);
        this.input.addEventListener('beforeinput', this._onBeforeinput);
        this.input.addEventListener('compositionend', this._onCompositionEnd);
        this.input.addEventListener('drop', handlers.drop);
        this.input.addEventListener('click', handlers.click);
        this.input.addEventListener('focus', handlers.focus);
        this.input.addEventListener('blur', handlers.commit);
        this._handlers = handlers;
      }
      _onKeydown(e) {
        if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
          e.preventDefault();
          return this._handlers.redo(e);
        }
        if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          return this._handlers.undo(e);
        }
        if (!e.isComposing) this._handlers.selectionChange(e);
      }
      _onBeforeinput(e) {
        if (e.inputType === 'historyUndo' && this._handlers.undo) {
          e.preventDefault();
          return this._handlers.undo(e);
        }
        if (e.inputType === 'historyRedo' && this._handlers.redo) {
          e.preventDefault();
          return this._handlers.redo(e);
        }
      }
      _onCompositionEnd(e) {
        this._handlers.input(e);
      }
      _onInput(e) {
        if (!e.isComposing) this._handlers.input(e);
      }
  
      /** Unbinds HTMLElement events to mask internal events */
      unbindEvents() {
        this.input.removeEventListener('keydown', this._onKeydown);
        this.input.removeEventListener('input', this._onInput);
        this.input.removeEventListener('beforeinput', this._onBeforeinput);
        this.input.removeEventListener('compositionend', this._onCompositionEnd);
        this.input.removeEventListener('drop', this._handlers.drop);
        this.input.removeEventListener('click', this._handlers.click);
        this.input.removeEventListener('focus', this._handlers.focus);
        this.input.removeEventListener('blur', this._handlers.commit);
        this._handlers = {};
      }
    }
    IMask.HTMLMaskElement = HTMLMaskElement;
  
    /** Bridge between InputElement and {@link Masked} */
    class HTMLInputMaskElement extends HTMLMaskElement {
      /** InputElement to use mask on */
  
      constructor(input) {
        super(input);
        this.input = input;
      }
  
      /** Returns InputElement selection start */
      get _unsafeSelectionStart() {
        return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
      }
  
      /** Returns InputElement selection end */
      get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
      }
  
      /** Sets InputElement selection */
      _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
      get value() {
        return this.input.value;
      }
      set value(value) {
        this.input.value = value;
      }
    }
    IMask.HTMLMaskElement = HTMLMaskElement;
  
    class HTMLContenteditableMaskElement extends HTMLMaskElement {
      /** Returns HTMLElement selection start */
      get _unsafeSelectionStart() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }
  
      /** Returns HTMLElement selection end */
      get _unsafeSelectionEnd() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }
  
      /** Sets HTMLElement selection */
      _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        const range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
  
      /** HTMLElement value */
      get value() {
        return this.input.textContent || '';
      }
      set value(value) {
        this.input.textContent = value;
      }
    }
    IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  
    class InputHistory {
      static MAX_LENGTH = 100;
      states = [];
      currentIndex = 0;
      get currentState() {
        return this.states[this.currentIndex];
      }
      get isEmpty() {
        return this.states.length === 0;
      }
      push(state) {
        // if current index points before the last element then remove the future
        if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
        this.states.push(state);
        if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
        this.currentIndex = this.states.length - 1;
      }
      go(steps) {
        this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
        return this.currentState;
      }
      undo() {
        return this.go(-1);
      }
      redo() {
        return this.go(+1);
      }
      clear() {
        this.states.length = 0;
        this.currentIndex = 0;
      }
    }
  
    /** Listens to element events and controls changes between element and {@link Masked} */
    class InputMask {
      /**
        View element
      */
  
      /** Internal {@link Masked} model */
  
      constructor(el, opts) {
        this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLInputMaskElement(el);
        this.masked = createMask(opts);
        this._listeners = {};
        this._value = '';
        this._unmaskedValue = '';
        this._rawInputValue = '';
        this.history = new InputHistory();
        this._saveSelection = this._saveSelection.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onDrop = this._onDrop.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onUndo = this._onUndo.bind(this);
        this._onRedo = this._onRedo.bind(this);
        this.alignCursor = this.alignCursor.bind(this);
        this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
        this._bindEvents();
  
        // refresh
        this.updateValue();
        this._onChange();
      }
      maskEquals(mask) {
        return mask == null || this.masked?.maskEquals(mask);
      }
  
      /** Masked */
      get mask() {
        return this.masked.mask;
      }
      set mask(mask) {
        if (this.maskEquals(mask)) return;
        if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
          // TODO "any" no idea
          this.masked.updateOptions({
            mask
          });
          return;
        }
        const masked = mask instanceof IMask.Masked ? mask : createMask({
          mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
  
      /** Raw value */
      get value() {
        return this._value;
      }
      set value(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl('auto');
      }
  
      /** Unmasked value */
      get unmaskedValue() {
        return this._unmaskedValue;
      }
      set unmaskedValue(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl('auto');
      }
  
      /** Raw input value */
      get rawInputValue() {
        return this._rawInputValue;
      }
      set rawInputValue(str) {
        if (this.rawInputValue === str) return;
        this.masked.rawInputValue = str;
        this.updateControl();
        this.alignCursor();
      }
  
      /** Typed unmasked value */
      get typedValue() {
        return this.masked.typedValue;
      }
      set typedValue(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl('auto');
      }
  
      /** Display value */
      get displayValue() {
        return this.masked.displayValue;
      }
  
      /** Starts listening to element events */
      _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange,
          undo: this._onUndo,
          redo: this._onRedo
        });
      }
  
      /** Stops listening to element events */
      _unbindEvents() {
        if (this.el) this.el.unbindEvents();
      }
  
      /** Fires custom event */
      _fireEvent(ev, e) {
        const listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(l => l(e));
      }
  
      /** Current selection start */
      get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
  
      /** Current cursor position */
      get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      }
      set cursorPos(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);
        this._saveSelection();
      }
  
      /** Stores current selection */
      _saveSelection( /* ev */
      ) {
        if (this.displayValue !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }
        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
  
      /** Syncronizes model value from view */
      updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
  
      /** Syncronizes view from model value, fires change events */
      updateControl(cursorPos) {
        const newUnmaskedValue = this.masked.unmaskedValue;
        const newValue = this.masked.value;
        const newRawInputValue = this.masked.rawInputValue;
        const newDisplayValue = this.displayValue;
        const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        this._rawInputValue = newRawInputValue;
        if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
        if (cursorPos === 'auto') this.alignCursor();else if (cursorPos != null) this.cursorPos = cursorPos;
        if (isChanged) this._fireChangeEvents();
        if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
          unmaskedValue: newUnmaskedValue,
          selection: {
            start: this.selectionStart,
            end: this.cursorPos
          }
        });
      }
  
      /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
      updateOptions(opts) {
        const {
          mask,
          ...restOpts
        } = opts; // TODO types, yes, mask is optional
  
        const updateMask = !this.maskEquals(mask);
        const updateOpts = this.masked.optionsIsChanged(restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts); // TODO
  
        if (updateMask || updateOpts) this.updateControl();
      }
  
      /** Updates cursor */
      updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos;
  
        // also queue change cursor for mobile browsers
        this._delayUpdateCursor(cursorPos);
      }
  
      /** Delays cursor update to support mobile browsers */
      _delayUpdateCursor(cursorPos) {
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(() => {
          if (!this.el) return; // if was destroyed
          this.cursorPos = this._changingCursorPos;
          this._abortUpdateCursor();
        }, 10);
      }
  
      /** Fires custom events */
      _fireChangeEvents() {
        this._fireEvent('accept', this._inputEvent);
        if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
      }
  
      /** Aborts delayed cursor update */
      _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
  
      /** Aligns cursor to nearest available position */
      alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
      }
  
      /** Aligns cursor only if selection is empty */
      alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
        this.alignCursor();
      }
  
      /** Adds listener on custom event */
      on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
      }
  
      /** Removes custom event listener */
      off(ev, handler) {
        if (!this._listeners[ev]) return this;
        if (!handler) {
          delete this._listeners[ev];
          return this;
        }
        const hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }
  
      /** Handles view input event */
      _onInput(e) {
        this._inputEvent = e;
        this._abortUpdateCursor();
        const details = new ActionDetails({
          // new state
          value: this.el.value,
          cursorPos: this.cursorPos,
          // old state
          oldValue: this.displayValue,
          oldSelection: this._selection
        });
        const oldRawValue = this.masked.rawInputValue;
        const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
          input: true,
          raw: true
        }).offset;
  
        // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
        const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
        this.updateControl(cursorPos);
        delete this._inputEvent;
      }
  
      /** Handles view change event and commits model value */
      _onChange() {
        if (this.displayValue !== this.el.value) {
          this.updateValue();
        }
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
      }
  
      /** Handles view drop event, prevents by default */
      _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
  
      /** Restore last selection on focus */
      _onFocus(ev) {
        this.alignCursorFriendly();
      }
  
      /** Restore last selection on focus */
      _onClick(ev) {
        this.alignCursorFriendly();
      }
      _onUndo() {
        this._applyHistoryState(this.history.undo());
      }
      _onRedo() {
        this._applyHistoryState(this.history.redo());
      }
      _applyHistoryState(state) {
        if (!state) return;
        this._historyChanging = true;
        this.unmaskedValue = state.unmaskedValue;
        this.el.select(state.selection.start, state.selection.end);
        this._saveSelection();
        this._historyChanging = false;
      }
  
      /** Unbind view events and removes element reference */
      destroy() {
        this._unbindEvents();
        this._listeners.length = 0;
        delete this.el;
      }
    }
    IMask.InputMask = InputMask;
  
    /** Provides details of changing model value */
    class ChangeDetails {
      /** Inserted symbols */
  
      /** Can skip chars */
  
      /** Additional offset if any changes occurred before tail */
  
      /** Raw inserted is used by dynamic mask */
  
      static normalize(prep) {
        return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
      }
      constructor(details) {
        Object.assign(this, {
          inserted: '',
          rawInserted: '',
          skip: false,
          tailShift: 0
        }, details);
      }
  
      /** Aggregate changes */
      aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
  
      /** Total offset considering all changes */
      get offset() {
        return this.tailShift + this.inserted.length;
      }
    }
    IMask.ChangeDetails = ChangeDetails;
  
    /** Provides details of continuous extracted tail */
    class ContinuousTailDetails {
      /** Tail value as string */
  
      /** Tail start position */
  
      /** Start position */
  
      constructor(value, from, stop) {
        if (value === void 0) {
          value = '';
        }
        if (from === void 0) {
          from = 0;
        }
        this.value = value;
        this.from = from;
        this.stop = stop;
      }
      toString() {
        return this.value;
      }
      extend(tail) {
        this.value += String(tail);
      }
      appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        }).aggregate(masked._appendPlaceholder());
      }
      get state() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      }
      set state(state) {
        Object.assign(this, state);
      }
      unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
        const shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
      shift() {
        if (!this.value.length) return '';
        const shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
      }
    }
  
    /** Append flags */
  
    /** Extract flags */
  
    // see https://github.com/microsoft/TypeScript/issues/6223
  
    /** Provides common masking stuff */
    class Masked {
      static DEFAULTS = {
        skipInvalid: true
      };
      static EMPTY_VALUES = [undefined, null, ''];
  
      /** */
  
      /** */
  
      /** Transforms value before mask processing */
  
      /** Transforms each char before mask processing */
  
      /** Validates if value is acceptable */
  
      /** Does additional processing at the end of editing */
  
      /** Format typed value to string */
  
      /** Parse string to get typed value */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      /** */
  
      constructor(opts) {
        this._value = '';
        this._update({
          ...Masked.DEFAULTS,
          ...opts
        });
        this._initialized = true;
      }
  
      /** Sets and applies new options */
      updateOptions(opts) {
        if (!this.optionsIsChanged(opts)) return;
        this.withValueRefresh(this._update.bind(this, opts));
      }
  
      /** Sets new options */
      _update(opts) {
        Object.assign(this, opts);
      }
  
      /** Mask state */
      get state() {
        return {
          _value: this.value,
          _rawInputValue: this.rawInputValue
        };
      }
      set state(state) {
        this._value = state._value;
      }
  
      /** Resets value */
      reset() {
        this._value = '';
      }
      get value() {
        return this._value;
      }
      set value(value) {
        this.resolve(value, {
          input: true
        });
      }
  
      /** Resolve new value */
      resolve(value, flags) {
        if (flags === void 0) {
          flags = {
            input: true
          };
        }
        this.reset();
        this.append(value, flags, '');
        this.doCommit();
      }
      get unmaskedValue() {
        return this.value;
      }
      set unmaskedValue(value) {
        this.resolve(value, {});
      }
      get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
      }
      set typedValue(value) {
        if (this.format) {
          this.value = this.format(value, this);
        } else {
          this.unmaskedValue = String(value);
        }
      }
  
      /** Value that includes raw user input */
      get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, {
          raw: true
        });
      }
      set rawInputValue(value) {
        this.resolve(value, {
          raw: true
        });
      }
      get displayValue() {
        return this.value;
      }
      get isComplete() {
        return true;
      }
      get isFilled() {
        return this.isComplete;
      }
  
      /** Finds nearest input position in direction */
      nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        return Math.min(this.displayValue.length, toPos - fromPos);
      }
  
      /** Extracts value in range considering flags */
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        return this.displayValue.slice(fromPos, toPos);
      }
  
      /** Extracts tail in range */
      extractTail(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }
  
      /** Appends tail */
      appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
  
      /** Appends char */
      _appendCharRaw(ch, flags) {
        if (!ch) return new ChangeDetails();
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
  
      /** Appends char */
      _appendChar(ch, flags, checkTail) {
        if (flags === void 0) {
          flags = {};
        }
        const consistentState = this.state;
        let details;
        [ch, details] = this.doPrepareChar(ch, flags);
        if (ch) details = details.aggregate(this._appendCharRaw(ch, flags));
        if (details.inserted) {
          let consistentTail;
          let appended = this.doValidate(flags) !== false;
          if (appended && checkTail != null) {
            // validation ok, check tail
            const beforeTailState = this.state;
            if (this.overwrite === true) {
              consistentTail = checkTail.state;
              for (let i = 0; i < details.rawInserted.length; ++i) {
                checkTail.unshift(this.displayValue.length - details.tailShift);
              }
            }
            let tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted.length === checkTail.toString().length;
  
            // not ok, try shift
            if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
              this.state = beforeTailState;
              consistentTail = checkTail.state;
              for (let i = 0; i < details.rawInserted.length; ++i) {
                checkTail.shift();
              }
              tailDetails = this.appendTail(checkTail);
              appended = tailDetails.rawInserted.length === checkTail.toString().length;
            }
  
            // if ok, rollback state after tail
            if (appended && tailDetails.inserted) this.state = beforeTailState;
          }
  
          // revert all if something went wrong
          if (!appended) {
            details = new ChangeDetails();
            this.state = consistentState;
            if (checkTail && consistentTail) checkTail.state = consistentTail;
          }
        }
        return details;
      }
  
      /** Appends optional placeholder at the end */
      _appendPlaceholder() {
        return new ChangeDetails();
      }
  
      /** Appends optional eager placeholder at the end */
      _appendEager() {
        return new ChangeDetails();
      }
  
      /** Appends symbols considering flags */
      append(str, flags, tail) {
        if (!isString(str)) throw new Error('value should be string');
        const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
        if (flags?.tail) flags._beforeTailState = this.state;
        let details;
        [str, details] = this.doPrepare(str, flags);
        for (let ci = 0; ci < str.length; ++ci) {
          const d = this._appendChar(str[ci], flags, checkTail);
          if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
          details.aggregate(d);
        }
        if ((this.eager === true || this.eager === 'append') && flags?.input && str) {
          details.aggregate(this._appendEager());
        }
  
        // append tail but aggregate only tailShift
        if (checkTail != null) {
          details.tailShift += this.appendTail(checkTail).tailShift;
          // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }
        return details;
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
        return new ChangeDetails();
      }
  
      /** Calls function and reapplies current value */
      withValueRefresh(fn) {
        if (this._refreshing || !this._initialized) return fn();
        this._refreshing = true;
        const rawInput = this.rawInputValue;
        const value = this.value;
        const ret = fn();
        this.rawInputValue = rawInput;
        // append lost trailing chars at the end
        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
          this.append(value.slice(this.displayValue.length), {}, '');
          this.doCommit();
        }
        delete this._refreshing;
        return ret;
      }
      runIsolated(fn) {
        if (this._isolated || !this._initialized) return fn(this);
        this._isolated = true;
        const state = this.state;
        const ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
      }
      doSkipInvalid(ch, flags, checkTail) {
        return Boolean(this.skipInvalid);
      }
  
      /** Prepares string before mask processing */
      doPrepare(str, flags) {
        if (flags === void 0) {
          flags = {};
        }
        return ChangeDetails.normalize(this.prepare ? this.prepare(str, this, flags) : str);
      }
  
      /** Prepares each char before mask processing */
      doPrepareChar(str, flags) {
        if (flags === void 0) {
          flags = {};
        }
        return ChangeDetails.normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
      }
  
      /** Validates if value is acceptable */
      doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
  
      /** Does additional processing at the end of editing */
      doCommit() {
        if (this.commit) this.commit(this.value, this);
      }
      splice(start, deleteCount, inserted, removeDirection, flags) {
        if (removeDirection === void 0) {
          removeDirection = DIRECTION.NONE;
        }
        if (flags === void 0) {
          flags = {
            input: true
          };
        }
        const tailPos = start + deleteCount;
        const tail = this.extractTail(tailPos);
        const eagerRemove = this.eager === true || this.eager === 'remove';
        let oldRawValue;
        if (eagerRemove) {
          removeDirection = forceDirection(removeDirection);
          oldRawValue = this.extractInput(0, tailPos, {
            raw: true
          });
        }
        let startChangePos = start;
        const details = new ChangeDetails();
  
        // if it is just deletion without insertion
        if (removeDirection !== DIRECTION.NONE) {
          startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);
  
          // adjust tailShift if start was aligned
          details.tailShift = startChangePos - start;
        }
        details.aggregate(this.remove(startChangePos));
        if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
          if (removeDirection === DIRECTION.FORCE_LEFT) {
            let valLength;
            while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
              details.aggregate(new ChangeDetails({
                tailShift: -1
              })).aggregate(this.remove(valLength - 1));
            }
          } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
            tail.unshift();
          }
        }
        return details.aggregate(this.append(inserted, flags, tail));
      }
      maskEquals(mask) {
        return this.mask === mask;
      }
      optionsIsChanged(opts) {
        return !objectIncludes(this, opts);
      }
      typedValueEquals(value) {
        const tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
      }
    }
    IMask.Masked = Masked;
  
    class ChunksTailDetails {
      /** */
  
      constructor(chunks, from) {
        if (chunks === void 0) {
          chunks = [];
        }
        if (from === void 0) {
          from = 0;
        }
        this.chunks = chunks;
        this.from = from;
      }
      toString() {
        return this.chunks.map(String).join('');
      }
      extend(tailChunk) {
        if (!String(tailChunk)) return;
        tailChunk = isString(tailChunk) ? new ContinuousTailDetails(String(tailChunk)) : tailChunk;
        const lastChunk = this.chunks[this.chunks.length - 1];
        const extendLast = lastChunk && (
        // if stops are same or tail has no stop
        lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
        // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof ContinuousTailDetails) {
          // check the ability to extend previous chunk
          if (extendLast) {
            // extend previous chunk
            lastChunk.extend(tailChunk.toString());
          } else {
            // append new chunk
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails) {
          if (tailChunk.stop == null) {
            // unwrap floating chunks to parent, keeping `from` pos
            let firstTailChunk;
            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          }
  
          // if tail chunk still has value
          if (tailChunk.toString()) {
            // if chunks contains stops, then popup stop to container
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
      appendTo(masked) {
        if (!(masked instanceof IMask.MaskedPattern)) {
          const tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }
        const details = new ChangeDetails();
        for (let ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          const chunk = this.chunks[ci];
          const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
          const stop = chunk.stop;
          let chunkBlock;
          if (stop != null && (
          // if block not found or stop is behind lastBlock
          !lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails ||
            // for continuous block also check if stop is exist
            masked._stops.indexOf(stop) >= 0) {
              const phDetails = masked._appendPlaceholder(stop);
              details.aggregate(phDetails);
            }
            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
          }
          if (chunkBlock) {
            const tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last
            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted;
  
            // get not inserted chars
            const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(masked.append(remainChars, {
              tail: true
            }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }
        return details;
      }
      get state() {
        return {
          chunks: this.chunks.map(c => c.state),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      }
      set state(state) {
        const {
          chunks,
          ...props
        } = state;
        Object.assign(this, props);
        this.chunks = chunks.map(cstate => {
          const chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails();
          chunk.state = cstate;
          return chunk;
        });
      }
      unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
        const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        let ci = 0;
        while (ci < this.chunks.length) {
          const chunk = this.chunks[ci];
          const shiftChar = chunk.unshift(chunkShiftPos);
          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            ++ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }
          if (shiftChar) return shiftChar;
        }
        return '';
      }
      shift() {
        if (!this.chunks.length) return '';
        let ci = this.chunks.length - 1;
        while (0 <= ci) {
          const chunk = this.chunks[ci];
          const shiftChar = chunk.shift();
          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            --ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }
          if (shiftChar) return shiftChar;
        }
        return '';
      }
    }
  
    class PatternCursor {
      constructor(masked, pos) {
        this.masked = masked;
        this._log = [];
        const {
          offset,
          index
        } = masked._mapPosToBlock(pos) || (pos < 0 ?
        // first
        {
          index: 0,
          offset: 0
        } :
        // last
        {
          index: this.masked._blocks.length,
          offset: 0
        });
        this.offset = offset;
        this.index = index;
        this.ok = false;
      }
      get block() {
        return this.masked._blocks[this.index];
      }
      get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
      get state() {
        return {
          index: this.index,
          offset: this.offset,
          ok: this.ok
        };
      }
      set state(s) {
        Object.assign(this, s);
      }
      pushState() {
        this._log.push(this.state);
      }
      popState() {
        const s = this._log.pop();
        if (s) this.state = s;
        return s;
      }
      bindBlock() {
        if (this.block) return;
        if (this.index < 0) {
          this.index = 0;
          this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
          this.index = this.masked._blocks.length - 1;
          this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
        }
      }
      _pushLeft(fn) {
        this.pushState();
        for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = this.block?.displayValue.length || 0) {
          if (fn()) return this.ok = true;
        }
        return this.ok = false;
      }
      _pushRight(fn) {
        this.pushState();
        for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
          if (fn()) return this.ok = true;
        }
        return this.ok = false;
      }
      pushLeftBeforeFilled() {
        return this._pushLeft(() => {
          if (this.block.isFixed || !this.block.value) return;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_LEFT);
          if (this.offset !== 0) return true;
        });
      }
      pushLeftBeforeInput() {
        // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|
        return this._pushLeft(() => {
          if (this.block.isFixed) return;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
          return true;
        });
      }
      pushLeftBeforeRequired() {
        return this._pushLeft(() => {
          if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
          return true;
        });
      }
      pushRightBeforeFilled() {
        return this._pushRight(() => {
          if (this.block.isFixed || !this.block.value) return;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_RIGHT);
          if (this.offset !== this.block.value.length) return true;
        });
      }
      pushRightBeforeInput() {
        return this._pushRight(() => {
          if (this.block.isFixed) return;
  
          // const o = this.offset;
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
          // HACK cases like (STILL DOES NOT WORK FOR NESTED)
          // aa|X
          // aa<X|[]>X_    - this will not work
          // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
          return true;
        });
      }
      pushRightBeforeRequired() {
        return this._pushRight(() => {
          if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
  
          // TODO check |[*]XX_
          this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
          return true;
        });
      }
    }
  
    class PatternFixedDefinition {
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      constructor(opts) {
        Object.assign(this, opts);
        this._value = '';
        this.isFixed = true;
      }
      get value() {
        return this._value;
      }
      get unmaskedValue() {
        return this.isUnmasking ? this.value : '';
      }
      get rawInputValue() {
        return this._isRawInput ? this.value : '';
      }
      get displayValue() {
        return this.value;
      }
      reset() {
        this._isRawInput = false;
        this._value = '';
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this._value.length;
        }
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
      nearestInputPos(cursorPos, direction) {
        if (direction === void 0) {
          direction = DIRECTION.NONE;
        }
        const minPos = 0;
        const maxPos = this._value.length;
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;
          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this._value.length;
        }
        return this._isRawInput ? toPos - fromPos : 0;
      }
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this._value.length;
        }
        if (flags === void 0) {
          flags = {};
        }
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
      get isComplete() {
        return true;
      }
      get isFilled() {
        return Boolean(this._value);
      }
      _appendChar(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const details = new ChangeDetails();
        if (this.isFilled) return details;
        const appendEager = this.eager === true || this.eager === 'append';
        const appended = this.char === ch;
        const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
        if (isResolved) details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
      _appendEager() {
        return this._appendChar(this.char, {
          tail: true
        });
      }
      _appendPlaceholder() {
        const details = new ChangeDetails();
        if (this.isFilled) return details;
        this._value = details.inserted = this.char;
        return details;
      }
      extractTail() {
        return new ContinuousTailDetails('');
      }
      appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
      append(str, flags, tail) {
        const details = this._appendChar(str[0], flags);
        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }
        return details;
      }
      doCommit() {}
      get state() {
        return {
          _value: this._value,
          _rawInputValue: this.rawInputValue
        };
      }
      set state(state) {
        this._value = state._value;
        this._isRawInput = Boolean(state._rawInputValue);
      }
    }
  
    class PatternInputDefinition {
      static DEFAULT_DEFINITIONS = {
        '0': /\d/,
        'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // http://stackoverflow.com/a/22075070
        '*': /./
      };
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      /** */
  
      constructor(opts) {
        const {
          parent,
          isOptional,
          placeholderChar,
          displayChar,
          lazy,
          eager,
          ...maskOpts
        } = opts;
        this.masked = createMask(maskOpts);
        Object.assign(this, {
          parent,
          isOptional,
          placeholderChar,
          displayChar,
          lazy,
          eager
        });
      }
      reset() {
        this.isFilled = false;
        this.masked.reset();
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.value.length;
        }
        if (fromPos === 0 && toPos >= 1) {
          this.isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }
        return new ChangeDetails();
      }
      get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
      }
      get unmaskedValue() {
        return this.masked.unmaskedValue;
      }
      get rawInputValue() {
        return this.masked.rawInputValue;
      }
      get displayValue() {
        return this.masked.value && this.displayChar || this.value;
      }
      get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
      }
      _appendChar(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        if (this.isFilled) return new ChangeDetails();
        const state = this.masked.state;
        // simulate input
        const details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
      }
      append(str, flags, tail) {
        // TODO probably should be done via _appendChar
        return this.masked.append(str, this.currentMaskFlags(flags), tail);
      }
      _appendPlaceholder() {
        const details = new ChangeDetails();
        if (this.isFilled || this.isOptional) return details;
        this.isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
      _appendEager() {
        return new ChangeDetails();
      }
      extractTail(fromPos, toPos) {
        return this.masked.extractTail(fromPos, toPos);
      }
      appendTail(tail) {
        return this.masked.appendTail(tail);
      }
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.value.length;
        }
        return this.masked.extractInput(fromPos, toPos, flags);
      }
      nearestInputPos(cursorPos, direction) {
        if (direction === void 0) {
          direction = DIRECTION.NONE;
        }
        const minPos = 0;
        const maxPos = this.value.length;
        const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;
          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.value.length;
        }
        return this.value.slice(fromPos, toPos).length;
      }
      doValidate(flags) {
        return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
      }
      doCommit() {
        this.masked.doCommit();
      }
      get state() {
        return {
          _value: this.value,
          _rawInputValue: this.rawInputValue,
          masked: this.masked.state,
          isFilled: this.isFilled
        };
      }
      set state(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
      }
      currentMaskFlags(flags) {
        return {
          ...flags,
          _beforeTailState: flags?._beforeTailState?.masked || flags?._beforeTailState
        };
      }
    }
  
    /** Masking by RegExp */
    class MaskedRegExp extends Masked {
      /** */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const mask = opts.mask;
        if (mask) opts.validate = value => value.search(mask) >= 0;
        super._update(opts);
      }
    }
    IMask.MaskedRegExp = MaskedRegExp;
  
    /** Pattern mask */
    class MaskedPattern extends Masked {
      static DEFAULTS = {
        lazy: true,
        placeholderChar: '_'
      };
      static STOP_CHAR = '`';
      static ESCAPE_CHAR = '\\';
      static InputDefinition = PatternInputDefinition;
      static FixedDefinition = PatternFixedDefinition;
  
      /** */
  
      /** */
  
      /** Single char for empty input */
  
      /** Single char for filled input */
  
      /** Show placeholder only when needed */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      constructor(opts) {
        super({
          ...MaskedPattern.DEFAULTS,
          ...opts,
          definitions: Object.assign({}, PatternInputDefinition.DEFAULT_DEFINITIONS, opts?.definitions)
        });
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        super._update(opts);
        this._rebuildMask();
      }
      _rebuildMask() {
        const defs = this.definitions;
        this._blocks = [];
        this.exposeBlock = undefined;
        this._stops = [];
        this._maskedBlocks = {};
        const pattern = this.mask;
        if (!pattern || !defs) return;
        let unmaskingBlock = false;
        let optionalBlock = false;
        for (let i = 0; i < pattern.length; ++i) {
          if (this.blocks) {
            const p = pattern.slice(i);
            const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
            // order by key length
            bNames.sort((a, b) => b.length - a.length);
            // use block name with max length
            const bName = bNames[0];
            if (bName) {
              const {
                expose,
                repeat,
                ...bOpts
              } = normalizeOpts(this.blocks[bName]); // TODO type Opts<Arg & Extra>
              const blockOpts = {
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar,
                overwrite: this.overwrite,
                ...bOpts,
                repeat,
                parent: this
              };
              const maskedBlock = repeat != null ? new IMask.RepeatBlock(blockOpts /* TODO */) : createMask(blockOpts);
              if (maskedBlock) {
                this._blocks.push(maskedBlock);
                if (expose) this.exposeBlock = maskedBlock;
  
                // store block index
                if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
                this._maskedBlocks[bName].push(this._blocks.length - 1);
              }
              i += bName.length - 1;
              continue;
            }
          }
          let char = pattern[i];
          let isInput = (char in defs);
          if (char === MaskedPattern.STOP_CHAR) {
            this._stops.push(this._blocks.length);
            continue;
          }
          if (char === '{' || char === '}') {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }
          if (char === '[' || char === ']') {
            optionalBlock = !optionalBlock;
            continue;
          }
          if (char === MaskedPattern.ESCAPE_CHAR) {
            ++i;
            char = pattern[i];
            if (!char) break;
            isInput = false;
          }
          const def = isInput ? new PatternInputDefinition({
            isOptional: optionalBlock,
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            ...normalizeOpts(defs[char]),
            parent: this
          }) : new PatternFixedDefinition({
            char,
            eager: this.eager,
            isUnmasking: unmaskingBlock
          });
          this._blocks.push(def);
        }
      }
      get state() {
        return {
          ...super.state,
          _blocks: this._blocks.map(b => b.state)
        };
      }
      set state(state) {
        if (!state) {
          this.reset();
          return;
        }
        const {
          _blocks,
          ...maskedState
        } = state;
        this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
        super.state = maskedState;
      }
      reset() {
        super.reset();
        this._blocks.forEach(b => b.reset());
      }
      get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
      }
      get isFilled() {
        return this._blocks.every(b => b.isFilled);
      }
      get isFixed() {
        return this._blocks.every(b => b.isFixed);
      }
      get isOptional() {
        return this._blocks.every(b => b.isOptional);
      }
      doCommit() {
        this._blocks.forEach(b => b.doCommit());
        super.doCommit();
      }
      get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
      }
      set unmaskedValue(unmaskedValue) {
        if (this.exposeBlock) {
          const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          this.exposeBlock.unmaskedValue = unmaskedValue;
          this.appendTail(tail);
          this.doCommit();
        } else super.unmaskedValue = unmaskedValue;
      }
      get value() {
        return this.exposeBlock ? this.exposeBlock.value :
        // TODO return _value when not in change?
        this._blocks.reduce((str, b) => str += b.value, '');
      }
      set value(value) {
        if (this.exposeBlock) {
          const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          this.exposeBlock.value = value;
          this.appendTail(tail);
          this.doCommit();
        } else super.value = value;
      }
      get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
      }
      set typedValue(value) {
        if (this.exposeBlock) {
          const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          this.exposeBlock.typedValue = value;
          this.appendTail(tail);
          this.doCommit();
        } else super.typedValue = value;
      }
      get displayValue() {
        return this._blocks.reduce((str, b) => str += b.displayValue, '');
      }
      appendTail(tail) {
        return super.appendTail(tail).aggregate(this._appendPlaceholder());
      }
      _appendEager() {
        const details = new ChangeDetails();
        let startBlockIndex = this._mapPosToBlock(this.displayValue.length)?.index;
        if (startBlockIndex == null) return details;
  
        // TODO test if it works for nested pattern masks
        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
        for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
          const d = this._blocks[bi]._appendEager();
          if (!d.inserted) break;
          details.aggregate(d);
        }
        return details;
      }
      _appendCharRaw(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const blockIter = this._mapPosToBlock(this.displayValue.length);
        const details = new ChangeDetails();
        if (!blockIter) return details;
        for (let bi = blockIter.index, block; block = this._blocks[bi]; ++bi) {
          const blockDetails = block._appendChar(ch, {
            ...flags,
            _beforeTailState: flags._beforeTailState?._blocks?.[bi]
          });
          details.aggregate(blockDetails);
          if (blockDetails.skip || blockDetails.rawInserted) break; // go next char
        }
        return details;
      }
      extractTail(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        const chunkTail = new ChunksTailDetails();
        if (fromPos === toPos) return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
          const blockChunk = b.extractTail(bFromPos, bToPos);
          blockChunk.stop = this._findStopBefore(bi);
          blockChunk.from = this._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });
        return chunkTail;
      }
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        if (flags === void 0) {
          flags = {};
        }
        if (fromPos === toPos) return '';
        let input = '';
        this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
          input += b.extractInput(fromPos, toPos, flags);
        });
        return input;
      }
      _findStopBefore(blockIndex) {
        let stopBefore;
        for (let si = 0; si < this._stops.length; ++si) {
          const stop = this._stops[si];
          if (stop <= blockIndex) stopBefore = stop;else break;
        }
        return stopBefore;
      }
  
      /** Appends placeholder depending on laziness */
      _appendPlaceholder(toBlockIndex) {
        const details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;
        const startBlockIter = this._mapPosToBlock(this.displayValue.length);
        if (!startBlockIter) return details;
        const startBlockIndex = startBlockIter.index;
        const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
          if (!b.lazy || toBlockIndex != null) {
            const bDetails = b._appendPlaceholder(b._blocks?.length);
            this._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });
        return details;
      }
  
      /** Finds block in pos */
      _mapPosToBlock(pos) {
        let accVal = '';
        for (let bi = 0; bi < this._blocks.length; ++bi) {
          const block = this._blocks[bi];
          const blockStartPos = accVal.length;
          accVal += block.displayValue;
          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
      _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
      }
      _forEachBlocksInRange(fromPos, toPos, fn) {
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        const fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
          const toBlockIter = this._mapPosToBlock(toPos);
          // process first block
          const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          const fromBlockStartPos = fromBlockIter.offset;
          const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
          if (toBlockIter && !isSameBlock) {
            // process intermediate blocks
            for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
            }
  
            // process last block
            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        const removeDetails = super.remove(fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });
        return removeDetails;
      }
      nearestInputPos(cursorPos, direction) {
        if (direction === void 0) {
          direction = DIRECTION.NONE;
        }
        if (!this._blocks.length) return 0;
        const cursor = new PatternCursor(this, cursorPos);
        if (direction === DIRECTION.NONE) {
          // -------------------------------------------------
          // NONE should only go out from fixed to the right!
          // -------------------------------------------------
          if (cursor.pushRightBeforeInput()) return cursor.pos;
          cursor.popState();
          if (cursor.pushLeftBeforeInput()) return cursor.pos;
          return this.displayValue.length;
        }
  
        // FORCE is only about a|* otherwise is 0
        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // try to break fast when *|a
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeFilled();
            if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
            cursor.popState();
          }
  
          // forward flow
          cursor.pushLeftBeforeInput();
          cursor.pushLeftBeforeRequired();
          cursor.pushLeftBeforeFilled();
  
          // backward flow
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
          }
          if (cursor.ok) return cursor.pos;
          if (direction === DIRECTION.FORCE_LEFT) return 0;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          return 0;
        }
        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // forward flow
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.pushRightBeforeFilled()) return cursor.pos;
          if (direction === DIRECTION.FORCE_RIGHT) return this.displayValue.length;
  
          // backward flow
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
        }
        return cursorPos;
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        let total = 0;
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
          total += b.totalInputPositions(bFromPos, bToPos);
        });
        return total;
      }
  
      /** Get block by name */
      maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
  
      /** Get all blocks by name */
      maskedBlocks(name) {
        const indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(gi => this._blocks[gi]);
      }
    }
    IMask.MaskedPattern = MaskedPattern;
  
    /** Pattern which accepts ranges */
    class MaskedRange extends MaskedPattern {
      /**
        Optionally sets max length of pattern.
        Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
      */
  
      /** Min bound */
  
      /** Max bound */
  
      /** */
  
      get _matchFrom() {
        return this.maxLength - String(this.from).length;
      }
      constructor(opts) {
        super(opts); // mask will be created in _update
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const {
          to = this.to || 0,
          from = this.from || 0,
          maxLength = this.maxLength || 0,
          autofix = this.autofix,
          ...patternOpts
        } = opts;
        this.to = to;
        this.from = from;
        this.maxLength = Math.max(String(to).length, maxLength);
        this.autofix = autofix;
        const fromStr = String(this.from).padStart(this.maxLength, '0');
        const toStr = String(this.to).padStart(this.maxLength, '0');
        let sameCharsCount = 0;
        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
        patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
        super._update(patternOpts);
      }
      get isComplete() {
        return super.isComplete && Boolean(this.value);
      }
      boundaries(str) {
        let minstr = '';
        let maxstr = '';
        const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');
        return [minstr, maxstr];
      }
      doPrepareChar(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        let details;
        [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
        if (!this.autofix || !ch) {
          details.skip = !this.isComplete;
          return [ch, details];
        }
        const fromStr = String(this.from).padStart(this.maxLength, '0');
        const toStr = String(this.to).padStart(this.maxLength, '0');
        const nextVal = this.value + ch;
        if (nextVal.length > this.maxLength) return ['', details];
        const [minstr, maxstr] = this.boundaries(nextVal);
        if (Number(maxstr) < this.from) return [fromStr[nextVal.length - 1], details];
        if (Number(minstr) > this.to) {
          if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
            return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
          }
          return [toStr[nextVal.length - 1], details];
        }
        return [ch, details];
      }
      doValidate(flags) {
        const str = this.value;
        const firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        const [minstr, maxstr] = this.boundaries(str);
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
      }
    }
    IMask.MaskedRange = MaskedRange;
  
    /** Date mask */
    class MaskedDate extends MaskedPattern {
      static GET_DEFAULT_BLOCKS = () => ({
        d: {
          mask: MaskedRange,
          from: 1,
          to: 31,
          maxLength: 2
        },
        m: {
          mask: MaskedRange,
          from: 1,
          to: 12,
          maxLength: 2
        },
        Y: {
          mask: MaskedRange,
          from: 1900,
          to: 9999
        }
      });
      static DEFAULTS = {
        mask: Date,
        pattern: 'd{.}`m{.}`Y',
        format: (date, masked) => {
          if (!date) return '';
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          return [day, month, year].join('.');
        },
        parse: (str, masked) => {
          const [day, month, year] = str.split('.').map(Number);
          return new Date(year, month - 1, day);
        }
      };
      static extractPatternOptions(opts) {
        const {
          mask,
          pattern,
          ...patternOpts
        } = opts;
        return {
          ...patternOpts,
          mask: isString(mask) ? mask : pattern
        };
      }
  
      /** Pattern mask for date according to {@link MaskedDate#format} */
  
      /** Start date */
  
      /** End date */
  
      /** */
  
      /** Format typed value to string */
  
      /** Parse string to get typed value */
  
      constructor(opts) {
        super(MaskedDate.extractPatternOptions({
          ...MaskedDate.DEFAULTS,
          ...opts
        }));
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const {
          mask,
          pattern,
          blocks,
          ...patternOpts
        } = {
          ...MaskedDate.DEFAULTS,
          ...opts
        };
        const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
        // adjust year block
        if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
        if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
          patternBlocks.m.from = opts.min.getMonth() + 1;
          patternBlocks.m.to = opts.max.getMonth() + 1;
          if (patternBlocks.m.from === patternBlocks.m.to) {
            patternBlocks.d.from = opts.min.getDate();
            patternBlocks.d.to = opts.max.getDate();
          }
        }
        Object.assign(patternBlocks, this.blocks, blocks);
  
        // add autofix
        Object.keys(patternBlocks).forEach(bk => {
          const b = patternBlocks[bk];
          if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
        });
        super._update({
          ...patternOpts,
          mask: isString(mask) ? mask : pattern,
          blocks: patternBlocks
        });
      }
      doValidate(flags) {
        const date = this.date;
        return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
  
      /** Checks if date is exists */
      isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
      }
  
      /** Parsed Date */
      get date() {
        return this.typedValue;
      }
      set date(date) {
        this.typedValue = date;
      }
      get typedValue() {
        return this.isComplete ? super.typedValue : null;
      }
      set typedValue(value) {
        super.typedValue = value;
      }
      maskEquals(mask) {
        return mask === Date || super.maskEquals(mask);
      }
      optionsIsChanged(opts) {
        return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
      }
    }
    IMask.MaskedDate = MaskedDate;
  
    /** Dynamic mask for choosing appropriate mask in run-time */
    class MaskedDynamic extends Masked {
      static DEFAULTS;
  
      /** Currently chosen mask */
  
      /** Currently chosen mask */
  
      /** Compliled {@link Masked} options */
  
      /** Chooses {@link Masked} depending on input value */
  
      constructor(opts) {
        super({
          ...MaskedDynamic.DEFAULTS,
          ...opts
        });
        this.currentMask = undefined;
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        super._update(opts);
        if ('mask' in opts) {
          this.exposeMask = undefined;
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
            const {
              expose,
              ...maskOpts
            } = normalizeOpts(m);
            const masked = createMask({
              overwrite: this._overwrite,
              eager: this._eager,
              skipInvalid: this._skipInvalid,
              ...maskOpts
            });
            if (expose) this.exposeMask = masked;
            return masked;
          }) : [];
  
          // this.currentMask = this.doDispatch(''); // probably not needed but lets see
        }
      }
      _appendCharRaw(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const details = this._applyDispatch(ch, flags);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        }
        return details;
      }
      _applyDispatch(appended, flags, tail) {
        if (appended === void 0) {
          appended = '';
        }
        if (flags === void 0) {
          flags = {};
        }
        if (tail === void 0) {
          tail = '';
        }
        const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        const inputValue = this.rawInputValue;
        const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
        const tailValue = inputValue.slice(insertValue.length);
        const prevMask = this.currentMask;
        const details = new ChangeDetails();
        const prevMaskState = prevMask?.state;
  
        // clone flags to prevent overwriting `_beforeTailState`
        this.currentMask = this.doDispatch(appended, {
          ...flags
        }, tail);
  
        // restore state after dispatch
        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset();
            if (insertValue) {
              const d = this.currentMask.append(insertValue, {
                raw: true
              });
              details.tailShift = d.inserted.length - prevValueBeforeTail.length;
            }
            if (tailValue) {
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else if (prevMaskState) {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
          }
        }
        return details;
      }
      _appendPlaceholder() {
        const details = this._applyDispatch();
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendPlaceholder());
        }
        return details;
      }
      _appendEager() {
        const details = this._applyDispatch();
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendEager());
        }
        return details;
      }
      appendTail(tail) {
        const details = new ChangeDetails();
        if (tail) details.aggregate(this._applyDispatch('', {}, tail));
        return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
      }
      currentMaskFlags(flags) {
        return {
          ...flags,
          _beforeTailState: flags._beforeTailState?.currentMaskRef === this.currentMask && flags._beforeTailState?.currentMask || flags._beforeTailState
        };
      }
      doDispatch(appended, flags, tail) {
        if (flags === void 0) {
          flags = {};
        }
        if (tail === void 0) {
          tail = '';
        }
        return this.dispatch(appended, this, flags, tail);
      }
      doValidate(flags) {
        return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
      }
      doPrepare(str, flags) {
        if (flags === void 0) {
          flags = {};
        }
        let [s, details] = super.doPrepare(str, flags);
        if (this.currentMask) {
          let currentDetails;
          [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
          details = details.aggregate(currentDetails);
        }
        return [s, details];
      }
      doPrepareChar(str, flags) {
        if (flags === void 0) {
          flags = {};
        }
        let [s, details] = super.doPrepareChar(str, flags);
        if (this.currentMask) {
          let currentDetails;
          [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
          details = details.aggregate(currentDetails);
        }
        return [s, details];
      }
      reset() {
        this.currentMask?.reset();
        this.compiledMasks.forEach(m => m.reset());
      }
      get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
      }
      set value(value) {
        if (this.exposeMask) {
          this.exposeMask.value = value;
          this.currentMask = this.exposeMask;
          this._applyDispatch();
        } else super.value = value;
      }
      get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
      }
      set unmaskedValue(unmaskedValue) {
        if (this.exposeMask) {
          this.exposeMask.unmaskedValue = unmaskedValue;
          this.currentMask = this.exposeMask;
          this._applyDispatch();
        } else super.unmaskedValue = unmaskedValue;
      }
      get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
      }
      set typedValue(typedValue) {
        if (this.exposeMask) {
          this.exposeMask.typedValue = typedValue;
          this.currentMask = this.exposeMask;
          this._applyDispatch();
          return;
        }
        let unmaskedValue = String(typedValue);
  
        // double check it
        if (this.currentMask) {
          this.currentMask.typedValue = typedValue;
          unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
      }
      get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : '';
      }
      get isComplete() {
        return Boolean(this.currentMask?.isComplete);
      }
      get isFilled() {
        return Boolean(this.currentMask?.isFilled);
      }
      remove(fromPos, toPos) {
        const details = new ChangeDetails();
        if (this.currentMask) {
          details.aggregate(this.currentMask.remove(fromPos, toPos))
          // update with dispatch
          .aggregate(this._applyDispatch());
        }
        return details;
      }
      get state() {
        return {
          ...super.state,
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(m => m.state),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask?.state
        };
      }
      set state(state) {
        const {
          compiledMasks,
          currentMaskRef,
          currentMask,
          ...maskedState
        } = state;
        if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }
        super.state = maskedState;
      }
      extractInput(fromPos, toPos, flags) {
        return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
      }
      extractTail(fromPos, toPos) {
        return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
      }
      doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        super.doCommit();
      }
      nearestInputPos(cursorPos, direction) {
        return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
      }
      get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite;
      }
      set overwrite(overwrite) {
        this._overwrite = overwrite;
      }
      get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager;
      }
      set eager(eager) {
        this._eager = eager;
      }
      get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
      }
      set skipInvalid(skipInvalid) {
        this._skipInvalid = skipInvalid;
      }
      maskEquals(mask) {
        return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
          if (!mask[mi]) return;
          const {
            mask: oldMask,
            ...restOpts
          } = mask[mi];
          return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
        }) : super.maskEquals(mask);
      }
      typedValueEquals(value) {
        return Boolean(this.currentMask?.typedValueEquals(value));
      }
    }
    MaskedDynamic.DEFAULTS = {
      dispatch: (appended, masked, flags, tail) => {
        if (!masked.compiledMasks.length) return;
        const inputValue = masked.rawInputValue;
  
        // simulate input
        const inputs = masked.compiledMasks.map((m, index) => {
          const isCurrent = masked.currentMask === m;
          const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT);
          if (m.rawInputValue !== inputValue) {
            m.reset();
            m.append(inputValue, {
              raw: true
            });
          } else if (!isCurrent) {
            m.remove(startInputPos);
          }
          m.append(appended, masked.currentMaskFlags(flags));
          m.appendTail(tail);
          return {
            index,
            weight: m.rawInputValue.length,
            totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT)))
          };
        });
  
        // pop masks with longer values first
        inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
        return masked.compiledMasks[inputs[0].index];
      }
    };
    IMask.MaskedDynamic = MaskedDynamic;
  
    /** Pattern which validates enum values */
    class MaskedEnum extends MaskedPattern {
      constructor(opts) {
        super(opts); // mask will be created in _update
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const {
          enum: _enum,
          ...eopts
        } = opts;
        if (_enum) {
          const lengths = _enum.map(e => e.length);
          const requiredLength = Math.min(...lengths);
          const optionalLength = Math.max(...lengths) - requiredLength;
          eopts.mask = '*'.repeat(requiredLength);
          if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
          this.enum = _enum;
        }
        super._update(eopts);
      }
      doValidate(flags) {
        return this.enum.some(e => e.indexOf(this.unmaskedValue) === 0) && super.doValidate(flags);
      }
    }
    IMask.MaskedEnum = MaskedEnum;
  
    /** Masking by custom Function */
    class MaskedFunction extends Masked {
      /** */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        super._update({
          ...opts,
          validate: opts.mask
        });
      }
    }
    IMask.MaskedFunction = MaskedFunction;
  
    /** Number mask */
    class MaskedNumber extends Masked {
      static UNMASKED_RADIX = '.';
      static EMPTY_VALUES = [...Masked.EMPTY_VALUES, 0];
      static DEFAULTS = {
        mask: Number,
        radix: ',',
        thousandsSeparator: '',
        mapToRadix: [MaskedNumber.UNMASKED_RADIX],
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        scale: 2,
        normalizeZeros: true,
        padFractionalZeros: false,
        parse: Number,
        format: n => n.toLocaleString('en-US', {
          useGrouping: false,
          maximumFractionDigits: 20
        })
      };
  
      /** Single char */
  
      /** Single char */
  
      /** Array of single chars */
  
      /** */
  
      /** */
  
      /** Digits after point */
  
      /** Flag to remove leading and trailing zeros in the end of editing */
  
      /** Flag to pad trailing zeros after point in the end of editing */
  
      /** Enable characters overwriting */
  
      /** */
  
      /** */
  
      /** Format typed value to string */
  
      /** Parse string to get typed value */
  
      constructor(opts) {
        super({
          ...MaskedNumber.DEFAULTS,
          ...opts
        });
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        super._update(opts);
        this._updateRegExps();
      }
      _updateRegExps() {
        const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
        const mid = '\\d*';
        const end = (this.scale ? `(${escapeRegExp(this.radix)}\\d{0,${this.scale}})?` : '') + '$';
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp(`[${this.mapToRadix.map(escapeRegExp).join('')}]`, 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }
      _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }
      _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        const parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
      doPrepareChar(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
        /*
          radix should be mapped when
          1) input is done from keyboard = flags.input && flags.raw
          2) unmasked value is set = !flags.input && !flags.raw
          and should not be mapped when
          1) value is set = flags.input && !flags.raw
          2) raw value is set = !flags.input && flags.raw
        */
        flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
        if (ch && !prepCh) details.skip = true;
        if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
        return [prepCh, details];
      }
      _separatorsCount(to, extendOnSeparators) {
        if (extendOnSeparators === void 0) {
          extendOnSeparators = false;
        }
        let count = 0;
        for (let pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
          }
        }
        return count;
      }
      _separatorsCountFromSlice(slice) {
        if (slice === void 0) {
          slice = this._value;
        }
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }
      extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
      }
      _appendCharRaw(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        if (!this.thousandsSeparator) return super._appendCharRaw(ch, flags);
        const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        const appendDetails = super._appendCharRaw(ch, flags);
        this._value = this._insertThousandsSeparators(this._value);
        const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
      }
      _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          const searchFrom = pos - this.thousandsSeparator.length + 1;
          const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos) return separatorPos;
        }
        return -1;
      }
      _adjustRangeWithSeparators(from, to) {
        const separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
        const separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        const valueBeforePos = this.value.slice(0, fromPos);
        const valueAfterPos = this.value.slice(toPos);
        const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }
      nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;
        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            {
              const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
              if (separatorAtLeftPos >= 0) {
                const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                  return separatorAtLeftPos;
                }
              }
              break;
            }
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            {
              const separatorAtRightPos = this._findSeparatorAround(cursorPos);
              if (separatorAtRightPos >= 0) {
                return separatorAtRightPos + this.thousandsSeparator.length;
              }
            }
        }
        return cursorPos;
      }
      doValidate(flags) {
        // validate as string
        let valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (valid) {
          // validate as number
          const number = this.number;
          valid = valid && !isNaN(number) && (
          // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && (
          // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }
        return valid && super.doValidate(flags);
      }
      doCommit() {
        if (this.value) {
          const number = this.number;
          let validnum = number;
  
          // check bounds
          if (this.min != null) validnum = Math.max(validnum, this.min);
          if (this.max != null) validnum = Math.min(validnum, this.max);
          if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
          let formatted = this.value;
          if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }
        super.doCommit();
      }
      _normalizeZeros(value) {
        const parts = this._removeThousandsSeparators(value).split(this.radix);
  
        // remove leading zeros
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
        // add leading zero
        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
          if (!parts[1].length) parts.length = 1; // remove fractional
        }
        return this._insertThousandsSeparators(parts.join(this.radix));
      }
      _padFractionalZeros(value) {
        if (!value) return value;
        const parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }
      doSkipInvalid(ch, flags, checkTail) {
        if (flags === void 0) {
          flags = {};
        }
        const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
        return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
      }
      get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
      }
      set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
      }
      get typedValue() {
        return this.parse(this.unmaskedValue, this);
      }
      set typedValue(n) {
        this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
      }
  
      /** Parsed Number */
      get number() {
        return this.typedValue;
      }
      set number(number) {
        this.typedValue = number;
      }
      get allowNegative() {
        return this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
      get allowPositive() {
        return this.min != null && this.min > 0 || this.max != null && this.max > 0;
      }
      typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
      }
    }
    IMask.MaskedNumber = MaskedNumber;
  
    /** Mask pipe source and destination types */
    const PIPE_TYPE = {
      MASKED: 'value',
      UNMASKED: 'unmaskedValue',
      TYPED: 'typedValue'
    };
    /** Creates new pipe function depending on mask type, source and destination options */
    function createPipe(arg, from, to) {
      if (from === void 0) {
        from = PIPE_TYPE.MASKED;
      }
      if (to === void 0) {
        to = PIPE_TYPE.MASKED;
      }
      const masked = createMask(arg);
      return value => masked.runIsolated(m => {
        m[from] = value;
        return m[to];
      });
    }
  
    /** Pipes value through mask depending on mask type, source and destination options */
    function pipe(value, mask, from, to) {
      return createPipe(mask, from, to)(value);
    }
    IMask.PIPE_TYPE = PIPE_TYPE;
    IMask.createPipe = createPipe;
    IMask.pipe = pipe;
  
    /** Pattern mask */
    class RepeatBlock extends MaskedPattern {
      get repeatFrom() {
        return (Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) ?? 0;
      }
      get repeatTo() {
        return (Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) ?? Infinity;
      }
      constructor(opts) {
        super(opts);
      }
      updateOptions(opts) {
        super.updateOptions(opts);
      }
      _update(opts) {
        const {
          repeat,
          ...blockOpts
        } = normalizeOpts(opts); // TODO type
        this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
        const block = createMask(this._blockOpts);
        this.repeat = repeat ?? block.repeat ?? this.repeat ?? Infinity; // TODO type
  
        super._update({
          mask: 'm'.repeat(Math.max(this.repeatTo === Infinity && this._blocks?.length || 0, this.repeatFrom)),
          blocks: {
            m: block
          },
          eager: block.eager,
          overwrite: block.overwrite,
          skipInvalid: block.skipInvalid,
          lazy: block.lazy,
          placeholderChar: block.placeholderChar,
          displayChar: block.displayChar
        });
      }
      _allocateBlock(bi) {
        if (bi < this._blocks.length) return this._blocks[bi];
        if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
          this._blocks.push(createMask(this._blockOpts));
          this.mask += 'm';
          return this._blocks[this._blocks.length - 1];
        }
      }
      _appendCharRaw(ch, flags) {
        if (flags === void 0) {
          flags = {};
        }
        const details = new ChangeDetails();
        for (let bi = this._mapPosToBlock(this.displayValue.length)?.index ?? Math.max(this._blocks.length - 1, 0), block, allocated;
        // try to get a block or
        // try to allocate a new block if not allocated already
        block = this._blocks[bi] ?? (allocated = !allocated && this._allocateBlock(bi)); ++bi) {
          const blockDetails = block._appendChar(ch, {
            ...flags,
            _beforeTailState: flags._beforeTailState?._blocks?.[bi]
          });
          if (blockDetails.skip && allocated) {
            // remove the last allocated block and break
            this._blocks.pop();
            this.mask = this.mask.slice(1);
            break;
          }
          details.aggregate(blockDetails);
          if (blockDetails.skip || blockDetails.rawInserted) break; // go next char
        }
        return details;
      }
      _trimEmptyTail(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        const firstBlockIndex = Math.max(this._mapPosToBlock(fromPos)?.index || 0, this.repeatFrom, 0);
        let lastBlockIndex;
        if (toPos != null) lastBlockIndex = this._mapPosToBlock(toPos)?.index;
        if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
        let removeCount = 0;
        for (let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount) {
          if (this._blocks[blockIndex].unmaskedValue) break;
        }
        if (removeCount) {
          this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
          this.mask = this.mask.slice(removeCount);
        }
      }
      reset() {
        super.reset();
        this._trimEmptyTail();
      }
      remove(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos === void 0) {
          toPos = this.displayValue.length;
        }
        const removeDetails = super.remove(fromPos, toPos);
        this._trimEmptyTail(fromPos, toPos);
        return removeDetails;
      }
      totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) {
          fromPos = 0;
        }
        if (toPos == null && this.repeatTo === Infinity) return Infinity;
        return super.totalInputPositions(fromPos, toPos);
      }
      get state() {
        return super.state;
      }
      set state(state) {
        this._blocks.length = state._blocks.length;
        this.mask = this.mask.slice(0, this._blocks.length);
        super.state = state;
      }
    }
    IMask.RepeatBlock = RepeatBlock;
  
    try {
      globalThis.IMask = IMask;
    } catch {}
  
    exports.ChangeDetails = ChangeDetails;
    exports.ChunksTailDetails = ChunksTailDetails;
    exports.DIRECTION = DIRECTION;
    exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
    exports.HTMLInputMaskElement = HTMLInputMaskElement;
    exports.HTMLMaskElement = HTMLMaskElement;
    exports.InputMask = InputMask;
    exports.MaskElement = MaskElement;
    exports.Masked = Masked;
    exports.MaskedDate = MaskedDate;
    exports.MaskedDynamic = MaskedDynamic;
    exports.MaskedEnum = MaskedEnum;
    exports.MaskedFunction = MaskedFunction;
    exports.MaskedNumber = MaskedNumber;
    exports.MaskedPattern = MaskedPattern;
    exports.MaskedRange = MaskedRange;
    exports.MaskedRegExp = MaskedRegExp;
    exports.PIPE_TYPE = PIPE_TYPE;
    exports.PatternFixedDefinition = PatternFixedDefinition;
    exports.PatternInputDefinition = PatternInputDefinition;
    exports.RepeatBlock = RepeatBlock;
    exports.createMask = createMask;
    exports.createPipe = createPipe;
    exports.default = IMask;
    exports.forceDirection = forceDirection;
    exports.normalizeOpts = normalizeOpts;
    exports.pipe = pipe;
  
    Object.defineProperty(exports, '__esModule', { value: true });
  
  }));
  //# sourceMappingURL=imask.js.map;
{/* <div class="file-funnel">
    <input type="file" name="file" class="file-funnel__file-input" multiple="multiple">
    <div class="file-funnel__text">
        <span class="file-funnel__caption">
            Загрузить файлы
        </span>
        <span class="file-funnel__direction">
            Например: БТИ, экспликация (поэтажный план), эскиз планируемых работ (можно от руки)
        </span> 
    </div>
    <div class="file-funnel__receiver">
        +
    </div>
    <div class="file-funnel__docs">
        <button type="button" class="file-funnel-btn file-funnel-btn--reset">Очистить</button>
    </div>
</div> */}

class FileFunnel {
    constructor(elem, option = {
        deskBox: '.file-funnel__text',
        reciever: '.file-funnel__receiver',
        accept: ['.pdf', '.jpg', '.png'],
        docsBox: '.file-funnel__docs'
    }) {
        this.funnel = elem; //основной контейнер 
        this.description = this.funnel.querySelector(option.deskBox); //блок с текстом 
        this.reveiver = this.funnel.querySelector(option.reciever); //блок в который загружаются файлы
        this.fileInput = ''; //инпут для файлов
        this.accept = option.accept; //массив с разрешенными расширениями
        this.docsBox = this.funnel.querySelector(option.docsBox);
        this.fileStorage = [];
        this.multiple = this.funnel.querySelector('input').getAttribute('multiple');
        this.init();

    }
    init() { 
 
        if (typeof this.funnel == 'string') {
            this.funnel = document.querySelector(this.funnel);
        } else if (typeof this.funnel == 'object') {

        } else {
            console.error('Ошибка FileFunnel. Передайте в параметре "elem" класс или объект')
            return 'error'
        }

        this.fileInput = this.funnel.querySelector('.file-funnel__file-input');

        // при клике на элемент открывается окно выбора файла
        this.funnel.addEventListener('click', () => {
            if(!this.docsBox.classList.contains('file-funnel__docs--show')){
                this.fileInput.click();
            }  
        });
        
        this.reveiver.addEventListener('dragenter', (e) => {
            e.preventDefault();
            this.funnel.classList.add('file-funnel__dragenter');
        });
        this.reveiver.addEventListener("dragover", (e) => {
            e.preventDefault();
            // this.funnel.classList.add('file-funnel__dragenter');
        });
        this.reveiver.addEventListener('dragleave', (e) => {
            e.preventDefault();
            this.funnel.classList.remove('file-funnel__dragenter');
        });

        // обрабатываю данные файлов подгуженных перетаскиванием
        this.reveiver.addEventListener('drop', (e) => {
            e.preventDefault();
            this.funnel.classList.remove('file-funnel__dragenter');
            let arFiles = []; 
              
            if(this.multiple){
                arFiles = Array.from(e.dataTransfer.files);  
                this.fileStorage = this.extensionFilter(arFiles);  
                this.visualizeFiles(this.fileStorage); 
            }else{
                arFiles = Array.from(e.dataTransfer.files);  
                let tmpArFiles = [];
                tmpArFiles.push(arFiles[0])
                this.fileStorage = this.extensionFilter(tmpArFiles);  
                this.visualizeFiles(this.fileStorage);  
            }
 
        });

        // обрабатываю данные файлов подгуженных кликом
        this.fileInput.addEventListener('change', (e)=>{
            let arFiles = Array.from(e.target.files); 
            this.fileStorage = this.extensionFilter(arFiles);  
            this.visualizeFiles(this.fileStorage); 
        });

        // клик на кнопку очистки
        let resetBtn = this.docsBox.querySelector('.file-funnel-btn--reset');
        if(resetBtn){
            resetBtn.addEventListener('click', (e)=>{
                e.stopPropagation();
                // console.log("очищаем все")
                this.reset();  
            })
        }
    } 
     //добавление на страницу отображение отобранных файлов 
    visualizeFiles(arr){ 
        if(arr.length > 0){
            this.docsBox.classList.add('file-funnel__docs--show');
            arr.forEach(item => {
                this.createFileElem(item);
            });
        } 
    }

    // фильтрация файлов по указанным расширениям
    extensionFilter(arr){
        let arFilteredFiles = [];  
        arr.forEach(item => {
            let extensionFile = this.getExtension(item.name); 
            if (this.accept.includes(extensionFile)) {
                arFilteredFiles.push(item);
            }
        });
        return arFilteredFiles;
    }

    // создание элементов показывающих данных подгруженных файлы
    createFileElem(elem) { 
        let fileHTML = `
            <div class="file-funnel-doc">
                <span class="file-funnel-doc__caption">${this.getFileName(elem.name)}</span>
                <span class="file-funnel-doc__extension-and-size"><span class="file-funnel-doc__extension">${this.getExtension(elem.name, true)}</span> (${this.getFIleSize(elem.size)}kb)</span>
            </div>
        `; 
        
        this.docsBox.insertAdjacentHTML('afterBegin', fileHTML); 
    }

    // принимает строку с названием и расширением файла и возвращает его расширение
    getExtension(str, deletePoint = false) { 
        if(deletePoint){
            let s = str.match(/\.[0-9a-z]+$/i)[0];
            return s.slice(1);
        }else{
            return str.match(/\.[0-9a-z]+$/i)[0];
        }
       
    }

    // принимает строку с названием и расширением файла и возвращает его название
    getFileName(str) {
        return str.match(/(.*)\.[^.]+$/i)[1];
    }

    getFIleSize(size){
        let n = Number(size) / 1024;
        return n.toFixed(2);
    }
    // возвращает данные подгруженных файлов.
    getUploadedFiles(){
        return this.fileStorage;
    }
    // очистка
    reset(){
        this.fileStorage = [];
        let nlVizFiles = this.docsBox.querySelectorAll('.file-funnel-doc');
        if(nlVizFiles.length > 0){
            nlVizFiles.forEach(item=>{
                item.remove();
            });
        }
        this.docsBox.classList.remove('file-funnel__docs--show');
    }

};
/**
 * Swiper 8.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2022
 */

 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function T(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function C(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,T=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const C=a.grid&&a.grid.rows>1&&e.grid;let $;C&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(C&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),T%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),C&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(p||l.initialSlide||0)===(c||0)&&s&&r.emit("beforeSlideChangeStart");const v=-o[g];if(r.updateProgress(v),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0);const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((t,s)=>{const a=d(t);s<e.loopedSlides&&o.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function O(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;!!l.noSwipingClass&&""!==l.noSwipingClass&&p.target&&p.target.shadowRoot&&e.path&&e.path[0]&&(h=d(e.path[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(f?function(e,t){return void 0===t&&(t=this),function t(s){return s&&s!==a()&&s!==r()?(s.assignedSlot&&(s=s.assignedSlot),s.closest(e)||t(s.getRootNode().host)):null}(t)}(m,p.target):h.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const g=o.currentX,v=o.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(g<=b||g>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function L(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function I(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let B=!1;function N(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=O.bind(e),e.onTouchMove=L.bind(e),e.onTouchEnd=I.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!B&&(t.addEventListener("touchstart",N),B=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function j(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const _={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses());const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},q={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=T({userAgent:t.userAgent}),r.browser=C(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:j(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,q,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(q,e)}static get extendedDefaults(){return q}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function J(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function Q(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.each((e=>{s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(_).forEach((e=>{Object.keys(_[e]).forEach((t=>{V.prototype[t]=_[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],T=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?T.push(t):(t>c&&T.push(t),t<d&&E.push(t)));T.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&t.slidePrev()}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&t.slideNext()}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{p(),l()})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}})),Object.assign(t.navigation,{update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span>/<span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{h(),u(),p()})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}})),Object.assign(t.pagination,{render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function T(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el[0],d=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!o)return;const p="on"===e?"addEventListener":"removeEventListener";l.touch?(o[p](a.start,x,d),o[p](a.move,y,d),o[p](a.end,E,c)):(o[p](i.start,x,d),n[p](i.move,y,d),n[p](i.end,E,c))}function C(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&T("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){t.params.scrollbar.el&&T("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{C(),v(),g()})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()})),Object.assign(t.scrollbar,{updateSize:v,setTranslate:g,init:C,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function T(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function C(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,T,C,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),T=-y,C=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>T&&(h=T),g<E&&(g=E),g>C&&(g=C)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():C(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function O(){l&&(l=!1,k("off"))}function L(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,O,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,O,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&L()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&T()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&T()})),Object.assign(t.zoom,{enable:L,disable:I,in:C,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=c,s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+c;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}});let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=e=>{const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||t.slideTo(t.slides.indexOf(s),0)};function b(){const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var u;u=r,a.attr("id",u),function(e,t){e.attr("aria-live",t)}(a,l),e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),o(d(t.slides),e.slideRole);const h=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;let f,b;t.slides.each(((s,a)=>{const i=d(s),r=t.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):a;p(i,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,h))})),t.navigation&&t.navigation.$nextEl&&(f=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(b=t.navigation.$prevEl),f&&f.length&&v(f,r,e.nextSlideMessage),b&&b.length&&v(b,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",w,!0)}a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&b()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",w,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,t.paths.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=t.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(t.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();n=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,l=t.activeIndex>t.previousIndex?"next":"prev"}else n=t.realIndex,l=n>t.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,e?0:void 0))}let n=1;const l=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(n=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<n;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(l);else for(let e=0;e<n;e+=1)s.slides.eq(t.realIndex+e).addClass(l)}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:J.bind(t),removeSlide:Q.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-2*c,v=8-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
 
 
 
 /*//# sourceMappingURL=swiper-bundle.min.js.map*/;
document.addEventListener('DOMContentLoaded', function(){
    gsap.registerPlugin(ScrollTrigger); 

    let windowWidth = window.innerWidth;
    window.addEventListener('resize', function(){
        windowWidth = window.innerWidth; 
    });
    

    let headerTop = document.querySelector('.header-top');
    if(headerTop){
        headerTop.classList.remove('header-top--start');
    }

    // const aboutTL = gsap.timeline();
    gsap.fromTo('.header-hall__content',{y: 1000},{y: 0, ease:  "power1.out", duration: 0.9}); 
    gsap.fromTo('.header-hall__decor-img-box',{y: 1000},{y: 0, ease:  "power1.out", duration: 0.9}, '-=0.7'); 

    // gsap.fromTo('.advantages-list-animation',{y: 500},{y: 0, ease:  "power1.out", duration: 0.9}, '-=0.7'); 
    
    let advantageItems = document.querySelectorAll('.main-page .advantage');
    if(advantageItems.length > 0){
        let advantageAount = 0;
        advantageItems.forEach(advantage=>{
            gsap.fromTo(advantage, {y: 300 + advantageAount + 200},{  y: 0, ease:  "power1.out", duration: 1.5, }, ); 
            advantageAount = advantageAount + 200;
        })
    }
    
    
    let nlFeature = document.querySelectorAll('.feature');
    if(nlFeature.length > 0){
        let featureCount = 0;
        nlFeature.forEach(feature=>{
            gsap.fromTo(feature, {y: 300 + featureCount + 200},{scrollTrigger: '.about-section .btn',  y: 0, ease:  "power1.out", duration: 1, }, ); 
            featureCount = featureCount + 200;
        });
    }

    let nlWorkStages = document.querySelectorAll('.work-stages');
    if(nlWorkStages.length > 0){
        nlWorkStages.forEach(ws=>{
            gsap.fromTo(ws, {y: 40},{scrollTrigger: ws,  y: 0, ease:  "power1.out", duration: 0.5, }, ); 
        });
    }
    
    let nlServices = document.querySelectorAll('.services-cost-section .services');
    if(nlServices.length > 0){
        let servicesCount = 0;
        nlServices.forEach(services=>{ 
            if(windowWidth > 1135){
                gsap.fromTo(services, {y: 500 + servicesCount + 500},{scrollTrigger: '.services-cost-section .section-title',  y: 0, ease:  "power1.out", duration: 0.9,}); 
                servicesCount = servicesCount + 500;
            }else{
                gsap.fromTo(services, {y: 200},{scrollTrigger: services,  y: 0, ease:  "power1.out", duration: 0.7, }, ); 
            }
            
            
        });
    }

    let nlReviews = document.querySelectorAll('.reviews-sectinon .review'); 
    if(nlReviews.length > 0){
        nlReviews.forEach(review=>{
            gsap.fromTo(review, {y: 80},{scrollTrigger: review,  y: 0, ease:  "power1.out", duration: 0.5, }, ); 
        });
    }

    let nlANSpoiler = document.querySelectorAll('.answers-section .spoiler');
    if(nlANSpoiler.length > 0){
        nlANSpoiler.forEach(spoiler=>{
            gsap.fromTo(spoiler, {y: 60},{scrollTrigger: spoiler,  y: 0, ease:  "power1.out", duration: 0.5, }, ); 
        });
    }

    
});;
"user strict"
    //Работа модальных окон 
 

    function showModal(modalId, modalTitle, modalText, managerMessage){
        let modal = document.querySelector('#'+modalId); 
        // let greatShadow = document.querySelector('.great-shadow');
        let greatShadow = modal.closest('.great-shadow');
        modal.setAttribute('aria-hidden', 'false');
        greatShadow.classList.add('show'); 
        
        setTimeout(function(){
            modal.classList.add('show');
        }, 200);
    }


    //потребуется если нужен буде переход из одной модалки в другую. Сейчас не испольуется.
    function toggleModal(modalId){
        let modal = document.querySelector('#'+modalId);
        if(!modal) return;
        let allModal = document.querySelectorAll('.modal');
        allModal.forEach(item=>{
            item.classList.remove('show');
            item.setAttribute('aria-hidden', 'true');
        });

        setTimeout(function(){
            modal.setAttribute('aria-hidden', 'false');
            modal.classList.add('show');
        }, 200);


    }

    function hideModal(){
        let greatShadow = document.querySelectorAll('.great-shadow');
        let nlModals = document.querySelectorAll('.modal');
        let nlModalMessage = document.querySelectorAll('.modal__message'); 
        let nlLoading = document.querySelectorAll('.loading');
        let nlSuccessMessage = document.querySelectorAll('.success-message, .error-message'); 
        let nlForms = document.querySelectorAll('form');

        if(!document.body.classList.contains('stop-hide-modal')){
            nlModals.forEach(item=>{
                item.classList.remove('show');
                item.setAttribute('aria-hidden', 'true'); 
            });
            nlModalMessage.forEach(item=>{
                item.classList.remove('show');
            });
            setTimeout(function(){
                greatShadow.forEach(gh=>{
                    gh.classList.remove('show');
                    // скрываю все лоадинги
                    if(nlLoading.length > 0){
                        nlLoading.forEach(loading=>{
                            loading.classList.remove('loading--show');
                        });
                    }
                    // скрываю все сообщения об успешной отправке данных
                    if(nlSuccessMessage.length > 0){
                        nlSuccessMessage.forEach(sm=>{
                            sm.classList.remove('success-message--show');
                        });
                    }
                    // очищаю все формы
                    if(nlForms.length > 0){
                        nlForms.forEach(form=>{
                            form.reset();
                        })
                    }
                })
            }, 200);

        }
        

    }



    let nlShowModalBtn = document.querySelectorAll('.show-modal-btn');  
    if(nlShowModalBtn.length > 0){
        nlShowModalBtn.forEach(item=>{
            item.addEventListener('click', function(){  
                showModal(this.getAttribute('data-modal-id'))
            });
        });
    }

    let greatShadow = document.querySelectorAll('.great-shadow');
    if(greatShadow.length > 0){
        greatShadow.forEach(gh=>{
            gh.addEventListener('click', function(e){ 
                if(e.target.className == 'great-shadow show'){
                    hideModal();
                }
            });
        });
    }

    let closeModalBtn = document.querySelectorAll('.modal__close-btn');

    if(closeModalBtn.length > 0){
        closeModalBtn.forEach(btn=>{
            btn.addEventListener('click', function(e){
                e.preventDefault();
                hideModal();
            });
        });
    }
 

    ;
/**
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).lightGallery=e()}(this,(function(){"use strict";var t=function(){return(t=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};var e="lgAfterAppendSlide",i="lgInit",s="lgHasVideo",n="lgContainerResize",o="lgUpdateSlides",r="lgAfterAppendSubHtml",l="lgBeforeOpen",a="lgAfterOpen",d="lgSlideItemLoad",g="lgBeforeSlide",h="lgAfterSlide",c="lgPosterClick",u="lgDragStart",m="lgDragMove",p="lgDragEnd",f="lgBeforeNextSlide",y="lgBeforePrevSlide",v="lgBeforeClose",b="lgAfterClose",I={mode:"lg-slide",easing:"ease",speed:400,licenseKey:"0000-0000-000-0000",height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:300,container:"",startAnimationDuration:400,zoomFromOrigin:!0,hideBarsDelay:0,showBarsAfter:1e4,slideDelay:0,supportLegacyBrowser:!0,allowMediaOverlap:!1,videoMaxSize:"1280-720",loadYouTubePoster:!0,defaultCaptionHeight:0,ariaLabelledby:"",ariaDescribedby:"",resetScrollPosition:!0,hideScrollbar:!1,closable:!0,swipeToClose:!0,closeOnTap:!0,showCloseIcon:!0,showMaximizeIcon:!1,loop:!0,escKey:!0,keyPress:!0,trapFocus:!0,controls:!0,slideEndAnimation:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:2,numberOfSlideItemsInDom:10,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:0,iframeWidth:"100%",iframeHeight:"100%",iframeMaxWidth:"100%",iframeMaxHeight:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],extraProps:[],exThumbImage:"",isMobile:void 0,mobileSettings:{controls:!1,showCloseIcon:!1,download:!1},plugins:[],strings:{closeGallery:"Close gallery",toggleMaximize:"Toggle maximize",previousSlide:"Previous slide",nextSlide:"Next slide",download:"Download",playVideo:"Play video"}};var C=function(){function t(t){return this.cssVenderPrefixes=["TransitionDuration","TransitionTimingFunction","Transform","Transition"],this.selector=this._getSelector(t),this.firstElement=this._getFirstEl(),this}return t.generateUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},t.prototype._getSelector=function(t,e){return void 0===e&&(e=document),"string"!=typeof t?t:(e=e||document,"#"===t.substring(0,1)?e.querySelector(t):e.querySelectorAll(t))},t.prototype._each=function(t){return this.selector?(void 0!==this.selector.length?[].forEach.call(this.selector,t):t(this.selector,0),this):this},t.prototype._setCssVendorPrefix=function(t,e,i){var s=e.replace(/-([a-z])/gi,(function(t,e){return e.toUpperCase()}));-1!==this.cssVenderPrefixes.indexOf(s)?(t.style[s.charAt(0).toLowerCase()+s.slice(1)]=i,t.style["webkit"+s]=i,t.style["moz"+s]=i,t.style["ms"+s]=i,t.style["o"+s]=i):t.style[s]=i},t.prototype._getFirstEl=function(){return this.selector&&void 0!==this.selector.length?this.selector[0]:this.selector},t.prototype.isEventMatched=function(t,e){var i=e.split(".");return t.split(".").filter((function(t){return t})).every((function(t){return-1!==i.indexOf(t)}))},t.prototype.attr=function(t,e){return void 0===e?this.firstElement?this.firstElement.getAttribute(t):"":(this._each((function(i){i.setAttribute(t,e)})),this)},t.prototype.find=function(t){return x(this._getSelector(t,this.selector))},t.prototype.first=function(){return this.selector&&void 0!==this.selector.length?x(this.selector[0]):x(this.selector)},t.prototype.eq=function(t){return x(this.selector[t])},t.prototype.parent=function(){return x(this.selector.parentElement)},t.prototype.get=function(){return this._getFirstEl()},t.prototype.removeAttr=function(t){var e=t.split(" ");return this._each((function(t){e.forEach((function(e){return t.removeAttribute(e)}))})),this},t.prototype.wrap=function(t){if(!this.firstElement)return this;var e=document.createElement("div");return e.className=t,this.firstElement.parentNode.insertBefore(e,this.firstElement),this.firstElement.parentNode.removeChild(this.firstElement),e.appendChild(this.firstElement),this},t.prototype.addClass=function(t){return void 0===t&&(t=""),this._each((function(e){t.split(" ").forEach((function(t){t&&e.classList.add(t)}))})),this},t.prototype.removeClass=function(t){return this._each((function(e){t.split(" ").forEach((function(t){t&&e.classList.remove(t)}))})),this},t.prototype.hasClass=function(t){return!!this.firstElement&&this.firstElement.classList.contains(t)},t.prototype.hasAttribute=function(t){return!!this.firstElement&&this.firstElement.hasAttribute(t)},t.prototype.toggleClass=function(t){return this.firstElement?(this.hasClass(t)?this.removeClass(t):this.addClass(t),this):this},t.prototype.css=function(t,e){var i=this;return this._each((function(s){i._setCssVendorPrefix(s,t,e)})),this},t.prototype.on=function(e,i){var s=this;return this.selector?(e.split(" ").forEach((function(e){Array.isArray(t.eventListeners[e])||(t.eventListeners[e]=[]),t.eventListeners[e].push(i),s.selector.addEventListener(e.split(".")[0],i)})),this):this},t.prototype.once=function(t,e){var i=this;return this.on(t,(function(){i.off(t),e(t)})),this},t.prototype.off=function(e){var i=this;return this.selector?(Object.keys(t.eventListeners).forEach((function(s){i.isEventMatched(e,s)&&(t.eventListeners[s].forEach((function(t){i.selector.removeEventListener(s.split(".")[0],t)})),t.eventListeners[s]=[])})),this):this},t.prototype.trigger=function(t,e){if(!this.firstElement)return this;var i=new CustomEvent(t.split(".")[0],{detail:e||null});return this.firstElement.dispatchEvent(i),this},t.prototype.load=function(t){var e=this;return fetch(t).then((function(t){return t.text()})).then((function(t){e.selector.innerHTML=t})),this},t.prototype.html=function(t){return void 0===t?this.firstElement?this.firstElement.innerHTML:"":(this._each((function(e){e.innerHTML=t})),this)},t.prototype.append=function(t){return this._each((function(e){"string"==typeof t?e.insertAdjacentHTML("beforeend",t):e.appendChild(t)})),this},t.prototype.prepend=function(t){return this._each((function(e){e.insertAdjacentHTML("afterbegin",t)})),this},t.prototype.remove=function(){return this._each((function(t){t.parentNode.removeChild(t)})),this},t.prototype.empty=function(){return this._each((function(t){t.innerHTML=""})),this},t.prototype.scrollTop=function(t){return void 0!==t?(document.body.scrollTop=t,document.documentElement.scrollTop=t,this):window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},t.prototype.scrollLeft=function(t){return void 0!==t?(document.body.scrollLeft=t,document.documentElement.scrollLeft=t,this):window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0},t.prototype.offset=function(){if(!this.firstElement)return{left:0,top:0};var t=this.firstElement.getBoundingClientRect(),e=x("body").style().marginLeft;return{left:t.left-parseFloat(e)+this.scrollLeft(),top:t.top+this.scrollTop()}},t.prototype.style=function(){return this.firstElement?this.firstElement.currentStyle||window.getComputedStyle(this.firstElement):{}},t.prototype.width=function(){var t=this.style();return this.firstElement.clientWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)},t.prototype.height=function(){var t=this.style();return this.firstElement.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom)},t.eventListeners={},t}();function x(t){return function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),new C(t)}var w=["src","sources","subHtml","subHtmlUrl","html","video","poster","slideName","responsive","srcset","sizes","iframe","downloadUrl","download","width","facebookShareUrl","tweetText","iframeTitle","twitterShareUrl","pinterestShareUrl","pinterestText","fbHtml","disqusIdentifier","disqusUrl"];function S(t){return"href"===t?"src":t=(t=(t=t.replace("data-","")).charAt(0).toLowerCase()+t.slice(1)).replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))}var T=function(t,e,i,s){void 0===i&&(i=0);var n=x(t).attr("data-lg-size")||s;if(n){var o=n.split(",");if(o[1])for(var r=window.innerWidth,l=0;l<o.length;l++){var a=o[l];if(parseInt(a.split("-")[2],10)>r){n=a;break}l===o.length-1&&(n=a)}var d=n.split("-"),g=parseInt(d[0],10),h=parseInt(d[1],10),c=e.width(),u=e.height()-i,m=Math.min(c,g),p=Math.min(u,h),f=Math.min(m/g,p/h);return{width:g*f,height:h*f}}},E=function(t,e,i,s,n){if(n){var o=x(t).find("img").first();if(o.get()){var r=e.get().getBoundingClientRect(),l=r.width,a=e.height()-(i+s),d=o.width(),g=o.height(),h=o.style(),c=(l-d)/2-o.offset().left+(parseFloat(h.paddingLeft)||0)+(parseFloat(h.borderLeft)||0)+x(window).scrollLeft()+r.left,u=(a-g)/2-o.offset().top+(parseFloat(h.paddingTop)||0)+(parseFloat(h.borderTop)||0)+x(window).scrollTop()+i;return"translate3d("+(c*=-1)+"px, "+(u*=-1)+"px, 0) scale3d("+d/n.width+", "+g/n.height+", 1)"}}},O=function(t,e,i,s,n,o){return'<div class="lg-video-cont lg-has-iframe" style="width:'+t+"; max-width:"+i+"; height: "+e+"; max-height:"+s+'">\n                    <iframe class="lg-object" frameborder="0" '+(o?'title="'+o+'"':"")+' src="'+n+'"  allowfullscreen="true"></iframe>\n                </div>'},D=function(t,e,i,s,n,o){var r="<img "+i+" "+(s?'srcset="'+s+'"':"")+"  "+(n?'sizes="'+n+'"':"")+' class="lg-object lg-image" data-index="'+t+'" src="'+e+'" />',l="";o&&(l=("string"==typeof o?JSON.parse(o):o).map((function(t){var e="";return Object.keys(t).forEach((function(i){e+=" "+i+'="'+t[i]+'"'})),"<source "+e+"></source>"})));return""+l+r},L=function(t){for(var e=[],i=[],s="",n=0;n<t.length;n++){var o=t[n].split(" ");""===o[0]&&o.splice(0,1),i.push(o[0]),e.push(o[1])}for(var r=window.innerWidth,l=0;l<e.length;l++)if(parseInt(e[l],10)>r){s=i[l];break}return s},z=function(t){return!!t&&(!!t.complete&&0!==t.naturalWidth)},M=function(t,e,i,s,n){return'<div class="lg-video-cont '+(n&&n.youtube?"lg-has-youtube":n&&n.vimeo?"lg-has-vimeo":"lg-has-html5")+'" style="'+i+'">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="'+s+'"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>'+s+'</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            '+(e||"")+'\n            <img class="lg-object lg-video-poster" src="'+t+'" />\n        </div>'},G=function(t){var e=t.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');return[].filter.call(e,(function(t){var e=window.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility}))},k=function(t,e,i,s){var n=[],o=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var s=Array(t),n=0;for(e=0;e<i;e++)for(var o=arguments[e],r=0,l=o.length;r<l;r++,n++)s[n]=o[r];return s}(w,e);return[].forEach.call(t,(function(t){for(var e={},r=0;r<t.attributes.length;r++){var l=t.attributes[r];if(l.specified){var a=S(l.name),d="";o.indexOf(a)>-1&&(d=a),d&&(e[d]=l.value)}}var g=x(t),h=g.find("img").first().attr("alt"),c=g.attr("title"),u=s?g.attr(s):g.find("img").first().attr("src");e.thumb=u,i&&!e.subHtml&&(e.subHtml=c||h||""),e.alt=h||c||"",n.push(e)})),n},A=function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},P=function(t,e,i){if(!t)return e?{html5:!0}:void console.error("lightGallery :- data-src is not provided on slide item "+(i+1)+". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");var s=t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i),n=t.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i),o=t.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);return s?{youtube:s}:n?{vimeo:n}:o?{wistia:o}:void 0},B=0,F=function(){function w(t,e){if(this.lgOpened=!1,this.index=0,this.plugins=[],this.lGalleryOn=!1,this.lgBusy=!1,this.currentItemsInDom=[],this.prevScrollTop=0,this.bodyPaddingRight=0,this.isDummyImageRemoved=!1,this.dragOrSwipeEnabled=!1,this.mediaContainerPosition={top:0,bottom:0},!t)return this;if(B++,this.lgId=B,this.el=t,this.LGel=x(t),this.generateSettings(e),this.buildModules(),this.settings.dynamic&&void 0!==this.settings.dynamicEl&&!Array.isArray(this.settings.dynamicEl))throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.galleryItems=this.getItems(),this.normalizeSettings(),this.init(),this.validateLicense(),this}return w.prototype.generateSettings=function(e){if(this.settings=t(t({},I),e),this.settings.isMobile&&"function"==typeof this.settings.isMobile?this.settings.isMobile():A()){var i=t(t({},this.settings.mobileSettings),this.settings.mobileSettings);this.settings=t(t({},this.settings),i)}},w.prototype.normalizeSettings=function(){this.settings.slideEndAnimation&&(this.settings.hideControlOnEnd=!1),this.settings.closable||(this.settings.swipeToClose=!1),this.zoomFromOrigin=this.settings.zoomFromOrigin,this.settings.dynamic&&(this.zoomFromOrigin=!1),this.settings.container||(this.settings.container=document.body),this.settings.preload=Math.min(this.settings.preload,this.galleryItems.length)},w.prototype.init=function(){var t=this;this.addSlideVideoInfo(this.galleryItems),this.buildStructure(),this.LGel.trigger(i,{instance:this}),this.settings.keyPress&&this.keyPress(),setTimeout((function(){t.enableDrag(),t.enableSwipe(),t.triggerPosterClick()}),50),this.arrow(),this.settings.mousewheel&&this.mousewheel(),this.settings.dynamic||this.openGalleryOnItemClick()},w.prototype.openGalleryOnItemClick=function(){for(var t=this,e=function(e){var s=i.items[e],n=x(s),o=C.generateUUID();n.attr("data-lg-id",o).on("click.lgcustom-item-"+o,(function(i){i.preventDefault();var n=t.settings.index||e;t.openGallery(n,s)}))},i=this,s=0;s<this.items.length;s++)e(s)},w.prototype.buildModules=function(){var t=this;this.settings.plugins.forEach((function(e){t.plugins.push(new e(t,x))}))},w.prototype.validateLicense=function(){},w.prototype.getSlideItem=function(t){return x(this.getSlideItemId(t))},w.prototype.getSlideItemId=function(t){return"#lg-item-"+this.lgId+"-"+t},w.prototype.getIdName=function(t){return t+"-"+this.lgId},w.prototype.getElementById=function(t){return x("#"+this.getIdName(t))},w.prototype.manageSingleSlideClassName=function(){this.galleryItems.length<2?this.outer.addClass("lg-single-item"):this.outer.removeClass("lg-single-item")},w.prototype.buildStructure=function(){var t=this;if(!(this.$container&&this.$container.get())){var e="",i="";this.settings.controls&&(e='<button type="button" id="'+this.getIdName("lg-prev")+'" aria-label="'+this.settings.strings.previousSlide+'" class="lg-prev lg-icon"> '+this.settings.prevHtml+' </button>\n                <button type="button" id="'+this.getIdName("lg-next")+'" aria-label="'+this.settings.strings.nextSlide+'" class="lg-next lg-icon"> '+this.settings.nextHtml+" </button>"),".lg-item"!==this.settings.appendSubHtmlTo&&(i='<div class="lg-sub-html" role="status" aria-live="polite"></div>');var s="";this.settings.allowMediaOverlap&&(s+="lg-media-overlap ");var n=this.settings.ariaLabelledby?'aria-labelledby="'+this.settings.ariaLabelledby+'"':"",o=this.settings.ariaDescribedby?'aria-describedby="'+this.settings.ariaDescribedby+'"':"",r="lg-container "+this.settings.addClass+" "+(document.body!==this.settings.container?"lg-inline":""),l=this.settings.closable&&this.settings.showCloseIcon?'<button type="button" aria-label="'+this.settings.strings.closeGallery+'" id="'+this.getIdName("lg-close")+'" class="lg-close lg-icon"></button>':"",a=this.settings.showMaximizeIcon?'<button type="button" aria-label="'+this.settings.strings.toggleMaximize+'" id="'+this.getIdName("lg-maximize")+'" class="lg-maximize lg-icon"></button>':"",d='\n        <div class="'+r+'" id="'+this.getIdName("lg-container")+'" tabindex="-1" aria-modal="true" '+n+" "+o+' role="dialog"\n        >\n            <div id="'+this.getIdName("lg-backdrop")+'" class="lg-backdrop"></div>\n\n            <div id="'+this.getIdName("lg-outer")+'" class="lg-outer lg-use-css3 lg-css3 lg-hide-items '+s+' ">\n\n              <div id="'+this.getIdName("lg-content")+'" class="lg-content">\n                <div id="'+this.getIdName("lg-inner")+'" class="lg-inner">\n                </div>\n                '+e+'\n              </div>\n                <div id="'+this.getIdName("lg-toolbar")+'" class="lg-toolbar lg-group">\n                    '+a+"\n                    "+l+"\n                    </div>\n                    "+(".lg-outer"===this.settings.appendSubHtmlTo?i:"")+'\n                <div id="'+this.getIdName("lg-components")+'" class="lg-components">\n                    '+(".lg-sub-html"===this.settings.appendSubHtmlTo?i:"")+"\n                </div>\n            </div>\n        </div>\n        ";x(this.settings.container).append(d),document.body!==this.settings.container&&x(this.settings.container).css("position","relative"),this.outer=this.getElementById("lg-outer"),this.$lgComponents=this.getElementById("lg-components"),this.$backdrop=this.getElementById("lg-backdrop"),this.$container=this.getElementById("lg-container"),this.$inner=this.getElementById("lg-inner"),this.$content=this.getElementById("lg-content"),this.$toolbar=this.getElementById("lg-toolbar"),this.$backdrop.css("transition-duration",this.settings.backdropDuration+"ms");var g=this.settings.mode+" ";this.manageSingleSlideClassName(),this.settings.enableDrag&&(g+="lg-grab "),this.outer.addClass(g),this.$inner.css("transition-timing-function",this.settings.easing),this.$inner.css("transition-duration",this.settings.speed+"ms"),this.settings.download&&this.$toolbar.append('<a id="'+this.getIdName("lg-download")+'" target="_blank" rel="noopener" aria-label="'+this.settings.strings.download+'" download class="lg-download lg-icon"></a>'),this.counter(),x(window).on("resize.lg.global"+this.lgId+" orientationchange.lg.global"+this.lgId,(function(){t.refreshOnResize()})),this.hideBars(),this.manageCloseGallery(),this.toggleMaximize(),this.initModules()}},w.prototype.refreshOnResize=function(){if(this.lgOpened){var t=this.galleryItems[this.index].__slideVideoInfo;this.mediaContainerPosition=this.getMediaContainerPosition();var e=this.mediaContainerPosition,i=e.top,s=e.bottom;if(this.currentImageSize=T(this.items[this.index],this.outer,i+s,t&&this.settings.videoMaxSize),t&&this.resizeVideoSlide(this.index,this.currentImageSize),this.zoomFromOrigin&&!this.isDummyImageRemoved){var o=this.getDummyImgStyles(this.currentImageSize);this.outer.find(".lg-current .lg-dummy-img").first().attr("style",o)}this.LGel.trigger(n)}},w.prototype.resizeVideoSlide=function(t,e){var i=this.getVideoContStyle(e);this.getSlideItem(t).find(".lg-video-cont").attr("style",i)},w.prototype.updateSlides=function(t,e){if(this.index>t.length-1&&(this.index=t.length-1),1===t.length&&(this.index=0),t.length){var i=this.galleryItems[e].src;this.galleryItems=t,this.updateControls(),this.$inner.empty(),this.currentItemsInDom=[];var s=0;this.galleryItems.some((function(t,e){return t.src===i&&(s=e,!0)})),this.currentItemsInDom=this.organizeSlideItems(s,-1),this.loadContent(s,!0),this.getSlideItem(s).addClass("lg-current"),this.index=s,this.updateCurrentCounter(s),this.LGel.trigger(o)}else this.closeGallery()},w.prototype.getItems=function(){if(this.items=[],this.settings.dynamic)return this.settings.dynamicEl||[];if("this"===this.settings.selector)this.items.push(this.el);else if(this.settings.selector)if("string"==typeof this.settings.selector)if(this.settings.selectWithin){var t=x(this.settings.selectWithin);this.items=t.find(this.settings.selector).get()}else this.items=this.el.querySelectorAll(this.settings.selector);else this.items=this.settings.selector;else this.items=this.el.children;return k(this.items,this.settings.extraProps,this.settings.getCaptionFromTitleOrAlt,this.settings.exThumbImage)},w.prototype.shouldHideScrollbar=function(){return this.settings.hideScrollbar&&document.body===this.settings.container},w.prototype.hideScrollbar=function(){if(this.shouldHideScrollbar()){this.bodyPaddingRight=parseFloat(x("body").style().paddingRight);var t=document.documentElement.getBoundingClientRect(),e=window.innerWidth-t.width;x(document.body).css("padding-right",e+this.bodyPaddingRight+"px"),x(document.body).addClass("lg-overlay-open")}},w.prototype.resetScrollBar=function(){this.shouldHideScrollbar()&&(x(document.body).css("padding-right",this.bodyPaddingRight+"px"),x(document.body).removeClass("lg-overlay-open"))},w.prototype.openGallery=function(t,e){var i=this;if(void 0===t&&(t=this.settings.index),!this.lgOpened){this.lgOpened=!0,this.outer.removeClass("lg-hide-items"),this.hideScrollbar(),this.$container.addClass("lg-show");var s=this.getItemsToBeInsertedToDom(t,t);this.currentItemsInDom=s;var n="";s.forEach((function(t){n=n+'<div id="'+t+'" class="lg-item"></div>'})),this.$inner.append(n),this.addHtml(t);var o="";this.mediaContainerPosition=this.getMediaContainerPosition();var r=this.mediaContainerPosition,d=r.top,g=r.bottom;this.settings.allowMediaOverlap||this.setMediaContainerPosition(d,g);var h=this.galleryItems[t].__slideVideoInfo;this.zoomFromOrigin&&e&&(this.currentImageSize=T(e,this.outer,d+g,h&&this.settings.videoMaxSize),o=E(e,this.outer,d,g,this.currentImageSize)),this.zoomFromOrigin&&o||(this.outer.addClass(this.settings.startClass),this.getSlideItem(t).removeClass("lg-complete"));var c=this.settings.zoomFromOrigin?100:this.settings.backdropDuration;setTimeout((function(){i.outer.addClass("lg-components-open")}),c),this.index=t,this.LGel.trigger(l),this.getSlideItem(t).addClass("lg-current"),this.lGalleryOn=!1,this.prevScrollTop=x(window).scrollTop(),setTimeout((function(){if(i.zoomFromOrigin&&o){var e=i.getSlideItem(t);e.css("transform",o),setTimeout((function(){e.addClass("lg-start-progress lg-start-end-progress").css("transition-duration",i.settings.startAnimationDuration+"ms"),i.outer.addClass("lg-zoom-from-image")})),setTimeout((function(){e.css("transform","translate3d(0, 0, 0)")}),100)}setTimeout((function(){i.$backdrop.addClass("in"),i.$container.addClass("lg-show-in")}),10),setTimeout((function(){i.settings.trapFocus&&document.body===i.settings.container&&i.trapFocus()}),i.settings.backdropDuration+50),i.zoomFromOrigin&&o||setTimeout((function(){i.outer.addClass("lg-visible")}),i.settings.backdropDuration),i.slide(t,!1,!1,!1),i.LGel.trigger(a)})),document.body===this.settings.container&&x("html").addClass("lg-on")}},w.prototype.getMediaContainerPosition=function(){if(this.settings.allowMediaOverlap)return{top:0,bottom:0};var t=this.$toolbar.get().clientHeight||0,e=this.outer.find(".lg-components .lg-sub-html").get(),i=this.settings.defaultCaptionHeight||e&&e.clientHeight||0,s=this.outer.find(".lg-thumb-outer").get();return{top:t,bottom:(s?s.clientHeight:0)+i}},w.prototype.setMediaContainerPosition=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.$content.css("top",t+"px").css("bottom",e+"px")},w.prototype.hideBars=function(){var t=this;setTimeout((function(){t.outer.removeClass("lg-hide-items"),t.settings.hideBarsDelay>0&&(t.outer.on("mousemove.lg click.lg touchstart.lg",(function(){t.outer.removeClass("lg-hide-items"),clearTimeout(t.hideBarTimeout),t.hideBarTimeout=setTimeout((function(){t.outer.addClass("lg-hide-items")}),t.settings.hideBarsDelay)})),t.outer.trigger("mousemove.lg"))}),this.settings.showBarsAfter)},w.prototype.initPictureFill=function(t){if(this.settings.supportLegacyBrowser)try{picturefill({elements:[t.get()]})}catch(t){console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")}},w.prototype.counter=function(){if(this.settings.counter){var t='<div class="lg-counter" role="status" aria-live="polite">\n                <span id="'+this.getIdName("lg-counter-current")+'" class="lg-counter-current">'+(this.index+1)+' </span> /\n                <span id="'+this.getIdName("lg-counter-all")+'" class="lg-counter-all">'+this.galleryItems.length+" </span></div>";this.outer.find(this.settings.appendCounterTo).append(t)}},w.prototype.addHtml=function(t){var e,i;if(this.galleryItems[t].subHtmlUrl?i=this.galleryItems[t].subHtmlUrl:e=this.galleryItems[t].subHtml,!i)if(e){var s=e.substring(0,1);"."!==s&&"#"!==s||(e=this.settings.subHtmlSelectorRelative&&!this.settings.dynamic?x(this.items).eq(t).find(e).first().html():x(e).first().html())}else e="";if(".lg-item"!==this.settings.appendSubHtmlTo)i?this.outer.find(".lg-sub-html").load(i):this.outer.find(".lg-sub-html").html(e);else{var n=x(this.getSlideItemId(t));i?n.load(i):n.append('<div class="lg-sub-html">'+e+"</div>")}null!=e&&(""===e?this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html"):this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")),this.LGel.trigger(r,{index:t})},w.prototype.preload=function(t){for(var e=1;e<=this.settings.preload&&!(e>=this.galleryItems.length-t);e++)this.loadContent(t+e,!1);for(var i=1;i<=this.settings.preload&&!(t-i<0);i++)this.loadContent(t-i,!1)},w.prototype.getDummyImgStyles=function(t){return t?"width:"+t.width+"px;\n                margin-left: -"+t.width/2+"px;\n                margin-top: -"+t.height/2+"px;\n                height:"+t.height+"px":""},w.prototype.getVideoContStyle=function(t){return t?"width:"+t.width+"px;\n                height:"+t.height+"px":""},w.prototype.getDummyImageContent=function(t,e,i){var s;if(this.settings.dynamic||(s=x(this.items).eq(e)),s){var n=void 0;if(!(n=this.settings.exThumbImage?s.attr(this.settings.exThumbImage):s.find("img").first().attr("src")))return"";var o="<img "+i+' style="'+this.getDummyImgStyles(this.currentImageSize)+'" class="lg-dummy-img" src="'+n+'" />';return t.addClass("lg-first-slide"),this.outer.addClass("lg-first-slide-loading"),o}return""},w.prototype.setImgMarkup=function(t,e,i){var s=this.galleryItems[i],n=s.alt,o=s.srcset,r=s.sizes,l=s.sources,a=n?'alt="'+n+'"':"",d='<picture class="lg-img-wrap"> '+(this.isFirstSlideWithZoomAnimation()?this.getDummyImageContent(e,i,a):D(i,t,a,o,r,l))+"</picture>";e.prepend(d)},w.prototype.onSlideObjectLoad=function(t,e,i,s){var n=t.find(".lg-object").first();z(n.get())||e?i():(n.on("load.lg error.lg",(function(){i&&i()})),n.on("error.lg",(function(){s&&s()})))},w.prototype.onLgObjectLoad=function(t,e,i,s,n,o){var r=this;this.onSlideObjectLoad(t,o,(function(){r.triggerSlideItemLoad(t,e,i,s,n)}),(function(){t.addClass("lg-complete lg-complete_"),t.html('<span class="lg-error-msg">Не удалось загрузить содержимое...</span>')}))},w.prototype.triggerSlideItemLoad=function(t,e,i,s,n){var o=this,r=this.galleryItems[e],l=n&&"video"===this.getSlideType(r)&&!r.poster?s:0;setTimeout((function(){t.addClass("lg-complete lg-complete_"),o.LGel.trigger(d,{index:e,delay:i||0,isFirstSlide:n})}),l)},w.prototype.isFirstSlideWithZoomAnimation=function(){return!(this.lGalleryOn||!this.zoomFromOrigin||!this.currentImageSize)},w.prototype.addSlideVideoInfo=function(t){var e=this;t.forEach((function(t,i){t.__slideVideoInfo=P(t.src,!!t.video,i),t.__slideVideoInfo&&e.settings.loadYouTubePoster&&!t.poster&&t.__slideVideoInfo.youtube&&(t.poster="//img.youtube.com/vi/"+t.__slideVideoInfo.youtube[1]+"/maxresdefault.jpg")}))},w.prototype.loadContent=function(t,i){var n=this,o=this.galleryItems[t],r=x(this.getSlideItemId(t)),l=o.poster,a=o.srcset,d=o.sizes,g=o.sources,h=o.src,c=o.video,u=c&&"string"==typeof c?JSON.parse(c):c;if(o.responsive){var m=o.responsive.split(",");h=L(m)||h}var p=o.__slideVideoInfo,f="",y=!!o.iframe,v=!this.lGalleryOn,b=0;if(v&&(b=this.zoomFromOrigin&&this.currentImageSize?this.settings.startAnimationDuration+10:this.settings.backdropDuration+10),!r.hasClass("lg-loaded")){if(p){var I=this.mediaContainerPosition,C=I.top,w=I.bottom,S=T(this.items[t],this.outer,C+w,p&&this.settings.videoMaxSize);f=this.getVideoContStyle(S)}if(y){var E=O(this.settings.iframeWidth,this.settings.iframeHeight,this.settings.iframeMaxWidth,this.settings.iframeMaxHeight,h,o.iframeTitle);r.prepend(E)}else if(l){var z="";v&&this.zoomFromOrigin&&this.currentImageSize&&(z=this.getDummyImageContent(r,t,""));E=M(l,z||"",f,this.settings.strings.playVideo,p);r.prepend(E)}else if(p){E='<div class="lg-video-cont " style="'+f+'"></div>';r.prepend(E)}else if(this.setImgMarkup(h,r,t),a||g){var G=r.find(".lg-object");this.initPictureFill(G)}(l||p)&&this.LGel.trigger(s,{index:t,src:h,html5Video:u,hasPoster:!!l}),this.LGel.trigger(e,{index:t}),this.lGalleryOn&&".lg-item"===this.settings.appendSubHtmlTo&&this.addHtml(t)}var k=0;b&&!x(document.body).hasClass("lg-from-hash")&&(k=b),this.isFirstSlideWithZoomAnimation()&&(setTimeout((function(){r.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")}),this.settings.startAnimationDuration+100),r.hasClass("lg-loaded")||setTimeout((function(){if("image"===n.getSlideType(o)){var e=o.alt,i=e?'alt="'+e+'"':"";if(r.find(".lg-img-wrap").append(D(t,h,i,a,d,o.sources)),a||g){var s=r.find(".lg-object");n.initPictureFill(s)}}("image"===n.getSlideType(o)||"video"===n.getSlideType(o)&&l)&&(n.onLgObjectLoad(r,t,b,k,!0,!1),n.onSlideObjectLoad(r,!(!p||!p.html5||l),(function(){n.loadContentOnFirstSlideLoad(t,r,k)}),(function(){n.loadContentOnFirstSlideLoad(t,r,k)})))}),this.settings.startAnimationDuration+100)),r.addClass("lg-loaded"),this.isFirstSlideWithZoomAnimation()&&("video"!==this.getSlideType(o)||l)||this.onLgObjectLoad(r,t,b,k,v,!(!p||!p.html5||l)),this.zoomFromOrigin&&this.currentImageSize||!r.hasClass("lg-complete_")||this.lGalleryOn||setTimeout((function(){r.addClass("lg-complete")}),this.settings.backdropDuration),this.lGalleryOn=!0,!0===i&&(r.hasClass("lg-complete_")?this.preload(t):r.find(".lg-object").first().on("load.lg error.lg",(function(){n.preload(t)})))},w.prototype.loadContentOnFirstSlideLoad=function(t,e,i){var s=this;setTimeout((function(){e.find(".lg-dummy-img").remove(),e.removeClass("lg-first-slide"),s.outer.removeClass("lg-first-slide-loading"),s.isDummyImageRemoved=!0,s.preload(t)}),i+300)},w.prototype.getItemsToBeInsertedToDom=function(t,e,i){var s=this;void 0===i&&(i=0);var n=[],o=Math.max(i,3);o=Math.min(o,this.galleryItems.length);var r="lg-item-"+this.lgId+"-"+e;if(this.galleryItems.length<=3)return this.galleryItems.forEach((function(t,e){n.push("lg-item-"+s.lgId+"-"+e)})),n;if(t<(this.galleryItems.length-1)/2){for(var l=t;l>t-o/2&&l>=0;l--)n.push("lg-item-"+this.lgId+"-"+l);var a=n.length;for(l=0;l<o-a;l++)n.push("lg-item-"+this.lgId+"-"+(t+l+1))}else{for(l=t;l<=this.galleryItems.length-1&&l<t+o/2;l++)n.push("lg-item-"+this.lgId+"-"+l);for(a=n.length,l=0;l<o-a;l++)n.push("lg-item-"+this.lgId+"-"+(t-l-1))}return this.settings.loop&&(t===this.galleryItems.length-1?n.push("lg-item-"+this.lgId+"-0"):0===t&&n.push("lg-item-"+this.lgId+"-"+(this.galleryItems.length-1))),-1===n.indexOf(r)&&n.push("lg-item-"+this.lgId+"-"+e),n},w.prototype.organizeSlideItems=function(t,e){var i=this,s=this.getItemsToBeInsertedToDom(t,e,this.settings.numberOfSlideItemsInDom);return s.forEach((function(t){-1===i.currentItemsInDom.indexOf(t)&&i.$inner.append('<div id="'+t+'" class="lg-item"></div>')})),this.currentItemsInDom.forEach((function(t){-1===s.indexOf(t)&&x("#"+t).remove()})),s},w.prototype.getPreviousSlideIndex=function(){var t=0;try{var e=this.outer.find(".lg-current").first().attr("id");t=parseInt(e.split("-")[3])||0}catch(e){t=0}return t},w.prototype.setDownloadValue=function(t){if(this.settings.download){var e=this.galleryItems[t];if(!1===e.downloadUrl||"false"===e.downloadUrl)this.outer.addClass("lg-hide-download");else{var i=this.getElementById("lg-download");this.outer.removeClass("lg-hide-download"),i.attr("href",e.downloadUrl||e.src),e.download&&i.attr("download",e.download)}}},w.prototype.makeSlideAnimation=function(t,e,i){var s=this;this.lGalleryOn&&i.addClass("lg-slide-progress"),setTimeout((function(){s.outer.addClass("lg-no-trans"),s.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"),"prev"===t?(e.addClass("lg-prev-slide"),i.addClass("lg-next-slide")):(e.addClass("lg-next-slide"),i.addClass("lg-prev-slide")),setTimeout((function(){s.outer.find(".lg-item").removeClass("lg-current"),e.addClass("lg-current"),s.outer.removeClass("lg-no-trans")}),50)}),this.lGalleryOn?this.settings.slideDelay:0)},w.prototype.slide=function(t,e,i,s){var n=this,o=this.getPreviousSlideIndex();if(this.currentItemsInDom=this.organizeSlideItems(t,o),!this.lGalleryOn||o!==t){var r=this.galleryItems.length;if(!this.lgBusy){this.settings.counter&&this.updateCurrentCounter(t);var l=this.getSlideItem(t),a=this.getSlideItem(o),d=this.galleryItems[t],c=d.__slideVideoInfo;if(this.outer.attr("data-lg-slide-type",this.getSlideType(d)),this.setDownloadValue(t),c){var u=this.mediaContainerPosition,m=u.top,p=u.bottom,f=T(this.items[t],this.outer,m+p,c&&this.settings.videoMaxSize);this.resizeVideoSlide(t,f)}if(this.LGel.trigger(g,{prevIndex:o,index:t,fromTouch:!!e,fromThumb:!!i}),this.lgBusy=!0,clearTimeout(this.hideBarTimeout),this.arrowDisable(t),s||(t<o?s="prev":t>o&&(s="next")),e){this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");var y=void 0,v=void 0;r>2?(y=t-1,v=t+1,(0===t&&o===r-1||t===r-1&&0===o)&&(v=0,y=r-1)):(y=0,v=1),"prev"===s?this.getSlideItem(v).addClass("lg-next-slide"):this.getSlideItem(y).addClass("lg-prev-slide"),l.addClass("lg-current")}else this.makeSlideAnimation(s,l,a);this.lGalleryOn?setTimeout((function(){n.loadContent(t,!0),".lg-item"!==n.settings.appendSubHtmlTo&&n.addHtml(t)}),this.settings.speed+50+(e?0:this.settings.slideDelay)):this.loadContent(t,!0),setTimeout((function(){n.lgBusy=!1,a.removeClass("lg-slide-progress"),n.LGel.trigger(h,{prevIndex:o,index:t,fromTouch:e,fromThumb:i})}),(this.lGalleryOn?this.settings.speed+100:100)+(e?0:this.settings.slideDelay))}this.index=t}},w.prototype.updateCurrentCounter=function(t){this.getElementById("lg-counter-current").html(t+1+"")},w.prototype.updateCounterTotal=function(){this.getElementById("lg-counter-all").html(this.galleryItems.length+"")},w.prototype.getSlideType=function(t){return t.__slideVideoInfo?"video":t.iframe?"iframe":"image"},w.prototype.touchMove=function(t,e,i){var s=e.pageX-t.pageX,n=e.pageY-t.pageY,o=!1;if(this.swipeDirection?o=!0:Math.abs(s)>15?(this.swipeDirection="horizontal",o=!0):Math.abs(n)>15&&(this.swipeDirection="vertical",o=!0),o){var r=this.getSlideItem(this.index);if("horizontal"===this.swipeDirection){null==i||i.preventDefault(),this.outer.addClass("lg-dragging"),this.setTranslate(r,s,0);var l=r.get().offsetWidth,a=15*l/100-Math.abs(10*s/100);this.setTranslate(this.outer.find(".lg-prev-slide").first(),-l+s-a,0),this.setTranslate(this.outer.find(".lg-next-slide").first(),l+s+a,0)}else if("vertical"===this.swipeDirection&&this.settings.swipeToClose){null==i||i.preventDefault(),this.$container.addClass("lg-dragging-vertical");var d=1-Math.abs(n)/window.innerHeight;this.$backdrop.css("opacity",d);var g=1-Math.abs(n)/(2*window.innerWidth);this.setTranslate(r,0,n,g,g),Math.abs(n)>100&&this.outer.addClass("lg-hide-items").removeClass("lg-components-open")}}},w.prototype.touchEnd=function(t,e,i){var s,n=this;"lg-slide"!==this.settings.mode&&this.outer.addClass("lg-slide"),setTimeout((function(){n.$container.removeClass("lg-dragging-vertical"),n.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");var o=!0;if("horizontal"===n.swipeDirection){s=t.pageX-e.pageX;var r=Math.abs(t.pageX-e.pageX);s<0&&r>n.settings.swipeThreshold?(n.goToNextSlide(!0),o=!1):s>0&&r>n.settings.swipeThreshold&&(n.goToPrevSlide(!0),o=!1)}else if("vertical"===n.swipeDirection){if(s=Math.abs(t.pageY-e.pageY),n.settings.closable&&n.settings.swipeToClose&&s>100)return void n.closeGallery();n.$backdrop.css("opacity",1)}if(n.outer.find(".lg-item").removeAttr("style"),o&&Math.abs(t.pageX-e.pageX)<5){var l=x(i.target);n.isPosterElement(l)&&n.LGel.trigger(c)}n.swipeDirection=void 0})),setTimeout((function(){n.outer.hasClass("lg-dragging")||"lg-slide"===n.settings.mode||n.outer.removeClass("lg-slide")}),this.settings.speed+100)},w.prototype.enableSwipe=function(){var t=this,e={},i={},s=!1,n=!1;this.settings.enableSwipe&&(this.$inner.on("touchstart.lg",(function(i){t.dragOrSwipeEnabled=!0;var s=t.getSlideItem(t.index);!x(i.target).hasClass("lg-item")&&!s.get().contains(i.target)||t.outer.hasClass("lg-zoomed")||t.lgBusy||1!==i.touches.length||(n=!0,t.touchAction="swipe",t.manageSwipeClass(),e={pageX:i.touches[0].pageX,pageY:i.touches[0].pageY})})),this.$inner.on("touchmove.lg",(function(o){n&&"swipe"===t.touchAction&&1===o.touches.length&&(i={pageX:o.touches[0].pageX,pageY:o.touches[0].pageY},t.touchMove(e,i,o),s=!0)})),this.$inner.on("touchend.lg",(function(o){if("swipe"===t.touchAction){if(s)s=!1,t.touchEnd(i,e,o);else if(n){var r=x(o.target);t.isPosterElement(r)&&t.LGel.trigger(c)}t.touchAction=void 0,n=!1}})))},w.prototype.enableDrag=function(){var t=this,e={},i={},s=!1,n=!1;this.settings.enableDrag&&(this.outer.on("mousedown.lg",(function(i){t.dragOrSwipeEnabled=!0;var n=t.getSlideItem(t.index);(x(i.target).hasClass("lg-item")||n.get().contains(i.target))&&(t.outer.hasClass("lg-zoomed")||t.lgBusy||(i.preventDefault(),t.lgBusy||(t.manageSwipeClass(),e={pageX:i.pageX,pageY:i.pageY},s=!0,t.outer.get().scrollLeft+=1,t.outer.get().scrollLeft-=1,t.outer.removeClass("lg-grab").addClass("lg-grabbing"),t.LGel.trigger(u))))})),x(window).on("mousemove.lg.global"+this.lgId,(function(o){s&&t.lgOpened&&(n=!0,i={pageX:o.pageX,pageY:o.pageY},t.touchMove(e,i),t.LGel.trigger(m))})),x(window).on("mouseup.lg.global"+this.lgId,(function(o){if(t.lgOpened){var r=x(o.target);n?(n=!1,t.touchEnd(i,e,o),t.LGel.trigger(p)):t.isPosterElement(r)&&t.LGel.trigger(c),s&&(s=!1,t.outer.removeClass("lg-grabbing").addClass("lg-grab"))}})))},w.prototype.triggerPosterClick=function(){var t=this;this.$inner.on("click.lg",(function(e){!t.dragOrSwipeEnabled&&t.isPosterElement(x(e.target))&&t.LGel.trigger(c)}))},w.prototype.manageSwipeClass=function(){var t=this.index+1,e=this.index-1;this.settings.loop&&this.galleryItems.length>2&&(0===this.index?e=this.galleryItems.length-1:this.index===this.galleryItems.length-1&&(t=0)),this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"),e>-1&&this.getSlideItem(e).addClass("lg-prev-slide"),this.getSlideItem(t).addClass("lg-next-slide")},w.prototype.goToNextSlide=function(t){var e=this,i=this.settings.loop;t&&this.galleryItems.length<3&&(i=!1),this.lgBusy||(this.index+1<this.galleryItems.length?(this.index++,this.LGel.trigger(f,{index:this.index}),this.slide(this.index,!!t,!1,"next")):i?(this.index=0,this.LGel.trigger(f,{index:this.index}),this.slide(this.index,!!t,!1,"next")):this.settings.slideEndAnimation&&!t&&(this.outer.addClass("lg-right-end"),setTimeout((function(){e.outer.removeClass("lg-right-end")}),400)))},w.prototype.goToPrevSlide=function(t){var e=this,i=this.settings.loop;t&&this.galleryItems.length<3&&(i=!1),this.lgBusy||(this.index>0?(this.index--,this.LGel.trigger(y,{index:this.index,fromTouch:t}),this.slide(this.index,!!t,!1,"prev")):i?(this.index=this.galleryItems.length-1,this.LGel.trigger(y,{index:this.index,fromTouch:t}),this.slide(this.index,!!t,!1,"prev")):this.settings.slideEndAnimation&&!t&&(this.outer.addClass("lg-left-end"),setTimeout((function(){e.outer.removeClass("lg-left-end")}),400)))},w.prototype.keyPress=function(){var t=this;x(window).on("keydown.lg.global"+this.lgId,(function(e){t.lgOpened&&!0===t.settings.escKey&&27===e.keyCode&&(e.preventDefault(),t.settings.allowMediaOverlap&&t.outer.hasClass("lg-can-toggle")&&t.outer.hasClass("lg-components-open")?t.outer.removeClass("lg-components-open"):t.closeGallery()),t.lgOpened&&t.galleryItems.length>1&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}))},w.prototype.arrow=function(){var t=this;this.getElementById("lg-prev").on("click.lg",(function(){t.goToPrevSlide()})),this.getElementById("lg-next").on("click.lg",(function(){t.goToNextSlide()}))},w.prototype.arrowDisable=function(t){if(!this.settings.loop&&this.settings.hideControlOnEnd){var e=this.getElementById("lg-prev"),i=this.getElementById("lg-next");t+1===this.galleryItems.length?i.attr("disabled","disabled").addClass("disabled"):i.removeAttr("disabled").removeClass("disabled"),0===t?e.attr("disabled","disabled").addClass("disabled"):e.removeAttr("disabled").removeClass("disabled")}},w.prototype.setTranslate=function(t,e,i,s,n){void 0===s&&(s=1),void 0===n&&(n=1),t.css("transform","translate3d("+e+"px, "+i+"px, 0px) scale3d("+s+", "+n+", 1)")},w.prototype.mousewheel=function(){var t=this,e=0;this.outer.on("wheel.lg",(function(i){if(i.deltaY&&!(t.galleryItems.length<2)){i.preventDefault();var s=(new Date).getTime();s-e<1e3||(e=s,i.deltaY>0?t.goToNextSlide():i.deltaY<0&&t.goToPrevSlide())}}))},w.prototype.isSlideElement=function(t){return t.hasClass("lg-outer")||t.hasClass("lg-item")||t.hasClass("lg-img-wrap")},w.prototype.isPosterElement=function(t){var e=this.getSlideItem(this.index).find(".lg-video-play-button").get();return t.hasClass("lg-video-poster")||t.hasClass("lg-video-play-button")||e&&e.contains(t.get())},w.prototype.toggleMaximize=function(){var t=this;this.getElementById("lg-maximize").on("click.lg",(function(){t.$container.toggleClass("lg-inline"),t.refreshOnResize()}))},w.prototype.invalidateItems=function(){for(var t=0;t<this.items.length;t++){var e=x(this.items[t]);e.off("click.lgcustom-item-"+e.attr("data-lg-id"))}},w.prototype.trapFocus=function(){var t=this;this.$container.get().focus({preventScroll:!0}),x(window).on("keydown.lg.global"+this.lgId,(function(e){if(t.lgOpened&&("Tab"===e.key||9===e.keyCode)){var i=G(t.$container.get()),s=i[0],n=i[i.length-1];e.shiftKey?document.activeElement===s&&(n.focus(),e.preventDefault()):document.activeElement===n&&(s.focus(),e.preventDefault())}}))},w.prototype.manageCloseGallery=function(){var t=this;if(this.settings.closable){var e=!1;this.getElementById("lg-close").on("click.lg",(function(){t.closeGallery()})),this.settings.closeOnTap&&(this.outer.on("mousedown.lg",(function(i){var s=x(i.target);e=!!t.isSlideElement(s)})),this.outer.on("mousemove.lg",(function(){e=!1})),this.outer.on("mouseup.lg",(function(i){var s=x(i.target);t.isSlideElement(s)&&e&&(t.outer.hasClass("lg-dragging")||t.closeGallery())})))}},w.prototype.closeGallery=function(t){var e=this;if(!this.lgOpened||!this.settings.closable&&!t)return 0;this.LGel.trigger(v),this.settings.resetScrollPosition&&!this.settings.hideScrollbar&&x(window).scrollTop(this.prevScrollTop);var i,s=this.items[this.index];if(this.zoomFromOrigin&&s){var n=this.mediaContainerPosition,o=n.top,r=n.bottom,l=this.galleryItems[this.index],a=l.__slideVideoInfo,d=l.poster,g=T(s,this.outer,o+r,a&&d&&this.settings.videoMaxSize);i=E(s,this.outer,o,r,g)}this.zoomFromOrigin&&i?(this.outer.addClass("lg-closing lg-zoom-from-image"),this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration",this.settings.startAnimationDuration+"ms").css("transform",i)):(this.outer.addClass("lg-hide-items"),this.outer.removeClass("lg-zoom-from-image")),this.destroyModules(),this.lGalleryOn=!1,this.isDummyImageRemoved=!1,this.zoomFromOrigin=this.settings.zoomFromOrigin,clearTimeout(this.hideBarTimeout),this.hideBarTimeout=!1,x("html").removeClass("lg-on"),this.outer.removeClass("lg-visible lg-components-open"),this.$backdrop.removeClass("in").css("opacity",0);var h=this.zoomFromOrigin&&i?Math.max(this.settings.startAnimationDuration,this.settings.backdropDuration):this.settings.backdropDuration;return this.$container.removeClass("lg-show-in"),setTimeout((function(){e.zoomFromOrigin&&i&&e.outer.removeClass("lg-zoom-from-image"),e.$container.removeClass("lg-show"),e.resetScrollBar(),e.$backdrop.removeAttr("style").css("transition-duration",e.settings.backdropDuration+"ms"),e.outer.removeClass("lg-closing "+e.settings.startClass),e.getSlideItem(e.index).removeClass("lg-start-end-progress"),e.$inner.empty(),e.lgOpened&&e.LGel.trigger(b,{instance:e}),e.$container.get()&&e.$container.get().blur(),e.lgOpened=!1}),h+100),h+100},w.prototype.initModules=function(){this.plugins.forEach((function(t){try{t.init()}catch(t){console.warn("lightGallery:- make sure lightGallery module is properly initiated")}}))},w.prototype.destroyModules=function(t){this.plugins.forEach((function(e){try{t?e.destroy():e.closeGallery&&e.closeGallery()}catch(t){console.warn("lightGallery:- make sure lightGallery module is properly destroyed")}}))},w.prototype.refresh=function(t){this.settings.dynamic||this.invalidateItems(),this.galleryItems=t||this.getItems(),this.updateControls(),this.openGalleryOnItemClick(),this.LGel.trigger(o)},w.prototype.updateControls=function(){this.addSlideVideoInfo(this.galleryItems),this.updateCounterTotal(),this.manageSingleSlideClassName()},w.prototype.destroyGallery=function(){this.destroyModules(!0),this.settings.dynamic||this.invalidateItems(),x(window).off(".lg.global"+this.lgId),this.LGel.off(".lg"),this.$container.remove()},w.prototype.destroy=function(){var t=this.closeGallery(!0);return t?setTimeout(this.destroyGallery.bind(this),t):this.destroyGallery(),t},w}();return function(t,e){return new F(t,e)}}));
;

function slideDown(el){
    el.style.height = 'auto';
    let elHeight = el.offsetHeight;
    el.style.height = '0px';
    setTimeout(function(){
        el.style.height = elHeight + 'px';
    }, 50);
    let interval = setInterval(function(){
        if(el.offsetHeight == elHeight){
           clearInterval(interval);
           el.style.height = 'auto';
           el.style.overflow = 'visible';
        }
    }, 300);
}
function slideUp(el){
    el.style.height = el.offsetHeight + 'px';
    el.style.overflow = 'hidden';
    setTimeout(function(){
        el.style.height = '0px';
    }, 100);
    let interval = setInterval(function(){
        if(el.offsetHeight == 0){
            clearInterval(interval);
            el.removeAttribute('style');
        }
    }, 300);
};
function toggleSlider(el){
    if(el.offsetHeight > 0){
        slideUp(el);
    }else{
        slideDown(el);
    }
}

document.addEventListener('DOMContentLoaded', function () {

    let nlUnwrapSSL = document.querySelectorAll('.unwrap-services-stage-list');
    if(nlUnwrapSSL.length > 0){
        nlUnwrapSSL.forEach(btn=>{
            btn.addEventListener('click', (e)=>{
                e.preventDefault();
                let el = btn.previousElementSibling;
                btn.remove();
                el.style.maxHeight = '100%';
                let elHeight = el.offsetHeight;
                 
                el.style.maxHeight = '180px';
                setTimeout(function(){
                    el.style.maxHeight = elHeight + 'px';
                    el.classList.add('hide-shadow')
                }, 50);
                let interval = setInterval(function(){
                    if(el.offsetHeight == elHeight){
                       clearInterval(interval);
                       el.style.maxHeight = '100%'; 
                    }
                }, 300);
                
            })
        });
    }

    // работа статичного меню
    let staticBurger = document.querySelector('.header-top-main .burger-btn');
    let staticNav = document.querySelector('.header-top nav');
    if (staticBurger) {
        staticBurger.addEventListener('click', function (e) {
            staticBurger.classList.toggle('active');
            staticBurger.parentElement.classList.toggle('active');
            staticNav.classList.toggle('show-nav');
            document.body.classList.toggle('fixed');
        });
    }
    // работа скользящего меню
    // let scrollPosition = 0;
    
    let flyBurger = document.querySelector('.header-fly .burger-btn');
    let flyNav = document.querySelector('.header-fly nav');
    if (flyBurger) {
        flyBurger.addEventListener('click', function (e) {
            flyBurger.classList.toggle('active');
            flyNav.classList.toggle('show-nav');

            // if (document.body.classList.contains('fixed')) {
            //     document.body.classList.remove('fixed');
            //     window.scrollTo(0, scrollPosition);
            // } else {
            //     scrollPosition = window.pageYOffset;
            //     setTimeout(function () {
            //         document.body.classList.add('fixed');
            //     }, 400);
            // }

            if (window.innerWidth < 640) {
                flyBurger.parentElement.classList.toggle('active');
            }
        });
    }

    let flyHeader = document.querySelector('.header-fly');
    document.addEventListener('scroll', function () {
        if (window.pageYOffset > 110) {
            flyHeader.classList.add('show-panel');
        } else {
            flyHeader.classList.remove('show-panel');
        }
    });

    let nlPChoices = document.querySelectorAll('.p-choices');
    let arSelect = [];
    let arSelectMultiple = [];

    if(nlPChoices.length > 0){
        nlPChoices.forEach(select=>{
            if(select.getAttribute('multiple')){
                let currentSelect = new Choices(select, {
                    removeItemButton: true,
                    noResultsText: 'Значение не найдено',
                    loadingText: 'Загрузка...', 
                    searchEnabled: false,
                    placeholder: true,
                    placeholderValue: null, 
                    shouldSort: false,
                    position: 'auto',
                    allowHTML: true,
                    noChoicesText: 'Больше нечего выбирать', 
                }); 
                arSelectMultiple.push(currentSelect);
            }else{
                let currentSelect = new Choices(select, { 
                    noResultsText: 'Значение не найдено',
                    loadingText: 'Загрузка...',  
                    searchEnabled: false,
                    placeholder: true,
                    placeholderValue: null, 
                    shouldSort: false,
                    position: 'auto',
                    allowHTML: true,
                }); 
                arSelect.push(currentSelect);
            }
            
        });
    }
 

  

    // подключаю маски
    const nlTelMaskElem = document.querySelectorAll('.tel-mask'); 
    if(nlTelMaskElem.length > 0){
        nlTelMaskElem.forEach(item=>{
            let mask = IMask(item, {mask: '+{7}(000)000-00-00'});
        });
    } 
    
    // подключаю слайдеры
    let heliSlider = document.querySelector('.articles-sl');
    const hSl = new Swiper(heliSlider, {
        // Optional parameters  
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        watchOverflow: false,
        spaceBetween: 20,
        breakpoints: { 
            310: {
                spaceBetween: 10,
                slidesPerView: 2, 
            },
            350: {
                spaceBetween: 20,
                slidesPerView: 2, 
            },
            650: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            950: {
                spaceBetween: 20,
                slidesPerView: 4,
            }
        }

    });

    // работа спойлеров
    let spoilerBtn = document.querySelectorAll('.spoiler-btn');
    if(spoilerBtn.length > 0){
        spoilerBtn.forEach(item=>{
            item.addEventListener('click', function(e){ 
                this.parentElement.classList.toggle('active');
                toggleSlider(this.nextElementSibling);
            })
        });
    }
// установка размера карты
let mapElem = document.querySelector('.map-autowidth');
  
function autoWidthMap(){
    if(mapElem && window.innerWidth > 600){ 
        let bodyRect = document.body.getBoundingClientRect();
        let mapElemRect = mapElem.getBoundingClientRect(); 
        mapElem.style.width = Math.ceil(bodyRect.width - mapElemRect.x) + 'px';
    }
}

window.addEventListener('resize', autoWidthMap);
autoWidthMap();
    // ------yamaps-----------------------
    function initMap() {
        var myMap = new ymaps.Map("map", {
            center: [55.846396, 37.655544],
            zoom: 16
        });

        myMap.controls.add('zoomControl', {
            size: "large"
        });

        myPlacemark1 = new ymaps.Placemark([55.846396, 37.655544], {
            // Свойства. 
            hintContent: '<div class="map-hint caption-color h5">План Б</div>',
            balloonContent: '<div class="map-hint">г. Москва, проезд Серебрякова, д. 14 стр. 15</div>',
        }, {
            iconImageHref: './local/templates/planB/img/map-marker.svg',
            // Размеры метки.
            iconImageSize: [67, 76],
            iconImageOffset: [-33.5, -38]
        });

        myMap.geoObjects
            .add(myPlacemark1);
    }
    if(document.querySelector('#map')){
        ymaps.ready(initMap); 
    }

    // работа видеоконтейнера 
    
    let nlPlayBtn = document.querySelectorAll('.video-box__video-play');
    if(nlPlayBtn.length > 0){
        nlPlayBtn.forEach(btn=>{
            btn.addEventListener('click', function(e){
                e.preventDefault();
                let video = this.previousElementSibling; 
                video.setAttribute('controls', 'controls')
                video.play();
                this.remove();
            })
        })
    }


    // подключение lightgallery 
    let nlLightgalleryBox = document.querySelectorAll('.lightgallery-box'); 
    if(nlLightgalleryBox.length > 0){
        nlLightgalleryBox.forEach(lItem=>{
            lightGallery(lItem, {   
                speed: 500, 
            });
        })
    }

    // подключение SimpleBar
    Array.prototype.forEach.call(
        document.querySelectorAll('.modal__content-container'),
        (el) => new SimpleBar(el)
    );

});
 
    // подключения плагина подгрузки файлов
    let fileFunnelMultiple = document.querySelector('.file-funnel--multiple'); 
    if(fileFunnelMultiple){
        document.ffElem = new FileFunnel(fileFunnelMultiple, {
            deskBox: '.file-funnel__text',
            reciever: '.file-funnel__receiver',
            accept: ['.pdf', '.jpg', '.png', '.doc', '.docx'],
            docsBox: '.file-funnel__docs'
        });
    }

    let fileFunnelAldoc = document.querySelector('.file-funnel--aldoc');  
    if(fileFunnelAldoc){ 
        document.fileFunnelAldocObj = new FileFunnel(fileFunnelAldoc, {
            deskBox: '.file-funnel__text',
            reciever: '.file-funnel__receiver',
            accept: ['.pdf', '.jpg', '.png', '.doc', '.docx'],
            docsBox: '.file-funnel__docs'
        }); 
    }
 

 
    let fileFunnelIMG= document.querySelector('.file-funnel--only-img'); 
    if(fileFunnelIMG){
        document.fileFunnelIMGElem = new FileFunnel(fileFunnelIMG, {
            deskBox: '.file-funnel__text',
            reciever: '.file-funnel__receiver',
            accept: ['.jpg', '.png'],
            docsBox: '.file-funnel__docs'
        }); 
    }
 