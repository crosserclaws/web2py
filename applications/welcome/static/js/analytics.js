/*
  from http://segmentio.github.com/analytics.js/
  Copyright (C) 2012 Segment.io
  MIT License
 */
(function(){var e=this,t=!1,n=new Date,r=!1,i=window.onload;window.onload=function(){r=!0,f(i)&&i()};var s=function(e){return Math.floor(new Date(e)/1e3)},o=function(e){if(!e)return;var t={};for(var n in e)t[n]=e[n];return t},u=function(e){return e===Object(e)},a=function(e){return Object.prototype.toString.call(e)==="[object String]"},f=function(e){return Object.prototype.toString.call(e)==="[object Function]"},l=/.+\@.+\..+/,c=function(e,t){if(!a(e)&&!u(e))throw new Error("Encountered unresolvable settings value.");if(a(e)){var n=e;e={},e[t]=n}return e};e.analytics||(e.analytics={providers:[],userId:null,initialize:function(e){var n=[];for(var r in e){if(!h[r])throw new Error("Couldn't find a provider named \""+r+'"');h[r].initialize(e[r]),n.push(h[r])}this.providers=n,t=!0},identify:function(e,n){if(!t)return;u(e)&&(n=e,e=null),e!==null?this.userId=e:e=this.userId;for(var r=0,i;i=this.providers[r];r++){if(!i.identify)continue;var s=o(n);i.identify(e,s)}},track:function(e,n){if(!t)return;for(var r=0,i;i=this.providers[r];r++){if(!i.track)continue;var s=o(n);i.track(e,s)}}});var h={"Google Analytics":{initialize:function(e){this.settings=e=c(e,"trackingId");var t=t||[];t.push(["_setAccount",e.trackingId]);if(this.settings.enhancedLinkAttribution===!0){var n=("https:"==document.location.protocol?"https://ssl.":"http://www.")+"google-analytics.com/plugins/ga/inpage_linkid.js";t.push(["_require","inpage_linkid",n])}this.settings.siteSpeedSampleRate!=null&&typeof this.settings.siteSpeedSampleRate=="number"&&t.push(["_setSiteSpeedSampleRate",this.settings.siteSpeedSampleRate]),t.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),window._gaq=t},track:function(e,t){window._gaq.push(["_trackEvent","All",e])}},KISSmetrics:{initialize:function(e){function n(e){setTimeout(function(){var t=document,n=t.getElementsByTagName("script")[0],r=t.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,n.parentNode.insertBefore(r,n)},1)}this.settings=e=c(e,"apiKey");var t=t||[];n("//i.kissmetrics.com/i.js"),n("//doug1izaerwt3.cloudfront.net/"+e.apiKey+".1.js"),window._kmq=t},identify:function(e,t){e&&window._kmq.push(["identify",e]),t&&window._kmq.push(["set",t])},track:function(e,t){window._kmq.push(["record",e,t])}},Mixpanel:{initialize:function(e){this.settings=e=c(e,"token"),function(e,t){window.mixpanel=t;var n,r,i,s;n=e.createElement("script"),n.type="text/javascript",n.async=!0,n.src=("https:"===e.location.protocol?"https:":"http:")+"//cdn.mxpnl.com/libs/mixpanel-2.1.min.js",r=e.getElementsByTagName("script")[0],r.parentNode.insertBefore(n,r),t._i=[],t.init=function(e,n,r){function o(e,t){var n=t.split(".");2==n.length&&(e=e[n[0]],t=n[1]),e[t]=function(){e.push([t].concat(Array.prototype.slice.call(arguments,0)))}}var u=t;"undefined"!=typeof r?u=t[r]=[]:r="mixpanel",u.people=u.people||[],i=["disable","track","track_pageview","track_links","track_forms","register","register_once","unregister","identify","name_tag","set_config","people.identify","people.set","people.increment"];for(s=0;s<i.length;s++)o(u,i[s]);t._i.push([e,n,r])},t.__SV=1.1}(document,window.mixpanel||[]),window.mixpanel.init(e.token,e)},identify:function(e,t){e&&(window.mixpanel.identify(e),window.mixpanel.name_tag(e),l.test(e)&&(t=t||{},t.email=e)),t&&(this.aliasTraits(t),window.mixpanel.register(t)),this.settings.people===!0&&(e&&window.mixpanel.people.identify(e),t&&window.mixpanel.people.set(t))},aliasTraits:function(e){e.email&&(e.$email=e.email,delete e.email),e.name&&(e.$name=e.name,delete e.name),e.username&&(e.$username=e.username,delete e.username),e.lastSeen&&(e.$last_login=e.lastSeen,delete e.lastSeen),e.createdAt&&(e.$created=e.createdAt,delete e.createdAt)},track:function(e,t){window.mixpanel.track(e,t)}},Intercom:{initialize:function(e){this.settings=c(e,"appId")},identify:function(e,t){function n(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://api.intercom.io/api/js/library.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}if(!e)return;window.intercomSettings={app_id:this.settings.appId,user_id:e,custom_data:t||{}},t?(t.email&&(window.intercomSettings.email=t.email),t.name&&(window.intercomSettings.name=t.name),t.createdAt&&(window.intercomSettings.created_at=s(t.createdAt))):l.test(e)&&(window.intercomSettings.email=e),window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1)}},"Customer.io":{initialize:function(e){this.settings=e=c(e,"siteId");var t=t||[];(function(){var n,r,i;n=function(e){return function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}},r=["identify","track"];for(i=0;i<r.length;i++)t[r[i]]=n(r[i]);var s=document.createElement("script"),o=document.getElementsByTagName("script")[0];s.async=!0,s.id="cio-tracker",s.setAttribute("data-site-id",e.siteId),s.src="https://assets.customer.io/assets/track.js",o.parentNode.insertBefore(s,o)})(),window._cio=t},identify:function(e,t){if(!e)return;t=t||{};var n=o(t);n.id=e,n.email===undefined&&l.test(e)&&(n.email=e),n.createdAt&&(n.created_at=s(n.createdAt),delete n.createdAt),window._cio.identify(n)},track:function(e,t){window._cio.track(e,t)}},CrazyEgg:{initialize:function(e){this.settings=e=c(e,"apiKey"),function(){var t=document.createElement("script"),n=document.getElementsByTagName("script")[0];t.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/"+e.apiKey+".js?"+Math.floor((new Date).getTime()/36e5),t.async=!0,t.type="text/javascript",n.parentNode.insertBefore(t,n)}()}},Olark:{initialize:function(e){this.settings=e=c(e,"siteId"),window.olark||function(e){var t=window,n=document,r=t.location.protocol=="https:"?"https:":"http:",i=e.name,s="load",o=function(){function f(){u.P(s),t[i](s)}t[i]=function(){(u.s=u.s||[]).push(arguments)};var u=t[i]._={},a=e.methods.length;while(a--)(function(e){t[i][e]=function(){t[i]("call",e,arguments)}})(e.methods[a]);u.l=e.loader,u.i=o,u.p={0:+(new Date)},u.P=function(e){u.p[e]=new Date-u.p[0]},t.addEventListener?t.addEventListener(s,f,!1):t.attachEvent("on"+s,f);var l=function(){function t(e){return e="head",["<",e,"></",e,"><",s,' onload="var d=',m,";d.getElementsByTagName('head')[0].",a,"(d.",f,"('script')).",c,"='",r,"//",u.l,"'",'"',"></",s,">"].join("")}var s="body",o=n[s];if(!o)return setTimeout(l,100);u.P(1);var a="appendChild",f="createElement",c="src",h=n[f]("div"),p=h[a](n[f](i)),v=n[f]("iframe"),m="document",g="domain",y;h.style.display="none",o.insertBefore(h,o.firstChild).id=i,v.frameBorder="0",v.id=i+"-loader",/MSIE[ ]+6/.test(navigator.userAgent)&&(v.src="javascript:false"),v.allowTransparency="true",p[a](v);try{v.contentWindow[m].open()}catch(b){e[g]=n[g],y="javascript:var d="+m+".open();d.domain='"+n.domain+"';",v[c]=y+"void(0);"}try{var w=v.contentWindow[m];w.write(t()),w.close()}catch(E){v[c]=y+'d.write("'+t().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}u.P(2)};l()};o()}({loader:"static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]}),window.olark.identify(e.siteId)},identify:function(e,t){if(!e)return;window.olark("api.chat.updateVisitorNickname",{snippet:e})},track:function(e,t){if(!this.settings.track)return;window.olark("api.chat.sendNotificationToOperator",{body:'Visitor triggered "'+e+'".'})}},Chartbeat:{initialize:function(e){this.settings=e=c(e,"uid");var t={};t.uid=e.uid,t.domain=e.domain||window.location.host,e.path&&(t.path=e.path),e.title&&(t.title=e.title),e.useCanonical&&(t.useCanonical=e.useCanonical),e.sections&&(t.sections=e.sections),e.authors&&(t.authors=e.authors),e.noCookies&&(t.noCookies=e.noCookies),function(){window._sf_endpt=n.getTime();var e=document.createElement("script");e.setAttribute("language","javascript"),e.setAttribute("type","text/javascript"),e.setAttribute("src",("https:"==document.location.protocol?"https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/":"http://static.chartbeat.com/")+"js/chartbeat.js"),document.body.appendChild(e)}()}}}}).call(this);