(function(t){"object"===typeof exports&&"undefined"!==typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).SmartBanner=t()})(function(){return function f(c,d,e){function a(g,k){if(!d[g]){if(!c[g]){var h="function"==typeof require&&require;if(!k&&h)return h(g,!0);if(b)return b(g,!0);h=Error("Cannot find module '"+g+"'");throw h.code="MODULE_NOT_FOUND",h;}h=d[g]=
{exports:{}};c[g][0].call(h.exports,function(b){var e=c[g][1][b];return a(e?e:b)},h,h.exports,f,c,d,e)}return d[g].exports}for(var b="function"==typeof require&&require,k=0;k<e.length;k++)a(e[k]);return a}({1:[function(f,c,d){var e=f("xtend/mutable"),a=f("component-query"),b=f("get-doc"),k=b&&b.documentElement,g=f("cookie-cutter"),q=f("ua-parser-js");f("is-webview");var h=(navigator.language||navigator.userLanguage||navigator.browserLanguage).slice(-2)||"us",l={ios:{appMeta:"incorrect-apple-itunes-app",
iconRels:["apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"https://itunes.apple.com/"+this.options.appStoreLanguage+"/app/id"+this.appId}},android:{appMeta:"incorrect-google-play-app",iconRels:["android-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://play.google.com/store/apps/details?id="+this.appId}},windows:{appMeta:"msApplication-ID",iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],
getStoreLink:function(){return"http://www.windowsphone.com/s?appid="+this.appId}}};f=function(a){var b=q(navigator.userAgent);this.options=e({},{daysHidden:15,daysReminder:90,appStoreLanguage:h,button:"OPEN",store:{ios:"On the App Store",android:"In Google Play",windows:"In the Windows Store"},price:{ios:"FREE",android:"FREE",windows:"FREE"},theme:"",icon:"",force:""},a||{});this.options.force?this.type=this.options.force:"Windows Phone"===b.os.name||"Windows Mobile"===b.os.name?this.type="windows":
"iOS"===b.os.name?this.type="ios":"Android"===b.os.name&&(this.type="android");a=g.get("smartbanner-closed-"+this.options.uniqueId);var b=g.get("smartbanner-installed-"+this.options.uniqueId),n=window.navigator.userAgent.toLowerCase();/safari/.test(n);!this.type||navigator.standalone||a||b||(e(this,l[this.type]),this.parseAppId()&&(this.create(),this.show()))};f.prototype={constructor:f,create:function(){var e=this.options.link[this.type],f='<span class="smartbanner-in-store">'+this.options.price[this.type]+
"</span> \u2014 "+this.options.store[this.type],n;if(this.options.icon)n=this.options.icon[this.type];else for(var k=0;k<this.iconRels.length;k++){var g=a('link[rel="'+this.iconRels[k]+'"]');if(g){n=g.getAttribute("href");break}}var c=b.createElement("a");c.href=e;c.className="smartbanner smartbanner-"+(this.options.theme||this.type);c.innerHTML='<a href="'+e+'" class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url('+
n+')"></span><div class="smartbanner-info"><div class="smartbanner-title">'+this.options.title+"</div><div>"+this.options.author+"</div><span>"+f+'</span></div><a href="'+e+'" class="smartbanner-button"><span class="smartbanner-button-text">'+this.options.button+"</span></a></a>";this.options.setup?this.options.setup(c):b.body?b.body.appendChild(c):b&&b.addEventListener("DOMContentLoaded",function(){b.body.appendChild(c)});a(".smartbanner-button",c).addEventListener("click",this.install.bind(this),
!1);a(".smartbanner-close",c).addEventListener("click",this.close.bind(this),!1)},hide:function(){k.classList.remove("smartbanner-show")},show:function(){k.classList.add("smartbanner-show")},close:function(){this.hide();g.set("smartbanner-closed-"+this.options.uniqueId,"true",{path:"/",expires:new Date(+new Date+864E5*this.options.daysHidden)})},install:function(){this.hide();g.set("smartbanner-installed-"+this.options.uniqueId,"true",{path:"/",expires:new Date(+new Date+864E5*this.options.daysReminder)})},
parseAppId:function(){var b=a('meta[name="'+this.appMeta+'"]');if(b)return this.appId="windows"===this.type?b.getAttribute("content"):/app-id=([^\s,]+)/.exec(b.getAttribute("content"))[1]}};c.exports=f},{"component-query":2,"cookie-cutter":3,"get-doc":4,"is-webview":7,"ua-parser-js":10,"xtend/mutable":11}],2:[function(f,c,d){function e(a,b){return b.querySelector(a)}d=c.exports=function(a,b){b=b||document;return e(a,b)};d.all=function(a,b){b=b||document;return b.querySelectorAll(a)};d.engine=function(a){if(!a.one)throw Error(".one callback required");
if(!a.all)throw Error(".all callback required");e=a.one;d.all=a.all;return d}},{}],3:[function(f,c,d){d=c.exports=function(e){e||(e={});"string"===typeof e&&(e={cookie:e});void 0===e.cookie&&(e.cookie="");return{get:function(a){for(var b=e.cookie.split(/;\s*/),c=0;c<b.length;c++){var f=b[c].split("=");if(unescape(f[0])===a)return unescape(f[1])}},set:function(a,b,c){c||(c={});a=escape(a)+"="+escape(b);c.expires&&(a+="; expires="+c.expires);c.path&&(a+="; path="+escape(c.path));return e.cookie=a}}};
"undefined"!==typeof document&&(f=d(document),d.get=f.get,d.set=f.set)},{}],4:[function(f,c,d){f=f("has-dom");c.exports=f()?document:null},{"has-dom":6}],5:[function(f,c,d){f="undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{};c.exports="undefined"!==typeof window?window:"undefined"!==typeof f?f:"undefined"!==typeof self?self:{}},{}],6:[function(f,c,d){c.exports=function(){return"undefined"!==typeof window&&"undefined"!==typeof document&&"function"===
typeof document.createElement}},{}],7:[function(f,c,d){function e(c,e){if(!g&&!c)return!1;"object"===typeof c&&(e=c,c="");e=e||{};return e.appName&&a(c,e.appName)||g&&b(k)?!0:a(c)}var a=f("./lib/userAgent.js"),b=f("./lib/noop.js"),k=f("global/window"),g="function"===typeof b;e.getRules=function(){return rules};c.exports=e},{"./lib/noop.js":8,"./lib/userAgent.js":9,"global/window":5}],8:[function(f,c,d){var e=[function(a){return"webView"in a},function(a){return"Android"in a},function(a){return a.document&&
"ondeviceready"in a.document},function(a){return a.navigator&&"standalone"in a.navigator},function(a){return a.external&&"notify"in a.external},function(a){return"Ti"in a},function(a){return"_cordovaNative"in a}];c.exports=function(a){return e.some(function(b){return b(a)})}},{}],9:[function(f,c,d){var e=[function(a,b){return b&&-1!==a.indexOf(b)},function(a){return 0<a.indexOf(" Mobile/")&&-1===a.indexOf(" Safari/")}];c.exports=function(a,b){a=a||"";return e.some(function(c){return c(a,b)})}},{}],
10:[function(f,c,d){(function(e,a){var b={extend:function(a,b){for(var c in b)-1!=="browser cpu device engine os".indexOf(c)&&0===b[c].length%2&&(a[c]=b[c].concat(a[c]));return a},has:function(a,b){return"string"===typeof a?-1!==b.toLowerCase().indexOf(a.toLowerCase()):!1},lowerize:function(a){return a.toLowerCase()},major:function(b){return"string"===typeof b?b.split(".")[0]:a}},f=function(){for(var b,c=0,e,f,g,d,k,h,l=arguments;c<l.length&&!k;){var m=l[c],p=l[c+1];if("undefined"===typeof b)for(g in b=
{},p)p.hasOwnProperty(g)&&(d=p[g],"object"===typeof d?b[d[0]]=a:b[d]=a);for(e=f=0;e<m.length&&!k;)if(k=m[e++].exec(this.getUA()))for(g=0;g<p.length;g++)h=k[++f],d=p[g],"object"===typeof d&&0<d.length?2==d.length?b[d[0]]="function"==typeof d[1]?d[1].call(this,h):d[1]:3==d.length?b[d[0]]="function"!==typeof d[1]||d[1].exec&&d[1].test?h?h.replace(d[1],d[2]):a:h?d[1].call(this,h,d[2]):a:4==d.length&&(b[d[0]]=h?d[3].call(this,h.replace(d[1],d[2])):a):b[d]=h?h:a;c+=2}return b},g=function(c,d){for(var e in d)if("object"===
typeof d[e]&&0<d[e].length)for(var f=0;f<d[e].length;f++){if(b.has(d[e][f],c))return"?"===e?a:e}else if(b.has(d[e],c))return"?"===e?a:e;return c},q={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2E3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},h={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],["name","version"],[/\s(opr)\/([\w\.]+)/i],
[["name","Opera"],"version"],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],["name","version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[["name","IE"],"version"],[/(edge)\/((\d+)?[\w\.]+)/i],["name","version"],[/(yabrowser)\/([\w\.]+)/i],
[["name","Yandex"],"version"],[/(comodo_dragon)\/([\w\.]+)/i],[["name",/_/g," "],"version"],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],["name","version"],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[["name","UCBrowser"],"version"],[/(dolfin)\/([\w\.]+)/i],[["name","Dolphin"],"version"],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[["name","Chrome"],"version"],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
["version",["name","MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],["version",["name","Android Browser"]],[/FBAV\/([\w\.]+);/i],["version",["name","Facebook"]],[/fxios\/([\w\.-]+)/i],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],["version",["name","Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],["version","name"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],["name",["version",g,{"1.0":"/8","1.2":"/1","1.3":"/3",
"2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[/(navigator|netscape)\/([\w\.-]+)/i],[["name","Netscape"],"version"],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],
[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/],["model",["vendor","Apple"],["type","tablet"]],[/(apple\s{0,1}tv)/i],[["model","Apple TV"],["vendor","Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],
["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[["model",g,{"Fire Phone":["SD","KF"]}],["vendor","Amazon"],["type","mobile"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i],["model",["vendor","Apple"],["type","mobile"]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i],["model",["vendor","BlackBerry"],["type","mobile"]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],["model",["vendor","Asus"],["type","tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],["type","tablet"]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[["vendor","Sony"],["model","Xperia Phone"],["type",
"mobile"]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i],["model",["vendor","Nvidia"],["type","console"]],[/(playstation\s[34portablevi]+)/i],["model",["vendor","Sony"],["type","console"]],[/(sprint\s(\w+))/i],[["vendor",g,{HTC:"APA",Sprint:"Sprint"}],["model",g,{"Evo Shift 4G":"7373KT"}],["type","mobile"]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],["vendor","model",["type","tablet"]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,
/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i],["model",["vendor","HTC"],["type","tablet"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],
["model",["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",["vendor","Motorola"],["type","tablet"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[["vendor","Samsung"],"model",["type","tablet"]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/(samsung);smarttv/i],["vendor","model",["type","smarttv"]],
[/\(dtv[\);].+(aquos)/i],["model",["vendor","Sharp"],["type","smarttv"]],[/sie-(\w+)*/i],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[["vendor","Nokia"],"model",["type","mobile"]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],["model",["vendor","Acer"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[["vendor","LG"],"model",["type","tablet"]],[/(lg) netcast\.tv/i],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,
/lg[e;\s\/-]+(\w+)*/i],["model",["vendor","LG"],["type","mobile"]],[/android.+(ideatab[a-z0-9\-\s]+)/i],["model",["vendor","Lenovo"],["type","tablet"]],[/linux;.+((jolla));/i],["vendor","model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i],["vendor","model",["type","wearable"]],[/android.+;\s(glass)\s\d/i],["model",["vendor","Google"],["type","wearable"]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[["type",b.lowerize],"vendor","model"]],engine:[[/windows.+\sedge\/([\w\.]+)/i],["version",["name","EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],["name","version"],[/rv\:([\w\.]+).*(gecko)/i],["version","name"]],os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],
[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",g,q]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",g,q]],[/\((bb)(10);/i],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],
"version"],[/(sunos)\s?([\w\.]+\d)*/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],["name","version"],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[["name","iOS"],["version",/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
/(unix)\s?([\w\.]+)*/i],["name","version"]]},l=function(a,c){if(!(this instanceof l))return(new l(a,c)).getResult();var d=a||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:""),g=c?b.extend(h,c):h;this.getBrowser=function(){var a=f.apply(this,g.browser);a.major=b.major(a.version);return a};this.getCPU=function(){return f.apply(this,g.cpu)};this.getDevice=function(){return f.apply(this,g.device)};this.getEngine=function(){return f.apply(this,g.engine)};this.getOS=function(){return f.apply(this,
g.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return d};this.setUA=function(a){d=a;return this};this.setUA(d);return this};l.VERSION="0.7.10";l.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"};l.CPU={ARCHITECTURE:"architecture"};l.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",WEARABLE:"wearable",
EMBEDDED:"embedded"};l.ENGINE={NAME:"name",VERSION:"version"};l.OS={NAME:"name",VERSION:"version"};"undefined"!==typeof d?("undefined"!==typeof c&&c.exports&&(d=c.exports=l),d.UAParser=l):e.UAParser=l;var m=e.jQuery||e.Zepto;if("undefined"!==typeof m){var r=new l;m.ua=r.getResult();m.ua.get=function(){return r.getUA()};m.ua.set=function(a){r.setUA(a);a=r.getResult();for(var b in a)m.ua[b]=a[b]}}})("object"===typeof window?window:this)},{}],11:[function(f,c,d){c.exports=function(a){for(var b=1;b<arguments.length;b++){var c=
arguments[b],d;for(d in c)e.call(c,d)&&(a[d]=c[d])}return a};var e=Object.prototype.hasOwnProperty},{}]},{},[1])(1)});
