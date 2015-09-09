// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 49
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var ua=this,va=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},wa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var xa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ya=function(a){if(null==a)return String(a);var b=xa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},za=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ca=function(a){if(!a||"object"!=ya(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!za(a,"constructor")&&!za(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);return void 0===
c||za(a,c)},Aa=function(a,b){var c=b||("array"==ya(a)?[]:{}),d;for(d in a)if(za(a,d)){var e=a[d];"array"==ya(e)?("array"!=ya(c[d])&&(c[d]=[]),c[d]=Aa(e,c[d])):ca(e)?(ca(c[d])||(c[d]={}),c[d]=Aa(e,c[d])):c[d]=e}return c};var Ba=Math.random(),Ca=null,Da=null,Fa={};var Ga=function(){},I=function(a){return"function"==typeof a},P=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ha=function(a){return"number"==ya(a)&&!isNaN(a)},Ia=function(a){return/^[0-9]+$/.test(a)},Ja=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ka=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},J=function(a){return Math.round(Number(a))||0},ea=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},La=function(a){var b=[];if(P(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},B=function(){return new Date},Na=function(a,b){if(!Ha(a)||!Ha(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},Oa=function(){this.prefix="gtm.";this.values={}};Oa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Oa.prototype.get=function(a){return this.values[this.prefix+a]};Oa.prototype.contains=function(a){return void 0!==this.get(a)};
var Pa=function(a,b,c){try{return a["8"](a,b||Ga,c||Ga)}catch(d){}return!1},Qa=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=Ka(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},Ra=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},Sa=function(a){for(var b=0;b<a.length;b++)a[b]()},aa=B().getTime(),da=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a,
b,c){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=c},Ua=function(a){return null!==a&&void 0!==a&&void 0!==a.length},ba=function(a,b,c){if(!(b&&c&&Ua(a)&&P(a)&&0!=a.length))return null;for(var d={},e=0;e<a.length;e++)a[e]&&a[e].hasOwnProperty(b)&&a[e].hasOwnProperty(c)&&(d[a[e][b]]=a[e][c]);return d},Va=function(a,b){0==b?a.Ma=!0:a.complete=!0;var c=a.g;a.i&&(a.i.ka[c]=b);Fa[c]&&(Fa[c].state=b)},Wa=function(a,b){a.sort(function(a,d){return b(a,d)?-1:b(d,a)?1:0})};var A=window,N=document,Ya=navigator,v=function(a,b,c){var d=A[a];A[a]=void 0===d||c?b:d;return A[a]},K=function(a,b,c,d){return(d||"http:"!=A.location.protocol?a:b)+c},Za=function(a){var b=N.getElementsByTagName("script")[0]||N.body||N.head;b.parentNode.insertBefore(a,b)},ga=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},p=function(a,b,c){var d=N.createElement("script");d.type="text/javascript";
d.async=!0;d.src=a;ga(d,b);c&&(d.onerror=c);Za(d)},ma=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";Za(c);ga(c,b);void 0!==a&&(c.src=a);return c},M=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},S=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},q=function(a){A.setTimeout(a,0)},ia=!1,
ja=[],$a=function(a){if(!ia){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ia=!0;for(var e=0;e<ja.length;e++)ja[e]()}}},ab=0,bb=function(){if(!ia&&140>ab){ab++;try{N.documentElement.doScroll("left"),$a()}catch(a){A.setTimeout(bb,50)}}},db=function(a){var b=N.getElementById(a);if(b&&cb(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(cb(document.all[a][c],"id")==a)return document.all[a][c];return b},cb=function(a,
b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},eb=function(a){return a.target||a.srcElement||{}},na=function(a){var b=N.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},fb=function(a,b){for(var c={},d=0;d<b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},gb=!1,hb=[],
ib=function(){if(!gb){gb=!0;for(var a=0;a<hb.length;a++)hb[a]()}},jb=function(a){a=a||A;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)},ka=function(a){window.console&&window.console.log&&window.console.log(a)};var kb=function(a,b,c,d,e){var f,g=(a.protocol.replace(":","")||A.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||A.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(1*(a.hostname?a.port:A.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ja(d||[],l[l.length-
1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var m=f.split("&"),h=0;h<m.length;h++){var n=m[h].split("=");if(decodeURIComponent(n[0]).replace("+"," ")==e){var r=n.slice(1).join("=");f=decodeURIComponent(r).replace("+"," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},lb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},oa=function(a){var b=N.createElement("a");
a&&(b.href=a);return b};var pa=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=kb(oa(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},sa=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ra=function(a,b){p("//bat.bing.com/bat.js",a,b)},L=A,fa=function(a,b,c){b&&(void 0===L[a]||c&&!L[a])&&(L[a]=b);return L[a]};var mb=new Oa,nb={},qb={set:function(a,b){Aa(pb(a,b),nb)},get:function(a){return G(a,2)},reset:function(){mb=new Oa;nb={}}},G=function(a,b){if(2==b){for(var c=nb,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return mb.get(a)},pb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var rb=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),tb={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ub={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},vb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},wb=function(){var a=G("gtm.whitelist");
var b=a&&vb(La(a),tb),c=G("gtm.blacklist")||G("tagTypeBlacklist")||[];rb.test(A.location&&A.location.hostname)&&(c=La(c),c.push("nonGooglePixels","nonGoogleScripts"));var d=c&&vb(La(c),ub),e={};return function(f){var g=f&&f["8"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var k=!0;if(a)a:{if(0>Ja(b,g.a))if(g.b&&0<g.b.length)for(var l=0;l<g.b.length;l++){if(0>
Ja(b,g.b[l])){k=!1;break a}}else{k=!1;break a}k=!0}var m=!1;if(c){var h;if(!(h=0<=Ja(d,g.a)))a:{for(var n=g.b||[],r=new Oa,u=0;u<d.length;u++)r.set(d[u],!0);for(u=0;u<n.length;u++)if(r.get(n[u])){h=!0;break a}h=!1}m=h}return e[g.a]=!k||m}};var _jsm=function(a){if(void 0!==a["11"])try{var b=A.google_tag_manager;return b&&b.e&&b.e(a["11"])}catch(c){}};_jsm.a="jsm";_jsm.b=["customScripts"];var _k=function(a){for(var b=String(G("gtm.cookie")||N.cookie).split(";"),c=0;c<b.length;c++){var d=b[c].split("="),e=Ka(d[0]);if(e&&e==a["13"]){var f=Ka(d.slice(1).join("="));return f&&a["6"]?decodeURIComponent(f):f}}};_k.a="k";_k.b=[];var Q=function(a){var b=N;return xb?b.querySelectorAll(a):null},yb;a:{var zb=/MSIE +([\d\.]+)/.exec(Ya.userAgent);if(zb&&zb[1]){var Ab=N.documentMode;Ab||(Ab="CSS1Compat"==N.compatMode?parseInt(zb[1],10):5);if(!Ab||8>=Ab){yb=!1;break a}}yb=!!N.querySelectorAll}var xb=yb;var Bb=void 0,Cb="",Db=0,Eb=void 0,_et=function(a){var b,c=G("gtm.element"),d=G("event"),e=Number(B());if(Bb===c&&Cb===d&&Db>e-250)b=Eb;else{var f;if(c){var g=c.innerText||c.textContent||"";g&&" "!=g&&(g=g.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));g&&(g=g.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));f=g}else f="";Eb=b=f;Bb=c;Cb=d}Db=e;return b?b:a["7"]};_et.a="et";_et.b=["google"];var _eu=function(a){var b=String(G("gtm.elementUrl")||a["7"]||""),c=oa(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Da};_e.a="e";_e.b=["google"];var Fb=/(^|\.)doubleclick\.net$/i,Gb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Hb=function(){for(var a=String(N.cookie).split(";"),b=[],c=0;c<a.length;c++){var d=a[c].split("="),e=Ka(d[0]);if(e&&"_gaexp"==e){var f=Ka(d.slice(1).join("="));f&&(f=decodeURIComponent(f));b.push(f)}}return b},Ib=function(a,b,c,d){if(Fb.test(N.location.hostname)||"/"==b&&Gb.test(c))return!1;var e="_gaexp="+a+"; ";b&&(e+="path="+b+"; ");d&&(e+="expires="+d.toGMTString()+"; ");c&&(e+="domain="+c+";");var f=N.cookie;N.cookie=
e;return f!=N.cookie||0<=Ja(Hb(),a)},Jb=function(a){if("none"==a)return 0;0==a.indexOf(".")&&(a=a.substr(1));return a.split(".").length},Kb=function(a){var b=a;b?(1<b.length&&b.lastIndexOf("/")==b.length-1&&(b=b.substr(0,b.length-1)),0!=b.indexOf("/")&&(b="/"+b),a=b):a="/";return"/"==a?1:a.split("/").length};var Lb=function(a,b){this.c=a;this.j=b};Lb.prototype.toString=function(){var a=""+this.c;1<this.j&&(a=a+"-"+this.j);return a};var Mb=function(a,b){this.xa=a;this.Y=b};Mb.prototype.toString=function(){return""+this.Y+"."+this.xa};var Pb=function(a,b){var c=new Nb(null,a,b);Ob(c);return c},Nb=function(a,b,c){this.Fa=Math.floor(B().getTime()/864E5);this.X=b||"auto";this.P=c||"/";var d=Jb(this.X),e=Kb(this.P);this.B=a||new Lb(d,e);this.h=[];this.v=new Oa},Tb=function(a,b,c){b&&(""==c.xa?Qb(a,b):(a.v.contains(b)||a.h.push(b),a.v.set(b,c)))},Ub=function(a,b){for(var c=0;c<b.length;c++)Tb(a,b[c][0],b[c][1])},Qb=function(a,b){var c=Ja(a.h,b);0<=c&&a.h.splice(c,1);a.v.set(b,void 0)},Zb=function(a){for(var b=[],c=0;c<a.h.length;c++){var d=
a.h[c];b.push([d,a.v.get(d)])}return b},$b=function(a){for(var b=0,c=0;c<a.h.length;c++)b=Math.max(b,a.v.get(a.h[c]).Y);return 864E5*b};Nb.prototype.toString=function(){if(0==this.h.length)return"";for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];a.push(""+c+"."+this.v.get(c).toString())}return"GAX1."+this.B.toString()+"."+a.join("!")};
var ac=function(a,b){for(var c=new Date,d=Kb(a.P),e=[],f=0;f<a.h.length;f++){var g=a.h[f];a.v.get(g).Y<a.Fa&&e.push(g)}for(f=0;f<e.length;f++)Qb(a,e[f]);if(a.h.length>(b||10))return!1;c.setTime($b(a));if("auto"!=a.X)return Ib(a.toString(),a.P,a.X,c);var k;var l=kb(A.location,"host",!0).split(".");if(4==l.length&&/^[0-9]*$/.exec(l[3]))k=["none"];else{for(var m=[],h=l.length-2;0<=h;h--)m.push(l.slice(h).join("."));m.push("none");k=m}for(var n=0;n<k.length;n++)if("none"!=k[n]&&(a.B=new Lb(Jb(k[n]),d),
Ib(a.toString(),a.P,k[n],c)))return!0;return!1},Ob=function(a){for(var b=a.B.c,c=a.B.j,d=Hb(),e=[],f=0;f<d.length;f++){var g=bc(a,d[f]);g&&e.push(g)}Wa(e,function(a,d){var e=a.B,f=d.B;return e.c==f.c&&e.j==f.j?!1:e.c==b&&e.j==c?!0:f.c==b&&f.j==c?!1:e.c==b?f.c!=b||e.j<f.j:f.c==b?!1:e.j==c?f.c!=b&&(f.j!=c||e.c<f.c):f.j==c?!1:e.c<f.c||e.c==f.c&&e.j<f.j});a.B=0<e.length?e[0].B:new Lb(b,c);for(f=e.length-1;0<=f;f--)Ub(a,Zb(e[f]))},bc=function(a,b){var c=b.match(/GAX1\.([^.]+).(.*)/);if(c){var d;a:{var e=
(c[1]||"").split("-");if(!(0==e.length||2<e.length)){var f=Ka(e[0]);if(0!=f.length){var g=2==e.length?Ka(e[1]):"1";if(Ia(f)&&Ia(g)){d=new Lb(J(f),J(g));break a}}}d=void 0}if(d){for(var k=new Nb(d,a.X,a.P),l=(c[2]||"").split("!"),m=0;m<l.length;m++){var h=l[m].split(".");if(3==h.length){if(!Ia(h[1]))return;Tb(k,h[0],new Mb(h[2],J(h[1])))}}return k}}};var _v=function(a){var b=G(a["13"].replace(/\\\./g,"."),a[""]);return void 0!==b?b:a["7"]};_v.a="v";_v.b=["google"];var _r=function(a){return Na(a[""],a[""])};_r.a="r";_r.b=["google"];var _f=function(a){var b=String(G("gtm.referrer")||N.referrer);if(!b)return b;var c=oa(b);return b};_f.a="f";_f.b=["google"];var _smm=function(a){var b=a["9"],c=a["12"]||{};return c.hasOwnProperty(b)?c[b]:a["7"]};_smm.a="smm";_smm.b=["google"];var ta=function(a){var b=A.location,c=b.hash?b.href.replace(b.hash,""):b.href,d;if(d=a["5"]?a["5"]:G("gtm.url"))c=String(d),b=oa(c);var e,f,g;e=a["17"];
g=a["16"];a["4"]&&(c=kb(b,a["4"],e,f,g));return c},_u=ta;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a["0"])==String(a["1"])};_eq.a="eq";_eq.b=["google"];var jc=Math.random(),kc="1.000000">jc;var lc=Ga;var mc=Ga,nc=[],oc=!1,pc=function(a){return A["dataLayer"].push(a)},qc=function(a){var b=!1;return function(){!b&&I(a)&&q(a);b=!0}},wc=function(){for(var a=!1;!oc&&0<nc.length;){oc=!0;var b=nc.shift();if(I(b))try{b.call(qb)}catch(c){}else if(P(b))a:{var d=b;if("string"==ya(d[0])){for(var e=d[0].split("."),f=e.pop(),g=d.slice(1),k=nb,l=0;l<e.length;l++){if(void 0===k[e[l]])break a;k=k[e[l]]}try{k[f].apply(k,g)}catch(m){}}}else{var h=b,n=void 0;for(n in h)if(h.hasOwnProperty(n)){var r=n,u=h[n];
mb.set(r,u);Aa(pb(r,u),nb)}var z=!1,t=h.event,x=void 0;if(t){x=aa++;Da=t;if(!h["gtm.uniqueEventId"]){var E=x;mb.set("gtm.uniqueEventId",E);Aa(pb("gtm.uniqueEventId",E),nb)}var F=qc(h.eventCallback),D=h.eventTimeout;D&&A.setTimeout(F,Number(D));z=mc(x,t,F,h.eventReporter)}Ca||(Ca=h["gtm.start"])&&lc();var w=h,C=x,y=t,H=nb;if(!z){var W=x,U=t;}Da=null;a=z||a}var Ea=b,Z=nb;vc();oc=!1}return!a};var xc,yc=/(Firefox\D28\D)/g.test(Ya.userAgent),zc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Ac={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Hc=function(a,b){return function(c){c=c||A.event;var d=eb(c),e=!1;if(3!==c.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(d=fb(d,["a","area"]),e=!d||!d.href||Bc(d.href)||2===c.which||null==c.which&&4==c.button||c.ctrlKey||c.shiftKey||c.altKey||!0===c.metaKey);var f="FORM_SUBMIT"==a?Ac:zc;if(c.defaultPrevented||!1===c.returnValue||c.oa&&c.oa()){if(d){var g={simulateDefault:!1},
k=Cc(f,["wnc","nwnc"]);k&&Ec(a,d,g,f.wt,k)}}else{if(d){var g={},l=!0,m=Cc(f,["wnc","nwnc","nwc","wc"]);(l=Ec(a,d,g,f.wt,m))||(Fc(g.eventReport,f)?b=!0:e=!0);e=e||l||"LINK_CLICK"==a&&yc;g.simulateDefault=!l&&b&&!e;g.simulateDefault&&(e=Gc(d,g)||e,!e&&c.preventDefault&&c.preventDefault());c.returnValue=l||!b||e;return c.returnValue}return!0}}}},Ec=function(a,b,c,d,e){var f=d||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||cb(b,"id")||"","gtm.elementTarget":b.formTarget||
b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Ic(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=Jc(b);g.eventTimeout=f;g.eventCallback=Kc(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||
"";break;default:return!0}return pc(g)},Jc=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},Lc=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Gc=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(Ya.userAgent),e=Lc(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=A.frames&&A.frames[f]||A[f];break;case "_blank":d?(b.simulateDefault=
!1,c=!0):(b.targetWindowName="gtm_autoEvent_"+B().getTime(),b.targetWindow=A.open("",b.targetWindowName));break;default:d&&!A.frames[e]?(b.simulateDefault=!1,c=!0):(A.frames[e]||(b.targetWindowName=e),b.targetWindow=A.frames[e]||A.open("",e))}return c},Ic=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||B().getTime(),500>B().getTime()-c&&A.setTimeout(Ic(a,b,c),25)))}},Kc=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;
b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);N.gtmSubmitFormNow=!0;Mc(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||B().getTime(),500>B().getTime()-c&&A.setTimeout(Kc(a,b,c),25)}},Cc=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=a[b[d]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&c.push(f)}return c.join(",")},Sc=function(a,b,c,d,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>d)&&(a.wt=d);a[b?c?"wc":"wnc":c?"nwc":"nwnc"][f]=!0},Fc=function(a,b){if(b.wnc["0"]||
b.wc["0"])return!0;for(var c=0;c<Tc.length;c++)if(a.passingRules[c]){var d=Tc[c],e=Uc[c],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=d[1],k=0;k<g.length;k++)if(a.resolvedTags[g[k]])return!0}return!1},Yc=function(a,b,c,d,e){var f,g,k=!1;switch(a){case "CLICK":if(N.gtmHasClickListenerTag)return;N.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=eb(a);b&&Ec("CLICK",b,{},d)};k=!0;break;case "LINK_CLICK":b&&!xc&&(xc=lb(N.location));Sc(zc,b||!1,c||!1,d,e);if(N.gtmHasLinkClickListenerTag)return;
N.gtmHasLinkClickListenerTag=!0;f="click";g=Hc(a,b||!1);break;case "FORM_SUBMIT":Sc(Ac,b||!1,c||!1,d,e);if(N.gtmHasFormSubmitListenerTag)return;N.gtmHasFormSubmitListenerTag=!0;f="submit";g=Hc(a,b||!1);break;default:return}S(N,f,g,k)},Bc=function(a){if(!xc)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var c=oa(a);return xc==lb(c)},Mc=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
N.gtmFormElementSubmitter||(N.gtmFormElementSubmitter=N.createElement("form"));return N.gtmFormElementSubmitter.submit.call?N.gtmFormElementSubmitter.submit:a.submit};var cc=new String("undefined"),fd=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===cc?b:a[d]);return c.join("")}};fd.prototype.toString=function(){return this.resolve("undefined")};fd.prototype.valueOf=fd.prototype.toString;var gd={},hd=function(a,b){var c=aa++;gd[c]=[a,b];return c},id=function(a){var b=a?0:1;return function(a){var d=gd[a];if(d&&I(d[b]))d[b]();gd[a]=void 0}};var jd=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},kd=function(a,b){return a<b?-1:a>b?1:0};var ld;a:{var md=ua.navigator;if(md){var nd=md.userAgent;if(nd){ld=nd;break a}}ld=""}var T=function(a){return-1!=ld.indexOf(a)};var od=T("Opera")||T("OPR"),pd=T("Trident")||T("MSIE"),qd=T("Edge"),rd;if(rd=T("Gecko"))rd=!(-1!=ld.toLowerCase().indexOf("webkit")&&!T("Edge"));var sd=rd&&!(T("Trident")||T("MSIE"))&&!T("Edge"),td=-1!=ld.toLowerCase().indexOf("webkit")&&!T("Edge");td&&T("Mobile");T("Macintosh");T("Windows");T("Linux")||T("CrOS");var ud=ua.navigator||null;ud&&(ud.appVersion||"").indexOf("X11");T("Android");!T("iPhone")||T("iPod")||T("iPad");T("iPad");
var vd=function(){var a=ld;if(sd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qd)return/Edge\/([\d\.]+)/.exec(a);if(pd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(td)return/WebKit\/(\S+)/.exec(a)},wd=function(){var a=ua.document;return a?a.documentMode:void 0},xd=function(){if(od&&ua.opera){var a=ua.opera.version;return"function"==va(a)?a():a}var b="",c=vd();c&&(b=c?c[1]:"");if(pd){var d=wd();if(d>parseFloat(b))return String(d)}return b}(),yd={},zd=function(a){var b;if(!(b=yd[a])){for(var c=0,d=
jd(String(xd)).split("."),e=jd(String(a)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"",m=RegExp("(\\d*)(\\D*)","g"),h=RegExp("(\\d*)(\\D*)","g");do{var n=m.exec(k)||["","",""],r=h.exec(l)||["","",""];if(0==n[0].length&&0==r[0].length)break;c=kd(0==n[1].length?0:parseInt(n[1],10),0==r[1].length?0:parseInt(r[1],10))||kd(0==n[2].length,0==r[2].length)||kd(n[2],r[2])}while(0==c)}b=yd[a]=0<=c}return b},Ad=ua.document,Bd=Ad&&pd?wd()||("CSS1Compat"==Ad.compatMode?
parseInt(xd,10):5):void 0;var Cd;if(!(Cd=!sd&&!pd)){var Dd;if(Dd=pd)Dd=9<=Bd;Cd=Dd}Cd||sd&&zd("1.9.1");pd&&zd("9");var Ed=function(a){Ed[" "](a);return a};Ed[" "]=function(){};var la=function(a,b){var c="";pd&&!Fd(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Gd)a.srcdoc=d;else if(Hd){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Id(a,d)},Gd=td&&"srcdoc"in document.createElement("iframe"),Hd=sd||td||pd&&zd(11),Id=function(a,b){pd&&zd(7)&&!zd(10)&&6>Jd()&&Kd(b)&&(b=Ld(b));var c=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};pd&&!Fd(a)?Md(a,c):c()},Jd=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Fd=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c&&null!=c.location.href)b:{try{Ed(c.foo);d=!0;break b}catch(e){}d=!1}b=d}catch(f){b=!1}return b}catch(g){return!1}},Nd=0,Md=function(a,b){var c="goog_rendering_callback"+Nd++;window[c]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Kd=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Ld=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var _img=function(a,b,c){var d=na('<a href="'+a["19"]+'"></a>')[0].href,e=a["2"];if(e)var f=d.charAt(d.length-1),g=0<=d.indexOf("?")?"?"==f||"&"==f?"":"&":"?",d=d+(g+e+"="+a["3"]);M(d,b,c)};_img.a="img";_img.b=["customPixels"];var Sd={},Ud=function(a,b,c,d,e){if(!xb)return!1;var f=Sd[a];f||(f={id:a,L:[],ba:0,za:null,Ea:!1},Sd[a]=f);var g={id:a+":"+f.L.length,Ua:c,Pa:d,K:b,ma:0,ja:e||null,Da:0,aa:!1};f.L.push(g);null===b?(g.aa=!0,c(null)):Td(f);return!0},Td=function(a){for(var b=a.ba;b<a.L.length;b++){var c=a.L[b],d=b==a.ba;if(!c.aa&&!Vd(d,c))break;c.aa&&d&&a.ba++}a.L.length>a.ba&&(a.za||(a.za=A.setTimeout(function(){a.za=null;Td(a)},80)),ia||a.Ea||(a.Ea=!0,ja.push(function(){Td(a)})))},Vd=function(a,b){var c=[];if(b.K){var d=
Wd(b.K,b.id),e=null;b.ja&&(e=Wd(b.ja,b.id+"-t"));for(var f=0;f<d.length;f++){var g=d[f],k;if(null!=e&&(k=e.length>f?e[f]:null,!k&&!ia&&(null===b.ja.o||b.Da+c.length<b.ja.o)))break;c.push({element:g,tb:k})}}if(!ia&&b.Pa&&(!a||null==b.K.o||b.K.o!=b.ma+c.length))return!1;for(var l=0;l<c.length;l++){var m=c[l].element,h=c[l].tb;b.ma++;Xd(m,b.id);h&&(b.Da++,Xd(h,b.id+"-t"));b.Ua(m,h)}if(b.K.o&&b.K.o==b.ma||ia)b.aa=!0;return!0},Xd=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=
!0},Wd=function(a,b){for(var c=Q(a.w)||[],d=[],e=0;e<c.length;e++){var f=c[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){var g;if(g=a.A){var k;a:{for(var l=f;l;){if(l.nextSibling){k=!0;break a}l=l.parentNode}k=!1}g=!k}if(g)break;d.push(f)}}return d};var je,ke;
var ue=function(a){return function(){}},ve=function(a){return function(){}};var Me=function(a){var b=A||ua,c=b.onerror,d=!1;td&&!zd("535.3")&&(d=!d);b.onerror=function(b,f,g,k,l){c&&c(b,f,g,k,l);a({message:b,fileName:f,mb:g,Jb:k,error:l});return d}};
var V=[],Oe={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Pe=function(a){return Oe[a]},Ye=/[\x00\x22\x26\x27\x3c\x3e]/g;var bf=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cf={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b","\f":"\\f",
"\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},df=function(a){return cf[a]};
V[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bf,df)+"'"}};
var kf=/['()]/g,lf=function(a){return"%"+a.charCodeAt(0).toString(16)};V[12]=function(a){var b=encodeURIComponent(String(a));kf.lastIndex=
0;return kf.test(b)?b.replace(kf,lf):b};var mf=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,nf={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13",
"\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89",
"\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},of=function(a){return nf[a]};V[16]=function(a){return a};var qf=76,rf=[],sf=[],tf=[],uf=new Oa,vf=[],X=[],Tc=[],Uc=[],wf=function(){this.D=[]};wf.prototype.set=function(a,b){this.D.push([a,b]);return this};wf.prototype.resolve=function(a,b){for(var c={},d=0;d<this.D.length;d++){var e=xf(this.D[d][0],a,b),f=xf(this.D[d][1],a,b);c[e]=f}return c};var yf=function(a){this.index=a};
yf.prototype.resolve=function(a,b){var c=tf[this.index];if(c&&!b(c)){var d=c["10"];if(a){if(a.get(d))return;a.set(d,!0)}c=xf(c,a,b);a&&a.set(d,!1);return Pa(c)}};
var _M=function(a){return new yf(a)},zf=function(a){this.resolve=function(b,c){for(var d=[],e=!1,f=0;f<a.length;f++){var g=xf(rf[a[f]],b,c);g===cc&&(e=!0);d.push(g)}return e?new fd(d):d.join("")}},_T=function(a){return new zf(arguments)},Af=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.resolve=
function(c,d){var e=xf(a[0],c,d);if(a[0]instanceof yf&&b(8)&&b(16)){if(e===cc)return e;var f="gtm"+aa++;uf.set(f,e);return'google_tag_manager["GTM-TR24NF"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=V[a[g]](e);return e}},_E=function(a,b){return new Af(arguments)},Bf=function(a,b){this.s=a;this.ia=b},_R=function(a,b){return new Bf(a,b)},Cf=function(a,b){return xf(a,new Oa,b)},xf=function(a,b,c){var d=a;if(a instanceof yf||a instanceof wf||a instanceof zf||a instanceof Af)return a.resolve(b,
c);if(!(a instanceof Bf))if(P(a))for(var d=[],e=0;e<a.length;e++)d[e]=xf(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=xf(a[f],b,c))}return d},Df=function(a,b){var c=b[a],d=c;if(c instanceof yf||c instanceof Af||c instanceof zf||c instanceof Bf)d=c;else if(P(c))for(var d=[],e=0;e<c.length;e++)d[e]=Df(c[e],b);else if("object"==typeof c){var d=new wf,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],Df(c[f],b))}return d},Ff=function(a,b){for(var c=b?b.split(","):
[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=rf[e[1]]);if(1==a)for(var f=Ef(e[0]),e=c[d]={},g=0;g<f.length;g++){var k=sf[f[g]];e[k[0]]=k[1]}if(2==a)for(g=0;4>g;g++)e[g]=Ef(e[g]);3==a&&(c[d]=rf[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var l=0;l<e[g].length;l++)e[g][l]=rf[e[g][l]]}else e[g]=[];5==a&&(c[d]=e[0])}return c},Ef=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<qf;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f=0,f=65<e&&90>=
e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},Gf=function(a,b,c){a.push.apply(a,Ff(b,c))};
var sc=function(){},Of=function(a){},vc=function(){},Pf=function(a){},Qf=function(a,b){},tc=function(a){};var Rf=function(a){var b=this;this.g=a;this.complete=this.Ma=!1;this.ha=[];this.Z=[];this.O=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||Sa(b.ha);Va(b,1)};this.N=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||Sa(b.Z);Va(b,2)};this.u=Ga},Sf=function(a,b){a.ha.push(b)},
Tf=function(a,b){a.Z.push(b)},Uf=function(a){this.F=[];this.ya=[];this.Ga={};this.sa=[];this.M=0;this.Ka={};this.Na={};this.ka={};this.event=a};Uf.prototype.addListener=function(a){this.sa.push(a)};
var Vf=function(a,b,c,d,e,f){if(!c.complete){a.F[b]=c;void 0==d&&(d=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);d=P(d)?d.slice():["or",d];e=P(e)?e.slice():[e];f=P(f)?f.slice():[f];a.Ga[b]=d;a.Ka[b]=0<e.length;a.Na[b]=0<f.length;a.M++;var g=function(){0<a.M&&a.M--;0<a.M||Sa(a.sa)};Sf(c,g);Tf(c,g)}},Wf=function(a,b,c){a.F[b]&&(Sf(a.F[b],function(){c(b,!0)}),Tf(a.F[b],function(){c(b,!1)}))},Xf=function(a,b){var c=!1;return function(d,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof Bf&&a[g].s===
d||a[g]===d){f=g;break a}f=-1}c||0>f||("or"==a[0]?e?(c=!0,b()):(a.splice(f,1),1==a.length&&(c=!0)):e?(a.splice(f,1),1==a.length&&(c=!0,b())):c=!0)}},ag=function(a,b){var c=[],d=!1,e=function(b){var f,g,h=X[b];if(a.event.f(h)){}else g=Yf(h,b,a);if(f=g){var k=Zf(b,!0);0<k.length&&e(k[0].s);c.push(f);var l=Zf(b,!1);0<l.length&&e(l[0].s)}else d=!0};e(b);if(!d){for(var f=0;f<c.length;f++){var g=c[f],k=Zf(g.g,
!0);if(0<k.length){var l=c[f-1],m=$f(g);Sf(l,m);0==k[0].ia&&Tf(l,m)}var h=Zf(g.g,!1);0<h.length&&(m=$f(c[f+1]),Sf(g,m),0==h[0].ia&&Tf(g,m))}a.ya.push(c)}},Zf=function(a,b){var c=b?"":"",d=X[a],e=void 0===d[c]?[]:d[c];return P(e)?e:[e]},$f=function(a){return function(){a.u()}},cg=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=[],f=function(a){var b=Zf(a,!0);0<b.length&&f(b[0].s);e.push(a);var c=Zf(a,!1);0<c.length&&f(c[0].s)};f(d.g);b[d.g]=e}bg(a,
b);return b},bg=function(a,b){for(var c=0;c<a.length;c++){var d=a[c].g,e;for(e in b)if(b.hasOwnProperty(e)&&e!=d&&-1<Ja(b[e],d)){delete b[d];break}}};var eg=function(a,b){return function(){a["20"]=b.O;a["21"]=b.N;var c=b.g,d=b.i&&b.i.ka[c],e=Fa[c]&&Fa[c].state,f=d?void 0!==d:b.Ma,g=Fa[c]&&Fa[c].firingOption,k=g&&2==g,l=g&&1==g;if((f||e&&0!=e)&&(f||k)&&(k||l))k&&Fa[c]&&1==Fa[c].state||l&&b.i&&1==b.i.ka[c]?b.O():b.N();else{var m=b.i?b.i.event:void 0;a=dg(a,m?m.f:wb());Va(b,0);if(m){var h=a;Qf(m,c)}Pa(a,b.O,b.N)}}},dg=function(a,b){a=Cf(a,b);return a},Yf=function(a,b,c){var d=new Rf(b);d.i=c;Sf(d,ue(a));Tf(d,ve(a));d.u=eg(a,d);return d};var jg,kg;var tg=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=vf[b]&&Cf(vf[b],c),e=d;if(d)if(d[""]&&P(d["1"]))for(var f=d["1"],e=!1,g=0;!e&&g<f.length;g++)d["1"]=f[g],e=Pa(d);else e=Pa(d);a[b]=[e,d]}return a[b]}},Nf=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.I(c[d],a.f)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.I(e[d],a.f)[0])return!1;return!0},ug=!1,mc=function(a,b,c,d){switch(b){case "gtm.js":if(ug)return!1;ug=!0;break;
case "gtm.sync":if(G("gtm.snippet")!=Ba)return!1}G("tagTypeBlacklist");for(var e={id:a,name:b,V:c||Ga,U:Ef(),ga:Ef(),I:tg(),f:wb()},f=[],g=0;g<Tc.length;g++)if(Nf(e,Tc[g])){f[g]=!0;for(var k=e,l=Tc[g],m=l[1],h=0;h<m.length;h++)k.U[m[h]]=!0;for(var n=l[3],h=0;h<n.length;h++)k.ga[n[h]]=!0}else f[g]=!1;Qf(e);var u=[];
for(var z=0;z<qf;z++)if(e.U[z]&&!e.ga[z])if(e.f(X[z])){}else{u[z]=X[z];}e.J=u;for(var t=new Uf(e),x=0;x<qf;x++)if(e.U[x]&&!e.ga[x]&&!e.f(X[x])){var E=e.J[x],F=Yf(E,x,t);Vf(t,x,F,E[""],
E[""],E[""]);if(E[""])break}t.addListener(e.V);for(var D=[],w=0;w<t.F.length;w++){var C=t.F[w];if(C){var y=t.Ga[w],H=t.Ka[w],O=t.Na[w];if(0!=y.length||H||O){if(0<y.length)for(var W=Xf(y,C.u),U=0;U<y.length;U++)y[U]instanceof Bf&&y[U].s!=w&&Wf(t,y[U].s,W);(H||O)&&ag(t,w)}else D.push(w)}}for(w=0;w<D.length;w++)t.F[D[w]].u();for(w=0;w<t.ya.length;w++){for(var Ea=t.ya[w],Z=Ea,Xc=[],Xb=0;Xb<Z.length;Xb++){var Yb=Z[Xb],Vc=Yb.g,Wc=Fa[Vc],
Vb=Wc.firingOption;0!=Vb&&(1==Vb&&void 0!==Yb.i.ka[Vc]||2==Vb&&void 0!==Wc.state)&&Xc.push(Yb)}var Wb=cg(Xc),sb=void 0;for(sb in Wb)if(Wb.hasOwnProperty(sb)){for(var Dc=void 0,Qe=void 0,Rb=Wb[sb],Hg=Rb[0],Re=Rb[Rb.length-1],Se,qa=0;qa<Z.length;qa++){var Sb=Z[qa];!Dc&&Sb.g==Hg&&0<qa&&(Dc=Z[qa-1]);Sb.g==Re&&qa<Z.length-1&&(Qe=Z[qa+1]);if(-1<Ja(Rb,Sb.g))if(Se=Z.splice(qa,1)[0],Sb.g==Re)break;else qa--}if(Se){var Te=Number(sb),Y=Dc,Nc=Qe;if(Y){var Ig=Y.ha[0],Jg=Y.Z[0],Ue=Y;Ue.ha=[];Ue.Z=[];Sf(Y,Ig);Tf(Y,
Jg)}if(Y&&Nc){var Oc=$f(Nc);Sf(Y,Oc);var Pc=Zf(Y.g,!1);0<Pc.length&&Pc[0].s!=Te&&0==Pc[0].ia&&Tf(Y,Oc);var Qc=Zf(Nc.g,!0);0<Qc.length&&Qc[0].s!=Te&&0==Qc[0].ia&&Tf(Y,Oc)}}}0<Ea.length&&Ea[0].u()}0<t.M||Sa(t.sa);d&&I(d)&&d({passingRules:f,resolvedTags:e.J});for(var Ve in e.J)if(e.J.hasOwnProperty(Ve)){var We=e.J[Ve],Rc;if(!(Rc=void 0==We["10"])){var Xe=We["10"];Rc=!("function"!=typeof String.prototype.startsWith?0===Xe.indexOf("_implicit"):Xe.startsWith("_implicit"))}if(Rc)return!0}return!1};var vg={macro:function(a){if(uf.contains(a))return uf.get(a)}};vg.dataLayer=qb;vg.onHtmlSuccess=id(!0);vg.onHtmlFailure=id(!1);vg.Ya=function(){var a=A.google_tag_manager;a||(a=A.google_tag_manager={});a["GTM-TR24NF"]||(a["GTM-TR24NF"]=vg)};rf.push.apply(rf,function(){for(var a=[_jsm,'ST_PAGE_URL_TRIMMED','(function(){var a\x3d',_u,'ST_PAGE_URL','query','purl',_E(_M(0),8,16),';if(void 0\x3d\x3d\x3da)return\x22\x22;a\x3ddecodeURIComponent(a);a\x3da.replace(/\\?|\\\x26|\\#/g,\x22 \x22);a\x3da.split(\x22 \x22);return a[0]})();',_T(2,7,8),'ST_PAGE_REFERER_TRIMMED','ST_PAGE_REFERER','jsref',_E(_M(2),8,16),_T(2,13,8),_eq,_e,'_event',_M(4),'gtm.js','1207867_2147479553',_smm,'BLOCK_LIST_TEST','ST_HOSTNAME','host',true,_M(0),_M(5),'newyorklife.com','airforce.com','att.com','cosmopolitan.com','delish.com','esquire.com','marieclaire.com','goodhousekeeping.com','thedailygreen.com','seventeen.com','cosmogirl.com','quickandsimple.com','harpersbazaar.com','foundry9.com','creditcards.chase.com','chase.com','ford.com','lincoln.com','staples.com','mangahere.com','mangafox.me','mangago.com','southwest.com','themdu.com','business.comcast.com','cbcstage2.tkinteractive.com','cbcommunity.comcast.com','bcommunity.tkinteractive.com','cbcommunity.comcastl.com','legacy.com','visitdubai.com','block',{28:59,29:59,30:59,31:59,32:59,33:59,34:59,35:59,36:59,37:59,38:59,39:59,40:59,41:59,42:59,43:59,44:59,45:59,46:59,47:59,48:59,49:59,50:59,51:59,52:59,53:59,54:59,55:59,56:59,57:59,58:59},'ok',_M(6),'1207867_5',_img,'//adadvisor.net/adscores/r.pixel?sid\x3d9212270798',1,'//stpix.media6degrees.com/orbserv/hbpix?pixId\x3d23460\x26pcv\x3d46\x26curl\x3d',_E(_M(1),12),_T(67,68),'gtmcb',_r,'_random',_M(7),2,'//p.nexac.com/e/sr/a-1548/s-3271/s-3271.xgi',4,'//idsync.rlcdn.com/398646.gif',7,'url','url hostname','url path','path',_f,'referrer','event',_v,'element','gtm.element','element classes','gtm.elementClasses','element id','gtm.elementId','element target','gtm.elementTarget',_et,'element text','element url','gtm.elementUrl','history new url fragment','gtm.newUrlFragment','history old url fragment','gtm.oldUrlFragment','history new state','gtm.newHistoryState','history old state','gtm.oldHistoryState','history change source','gtm.historyChangeSource',_k,'ST_ID','FPC',false],b=[],c=0;c<a.length;c++)b[c]=Df(c,a);return b}());Gf(sf,0,"8:0,10:1,8:3,10:4,4:5,16:6,11:9,10:10,10:11,16:12,11:14,8:15,8:16,10:17,0:18,1:19,8:21,10:22,10:23,4:24,17:25,5:26,9:27,12:60,7:61,0:62,1:59,8:64,19:65,18:66,15:66,19:69,2:70,8:71,10:72,3:73,18:74,14:25,19:75,18:76,19:77,18:78,10:79,10:80,10:81,4:82,8:83,10:84,10:85,8:86,10:87,13:88,10:89,13:90,10:91,13:92,10:93,13:94,8:95,10:96,10:97,13:98,10:99,13:100,10:101,13:102,10:103,13:104,10:105,13:106,10:107,13:108,8:109,10:110,13:111,6:112");Gf(tf,1,"8,DB,UM,BS,AAD,EAAP,AAwwB,AAAAAY,EAAAAAAB,EAACAAAC,EAAAAAAM,AAAAAAAw,AABAAAAAB,AAAAAAAAO,AAAAAAAAy,AAAAAAAACD,AAAAAAAACM,AAAAAAAAAw,AAAAAAAACAD,AAAAAAAACAM,AAAAAAAACAw,AAAAAAAACAAD,AAAAAAAACAAM,AAAAAAAACAAw,AAAAAAAAAAAAP");Gf(vf,1,"AgM,AgAAG");Gf(X,1,"AAAAInB,AAAA4,AAAAIAO,AAAAIky");Gf(Tc,2,"B:P::,D:::P");Gf(Uc,4,"20.20.20.20:,:63.63.63.63");
for(var wg=0;wg<X.length;wg++){var xg=X[wg],yg=1;xg[""]?yg=2:xg[""]&&(yg=0);Fa[wg]={firingOption:yg,state:void 0}}vg.Ya();
(function(a){})("async");
(function(){var a=v("dataLayer",[],!1),b=v("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};ja.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});hb.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(nc.push.apply(nc,b);300<this.length;)this.shift();return wc()};nc.push.apply(nc,a.slice(0));q(wc)})();
if("interactive"==N.readyState&&!N.createEventObject||"complete"==N.readyState)$a();else{S(N,"DOMContentLoaded",$a);S(N,"readystatechange",$a);if(N.createEventObject&&N.documentElement.doScroll){var Gg=!0;try{Gg=!A.frameElement}catch(Kg){}Gg&&bb()}S(A,"load",$a)}"complete"===N.readyState?ib():S(A,"load",ib);
(function(a){})("async");(function(){})();var _vs="res_ts:1441134105394000,srv_cl:101986978,ds:live,cv:49";
})()