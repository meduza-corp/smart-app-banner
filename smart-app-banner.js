(function(r){"object"===typeof exports&&"undefined"!==typeof module?module.exports=r():"function"===typeof define&&define.amd?define([],r):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).SmartBanner=r()})(function(){return function a(c,f,e){function b(g,k){if(!f[g]){if(!c[g]){var h="function"==typeof require&&require;if(!k&&h)return h(g,!0);if(d)return d(g,!0);h=Error("Cannot find module '"+g+"'");throw h.code="MODULE_NOT_FOUND",h;}h=f[g]=
{exports:{}};c[g][0].call(h.exports,function(d){var e=c[g][1][d];return b(e?e:d)},h,h.exports,a,c,f,e)}return f[g].exports}for(var d="function"==typeof require&&require,k=0;k<e.length;k++)b(e[k]);return b}({1:[function(a,c,f){var e=a("xtend/mutable"),b=a("component-query"),d=a("get-doc"),k=d&&d.documentElement,g=a("cookie-cutter"),p=a("ua-parser-js"),h=a("is-webview"),l=(navigator.language||navigator.userLanguage||navigator.browserLanguage).slice(-2)||"us",m={ios:{appMeta:"apple-itunes-app",iconRels:["apple-touch-icon-precomposed",
"apple-touch-icon"],getStoreLink:function(){return"https://itunes.apple.com/"+this.options.appStoreLanguage+"/app/id"+this.appId}},android:{appMeta:"google-play-app",iconRels:["android-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://play.google.com/store/apps/details?id="+this.appId}},windows:{appMeta:"msApplication-ID",iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://www.windowsphone.com/s?appid="+
this.appId}}};a=function(b){var d=p(navigator.userAgent);this.options=e({},{daysHidden:15,daysReminder:90,appStoreLanguage:l,button:"OPEN",store:{ios:"On the App Store",android:"In Google Play",windows:"In the Windows Store"},price:{ios:"FREE",android:"FREE",windows:"FREE"},theme:"",icon:"",force:""},b||{});this.options.force?this.type=this.options.force:"Windows Phone"===d.os.name||"Windows Mobile"===d.os.name?this.type="windows":"iOS"===d.os.name?this.type="ios":"Android"===d.os.name&&(this.type=
"android");b=g.get("smartbanner-closed");var a=g.get("smartbanner-installed");!this.type||"ios"===this.type&&"Mobile Safari"===d.browser.name&&h(navigator.userAgent)||navigator.standalone||b&&b===this.options.uniqueId||a&&a===this.options.uniqueId||(e(this,m[this.type]),this.parseAppId()&&(this.create(),this.show()))};a.prototype={constructor:a,create:function(){var e=this.options.link[this.type],a=this.options.price[this.type]+" - "+this.options.store[this.type],k;if(this.options.icon)k=this.options.icon[this.type];
else for(var g=0;g<this.iconRels.length;g++){var c=b('link[rel="'+this.iconRels[g]+'"]');if(c){k=c.getAttribute("href");break}}var f=d.createElement("div");f.className="smartbanner smartbanner-"+(this.options.theme||this.type);f.innerHTML='<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url('+k+')"></span><div class="smartbanner-info"><div class="smartbanner-title">'+this.options.title+"</div><div>"+
this.options.author+"</div><span>"+a+'</span></div><a href="'+e+'" class="smartbanner-button"><span class="smartbanner-button-text">'+this.options.button+"</span></a></div>";this.options.setup?this.options.setup(f):d.body?d.body.appendChild(f):d&&d.addEventListener("DOMContentLoaded",function(){d.body.appendChild(f)});b(".smartbanner-button",f).addEventListener("click",this.install.bind(this),!1);b(".smartbanner-close",f).addEventListener("click",this.close.bind(this),!1)},hide:function(){k.classList.remove("smartbanner-show")},
show:function(){k.classList.add("smartbanner-show")},close:function(){this.hide();g.set("smartbanner-closed",this.options.uniqueId,{path:"/",expires:new Date(+new Date+864E5*this.options.daysHidden)})},install:function(){this.hide();g.set("smartbanner-installed",this.options.uniqueId,{path:"/",expires:new Date(+new Date+864E5*this.options.daysReminder)})},parseAppId:function(){var d=b('meta[name="'+this.appMeta+'"]');if(d)return this.appId="windows"===this.type?d.getAttribute("content"):/app-id=([^\s,]+)/.exec(d.getAttribute("content"))[1]}};
c.exports=a},{"component-query":2,"cookie-cutter":3,"get-doc":4,"is-webview":7,"ua-parser-js":10,"xtend/mutable":11}],2:[function(a,c,f){function e(b,d){return d.querySelector(b)}f=c.exports=function(b,d){d=d||document;return e(b,d)};f.all=function(b,d){d=d||document;return d.querySelectorAll(b)};f.engine=function(b){if(!b.one)throw Error(".one callback required");if(!b.all)throw Error(".all callback required");e=b.one;f.all=b.all;return f}},{}],3:[function(a,c,f){f=c.exports=function(e){e||(e={});
"string"===typeof e&&(e={cookie:e});void 0===e.cookie&&(e.cookie="");return{get:function(b){for(var d=e.cookie.split(/;\s*/),a=0;a<d.length;a++){var g=d[a].split("=");if(unescape(g[0])===b)return unescape(g[1])}},set:function(b,d,a){a||(a={});b=escape(b)+"="+escape(d);a.expires&&(b+="; expires="+a.expires);a.path&&(b+="; path="+escape(a.path));return e.cookie=b}}};"undefined"!==typeof document&&(a=f(document),f.get=a.get,f.set=a.set)},{}],4:[function(a,c,f){a=a("has-dom");c.exports=a()?document:null},
{"has-dom":6}],5:[function(a,c,f){a="undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{};c.exports="undefined"!==typeof window?window:"undefined"!==typeof a?a:"undefined"!==typeof self?self:{}},{}],6:[function(a,c,f){c.exports=function(){return"undefined"!==typeof window&&"undefined"!==typeof document&&"function"===typeof document.createElement}},{}],7:[function(a,c,f){function e(a,e){if(!g&&!a)return!1;"object"===typeof a&&(e=a,a="");e=e||{};return e.appName&&
b(a,e.appName)||g&&d(k)?!0:b(a)}var b=a("./lib/userAgent.js"),d=a("./lib/noop.js"),k=a("global/window"),g="function"===typeof d;e.getRules=function(){return rules};c.exports=e},{"./lib/noop.js":8,"./lib/userAgent.js":9,"global/window":5}],8:[function(a,c,f){var e=[function(b){return"webView"in b},function(b){return"Android"in b},function(b){return b.document&&"ondeviceready"in b.document},function(b){return b.navigator&&"standalone"in b.navigator},function(b){return b.external&&"notify"in b.external},
function(b){return"Ti"in b},function(b){return"_cordovaNative"in b}];c.exports=function(b){return e.some(function(d){return d(b)})}},{}],9:[function(a,c,f){var e=[function(b,d){return d&&-1!==b.indexOf(d)},function(b){return 0<b.indexOf(" Mobile/")&&-1===b.indexOf(" Safari/")}];c.exports=function(b,d){b=b||"";return e.some(function(a){return a(b,d)})}},{}],10:[function(a,c,f){(function(a,b){var d={extend:function(b,a){for(var d in a)-1!=="browser cpu device engine os".indexOf(d)&&0===a[d].length%
2&&(b[d]=a[d].concat(b[d]));return b},has:function(b,a){return"string"===typeof b?-1!==a.toLowerCase().indexOf(b.toLowerCase()):!1},lowerize:function(b){return b.toLowerCase()},major:function(a){return"string"===typeof a?a.split(".")[0]:b}},e=function(){for(var a,d=0,e,g,f,c,k,h,l=arguments;d<l.length&&!k;){var m=l[d],n=l[d+1];if("undefined"===typeof a)for(f in a={},n)n.hasOwnProperty(f)&&(c=n[f],"object"===typeof c?a[c[0]]=b:a[c]=b);for(e=g=0;e<m.length&&!k;)if(k=m[e++].exec(this.getUA()))for(f=
0;f<n.length;f++)h=k[++g],c=n[f],"object"===typeof c&&0<c.length?2==c.length?a[c[0]]="function"==typeof c[1]?c[1].call(this,h):c[1]:3==c.length?a[c[0]]="function"!==typeof c[1]||c[1].exec&&c[1].test?h?h.replace(c[1],c[2]):b:h?c[1].call(this,h,c[2]):b:4==c.length&&(a[c[0]]=h?c[3].call(this,h.replace(c[1],c[2])):b):a[c]=h?h:b;d+=2}return a},g=function(a,c){for(var e in c)if("object"===typeof c[e]&&0<c[e].length)for(var f=0;f<c[e].length;f++){if(d.has(c[e][f],a))return"?"===e?b:e}else if(d.has(c[e],
a))return"?"===e?b:e;return a},p={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2E3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},h={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],["name","version"],[/\s(opr)\/([\w\.]+)/i],[["name","Opera"],"version"],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],["name","version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[["name","IE"],"version"],[/(edge)\/((\d+)?[\w\.]+)/i],["name","version"],[/(yabrowser)\/([\w\.]+)/i],[["name","Yandex"],"version"],[/(comodo_dragon)\/([\w\.]+)/i],[["name",/_/g," "],"version"],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
/(qqbrowser)[\/\s]?([\w\.]+)/i],["name","version"],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[["name","UCBrowser"],"version"],[/(dolfin)\/([\w\.]+)/i],[["name","Dolphin"],"version"],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[["name","Chrome"],"version"],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],["version",["name","MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],["version",["name","Android Browser"]],[/FBAV\/([\w\.]+);/i],
["version",["name","Facebook"]],[/fxios\/([\w\.-]+)/i],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],["version",["name","Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],["version","name"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],["name",["version",g,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[/(navigator|netscape)\/([\w\.-]+)/i],
[["name","Netscape"],"version"],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",d.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",d.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",d.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/],["model",["vendor","Apple"],["type","tablet"]],[/(apple\s{0,1}tv)/i],[["model","Apple TV"],["vendor","Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[["model",
g,{"Fire Phone":["SD","KF"]}],["vendor","Amazon"],["type","mobile"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i],["model",["vendor","Apple"],["type","mobile"]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i],["model",["vendor","BlackBerry"],["type","mobile"]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
["model",["vendor","Asus"],["type","tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],["type","tablet"]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[["vendor","Sony"],["model","Xperia Phone"],["type","mobile"]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i],["model",["vendor","Nvidia"],["type","console"]],[/(playstation\s[34portablevi]+)/i],["model",
["vendor","Sony"],["type","console"]],[/(sprint\s(\w+))/i],[["vendor",g,{HTC:"APA",Sprint:"Sprint"}],["model",g,{"Evo Shift 4G":"7373KT"}],["type","mobile"]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],["vendor","model",["type","tablet"]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i],["model",["vendor","HTC"],["type","tablet"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],["model",["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",["vendor","Motorola"],["type","tablet"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
/((SM-T\w+))/i],[["vendor","Samsung"],"model",["type","tablet"]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/(samsung);smarttv/i],["vendor","model",["type","smarttv"]],[/\(dtv[\);].+(aquos)/i],["model",["vendor","Sharp"],["type","smarttv"]],[/sie-(\w+)*/i],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[["vendor","Nokia"],
"model",["type","mobile"]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],["model",["vendor","Acer"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[["vendor","LG"],"model",["type","tablet"]],[/(lg) netcast\.tv/i],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],["model",["vendor","LG"],["type","mobile"]],[/android.+(ideatab[a-z0-9\-\s]+)/i],["model",["vendor","Lenovo"],["type","tablet"]],[/linux;.+((jolla));/i],["vendor","model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i],
["vendor","model",["type","wearable"]],[/android.+;\s(glass)\s\d/i],["model",["vendor","Google"],["type","wearable"]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[["type",d.lowerize],"vendor","model"]],engine:[[/windows.+\sedge\/([\w\.]+)/i],["version",["name","EdgeHTML"]],[/(presto)\/([\w\.]+)/i,
/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],["name","version"],[/rv\:([\w\.]+).*(gecko)/i],["version","name"]],os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",g,p]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",g,p]],[/\((bb)(10);/i],[["name",
"BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,
/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],"version"],[/(sunos)\s?([\w\.]+\d)*/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],["name","version"],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[["name","iOS"],["version",/_/g,
"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],["name","version"]]},l=function(b,c){if(!(this instanceof l))return(new l(b,c)).getResult();var f=b||(a&&a.navigator&&a.navigator.userAgent?a.navigator.userAgent:""),g=c?d.extend(h,c):h;this.getBrowser=function(){var a=
e.apply(this,g.browser);a.major=d.major(a.version);return a};this.getCPU=function(){return e.apply(this,g.cpu)};this.getDevice=function(){return e.apply(this,g.device)};this.getEngine=function(){return e.apply(this,g.engine)};this.getOS=function(){return e.apply(this,g.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return f};this.setUA=function(a){f=a;return this};
this.setUA(f);return this};l.VERSION="0.7.10";l.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"};l.CPU={ARCHITECTURE:"architecture"};l.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",WEARABLE:"wearable",EMBEDDED:"embedded"};l.ENGINE={NAME:"name",VERSION:"version"};l.OS={NAME:"name",VERSION:"version"};"undefined"!==typeof f?("undefined"!==typeof c&&c.exports&&(f=c.exports=l),f.UAParser=l):a.UAParser=l;var m=a.jQuery||a.Zepto;
if("undefined"!==typeof m){var q=new l;m.ua=q.getResult();m.ua.get=function(){return q.getUA()};m.ua.set=function(a){q.setUA(a);a=q.getResult();for(var b in a)m.ua[b]=a[b]}}})("object"===typeof window?window:this)},{}],11:[function(a,c,f){c.exports=function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],f;for(f in c)e.call(c,f)&&(a[f]=c[f])}return a};var e=Object.prototype.hasOwnProperty},{}]},{},[1])(1)});
