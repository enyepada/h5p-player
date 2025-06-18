H5P.AdvancedText = (function ($, EventDispatcher) {

  /**
   * A simple library for displaying text with advanced styling.
   *
   * @class H5P.AdvancedText
   * @param {Object} parameters
   * @param {Object} [parameters.text='New text']
   * @param {number} id
   */
  function AdvancedText(parameters, id) {
    var self = this;
    EventDispatcher.call(this);

    var html = (parameters.text === undefined ? '<em>New text</em>' : parameters.text);

    /**
     * Wipe container and add text html.
     *
     * @alias H5P.AdvancedText#attach
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      $container.addClass('h5p-advanced-text').html(html);
    };
  }

  AdvancedText.prototype = Object.create(EventDispatcher.prototype);
  AdvancedText.prototype.constructor = AdvancedText;

  return AdvancedText;

})(H5P.jQuery, H5P.EventDispatcher);
;/*
 * flowplayer.js 3.2.12. The Flowplayer API
 *
 * Copyright 2009-2011 Flowplayer Oy
 *
 * This file is part of Flowplayer.
 *
 * Flowplayer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Flowplayer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Flowplayer.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Date: ${date}
 * Revision: ${revision}
 */
!function(){function h(p){console.log("$f.fireEvent",[].slice.call(p))}function l(r){if(!r||typeof r!="object"){return r}var p=new r.constructor();for(var q in r){if(r.hasOwnProperty(q)){p[q]=l(r[q])}}return p}function n(u,r){if(!u){return}var p,q=0,s=u.length;if(s===undefined){for(p in u){if(r.call(u[p],p,u[p])===false){break}}}else{for(var t=u[0];q<s&&r.call(t,q,t)!==false;t=u[++q]){}}return u}function c(p){return document.getElementById(p)}function j(r,q,p){if(typeof q!="object"){return r}if(r&&q){n(q,function(s,t){if(!p||typeof t!="function"){r[s]=t}})}return r}function o(t){var r=t.indexOf(".");if(r!=-1){var q=t.slice(0,r)||"*";var p=t.slice(r+1,t.length);var s=[];n(document.getElementsByTagName(q),function(){if(this.className&&this.className.indexOf(p)!=-1){s.push(this)}});return s}}function g(p){p=p||window.event;if(p.preventDefault){p.stopPropagation();p.preventDefault()}else{p.returnValue=false;p.cancelBubble=true}return false}function k(r,p,q){r[p]=r[p]||[];r[p].push(q)}function e(p){return p.replace(/&amp;/g,"%26").replace(/&/g,"%26").replace(/=/g,"%3D")}function f(){return"_"+(""+Math.random()).slice(2,10)}var i=function(u,s,t){var r=this,q={},v={};r.index=s;if(typeof u=="string"){u={url:u}}j(this,u,true);n(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","),function(){var w="on"+this;if(w.indexOf("*")!=-1){w=w.slice(0,w.length-1);var x="onBefore"+w.slice(2);r[x]=function(y){k(v,x,y);return r}}r[w]=function(y){k(v,w,y);return r};if(s==-1){if(r[x]){t[x]=r[x]}if(r[w]){t[w]=r[w]}}});j(this,{onCuepoint:function(y,x){if(arguments.length==1){q.embedded=[null,y];return r}if(typeof y=="number"){y=[y]}var w=f();q[w]=[y,x];if(t.isLoaded()){t._api().fp_addCuepoints(y,s,w)}return r},update:function(x){j(r,x);if(t.isLoaded()){t._api().fp_updateClip(x,s)}var w=t.getConfig();var y=(s==-1)?w.clip:w.playlist[s];j(y,x,true)},_fireEvent:function(w,z,x,B){if(w=="onLoad"){n(q,function(C,D){if(D[0]){t._api().fp_addCuepoints(D[0],s,C)}});return false}B=B||r;if(w=="onCuepoint"){var A=q[z];if(A){return A[1].call(t,B,x)}}if(z&&"onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(w)!=-1){j(B,z);if(z.metaData){if(!B.duration){B.duration=z.metaData.duration}else{B.fullDuration=z.metaData.duration}}}var y=true;n(v[w],function(){y=this.call(t,B,z,x)});return y}});if(u.onCuepoint){var p=u.onCuepoint;r.onCuepoint.apply(r,typeof p=="function"?[p]:p);delete u.onCuepoint}n(u,function(w,x){if(typeof x=="function"){k(v,w,x);delete u[w]}});if(s==-1){t.onCuepoint=this.onCuepoint}};var m=function(q,s,r,u){var p=this,t={},v=false;if(u){j(t,u)}n(s,function(w,x){if(typeof x=="function"){t[w]=x;delete s[w]}});j(this,{animate:function(z,A,y){if(!z){return p}if(typeof A=="function"){y=A;A=500}if(typeof z=="string"){var x=z;z={};z[x]=A;A=500}if(y){var w=f();t[w]=y}if(A===undefined){A=500}s=r._api().fp_animate(q,z,A,w);return p},css:function(x,y){if(y!==undefined){var w={};w[x]=y;x=w}s=r._api().fp_css(q,x);j(p,s);return p},show:function(){this.display="block";r._api().fp_showPlugin(q);return p},hide:function(){this.display="none";r._api().fp_hidePlugin(q);return p},toggle:function(){this.display=r._api().fp_togglePlugin(q);return p},fadeTo:function(z,y,x){if(typeof y=="function"){x=y;y=500}if(x){var w=f();t[w]=x}this.display=r._api().fp_fadeTo(q,z,y,w);this.opacity=z;return p},fadeIn:function(x,w){return p.fadeTo(1,x,w)},fadeOut:function(x,w){return p.fadeTo(0,x,w)},getName:function(){return q},getPlayer:function(){return r},_fireEvent:function(x,w,y){if(x=="onUpdate"){var A=r._api().fp_getPlugin(q);if(!A){return}j(p,A);delete p.methods;if(!v){n(A.methods,function(){var C=""+this;p[C]=function(){var D=[].slice.call(arguments);var E=r._api().fp_invoke(q,C,D);return E==="undefined"||E===undefined?p:E}});v=true}}var B=t[x];if(B){var z=B.apply(p,w);if(x.slice(0,1)=="_"){delete t[x]}return z}return p}})};function b(r,H,u){var x=this,w=null,E=false,v,t,G=[],z={},y={},F,s,q,D,p,B;j(x,{id:function(){return F},isLoaded:function(){return(w!==null&&w.fp_play!==undefined&&!E)},getParent:function(){return r},hide:function(I){if(I){r.style.height="0px"}if(x.isLoaded()){w.style.height="0px"}return x},show:function(){r.style.height=B+"px";if(x.isLoaded()){w.style.height=p+"px"}return x},isHidden:function(){return x.isLoaded()&&parseInt(w.style.height,10)===0},load:function(K){if(!x.isLoaded()&&x._fireEvent("onBeforeLoad")!==false){var I=function(){if(v&&!flashembed.isSupported(H.version)){r.innerHTML=""}if(K){K.cached=true;k(y,"onLoad",K)}flashembed(r,H,{config:u})};var J=0;n(a,function(){this.unload(function(L){if(++J==a.length){I()}})})}return x},unload:function(K){if(v.replace(/\s/g,"")!==""){if(x._fireEvent("onBeforeUnload")===false){if(K){K(false)}return x}E=true;try{if(w){if(w.fp_isFullscreen()){w.fp_toggleFullscreen()}w.fp_close();x._fireEvent("onUnload")}}catch(I){}var J=function(){w=null;r.innerHTML=v;E=false;if(K){K(true)}};if(/WebKit/i.test(navigator.userAgent)&&!/Chrome/i.test(navigator.userAgent)){setTimeout(J,0)}else{J()}}else{if(K){K(false)}}return x},getClip:function(I){if(I===undefined){I=D}return G[I]},getCommonClip:function(){return t},getPlaylist:function(){return G},getPlugin:function(I){var K=z[I];if(!K&&x.isLoaded()){var J=x._api().fp_getPlugin(I);if(J){K=new m(I,J,x);z[I]=K}}return K},getScreen:function(){return x.getPlugin("screen")},getControls:function(){return x.getPlugin("controls")._fireEvent("onUpdate")},getLogo:function(){try{return x.getPlugin("logo")._fireEvent("onUpdate")}catch(I){}},getPlay:function(){return x.getPlugin("play")._fireEvent("onUpdate")},getConfig:function(I){return I?l(u):u},getFlashParams:function(){return H},loadPlugin:function(L,K,N,M){if(typeof N=="function"){M=N;N={}}var J=M?f():"_";x._api().fp_loadPlugin(L,K,N,J);var I={};I[J]=M;var O=new m(L,null,x,I);z[L]=O;return O},getState:function(){return x.isLoaded()?w.fp_getState():-1},play:function(J,I){var K=function(){if(J!==undefined){x._api().fp_play(J,I)}else{x._api().fp_play()}};if(x.isLoaded()){K()}else{if(E){setTimeout(function(){x.play(J,I)},50)}else{x.load(function(){K()})}}return x},getVersion:function(){var J="flowplayer.js 3.2.12";if(x.isLoaded()){var I=w.fp_getVersion();I.push(J);return I}return J},_api:function(){if(!x.isLoaded()){throw"Flowplayer "+x.id()+" not loaded when calling an API method"}return w},setClip:function(I){n(I,function(J,K){if(typeof K=="function"){k(y,J,K);delete I[J]}else{if(J=="onCuepoint"){$f(r).getCommonClip().onCuepoint(I[J][0],I[J][1])}}});x.setPlaylist([I]);return x},getIndex:function(){return q},bufferAnimate:function(I){w.fp_bufferAnimate(I===undefined||I);return x},_swfHeight:function(){return w.clientHeight}});n(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","),function(){var I="on"+this;if(I.indexOf("*")!=-1){I=I.slice(0,I.length-1);var J="onBefore"+I.slice(2);x[J]=function(K){k(y,J,K);return x}}x[I]=function(K){k(y,I,K);return x}});n(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","),function(){var I=this;x[I]=function(K,J){if(!x.isLoaded()){return x}var L=null;if(K!==undefined&&J!==undefined){L=w["fp_"+I](K,J)}else{L=(K===undefined)?w["fp_"+I]():w["fp_"+I](K)}return L==="undefined"||L===undefined?x:L}});x._fireEvent=function(R){if(typeof R=="string"){R=[R]}var S=R[0],P=R[1],N=R[2],M=R[3],L=0;if(u.debug){h(R)}if(!x.isLoaded()&&S=="onLoad"&&P=="player"){w=w||c(s);p=x._swfHeight();n(G,function(){this._fireEvent("onLoad")});n(z,function(T,U){U._fireEvent("onUpdate")});t._fireEvent("onLoad")}if(S=="onLoad"&&P!="player"){return}if(S=="onError"){if(typeof P=="string"||(typeof P=="number"&&typeof N=="number")){P=N;N=M}}if(S=="onContextMenu"){n(u.contextMenu[P],function(T,U){U.call(x)});return}if(S=="onPluginEvent"||S=="onBeforePluginEvent"){var I=P.name||P;var J=z[I];if(J){J._fireEvent("onUpdate",P);return J._fireEvent(N,R.slice(3))}return}if(S=="onPlaylistReplace"){G=[];var O=0;n(P,function(){G.push(new i(this,O++,x))})}if(S=="onClipAdd"){if(P.isInStream){return}P=new i(P,N,x);G.splice(N,0,P);for(L=N+1;L<G.length;L++){G[L].index++}}var Q=true;if(typeof P=="number"&&P<G.length){D=P;var K=G[P];if(K){Q=K._fireEvent(S,N,M)}if(!K||Q!==false){Q=t._fireEvent(S,N,M,K)}}n(y[S],function(){Q=this.call(x,P,N);if(this.cached){y[S].splice(L,1)}if(Q===false){return false}L++});return Q};function C(){if($f(r)){$f(r).getParent().innerHTML="";q=$f(r).getIndex();a[q]=x}else{a.push(x);q=a.length-1}B=parseInt(r.style.height,10)||r.clientHeight;F=r.id||"fp"+f();s=H.id||F+"_api";H.id=s;v=r.innerHTML;if(typeof u=="string"){u={clip:{url:u}}}u.playerId=F;u.clip=u.clip||{};if(r.getAttribute("href",2)&&!u.clip.url){u.clip.url=r.getAttribute("href",2)}if(u.clip.url){u.clip.url=e(u.clip.url)}t=new i(u.clip,-1,x);u.playlist=u.playlist||[u.clip];var J=0;n(u.playlist,function(){var M=this;if(typeof M=="object"&&M.length){M={url:""+M}}if(M.url){M.url=e(M.url)}n(u.clip,function(N,O){if(O!==undefined&&M[N]===undefined&&typeof O!="function"){M[N]=O}});u.playlist[J]=M;M=new i(M,J,x);G.push(M);J++});n(u,function(M,N){if(typeof N=="function"){if(t[M]){t[M](N)}else{k(y,M,N)}delete u[M]}});n(u.plugins,function(M,N){if(N){z[M]=new m(M,N,x)}});if(!u.plugins||u.plugins.controls===undefined){z.controls=new m("controls",null,x)}z.canvas=new m("canvas",null,x);v=r.innerHTML;function L(M){if(/iPad|iPhone|iPod/i.test(navigator.userAgent)&&!/.flv$/i.test(G[0].url)&&!K()){return true}if(!x.isLoaded()&&x._fireEvent("onBeforeClick")!==false){x.load()}return g(M)}function K(){return x.hasiPadSupport&&x.hasiPadSupport()}function I(){if(v.replace(/\s/g,"")!==""){if(r.addEventListener){r.addEventListener("click",L,false)}else{if(r.attachEvent){r.attachEvent("onclick",L)}}}else{if(r.addEventListener&&!K()){r.addEventListener("click",g,false)}x.load()}}setTimeout(I,0)}if(typeof r=="string"){var A=c(r);if(!A){throw"Flowplayer cannot access element: "+r}r=A;C()}else{C()}}var a=[];function d(p){this.length=p.length;this.each=function(r){n(p,r)};this.size=function(){return p.length};var q=this;for(name in b.prototype){q[name]=function(){var r=arguments;q.each(function(){this[name].apply(this,r)})}}}window.flowplayer=window.$f=function(){var q=null;var p=arguments[0];if(!arguments.length){n(a,function(){if(this.isLoaded()){q=this;return false}});return q||a[0]}if(arguments.length==1){if(typeof p=="number"){return a[p]}else{if(p=="*"){return new d(a)}n(a,function(){if(this.id()==p.id||this.id()==p||this.getParent()==p){q=this;return false}});return q}}if(arguments.length>1){var u=arguments[1],r=(arguments.length==3)?arguments[2]:{};if(typeof u=="string"){u={src:u}}u=j({bgcolor:"#000000",version:[10,1],expressInstall:"http://releases.flowplayer.org/swf/expressinstall.swf",cachebusting:false},u);if(typeof p=="string"){if(p.indexOf(".")!=-1){var t=[];n(o(p),function(){t.push(new b(this,l(u),l(r)))});return new d(t)}else{var s=c(p);return new b(s!==null?s:l(p),l(u),l(r))}}else{if(p){return new b(p,l(u),l(r))}}}return null};j(window.$f,{fireEvent:function(){var q=[].slice.call(arguments);var r=$f(q[0]);return r?r._fireEvent(q.slice(1)):null},addPlugin:function(p,q){b.prototype[p]=q;return $f},each:n,extend:j});if(typeof jQuery=="function"){jQuery.fn.flowplayer=function(r,q){if(!arguments.length||typeof arguments[0]=="number"){var p=[];this.each(function(){var s=$f(this);if(s){p.push(s)}});return arguments.length?p[arguments[0]]:new d(p)}return this.each(function(){$f(this,l(r),q?l(q):{})})}}}();!function(){var h=document.all,j="http://get.adobe.com/flashplayer",c=typeof jQuery=="function",e=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,b={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}function i(m,l){if(l){for(var f in l){if(l.hasOwnProperty(f)){m[f]=l[f]}}}return m}function a(f,n){var m=[];for(var l in f){if(f.hasOwnProperty(l)){m[l]=n(f[l])}}return m}window.flashembed=function(f,m,l){if(typeof f=="string"){f=document.getElementById(f.replace("#",""))}if(!f){return}if(typeof m=="string"){m={src:m}}return new d(f,i(i({},b),m),l)};var g=i(window.flashembed,{conf:b,getVersion:function(){var m,f;try{f=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(o){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");f=m&&m.GetVariable("$version")}catch(n){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");f=m&&m.GetVariable("$version")}catch(l){}}}f=e.exec(f);return f?[1*f[1],1*f[(f[1]*1>9?2:3)]*1]:[0,0]},asString:function(l){if(l===null||l===undefined){return null}var f=typeof l;if(f=="object"&&l.push){f="array"}switch(f){case"string":l=l.replace(new RegExp('(["\\\\])',"g"),"\\$1");l=l.replace(/^\s?(\d+\.?\d*)%/,"$1pct");return'"'+l+'"';case"array":return"["+a(l,function(o){return g.asString(o)}).join(",")+"]";case"function":return'"function()"';case"object":var m=[];for(var n in l){if(l.hasOwnProperty(n)){m.push('"'+n+'":'+g.asString(l[n]))}}return"{"+m.join(",")+"}"}return String(l).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(o,l){o=i({},o);var n='<object width="'+o.width+'" height="'+o.height+'" id="'+o.id+'" name="'+o.id+'"';if(o.cachebusting){o.src+=((o.src.indexOf("?")!=-1?"&":"?")+Math.random())}if(o.w3c||!h){n+=' data="'+o.src+'" type="application/x-shockwave-flash"'}else{n+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'}n+=">";if(o.w3c||h){n+='<param name="movie" value="'+o.src+'" />'}o.width=o.height=o.id=o.w3c=o.src=null;o.onFail=o.version=o.expressInstall=null;for(var m in o){if(o[m]){n+='<param name="'+m+'" value="'+o[m]+'" />'}}var p="";if(l){for(var f in l){if(l[f]){var q=l[f];p+=f+"="+(/function|object/.test(typeof q)?g.asString(q):q)+"&"}}p=p.slice(0,-1);n+='<param name="flashvars" value=\''+p+"' />"}n+="</object>";return n},isSupported:function(f){return k[0]>f[0]||k[0]==f[0]&&k[1]>=f[1]}});var k=g.getVersion();function d(f,n,m){if(g.isSupported(n.version)){f.innerHTML=g.getHTML(n,m)}else{if(n.expressInstall&&g.isSupported([6,65])){f.innerHTML=g.getHTML(i(n,{src:n.expressInstall}),{MMredirectURL:encodeURIComponent(location.href),MMplayerType:"PlugIn",MMdoctitle:document.title})}else{if(!f.innerHTML.replace(/\s/g,"")){f.innerHTML="<h2>Flash version "+n.version+" or greater is required</h2><h3>"+(k[0]>0?"Your version is "+k:"You have no flash plugin installed")+"</h3>"+(f.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+j+"'>here</a></p>");if(f.tagName=="A"||f.tagName=="DIV"){f.onclick=function(){location.href=j}}}if(n.onFail){var l=n.onFail.call(this);if(typeof l=="string"){f.innerHTML=l}}}}if(h){window[n.id]=document.getElementById(n.id)}i(this,{getRoot:function(){return f},getOptions:function(){return n},getConf:function(){return m},getApi:function(){return f.firstChild}})}if(c){jQuery.tools=jQuery.tools||{version:"3.2.12"};jQuery.tools.flashembed={conf:b};jQuery.fn.flashembed=function(l,f){return this.each(function(){$(this).data("flashembed",flashembed(this,l,f))})}}}();;var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {Object} params Options for this library.
 * @param {Number} id Content identifier
 * @returns {undefined}
 */
(function ($) {
  H5P.Image = function (params, id, extras) {
    H5P.EventDispatcher.call(this);
    this.extras = extras;

    if (params.file === undefined || !(params.file instanceof Object)) {
      this.placeholder = true;
    }
    else {
      this.source = H5P.getPath(params.file.path, id);
      this.width = params.file.width;
      this.height = params.file.height;
    }

    this.alt = (!params.decorative && params.alt !== undefined) ?
      this.stripHTML(this.htmlDecode(params.alt)) :
      '';

    if (params.title !== undefined) {
      this.title = this.stripHTML(this.htmlDecode(params.title));
    }
  };

  H5P.Image.prototype = Object.create(H5P.EventDispatcher.prototype);
  H5P.Image.prototype.constructor = H5P.Image;

  /**
   * Wipe out the content of the wrapper and put our HTML in it.
   *
   * @param {jQuery} $wrapper
   * @returns {undefined}
   */
  H5P.Image.prototype.attach = function ($wrapper) {
    var self = this;
    var source = this.source;

    if (self.$img === undefined) {
      if(self.placeholder) {
        self.$img = $('<div>', {
          width: '100%',
          height: '100%',
          class: 'h5p-placeholder',
          title: this.title === undefined ? '' : this.title,
          on: {
            load: function () {
              self.trigger('loaded');
            }
          }
        });
      } else {
        self.$img = $('<img>', {
          width: '100%',
          height: '100%',
          src: source,
          alt: this.alt,
          title: this.title === undefined ? '' : this.title,
          on: {
            load: function () {
              self.trigger('loaded');
            }
          }
        });
      }
    }

    $wrapper.addClass('h5p-image').html(self.$img);
  };

  /**
   * Retrieve decoded HTML encoded string.
   *
   * @param {string} input HTML encoded string.
   * @returns {string} Decoded string.
   */
  H5P.Image.prototype.htmlDecode = function (input) {
    const dparser = new DOMParser().parseFromString(input, 'text/html');
    return dparser.documentElement.textContent;
  };

  /**
   * Retrieve string without HTML tags.
   *
   * @param {string} input Input string.
   * @returns {string} Output string.
   */
  H5P.Image.prototype.stripHTML = function (html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  return H5P.Image;
}(H5P.jQuery));
;var H5P = H5P || {};

H5P.ImageSlide = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, contentId, extras) {
    var self = this;
    this.$ = $(this);
    H5P.EventDispatcher.call(this);

    this.aspectRatio = this.originalAspectRatio = extras.aspectRatio;
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      image: null,
    }, options);
    // Keep provided id.
    this.contentId = contentId;

    this.image = H5P.newRunnable(this.options.image, this.contentId);
    this.image.on('loaded', function() {
      self.trigger('loaded');
      self.trigger('resize');
    });
  }

  C.prototype = Object.create(H5P.EventDispatcher.prototype);
  C.prototype.constructor = C;


  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    this.$container = $container;

    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-image-slide");

    this.$imageHolder = $('<div>', {
      class: 'h5p-image-slide-image-holder',
    });

    $container.append(this.$imageHolder);

    // Add image
    this.image.attach(this.$imageHolder);

    this.adjustSize();
  };

  /**
   * Set the ascpect ratio for this slide
   *
   * @param {Integer} newAspectRatio the aspect ratio
   */
  C.prototype.setAspectRatio = function(newAspectRatio) {
    this.aspectRatio = newAspectRatio;
    // Adjust size if image has been attached
    if (this.$imageHolder) {
      this.adjustSize();
    }
  };

  /**
   * Reset the aspect ratio to the previously set aspect ratio
   *
   * Typically used when exiting fullscreen mode
   */
  C.prototype.resetAspectRatio = function() {
    this.aspectRatio = this.originalAspectRatio;
    // Adjust size if image has been attached
    if (this.$imageHolder) {
      this.adjustSize();
    }
  };

  /**
   * Update the size of the slide
   *
   * Typically used when the screen resizes, goes to fullscreen or similar
   */
  C.prototype.adjustSize = function() {
    var imageHeight = this.options.image.params.file.height;
    var imageWidth = this.options.image.params.file.width;

    var imageAspectRatio = imageWidth / imageHeight;
    if (this.aspectRatio >= imageAspectRatio) {
      // image too tall - Make it smaller and center it
      var widthInPercent = imageAspectRatio / this.aspectRatio * 100;
      var borderSize = (100 - widthInPercent) / 2 + '%';
      this.$imageHolder.css({
        height: '100%',
        width: imageAspectRatio / this.aspectRatio * 100 + '%',
        paddingLeft: borderSize,
        paddingRight: borderSize,
        paddingTop: 0,
        paddingBottom: 0
      });
    }
    else if (this.aspectRatio < imageAspectRatio) {
      // image too wide
      var heightInPercent = this.aspectRatio / imageAspectRatio * 100;

      // Note: divide by aspect ratio since padding top/bottom is relative to width
      var borderSize = (100 - heightInPercent) / 2 / this.aspectRatio + '%';

      this.$imageHolder.css({
        width: '100%',
        height: heightInPercent + '%',
        paddingTop: borderSize,
        paddingBottom: borderSize,
        paddingLeft: 0,
        paddingRight: 0
      });
    }
    else if (this.aspectRatio === undefined) {
      this.$imageHolder.css({
        width: '100%',
        height: '',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      });
    }
  };

  return C;
})(H5P.jQuery);
;var H5P = H5P || {};

H5P.ImageSlider = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);
    var self = this;

    H5P.EventDispatcher.call(this);
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      imageSlides: [
        {
          imageSlide: null
        }
      ],
      a11y: {
        nextSlide: 'Next Image',
        prevSlide: 'Previous Image',
        gotoSlide: 'Go to image %slide'
      },
      aspectRatioMode: 'auto',
      aspectRatio: {
        aspectWidth: 4,
        aspectHeight: 3
      }
    }, options);

    // Filter out slides without image
    this.options.imageSlides = this.options.imageSlides.filter(function (slide) {
      return slide.params && slide.params.image && slide.params.image.params && slide.params.image.params.file;
    });

    // Keep provided id.
    this.id = id;
    this.currentSlideId = 0;
    this.imageSlides = [];
    this.imageSlideHolders = [];
    this.determineAspectRatio();

    for (var i = 0; i < this.options.imageSlides.length; i++) {
      this.imageSlides[i] = H5P.newRunnable(this.options.imageSlides[i], this.id, undefined, undefined, {
        aspectRatio: this.aspectRatio
      });
      this.imageSlides[i].on('loaded', function() {
        self.trigger('resize');
      });
      this.imageSlideHolders[i] = false;
    }

    this.on('enterFullScreen', function() {
      self.enterFullScreen();
    });
    this.on('exitFullScreen', function(){
      self.exitFullScreen();
    });

    this.on('resize', function() {
      var fullScreenOn = self.$container.hasClass('h5p-fullscreen') || self.$container.hasClass('h5p-semi-fullscreen');
      if (fullScreenOn) {
        self.$slides.css('height', '');
        var newAspectRatio = window.innerWidth / (window.innerHeight - self.$progressBar.outerHeight());
        for (var i = 0; i < self.imageSlides.length; i++) {
          self.imageSlides[i].setAspectRatio(newAspectRatio);
        }
      }
      else {
        if (self.aspectRatio && self.$slides) {
          self.$slides.height(self.$slides.width() / self.aspectRatio);
        }
      }
      self.updateNavButtons();
      self.updateProgressBar();
    });
  }

  C.prototype = Object.create(H5P.EventDispatcher.prototype);
  C.prototype.constructor = C;

  /**
   * Set the aspect ratio for this image-slider
   */
  C.prototype.determineAspectRatio = function() {
    // Set aspectRatio to default
    this.aspectRatio = 4/3;

    // Try to identify aspectRatio according to settings
    switch (this.options.aspectRatioMode) {
      case 'auto':
        var imageRatios = [];
        for (var i = 0; i < this.options.imageSlides.length; i++) {
          var imageFile = this.options.imageSlides[i].params.image.params.file;
          imageRatios[i] = imageFile.width / imageFile.height;
        }
        imageRatios.sort(function (a, b) {
          return a - b;
        });
        // Get the median image ratio
        this.aspectRatio = imageRatios[Math.round(imageRatios.length / 2) - 1];
        break;

      case 'custom':
        if (this.options.aspectRatio.aspectWidth && this.options.aspectRatio.aspectHeight) {
          this.aspectRatio = this.options.aspectRatio.aspectWidth / this.options.aspectRatio.aspectHeight;
        }
        break;

      case 'notFixed':
        this.aspectRatio = undefined;
        break;
    }
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    this.$container = $container;
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-image-slider").addClass('h5p-image-slider-using-mouse');

    $container.bind('keydown', function(e) {
      var keyboardNavKeys = [32, 13, 9];
      if (keyboardNavKeys.indexOf(e.which) !== -1) {
        $container.removeClass('h5p-image-slider-using-mouse');
      }
    });
    $container.bind('mousedown', function() {
      $container.addClass('h5p-image-slider-using-mouse');
    });

    this.$slidesHolder = $('<div>', {
      class: 'h5p-image-slider-slides-holder'
    }).appendTo($container);

    this.$screenReaderAnnouncement = $('<div>', {
      class: 'h5p-image-slider-sr-only',
      'aria-atomic': 'true',
      'aria-live': 'polite'
    }).appendTo(this.$slidesHolder);

    this.$slides = $('<div>', {
      class: 'h5p-image-slider-slides'
    }).appendTo(this.$slidesHolder);

    this.loadImageSlides();

    this.$currentSlide = this.imageSlideHolders[0].addClass('h5p-image-slider-current');

    this.attachControls();
  };

  /**
   * Update aria-live region with the current image's alt text.
   */
  C.prototype.announceCurrentSlide = function () {
    this.$screenReaderAnnouncement.text(this.imageSlides[this.currentSlideId].image.alt);
  };

  /**
   * Update layout when entering fullscreen.
   *
   * Many layout changes are handled on resize.
   */
  C.prototype.enterFullScreen = function() {
    this.updateNavButtons();
    this.updateProgressBar();
  };

  /**
   * Update layout when entering fullscreen.
   *
   * Many layout changes are handled on resize.
   */
  C.prototype.exitFullScreen = function() {
    for (var i = 0; i < this.imageSlides.length; i++) {
      this.imageSlides[i].resetAspectRatio();
    }
    this.updateNavButtons();
    this.updateProgressBar();
  };

  /**
   * Adds the HTML for the next three slides to the DOM
   */
  C.prototype.loadImageSlides = function() {
    // Load next three imageSlides (not all for performance reasons)
    for (var i = this.currentSlideId; i < this.imageSlides.length && i < this.currentSlideId + 3; i++) {
      if (this.imageSlideHolders[i] === false) {
        this.imageSlideHolders[i] = $('<div>', {
          'class': 'h5p-image-slide-holder'
        });
        if (i > 0) {
          this.imageSlideHolders[i].attr('aria-hidden', true);
        }
        if (i > this.currentSlideId) {
          this.imageSlideHolders[i].addClass('h5p-image-slider-future');
        }
        this.imageSlides[i].attach(this.imageSlideHolders[i]);
        this.$slides.append(this.imageSlideHolders[i]);
      }
    }
  };

  /**
   * Attaches controls to the DOM
   */
  C.prototype.attachControls = function() {
    var self = this;
    this.$leftButton = this.createControlButton(this.options.a11y.prevSlide, 'left');
    this.$rightButton = this.createControlButton(this.options.a11y.nextSlide, 'right');
    C.handleButtonClick(this.$leftButton, function () {
      if (!self.dragging) {
        self.gotoSlide(self.currentSlideId - 1);
      }
    });

    C.handleButtonClick(this.$rightButton, function() {
      if (!self.dragging) {
        self.gotoSlide(self.currentSlideId + 1);
      }
    });

    this.$slidesHolder.append(this.$leftButton);
    this.$slidesHolder.append(this.$rightButton);
    this.updateNavButtons();
    this.attachProgressBar();
    this.initDragging();
    this.initKeyEvents();
  };

  /**
   * Attaches the progress bar to the DOM
   */
  C.prototype.attachProgressBar = function() {
    this.$progressBar = $('<ul>', {
      class: 'h5p-image-slider-progress'
    });
    for (var i = 0; i < this.imageSlides.length; i++) {
      this.$progressBar.append(this.createProgressBarElement(i));
    }
    this.$slidesHolder.append(this.$progressBar);
  };

  /**
   * Creates a progress bar button
   *
   * @param {Integer} index  - slide index the progress bare element corresponds to
   * @return {jQuery} - progress bar button
   */
  C.prototype.createProgressBarElement = function(index) {
    var self = this;
    
    var $progressBarButton = $('<button>', {
      class: 'h5p-image-slider-progress-button',
      "aria-label": self.options.a11y.gotoSlide.replace('%slide', index + 1),
      tabindex: 0,
    });

    var $progressBarElement = $('<li>', {
      class: 'h5p-image-slider-progress-element',
    });

    $progressBarElement.append($progressBarButton);

    C.handleButtonClick($progressBarButton, function() {
      self.gotoSlide(index);
    });

    if (index === 0) {
      $progressBarElement.addClass('h5p-image-slider-current-progress-element');
    }
    return $progressBarElement;
  };

  /**
   * Creates a next or previous button
   *
   * @param {string} text - label for the button
   * @param {string} dir - next or prev
   * @return {jQuery} control button
   */
  C.prototype.createControlButton = function(text, dir) {
    var $controlButton = $('<div>', {
      class: 'h5p-image-slider-button ' + 'h5p-image-slider-' + dir + '-button',
    });

    var $controlBg = $('<div>', {
      class: 'h5p-image-slider-button-background'
    });
     $controlButton.append($controlBg);

    var $controlText = $('<div>', {
      class: 'h5p-image-slider-button-text',
      'aria-label': text,
      'role': 'button',
      'tabindex': 0
    });
    $controlButton.append($controlText);

    return $controlButton;
  };

  /**
   * Go to a specific slide
   *
   * @param {Integer} slideId the index of the slide we want to go to
   * @return {Boolean} false if failed(typically the slide didn't exist), true if not
   */
  C.prototype.gotoSlide = function(slideId) {
    if (slideId < 0 || slideId >= this.imageSlideHolders.length) {
      return false;
    }
    $('.h5p-image-slider-removing', this.$container).removeClass('.h5p-image-slider-removing');
    var nextSlideDirection = (this.currentSlideId < slideId) ? 'future' : 'past';
    var prevSlideDirection = nextSlideDirection === 'past' ? 'future' : 'past';
    this.currentSlideId = slideId;
    this.loadImageSlides();
    var $prevSlide = this.$currentSlide;
    var $nextSlide = (this.imageSlideHolders[slideId]);
    if (!this.dragging) {
      this.prepareNextSlideForAnimation($nextSlide, nextSlideDirection);
    }
    setTimeout(function() {
      $nextSlide.removeClass('h5p-image-slider-no-transition');
      $prevSlide.removeClass('h5p-image-slider-current')
        .addClass('h5p-image-slider-removing')
        .removeClass('h5p-image-slider-' + nextSlideDirection)
        .addClass('h5p-image-slider-' + prevSlideDirection)
        .attr('aria-hidden', true);
      $nextSlide.removeClass('h5p-image-slider-past')
        .removeClass('h5p-image-slider-future')
        .addClass('h5p-image-slider-current')
        .removeAttr('aria-hidden');
    }, 1);

    this.$currentSlide = $nextSlide;

    this.announceCurrentSlide();
    this.updateNavButtons();
    this.updateProgressBar();
    return true;
  };

  /**
   * Position the next slide correctly so that it is ready to be aimated in
   *
   * @param {jQuery} $nextSlide the slide to be prepared
   * @param {String} direction prev or next
   */
  C.prototype.prepareNextSlideForAnimation = function($nextSlide, direction) {
    $nextSlide.removeClass('h5p-image-slider-past')
      .removeClass('h5p-image-slider-future')
      .addClass('h5p-image-slider-no-transition')
      .addClass('h5p-image-slider-' + direction);
  };

  /**
   * Updates all navigation buttons, typically toggling and positioning
   */
  C.prototype.updateNavButtons = function() {
    if (this.currentSlideId >= this.imageSlides.length - 1) {
      this.$rightButton.hide();
    }
    else {
      this.$rightButton.show();
    }
    if (this.currentSlideId <= 0) {
      this.$leftButton.hide();
    }
    else {
      this.$leftButton.show();
    }
    var heightInPercent = 100;
    var fullScreenOn = this.$container.hasClass('h5p-fullscreen') || this.$container.hasClass('h5p-semi-fullscreen');
    if (!fullScreenOn) {
      heightInPercent = this.$currentSlide.height() / this.$slides.height() * 100;
    }
    this.$leftButton.css('height', heightInPercent + '%');
    this.$rightButton.css('height', heightInPercent + '%');
  };

  /**
   * Update the progress bar
   *
   * Highlights the element in the progress bar corresponding to the current slide
   * and reposition the progress bar
   */
  C.prototype.updateProgressBar = function () {
    const oldProgressElement = $('.h5p-image-slider-current-progress-element', this.$container).removeClass('h5p-image-slider-current-progress-element');
    const newProgressElement = $('.h5p-image-slider-progress-element', this.$container).eq(this.currentSlideId).addClass('h5p-image-slider-current-progress-element');
    
    if (oldProgressElement.children('.h5p-image-slider-progress-button').is(':focus')) {
      newProgressElement.children('.h5p-image-slider-progress-button').focus();
    }

    oldProgressElement.children('.h5p-image-slider-progress-button').attr('aria-current', 'false');
    newProgressElement.children('.h5p-image-slider-progress-button').attr('aria-current', 'true');

    var heightInPercent = this.$currentSlide.height() / this.$slides.height() * 100;
    $('.h5p-image-slider-progress', this.$container).css('top', heightInPercent + '%');
  };

  /**
   * Make a slide draggable
   */
  C.prototype.initDragging = function () {
    var self = this;
    this.$slidesHolder.on('touchstart', function(event) {
      self.dragging = true;
      self.dragStartX = event.originalEvent.touches[0].pageX;
      self.$currentSlide.addClass('h5p-image-slider-dragging');
      if (self.isButton(event.target)) {
        event.preventDefault();
        event.stopPropagation();
        var d = new Date();
        self.dragStartTime = d.getTime();
      }
    });

    this.$slidesHolder.on('touchmove', function(event) {
      event.preventDefault();
      self.dragActionUpdate(event.originalEvent.touches[0].pageX);
    });

    this.$slidesHolder.on('touchend', function(event) {
      self.finishDragAction();
      if (self.dragStartTime !== false && self.isButton(event.target)) {
        // This was possibly a click
        var d = new Date();
        if (d.getTime() - self.dragStartTime < 300) {
          if (self.isRightButton(event.target)) {
            self.gotoSlide(self.currentSlideId + 1);
          }
          else {
            self.gotoSlide(self.currentSlideId - 1);
          }
        }
      }
      self.dragStartTime = false;
    });

    this.$slidesHolder.on('touchcancel', function() {
      self.finishDragAction();
      self.dragStartTime = false;
    });
  };

  /**
   * Initialize key press events.
   *
   * @returns {undefined} Nothing.
   */
  C.prototype.initKeyEvents = function () {
    if (this.keydown !== undefined) {
      return;
    }

    var self = this;

    this.keydown = function (event) {
      // Left
      if (event.which === 37) {
        self.gotoSlide(self.currentSlideId - 1);
      }

      // Right
      else if (event.which === 39) {
        self.gotoSlide(self.currentSlideId + 1);
      }
    };
    H5P.jQuery('body').keydown(this.keydown);
  };

  /**
   * Is the domElement a button?
   *
   * @param {DOMElement} domElement the element to be checked
   * @return {Boolean} whether or not the element is a button
   */
  C.prototype.isButton = function (domElement) {
    var $target = $(domElement);
    return $target.hasClass('h5p-image-slider-button-background')
      || $target.hasClass('h5p-image-slider-button-text')
      || $target.hasClass('h5p-image-slider-button');
  };

  /**
   * Is the element the right/next button?
   *
   * @param {DOMElement} domElement the DOM element to be checked
   * @return {Boolean} Whether or not the element is the right button
   */
  C.prototype.isRightButton = function (domElement) {
    var $target = $(domElement);
    return $target.hasClass('h5p-image-slider-right-button')
      || $target.parent().hasClass('h5p-image-slider-right-button');
  };

  /**
   * Update the current and next slide in response to a drag action
   */
  C.prototype.dragActionUpdate = function(x) {
    this.dragXMovement = x - this.dragStartX;
    this.$currentSlide.css('transform', 'translateX(' + this.dragXMovement + 'px)');
    if (this.currentSlideId > 0) {
      var $prevSlide = this.imageSlideHolders[this.currentSlideId - 1].addClass('h5p-image-slider-dragging');
      if (this.dragXMovement < 0) {
        $prevSlide.css('transform', 'translateX(-100.001%)');
      }
      else {
        $prevSlide.css('transform', 'translateX(' + (this.dragXMovement - $prevSlide.width()) + 'px)');
      }
    }
    if (this.currentSlideId < this.imageSlideHolders.length - 1) {
      var $nextSlide = this.imageSlideHolders[this.currentSlideId + 1].addClass('h5p-image-slider-dragging');
      if (this.dragXMovement > 0) {
        $nextSlide.css('transform', 'translateX(100.001%)');
      }
      else {
        $nextSlide.css('transform', 'translateX(' +(this.dragXMovement + $nextSlide.width()) + 'px)');
      }
    }
  };

  /**
   * Actions to be done when a drag action is finished
   *
   * Will either go back to the current slide or finish the transition to the next slide
   */
  C.prototype.finishDragAction = function() {
    $('.h5p-image-slider-dragging', this.$container).removeClass('h5p-image-slider-dragging').each(function() {
      this.style.removeProperty('transform');
    });
    this.dragStartX = undefined;
    var xInPercent = this.dragXMovement / this.$currentSlide.width();
    if (xInPercent < -0.3) {
      if (this.currentSlideId < this.imageSlideHolders.length - 1) {
        this.gotoSlide(this.currentSlideId + 1);
      }
      else {
        this.$currentSlide.css('transform', 'translateX(0%)');
      }
    }
    else if (xInPercent > 0.3) {
      if (this.currentSlideId > 0) {
        this.gotoSlide(this.currentSlideId - 1);
      }
      else {
        this.$currentSlide.css('transform', 'translateX(0%)');
      }
    }
    this.dragging = false;
    this.dragXMovement = 0;
  };

  /**
   * Make a non-button element behave as a button. I.e handle enter and space
   * keydowns as click
   *
   * @param  {H5P.jQuery} $element The "button" element
   * @param  {Function} callback
   */
  C.handleButtonClick = function ($element, callback) {
    $element.click(function (event) {
      callback.call(this, event);
    });
    $element.keydown(function (event) {
      // 32 - space, 13 - enter
      if ([32, 13].indexOf(event.which) !== -1) {
        event.preventDefault();
        callback.call(this, event);
      }
    });
  };

  return C;
})(H5P.jQuery);
;H5P.Column = (function (EventDispatcher) {

  /**
   * Column Constructor
   *
   * @class
   * @param {Object} params Describes task behavior
   * @param {number} id Content identifier
   * @param {Object} data User specific data to adapt behavior
   */
  function Column(params, id, data) {
    /** @alias H5P.Column# */
    var self = this;

    // We support events by extending this class
    EventDispatcher.call(self);

    // Add defaults
    params = params || {};
    if (params.useSeparators === undefined) {
      params.useSeparators = true;
    }

    this.contentData = data;

    // Column wrapper element
    var wrapper;

    // H5P content in the column
    var instances = [];
    var instanceContainers = [];

    // Number of tasks among instances
    var numTasks = 0;

    // Number of tasks that has been completed
    var numTasksCompleted = 0;

    // Keep track of result for each task
    var tasksResultEvent = [];

    // Keep track of last content's margin state
    var previousHasMargin;

    /**
     * Calculate score and trigger completed event.
     *
     * @private
     */
    var completed = function () {
      // Sum all scores
      var raw = 0;
      var max = 0;

      for (var i = 0; i < tasksResultEvent.length; i++) {
        var event = tasksResultEvent[i];
        raw += event.getScore();
        max += event.getMaxScore();
      }

      self.triggerXAPIScored(raw, max, 'completed');
    };

    /**
     * Generates an event handler for the given task index.
     *
     * @private
     * @param {number} taskIndex
     * @return {function} xAPI event handler
     */
    var trackScoring = function (taskIndex) {
      return function (event) {
        if (event.getScore() === null) {
          return; // Skip, not relevant
        }

        if (tasksResultEvent[taskIndex] === undefined) {
          // Update number of completed tasks
          numTasksCompleted++;
        }

        // Keep track of latest event with result
        tasksResultEvent[taskIndex] = event;

        // Track progress
        var progressed = self.createXAPIEventTemplate('progressed');
        progressed.data.statement.object.definition.extensions['http://id.tincanapi.com/extension/ending-point'] = taskIndex + 1;
        self.trigger(progressed);

        // Check to see if we're done
        if (numTasksCompleted === numTasks) {
          // Run this after the current event is sent
          setTimeout(function () {
            completed(); // Done
          }, 0);
        }
      };
    };

    /**
     * Creates a new ontent instance from the given content parameters and
     * then attaches it the wrapper. Sets up event listeners.
     *
     * @private
     * @param {Object} content Parameters
     * @param {Object} [contentData] Content Data
     */
    var addRunnable = function (content, contentData) {
      // Create container for content
      var container = document.createElement('div');
      container.classList.add('h5p-column-content');

      // Content overrides
      var library = content.library.split(' ')[0];
      if (library === 'H5P.Video') {
        // Prevent video from growing endlessly since height is unlimited.
        content.params.visuals.fit = false;
      }

      // Create content instance
      var instance = H5P.newRunnable(content, id, undefined, true, contentData);

      // Bubble resize events
      bubbleUp(instance, 'resize', self);

      // Check if instance is a task
      if (Column.isTask(instance)) {
        // Tasks requires completion

        instance.on('xAPI', trackScoring(numTasks));
        numTasks++;
      }

      if (library === 'H5P.Image' || library === 'H5P.TwitterUserFeed') {
        // Resize when images are loaded

        instance.on('loaded', function () {
          self.trigger('resize');
        });
      }

      // Keep track of all instances
      instances.push(instance);
      instanceContainers.push({
        hasAttached: false,
        container: container,
        instanceIndex: instances.length - 1,
      });

      // Add to DOM wrapper
      wrapper.appendChild(container);
    };

    /**
     * Help get data for content at given index
     *
     * @private
     * @param {number} index
     * @returns {Object} Data object with previous state
     */
    var grabContentData = function (index) {
      var contentData = {
        parent: self
      };

      if (data.previousState && data.previousState.instances && data.previousState.instances[index]) {
        contentData.previousState = data.previousState.instances[index];
      }

      return contentData;
    };

    /**
     * Adds separator before the next content.
     *
     * @private
     * @param {string} libraryName Name of the next content type
     * @param {string} useSeparator
     */
    var addSeparator = function (libraryName, useSeparator) {
      // Determine separator spacing
      var thisHasMargin = (hasMargins.indexOf(libraryName) !== -1);

      // Only add if previous content exists
      if (previousHasMargin !== undefined) {

        // Create separator element
        var separator = document.createElement('div');
        //separator.classList.add('h5p-column-ruler');

        // If no margins, check for top margin only
        if (!thisHasMargin && (hasTopMargins.indexOf(libraryName) === -1)) {
          if (!previousHasMargin) {
            // None of them have margin

            // Only add separator if forced
            if (useSeparator === 'enabled') {
              // Add ruler
              separator.classList.add('h5p-column-ruler');

              // Add space both before and after the ruler
              separator.classList.add('h5p-column-space-before-n-after');
            }
            else {
              // Default is to separte using a single space, no ruler
              separator.classList.add('h5p-column-space-before');
            }
          }
          else {
            // We don't have any margin but the previous content does

            // Only add separator if forced
            if (useSeparator === 'enabled') {
              // Add ruler
              separator.classList.add('h5p-column-ruler');

              // Add space after the ruler
              separator.classList.add('h5p-column-space-after');
            }
          }
        }
        else if (!previousHasMargin) {
          // We have margin but not the previous content doesn't

          // Only add separator if forced
          if (useSeparator === 'enabled') {
            // Add ruler
            separator.classList.add('h5p-column-ruler');

            // Add space after the ruler
            separator.classList.add('h5p-column-space-before');
          }
        }
        else {
          // Both already have margin

          if (useSeparator !== 'disabled') {
            // Default is to add ruler unless its disabled
            separator.classList.add('h5p-column-ruler');
          }
        }

        // Insert into DOM
        wrapper.appendChild(separator);
      }

      // Keep track of spacing for next separator
      previousHasMargin = thisHasMargin || (hasBottomMargins.indexOf(libraryName) !== -1);
    };

    /**
     * Creates a wrapper and the column content the first time the column
     * is attached to the DOM.
     *
     * @private
     */
    var createHTML = function () {
      // Create wrapper
      wrapper = document.createElement('div');

      // Go though all contents
      for (var i = 0; i < params.content.length; i++) {
        var content = params.content[i];

        // In case the author has created an element without selecting any
        // library
        if (content.content === undefined) {
          continue;
        }

        if (params.useSeparators) { // (check for global override)

          // Add separator between contents
          addSeparator(content.content.library.split(' ')[0], content.useSeparator);
        }

        // Add content
        addRunnable(content.content, grabContentData(i));
      }
    };

    /**
     * Attach the column to the given container
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      if (wrapper === undefined) {
        // Create wrapper and content
        createHTML();
      }

      // Attach instances that have not been attached
      instanceContainers.filter(function (container) { return !container.hasAttached })
        .forEach(function (container) {
          instances[container.instanceIndex]
            .attach(H5P.jQuery(container.container));

          // Remove any fullscreen buttons
          disableFullscreen(instances[container.instanceIndex]);
        });


      // Add to DOM
      $container.addClass('h5p-column').html('').append(wrapper);
    };

    /**
     * Create object containing information about the current state
     * of this content.
     *
     * @return {Object}
     */
    self.getCurrentState = function () {
      // Get previous state object or create new state object
      var state = (data.previousState ? data.previousState : {});
      if (!state.instances) {
        state.instances = [];
      }

      // Grab the current state for each instance
      for (var i = 0; i < instances.length; i++) {
        var instance = instances[i];

        if (instance.getCurrentState instanceof Function ||
            typeof instance.getCurrentState === 'function') {

          state.instances[i] = instance.getCurrentState();
        }
      }

      // Done
      return state;
    };

    /**
     * Get xAPI data.
     * Contract used by report rendering engine.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
     */
    self.getXAPIData = function () {
      var xAPIEvent = self.createXAPIEventTemplate('answered');
      addQuestionToXAPI(xAPIEvent);
      xAPIEvent.setScoredResult(self.getScore(),
        self.getMaxScore(),
        self,
        true,
        self.getScore() === self.getMaxScore()
      );
      return {
        statement: xAPIEvent.data.statement,
        children: getXAPIDataFromChildren(instances)
      };
    };

    /**
     * Get score for all children
     * Contract used for getting the complete score of task.
     *
     * @return {number} Score for questions
     */
    self.getScore = function () {
      return instances.reduce(function (prev, instance) {
        return prev + (instance.getScore ? instance.getScore() : 0);
      }, 0);
    };

    /**
     * Get maximum score possible for all children instances
     * Contract.
     *
     * @return {number} Maximum score for questions
     */
    self.getMaxScore = function () {
      return instances.reduce(function (prev, instance) {
        return prev + (instance.getMaxScore ? instance.getMaxScore() : 0);
      }, 0);
    };

    /**
     * Get answer given
     * Contract.
     *
     * @return {boolean} True, if all answers have been given.
     */
    self.getAnswerGiven = function () {
      return instances.reduce(function (prev, instance) {
        return prev && (instance.getAnswerGiven ? instance.getAnswerGiven() : prev);
      }, true);
    };

    /**
     * Show solutions.
     * Contract.
     */
    self.showSolutions = function () {
      instances.forEach(function (instance) {
        if (instance.toggleReadSpeaker) {
          instance.toggleReadSpeaker(true);
        }
        if (instance.showSolutions) {
          instance.showSolutions();
        }
        if (instance.toggleReadSpeaker) {
          instance.toggleReadSpeaker(false);
        }
      });
    };

    /**
     * Reset task.
     * Contract.
     */
    self.resetTask = function () {
      instances.forEach(function (instance) {
        if (instance.resetTask) {
          instance.resetTask();
        }
      });
    };

    /**
     * Get instances for all children
     * TODO: This is not a good interface, we should provide handling needed
     * handling of the tasks instead of repeating them for each parent...
     *
     * @return {Object[]} array of instances
     */
    self.getInstances = function () {
      return instances;
    };

    /**
     * Get title, e.g. for xAPI when Column is subcontent.
     *
     * @return {string} Title.
     */
    self.getTitle = function () {
      return H5P.createTitle((self.contentData && self.contentData.metadata && self.contentData.metadata.title) ? self.contentData.metadata.title : 'Column');
    };

    /**
     * Add the question itself to the definition part of an xAPIEvent
     */
    var addQuestionToXAPI = function (xAPIEvent) {
      var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);
      H5P.jQuery.extend(definition, getxAPIDefinition());
    };

    /**
     * Generate xAPI object definition used in xAPI statements.
     * @return {Object}
     */
    var getxAPIDefinition = function () {
      var definition = {};

      definition.interactionType = 'compound';
      definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
      definition.description = {
        'en-US': ''
      };

      return definition;
    };

    /**
     * Get xAPI data from sub content types
     *
     * @param {Array} of H5P instances
     * @returns {Array} of xAPI data objects used to build a report
     */
    var getXAPIDataFromChildren = function (children) {
      return children.map(function (child) {
        if (typeof child.getXAPIData == 'function') {
          return child.getXAPIData();
        }
      }).filter(function (data) {
        return !!data;
      });
    };

    // Resize children to fit inside parent
    bubbleDown(self, 'resize', instances);

    if (wrapper === undefined) {
      // Create wrapper and content
      createHTML();
    }

    self.setActivityStarted();
  }

  Column.prototype = Object.create(EventDispatcher.prototype);
  Column.prototype.constructor = Column;

  /**
   * Makes it easy to bubble events from parent to children
   *
   * @private
   * @param {Object} origin Origin of the Event
   * @param {string} eventName Name of the Event
   * @param {Array} targets Targets to trigger event on
   */
  function bubbleDown(origin, eventName, targets) {
    origin.on(eventName, function (event) {
      if (origin.bubblingUpwards) {
        return; // Prevent send event back down.
      }

      for (var i = 0; i < targets.length; i++) {
        targets[i].trigger(eventName, event);
      }
    });
  }

  /**
   * Makes it easy to bubble events from child to parent
   *
   * @private
   * @param {Object} origin Origin of the Event
   * @param {string} eventName Name of the Event
   * @param {Object} target Target to trigger event on
   */
  function bubbleUp(origin, eventName, target) {
    origin.on(eventName, function (event) {
      // Prevent target from sending event back down
      target.bubblingUpwards = true;

      // Trigger event
      target.trigger(eventName, event);

      // Reset
      target.bubblingUpwards = false;
    });
  }

  /**
   * Definition of which content types are tasks
   */
  var isTasks = [
    'H5P.ImageHotspotQuestion',
    'H5P.Blanks',
    'H5P.Essay',
    'H5P.SingleChoiceSet',
    'H5P.MultiChoice',
    'H5P.TrueFalse',
    'H5P.DragQuestion',
    'H5P.Summary',
    'H5P.DragText',
    'H5P.MarkTheWords',
    'H5P.MemoryGame',
    'H5P.QuestionSet',
    'H5P.InteractiveVideo',
    'H5P.CoursePresentation',
    'H5P.DocumentationTool'
  ];

  /**
   * Check if the given content instance is a task (will give a score)
   *
   * @param {Object} instance
   * @return {boolean}
   */
  Column.isTask = function (instance) {
    if (instance.isTask !== undefined) {
      return instance.isTask; // Content will determine self if it's a task
    }

    // Go through the valid task names
    for (var i = 0; i < isTasks.length; i++) {
      // Check against library info. (instanceof is broken in H5P.newRunnable)
      if (instance.libraryInfo.machineName === isTasks[i]) {
        return true;
      }
    }

    return false;
  }

  /**
   * Definition of which content type have margins
   */
  var hasMargins = [
    'H5P.AdvancedText',
    'H5P.AudioRecorder',
    'H5P.Essay',
    'H5P.Link',
    'H5P.Accordion',
    'H5P.Table',
    'H5P.GuessTheAnswer',
    'H5P.Blanks',
    'H5P.MultiChoice',
    'H5P.TrueFalse',
    'H5P.DragQuestion',
    'H5P.Summary',
    'H5P.DragText',
    'H5P.MarkTheWords',
    'H5P.ImageHotspotQuestion',
    'H5P.MemoryGame',
    'H5P.Dialogcards',
    'H5P.QuestionSet',
    'H5P.DocumentationTool'
  ];

  /**
   * Definition of which content type have top margins
   */
  var hasTopMargins = [
    'H5P.SingleChoiceSet'
  ];

  /**
   * Definition of which content type have bottom margins
   */
  var hasBottomMargins = [
    'H5P.CoursePresentation',
    'H5P.Dialogcards',
    'H5P.GuessTheAnswer',
    'H5P.ImageSlider'
  ];

  /**
   * Remove custom fullscreen buttons from sub content.
   * (A bit of a hack, there should have been some sort of override…)
   *
   * @param {Object} instance
   */
  function disableFullscreen(instance) {
    switch (instance.libraryInfo.machineName) {
      case 'H5P.CoursePresentation':
        if (instance.$fullScreenButton) {
          instance.$fullScreenButton.remove();
        }
        break;

      case 'H5P.InteractiveVideo':
        instance.on('controls', function () {
          if (instance.controls.$fullscreen) {
            instance.controls.$fullscreen.remove();
          }
        });
        break;
    }
  }

  return Column;
})(H5P.EventDispatcher);
;var H5P = H5P || {};

/**
 * H5P Link Library Module.
 */
H5P.Link = (function ($) {

  /**
   * Link constructor.
   *
   * @param {Object} parameters
   */
  function Link(parameters) {
    // Add default parameters
    parameters = $.extend(true, {
      title: 'New link',
      linkWidget: {
        protocol: '',
        url: ''
      }
    }, parameters);

    var url = '';
    if (parameters.linkWidget.protocol !== 'other') {
       url += parameters.linkWidget.protocol;
    }
    url += parameters.linkWidget.url;

    /**
     * Public. Attach.
     *
     * @param {jQuery} $container
     */
    this.attach = function ($container) {
      var sanitizedUrl = sanitizeUrlProtocol(url);
      $container.addClass('h5p-link').html('<a href="' + sanitizedUrl + '" target="_blank">' + parameters.title + '</a>')
                .keypress(function (event) {
                  if (event.which === 32) {
                    this.click();
                  }
                });
    };

    /**
     * Return url
     *
     * @returns {string}
     */
    this.getUrl = function () {
      return url;
    };

    /**
     * Private. Remove illegal url protocols from uri
     */
    var sanitizeUrlProtocol = function(uri) {
      var allowedProtocols = ['http', 'https', 'ftp', 'irc', 'mailto', 'news', 'nntp', 'rtsp', 'sftp', 'ssh', 'tel', 'telnet', 'webcal'];

      var first = true;
      var before = '';
      while (first || uri != before) {
        first = false;
        before = uri;
        var colonPos = uri.indexOf(':');
        if (colonPos > 0) {
          // We found a possible protocol
          var protocol = uri.substr(0, colonPos);
          // If the colon is preceeded by a hash, slash or question mark it isn't a protocol
          if (protocol.match(/[/?#]/g)) {
            break;
          }
          // Is this a forbidden protocol?
          if (allowedProtocols.indexOf(protocol.toLowerCase()) == -1) {
            // If illegal, remove the protocol...
            uri = uri.substr(colonPos + 1);
          }
        }
      }
      return uri;
    };
  }

  return Link;
})(H5P.jQuery);
;var H5P = H5P || {};
/**
 * Transition contains helper function relevant for transitioning
 */
H5P.Transition = (function ($) {

  /**
   * @class
   * @namespace H5P
   */
  Transition = {};

  /**
   * @private
   */
  Transition.transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'transition':       'transitionend',
    'MozTransition':    'transitionend',
    'OTransition':      'oTransitionEnd',
    'msTransition':     'MSTransitionEnd'
  };

  /**
   * @private
   */
  Transition.cache = [];

  /**
   * Get the vendor property name for an event
   *
   * @function H5P.Transition.getVendorPropertyName
   * @static
   * @private
   * @param  {string} prop Generic property name
   * @return {string}      Vendor specific property name
   */
  Transition.getVendorPropertyName = function (prop) {

    if (Transition.cache[prop] !== undefined) {
      return Transition.cache[prop];
    }

    var div = document.createElement('div');

    // Handle unprefixed versions (FF16+, for example)
    if (prop in div.style) {
      Transition.cache[prop] = prop;
    }
    else {
      var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
      var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

      if (prop in div.style) {
        Transition.cache[prop] = prop;
      }
      else {
        for (var i = 0; i < prefixes.length; ++i) {
          var vendorProp = prefixes[i] + prop_;
          if (vendorProp in div.style) {
            Transition.cache[prop] = vendorProp;
            break;
          }
        }
      }
    }

    return Transition.cache[prop];
  };

  /**
   * Get the name of the transition end event
   *
   * @static
   * @private
   * @return {string}  description
   */
  Transition.getTransitionEndEventName = function () {
    return Transition.transitionEndEventNames[Transition.getVendorPropertyName('transition')] || undefined;
  };

  /**
   * Helper function for listening on transition end events
   *
   * @function H5P.Transition.onTransitionEnd
   * @static
   * @param  {domElement} $element The element which is transitioned
   * @param  {function} callback The callback to be invoked when transition is finished
   * @param  {number} timeout  Timeout in milliseconds. Fallback if transition event is never fired
   */
  Transition.onTransitionEnd = function ($element, callback, timeout) {
    // Fallback on 1 second if transition event is not supported/triggered
    timeout = timeout || 1000;
    Transition.transitionEndEventName = Transition.transitionEndEventName || Transition.getTransitionEndEventName();
    var callbackCalled = false;

    var doCallback = function () {
      if (callbackCalled) {
        return;
      }
      $element.off(Transition.transitionEndEventName, callback);
      callbackCalled = true;
      clearTimeout(timer);
      callback();
    };

    var timer = setTimeout(function () {
      doCallback();
    }, timeout);

    $element.on(Transition.transitionEndEventName, function () {
      doCallback();
    });
  };

  /**
   * Wait for a transition - when finished, invokes next in line
   *
   * @private
   *
   * @param {Object[]}    transitions             Array of transitions
   * @param {H5P.jQuery}  transitions[].$element  Dom element transition is performed on
   * @param {number=}     transitions[].timeout   Timeout fallback if transition end never is triggered
   * @param {bool=}       transitions[].break     If true, sequence breaks after this transition
   * @param {number}      index                   The index for current transition
   */
  var runSequence = function (transitions, index) {
    if (index >= transitions.length) {
      return;
    }

    var transition = transitions[index];
    H5P.Transition.onTransitionEnd(transition.$element, function () {
      if (transition.end) {
        transition.end();
      }
      if (transition.break !== true) {
        runSequence(transitions, index+1);
      }
    }, transition.timeout || undefined);
  };

  /**
   * Run a sequence of transitions
   *
   * @function H5P.Transition.sequence
   * @static
   * @param {Object[]}    transitions             Array of transitions
   * @param {H5P.jQuery}  transitions[].$element  Dom element transition is performed on
   * @param {number=}     transitions[].timeout   Timeout fallback if transition end never is triggered
   * @param {bool=}       transitions[].break     If true, sequence breaks after this transition
   */
  Transition.sequence = function (transitions) {
    runSequence(transitions, 0);
  };

  return Transition;
})(H5P.jQuery);
;var H5P = H5P || {};

/**
 * H5P audio module
 *
 * @external {jQuery} $ H5P.jQuery
 */
H5P.Audio = (function ($) {
  /**
  * @param {Object} params Options for this library.
  * @param {Number} id Content identifier.
  * @param {Object} extras Extras.
  * @returns {undefined}
  */
  function C(params, id, extras) {
    H5P.EventDispatcher.call(this);
    this.contentId = id;
    this.params = params;
    this.extras = extras;

    this.toggleButtonEnabled = true;

    // Retrieve previous state
    if (extras && extras.previousState !== undefined) {
      this.oldTime = extras.previousState.currentTime;
    }

    this.params = $.extend({}, {
      playerMode: 'minimalistic',
      fitToWrapper: false,
      controls: true,
      autoplay: false,
      audioNotSupported: "Your browser does not support this audio",
      playAudio: "Play audio",
      pauseAudio: "Pause audio"
    }, params);

    // Required if e.g. used in CoursePresentation as area to click on
    if (this.params.playerMode === 'transparent') {
      this.params.fitToWrapper = true;
    }

    this.on('resize', this.resize, this);
  }

  C.prototype = Object.create(H5P.EventDispatcher.prototype);
  C.prototype.constructor = C;

  /**
   * Adds a minimalistic audio player with only "play" and "pause" functionality.
   *
   * @param {jQuery} $container Container for the player.
   * @param {boolean} transparentMode true: the player is only visible when hovering over it; false: player's UI always visible
   */
  C.prototype.addMinimalAudioPlayer = function ($container, transparentMode) {
    var INNER_CONTAINER = 'h5p-audio-inner';
    var AUDIO_BUTTON = 'h5p-audio-minimal-button';
    var PLAY_BUTTON = 'h5p-audio-minimal-play';
    var PLAY_BUTTON_PAUSED = 'h5p-audio-minimal-play-paused';
    var PAUSE_BUTTON = 'h5p-audio-minimal-pause';

    var self = this;
    this.$container = $container;

    self.$inner = $('<div/>', {
      'class': INNER_CONTAINER + (transparentMode ? ' h5p-audio-transparent' : '')
    }).appendTo($container);

    var audioButton = $('<button/>', {
      'class': AUDIO_BUTTON + " " + PLAY_BUTTON,
      'aria-label': this.params.playAudio
    }).appendTo(self.$inner)
      .click( function () {
        if (!self.isEnabledToggleButton()) {
          return;
        }

        // Prevent ARIA from playing over audio on click
        this.setAttribute('aria-hidden', 'true');

        if (self.audio.paused) {
          self.play();
        }
        else {
          self.pause();
        }
      })
      .on('focusout', function () {
        // Restore ARIA, required when playing longer audio and tabbing out and back in
        this.setAttribute('aria-hidden', 'false');
      });

    //Fit to wrapper
    if (this.params.fitToWrapper) {
      audioButton.css({
        'width': '100%',
        'height': '100%'
      });
    }

    // cpAutoplay is passed from coursepresentation
    if (this.params.autoplay) {
      self.play();
    }

    //Event listeners that change the look of the player depending on events.
    self.audio.addEventListener('ended', function () {
      audioButton
        .attr('aria-hidden', false)
        .attr('aria-label', self.params.playAudio)
        .removeClass(PAUSE_BUTTON)
        .removeClass(PLAY_BUTTON_PAUSED)
        .addClass(PLAY_BUTTON);
    });

    self.audio.addEventListener('play', function () {
      audioButton
        .attr('aria-label', self.params.pauseAudio)
        .removeClass(PLAY_BUTTON)
        .removeClass(PLAY_BUTTON_PAUSED)
        .addClass(PAUSE_BUTTON);
    });

    self.audio.addEventListener('pause', function () {
      audioButton
        .attr('aria-hidden', false)
        .attr('aria-label', self.params.playAudio)
        .removeClass(PAUSE_BUTTON)
        .addClass(PLAY_BUTTON_PAUSED);
    });

    this.$audioButton = audioButton;
    //Scale icon to container
    self.resize();
  };

  /**
   * Resizes the audio player icon when the wrapper is resized.
   */
  C.prototype.resize = function () {
    // Find the smallest value of height and width, and use it to choose the font size.
    if (this.params.fitToWrapper && this.$container && this.$container.width()) {
      var w = this.$container.width();
      var h = this.$container.height();
      if (w < h) {
        this.$audioButton.css({'font-size': w / 2 + 'px'});
      }
      else {
        this.$audioButton.css({'font-size': h / 2 + 'px'});
      }
    }
  };


  return C;
})(H5P.jQuery);

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 *
 * @param {jQuery} $wrapper Our poor container.
 */
H5P.Audio.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-audio-wrapper');

  // Check if browser supports audio.
  var audio = document.createElement('audio');
  if (audio.canPlayType === undefined) {
    // Try flash
    this.attachFlash($wrapper);
    return;
  }

  // Add supported source files.
  if (this.params.files !== undefined && this.params.files instanceof Object) {
    for (var i = 0; i < this.params.files.length; i++) {
      var file = this.params.files[i];

      if (audio.canPlayType(file.mime)) {
        var source = document.createElement('source');
        source.src = H5P.getPath(file.path, this.contentId);
        source.type = file.mime;
        audio.appendChild(source);
      }
    }
  }

  if (!audio.children.length) {
    // Try flash
    this.attachFlash($wrapper);
    return;
  }

  if (this.endedCallback !== undefined) {
    audio.addEventListener('ended', this.endedCallback, false);
  }

  audio.className = 'h5p-audio';
  audio.controls = this.params.controls === undefined ? true : this.params.controls;

  // Menu removed, because it's cut off if audio is used as H5P.Question intro
  const controlsList = 'nodownload noplaybackrate';
  audio.setAttribute('controlsList', controlsList);

  audio.preload = 'auto';
  audio.style.display = 'block';

  if (this.params.fitToWrapper === undefined || this.params.fitToWrapper) {
    audio.style.width = '100%';
    if (!this.isRoot()) {
      // Only set height if this isn't a root
      audio.style.height = '100%';
    }
  }

  this.audio = audio;

  if (this.params.playerMode === 'minimalistic') {
    audio.controls = false;
    this.addMinimalAudioPlayer($wrapper, false);
  }
  else if (this.params.playerMode === 'transparent') {
    audio.controls = false;
    this.addMinimalAudioPlayer($wrapper, true);
  }
  else {
    audio.autoplay = this.params.autoplay === undefined ? false : this.params.autoplay;
    $wrapper.html(audio);
  }

  if (audio.controls) {
    $wrapper.addClass('h5p-audio-controls');
  }

  // Set time to saved time from previous run
  if (this.oldTime) {
    this.seekTo(this.oldTime);
  }
};

/**
 * Attaches a flash audio player to the wrapper.
 *
 * @param {jQuery} $wrapper Our dear container.
 */
H5P.Audio.prototype.attachFlash = function ($wrapper) {
  if (this.params.files !== undefined && this.params.files instanceof Object) {
    for (var i = 0; i < this.params.files.length; i++) {
      var file = this.params.files[i];
      if (file.mime === 'audio/mpeg' || file.mime === 'audio/mp3') {
        var audioSource = H5P.getPath(file.path, this.contentId);
        break;
      }
    }
  }

  if (audioSource === undefined) {
    $wrapper.addClass('h5p-audio-not-supported');
    $wrapper.html(
      '<div class="h5p-audio-inner">' +
        '<div class="h5p-audio-not-supported-icon"><span/></div>' +
        '<span>' + this.params.audioNotSupported + '</span>' +
      '</div>'
    );

    if (this.endedCallback !== undefined) {
      this.endedCallback();
    }
    return;
  }

  var options = {
    buffering: true,
    clip: {
      url: window.location.protocol + '//' + window.location.host + audioSource,
      autoPlay: this.params.autoplay === undefined ? false : this.params.autoplay,
      scaling: 'fit'
    },
    plugins: {
      controls: null
    }
  };

  if (this.params.controls === undefined || this.params.controls) {
    options.plugins.controls = {
      fullscreen: false,
      autoHide: false
    };
  }

  if (this.endedCallback !== undefined) {
    options.clip.onFinish = this.endedCallback;
    options.clip.onError = this.endedCallback;
  }

  this.flowplayer = flowplayer($wrapper[0], {
    src: "http://releases.flowplayer.org/swf/flowplayer-3.2.16.swf",
    wmode: "opaque"
  }, options);
};

/**
 * Stop the audio. TODO: Rename to pause?
 *
 * @returns {undefined}
 */
H5P.Audio.prototype.stop = function () {
  if (this.flowplayer !== undefined) {
    this.flowplayer.stop().close().unload();
  }
  if (this.audio !== undefined) {
    this.audio.pause();
  }
};

/**
 * Play
 */
H5P.Audio.prototype.play = function () {
  if (this.flowplayer !== undefined) {
    this.flowplayer.play();
  }
  if (this.audio !== undefined) {
    this.audio.play();
  }
};

/**
 * @public
 * Pauses the audio.
 */
H5P.Audio.prototype.pause = function () {
  if (this.audio !== undefined) {
    this.audio.pause();
  }
};

/**
 * @public
 * Seek to audio position.
 *
 * @param {number} seekTo Time to seek to in seconds.
 */
H5P.Audio.prototype.seekTo = function (seekTo) {
  if (this.audio !== undefined) {
    this.audio.currentTime = seekTo;
  }
};

/**
 * @public
 * Get current state for resetting it later.
 *
 * @returns {object} Current state.
 */
H5P.Audio.prototype.getCurrentState = function () {
  if (this.audio !== undefined) {
    const currentTime = this.audio.ended ? 0 : this.audio.currentTime;
    return {
      currentTime: currentTime
    };
  }
};

/**
 * @public
 * Disable button.
 * Not using disabled attribute to block button activation, because it will
 * implicitly set tabindex = -1 and confuse ChromeVox navigation. Clicks handled
 * using "pointer-events: none" in CSS.
 */
H5P.Audio.prototype.disableToggleButton = function () {
  this.toggleButtonEnabled = false;
  if (this.$audioButton) {
    this.$audioButton.addClass(H5P.Audio.BUTTON_DISABLED);
  }
};

/**
 * @public
 * Enable button.
 */
H5P.Audio.prototype.enableToggleButton = function () {
  this.toggleButtonEnabled = true;
  if (this.$audioButton) {
    this.$audioButton.removeClass(H5P.Audio.BUTTON_DISABLED);
  }
};

/**
 * @public
 * Check if button is enabled.
 * @return {boolean} True, if button is enabled. Else false.
 */
H5P.Audio.prototype.isEnabledToggleButton = function () {
  return this.toggleButtonEnabled;
};

/** @constant {string} */
H5P.Audio.BUTTON_DISABLED = 'h5p-audio-disabled';
;/** @namespace H5P */
H5P.VideoYouTube = (function ($) {

  /**
   * YouTube video player for H5P.
   *
   * @class
   * @param {Array} sources Video files to use
   * @param {Object} options Settings for the player
   * @param {Object} l10n Localization strings
   */
  function YouTube(sources, options, l10n) {
    var self = this;

    var player;
    var playbackRate = 1;
    var id = 'h5p-youtube-' + numInstances;
    numInstances++;

    var $wrapper = $('<div/>');
    var $placeholder = $('<div/>', {
      id: id,
      text: l10n.loading
    }).appendTo($wrapper);

    // Optional placeholder
    // var $placeholder = $('<iframe id="' + id + '" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/' + getId(sources[0].path) + '?enablejsapi=1&origin=' + encodeURIComponent(ORIGIN) + '&autoplay=' + (options.autoplay ? 1 : 0) + '&controls=' + (options.controls ? 1 : 0) + '&disabledkb=' + (options.controls ? 0 : 1) + '&fs=0&loop=' + (options.loop ? 1 : 0) + '&rel=0&showinfo=0&iv_load_policy=3" frameborder="0"></iframe>').appendTo($wrapper);

    /**
     * Use the YouTube API to create a new player
     *
     * @private
     */
    var create = function () {
      if (!$placeholder.is(':visible') || player !== undefined) {
        return;
      }

      if (window.YT === undefined) {
        // Load API first
        loadAPI(create);
        return;
      }
      if (YT.Player === undefined) {
        return;
      }

      var width = $wrapper.width();
      if (width < 200) {
        width = 200;
      }

      var loadCaptionsModule = true;

      var videoId = getId(sources[0].path);

      player = new YT.Player(id, {
        width: width,
        height: width * (9/16),
        videoId: videoId,
        playerVars: {
          origin: ORIGIN,
          autoplay: options.autoplay ? 1 : 0,
          controls: options.controls ? 1 : 0,
          disablekb: options.controls ? 0 : 1,
          fs: 0,
          loop: options.loop ? 1 : 0,
          playlist: options.loop ? videoId : undefined,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          wmode: "opaque",
          start: options.startAt,
          playsinline: 1
        },
        events: {
          onReady: function () {
            self.trigger('ready');
            self.trigger('loaded');
          },
          onApiChange: function () {
            if (loadCaptionsModule) {
              loadCaptionsModule = false;

              // Always load captions
              player.loadModule('captions');
            }

            var trackList;
            try {
              // Grab tracklist from player
              trackList = player.getOption('captions', 'tracklist');
            }
            catch (err) {}
            if (trackList && trackList.length) {

              // Format track list into valid track options
              var trackOptions = [];
              for (var i = 0; i < trackList.length; i++) {
                trackOptions.push(new H5P.Video.LabelValue(trackList[i].displayName, trackList[i].languageCode));
              }

              // Captions are ready for loading
              self.trigger('captions', trackOptions);
            }
          },
          onStateChange: function (state) {
            if (state.data > -1 && state.data < 4) {

              // Fix for keeping playback rate in IE11
              if (H5P.Video.IE11_PLAYBACK_RATE_FIX && state.data === H5P.Video.PLAYING && playbackRate !== 1) {
                // YT doesn't know that IE11 changed the rate so it must be reset before it's set to the correct value
                player.setPlaybackRate(1);
                player.setPlaybackRate(playbackRate);
              }
              // End IE11 fix

              self.trigger('stateChange', state.data);
            }
          },
          onPlaybackQualityChange: function (quality) {
            self.trigger('qualityChange', quality.data);
          },
          onPlaybackRateChange: function (playbackRate) {
            self.trigger('playbackRateChange', playbackRate.data);
          },
          onError: function (error) {
            var message;
            switch (error.data) {
              case 2:
                message = l10n.invalidYtId;
                break;

              case 100:
                message = l10n.unknownYtId;
                break;

              case 101:
              case 150:
                message = l10n.restrictedYt;
                break;

              default:
                message = l10n.unknownError + ' ' + error.data;
                break;
            }
            self.trigger('error', message);
          }
        }
      });
    };

    /**
     * Indicates if the video must be clicked for it to start playing.
     * For instance YouTube videos on iPad must be pressed to start playing.
     *
     * @public
     */
    self.pressToPlay = navigator.userAgent.match(/iPad/i) ? true : false;

    /**
    * Appends the video player to the DOM.
    *
    * @public
    * @param {jQuery} $container
    */
    self.appendTo = function ($container) {
      $container.addClass('h5p-youtube').append($wrapper);
      create();
    };

    /**
     * Get list of available qualities. Not available until after play.
     *
     * @public
     * @returns {Array}
     */
    self.getQualities = function () {
      if (!player || !player.getAvailableQualityLevels) {
        return;
      }

      var qualities = player.getAvailableQualityLevels();
      if (!qualities.length) {
        return; // No qualities
      }

      // Add labels
      for (var i = 0; i < qualities.length; i++) {
        var quality = qualities[i];
        var label = (LABELS[quality] !== undefined ? LABELS[quality] : 'Unknown'); // TODO: l10n
        qualities[i] = {
          name: quality,
          label: LABELS[quality]
        };
      }

      return qualities;
    };

    /**
     * Get current playback quality. Not available until after play.
     *
     * @public
     * @returns {String}
     */
    self.getQuality = function () {
      if (!player || !player.getPlaybackQuality) {
        return;
      }

      var quality = player.getPlaybackQuality();
      return quality === 'unknown' ? undefined : quality;
    };

    /**
     * Set current playback quality. Not available until after play.
     * Listen to event "qualityChange" to check if successful.
     *
     * @public
     * @params {String} [quality]
     */
    self.setQuality = function (quality) {
      if (!player || !player.setPlaybackQuality) {
        return;
      }

      player.setPlaybackQuality(quality);
    };

    /**
     * Start the video.
     *
     * @public
     */
    self.play = function () {
      if (!player || !player.playVideo) {
        self.on('ready', self.play);
        return;
      }

      player.playVideo();
    };

    /**
     * Pause the video.
     *
     * @public
     */
    self.pause = function () {
      self.off('ready', self.play);
      if (!player || !player.pauseVideo) {
        return;
      }
      player.pauseVideo();
    };

    /**
     * Seek video to given time.
     *
     * @public
     * @param {Number} time
     */
    self.seek = function (time) {
      if (!player || !player.seekTo) {
        return;
      }

      player.seekTo(time, true);
    };

    /**
     * Get elapsed time since video beginning.
     *
     * @public
     * @returns {Number}
     */
    self.getCurrentTime = function () {
      if (!player || !player.getCurrentTime) {
        return;
      }

      return player.getCurrentTime();
    };

    /**
     * Get total video duration time.
     *
     * @public
     * @returns {Number}
     */
    self.getDuration = function () {
      if (!player || !player.getDuration) {
        return;
      }

      return player.getDuration();
    };

    /**
     * Get percentage of video that is buffered.
     *
     * @public
     * @returns {Number} Between 0 and 100
     */
    self.getBuffered = function () {
      if (!player || !player.getVideoLoadedFraction) {
        return;
      }

      return player.getVideoLoadedFraction() * 100;
    };

    /**
     * Turn off video sound.
     *
     * @public
     */
    self.mute = function () {
      if (!player || !player.mute) {
        return;
      }

      player.mute();
    };

    /**
     * Turn on video sound.
     *
     * @public
     */
    self.unMute = function () {
      if (!player || !player.unMute) {
        return;
      }

      player.unMute();
    };

    /**
     * Check if video sound is turned on or off.
     *
     * @public
     * @returns {Boolean}
     */
    self.isMuted = function () {
      if (!player || !player.isMuted) {
        return;
      }

      return player.isMuted();
    };

    /**
     * Return the video sound level.
     *
     * @public
     * @returns {Number} Between 0 and 100.
     */
    self.getVolume = function () {
      if (!player || !player.getVolume) {
        return;
      }

      return player.getVolume();
    };

    /**
     * Set video sound level.
     *
     * @public
     * @param {Number} level Between 0 and 100.
     */
    self.setVolume = function (level) {
      if (!player || !player.setVolume) {
        return;
      }

      player.setVolume(level);
    };

    /**
     * Get list of available playback rates.
     *
     * @public
     * @returns {Array} available playback rates
     */
    self.getPlaybackRates = function () {
      if (!player || !player.getAvailablePlaybackRates) {
        return;
      }

      var playbackRates = player.getAvailablePlaybackRates();
      if (!playbackRates.length) {
        return; // No rates, but the array should contain at least 1
      }

      return playbackRates;
    };

    /**
     * Get current playback rate.
     *
     * @public
     * @returns {Number} such as 0.25, 0.5, 1, 1.25, 1.5 and 2
     */
    self.getPlaybackRate = function () {
      if (!player || !player.getPlaybackRate) {
        return;
      }

      return player.getPlaybackRate();
    };

    /**
     * Set current playback rate.
     * Listen to event "playbackRateChange" to check if successful.
     *
     * @public
     * @params {Number} suggested rate that may be rounded to supported values
     */
    self.setPlaybackRate = function (newPlaybackRate) {
      if (!player || !player.setPlaybackRate) {
        return;
      }

      playbackRate = Number(newPlaybackRate);
      player.setPlaybackRate(playbackRate);
    };

    /**
     * Set current captions track.
     *
     * @param {H5P.Video.LabelValue} Captions track to show during playback
     */
    self.setCaptionsTrack = function (track) {
      player.setOption('captions', 'track', track ? {languageCode: track.value} : {});
    };

    /**
     * Figure out which captions track is currently used.
     *
     * @return {H5P.Video.LabelValue} Captions track
     */
    self.getCaptionsTrack = function () {
      var track = player.getOption('captions', 'track');
      return (track.languageCode ? new H5P.Video.LabelValue(track.displayName, track.languageCode) : null);
    };

    // Respond to resize events by setting the YT player size.
    self.on('resize', function () {
      if (!$wrapper.is(':visible')) {
        return;
      }

      if (!player) {
        // Player isn't created yet. Try again.
        create();
        return;
      }

      // Use as much space as possible
      $wrapper.css({
        width: '100%',
        height: '100%'
      });

      var width = $wrapper[0].clientWidth;
      var height = options.fit ? $wrapper[0].clientHeight : (width * (9/16));
      
      // Validate height before setting
      if (height > 0) {
        // Set size
        $wrapper.css({
          width: width + 'px',
          height: height + 'px'
        });

        player.setSize(width, height);
      }
    });
  }

  /**
   * Check to see if we can play any of the given sources.
   *
   * @public
   * @static
   * @param {Array} sources
   * @returns {Boolean}
   */
  YouTube.canPlay = function (sources) {
    return getId(sources[0].path);
  };

  /**
   * Find id of YouTube video from given URL.
   *
   * @private
   * @param {String} url
   * @returns {String} YouTube video identifier
   */

  var getId = function (url) {
    // Has some false positives, but should cover all regular URLs that people can find
    var matches = url.match(/(?:(?:youtube.com\/(?:attribution_link\?(?:\S+))?(?:v\/|embed\/|watch\/|(?:user\/(?:\S+)\/)?watch(?:\S+)v\=))|(?:youtu.be\/|y2u.be\/))([A-Za-z0-9_-]{11})/i);
    if (matches && matches[1]) {
      return matches[1];
    }
  };

  /**
   * Load the IFrame Player API asynchronously.
   */
  var loadAPI = function (loaded) {
    if (window.onYouTubeIframeAPIReady !== undefined) {
      // Someone else is loading, hook in
      var original = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function (id) {
        loaded(id);
        original(id);
      };
    }
    else {
      // Load the API our self
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = loaded;
    }
  };

  /** @constant {Object} */
  var LABELS = {
    highres: '2160p', // Old API support
    hd2160: '2160p', // (New API)
    hd1440: '1440p',
    hd1080: '1080p',
    hd720: '720p',
    large: '480p',
    medium: '360p',
    small: '240p',
    tiny: '144p',
    auto: 'Auto'
  };

  /** @private */
  var numInstances = 0;

  // Extract the current origin (used for security)
  var ORIGIN = window.location.href.match(/http[s]?:\/\/[^\/]+/);
  ORIGIN = !ORIGIN || ORIGIN[0] === undefined ? undefined : ORIGIN[0];
  // ORIGIN = undefined is needed to support fetching file from device local storage

  return YouTube;
})(H5P.jQuery);

// Register video handler
H5P.videoHandlers = H5P.videoHandlers || [];
H5P.videoHandlers.push(H5P.VideoYouTube);
;/** @namespace H5P */
H5P.VideoPanopto = (function ($) {

  /**
   * Panopto video player for H5P.
   *
   * @class
   * @param {Array} sources Video files to use
   * @param {Object} options Settings for the player
   * @param {Object} l10n Localization strings
   */
  function Panopto(sources, options, l10n) {
    var self = this;

    var player;
    var playbackRate = 1;
    var id = 'h5p-panopto-' + numInstances;
    numInstances++;

    var $wrapper = $('<div/>');
    var $placeholder = $('<div/>', {
      id: id,
      html: '<div>' + l10n.loading + '</div>'
    }).appendTo($wrapper);

    /**
     * Use the Panopto API to create a new player
     *
     * @private
     */
    var create = function () {
      if (!$placeholder.is(':visible') || player !== undefined) {
        return;
      }

      if (window.EmbedApi === undefined) {
        // Load API first
        loadAPI(create);
        return;
      }

      var width = $wrapper.width();
      if (width < 200) {
        width = 200;
      }

      const videoId = getId(sources[0].path);

      player = new EmbedApi(id, {
        width: width,
        height: width * (9/16),
        serverName: videoId[0],
        sessionId: videoId[1],
        videoParams: { // Optional
          interactivity: 'none',
          showtitle: false,
          autohide: true,
          offerviewer: false,
          autoplay: !!options.autoplay,
          showbrand: false,
          start: 0,
          hideoverlay: !options.controls,
        },
        events: {
          onIframeReady: function () {
            $placeholder.children(0).text('');
            player.loadVideo();
          },
          onReady: function () {
            self.trigger('loaded');
            if (player.hasCaptions()) {
              const captions = [];

              const captionTracks = player.getCaptionTracks();
              for (trackIndex in captionTracks) {
                captions.push(new H5P.Video.LabelValue(captionTracks[trackIndex], trackIndex));
              }

              // Select active track
              currentTrack = player.getSelectedCaptionTrack();
              currentTrack = captions[currentTrack] ? captions[currentTrack] : null;

              self.trigger('captions', captions);
            }
            self.pause();
          },
          onStateChange: function (state) {
            // TODO: Playback rate fix for IE11?
            if (state > -1 && state < 4) {
              self.trigger('stateChange', state);
            }
          },
          onPlaybackRateChange: function () {
            self.trigger('playbackRateChange', self.getPlaybackRate());
          },
          onError: function () {
            self.trigger('error', l10n.unknownError);
          },
          onLoginShown: function () {
            $placeholder.children().first().remove(); // Remove loading message
            self.trigger('loaded'); // Resize parent
          }
        }
      });
    };

    /**
     * Indicates if the video must be clicked for it to start playing.
     * This is always true for Panopto since all videos auto play.
     *
     * @public
     */
    self.pressToPlay = true;

    /**
    * Appends the video player to the DOM.
    *
    * @public
    * @param {jQuery} $container
    */
    self.appendTo = function ($container) {
      $container.addClass('h5p-panopto').append($wrapper);
      create();
    };

    /**
     * Get list of available qualities. Not available until after play.
     *
     * @public
     * @returns {Array}
     */
    self.getQualities = function () {
      // Not available for Panopto
    };

    /**
     * Get current playback quality. Not available until after play.
     *
     * @public
     * @returns {String}
     */
    self.getQuality = function () {
      // Not available for Panopto
    };

    /**
     * Set current playback quality. Not available until after play.
     * Listen to event "qualityChange" to check if successful.
     *
     * @public
     * @params {String} [quality]
     */
    self.setQuality = function (quality) {
      // Not available for Panopto
    };

    /**
     * Start the video.
     *
     * @public
     */
    self.play = function () {
      if (!player || !player.playVideo) {
        return;
      }
      player.playVideo();
    };

    /**
     * Pause the video.
     *
     * @public
     */
    self.pause = function () {
      if (!player || !player.pauseVideo) {
        return;
      }
      try {
        player.pauseVideo();
      }
      catch (err) {
        // Swallow Panopto throwing an error. This has been seen in the authoring
        // tool if Panopto has been used inside Iv inside CP 
      }
    };

    /**
     * Seek video to given time.
     *
     * @public
     * @param {Number} time
     */
    self.seek = function (time) {
      if (!player || !player.seekTo) {
        return;
      }

      player.seekTo(time);
    };

    /**
     * Get elapsed time since video beginning.
     *
     * @public
     * @returns {Number}
     */
    self.getCurrentTime = function () {
      if (!player || !player.getCurrentTime) {
        return;
      }

      return player.getCurrentTime();
    };

    /**
     * Get total video duration time.
     *
     * @public
     * @returns {Number}
     */
    self.getDuration = function () {
      if (!player || !player.getDuration) {
        return;
      }

      return player.getDuration();
    };

    /**
     * Get percentage of video that is buffered.
     *
     * @public
     * @returns {Number} Between 0 and 100
     */
    self.getBuffered = function () {
      // Not available for Panopto
    };

    /**
     * Turn off video sound.
     *
     * @public
     */
    self.mute = function () {
      if (!player || !player.muteVideo) {
        return;
      }

      player.muteVideo();
    };

    /**
     * Turn on video sound.
     *
     * @public
     */
    self.unMute = function () {
      if (!player || !player.unmuteVideo) {
        return;
      }

      player.unmuteVideo();
    };

    /**
     * Check if video sound is turned on or off.
     *
     * @public
     * @returns {Boolean}
     */
    self.isMuted = function () {
      if (!player || !player.isMuted) {
        return;
      }

      return player.isMuted();
    };

    /**
     * Return the video sound level.
     *
     * @public
     * @returns {Number} Between 0 and 100.
     */
    self.getVolume = function () {
      if (!player || !player.getVolume) {
        return;
      }

      return player.getVolume() * 100;
    };

    /**
     * Set video sound level.
     *
     * @public
     * @param {Number} level Between 0 and 100.
     */
    self.setVolume = function (level) {
      if (!player || !player.setVolume) {
        return;
      }

      player.setVolume(level/100);
    };

    /**
     * Get list of available playback rates.
     *
     * @public
     * @returns {Array} available playback rates
     */
    self.getPlaybackRates = function () {
      return [0.25, 0.5, 1, 1.25, 1.5, 2];
    };

    /**
     * Get current playback rate.
     *
     * @public
     * @returns {Number} such as 0.25, 0.5, 1, 1.25, 1.5 and 2
     */
    self.getPlaybackRate = function () {
      if (!player || !player.getPlaybackRate) {
        return;
      }

      return player.getPlaybackRate();
    };

    /**
     * Set current playback rate.
     * Listen to event "playbackRateChange" to check if successful.
     *
     * @public
     * @params {Number} suggested rate that may be rounded to supported values
     */
    self.setPlaybackRate = function (newPlaybackRate) {
      if (!player || !player.setPlaybackRate) {
        return;
      }

      player.setPlaybackRate(newPlaybackRate);
    };

    /**
     * Set current captions track.
     *
     * @param {H5P.Video.LabelValue} Captions track to show during playback
     */
    self.setCaptionsTrack = function (track) {
      if (!track) {
        console.log('Disable captions');
        player.disableCaptions();
        currentTrack = null;
      }
      else {
        console.log('Set captions', track.value);
        player.enableCaptions(track.value + '');
        currentTrack = track;
      }
    };

    /**
     * Figure out which captions track is currently used.
     *
     * @return {H5P.Video.LabelValue} Captions track
     */
    self.getCaptionsTrack = function () {
      return currentTrack; // No function for getting active caption track?
    };

    // Respond to resize events by setting the player size.
    self.on('resize', function () {
      if (!$wrapper.is(':visible')) {
        return;
      }

      if (!player) {
        // Player isn't created yet. Try again.
        create();
        return;
      }

      // Use as much space as possible
      $wrapper.css({
        width: '100%',
        height: '100%'
      });

      var width = $wrapper[0].clientWidth;
      var height = options.fit ? $wrapper[0].clientHeight : (width * (9/16));

      // Set size
      $wrapper.css({
        width: width + 'px',
        height: height + 'px'
      });

      const $iframe = $placeholder.children('iframe');
      if ($iframe.length) {
        $iframe.attr('width', width);
        $iframe.attr('height', height);
      }
    });

    let currentTrack;
  }

  /**
   * Check to see if we can play any of the given sources.
   *
   * @public
   * @static
   * @param {Array} sources
   * @returns {Boolean}
   */
  Panopto.canPlay = function (sources) {
    return getId(sources[0].path);
  };

  /**
   * Find id of YouTube video from given URL.
   *
   * @private
   * @param {String} url
   * @returns {String} Panopto video identifier
   */
  var getId = function (url) {
    const matches = url.match(/^[^\/]+:\/\/([^\/]*panopto\.[^\/]+)\/Panopto\/.+\?id=(.+)$/);
    if (matches && matches.length === 3) {
      return [matches[1], matches[2]];
    }
  };

  /**
   * Load the IFrame Player API asynchronously.
   */
  var loadAPI = function (loaded) {
    if (window.onPanoptoEmbedApiReady !== undefined) {
      // Someone else is loading, hook in
      var original = window.onPanoptoEmbedApiReady;
      window.onPanoptoEmbedApiReady = function (id) {
        loaded(id);
        original(id);
      };
    }
    else {
      // Load the API our self
      var tag = document.createElement('script');
      tag.src = 'https://developers.panopto.com/scripts/embedapi.min.js';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onPanoptoEmbedApiReady = loaded;
    }
  };

  /** @private */
  var numInstances = 0;

  return Panopto;
})(H5P.jQuery);

// Register video handler
H5P.videoHandlers = H5P.videoHandlers || [];
H5P.videoHandlers.push(H5P.VideoPanopto);
;/** @namespace H5P */
H5P.VideoHtml5 = (function ($) {

  /**
   * HTML5 video player for H5P.
   *
   * @class
   * @param {Array} sources Video files to use
   * @param {Object} options Settings for the player
   * @param {Object} l10n Localization strings
   */
  function Html5(sources, options, l10n) {
    var self = this;

    /**
     * Small helper to ensure all video sources get the same cache buster.
     *
     * @private
     * @param {Object} source
     * @return {string}
     */
    const getCrossOriginPath = function (source) {
      let path = H5P.getPath(source.path, self.contentId);
      if (video.crossOrigin !== null && H5P.addQueryParameter && H5PIntegration.crossoriginCacheBuster) {
        path = H5P.addQueryParameter(path, H5PIntegration.crossoriginCacheBuster);
      }
      return path
    };


    /**
     * Register track to video
     *
     * @param {Object} trackData Track object
     * @param {string} trackData.kind Kind of track
     * @param {Object} trackData.track Source path
     * @param {string} [trackData.label] Label of track
     * @param {string} [trackData.srcLang] Language code
     */
    const addTrack = function (trackData) {
      // Skip invalid tracks
      if (!trackData.kind || !trackData.track.path) {
        return;
      }

      var track = document.createElement('track');
      track.kind = trackData.kind;
      track.src = getCrossOriginPath(trackData.track); // Uses same crossOrigin as parent. You cannot mix.
      if (trackData.label) {
        track.label = trackData.label;
      }

      if (trackData.srcLang) {
        track.srcLang = trackData.srcLang;
      }

      return track;
    };

    /**
     * Small helper to set the inital video source.
     * Useful if some of the loading happens asynchronously.
     * NOTE: Setting the crossOrigin must happen before any of the
     * sources(poster, tracks etc.) are loaded
     *
     * @private
     */
    const setInitialSource = function () {
      if (qualities[currentQuality] === undefined) {
        return;
      }

      if (H5P.setSource !== undefined) {
        H5P.setSource(video, qualities[currentQuality].source, self.contentId)
      }
      else {
        // Backwards compatibility (H5P < v1.22)
        const srcPath = H5P.getPath(qualities[currentQuality].source.path, self.contentId);
        if (H5P.getCrossOrigin !== undefined) {
          var crossOrigin = H5P.getCrossOrigin(srcPath);
          video.setAttribute('crossorigin', crossOrigin !== null ? crossOrigin : 'anonymous');
        }
        video.src = srcPath;
      }

      // Add poster if provided
      if (options.poster) {
        video.poster = getCrossOriginPath(options.poster); // Uses same crossOrigin as parent. You cannot mix.
      }

      // Register tracks
      options.tracks.forEach(function (track, i) {
        var trackElement = addTrack(track);
        if (i === 0) {
          trackElement.default = true;
        }
        if (trackElement) {
          video.appendChild(trackElement);
        }
      });
    };

    /**
     * Displayed when the video is buffering
     * @private
     */
    var $throbber = $('<div/>', {
      'class': 'h5p-video-loading'
    });

    /**
     * Used to display error messages
     * @private
     */
    var $error = $('<div/>', {
      'class': 'h5p-video-error'
    });

    /**
     * Keep track of current state when changing quality.
     * @private
     */
    var stateBeforeChangingQuality;
    var currentTimeBeforeChangingQuality;

    /**
     * Avoids firing the same event twice.
     * @private
     */
    var lastState;

    /**
     * Keeps track whether or not the video has been loaded.
     * @private
     */
    var isLoaded = false;

    /**
     *
     * @private
     */
    var playbackRate = 1;
    var skipRateChange = false;

    // Create player
    var video = document.createElement('video');

    // Sort sources into qualities
    var qualities = getQualities(sources, video);
    var currentQuality;

    numQualities = 0;
    for (let quality in qualities) {
      numQualities++;
    }

    if (numQualities > 1 && H5P.VideoHtml5.getExternalQuality !== undefined) {
      H5P.VideoHtml5.getExternalQuality(sources, function (chosenQuality) {
        if (qualities[chosenQuality] !== undefined) {
          currentQuality = chosenQuality;
        }
        setInitialSource();
      });
    }
    else {
      // Select quality and source
      currentQuality = getPreferredQuality();
      if (currentQuality === undefined || qualities[currentQuality] === undefined) {
        // No preferred quality, pick the first.
        for (currentQuality in qualities) {
          if (qualities.hasOwnProperty(currentQuality)) {
            break;
          }
        }
      }
      setInitialSource();
    }

    // Setting webkit-playsinline, which makes iOS 10 beeing able to play video
    // inside browser.
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('preload', 'metadata');

    // Remove buttons in Chrome's video player:
    let controlsList = 'nodownload';
    if (options.disableFullscreen) {
      controlsList += ' nofullscreen';
    }
    if (options.disableRemotePlayback) {
      controlsList += ' noremoteplayback';
    }
    video.setAttribute('controlsList', controlsList);

    // Remove picture in picture as it interfers with other video players
    video.disablePictureInPicture = true;

    // Set options
    video.disableRemotePlayback = (options.disableRemotePlayback ? true : false);
    video.controls = (options.controls ? true : false);
    video.autoplay = (options.autoplay ? true : false);
    video.loop = (options.loop ? true : false);
    video.className = 'h5p-video';
    video.style.display = 'block';

    if (options.fit) {
      // Style is used since attributes with relative sizes aren't supported by IE9.
      video.style.width = '100%';
      video.style.height = '100%';
    }

    /**
     * Helps registering events.
     *
     * @private
     * @param {String} native Event name
     * @param {String} h5p Event name
     * @param {String} [arg] Optional argument
     */
    var mapEvent = function (native, h5p, arg) {
      video.addEventListener(native, function () {
        switch (h5p) {
          case 'stateChange':
            if (lastState === arg) {
              return; // Avoid firing event twice.
            }

            var validStartTime = options.startAt && options.startAt > 0;
            if (arg === H5P.Video.PLAYING && validStartTime) {
              video.currentTime = options.startAt;
              delete options.startAt;
            }

            break;

          case 'loaded':
            isLoaded = true;

            if (stateBeforeChangingQuality !== undefined) {
              return; // Avoid loaded event when changing quality.
            }

            // Remove any errors
            if ($error.is(':visible')) {
              $error.remove();
            }

            if (OLD_ANDROID_FIX) {
              var andLoaded = function () {
                video.removeEventListener('durationchange', andLoaded, false);
                // On Android seeking isn't ready until after play.
                self.trigger(h5p);
              };
              video.addEventListener('durationchange', andLoaded, false);
              return;
            }
            break;

          case 'error':
            // Handle error and get message.
            arg = error(arguments[0], arguments[1]);
            break;

          case 'playbackRateChange':

            // Fix for keeping playback rate in IE11
            if (skipRateChange) {
              skipRateChange = false;
              return; // Avoid firing event when changing back
            }
            if (H5P.Video.IE11_PLAYBACK_RATE_FIX && playbackRate != video.playbackRate) { // Intentional
              // Prevent change in playback rate not triggered by the user
              video.playbackRate = playbackRate;
              skipRateChange = true;
              return;
            }
            // End IE11 fix

            arg = self.getPlaybackRate();
            break;
        }
        self.trigger(h5p, arg);
      }, false);
    };

    /**
     * Handle errors from the video player.
     *
     * @private
     * @param {Object} code Error
     * @param {String} [message]
     * @returns {String} Human readable error message.
     */
    var error = function (code, message) {
      if (code instanceof Event) {

        // No error code
        if (!code.target.error) {
          return '';
        }

        switch (code.target.error.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            message = l10n.aborted;
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            message = l10n.networkFailure;
            break;
          case MediaError.MEDIA_ERR_DECODE:
            message = l10n.cannotDecode;
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            message = l10n.formatNotSupported;
            break;
          case MediaError.MEDIA_ERR_ENCRYPTED:
            message = l10n.mediaEncrypted;
            break;
        }
      }
      if (!message) {
        message = l10n.unknownError;
      }

      // Hide throbber
      $throbber.remove();

      // Display error message to user
      $error.text(message).insertAfter(video);

      // Pass message to our error event
      return message;
    };

    /**
     * Appends the video player to the DOM.
     *
     * @public
     * @param {jQuery} $container
     */
    self.appendTo = function ($container) {
      $container.append(video);
    };

    /**
     * Get list of available qualities. Not available until after play.
     *
     * @public
     * @returns {Array}
     */
    self.getQualities = function () {
      // Create reverse list
      var options = [];
      for (var q in qualities) {
        if (qualities.hasOwnProperty(q)) {
          options.splice(0, 0, {
            name: q,
            label: qualities[q].label
          });
        }
      }

      if (options.length < 2) {
        // Do not return if only one quality.
        return;
      }

      return options;
    };

    /**
     * Get current playback quality. Not available until after play.
     *
     * @public
     * @returns {String}
     */
    self.getQuality = function () {
      return currentQuality;
    };

    /**
     * Set current playback quality. Not available until after play.
     * Listen to event "qualityChange" to check if successful.
     *
     * @public
     * @params {String} [quality]
     */
    self.setQuality = function (quality) {
      if (qualities[quality] === undefined || quality === currentQuality) {
        return; // Invalid quality
      }

      // Keep track of last choice
      setPreferredQuality(quality);

      // Avoid multiple loaded events if changing quality multiple times.
      if (!stateBeforeChangingQuality) {
        // Keep track of last state
        stateBeforeChangingQuality = lastState;

        // Keep track of current time
        currentTimeBeforeChangingQuality = video.currentTime;

        // Seek and start video again after loading.
        var loaded = function () {
          video.removeEventListener('loadedmetadata', loaded, false);
          if (OLD_ANDROID_FIX) {
            var andLoaded = function () {
              video.removeEventListener('durationchange', andLoaded, false);
              // On Android seeking isn't ready until after play.
              self.seek(currentTimeBeforeChangingQuality);
            };
            video.addEventListener('durationchange', andLoaded, false);
          }
          else {
            // Seek to current time.
            self.seek(currentTimeBeforeChangingQuality);
          }

          // Always play to get image.
          video.play();

          if (stateBeforeChangingQuality !== H5P.Video.PLAYING) {
            // Do not resume playing
            video.pause();
          }

          // Done changing quality
          stateBeforeChangingQuality = undefined;

          // Remove any errors
          if ($error.is(':visible')) {
            $error.remove();
          }
        };
        video.addEventListener('loadedmetadata', loaded, false);
      }

      // Keep track of current quality
      currentQuality = quality;
      self.trigger('qualityChange', currentQuality);

      // Display throbber
      self.trigger('stateChange', H5P.Video.BUFFERING);

      // Change source
      video.src = getCrossOriginPath(qualities[quality].source); // (iPad does not support #t=).
      // Note: Optional tracks use same crossOrigin as the original. You cannot mix.

      // Remove poster so it will not show during quality change
      video.removeAttribute('poster');
    };

    /**
     * Starts the video.
     *
     * @public
     * @return {Promise|undefined} May return a Promise that resolves when
     * play has been processed.
     */
    self.play = function () {
      if ($error.is(':visible')) {
        return;
      }

      if (!isLoaded) {
        // Make sure video is loaded before playing
        video.load();
      }

      return video.play();
    };

    /**
     * Pauses the video.
     *
     * @public
     */
    self.pause = function () {
      video.pause();
    };

    /**
     * Seek video to given time.
     *
     * @public
     * @param {Number} time
     */
    self.seek = function (time) {
      if (lastState === undefined) {
        // Make sure we always play before we seek to get an image.
        // If not iOS devices will reset currentTime when pressing play.
        video.play();
        video.pause();
      }

      video.currentTime = time;
    };

    /**
     * Get elapsed time since video beginning.
     *
     * @public
     * @returns {Number}
     */
    self.getCurrentTime = function () {
      return video.currentTime;
    };

    /**
     * Get total video duration time.
     *
     * @public
     * @returns {Number}
     */
    self.getDuration = function () {
      if (isNaN(video.duration)) {
        return;
      }

      return video.duration;
    };

    /**
     * Get percentage of video that is buffered.
     *
     * @public
     * @returns {Number} Between 0 and 100
     */
    self.getBuffered = function () {
      // Find buffer currently playing from
      var buffered = 0;
      for (var i = 0; i < video.buffered.length; i++) {
        var from = video.buffered.start(i);
        var to = video.buffered.end(i);

        if (video.currentTime > from && video.currentTime < to) {
          buffered = to;
          break;
        }
      }

      // To percentage
      return buffered ? (buffered / video.duration) * 100 : 0;
    };

    /**
     * Turn off video sound.
     *
     * @public
     */
    self.mute = function () {
      video.muted = true;
    };

    /**
     * Turn on video sound.
     *
     * @public
     */
    self.unMute = function () {
      video.muted = false;
    };

    /**
     * Check if video sound is turned on or off.
     *
     * @public
     * @returns {Boolean}
     */
    self.isMuted = function () {
      return video.muted;
    };

    /**
     * Returns the video sound level.
     *
     * @public
     * @returns {Number} Between 0 and 100.
     */
    self.getVolume = function () {
      return video.volume * 100;
    };

    /**
     * Set video sound level.
     *
     * @public
     * @param {Number} level Between 0 and 100.
     */
    self.setVolume = function (level) {
      video.volume = level / 100;
    };

    /**
     * Get list of available playback rates.
     *
     * @public
     * @returns {Array} available playback rates
     */
    self.getPlaybackRates = function () {
      /*
       * not sure if there's a common rule about determining good speeds
       * using Google's standard options via a constant for setting
       */
      var playbackRates = PLAYBACK_RATES;

      return playbackRates;
    };

    /**
     * Get current playback rate.
     *
     * @public
     * @returns {Number} such as 0.25, 0.5, 1, 1.25, 1.5 and 2
     */
    self.getPlaybackRate = function () {
      return video.playbackRate;
    };

    /**
     * Set current playback rate.
     * Listen to event "playbackRateChange" to check if successful.
     *
     * @public
     * @params {Number} suggested rate that may be rounded to supported values
     */
    self.setPlaybackRate = function (newPlaybackRate) {
      playbackRate = newPlaybackRate;
      video.playbackRate = newPlaybackRate;
    };

    /**
     * Set current captions track.
     *
     * @param {H5P.Video.LabelValue} Captions track to show during playback
     */
    self.setCaptionsTrack = function (track) {
      for (var i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = (track && track.value === i ? 'showing' : 'disabled');
      }
    };

    /**
     * Figure out which captions track is currently used.
     *
     * @return {H5P.Video.LabelValue} Captions track
     */
    self.getCaptionsTrack = function () {
      for (var i = 0; i < video.textTracks.length; i++) {
        if (video.textTracks[i].mode === 'showing') {
          return new H5P.Video.LabelValue(video.textTracks[i].label, i);
        }
      }

      return null;
    };

    // Register event listeners
    mapEvent('ended', 'stateChange', H5P.Video.ENDED);
    mapEvent('playing', 'stateChange', H5P.Video.PLAYING);
    mapEvent('pause', 'stateChange', H5P.Video.PAUSED);
    mapEvent('waiting', 'stateChange', H5P.Video.BUFFERING);
    mapEvent('loadedmetadata', 'loaded');
    mapEvent('canplay', 'canplay');
    mapEvent('error', 'error');
    mapEvent('ratechange', 'playbackRateChange');

    if (!video.controls) {
      // Disable context menu(right click) to prevent controls.
      video.addEventListener('contextmenu', function (event) {
        event.preventDefault();
      }, false);
    }

    // Display throbber when buffering/loading video.
    self.on('stateChange', function (event) {
      var state = event.data;
      lastState = state;
      if (state === H5P.Video.BUFFERING) {
        $throbber.insertAfter(video);
      }
      else {
        $throbber.remove();
      }
    });

    // Load captions after the video is loaded
    self.on('loaded', function () {
      nextTick(function () {
        var textTracks = [];
        for (var i = 0; i < video.textTracks.length; i++) {
          textTracks.push(new H5P.Video.LabelValue(video.textTracks[i].label, i));
        }
        if (textTracks.length) {
          self.trigger('captions', textTracks);
        }
      });
    });

    // Alternative to 'canplay' event
    /*self.on('resize', function () {
      if (video.offsetParent === null) {
        return;
      }

      video.style.width = '100%';
      video.style.height = '100%';

      var width = video.clientWidth;
      var height = options.fit ? video.clientHeight : (width * (video.videoHeight / video.videoWidth));

      video.style.width = width + 'px';
      video.style.height = height + 'px';
    });*/

    // Video controls are ready
    nextTick(function () {
      self.trigger('ready');
    });
  }

  /**
   * Check to see if we can play any of the given sources.
   *
   * @public
   * @static
   * @param {Array} sources
   * @returns {Boolean}
   */
  Html5.canPlay = function (sources) {
    var video = document.createElement('video');
    if (video.canPlayType === undefined) {
      return false; // Not supported
    }

    // Cycle through sources
    for (var i = 0; i < sources.length; i++) {
      var type = getType(sources[i]);
      if (type && video.canPlayType(type) !== '') {
        // We should be able to play this
        return true;
      }
    }

    return false;
  };

  /**
   * Find source type.
   *
   * @private
   * @param {Object} source
   * @returns {String}
   */
  var getType = function (source) {
    var type = source.mime;
    if (!type) {
      // Try to get type from URL
      var matches = source.path.match(/\.(\w+)$/);
      if (matches && matches[1]) {
        type = 'video/' + matches[1];
      }
    }

    if (type && source.codecs) {
      // Add codecs
      type += '; codecs="' + source.codecs + '"';
    }

    return type;
  };

  /**
   * Sort sources into qualities.
   *
   * @private
   * @static
   * @param {Array} sources
   * @param {Object} video
   * @returns {Object} Quality mapping
   */
  var getQualities = function (sources, video) {
    var qualities = {};
    var qualityIndex = 1;
    var lastQuality;

    // Cycle through sources
    for (var i = 0; i < sources.length; i++) {
      var source = sources[i];

      // Find and update type.
      var type = source.type = getType(source);

      // Check if we support this type
      var isPlayable = type && (type === 'video/unknown' || video.canPlayType(type) !== '');
      if (!isPlayable) {
        continue; // We cannot play this source
      }

      if (source.quality === undefined) {
        /**
         * No quality metadata. Create a quality tag to separate multiple sources of the same type,
         * e.g. if two mp4 files with different quality has been uploaded
         */

        if (lastQuality === undefined || qualities[lastQuality].source.type === type) {
          // Create a new quality tag
          source.quality = {
            name: 'q' + qualityIndex,
            label: (source.metadata && source.metadata.qualityName) ? source.metadata.qualityName : 'Quality ' + qualityIndex // TODO: l10n
          };
          qualityIndex++;
        }
        else {
          /**
           * Assumes quality already exists in a different format.
           * Uses existing label for this quality.
           */
          source.quality = qualities[lastQuality].source.quality;
        }
      }

      // Log last quality
      lastQuality = source.quality.name;

      // Look to see if quality exists
      var quality = qualities[lastQuality];
      if (quality) {
        // We have a source with this quality. Check if we have a better format.
        if (source.mime.split('/')[1] === PREFERRED_FORMAT) {
          quality.source = source;
        }
      }
      else {
        // Add new source with quality.
        qualities[source.quality.name] = {
          label: source.quality.label,
          source: source
        };
      }
    }

    return qualities;
  };

  /**
   * Set preferred video quality.
   *
   * @private
   * @static
   * @param {String} quality Index of preferred quality
   */
  var setPreferredQuality = function (quality) {
    try {
      localStorage.setItem('h5pVideoQuality', quality);
    }
    catch (err) {
      console.warn('Unable to set preferred video quality, localStorage is not available.');
    }
  };

  /**
   * Get preferred video quality.
   *
   * @private
   * @static
   * @returns {String} Index of preferred quality
   */
  var getPreferredQuality = function () {
    // First check localStorage
    let quality;
    try {
      quality = localStorage.getItem('h5pVideoQuality');
    }
    catch (err) {
      console.warn('Unable to retrieve preferred video quality from localStorage.');
    }
    if (!quality) {
      try {
        // The fallback to old cookie solution
        var settings = document.cookie.split(';');
        for (var i = 0; i < settings.length; i++) {
          var setting = settings[i].split('=');
          if (setting[0] === 'H5PVideoQuality') {
            quality = setting[1];
            break;
          }
        }
      }
      catch (err) {
        console.warn('Unable to retrieve preferred video quality from cookie.');
      }
    }
    return quality;
  };

  /**
   * Helps schedule a task for the next tick.
   * @param {function} task
   */
  var nextTick = function (task) {
    setTimeout(task, 0);
  };

  /** @constant {Boolean} */
  var OLD_ANDROID_FIX = false;

  /** @constant {Boolean} */
  var PREFERRED_FORMAT = 'mp4';

  /** @constant {Object} */
  var PLAYBACK_RATES = [0.25, 0.5, 1, 1.25, 1.5, 2];

  if (navigator.userAgent.indexOf('Android') !== -1) {
    // We have Android, check version.
    var version = navigator.userAgent.match(/AppleWebKit\/(\d+\.?\d*)/);
    if (version && version[1] && Number(version[1]) <= 534.30) {
      // Include fix for devices running the native Android browser.
      // (We don't know when video was fixed, so the number is just the lastest
      // native android browser we found.)
      OLD_ANDROID_FIX = true;
    }
  }
  else {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      // If we're using chrome on a device that isn't Android, prefer the webm
      // format. This is because Chrome has trouble with some mp4 codecs.
      PREFERRED_FORMAT = 'webm';
    }
  }

  return Html5;
})(H5P.jQuery);

// Register video handler
H5P.videoHandlers = H5P.videoHandlers || [];
H5P.videoHandlers.push(H5P.VideoHtml5);
;/** @namespace H5P */
H5P.VideoFlash = (function ($) {

  /**
   * Flash video player for H5P.
   *
   * @class
   * @param {Array} sources Video files to use
   * @param {Object} options Settings for the player
   */
  function Flash(sources, options) {
    var self = this;

    // Player wrapper
    var $wrapper = $('<div/>', {
      'class': 'h5p-video-flash',
      css: {
        width: '100%',
        height: '100%'
      }
    });

    /**
     * Used to display error messages
     * @private
     */
    var $error = $('<div/>', {
      'class': 'h5p-video-error'
    });

    /**
    * Keep track of current state when changing quality.
    * @private
    */
    var stateBeforeChangingQuality;
    var currentTimeBeforeChangingQuality;

    // Sort sources into qualities
    //var qualities = getQualities(sources);
    var currentQuality;

    // Create player options
    var playerOptions = {
      buffering: true,
      clip: {
        url: sources[0].path, // getPreferredQuality(),
        autoPlay: options.autoplay,
        autoBuffering: true,
        scaling: 'fit',
        onSeek: function () {
          if (stateBeforeChangingQuality) {
            // ????
          }
        },
        onMetaData: function () {
          setTimeout(function () {
            if (stateBeforeChangingQuality !== undefined) {
              fp.seek(currentTimeBeforeChangingQuality);
              if (stateBeforeChangingQuality === H5P.Video.PLAYING) {
                // Resume play
                fp.play();
              }

              // Done changing quality
              stateBeforeChangingQuality = undefined;

              // Remove any errors
              if ($error.is(':visible')) {
                $error.remove();
              }
            }
            else {
              self.trigger('ready');
              self.trigger('loaded');
            }
          }, 0); // Run on next tick
        },
        onBegin: function () {
          self.trigger('stateChange', H5P.Video.PLAYING);
        },
        onResume: function () {
          self.trigger('stateChange', H5P.Video.PLAYING);
        },
        onPause: function () {
          self.trigger('stateChange', H5P.Video.PAUSED);
        },
        onFinish: function () {
          self.trigger('stateChange', H5P.Video.ENDED);
        },
        onError: function (code, message) {
          console.log('ERROR', code, message); // TODO
          self.trigger('error', message);
        }
      },
      plugins: {
        controls: null
      },
      play: null, // Disable overlay controls
      onPlaylistReplace: function () {
        that.playlistReplaced();
      }
    };

    if (options.controls) {
      playerOptions.plugins.controls = {};
      delete playerOptions.play;
    }

    var fp = flowplayer($wrapper[0], {
      src: "http://releases.flowplayer.org/swf/flowplayer-3.2.16.swf",
      wmode: "opaque"
    }, playerOptions);

    /**
     * Appends the video player to the DOM.
     *
     * @public
     * @param {jQuery} $container
     */
    self.appendTo = function ($container) {
      $wrapper.appendTo($container);
    };

    /**
     * Get list of available qualities. Not available until after play.
     *
     * @public
     * @returns {Array}
     */
    self.getQualities = function () {
      return;
    };

    /**
     * Get current playback quality. Not available until after play.
     *
     * @public
     * @returns {String}
     */
    self.getQuality = function () {
      return currentQuality;
    };

    /**
     * Set current playback quality. Not available until after play.
     * Listen to event "qualityChange" to check if successful.
     *
     * @public
     * @params {String} [quality]
     */
    self.setQuality = function (quality) {
      if (qualities[quality] === undefined || quality === currentQuality) {
        return; // Invalid quality
      }

      // Keep track of last choice
      setPreferredQuality(quality);

      // Avoid multiple loaded events if changing quality multiple times.
      if (!stateBeforeChangingQuality) {
        // Keep track of last state
        stateBeforeChangingQuality = lastState;

        // Keep track of current time
        currentTimeBeforeChangingQuality = video.currentTime;
      }

      // Keep track of current quality
      currentQuality = quality;
      self.trigger('qualityChange', currentQuality);

      // Display throbber
      self.trigger('stateChange', H5P.Video.BUFFERING);

      // Change source
      fp.setClip(qualities[quality].source.path);
      fp.startBuffering();
    };

    /**
     * Starts the video.
     *
     * @public
     */
    self.play = function () {
      if ($error.is(':visible')) {
        return;
      }

      fp.play();
    };

    /**
     * Pauses the video.
     *
     * @public
     */
    self.pause = function () {
      fp.pause();
    };

    /**
     * Seek video to given time.
     *
     * @public
     * @param {Number} time
     */
    self.seek = function (time) {
      fp.seek(time);
    };

    /**
     * Get elapsed time since video beginning.
     *
     * @public
     * @returns {Number}
     */
    self.getCurrentTime = function () {
      return fp.getTime();
    };

    /**
     * Get total video duration time.
     *
     * @public
     * @returns {Number}
     */
    self.getDuration = function () {
      return fp.getClip().metaData.duration;
    };

    /**
     * Get percentage of video that is buffered.
     *
     * @public
     * @returns {Number} Between 0 and 100
     */
    self.getBuffered = function () {
      return fp.getClip().buffer;
    };

    /**
     * Turn off video sound.
     *
     * @public
     */
    self.mute = function () {
      fp.mute();
    };

    /**
     * Turn on video sound.
     *
     * @public
     */
    self.unMute = function () {
      fp.unmute();
    };

    /**
     * Check if video sound is turned on or off.
     *
     * @public
     * @returns {Boolean}
     */
    self.isMuted = function () {
      return fp.muted;
    };

    /**
     * Returns the video sound level.
     *
     * @public
     * @returns {Number} Between 0 and 100.
     */
    self.getVolume = function () {
      return fp.volumeLevel * 100;
    };

    /**
     * Set video sound level.
     *
     * @public
     * @param {Number} volume Between 0 and 100.
     */
    self.setVolume = function (level) {
      fp.volume(level / 100);
    };

    // Handle resize events
    self.on('resize', function () {
      var $object = H5P.jQuery(fp.getParent()).children('object');
      var clip = fp.getClip();

      if (clip !== undefined) {
        $object.css('height', $object.width() * (clip.metaData.height / clip.metaData.width));
      }
    });
  }

  /**
   * Check to see if we can play any of the given sources.
   *
   * @public
   * @static
   * @param {Array} sources
   * @returns {Boolean}
   */
  Flash.canPlay = function (sources) {
    // Cycle through sources
    for (var i = 0; i < sources.length; i++) {
      if (sources[i].mime === 'video/mp4' || /\.mp4$/.test(sources[i].mime)) {
        return true; // We only play mp4
      }
    }
  };

  return Flash;
})(H5P.jQuery);

// Register video handler
H5P.videoHandlers = H5P.videoHandlers || [];
H5P.videoHandlers.push(H5P.VideoFlash);
;/** @namespace H5P */
H5P.Video = (function ($, ContentCopyrights, MediaCopyright, handlers) {

  /**
   * The ultimate H5P video player!
   *
   * @class
   * @param {Object} parameters Options for this library.
   * @param {Object} parameters.visuals Visual options
   * @param {Object} parameters.playback Playback options
   * @param {Object} parameters.a11y Accessibility options
   * @param {Boolean} [parameters.startAt] Start time of video 
   * @param {Number} id Content identifier
   */
  function Video(parameters, id) {
    var self = this;
    self.contentId = id;

    // Ref youtube.js - ipad & youtube - issue
    self.pressToPlay = false;

    // Reference to the handler
    var handlerName = '';

    // Initialize event inheritance
    H5P.EventDispatcher.call(self);

    // Default language localization
    parameters = $.extend(true, parameters, {
      l10n: {
        name: 'Video',
        loading: 'Video player loading...',
        noPlayers: 'Found no video players that supports the given video format.',
        noSources: 'Video source is missing.',
        aborted: 'Media playback has been aborted.',
        networkFailure: 'Network failure.',
        cannotDecode: 'Unable to decode media.',
        formatNotSupported: 'Video format not supported.',
        mediaEncrypted: 'Media encrypted.',
        unknownError: 'Unknown error.',
        invalidYtId: 'Invalid YouTube ID.',
        unknownYtId: 'Unable to find video with the given YouTube ID.',
        restrictedYt: 'The owner of this video does not allow it to be embedded.'
      }
    });

    parameters.a11y = parameters.a11y || [];
    parameters.playback = parameters.playback || {};
    parameters.visuals = $.extend(true, parameters.visuals, {
      disableFullscreen: false
    });

    /** @private */
    var sources = [];
    if (parameters.sources) {
      for (var i = 0; i < parameters.sources.length; i++) {
        // Clone to avoid changing of parameters.
        var source = $.extend(true, {}, parameters.sources[i]);

        // Create working URL without html entities.
        source.path = $cleaner.html(source.path).text();
        sources.push(source);
      }
    }

    /** @private */
    var tracks = [];
    parameters.a11y.forEach(function (track) {
      // Clone to avoid changing of parameters.
      var clone = $.extend(true, {}, track);

      // Create working URL without html entities
      if (clone.track && clone.track.path) {
        clone.track.path = $cleaner.html(clone.track.path).text();
        tracks.push(clone);
      }
    });

    /**
     * Attaches the video handler to the given container.
     * Inserts text if no handler is found.
     *
     * @public
     * @param {jQuery} $container
     */
    self.attach = function ($container) {
      $container.addClass('h5p-video').html('');

      if (self.appendTo !== undefined) {
        self.appendTo($container);
      }
      else {
        if (sources.length) {
          $container.text(parameters.l10n.noPlayers);
        }
        else {
          $container.text(parameters.l10n.noSources);
        }
      }
    };

    /**
     * Get name of the video handler
     *
     * @public
     * @returns {string}
     */
    self.getHandlerName = function() {
      return handlerName;
    };

    // Resize the video when we know its aspect ratio
    self.on('loaded', function () {
      self.trigger('resize');
    });

    // Find player for video sources
    if (sources.length) {
      const options = {
        controls: parameters.visuals.controls,
        autoplay: parameters.playback.autoplay,
        loop: parameters.playback.loop,
        fit: parameters.visuals.fit,
        poster: parameters.visuals.poster === undefined ? undefined : parameters.visuals.poster,
        startAt: parameters.startAt || 0,
        tracks: tracks,
        disableRemotePlayback: parameters.visuals.disableRemotePlayback === true,
        disableFullscreen: parameters.visuals.disableFullscreen === true
      }

      var html5Handler;
      for (var i = 0; i < handlers.length; i++) {
        var handler = handlers[i];
        if (handler.canPlay !== undefined && handler.canPlay(sources)) {
          handler.call(self, sources, options, parameters.l10n);
          handlerName = handler.name;
          return;
        }

        if (handler === H5P.VideoHtml5) {
          html5Handler = handler;
          handlerName = handler.name;
        }
      }

      // Fallback to trying HTML5 player
      if (html5Handler) {
        html5Handler.call(self, sources, options, parameters.l10n);
      }
    }
  }

  // Extends the event dispatcher
  Video.prototype = Object.create(H5P.EventDispatcher.prototype);
  Video.prototype.constructor = Video;

  // Player states
  /** @constant {Number} */
  Video.ENDED = 0;
  /** @constant {Number} */
  Video.PLAYING = 1;
  /** @constant {Number} */
  Video.PAUSED = 2;
  /** @constant {Number} */
  Video.BUFFERING = 3;
  /**
   * When video is queued to start
   * @constant {Number}
   */
  Video.VIDEO_CUED = 5;

  // Used to convert between html and text, since URLs have html entities.
  var $cleaner = H5P.jQuery('<div/>');

  /**
   * Help keep track of key value pairs used by the UI.
   *
   * @class
   * @param {string} label
   * @param {string} value
   */
  Video.LabelValue = function (label, value) {
    this.label = label;
    this.value = value;
  };

  /** @constant {Boolean} */
  Video.IE11_PLAYBACK_RATE_FIX = (navigator.userAgent.match(/Trident.*rv[ :]*11\./) ? true : false);

  return Video;
})(H5P.jQuery, H5P.ContentCopyrights, H5P.MediaCopyright, H5P.videoHandlers || []);
;/**
 * Accordion module
 *
 * @param {jQuery} $
 */
H5P.Accordion = (function ($) {

  var nextIdPrefix = 0;
  var nextLooperId = 0;
  var allowedLoopers = [];
  /**
   * Initialize a new Accordion
   *
   * @class H5P.InteractiveVideo
   * @extends H5P.EventDispatcher
   * @param {Object} params Behavior settings
   * @param {Number} contentId Content identification
   * @param {Object} contentData Object containing task specific content data
   */
  function Accordion(params, contentId, contentData) {
    this.contentId = contentId;
    H5P.EventDispatcher.call(this);

    // Set default behavior.
    this.params = $.extend({}, {
      hTag: "h2",
      panels: []
    }, params);

    this.contentData = contentData;

    this.instances = [];

    for (var i = 0; i < this.params.panels.length; i++) {
      this.instances[i] = H5P.newRunnable(this.params.panels[i].content, contentId);
    }

    this.idPrefix = (nextIdPrefix++) + '-';
  }

  Accordion.prototype = Object.create(H5P.EventDispatcher.prototype);
  Accordion.prototype.constructor = Accordion;

  /**
   * Append field to wrapper.
   * @param {jQuery} container the jQuery object which this module will attach itself to.
   */
  Accordion.prototype.attach = function ($container) {
    var self = this;

    if (self.$content === undefined) {
      // Mark as consumed
      self.triggerConsumed();

      // Create the content
      self.elements = [];
      for (var i = 0; i < self.params.panels.length; i++) {
        self.createPanel(i);
      }
      self.$content = $(self.elements);
    }

    // Insert content
    $container.html('').addClass('h5p-accordion').append(self.$content);
  };

  /**
   * Create HTML for Panel.
   * @param {number} id
   */
  Accordion.prototype.createPanel = function (id) {
    var self = this;
    var titleId = 'h5p-panel-link-' + this.idPrefix + id;
    var contentId = 'h5p-panel-content-' + self.idPrefix + id;

    var toggleCollapse = function () {
      if (self.$expandedTitle === undefined || !self.$expandedTitle.is($title)) {
        self.collapseExpandedPanels();
        self.expandPanel($title, $titleButton, $content);
      }
      else {
        self.collapsePanel($title, $titleButton, $content);
      }

      // We're running in an iframe, so we must animate the iframe height
      self.animateResize();
    };

    // Create panel title
    var $title =  $('<' + this.params.hTag + '/>', {
      'id': titleId,
      'class': 'h5p-panel-title',
    });

    // Create panel button
    var $titleButton =  $('<button/>', {
      'class': 'h5p-panel-button',
      'tabindex': '0',
      'aria-expanded': 'false',
      'aria-controls': contentId,
      'html': self.params.panels[id].title,
      'on': {
        'click': toggleCollapse,
        'keydown': function (event) {
          switch (event.keyCode) {
            case 38:   // Up
            case 37: { // Left
              // Try to select previous item
              var $prev = $title.prev().prev().children('.h5p-panel-button');
              if ($prev.length) {
                $prev.focus();
              }
              return false;
            }
            case 40:   // Down
            case 39: { // Right
              // Try to select next item
              var $next = $content.next().children('.h5p-panel-button');
              if ($next.length) {
                $next.focus();
              }
              return false;
            }

            case 32:   // SPACE
            case 13: { // ENTER
              toggleCollapse();
              return false;
            }
          }
        },
        // The class needs to be set programmatically as the title 
        // is not able to detect focus-visible on the button
        'focus': function () {
          if($titleButton.is(':focus-visible')) {
            $title.addClass('h5p-panel-focused');
          }
        },
        'blur': function () {
          $title.removeClass('h5p-panel-focused');
        }
      }
    });

    $title.append($titleButton);

    // Create panel content
    var $content = $('<div>', {
      'id': contentId,
      'class': 'h5p-panel-content',
      'role': 'region',
      'aria-labelledby': titleId,
      'aria-hidden': 'true'
    });

    // Add the content itself to the content section
    self.instances[id].attach($content);

    // Gather all content
    self.elements.push($title[0]);
    self.elements.push($content[0]);
  };

  /**
   * Trigger the 'consumed' xAPI event when this commences
   *
   * (Will be more sophisticated in future version)
   */
  Accordion.prototype.triggerConsumed = function () {
    var xAPIEvent = this.createXAPIEventTemplate({
      id: 'http://activitystrea.ms/schema/1.0/consume',
      display: {
        'en-US': 'consumed'
      }
    }, {
      result: {
        completion: true
      }
    });
    this.trigger(xAPIEvent);
  };

  /**
   * Collapse all expanded panels
   */
  Accordion.prototype.collapseExpandedPanels = function () {
    var self = this;
    if (this.$expandedTitle !== undefined) {
      this.$expandedButton.attr('aria-expanded', false);
      this.$expandedTitle.removeClass('h5p-panel-expanded');
    }
    if (this.$expandedPanel !== undefined) {
      this.$expandedPanel
        .stop(false, true)
        .slideUp(200, function () {
          self.stopWorkLoop(self.resizing);
          self.trigger('resize');
        })
        .attr('aria-hidden', true);
    }
  };

  /**
   * Expand a panel
   *
   * @param {jQuery} $title The title of the panel that is to be expanded
   * @param {jQuery} $panel The panel that is to be expanded
   */
  Accordion.prototype.expandPanel = function($title, $titleButton, $panel) {
    var self = this;

    $titleButton.attr('aria-expanded', true);
    $title.addClass('h5p-panel-expanded');

    $panel
      .stop(false, true)
      .slideDown(200, function () {
        self.stopWorkLoop(self.resizing);
        self.trigger('resize');
      })
      .attr('aria-hidden', false);

    self.$expandedButton = $titleButton;
    self.$expandedTitle = $title;
    self.$expandedPanel = $panel;
  };

  /**
   * Collapse a panel
   *
   * @param {jQuery} $title The title of the panel that is to be collapsed
   * @param {jQuery} $panel The panel that is to be collapsed
   */
  Accordion.prototype.collapsePanel = function($title, $titleButton, $panel) {
    var self = this;
    $titleButton.attr('aria-expanded', false)
    $title.removeClass('h5p-panel-expanded');
    $panel
      .stop(false, true)
      .slideUp(200, function () {
        self.stopWorkLoop(self.resizing);
        self.trigger('resize');
      })
      .attr('aria-hidden', true);
     self.$expandedTitle = self.$expandedButton = self.$expandedPanel = undefined;
  };

  /**
   * Makes sure that the heigt of the iframe gets animated
   */
  Accordion.prototype.animateResize = function () {
    var self = this;
    self.stopWorkLoop(this.resizing);
    this.resizing = self.startWorkLoop(function () {
      self.trigger('resize');
    }, 40);
  };

  Accordion.prototype.startWorkLoop = function (func, wait) {
    var myId = nextLooperId++;
    var self = this;
    allowedLoopers.push(myId);
    var looper = function(func, wait, myId) {
      return function () {
        if (self.allowedToWork(myId)) {
          try {
            func.call(null);
          }
          catch (e) {
            self.stopWorkLoop(myId);
          }
          setTimeout(looper, wait, func, wait, myId);
        }
      };
    } (func, wait, myId);
    setTimeout(looper, wait);
    return myId;
  };

  Accordion.prototype.stopWorkLoop = function (myId) {
    var index;
    while ((index = allowedLoopers.indexOf(myId)) !== -1) {
      allowedLoopers.splice(index, 1);
    }
  };

  Accordion.prototype.allowedToWork = function (myId) {
    return allowedLoopers.indexOf(myId) !== -1;
  };

  return Accordion;
})(H5P.jQuery);
;var H5P = H5P || {};

/**
 * Class responsible for creating a help text dialog
 */
H5P.JoubelHelpTextDialog = (function ($) {

  var numInstances = 0;
  /**
   * Display a pop-up containing a message.
   *
   * @param {H5P.jQuery}  $container  The container which message dialog will be appended to
   * @param {string}      message     The message
   * @param {string}      closeButtonTitle The title for the close button
   * @return {H5P.jQuery}
   */
  function JoubelHelpTextDialog(header, message, closeButtonTitle) {
    H5P.EventDispatcher.call(this);

    var self = this;

    numInstances++;
    var headerId = 'joubel-help-text-header-' + numInstances;
    var helpTextId = 'joubel-help-text-body-' + numInstances;

    var $helpTextDialogBox = $('<div>', {
      'class': 'joubel-help-text-dialog-box',
      'role': 'dialog',
      'aria-labelledby': headerId,
      'aria-describedby': helpTextId
    });

    $('<div>', {
      'class': 'joubel-help-text-dialog-background'
    }).appendTo($helpTextDialogBox);

    var $helpTextDialogContainer = $('<div>', {
      'class': 'joubel-help-text-dialog-container'
    }).appendTo($helpTextDialogBox);

    $('<div>', {
      'class': 'joubel-help-text-header',
      'id': headerId,
      'role': 'header',
      'html': header
    }).appendTo($helpTextDialogContainer);

    $('<div>', {
      'class': 'joubel-help-text-body',
      'id': helpTextId,
      'html': message,
      'role': 'document',
      'tabindex': 0
    }).appendTo($helpTextDialogContainer);

    var handleClose = function () {
      $helpTextDialogBox.remove();
      self.trigger('closed');
    };

    var $closeButton = $('<div>', {
      'class': 'joubel-help-text-remove',
      'role': 'button',
      'title': closeButtonTitle,
      'tabindex': 1,
      'click': handleClose,
      'keydown': function (event) {
        // 32 - space, 13 - enter
        if ([32, 13].indexOf(event.which) !== -1) {
          event.preventDefault();
          handleClose();
        }
      }
    }).appendTo($helpTextDialogContainer);

    /**
     * Get the DOM element
     * @return {HTMLElement}
     */
    self.getElement = function () {
      return $helpTextDialogBox;
    };

    self.focus = function () {
      $closeButton.focus();
    };
  }

  JoubelHelpTextDialog.prototype = Object.create(H5P.EventDispatcher.prototype);
  JoubelHelpTextDialog.prototype.constructor = JoubelHelpTextDialog;

  return JoubelHelpTextDialog;
}(H5P.jQuery));
;var H5P = H5P || {};

/**
 * Class responsible for creating auto-disappearing dialogs
 */
H5P.JoubelMessageDialog = (function ($) {

  /**
   * Display a pop-up containing a message.
   *
   * @param {H5P.jQuery} $container The container which message dialog will be appended to
   * @param {string} message The message
   * @return {H5P.jQuery}
   */
  function JoubelMessageDialog ($container, message) {
    var timeout;

    var removeDialog = function () {
      $warning.remove();
      clearTimeout(timeout);
      $container.off('click.messageDialog');
    };

    // Create warning popup:
    var $warning = $('<div/>', {
      'class': 'joubel-message-dialog',
      text: message
    }).appendTo($container);

    // Remove after 3 seconds or if user clicks anywhere in $container:
    timeout = setTimeout(removeDialog, 3000);
    $container.on('click.messageDialog', removeDialog);

    return $warning;
  }

  return JoubelMessageDialog;
})(H5P.jQuery);
;var H5P = H5P || {};

/**
 * Class responsible for creating a circular progress bar
 */

H5P.JoubelProgressCircle = (function ($) {

  /**
   * Constructor for the Progress Circle
   *
   * @param {Number} number The amount of progress to display
   * @param {string} progressColor Color for the progress meter
   * @param {string} backgroundColor Color behind the progress meter
   */
  function ProgressCircle(number, progressColor, fillColor, backgroundColor) {
    progressColor = progressColor || '#1a73d9';
    fillColor = fillColor || '#f0f0f0';
    backgroundColor = backgroundColor || '#ffffff';
    var progressColorRGB = this.hexToRgb(progressColor);

    //Verify number
    try {
      number = Number(number);
      if (number === '') {
        throw 'is empty';
      }
      if (isNaN(number)) {
        throw 'is not a number';
      }
    } catch (e) {
      number = 'err';
    }

    //Draw circle
    if (number > 100) {
      number = 100;
    }

    // We can not use rgba, since they will stack on top of each other.
    // Instead we create the equivalent of the rgba color
    // and applies this to the activeborder and background color.
    var progressColorString = 'rgb(' + parseInt(progressColorRGB.r, 10) +
      ',' + parseInt(progressColorRGB.g, 10) +
      ',' + parseInt(progressColorRGB.b, 10) + ')';

    // Circle wrapper
    var $wrapper = $('<div/>', {
      'class': "joubel-progress-circle-wrapper"
    });

    //Active border indicates progress
    var $activeBorder = $('<div/>', {
      'class': "joubel-progress-circle-active-border"
    }).appendTo($wrapper);

    //Background circle
    var $backgroundCircle = $('<div/>', {
      'class': "joubel-progress-circle-circle"
    }).appendTo($activeBorder);

    //Progress text/number
    $('<span/>', {
      'text': number + '%',
      'class': "joubel-progress-circle-percentage"
    }).appendTo($backgroundCircle);

    var deg = number * 3.6;
    if (deg <= 180) {
      $activeBorder.css('background-image',
        'linear-gradient(' + (90 + deg) + 'deg, transparent 50%, ' + fillColor + ' 50%),' +
        'linear-gradient(90deg, ' + fillColor + ' 50%, transparent 50%)')
        .css('border', '2px solid' + backgroundColor)
        .css('background-color', progressColorString);
    } else {
      $activeBorder.css('background-image',
        'linear-gradient(' + (deg - 90) + 'deg, transparent 50%, ' + progressColorString + ' 50%),' +
        'linear-gradient(90deg, ' + fillColor + ' 50%, transparent 50%)')
        .css('border', '2px solid' + backgroundColor)
        .css('background-color', progressColorString);
    }

    this.$activeBorder = $activeBorder;
    this.$backgroundCircle = $backgroundCircle;
    this.$wrapper = $wrapper;

    this.initResizeFunctionality();

    return $wrapper;
  }

  /**
   * Initializes resize functionality for the progress circle
   */
  ProgressCircle.prototype.initResizeFunctionality = function () {
    var self = this;

    $(window).resize(function () {
      // Queue resize
      setTimeout(function () {
        self.resize();
      });
    });

    // First resize
    setTimeout(function () {
      self.resize();
    }, 0);
  };

  /**
   * Resize function makes progress circle grow or shrink relative to parent container
   */
  ProgressCircle.prototype.resize = function () {
    var $parent = this.$wrapper.parent();

    if ($parent !== undefined && $parent) {

      // Measurements
      var fontSize = parseInt($parent.css('font-size'), 10);

      // Static sizes
      var fontSizeMultiplum = 3.75;
      var progressCircleWidthPx = parseInt((fontSize / 4.5), 10) % 2 === 0 ? parseInt((fontSize / 4.5), 10) + 4 : parseInt((fontSize / 4.5), 10) + 5;
      var progressCircleOffset = progressCircleWidthPx / 2;

      var width = fontSize * fontSizeMultiplum;
      var height = fontSize * fontSizeMultiplum;
      this.$activeBorder.css({
        'width': width,
        'height': height
      });

      this.$backgroundCircle.css({
        'width': width - progressCircleWidthPx,
        'height': height - progressCircleWidthPx,
        'top': progressCircleOffset,
        'left': progressCircleOffset
      });
    }
  };

  /**
   * Hex to RGB conversion
   * @param hex
   * @returns {{r: Number, g: Number, b: Number}}
   */
  ProgressCircle.prototype.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  return ProgressCircle;

}(H5P.jQuery));
;var H5P = H5P || {};

H5P.SimpleRoundedButton = (function ($) {

  /**
   * Creates a new tip
   */
  function SimpleRoundedButton(text) {

    var $simpleRoundedButton = $('<div>', {
      'class': 'joubel-simple-rounded-button',
      'title': text,
      'role': 'button',
      'tabindex': '0'
    }).keydown(function (e) {
      // 32 - space, 13 - enter
      if ([32, 13].indexOf(e.which) !== -1) {
        $(this).click();
        e.preventDefault();
      }
    });

    $('<span>', {
      'class': 'joubel-simple-rounded-button-text',
      'html': text
    }).appendTo($simpleRoundedButton);

    return $simpleRoundedButton;
  }

  return SimpleRoundedButton;
}(H5P.jQuery));
;var H5P = H5P || {};

/**
 * Class responsible for creating speech bubbles
 */
H5P.JoubelSpeechBubble = (function ($) {

  var $currentSpeechBubble;
  var $currentContainer;  
  var $tail;
  var $innerTail;
  var removeSpeechBubbleTimeout;
  var currentMaxWidth;

  var DEFAULT_MAX_WIDTH = 400;

  var iDevice = navigator.userAgent.match(/iPod|iPhone|iPad/g) ? true : false;

  /**
   * Creates a new speech bubble
   *
   * @param {H5P.jQuery} $container The speaking object
   * @param {string} text The text to display
   * @param {number} maxWidth The maximum width of the bubble
   * @return {H5P.JoubelSpeechBubble}
   */
  function JoubelSpeechBubble($container, text, maxWidth) {
    maxWidth = maxWidth || DEFAULT_MAX_WIDTH;
    currentMaxWidth = maxWidth;
    $currentContainer = $container;

    this.isCurrent = function ($tip) {
      return $tip.is($currentContainer);
    };

    this.remove = function () {
      remove();
    };

    var fadeOutSpeechBubble = function ($speechBubble) {
      if (!$speechBubble) {
        return;
      }

      // Stop removing bubble
      clearTimeout(removeSpeechBubbleTimeout);

      $speechBubble.removeClass('show');
      setTimeout(function () {
        if ($speechBubble) {
          $speechBubble.remove();
          $speechBubble = undefined;
        }
      }, 500);
    };

    if ($currentSpeechBubble !== undefined) {
      remove();
    }

    var $h5pContainer = getH5PContainer($container);

    // Make sure we fade out old speech bubble
    fadeOutSpeechBubble($currentSpeechBubble);

    // Create bubble
    $tail = $('<div class="joubel-speech-bubble-tail"></div>');
    $innerTail = $('<div class="joubel-speech-bubble-inner-tail"></div>');
    var $innerBubble = $(
      '<div class="joubel-speech-bubble-inner">' +
      '<div class="joubel-speech-bubble-text">' + text + '</div>' +
      '</div>'
    ).prepend($innerTail);

    $currentSpeechBubble = $(
      '<div class="joubel-speech-bubble" aria-live="assertive">'
    ).append([$tail, $innerBubble])
      .appendTo($h5pContainer);

    // Show speech bubble with transition
    setTimeout(function () {
      $currentSpeechBubble.addClass('show');
    }, 0);

    position($currentSpeechBubble, $currentContainer, maxWidth, $tail, $innerTail);

    // Handle click to close
    H5P.$body.on('mousedown.speechBubble', handleOutsideClick);

    // Handle window resizing
    H5P.$window.on('resize', '', handleResize);

    // Handle clicks when inside IV which blocks bubbling.
    $container.parents('.h5p-dialog')
      .on('mousedown.speechBubble', handleOutsideClick);

    if (iDevice) {
      H5P.$body.css('cursor', 'pointer');
    }

    return this;
  }

  // Remove speechbubble if it belongs to a dom element that is about to be hidden
  H5P.externalDispatcher.on('domHidden', function (event) {
    if ($currentSpeechBubble !== undefined && event.data.$dom.find($currentContainer).length !== 0) {
      remove();
    }
  });

  /**
   * Returns the closest h5p container for the given DOM element.
   * 
   * @param {object} $container jquery element
   * @return {object} the h5p container (jquery element)
   */
  function getH5PContainer($container) {
    var $h5pContainer = $container.closest('.h5p-frame');

    // Check closest h5p frame first, then check for container in case there is no frame.
    if (!$h5pContainer.length) {
      $h5pContainer = $container.closest('.h5p-container');
    }

    return $h5pContainer;
  }

  /**
   * Event handler that is called when the window is resized.
   */
  function handleResize() {
    position($currentSpeechBubble, $currentContainer, currentMaxWidth, $tail, $innerTail);
  }

  /**
   * Repositions the speech bubble according to the position of the container.
   * 
   * @param {object} $currentSpeechbubble the speech bubble that should be positioned   
   * @param {object} $container the container to which the speech bubble should point 
   * @param {number} maxWidth the maximum width of the speech bubble
   * @param {object} $tail the tail (the triangle that points to the referenced container)
   * @param {object} $innerTail the inner tail (the triangle that points to the referenced container)
   */
  function position($currentSpeechBubble, $container, maxWidth, $tail, $innerTail) {
    var $h5pContainer = getH5PContainer($container);

    // Calculate offset between the button and the h5p frame
    var offset = getOffsetBetween($h5pContainer, $container);

    var direction = (offset.bottom > offset.top ? 'bottom' : 'top');
    var tipWidth = offset.outerWidth * 0.9; // Var needs to be renamed to make sense
    var bubbleWidth = tipWidth > maxWidth ? maxWidth : tipWidth;

    var bubblePosition = getBubblePosition(bubbleWidth, offset);
    var tailPosition = getTailPosition(bubbleWidth, bubblePosition, offset, $container.width());
    // Need to set font-size, since element is appended to body.
    // Using same font-size as parent. In that way it will grow accordingly
    // when resizing
    var fontSize = 16;//parseFloat($parent.css('font-size'));

    // Set width and position of speech bubble
    $currentSpeechBubble.css(bubbleCSS(
      direction,
      bubbleWidth,
      bubblePosition,
      fontSize
    ));

    var preparedTailCSS = tailCSS(direction, tailPosition);
    $tail.css(preparedTailCSS);
    $innerTail.css(preparedTailCSS);
  }

  /**
   * Static function for removing the speechbubble
   */
  var remove = function () {
    H5P.$body.off('mousedown.speechBubble');
    H5P.$window.off('resize', '', handleResize);
    $currentContainer.parents('.h5p-dialog').off('mousedown.speechBubble');
    if (iDevice) {
      H5P.$body.css('cursor', '');
    }
    if ($currentSpeechBubble !== undefined) {
      // Apply transition, then remove speech bubble
      $currentSpeechBubble.removeClass('show');

      // Make sure we remove any old timeout before reassignment
      clearTimeout(removeSpeechBubbleTimeout);
      removeSpeechBubbleTimeout = setTimeout(function () {
        $currentSpeechBubble.remove();
        $currentSpeechBubble = undefined;
      }, 500);
    }
    // Don't return false here. If the user e.g. clicks a button when the bubble is visible,
    // we want the bubble to disapear AND the button to receive the event
  };

  /**
   * Remove the speech bubble and container reference
   */
  function handleOutsideClick(event) {
    if (event.target === $currentContainer[0]) {
      return; // Button clicks are not outside clicks
    }

    remove();
    // There is no current container when a container isn't clicked
    $currentContainer = undefined;
  }

  /**
   * Calculate position for speech bubble
   *
   * @param {number} bubbleWidth The width of the speech bubble
   * @param {object} offset
   * @return {object} Return position for the speech bubble
   */
  function getBubblePosition(bubbleWidth, offset) {
    var bubblePosition = {};

    var tailOffset = 9;
    var widthOffset = bubbleWidth / 2;

    // Calculate top position
    bubblePosition.top = offset.top + offset.innerHeight;

    // Calculate bottom position
    bubblePosition.bottom = offset.bottom + offset.innerHeight + tailOffset;

    // Calculate left position
    if (offset.left < widthOffset) {
      bubblePosition.left = 3;
    }
    else if ((offset.left + widthOffset) > offset.outerWidth) {
      bubblePosition.left = offset.outerWidth - bubbleWidth - 3;
    }
    else {
      bubblePosition.left = offset.left - widthOffset + (offset.innerWidth / 2);
    }

    return bubblePosition;
  }

  /**
   * Calculate position for speech bubble tail
   *
   * @param {number} bubbleWidth The width of the speech bubble
   * @param {object} bubblePosition Speech bubble position
   * @param {object} offset
   * @param {number} iconWidth The width of the tip icon
   * @return {object} Return position for the tail
   */
  function getTailPosition(bubbleWidth, bubblePosition, offset, iconWidth) {
    var tailPosition = {};
    // Magic numbers. Tuned by hand so that the tail fits visually within
    // the bounds of the speech bubble.
    var leftBoundary = 9;
    var rightBoundary = bubbleWidth - 20;

    tailPosition.left = offset.left - bubblePosition.left + (iconWidth / 2) - 6;
    if (tailPosition.left < leftBoundary) {
      tailPosition.left = leftBoundary;
    }
    if (tailPosition.left > rightBoundary) {
      tailPosition.left = rightBoundary;
    }

    tailPosition.top = -6;
    tailPosition.bottom = -6;

    return tailPosition;
  }

  /**
   * Return bubble CSS for the desired growth direction
   *
   * @param {string} direction The direction the speech bubble will grow
   * @param {number} width The width of the speech bubble
   * @param {object} position Speech bubble position
   * @param {number} fontSize The size of the bubbles font
   * @return {object} Return CSS
   */
  function bubbleCSS(direction, width, position, fontSize) {
    if (direction === 'top') {
      return {
        width: width + 'px',
        bottom: position.bottom + 'px',
        left: position.left + 'px',
        fontSize: fontSize + 'px',
        top: ''
      };
    }
    else {
      return {
        width: width + 'px',
        top: position.top + 'px',
        left: position.left + 'px',
        fontSize: fontSize + 'px',
        bottom: ''
      };
    }
  }

  /**
   * Return tail CSS for the desired growth direction
   *
   * @param {string} direction The direction the speech bubble will grow
   * @param {object} position Tail position
   * @return {object} Return CSS
   */
  function tailCSS(direction, position) {
    if (direction === 'top') {
      return {
        bottom: position.bottom + 'px',
        left: position.left + 'px',
        top: ''
      };
    }
    else {
      return {
        top: position.top + 'px',
        left: position.left + 'px',
        bottom: ''
      };
    }
  }

  /**
   * Calculates the offset between an element inside a container and the
   * container. Only works if all the edges of the inner element are inside the
   * outer element.
   * Width/height of the elements is included as a convenience.
   *
   * @param {H5P.jQuery} $outer
   * @param {H5P.jQuery} $inner
   * @return {object} Position offset
   */
  function getOffsetBetween($outer, $inner) {
    var outer = $outer[0].getBoundingClientRect();
    var inner = $inner[0].getBoundingClientRect();

    return {
      top: inner.top - outer.top,
      right: outer.right - inner.right,
      bottom: outer.bottom - inner.bottom,
      left: inner.left - outer.left,
      innerWidth: inner.width,
      innerHeight: inner.height,
      outerWidth: outer.width,
      outerHeight: outer.height
    };
  }

  return JoubelSpeechBubble;
})(H5P.jQuery);
;var H5P = H5P || {};

H5P.JoubelThrobber = (function ($) {

  /**
   * Creates a new tip
   */
  function JoubelThrobber() {

    // h5p-throbber css is described in core
    var $throbber = $('<div/>', {
      'class': 'h5p-throbber'
    });

    return $throbber;
  }

  return JoubelThrobber;
}(H5P.jQuery));
;H5P.JoubelTip = (function ($) {
  var $conv = $('<div/>');

  /**
   * Creates a new tip element.
   *
   * NOTE that this may look like a class but it doesn't behave like one.
   * It returns a jQuery object.
   *
   * @param {string} tipHtml The text to display in the popup
   * @param {Object} [behaviour] Options
   * @param {string} [behaviour.tipLabel] Set to use a custom label for the tip button (you want this for good A11Y)
   * @param {boolean} [behaviour.helpIcon] Set to 'true' to Add help-icon classname to Tip button (changes the icon)
   * @param {boolean} [behaviour.showSpeechBubble] Set to 'false' to disable functionality (you may this in the editor)
   * @param {boolean} [behaviour.tabcontrol] Set to 'true' if you plan on controlling the tabindex in the parent (tabindex="-1")
   * @return {H5P.jQuery|undefined} Tip button jQuery element or 'undefined' if invalid tip
   */
  function JoubelTip(tipHtml, behaviour) {

    // Keep track of the popup that appears when you click the Tip button
    var speechBubble;

    // Parse tip html to determine text
    var tipText = $conv.html(tipHtml).text().trim();
    if (tipText === '') {
      return; // The tip has no textual content, i.e. it's invalid.
    }

    // Set default behaviour
    behaviour = $.extend({
      tipLabel: tipText,
      helpIcon: false,
      showSpeechBubble: true,
      tabcontrol: false
    }, behaviour);

    // Create Tip button
    var $tipButton = $('<div/>', {
      class: 'joubel-tip-container' + (behaviour.showSpeechBubble ? '' : ' be-quiet'),
      'aria-label': behaviour.tipLabel,
      'aria-expanded': false,
      role: 'button',
      tabindex: (behaviour.tabcontrol ? -1 : 0),
      click: function (event) {
        // Toggle show/hide popup
        toggleSpeechBubble();
        event.preventDefault();
      },
      keydown: function (event) {
        if (event.which === 32 || event.which === 13) { // Space & enter key
          // Toggle show/hide popup
          toggleSpeechBubble();
          event.stopPropagation();
          event.preventDefault();
        }
        else { // Any other key
          // Toggle hide popup
          toggleSpeechBubble(false);
        }
      },
      // Add markup to render icon
      html: '<span class="joubel-icon-tip-normal ' + (behaviour.helpIcon ? ' help-icon': '') + '">' +
              '<span class="h5p-icon-shadow"></span>' +
              '<span class="h5p-icon-speech-bubble"></span>' +
              '<span class="h5p-icon-info"></span>' +
            '</span>'
      // IMPORTANT: All of the markup elements must have 'pointer-events: none;'
    });

    const $tipAnnouncer = $('<div>', {
      'class': 'hidden-but-read',
      'aria-live': 'polite',
      appendTo: $tipButton,
    });

    /**
     * Tip button interaction handler.
     * Toggle show or hide the speech bubble popup when interacting with the
     * Tip button.
     *
     * @private
     * @param {boolean} [force] 'true' shows and 'false' hides.
     */
    var toggleSpeechBubble = function (force) {
      if (speechBubble !== undefined && speechBubble.isCurrent($tipButton)) {
        // Hide current popup
        speechBubble.remove();
        speechBubble = undefined;

        $tipButton.attr('aria-expanded', false);
        $tipAnnouncer.html('');
      }
      else if (force !== false && behaviour.showSpeechBubble) {
        // Create and show new popup
        speechBubble = H5P.JoubelSpeechBubble($tipButton, tipHtml);
        $tipButton.attr('aria-expanded', true);
        $tipAnnouncer.html(tipHtml);
      }
    };

    return $tipButton;
  }

  return JoubelTip;
})(H5P.jQuery);
;var H5P = H5P || {};

H5P.JoubelSlider = (function ($) {

  /**
   * Creates a new Slider
   *
   * @param {object} [params] Additional parameters
   */
  function JoubelSlider(params) {
    H5P.EventDispatcher.call(this);

    this.$slider = $('<div>', $.extend({
      'class': 'h5p-joubel-ui-slider'
    }, params));

    this.$slides = [];
    this.currentIndex = 0;
    this.numSlides = 0;
  }
  JoubelSlider.prototype = Object.create(H5P.EventDispatcher.prototype);
  JoubelSlider.prototype.constructor = JoubelSlider;

  JoubelSlider.prototype.addSlide = function ($content) {
    $content.addClass('h5p-joubel-ui-slide').css({
      'left': (this.numSlides*100) + '%'
    });
    this.$slider.append($content);
    this.$slides.push($content);

    this.numSlides++;

    if(this.numSlides === 1) {
      $content.addClass('current');
    }
  };

  JoubelSlider.prototype.attach = function ($container) {
    $container.append(this.$slider);
  };

  JoubelSlider.prototype.move = function (index) {
    var self = this;

    if(index === 0) {
      self.trigger('first-slide');
    }
    if(index+1 === self.numSlides) {
      self.trigger('last-slide');
    }
    self.trigger('move');

    var $previousSlide = self.$slides[this.currentIndex];
    H5P.Transition.onTransitionEnd(this.$slider, function () {
      $previousSlide.removeClass('current');
      self.trigger('moved');
    });
    this.$slides[index].addClass('current');

    var translateX = 'translateX(' + (-index*100) + '%)';
    this.$slider.css({
      '-webkit-transform': translateX,
      '-moz-transform': translateX,
      '-ms-transform': translateX,
      'transform': translateX
    });

    this.currentIndex = index;
  };

  JoubelSlider.prototype.remove = function () {
    this.$slider.remove();
  };

  JoubelSlider.prototype.next = function () {
    if(this.currentIndex+1 >= this.numSlides) {
      return;
    }

    this.move(this.currentIndex+1);
  };

  JoubelSlider.prototype.previous = function () {
    this.move(this.currentIndex-1);
  };

  JoubelSlider.prototype.first = function () {
    this.move(0);
  };

  JoubelSlider.prototype.last = function () {
    this.move(this.numSlides-1);
  };

  return JoubelSlider;
})(H5P.jQuery);
;var H5P = H5P || {};

/**
 * @module
 */
H5P.JoubelScoreBar = (function ($) {

  /* Need to use an id for the star SVG since that is the only way to reference
     SVG filters  */
  var idCounter = 0;

  /**
   * Creates a score bar
   * @class H5P.JoubelScoreBar
   * @param {number} maxScore  Maximum score
   * @param {string} [label] Makes it easier for readspeakers to identify the scorebar
   * @param {string} [helpText] Score explanation
   * @param {string} [scoreExplanationButtonLabel] Label for score explanation button
   */
  function JoubelScoreBar(maxScore, label, helpText, scoreExplanationButtonLabel) {
    var self = this;

    self.maxScore = maxScore;
    self.score = 0;
    idCounter++;

    /**
     * @const {string}
     */
    self.STAR_MARKUP = '<svg tabindex="-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.77 53.87" aria-hidden="true" focusable="false">' +
        '<title>star</title>' +
        '<filter tabindex="-1" id="h5p-joubelui-score-bar-star-inner-shadow-' + idCounter + '" x0="-50%" y0="-50%" width="200%" height="200%">' +
          '<feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"></feGaussianBlur>' +
          '<feOffset dy="2" dx="4"></feOffset>' +
          '<feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>' +
          '<feFlood flood-color="#ffe95c" flood-opacity="1"></feFlood>' +
          '<feComposite in2="shadowDiff" operator="in"></feComposite>' +
          '<feComposite in2="SourceGraphic" operator="over" result="firstfilter"></feComposite>' +
          '<feGaussianBlur in="firstfilter" stdDeviation="3" result="blur2"></feGaussianBlur>' +
          '<feOffset dy="-2" dx="-4"></feOffset>' +
          '<feComposite in2="firstfilter" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>' +
          '<feFlood flood-color="#ffe95c" flood-opacity="1"></feFlood>' +
          '<feComposite in2="shadowDiff" operator="in"></feComposite>' +
          '<feComposite in2="firstfilter" operator="over"></feComposite>' +
        '</filter>' +
        '<path tabindex="-1" class="h5p-joubelui-score-bar-star-shadow" d="M35.08,43.41V9.16H20.91v0L9.51,10.85,9,10.93C2.8,12.18,0,17,0,21.25a11.22,11.22,0,0,0,3,7.48l8.73,8.53-1.07,6.16Z"/>' +
        '<g tabindex="-1">' +
          '<path tabindex="-1" class="h5p-joubelui-score-bar-star-border" d="M61.36,22.8,49.72,34.11l2.78,16a2.6,2.6,0,0,1,.05.64c0,.85-.37,1.6-1.33,1.6A2.74,2.74,0,0,1,49.94,52L35.58,44.41,21.22,52a2.93,2.93,0,0,1-1.28.37c-.91,0-1.33-.75-1.33-1.6,0-.21.05-.43.05-.64l2.78-16L9.8,22.8A2.57,2.57,0,0,1,9,21.25c0-1,1-1.33,1.81-1.49l16.07-2.35L34.09,2.83c.27-.59.85-1.33,1.55-1.33s1.28.69,1.55,1.33l7.21,14.57,16.07,2.35c.75.11,1.81.53,1.81,1.49A3.07,3.07,0,0,1,61.36,22.8Z"/>' +
          '<path tabindex="-1" class="h5p-joubelui-score-bar-star-fill" d="M61.36,22.8,49.72,34.11l2.78,16a2.6,2.6,0,0,1,.05.64c0,.85-.37,1.6-1.33,1.6A2.74,2.74,0,0,1,49.94,52L35.58,44.41,21.22,52a2.93,2.93,0,0,1-1.28.37c-.91,0-1.33-.75-1.33-1.6,0-.21.05-.43.05-.64l2.78-16L9.8,22.8A2.57,2.57,0,0,1,9,21.25c0-1,1-1.33,1.81-1.49l16.07-2.35L34.09,2.83c.27-.59.85-1.33,1.55-1.33s1.28.69,1.55,1.33l7.21,14.57,16.07,2.35c.75.11,1.81.53,1.81,1.49A3.07,3.07,0,0,1,61.36,22.8Z"/>' +
          '<path tabindex="-1" filter="url(#h5p-joubelui-score-bar-star-inner-shadow-' + idCounter + ')" class="h5p-joubelui-score-bar-star-fill-full-score" d="M61.36,22.8,49.72,34.11l2.78,16a2.6,2.6,0,0,1,.05.64c0,.85-.37,1.6-1.33,1.6A2.74,2.74,0,0,1,49.94,52L35.58,44.41,21.22,52a2.93,2.93,0,0,1-1.28.37c-.91,0-1.33-.75-1.33-1.6,0-.21.05-.43.05-.64l2.78-16L9.8,22.8A2.57,2.57,0,0,1,9,21.25c0-1,1-1.33,1.81-1.49l16.07-2.35L34.09,2.83c.27-.59.85-1.33,1.55-1.33s1.28.69,1.55,1.33l7.21,14.57,16.07,2.35c.75.11,1.81.53,1.81,1.49A3.07,3.07,0,0,1,61.36,22.8Z"/>' +
        '</g>' +
      '</svg>';

    /**
     * @function appendTo
     * @memberOf H5P.JoubelScoreBar#
     * @param {H5P.jQuery}  $wrapper  Dom container
     */
    self.appendTo = function ($wrapper) {
      self.$scoreBar.appendTo($wrapper);
    };

    /**
     * Create the text representation of the scorebar .
     *
     * @private
     * @return {string}
     */
    var createLabel = function (score) {
      if (!label) {
        return '';
      }

      return label.replace(':num', score).replace(':total', self.maxScore);
    };

    /**
     * Creates the html for this widget
     *
     * @method createHtml
     * @private
     */
    var createHtml = function () {
      // Container div
      self.$scoreBar = $('<div>', {
        'class': 'h5p-joubelui-score-bar',
      });

      var $visuals = $('<div>', {
        'class': 'h5p-joubelui-score-bar-visuals',
        appendTo: self.$scoreBar
      });

      // The progress bar wrapper
      self.$progressWrapper = $('<div>', {
        'class': 'h5p-joubelui-score-bar-progress-wrapper',
        appendTo: $visuals
      });

      self.$progress = $('<div>', {
        'class': 'h5p-joubelui-score-bar-progress',
        'html': createLabel(self.score),
        appendTo: self.$progressWrapper
      });

      // The star
      $('<div>', {
        'class': 'h5p-joubelui-score-bar-star',
        html: self.STAR_MARKUP
      }).appendTo($visuals);

      // The score container
      var $numerics = $('<div>', {
        'class': 'h5p-joubelui-score-numeric',
        appendTo: self.$scoreBar,
        'aria-hidden': true
      });

      // The current score
      self.$scoreCounter = $('<span>', {
        'class': 'h5p-joubelui-score-number h5p-joubelui-score-number-counter',
        text: 0,
        appendTo: $numerics
      });

      // The separator
      $('<span>', {
        'class': 'h5p-joubelui-score-number-separator',
        text: '/',
        appendTo: $numerics
      });

      // Max score
      self.$maxScore = $('<span>', {
        'class': 'h5p-joubelui-score-number h5p-joubelui-score-max',
        text: self.maxScore,
        appendTo: $numerics
      });

      if (helpText) {
        H5P.JoubelUI.createTip(helpText, {
          tipLabel: scoreExplanationButtonLabel ? scoreExplanationButtonLabel : helpText,
          helpIcon: true
        }).appendTo(self.$scoreBar);
        self.$scoreBar.addClass('h5p-score-bar-has-help');
      }
    };

    /**
     * Set the current score
     * @method setScore
     * @memberOf H5P.JoubelScoreBar#
     * @param  {number} score
     */
    self.setScore = function (score) {
      // Do nothing if score hasn't changed
      if (score === self.score) {
        return;
      }
      self.score = score > self.maxScore ? self.maxScore : score;
      self.updateVisuals();
    };

    /**
     * Increment score
     * @method incrementScore
     * @memberOf H5P.JoubelScoreBar#
     * @param  {number=}        incrementBy Optional parameter, defaults to 1
     */
    self.incrementScore = function (incrementBy) {
      self.setScore(self.score + (incrementBy || 1));
    };

    /**
     * Set the max score
     * @method setMaxScore
     * @memberOf H5P.JoubelScoreBar#
     * @param  {number}    maxScore The max score
     */
    self.setMaxScore = function (maxScore) {
      self.maxScore = maxScore;
    };

    /**
     * Updates the progressbar visuals
     * @memberOf H5P.JoubelScoreBar#
     * @method updateVisuals
     */
    self.updateVisuals = function () {
      self.$progress.html(createLabel(self.score));
      self.$scoreCounter.text(self.score);
      self.$maxScore.text(self.maxScore);

      setTimeout(function () {
        // Start the progressbar animation
        self.$progress.css({
          width: ((self.score / self.maxScore) * 100) + '%'
        });

        H5P.Transition.onTransitionEnd(self.$progress, function () {
          // If fullscore fill the star and start the animation
          self.$scoreBar.toggleClass('h5p-joubelui-score-bar-full-score', self.score === self.maxScore);
          self.$scoreBar.toggleClass('h5p-joubelui-score-bar-animation-active', self.score === self.maxScore);

          // Only allow the star animation to run once
          self.$scoreBar.one("animationend", function() {
            self.$scoreBar.removeClass("h5p-joubelui-score-bar-animation-active");
          });
        }, 600);
      }, 300);
    };

    /**
     * Removes all classes
     * @method reset
     */
    self.reset = function () {
      self.$scoreBar.removeClass('h5p-joubelui-score-bar-full-score');
    };

    createHtml();
  }

  return JoubelScoreBar;
})(H5P.jQuery);
;var H5P = H5P || {};

H5P.JoubelProgressbar = (function ($) {

  /**
   * Joubel progressbar class
   * @method JoubelProgressbar
   * @constructor
   * @param  {number}          steps Number of steps
   * @param {Object} [options] Additional options
   * @param {boolean} [options.disableAria] Disable readspeaker assistance
   * @param {string} [options.progressText] A progress text for describing
   *  current progress out of total progress for readspeakers.
   *  e.g. "Slide :num of :total"
   */
  function JoubelProgressbar(steps, options) {
    H5P.EventDispatcher.call(this);
    var self = this;
    this.options = $.extend({
      progressText: 'Slide :num of :total'
    }, options);
    this.currentStep = 0;
    this.steps = steps;

    this.$progressbar = $('<div>', {
      'class': 'h5p-joubelui-progressbar'
    });
    this.$background = $('<div>', {
      'class': 'h5p-joubelui-progressbar-background'
    }).appendTo(this.$progressbar);
  }

  JoubelProgressbar.prototype = Object.create(H5P.EventDispatcher.prototype);
  JoubelProgressbar.prototype.constructor = JoubelProgressbar;

  JoubelProgressbar.prototype.updateAria = function () {
    var self = this;
    if (this.options.disableAria) {
      return;
    }

    if (!this.$currentStatus) {
      this.$currentStatus = $('<div>', {
        'class': 'h5p-joubelui-progressbar-slide-status-text',
        'aria-live': 'assertive'
      }).appendTo(this.$progressbar);
    }
    var interpolatedProgressText = self.options.progressText
      .replace(':num', self.currentStep)
      .replace(':total', self.steps);
    this.$currentStatus.html(interpolatedProgressText);
  };

  /**
   * Appends to a container
   * @method appendTo
   * @param  {H5P.jquery} $container
   */
  JoubelProgressbar.prototype.appendTo = function ($container) {
    this.$progressbar.appendTo($container);
  };

  /**
   * Update progress
   * @method setProgress
   * @param  {number}    step
   */
  JoubelProgressbar.prototype.setProgress = function (step) {
    // Check for valid value:
    if (step > this.steps || step < 0) {
      return;
    }
    this.currentStep = step;
    this.$background.css({
      width: ((this.currentStep/this.steps)*100) + '%'
    });

    this.updateAria();
  };

  /**
   * Increment progress with 1
   * @method next
   */
  JoubelProgressbar.prototype.next = function () {
    this.setProgress(this.currentStep+1);
  };

  /**
   * Reset progressbar
   * @method reset
   */
  JoubelProgressbar.prototype.reset = function () {
    this.setProgress(0);
  };

  /**
   * Check if last step is reached
   * @method isLastStep
   * @return {Boolean}
   */
  JoubelProgressbar.prototype.isLastStep = function () {
    return this.steps === this.currentStep;
  };

  return JoubelProgressbar;
})(H5P.jQuery);
;var H5P = H5P || {};

/**
 * H5P Joubel UI library.
 *
 * This is a utility library, which does not implement attach. I.e, it has to bee actively used by
 * other libraries
 * @module
 */
H5P.JoubelUI = (function ($) {

  /**
   * The internal object to return
   * @class H5P.JoubelUI
   * @static
   */
  function JoubelUI() {}

  /* Public static functions */

  /**
   * Create a tip icon
   * @method H5P.JoubelUI.createTip
   * @param  {string}  text   The textual tip
   * @param  {Object}  params Parameters
   * @return {H5P.JoubelTip}
   */
  JoubelUI.createTip = function (text, params) {
    return new H5P.JoubelTip(text, params);
  };

  /**
   * Create message dialog
   * @method H5P.JoubelUI.createMessageDialog
   * @param  {H5P.jQuery}               $container The dom container
   * @param  {string}                   message    The message
   * @return {H5P.JoubelMessageDialog}
   */
  JoubelUI.createMessageDialog = function ($container, message) {
    return new H5P.JoubelMessageDialog($container, message);
  };

  /**
   * Create help text dialog
   * @method H5P.JoubelUI.createHelpTextDialog
   * @param  {string}             header  The textual header
   * @param  {string}             message The textual message
   * @param  {string}             closeButtonTitle The title for the close button
   * @return {H5P.JoubelHelpTextDialog}
   */
  JoubelUI.createHelpTextDialog = function (header, message, closeButtonTitle) {
    return new H5P.JoubelHelpTextDialog(header, message, closeButtonTitle);
  };

  /**
   * Create progress circle
   * @method H5P.JoubelUI.createProgressCircle
   * @param  {number}             number          The progress (0 to 100)
   * @param  {string}             progressColor   The progress color in hex value
   * @param  {string}             fillColor       The fill color in hex value
   * @param  {string}             backgroundColor The background color in hex value
   * @return {H5P.JoubelProgressCircle}
   */
  JoubelUI.createProgressCircle = function (number, progressColor, fillColor, backgroundColor) {
    return new H5P.JoubelProgressCircle(number, progressColor, fillColor, backgroundColor);
  };

  /**
   * Create throbber for loading
   * @method H5P.JoubelUI.createThrobber
   * @return {H5P.JoubelThrobber}
   */
  JoubelUI.createThrobber = function () {
    return new H5P.JoubelThrobber();
  };

  /**
   * Create simple rounded button
   * @method H5P.JoubelUI.createSimpleRoundedButton
   * @param  {string}                  text The button label
   * @return {H5P.SimpleRoundedButton}
   */
  JoubelUI.createSimpleRoundedButton = function (text) {
    return new H5P.SimpleRoundedButton(text);
  };

  /**
   * Create Slider
   * @method H5P.JoubelUI.createSlider
   * @param  {Object} [params] Parameters
   * @return {H5P.JoubelSlider}
   */
  JoubelUI.createSlider = function (params) {
    return new H5P.JoubelSlider(params);
  };

  /**
   * Create Score Bar
   * @method H5P.JoubelUI.createScoreBar
   * @param  {number=}       maxScore The maximum score
   * @param {string} [label] Makes it easier for readspeakers to identify the scorebar
   * @return {H5P.JoubelScoreBar}
   */
  JoubelUI.createScoreBar = function (maxScore, label, helpText, scoreExplanationButtonLabel) {
    return new H5P.JoubelScoreBar(maxScore, label, helpText, scoreExplanationButtonLabel);
  };

  /**
   * Create Progressbar
   * @method H5P.JoubelUI.createProgressbar
   * @param  {number=}       numSteps The total numer of steps
   * @param {Object} [options] Additional options
   * @param {boolean} [options.disableAria] Disable readspeaker assistance
   * @param {string} [options.progressText] A progress text for describing
   *  current progress out of total progress for readspeakers.
   *  e.g. "Slide :num of :total"
   * @return {H5P.JoubelProgressbar}
   */
  JoubelUI.createProgressbar = function (numSteps, options) {
    return new H5P.JoubelProgressbar(numSteps, options);
  };

  /**
   * Create standard Joubel button
   *
   * @method H5P.JoubelUI.createButton
   * @param {object} params
   *  May hold any properties allowed by jQuery. If href is set, an A tag
   *  is used, if not a button tag is used.
   * @return {H5P.jQuery} The jquery element created
   */
  JoubelUI.createButton = function(params) {
    var type = 'button';
    if (params.href) {
      type = 'a';
    }
    else {
      params.type = 'button';
    }
    if (params.class) {
      params.class += ' h5p-joubelui-button';
    }
    else {
      params.class = 'h5p-joubelui-button';
    }
    return $('<' + type + '/>', params);
  };

  /**
   * Fix for iframe scoll bug in IOS. When focusing an element that doesn't have
   * focus support by default the iframe will scroll the parent frame so that
   * the focused element is out of view. This varies dependening on the elements
   * of the parent frame.
   */
  if (H5P.isFramed && !H5P.hasiOSiframeScrollFix &&
      /iPad|iPhone|iPod/.test(navigator.userAgent)) {
    H5P.hasiOSiframeScrollFix = true;

    // Keep track of original focus function
    var focus = HTMLElement.prototype.focus;

    // Override the original focus
    HTMLElement.prototype.focus = function () {
      // Only focus the element if it supports it natively
      if ( (this instanceof HTMLAnchorElement ||
            this instanceof HTMLInputElement ||
            this instanceof HTMLSelectElement ||
            this instanceof HTMLTextAreaElement ||
            this instanceof HTMLButtonElement ||
            this instanceof HTMLIFrameElement ||
            this instanceof HTMLAreaElement) && // HTMLAreaElement isn't supported by Safari yet.
          !this.getAttribute('role')) { // Focus breaks if a different role has been set
          // In theory this.isContentEditable should be able to recieve focus,
          // but it didn't work when tested.

        // Trigger the original focus with the proper context
        focus.call(this);
      }
    };
  }

  return JoubelUI;
})(H5P.jQuery);
;!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=346)}([function(t,e,n){var r=n(2),i=n(18),o=n(11),a=n(12),c=n(19),s=function(t,e,n){var u,A,l,p,h=t&s.F,f=t&s.G,d=t&s.S,g=t&s.P,v=t&s.B,m=f?r:d?r[e]||(r[e]={}):(r[e]||{}).prototype,y=f?i:i[e]||(i[e]={}),b=y.prototype||(y.prototype={});for(u in f&&(n=e),n)l=((A=!h&&m&&void 0!==m[u])?m:n)[u],p=v&&A?c(l,r):g&&"function"==typeof l?c(Function.call,l):l,m&&a(m,u,l,t&s.U),y[u]!=l&&o(y,u,p),g&&b[u]!=l&&(b[u]=l)};r.core=i,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(47)("wks"),i=n(33),o=n(2).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(21),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){t.exports=!n(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),i=n(96),o=n(23),a=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(24);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(8),i=n(32);t.exports=n(7)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(2),i=n(11),o=n(14),a=n(33)("src"),c=n(144),s=(""+c).split("toString");n(18).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var u="function"==typeof n;u&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(u&&(o(n,a)||i(n,a,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||c.call(this)}))},function(t,e,n){var r=n(0),i=n(3),o=n(24),a=/"/g,c=function(t,e,n,r){var i=String(o(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(48),i=n(24);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(49),i=n(32),o=n(15),a=n(23),c=n(14),s=n(96),u=Object.getOwnPropertyDescriptor;e.f=n(7)?u:function(t,e){if(t=o(t),e=a(e,!0),s)try{return u(t,e)}catch(t){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(14),i=n(9),o=n(68)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(10);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(0),i=n(18),o=n(3);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",a)}},function(t,e,n){var r=n(19),i=n(48),o=n(9),a=n(6),c=n(84);t.exports=function(t,e){var n=1==t,s=2==t,u=3==t,A=4==t,l=6==t,p=5==t||l,h=e||c;return function(e,c,f){for(var d,g,v=o(e),m=i(v),y=r(c,f,3),b=a(m.length),M=0,I=n?h(e,b):s?h(e,0):void 0;b>M;M++)if((p||M in m)&&(g=y(d=m[M],M,v),t))if(n)I[M]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return M;case 2:I.push(d)}else if(A)return!1;return l?-1:u||A?A:I}}},function(t,e,n){"use strict";if(n(7)){var r=n(29),i=n(2),o=n(3),a=n(0),c=n(62),s=n(92),u=n(19),A=n(39),l=n(32),p=n(11),h=n(41),f=n(21),d=n(6),g=n(124),v=n(35),m=n(23),y=n(14),b=n(44),M=n(4),I=n(9),k=n(81),E=n(36),w=n(17),N=n(37).f,L=n(83),x=n(33),T=n(5),C=n(26),j=n(52),B=n(51),S=n(86),D=n(46),O=n(57),Q=n(38),z=n(85),U=n(113),F=n(8),Y=n(16),P=F.f,R=Y.f,G=i.RangeError,H=i.TypeError,W=i.Uint8Array,J=Array.prototype,_=s.ArrayBuffer,V=s.DataView,X=C(0),Z=C(2),K=C(3),q=C(4),$=C(5),tt=C(6),et=j(!0),nt=j(!1),rt=S.values,it=S.keys,ot=S.entries,at=J.lastIndexOf,ct=J.reduce,st=J.reduceRight,ut=J.join,At=J.sort,lt=J.slice,pt=J.toString,ht=J.toLocaleString,ft=T("iterator"),dt=T("toStringTag"),gt=x("typed_constructor"),vt=x("def_constructor"),mt=c.CONSTR,yt=c.TYPED,bt=c.VIEW,Mt=C(1,(function(t,e){return Nt(B(t,t[vt]),e)})),It=o((function(){return 1===new W(new Uint16Array([1]).buffer)[0]})),kt=!!W&&!!W.prototype.set&&o((function(){new W(1).set({})})),Et=function(t,e){var n=f(t);if(n<0||n%e)throw G("Wrong offset!");return n},wt=function(t){if(M(t)&&yt in t)return t;throw H(t+" is not a typed array!")},Nt=function(t,e){if(!M(t)||!(gt in t))throw H("It is not a typed array constructor!");return new t(e)},Lt=function(t,e){return xt(B(t,t[vt]),e)},xt=function(t,e){for(var n=0,r=e.length,i=Nt(t,r);r>n;)i[n]=e[n++];return i},Tt=function(t,e,n){P(t,e,{get:function(){return this._d[n]}})},Ct=function(t){var e,n,r,i,o,a,c=I(t),s=arguments.length,A=s>1?arguments[1]:void 0,l=void 0!==A,p=L(c);if(null!=p&&!k(p)){for(a=p.call(c),r=[],e=0;!(o=a.next()).done;e++)r.push(o.value);c=r}for(l&&s>2&&(A=u(A,arguments[2],2)),e=0,n=d(c.length),i=Nt(this,n);n>e;e++)i[e]=l?A(c[e],e):c[e];return i},jt=function(){for(var t=0,e=arguments.length,n=Nt(this,e);e>t;)n[t]=arguments[t++];return n},Bt=!!W&&o((function(){ht.call(new W(1))})),St=function(){return ht.apply(Bt?lt.call(wt(this)):wt(this),arguments)},Dt={copyWithin:function(t,e){return U.call(wt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return q(wt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return z.apply(wt(this),arguments)},filter:function(t){return Lt(this,Z(wt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return $(wt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(wt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){X(wt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(wt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(wt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ut.apply(wt(this),arguments)},lastIndexOf:function(t){return at.apply(wt(this),arguments)},map:function(t){return Mt(wt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ct.apply(wt(this),arguments)},reduceRight:function(t){return st.apply(wt(this),arguments)},reverse:function(){for(var t,e=wt(this).length,n=Math.floor(e/2),r=0;r<n;)t=this[r],this[r++]=this[--e],this[e]=t;return this},some:function(t){return K(wt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return At.call(wt(this),t)},subarray:function(t,e){var n=wt(this),r=n.length,i=v(t,r);return new(B(n,n[vt]))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,d((void 0===e?r:v(e,r))-i))}},Ot=function(t,e){return Lt(this,lt.call(wt(this),t,e))},Qt=function(t){wt(this);var e=Et(arguments[1],1),n=this.length,r=I(t),i=d(r.length),o=0;if(i+e>n)throw G("Wrong length!");for(;o<i;)this[e+o]=r[o++]},zt={entries:function(){return ot.call(wt(this))},keys:function(){return it.call(wt(this))},values:function(){return rt.call(wt(this))}},Ut=function(t,e){return M(t)&&t[yt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Ft=function(t,e){return Ut(t,e=m(e,!0))?l(2,t[e]):R(t,e)},Yt=function(t,e,n){return!(Ut(t,e=m(e,!0))&&M(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?P(t,e,n):(t[e]=n.value,t)};mt||(Y.f=Ft,F.f=Yt),a(a.S+a.F*!mt,"Object",{getOwnPropertyDescriptor:Ft,defineProperty:Yt}),o((function(){pt.call({})}))&&(pt=ht=function(){return ut.call(this)});var Pt=h({},Dt);h(Pt,zt),p(Pt,ft,zt.values),h(Pt,{slice:Ot,set:Qt,constructor:function(){},toString:pt,toLocaleString:St}),Tt(Pt,"buffer","b"),Tt(Pt,"byteOffset","o"),Tt(Pt,"byteLength","l"),Tt(Pt,"length","e"),P(Pt,dt,{get:function(){return this[yt]}}),t.exports=function(t,e,n,s){var u=t+((s=!!s)?"Clamped":"")+"Array",l="get"+t,h="set"+t,f=i[u],v=f||{},m=f&&w(f),y=!f||!c.ABV,I={},k=f&&f.prototype,L=function(t,n){P(t,n,{get:function(){return function(t,n){var r=t._d;return r.v[l](n*e+r.o,It)}(this,n)},set:function(t){return function(t,n,r){var i=t._d;s&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[h](n*e+i.o,r,It)}(this,n,t)},enumerable:!0})};y?(f=n((function(t,n,r,i){A(t,f,u,"_d");var o,a,c,s,l=0,h=0;if(M(n)){if(!(n instanceof _||"ArrayBuffer"==(s=b(n))||"SharedArrayBuffer"==s))return yt in n?xt(f,n):Ct.call(f,n);o=n,h=Et(r,e);var v=n.byteLength;if(void 0===i){if(v%e)throw G("Wrong length!");if((a=v-h)<0)throw G("Wrong length!")}else if((a=d(i)*e)+h>v)throw G("Wrong length!");c=a/e}else c=g(n),o=new _(a=c*e);for(p(t,"_d",{b:o,o:h,l:a,e:c,v:new V(o)});l<c;)L(t,l++)})),k=f.prototype=E(Pt),p(k,"constructor",f)):o((function(){f(1)}))&&o((function(){new f(-1)}))&&O((function(t){new f,new f(null),new f(1.5),new f(t)}),!0)||(f=n((function(t,n,r,i){var o;return A(t,f,u),M(n)?n instanceof _||"ArrayBuffer"==(o=b(n))||"SharedArrayBuffer"==o?void 0!==i?new v(n,Et(r,e),i):void 0!==r?new v(n,Et(r,e)):new v(n):yt in n?xt(f,n):Ct.call(f,n):new v(g(n))})),X(m!==Function.prototype?N(v).concat(N(m)):N(v),(function(t){t in f||p(f,t,v[t])})),f.prototype=k,r||(k.constructor=f));var x=k[ft],T=!!x&&("values"==x.name||null==x.name),C=zt.values;p(f,gt,!0),p(k,yt,u),p(k,bt,!0),p(k,vt,f),(s?new f(1)[dt]==u:dt in k)||P(k,dt,{get:function(){return u}}),I[u]=f,a(a.G+a.W+a.F*(f!=v),I),a(a.S,u,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*o((function(){v.of.call(f,1)})),u,{from:Ct,of:jt}),"BYTES_PER_ELEMENT"in k||p(k,"BYTES_PER_ELEMENT",e),a(a.P,u,Dt),Q(u),a(a.P+a.F*kt,u,{set:Qt}),a(a.P+a.F*!T,u,zt),r||k.toString==pt||(k.toString=pt),a(a.P+a.F*o((function(){new f(1).slice()})),u,{slice:Ot}),a(a.P+a.F*(o((function(){return[1,2].toLocaleString()!=new f([1,2]).toLocaleString()}))||!o((function(){k.toLocaleString.call([1,2])}))),u,{toLocaleString:St}),D[u]=T?x:C,r||T||p(k,ft,C)}}else t.exports=function(){}},function(t,e,n){var r=n(119),i=n(0),o=n(47)("metadata"),a=o.store||(o.store=new(n(122))),c=function(t,e,n){var i=a.get(t);if(!i){if(!n)return;a.set(t,i=new r)}var o=i.get(e);if(!o){if(!n)return;i.set(e,o=new r)}return o};t.exports={store:a,map:c,has:function(t,e,n){var r=c(e,n,!1);return void 0!==r&&r.has(t)},get:function(t,e,n){var r=c(e,n,!1);return void 0===r?void 0:r.get(t)},set:function(t,e,n,r){c(n,r,!0).set(t,e)},keys:function(t,e){var n=c(t,e,!1),r=[];return n&&n.forEach((function(t,e){r.push(e)})),r},key:function(t){return void 0===t||"symbol"==typeof t?t:String(t)},exp:function(t){i(i.S,"Reflect",t)}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(33)("meta"),i=n(4),o=n(14),a=n(8).f,c=0,s=Object.isExtensible||function(){return!0},u=!n(3)((function(){return s(Object.preventExtensions({}))})),A=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!s(t))return"F";if(!e)return"E";A(t)}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!s(t))return!0;if(!e)return!1;A(t)}return t[r].w},onFreeze:function(t){return u&&l.NEED&&s(t)&&!o(t,r)&&A(t),t}}},function(t,e,n){var r=n(5)("unscopables"),i=Array.prototype;null==i[r]&&n(11)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(98),i=n(69);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(21),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(1),i=n(99),o=n(69),a=n(68)("IE_PROTO"),c=function(){},s=function(){var t,e=n(66)("iframe"),r=o.length;for(e.style.display="none",n(70).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[o[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[a]=t):n=s(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(98),i=n(69).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){"use strict";var r=n(2),i=n(8),o=n(7),a=n(5)("species");t.exports=function(t){var e=r[t];o&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(19),i=n(111),o=n(81),a=n(1),c=n(6),s=n(83),u={},A={};(e=t.exports=function(t,e,n,l,p){var h,f,d,g,v=p?function(){return t}:s(t),m=r(n,l,e?2:1),y=0;if("function"!=typeof v)throw TypeError(t+" is not iterable!");if(o(v)){for(h=c(t.length);h>y;y++)if((g=e?m(a(f=t[y])[0],f[1]):m(t[y]))===u||g===A)return g}else for(d=v.call(t);!(f=d.next()).done;)if((g=i(d,m,f.value,e))===u||g===A)return g}).BREAK=u,e.RETURN=A},function(t,e,n){var r=n(12);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){var r=n(8).f,i=n(14),o=n(5)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(20),i=n(5)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(0),i=n(24),o=n(3),a=n(72),c="["+a+"]",s=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),A=function(t,e,n){var i={},c=o((function(){return!!a[t]()||"​"!="​"[t]()})),s=i[t]=c?e(l):a[t];n&&(i[n]=s),r(r.P+r.F*c,"String",i)},l=A.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(u,"")),t};t.exports=A},function(t,e){t.exports={}},function(t,e,n){var r=n(18),i=n(2),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(29)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";var r=n(1);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(1),i=n(10),o=n(5)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[o])?e:i(n)}},function(t,e,n){var r=n(15),i=n(6),o=n(35);t.exports=function(t){return function(e,n,a){var c,s=r(e),u=i(s.length),A=o(a,u);if(t&&n!=n){for(;u>A;)if((c=s[A++])!=c)return!0}else for(;u>A;A++)if((t||A in s)&&s[A]===n)return t||A||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(21),i=n(24);t.exports=function(t){return function(e,n){var o,a,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s))<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):o:t?c.slice(s,s+2):a-56320+(o-55296<<10)+65536}}},function(t,e,n){var r=n(4),i=n(20),o=n(5)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){var r=n(5)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(44),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n(115);var r=n(12),i=n(11),o=n(3),a=n(24),c=n(5),s=n(87),u=c("species"),A=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=c(t),h=!o((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),f=h?!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e})):void 0;if(!h||!f||"replace"===t&&!A||"split"===t&&!l){var d=/./[p],g=n(a,p,""[t],(function(t,e,n,r,i){return e.exec===s?h&&!i?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),v=g[0],m=g[1];r(String.prototype,t,v),i(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},function(t,e,n){var r=n(2).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){"use strict";var r=n(2),i=n(0),o=n(12),a=n(41),c=n(30),s=n(40),u=n(39),A=n(4),l=n(3),p=n(57),h=n(43),f=n(73);t.exports=function(t,e,n,d,g,v){var m=r[t],y=m,b=g?"set":"add",M=y&&y.prototype,I={},k=function(t){var e=M[t];o(M,t,"delete"==t||"has"==t?function(t){return!(v&&!A(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!A(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof y&&(v||M.forEach&&!l((function(){(new y).entries().next()})))){var E=new y,w=E[b](v?{}:-0,1)!=E,N=l((function(){E.has(1)})),L=p((function(t){new y(t)})),x=!v&&l((function(){for(var t=new y,e=5;e--;)t[b](e,e);return!t.has(-0)}));L||((y=e((function(e,n){u(e,y,t);var r=f(new m,e,y);return null!=n&&s(n,g,r[b],r),r}))).prototype=M,M.constructor=y),(N||x)&&(k("delete"),k("has"),g&&k("get")),(x||w)&&k(b),v&&M.clear&&delete M.clear}else y=d.getConstructor(e,t,g,b),a(y.prototype,n),c.NEED=!0;return h(y,t),I[t]=y,i(i.G+i.W+i.F*(y!=m),I),v||d.setStrong(y,t,g),y}},function(t,e,n){for(var r,i=n(2),o=n(11),a=n(33),c=a("typed_array"),s=a("view"),u=!(!i.ArrayBuffer||!i.DataView),A=u,l=0,p="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(r=i[p[l++]])?(o(r.prototype,c,!0),o(r.prototype,s,!0)):A=!1;t.exports={ABV:u,CONSTR:A,TYPED:c,VIEW:s}},function(t,e,n){"use strict";t.exports=n(29)||!n(3)((function(){var t=Math.random();__defineSetter__.call(null,t,(function(){})),delete n(2)[t]}))},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},function(t,e,n){"use strict";var r=n(0),i=n(10),o=n(19),a=n(40);t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,c,s=arguments[1];return i(this),(e=void 0!==s)&&i(s),null==t?new this:(n=[],e?(r=0,c=o(s,arguments[2],2),a(t,!1,(function(t){n.push(c(t,r++))}))):a(t,!1,n.push,n),new this(n))}})}},function(t,e,n){var r=n(4),i=n(2).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(2),i=n(18),o=n(29),a=n(97),c=n(8).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},function(t,e,n){var r=n(47)("keys"),i=n(33);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(4),i=n(1),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(19)(Function.call,n(16).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var r=n(4),i=n(71).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},function(t,e,n){"use strict";var r=n(21),i=n(24);t.exports=function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){"use strict";var r=n(29),i=n(0),o=n(12),a=n(11),c=n(46),s=n(78),u=n(43),A=n(17),l=n(5)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,f,d,g,v){s(n,e,f);var m,y,b,M=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},I=e+" Iterator",k="values"==d,E=!1,w=t.prototype,N=w[l]||w["@@iterator"]||d&&w[d],L=N||M(d),x=d?k?M("entries"):L:void 0,T="Array"==e&&w.entries||N;if(T&&(b=A(T.call(new t)))!==Object.prototype&&b.next&&(u(b,I,!0),r||"function"==typeof b[l]||a(b,l,h)),k&&N&&"values"!==N.name&&(E=!0,L=function(){return N.call(this)}),r&&!v||!p&&!E&&w[l]||a(w,l,L),c[e]=L,c[I]=h,d)if(m={values:k?L:M("values"),keys:g?L:M("keys"),entries:x},v)for(y in m)y in w||o(w,y,m[y]);else i(i.P+i.F*(p||E),e,m);return m}},function(t,e,n){"use strict";var r=n(36),i=n(32),o=n(43),a={};n(11)(a,n(5)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(56),i=n(24);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},function(t,e,n){var r=n(5)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var r=n(46),i=n(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(8),i=n(32);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(44),i=n(5)("iterator"),o=n(46);t.exports=n(18).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(233);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){"use strict";var r=n(9),i=n(35),o=n(6);t.exports=function(t){for(var e=r(this),n=o(e.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,u=void 0===s?n:i(s,n);u>c;)e[c++]=t;return e}},function(t,e,n){"use strict";var r=n(31),i=n(114),o=n(46),a=n(15);t.exports=n(77)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e,n){"use strict";var r,i,o=n(50),a=RegExp.prototype.exec,c=String.prototype.replace,s=a,u=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),A=void 0!==/()??/.exec("")[1];(u||A)&&(s=function(t){var e,n,r,i,s=this;return A&&(n=new RegExp("^"+s.source+"$(?!\\s)",o.call(s))),u&&(e=s.lastIndex),r=a.call(s,t),u&&r&&(s.lastIndex=s.global?r.index+r[0].length:e),A&&r&&r.length>1&&c.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=s},function(t,e,n){"use strict";var r=n(55)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r,i,o,a=n(19),c=n(104),s=n(70),u=n(66),A=n(2),l=A.process,p=A.setImmediate,h=A.clearImmediate,f=A.MessageChannel,d=A.Dispatch,g=0,v={},m=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},y=function(t){m.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return v[++g]=function(){c("function"==typeof t?t:Function(t),e)},r(g),g},h=function(t){delete v[t]},"process"==n(20)(l)?r=function(t){l.nextTick(a(m,t,1))}:d&&d.now?r=function(t){d.now(a(m,t,1))}:f?(o=(i=new f).port2,i.port1.onmessage=y,r=a(o.postMessage,o,1)):A.addEventListener&&"function"==typeof postMessage&&!A.importScripts?(r=function(t){A.postMessage(t+"","*")},A.addEventListener("message",y,!1)):r="onreadystatechange"in u("script")?function(t){s.appendChild(u("script")).onreadystatechange=function(){s.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,e,n){var r=n(2),i=n(89).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,c=r.Promise,s="process"==n(20)(a);t.exports=function(){var t,e,n,u=function(){var r,i;for(s&&(r=a.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(s)n=function(){a.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var A=c.resolve(void 0);n=function(){A.then(u)}}else n=function(){i.call(r,u)};else{var l=!0,p=document.createTextNode("");new o(u).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},function(t,e,n){"use strict";var r=n(10);function i(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},function(t,e,n){"use strict";var r=n(2),i=n(7),o=n(29),a=n(62),c=n(11),s=n(41),u=n(3),A=n(39),l=n(21),p=n(6),h=n(124),f=n(37).f,d=n(8).f,g=n(85),v=n(43),m=r.ArrayBuffer,y=r.DataView,b=r.Math,M=r.RangeError,I=r.Infinity,k=m,E=b.abs,w=b.pow,N=b.floor,L=b.log,x=b.LN2,T=i?"_b":"buffer",C=i?"_l":"byteLength",j=i?"_o":"byteOffset";function B(t,e,n){var r,i,o,a=new Array(n),c=8*n-e-1,s=(1<<c)-1,u=s>>1,A=23===e?w(2,-24)-w(2,-77):0,l=0,p=t<0||0===t&&1/t<0?1:0;for((t=E(t))!=t||t===I?(i=t!=t?1:0,r=s):(r=N(L(t)/x),t*(o=w(2,-r))<1&&(r--,o*=2),(t+=r+u>=1?A/o:A*w(2,1-u))*o>=2&&(r++,o/=2),r+u>=s?(i=0,r=s):r+u>=1?(i=(t*o-1)*w(2,e),r+=u):(i=t*w(2,u-1)*w(2,e),r=0));e>=8;a[l++]=255&i,i/=256,e-=8);for(r=r<<e|i,c+=e;c>0;a[l++]=255&r,r/=256,c-=8);return a[--l]|=128*p,a}function S(t,e,n){var r,i=8*n-e-1,o=(1<<i)-1,a=o>>1,c=i-7,s=n-1,u=t[s--],A=127&u;for(u>>=7;c>0;A=256*A+t[s],s--,c-=8);for(r=A&(1<<-c)-1,A>>=-c,c+=e;c>0;r=256*r+t[s],s--,c-=8);if(0===A)A=1-a;else{if(A===o)return r?NaN:u?-I:I;r+=w(2,e),A-=a}return(u?-1:1)*r*w(2,A-e)}function D(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function O(t){return[255&t]}function Q(t){return[255&t,t>>8&255]}function z(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function U(t){return B(t,52,8)}function F(t){return B(t,23,4)}function Y(t,e,n){d(t.prototype,e,{get:function(){return this[n]}})}function P(t,e,n,r){var i=h(+n);if(i+e>t[C])throw M("Wrong index!");var o=t[T]._b,a=i+t[j],c=o.slice(a,a+e);return r?c:c.reverse()}function R(t,e,n,r,i,o){var a=h(+n);if(a+e>t[C])throw M("Wrong index!");for(var c=t[T]._b,s=a+t[j],u=r(+i),A=0;A<e;A++)c[s+A]=u[o?A:e-A-1]}if(a.ABV){if(!u((function(){m(1)}))||!u((function(){new m(-1)}))||u((function(){return new m,new m(1.5),new m(NaN),"ArrayBuffer"!=m.name}))){for(var G,H=(m=function(t){return A(this,m),new k(h(t))}).prototype=k.prototype,W=f(k),J=0;W.length>J;)(G=W[J++])in m||c(m,G,k[G]);o||(H.constructor=m)}var _=new y(new m(2)),V=y.prototype.setInt8;_.setInt8(0,2147483648),_.setInt8(1,2147483649),!_.getInt8(0)&&_.getInt8(1)||s(y.prototype,{setInt8:function(t,e){V.call(this,t,e<<24>>24)},setUint8:function(t,e){V.call(this,t,e<<24>>24)}},!0)}else m=function(t){A(this,m,"ArrayBuffer");var e=h(t);this._b=g.call(new Array(e),0),this[C]=e},y=function(t,e,n){A(this,y,"DataView"),A(t,m,"DataView");var r=t[C],i=l(e);if(i<0||i>r)throw M("Wrong offset!");if(i+(n=void 0===n?r-i:p(n))>r)throw M("Wrong length!");this[T]=t,this[j]=i,this[C]=n},i&&(Y(m,"byteLength","_l"),Y(y,"buffer","_b"),Y(y,"byteLength","_l"),Y(y,"byteOffset","_o")),s(y.prototype,{getInt8:function(t){return P(this,1,t)[0]<<24>>24},getUint8:function(t){return P(this,1,t)[0]},getInt16:function(t){var e=P(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=P(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return D(P(this,4,t,arguments[1]))},getUint32:function(t){return D(P(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return S(P(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return S(P(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){R(this,1,t,O,e)},setUint8:function(t,e){R(this,1,t,O,e)},setInt16:function(t,e){R(this,2,t,Q,e,arguments[2])},setUint16:function(t,e){R(this,2,t,Q,e,arguments[2])},setInt32:function(t,e){R(this,4,t,z,e,arguments[2])},setUint32:function(t,e){R(this,4,t,z,e,arguments[2])},setFloat32:function(t,e){R(this,4,t,F,e,arguments[2])},setFloat64:function(t,e){R(this,8,t,U,e,arguments[2])}});v(m,"ArrayBuffer"),v(y,"DataView"),c(y.prototype,a.VIEW,!0),e.ArrayBuffer=m,e.DataView=y},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e){var n={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},i=r((function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())})),o=r((function(){return document.head||document.getElementsByTagName("head")[0]})),a=null,c=0,s=[];function u(t,e){for(var r=0;r<t.length;r++){var i=t[r],o=n[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(f(i.parts[a],e))}else{var c=[];for(a=0;a<i.parts.length;a++)c.push(f(i.parts[a],e));n[i.id]={id:i.id,refs:1,parts:c}}}}function A(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],o=i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[o]?n[o].parts.push(a):e.push(n[o]={id:o,parts:[a]})}return e}function l(t,e){var n=o(),r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function p(t){t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function h(t){var e=document.createElement("style");return e.type="text/css",l(t,e),e}function f(t,e){var n,r,i;if(e.singleton){var o=c++;n=a||(a=h(e)),r=v.bind(null,n,o,!1),i=v.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return e.rel="stylesheet",l(t,e),e}(e),r=y.bind(null,n),i=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=m.bind(null,n),i=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(e=e||{}).singleton&&(e.singleton=i()),void 0===e.insertAt&&(e.insertAt="bottom");var r=A(t);return u(r,e),function(t){for(var i=[],o=0;o<r.length;o++){var a=r[o];(c=n[a.id]).refs--,i.push(c)}t&&u(A(t),e);for(o=0;o<i.length;o++){var c;if(0===(c=i[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete n[c.id]}}}};var d,g=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function v(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function m(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function y(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){t.exports=!n(7)&&!n(3)((function(){return 7!=Object.defineProperty(n(66)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){e.f=n(5)},function(t,e,n){var r=n(14),i=n(15),o=n(52)(!1),a=n(68)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),s=0,u=[];for(n in c)n!=a&&r(c,n)&&u.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var r=n(8),i=n(1),o=n(34);t.exports=n(7)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),c=a.length,s=0;c>s;)r.f(t,n=a[s++],e[n]);return t}},function(t,e,n){var r=n(15),i=n(37).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},function(t,e,n){"use strict";var r=n(34),i=n(53),o=n(49),a=n(9),c=n(48),s=Object.assign;t.exports=!s||n(3)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r}))?function(t,e){for(var n=a(t),s=arguments.length,u=1,A=i.f,l=o.f;s>u;)for(var p,h=c(arguments[u++]),f=A?r(h).concat(A(h)):r(h),d=f.length,g=0;d>g;)l.call(h,p=f[g++])&&(n[p]=h[p]);return n}:s},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var r=n(10),i=n(4),o=n(104),a=[].slice,c={},s=function(t,e,n){if(!(e in c)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";c[e]=Function("F,a","return new F("+r.join(",")+")")}return c[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=a.call(arguments,1),c=function(){var r=n.concat(a.call(arguments));return this instanceof c?s(e,r.length,r):o(e,r,t)};return i(e.prototype)&&(c.prototype=e.prototype),c}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(2).parseInt,i=n(45).trim,o=n(72),a=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},function(t,e,n){var r=n(2).parseFloat,i=n(45).trim;t.exports=1/r(n(72)+"-0")!=-1/0?function(t){var e=i(String(t),3),n=r(e);return 0===n&&"-"==e.charAt(0)?-0:n}:r},function(t,e,n){var r=n(20);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(e);return+t}},function(t,e,n){var r=n(4),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){var r=n(75),i=Math.pow,o=i(2,-52),a=i(2,-23),c=i(2,127)*(2-a),s=i(2,-126);t.exports=Math.fround||function(t){var e,n,i=Math.abs(t),u=r(t);return i<s?u*(i/s/a+1/o-1/o)*s*a:(n=(e=(1+a/o)*i)-(e-i))>c||n!=n?u*(1/0):u*n}},function(t,e,n){var r=n(1);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(10),i=n(9),o=n(48),a=n(6);t.exports=function(t,e,n,c,s){r(e);var u=i(t),A=o(u),l=a(u.length),p=s?l-1:0,h=s?-1:1;if(n<2)for(;;){if(p in A){c=A[p],p+=h;break}if(p+=h,s?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;s?p>=0:l>p;p+=h)p in A&&(c=e(c,A[p],p,u));return c}},function(t,e,n){"use strict";var r=n(9),i=n(35),o=n(6);t.exports=[].copyWithin||function(t,e){var n=r(this),a=o(n.length),c=i(t,a),s=i(e,a),u=arguments.length>2?arguments[2]:void 0,A=Math.min((void 0===u?a:i(u,a))-s,a-c),l=1;for(s<c&&c<s+A&&(l=-1,s+=A-1,c+=A-1);A-- >0;)s in n?n[c]=n[s]:delete n[c],c+=l,s+=l;return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(87);n(0)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){n(7)&&"g"!=/./g.flags&&n(8).f(RegExp.prototype,"flags",{configurable:!0,get:n(50)})},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(1),i=n(4),o=n(91);t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var r=n(120),i=n(42);t.exports=n(61)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(i(this,"Map"),0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict";var r=n(8).f,i=n(36),o=n(41),a=n(19),c=n(39),s=n(40),u=n(77),A=n(114),l=n(38),p=n(7),h=n(30).fastKey,f=n(42),d=p?"_s":"size",g=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var A=t((function(t,r){c(t,A,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,null!=r&&s(r,n,t[u],t)}));return o(A.prototype,{clear:function(){for(var t=f(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=f(this,e),r=g(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[d]--}return!!r},forEach:function(t){f(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!g(f(this,e),t)}}),p&&r(A.prototype,"size",{get:function(){return f(this,e)[d]}}),A},def:function(t,e,n){var r,i,o=g(t,e);return o?o.v=n:(t._l=o={i:i=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,e,n){u(t,e,(function(t,n){this._t=f(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?A(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,A(1))}),n?"entries":"values",!n,!0),l(e)}}},function(t,e,n){"use strict";var r=n(120),i=n(42);t.exports=n(61)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},function(t,e,n){"use strict";var r,i=n(2),o=n(26)(0),a=n(12),c=n(30),s=n(101),u=n(123),A=n(4),l=n(42),p=n(42),h=!i.ActiveXObject&&"ActiveXObject"in i,f=c.getWeak,d=Object.isExtensible,g=u.ufstore,v=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},m={get:function(t){if(A(t)){var e=f(t);return!0===e?g(l(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return u.def(l(this,"WeakMap"),t,e)}},y=t.exports=n(61)("WeakMap",v,m,u,!0,!0);p&&h&&(s((r=u.getConstructor(v,"WeakMap")).prototype,m),c.NEED=!0,o(["delete","has","get","set"],(function(t){var e=y.prototype,n=e[t];a(e,t,(function(e,i){if(A(e)&&!d(e)){this._f||(this._f=new r);var o=this._f[t](e,i);return"set"==t?this:o}return n.call(this,e,i)}))})))},function(t,e,n){"use strict";var r=n(41),i=n(30).getWeak,o=n(1),a=n(4),c=n(39),s=n(40),u=n(26),A=n(14),l=n(42),p=u(5),h=u(6),f=0,d=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},v=function(t,e){return p(t.a,(function(t){return t[0]===e}))};g.prototype={get:function(t){var e=v(this,t);if(e)return e[1]},has:function(t){return!!v(this,t)},set:function(t,e){var n=v(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=h(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,o){var u=t((function(t,r){c(t,u,e,"_i"),t._t=e,t._i=f++,t._l=void 0,null!=r&&s(r,n,t[o],t)}));return r(u.prototype,{delete:function(t){if(!a(t))return!1;var n=i(t);return!0===n?d(l(this,e)).delete(t):n&&A(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=i(t);return!0===n?d(l(this,e)).has(t):n&&A(n,this._i)}}),u},def:function(t,e,n){var r=i(o(e),!0);return!0===r?d(t).set(e,n):r[t._i]=n,t},ufstore:d}},function(t,e,n){var r=n(21),i=n(6);t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var r=n(37),i=n(53),o=n(1),a=n(2).Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){"use strict";var r=n(54),i=n(4),o=n(6),a=n(19),c=n(5)("isConcatSpreadable");t.exports=function t(e,n,s,u,A,l,p,h){for(var f,d,g=A,v=0,m=!!p&&a(p,h,3);v<u;){if(v in s){if(f=m?m(s[v],v,n):s[v],d=!1,i(f)&&(d=void 0!==(d=f[c])?!!d:r(f)),d&&l>0)g=t(e,n,f,o(f.length),g,l-1)-1;else{if(g>=9007199254740991)throw TypeError();e[g]=f}g++}v++}return g}},function(t,e,n){var r=n(6),i=n(74),o=n(24);t.exports=function(t,e,n,a){var c=String(o(t)),s=c.length,u=void 0===n?" ":String(n),A=r(e);if(A<=s||""==u)return c;var l=A-s,p=i.call(u,Math.ceil(l/u.length));return p.length>l&&(p=p.slice(0,l)),a?p+c:c+p}},function(t,e,n){var r=n(34),i=n(15),o=n(49).f;t.exports=function(t){return function(e){for(var n,a=i(e),c=r(a),s=c.length,u=0,A=[];s>u;)o.call(a,n=c[u++])&&A.push(t?[n,a[n]]:a[n]);return A}}},function(t,e,n){var r=n(44),i=n(130);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,e,n){var r=n(40);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},function(t,e){t.exports=Math.scale||function(t,e,n,r,i){return 0===arguments.length||t!=t||e!=e||n!=n||r!=r||i!=i?NaN:t===1/0||t===-1/0?t:(t-e)*(i-r)/(n-e)+r}},function(t,e,n){var r=n(133);"string"==typeof r&&(r=[[t.i,r,""]]);n(94)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(93)(!1)).push([t.i,".h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation{max-width:none;width:100%}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation .large-navigation-list{height:auto}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-accordion{opacity:0;visibility:hidden}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button{background-color:#fff}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current{border-bottom:solid 1px #e9e4ed}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-sectionlist{max-height:none;overflow:inherit;transition:max-height .5s ease-in;visibility:inherit;padding-left:0.3rem}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-content{display:none}.h5p-interactive-book.h5p-scrollable-fullscreen.h5p-semi-fullscreen{overflow-y:scroll;-webkit-overflow-scrolling:touch}.h5p-interactive-book .h5p-scrollable-fullscreen{overflow-y:auto}.h5p-interactive-book.h5p-fullscreen{background-color:#fff}.h5p-interactive-book .h5p-content-controls{display:none}.h5p-interactive-book ::-webkit-scrollbar{width:6px;background:rgba(108,121,146,0.35)}.h5p-interactive-book ::-webkit-scrollbar-thumb{background:rgba(108,121,146,0.75);border-radius:4px}.h5p-interactive-book ::-webkit-scrollbar-thumb:hover{background:#6C7992}.h5p-interactive-book-main{display:flex;flex:1;overflow:hidden}.h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation{max-width:16.563em;width:16.563em}.h5p-content-hidden .h5p-interactive-book-cover-present{display:none}.h5p-fullscreen .h5p-interactive-book,.h5p-semi-fullscreen .h5p-interactive-book{display:flex;flex-direction:column}.h5p-fullscreen .h5p-interactive-book.edge-18 .h5p-interactive-book-status,.h5p-semi-fullscreen .h5p-interactive-book.edge-18 .h5p-interactive-book-status{padding-right:9em}.h5p-fullscreen .h5p-interactive-book .h5p-interactive-book-content,.h5p-semi-fullscreen .h5p-interactive-book .h5p-interactive-book-content{padding-bottom:4.5em}.h5p-fullscreen .h5p-interactive-book .h5p-interactive-book-status-footer,.h5p-semi-fullscreen .h5p-interactive-book .h5p-interactive-book-status-footer{position:absolute;bottom:0;width:100%;left:0}.h5p-fullscreen .h5p-interactive-book-main,.h5p-semi-fullscreen .h5p-interactive-book-main{flex:1;overflow:auto}.h5p-fullscreen .h5p-interactive-book-main .h5p-interactive-book-content,.h5p-semi-fullscreen .h5p-interactive-book-main .h5p-interactive-book-content{overflow-x:hidden;overflow-y:auto;min-height:calc(100% - 5.5em)}.h5p-fullscreen .h5p-interactive-book-navigation,.h5p-semi-fullscreen .h5p-interactive-book-navigation{display:flex;flex-direction:column}.h5p-fullscreen .h5p-interactive-book-navigation .navigation-list,.h5p-semi-fullscreen .h5p-interactive-book-navigation .navigation-list{flex:1;overflow-x:hidden;overflow-y:auto}.h5p-fullscreen .h5p-interactive-book-navigation .large-navigation-list,.h5p-semi-fullscreen .h5p-interactive-book-navigation .large-navigation-list{min-height:1px}.h5p-interactive-book-chapter{display:none;left:0;overflow:hidden;position:absolute;right:0;top:0;transform:translateX(0);transition:.25s;width:100%}.h5p-interactive-book-chapter.h5p-interactive-book-previous{transform:translateX(-100%)}.h5p-interactive-book-chapter.h5p-interactive-book-current{display:block;transform:translateX(0)}.h5p-interactive-book-chapter.h5p-interactive-book-next{transform:translateX(100%)}.h5p-interactive-book-chapter>div{margin-left:auto;margin-right:auto;max-width:1058px}.h5p-interactive-book-animate{display:block;transition:transform .25s ease-in-out}.h5p-interactive-book-content{padding:1rem;overflow:hidden;position:relative;width:100%}.h5p-interactive-book-content.hidden{display:none}.h5p-interactive-book-content .h5p-column-content{max-height:9999999px}.h5p-interactive-book-content .h5p-column-content:first-child{margin-top:0}.h5p-interactive-book-content .h5p-column-content:first-child>p{margin-top:0}.h5p-interactive-book-status-progress-marker{align-items:center;border-top:1px solid #eee;display:flex;padding:1em 0 0 1em;clear:both;cursor:pointer}.h5p-interactive-book-status-progress-marker input[type='checkbox']{transform:scale(1.75);cursor:pointer}.h5p-interactive-book-status-progress-marker p{color:#4c4452;font-weight:bold;margin:0;padding-left:1em}.h5p-content-hidden{display:none}.h5p-course-presentation .h5p-wrapper{height:596px}.h5p-interactive-book-status{align-items:center;background-color:#fff;background-size:cover;border:0;border-color:#1a73d9;border-style:solid;box-shadow:10px 10px 30px rgba(166,166,166,0.2);display:flex;overflow:hidden;padding:.5em}.h5p-interactive-book-status .h5p-interactive-book-status-button{align-items:center;border-radius:3px;display:flex;height:3.6em;padding:0;width:3.6em}.h5p-interactive-book-status-button{border-radius:3px}.h5p-interactive-book-status-button:hover{background-color:rgba(26,115,217,0.1);background-size:cover;cursor:pointer}.h5p-interactive-book-status-button:active{background-color:rgba(26,115,217,0.2);background-size:cover}.h5p-interactive-book-status-button[disabled]:hover{background-color:transparent;cursor:default}.h5p-interactive-book-status-fullscreen{background-color:rgba(26,115,217,0.05);background-size:cover;border:0.125em solid #fff;flex-shrink:0;justify-content:center}.h5p-interactive-book-status-fullscreen.h5p-interactive-book-enter-fullscreen::before{color:#1a73d9;content:'\\e90b';font-family:'h5p-book';font-size:1.2em}.h5p-interactive-book-status-fullscreen.h5p-interactive-book-exit-fullscreen::before{font-size:1.2em;color:#1a73d9;content:'\\e90c';font-family:'h5p-book'}.h5p-interactive-book-status-menu{background-color:#fff;background-size:cover;border:2px solid #fff;border-radius:3px;flex-shrink:0}.h5p-interactive-book-status-menu .icon-menu{color:#1a73d9;font-size:1.5em;margin:auto}.h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active{background-color:#1a73d9;opacity:20;position:relative}.h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active .icon-menu{color:#fff;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%)}.h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active:hover{background-color:rgba(26,115,217,0.9);background-size:cover;cursor:pointer}.h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active:active{background-color:rgba(26,115,217,0.95);background-size:cover}.h5p-interactive-book-status-progress{flex-shrink:0;margin:0;white-space:nowrap;width:86px}.h5p-interactive-book-status-progress .hidden-but-read{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.h5p-interactive-book-status-progress-number{color:#1a73d9;font-family:Arial;font-size:20px;font-weight:700;text-align:right;text-decoration:none solid #1a73d9}.h5p-interactive-book-status-progress-divider{color:#4c4452;font-family:Arial;font-size:20px;font-weight:700;text-align:right;text-decoration:none solid #4c4452}.h5p-interactive-book-status-progressbar-back{background-color:rgba(26,115,217,0.2);background-size:cover;width:100%}.h5p-interactive-book-status-progressbar-front{background-color:#1a73d9;height:.313em;transition:1s}.h5p-interactive-book-status-chapter{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.h5p-interactive-book-status-chapter .title{color:#4c4452;font-family:Arial;font-size:20px;font-weight:700;margin:0;overflow:hidden;padding:0 1rem;text-decoration:none solid #4c4452;text-overflow:ellipsis}.h5p-interactive-book-status-arrow{background-color:rgba(26,115,217,0.05);background-size:cover;border:0.125em solid #fff;border-radius:3px;flex-shrink:0;height:2.75em;width:2.75em}.h5p-interactive-book-status-arrow .navigation-button{background:transparent;border:0;color:#1a73d9;font-size:1.5em;margin:auto}.h5p-interactive-book-status-arrow .navigation-button.disabled{opacity:.5}.h5p-interactive-book-status-header{-webkit-position:sticky;position:sticky;background:#fff;top:0;z-index:2}.h5p-interactive-book-status-header .h5p-interactive-book-status-to-top{display:none}.h5p-interactive-book-status-footer{bottom:0}.h5p-interactive-book-status-footer .h5p-interactive-book-status-menu{display:none}.h5p-interactive-book-status-footer.footer-hidden{display:none}.h5p-interactive-book-navigation{background-color:#fff;background-size:cover;box-shadow:0.625em 0.625em 1.875em rgba(166,166,166,0.2);max-width:0;min-height:19em;overflow:hidden;position:sticky;top:0;transition:width .15s linear, flex-basis .15s linear, max-width .15s linear;width:0;z-index:1;display:flex;flex-direction:column}.h5p-interactive-book-navigation>a{font-weight:bold}.h5p-interactive-book-navigation>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.h5p-interactive-book-navigation .navigation-list{margin:0;padding:0}.h5p-interactive-book-navigation .large-navigation-list{height:0;overflow-y:auto;flex:1 1 auto;min-height:58em}.h5p-interactive-book-navigation-sectionlist{background-color:#fff;background-size:cover;margin:0;padding:0;transition:max-height .5s ease-in}.h5p-interactive-book-navigation-sectionlist>:first-child{margin-top:.5em}.h5p-interactive-book-navigation-sectionlist>:last-child{border-bottom:solid 1px #e9e4ed;padding-bottom:.5em}.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section{background:transparent;color:#4c4452;font-size:.875em;font-weight:400;line-height:1.8;overflow:hidden;text-overflow:ellipsis}.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .section-button{position:relative;background:transparent;border:0;padding:0 1.125em;max-width:100%}.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-icon{position:absolute;color:#000;font-size:5px;visibility:hidden;width:2.17em;top:50%;transform:translateY(-50%)}.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-icon.h5p-interactive-book-navigation-section-task{visibility:inherit}.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-title{font-size:.85em;margin-left:15px;margin-right:2em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.h5p-interactive-book-navigation-sectionlist :hover{color:#1a73d9;cursor:pointer}.h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-chapter-button{background-color:#fff}.h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-title-text{color:#4c4452}.h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-sectionlist{max-height:0;overflow:hidden;transition:max-height .5s ease-out;visibility:hidden}.h5p-interactive-book-navigation-chapter{list-style:none}.h5p-interactive-book-navigation-chapter-button{align-items:center;background-color:rgba(26,115,217,0.1);background-size:cover;border:0;border-bottom:solid 1px #e9e4ed;color:#4c4452;display:flex;font-family:Arial;height:3.438em;margin:0;padding:0 1.125em;text-align:initial;text-decoration:none solid #4c4452;width:100%;position:relative}.h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current{background-color:rgba(26,115,217,0.1);border-bottom-color:white}.h5p-interactive-book-navigation-chapter-button:hover{background-color:rgba(26,115,217,0.05);cursor:pointer}.h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-title-text{background-color:transparent;color:#1a73d9;font-family:Arial;font-size:1em;font-weight:700;line-height:1.5em;padding-left:1.5em;padding-right:2em;overflow:hidden;text-decoration:none solid #1a73d9;text-overflow:ellipsis;white-space:nowrap}.h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-accordion{align-self:center;font-size:.65em;width:1em;position:absolute;left:15px;top:17px}.h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-accordion.hidden{opacity:0;visibility:none}.h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-progress{align-self:center;font-size:.75em;position:absolute;right:15px;top:17px}.h5p-interactive-book-navigation-chapter-button:active{background-color:rgba(26,115,217,0.1)}.h5p-interactive-book-navigation-maintitle{background-color:#1a73d9;background-size:cover}.h5p-interactive-book-navigation-maintitle .navigation-title{align-self:center;color:#fff;font-family:Arial;font-size:1em;font-weight:400;overflow:hidden;padding-left:1.25em;text-decoration:none solid #fff;text-overflow:ellipsis}.h5p-interactive-book-cover{align-items:center;background:#fff;display:flex;flex-direction:column;font-family:Arial;height:100%;left:0;padding-bottom:200px;position:relative;top:0;width:100%;z-index:3}.h5p-interactive-book-cover.h5p-cover-nographics{padding-top:120px}.h5p-interactive-book-cover p{margin:0 0 .5em}.h5p-interactive-book-cover-graphics{align-items:center;display:flex;height:15em;margin:4.375em 0;position:relative;width:100%}.h5p-interactive-book-cover-bar{background-color:rgba(26,115,217,0.05);background-size:cover;height:70%;width:inherit}.h5p-interactive-book-cover-image{box-shadow:10px 4px 47px 0 rgba(0,0,0,0.2);height:100%;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:3}.h5p-interactive-book-cover-title{color:#363636;font-size:2.188em;font-weight:700;text-align:center;text-decoration:none solid #363636}.h5p-interactive-book-cover-description{color:#363636;font-size:1.25em;font-weight:400;margin-bottom:.5em;max-width:80%;text-align:center;text-decoration:none solid #363636}.h5p-interactive-book-cover-readbutton{margin-top:.5em}.h5p-interactive-book-cover-readbutton button{background-color:#1a73d9;background-size:cover;border:0;border-radius:3px;color:#fff;cursor:pointer;font-family:Arial;font-size:20px;font-weight:400;padding:10px 40px;text-align:center;text-decoration:none solid #fff}.h5p-interactive-book-cover-readbutton button:hover{background-color:rgba(26,115,217,0.9);background-size:cover;cursor:pointer}.h5p-interactive-book-cover-readbutton button:active{background-color:rgba(26,115,217,0.95);background-size:cover}.h5p-interactive-book-cover-readbutton button:focus{outline-style:double}.h5p-container.covered .h5p-content-controls{display:none}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-box-summary-progress{display:block}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-box-summary-progress>div{width:100%;margin-bottom:0.6rem}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-menu-button{justify-content:center;border-width:0.125rem}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-menu-button-arrow{visibility:visible;opacity:1;right:0.6875rem}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons{display:flex}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button{margin-right:initial;justify-content:center;padding:1rem}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit{flex-grow:6}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart{flex-grow:4;margin-left:0.5rem}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-score-bar{margin-top:1.25rem}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-page{padding:0.5rem}.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current[aria-expanded=\"true\"]{border-bottom-color:#0E7C57;border-bottom-width:2px}.h5p-interactive-book-summary{padding:0 1.125rem;margin:0.7rem auto}.h5p-interactive-book-summary-menu-button{border:1px solid #0E7C57;border-radius:2px;background-color:#ffffff;font-size:0.8rem;color:#0d736e;font-weight:700;line-height:1rem;justify-content:space-between;height:100%;padding:0.5rem}.h5p-interactive-book-summary-menu-button.h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current{background-color:#f1f9f8;border-bottom-color:#0E7C57}.h5p-interactive-book-summary-menu-button:hover{background-color:#f1f9f8}.h5p-interactive-book-summary-menu-button:hover .h5p-interactive-book-summary-menu-button-arrow{opacity:1;visibility:visible;transform:rotate(90deg) translateY(-10px)}.h5p-interactive-book-summary-menu-button[data-book-completed=\"true\"],.h5p-interactive-book-summary-menu-button:active{box-shadow:0 0 0.625rem #0cc9a7}.h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-text{white-space:normal;text-align:left;height:100%;flex-grow:2;margin-right:0.75rem}.h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-icon{margin-right:0.25rem;margin-left:auto;font-size:1.1em}.h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-menu-button-arrow{transform:rotate(90deg);position:absolute;right:25px;visibility:hidden;opacity:0;height:auto;font-weight:normal;transition:transform 0.4s, opacity 0.2s, visibility 0.2s}.h5p-interactive-book-summary-menu-button[disabled]{opacity:0.5;cursor:not-allowed}.h5p-interactive-book-navigation-summary-button{padding:1.125rem 0.5rem}.h5p-interactive-book-summary-page{padding:1.25rem}.h5p-interactive-book-summary-page ol,.h5p-interactive-book-summary-page ul,.h5p-interactive-book-summary-page li{padding-left:0}.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress{display:flex;justify-content:space-between;color:#273C59}.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container{background-color:rgba(219,219,219,0.3);width:49%;padding:1rem;box-sizing:border-box;border-radius:5px;display:flex;align-items:center;margin-right:1em}.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container .absolute-value{color:#273C59;font-size:1.25em}.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container .separator{color:#273C59;font-size:0.75em;margin:auto 0.4em;vertical-align:top}.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container:last-child{margin-right:0}.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress h3{font-size:0.875rem;font-style:italic;line-height:1.25rem;margin-top:0}.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progressbox-bigtext{font-size:1.375rem;color:#2d7ad2;margin:0.4375rem auto;font-weight:bold}.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progressbox-smalltext{font-size:0.875rem;color:#273c59;font-style:italic;line-height:1.25rem;margin:0}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons{margin-top:1rem;flex-wrap:wrap}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button{border-radius:4px;padding:0.6125rem 0.8125rem;display:inline-flex;align-items:center;flex-direction:row-reverse;font-weight:bold;margin-right:1rem;font-size:0.75rem;cursor:pointer}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button .icon-restart,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button .icon-paper-pencil{margin-right:0.5rem;font-size:1.1875rem}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit{background-color:#0E7C57;color:#ffffff;border:1px solid #0E7C57;transition:background-color 150ms}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit:hover{background-color:#0c694a}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart{color:#757575;border:1px solid #ebebeb;background-color:#ffffff;transition:background-color 150ms}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart:hover{background-color:#ebebeb}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted{transform:translateY(100%);transition:transform 0.4s;position:absolute;opacity:0;border-radius:4px;background-color:#d3ede9;display:flex;padding:0.4375rem;align-items:center;flex:auto;left:2000px}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted .icon-chapter-done{font-size:2rem;margin:0.5625rem 1rem;color:#0e8275}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted p{font-weight:bold;margin:0;font-size:0.875rem;color:#0e8275}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted .h5p-interactive-book-summary-restart{margin-left:auto;padding:0.5615rem;flex-grow:initial}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted button{display:none}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted>button{display:none}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted .h5p-interactive-book-summary-submitted{transform:translateY(0);opacity:1;position:static}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted .h5p-interactive-book-summary-submitted button{display:flex}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-header{display:flex;align-items:center;justify-content:space-between}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-header select{margin:auto 0 auto auto;max-height:1.5rem}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list{display:flex;flex-direction:column;line-height:1.9375rem}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-only-unanswered .h5p-interactive-book-summary-overview-section-details-task-done,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-only-unanswered .h5p-interactive-book-summary-no-interactions{display:none}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty{padding:0.875rem 1.25rem;border:1px solid #e8e8e8;border-bottom:0;display:block}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4{margin:0;display:flex;align-items:center;color:#000;cursor:pointer}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4:hover,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4:hover{color:#2d7ad2}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4 span[class^='icon-'],.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4 span[class^='icon-'],.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4 span[class*=' icon-'],.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4 span[class*=' icon-']{margin-left:auto;color:#2d7ad2;font-weight:100;cursor:pointer}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section:first-of-type,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty:first-of-type,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-top-section{border-top-right-radius:5px;border-top-left-radius:5px}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section:last-of-type,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty:last-of-type,.h5p-interactive-book-summary-page .h5p-interactive-book-summary-bottom-section{border-bottom:1px solid #ebebeb;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-score-header{display:flex}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-score-header div{font-size:0.875rem;margin-left:auto;line-height:2rem}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty{display:none}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details{display:flex;border-top:1px solid #ebebeb;padding:0.25rem}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details:hover{background:#f3f3f3}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details .h5p-interactive-book-summary-section-title{font-size:0.875rem;border:0;background-color:transparent;padding:0;text-align:left;width:100%;cursor:pointer}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details .h5p-interactive-book-summary-section-score{margin-left:auto;white-space:nowrap;font-size:0.875rem}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-section-icon{margin-right:0.6125rem;color:#2d7ad2;font-size:0.8125rem;align-items:center;display:flex}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-chapter-subheader{font-style:italic;color:#737285;font-size:0.875rem;line-height:0.9375rem}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-progress-circle{width:3rem;height:3rem;min-height:3rem;min-width:3rem;border-radius:50%;border:6px solid #F4F4F4;box-shadow:0 0 0 4px rgba(228,228,237,0.5);margin-left:auto;position:relative}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-progress-circle canvas{position:absolute;max-width:100%;max-height:100%}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-score-bar{display:flex;justify-content:flex-end;margin-top:3rem}.h5p-interactive-book-summary-page .h5p-interactive-book-summary-no-chapter-interactions p:first-child{font-size:1.2rem;font-weight:bold}.h5p-interactive-book-summary-footer{position:absolute;bottom:0;left:0;right:0;background-color:#ffffff;height:5rem;box-shadow:-5px -5px 10px rgba(166,166,166,0.4);display:flex;padding:1rem;box-sizing:border-box;transform:translateY(120%);transition:transform 0.5s;z-index:1}.h5p-interactive-book-summary-footer.show-footer{transform:translateY(0)}.h5p-interactive-book-summary-footer.menu-open{display:none}.h5p-interactive-book-summary-footer button{flex:auto}.h5p-interactive-book-summary-dropdown{position:relative;max-width:200px;border:1px solid #e8e8e8;border-radius:4px;background-color:#ffffff;margin-left:auto 0.0625rem auto auto;font-size:0.875rem;min-width:12rem}.h5p-interactive-book-summary-dropdown>button{cursor:pointer}.h5p-interactive-book-summary-dropdown[active] .h5p-interactive-book-summary-dropdown-menu{display:block;box-shadow:0 2px 3px 2px rgba(0,0,0,0.1)}.h5p-interactive-book-summary-dropdown[active] .h5p-interactive-book-summary-dropdown-menu button{background-color:#ffffff}.h5p-interactive-book-summary-dropdown[active] button{background-color:#fafafa;cursor:pointer;text-align:left}.h5p-interactive-book-summary-dropdown .h5p-interactive-book-summary-dropdown-menu{position:absolute;list-style:none;display:none;left:0;right:0;overflow:hidden;cursor:pointer;background-color:inherit}.h5p-interactive-book-summary-dropdown button{display:flex;width:100%;border:0;background:transparent;align-items:center;font-size:inherit;padding:0.5rem 0.6875rem}.h5p-interactive-book-summary-dropdown button .icon-expanded{margin-left:auto;font-size:0.5rem}\n",""])},function(t,e,n){var r=n(135);"string"==typeof r&&(r=[[t.i,r,""]]);n(94)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(93)(!1);var r=n(136),i=r(n(137)+"#iefix"),o=r(n(138)),a=r(n(139)),c=r(n(140)+"#h5p-interactive-book");e.push([t.i,"@font-face{font-family:'h5p-book';font-style:normal;font-weight:normal;src:url("+i+') format("embedded-opentype"),url('+o+') format("truetype"),url('+a+') format("woff"),url('+c+") format(\"svg\")}.h5p-interactive-book [class^='icon-'],.h5p-interactive-book [class*=' icon-']{font-family:'h5p-book';font-style:normal;font-variant:normal;font-weight:normal;line-height:1;text-transform:none}.icon-close ::before{content:'\\e900'}.icon-expanded::before{content:'\\e901'}.icon-collapsed::before{content:'\\e902'}.icon-chapter-started::before{content:'\\e903'}.icon-chapter-done::before{content:'\\e90a'}.icon-check-mark::before{content:'\\e910'}.icon-chapter-blank::before{content:'\\e905'}.icon-menu::before{content:'\\e906'}.icon-previous::before{content:'\\e907'}.icon-next::before{content:'\\e908'}.icon-up::before{content:'\\e909'}.icon-question-answered::before{content:'\\e90a'}.icon-enable-fullscreen::before{content:'\\e90b'}.icon-disable-fullscreen::before{content:'\\e90c'}.icon-restart::before{content:'\\e90d'}.icon-paper-pencil::before{content:'\\e90e'}.icon-paper::before{content:'\\e90f'}\n",""])},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports="data:application/vnd.ms-fontobject;base64,HBEAAHQQAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAxwlbHQAAAAAAAAAAAAAAAAAAAAAAABAAaAA1AHAALQBiAG8AbwBrAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADIAAAAQAGgANQBwAC0AYgBvAG8AawAAAAAAAAEAAAALAIAAAwAwT1MvMg8SBhsAAAC8AAAAYGNtYXAXVtKXAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZvjuOnsAAAF4AAAMTGhlYWQZQtf5AAANxAAAADZoaGVhB8MD1wAADfwAAAAkaG10eEnKA4MAAA4gAAAAVGxvY2EV3hi6AAAOdAAAACxtYXhwAB0BBgAADqAAAAAgbmFtZfBITmQAAA7AAAABknBvc3QAAwAAAAAQVAAAACAAAwPhAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpEAPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6RD//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAD/wAQAA8AACwAAAScJAQcJARcJATcBBABn/mf+Z2cBmf5nZwGZAZln/mcDWWf+ZwGZZ/5n/mdnAZn+Z2cBmQAAAAEAAACwA+4C4AAVAAAlATY0Jy4BIyEiBgcUFhcBHgE3PgE3Ai4BwBITCRcM/H8aJQEKCQHAETQTAQEBswHAEjYTCAokGg0YCf5AEwIRAQEBAAAAAAEA4P/AAxADrgAUAAAJASYiBw4BFREUFhcyNjcBPgEnLgEDDf5AEjYTCAokGg0YCQHAEwIRAQEB7gHAEhMJFwz8fxolAQoJAcARNBMBAQAAAgAA/8AEAAPAABQAOQAAJS4BJyYnJjQ3Njc+ATc+ARcRBiYnAS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BMzI2Nz4BNz4BNTQmJwFKKUMYGAwMDAwYGEMpKlwwMFwqAnEiXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiMjIoYYQykqLy5eLi8qKUMYGBkB/SwBGRgCOjpfIiIjIyIiXzo6gkREgjo6XyIiIyIiIl87OoJERII6AAIAAP/ABAADwAAmAEsAAAEUBgcBDgEjIiYvAS4BNTQ2PwE2MhcyMBUXAT4BFxYwFRceAQc5ATcuAScuASMiBgcOAQcOARUUFhceARceATMyNjc+ATc+ATU0JicDWAYG/pYGEAkIEAbxBgYGBj0MIwwBlwEPDCMMAT0GBwFjIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOjpfIiIjIyICLAgQBv6WBgYGBvEGEAgJEAY8DQwBlgEODQEMAQE8BhAIlDpfIiIjIyIiXzo6gkREgjo6XyIiIyIiIl87OoJERII6AAAAAAIAAP/ABAADwAAoAE0AAAEeARcWFxYUBwYHDgEHBgcGIicmJy4BJyYnJjQ3Njc+ATc2NzYyFxYXBS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BMzI2Nz4BNz4BNTQmJwK2KUMYGAwMDAwYGEMpKi8uXi4vKilDGBgMDAwMGBhDKSovLl4uLyoBBSJfOjqCRESCOjpfIiIjIiIiXzs6gkREgjo6XyIiIyMiAvoYQykqLy5eLi8qKUMYGAwMDAwYGEMpKi8uXi4vKilDGBgMDAwMGDo6XyIiIyMiIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOgAAAAADAAAAawQAAxUAAwAHAAsAADchNSE1ITUhERUhNQAEAPwABAD8AAQAa4WNhgEShYUAAAAAAQDE/8ADPAPAAAUAACUJAScJAQM8/nkBh3j+AAIAOAGIAYh4/gD+AAAAAAABAMT/wAM8A8AABQAANwkBNwkBxAGH/nl4AgD+ADgBiAGIeP4A/gAAAQAA/8AEAAPAAAkAABMXAREzEQE3CQEAWgFmgAFlW/4A/gABwFoBZfz1Awv+mlsCAP4AAAEAAP/ABAADwAAkAAABLgEnLgEjIgYHDgEHDgEVFBYXHgEXHgE3MjY3PgE3PgEnNCYnA7siXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiQBIyICwDpfIiIjIyIiXzo6gkREgjo6XyIiJAEiIiJfOzqCRESCOgAAAAAEAAD/wAQBA8EAPQCBAL8BAwAAJTQmIzEiBhUcAR0BJy4BJy4BBw4BFRQWFx4BFx4BFx4BFzMqASMqASMiBhUUFhceATM6ATM6ATMyNjU8ATUBJy4BJzQmMToBMzoBMzI2NS4BIyYiIyIGFRwBFRQWFx4BMz4BNTwBNTwBNTQ2NR4BHwEeARceATsBMjY3NiYnLgEnMQMyNjUxNCYjKgErATc+ATc2NCcuASMiBgcOAQcOAQcOAQcxPAE1PAE1NCYjIgYHDgEVHAEVHAEVFBYzFjIzATc+ATcyNDMcARUcARUUFjM+ATU2NCc0JiMqASMiBgcOARUUFhc6ATM6ATMyFjMOAQ8BDgEHDgEVMRQWFxY2Nz4BNzEEARQXFhXtEiIZERwPCQgJCi9TKh4+IgMGAwEIEAcYLRYXFgUFBhAMGjgdGzgeGRX9FnYDBgQBCBAIGC8XFRQBGQ49eTUSFQYFBRELFRUBAwUDbS5cNAoRCAEHDwgPAxExVysMGRYXGBYrGCDtEyIYERAIDgcIDwovUyoePiIDBwQVFgsQBQUGFRgxbEACGnYDBgQBARYVGhABARQRQnU3CQ4EBgUUFBIlEgsVCwMFAwMFAm4vWzQKCgkJEBsSMVcryxkWFhkVLBgg7RMiGBEBEAkOBwcQCi9TKh4+IgMHBBUWCxAFBQYVGDFsQAIadgMGBAEBFhUaEAEVEUF2NwkNBQYFARMUEiUSCxYLAgUDAwUCbi5cNAoKCQkQGxIxVyv82xUWFxTtEyIYERwQCAgJCi5UKR4/IgMGAwgPBxgtFxcVBQUFEQsbNx0bOR4ZFAEC6nYDBgQBCBAIGC8WFRUBGg09eTUSFQUFBhELFRQBAQMFAm4uXDQKEQgIDwgPAxExVysAAAIADv/QBAEDwAA+AIIAACUUFjMxMjY1PAE9ARceARcWMjc+ATU0JicuAScuAScuAScjOgEzOgEzMjY1NCYnLgEjKgEjKgEjIgYVBhQVMQEXHgEXFDIVKgEjKgEjIgYVHgEzFjI3MjY1PAE1NCYnLgEjDgEHHAEVHAEVFAYVLgEvAS4BJy4BKwEiBgcGFhceARcxAiQUFxYV7RIiGREcDwkICQovUyoePiIDBgMBCBAHGC0WFxYFBQYQDBo4HRs4HhkUAf6idgMGBAEIEAgYLxcVFAEaDT15NRIVBQUGEQsVFAEBAwUCbi5cNAoRCAEHDwgPAxExVyuSGRUWGBYsFyDtEiIZERAIDgcIEAovUykePyIDBgQVFgsQBQYFFRgwbEECLHUDBwQBARYVGhABARQSQXY3CA4FBQYBFBMTJBILFgsCBQMDBANtL1s0CwkJCRAbEjFXKwAAAQBm/8ADmgPAAC8AAAE1CQE1MhceARcWFRQHDgEHBiMiJy4BJyY1IxQXHgEXFjMyNz4BNzY1NCcuAScmIwIA/wABAEA3OFQYGBgYVDg3QEA3OFQYGGchIG9LSlVVSktvICEhIG9LSlUC883/AP8AzRgZUzg4P0A4OFMYGRkYUzg4QFVLSnAgICAgcEpLVVRLS28gIAAAAAAHAGH/wAOIA8AAAgA7AFEAVgBaAF4AYgAAARUzExYXHgEVFAcOAScuAScmNDU0NicuAScOAQcGFhceARc+ATcuATU0Njc+ATc2JicuAScuAScVHgEXAzU+ATc+AT8BFx4BFxEjNSERITQ2NwEzFSM1EyM1MzchNSE1ITUhAht4ewgIBwkIBxcUFhgFAQEBARQTDBYKAgUDG0oGKUsnBQsMBQMJAxQbNgoVDRkbEBUVCdIHEQgDBgMLKwIGA7r+cgHZAQH+k7Ky7+/vfP6VAWv+lQFrA6p3/uAUJydXJycTERYBARkUBw8HFy0XERgFLFcrCBIIRoNOBw0HGi8XGDAYEyYTZphaESIMGhcKVQ8qGP7vASBCIAsXCysLAQIBATi6/S4FCgUB5C0t/qctMC0wLQAAAAcARv/AA40DwAAMACUAPgBCAEYASgBOAAABFRQWMTMyNiMnJgYVEyEiJjERNDYxITIWMRUUFjEzMhYxERQGIyUhMjYxETQmMSMiJjE1NCYxISYGFREUFjMTMxUjFSEVIRUhFSE1IRUhAuwGgwUGBYMECJv8xQUBBgJBBQEG7gUBAQX9AALFBAIG6AUBBv4vBAgIBGvv7wHp/hcBQv6+Aen+FwOugwQCDIMFBgX8EgYD9AUBBugFAQb9BgkDPAUCgwUBBu8EAQUGBPyCBAECgzxZPL48uTwAAAMAAP/ABAADwAAFACEAPgAAAScHFwEnAyIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJgMiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAbJtJZIBNyXEal1diykoKCmLXV1qal1diykoKCiLXl1qYlZWgCUlJSWAVlZiYlZWgCUlJSWAVlZiAVlsJZABNyUBVCgpi11dampdXYspKCgpi11dampdXYspKPwoJSWAVlZiYlZWgCUlJSWAVlZiYlZWgCUlAAAAAQAAAAEzMx1bCcdfDzz1AAsEAAAAAADbETAkAAAAANsRMCQAAP/ABAEDwQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAQAAAAAEAQABAAAAAAAAAAAAAAAAAAAAFQQAAAAAAAAAAAAAAAIAAAAEAAAABAAAAAQAAOAEAAAABAAAAAQAAAAEAAAABAAAxAQAAMQEAAAABAAAAAQBAAAEAQAOBAAAZgP1AGED0wBGBAAAAAAAAAAACgAUAB4AQABqAJIA7gFgAdoB9AIKAh4COAJ2A8QEcAS8BVYFwgYmAAEAAAAVAQQABwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHALcAAQAAAAAAAwAIAIcAAQAAAAAABAAIAMwAAQAAAAAABQALAGYAAQAAAAAABgAIAJ8AAQAAAAAACgAaABgAAwABBAkAAQAQAAgAAwABBAkAAgAOAL4AAwABBAkAAwAQAI8AAwABBAkABAAQANQAAwABBAkABQAWAHEAAwABBAkABgAQAKcAAwABBAkACgA0ADJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC5WZXJzaW9uIDEuMgBWAGUAcgBzAGkAbwBuACAAMQAuADJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtSZWd1bGFyAFIAZQBnAHUAbABhAHJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGsAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(t,e){t.exports="data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBhsAAAC8AAAAYGNtYXAXVtKXAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZvjuOnsAAAF4AAAMTGhlYWQZQtf5AAANxAAAADZoaGVhB8MD1wAADfwAAAAkaG10eEnKA4MAAA4gAAAAVGxvY2EV3hi6AAAOdAAAACxtYXhwAB0BBgAADqAAAAAgbmFtZfBITmQAAA7AAAABknBvc3QAAwAAAAAQVAAAACAAAwPhAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpEAPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6RD//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAD/wAQAA8AACwAAAScJAQcJARcJATcBBABn/mf+Z2cBmf5nZwGZAZln/mcDWWf+ZwGZZ/5n/mdnAZn+Z2cBmQAAAAEAAACwA+4C4AAVAAAlATY0Jy4BIyEiBgcUFhcBHgE3PgE3Ai4BwBITCRcM/H8aJQEKCQHAETQTAQEBswHAEjYTCAokGg0YCf5AEwIRAQEBAAAAAAEA4P/AAxADrgAUAAAJASYiBw4BFREUFhcyNjcBPgEnLgEDDf5AEjYTCAokGg0YCQHAEwIRAQEB7gHAEhMJFwz8fxolAQoJAcARNBMBAQAAAgAA/8AEAAPAABQAOQAAJS4BJyYnJjQ3Njc+ATc+ARcRBiYnAS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BMzI2Nz4BNz4BNTQmJwFKKUMYGAwMDAwYGEMpKlwwMFwqAnEiXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiMjIoYYQykqLy5eLi8qKUMYGBkB/SwBGRgCOjpfIiIjIyIiXzo6gkREgjo6XyIiIyIiIl87OoJERII6AAIAAP/ABAADwAAmAEsAAAEUBgcBDgEjIiYvAS4BNTQ2PwE2MhcyMBUXAT4BFxYwFRceAQc5ATcuAScuASMiBgcOAQcOARUUFhceARceATMyNjc+ATc+ATU0JicDWAYG/pYGEAkIEAbxBgYGBj0MIwwBlwEPDCMMAT0GBwFjIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOjpfIiIjIyICLAgQBv6WBgYGBvEGEAgJEAY8DQwBlgEODQEMAQE8BhAIlDpfIiIjIyIiXzo6gkREgjo6XyIiIyIiIl87OoJERII6AAAAAAIAAP/ABAADwAAoAE0AAAEeARcWFxYUBwYHDgEHBgcGIicmJy4BJyYnJjQ3Njc+ATc2NzYyFxYXBS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BMzI2Nz4BNz4BNTQmJwK2KUMYGAwMDAwYGEMpKi8uXi4vKilDGBgMDAwMGBhDKSovLl4uLyoBBSJfOjqCRESCOjpfIiIjIiIiXzs6gkREgjo6XyIiIyMiAvoYQykqLy5eLi8qKUMYGAwMDAwYGEMpKi8uXi4vKilDGBgMDAwMGDo6XyIiIyMiIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOgAAAAADAAAAawQAAxUAAwAHAAsAADchNSE1ITUhERUhNQAEAPwABAD8AAQAa4WNhgEShYUAAAAAAQDE/8ADPAPAAAUAACUJAScJAQM8/nkBh3j+AAIAOAGIAYh4/gD+AAAAAAABAMT/wAM8A8AABQAANwkBNwkBxAGH/nl4AgD+ADgBiAGIeP4A/gAAAQAA/8AEAAPAAAkAABMXAREzEQE3CQEAWgFmgAFlW/4A/gABwFoBZfz1Awv+mlsCAP4AAAEAAP/ABAADwAAkAAABLgEnLgEjIgYHDgEHDgEVFBYXHgEXHgE3MjY3PgE3PgEnNCYnA7siXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiQBIyICwDpfIiIjIyIiXzo6gkREgjo6XyIiJAEiIiJfOzqCRESCOgAAAAAEAAD/wAQBA8EAPQCBAL8BAwAAJTQmIzEiBhUcAR0BJy4BJy4BBw4BFRQWFx4BFx4BFx4BFzMqASMqASMiBhUUFhceATM6ATM6ATMyNjU8ATUBJy4BJzQmMToBMzoBMzI2NS4BIyYiIyIGFRwBFRQWFx4BMz4BNTwBNTwBNTQ2NR4BHwEeARceATsBMjY3NiYnLgEnMQMyNjUxNCYjKgErATc+ATc2NCcuASMiBgcOAQcOAQcOAQcxPAE1PAE1NCYjIgYHDgEVHAEVHAEVFBYzFjIzATc+ATcyNDMcARUcARUUFjM+ATU2NCc0JiMqASMiBgcOARUUFhc6ATM6ATMyFjMOAQ8BDgEHDgEVMRQWFxY2Nz4BNzEEARQXFhXtEiIZERwPCQgJCi9TKh4+IgMGAwEIEAcYLRYXFgUFBhAMGjgdGzgeGRX9FnYDBgQBCBAIGC8XFRQBGQ49eTUSFQYFBRELFRUBAwUDbS5cNAoRCAEHDwgPAxExVysMGRYXGBYrGCDtEyIYERAIDgcIDwovUyoePiIDBwQVFgsQBQUGFRgxbEACGnYDBgQBARYVGhABARQRQnU3CQ4EBgUUFBIlEgsVCwMFAwMFAm4vWzQKCgkJEBsSMVcryxkWFhkVLBgg7RMiGBEBEAkOBwcQCi9TKh4+IgMHBBUWCxAFBQYVGDFsQAIadgMGBAEBFhUaEAEVEUF2NwkNBQYFARMUEiUSCxYLAgUDAwUCbi5cNAoKCQkQGxIxVyv82xUWFxTtEyIYERwQCAgJCi5UKR4/IgMGAwgPBxgtFxcVBQUFEQsbNx0bOR4ZFAEC6nYDBgQBCBAIGC8WFRUBGg09eTUSFQUFBhELFRQBAQMFAm4uXDQKEQgIDwgPAxExVysAAAIADv/QBAEDwAA+AIIAACUUFjMxMjY1PAE9ARceARcWMjc+ATU0JicuAScuAScuAScjOgEzOgEzMjY1NCYnLgEjKgEjKgEjIgYVBhQVMQEXHgEXFDIVKgEjKgEjIgYVHgEzFjI3MjY1PAE1NCYnLgEjDgEHHAEVHAEVFAYVLgEvAS4BJy4BKwEiBgcGFhceARcxAiQUFxYV7RIiGREcDwkICQovUyoePiIDBgMBCBAHGC0WFxYFBQYQDBo4HRs4HhkUAf6idgMGBAEIEAgYLxcVFAEaDT15NRIVBQUGEQsVFAEBAwUCbi5cNAoRCAEHDwgPAxExVyuSGRUWGBYsFyDtEiIZERAIDgcIEAovUykePyIDBgQVFgsQBQYFFRgwbEECLHUDBwQBARYVGhABARQSQXY3CA4FBQYBFBMTJBILFgsCBQMDBANtL1s0CwkJCRAbEjFXKwAAAQBm/8ADmgPAAC8AAAE1CQE1MhceARcWFRQHDgEHBiMiJy4BJyY1IxQXHgEXFjMyNz4BNzY1NCcuAScmIwIA/wABAEA3OFQYGBgYVDg3QEA3OFQYGGchIG9LSlVVSktvICEhIG9LSlUC883/AP8AzRgZUzg4P0A4OFMYGRkYUzg4QFVLSnAgICAgcEpLVVRLS28gIAAAAAAHAGH/wAOIA8AAAgA7AFEAVgBaAF4AYgAAARUzExYXHgEVFAcOAScuAScmNDU0NicuAScOAQcGFhceARc+ATcuATU0Njc+ATc2JicuAScuAScVHgEXAzU+ATc+AT8BFx4BFxEjNSERITQ2NwEzFSM1EyM1MzchNSE1ITUhAht4ewgIBwkIBxcUFhgFAQEBARQTDBYKAgUDG0oGKUsnBQsMBQMJAxQbNgoVDRkbEBUVCdIHEQgDBgMLKwIGA7r+cgHZAQH+k7Ky7+/vfP6VAWv+lQFrA6p3/uAUJydXJycTERYBARkUBw8HFy0XERgFLFcrCBIIRoNOBw0HGi8XGDAYEyYTZphaESIMGhcKVQ8qGP7vASBCIAsXCysLAQIBATi6/S4FCgUB5C0t/qctMC0wLQAAAAcARv/AA40DwAAMACUAPgBCAEYASgBOAAABFRQWMTMyNiMnJgYVEyEiJjERNDYxITIWMRUUFjEzMhYxERQGIyUhMjYxETQmMSMiJjE1NCYxISYGFREUFjMTMxUjFSEVIRUhFSE1IRUhAuwGgwUGBYMECJv8xQUBBgJBBQEG7gUBAQX9AALFBAIG6AUBBv4vBAgIBGvv7wHp/hcBQv6+Aen+FwOugwQCDIMFBgX8EgYD9AUBBugFAQb9BgkDPAUCgwUBBu8EAQUGBPyCBAECgzxZPL48uTwAAAMAAP/ABAADwAAFACEAPgAAAScHFwEnAyIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJgMiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAbJtJZIBNyXEal1diykoKCmLXV1qal1diykoKCiLXl1qYlZWgCUlJSWAVlZiYlZWgCUlJSWAVlZiAVlsJZABNyUBVCgpi11dampdXYspKCgpi11dampdXYspKPwoJSWAVlZiYlZWgCUlJSWAVlZiYlZWgCUlAAAAAQAAAAEzMx1bCcdfDzz1AAsEAAAAAADbETAkAAAAANsRMCQAAP/ABAEDwQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAQAAAAAEAQABAAAAAAAAAAAAAAAAAAAAFQQAAAAAAAAAAAAAAAIAAAAEAAAABAAAAAQAAOAEAAAABAAAAAQAAAAEAAAABAAAxAQAAMQEAAAABAAAAAQBAAAEAQAOBAAAZgP1AGED0wBGBAAAAAAAAAAACgAUAB4AQABqAJIA7gFgAdoB9AIKAh4COAJ2A8QEcAS8BVYFwgYmAAEAAAAVAQQABwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHALcAAQAAAAAAAwAIAIcAAQAAAAAABAAIAMwAAQAAAAAABQALAGYAAQAAAAAABgAIAJ8AAQAAAAAACgAaABgAAwABBAkAAQAQAAgAAwABBAkAAgAOAL4AAwABBAkAAwAQAI8AAwABBAkABAAQANQAAwABBAkABQAWAHEAAwABBAkABgAQAKcAAwABBAkACgA0ADJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC5WZXJzaW9uIDEuMgBWAGUAcgBzAGkAbwBuACAAMQAuADJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtoNXAtYm9vawBoADUAcAAtAGIAbwBvAGtSZWd1bGFyAFIAZQBnAHUAbABhAHJoNXAtYm9vawBoADUAcAAtAGIAbwBvAGsAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(t,e){t.exports="data:application/font-woff;base64,d09GRgABAAAAABDAAAsAAAAAEHQAAQACAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGG2NtYXAAAAFoAAAAVAAAAFQXVtKXZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAADEwAAAxM+O46e2hlYWQAAA4QAAAANgAAADYZQtf5aGhlYQAADkgAAAAkAAAAJAfDA9dobXR4AAAObAAAAFQAAABUScoDg2xvY2EAAA7AAAAALAAAACwV3hi6bWF4cAAADuwAAAAgAAAAIAAdAQZuYW1lAAAPDAAAAZIAAAGS8EhOZHBvc3QAABCgAAAAIAAAACAAAwAAAAMD4QGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6RADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkQ//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAA/8AEAAPAAAsAAAEnCQEHCQEXCQE3AQQAZ/5n/mdnAZn+Z2cBmQGZZ/5nA1ln/mcBmWf+Z/5nZwGZ/mdnAZkAAAABAAAAsAPuAuAAFQAAJQE2NCcuASMhIgYHFBYXAR4BNz4BNwIuAcASEwkXDPx/GiUBCgkBwBE0EwEBAbMBwBI2EwgKJBoNGAn+QBMCEQEBAQAAAAABAOD/wAMQA64AFAAACQEmIgcOARURFBYXMjY3AT4BJy4BAw3+QBI2EwgKJBoNGAkBwBMCEQEBAe4BwBITCRcM/H8aJQEKCQHAETQTAQEAAAIAAP/ABAADwAAUADkAACUuAScmJyY0NzY3PgE3PgEXEQYmJwEuAScuASMiBgcOAQcOARUUFhceARceATMyNjc+ATc+ATU0JicBSilDGBgMDAwMGBhDKSpcMDBcKgJxIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOjpfIiIjIyKGGEMpKi8uXi4vKilDGBgZAf0sARkYAjo6XyIiIyMiIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOgACAAD/wAQAA8AAJgBLAAABFAYHAQ4BIyImLwEuATU0Nj8BNjIXMjAVFwE+ARcWMBUXHgEHOQE3LgEnLgEjIgYHDgEHDgEVFBYXHgEXHgEzMjY3PgE3PgE1NCYnA1gGBv6WBhAJCBAG8QYGBgY9DCMMAZcBDwwjDAE9BgcBYyJfOjqCRESCOjpfIiIjIiIiXzs6gkREgjo6XyIiIyMiAiwIEAb+lgYGBgbxBhAICRAGPA0MAZYBDg0BDAEBPAYQCJQ6XyIiIyMiIl86OoJERII6Ol8iIiMiIiJfOzqCRESCOgAAAAACAAD/wAQAA8AAKABNAAABHgEXFhcWFAcGBw4BBwYHBiInJicuAScmJyY0NzY3PgE3Njc2MhcWFwUuAScuASMiBgcOAQcOARUUFhceARceATMyNjc+ATc+ATU0JicCtilDGBgMDAwMGBhDKSovLl4uLyopQxgYDAwMDBgYQykqLy5eLi8qAQUiXzo6gkREgjo6XyIiIyIiIl87OoJERII6Ol8iIiMjIgL6GEMpKi8uXi4vKilDGBgMDAwMGBhDKSovLl4uLyopQxgYDAwMDBg6Ol8iIiMjIiJfOjqCRESCOjpfIiIjIiIiXzs6gkREgjoAAAAAAwAAAGsEAAMVAAMABwALAAA3ITUhNSE1IREVITUABAD8AAQA/AAEAGuFjYYBEoWFAAAAAAEAxP/AAzwDwAAFAAAlCQEnCQEDPP55AYd4/gACADgBiAGIeP4A/gAAAAAAAQDE/8ADPAPAAAUAADcJATcJAcQBh/55eAIA/gA4AYgBiHj+AP4AAAEAAP/ABAADwAAJAAATFwERMxEBNwkBAFoBZoABZVv+AP4AAcBaAWX89QML/ppbAgD+AAABAAD/wAQAA8AAJAAAAS4BJy4BIyIGBw4BBw4BFRQWFx4BFx4BNzI2Nz4BNz4BJzQmJwO7Il86OoJERII6Ol8iIiMiIiJfOzqCRESCOjpfIiIkASMiAsA6XyIiIyMiIl86OoJERII6Ol8iIiQBIiIiXzs6gkREgjoAAAAABAAA/8AEAQPBAD0AgQC/AQMAACU0JiMxIgYVHAEdAScuAScuAQcOARUUFhceARceARceARczKgEjKgEjIgYVFBYXHgEzOgEzOgEzMjY1PAE1AScuASc0JjE6ATM6ATMyNjUuASMmIiMiBhUcARUUFhceATM+ATU8ATU8ATU0NjUeAR8BHgEXHgE7ATI2NzYmJy4BJzEDMjY1MTQmIyoBKwE3PgE3NjQnLgEjIgYHDgEHDgEHDgEHMTwBNTwBNTQmIyIGBw4BFRwBFRwBFRQWMxYyMwE3PgE3MjQzHAEVHAEVFBYzPgE1NjQnNCYjKgEjIgYHDgEVFBYXOgEzOgEzMhYzDgEPAQ4BBw4BFTEUFhcWNjc+ATcxBAEUFxYV7RIiGREcDwkICQovUyoePiIDBgMBCBAHGC0WFxYFBQYQDBo4HRs4HhkV/RZ2AwYEAQgQCBgvFxUUARkOPXk1EhUGBQURCxUVAQMFA20uXDQKEQgBBw8IDwMRMVcrDBkWFxgWKxgg7RMiGBEQCA4HCA8KL1MqHj4iAwcEFRYLEAUFBhUYMWxAAhp2AwYEAQEWFRoQAQEUEUJ1NwkOBAYFFBQSJRILFQsDBQMDBQJuL1s0CgoJCRAbEjFXK8sZFhYZFSwYIO0TIhgRARAJDgcHEAovUyoePiIDBwQVFgsQBQUGFRgxbEACGnYDBgQBARYVGhABFRFBdjcJDQUGBQETFBIlEgsWCwIFAwMFAm4uXDQKCgkJEBsSMVcr/NsVFhcU7RMiGBEcEAgICQouVCkePyIDBgMIDwcYLRcXFQUFBRELGzcdGzkeGRQBAup2AwYEAQgQCBgvFhUVARoNPXk1EhUFBQYRCxUUAQEDBQJuLlw0ChEICA8IDwMRMVcrAAACAA7/0AQBA8AAPgCCAAAlFBYzMTI2NTwBPQEXHgEXFjI3PgE1NCYnLgEnLgEnLgEnIzoBMzoBMzI2NTQmJy4BIyoBIyoBIyIGFQYUFTEBFx4BFxQyFSoBIyoBIyIGFR4BMxYyNzI2NTwBNTQmJy4BIw4BBxwBFRwBFRQGFS4BLwEuAScuASsBIgYHBhYXHgEXMQIkFBcWFe0SIhkRHA8JCAkKL1MqHj4iAwYDAQgQBxgtFhcWBQUGEAwaOB0bOB4ZFAH+onYDBgQBCBAIGC8XFRQBGg09eTUSFQUFBhELFRQBAQMFAm4uXDQKEQgBBw8IDwMRMVcrkhkVFhgWLBcg7RIiGREQCA4HCBAKL1MpHj8iAwYEFRYLEAUGBRUYMGxBAix1AwcEAQEWFRoQAQEUEkF2NwgOBQUGARQTEyQSCxYLAgUDAwQDbS9bNAsJCQkQGxIxVysAAAEAZv/AA5oDwAAvAAABNQkBNTIXHgEXFhUUBw4BBwYjIicuAScmNSMUFx4BFxYzMjc+ATc2NTQnLgEnJiMCAP8AAQBANzhUGBgYGFQ4N0BANzhUGBhnISBvS0pVVUpLbyAhISBvS0pVAvPN/wD/AM0YGVM4OD9AODhTGBkZGFM4OEBVS0pwICAgIHBKS1VUS0tvICAAAAAABwBh/8ADiAPAAAIAOwBRAFYAWgBeAGIAAAEVMxMWFx4BFRQHDgEnLgEnJjQ1NDYnLgEnDgEHBhYXHgEXPgE3LgE1NDY3PgE3NiYnLgEnLgEnFR4BFwM1PgE3PgE/ARceARcRIzUhESE0NjcBMxUjNRMjNTM3ITUhNSE1IQIbeHsICAcJCAcXFBYYBQEBAQEUEwwWCgIFAxtKBilLJwULDAUDCQMUGzYKFQ0ZGxAVFQnSBxEIAwYDCysCBgO6/nIB2QEB/pOysu/v73z+lQFr/pUBawOqd/7gFCcnVycnExEWAQEZFAcPBxctFxEYBSxXKwgSCEaDTgcNBxovFxgwGBMmE2aYWhEiDBoXClUPKhj+7wEgQiALFwsrCwECAQE4uv0uBQoFAeQtLf6nLTAtMC0AAAAHAEb/wAONA8AADAAlAD4AQgBGAEoATgAAARUUFjEzMjYjJyYGFRMhIiYxETQ2MSEyFjEVFBYxMzIWMREUBiMlITI2MRE0JjEjIiYxNTQmMSEmBhURFBYzEzMVIxUhFSEVIRUhNSEVIQLsBoMFBgWDBAib/MUFAQYCQQUBBu4FAQEF/QACxQQCBugFAQb+LwQICARr7+8B6f4XAUL+vgHp/hcDroMEAgyDBQYF/BIGA/QFAQboBQEG/QYJAzwFAoMFAQbvBAEFBgT8ggQBAoM8WTy+PLk8AAADAAD/wAQAA8AABQAhAD4AAAEnBxcBJwMiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYDIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGIwGybSWSATclxGpdXYspKCgpi11dampdXYspKCgoi15damJWVoAlJSUlgFZWYmJWVoAlJSUlgFZWYgFZbCWQATclAVQoKYtdXWpqXV2LKSgoKYtdXWpqXV2LKSj8KCUlgFZWYmJWVoAlJSUlgFZWYmJWVoAlJQAAAAEAAAABMzMdWwnHXw889QALBAAAAAAA2xEwJAAAAADbETAkAAD/wAQBA8EAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAEAAAAABAEAAQAAAAAAAAAAAAAAAAAAABUEAAAAAAAAAAAAAAACAAAABAAAAAQAAAAEAADgBAAAAAQAAAAEAAAABAAAAAQAAMQEAADEBAAAAAQAAAAEAQAABAEADgQAAGYD9QBhA9MARgQAAAAAAAAAAAoAFAAeAEAAagCSAO4BYAHaAfQCCgIeAjgCdgPEBHAEvAVWBcIGJgABAAAAFQEEAAcAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEACAAAAAEAAAAAAAIABwC3AAEAAAAAAAMACACHAAEAAAAAAAQACADMAAEAAAAAAAUACwBmAAEAAAAAAAYACACfAAEAAAAAAAoAGgAYAAMAAQQJAAEAEAAIAAMAAQQJAAIADgC+AAMAAQQJAAMAEACPAAMAAQQJAAQAEADUAAMAAQQJAAUAFgBxAAMAAQQJAAYAEACnAAMAAQQJAAoANAAyaDVwLWJvb2sAaAA1AHAALQBiAG8AbwBrRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuVmVyc2lvbiAxLjIAVgBlAHIAcwBpAG8AbgAgADEALgAyaDVwLWJvb2sAaAA1AHAALQBiAG8AbwBraDVwLWJvb2sAaAA1AHAALQBiAG8AbwBrUmVndWxhcgBSAGUAZwB1AGwAYQByaDVwLWJvb2sAaAA1AHAALQBiAG8AbwBrAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+Cjxqc29uPgo8IVtDREFUQVsKewoJImZvbnRGYW1pbHkiOiAiaDVwLWJvb2siLAoJImRlc2NyaXB0aW9uIjogIkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uIiwKCSJtYWpvclZlcnNpb24iOiAxLAoJIm1pbm9yVmVyc2lvbiI6IDIsCgkidmVyc2lvbiI6ICJWZXJzaW9uIDEuMiIsCgkiZm9udElkIjogImg1cC1ib29rIiwKCSJwc05hbWUiOiAiaDVwLWJvb2siLAoJInN1YkZhbWlseSI6ICJSZWd1bGFyIiwKCSJmdWxsTmFtZSI6ICJoNXAtYm9vayIKfQpdXT4KPC9qc29uPgo8L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Img1cC1ib29rIiBob3Jpei1hZHYteD0iMTAyNCI+Cjxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMDI0IiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTY0IiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAyNCIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwOyIgaG9yaXotYWR2LXg9IjUxMiIgZD0iIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMDsiIGdseXBoLW5hbWU9ImNsb3NlIiBkYXRhLXRhZ3M9ImNsb3NlIiBkPSJNMTAyNCA4NTYuODY5bC0xMDMuMTMxIDEwMy4xMzEtNDA4Ljg2OS00MDguODY5LTQwOC44NjkgNDA4Ljg2OS0xMDMuMTMxLTEwMy4xMzEgNDA4Ljg2OS00MDguODY5LTQwOC44NjktNDA4Ljg2OSAxMDMuMTMxLTEwMy4xMzEgNDA4Ljg2OSA0MDguODY5IDQwOC44NjktNDA4Ljg2OSAxMDMuMTMxIDEwMy4xMzEtNDA4Ljg2OSA0MDguODY5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDE7IiBnbHlwaC1uYW1lPSJleHBhbmRlZCIgZGF0YS10YWdzPSJleHBhbmRlZCIgZD0iTTU1OC4xMDQgMTc4Ljk0Nmw0NDcuNjM3IDQ0Ny42MzdjMjQuOTc1IDI0Ljk3NSAyNC4wMTYgNjYuMjgxLTAuOTYxIDkxLjI1NS0xMS41MjcgMTEuNTI3LTI3Ljg1NiAxOC4yNTItNDQuMTg4IDE4LjI1MmgtODk2LjIzMmMtMzQuNTgxIDAtNjMuMzk5LTI3Ljg1Ni02NC4zNi02Mi40MzggMC0xNy4yOTEgNi43MjUtMzMuNjIgMTkuMjExLTQ2LjEwOGw0NDcuNjM3LTQ0Ny42MzdjMjMuMDU0LTI0Ljk3NSA2Mi40MzgtMjYuODk3IDg4LjM3NC0zLjg0MyAwLjk2MSAwLjk2MSAxLjkyIDEuOTIgMi44ODIgMi44ODJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMjsiIGdseXBoLW5hbWU9ImNvbGxhcHNlZCIgZGF0YS10YWdzPSJjb2xsYXBzZWQiIGQ9Ik03ODEuMDU0IDQ5NC4xMDRsLTQ0Ny42MzcgNDQ3LjYzN2MtMjQuOTc1IDI0Ljk3NS02Ni4yODEgMjQuMDE2LTkxLjI1NS0wLjk2MS0xMS41MjctMTEuNTI3LTE4LjI1Mi0yNy44NTYtMTguMjUyLTQ0LjE4OHYtODk2LjIzMmMwLTM0LjU4MSAyNy44NTYtNjMuMzk5IDYyLjQzOC02NC4zNiAxNy4yOTEgMCAzMy42MiA2LjcyNSA0Ni4xMDggMTkuMjExbDQ0Ny42MzcgNDQ3LjYzN2MyNC45NzUgMjMuMDU0IDI2Ljg5NyA2Mi40MzggMy44NDMgODguMzc0LTAuOTYxIDAuOTYxLTEuOTIgMS45Mi0yLjg4MiAyLjg4MnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAzOyIgZ2x5cGgtbmFtZT0iY2hhcHRlci1zdGFydGVkIiBkYXRhLXRhZ3M9ImNoYXB0ZXItc3RhcnRlZCIgZD0iTTMzMC4yNDggMTM0LjQwOGMtNTQuMzk5IDMxLjM2LTEwMC40NzggNzcuNDM4LTEzMS44MzYgMTMxLjgzNi02NC42MzggMTEyLjYzNy02NC42MzggMjUwLjg3MyAwIDM2My41MTEgMzEuMzYgNTQuMzk5IDc3LjQzOCAxMDAuNDc4IDEzMS44MzYgMTMxLjgzNiA1NS4wMzggMzEuOTk5IDExNy43NTcgNDkuMjc4IDE4MS43NTUgNDguNjM5di03MjQuNDYxYy02My45OTktMC42NC0xMjYuNzE3IDE2LjYzOS0xODEuNzU1IDQ4LjYzOXpNOTU0Ljg3MSA3MDMuOTk0Yy00NC43OTkgNzcuNDM4LTEwOS40MzcgMTQyLjA3Ni0xODYuODc2IDE4Ni44NzYtNzcuNDM4IDQ1LjQzOC0xNjUuNzU2IDY5Ljc1OS0yNTUuOTk0IDY5LjExOC05MC4yMzggMC42NC0xNzguNTU1LTIzLjY4LTI1NS45OTQtNjkuMTE4LTc3LjQzOC00NC43OTktMTQyLjA3Ni0xMDkuNDM3LTE4Ni44NzYtMTg2Ljg3Ni00NS40MzgtNzcuNDM4LTY5Ljc1OS0xNjUuNzU2LTY5LjExOC0yNTUuOTk0LTAuNjQtOTAuMjM4IDIzLjAzOS0xNzguNTU1IDY4LjQ3OC0yNTUuOTk0IDQ0Ljc5OS03Ny40MzggMTA5LjQzNy0xNDIuMDc2IDE4Ny41MTUtMTg2Ljg3NiA3Ny40MzgtNDUuNDM4IDE2NS43NTYtNjkuNzU5IDI1NS45OTQtNjkuMTE4IDkwLjIzOC0wLjY0IDE3OC41NTUgMjMuMDM5IDI1NS45OTQgNjguNDc4IDc3LjQzOCA0NC43OTkgMTQyLjA3NiAxMDkuNDM3IDE4Ni44NzYgMTg3LjUxNSA0NS40MzggNzcuNDM4IDY5Ljc1OSAxNjUuNzU2IDY5LjExOCAyNTUuOTk0IDAuNjQgOTAuMjM4LTIzLjY4IDE3OC41NTUtNjkuMTE4IDI1NS45OTR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNDsiIGdseXBoLW5hbWU9ImNoYXB0ZXItZG9uZSIgZGF0YS10YWdzPSJjaGFwdGVyLWRvbmUiIGQ9Ik04NTUuNjc0IDU1Ni4xNThjMC0xMS41Mi0zLjg0LTIyLjM5OS0xMi4xNi0zMC4wNzlsLTM2MS41OTEtMzYxLjU5MWMtOC4zMi04LjMyLTE5LjE5OS0xMi43OTktMzAuNzE5LTEyLjc5OXMtMjIuMzk5IDQuNDgtMzAuMDc5IDEyLjc5OWwtMjQwLjYzNCAyNDAuNjM0Yy04LjMyIDcuNjgtMTIuMTYgMTguNTU5LTEyLjE2IDMwLjA3OS0wLjY0IDExLjUyIDMuODQgMjIuMzk5IDEyLjE2IDMwLjcxOWw2MC43OTggNjAuMTU5YzE2IDE2LjYzOSA0Mi4yMzkgMTcuMjggNTguODc4IDEuMjc5IDAuNjQtMC42NCAwLjY0LTAuNjQgMS4yNzktMS4yNzlsMTUwLjM5Ny0xNTAuMzk3IDI3MS4zNTMgMjcwLjcxM2MxNiAxNi42MzkgNDIuMjM5IDE3LjI4IDU4Ljg3OCAxLjI3OSAwLjY0LTAuNjQgMC42NC0wLjY0IDEuMjc5LTEuMjc5bDYwLjc5OC02MC4xNTljOC4zMi04LjMyIDEyLjc5OS0xOS4xOTkgMTIuMTYtMzAuNzE5djBsLTAuNjQgMC42NHpNOTU0Ljg3MSA3MDMuOTk0Yy00NC43OTkgNzcuNDM4LTEwOS40MzcgMTQyLjA3Ni0xODYuODc2IDE4Ni44NzYtNzcuNDM4IDQ1LjQzOC0xNjUuNzU2IDY5Ljc1OS0yNTUuOTk0IDY5LjExOC05MC4yMzggMC42NC0xNzguNTU1LTIzLjY4LTI1NS45OTQtNjkuMTE4LTc3LjQzOC00NC43OTktMTQyLjA3Ni0xMDkuNDM3LTE4Ni44NzYtMTg2Ljg3Ni00NS40MzgtNzcuNDM4LTY5Ljc1OS0xNjUuNzU2LTY5LjExOC0yNTUuOTk0LTAuNjQtOTAuMjM4IDIzLjAzOS0xNzguNTU1IDY4LjQ3OC0yNTUuOTk0IDQ0Ljc5OS03Ny40MzggMTA5LjQzNy0xNDIuMDc2IDE4Ny41MTUtMTg2Ljg3NiA3Ny40MzgtNDUuNDM4IDE2NS43NTYtNjkuNzU5IDI1NS45OTQtNjkuMTE4IDkwLjIzOC0wLjY0IDE3OC41NTUgMjMuMDM5IDI1NS45OTQgNjguNDc4IDc3LjQzOCA0NC43OTkgMTQyLjA3NiAxMDkuNDM3IDE4Ni44NzYgMTg3LjUxNSA0NS40MzggNzcuNDM4IDY5Ljc1OSAxNjUuNzU2IDY5LjExOCAyNTUuOTk0IDAuNjQgOTAuMjM4LTIzLjY4IDE3OC41NTUtNjkuMTE4IDI1NS45OTR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNTsiIGdseXBoLW5hbWU9ImNoYXB0ZXItYmxhbmsiIGRhdGEtdGFncz0iY2hhcHRlci1ibGFuayIgZD0iTTY5My43NTUgNzYxLjU5MmM1NC4zOTktMzEuMzYgMTAwLjQ3OC03Ny40MzggMTMxLjgzNi0xMzEuODM2IDY0LjYzOC0xMTIuNjM3IDY0LjYzOC0yNTAuODczIDAtMzYzLjUxMS0zMS4zNi01NC4zOTktNzcuNDM4LTEwMC40NzgtMTMxLjgzNi0xMzEuODM2LTExMi42MzctNjQuNjM4LTI1MC44NzMtNjQuNjM4LTM2My41MTEgMC01NC4zOTkgMzEuMzYtMTAwLjQ3OCA3Ny40MzgtMTMxLjgzNiAxMzEuODM2LTY0LjYzOCAxMTIuNjM3LTY0LjYzOCAyNTAuODczIDAgMzYzLjUxMSAzMS4zNiA1NC4zOTkgNzcuNDM4IDEwMC40NzggMTMxLjgzNiAxMzEuODM2IDExMi42MzcgNjQuNjM4IDI1MC44NzMgNjQuNjM4IDM2My41MTEgMHpNOTU0Ljg2OCA3MDMuOTk0Yy00NC43OTkgNzcuNDM4LTEwOS40MzcgMTQyLjA3Ni0xODYuODc2IDE4Ni44NzYtNzcuNDM4IDQ1LjQzOC0xNjUuNzU2IDY5Ljc1OS0yNTUuOTk0IDY5LjExOC05MC4yMzggMC42NC0xNzguNTU1LTIzLjY4LTI1NS45OTQtNjkuMTE4LTc3LjQzOC00NC43OTktMTQyLjA3Ni0xMDkuNDM3LTE4Ni44NzYtMTg2Ljg3Ni00NS40MzgtNzcuNDM4LTY5Ljc1OS0xNjUuNzU2LTY5LjExOC0yNTUuOTk0LTAuNjQtOTAuMjM4IDIzLjAzOS0xNzguNTU1IDY4LjQ3OC0yNTUuOTk0IDQ0Ljc5OS03Ny40MzggMTA5LjQzNy0xNDIuMDc2IDE4Ny41MTUtMTg2Ljg3NiA3Ny40MzgtNDUuNDM4IDE2NS43NTYtNjkuNzU5IDI1NS45OTQtNjkuMTE4IDkwLjIzOC0wLjY0IDE3OC41NTUgMjMuMDM5IDI1NS45OTQgNjguNDc4IDc3LjQzOCA0NC43OTkgMTQyLjA3NiAxMDkuNDM3IDE4Ni44NzYgMTg3LjUxNSA0NS40MzggNzcuNDM4IDY5Ljc1OSAxNjUuNzU2IDY5LjExOCAyNTUuOTk0IDAuNjQgOTAuMjM4LTIzLjY4IDE3OC41NTUtNjkuMTE4IDI1NS45OTR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNjsiIGdseXBoLW5hbWU9Im1lbnUiIGRhdGEtdGFncz0ibWVudSIgZD0iTTAgMTA2LjdoMTAyNHYxMzMuN2gtMTAyNHYtMTMzLjd6TTAgMzgxLjFoMTAyNHYxMzMuOGgtMTAyNHYtMTMzLjh6TTAgNzg5LjN2LTEzMy44aDEwMjR2MTMzLjhoLTEwMjR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNzsiIGdseXBoLW5hbWU9InByZXZpb3VzIiBkYXRhLXRhZ3M9InByZXZpb3VzIiBkPSJNODI4LjE2IDU2LjMybC0zOTAuODI2IDM5MS42OCAzOTAuODI2IDM5MS42OC0xMjAuMzIgMTIwLjMyLTUxMi01MTIgNTEyLTUxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA4OyIgZ2x5cGgtbmFtZT0ibmV4dCIgZGF0YS10YWdzPSJuZXh0IiBkPSJNMTk1Ljg0IDU2LjMybDM5MC44MjYgMzkxLjY4LTM5MC44MjYgMzkxLjY4IDEyMC4zMiAxMjAuMzIgNTEyLTUxMi01MTItNTEyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDk7IiBnbHlwaC1uYW1lPSJ1cCIgZGF0YS10YWdzPSJ1cCIgZD0iTTAgNDQ4bDkwLjI0LTkwLjI0IDM1Ny43NiAzNTcuMTJ2LTc3OC44NzloMTI3Ljk5OXY3NzguODc5bDM1Ny4xMi0zNTcuNzYgOTAuODggOTAuODgtNTExLjk5OSA1MTEuOTk5LTUxMS45OTktNTExLjk5OXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBhOyIgZ2x5cGgtbmFtZT0icXVlc3Rpb24tYW5zd2VyZWQiIGRhdGEtdGFncz0icXVlc3Rpb24tYW5zd2VyZWQiIGQ9Ik05NTQuOSA3MDRjLTQ0LjggNzcuNC0xMDkuNSAxNDIuMS0xODYuOSAxODYuOS03Ny40IDQ1LjQtMTY1LjggNjkuNy0yNTYgNjkuMS05MC4yIDAuNi0xNzguNi0yMy43LTI1Ni02OS4xLTc3LjQtNDQuOC0xNDIuMS0xMDkuNS0xODYuOS0xODYuOS00NS40LTc3LjQtNjkuNy0xNjUuOC02OS4xLTI1Ni0wLjYtOTAuMiAyMy0xNzguNiA2OC41LTI1NiA0NC44LTc3LjQgMTA5LjQtMTQyLjEgMTg3LjUtMTg2LjkgNzcuNC00NS40IDE2NS44LTY5LjggMjU2LTY5LjEgOTAuMi0wLjYgMTc4LjYgMjMgMjU2IDY4LjUgNzcuNCA0NC44IDE0Mi4xIDEwOS40IDE4Ni45IDE4Ny41IDQ1LjQgNzcuNCA2OS44IDE2NS44IDY5LjEgMjU2IDAuNiA5MC4yLTIzLjcgMTc4LjYtNjkuMSAyNTZ2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBiOyIgZ2x5cGgtbmFtZT0iZnVsbC1zY3JlZW4tZW50ZXIiIGRhdGEtdGFncz0iZnVsbC1zY3JlZW4tZW50ZXIiIGhvcml6LWFkdi14PSIxMDI1IiBkPSJNMTAyNSAyMDMuM2MwIDMyLjktMTIuNyA0Ni42LTQzIDQ2LjZ2MGMtMjkuOSAwLTQyLjUtMTQuMi00My00Ni42IDAtMjguOSAwLTU3LjcgMC04OS4xdi0zMS45bC0yMzYuOSAyMzYuOWMtMjQuOCAyNC44LTQ0LjUgNDQuNS03Ni45IDc2LjktMjIuOCAyMi44LTM5LjUgMjIuOC02MC43IDEuNS0xMS4xLTExLjEtMTYuMi0yMC4yLTE2LjItMjkuNCAwLTEwLjEgNS42LTIwLjIgMTguNy0zMy40IDYyLjMtNjIuOCAxMTYuNC0xMTYuNCAxNzEuNi0xNzEuNiA0MC00MCA4MS04MSAxMjYuNS0xMjYuNSA0LTQgNy42LTguMSAxMi4xLTEzLjJsMC41LTAuNWMtMTAuNiAwLTIwLjggMC0zMC45IDAtMzEuNCAwLTYxLjIgMC05MS4xIDAtMzAuOSAwLTQ0LjUtMTMuMi00NC41LTQyLjUgMC0xNC43IDMtMjUuOCAxMC4xLTMyLjQgNy4xLTcuMSAxOC4yLTEwLjYgMzMuNC0xMC42IDM1LjQgMCA3Mi40IDAgMTEwLjkgMCAzNS45IDAgNzMuOSAwIDExMy45IDAgMzIuNCAwIDQ1LjEgMTIuNyA0NS4xIDQ0LjUgMC40IDY0LjkgMC40IDEzNS43IDAuNCAyMjEuM3Ywek0yNzguOSA3NDEuM2wtMTE3LjQgMTE3LjVjLTQgNC04LjEgOC4xLTEzLjIgMTMuNy0wLjUgMC41LTEgMS0xLjUgMS41IDExLjEgMCAyMS44IDAgMzIuNCAwIDMyLjQgMCA2My4zIDAgOTMuNiAwIDI3LjggMC41IDQxLjUgMTQuNyA0MSA0My41LTAuNSAzNC40LTIxLjggNDItMzkuNSA0Mi04MiAwLjUtMTY0LjUgMC41LTIzNS4zIDAtMjMuOCAwLTM4LjUtMTQuMi0zOC41LTM3LjUtMC41LTg3LTAuNS0xNjQuNSAwLTIzNy45IDAtMTEuNiAzLjUtMjAuOCAxMC4xLTI3LjMgNy42LTcuNiAxOC43LTEwLjYgMzMuOS0xMC42IDI3LjMgMC41IDQxIDEzLjcgNDEuNSA0MCAwLjUgMjQuMyAwLjUgNDkuMSAwLjUgNzIuOSAwIDE0LjcgMCAyOC45IDAgNDMuNSAwIDMgMC41IDYuMSAxIDEwLjEgNC0zLjUgNy4xLTYuNiAxMC4xLTkuNmwxMDkuOC0xMDkuOGM2MS4yLTYyLjMgMTIwLjUtMTIxIDE4OS44LTE5MC4zIDEzLjctMTMuNyAyNC4zLTE5LjcgMzQuOS0xOS43aDAuNWMxMC4xIDAgMTkuNyA1LjYgMzAuOSAxOC4yIDE5LjIgMjEuMyAxNy43IDM3LTUuNiA2MC43LTY1LjEgNjUuMi0xMjEuMyAxMjEuNC0xNzkgMTc5LjF2MHpNMjY3LjEtNjMuN2MzMi45IDAgNDYuNiAxMi43IDQ2LjYgNDN2MGMwIDI5LjktMTQuMiA0Mi41LTQ2LjYgNDMtMjguOSAwLTU3LjcgMC04OS4xIDBoLTMxLjlsMjM2LjkgMjM2LjljMjQuOCAyNC44IDQ0LjUgNDQuNSA3Ni45IDc2LjkgMjIuOCAyMi44IDIyLjggMzkuNSAxLjUgNjAuNy0xMS4xIDExLjEtMjAuMiAxNi4yLTI5LjQgMTYuMi0xMC4xIDAtMjAuMi01LjYtMzMuNC0xOC43LTYyLjYtNjIuMi0xMTYuMy0xMTYuNC0xNzEuNS0xNzEuNi00MC00MC04MS04MS0xMjYuNS0xMjYuNS00LTQtOC4xLTcuNi0xMy4yLTEyLjFsLTAuNS0wLjVjMCAxMC42IDAgMjAuOCAwIDMwLjkgMCAzMS40IDAgNjEuMiAwIDkxLjEgMCAzMC45LTEzLjIgNDQuNS00Mi41IDQ0LjUtMTQuNyAwLTI1LjgtMy0zMi40LTEwLjEtNy4xLTcuMS0xMC42LTE4LjItMTAuNi0zMy40IDAtMzUuNCAwLTcyLjQgMC0xMTAuOSAwLTM1LjkgMC03My45IDAtMTEzLjkgMC0zMi40IDEyLjctNDUuMSA0NC41LTQ1LjEgNjQuOC0wLjQgMTM1LjctMC40IDIyMS4yLTAuNHYwek04MDUuMiA2ODIuNGwxMTcuNCAxMTcuNGM0IDQgOC4xIDguMSAxMy43IDEzLjIgMC41IDAuNSAxIDEgMS41IDEuNSAwLTExLjEgMC0yMS44IDAtMzIuNCAwLTMyLjQgMC02My4zIDAtOTMuNiAwLjUtMjcuOCAxNC43LTQxLjUgNDMuNS00MSAzNC40IDAuNSA0MiAyMS44IDQyIDM5LjUgMC41IDgyIDAuNSAxNjQuNSAwIDIzNS40IDAgMjMuOC0xNC4yIDM4LjUtMzcuNSAzOC41LTg3LjEgMC41LTE2NC41IDAuNS0yMzcuOSAwLTExLjYgMC0yMC44LTMuNS0yNy4zLTEwLjEtNy41LTcuOC0xMC42LTE4LjktMTAuNi0zNC4xIDAuNS0yNy4zIDEzLjctNDEgNDAtNDEuNSAyNC4zLTAuNSA0OS4xLTAuNSA3Mi45LTAuNSAxNC43IDAgMjguOSAwIDQzLjUgMCAzIDAgNi4xLTAuNSAxMC4xLTEtMy41LTQtNi42LTcuMS05LjYtMTAuMWwtMTA5LjgtMTA5LjljLTYyLjMtNjEuMi0xMjEtMTIwLjUtMTkwLjMtMTg5LjgtMTMuNy0xMy43LTE5LjctMjQuMy0xOS43LTM0Ljl2LTAuNWMwLTEwLjEgNS42LTE5LjcgMTguMi0zMC45IDIxLjMtMTkuMiAzNy0xNy43IDYwLjcgNS42IDY1LjMgNjUuMyAxMjEuNSAxMjEuNSAxNzkuMiAxNzkuMnYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGM7IiBnbHlwaC1uYW1lPSJmdWxsLXNjcmVlbi1leGl0IiBkYXRhLXRhZ3M9ImZ1bGwtc2NyZWVuLWV4aXQiIGhvcml6LWFkdi14PSIxMDI1IiBkPSJNNTQ4IDE0Ni4xYzAtMzIuOSAxMi43LTQ2LjYgNDMtNDYuNnYwYzI5LjkgMCA0Mi41IDE0LjIgNDMgNDYuNiAwIDI4LjkgMCA1Ny43IDAgODkuMXYzMS45bDIzNi45LTIzNi45YzI0LjgtMjQuOCA0NC41LTQ0LjUgNzYuOS03Ni45IDIyLjgtMjIuOCAzOS41LTIyLjggNjAuNy0xLjUgMTEuMSAxMS4xIDE2LjIgMjAuMiAxNi4yIDI5LjQgMCAxMC4xLTUuNiAyMC4yLTE4LjcgMzMuNC02Mi4zIDYyLjgtMTE2LjQgMTE2LjQtMTcxLjYgMTcxLjYtNDAgNDAtODEgODEtMTI2LjUgMTI2LjUtNCA0LTcuNiA4LjEtMTIuMSAxMy4ybC0wLjUgMC41YzEwLjYgMCAyMC44IDAgMzAuOSAwIDMxLjQgMCA2MS4yIDAgOTEuMSAwIDMwLjkgMCA0NC41IDEzLjIgNDQuNSA0Mi41IDAgMTQuNy0zIDI1LjgtMTAuMSAzMi40LTcuMSA3LjEtMTguMiAxMC42LTMzLjQgMTAuNi0zNS40IDAtNzIuNCAwLTExMC45IDAtMzUuOSAwLTczLjkgMC0xMTMuOSAwLTMyLjQgMC00NS0xMi43LTQ1LTQ0LjUtMS02NC40LTEtMTM1LjMtMC41LTIyMS4zdjB6TTE5OC4yIDcwMS45bDExNy40LTExNy40YzQtNCA4LjEtOC4xIDEzLjItMTMuNyAwLjUtMC41IDEtMSAxLjUtMS41LTExLjEgMC0yMS44IDAtMzIuNCAwLTMyLjQgMC02My4zIDAtOTMuNiAwLTI3LjgtMC41LTQxLjUtMTQuNy00MS00My41IDAuNS0zNC40IDIxLjgtNDIgMzkuNS00MiA4Mi0wLjUgMTY0LjUtMC41IDIzNS40IDAgMjQuMyAwIDM4LjUgMTQuMiAzOC41IDM4IDAuNSA4Ni42IDAuNSAxNjQuNSAwIDIzNy45IDAgMTEuNi0zLjUgMjAuOC0xMC4xIDI3LjMtNy42IDcuMS0xOC43IDEwLjYtMzMuOSAxMC42LTI3LjMtMC41LTQxLTEzLjctNDEuNS00MC0wLjUtMjQuMy0wLjUtNDkuMS0wLjUtNzIuOSAwLTE0LjcgMC0yOC45IDAtNDMuNSAwLTMtMC41LTYuMS0xLTEwLjEtNCAzLjUtNy4xIDYuNi0xMC4xIDkuNmwtMTA5LjUgMTA5LjNjLTYxLjggNjIuMy0xMjEgMTIxLTE5MC4zIDE5MC4zLTEzLjcgMTMuNy0yNC4zIDE5LjctMzUgMTkuN2gtMC41Yy0xMC4xIDAtMTkuNy01LjUtMzAuOC0xOC4yLTE5LjMtMjEuMi0xNy44LTM2LjkgNS41LTYwLjcgNjUuMy02NS4zIDEyMS0xMjEuNSAxNzkuMi0xNzkuMnYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGQ7IiBnbHlwaC1uYW1lPSJJY29uNiIgZGF0YS10YWdzPSJJY29uIDYiIGQ9Ik01MTIgNzU1LjE5OXYyMDQuODAxbC0yNTYtMjU2IDI1Ni0yNTZ2MjA0LjgwMWMxNjkuNDczIDAgMzA3LjItMTM3LjcyOCAzMDcuMi0zMDcuMnMtMTM3LjcyOC0zMDcuMi0zMDcuMi0zMDcuMi0zMDcuMiAxMzcuNzI4LTMwNy4yIDMwNy4yaC0xMDIuNGMwLTIyNi4zMDUgMTgzLjI5Ny00MDkuNiA0MDkuNi00MDkuNnM0MDkuNiAxODMuMjk3IDQwOS42IDQwOS42LTE4My4yOTcgNDA5LjYtNDA5LjYgNDA5LjZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwZTsiIGdseXBoLW5hbWU9InJlcG9ydGljb24tdjItZnVsbDEiIGRhdGEtdGFncz0icmVwb3J0IGljb24tdjItZnVsbCAoMSkiIGhvcml6LWFkdi14PSIxMDEzIiBkPSJNNTM5LjEyNyA5MzguMDI2di0xMTkuNTI0aDExOS41MjR6TTc4Mi40NjUgNTMwLjY3N2MyMC4wOTktNTIuMjU4IDQ0LjQ4Ny0yMzAuMjA2IDIzLjU4NC0yODEuNjYxLTkuMTEyLTIyLjUxMS0yMy4zMTUtMzkuNjYzLTUwLjExNC0zOC4wNTUtMjguNjc1IDEuNjA4LTQ1LjAyMyAxOS4wMjctNTAuNjUxIDQ2LjM2My0xLjg3NiA5LjM4LTAuODA0IDE5LjI5Ni0wLjgwNCAyOC45NDMtMC4yNjggMzAuMjg0IDEuMzQgNjAuNTY2LTAuNTM2IDkwLjU4MS0xLjM0IDIyLjc3OS0xMy45MzUgMzkuMzk1LTQwLjE5OSA0Ni4wOTUtMTUuMDA4LTU4Ljk1OC0zMC4yODQtMTE2LjMwOS00My42ODItMTc0LjE5Ni0yLjE0NC0xMC4xODQgMS44NzYtMjMuMDQ3IDUuODk2LTMzLjQ5OSAzNi4xNzktOTMuMjYyIDk5LjE1Ny0xNzUuNTM1IDEwNi45MjktMjc5LjI0OSA1NC42NyA5LjY0NyAxMDIuOTA5IDE4LjIyMyAxNTQuOSAyNy4zMzUtNi4xNjQgMzQuMzAzLTE2LjA3OSA2NS4xMjItMTUuODEyIDk1Ljk0MiAwLjI2OCAzMS44OTEgMTAuNDUyIDYzLjUxNCAxNi42MTUgOTUuNDA2IDUuMDkyIDI1LjQ1OSAxMC45ODggNTAuNjUxIDE1LjgxMiA3Ni4xMSAyNS45OTYgMTM2LjQwOSAxMS4yNTYgMjI0LjU3OC02MS42MzkgMzQ0LjEwMy0xMy40IDIyLjI0My0yNi43OTkgNDYuNjMxLTQzLjQxNCA2My41MTQtMzMuNDk5IDMzLjc2Ny00Ni44OTkgNDUuNTU4LTY4LjYwNyA1OC40MjJ2LTg1LjIyMmMyOC4xNC0xOS44MzIgMzkuMzk1LTQ5LjA0MyA1MS43MjMtODAuOTM0ek01NzEuNTU0IDI1Ny44NmwwLjI2OCAwLjgwNGMxMC4xODQgNDMuNjgyIDIxLjQ0IDg3LjkwMSAzMi40MjcgMTMwLjc4IDMuNzUyIDE0Ljc0IDcuNTAzIDI5LjQ3OSAxMS41MjQgNDQuNDg3bDEwLjk4OCA0Mi44NzkgNDIuODc5LTEwLjk4OGMzLjc1Mi0xLjA3MSA3LjUwMy0yLjE0NCAxMC45ODgtMy40ODR2MzExLjY3NmgtMTg1Ljk4N3YxODUuOTg3aC0zOTcuOTd2LTcyMS43MDVoNDczLjI3NWMtMC4yNjggNi40MzIgMC4yNjggMTIuODY0IDEuNjA4IDE5LjU2NHpNMjA3LjM1MiA3NDEuNTg4aDE3Ny45NDd2LTQ0LjQ4N2gtMTc3Ljk0N3Y0NC40ODd6TTQ0Ni4xMzQgMzk3LjIxN2gtMjM4Ljc4MnY0NC40ODdoMjM4Ljc4MnYtNDQuNDg3ek01NjkuOTQ2IDQ5MC4yMTFoLTM2Mi41OTV2NDQuNDg3aDM2Mi41OTV2LTQ0LjQ4N3pNNTY5Ljk0NiA1ODMuMjA0aC0zNjIuNTk1djQ0LjQ4N2gzNjIuNTk1di00NC40ODd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwZjsiIGdseXBoLW5hbWU9InJlcG9ydGljb24tdjItZnVsbCIgZGF0YS10YWdzPSJyZXBvcnQgaWNvbi12Mi1mdWxsIiBob3Jpei1hZHYteD0iOTc5IiBkPSJNNzQ4LjQ3NyA5NDIuMTM5di0xMzAuOTc3YzAtNS45NTMgNS45NTMtNS45NTMgNS45NTMtNS45NTNoMTMwLjk3N2M1Ljk1MyAwIDExLjkwNyAxMS45MDcgNS45NTMgMTEuOTA3bC0xMzAuOTc3IDEzMC45NzdjLTUuOTUzIDUuOTUzLTExLjkwNyAwLTExLjkwNy01Ljk1M3pNOTAzLjI2Ny02NGgtODI3LjUzNWMtNS45NTMgMC01Ljk1MyA1Ljk1My01Ljk1MyA1Ljk1M3YxMDEyLjA5M2MwIDUuOTUzIDUuOTUzIDUuOTUzIDUuOTUzIDUuOTUzaDU3Ny40ODhjNS45NTMgMCA1Ljk1My01Ljk1MyA1Ljk1My01Ljk1M3YtMjMyLjE4NmMwLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzaDIzOC4xNGM1Ljk1MyAwIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzdi03NjIuMDQ2YzAtMTEuOTA3IDAtMTEuOTA3LTUuOTUzLTExLjkwN3pNMTM1LjI2Ny00LjQ2NWg3MDguNDY1YzUuOTUzIDAgNS45NTMgNS45NTMgNS45NTMgNS45NTN2NjQyLjk3N2MwIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzaC0yMzIuMTg2Yy01Ljk1MyAwLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzdjIzOC4xNGMwIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzaC00NjQuMzcyYy01Ljk1MyA1Ljk1My0xMS45MDcgMC0xMS45MDctNS45NTN2LTg5My4wMjNjMC01Ljk1MyA1Ljk1My01Ljk1MyAxMS45MDctNS45NTN6TTI0Mi40MyA2MzguNTEyaDIzOC4xNHYtNTkuNTM1aC0yMzguMTR2NTkuNTM1ek0yNDIuNDMgNDg5LjY3NGg0ODguMTg2di01OS41MzVoLTQ4OC4xODZ2NTkuNTM1ek0yNDIuNDMgMjM5LjYyOGgzMjEuNDg4di01OS41MzVoLTMyMS40ODh2NTkuNTM1ek0yNDIuNDMgMzY0LjY1MWg0ODguMTg2di01OS41MzVoLTQ4OC4xODZ2NTkuNTM1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTA7IiBnbHlwaC1uYW1lPSJzdWNjZXNzIiBkYXRhLXRhZ3M9InN1Y2Nlc3MiIGQ9Ik00MzMuOTQzIDM0NC44MDZsLTEwOC40ODYgMTA4LjQ4Ni0zNy4wNDQtMzcuMDQ0IDE0NS41My0xNDQuMjA3IDMxMC45MDQgMzEwLjkwNC0zNy4wNDQgMzcuMDQ0ek01MTIgOTYwYy0yODEuNzk4IDAtNTEyLTIzMC4yMDItNTEyLTUxMnMyMzAuMjAyLTUxMiA1MTItNTEyYzI4MS43OTggMCA1MTIgMjMwLjIwMiA1MTIgNTEycy0yMjguODc5IDUxMi01MTIgNTEyek01MTItMjQuMzFjLTI2MC42MyAwLTQ3Mi4zMSAyMTEuNjgtNDcyLjMxIDQ3Mi4zMXMyMTEuNjggNDcyLjMxIDQ3Mi4zMSA0NzIuMzEgNDcyLjMxLTIxMS42OCA0NzIuMzEtNDcyLjMxLTIxMS42OC00NzIuMzEtNDcyLjMxLTQ3Mi4zMXoiIC8+CjwvZm9udD48L2RlZnM+PC9zdmc+"},function(t,e,n){"use strict";(function(t){if(n(142),n(339),n(340),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;function e(t,e,n){t[e]||Object.defineProperty(t,e,{writable:!0,configurable:!0,value:n})}e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach((function(t){[][t]&&e(Array,t,Function.call.bind([][t]))}))}).call(this,n(95))},function(t,e,n){n(143),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(223),n(224),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(86),n(247),n(115),n(248),n(116),n(249),n(250),n(251),n(252),n(253),n(119),n(121),n(122),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),t.exports=n(18)},function(t,e,n){"use strict";var r=n(2),i=n(14),o=n(7),a=n(0),c=n(12),s=n(30).KEY,u=n(3),A=n(47),l=n(43),p=n(33),h=n(5),f=n(97),d=n(67),g=n(145),v=n(54),m=n(1),y=n(4),b=n(15),M=n(23),I=n(32),k=n(36),E=n(100),w=n(16),N=n(8),L=n(34),x=w.f,T=N.f,C=E.f,j=r.Symbol,B=r.JSON,S=B&&B.stringify,D=h("_hidden"),O=h("toPrimitive"),Q={}.propertyIsEnumerable,z=A("symbol-registry"),U=A("symbols"),F=A("op-symbols"),Y=Object.prototype,P="function"==typeof j,R=r.QObject,G=!R||!R.prototype||!R.prototype.findChild,H=o&&u((function(){return 7!=k(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=x(Y,e);r&&delete Y[e],T(t,e,n),r&&t!==Y&&T(Y,e,r)}:T,W=function(t){var e=U[t]=k(j.prototype);return e._k=t,e},J=P&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},_=function(t,e,n){return t===Y&&_(F,e,n),m(t),e=M(e,!0),m(n),i(U,e)?(n.enumerable?(i(t,D)&&t[D][e]&&(t[D][e]=!1),n=k(n,{enumerable:I(0,!1)})):(i(t,D)||T(t,D,I(1,{})),t[D][e]=!0),H(t,e,n)):T(t,e,n)},V=function(t,e){m(t);for(var n,r=g(e=b(e)),i=0,o=r.length;o>i;)_(t,n=r[i++],e[n]);return t},X=function(t){var e=Q.call(this,t=M(t,!0));return!(this===Y&&i(U,t)&&!i(F,t))&&(!(e||!i(this,t)||!i(U,t)||i(this,D)&&this[D][t])||e)},Z=function(t,e){if(t=b(t),e=M(e,!0),t!==Y||!i(U,e)||i(F,e)){var n=x(t,e);return!n||!i(U,e)||i(t,D)&&t[D][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=C(b(t)),r=[],o=0;n.length>o;)i(U,e=n[o++])||e==D||e==s||r.push(e);return r},q=function(t){for(var e,n=t===Y,r=C(n?F:b(t)),o=[],a=0;r.length>a;)!i(U,e=r[a++])||n&&!i(Y,e)||o.push(U[e]);return o};P||(c((j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===Y&&e.call(F,n),i(this,D)&&i(this[D],t)&&(this[D][t]=!1),H(this,t,I(1,n))};return o&&G&&H(Y,t,{configurable:!0,set:e}),W(t)}).prototype,"toString",(function(){return this._k})),w.f=Z,N.f=_,n(37).f=E.f=K,n(49).f=X,n(53).f=q,o&&!n(29)&&c(Y,"propertyIsEnumerable",X,!0),f.f=function(t){return W(h(t))}),a(a.G+a.W+a.F*!P,{Symbol:j});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)h($[tt++]);for(var et=L(h.store),nt=0;et.length>nt;)d(et[nt++]);a(a.S+a.F*!P,"Symbol",{for:function(t){return i(z,t+="")?z[t]:z[t]=j(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in z)if(z[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!P,"Object",{create:function(t,e){return void 0===e?k(t):V(k(t),e)},defineProperty:_,defineProperties:V,getOwnPropertyDescriptor:Z,getOwnPropertyNames:K,getOwnPropertySymbols:q}),B&&a(a.S+a.F*(!P||u((function(){var t=j();return"[null]"!=S([t])||"{}"!=S({a:t})||"{}"!=S(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(y(e)||void 0!==t)&&!J(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,S.apply(B,r)}}),j.prototype[O]||n(11)(j.prototype,O,j.prototype.valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){t.exports=n(47)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(34),i=n(53),o=n(49);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,c=n(t),s=o.f,u=0;c.length>u;)s.call(t,a=c[u++])&&e.push(a);return e}},function(t,e,n){var r=n(0);r(r.S,"Object",{create:n(36)})},function(t,e,n){var r=n(0);r(r.S+r.F*!n(7),"Object",{defineProperty:n(8).f})},function(t,e,n){var r=n(0);r(r.S+r.F*!n(7),"Object",{defineProperties:n(99)})},function(t,e,n){var r=n(15),i=n(16).f;n(25)("getOwnPropertyDescriptor",(function(){return function(t,e){return i(r(t),e)}}))},function(t,e,n){var r=n(9),i=n(17);n(25)("getPrototypeOf",(function(){return function(t){return i(r(t))}}))},function(t,e,n){var r=n(9),i=n(34);n(25)("keys",(function(){return function(t){return i(r(t))}}))},function(t,e,n){n(25)("getOwnPropertyNames",(function(){return n(100).f}))},function(t,e,n){var r=n(4),i=n(30).onFreeze;n(25)("freeze",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(4),i=n(30).onFreeze;n(25)("seal",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(4),i=n(30).onFreeze;n(25)("preventExtensions",(function(t){return function(e){return t&&r(e)?t(i(e)):e}}))},function(t,e,n){var r=n(4);n(25)("isFrozen",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},function(t,e,n){var r=n(4);n(25)("isSealed",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},function(t,e,n){var r=n(4);n(25)("isExtensible",(function(t){return function(e){return!!r(e)&&(!t||t(e))}}))},function(t,e,n){var r=n(0);r(r.S+r.F,"Object",{assign:n(101)})},function(t,e,n){var r=n(0);r(r.S,"Object",{is:n(102)})},function(t,e,n){var r=n(0);r(r.S,"Object",{setPrototypeOf:n(71).set})},function(t,e,n){"use strict";var r=n(44),i={};i[n(5)("toStringTag")]="z",i+""!="[object z]"&&n(12)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,e,n){var r=n(0);r(r.P,"Function",{bind:n(103)})},function(t,e,n){var r=n(8).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(7)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var r=n(4),i=n(17),o=n(5)("hasInstance"),a=Function.prototype;o in a||n(8).f(a,o,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var r=n(0),i=n(105);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,e,n){var r=n(0),i=n(106);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},function(t,e,n){"use strict";var r=n(2),i=n(14),o=n(20),a=n(73),c=n(23),s=n(3),u=n(37).f,A=n(16).f,l=n(8).f,p=n(45).trim,h=r.Number,f=h,d=h.prototype,g="Number"==o(n(36)(d)),v="trim"in String.prototype,m=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=v?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,s=e.slice(2),u=0,A=s.length;u<A;u++)if((a=s.charCodeAt(u))<48||a>i)return NaN;return parseInt(s,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?s((function(){d.valueOf.call(n)})):"Number"!=o(n))?a(new f(m(e)),n,h):m(e)};for(var y,b=n(7)?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;b.length>M;M++)i(f,y=b[M])&&!i(h,y)&&l(h,y,A(f,y));h.prototype=d,d.constructor=h,n(12)(r,"Number",h)}},function(t,e,n){"use strict";var r=n(0),i=n(21),o=n(107),a=n(74),c=1..toFixed,s=Math.floor,u=[0,0,0,0,0,0],A="Number.toFixed: incorrect invocation!",l=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*u[n],u[n]=r%1e7,r=s(r/1e7)},p=function(t){for(var e=6,n=0;--e>=0;)n+=u[e],u[e]=s(n/t),n=n%t*1e7},h=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==u[t]){var n=String(u[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},f=function(t,e,n){return 0===e?n:e%2==1?f(t,e-1,n*t):f(t*t,e/2,n)};r(r.P+r.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(3)((function(){c.call({})}))),"Number",{toFixed:function(t){var e,n,r,c,s=o(this,A),u=i(t),d="",g="0";if(u<0||u>20)throw RangeError(A);if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(d="-",s=-s),s>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(s*f(2,69,1))-69)<0?s*f(2,-e,1):s/f(2,e,1),n*=4503599627370496,(e=52-e)>0){for(l(0,n),r=u;r>=7;)l(1e7,0),r-=7;for(l(f(10,r,1),0),r=e-1;r>=23;)p(1<<23),r-=23;p(1<<r),l(1,1),p(2),g=h()}else l(0,n),l(1<<-e,0),g=h()+a.call("0",u);return g=u>0?d+((c=g.length)<=u?"0."+a.call("0",u-c)+g:g.slice(0,c-u)+"."+g.slice(c-u)):d+g}})},function(t,e,n){"use strict";var r=n(0),i=n(3),o=n(107),a=1..toPrecision;r(r.P+r.F*(i((function(){return"1"!==a.call(1,void 0)}))||!i((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,n){var r=n(0);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var r=n(0),i=n(2).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var r=n(0);r(r.S,"Number",{isInteger:n(108)})},function(t,e,n){var r=n(0);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(0),i=n(108),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,e,n){var r=n(0);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var r=n(0);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var r=n(0),i=n(106);r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,e,n){var r=n(0),i=n(105);r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,e,n){var r=n(0),i=n(109),o=Math.sqrt,a=Math.acosh;r(r.S+r.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,e,n){var r=n(0),i=Math.asinh;r(r.S+r.F*!(i&&1/i(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},function(t,e,n){var r=n(0),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var r=n(0),i=n(75);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var r=n(0),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,e,n){var r=n(0),i=n(76);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,e,n){var r=n(0);r(r.S,"Math",{fround:n(110)})},function(t,e,n){var r=n(0),i=Math.abs;r(r.S,"Math",{hypot:function(t,e){for(var n,r,o=0,a=0,c=arguments.length,s=0;a<c;)s<(n=i(arguments[a++]))?(o=o*(r=s/n)*r+1,s=n):o+=n>0?(r=n/s)*r:n;return s===1/0?1/0:s*Math.sqrt(o)}})},function(t,e,n){var r=n(0),i=Math.imul;r(r.S+r.F*n(3)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r;return 0|i*o+((65535&n>>>16)*o+i*(65535&r>>>16)<<16>>>0)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var r=n(0);r(r.S,"Math",{log1p:n(109)})},function(t,e,n){var r=n(0);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var r=n(0);r(r.S,"Math",{sign:n(75)})},function(t,e,n){var r=n(0),i=n(76),o=Math.exp;r(r.S+r.F*n(3)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,e,n){var r=n(0),i=n(76),o=Math.exp;r(r.S,"Math",{tanh:function(t){var e=i(t=+t),n=i(-t);return e==1/0?1:n==1/0?-1:(e-n)/(o(t)+o(-t))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var r=n(0),i=n(35),o=String.fromCharCode,a=String.fromCodePoint;r(r.S+r.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],r=arguments.length,a=0;r>a;){if(e=+arguments[a++],i(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?o(e):o(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){var r=n(0),i=n(15),o=n(6);r(r.S,"String",{raw:function(t){for(var e=i(t.raw),n=o(e.length),r=arguments.length,a=[],c=0;n>c;)a.push(String(e[c++])),c<r&&a.push(String(arguments[c]));return a.join("")}})},function(t,e,n){"use strict";n(45)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){"use strict";var r=n(55)(!0);n(77)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var r=n(0),i=n(55)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,e,n){"use strict";var r=n(0),i=n(6),o=n(79),a="".endsWith;r(r.P+r.F*n(80)("endsWith"),"String",{endsWith:function(t){var e=o(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=i(e.length),c=void 0===n?r:Math.min(i(n),r),s=String(t);return a?a.call(e,s,c):e.slice(c-s.length,c)===s}})},function(t,e,n){"use strict";var r=n(0),i=n(79);r(r.P+r.F*n(80)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(0);r(r.P,"String",{repeat:n(74)})},function(t,e,n){"use strict";var r=n(0),i=n(6),o=n(79),a="".startsWith;r(r.P+r.F*n(80)("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},function(t,e,n){"use strict";n(13)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},function(t,e,n){"use strict";n(13)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,e,n){"use strict";n(13)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,e,n){"use strict";n(13)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,e,n){"use strict";n(13)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,e,n){"use strict";n(13)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},function(t,e,n){"use strict";n(13)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},function(t,e,n){"use strict";n(13)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,e,n){"use strict";n(13)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){"use strict";n(13)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){"use strict";n(13)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,e,n){"use strict";n(13)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,e,n){"use strict";n(13)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,e,n){var r=n(0);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var r=n(0),i=n(9),o=n(23);r(r.P+r.F*n(3)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=i(this),n=o(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var r=n(0),i=n(222);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,e,n){"use strict";var r=n(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-50000000000001))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:o},function(t,e,n){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n(12)(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,e,n){var r=n(5)("toPrimitive"),i=Date.prototype;r in i||n(11)(i,r,n(225))},function(t,e,n){"use strict";var r=n(1),i=n(23);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),"number"!=t)}},function(t,e,n){var r=n(0);r(r.S,"Array",{isArray:n(54)})},function(t,e,n){"use strict";var r=n(19),i=n(0),o=n(9),a=n(111),c=n(81),s=n(6),u=n(82),A=n(83);i(i.S+i.F*!n(57)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,p=o(t),h="function"==typeof this?this:Array,f=arguments.length,d=f>1?arguments[1]:void 0,g=void 0!==d,v=0,m=A(p);if(g&&(d=r(d,f>2?arguments[2]:void 0,2)),null==m||h==Array&&c(m))for(n=new h(e=s(p.length));e>v;v++)u(n,v,g?d(p[v],v):p[v]);else for(l=m.call(p),n=new h;!(i=l.next()).done;v++)u(n,v,g?a(l,d,[i.value,v],!0):i.value);return n.length=v,n}})},function(t,e,n){"use strict";var r=n(0),i=n(82);r(r.S+r.F*n(3)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)i(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var r=n(0),i=n(15),o=[].join;r(r.P+r.F*(n(48)!=Object||!n(22)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var r=n(0),i=n(70),o=n(20),a=n(35),c=n(6),s=[].slice;r(r.P+r.F*n(3)((function(){i&&s.call(i)})),"Array",{slice:function(t,e){var n=c(this.length),r=o(this);if(e=void 0===e?n:e,"Array"==r)return s.call(this,t,e);for(var i=a(t,n),u=a(e,n),A=c(u-i),l=new Array(A),p=0;p<A;p++)l[p]="String"==r?this.charAt(i+p):this[i+p];return l}})},function(t,e,n){"use strict";var r=n(0),i=n(10),o=n(9),a=n(3),c=[].sort,s=[1,2,3];r(r.P+r.F*(a((function(){s.sort(void 0)}))||!a((function(){s.sort(null)}))||!n(22)(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},function(t,e,n){"use strict";var r=n(0),i=n(26)(0),o=n(22)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,n){var r=n(4),i=n(54),o=n(5)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var r=n(0),i=n(26)(1);r(r.P+r.F*!n(22)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(26)(2);r(r.P+r.F*!n(22)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(26)(3);r(r.P+r.F*!n(22)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(26)(4);r(r.P+r.F*!n(22)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(112);r(r.P+r.F*!n(22)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){"use strict";var r=n(0),i=n(112);r(r.P+r.F*!n(22)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var r=n(0),i=n(52)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!n(22)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(0),i=n(15),o=n(21),a=n(6),c=[].lastIndexOf,s=!!c&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(s||!n(22)(c)),"Array",{lastIndexOf:function(t){if(s)return c.apply(this,arguments)||0;var e=i(this),n=a(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},function(t,e,n){var r=n(0);r(r.P,"Array",{copyWithin:n(113)}),n(31)("copyWithin")},function(t,e,n){var r=n(0);r(r.P,"Array",{fill:n(85)}),n(31)("fill")},function(t,e,n){"use strict";var r=n(0),i=n(26)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(31)("find")},function(t,e,n){"use strict";var r=n(0),i=n(26)(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(31)(o)},function(t,e,n){n(38)("Array")},function(t,e,n){var r=n(2),i=n(73),o=n(8).f,a=n(37).f,c=n(56),s=n(50),u=r.RegExp,A=u,l=u.prototype,p=/a/g,h=/a/g,f=new u(p)!==p;if(n(7)&&(!f||n(3)((function(){return h[n(5)("match")]=!1,u(p)!=p||u(h)==h||"/a/i"!=u(p,"i")})))){u=function(t,e){var n=this instanceof u,r=c(t),o=void 0===e;return!n&&r&&t.constructor===u&&o?t:i(f?new A(r&&!o?t.source:t,e):A((r=t instanceof u)?t.source:t,r&&o?s.call(t):e),n?this:l,u)};for(var d=function(t){t in u||o(u,t,{configurable:!0,get:function(){return A[t]},set:function(e){A[t]=e}})},g=a(A),v=0;g.length>v;)d(g[v++]);l.constructor=u,u.prototype=l,n(12)(r,"RegExp",u)}n(38)("RegExp")},function(t,e,n){"use strict";n(116);var r=n(1),i=n(50),o=n(7),a=/./.toString,c=function(t){n(12)(RegExp.prototype,"toString",t,!0)};n(3)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=a.name&&c((function(){return a.call(this)}))},function(t,e,n){"use strict";var r=n(1),i=n(6),o=n(88),a=n(58);n(59)("match",1,(function(t,e,n,c){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var s=r(t),u=String(this);if(!s.global)return a(s,u);var A=s.unicode;s.lastIndex=0;for(var l,p=[],h=0;null!==(l=a(s,u));){var f=String(l[0]);p[h]=f,""===f&&(s.lastIndex=o(u,i(s.lastIndex),A)),h++}return 0===h?null:p}]}))},function(t,e,n){"use strict";var r=n(1),i=n(9),o=n(6),a=n(21),c=n(88),s=n(58),u=Math.max,A=Math.min,l=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(59)("replace",2,(function(t,e,n,f){return[function(r,i){var o=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(t,e){var i=f(n,t,this,e);if(i.done)return i.value;var l=r(t),p=String(this),h="function"==typeof e;h||(e=String(e));var g=l.global;if(g){var v=l.unicode;l.lastIndex=0}for(var m=[];;){var y=s(l,p);if(null===y)break;if(m.push(y),!g)break;""===String(y[0])&&(l.lastIndex=c(p,o(l.lastIndex),v))}for(var b,M="",I=0,k=0;k<m.length;k++){y=m[k];for(var E=String(y[0]),w=u(A(a(y.index),p.length),0),N=[],L=1;L<y.length;L++)N.push(void 0===(b=y[L])?b:String(b));var x=y.groups;if(h){var T=[E].concat(N,w,p);void 0!==x&&T.push(x);var C=String(e.apply(void 0,T))}else C=d(E,p,w,N,x,e);w>=I&&(M+=p.slice(I,w)+C,I=w+E.length)}return M+p.slice(I)}];function d(t,e,r,o,a,c){var s=r+t.length,u=o.length,A=h;return void 0!==a&&(a=i(a),A=p),n.call(c,A,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":c=a[i.slice(1,-1)];break;default:var A=+i;if(0===A)return n;if(A>u){var p=l(A/10);return 0===p?n:p<=u?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):n}c=o[A-1]}return void 0===c?"":c}))}}))},function(t,e,n){"use strict";var r=n(1),i=n(102),o=n(58);n(59)("search",1,(function(t,e,n,a){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=a(n,t,this);if(e.done)return e.value;var c=r(t),s=String(this),u=c.lastIndex;i(u,0)||(c.lastIndex=0);var A=o(c,s);return i(c.lastIndex,u)||(c.lastIndex=u),null===A?-1:A.index}]}))},function(t,e,n){"use strict";var r=n(56),i=n(1),o=n(51),a=n(88),c=n(6),s=n(58),u=n(87),A=n(3),l=Math.min,p=[].push,h="length",f=!A((function(){RegExp(4294967295,"y")}));n(59)("split",2,(function(t,e,n,A){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[h]||2!="ab".split(/(?:ab)*/)[h]||4!=".".split(/(.?)(.?)/)[h]||".".split(/()()/)[h]>1||"".split(/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var o,a,c,s=[],A=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,f=void 0===e?4294967295:e>>>0,d=new RegExp(t.source,A+"g");(o=u.call(d,i))&&!((a=d.lastIndex)>l&&(s.push(i.slice(l,o.index)),o[h]>1&&o.index<i[h]&&p.apply(s,o.slice(1)),c=o[0][h],l=a,s[h]>=f));)d.lastIndex===o.index&&d.lastIndex++;return l===i[h]?!c&&d.test("")||s.push(""):s.push(i.slice(l)),s[h]>f?s.slice(0,f):s}:"0".split(void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):d.call(String(i),n,r)},function(t,e){var r=A(d,t,this,e,d!==n);if(r.done)return r.value;var u=i(t),p=String(this),h=o(u,RegExp),g=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(f?"y":"g"),m=new h(f?u:"^(?:"+u.source+")",v),y=void 0===e?4294967295:e>>>0;if(0===y)return[];if(0===p.length)return null===s(m,p)?[p]:[];for(var b=0,M=0,I=[];M<p.length;){m.lastIndex=f?M:0;var k,E=s(m,f?p:p.slice(M));if(null===E||(k=l(c(m.lastIndex+(f?0:M)),p.length))===b)M=a(p,M,g);else{if(I.push(p.slice(b,M)),I.length===y)return I;for(var w=1;w<=E.length-1;w++)if(I.push(E[w]),I.length===y)return I;M=b=k}}return I.push(p.slice(b)),I}]}))},function(t,e,n){"use strict";var r,i,o,a,c=n(29),s=n(2),u=n(19),A=n(44),l=n(0),p=n(4),h=n(10),f=n(39),d=n(40),g=n(51),v=n(89).set,m=n(90)(),y=n(91),b=n(117),M=n(60),I=n(118),k=s.TypeError,E=s.process,w=E&&E.versions,N=w&&w.v8||"",L=s.Promise,x="process"==A(E),T=function(){},C=i=y.f,j=!!function(){try{var t=L.resolve(1),e=(t.constructor={})[n(5)("species")]=function(t){t(T,T)};return(x||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==N.indexOf("6.6")&&-1===M.indexOf("Chrome/66")}catch(t){}}(),B=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},S=function(t,e){if(!t._n){t._n=!0;var n=t._c;m((function(){for(var r=t._v,i=1==t._s,o=0,a=function(e){var n,o,a,c=i?e.ok:e.fail,s=e.resolve,u=e.reject,A=e.domain;try{c?(i||(2==t._h&&Q(t),t._h=1),!0===c?n=r:(A&&A.enter(),n=c(r),A&&(A.exit(),a=!0)),n===e.promise?u(k("Promise-chain cycle")):(o=B(n))?o.call(n,s,u):s(n)):u(r)}catch(t){A&&!a&&A.exit(),u(t)}};n.length>o;)a(n[o++]);t._c=[],t._n=!1,e&&!t._h&&D(t)}))}},D=function(t){v.call(s,(function(){var e,n,r,i=t._v,o=O(t);if(o&&(e=b((function(){x?E.emit("unhandledRejection",i,t):(n=s.onunhandledrejection)?n({promise:t,reason:i}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=x||O(t)?2:1),t._a=void 0,o&&e.e)throw e.v}))},O=function(t){return 1!==t._h&&0===(t._a||t._c).length},Q=function(t){v.call(s,(function(){var e;x?E.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})}))},z=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),S(e,!0))},U=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw k("Promise can't be resolved itself");(e=B(t))?m((function(){var r={_w:n,_d:!1};try{e.call(t,u(U,r,1),u(z,r,1))}catch(t){z.call(r,t)}})):(n._v=t,n._s=1,S(n,!1))}catch(t){z.call({_w:n,_d:!1},t)}}};j||(L=function(t){f(this,L,"Promise","_h"),h(t),r.call(this);try{t(u(U,this,1),u(z,this,1))}catch(t){z.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(41)(L.prototype,{then:function(t,e){var n=C(g(this,L));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=x?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&S(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(U,t,1),this.reject=u(z,t,1)},y.f=C=function(t){return t===L||t===a?new o(t):i(t)}),l(l.G+l.W+l.F*!j,{Promise:L}),n(43)(L,"Promise"),n(38)("Promise"),a=n(18).Promise,l(l.S+l.F*!j,"Promise",{reject:function(t){var e=C(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(c||!j),"Promise",{resolve:function(t){return I(c&&this===a?L:this,t)}}),l(l.S+l.F*!(j&&n(57)((function(t){L.all(t).catch(T)}))),"Promise",{all:function(t){var e=this,n=C(e),r=n.resolve,i=n.reject,o=b((function(){var n=[],o=0,a=1;d(t,!1,(function(t){var c=o++,s=!1;n.push(void 0),a++,e.resolve(t).then((function(t){s||(s=!0,n[c]=t,--a||r(n))}),i)})),--a||r(n)}));return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=C(e),r=n.reject,i=b((function(){d(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}})},function(t,e,n){"use strict";var r=n(123),i=n(42);n(61)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"WeakSet"),t,!0)}},r,!1,!0)},function(t,e,n){"use strict";var r=n(0),i=n(62),o=n(92),a=n(1),c=n(35),s=n(6),u=n(4),A=n(2).ArrayBuffer,l=n(51),p=o.ArrayBuffer,h=o.DataView,f=i.ABV&&A.isView,d=p.prototype.slice,g=i.VIEW;r(r.G+r.W+r.F*(A!==p),{ArrayBuffer:p}),r(r.S+r.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return f&&f(t)||u(t)&&g in t}}),r(r.P+r.U+r.F*n(3)((function(){return!new p(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,e){if(void 0!==d&&void 0===e)return d.call(a(this),t);for(var n=a(this).byteLength,r=c(t,n),i=c(void 0===e?n:e,n),o=new(l(this,p))(s(i-r)),u=new h(this),A=new h(o),f=0;r<i;)A.setUint8(f++,u.getUint8(r++));return o}}),n(38)("ArrayBuffer")},function(t,e,n){var r=n(0);r(r.G+r.W+r.F*!n(62).ABV,{DataView:n(92).DataView})},function(t,e,n){n(27)("Int8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(27)("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(27)("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}),!0)},function(t,e,n){n(27)("Int16",2,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(27)("Uint16",2,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(27)("Int32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(27)("Uint32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(27)("Float32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){n(27)("Float64",8,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){var r=n(0),i=n(10),o=n(1),a=(n(2).Reflect||{}).apply,c=Function.apply;r(r.S+r.F*!n(3)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,n){var r=i(t),s=o(n);return a?a(r,e,s):c.call(r,e,s)}})},function(t,e,n){var r=n(0),i=n(36),o=n(10),a=n(1),c=n(4),s=n(3),u=n(103),A=(n(2).Reflect||{}).construct,l=s((function(){function t(){}return!(A((function(){}),[],t)instanceof t)})),p=!s((function(){A((function(){}))}));r(r.S+r.F*(l||p),"Reflect",{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(p&&!l)return A(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(u.apply(t,r))}var s=n.prototype,h=i(c(s)?s:Object.prototype),f=Function.apply.call(t,h,e);return c(f)?f:h}})},function(t,e,n){var r=n(8),i=n(0),o=n(1),a=n(23);i(i.S+i.F*n(3)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){o(t),e=a(e,!0),o(n);try{return r.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var r=n(0),i=n(16).f,o=n(1);r(r.S,"Reflect",{deleteProperty:function(t,e){var n=i(o(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var r=n(0),i=n(1),o=function(t){this._t=i(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(78)(o,"Object",(function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,e,n){var r=n(16),i=n(17),o=n(14),a=n(0),c=n(4),s=n(1);a(a.S,"Reflect",{get:function t(e,n){var a,u,A=arguments.length<3?e:arguments[2];return s(e)===A?e[n]:(a=r.f(e,n))?o(a,"value")?a.value:void 0!==a.get?a.get.call(A):void 0:c(u=i(e))?t(u,n,A):void 0}})},function(t,e,n){var r=n(16),i=n(0),o=n(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(o(t),e)}})},function(t,e,n){var r=n(0),i=n(17),o=n(1);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,e,n){var r=n(0);r(r.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var r=n(0),i=n(1),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,e,n){var r=n(0);r(r.S,"Reflect",{ownKeys:n(125)})},function(t,e,n){var r=n(0),i=n(1),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,e,n){var r=n(8),i=n(16),o=n(17),a=n(14),c=n(0),s=n(32),u=n(1),A=n(4);c(c.S,"Reflect",{set:function t(e,n,c){var l,p,h=arguments.length<4?e:arguments[3],f=i.f(u(e),n);if(!f){if(A(p=o(e)))return t(p,n,c,h);f=s(0)}if(a(f,"value")){if(!1===f.writable||!A(h))return!1;if(l=i.f(h,n)){if(l.get||l.set||!1===l.writable)return!1;l.value=c,r.f(h,n,l)}else r.f(h,n,s(0,c));return!0}return void 0!==f.set&&(f.set.call(h,c),!0)}})},function(t,e,n){var r=n(0),i=n(71);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){i.check(t,e);try{return i.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){"use strict";var r=n(0),i=n(52)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(31)("includes")},function(t,e,n){"use strict";var r=n(0),i=n(126),o=n(9),a=n(6),c=n(10),s=n(84);r(r.P,"Array",{flatMap:function(t){var e,n,r=o(this);return c(t),e=a(r.length),n=s(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n(31)("flatMap")},function(t,e,n){"use strict";var r=n(0),i=n(126),o=n(9),a=n(6),c=n(21),s=n(84);r(r.P,"Array",{flatten:function(){var t=arguments[0],e=o(this),n=a(e.length),r=s(e,0);return i(r,e,e,n,0,void 0===t?1:c(t)),r}}),n(31)("flatten")},function(t,e,n){"use strict";var r=n(0),i=n(55)(!0);r(r.P,"String",{at:function(t){return i(this,t)}})},function(t,e,n){"use strict";var r=n(0),i=n(127),o=n(60),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){"use strict";var r=n(0),i=n(127),o=n(60),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){"use strict";n(45)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,e,n){"use strict";n(45)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,e,n){"use strict";var r=n(0),i=n(24),o=n(6),a=n(56),c=n(50),s=RegExp.prototype,u=function(t,e){this._r=t,this._s=e};n(78)(u,"RegExp String",(function(){var t=this._r.exec(this._s);return{value:t,done:null===t}})),r(r.P,"String",{matchAll:function(t){if(i(this),!a(t))throw TypeError(t+" is not a regexp!");var e=String(this),n="flags"in s?String(t.flags):c.call(t),r=new RegExp(t.source,~n.indexOf("g")?n:"g"+n);return r.lastIndex=o(t.lastIndex),new u(r,e)}})},function(t,e,n){n(67)("asyncIterator")},function(t,e,n){n(67)("observable")},function(t,e,n){var r=n(0),i=n(125),o=n(15),a=n(16),c=n(82);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=o(t),s=a.f,u=i(r),A={},l=0;u.length>l;)void 0!==(n=s(r,e=u[l++]))&&c(A,e,n);return A}})},function(t,e,n){var r=n(0),i=n(128)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,e,n){var r=n(0),i=n(128)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},function(t,e,n){"use strict";var r=n(0),i=n(9),o=n(10),a=n(8);n(7)&&r(r.P+n(63),"Object",{__defineGetter__:function(t,e){a.f(i(this),t,{get:o(e),enumerable:!0,configurable:!0})}})},function(t,e,n){"use strict";var r=n(0),i=n(9),o=n(10),a=n(8);n(7)&&r(r.P+n(63),"Object",{__defineSetter__:function(t,e){a.f(i(this),t,{set:o(e),enumerable:!0,configurable:!0})}})},function(t,e,n){"use strict";var r=n(0),i=n(9),o=n(23),a=n(17),c=n(16).f;n(7)&&r(r.P+n(63),"Object",{__lookupGetter__:function(t){var e,n=i(this),r=o(t,!0);do{if(e=c(n,r))return e.get}while(n=a(n))}})},function(t,e,n){"use strict";var r=n(0),i=n(9),o=n(23),a=n(17),c=n(16).f;n(7)&&r(r.P+n(63),"Object",{__lookupSetter__:function(t){var e,n=i(this),r=o(t,!0);do{if(e=c(n,r))return e.set}while(n=a(n))}})},function(t,e,n){var r=n(0);r(r.P+r.R,"Map",{toJSON:n(129)("Map")})},function(t,e,n){var r=n(0);r(r.P+r.R,"Set",{toJSON:n(129)("Set")})},function(t,e,n){n(64)("Map")},function(t,e,n){n(64)("Set")},function(t,e,n){n(64)("WeakMap")},function(t,e,n){n(64)("WeakSet")},function(t,e,n){n(65)("Map")},function(t,e,n){n(65)("Set")},function(t,e,n){n(65)("WeakMap")},function(t,e,n){n(65)("WeakSet")},function(t,e,n){var r=n(0);r(r.G,{global:n(2)})},function(t,e,n){var r=n(0);r(r.S,"System",{global:n(2)})},function(t,e,n){var r=n(0),i=n(20);r(r.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{clamp:function(t,e,n){return Math.min(n,Math.max(e,t))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,e,n){var r=n(0),i=180/Math.PI;r(r.S,"Math",{degrees:function(t){return t*i}})},function(t,e,n){var r=n(0),i=n(131),o=n(110);r(r.S,"Math",{fscale:function(t,e,n,r,a){return o(i(t,e,n,r,a))}})},function(t,e,n){var r=n(0);r(r.S,"Math",{iaddh:function(t,e,n,r){var i=t>>>0,o=n>>>0;return(e>>>0)+(r>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,e,n){var r=n(0);r(r.S,"Math",{isubh:function(t,e,n,r){var i=t>>>0,o=n>>>0;return(e>>>0)-(r>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,e,n){var r=n(0);r(r.S,"Math",{imulh:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r,a=n>>16,c=r>>16,s=(a*o>>>0)+(i*o>>>16);return a*c+(s>>16)+((i*c>>>0)+(65535&s)>>16)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,e,n){var r=n(0),i=Math.PI/180;r(r.S,"Math",{radians:function(t){return t*i}})},function(t,e,n){var r=n(0);r(r.S,"Math",{scale:n(131)})},function(t,e,n){var r=n(0);r(r.S,"Math",{umulh:function(t,e){var n=+t,r=+e,i=65535&n,o=65535&r,a=n>>>16,c=r>>>16,s=(a*o>>>0)+(i*o>>>16);return a*c+(s>>>16)+((i*c>>>0)+(65535&s)>>>16)}})},function(t,e,n){var r=n(0);r(r.S,"Math",{signbit:function(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},function(t,e,n){"use strict";var r=n(0),i=n(18),o=n(2),a=n(51),c=n(118);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then((function(){return n}))}:t,n?function(n){return c(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){"use strict";var r=n(0),i=n(91),o=n(117);r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){var r=n(28),i=n(1),o=r.key,a=r.set;r.exp({defineMetadata:function(t,e,n,r){a(t,e,i(n),o(r))}})},function(t,e,n){var r=n(28),i=n(1),o=r.key,a=r.map,c=r.store;r.exp({deleteMetadata:function(t,e){var n=arguments.length<3?void 0:o(arguments[2]),r=a(i(e),n,!1);if(void 0===r||!r.delete(t))return!1;if(r.size)return!0;var s=c.get(e);return s.delete(n),!!s.size||c.delete(e)}})},function(t,e,n){var r=n(28),i=n(1),o=n(17),a=r.has,c=r.get,s=r.key,u=function(t,e,n){if(a(t,e,n))return c(t,e,n);var r=o(e);return null!==r?u(t,r,n):void 0};r.exp({getMetadata:function(t,e){return u(t,i(e),arguments.length<3?void 0:s(arguments[2]))}})},function(t,e,n){var r=n(121),i=n(130),o=n(28),a=n(1),c=n(17),s=o.keys,u=o.key,A=function(t,e){var n=s(t,e),o=c(t);if(null===o)return n;var a=A(o,e);return a.length?n.length?i(new r(n.concat(a))):a:n};o.exp({getMetadataKeys:function(t){return A(a(t),arguments.length<2?void 0:u(arguments[1]))}})},function(t,e,n){var r=n(28),i=n(1),o=r.get,a=r.key;r.exp({getOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,n){var r=n(28),i=n(1),o=r.keys,a=r.key;r.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:a(arguments[1]))}})},function(t,e,n){var r=n(28),i=n(1),o=n(17),a=r.has,c=r.key,s=function(t,e,n){if(a(t,e,n))return!0;var r=o(e);return null!==r&&s(t,r,n)};r.exp({hasMetadata:function(t,e){return s(t,i(e),arguments.length<3?void 0:c(arguments[2]))}})},function(t,e,n){var r=n(28),i=n(1),o=r.has,a=r.key;r.exp({hasOwnMetadata:function(t,e){return o(t,i(e),arguments.length<3?void 0:a(arguments[2]))}})},function(t,e,n){var r=n(28),i=n(1),o=n(10),a=r.key,c=r.set;r.exp({metadata:function(t,e){return function(n,r){c(t,e,(void 0!==r?i:o)(n),a(r))}}})},function(t,e,n){var r=n(0),i=n(90)(),o=n(2).process,a="process"==n(20)(o);r(r.G,{asap:function(t){var e=a&&o.domain;i(e?e.bind(t):t)}})},function(t,e,n){"use strict";var r=n(0),i=n(2),o=n(18),a=n(90)(),c=n(5)("observable"),s=n(10),u=n(1),A=n(39),l=n(41),p=n(11),h=n(40),f=h.RETURN,d=function(t){return null==t?void 0:s(t)},g=function(t){var e=t._c;e&&(t._c=void 0,e())},v=function(t){return void 0===t._o},m=function(t){v(t)||(t._o=void 0,g(t))},y=function(t,e){u(t),this._c=void 0,this._o=t,t=new b(this);try{var n=e(t),r=n;null!=n&&("function"==typeof n.unsubscribe?n=function(){r.unsubscribe()}:s(n),this._c=n)}catch(e){return void t.error(e)}v(this)&&g(this)};y.prototype=l({},{unsubscribe:function(){m(this)}});var b=function(t){this._s=t};b.prototype=l({},{next:function(t){var e=this._s;if(!v(e)){var n=e._o;try{var r=d(n.next);if(r)return r.call(n,t)}catch(t){try{m(e)}finally{throw t}}}},error:function(t){var e=this._s;if(v(e))throw t;var n=e._o;e._o=void 0;try{var r=d(n.error);if(!r)throw t;t=r.call(n,t)}catch(t){try{g(e)}finally{throw t}}return g(e),t},complete:function(t){var e=this._s;if(!v(e)){var n=e._o;e._o=void 0;try{var r=d(n.complete);t=r?r.call(n,t):void 0}catch(t){try{g(e)}finally{throw t}}return g(e),t}}});var M=function(t){A(this,M,"Observable","_f")._f=s(t)};l(M.prototype,{subscribe:function(t){return new y(t,this._f)},forEach:function(t){var e=this;return new(o.Promise||i.Promise)((function(n,r){s(t);var i=e.subscribe({next:function(e){try{return t(e)}catch(t){r(t),i.unsubscribe()}},error:r,complete:n})}))}}),l(M,{from:function(t){var e="function"==typeof this?this:M,n=d(u(t)[c]);if(n){var r=u(n.call(t));return r.constructor===e?r:new e((function(t){return r.subscribe(t)}))}return new e((function(e){var n=!1;return a((function(){if(!n){try{if(h(t,!1,(function(t){if(e.next(t),n)return f}))===f)return}catch(t){if(n)throw t;return void e.error(t)}e.complete()}})),function(){n=!0}}))},of:function(){for(var t=0,e=arguments.length,n=new Array(e);t<e;)n[t]=arguments[t++];return new("function"==typeof this?this:M)((function(t){var e=!1;return a((function(){if(!e){for(var r=0;r<n.length;++r)if(t.next(n[r]),e)return;t.complete()}})),function(){e=!0}}))}}),p(M.prototype,c,(function(){return this})),r(r.G,{Observable:M}),n(38)("Observable")},function(t,e,n){var r=n(2),i=n(0),o=n(60),a=[].slice,c=/MSIE .\./.test(o),s=function(t){return function(e,n){var r=arguments.length>2,i=!!r&&a.call(arguments,2);return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};i(i.G+i.B+i.F*c,{setTimeout:s(r.setTimeout),setInterval:s(r.setInterval)})},function(t,e,n){var r=n(0),i=n(89);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,e,n){for(var r=n(86),i=n(34),o=n(12),a=n(2),c=n(11),s=n(46),u=n(5),A=u("iterator"),l=u("toStringTag"),p=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(h),d=0;d<f.length;d++){var g,v=f[d],m=h[v],y=a[v],b=y&&y.prototype;if(b&&(b[A]||c(b,A,p),b[l]||c(b,l,v),s[v]=p,m))for(g in r)b[g]||o(b,g,r[g],!0)}},function(t,e,n){(function(e){!function(e){"use strict";var n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof t,u=e.regeneratorRuntime;if(u)s&&(t.exports=u);else{(u=e.regeneratorRuntime=s?t.exports:{}).wrap=d;var A={},l={};l[o]=function(){return this};var p=Object.getPrototypeOf,h=p&&p(p(N([])));h&&h!==n&&r.call(h,o)&&(l=h);var f=y.prototype=v.prototype=Object.create(l);m.prototype=f.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(f),t},u.awrap=function(t){return{__await:t}},b(M.prototype),M.prototype[a]=function(){return this},u.AsyncIterator=M,u.async=function(t,e,n,r){var i=new M(d(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(f),f[c]="Generator",f[o]=function(){return this},f.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=N,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,A):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),A},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),A}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),A}}}function d(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new w(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return L()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=I(a,n);if(c){if(c===A)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=g(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===A)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),o}function g(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function v(){}function m(){}function y(){}function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function M(t){function n(e,i,o,a){var c=g(t[e],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):Promise.resolve(u).then((function(t){s.value=t,o(s)}),a)}a(c.arg)}var i;"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n)),this._invoke=function(t,e){function r(){return new Promise((function(r,i){n(t,e,r,i)}))}return i=i?i.then(r,r):r()}}function I(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,I(t,e),"throw"===e.method))return A;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return A}var r=g(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,A;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,A):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,A)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,n(95))},function(t,e,n){n(341),t.exports=n(18).RegExp.escape},function(t,e,n){var r=n(0),i=n(342)(/[\\^$*+?.()|[\]{}]/g,"\\$&");r(r.S,"RegExp",{escape:function(t){return i(t)}})},function(t,e){t.exports=function(t,e){var n=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,n)}}},function(t,e,n){var r,i,o;
/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */i=[n(344)],void 0===(o="function"==typeof(r=function(t){function e(t){this.init(t)}e.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:e,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(e){t.extend(this,e),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=t("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var e=this.canvas;if(e.width=this.size,e.height=this.size,this.ctx=e.getContext("2d"),window.devicePixelRatio>1){var n=window.devicePixelRatio;e.style.width=e.style.height=this.size+"px",e.width=e.height=this.size*n,this.ctx.scale(n,n)}},initFill:function(){var e,n=this,r=this.fill,i=this.ctx,o=this.size;if(!r)throw Error("The fill is not specified!");if("string"==typeof r&&(r={color:r}),r.color&&(this.arcFill=r.color),r.gradient){var a=r.gradient;if(1==a.length)this.arcFill=a[0];else if(a.length>1){for(var c=r.gradientAngle||0,s=r.gradientDirection||[o/2*(1-Math.cos(c)),o/2*(1+Math.sin(c)),o/2*(1+Math.cos(c)),o/2*(1-Math.sin(c))],u=i.createLinearGradient.apply(i,s),A=0;A<a.length;A++){var l=a[A],p=A/(a.length-1);t.isArray(l)&&(p=l[1],l=l[0]),u.addColorStop(p,l)}this.arcFill=u}}function h(){var r=t("<canvas>")[0];r.width=n.size,r.height=n.size,r.getContext("2d").drawImage(e,0,0,o,o),n.arcFill=n.ctx.createPattern(r,"no-repeat"),n.drawFrame(n.lastFrameValue)}r.image&&(r.image instanceof Image?e=r.image:(e=new Image).src=r.image,e.complete?h():e.onload=h)},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(t){this.lastFrameValue=t,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(t),this.drawArc(t)},drawArc:function(t){if(0!==t){var e=this.ctx,n=this.radius,r=this.getThickness(),i=this.startAngle;e.save(),e.beginPath(),this.reverse?e.arc(n,n,n-r/2,i-2*Math.PI*t,i):e.arc(n,n,n-r/2,i,i+2*Math.PI*t),e.lineWidth=r,e.lineCap=this.lineCap,e.strokeStyle=this.arcFill,e.stroke(),e.restore()}},drawEmptyArc:function(t){var e=this.ctx,n=this.radius,r=this.getThickness(),i=this.startAngle;t<1&&(e.save(),e.beginPath(),t<=0?e.arc(n,n,n-r/2,0,2*Math.PI):this.reverse?e.arc(n,n,n-r/2,i,i-2*Math.PI*t):e.arc(n,n,n-r/2,i+2*Math.PI*t,i),e.lineWidth=r,e.strokeStyle=this.emptyFill,e.stroke(),e.restore())},drawAnimated:function(e){var n=this,r=this.el,i=t(this.canvas);i.stop(!0,!1),r.trigger("circle-animation-start"),i.css({animationProgress:0}).animate({animationProgress:1},t.extend({},this.animation,{step:function(t){var i=n.animationStartValue*(1-t)+e*t;n.drawFrame(i),r.trigger("circle-animation-progress",[t,i])}})).promise().always((function(){r.trigger("circle-animation-end")}))},getThickness:function(){return t.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(t){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=t,this.draw()}},t.circleProgress={defaults:e.prototype},t.easing.circleProgressEasing=function(t){return t<.5?.5*(t*=2)*t*t:1-.5*(t=2-2*t)*t*t},t.fn.circleProgress=function(n,r){var i="circle-progress",o=this.data(i);if("widget"==n){if(!o)throw Error('Calling "widget" method on not initialized instance is forbidden');return o.canvas}if("value"==n){if(!o)throw Error('Calling "value" method on not initialized instance is forbidden');if(void 0===r)return o.getValue();var a=arguments[1];return this.each((function(){t(this).data(i).setValue(a)}))}return this.each((function(){var r=t(this),o=r.data(i),a=t.isPlainObject(n)?n:{};if(o)o.init(a);else{var c=t.extend({},r.data());"string"==typeof c.fill&&(c.fill=JSON.parse(c.fill)),"string"==typeof c.animation&&(c.animation=JSON.parse(c.animation)),(a=t.extend(c,a)).el=r,o=new e(a),r.data(i,o)}}))}})?r.apply(e,i):r)||(t.exports=o)},function(t,e){t.exports=H5P.jQuery},function(t,e){var n,r;n=function(t){return t=+t,isNaN(t)||t==1/0||t==-1/0?0:t},r=function(t){t=t||document.getElementsByTagName("BODY")[0];var e=window.getComputedStyle(t),n=window.getComputedStyle(t.parent),r=e.overflowX,i=e.overflowY,o=n.overflowX,a=n.overflowY;return("table-column"==e.display||"table-column-group"==e.display)&&"visible"!=o&&"clip"!=o&&"visible"!=a&&"clip"!=a&&"visible"!=r&&"clip"!=r&&"visible"!=i&&"clip"!=i},Element.prototype.scroll||(Element.prototype.scroll=function(){var t,e,i=arguments.length,o=this.ownerDocument,a=o.defaultView,c="BackCompat"==o.compatMode,s=document.getElementsByTagName("BODY")[0],u={};if(o==window.document&&a&&0!==i){if(1===i){var A=arguments[0];if("object"!=typeof A)throw"Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";"left"in A&&(u.left=n(A.left)),"top"in A&&(u.top=n(A.top)),t="left"in u?u.left:this.scrollLeft,e="top"in u?u.top:this.scrollTop}else u.left=t=n(arguments[0]),u.top=e=n(arguments[1]);if(this!=document.documentElement)this!=s||!c||r(s)?(this.scrollLeft=t,this.scrollTop=e):a.scroll(u.left,u.top);else{if(c)return;a.scroll("scrollX"in a?a.scrollX:"pageXOffset"in a?a.pageXOffset:this.scrollLeft,e)}}}),Element.prototype.scrollTo||(Element.prototype.scrollTo=Element.prototype.scroll),Element.prototype.scrollBy||(Element.prototype.scrollBy=function(){var t=arguments.length,e={};if(0!==t){if(1===t){var r=arguments[0];if("object"!=typeof r)throw"Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";"left"in r&&(e.left=n(r.left)),"top"in r&&(e.top=n(r.top))}else e.left=n(arguments[0]),e.top=n(arguments[1]);e.left="left"in e?e.left+this.scrollLeft:this.scrollLeft,e.top="top"in e?e.top+this.scrollTop:this.scrollTop,this.scroll(e)}})},function(t,e,n){"use strict";n.r(e);n(132),n(134),n(141);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"extractFragmentsFromURL",value:function(t,e){if(!e.location.hash)return{};var n={};return e.location.hash.replace("#","").split("&").forEach((function(t){if(-1!==t.indexOf("=")){var e=t.split("=");n[e[0]]=e[1]}})),"function"!=typeof t||t(n)?n:{}}},{key:"createFragmentsString",value:function(t){var e=[];for(var n in t)e.push("".concat(n,"=").concat(t[n]));return"#".concat(e.join("&"))}},{key:"areFragmentsEqual",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(var r in t)if(t.hasOwnProperty(r)){if(n.length>0&&-1===n.indexOf(r))continue;if(!e[r]||t[r].toString()!==e[r].toString())return!1}return!0}}],(n=null)&&r(e.prototype,n),i&&r(e,i),t}();function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var A=function(t){function e(t,n,r,i){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=c(this,s(e).call(this))).id=n,o.parent=i,o.behaviour=t.behaviour,o.content=document.createElement("div"),o.content.classList.add("navigation-list"),o.container=o.addSideBar(),o.l10n=t.l10n,o.chapters=o.findAllChapters(t.chapters),o.chapterNodes=o.getChapterNodes(),r&&(o.titleElem=o.addMainTitle(r),o.container.appendChild(o.titleElem)),o.chapterNodes.forEach((function(t){o.content.appendChild(t)})),o.chapters.length>20&&o.content.classList.add("large-navigation-list"),o.container.appendChild(o.content),o.addTransformListener(),o.initializeNavigationControls(),o}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,H5P.EventDispatcher),n=e,(r=[{key:"initializeNavigationControls",value:function(){var t=this,e=Object.freeze({UP:38,DOWN:40});this.chapterNodes.forEach((function(n,r){n.querySelector(".h5p-interactive-book-navigation-chapter-button").addEventListener("keydown",(function(n){switch(n.keyCode){case e.UP:t.setFocusToChapterItem(r,-1),n.preventDefault();break;case e.DOWN:t.setFocusToChapterItem(r,1),n.preventDefault()}}));for(var i=n.querySelectorAll(".h5p-interactive-book-navigation-section"),o=function(n){i[n].querySelector(".section-button").addEventListener("keydown",(function(i){switch(i.keyCode){case e.UP:t.setFocusToSectionItem(r,n,-1),i.preventDefault();break;case e.DOWN:t.setFocusToSectionItem(r,n,1),i.preventDefault()}}))},a=0;a<i.length;a++)o(a)}))}},{key:"setFocusToChapterItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t+e;if(n<0?n=this.chapterNodes.length-1:n>this.chapterNodes.length-1&&(n=0),e){var r=e>0?t:n,i=this.chapterNodes[r];if(!i.classList.contains("h5p-interactive-book-navigation-closed")){var o=i.querySelectorAll(".h5p-interactive-book-navigation-section");if(o.length){var a=e>0?0:o.length-1;return void this.setFocusToSectionItem(r,a)}}}var c=this.chapterNodes[n],s=c.querySelector(".h5p-interactive-book-navigation-chapter-button");this.setFocusToItem(s,n)}},{key:"setFocusToSectionItem",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this.chapterNodes[t],i=r.querySelectorAll(".h5p-interactive-book-navigation-section"),o=e+n;if(o>i.length-1)this.setFocusToChapterItem(t+1);else if(o<0)this.setFocusToChapterItem(t);else{var a=i[o],c=a.querySelector(".section-button");this.setFocusToItem(c,t)}}},{key:"setFocusToItem",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.chapterNodes.forEach((function(t,n){var r=t.querySelector(".h5p-interactive-book-navigation-chapter-button");n===e?r.classList.add("h5p-interactive-book-navigation-current"):r.classList.remove("h5p-interactive-book-navigation-current"),r.setAttribute("tabindex","-1");for(var i=t.querySelectorAll(".h5p-interactive-book-navigation-section"),o=0;o<i.length;o++)i[o].querySelector(".section-button").setAttribute("tabindex","-1")})),t.setAttribute("tabindex","0"),this.focusedChapter=e,n||t.focus()}},{key:"addSideBar",value:function(){var t=document.createElement("div");return t.id="h5p-interactive-book-navigation-menu",t.classList.add("h5p-interactive-book-navigation"),t}},{key:"addMainTitle",value:function(t){var e=document.createElement("h2");e.classList.add("navigation-title"),e.innerHTML=t,e.setAttribute("title",t);var n=document.createElement("div");return n.classList.add("h5p-interactive-book-navigation-maintitle"),n.appendChild(e),n}},{key:"findSectionsInChapter",value:function(t){for(var e=[],n=t.params.content,r=0;r<n.length;r++){var i=n[r].content,o="";switch(i.library.split(" ")[0]){case"H5P.Link":o=i.params.title?i.params.title:"New link";break;default:o=i.metadata.title}e.push({title:o,id:i.subContentId?"h5p-interactive-book-section-".concat(i.subContentId):void 0})}return e}},{key:"findAllChapters",value:function(t){for(var e=[],n=0;n<t.length;n++){var r=this.findSectionsInChapter(t[n]),i=t[n].metadata.title,o="h5p-interactive-book-chapter-".concat(t[n].subContentId);e.push({sections:r,title:i,id:o,isSummary:!1})}return this.parent.hasSummary()&&e.push({sections:[],title:this.l10n.summaryHeader,id:"h5p-interactive-book-chapter-summary",isSummary:!0}),e}},{key:"toggleChapter",value:function(t,e){e=void 0!==e?e:!t.classList.contains("h5p-interactive-book-navigation-closed");var n=t.getElementsByClassName("h5p-interactive-book-navigation-chapter-accordion")[0];t.querySelector(".h5p-interactive-book-navigation-chapter-button").setAttribute("aria-expanded",(!e).toString()),!0===e?(t.classList.add("h5p-interactive-book-navigation-closed"),n&&(n.classList.remove("icon-expanded"),n.classList.add("icon-collapsed"))):(t.classList.remove("h5p-interactive-book-navigation-closed"),n&&(n.classList.remove("icon-collapsed"),n.classList.add("icon-expanded")))}},{key:"redirectHandler",value:function(t){var e=this;if(this.chapterNodes.forEach((function(n,r){e.toggleChapter(n,r!==t)})),this.parent.trigger("resize"),t!==this.focusedChapter){var n=this.chapterNodes[t].querySelector(".h5p-interactive-book-navigation-chapter-button");this.setFocusToItem(n,t,!0)}}},{key:"resetIndicators",value:function(){var t=this;this.chapterNodes.forEach((function(e,n){t.updateChapterProgressIndicator(n,"BLANK");var r=e.getElementsByClassName("h5p-interactive-book-navigation-section"),i=!0,o=!1,a=void 0;try{for(var c,s=r[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var u=c.value.querySelector(".h5p-interactive-book-navigation-section-icon");u&&(u.classList.remove("icon-question-answered"),u.classList.add("icon-chapter-blank"))}}catch(t){o=!0,a=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}}))}},{key:"updateChapterProgressIndicator",value:function(t,e){if(this.behaviour.progressIndicators&&!this.chapters[t].isSummary){var n=this.chapterNodes[t].getElementsByClassName("h5p-interactive-book-navigation-chapter-progress")[0];"BLANK"===e?(n.classList.remove("icon-chapter-started"),n.classList.remove("icon-chapter-done"),n.classList.add("icon-chapter-blank")):"DONE"===e?(n.classList.remove("icon-chapter-blank"),n.classList.remove("icon-chapter-started"),n.classList.add("icon-chapter-done")):"STARTED"===e&&(n.classList.remove("icon-chapter-blank"),n.classList.remove("icon-chapter-done"),n.classList.add("icon-chapter-started"))}}},{key:"setSectionMarker",value:function(t,e){var n=this.chapterNodes[t].querySelector(".h5p-interactive-book-navigation-section-"+e+" .h5p-interactive-book-navigation-section-icon");n&&(n.classList.remove("icon-chapter-blank"),n.classList.add("icon-question-answered"))}},{key:"getNodesFromChapter",value:function(t,e){var n=this,r=document.createElement("li");if(r.classList.add("h5p-interactive-book-navigation-chapter"),t.isSummary){r.classList.add("h5p-interactive-book-navigation-summary-button");var i=this.parent.chapters[e].instance.summaryMenuButton;return i.classList.add("h5p-interactive-book-navigation-chapter-button"),r.appendChild(i),r}var o=document.createElement("div");o.classList.add("h5p-interactive-book-navigation-chapter-accordion");var a=document.createElement("div");a.classList.add("h5p-interactive-book-navigation-chapter-title-text"),a.innerHTML=t.title,a.setAttribute("title",t.title);var c=document.createElement("div");this.behaviour.progressIndicators&&(c.classList.add("icon-chapter-blank"),c.classList.add("h5p-interactive-book-navigation-chapter-progress"));var s=document.createElement("button");s.setAttribute("tabindex",0===e?"0":"-1"),s.classList.add("h5p-interactive-book-navigation-chapter-button"),this.parent.activeChapter!==e?(o.classList.add("icon-collapsed"),s.setAttribute("aria-expanded","false")):(o.classList.add("icon-expanded"),s.setAttribute("aria-expanded","true")),s.setAttribute("aria-controls",A),s.onclick=function(t){var r=!t.currentTarget.querySelector(".h5p-interactive-book-navigation-chapter-accordion").classList.contains("hidden"),i="true"===t.currentTarget.getAttribute("aria-expanded");if(n.isOpenOnMobile()&&n.parent.trigger("toggleMenu"),e!==n.focusedChapter&&(n.isOpenOnMobile()||!r||!i)){var o={h5pbookid:n.parent.contentId,chapter:n.chapters[e].id,section:0};n.parent.trigger("newChapter",o)}r&&(n.toggleChapter(t.currentTarget.parentElement),n.parent.trigger("resize"))},s.appendChild(o),s.appendChild(a),s.appendChild(c),r.appendChild(s),this.parent.activeChapter===e?r.querySelector(".h5p-interactive-book-navigation-chapter-button").classList.add("h5p-interactive-book-navigation-current"):this.toggleChapter(r,!0);var u=document.createElement("ul");u.classList.add("h5p-interactive-book-navigation-sectionlist");var A="h5p-interactive-book-sectionlist-"+e;u.id=A;for(var l=[],p=0;p<this.chapters[e].sections.length;p++)if(this.parent.chapters[e].sections[p].isTask){var h=this.createSectionLink(e,p);l.push(h),u.appendChild(h)}else{var f=this.parent.params.chapters[e].params.content[p].content;if("H5P.AdvancedText"===f.library.split(" ")[0]){var d=document.createElement("div");d.innerHTML=f.params.text;for(var g=d.querySelectorAll("h2, h3"),v=0;v<g.length;v++){var m=g[v],y=this.createSectionLink(e,p,m.textContent,v);l.push(y),u.appendChild(y)}}}if(t.tasksLeft&&(t.maxTasks=t.tasksLeft),0===l.length){var b=r.querySelector(".h5p-interactive-book-navigation-chapter-accordion");b&&b.classList.add("hidden")}return r.appendChild(u),r}},{key:"createSectionLink",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=this.chapters[t].sections[e],a=document.createElement("div");a.innerHTML=r||o.title,a.setAttribute("title",r||o.title),a.classList.add("h5p-interactive-book-navigation-section-title");var c=document.createElement("div");c.classList.add("h5p-interactive-book-navigation-section-icon"),c.classList.add("icon-chapter-blank"),this.parent.chapters[t].sections[e].isTask&&c.classList.add("h5p-interactive-book-navigation-section-task");var s=document.createElement("button");s.classList.add("section-button"),s.setAttribute("tabindex","-1"),s.onclick=function(e){var r={h5pbookid:n.parent.contentId,chapter:n.chapters[t].id,section:o.id};null!==i&&(r.headerNumber=i),n.parent.trigger("newChapter",r),n.isOpenOnMobile()&&n.parent.trigger("toggleMenu"),e.preventDefault()},s.appendChild(c),s.appendChild(a);var u=document.createElement("li");return u.classList.add("h5p-interactive-book-navigation-section"),u.classList.add("h5p-interactive-book-navigation-section-"+e),u.appendChild(s),u}},{key:"getChapterNodes",value:function(){var t=this;return this.chapters.map((function(e,n){return t.getNodesFromChapter(e,n)}))}},{key:"isOpenOnMobile",value:function(){return this.parent.isMenuOpen()&&this.parent.isSmallSurface()}},{key:"addTransformListener",value:function(){var t=this;this.container.addEventListener("transitionend",(function(e){"flex-basis"===e.propertyName&&t.parent.trigger("resize")}))}}])&&a(n.prototype,r),i&&a(n,i),e}();function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(t,n,r,i,o){var a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(a=f(this,d(e).call(this))).id=t,a.parent=r,a.params=i||{},a.params.l10n=i.l10n,a.params.a11y=p({progress:"Page @page of @total",menu:"Toggle navigation menu"},a.params.a11y||{}),a.totalChapters=n,a.arrows=a.addArrows(),a.progressBar=a.createProgressBar(),a.progressIndicator=a.createProgressIndicator(),a.chapterTitle=a.addChapterTitle(),a.menuToggleButton=a.createMenuToggleButton();var c=document.createElement("div");return c.classList.add("h5p-interactive-book-status"),c.appendChild(a.menuToggleButton),c.appendChild(a.createToTopButton()),c.appendChild(a.chapterTitle.wrapper),c.appendChild(a.progressIndicator.wrapper),c.appendChild(a.arrows.buttonWrapperPrevious),c.appendChild(a.arrows.buttonWrapperNext),a.params.displayFullScreenButton&&H5P.fullscreenSupported&&c.appendChild(a.createFullScreenButton()),a.wrapper=document.createElement("div"),a.wrapper.classList.add(o),a.wrapper.setAttribute("tabindex","-1"),a.wrapper.appendChild(a.progressBar.wrapper),a.wrapper.appendChild(c),a.on("updateStatusBar",a.updateStatusBar),a.on("seqChapter",(function(t){var e={h5pbookid:a.parent.contentId};t.data.toTop&&(e.section="top"),"next"===t.data.direction?a.parent.activeChapter+1<a.parent.chapters.length?e.chapter="h5p-interactive-book-chapter-".concat(a.parent.chapters[a.parent.activeChapter+1].instance.subContentId):a.parent.hasSummary()&&a.parent.activeChapter+1===a.parent.chapters.length&&a.parent.trigger("viewSummary",e):"prev"===t.data.direction&&a.parent.activeChapter>0&&(e.chapter="h5p-interactive-book-chapter-".concat(a.parent.chapters[a.parent.activeChapter-1].instance.subContentId)),e.chapter&&a.parent.trigger("newChapter",e)})),a}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,H5P.EventDispatcher),n=e,(r=[{key:"updateProgressBar",value:function(t){var e="".concat(t/this.totalChapters*100,"%");this.progressBar.progress.style.width=e;var n=this.params.a11y.progress.replace("@page",t).replace("@total",this.totalChapters);this.progressBar.progress.title=n}},{key:"updateA11yProgress",value:function(t){this.progressIndicator.hiddenButRead.innerHTML=this.params.a11y.progress.replace("@page",t).replace("@total",this.totalChapters)}},{key:"updateStatusBar",value:function(){var t=this.parent.getActiveChapter()+1,e=this.parent.chapters[t-1].title;this.progressIndicator.current.innerHTML=t,this.updateA11yProgress(t),this.updateProgressBar(t),this.chapterTitle.text.innerHTML=e,this.chapterTitle.text.setAttribute("title",e),this.parent.activeChapter<=0?this.setButtonStatus("Previous",!0):this.setButtonStatus("Previous",!1),this.parent.activeChapter+1>=this.totalChapters?this.setButtonStatus("Next",!0):this.setButtonStatus("Next",!1)}},{key:"addArrows",value:function(){var t=this,e={};return e.buttonPrevious=document.createElement("div"),e.buttonPrevious.classList.add("navigation-button"),e.buttonPrevious.classList.add("icon-previous"),e.buttonPrevious.setAttribute("title",this.params.l10n.previousPage),e.buttonPrevious.setAttribute("aria-label",this.params.l10n.previousPage),e.buttonWrapperPrevious=document.createElement("button"),e.buttonWrapperPrevious.classList.add("h5p-interactive-book-status-arrow"),e.buttonWrapperPrevious.classList.add("h5p-interactive-book-status-button"),e.buttonWrapperPrevious.onclick=function(){t.trigger("seqChapter",{direction:"prev",toTop:!0})},e.buttonWrapperPrevious.appendChild(e.buttonPrevious),e.buttonNext=document.createElement("div"),e.buttonNext.classList.add("navigation-button"),e.buttonNext.classList.add("icon-next"),e.buttonNext.setAttribute("title",this.params.l10n.nextPage),e.buttonNext.setAttribute("aria-label",this.params.l10n.nextPage),e.buttonWrapperNext=document.createElement("button"),e.buttonWrapperNext.classList.add("h5p-interactive-book-status-arrow"),e.buttonWrapperNext.classList.add("h5p-interactive-book-status-button"),e.buttonWrapperNext.onclick=function(){t.trigger("seqChapter",{direction:"next",toTop:!0})},e.buttonWrapperNext.appendChild(e.buttonNext),e}},{key:"createMenuToggleButton",value:function(){var t=this,e=document.createElement("a");e.classList.add("icon-menu");var n=document.createElement("button");return n.classList.add("h5p-interactive-book-status-menu"),n.classList.add("h5p-interactive-book-status-button"),n.title=this.params.a11y.menu,n.setAttribute("aria-expanded","false"),n.setAttribute("aria-controls","h5p-interactive-book-navigation-menu"),n.onclick=function(){t.parent.trigger("toggleMenu")},n.appendChild(e),n}},{key:"isMenuOpen",value:function(){return this.menuToggleButton.classList.contains("h5p-interactive-book-status-menu-active")}},{key:"createProgressBar",value:function(){var t=document.createElement("div");t.classList.add("h5p-interactive-book-status-progressbar-front"),t.setAttribute("tabindex","-1");var e=document.createElement("div");return e.classList.add("h5p-interactive-book-status-progressbar-back"),e.appendChild(t),{wrapper:e,progress:t}}},{key:"addChapterTitle",value:function(){var t=document.createElement("h1");t.classList.add("title");var e=document.createElement("div");return e.classList.add("h5p-interactive-book-status-chapter"),e.appendChild(t),{wrapper:e,text:t}}},{key:"createToTopButton",value:function(){var t=this,e=document.createElement("div");e.classList.add("icon-up"),e.classList.add("navigation-button");var n=document.createElement("button");return n.classList.add("h5p-interactive-book-status-to-top"),n.classList.add("h5p-interactive-book-status-button"),n.classList.add("h5p-interactive-book-status-arrow"),n.setAttribute("aria-label",this.params.l10n.navigateToTop),n.onclick=function(){t.parent.trigger("scrollToTop")},n.appendChild(e),n}},{key:"setVisibility",value:function(t){t?this.wrapper.classList.add("footer-hidden"):this.wrapper.classList.remove("footer-hidden")}},{key:"createProgressIndicator",value:function(){var t=document.createElement("span");t.classList.add("h5p-interactive-book-status-progress-number"),t.setAttribute("aria-hidden","true");var e=document.createElement("span");e.classList.add("h5p-interactive-book-status-progress-divider"),e.innerHTML=" / ",e.setAttribute("aria-hidden","true");var n=document.createElement("span");n.classList.add("h5p-interactive-book-status-progress-number"),n.innerHTML=this.totalChapters,n.setAttribute("aria-hidden","true");var r=document.createElement("p");r.classList.add("hidden-but-read");var i=document.createElement("p");i.classList.add("h5p-interactive-book-status-progress"),i.appendChild(t),i.appendChild(e),i.appendChild(n),i.appendChild(r);var o=document.createElement("div");return o.appendChild(i),{wrapper:o,current:t,total:n,divider:e,progressText:i,hiddenButRead:r}}},{key:"setButtonStatus",value:function(t,e){e?(this.arrows["buttonWrapper"+t].setAttribute("disabled","disabled"),this.arrows["button"+t].classList.add("disabled")):(this.arrows["buttonWrapper"+t].removeAttribute("disabled"),this.arrows["button"+t].classList.remove("disabled"))}},{key:"createFullScreenButton",value:function(){var t=this,e=function(){!0===H5P.isFullscreen?H5P.exitFullScreen():H5P.fullScreen(t.parent.mainWrapper,t.parent)},n=document.createElement("button");return n.classList.add("h5p-interactive-book-status-fullscreen"),n.classList.add("h5p-interactive-book-status-button"),n.classList.add("h5p-interactive-book-enter-fullscreen"),n.setAttribute("title",this.params.l10n.fullscreen),n.setAttribute("aria-label",this.params.l10n.fullscreen),n.addEventListener("click",e),n.addEventListener("keyPress",(function(t){13!==t.which&&32!==t.which||(e(),t.preventDefault())})),this.parent.on("enterFullScreen",(function(){t.parent.isFullscreen=!0,n.classList.remove("h5p-interactive-book-enter-fullscreen"),n.classList.add("h5p-interactive-book-exit-fullscreen"),n.setAttribute("title",t.params.l10n.exitFullscreen),n.setAttribute("aria-label",t.params.l10n.exitFullScreen),t.parent.pageContent.updateFooter()})),this.parent.on("exitFullScreen",(function(){t.parent.isFullscreen=!1,n.classList.remove("h5p-interactive-book-exit-fullscreen"),n.classList.add("h5p-interactive-book-enter-fullscreen"),n.setAttribute("title",t.params.l10n.fullscreen),n.setAttribute("aria-label",t.params.l10n.fullscreen),t.parent.pageContent.updateFooter()})),n}}])&&h(n.prototype,r),i&&h(n,i),e}();function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=function(t){function e(t,n,r,i,o){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(a=b(this,M(e).call(this))).parent=o,a.container=a.createContainer(),t.coverImage?a.container.appendChild(a.createVisualsElement(t,i)):a.container.classList.add("h5p-cover-nographics"),a.container.appendChild(a.createTitleElement(n)),t.coverDescription&&a.container.appendChild(a.createDescriptionElement(t.coverDescription)),a.container.appendChild(a.createReadButton(r)),a}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(e,H5P.EventDispatcher),n=e,(r=[{key:"createContainer",value:function(){var t=document.createElement("div");return t.classList.add("h5p-interactive-book-cover"),t}},{key:"createVisualsElement",value:function(t,e){if(!t||!t.coverImage)return null;var n=document.createElement("div");return n.classList.add("h5p-interactive-book-cover-graphics"),n.appendChild(this.createImage(t.coverImage.path,e,t.coverAltText)),n.appendChild(this.createCoverBar()),n}},{key:"createImage",value:function(t,e,n){var r=document.createElement("img");return r.classList.add("h5p-interactive-book-cover-image"),r.src=H5P.getPath(t,e),r.setAttribute("draggable","false"),n&&(r.alt=n),r}},{key:"createCoverBar",value:function(){var t=document.createElement("div");return t.classList.add("h5p-interactive-book-cover-bar"),t}},{key:"createTitleElement",value:function(t){var e=document.createElement("p");e.innerHTML=t;var n=document.createElement("div");return n.classList.add("h5p-interactive-book-cover-title"),n.appendChild(e),n}},{key:"createDescriptionElement",value:function(t){if(!t)return null;var e=document.createElement("div");return e.classList.add("h5p-interactive-book-cover-description"),e.innerHTML=t,e}},{key:"createReadButton",value:function(t){var e=this,n=document.createElement("button");n.innerHTML=t,n.onclick=function(){e.removeCover()};var r=document.createElement("div");return r.classList.add("h5p-interactive-book-cover-readbutton"),r.appendChild(n),r}},{key:"removeCover",value:function(){this.container.parentElement.classList.remove("covered"),this.container.parentElement.removeChild(this.container),this.hidden=!0,this.parent.trigger("coverRemoved")}}])&&y(n.prototype,r),i&&y(n,i),e}();n(343);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var T=function(t){function e(t,n,r){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(i=N(this,L(e).call(this))).parent=n,i.behaviour=t.behaviour,i.l10n=t.l10n,i.chapters=r||[],i.subContentId="summary",i.wrapper=null,i.summaryMenuButton=i.createSummaryButton(),i.filterActionAll="all",i.filterActionUnanswered="unanswered",i.bookCompleted=!1,n.on("bookCompleted",(function(t){return i.setBookComplete(t.data.completed)})),n.on("toggleMenu",(function(){var t=document.querySelector(".h5p-interactive-book-summary-footer");t&&i.bookCompleted&&(i.parent.isMenuOpen()?t.classList.add("menu-open"):t.classList.remove("menu-open"))})),i}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,H5P.EventDispatcher),n=e,(r=[{key:"setBookComplete",value:function(t){var e=this.parent.mainWrapper[0].querySelector(".h5p-interactive-book-summary-footer");!e&&this.parent.isSmallSurface()&&((e=document.createElement("div")).classList.add("h5p-interactive-book-summary-footer"),e.appendChild(this.createSummaryButton()),this.parent.mainWrapper.append(e)),e&&t&&setTimeout((function(){return e.classList.add("show-footer")}),0),this.bookCompleted=t,Array.from(document.querySelectorAll(".h5p-interactive-book-summary-menu-button")).forEach((function(e){return e.setAttribute("data-book-completed",t.toString())}))}},{key:"setChapters",value:function(t){this.chapters=Array.isArray(t)?t:[]}},{key:"setSummaryMenuButtonDisabled",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.summaryMenuButton.disabled=t}},{key:"setFilter",value:function(t){var e=this,n=this.wrapper.querySelector(".h5p-interactive-book-summary-overview-list"),r=Array.from(n.querySelectorAll(".h5p-interactive-book-summary-overview-section"));r.forEach((function(t){t.classList.remove("h5p-interactive-book-summary-top-section"),t.classList.remove("h5p-interactive-book-summary-bottom-section")}));var i=n.querySelector(".h5p-interactive-book-summary-overview-list-empty");if(i.style.display="none",t===this.filterActionUnanswered){n.classList.add("h5p-interactive-book-summary-overview-list-only-unanswered");var o=r.filter((function(t){return!t.classList.contains("h5p-interactive-book-summary-no-interactions")}));o.length?(o[0].classList.add("h5p-interactive-book-summary-top-section"),o[o.length-1].classList.add("h5p-interactive-book-summary-bottom-section")):i.style.display="block"}else t===this.filterActionAll&&n.classList.remove("h5p-interactive-book-summary-overview-list-only-unanswered");setTimeout((function(){return e.trigger("resize")}),1)}},{key:"createSummaryButton",value:function(){var t=this,e=document.createElement("button");e.classList.add("h5p-interactive-book-summary-menu-button"),e.onclick=function(){var e={h5pbookid:t.parent.contentId,chapter:"h5p-interactive-book-chapter-summary",section:"top"};t.parent.trigger("newChapter",e),t.parent.isMenuOpen()&&t.parent.isSmallSurface()&&t.parent.trigger("toggleMenu")};var n=document.createElement("span");n.classList.add("h5p-interactive-book-summary-icon"),n.classList.add("icon-paper"),n.setAttribute("aria-hidden","true");var r=document.createElement("span");r.classList.add("h5p-interactive-book-summary-text"),r.innerHTML=this.l10n.summaryAndSubmit;var i=document.createElement("span");return i.classList.add("h5p-interactive-book-summary-menu-button-arrow"),i.classList.add("icon-up"),i.setAttribute("aria-hidden","true"),e.appendChild(n),e.appendChild(r),e.appendChild(i),e}},{key:"createCircle",value:function(t){var e=document.createElement("div");return e.classList.add("h5p-interactive-book-summary-progress-circle"),e.setAttribute("data-value",t),e.setAttribute("data-start-angle",-Math.PI/3),e.setAttribute("data-thickness",13),e.setAttribute("data-empty-fill","rgba(45, 122, 210, .1)"),e.setAttribute("data-fill",JSON.stringify({color:"#2d7ad2"})),e}},{key:"createProgress",value:function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0,c=document.createElement("div"),s=document.createElement("h3");s.innerHTML=t;var u=100*n/r;void 0===o&&(o=n),void 0===a&&(a=r);var A=document.createElement("p");if(A.classList.add("h5p-interactive-book-summary-progressbox-bigtext"),A.innerHTML=Math.round(u)+"%",i){var l=document.createElement("span");l.classList.add("absolute-value"),l.innerHTML=n;var p=document.createElement("span");p.classList.add("separator"),p.innerHTML="/";var h=document.createElement("span");h.classList.add("absolute-value"),h.innerHTML=r,A.innerHTML="",A.appendChild(l),A.appendChild(p),A.appendChild(h)}var f=document.createElement("span");f.classList.add("h5p-interactive-book-summary-progressbox-smalltext"),f.innerHTML=e.replace("@count",o).replace("@total",a),c.appendChild(s),c.appendChild(A),c.appendChild(f);var d=document.createElement("div");return d.appendChild(c),d.appendChild(this.createCircle(n/r)),d}},{key:"addScoreProgress",value:function(){var t=0,e=0,n=!0,r=!1,i=void 0;try{for(var o,a=this.chapters[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value;t+=c.maxTasks,e+=c.tasksLeft}}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}var s=this.createProgress(this.l10n.totalScoreLabel,this.l10n.interactionsProgressSubtext,this.parent.getScore(),this.parent.getMaxScore(),!0,Math.max(t-e,0),t);s.classList.add("h5p-interactive-book-summary-progress-container"),s.classList.add("h5p-interactive-book-summary-score-progress");var u=s.querySelector(".h5p-interactive-book-summary-progress-circle");return u.setAttribute("data-empty-fill","rgb(198, 220, 212)"),u.setAttribute("data-fill",JSON.stringify({color:"#0e7c57"})),s}},{key:"addBookProgress",value:function(){var t=this.createProgress(this.l10n.bookProgress,this.l10n.bookProgressSubtext,this.chapters.filter((function(t){return t.completed})).length,this.chapters.length);return t.classList.add("h5p-interactive-book-summary-progress-container"),t.classList.add("h5p-interactive-book-summary-book-progress"),t}},{key:"addInteractionsProgress",value:function(){var t=0,e=0,n=!0,r=!1,i=void 0;try{for(var o,a=this.chapters[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value;t+=c.maxTasks,e+=c.tasksLeft}}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}var s=this.createProgress(this.l10n.interactionsProgress,this.l10n.interactionsProgressSubtext,Math.max(t-e,0),t);return s.classList.add("h5p-interactive-book-summary-progress-container"),s.classList.add("h5p-interactive-book-summary-interactions-progress"),s}},{key:"addProgressIndicators",value:function(){if(this.behaviour.progressIndicators){var t=document.createElement("div");t.classList.add("h5p-interactive-box-summary-progress"),t.appendChild(this.addScoreProgress()),t.appendChild(this.addBookProgress()),t.appendChild(this.addInteractionsProgress()),setTimeout((function(){return H5P.jQuery(".h5p-interactive-book-summary-progress-circle").circleProgress()}),100),this.wrapper.appendChild(t)}}},{key:"addActionButtons",value:function(){var t=this,e=document.createElement("div");if(e.classList.add("h5p-interactive-book-summary-buttons"),this.parent.isSubmitButtonEnabled){var n=this.addButton("icon-paper-pencil",this.l10n.submitReport);n.classList.add("h5p-interactive-book-summary-submit"),n.onclick=function(){t.trigger("submitted"),t.parent.triggerXAPIScored(t.parent.getScore(),t.parent.getMaxScore(),"completed"),e.classList.add("submitted")},e.appendChild(n)}e.appendChild(this.createRestartButton()),e.appendChild(this.createSubmittedConfirmation()),this.wrapper.appendChild(e)}},{key:"createRestartButton",value:function(){var t=this,e=this.addButton("icon-restart",this.l10n.restartLabel);return e.classList.add("h5p-interactive-book-summary-restart"),e.onclick=function(){return t.parent.resetTask()},e}},{key:"createSubmittedConfirmation",value:function(){var t=document.createElement("div");t.classList.add("h5p-interactive-book-summary-submitted");var e=document.createElement("span");e.classList.add("icon-chapter-done"),e.classList.add("icon-check-mark"),t.appendChild(e);var n=document.createElement("p");return n.innerHTML=this.l10n.yourAnswersAreSubmittedForReview,t.appendChild(n),t.appendChild(this.createRestartButton()),t}},{key:"addButton",value:function(t,e){var n=document.createElement("button");n.type="button",n.classList.add("h5p-interactive-book-summary-button"),n.innerHTML=e;var r=document.createElement("span");return r.classList.add(t),r.setAttribute("aria-hidden","true"),n.appendChild(r),n}},{key:"createSectionList",value:function(t,e){var n=this,r=[],i=!1,o=!0,a=!1,c=void 0;try{for(var s,u=function(){var t=s.value,o=document.createElement("li");if(o.classList.add("h5p-interactive-book-summary-overview-section-details"),n.behaviour.progressIndicators){var a=document.createElement("span");a.classList.add("h5p-interactive-book-summary-section-icon"),a.classList.add(t.taskDone?"icon-chapter-done":"icon-chapter-blank"),o.appendChild(a)}var c=document.createElement("button");c.type="button",c.classList.add("h5p-interactive-book-summary-section-title"),c.onclick=function(){var r={h5pbookid:n.parent.contentId,chapter:"h5p-interactive-book-chapter-".concat(e),section:"h5p-interactive-book-section-".concat(t.instance.subContentId)};n.parent.trigger("newChapter",r)};var u=t.instance.contentData&&t.instance.contentData.metadata&&t.instance.contentData.metadata.title,A=t.content&&t.content.metadata&&t.content.metadata.title;c.innerHTML=u||A||"Untitled";var l=document.createElement("div");l.classList.add("h5p-interactive-book-summary-section-score"),l.innerHTML="-","function"==typeof t.instance.getScore&&(l.innerHTML=n.l10n.scoreText.replace("@score",t.instance.getScore()).replace("@maxscore",t.instance.getMaxScore())),t.taskDone?o.classList.add("h5p-interactive-book-summary-overview-section-details-task-done"):i=!0,o.appendChild(c),o.appendChild(l),r.push(o)},A=t[Symbol.iterator]();!(o=(s=A.next()).done);o=!0)u()}catch(t){a=!0,c=t}finally{try{o||null==A.return||A.return()}finally{if(a)throw c}}if(r.length){var l=document.createElement("div");l.classList.add("h5p-interactive-book-summary-overview-section-score-header");var p=document.createElement("div");p.innerHTML=this.l10n.score,l.appendChild(p),r.unshift(l)}return{hasUnansweredInteractions:i,sectionElements:r}}},{key:"createChapterOverview",value:function(t){var e=this,n=document.createElement("li");n.classList.add("h5p-interactive-book-summary-overview-section");var r=document.createElement("h4");r.onclick=function(){var n={h5pbookid:e.parent.contentId,chapter:"h5p-interactive-book-chapter-".concat(t.instance.subContentId),section:"top"};e.parent.trigger("newChapter",n)};var i=document.createElement("span");if(i.innerHTML=t.title,r.appendChild(i),this.behaviour.progressIndicators){var o=document.createElement("span"),a=this.parent.getChapterStatus(t);o.classList.add("icon-chapter-".concat(a.toLowerCase())),r.appendChild(o)}n.appendChild(r);var c=this.createSectionList(t.sections.filter((function(t){return t.isTask})),t.instance.subContentId),s=c.sectionElements;!1===c.hasUnansweredInteractions&&n.classList.add("h5p-interactive-book-summary-no-interactions");var u=document.createElement("div");u.classList.add("h5p-interactive-book-summary-chapter-subheader"),t.maxTasks?u.innerHTML=this.l10n.leftOutOfTotalCompleted.replace("@left",Math.max(t.maxTasks-t.tasksLeft,0)).replace("@max",t.maxTasks):u.innerHTML=this.l10n.noInteractions,n.appendChild(u);var A=document.createElement("ul");return s.length&&s.map((function(t){return A.appendChild(t)})),n.appendChild(A),n}},{key:"createFilterDropdown",value:function(){var t=this,e=function(e,o){var a=document.createElement("li");a.role="menuitem";var c=document.createElement("button");return c.textContent=e,c.type="button",c.onclick=function(e){t.setFilter(o),n.removeAttribute("active"),r.setAttribute("aria-expanded","false"),i.textContent=e.currentTarget.innerHTML},a.appendChild(c),a},n=document.createElement("div");n.classList.add("h5p-interactive-book-summary-dropdown");var r=document.createElement("button");r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded","false"),r.type="button",r.onclick=function(){n.hasAttribute("active")?(n.removeAttribute("active"),r.setAttribute("aria-expanded","false")):(n.setAttribute("active",""),r.setAttribute("aria-expanded","true"),r.focus())};var i=document.createElement("span");i.textContent=this.l10n.allInteractions,r.appendChild(i);var o=document.createElement("span");o.classList.add("h5p-interactive-book-summary-dropdown-icon"),o.classList.add("icon-expanded"),o.setAttribute("aria-hidden","true"),r.appendChild(o);var a=document.createElement("ul");a.role="menu",a.classList.add("h5p-interactive-book-summary-dropdown-menu");var c=e(this.l10n.allInteractions,this.filterActionAll),s=e(this.l10n.unansweredInteractions,this.filterActionUnanswered);return a.appendChild(c),a.appendChild(s),n.appendChild(r),n.appendChild(a),n}},{key:"addSummaryOverview",value:function(){var t=document.createElement("ul");t.classList.add("h5p-interactive-book-summary-list");var e=document.createElement("li");e.classList.add("h5p-interactive-book-summary-overview-header");var n=document.createElement("h3");n.innerHTML=this.l10n.summaryHeader,e.appendChild(n),e.appendChild(this.createFilterDropdown()),t.appendChild(e);var r=document.createElement("ol");r.classList.add("h5p-interactive-book-summary-overview-list");var i=!0,o=!1,a=void 0;try{for(var c,s=this.chapters[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var u=c.value;r.appendChild(this.createChapterOverview(u))}}catch(t){o=!0,a=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}var A=document.createElement("p");A.classList.add("h5p-interactive-book-summary-overview-list-empty"),A.classList.add("h5p-interactive-book-summary-top-section"),A.classList.add("h5p-interactive-book-summary-bottom-section"),A.innerHTML=this.l10n.noInteractions,r.appendChild(A),t.appendChild(r),this.wrapper.appendChild(t)}},{key:"addScoreBar",value:function(){var t=document.createElement("div");t.classList.add("h5p-interactive-book-summary-score-bar");var e=H5P.JoubelUI.createScoreBar(this.parent.getMaxScore());e.setScore(this.parent.getScore()),e.appendTo(t),this.wrapper.appendChild(t)}},{key:"noChapterInteractions",value:function(){var t=document.createElement("div");t.classList.add("h5p-interactive-book-summary-no-chapter-interactions");var e=document.createElement("p");e.innerHTML=this.l10n.noChapterInteractionBoldText;var n=document.createElement("p");n.classList.add("h5p-interactive-book-summary-no-initialized-chapters"),n.innerHTML=this.l10n.noChapterInteractionText,t.appendChild(e),t.appendChild(n),this.wrapper.appendChild(t)}},{key:"addSummaryPage",value:function(t){if(this.wrapper=document.createElement("div"),this.wrapper.classList.add("h5p-interactive-book-summary-page"),this.chapters.filter((function(t){return t.isInitialized})).length>0){if(this.parent.pageContent&&this.parent.chapters[this.parent.getChapterId(this.parent.pageContent.targetPage.chapter)].isSummary){for(var e in this.chapters)this.parent.pageContent.initializeChapter(e);this.addProgressIndicators(),this.addActionButtons(),this.addSummaryOverview(),this.addScoreBar()}}else this.noChapterInteractions();return Array.from(document.querySelectorAll(".h5p-interactive-book-summary-footer")).forEach((function(t){return t.remove()})),t.append(this.wrapper),t}}])&&w(n.prototype,r),i&&w(n,i),e}();function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){B(t,e,n[e])}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var U=function(t){function e(t,n,r,i,o){var a;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(a=O(this,Q(e).call(this))).parent=i,a.behaviour=t.behaviour,a.params=o,a.targetPage={},a.targetPage.redirectFromComponent=!1,a.columnNodes=[],a.shouldAutoplay=[],a.chapters=[],a.l10n=t.l10n,i.hasValidChapters()){var c=a.createColumns(t,n,r);a.preloadChapter(c)}return a.content=a.createPageContent(),a.container=document.createElement("div"),a.container.classList.add("h5p-interactive-book-main"),a.container.appendChild(a.content),a.parent.on("coverRemoved",(function(){a.handleChapterChange(a.parent.getActiveChapter())})),a}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,H5P.EventDispatcher),n=e,(r=[{key:"getChapters",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.chapters.filter((function(e){return!e.isSummary||e.isSummary&&!!t}))}},{key:"resetChapters",value:function(){this.behaviour.progressIndicators&&!this.behaviour.progressAuto&&this.columnNodes.forEach((function(t){Array.from(t.querySelectorAll(".h5p-interactive-book-status-progress-marker > input[type=checkbox]")).forEach((function(t){return t.checked=!1}))}))}},{key:"createPageContent",value:function(){var t=document.createElement("div");return t.classList.add("h5p-interactive-book-content"),this.columnNodes.forEach((function(e){t.appendChild(e)})),this.setChapterOrder(this.parent.getActiveChapter()),t}},{key:"setChapterOrder",value:function(t){t<0||t>this.columnNodes.length-1||this.columnNodes.forEach((function(e,n){e.classList.remove("h5p-interactive-book-previous"),e.classList.remove("h5p-interactive-book-current"),e.classList.remove("h5p-interactive-book-next"),n===t-1||n===t&&e.classList.add("h5p-interactive-book-current")}))}},{key:"createChapterReadCheckbox",value:function(){var t=this,e=document.createElement("input");e.setAttribute("type","checkbox"),e.onclick=function(e){t.parent.setChapterRead(void 0,e.target.checked)};var n=document.createElement("p");n.innerHTML=this.params.l10n.markAsFinished;var r=document.createElement("label");return r.classList.add("h5p-interactive-book-status-progress-marker"),r.appendChild(e),r.appendChild(n),r}},{key:"injectSectionId",value:function(t,e){for(var n=e.getElementsByClassName("h5p-column-content"),r=0;r<t.length;r++)n[r].id="h5p-interactive-book-section-".concat(t[r].instance.subContentId)}},{key:"preloadChapter",value:function(t){this.initializeChapter(t),this.initializeChapter(t+1)}},{key:"initializeChapter",value:function(t){if(!(t<0||t>this.chapters.length-1)){var e=this.chapters[t];if(e.isSummary){var n=this.columnNodes[t];return e.isInitialized&&(e.instance.setChapters(this.getChapters(!1)),n.innerHTML=""),e.instance.addSummaryPage(H5P.jQuery(n)),void(e.isInitialized=!0)}if(!e.isInitialized){var r=this.columnNodes[t];e.instance.attach(H5P.jQuery(r)),this.injectSectionId(e.sections,r),this.behaviour.progressIndicators&&!this.behaviour.progressAuto&&r.appendChild(this.createChapterReadCheckbox()),e.isInitialized=!0}}}},{key:"createColumns",value:function(t,e,n){var r=this;n=S({},n);var o=i.extractFragmentsFromURL(this.parent.validateFragments,this.parent.hashWindow),a=[];this.chapters=a;for(var c=function(i){var o=document.createElement("div");r.overrideParameters(i,t.chapters[i]);var c=j({},n,{metadata:j({},n.metadata)}),s=H5P.newRunnable(t.chapters[i],e,void 0,void 0,c);r.parent.bubbleUp(s,"resize",r.parent);var u={isInitialized:!1,instance:s,title:t.chapters[i].metadata.title,completed:!1,tasksLeft:0,isSummary:!1,sections:s.getInstances().map((function(e,n){return{content:t.chapters[i].params.content[n].content,instance:e,isTask:!1}}))};o.classList.add("h5p-interactive-book-chapter"),o.id="h5p-interactive-book-chapter-".concat(s.subContentId),u.sections.forEach((function(t){H5P.Column.isTask(t.instance)&&(t.isTask=!0,r.behaviour.progressIndicators&&(t.taskDone=!1,u.tasksLeft+=1))})),u.maxTasks=u.tasksLeft,a.push(u),r.columnNodes.push(o)},s=0;s<t.chapters.length;s++)c(s);if(this.parent.hasSummary(a)){var u=document.createElement("div"),A=new T(j({},t),this.parent,this.getChapters(!1));this.parent.bubbleUp(A,"resize",this.parent);var l={isInitialized:!1,instance:A,title:this.l10n.summaryHeader,isSummary:!0,sections:[]};u.classList.add("h5p-interactive-book-chapter"),u.id="h5p-interactive-book-chapter-summary",l.maxTasks=l.tasksLeft,a.push(l),this.columnNodes.push(u)}var p=0;if(o.chapter&&o.h5pbookid==this.parent.contentId){var h=this.findChapterIndex(o.chapter);p=h,this.parent.setActiveChapter(h);var f=o.headerNumber;o.section&&setTimeout((function(){r.redirectSection(o.section,f),r.parent.hasCover()&&r.parent.cover.removeCover()}),1e3)}return p}},{key:"redirectSection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("top"===t)this.parent.trigger("scrollToTop");else{var n=document.getElementById(t);if(n){if(null!==e){var r=n.querySelectorAll("h2, h3");r[e]&&(n=r[e])}var i=document.createElement("div");i.setAttribute("tabindex","-1"),n.parentNode.insertBefore(i,n),i.focus(),i.addEventListener("blur",(function(){i.parentNode.removeChild(i)})),this.targetPage.redirectFromComponent=!1,setTimeout((function(){n.scrollIntoView(!0)}),100)}}}},{key:"findChapterIndex",value:function(t){var e=-1;return this.columnNodes.forEach((function(n,r){-1===e&&n.id===t&&(e=r)})),e}},{key:"changeChapter",value:function(t,e){var n=this;if(!this.columnNodes[this.parent.getActiveChapter()].classList.contains("h5p-interactive-book-animate")){this.targetPage=e;var r=this.parent.getActiveChapter(),i=this.parent.getChapterId(this.targetPage.chapter),o=r!==i;if(t||this.parent.updateChapterProgress(r,o),this.preloadChapter(i),i<this.columnNodes.length){var a=this.columnNodes[r],c=this.columnNodes[i];if(o&&!t){this.parent.setActiveChapter(i);var s=r<i?"next":"previous";c.classList.add("h5p-interactive-book-".concat(s)),c.classList.add("h5p-interactive-book-animate"),a.classList.add("h5p-interactive-book-animate"),setTimeout((function(){"previous"===s?a.classList.add("h5p-interactive-book-next"):(a.classList.remove("h5p-interactive-book-current"),a.classList.add("h5p-interactive-book-previous")),c.classList.remove("h5p-interactive-book-".concat(s))}),1),setTimeout((function(){a.classList.remove("h5p-interactive-book-next"),a.classList.remove("h5p-interactive-book-previous"),a.classList.remove("h5p-interactive-book-current"),c.classList.add("h5p-interactive-book-current"),c.classList.remove("h5p-interactive-book-animate"),a.classList.remove("h5p-interactive-book-animate"),n.redirectSection(n.targetPage.section,n.targetPage.headerNumber),n.parent.trigger("resize")}),250),this.handleChapterChange(i,r)}else this.parent.cover&&!this.parent.cover.hidden?this.parent.on("coverRemoved",(function(){n.redirectSection(n.targetPage.section,n.targetPage.headerNumber)})):this.redirectSection(this.targetPage.section,this.targetPage.headerNumber);this.parent.sideBar.redirectHandler(i)}}}},{key:"updateFooter",value:function(){if(0!==this.chapters.length){var t=this.parent.getActiveChapter(),e=this.columnNodes[t],n=this.parent.shouldFooterBeHidden(e.clientHeight),r=this.parent.statusBarFooter.wrapper.parentNode;n?r!==this.content&&this.content.appendChild(this.parent.statusBarFooter.wrapper):r!==this.parent.$wrapper&&this.parent.$wrapper.append(this.parent.statusBarFooter.wrapper)}}},{key:"handleChapterChange",value:function(t,e){var n;if(void 0!==e)for(n=0;n<this.chapters[e].sections.length;n++)this.pauseMedia(this.chapters[e].sections[n].instance);if(this.shouldAutoplay[t])for(n=0;n<this.shouldAutoplay[t].length;n++){var r=this.shouldAutoplay[t][n];void 0!==this.chapters[t].sections[r]&&this.chapters[t].sections[r].instance.play()}}},{key:"overrideParameters",value:function(t,e){for(var n=this.parent.getActiveChapter(),r=0;r<e.params.content.length;r++)this.hasAutoplay(e.params.content[r].content.params,t!==n||this.parent.hasCover())&&(void 0===this.shouldAutoplay[t]?this.shouldAutoplay[t]=[r]:this.shouldAutoplay[t].push(r))}},{key:"hasAutoplay",value:function(t,e){return t.autoplay?(e&&(t.autoplay=!1),!0):t.playback&&t.playback.autoplay?(e&&(t.playback.autoplay=!1),!0):t.media&&t.media.params&&t.media.params.playback&&t.media.params.playback.autoplay?(e&&(t.media.params.playback.autoplay=!1),!0):!!(t.media&&t.media.params&&t.media.params.autoplay)&&(e&&(t.media.params.autoplay=!1),!0)}},{key:"pauseMedia",value:function(t){try{void 0!==t.pause&&(t.pause instanceof Function||"function"==typeof t.pause)?t.pause():void 0!==t.video&&void 0!==t.video.pause&&(t.video.pause instanceof Function||"function"==typeof t.video.pause)?t.video.pause():void 0!==t.stop&&(t.stop instanceof Function||"function"==typeof t.stop)&&t.stop()}catch(t){H5P.error(t)}}},{key:"toggleNavigationMenu",value:function(){this.container.classList.toggle("h5p-interactive-book-navigation-open")}}])&&D(n.prototype,r),o&&D(n,o),e}();n(345);function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Y(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){R(t,e,n[e])}))}return t}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G(){return(G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function H(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J(t,e){return!e||"object"!==F(e)&&"function"!=typeof e?X(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function X(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var Z=function(t){function e(t,n){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};H(this,e);var a=X(X(r=J(this,_(e).call(this))));r.contentId=n,r.activeChapter=0,r.newHandler={},r.completed=!1,r.params=e.sanitizeConfig(t),r.l10n=r.params.l10n,r.params.behaviour=r.params.behaviour||{},r.mainWrapper=null,r.currentRatio=null,r.smallSurface="h5p-interactive-book-small",r.mediumSurface="h5p-interactive-book-medium",r.largeSurface="h5p-interactive-book-large",r.chapters=[],r.isSubmitButtonEnabled=!1,void 0!==o.isScoringEnabled||void 0!==o.isReportingEnabled?r.isSubmitButtonEnabled=o.isScoringEnabled||o.isReportingEnabled:void 0!==H5PIntegration.reportingIsEnabled&&(r.isSubmitButtonEnabled=H5PIntegration.reportingIsEnabled),r.params.behaviour.enableSolutionsButton=!1,r.params.behaviour.enableRetry=!1,r.getAnswerGiven=function(){return r.chapters.reduce((function(t,e){return"function"==typeof e.instance.getAnswerGiven?t&&e.instance.getAnswerGiven():t}),!0)},r.getScore=function(){return r.chapters.reduce((function(t,e){return"function"==typeof e.instance.getScore?t+e.instance.getScore():t}),0)},r.getMaxScore=function(){return r.chapters.reduce((function(t,e){return"function"==typeof e.instance.getMaxScore?t+e.instance.getMaxScore():t}),0)},r.showSolutions=function(){r.chapters.forEach((function(t){"function"==typeof t.instance.toggleReadSpeaker&&t.instance.toggleReadSpeaker(!0),"function"==typeof t.instance.showSolutions&&t.instance.showSolutions(),"function"==typeof t.instance.toggleReadSpeaker&&t.instance.toggleReadSpeaker(!1)}))},r.resetTask=function(){r.hasValidChapters()&&(r.chapters.forEach((function(t,e){t.isInitialized&&!t.isSummary&&("function"==typeof t.instance.resetTask&&t.instance.resetTask(),t.tasksLeft=t.maxTasks,t.sections.forEach((function(t){return t.taskDone=!1})),r.setChapterRead(e,!1))})),r.pageContent.resetChapters(),r.sideBar.resetIndicators(),r.trigger("newChapter",{h5pbookid:r.contentId,chapter:r.pageContent.columnNodes[0].id,section:"top"}),r.hasCover()&&r.displayCover(r.mainWrapper))},r.getXAPIData=function(){var t=r.createXAPIEventTemplate("answered");return r.addQuestionToXAPI(t),t.setScoredResult(r.getScore(),r.getMaxScore(),X(X(r)),!0,r.getScore()===r.getMaxScore()),{statement:t.data.statement,children:r.getXAPIDataFromChildren(r.chapters.map((function(t){return t.instance})))}},r.getXAPIDataFromChildren=function(t){return t.map((function(t){if("function"==typeof t.getXAPIData)return t.getXAPIData()})).filter((function(t){return!!t}))},r.addQuestionToXAPI=function(t){G(t.getVerifiedStatementValue(["object","definition"]),r.getxAPIDefinition())},r.getxAPIDefinition=function(){return{interactionType:"compound",type:"http://adlnet.gov/expapi/activities/cmi.interaction",description:{"en-US":""}}},r.getContext=function(){return r.cover&&!r.cover.hidden?{}:{type:"page",value:r.activeChapter+1}},r.hasCover=function(){return r.cover&&r.cover.container},r.hasSummary=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.chapters;return r.hasChaptersTasks(t)&&r.params.behaviour.displaySummary&&!0===r.params.behaviour.displaySummary},r.hasChaptersTasks=function(t){return t.filter((function(t){return t.sections.filter((function(t){return!0===t.isTask})).length>0})).length>0},r.hasValidChapters=function(){return r.params.chapters.length>0},r.getActiveChapter=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t?r.chapters[r.activeChapter]:r.activeChapter},r.setActiveChapter=function(t){t=parseInt(t),isNaN(t)||(r.activeChapter=t)},r.validateFragments=function(t){return void 0!==t.chapter&&String(t.h5pbookid)===String(a.contentId)},r.bubbleUp=function(t,e,n){t.on(e,(function(t){n.bubblingUpwards=!0,n.trigger(e,t),n.bubblingUpwards=!1}))},r.isMenuOpen=function(){return r.statusBarHeader.isMenuOpen()},r.isSmallSurface=function(){return r.mainWrapper&&r.mainWrapper.hasClass(r.smallSurface)},r.getRatio=function(){return r.mainWrapper.width()/parseFloat(r.mainWrapper.css("font-size"))},r.setWrapperClassFromRatio=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.getRatio();e!==r.currentRatio&&(r.breakpoints().forEach((function(t){t.shouldAdd(e)?r.mainWrapper.addClass(t.className):r.mainWrapper.removeClass(t.className)})),r.currentRatio=e)},r.resize=function(){if(r.pageContent&&r.hasValidChapters()&&r.mainWrapper){r.setWrapperClassFromRatio(r.mainWrapper);var t=r.getActiveChapter(),e=r.pageContent.columnNodes[t];null!==e.offsetParent&&(r.bubblingUpwards||r.pageContent.chapters[t].instance.trigger("resize"),r.pageContent.content.style.height==="".concat(e.offsetHeight,"px")||e.classList.contains("h5p-interactive-book-animate")||(r.pageContent.content.style.height="".concat(e.offsetHeight,"px"),r.pageContent.updateFooter(),setTimeout((function(){r.trigger("resize")}),10)))}},r.on("resize",r.resize,X(X(r))),r.on("toggleMenu",(function(){r.pageContent.toggleNavigationMenu(),r.statusBarHeader.menuToggleButton.setAttribute("aria-expanded",r.statusBarHeader.menuToggleButton.classList.toggle("h5p-interactive-book-status-menu-active")?"true":"false"),setTimeout((function(){r.trigger("resize")}),150)})),r.on("scrollToTop",(function(){if(!0===H5P.isFullscreen){var t=r.pageContent.container;t.scrollBy(0,-t.scrollHeight)}else r.statusBarHeader.wrapper.scrollIntoView(!0)})),r.on("newChapter",(function(t){if(!r.pageContent.columnNodes[r.getActiveChapter()].classList.contains("h5p-interactive-book-animate")){if(r.newHandler=t.data,t.data.newHash=i.createFragmentsString(r.newHandler),r.newHandler.redirectFromComponent=!0,r.getChapterId(t.data.chapter)===r.activeChapter)if(i.areFragmentsEqual(t.data,i.extractFragmentsFromURL(r.validateFragments,r.hashWindow),["h5pbookid","chapter","section","headerNumber"]))return void r.pageContent.changeChapter(!1,t.data);if(r.params.behaviour.progressAuto){var e=r.getChapterId(r.newHandler.chapter);r.isFinalChapterWithoutTask(e)&&r.setChapterRead(e)}H5P.trigger(X(X(r)),"changeHash",t.data),H5P.trigger(X(X(r)),"scrollToTop")}})),r.isCurrentChapterRead=function(){return r.isChapterRead(r.chapters[r.activeChapter],r.params.behaviour.progressAuto)},r.isChapterRead=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.params.behaviour.progressAuto;return t.isInitialized&&(t.completed||e&&0===t.tasksLeft)},r.isFinalChapterWithoutTask=function(t){return 0===r.chapters[t].maxTasks&&r.chapters.slice(0,t).concat(r.chapters.slice(t+1)).every((function(t){return 0===t.tasksLeft}))},r.setChapterRead=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.activeChapter,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];r.handleChapterCompletion(t,e),r.sideBar.updateChapterProgressIndicator(t,e?"DONE":r.hasChapterStartedTasks(r.chapters[t])?"STARTED":"BLANK")},r.hasChapterStartedTasks=function(t){return t.sections.filter((function(t){return t.taskDone})).length>0},r.getChapterStatus=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.params.behaviour.progressAuto,n="BLANK";return r.isChapterRead(t,e)?n="DONE":r.hasChapterStartedTasks(t)&&(n="STARTED"),n},r.updateChapterProgress=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r.params.behaviour.progressIndicators){var n,i=r.chapters[t];"DONE"===(n=i.maxTasks?r.getChapterStatus(i):r.isChapterRead(i)&&e?"DONE":"BLANK")&&r.handleChapterCompletion(t),r.sideBar.updateChapterProgressIndicator(t,n)}},r.getChapterId=function(t){return t=t.replace("h5p-interactive-book-chapter-",""),r.chapters.map((function(t){return t.instance.subContentId})).indexOf(t)},r.handleChapterCompletion=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=r.chapters[t];if(!0!==n.isSummary){if(!e)return n.completed=!1,r.completed=!1,void r.trigger("bookCompleted",{completed:r.completed});n.completed||(n.completed=!0,n.instance.triggerXAPIScored(n.instance.getScore(),n.instance.getMaxScore(),"completed")),!r.completed&&r.chapters.filter((function(t){return!t.isSummary})).every((function(t){return t.completed}))&&(r.completed=!0,r.trigger("bookCompleted",{completed:r.completed}))}},r.shouldFooterBeHidden=function(){return r.isFullscreen},r.getContainerWidth=function(){return r.pageContent&&r.pageContent.container?r.pageContent.container.offsetWidth:0},r.changeChapter=function(t){r.pageContent.changeChapter(t,r.newHandler),r.statusBarHeader.updateStatusBar(),r.statusBarFooter.updateStatusBar(),r.newHandler.redirectFromComponent=!1},r.breakpoints=function(){return[{className:r.smallSurface,shouldAdd:function(t){return t<43}},{className:r.mediumSurface,shouldAdd:function(t){return t>=43&&t<60}},{className:r.largeSurface,shouldAdd:function(t){return t>=60}}]},H5P.on(X(X(r)),"respondChangeHash",(function(){var t=i.extractFragmentsFromURL(a.validateFragments,r.hashWindow);t.h5pbookid&&String(t.h5pbookid)===String(a.contentId)&&r.redirectChapter(t)})),H5P.on(X(X(r)),"changeHash",(function(t){String(t.data.h5pbookid)===String(r.contentId)&&(r.hashWindow.location.hash=t.data.newHash)})),H5P.externalDispatcher.on("xAPI",(function(t){var e=["answered","completed","interacted","attempted"].indexOf(t.getVerb())>-1,n=a.chapters.length;a!==this&&e&&n&&a.setSectionStatusByID(this.subContentId||this.contentData.subContentId,a.activeChapter)})),r.redirectChapter=function(t){r.newHandler.redirectFromComponent||(t.h5pbookid&&String(t.h5pbookid)===String(a.contentId)?a.newHandler=t:a.newHandler={chapter:"h5p-interactive-book-chapter-".concat(a.chapters[0].instance.subContentId),h5pbookid:a.h5pbookid}),a.changeChapter(!1)},r.setSectionStatusByID=function(t,e){r.chapters[e].sections.forEach((function(n,i){var o=n.instance;o.subContentId!==t||n.taskDone||(n.taskDone=!o.getAnswerGiven||o.getAnswerGiven(),r.sideBar.setSectionMarker(e,i),n.taskDone&&(r.chapters[e].tasksLeft-=1),r.updateChapterProgress(e))}))},r.addHashListener=function(t){t.addEventListener("hashchange",(function(t){H5P.trigger(X(X(r)),"respondChangeHash",t)})),r.hashWindow=t};try{r.addHashListener(top)}catch(t){if(!(t instanceof DOMException))throw t;r.addHashListener(window)}r.displayCover=function(t){r.hideAllElements(!0),t.append(r.cover.container),t.addClass("covered")},r.attach=function(t){r.mainWrapper=t,t.addClass("h5p-interactive-book h5p-scrollable-fullscreen"),r.isEdge18orEarlier()&&t.addClass("edge-18"),r.setWrapperClassFromRatio(r.mainWrapper),r.cover&&r.displayCover(t),t.append(r.statusBarHeader.wrapper);var e=r.pageContent.container.firstChild;e&&r.pageContent.container.insertBefore(r.sideBar.container,e),t.append(r.pageContent.container),t.append(r.statusBarFooter.wrapper),r.$wrapper=t,r.params.behaviour.defaultTableOfContents&&!r.isSmallSurface()&&r.trigger("toggleMenu"),r.pageContent.updateFooter()},r.isEdge18orEarlier=function(){var t=window.navigator.userAgent,e=t.indexOf("Edge/");if(e<0)return!1;var n=t.substring(e+5,t.indexOf(".",e));return parseInt(n)<=18},r.hideAllElements=function(t){var e=[this.statusBarHeader.wrapper,this.statusBarFooter.wrapper,this.pageContent.container];t?e.forEach((function(t){t.classList.add("h5p-content-hidden"),t.classList.add("h5p-interactive-book-cover-present")})):e.forEach((function(t){t.classList.remove("h5p-content-hidden"),t.classList.remove("h5p-interactive-book-cover-present")}))},r.params.showCoverPage&&(r.cover=new k(r.params.bookCover,o.metadata.title,r.l10n.read,n,X(X(r))));var c=P({},o,{parent:X(X(r))});return r.pageContent=new U(r.params,n,c,X(X(r)),{l10n:{markAsFinished:r.l10n.markAsFinished},behaviour:r.params.behaviour}),r.chapters=r.pageContent.getChapters(),r.sideBar=new A(r.params,n,o.metadata.title,X(X(r))),r.statusBarHeader=new v(n,r.chapters.length,X(X(r)),{l10n:r.l10n,a11y:r.params.a11y,behaviour:r.params.behaviour,displayFullScreenButton:!0},"h5p-interactive-book-status-header"),r.statusBarFooter=new v(n,r.chapters.length,X(X(r)),{l10n:r.l10n,a11y:r.params.a11y,behaviour:r.params.behaviour},"h5p-interactive-book-status-footer"),r.hasCover()?(r.hideAllElements(!0),r.on("coverRemoved",(function(){r.hideAllElements(!1),r.trigger("resize"),r.setActivityStarted(),r.statusBarHeader.progressBar.progress.focus()}))):r.setActivityStarted(),r.hasValidChapters()&&(r.statusBarHeader.updateStatusBar(),r.statusBarFooter.updateStatusBar()),r}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,H5P.EventDispatcher),n=e,o=[{key:"sanitizeConfig",value:function(t){var e=t.read,n=void 0===e?"Read":e,r=t.displayTOC,i=void 0===r?"Display &#039;Table of contents&#039;":r,o=t.hideTOC,a=void 0===o?"Hide &#039;Table of contents&#039;":o,c=t.nextPage,s=void 0===c?"Next page":c,u=t.previousPage,A=void 0===u?"Previous page":u,l=t.chapterCompleted,p=void 0===l?"Page completed!":l,h=t.partCompleted,f=void 0===h?"@pages of @total completed":h,d=t.incompleteChapter,g=void 0===d?"Incomplete page":d,v=t.navigateToTop,m=void 0===v?"Navigate to the top":v,y=t.markAsFinished,b=void 0===y?"I have finished this page":y,M=t.fullscreen,I=void 0===M?"Fullscreen":M,k=t.exitFullscreen,E=void 0===k?"Exit fullscreen":k,w=t.bookProgressSubtext,N=void 0===w?"@count of @total pages":w,L=t.interactionsProgressSubtext,x=void 0===L?"@count of @total interactions":L,T=t.submitReport,C=void 0===T?"Submit Report":T,j=t.restartLabel,B=void 0===j?"Restart":j,S=t.summaryHeader,D=void 0===S?"Summary":S,O=t.allInteractions,Q=void 0===O?"All interactions":O,z=t.unansweredInteractions,U=void 0===z?"Unanswered interactions":z,F=t.scoreText,P=void 0===F?"@score / @maxscore":F,R=t.leftOutOfTotalCompleted,G=void 0===R?"@left of @max interactinos completed":R,H=t.noInteractions,W=void 0===H?"No interactions":H,J=t.score,_=void 0===J?"Score":J,V=t.summaryAndSubmit,X=void 0===V?"Summary & submit":V,Z=t.noChapterInteractionBoldText,K=void 0===Z?"You have not interacted with any pages.":Z,q=t.noChapterInteractionText,$=void 0===q?"You have to interact with at least one page before you can see the summary.":q,tt=t.yourAnswersAreSubmittedForReview,et=void 0===tt?"Your answers are submitted for review!":tt,nt=t.bookProgress,rt=void 0===nt?"Book progress":nt,it=t.interactionsProgress,ot=void 0===it?"Interactions progress":it,at=t.totalScoreLabel,ct=void 0===at?"Total score":at,st=Y(t,["read","displayTOC","hideTOC","nextPage","previousPage","chapterCompleted","partCompleted","incompleteChapter","navigateToTop","markAsFinished","fullscreen","exitFullscreen","bookProgressSubtext","interactionsProgressSubtext","submitReport","restartLabel","summaryHeader","allInteractions","unansweredInteractions","scoreText","leftOutOfTotalCompleted","noInteractions","score","summaryAndSubmit","noChapterInteractionBoldText","noChapterInteractionText","yourAnswersAreSubmittedForReview","bookProgress","interactionsProgress","totalScoreLabel"]);return st.chapters=st.chapters.map((function(t){return t.params.content=t.params.content.filter((function(t){return t.content})),t})).filter((function(t){return t.params.content&&t.params.content.length>0})),st.behaviour.displaySummary=void 0===st.behaviour.displaySummary||st.behaviour.displaySummary,st.l10n={read:n,displayTOC:i,hideTOC:a,nextPage:s,previousPage:A,chapterCompleted:p,partCompleted:f,incompleteChapter:g,navigateToTop:m,markAsFinished:b,fullscreen:I,exitFullscreen:E,bookProgressSubtext:N,interactionsProgressSubtext:x,submitReport:C,restartLabel:B,summaryHeader:D,allInteractions:Q,unansweredInteractions:U,scoreText:P,leftOutOfTotalCompleted:G,noInteractions:W,score:_,summaryAndSubmit:X,noChapterInteractionBoldText:K,noChapterInteractionText:$,yourAnswersAreSubmittedForReview:et,bookProgress:rt,interactionsProgress:ot,totalScoreLabel:ct},st}}],(r=null)&&W(n.prototype,r),o&&W(n,o),e}();H5P=H5P||{},H5P.InteractiveBook=Z}]);;!function(e){var r={};function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(a,n,function(r){return e[r]}.bind(null,n));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r,t){},function(e,r,t){"use strict";t.r(r);t(0);function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=H5P.jQuery,s=function(){function e(r,t,n,s){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return a(this,e),this.card=r,this.params=t||{},this.id=n,this.contentId=s,this.callbacks=o,this.$cardWrapper=i("<div>",{class:"h5p-dialogcards-cardwrap",role:"group",tabindex:"-1"}),"repetition"!==this.params.mode&&this.$cardWrapper.attr("aria-labelledby","h5p-dialogcards-progress-"+H5P.Dialogcards.idCounter),this.$cardHolder=i("<div>",{class:"h5p-dialogcards-cardholder"}).appendTo(this.$cardWrapper),this.createCardContent(r).appendTo(this.$cardHolder),this}var r,t,s;return r=e,(t=[{key:"createCardContent",value:function(e){var r=i("<div>",{class:"h5p-dialogcards-card-content"});this.createCardImage(e).appendTo(r);var t=i("<div>",{class:"h5p-dialogcards-card-text-wrapper"}).appendTo(r),a=i("<div>",{class:"h5p-dialogcards-card-text-inner"}).appendTo(t),n=i("<div>",{class:"h5p-dialogcards-card-text-inner-content"}).appendTo(a);this.createCardAudio(e).appendTo(n);var s=i("<div>",{class:"h5p-dialogcards-card-text"}).appendTo(n);return this.$cardTextArea=i("<div>",{class:"h5p-dialogcards-card-text-area",tabindex:"-1",html:e.text}).appendTo(s),e.text&&e.text.length||s.addClass("hide"),this.createCardFooter().appendTo(t),r}},{key:"createCardImage",value:function(e){this.$image;var r=i("<div>",{class:"h5p-dialogcards-image-wrapper"});return void 0!==e.image?(this.image=e.image,this.$image=i('<img class="h5p-dialogcards-image" src="'+H5P.getPath(e.image.path,this.contentId)+'"/>'),e.imageAltText&&this.$image.attr("alt",e.imageAltText)):this.$image=i('<div class="h5p-dialogcards-image"></div>'),this.$image.appendTo(r),r}},{key:"createCardAudio",value:function(e){if(this.audio,this.$audioWrapper=i("<div>",{class:"h5p-dialogcards-audio-wrapper"}),void 0!==e.audio){var r={files:e.audio,audioNotSupported:this.params.audioNotSupported};this.audio=new H5P.Audio(r,this.contentId),this.audio.attach(this.$audioWrapper),this.audio.audio&&this.audio.audio.preload&&(this.audio.audio.preload="none")}else this.$audioWrapper.addClass("hide");return this.$audioWrapper}},{key:"createCardFooter",value:function(){var e=i("<div>",{class:"h5p-dialogcards-card-footer"}),r="h5p-dialogcards-button-hidden",t="-1";return"repetition"===this.params.mode&&(r="",this.params.behaviour.quickProgression&&(r="h5p-dialogcards-quick-progression",t="0")),this.$buttonTurn=H5P.JoubelUI.createButton({class:"h5p-dialogcards-turn",html:this.params.answer}).appendTo(e),this.$buttonShowSummary=H5P.JoubelUI.createButton({class:"h5p-dialogcards-show-summary h5p-dialogcards-button-gone",html:this.params.showSummary}).appendTo(e),this.$buttonIncorrect=H5P.JoubelUI.createButton({class:"h5p-dialogcards-answer-button",html:this.params.incorrectAnswer}).addClass("incorrect").addClass(r).attr("tabindex",t).appendTo(e),this.$buttonCorrect=H5P.JoubelUI.createButton({class:"h5p-dialogcards-answer-button",html:this.params.correctAnswer}).addClass("correct").addClass(r).attr("tabindex",t).appendTo(e),e}},{key:"createButtonListeners",value:function(){var e=this;this.$buttonIncorrect.unbind("click").click((function(r){r.target.classList.contains("h5p-dialogcards-quick-progression")&&e.callbacks.onNextCard({cardId:e.id,result:!1})})),this.$buttonTurn.unbind("click").click((function(){e.turnCard()})),this.$buttonCorrect.unbind("click").click((function(r){r.target.classList.contains("h5p-dialogcards-quick-progression")&&e.callbacks.onNextCard({cardId:e.id,result:!0})}))}},{key:"showSummaryButton",value:function(e){this.getDOM().find(".h5p-dialogcards-answer-button").addClass("h5p-dialogcards-button-hidden").attr("tabindex","-1"),this.$buttonTurn.addClass("h5p-dialogcards-button-gone"),this.$buttonShowSummary.click((function(){return e()})).removeClass("h5p-dialogcards-button-gone").focus()}},{key:"hideSummaryButton",value:function(){"normal"!==this.params.mode&&(this.getDOM().find(".h5p-dialogcards-answer-button").removeClass("h5p-dialogcards-button-hidden").attr("tabindex","0"),this.$buttonTurn.removeClass("h5p-dialogcards-button-gone"),this.$buttonShowSummary.addClass("h5p-dialogcards-button-gone"))}},{key:"turnCard",value:function(){var e=this,r=this.getDOM(),t=r.find(".h5p-dialogcards-card-content"),a=r.find(".h5p-dialogcards-cardholder").addClass("h5p-dialogcards-collapse");t.find(".joubel-tip-container").remove();var n=t.hasClass("h5p-dialogcards-turned");t.toggleClass("h5p-dialogcards-turned",!n),setTimeout((function(){if(a.removeClass("h5p-dialogcards-collapse"),e.changeText(n?e.getText():e.getAnswer()),n?a.find(".h5p-audio-inner").removeClass("hide"):e.removeAudio(a),"repetition"===e.params.mode&&!e.params.behaviour.quickProgression){var i=r.find(".h5p-dialogcards-answer-button");!1===i.hasClass("h5p-dialogcards-quick-progression")&&i.addClass("h5p-dialogcards-quick-progression").attr("tabindex",0)}setTimeout((function(){e.addTipToCard(t,n?"front":"back"),"function"==typeof e.callbacks.onCardTurned&&e.callbacks.onCardTurned(n)}),200),e.resizeOverflowingText(),e.$cardTextArea.focus()}),200)}},{key:"changeText",value:function(e){this.$cardTextArea.html(e),this.$cardTextArea.toggleClass("hide",!e||!e.length)}},{key:"setProgressText",value:function(e,r){if("repetition"===this.params.mode){var t=this.params.progressText.replace("@card",e.toString()).replace("@total",r.toString());this.$cardWrapper.attr("aria-label",t)}}},{key:"resizeOverflowingText",value:function(){if(this.params.behaviour.scaleTextNotCard){var e=this.getDOM().find(".h5p-dialogcards-card-text"),r=e.children();this.resizeTextToFitContainer(e,r)}}},{key:"resizeTextToFitContainer",value:function(r,t){t.css("font-size","");var a=r.get(0).getBoundingClientRect().height,n=t.get(0).getBoundingClientRect().height,i=parseFloat(r.css("font-size")),s=parseFloat(t.css("font-size")),o=this.getDOM().closest(".h5p-container"),d=parseFloat(o.css("font-size"));if(n>a)for(var c=!0;c;){if((s-=e.SCALEINTERVAL)<e.MINSCALE){c=!1;break}t.css("font-size",s/i+"em"),(n=t.get(0).getBoundingClientRect().height)<=a&&(c=!1)}else for(var l=!0;l;){if((s+=e.SCALEINTERVAL)>d){l=!1;break}t.css("font-size",s/i+"em"),(n=t.get(0).getBoundingClientRect().height)>=a&&(l=!1,s-=e.SCALEINTERVAL,t.css("font-size",s/i+"em"))}}},{key:"addTipToCard",value:function(e,r,t){"back"!==r&&(r="front"),void 0===t&&(t=this.id),e.find(".joubel-tip-container").remove();var a=this.card.tips;if(void 0!==a&&void 0!==a[r]){var n=a[r].trim();n.length&&e.find(".h5p-dialogcards-card-text-wrapper .h5p-dialogcards-card-text-inner").after(H5P.JoubelUI.createTip(n,{tipLabel:this.params.tipButtonLabel}))}}},{key:"setCardFocus",value:function(e){if(!0===e)this.$cardTextArea.focus();else{var r=this.getDOM();r.one("transitionend",(function(){r.focus()}))}}},{key:"stopAudio",value:function(){var e=this;this.audio&&this.audio.audio&&(this.audio.audio.duration>0&&(this.audio.audio.currentTime=this.audio.audio.duration),this.audio.audio.load&&setTimeout((function(){e.audio.audio.load()}),100))}},{key:"removeAudio",value:function(){this.stopAudio(),this.getDOM().find(".h5p-audio-inner").addClass("hide")}},{key:"getDOM",value:function(){return this.$cardWrapper}},{key:"getText",value:function(){return this.card.text}},{key:"getAnswer",value:function(){return this.card.answer}},{key:"getImage",value:function(){return this.$image}},{key:"getImageSize",value:function(){return this.image?{width:this.image.width,height:this.image.height}:this.image}},{key:"getAudio",value:function(){return this.$audioWrapper}},{key:"reset",value:function(){var e=this.getDOM();e.removeClass("h5p-dialogcards-previous"),e.removeClass("h5p-dialogcards-current"),this.changeText(this.getText());var r=e.find(".h5p-dialogcards-card-content");r.removeClass("h5p-dialogcards-turned"),this.addTipToCard(r,"front",this.id),this.params.behaviour.quickProgression||e.find(".h5p-dialogcards-answer-button").removeClass("h5p-dialogcards-quick-progression"),this.hideSummaryButton()}}])&&n(r.prototype,t),s&&n(r,s),e}();s.SCALEINTERVAL=.2,s.MAXSCALE=16,s.MINSCALE=4;var o=s;function d(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var c=function(){function e(r,t,a){var n=this;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=r,this.contentId=t,this.callbacks=a,this.cards=[],this.params.dialogs.forEach((function(e,r){e.id=r,n.cards.push(r)})),this}var r,t,a;return r=e,(t=[{key:"getCard",value:function(e){if(!(e<0||e>this.cards.length))return"number"==typeof this.cards[e]&&this.loadCard(e),this.cards[e]}},{key:"getCardIds",value:function(){return this.cards.map((function(e,r){return r}))}},{key:"loadCard",value:function(e){e<0||e>this.cards.length||"number"==typeof this.cards[e]&&(this.cards[e]=new o(this.params.dialogs[e],this.params,e,this.contentId,this.callbacks))}}])&&d(r.prototype,t),a&&d(r,a),e}();function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function h(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function p(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var g=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return h(this,e),this.cards=r.filter((function(e,t){return r.indexOf(e)>=t})),this}var r,t,a;return r=e,(t=[{key:"getCards",value:function(){return this.cards}},{key:"peek",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r=Math.max(0,r),"top"===e&&(e=0),"bottom"===e&&(e=this.cards.length-r),e<0||e>this.cards.length-1?[]:this.cards.slice(e,e+r)}},{key:"add",value:function(e){var r=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top";"number"==typeof e&&(e=[e]),e.forEach((function(a){var n;-1===r.cards.indexOf(a)&&("top"===t?t=0:"bottom"===t?t=r.cards.length:"random"===t&&(t=Math.floor(Math.random()*r.cards.length)),(n=r.cards).splice.apply(n,[t,0].concat(l(e))))}))}},{key:"push",value:function(e){this.add(e,"top")}},{key:"pull",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top";return e=Math.max(1,Math.min(e,this.cards.length)),"top"===r&&(r=0),"bottom"===r&&(r=-e),r=Math.max(0,Math.min(r,this.cards.length-1)),this.cards.splice(r,e)}},{key:"remove",value:function(e){var r=this;"number"==typeof e&&(e=[e]),e.forEach((function(e){var t=r.cards.indexOf(e);t>-1&&r.cards.splice(t,1)}))}},{key:"shuffle",value:function(){for(var e=this.cards.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),t=[this.cards[r],this.cards[e]];this.cards[e]=t[0],this.cards[r]=t[1]}return this.cards}},{key:"contains",value:function(e){return-1!==this.cards.indexOf(e)}},{key:"length",value:function(){return this.cards.length}}])&&p(r.prototype,t),a&&p(r,a),e}();function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return m(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function v(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var b=function(){function e(r,t,a){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=r,this.cardPool=new c(r,t,a),this.reset(r.cardPiles),this}var r,t,a;return r=e,(t=[{key:"createSelection",value:function(){var e=[];switch(this.params.mode){case"repetition":e=this.createSelectionRepetition();break;default:e=this.cardPool.getCardIds()}return e}},{key:"createPiles",value:function(e){if(e)this.cardPiles=e.map((function(e){return new g(e.cards)}));else{this.cardPiles=[];var r=this.cardPool.getCardIds();switch(this.params.mode){case"repetition":for(var t=0;t<this.params.behaviour.maxProficiency;t++)0===t?this.cardPiles.push(new g(r)):this.cardPiles.push(new g);break;case"normal":this.cardPiles.push(new g(r))}}}},{key:"updatePiles",value:function(e){var r=this;return e.forEach((function(e){var t=r.find(e.cardId);if(-1!==t){var a=!0===e.result?t+1:0;a=Math.max(0,Math.min(a,r.cardPiles.length-1)),r.cardPiles[t].remove(e.cardId),r.cardPiles[a].add(e.cardId,"bottom")}})),this.getPileSizes()}},{key:"createSelectionRepetition",value:function(){for(var e=[],r=null,t=0;t<this.cardPiles.length-1;t++){var a,n=this.cardPiles[t].length();if(null!==r||0!==n){null===r&&(r=t);var i=Math.ceil(1*n/(1+t-r)),s=this.cardPiles[t].peek(0,i);e=(a=e).concat.apply(a,f(s))}}return e=this.shuffle(e)}},{key:"shuffle",value:function(e){for(var r=e.slice(),t=r.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[r[a],r[t]];r[t]=n[0],r[a]=n[1]}return r}},{key:"find",value:function(e){var r=-1;return this.cardPiles.forEach((function(t,a){if(-1!==r)return r;t.contains(e)&&(r=a)})),r}},{key:"reset",value:function(e){this.createPiles(e)}},{key:"getCard",value:function(e){return this.cardPool.getCard(e)}},{key:"getSize",value:function(){return this.cardPool.getCardIds().length}},{key:"getPiles",value:function(){return this.cardPiles}},{key:"getPileSizes",value:function(){return this.cardPiles.map((function(e){return e.length()}))}}])&&v(r.prototype,t),a&&v(r,a),e}();function y(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var C=function(){function e(r,t){var a=this;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=r,this.callbacks=t,this.currentCallback=t.nextRound,this.fields=[],this.container=document.createElement("div"),this.container.classList.add("h5p-dialogcards-summary-screen");var n=this.createContainerDOM(r.summary);this.fields.round=n.getElementsByClassName("h5p-dialogcards-summary-subheader")[0],this.fields["h5p-dialogcards-round-cards-right"]=this.addTableRow(n,{category:this.params.summaryCardsRight,symbol:"h5p-dialogcards-check"}),this.fields["h5p-dialogcards-round-cards-wrong"]=this.addTableRow(n,{category:this.params.summaryCardsWrong,symbol:"h5p-dialogcards-times"}),this.fields["h5p-dialogcards-round-cards-not-shown"]=this.addTableRow(n,{category:this.params.summaryCardsNotShown});var i=this.createContainerDOM(r.summaryOverallScore);this.fields["h5p-dialogcards-overall-cards-completed"]=this.addTableRow(i,{category:this.params.summaryCardsCompleted,symbol:"h5p-dialogcards-check"}),this.fields["h5p-dialogcards-overall-completed-rounds"]=this.addTableRow(i,{category:this.params.summaryCompletedRounds,symbol:""});var s=document.createElement("div");s.classList.add("h5p-dialogcards-summary-message"),this.fields.message=s;var o=H5P.JoubelUI.createButton({class:"h5p-dialogcards-buttonNextRound",title:this.params.nextRound.replace("@round",2),html:this.params.nextRound.replace("@round",2)}).click(this.currentCallback).get(0);this.fields.button=o;var d=H5P.JoubelUI.createButton({class:"h5p-dialogcards-button-restart",title:this.params.startOver,html:this.params.startOver}).get(0),c=this.createConfirmationDialog({l10n:this.params.confirmStartingOver,instance:this},(function(){setTimeout((function(){a.callbacks.retry()}),100)}));d.addEventListener("click",(function(e){c.show(e.target.offsetTop)})),this.fields.buttonStartOver=d;var l=document.createElement("div");return l.classList.add("h5p-dialogcards-summary-footer"),l.appendChild(d),l.appendChild(o),this.container.appendChild(n),this.container.appendChild(i),this.container.appendChild(s),this.container.appendChild(l),this.hide(),this}var r,t,a;return r=e,(t=[{key:"getDOM",value:function(){return this.container}},{key:"createContainerDOM",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=document.createElement("div");t.classList.add("h5p-dialogcards-summary-container");var a=document.createElement("div");a.classList.add("h5p-dialogcards-summary-header"),a.innerHTML=e,t.appendChild(a);var n=document.createElement("div");n.classList.add("h5p-dialogcards-summary-subheader"),n.innerHTML=r,t.appendChild(n);var i=document.createElement("table");return i.classList.add("h5p-dialogcards-summary-table"),t.appendChild(i),t}},{key:"addTableRow",value:function(e,r){var t=e.getElementsByClassName("h5p-dialogcards-summary-table")[0],a=document.createElement("tr"),n=document.createElement("td");n.classList.add("h5p-dialogcards-summary-table-row-category"),n.innerHTML=r.category,a.appendChild(n);var i=document.createElement("td");i.classList.add("h5p-dialogcards-summary-table-row-symbol"),void 0!==r.symbol&&""!==r.symbol&&i.classList.add(r.symbol),a.appendChild(i);var s=document.createElement("td");return s.classList.add("h5p-dialogcards-summary-table-row-score"),a.appendChild(s),t.appendChild(a),s}},{key:"update",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.done,a=void 0!==t&&t,n=r.round,i=void 0===n?void 0:n,s=r.message,o=void 0===s?void 0:s,d=r.results,c=void 0===d?[]:d;!0===a?(this.fields.buttonStartOver.classList.add("h5p-dialogcards-button-gone"),this.params.behaviour.enableRetry?(this.fields.button.classList.remove("h5p-dialogcards-button-next-round"),this.fields.button.classList.add("h5p-dialogcards-button-restart"),this.fields.button.innerHTML=this.params.retry,this.fields.button.title=this.params.retry,this.currentCallback=this.callbacks.retry):this.fields.button.classList.add("h5p-dialogcards-button-gone")):(this.fields.buttonStartOver.classList.remove("h5p-dialogcards-button-gone"),this.fields.button.classList.add("h5p-dialogcards-button-next-round"),this.fields.button.classList.remove("h5p-dialogcards-button-restart"),this.fields.button.innerHTML=this.params.nextRound,this.fields.button.title=this.params.nextRound,this.currentCallback=this.callbacks.nextRound),H5P.jQuery(this.fields.button).unbind("click").click(this.currentCallback),this.fields.round.innerHTML=this.params.round.replace("@round",i),a||void 0===i||(this.fields.button.innerHTML=this.params.nextRound.replace("@round",i+1),this.fields.button.title=this.params.nextRound.replace("@round",i+1)),a&&void 0!==o&&""!==o?(this.fields.message.classList.remove("h5p-dialogcards-gone"),this.fields.message.innerHTML=o):this.fields.message.classList.add("h5p-dialogcards-gone"),c.forEach((function(r){var t=void 0!==r.score.value?r.score.value:"";void 0!==r.score.max&&(t="".concat(t,'&nbsp;<span class="h5p-dialogcards-summary-table-row-score-divider">/</span>&nbsp;').concat(r.score.max)),e.fields[r.field].innerHTML=t}))}},{key:"show",value:function(){this.container.classList.remove("h5p-dialogcards-gone"),this.fields.button.focus()}},{key:"hide",value:function(){this.container.classList.add("h5p-dialogcards-gone")}},{key:"createConfirmationDialog",value:function(e,r){e=e||{};var t=new H5P.ConfirmationDialog({instance:e.instance,headerText:e.l10n.header,dialogText:e.l10n.body,cancelText:e.l10n.cancelLabel,confirmText:e.l10n.confirmLabel});return t.on("confirmed",(function(){r()})),t.appendTo(this.getContainer()),t}},{key:"getContainer",value:function(){var e=H5P.jQuery('[data-content-id="'+self.contentId+'"].h5p-content'),r=e.parents(".h5p-container");return(0!==r.length?r.last():0!==e.length?e:H5P.jQuery(document.body)).get(0)}}])&&y(r.prototype,t),a&&y(r,a),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,r){return(S=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function x(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=I(e);if(r){var n=I(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return T(this,t)}}function T(e,r){return!r||"object"!==w(r)&&"function"!=typeof r?k(e):r}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=H5P.jQuery,P=H5P.JoubelUI,A=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&S(e,r)}(t,H5P.EventDispatcher);var r=x(t);function t(e,a,n){var i;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),t.idCounter++,(i=r.call(this)).contentId=i.id=a,i.previousState=n.previousState||{},i.contentData=n||{},i.params=$.extend({title:"",mode:"normal",description:"Sit in pairs and make up sentences where you include the expressions below.<br/>Example: I should have said yes, HOWEVER I kept my mouth shut.",next:"Next",prev:"Previous",retry:"Retry",answer:"Turn",correctAnswer:"I got it right!",incorrectAnswer:"I got it wrong",round:"Round @round",cardsLeft:"Cards left: @number",nextRound:"Proceed to round @round",startOver:"Start over",showSummary:"Next",summary:"Summary",summaryCardsRight:"Cards you got right:",summaryCardsWrong:"Cards you got wrong:",summaryCardsNotShown:"Cards in pool not shown:",summaryOverallScore:"Overall Score",summaryCardsCompleted:"Cards you have completed learning:",summaryCompletedRounds:"Completed rounds:",summaryAllDone:"Well done! You got all @cards cards correct @max times in a row each!",progressText:"Card @card of @total",cardFrontLabel:"Card front",cardBackLabel:"Card back",tipButtonLabel:"Show tip",audioNotSupported:"Your browser does not support this audio",confirmStartingOver:{header:"Start over?",body:"All progress will be lost. Are you sure you want to start over?",cancelLabel:"Cancel",confirmLabel:"Start over"},dialogs:[{text:"Horse",answer:"Hest"},{text:"Cow",answer:"Ku"}],behaviour:{enableRetry:!0,disableBackwardsNavigation:!1,scaleTextNotCard:!1,randomCards:!1,maxProficiency:5,quickProgression:!1}},e),i.cards=[],i.currentCardId=0,i.round=0,i.results=i.previousState.results||[],i.attach=function(e){i.$inner=e.addClass("h5p-dialogcards"),i.params.behaviour.scaleTextNotCard&&e.addClass("h5p-text-scaling");var r={mode:i.params.mode,dialogs:i.params.dialogs,audioNotSupported:i.params.audioNotSupported,answer:i.params.answer,showSummary:i.params.showSummary,incorrectAnswer:i.params.incorrectAnswer,correctAnswer:i.params.correctAnswer,progressText:i.params.progressText,tipButtonLabel:i.params.tipButtonLabel,behaviour:{scaleTextNotCard:i.params.behaviour.scaleTextNotCard,maxProficiency:i.params.behaviour.maxProficiency,quickProgression:i.params.behaviour.quickProgression},cardPiles:i.previousState.cardPiles};i.cardManager=new b(r,i.id,{onCardTurned:i.handleCardTurned,onNextCard:i.nextCard}),i.createDOM(0===i.round),void 0!==i.previousState.currentCardId&&(i.gotoCard(i.previousState.currentCardId),"repetition"===i.params.mode&&i.results.length===i.cardIds.length&&i.showSummary(!0)),i.updateNavigation(),i.trigger("resize")},i.createDOM=function(e){if(i.cardIds=e&&i.previousState.cardIds?i.previousState.cardIds:i.cardManager.createSelection(),i.cardPoolSize=i.cardPoolSize||i.cardManager.getSize(),!0===e){var r=$("<div>"+i.params.title+"</div>").text().trim();i.$header=$((r?'<div class="h5p-dialogcards-title"><div class="h5p-dialogcards-title-inner">'+i.params.title+"</div></div>":"")+'<div class="h5p-dialogcards-description">'+i.params.description+"</div>"),i.summaryScreen=new C(i.params,{nextRound:i.nextRound,retry:i.restartRepetition})}!0===e?i.$cardwrapperSet=i.initCards(i.cardIds):(i.$cardwrapperSet.detach(),i.$cardwrapperSet=i.initCards(i.cardIds),i.$cardSideAnnouncer.before(i.$cardwrapperSet)),i.$cardwrapperSet.prepend(i.summaryScreen.getDOM()),!0===e&&(i.$cardSideAnnouncer=$("<div>",{html:i.params.cardFrontLabel,class:"h5p-dialogcards-card-side-announcer","aria-live":"polite","aria-hidden":"true"}),i.$footer=i.createFooter(),i.$mainContent=$("<div>").append(i.$header).append(i.$cardwrapperSet).append(i.$cardSideAnnouncer).append(i.$footer).appendTo(i.$inner),i.on("reset",(function(){this.reset()})),i.on("resize",i.resize),i.round=void 0!==i.previousState.round?i.previousState.round:1)},i.createFooter=function(){var e=$("<nav>",{class:"h5p-dialogcards-footer",role:"navigation"});return"normal"===i.params.mode?(i.$prev=P.createButton({class:"h5p-dialogcards-footer-button h5p-dialogcards-prev truncated","aria-label":i.params.prev,title:i.params.prev}).click((function(){i.prevCard()})).appendTo(e),i.$next=P.createButton({class:"h5p-dialogcards-footer-button h5p-dialogcards-next truncated","aria-label":i.params.next,title:i.params.next}).click((function(){i.nextCard()})).appendTo(e),i.$retry=P.createButton({class:"h5p-dialogcards-footer-button h5p-dialogcards-retry h5p-dialogcards-disabled",title:i.params.retry,html:i.params.retry}).click((function(){i.trigger("reset")})).appendTo(e),i.$progress=$("<div>",{id:"h5p-dialogcards-progress-"+t.idCounter,class:"h5p-dialogcards-progress","aria-live":"assertive"}).appendTo(e)):(i.$round=$("<div>",{class:"h5p-dialogcards-round"}).appendTo(e),i.$progress=$("<div>",{class:"h5p-dialogcards-cards-left","aria-live":"assertive"}).appendTo(e)),e},i.updateImageSize=function(){var e=0,r=i.cards[i.currentCardId].getDOM().find(".h5p-dialogcards-card-content");if(i.params.dialogs.forEach((function(t){if(t.image){var a=t.image.height/t.image.width*r.get(0).getBoundingClientRect().width;a>e&&(e=a)}})),e>0){var t=e/parseFloat(i.$inner.css("font-size"));t>15&&(t=15),i.cards.forEach((function(e){e.getImage().parent().css("height",t+"em")}))}},i.initCards=function(e){i.cards=[],i.currentCardId=0,i.params.behaviour.randomCards&&(e=H5P.shuffleArray(e));for(var r=$("<div>",{class:"h5p-dialogcards-cardwrap-set"}),t=0;t<e.length&&!(t>=2);t++){var a=i.getCard(e[t]);a.setProgressText(t+1,e.length),i.cards.push(a);var n=a.getDOM();t===i.currentCardId&&(n.addClass("h5p-dialogcards-current"),i.$current=n),a.addTipToCard(n.find(".h5p-dialogcards-card-content"),"front",t),r.append(n)}return r},i.handleCardTurned=function(e){i.$cardSideAnnouncer.html(e?i.params.cardFrontLabel:i.params.cardBackLabel),i.params.behaviour.enableRetry&&i.currentCardId+1===i.cardIds.length&&i.$retry&&(i.$retry.removeClass("h5p-dialogcards-disabled"),i.truncateRetryButton())},i.updateNavigation=function(){if("normal"===i.params.mode)i.getCurrentSelectionIndex()<i.cardIds.length-1?(i.$next.removeClass("h5p-dialogcards-disabled"),i.$retry.addClass("h5p-dialogcards-disabled")):i.$next.addClass("h5p-dialogcards-disabled"),i.currentCardId>0&&!i.params.behaviour.disableBackwardsNavigation?i.$prev.removeClass("h5p-dialogcards-disabled"):i.$prev.addClass("h5p-dialogcards-disabled"),i.$progress.text(i.params.progressText.replace("@card",i.getCurrentSelectionIndex()+1).replace("@total",i.cardIds.length)),i.cards[i.findCardPosition(i.cards[i.currentCardId].id)].resizeOverflowingText();else{i.$round.text(i.params.round.replace("@round",i.round));var e=i.getCurrentSelectionIndex();i.$progress.text(i.params.cardsLeft.replace("@number",i.cardIds.length-e))}i.trigger("resize")},i.showSummary=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=e?i.cardManager.getPileSizes():i.cardManager.updatePiles(i.results),t=i.results.filter((function(e){return!0===e.result})).length,a=i.results.length-t,n=i.cardPoolSize-t-a,s=r.slice(-1)[0],o=s===i.cardPoolSize,d={round:i.round,results:[{field:"h5p-dialogcards-round-cards-right",score:{value:t,max:a+t}},{field:"h5p-dialogcards-round-cards-wrong",score:{value:a,max:a+t}},{field:"h5p-dialogcards-round-cards-not-shown",score:{value:n}},{field:"h5p-dialogcards-overall-cards-completed",score:{value:s,max:i.cardPoolSize}},{field:"h5p-dialogcards-overall-completed-rounds",score:{value:i.round}}]};o&&(d.done=!0,d.message=i.params.summaryAllDone.replace("@cards",i.cardPoolSize).replace("@max",i.params.behaviour.maxProficiency-1)),i.summaryScreen.update(d),i.summaryScreen.show(),i.hideCards(),i.trigger("resize")},i.showCards=function(){i.$cardwrapperSet.find(".h5p-dialogcards-cardwrap").removeClass("h5p-dialogcards-gone"),i.$footer.removeClass("h5p-dialogcards-gone"),i.cardsShown=!0},i.hideCards=function(){i.$cardwrapperSet.find(".h5p-dialogcards-cardwrap").addClass("h5p-dialogcards-gone"),i.$footer.addClass("h5p-dialogcards-gone"),i.cardsShown=!1},i.nextCard=function(e){void 0!==e&&i.results.push(e),i.cards[i.currentCardId].stopAudio(),i.cardIds.length-i.getCurrentSelectionIndex()!=1?i.gotoCard(i.getCurrentSelectionIndex()+1):"repetition"===i.params.mode&&(i.$progress.text(i.params.cardsLeft.replace("@number",0)),i.cards[i.currentCardId].showSummaryButton(i.showSummary))},i.getCard=function(e){var r=i.cardManager.getCard(e);return r.createButtonListeners(),r},i.findCardPosition=function(e){var r;return i.cards.forEach((function(t,a){r||t.id!==e||(r=a)})),r},i.insertCardToDOM=function(e,r){var t=e.getDOM();void 0===r?t.appendTo(i.$cardwrapperSet):0===r?i.$cardwrapperSet.prepend(t):i.$cardwrapperSet.children().eq(r).after(t),e.addTipToCard(t.find(".h5p-dialogcards-card-content"),"front",r)},i.gotoCard=function(e){if(!(e<0||e>=i.cardIds.length)){var r=i.cards[i.currentCardId];r.stopAudio(),r.getDOM().removeClass("h5p-dialogcards-current");var t=[];e>0&&t.push(e-1),t.push(e),e+1<i.cardIds.length&&t.push(e+1),t.forEach((function(e){if(void 0===i.findCardPosition(i.cardIds[e])){var r=i.getCard(i.cardIds[e]);r.setProgressText(e+1,i.cardIds.length);var t=Math.min(e+1,i.cardIds.length-1),a=i.findCardPosition(i.cardIds[t])||i.cards.length;i.cards.splice(a,0,r),i.insertCardToDOM(r,a)}})),i.resize(),e=i.findCardPosition(i.cardIds[e]),i.cards.forEach((function(r,t){t<e?r.getDOM().addClass("h5p-dialogcards-previous"):(r.getDOM().removeClass("h5p-dialogcards-previous"),t===e&&r.getDOM().addClass("h5p-dialogcards-current"))})),i.currentCardId=e,i.updateNavigation(),i.cards[i.currentCardId].setCardFocus()}},i.prevCard=function(){i.gotoCard(i.getCurrentSelectionIndex()-1)},i.showAllAudio=function(){i.$cardwrapperSet.find(".h5p-audio-inner").removeClass("hide")},i.restartRepetition=function(){i.cardManager.reset(),i.round=0,i.nextRound()},i.nextRound=function(){i.round++,i.summaryScreen.hide(),i.showCards(),i.reset(),i.createDOM(),i.updateNavigation(),i.cards[i.currentCardId].setCardFocus(!0),i.trigger("resize")},i.reset=function(){i.results=[],i.cards[i.currentCardId].stopAudio(i.$current.index()),i.cards.forEach((function(e){e.reset()})),i.currentCardId=0,"normal"===i.params.mode&&i.cards[i.currentCardId].getDOM().addClass("h5p-dialogcards-current"),i.updateNavigation(),i.$retry&&i.$retry.addClass("h5p-dialogcards-disabled"),i.showAllAudio(),i.cards[i.currentCardId].resizeOverflowingText(),i.cards[i.currentCardId].setCardFocus()},i.resize=function(){var e=0;i.updateImageSize(),i.params.behaviour.scaleTextNotCard||!1===i.cardsShown||i.determineCardSizes(),i.$cardwrapperSet.css("height","auto"),i.$cardwrapperSet.children(":not(.h5p-dialogcards-gone)").each((function(){var r=$(this).css("height","initial").outerHeight();if($(this).css("height","inherit"),e=r>e?r:e,!$(this).next(".h5p-dialogcards-cardwrap").length){var t=$(this).find(".h5p-dialogcards-cardholder").css("height","initial").outerHeight();e=t>e?t:e,$(this).find(".h5p-dialogcards-cardholder").css("height","inherit")}}));var r=e/parseFloat(i.$cardwrapperSet.css("font-size"));i.$cardwrapperSet.css("height",r+"em"),i.scaleToFitHeight(),i.truncateRetryButton(),i.cards[i.currentCardId].resizeOverflowingText()},i.determineCardSizes=function(){var e=k(i);void 0===i.cardSizeDetermined&&(i.cardSizeDetermined=[]),i.$cardwrapperSet.children(":visible").each((function(r){var t=e.cards[r].id;if(-1===e.cardSizeDetermined.indexOf(t)){e.cardSizeDetermined.push(t);var a=$(".h5p-dialogcards-card-content",this),n=$(".h5p-dialogcards-card-text-inner-content",a),i=n[0].getBoundingClientRect().height,s=e.cards[r];s.changeText(s.getAnswer());var o=n[0].getBoundingClientRect().height,d=i>o?i:o,c=parseFloat(n.parent().parent().css("minHeight"));d<c&&(d=c),d/=parseFloat(a.css("fontSize")),n.parent().css("height",d+"em"),s.changeText(s.getText())}}))},i.scaleToFitHeight=function(){if(i.$cardwrapperSet&&i.$cardwrapperSet.is(":visible")&&i.params.behaviour.scaleTextNotCard)if(i.$inner.parents(".h5p-course-presentation").length){var e=i.$inner.parent();i.$inner.parents(".h5p-popup-container").length&&(e=i.$inner.parents(".h5p-popup-container"));var r=e.get(0).getBoundingClientRect().height,a=function(){var e=0;return i.$inner.children().each((function(){var r=$(this);e+=this.getBoundingClientRect().height+parseFloat(r.css("margin-top"))+parseFloat(r.css("margin-bottom"))})),e},n=a(),s=parseFloat(i.$inner.parent().css("font-size")),o=parseFloat(i.$inner.css("font-size"));if(r<n)for(;r<n&&!((o-=t.SCALEINTERVAL)<t.MINSCALE);)i.$inner.css("font-size",o/s+"em"),n=a();else for(var d=!0;d;){if((o+=t.SCALEINTERVAL)>t.MAXSCALE){d=!1;break}var c=o/s;i.$inner.css("font-size",c+"em"),r<=(n=a())&&(d=!1,c=(o-t.SCALEINTERVAL)/s,i.$inner.css("font-size",c+"em"))}}else i.cards[i.currentCardId].resizeOverflowingText()},i.truncateRetryButton=function(){if(i.$retry){i.$retry.removeClass("truncated"),i.$retry.html(i.params.retry);(i.$retry.get(0).getBoundingClientRect().width+parseFloat(i.$retry.css("margin-left"))+parseFloat(i.$retry.css("margin-right")))/i.$retry.parent().get(0).getBoundingClientRect().width>.3&&(i.$retry.addClass("truncated"),i.$retry.html(""))}},i.getCurrentSelectionIndex=function(){return i.cardIds.indexOf(i.cards[i.currentCardId].id)},i.getTitle=function(){return H5P.createTitle(i.contentData&&i.contentData.metadata&&i.contentData.metadata.title?i.contentData.metadata.title:"Dialog Cards")},i.getCurrentState=function(){if(i.cardManager)return{cardPiles:i.cardManager.getPiles(),cardIds:i.cardIds,round:i.round,currentCardId:i.getCurrentSelectionIndex(),results:i.results}},i}return t}();A.idCounter=0,A.SCALEINTERVAL=.2,A.MAXSCALE=16,A.MINSCALE=4;var O=A;H5P.Dialogcards=O}]);;		(function(xopen, fetch, dataurls) {

			switch(location.protocol.split(':')[0]) {
				case 'http':
				case 'https':
					return;
			};

			const url2data	= function(oldurl) {
					switch(oldurl.split(':')[0]) {
						case 'blob':
							console.log('blob', oldurl);
						case 'data':
							return oldurl;
					}
					let urltoks	 = oldurl.replace(H5PIntegration.url, '.').split('/');
					if(urltoks[0] == '.') {
						urltoks.shift();
						const url	= urltoks.join('/');
						if(typeof dataurls[url]!=='undefined') {
							if(dataurls[url][0]=='application/json') {
								return 'data:application/json;text,' + dataurls[url][1];
							}
							return 'data:' + dataurls[url].join(';base64,');
						}
					}
					console.error('url not found:', oldurl);
					return "data:;text,";
			};
			window.fetch = function() {
				arguments[0]	= url2data(arguments[0]);
				return fetch.apply(this, arguments);
			};
			XMLHttpRequest.prototype.open = function() {
				arguments[1]	= url2data(arguments[1]);
				return xopen.apply(this, arguments);
			};
		})(XMLHttpRequest.prototype.open, window.fetch, {"libraries\/H5P.AdvancedText-1.1\/library.json":["application\/json","{\"title\":\"Text\",\"description\":\"A simple library that displays text with all kinds of styling.\",\"majorVersion\":1,\"minorVersion\":1,\"patchVersion\":14,\"runnable\":0,\"machineName\":\"H5P.AdvancedText\",\"author\":\"Joubel\",\"preloadedJs\":[{\"path\":\"text.js\"}],\"preloadedCss\":[{\"path\":\"text.css\"}],\"metadataSettings\":{\"disable\":0,\"disableExtraTitleField\":1}}"],"libraries\/H5P.Video-1.5\/library.json":["application\/json","{\"machineName\":\"H5P.Video\",\"title\":\"Video\",\"contentType\":\"Media\",\"description\":\"Plays video from multple sources.\",\"license\":\"MIT\",\"author\":\"Joubel\",\"majorVersion\":1,\"minorVersion\":5,\"patchVersion\":22,\"runnable\":0,\"coreApi\":{\"majorVersion\":1,\"minorVersion\":19},\"preloadedJs\":[{\"path\":\"scripts\\\/youtube.js\"},{\"path\":\"scripts\\\/panopto.js\"},{\"path\":\"scripts\\\/html5.js\"},{\"path\":\"scripts\\\/flash.js\"},{\"path\":\"scripts\\\/video.js\"}],\"preloadedCss\":[{\"path\":\"styles\\\/video.css\"}],\"preloadedDependencies\":[{\"machineName\":\"flowplayer\",\"majorVersion\":1,\"minorVersion\":0}]}"],"libraries\/flowplayer-1.0\/library.json":["application\/json","{\"title\":\"Flowplayer\",\"contentType\":\"Media\",\"description\":\"Provides you with flowplayer for all your Flash needs.\",\"majorVersion\":1,\"minorVersion\":0,\"patchVersion\":5,\"runnable\":0,\"machineName\":\"flowplayer\",\"preloadedJs\":[{\"path\":\"scripts\\\/flowplayer-3.2.12.min.js\"}]}"],"libraries\/H5P.Accordion-1.0\/library.json":["application\/json","{\"title\":\"Accordion\",\"majorVersion\":1,\"minorVersion\":0,\"patchVersion\":33,\"embedTypes\":[\"iframe\"],\"runnable\":1,\"fullscreen\":0,\"machineName\":\"H5P.Accordion\",\"author\":\"Joubel\",\"coreApi\":{\"majorVersion\":1,\"minorVersion\":5},\"license\":\"MIT\",\"preloadedJs\":[{\"path\":\"h5p-accordion.js\"}],\"preloadedDependencies\":[{\"machineName\":\"FontAwesome\",\"majorVersion\":4,\"minorVersion\":5}],\"preloadedCss\":[{\"path\":\"h5p-accordion.css\"}]}"],"libraries\/FontAwesome-4.5\/library.json":["application\/json","{\"title\":\"Font Awesome\",\"contentType\":\"Font\",\"majorVersion\":4,\"minorVersion\":5,\"patchVersion\":4,\"runnable\":0,\"machineName\":\"FontAwesome\",\"license\":\"MIT\",\"author\":\"Dave Gandy\",\"preloadedCss\":[{\"path\":\"h5p-font-awesome.min.css\"}]}"],"libraries\/H5P.Image-1.1\/library.json":["application\/json","{\"title\":\"Image\",\"contentType\":\"Media\",\"description\":\"Simple library that displays an image.\",\"majorVersion\":1,\"minorVersion\":1,\"patchVersion\":22,\"runnable\":0,\"machineName\":\"H5P.Image\",\"author\":\"Joubel\",\"coreApi\":{\"majorVersion\":1,\"minorVersion\":19},\"preloadedJs\":[{\"path\":\"image.js\"}],\"preloadedCss\":[{\"path\":\"image.css\"}],\"metadataSettings\":{\"disable\":0,\"disableExtraTitleField\":1},\"editorDependencies\":[{\"machineName\":\"H5PEditor.ShowWhen\",\"majorVersion\":1,\"minorVersion\":0}]}"],"libraries\/H5P.ImageSlide-1.1\/library.json":["application\/json","{\"title\":\"Image Slide\",\"description\":\"Image Slide, helper library for images used in image sliders and similar. Can render images with sizing options\",\"majorVersion\":1,\"minorVersion\":1,\"patchVersion\":4,\"runnable\":0,\"author\":\"Falcon\",\"license\":\"MIT\",\"machineName\":\"H5P.ImageSlide\",\"preloadedJs\":[{\"path\":\"image-slide.js\"}],\"preloadedCss\":[{\"path\":\"image-slide.css\"}]}"],"libraries\/H5P.ImageSlider-1.1\/library.json":["application\/json","{\"title\":\"Image Slider\",\"description\":\"Image Slider\",\"majorVersion\":1,\"minorVersion\":1,\"patchVersion\":7,\"runnable\":1,\"author\":\"Falcon\",\"license\":\"MIT\",\"fullscreen\":1,\"embedTypes\":[\"iframe\"],\"machineName\":\"H5P.ImageSlider\",\"preloadedJs\":[{\"path\":\"image-slider.js\"}],\"preloadedCss\":[{\"path\":\"image-slider.css\"}],\"editorDependencies\":[{\"machineName\":\"H5PEditor.ShowWhen\",\"majorVersion\":1,\"minorVersion\":0}]}"],"libraries\/H5P.Column-1.13\/library.json":["application\/json","{\"machineName\":\"H5P.Column\",\"title\":\"Column\",\"description\":\"Content holder displaying content in a column.\",\"contentType\":\"instructional\",\"license\":\"MIT\",\"author\":\"Joubel\",\"majorVersion\":1,\"minorVersion\":13,\"patchVersion\":1,\"runnable\":1,\"fullscreen\":0,\"embedTypes\":[\"iframe\"],\"coreApi\":{\"majorVersion\":1,\"minorVersion\":19},\"preloadedJs\":[{\"path\":\"scripts\\\/h5p-column.js\"}],\"preloadedCss\":[{\"path\":\"styles\\\/h5p-column.css\"}]}"],"libraries\/H5P.Link-1.3\/library.json":["application\/json","{\"title\":\"Link\",\"description\":\"A library for display a single link.\",\"majorVersion\":1,\"minorVersion\":3,\"patchVersion\":18,\"runnable\":0,\"metadataSettings\":{\"disable\":1,\"disableExtraTitleField\":1},\"machineName\":\"H5P.Link\",\"author\":\"Joubel\",\"preloadedJs\":[{\"path\":\"link.js\"}],\"editorDependencies\":[{\"machineName\":\"H5PEditor.UrlField\",\"majorVersion\":1,\"minorVersion\":2}]}"],"libraries\/H5P.Dialogcards-1.8\/library.json":["application\/json","{\"title\":\"Dialog Cards\",\"description\":\"Makes it possible to create learning tasks for your site visitors.\",\"majorVersion\":1,\"minorVersion\":8,\"patchVersion\":8,\"runnable\":1,\"author\":\"Joubel\",\"license\":\"MIT\",\"machineName\":\"H5P.Dialogcards\",\"coreApi\":{\"majorVersion\":1,\"minorVersion\":15},\"embedTypes\":[\"iframe\"],\"preloadedCss\":[{\"path\":\"dist\\\/h5p-dialogcards.css\"}],\"preloadedJs\":[{\"path\":\"dist\\\/h5p-dialogcards.js\"}],\"preloadedDependencies\":[{\"machineName\":\"FontAwesome\",\"majorVersion\":4,\"minorVersion\":5},{\"machineName\":\"H5P.JoubelUI\",\"majorVersion\":1,\"minorVersion\":3},{\"machineName\":\"H5P.Audio\",\"majorVersion\":1,\"minorVersion\":4}],\"editorDependencies\":[{\"machineName\":\"H5PEditor.VerticalTabs\",\"majorVersion\":1,\"minorVersion\":3},{\"machineName\":\"H5PEditor.ShowWhen\",\"majorVersion\":1,\"minorVersion\":0}]}"],"libraries\/H5P.JoubelUI-1.3\/library.json":["application\/json","{\"title\":\"Joubel UI\",\"contentType\":\"Utility\",\"description\":\"UI utility library\",\"majorVersion\":1,\"minorVersion\":3,\"patchVersion\":19,\"runnable\":0,\"coreApi\":{\"majorVersion\":1,\"minorVersion\":3},\"machineName\":\"H5P.JoubelUI\",\"author\":\"Joubel\",\"preloadedJs\":[{\"path\":\"js\\\/joubel-help-dialog.js\"},{\"path\":\"js\\\/joubel-message-dialog.js\"},{\"path\":\"js\\\/joubel-progress-circle.js\"},{\"path\":\"js\\\/joubel-simple-rounded-button.js\"},{\"path\":\"js\\\/joubel-speech-bubble.js\"},{\"path\":\"js\\\/joubel-throbber.js\"},{\"path\":\"js\\\/joubel-tip.js\"},{\"path\":\"js\\\/joubel-slider.js\"},{\"path\":\"js\\\/joubel-score-bar.js\"},{\"path\":\"js\\\/joubel-progressbar.js\"},{\"path\":\"js\\\/joubel-ui.js\"}],\"preloadedCss\":[{\"path\":\"css\\\/joubel-help-dialog.css\"},{\"path\":\"css\\\/joubel-message-dialog.css\"},{\"path\":\"css\\\/joubel-progress-circle.css\"},{\"path\":\"css\\\/joubel-simple-rounded-button.css\"},{\"path\":\"css\\\/joubel-speech-bubble.css\"},{\"path\":\"css\\\/joubel-tip.css\"},{\"path\":\"css\\\/joubel-slider.css\"},{\"path\":\"css\\\/joubel-score-bar.css\"},{\"path\":\"css\\\/joubel-progressbar.css\"},{\"path\":\"css\\\/joubel-ui.css\"},{\"path\":\"css\\\/joubel-icon.css\"}],\"preloadedDependencies\":[{\"machineName\":\"FontAwesome\",\"majorVersion\":4,\"minorVersion\":5},{\"machineName\":\"H5P.Transition\",\"majorVersion\":1,\"minorVersion\":0},{\"machineName\":\"H5P.FontIcons\",\"majorVersion\":1,\"minorVersion\":0}]}"],"libraries\/H5P.Transition-1.0\/library.json":["application\/json","{\"machineName\":\"H5P.Transition\",\"title\":\"Transition\",\"description\":\"Contains helper function relevant for transitioning\",\"license\":\"MIT\",\"author\":\"Joubel\",\"majorVersion\":1,\"minorVersion\":0,\"patchVersion\":4,\"runnable\":0,\"preloadedJs\":[{\"path\":\"transition.js\"}]}"],"libraries\/H5P.FontIcons-1.0\/library.json":["application\/json","{\"title\":\"H5P.FontIcons\",\"majorVersion\":1,\"minorVersion\":0,\"patchVersion\":6,\"runnable\":0,\"machineName\":\"H5P.FontIcons\",\"author\":\"Joubel\",\"preloadedCss\":[{\"path\":\"styles\\\/h5p-font-icons.css\"}]}"],"libraries\/H5P.Audio-1.4\/library.json":["application\/json","{\"title\":\"Audio\",\"contentType\":\"Media\",\"description\":\"Simple library that displays an audio player.\",\"majorVersion\":1,\"minorVersion\":4,\"patchVersion\":7,\"runnable\":1,\"machineName\":\"H5P.Audio\",\"embedTypes\":[\"iframe\"],\"author\":\"Joubel\",\"coreApi\":{\"majorVersion\":1,\"minorVersion\":19},\"preloadedJs\":[{\"path\":\"scripts\\\/audio.js\"}],\"preloadedCss\":[{\"path\":\"styles\\\/audio.css\"}],\"preloadedDependencies\":[{\"machineName\":\"flowplayer\",\"majorVersion\":1,\"minorVersion\":0},{\"machineName\":\"FontAwesome\",\"majorVersion\":4,\"minorVersion\":5}],\"editorDependencies\":[{\"machineName\":\"H5PEditor.ShowWhen\",\"majorVersion\":1,\"minorVersion\":0}]}"],"libraries\/H5P.InteractiveBook-1.3\/library.json":["application\/json","{\"title\":\"Interactive Book\",\"description\":\"An interactive book which displays content in pages and sections\",\"majorVersion\":1,\"minorVersion\":3,\"patchVersion\":5,\"runnable\":1,\"fullscreen\":1,\"author\":\"Joubel\",\"license\":\"MIT\",\"machineName\":\"H5P.InteractiveBook\",\"embedTypes\":[\"iframe\"],\"preloadedJs\":[{\"path\":\"dist\\\/h5p-interactive-book.js\"}],\"preloadedDependencies\":[{\"machineName\":\"FontAwesome\",\"majorVersion\":4,\"minorVersion\":5},{\"machineName\":\"H5P.Column\",\"majorVersion\":1,\"minorVersion\":13},{\"machineName\":\"H5P.JoubelUI\",\"majorVersion\":1,\"minorVersion\":3}],\"editorDependencies\":[{\"machineName\":\"H5PEditor.VerticalTabs\",\"majorVersion\":1,\"minorVersion\":3},{\"machineName\":\"H5PEditor.ShowWhen\",\"majorVersion\":1,\"minorVersion\":0}]}"]});		H5PIntegration	= (function(x){
			let url	= window.location.href.split('/');
			url.pop();
			x.url	= url.join('/');
			return x;
		})({"baseUrl":"","url":"","siteUrl":"","l10n":{"H5P":{"fullscreen":"Vollbild","disableFullscreen":"Kein Vollbild","download":"Download","copyrights":"Nutzungsrechte","embed":"Einbetten","size":"Size","showAdvanced":"Show advanced","hideAdvanced":"Hide advanced","advancedHelp":"Include this script on your website if you want dynamic sizing of the embedded content:","copyrightInformation":"Nutzungsrechte","close":"Schlie\u00dfen","title":"Titel","author":"Autor","year":"Jahr","source":"Quelle","license":"Lizenz","thumbnail":"Thumbnail","noCopyrights":"Keine Copyright-Informationen vorhanden","reuse":"Wiederverwenden","reuseContent":"Verwende Inhalt","reuseDescription":"Verwende Inhalt.","downloadDescription":"Lade den Inhalt als H5P-Datei herunter.","copyrightsDescription":"Zeige Urheberinformationen an.","embedDescription":"Zeige den Code f\u00fcr die Einbettung an.","h5pDescription":"Visit H5P.org to check out more cool content.","contentChanged":"Dieser Inhalt hat sich seit Ihrer letzten Nutzung ver\u00e4ndert.","startingOver":"Sie beginnen von vorne.","by":"von","showMore":"Zeige mehr","showLess":"Zeige weniger","subLevel":"Sublevel","confirmDialogHeader":"Best\u00e4tige Aktion","confirmDialogBody":"Please confirm that you wish to proceed. This action is not reversible.","cancelLabel":"Abbrechen","confirmLabel":"Best\u00e4tigen","licenseU":"Undisclosed","licenseCCBY":"Attribution","licenseCCBYSA":"Attribution-ShareAlike","licenseCCBYND":"Attribution-NoDerivs","licenseCCBYNC":"Attribution-NonCommercial","licenseCCBYNCSA":"Attribution-NonCommercial-ShareAlike","licenseCCBYNCND":"Attribution-NonCommercial-NoDerivs","licenseCC40":"4.0 International","licenseCC30":"3.0 Unported","licenseCC25":"2.5 Generic","licenseCC20":"2.0 Generic","licenseCC10":"1.0 Generic","licenseGPL":"General Public License","licenseV3":"Version 3","licenseV2":"Version 2","licenseV1":"Version 1","licensePD":"Public Domain","licenseCC010":"CC0 1.0 Universal (CC0 1.0) Public Domain Dedication","licensePDM":"Public Domain Mark","licenseC":"Copyright","contentType":"Inhaltstyp","licenseExtras":"License Extras","changes":"Changelog","contentCopied":"Inhalt wurde ins Clipboard kopiert","connectionLost":"Connection lost. Results will be stored and sent when you regain connection.","connectionReestablished":"Connection reestablished.","resubmitScores":"Attempting to submit stored results.","offlineDialogHeader":"Your connection to the server was lost","offlineDialogBody":"We were unable to send information about your completion of this task. Please check your internet connection.","offlineDialogRetryMessage":"Versuche es wieder in :num....","offlineDialogRetryButtonLabel":"Jetzt nochmal probieren","offlineSuccessfulSubmit":"Erfolgreich Ergebnisse gesendet."}},"hubIsEnabled":false,"reportingIsEnabled":false,"libraryConfig":null,"crossorigin":null,"crossoriginCacheBuster":null,"pluginCacheBuster":"","libraryUrl":".\/libraries\/h5pcore\/js","contents":{"cid-Module_1":{"displayOptions":{"copy":false,"copyright":false,"embed":false,"export":false,"frame":false,"icon":false},"embedCode":"","exportUrl":false,"fullScreen":false,"contentUserData":[],"metadata":{"title":"Module_1","license":null},"library":"H5P.InteractiveBook 1.3","jsonContent":"{\"showCoverPage\":true,\"bookCover\":{\"coverDescription\":\"<p>Staying up-to-date with professional knowledge <\\\/p>\\n\",\"coverImage\":{\"path\":\"images\\\/coverImage-67e564fb37217.png\",\"mime\":\"image\\\/png\",\"copyright\":{\"license\":\"U\"},\"width\":1280,\"height\":720}},\"chapters\":[{\"params\":{\"content\":[{\"content\":{\"params\":{\"text\":\"<p>This module will help you to develop skills and strategies for staying up to date with professional knowledge. In language education, professional knowledge might refer to academic research, as well as work that has relatively more practical orientation and origin. In this module, we will explore the diverse ways in which knowledge is disseminated and the forms in which it might be presented. We will also think about how we can effectively engage with professional knowledge that is available to us, and the ways in which our motivations shape our engagement with professional knowledge.&nbsp;&nbsp;<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"a5c58be5-ba88-4d05-b1cb-5123bbc18a6e\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2>Introduction to Module_1<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"adf10819-1c10-4d92-8b00-9af80b80cdd6\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"visuals\":{\"fit\":true,\"controls\":true},\"playback\":{\"autoplay\":false,\"loop\":false},\"l10n\":{\"name\":\"\\u0392\\u03af\\u03bd\\u03c4\\u03b5\\u03bf\",\"loading\":\"\\u03a6\\u03cc\\u03c1\\u03c4\\u03c9\\u03c3\\u03b7 \\u03c0\\u03c1\\u03bf\\u03b3\\u03c1\\u03ac\\u03bc\\u03bc\\u03b1\\u03c4\\u03bf\\u03c2 \\u03b1\\u03bd\\u03b1\\u03c0\\u03b1\\u03c1\\u03b1\\u03b3\\u03c9\\u03b3\\u03ae\\u03c2 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf...\",\"noPlayers\":\"\\u0394\\u03b5\\u03bd \\u03b2\\u03c1\\u03ad\\u03b8\\u03b7\\u03ba\\u03b1\\u03bd \\u03c0\\u03c1\\u03bf\\u03b3\\u03c1\\u03ac\\u03bc\\u03bc\\u03b1\\u03c4\\u03b1 \\u03b1\\u03bd\\u03b1\\u03c0\\u03b1\\u03c1\\u03b1\\u03b3\\u03c9\\u03b3\\u03ae\\u03c2 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf \\u03c0\\u03bf\\u03c5 \\u03bd\\u03b1 \\u03c5\\u03c0\\u03bf\\u03c3\\u03c4\\u03b7\\u03c1\\u03af\\u03b6\\u03bf\\u03c5\\u03bd \\u03c4\\u03b7 \\u03c3\\u03c5\\u03b3\\u03ba\\u03b5\\u03ba\\u03c1\\u03b9\\u03bc\\u03ad\\u03bd\\u03b7 \\u03bc\\u03bf\\u03c1\\u03c6\\u03ae \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf.\",\"noSources\":\"\\u0394\\u03b5\\u03bd \\u03c5\\u03c0\\u03ac\\u03c1\\u03c7\\u03bf\\u03c5\\u03bd \\u03b1\\u03c1\\u03c7\\u03b5\\u03af\\u03b1 \\u03c0\\u03c1\\u03bf\\u03ad\\u03bb\\u03b5\\u03c5\\u03c3\\u03b7\\u03c2 \\u03c4\\u03bf\\u03c5 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf.\",\"aborted\":\"\\u0394\\u03b9\\u03b1\\u03ba\\u03bf\\u03c0\\u03ae \\u03b1\\u03bd\\u03b1\\u03c0\\u03b1\\u03c1\\u03b1\\u03b3\\u03c9\\u03b3\\u03ae\\u03c2 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf.\",\"networkFailure\":\"\\u0391\\u03c0\\u03bf\\u03c4\\u03c5\\u03c7\\u03af\\u03b1 \\u03b4\\u03b9\\u03ba\\u03c4\\u03cd\\u03bf\\u03c5.\",\"cannotDecode\":\"\\u0394\\u03b5\\u03bd \\u03b5\\u03af\\u03bd\\u03b1\\u03b9 \\u03b4\\u03c5\\u03bd\\u03b1\\u03c4\\u03ae \\u03b7 \\u03b1\\u03c0\\u03bf\\u03ba\\u03c9\\u03b4\\u03b9\\u03ba\\u03bf\\u03c0\\u03bf\\u03af\\u03b7\\u03c3\\u03b7 \\u03c4\\u03bf\\u03c5 \\u03bc\\u03ad\\u03c3\\u03bf\\u03c5.\",\"formatNotSupported\":\"\\u0397 \\u03bc\\u03bf\\u03c1\\u03c6\\u03ae \\u03c4\\u03bf\\u03c5 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf \\u03b4\\u03b5\\u03bd \\u03c5\\u03c0\\u03bf\\u03c3\\u03c4\\u03b7\\u03c1\\u03af\\u03b6\\u03b5\\u03c4\\u03b1\\u03b9.\",\"mediaEncrypted\":\"\\u039a\\u03c1\\u03c5\\u03c0\\u03c4\\u03bf\\u03b3\\u03c1\\u03b1\\u03c6\\u03b7\\u03bc\\u03ad\\u03bd\\u03bf \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf.\",\"unknownError\":\"\\u0386\\u03b3\\u03bd\\u03c9\\u03c3\\u03c4\\u03bf \\u03c3\\u03c6\\u03ac\\u03bb\\u03bc\\u03b1.\",\"invalidYtId\":\"\\u03a4\\u03bf YouTube ID \\u03b4\\u03b5\\u03bd \\u03b5\\u03af\\u03bd\\u03b1\\u03b9 \\u03ad\\u03b3\\u03ba\\u03c5\\u03c1\\u03bf.\",\"unknownYtId\":\"\\u0394\\u03b5\\u03bd \\u03b5\\u03af\\u03bd\\u03b1\\u03b9 \\u03b4\\u03c5\\u03bd\\u03b1\\u03c4\\u03ae \\u03b7 \\u03b5\\u03cd\\u03c1\\u03b5\\u03c3\\u03b7 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf \\u03bc\\u03b5 \\u03c4\\u03bf \\u03c3\\u03c5\\u03b3\\u03ba\\u03b5\\u03ba\\u03c1\\u03b9\\u03bc\\u03ad\\u03bd\\u03bf YouTube ID.\",\"restrictedYt\":\"\\u039f \\u03ba\\u03ac\\u03c4\\u03bf\\u03c7\\u03bf\\u03c2 \\u03b1\\u03c5\\u03c4\\u03bf\\u03cd \\u03c4\\u03bf\\u03c5 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf \\u03b4\\u03b5\\u03bd \\u03b5\\u03c0\\u03b9\\u03c4\\u03c1\\u03ad\\u03c0\\u03b5\\u03b9 \\u03c4\\u03b7\\u03bd \\u03b5\\u03bd\\u03c3\\u03c9\\u03bc\\u03ac\\u03c4\\u03c9\\u03c3\\u03ae \\u03c4\\u03bf\\u03c5.\"},\"sources\":[{\"path\":\"videos\\\/sources-67e565a12bd5b.mp4\",\"mime\":\"video\\\/mp4\",\"copyright\":{\"license\":\"U\"}}]},\"library\":\"H5P.Video 1.5\",\"metadata\":{\"contentType\":\"Video\",\"license\":\"U\",\"title\":\"What this module is about\"},\"subContentId\":\"b1218bc1-c62f-4c7f-8d04-1971b443a3d9\"},\"useSeparator\":\"enabled\"},{\"content\":{\"params\":{\"text\":\"<h2>Intended Learning Outcomes<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"6c455cbb-dc89-49ba-9f1a-3b06729a5c26\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"panels\":[{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li aria-setsize=\\\"-1\\\" data-aria-level=\\\"1\\\" data-aria-posinset=\\\"1\\\" data-font=\\\"Symbol\\\" data-leveltext=\\\"\\uf0b7\\\" data-list-defn-props=\\\"&quot;hybridMultilevel&quot;}\\\" data-listid=\\\"20\\\" role=\\\"listitem\\\">\\n\\t<p paraeid=\\\"{0dbf0c7a-482b-405e-92da-b1c80d44dc7b}{78}\\\" paraid=\\\"1775348088\\\">Identify and describe the primary channels through which professional knowledge in language teaching is disseminated.&nbsp;<\\\/p>\\n\\t<\\\/li>\\n\\t<li aria-setsize=\\\"-1\\\" data-aria-level=\\\"1\\\" data-aria-posinset=\\\"2\\\" data-font=\\\"Symbol\\\" data-leveltext=\\\"\\uf0b7\\\" data-list-defn-props=\\\"&quot;hybridMultilevel&quot;}\\\" data-listid=\\\"20\\\" role=\\\"listitem\\\">\\n\\t<p paraeid=\\\"{0dbf0c7a-482b-405e-92da-b1c80d44dc7b}{84}\\\" paraid=\\\"219922544\\\">Analyze and differentiate various modes (textual, visual, aural, multimodal, etc.) of professional knowledge communication.&nbsp;<\\\/p>\\n\\t<\\\/li>\\n\\t<li aria-setsize=\\\"-1\\\" data-aria-level=\\\"1\\\" data-aria-posinset=\\\"3\\\" data-font=\\\"Symbol\\\" data-leveltext=\\\"\\uf0b7\\\" data-list-defn-props=\\\"&quot;hybridMultilevel&quot;}\\\" data-listid=\\\"20\\\" role=\\\"listitem\\\">\\n\\t<p paraeid=\\\"{0dbf0c7a-482b-405e-92da-b1c80d44dc7b}{92}\\\" paraid=\\\"686683617\\\">Apply targeted reading strategies to engage efficiently with professional knowledge in literature, adapting approaches to suit specific learning needs.&nbsp;<\\\/p>\\n\\t<\\\/li>\\n\\t<li aria-setsize=\\\"-1\\\" data-aria-level=\\\"1\\\" data-aria-posinset=\\\"4\\\" data-font=\\\"Symbol\\\" data-leveltext=\\\"\\uf0b7\\\" data-list-defn-props=\\\"&quot;hybridMultilevel&quot;}\\\" data-listid=\\\"20\\\" role=\\\"listitem\\\">\\n\\t<p paraeid=\\\"{0dbf0c7a-482b-405e-92da-b1c80d44dc7b}{98}\\\" paraid=\\\"504349454\\\">Evaluate their personal motivations and purposes for engaging with published professional knowledge, developing a reflective awareness of these influences.&nbsp;<\\\/p>\\n\\t<\\\/li>\\n\\t<li aria-setsize=\\\"-1\\\" data-aria-level=\\\"1\\\" data-aria-posinset=\\\"5\\\" data-font=\\\"Symbol\\\" data-leveltext=\\\"\\uf0b7\\\" data-list-defn-props=\\\"&quot;hybridMultilevel&quot;}\\\" data-listid=\\\"20\\\" role=\\\"listitem\\\">\\n\\t<p paraeid=\\\"{0dbf0c7a-482b-405e-92da-b1c80d44dc7b}{104}\\\" paraid=\\\"1480912661\\\">Create a tailored learning pathway to enhance their research literacy, focusing on the strategic use of professional and academic literature.&nbsp;&nbsp;<\\\/p>\\n\\t<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"a730d199-747d-4393-96ad-b23417ccf3b7\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"When you have completed this module, you will be able to\\u2026\"}],\"hTag\":\"h2\"},\"library\":\"H5P.Accordion 1.0\",\"metadata\":{\"contentType\":\"Accordion\",\"license\":\"U\",\"title\":\"Intended Learning Outcomes\"},\"subContentId\":\"6aa6a767-82b2-43bd-88d6-da8f6632e77d\"},\"useSeparator\":\"enabled\"},{\"content\":{\"params\":{\"text\":\"<h2>What you will need<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"a2bf81a9-8858-40a3-9481-969f19e65c77\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"imageSlides\":[{\"params\":{\"image\":{\"params\":{\"decorative\":false,\"contentName\":\"\\u0395\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"expandImage\":\"Expand Image\",\"minimizeImage\":\"Minimize Image\",\"alt\":\"Internet access\",\"title\":\"Internet access\",\"file\":{\"path\":\"images\\\/file-67e8309ec60fd.png\",\"mime\":\"image\\\/png\",\"copyright\":{\"license\":\"U\"},\"width\":500,\"height\":500}},\"library\":\"H5P.Image 1.1\",\"subContentId\":\"e09770b7-662a-4771-bf74-bbc0a0c0cec1\",\"metadata\":{\"contentType\":\"Image\",\"license\":\"U\",\"title\":\"Untitled Image\"}}},\"library\":\"H5P.ImageSlide 1.1\",\"subContentId\":\"bc0a372a-8bc3-49a9-9181-1a0365736be0\",\"metadata\":{\"contentType\":\"Image Slide\",\"license\":\"U\",\"title\":\"Internet access\"}},{\"params\":{\"image\":{\"params\":{\"decorative\":false,\"contentName\":\"\\u0395\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"expandImage\":\"Expand Image\",\"minimizeImage\":\"Minimize Image\",\"alt\":\"Headphones\",\"title\":\"Headphones\",\"file\":{\"path\":\"images\\\/file-67e830a503f7b.png\",\"mime\":\"image\\\/png\",\"copyright\":{\"license\":\"U\"},\"width\":500,\"height\":500}},\"library\":\"H5P.Image 1.1\",\"subContentId\":\"566eee0c-f675-4a25-b934-cc1c3656764e\",\"metadata\":{\"contentType\":\"Image\",\"license\":\"U\",\"title\":\"Untitled Image\"}}},\"library\":\"H5P.ImageSlide 1.1\",\"subContentId\":\"5d1f999a-afa1-46e9-8bc3-4f64ef946012\",\"metadata\":{\"contentType\":\"Image Slide\",\"license\":\"U\",\"title\":\"Headphones (optional)\"}},{\"params\":{\"image\":{\"params\":{\"decorative\":true,\"contentName\":\"\\u0395\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"expandImage\":\"Expand Image\",\"minimizeImage\":\"Minimize Image\",\"title\":\"Writing supplies\",\"file\":{\"path\":\"images\\\/file-67e830abab349.png\",\"mime\":\"image\\\/png\",\"copyright\":{\"license\":\"U\"},\"width\":500,\"height\":500}},\"library\":\"H5P.Image 1.1\",\"subContentId\":\"f45e9892-e3fc-412d-a9f7-64a983c8b14a\",\"metadata\":{\"contentType\":\"Image\",\"license\":\"U\",\"title\":\"Untitled Image\"}}},\"library\":\"H5P.ImageSlide 1.1\",\"subContentId\":\"9dcaf932-e39f-4792-a9ce-b09d66c5cdde\",\"metadata\":{\"contentType\":\"Image Slide\",\"license\":\"U\",\"title\":\"Writing supplies\"}},{\"params\":{\"image\":{\"params\":{\"decorative\":false,\"contentName\":\"\\u0395\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"expandImage\":\"Expand Image\",\"minimizeImage\":\"Minimize Image\",\"alt\":\"The Professional Development Framework\",\"title\":\"The Professional Development Framework\",\"file\":{\"path\":\"images\\\/file-67e830b5406e2.png\",\"mime\":\"image\\\/png\",\"copyright\":{\"license\":\"U\"},\"width\":500,\"height\":500}},\"library\":\"H5P.Image 1.1\",\"subContentId\":\"6cc90f0f-3f3c-4abe-abf1-95d9ca4f2e96\",\"metadata\":{\"contentType\":\"Image\",\"license\":\"U\",\"title\":\"Untitled Image\"}}},\"library\":\"H5P.ImageSlide 1.1\",\"subContentId\":\"7064c259-7d25-49e1-949d-201e4907fd87\",\"metadata\":{\"contentType\":\"Image Slide\",\"license\":\"U\",\"title\":\"The Professional Development Framework\"}}],\"aspectRatioMode\":\"auto\",\"aspectRatio\":{\"aspectWidth\":4,\"aspectHeight\":3},\"a11y\":{\"nextSlide\":\"\\u0395\\u03c0\\u03cc\\u03bc\\u03b5\\u03bd\\u03b7 \\u03b5\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"prevSlide\":\"\\u03a0\\u03c1\\u03bf\\u03b7\\u03b3\\u03bf\\u03cd\\u03bc\\u03b5\\u03bd\\u03b7 \\u03b5\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"gotoSlide\":\"\\u039c\\u03b5\\u03c4\\u03ac\\u03b2\\u03b1\\u03c3\\u03b7 \\u03c3\\u03c4\\u03b7\\u03bd \\u03b5\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1 %slide\"}},\"library\":\"H5P.ImageSlider 1.1\",\"metadata\":{\"contentType\":\"Image Slider\",\"license\":\"U\",\"title\":\"To engage with this module, you will need...\"},\"subContentId\":\"29e42587-36d2-4a83-bbe0-85ceb37d1d58\"},\"useSeparator\":\"auto\"}]},\"library\":\"H5P.Column 1.13\",\"subContentId\":\"75526fef-e37d-4150-b568-54ae0231385e\",\"metadata\":{\"contentType\":\"Column\",\"license\":\"U\",\"title\":\"Module Overview\"}},{\"params\":{\"content\":[{\"content\":{\"params\":{\"text\":\"<h2>About this activity<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"2a30b93f-c705-4433-8e45-984b146b6238\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"panels\":[{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Reflect on your reading practices and other ways in which you \\u2018consume\\u2019 professional knowledge<\\\/li>\\n\\t<li>Identify areas for potential professional development for engaging with published professional knowledge<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"bf116974-db01-44b0-9649-cd9b2f0135b9\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"This activity  will help you to\"},{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>A helpful colleague or access to a forum (optionally)<\\\/li>\\n\\t<li>Headphones (for step 2)<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"35e94352-9eba-4dfa-87ce-eb9a7bddf07e\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"To do this activity, you will need:\"},{\"content\":{\"params\":{\"text\":\"<p>15\\u201320 minutes<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"f85f0ec8-83dc-46cc-be89-0843152cefbc\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"Time required\"}],\"hTag\":\"h2\"},\"library\":\"H5P.Accordion 1.0\",\"metadata\":{\"contentType\":\"Accordion\",\"license\":\"U\",\"title\":\"Intended learning outcomes\"},\"subContentId\":\"b6b85a40-5b5f-4c59-9e04-1da802942bd1\"},\"useSeparator\":\"enabled\"},{\"content\":{\"params\":{\"text\":\"<h3>Step 1<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"c1cc4b04-6dc0-490e-95b8-e47e12033444\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"\\n\\t\\n\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span><span lang=\\\"EN-GB\\\"><span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Reflect on the following questions or discuss them with a peer.<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\n\\t\\n\\n\\n<ul>\\n\\t<li>When was the last time you read something connected to language teaching?<\\\/li>\\n\\t<li>What was it about?<\\\/li>\\n\\t<li>What, if any, challenges did you face?<\\\/li>\\n\\t<li>In what, if any, ways did this reading help you become better at language teaching?<\\\/li>\\n\\t<li>How would you describe your experience overall?<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"fe12d857-3439-4eca-9468-e15a8370b5b6\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Step 2<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"59520e04-b616-400c-adbc-de790a3ce51a\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Listen to the following video extract (13:23-16:30), in which Professor Simon Borg discusses how teachers engage with published research. Then reflect on the questions that follow.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"e0c53089-18f9-4472-bd5b-44702d99c30f\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"linkWidget\":{\"protocol\":\"https:\\\/\\\/\",\"url\":\"www.youtube.com\\\/watch?v=7DrXaP7x06E&amp;ab_channel=ELTDPMalaysia\"},\"title\":\"https:\\\/\\\/tinyurl.com\\\/ype7hytp\"},\"library\":\"H5P.Link 1.3\",\"metadata\":{\"contentType\":\"Link\",\"license\":\"U\"},\"subContentId\":\"0dab92d0-9311-43b6-9776-4ad25924face\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>What type of research is mentioned?<\\\/li>\\n\\t<li>Do you think that one type of research is more useful than the other?<\\\/li>\\n\\t<li>How might \\u201cthe two types of reading interact\\u201d?<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"63da64a0-2f92-4623-a47e-d08e24a082a2\"},\"useSeparator\":\"auto\"}]},\"library\":\"H5P.Column 1.13\",\"subContentId\":\"ebd8d7e8-a6f4-4619-b479-727936f4ebed\",\"metadata\":{\"contentType\":\"Column\",\"license\":\"U\",\"title\":\"Activity 1: Warm up\"}},{\"params\":{\"content\":[{\"content\":{\"params\":{\"text\":\"<h2>About this activity<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"9ff26108-2ac5-4c6f-8e49-f515350cde72\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"panels\":[{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Gain a clear understanding of the different ways knowledge is shared in your field.<\\\/li>\\n\\t<li>Reflect on whether some types of knowledge or sources are seen as more important than others, and think about why these differences exist.<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"c0db561f-3cff-4f0c-bf16-0357a0f9a031\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"This activity  will help you to:\"},{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Writing materials<\\\/li>\\n\\t<li>A helpful colleague or access to a forum (optionally, for Steps 3 &amp; 4)<\\\/li>\\n\\t<li>\\u0399nternet access (for Step 5)<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"44462a5b-8281-4a07-8638-6bcb407af737\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"To do this activity, you will need:\"},{\"content\":{\"params\":{\"text\":\"<p>35-40 minutes<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"61e8e545-1f8b-467b-bb6f-9101e914f169\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"Time required:\"}],\"hTag\":\"h2\"},\"library\":\"H5P.Accordion 1.0\",\"metadata\":{\"contentType\":\"Accordion\",\"license\":\"U\",\"title\":\"Untitled Accordion\"},\"subContentId\":\"8835eefc-d235-48d9-a53d-1886ecdd7ace\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Step 1<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"eef727be-b23a-4086-ae87-c62d1bf3af00\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Would you consider the following sources of information relevant to your professional development as a language teacher?<\\\/p>\\n\\n<ul>\\n\\t<li>Articles in academic journals<\\\/li>\\n\\t<li>Articles in professional journals<\\\/li>\\n\\t<li>Academic conference presentations&nbsp;<\\\/li>\\n\\t<li>Presentations at teacher conferences<\\\/li>\\n\\t<li>Chapters in professional (\\u2018how to\\u2019) books<\\\/li>\\n\\t<li>Professional blog posts<\\\/li>\\n\\t<li>Podcasts and videos<\\\/li>\\n\\t<li>Academic websites<\\\/li>\\n\\t<li>Infographics<\\\/li>\\n<\\\/ul>\\n\\n<p>&nbsp;<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"45c61521-158d-44be-97da-624dbe72f3e4\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Step 3<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"e0af0bb9-7510-45d1-96fa-9cfacbfa6dba\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Read the following text. Following that, make a list of texts (written, oral, multimodal) where you think professional knowledge might appear.<\\\/p>\\n\\n<hr>\\n<p><span><span><span>In everyday discourse, \\u2018research\\u2019 is often understood as involving controlled experiments, statistics and objectivity. There are good reasons for this, especially when thinking about the sciences. In language education, however, our conception of what counts as useful \\u2018research\\u2019 is broader: it includes all forms of systematic knowledge-building about our professional practice. To avoid the misleading connotations of the word \\u2018research\\u2019, in this set of materials, reference will be made to \\u2018knowledge\\u2019, when describing the insights that have been documented in the knowledge base of the profession, and \\u2018inquiry\\u2019 (alongside \\u2018research\\u2019) to describe the process of knowledge building. <\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span>This practice is similar to the perspective advanced by Lankshear and Knobel (2004, p. 4), who point out that:<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span>   <\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><em>Like doctors, lawyers and architects, [teachers] draw on a shared fund of professional knowledge and accumulated experience to take them as far as possible in specific situations. When they need to go beyond that shared \\u2018professional wisdom\\u2019 they draw on specialist educational knowledge, experience, networks and their capacity for informed autonomous judgment to make decisions about how best to promote learning objectives.<\\\/em><\\\/p>\\n\\n<p><span><span><span>As hinted in the quote above, the knowledge pool from which teachers can draw in order to develop empirically informed teaching practices is wide and goes beyond the narrow conception of academic research (although the latter is still included in this broad definition). <\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span>In language education, professional knowledge can be recorded in many forms: For example, research is often published in academic journals and books. However, teachers describing their own experiences of classroom-based inquiry also produce professionally relevant knowledge. Professional knowledge can also be found in blogs about language education, videos and podcasts and other, similar, channels. Similarly, professional knowledge can refer to primary research, e.g., when researchers describe a study about language learners, and secondary scholarship, which is when primary research is synthesized, re-told for a different audience, or presented in a new format (e.g., a blog, an infographic, a video summary).<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<hr>\\n<p>Lankshear, C. &amp; Knobel, M. (2004). <em>A handbook of teacher research: From design to implementation<\\\/em>. Open University Press.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"6ea5e2d1-7c9e-457e-83d8-580e1be01877\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Step 3<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"3795a2cd-78f5-4269-9dd0-3055d33424b0\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>What types of text would you consider suitable for the following categories of language teachers? Where might teachers in each category look for professionally relevant information?<\\\/p>\\n\\n<ul>\\n\\t<li>Novice teachers<\\\/li>\\n\\t<li>Mid-career teachers<\\\/li>\\n\\t<li>Experienced teachers<\\\/li>\\n\\t<li>Teachers with an advanced degree<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"e6781a46-03bc-4216-917f-57b61e0f069e\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Step 4<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"18896c63-2ed3-489a-b3e7-56b9ee872667\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Read the table overleaf and compare it with your own ideas. Discuss any points that surprise you or are not in line with your expectations.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"c6b06c6c-4c6f-4593-867b-57959142e2e7\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"\\n\\t\\n\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Experience Level<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Novice (1-5 years)<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Mid-career (6-14 years)<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Experienced (+15 years)<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Expert (Holding Graduate Degree)<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\n\\t\\n\\t\\n\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Reading Resources<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Blog posts, how-to books, videos, podcasts, websites, guides for classroom application<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Research accounts written by teachers, teacher blogs, more advanced practitioner guides, webinars<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Publications that offer practical knowledge, research articles, specialized texts in specific fields of interest<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Academic publications, comprehensive books, meta-analyses, high-impact research journals<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\n\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Sources<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>YouTube, teacher forums, open access teaching materials, online teacher communities (e.g., Twitter EdChats, Facebook groups)<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>IATEFL Special Interest Group publications, TESOL infographics, reflective journals, teacher interviews, research databases (ERIC)<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>TESL-EJ, OASIS, specialized practitioner publications, teacher-led research articles<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>ELT Journal, Journal of Applied Linguistics, AERA journals, teacher education conferences<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\n\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Reading Process<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Reading and note-taking, discussing with students and colleagues, informal peer feedback<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Writing blog posts, writing materials based on reading, conducting small classroom-based inquiries<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>School-based professional development, mentoring new teachers, contributing to school or district-wide PD initiatives<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Affiliated with academic and practitioner-oriented communities, presenting at conferences, engaging in peer reviews<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\n\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Developmental Axis<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Learning how to create evidence-based teaching through reading and writing, experimenting with new teaching practices<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Developing reflective teaching practices, integrating theory with classroom action research<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Applying advanced theoretical frameworks in day-to-day teaching, contributing to larger-scale research projects<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Contributing to the academic body of knowledge, shaping policy, mentoring early-career researchers<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\n\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Engagement with research<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Understanding basic pedagogical concepts, starting to explore evidence-based strategies<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Actively participating in research-informed teaching, conducting small-scale research projects<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Collaborating on or leading action research in schools, engaging with research that shapes institutional practices<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Leading or guiding large-scale academic research projects, mentoring junior researchers<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\n\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Professional Community Role<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Observing and participating in communities of practice, asking questions, seeking mentorship<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Contributing practical knowledge to communities of practice, occasionally leading sessions or initiatives<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Leading communities of practice, organizing PD activities, mentoring novice teachers<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\t\\n\\t\\t\\t<p><span><span><span>Serving as key experts in educational communities, influencing wider pedagogical approaches<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\t\\t\\t\\n\\t\\t\\n\\t\\n\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"443d59c2-1812-4c18-949e-7ed8ff57417e\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Step 5<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"7847aa70-4e0a-43c9-a0cc-e7c19e62ce09\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Browse the following sources of information and locate a text that you find interesting and relevant to your needs.<\\\/p>\\n\\n<ul>\\n\\t<li><span><span><span><strong>TESOLgraphics<\\\/strong>, a website that uses visualization to make research articles accessible to a wide audience of language teachers (<a href=\\\"https:\\\/\\\/www.tesolgraphics.com\\\/\\\">https:\\\/\\\/www.tesolgraphics.com\\\/<\\\/a>)<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span><strong>Studies in Second Language Teaching and Learning<\\\/strong>, an open access journal that hosts research about language education (<a href=\\\"https:\\\/\\\/pressto.amu.edu.pl\\\/index.php\\\/ssllt\\\">https:\\\/\\\/pressto.amu.edu.pl\\\/index.php\\\/ssllt<\\\/a>)<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>The <strong>OASIS database<\\\/strong>, a site hosting one-page summaries of research on language learning, use, and education written in accessible, non-technical language (<a href=\\\"https:\\\/\\\/oasis-database.org\\\/\\\">https:\\\/\\\/oasis-database.org\\\/<\\\/a>).<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span><strong>TESOLAcademic<\\\/strong>, a YouTube channel hosting videos in which authors talk about their research in TESOL (<a href=\\\"https:\\\/\\\/www.youtube.com\\\/@TESOLacademic\\\">https:\\\/\\\/www.youtube.com\\\/@TESOLacademic<\\\/a>) <\\\/span><\\\/span><\\\/span><\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"fe6fef39-5d30-4a75-b13d-14d312383e72\"},\"useSeparator\":\"auto\"}]},\"library\":\"H5P.Column 1.13\",\"subContentId\":\"0cacf489-1b42-477c-9e25-b777d5343a4a\",\"metadata\":{\"contentType\":\"Column\",\"license\":\"U\",\"title\":\"Activity 2: Where does professional knowledge appear?\"}},{\"params\":{\"content\":[{\"content\":{\"params\":{\"text\":\"<h2>About this activity<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"89c81883-294a-4a3d-8f76-d89e367b18fe\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"panels\":[{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Understand the differences in the ways in which professional knowledge is presented and accessed<\\\/li>\\n\\t<li>Develop skills that will help you engage with textual, visual, oral and multimodal texts that contain professional knowledge.<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"2fdf918d-9ee3-4688-a210-347c54934b11\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"This activity will help you to:\"},{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Internet access<\\\/li>\\n\\t<li>Headphones (optional, for Option 3)<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"c620f60f-ce2f-4fe8-a6a5-12f4088e5930\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"To do this activity, you will need:\"},{\"content\":{\"params\":{\"text\":\"<p>20\\u201340 minutes<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"f458705c-e6e9-4f8b-82c9-7a87f8b6ceaa\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"Time required\"},{\"content\":{\"params\":{\"text\":\"<p><span style=\\\"color:#2980b9;\\\">There are five options in this activity. You may choose to engage with any one of these options, depending on your strengths, interests and needs. At the end of the activity, you might want to discuss what you have learnt with colleagues who have worked on different options.<\\\/span><\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"e21a1719-6b10-4fac-a7df-dffd7691f19c\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"Note\"}],\"hTag\":\"h2\"},\"library\":\"H5P.Accordion 1.0\",\"metadata\":{\"contentType\":\"Accordion\",\"license\":\"U\",\"title\":\"Untitled Accordion\"},\"subContentId\":\"d26a491d-751c-40b4-9454-dde580b2a49a\"},\"useSeparator\":\"enabled\"},{\"content\":{\"params\":{\"text\":\"<h3>Option 1<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"82cf16a3-ebc3-45f5-bc89-065dafac77ae\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Look at the following infographic from <strong>TESOLgraphics<\\\/strong>, a website that presents the content of research articles in visual ways and answer the questions that follow.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"d7d0a4b7-b317-4a81-9fec-93292333b5c3\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"linkWidget\":{\"protocol\":\"https:\\\/\\\/\",\"url\":\"tinyurl.com\\\/2p9zstxa\"},\"title\":\"Mora, J. C., &amp; Levkina, M. (2017). Task-based pronunciation teaching and research: Key issues and future directions. Studies in Second Language Acquisition, 39(2), 381\\u2013399. doi:10.1017\\\/S0272263117000183\"},\"library\":\"H5P.Link 1.3\",\"metadata\":{\"contentType\":\"Link\",\"license\":\"U\"},\"subContentId\":\"76bdb31b-af73-4832-9cca-043cc618d995\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><strong><span><span><span>Evaluation questions<\\\/span><\\\/span><\\\/span><\\\/strong><\\\/p>\\n\\n<ul>\\n\\t<li>How accessible was the information you read? To what teachers would this way of presenting information mostly appeal?<\\\/li>\\n\\t<li>How complete was the information you read? Is there any information missing that might be useful for your purposes?<\\\/li>\\n\\t<li>How useful is this way of presenting information for you? In what ways can it help you with your teaching?<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"f6825f48-f695-4e66-a91a-ede4e3b33926\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Option 2<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"292b76cf-beff-475b-9264-6be4721c95cd\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Read the following summary of a research article, from the <strong>OASIS database<\\\/strong>, a site hosting one-page summaries of research on language learning, use, and education written in accessible, non-technical language, and answer the questions that following.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"8afe8fb1-2b78-45fe-a3c0-dfa236f8f43e\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"linkWidget\":{\"protocol\":\"https:\\\/\\\/\",\"url\":\"tinyurl.com\\\/4r2a293j\"},\"title\":\"Johnson, D. C., Carbine, M., &amp; Shea, C. (2024). Challenging deficit ideologies in Spanish heritage language policies and programs. Foreign Language Annals. https:\\\/\\\/doi.org\\\/10.1111\\\/flan.12770\"},\"library\":\"H5P.Link 1.3\",\"metadata\":{\"contentType\":\"Link\",\"license\":\"U\"},\"subContentId\":\"7550ab54-9ea3-4eab-be04-87019820ae35\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><strong><span><span><span>Evaluation questions<\\\/span><\\\/span><\\\/span><\\\/strong><\\\/p>\\n\\n<ul>\\n\\t<li><span><span><span>How accessible was the information you read? To what teachers would this way of presenting information mostly appeal?<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>How complete was the information you read? Is there any information missing that might be useful for your purposes?<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>How useful is this way of presenting information for you? In what ways can it help you with your teaching?<\\\/span><\\\/span><\\\/span><\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"9878ee9c-ccb0-4b00-a884-c07dbe54be5c\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Option 3<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"7cd41db4-3f11-4b1e-9d1d-6e535c86e476\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Watch the following video from <strong>TESOLacademic<\\\/strong>, a YouTube channel that curates video presentations about language education research and listen to Heyo Reiners talk about an article he published with Phil Benson. Then, answer the questions that follow.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"d48339e2-148e-4472-819f-d342c5609385\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"linkWidget\":{\"protocol\":\"https:\\\/\\\/\",\"url\":\"tinyurl.com\\\/ype7hytp\"},\"title\":\"Reinders, H. &amp; Benson, P. (2017). Research agenda: Language learning beyond the classroom. Language Teaching, 50(4), 561\\u2013578.\"},\"library\":\"H5P.Link 1.3\",\"metadata\":{\"contentType\":\"Link\",\"license\":\"U\"},\"subContentId\":\"dfb0115e-6a41-4041-a426-fe8e400bfc94\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><strong><span><span><span>Evaluation questions<\\\/span><\\\/span><\\\/span><\\\/strong><\\\/p>\\n\\n<ul>\\n\\t<li><span><span><span>How accessible was the information you read? To what teachers would this way of presenting information mostly appeal?<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>How complete was the information you read? Is there any information missing that might be useful for your purposes?<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>How useful is this way of presenting information for you? In what ways can it help you with your teaching?<\\\/span><\\\/span><\\\/span><\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"19fb321c-3b1b-4677-bc01-60f9f370eb09\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Option 4<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"dfd2e40a-51ab-487d-a963-4a2f1fa63218\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Read the following research article, which appeared in <strong>Studies in Second Language Learning and Teaching<\\\/strong>, an open-access academic journal, and answer the questions that follow.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"53157529-6ac6-4370-a583-b00cf7a2ae0e\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"linkWidget\":{\"protocol\":\"https:\\\/\\\/\",\"url\":\"tinyurl.com\\\/mtt82fec\"},\"title\":\"Gkonou, C. (2011). Anxiety over EFL speaking and writing:  A view from language classrooms. Studies in Second Language Learning and Teaching, 1(2), 267\\u2013281.\"},\"library\":\"H5P.Link 1.3\",\"metadata\":{\"contentType\":\"Link\",\"license\":\"U\"},\"subContentId\":\"54e809ec-8496-455e-93a2-1d9dae9cc5c2\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><strong><span><span><span>Evaluation questions<\\\/span><\\\/span><\\\/span><\\\/strong><\\\/p>\\n\\n<ul>\\n\\t<li><span><span><span>How accessible was the information you read? To what teachers would this way of presenting information mostly appeal?<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>How complete was the information you read? Is there any information missing that might be useful for your purposes?<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>How useful is this way of presenting information for you? In what ways can it help you with your teaching?<\\\/span><\\\/span><\\\/span><\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"cef7503a-15cb-41b2-9226-47b3cdcf1117\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3>Option 5<\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"f5d659aa-32d3-4db8-918b-d38e1b2ce530\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Read the following research article, which appeared in the journal <strong>Innovation in Language Learning and Teaching<\\\/strong>, and answer the questions that follow.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"8bc54256-dd9f-43e4-8755-45926c6077eb\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"linkWidget\":{\"protocol\":\"https:\\\/\\\/\",\"url\":\"tinyurl.com\\\/mwwmwfkv\"},\"title\":\"Dikilita\\u015f, K., &amp; Mumford, S. E. (2018). Teacher autonomy development through reading teacher research: agency, motivation and identity. Innovation in Language Learning and Teaching, 13(3), 253\\u2013266.\"},\"library\":\"H5P.Link 1.3\",\"metadata\":{\"contentType\":\"Link\",\"license\":\"U\"},\"subContentId\":\"f6dac628-b972-407f-ae81-3a1bbd0d7b53\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><strong><span><span><span>Evaluation questions<\\\/span><\\\/span><\\\/span><\\\/strong><\\\/p>\\n\\n<ul>\\n\\t<li><span><span><span>How accessible was the information you read? To what teachers would this way of presenting information mostly appeal?<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>How complete was the information you read? Is there any information missing that might be useful for your purposes?<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span><span><span>How useful is this way of presenting information for you? In what ways can it help you with your teaching?<\\\/span><\\\/span><\\\/span><\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"cdbac672-3b92-441c-9112-a9947fbc31b7\"},\"useSeparator\":\"auto\"}]},\"library\":\"H5P.Column 1.13\",\"subContentId\":\"165decfd-8344-4708-986a-28a634457ec3\",\"metadata\":{\"contentType\":\"Column\",\"license\":\"U\",\"title\":\"Activity 3: How to access professional knowledge\"}},{\"params\":{\"content\":[{\"content\":{\"params\":{\"text\":\"<h2>About this activity<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"b4e8cd64-bfc3-4c30-8cc6-c5e3a137d438\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"panels\":[{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Compare different ways of engaging with the published professional knowledge<\\\/li>\\n\\t<li>Relate ways of engaging with the published research knowledge with your current strengths, interests and needs<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"f9db7060-447a-410b-aa77-368474b3231b\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"This activity will help you to:\"},{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Headphones (optional, for Step 2 and 3)<\\\/li>\\n\\t<li>A helpful colleague or access to a discussion forum<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"344420e1-8bb4-4f3d-8f5f-7f2b35dd1fb4\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"To do this activity, you will need:\"},{\"content\":{\"params\":{\"text\":\"<p>20-40 minutes<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"subContentId\":\"8f9315ec-eea5-4c64-94d9-ca4a429d9e91\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"}},\"title\":\"Time required:\"}],\"hTag\":\"h2\"},\"library\":\"H5P.Accordion 1.0\",\"metadata\":{\"contentType\":\"Accordion\",\"license\":\"U\",\"title\":\"This activity  will help you to:\"},\"subContentId\":\"ba323c93-433d-4e66-8010-8e1fe9e73638\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2>Step 1<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"b53dd09f-71b9-4c4e-9a1e-b53af528e62a\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Think about the way you engaged with the previous activity. Did you read or listen to the information that was presented in a passive way? Are there any ways in which you can make your engagement more effective?<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"d6da46e0-8250-4db4-9133-508d3cbaaa7e\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3><span><span><span><span style=\\\"color:#434343\\\"><span>Step 2<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"650d84d9-b469-44ca-86dc-6fe3cdab5034\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Watch the presentation below and summarise its content in note form.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"ede779f7-045a-4c86-9a16-08a11f7d9d53\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"visuals\":{\"fit\":true,\"controls\":true},\"playback\":{\"autoplay\":false,\"loop\":false},\"l10n\":{\"name\":\"\\u0392\\u03af\\u03bd\\u03c4\\u03b5\\u03bf\",\"loading\":\"\\u03a6\\u03cc\\u03c1\\u03c4\\u03c9\\u03c3\\u03b7 \\u03c0\\u03c1\\u03bf\\u03b3\\u03c1\\u03ac\\u03bc\\u03bc\\u03b1\\u03c4\\u03bf\\u03c2 \\u03b1\\u03bd\\u03b1\\u03c0\\u03b1\\u03c1\\u03b1\\u03b3\\u03c9\\u03b3\\u03ae\\u03c2 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf...\",\"noPlayers\":\"\\u0394\\u03b5\\u03bd \\u03b2\\u03c1\\u03ad\\u03b8\\u03b7\\u03ba\\u03b1\\u03bd \\u03c0\\u03c1\\u03bf\\u03b3\\u03c1\\u03ac\\u03bc\\u03bc\\u03b1\\u03c4\\u03b1 \\u03b1\\u03bd\\u03b1\\u03c0\\u03b1\\u03c1\\u03b1\\u03b3\\u03c9\\u03b3\\u03ae\\u03c2 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf \\u03c0\\u03bf\\u03c5 \\u03bd\\u03b1 \\u03c5\\u03c0\\u03bf\\u03c3\\u03c4\\u03b7\\u03c1\\u03af\\u03b6\\u03bf\\u03c5\\u03bd \\u03c4\\u03b7 \\u03c3\\u03c5\\u03b3\\u03ba\\u03b5\\u03ba\\u03c1\\u03b9\\u03bc\\u03ad\\u03bd\\u03b7 \\u03bc\\u03bf\\u03c1\\u03c6\\u03ae \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf.\",\"noSources\":\"\\u0394\\u03b5\\u03bd \\u03c5\\u03c0\\u03ac\\u03c1\\u03c7\\u03bf\\u03c5\\u03bd \\u03b1\\u03c1\\u03c7\\u03b5\\u03af\\u03b1 \\u03c0\\u03c1\\u03bf\\u03ad\\u03bb\\u03b5\\u03c5\\u03c3\\u03b7\\u03c2 \\u03c4\\u03bf\\u03c5 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf.\",\"aborted\":\"\\u0394\\u03b9\\u03b1\\u03ba\\u03bf\\u03c0\\u03ae \\u03b1\\u03bd\\u03b1\\u03c0\\u03b1\\u03c1\\u03b1\\u03b3\\u03c9\\u03b3\\u03ae\\u03c2 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf.\",\"networkFailure\":\"\\u0391\\u03c0\\u03bf\\u03c4\\u03c5\\u03c7\\u03af\\u03b1 \\u03b4\\u03b9\\u03ba\\u03c4\\u03cd\\u03bf\\u03c5.\",\"cannotDecode\":\"\\u0394\\u03b5\\u03bd \\u03b5\\u03af\\u03bd\\u03b1\\u03b9 \\u03b4\\u03c5\\u03bd\\u03b1\\u03c4\\u03ae \\u03b7 \\u03b1\\u03c0\\u03bf\\u03ba\\u03c9\\u03b4\\u03b9\\u03ba\\u03bf\\u03c0\\u03bf\\u03af\\u03b7\\u03c3\\u03b7 \\u03c4\\u03bf\\u03c5 \\u03bc\\u03ad\\u03c3\\u03bf\\u03c5.\",\"formatNotSupported\":\"\\u0397 \\u03bc\\u03bf\\u03c1\\u03c6\\u03ae \\u03c4\\u03bf\\u03c5 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf \\u03b4\\u03b5\\u03bd \\u03c5\\u03c0\\u03bf\\u03c3\\u03c4\\u03b7\\u03c1\\u03af\\u03b6\\u03b5\\u03c4\\u03b1\\u03b9.\",\"mediaEncrypted\":\"\\u039a\\u03c1\\u03c5\\u03c0\\u03c4\\u03bf\\u03b3\\u03c1\\u03b1\\u03c6\\u03b7\\u03bc\\u03ad\\u03bd\\u03bf \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf.\",\"unknownError\":\"\\u0386\\u03b3\\u03bd\\u03c9\\u03c3\\u03c4\\u03bf \\u03c3\\u03c6\\u03ac\\u03bb\\u03bc\\u03b1.\",\"invalidYtId\":\"\\u03a4\\u03bf YouTube ID \\u03b4\\u03b5\\u03bd \\u03b5\\u03af\\u03bd\\u03b1\\u03b9 \\u03ad\\u03b3\\u03ba\\u03c5\\u03c1\\u03bf.\",\"unknownYtId\":\"\\u0394\\u03b5\\u03bd \\u03b5\\u03af\\u03bd\\u03b1\\u03b9 \\u03b4\\u03c5\\u03bd\\u03b1\\u03c4\\u03ae \\u03b7 \\u03b5\\u03cd\\u03c1\\u03b5\\u03c3\\u03b7 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf \\u03bc\\u03b5 \\u03c4\\u03bf \\u03c3\\u03c5\\u03b3\\u03ba\\u03b5\\u03ba\\u03c1\\u03b9\\u03bc\\u03ad\\u03bd\\u03bf YouTube ID.\",\"restrictedYt\":\"\\u039f \\u03ba\\u03ac\\u03c4\\u03bf\\u03c7\\u03bf\\u03c2 \\u03b1\\u03c5\\u03c4\\u03bf\\u03cd \\u03c4\\u03bf\\u03c5 \\u03b2\\u03af\\u03bd\\u03c4\\u03b5\\u03bf \\u03b4\\u03b5\\u03bd \\u03b5\\u03c0\\u03b9\\u03c4\\u03c1\\u03ad\\u03c0\\u03b5\\u03b9 \\u03c4\\u03b7\\u03bd \\u03b5\\u03bd\\u03c3\\u03c9\\u03bc\\u03ac\\u03c4\\u03c9\\u03c3\\u03ae \\u03c4\\u03bf\\u03c5.\"},\"sources\":[{\"path\":\"videos\\\/sources-67e8439fada06.mp4\",\"mime\":\"video\\\/mp4\",\"copyright\":{\"license\":\"U\"}}]},\"library\":\"H5P.Video 1.5\",\"metadata\":{\"contentType\":\"Video\",\"license\":\"U\",\"title\":\"What Is Engagement with Research\"},\"subContentId\":\"7d0a23f1-1a63-409d-98da-5b2523d0bb06\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"\\n<p><span><span><span>\\u2018Engaging with research\\u2019 (or \\u2018knowledge\\u2019, if one takes a broader perspective) is often understood as synonym to \\u2018reading\\u2019. This view can be an oversimplification, for three reasons. <\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span>Firstly, professional knowledge is now available in a variety of formats (See <strong>Activity 1<\\\/strong>), including video and audio, and multimodal texts. In some cases, engaging with research means listening, or watching, or engaging with input in multiple ways.<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span>Furthermore, reading is not a uniform activity, as it can mean \\u2018skimming\\u2019 and \\u2018scanning\\u2019 or even intensive reading and note-taking. The same, of course, applies to other ways of engaging with input. Exactly how a teacher might approach a publication (or blog, or video) will depend on their needs and interests. <\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span>Finally, engaging with research need not mean just passively consuming knowledge. It can also involve working with colleagues, discussing what you have read, making collaborative notes and so on.<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"b21d8842-0d61-4245-8996-6e13f01066fa\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3><span><span><span><span style=\\\"color:#434343\\\"><span>Step 3<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"b61e0206-aee1-4be6-8ebe-479110ef3891\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Choose one of the resources you selected in Activity 2 and read \\\/ listen to it while taking notes of the most important points.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"e12f6cb2-4bee-46dc-8e78-1ae5edcbc214\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h3><span><span><span><span style=\\\"color:#434343\\\"><span>Step 4<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h3>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"8d30054e-2201-4ac0-a5cd-22cd10b9a05c\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Discuss the content of the article you read with a colleague or post it in a forum.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"e7cde4a3-07ff-4d31-b603-6e2174f1eb8a\"},\"useSeparator\":\"auto\"}]},\"library\":\"H5P.Column 1.13\",\"subContentId\":\"f0d8ba99-fd39-4844-93c7-feb759a57c5d\",\"metadata\":{\"contentType\":\"Column\",\"license\":\"U\",\"title\":\"Activity 4: How to engage with professional knowledge\"}},{\"params\":{\"content\":[{\"content\":{\"params\":{\"text\":\"<h2>About this activity<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"644ce699-39d3-4daf-95a3-4c573852af45\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"panels\":[{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Develop an understanding of the diverse motivations that sustain engagement with the professional knowledge<\\\/li>\\n\\t<li>Relate ways of engaging with the professional knowledge with your own motivations<\\\/li>\\n\\t<li>Flexibly select ways of engaging with professional knowledge based on their motivation for reading<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"fd0844dd-1c77-413a-bbef-ea29bf15eddb\"},\"title\":\"This activity will help you to:\"},{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Writing materials<\\\/li>\\n\\t<li>A helpful colleague (optionally)<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"310ef772-0bec-4a5b-b35c-b95c731d6adc\"},\"title\":\"To do this activity, you will need:\"},{\"content\":{\"params\":{\"text\":\"<p><span><span><span>40\\u201360 minutes<\\\/span><\\\/span><\\\/span><\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"b424e8a6-d900-4dbb-b631-920c061eaa12\"},\"title\":\"Time required:\"}],\"hTag\":\"h2\"},\"library\":\"H5P.Accordion 1.0\",\"metadata\":{\"contentType\":\"Accordion\",\"license\":\"U\",\"title\":\"This activity  will help you to:\"},\"subContentId\":\"efba5faa-c069-4ca1-b0fe-91dfca0a13b4\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2>Step 1<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"1963b493-263c-4e1f-a60e-c92ceec98bd8\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Read the following list of reasons why a teacher might engage with published professional knowledge. Can you add any other reasons to the list?<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"69add2ef-45c8-407d-9f7d-2e3af4ded0da\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"decorative\":false,\"contentName\":\"\\u0395\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"expandImage\":\"Expand Image\",\"minimizeImage\":\"Minimize Image\",\"file\":{\"path\":\"images\\\/file-67e8469119b78.png\",\"mime\":\"image\\\/png\",\"copyright\":{\"license\":\"U\"},\"width\":585,\"height\":262},\"alt\":\"To solve a challenge in my professional practice, To diversify the way in which I teach,\\tTo develop academically \\uf0fc\\tTo satisfy my professional curiosity, To find ideas that will help me with a writing task,To improve my language skills\"},\"library\":\"H5P.Image 1.1\",\"metadata\":{\"contentType\":\"Image\",\"license\":\"U\",\"title\":\"Untitled Image\"},\"subContentId\":\"79edb206-ddb7-4be4-a579-f4436d08941f\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2>Step 2<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"65745257-4d51-405f-8125-0caaa9eda361\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><span><span><span>Rank the items in the list above according to how important they are to you at this stage of your career development.<\\\/span><\\\/span><\\\/span><\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"5040a8ea-2745-42d3-92dd-b9fde1c6a3bd\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2>Step 3<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"4cbb0a80-8c1a-47d9-b4c4-713f55dbbec4\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><span><span><span>Read the figure below. Think about the people who agreed with each statement. What types of professional knowledge would they be more likely to engage with?<\\\/span><\\\/span><\\\/span><\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"7692da0d-c87e-4287-91f6-16df2c3b97a1\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"decorative\":true,\"contentName\":\"\\u0395\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"expandImage\":\"Expand Image\",\"minimizeImage\":\"Minimize Image\",\"file\":{\"path\":\"images\\\/file-67e8473054cc8.png\",\"mime\":\"image\\\/png\",\"copyright\":{\"license\":\"U\"},\"width\":676,\"height\":565}},\"library\":\"H5P.Image 1.1\",\"metadata\":{\"contentType\":\"Image\",\"license\":\"U\",\"title\":\"Untitled Image\"},\"subContentId\":\"4bcd21a3-a289-4d96-b4ec-e33dd14d9f7e\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><span style=\\\"font-size:0.6875em;\\\">Hall, G. (2023).<\\\/span> <span style=\\\"font-size:0.6875em;\\\"><em>Teachers\\u2019 engagement with published research: How do teachers who read research navigate the field, what do they read, and why?<\\\/em><\\\/span> <span style=\\\"font-size:0.6875em;\\\">British Council.<\\\/span><\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"2d7fc8bc-4b2a-47a9-aee4-86b46350fe37\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2>Step 4<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"95cc7e5c-68da-41f0-a3e9-6710fb8d6934\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Using the information presented at the chart above, or any other relevant source, write a short text (approx. 150 words) summarizing the reasons why teachers might engage with professional knowledge. When you are done, reflect on the questions that follow.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"490b7764-8ed8-4c65-aa1c-da4979be58f6\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"decorative\":true,\"contentName\":\"\\u0395\\u03b9\\u03ba\\u03cc\\u03bd\\u03b1\",\"expandImage\":\"Expand Image\",\"minimizeImage\":\"Minimize Image\",\"file\":{\"path\":\"images\\\/file-67e847d29914c.png\",\"mime\":\"image\\\/png\",\"copyright\":{\"license\":\"U\"},\"width\":698,\"height\":354}},\"library\":\"H5P.Image 1.1\",\"metadata\":{\"contentType\":\"Image\",\"license\":\"U\",\"title\":\"Untitled Image\"},\"subContentId\":\"aef09bc5-40cb-491e-8428-1b480d57dd8c\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2>Step 5<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"3cb931a3-4aae-4389-9c17-30cda8cb5fb2\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"mode\":\"normal\",\"description\":\"<p>Read about the following teachers. In what ways might engaging with the literature be helpful for them? Think about the sources of information that would be most useful for them, the formats of information exchange that they might prefer and the ways in which they could engage with the knowledge. What other scenario can you think, in which engaging with professional knowledge can be useful?<\\\/p>\\n\",\"dialogs\":[{\"tips\":{},\"text\":\"Amira\\n\",\"answer\":\"<p class=\\\"O0\\\">Amira is a novice teacher who is frustrated by his students\\u2019 lack of language learning motivation.<\\\/p>\\n\",\"image\":{\"path\":\"images\\\/image-67e849b6e460c.jpg\",\"mime\":\"image\\\/jpeg\",\"copyright\":{\"license\":\"U\"},\"width\":5472,\"height\":3648}},{\"tips\":{},\"text\":\"Hanz\\u014d\\n\",\"answer\":\"Hanz\\u014d is a language teacher who has recently taken on a management post. His immediate priority is to set up a new self-access centre, and he needs evidence to convince stakeholders about the benefits of self-access in order to secure funding.\\n\",\"image\":{\"path\":\"images\\\/image-67e849e4eea08.jpg\",\"mime\":\"image\\\/jpeg\",\"copyright\":{\"license\":\"U\"},\"width\":3717,\"height\":5575}},{\"tips\":{},\"text\":\"Chiara\\n\",\"answer\":\"Chiara is a language teacher who wants to find out more about language learning assessment in order to write more effective tests.\\n\",\"image\":{\"path\":\"images\\\/image-67e84a0540048.jpg\",\"mime\":\"image\\\/jpeg\",\"copyright\":{\"license\":\"U\"},\"width\":3162,\"height\":4737}}],\"behaviour\":{\"enableRetry\":true,\"disableBackwardsNavigation\":false,\"scaleTextNotCard\":false,\"randomCards\":false,\"maxProficiency\":5,\"quickProgression\":false},\"answer\":\"\\u0393\\u03cd\\u03c1\\u03b9\\u03c3\\u03b5\",\"next\":\"\\u0395\\u03c0\\u03cc\\u03bc\\u03b5\\u03bd\\u03b7\",\"prev\":\"\\u03a0\\u03c1\\u03bf\\u03b7\\u03b3\\u03bf\\u03cd\\u03bc\\u03b5\\u03bd\\u03b7\",\"retry\":\"\\u0395\\u03c0\\u03b1\\u03bd\\u03ac\\u03bb\\u03b7\\u03c8\\u03b7\",\"correctAnswer\":\"\\u03a3\\u03c9\\u03c3\\u03c4\\u03ac!\",\"incorrectAnswer\":\"\\u039b\\u03ac\\u03b8\\u03bf\\u03c2\",\"round\":\"\\u0393\\u03cd\\u03c1\\u03bf\\u03c2 @round\",\"cardsLeft\":\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u03c0\\u03bf\\u03c5 \\u03b1\\u03c0\\u03bf\\u03bc\\u03ad\\u03bd\\u03bf\\u03c5\\u03bd: @number\",\"nextRound\":\"\\u039c\\u03b5\\u03c4\\u03ac\\u03b2\\u03b1\\u03c3\\u03b7 \\u03c3\\u03c4\\u03bf \\u03b3\\u03cd\\u03c1\\u03bf @round\",\"startOver\":\"\\u0395\\u03c0\\u03b1\\u03bd\\u03ac\\u03bb\\u03b7\\u03c8\\u03b7\",\"showSummary\":\"\\u0395\\u03c0\\u03b9\\u03c3\\u03ba\\u03cc\\u03c0\\u03b7\\u03c3\\u03b7\",\"summary\":\"\\u0395\\u03c0\\u03b9\\u03c3\\u03ba\\u03cc\\u03c0\\u03b7\\u03c3\\u03b7\",\"summaryCardsRight\":\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u03c3\\u03c9\\u03c3\\u03c4\\u03ac:\",\"summaryCardsWrong\":\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u03bb\\u03ac\\u03b8\\u03bf\\u03c2:\",\"summaryCardsNotShown\":\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 \\u03c0\\u03bf\\u03c5 \\u03b4\\u03b5\\u03bd \\u03c0\\u03c1\\u03bf\\u03b2\\u03bb\\u03ae\\u03b8\\u03b7\\u03ba\\u03b1\\u03bd:\",\"summaryOverallScore\":\"\\u03a3\\u03c5\\u03bd\\u03bf\\u03bb\\u03b9\\u03ba\\u03bf\\u03af \\u0392\\u03b1\\u03b8\\u03bc\\u03bf\\u03af\",\"summaryCardsCompleted\":\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 (\\u03bf\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03ce\\u03b8\\u03b7\\u03ba\\u03b5 \\u03b7 \\u03bc\\u03ac\\u03b8\\u03b7\\u03c3\\u03ae \\u03c4\\u03bf\\u03c5\\u03c2):\",\"summaryCompletedRounds\":\"\\u0393\\u03cd\\u03c1\\u03bf\\u03b9 \\u03c0\\u03bf\\u03c5 \\u03bf\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03ce\\u03b8\\u03b7\\u03ba\\u03b1\\u03bd:\",\"summaryAllDone\":\"\\u03a3\\u03c5\\u03b3\\u03c7\\u03b1\\u03c1\\u03b7\\u03c4\\u03ae\\u03c1\\u03b9\\u03b1! \\u0395\\u03af\\u03c7\\u03b5\\u03c2 \\u03cc\\u03bb\\u03b5\\u03c2 \\u03c4\\u03b9\\u03c2 \\u03ba\\u03ac\\u03c1\\u03c4\\u03b5\\u03c2 (@cards) \\u03c3\\u03c9\\u03c3\\u03c4\\u03ac @max \\u03c6\\u03bf\\u03c1\\u03ad\\u03c2 \\u03c3\\u03c4\\u03b7 \\u03c3\\u03b5\\u03b9\\u03c1\\u03ac!\",\"progressText\":\"\\u039a\\u03ac\\u03c1\\u03c4\\u03b1 @card \\u03b1\\u03c0\\u03cc @total\",\"cardFrontLabel\":\"\\u039c\\u03c0\\u03c1\\u03bf\\u03c3\\u03c4\\u03b9\\u03bd\\u03cc \\u03bc\\u03ad\\u03c1\\u03bf\\u03c2 \\u03ba\\u03ac\\u03c1\\u03c4\\u03b1\\u03c2\",\"cardBackLabel\":\"\\u03a0\\u03af\\u03c3\\u03c9 \\u03bc\\u03ad\\u03c1\\u03bf\\u03c2 \\u03ba\\u03ac\\u03c1\\u03c4\\u03b1\\u03c2\",\"tipButtonLabel\":\"\\u0395\\u03bc\\u03c6\\u03ac\\u03bd\\u03b9\\u03c3\\u03b7 \\u03b5\\u03c0\\u03b5\\u03be\\u03ae\\u03b3\\u03b7\\u03c3\\u03b7\\u03c2\",\"audioNotSupported\":\"\\u039f \\u03c6\\u03c5\\u03bb\\u03bb\\u03bf\\u03bc\\u03b5\\u03c4\\u03c1\\u03b7\\u03c4\\u03ae\\u03c2 \\u03b4\\u03b5\\u03bd \\u03c5\\u03c0\\u03bf\\u03c3\\u03c4\\u03b7\\u03c1\\u03af\\u03b6\\u03b5\\u03b9 \\u03c4\\u03bf \\u03c3\\u03c5\\u03b3\\u03ba\\u03b5\\u03ba\\u03c1\\u03b9\\u03bc\\u03ad\\u03bd\\u03bf \\u03b1\\u03c1\\u03c7\\u03b5\\u03af\\u03bf \\u03ae\\u03c7\\u03bf\\u03c5\",\"confirmStartingOver\":{\"header\":\"\\u0395\\u03c0\\u03b1\\u03bd\\u03ad\\u03bd\\u03b1\\u03c1\\u03be\\u03b7;\",\"body\":\"\\u038c\\u03bb\\u03b7 \\u03b7 \\u03c4\\u03c1\\u03ad\\u03c7\\u03bf\\u03c5\\u03c3\\u03b1 \\u03c0\\u03c1\\u03cc\\u03bf\\u03b4\\u03bf\\u03c2 \\u03b8\\u03b1 \\u03c7\\u03b1\\u03b8\\u03b5\\u03af. \\u0395\\u03af\\u03c3\\u03c4\\u03b5 \\u03c3\\u03af\\u03b3\\u03bf\\u03c5\\u03c1\\u03bf\\u03c2 \\u03c0\\u03c9\\u03c2 \\u03b8\\u03ad\\u03bb\\u03b5\\u03c4\\u03b5 \\u03bd\\u03b1 \\u03be\\u03b5\\u03ba\\u03b9\\u03bd\\u03ae\\u03c3\\u03b5\\u03c4\\u03b5 \\u03be\\u03b1\\u03bd\\u03ac;\",\"cancelLabel\":\"\\u0391\\u03ba\\u03cd\\u03c1\\u03c9\\u03c3\\u03b7\",\"confirmLabel\":\"\\u0395\\u03c0\\u03b1\\u03bd\\u03ad\\u03bd\\u03b1\\u03c1\\u03be\\u03b7\"},\"title\":\"<p>Teacher profiles<\\\/p>\\n\"},\"library\":\"H5P.Dialogcards 1.8\",\"metadata\":{\"contentType\":\"Dialog Cards\",\"license\":\"U\",\"title\":\"Teacher profiles\"},\"subContentId\":\"b558a9ca-20f6-40ad-b404-8a7a7df67ffd\"},\"useSeparator\":\"auto\"}]},\"library\":\"H5P.Column 1.13\",\"subContentId\":\"2df84678-d0a9-45e2-b06c-82d633c81b36\",\"metadata\":{\"contentType\":\"Column\",\"license\":\"U\",\"title\":\"Activity 5: Why engage with professional knowledge\"}},{\"params\":{\"content\":[{\"content\":{\"params\":{\"text\":\"<h2>About this activity<\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"f01f6e64-997b-4714-9e35-e7b26882684a\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"panels\":[{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Reflect on your current motivations and needs for engagement with the professional knowledge<\\\/li>\\n\\t<li>Design a personalised learning pathway for developing your ability to use the literature<\\\/li>\\n\\t<li>Create a list of resources to which you can refer in the future<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"6d6c58a3-834d-48e1-a625-dc946b0459e5\"},\"title\":\"This activity will help you to:\"},{\"content\":{\"params\":{\"text\":\"<ul>\\n\\t<li>Writing materials<\\\/li>\\n\\t<li>The Language Teacher Research Literacy Professional Development Framework<\\\/li>\\n\\t<li>Internet access<\\\/li>\\n<\\\/ul>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"49dc0634-d124-4f4e-993b-9ba74f07cf7d\"},\"title\":\"To do this activity, you will need:\"},{\"content\":{\"params\":{\"text\":\"<p><span><span><span>30 minutes<\\\/span><\\\/span><\\\/span><\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"09e9fbf8-8f09-4656-afa9-b0a2af346927\"},\"title\":\"Time required:\"}],\"hTag\":\"h2\"},\"library\":\"H5P.Accordion 1.0\",\"metadata\":{\"contentType\":\"Accordion\",\"license\":\"U\",\"title\":\"This activity  will help you to:\"},\"subContentId\":\"862dd978-3593-4fff-91fb-55763be4a13a\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2><span><span><span><span style=\\\"color:#434343\\\"><span>Step 1<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"691d9d6f-66f8-48ea-97ad-5e36b4a6df91\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p><span><span><span>Think about your current needs and<\\\/span><\\\/span><\\\/span><span><span><span> context and complete the following sentences.<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<ol>\\n\\t<li><span><span><span><span lang=\\\"EN-GB\\\">My main motivation for engaging with the published scholarship is\\u2026<\\\/span><\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span lang=\\\"EN-GB\\\"><span><span>The types of content that I find most accessible are\\u2026<\\\/span><\\\/span><\\\/span><\\\/li>\\n\\t<li><span lang=\\\"EN-GB\\\"><span><span>The types of content that are most relevant to my needs are\\u2026<\\\/span><\\\/span><\\\/span><\\\/li>\\n<\\\/ol>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"765305c3-caea-4988-aff2-2ba2a2f5cb3c\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2><span><span><span><span style=\\\"color:#434343\\\"><span>Step 2<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"96d2be5b-7d1b-4822-9df4-eb6f47ba219f\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Read <strong>Section B<\\\/strong> (\\u2018Using the literature\\u2019) of the Language Teacher Research Literacy Development Framework. Identify the aspects of using the literature with which you feel confident, as well as areas of priority for your development.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"b5534392-c24e-41b2-ad60-0a3fd86929c8\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<h2><span><span><span><span style=\\\"color:#434343\\\"><span>Step 3<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h2>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"205c7602-e50b-464e-8d80-85d9f118859e\"},\"useSeparator\":\"auto\"},{\"content\":{\"params\":{\"text\":\"<p>Search the internet for collections of resources (books, journals, blogs, video channels, podcasts, etc.) with which you are comfortable. Make a list of such collections for your reference.<\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"d7148395-407f-41bb-86bb-b88fef4cc0a2\"},\"useSeparator\":\"auto\"}]},\"library\":\"H5P.Column 1.13\",\"subContentId\":\"e6750a8a-ef4d-4141-ad56-297ec3347539\",\"metadata\":{\"contentType\":\"Column\",\"license\":\"U\",\"title\":\"Activity 6: Reflecting on and planning for development\"}},{\"params\":{\"content\":[{\"content\":{\"params\":{\"text\":\"<h3><span><span><span><span style=\\\"color:#434343\\\"><span>ELT Research<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h3>\\n\\n<p><span><span><span>ELT Research is a journal for language teachers who actively investigate their professional practice. You can access their archive by following the link below.<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span><a href=\\\"https:\\\/\\\/resig.weebly.com\\\/newsletter.html\\\">https:\\\/\\\/resig.weebly.com\\\/newsletter.html<\\\/a> <\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<hr>\\n<h3><span><span><span><span style=\\\"color:#434343\\\"><span>MenTRnet<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h3>\\n\\n<p><span><span><span>MenTRnet is an international community of practice that brings together mentors of language teachers with expertise in supporting teacher research. In their website, you can find a curated list of research articles and reports, as well as other useful resources.<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span><a href=\\\"https:\\\/\\\/mentrnet.net\\\/open-access-resources\\\/\\\">https:\\\/\\\/mentrnet.net\\\/open-access-resources\\\/<\\\/a> <\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<hr>\\n<h3><span><span><span><span style=\\\"color:#434343\\\"><span>Research Report<\\\/span><\\\/span><\\\/span><\\\/span><\\\/span><\\\/h3>\\n\\n<p><span><span><span>The following research report discusses some of the themes that were covered in this module, such as the reading practices and motivations of English language teachers.<\\\/span><\\\/span><\\\/span><\\\/p>\\n\\n<p><span><span><span>Hall, G. (2023). Teachers\\u2019 engagement with published research: how do teachers who read research navigate the field, what do they read, and why? British Council. Available online at: <a href=\\\"https:\\\/\\\/doi.org\\\/10.57884\\\/B04W-E417\\\">https:\\\/\\\/doi.org\\\/10.57884\\\/B04W-E417<\\\/a>&nbsp; <\\\/span><\\\/span><\\\/span><\\\/p>\\n\"},\"library\":\"H5P.AdvancedText 1.1\",\"metadata\":{\"contentType\":\"Text\",\"license\":\"U\",\"title\":\"Untitled Text\"},\"subContentId\":\"fdb2c12a-299f-4cef-a919-081a42c95d96\"},\"useSeparator\":\"auto\"}]},\"library\":\"H5P.Column 1.13\",\"subContentId\":\"78f1fccc-b504-4850-a567-df5bdd93720d\",\"metadata\":{\"contentType\":\"Column\",\"license\":\"U\",\"title\":\"Additional reading resources\"}}],\"behaviour\":{\"defaultTableOfContents\":true,\"progressIndicators\":true,\"progressAuto\":true,\"displaySummary\":true},\"read\":\"\\u0391\\u03bd\\u03ac\\u03b3\\u03bd\\u03c9\\u03c3\\u03b7\",\"displayTOC\":\"\\u03a0\\u03c1\\u03bf\\u03b2\\u03bf\\u03bb\\u03ae &#039;\\u03a0\\u03af\\u03bd\\u03b1\\u03ba\\u03b1 \\u03a0\\u03b5\\u03c1\\u03b9\\u03b5\\u03c7\\u03bf\\u03bc\\u03ad\\u03bd\\u03c9\\u03bd&#039;\",\"hideTOC\":\"\\u0391\\u03c0\\u03cc\\u03ba\\u03c1\\u03c5\\u03c8\\u03b7 &#039;\\u03a0\\u03af\\u03bd\\u03b1\\u03ba\\u03b1 \\u03a0\\u03b5\\u03c1\\u03b9\\u03b5\\u03c7\\u03bf\\u03bc\\u03ad\\u03bd\\u03c9\\u03bd&#039;\",\"nextPage\":\"\\u0395\\u03c0\\u03cc\\u03bc\\u03b5\\u03bd\\u03b7 \\u03c3\\u03b5\\u03bb\\u03af\\u03b4\\u03b1\",\"previousPage\":\"\\u03a0\\u03c1\\u03bf\\u03b7\\u03b3\\u03bf\\u03cd\\u03bc\\u03b5\\u03bd\\u03b7 \\u03c3\\u03b5\\u03bb\\u03af\\u03b4\\u03b1\",\"chapterCompleted\":\"\\u039f\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03c9\\u03bc\\u03ad\\u03bd\\u03b7 \\u03c3\\u03b5\\u03bb\\u03af\\u03b4\\u03b1!\",\"partCompleted\":\"@pages \\u03b1\\u03c0\\u03cc @total \\u03ad\\u03c7\\u03bf\\u03c5\\u03bd \\u03bf\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03c9\\u03b8\\u03b5\\u03af\",\"incompleteChapter\":\"\\u039c\\u03b7 \\u03bf\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03c9\\u03bc\\u03ad\\u03bd\\u03b7 \\u03c3\\u03b5\\u03bb\\u03af\\u03b4\\u03b1\",\"navigateToTop\":\"\\u039c\\u03b5\\u03c4\\u03ac\\u03b2\\u03b1\\u03c3\\u03b7 \\u03c3\\u03c4\\u03b7\\u03bd \\u03ba\\u03bf\\u03c1\\u03c5\\u03c6\\u03ae\",\"markAsFinished\":\"\\u0388\\u03c7\\u03c9 \\u03bf\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03ce\\u03c3\\u03b5\\u03b9 \\u03b1\\u03c5\\u03c4\\u03ae\\u03bd \\u03c4\\u03b7 \\u03c3\\u03b5\\u03bb\\u03af\\u03b4\\u03b1\",\"fullscreen\":\"\\u03a0\\u03bb\\u03ae\\u03c1\\u03b7\\u03c2 \\u03bf\\u03b8\\u03cc\\u03bd\\u03b7\",\"exitFullscreen\":\"\\u0388\\u03be\\u03bf\\u03b4\\u03bf\\u03c2 \\u03b1\\u03c0\\u03cc \\u03c0\\u03c1\\u03cc\\u03b2\\u03bf\\u03bb\\u03ae \\u03c0\\u03bb\\u03ae\\u03c1\\u03bf\\u03c5\\u03c2 \\u03bf\\u03b8\\u03cc\\u03bd\\u03b7\\u03c2\",\"bookProgressSubtext\":\"@count \\u03b1\\u03c0\\u03cc @total \\u03c3\\u03b5\\u03bb\\u03af\\u03b4\\u03b5\\u03c2\",\"interactionsProgressSubtext\":\"@count \\u03b1\\u03c0\\u03cc @total \\u03b4\\u03c1\\u03b1\\u03c3\\u03c4\\u03b7\\u03c1\\u03b9\\u03bf\\u03c4\\u03ae\\u03c4\\u03c9\\u03bd\",\"submitReport\":\"\\u03a5\\u03c0\\u03bf\\u03b2\\u03bf\\u03bb\\u03ae \\u0391\\u03bd\\u03b1\\u03c6\\u03bf\\u03c1\\u03ac\\u03c2\",\"restartLabel\":\"\\u0395\\u03c0\\u03b1\\u03bd\\u03b5\\u03ba\\u03ba\\u03af\\u03bd\\u03b7\\u03c3\\u03b7\",\"summaryHeader\":\"\\u03a0\\u03b5\\u03c1\\u03af\\u03bb\\u03b7\\u03c8\\u03b7\",\"allInteractions\":\"\\u038c\\u03bb\\u03b5\\u03c2 \\u03bf\\u03b9 \\u03b4\\u03b9\\u03b1\\u03b4\\u03c1\\u03ac\\u03c3\\u03b5\\u03b9\\u03c2\",\"unansweredInteractions\":\"\\u0394\\u03b9\\u03b1\\u03b4\\u03c1\\u03ac\\u03c3\\u03b5\\u03b9\\u03c2 \\u03c0\\u03bf\\u03c5 \\u03b4\\u03b5\\u03bd \\u03b1\\u03c0\\u03b1\\u03bd\\u03c4\\u03ae\\u03b8\\u03b7\\u03ba\\u03b1\\u03bd\",\"scoreText\":\"@score \\\/ @maxscore\",\"leftOutOfTotalCompleted\":\"@left \\u03b1\\u03c0\\u03cc @max \\u03b4\\u03b9\\u03b1\\u03b4\\u03c1\\u03ac\\u03c3\\u03b5\\u03b9\\u03c2 \\u03ad\\u03c7\\u03bf\\u03c5\\u03bd \\u03bf\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03c9\\u03b8\\u03b5\\u03af\",\"noInteractions\":\"\\u0394\\u03b5\\u03bd \\u03c5\\u03c0\\u03ac\\u03c1\\u03c7\\u03bf\\u03c5\\u03bd \\u03b4\\u03b9\\u03b1\\u03b4\\u03c1\\u03ac\\u03c3\\u03b5\\u03b9\\u03c2\",\"score\":\"\\u0392\\u03b1\\u03b8\\u03bc\\u03bf\\u03bb\\u03bf\\u03b3\\u03af\\u03b1\",\"summaryAndSubmit\":\"\\u03a0\\u03b5\\u03c1\\u03af\\u03bb\\u03b7\\u03c8\\u03b7 &amp; \\u03c5\\u03c0\\u03bf\\u03b2\\u03bf\\u03bb\\u03ae\",\"noChapterInteractionBoldText\":\"\\u0394\\u03b5\\u03bd \\u03ad\\u03c7\\u03b5\\u03c4\\u03b5 \\u03bf\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03ce\\u03c3\\u03b5\\u03b9 \\u03ba\\u03b1\\u03bc\\u03af\\u03b1 \\u03b4\\u03b9\\u03ac\\u03b4\\u03c1\\u03b1\\u03c3\\u03b7 \\u03c3\\u03b5 \\u03ba\\u03b1\\u03bc\\u03af\\u03b1 \\u03b1\\u03c0\\u03cc \\u03c4\\u03b9\\u03c2 \\u03c3\\u03b5\\u03bb\\u03af\\u03b4\\u03b5\\u03c2.\",\"noChapterInteractionText\":\"\\u03a0\\u03c1\\u03ad\\u03c0\\u03b5\\u03b9 \\u03bd\\u03b1 \\u03ad\\u03c7\\u03b5\\u03c4\\u03b5 \\u03bf\\u03bb\\u03bf\\u03ba\\u03bb\\u03b7\\u03c1\\u03ce\\u03c3\\u03b5\\u03b9 \\u03c4\\u03bf\\u03c5\\u03bb\\u03ac\\u03c7\\u03b9\\u03c3\\u03c4\\u03bf\\u03bd \\u03bc\\u03b9\\u03b1 \\u03b4\\u03b9\\u03ac\\u03b4\\u03c1\\u03b1\\u03c3\\u03b7 \\u03c3\\u03b5 \\u03c4\\u03bf\\u03c5\\u03bb\\u03ac\\u03c7\\u03b9\\u03c3\\u03c4\\u03bf\\u03bd \\u03bc\\u03b9\\u03b1 \\u03c3\\u03b5\\u03bb\\u03af\\u03b4\\u03b1 \\u03b3\\u03b9\\u03b1 \\u03bd\\u03b1 \\u03bc\\u03c0\\u03bf\\u03c1\\u03ad\\u03c3\\u03b5\\u03c4\\u03b5 \\u03bd\\u03b1 \\u03c0\\u03c1\\u03bf\\u03b2\\u03ac\\u03bb\\u03b5\\u03c4\\u03b5 \\u03c4\\u03b7\\u03bd \\u03c0\\u03b5\\u03c1\\u03af\\u03bb\\u03b7\\u03c8\\u03b7.\",\"yourAnswersAreSubmittedForReview\":\"\\u039f\\u03b9 \\u03b1\\u03c0\\u03b1\\u03bd\\u03c4\\u03ae\\u03c3\\u03b5\\u03b9\\u03c2 \\u03c3\\u03b1\\u03c2 \\u03ad\\u03c7\\u03bf\\u03c5\\u03bd \\u03c5\\u03c0\\u03bf\\u03b2\\u03bb\\u03b7\\u03b8\\u03b5\\u03af \\u03b3\\u03b9\\u03b1 \\u03ad\\u03bb\\u03b5\\u03b3\\u03c7\\u03bf!\",\"bookProgress\":\"\\u03a0\\u03c1\\u03cc\\u03bf\\u03b4\\u03bf\\u03c2 \\u03c3\\u03c4\\u03bf \\u03b2\\u03b9\\u03b2\\u03bb\\u03af\\u03bf\",\"interactionsProgress\":\"\\u03a0\\u03c1\\u03cc\\u03bf\\u03b4\\u03bf\\u03c2 \\u03b4\\u03b9\\u03b1\\u03b4\\u03c1\\u03ac\\u03c3\\u03b5\\u03c9\\u03bd\",\"totalScoreLabel\":\"\\u03a3\\u03c5\\u03bd\\u03bf\\u03bb\\u03b9\\u03ba\\u03ae \\u03b2\\u03b1\\u03b8\\u03bc\\u03bf\\u03bb\\u03bf\\u03b3\\u03af\\u03b1\",\"a11y\":{\"progress\":\"\\u03a3\\u03b5\\u03bb\\u03af\\u03b4\\u03b1 @page \\u03b1\\u03c0\\u03cc @total.\",\"menu\":\"\\u0395\\u03bd\\u03b1\\u03bb\\u03bb\\u03b1\\u03b3\\u03ae \\u03bc\\u03b5\\u03bd\\u03bf\\u03cd \\u03c0\\u03bb\\u03bf\\u03ae\\u03b3\\u03b7\\u03c3\\u03b7\\u03c2\"}}"}}});