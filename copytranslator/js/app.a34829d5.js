(function(t){function e(e){for(var s,i,l=e[0],o=e[1],c=e[2],u=0,v=[];u<l.length;u++)i=l[u],r[i]&&v.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},r={app:0},n=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3cbd4889"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=r[t]=[e,s]});e.push(a[2]=s);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=i(t),n=function(e){o.onerror=o.onload=null,clearTimeout(c);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+s+": "+n+")");i.type=s,i.request=n,a[1](i)}r[t]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:o})},12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/copytranslator/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("1356"),r=a.n(s);r.a},1100:function(t,e,a){t.exports=a.p+"img/background.dffed1a9.jpg"},1356:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=a("bb71");a("da64");s["default"].use(r["a"],{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],l={name:"App"},o=l,c=(a("034f"),a("2877")),u=Object(c["a"])(o,n,i,!1,null,null,null);u.options.__file="App.vue";var d=u.exports,v=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("v-content",[a("section",[a("v-parallax",{attrs:{src:t.banner,id:"page",height:"600"}},[a("v-toolbar",{staticClass:"white--text transparent",attrs:{flat:""}},[a("v-toolbar-side-icon",{staticClass:"white--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{staticClass:"white--text",attrs:{flat:""}},[t._v("Home")]),a("v-btn",{staticClass:"white--text",attrs:{flat:"",href:"#features"},on:{click:function(e){e.stopPropagation(),t.drawer=!1}}},[t._v("Features")]),a("v-btn",{staticClass:"white--text",attrs:{flat:"",href:"#download"},on:{click:function(e){e.stopPropagation(),t.drawer=!1}}},[t._v("Download")]),a("v-btn",{staticClass:"white--text",attrs:{flat:"",href:"https://github.com/elliottzheng/CopyTranslator/wiki/Usage-%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97"},on:{click:function(e){e.stopPropagation(),t.drawer=!1}}},[t._v("User Manual")])],1)],1),a("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[a("img",{attrs:{src:"logo.ico",alt:"Vuetify.js",height:"200"}}),a("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("CopyTranslator")]),a("div",{staticClass:"subheading mb-2 text-xs-center"},[t._v("Foreign language assisted reading and translation solution")]),a("div",{staticClass:"subheading mb-3 text-xs-center"},[t._v("Latest: "+t._s(t.version))]),a("v-btn",{staticClass:"blue lighten-2 mt-5",attrs:{round:"",large:"",dark:"",href:"#download"}},[t._v("\n                        Download\n                    ")])],1)],1)],1),a("section",{attrs:{id:"features"}},[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-xs-center"},[a("h2",{staticClass:"headline"},[t._v("A fantastic way of document translation")]),a("span",{staticClass:"subheading"},[t._v("\n            Copy and Translate with CopyTranslator\n          ")])])]),a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fa-magic")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Fluency Translation")])]),a("v-card-text",[t._v("\n                                        Solving the problem caused by extra sentence breaks and line breaks.\n                                    ")])],1)],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fa-clipboard")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Clipboard Monitor")])]),a("v-card-text",[t._v("\n                                        Just copy the text to the clipboard, and wait to view the translation results in the next second, enjoy the WYSIWYG pleasure.\n                                    ")])],1)],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fa fa-sync")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Intelligent Mutual Translation")])]),a("v-card-text",[t._v("\n                                        Intelligently translate according to the source language and target language,\n                                    ")])],1)],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fa fa-copy")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Incremental Copy")])]),a("v-card-text",[t._v("\n                                        Append the copied text to the source other than replace it, especially useful when the paragraph is separated in different page.\n                                    ")])],1)],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fa fa-hand-pointer")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Press Copy")])]),a("v-card-text",[t._v("\n                                        Just select the text, and hover the mouse over the selected text, after long press and release, it can be copied.\n                                    ")])],1)],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("fa fa-book")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Smart Dictionary")])]),a("v-card-text",[t._v("\n                                        Sentences with words less than 3 will be view as phrase or word, you will see a more detailed explanations in Focus Mode.\n                                    ")])],1)],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""},on:{click:function(e){return e.stopPropagation(),t.toGithub(e)}}},[t._v("fa fa-wrench")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Powerful Automation")])]),a("v-card-text",[t._v("\n                                        Many automated customization options are available.\n                                    ")])],1)],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""},on:{click:function(e){return e.stopPropagation(),t.toGithub(e)}}},[t._v("fab fa-github")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Completely Open Sourced")])]),a("v-card-text",[t._v("\n                                        The code is licensed under Mozilla Public License 2.0, and it's available on Github.\n                                    ")])],1)],1)],1)],1)],1)],1)],1),a("section",{attrs:{id:"download"}},[a("v-parallax",{attrs:{src:t.banner,height:"380"}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("div",{staticClass:"headline white--text mb-3 text-xs-center"},[t._v("Paper reading has never been easier")]),a("em",[t._v("Kick-start your journey now")]),a("v-btn",{staticClass:"blue lighten-2 mt-5",attrs:{dark:"",large:"",round:"",href:"https://github.com/elliottzheng/CopyTranslator/wiki/Downloads-%E4%B8%8B%E8%BD%BD%E4%B8%8E%E5%AE%89%E8%A3%85"}},[t._v(" \n                        Download from Github\n                    ")])],1)],1)],1),a("section",[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("About author")])]),a("v-card-text",[t._v("\n                                I'm Elliott Zheng, my research interests lie in computer vision and deep learning. Specifically, I am interested in 3D  computer vision and graph learning. Also a amateur front-end developer.\n                            ")])],1)],1),a("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Contact me")])]),a("v-list",{staticClass:"transparent"},[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("fab fa-github")])],1),a("v-list-tile-content",[a("v-list-tile-title",[a("a",{attrs:{href:"https://github.com/elliottzheng"}},[t._v("https://github.com/elliottzheng")])])],1)],1),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("fa-envelope")])],1),a("v-list-tile-content",[a("v-list-tile-title",[a("a",{attrs:{href:"mailto:CopyTranslator@hypercube.top"}},[t._v("CopyTranslator@hypercube.top")])])],1)],1)],1)],1)],1)],1)],1)],1)]),a("v-navigation-drawer",{staticClass:"mt-5 transparent",attrs:{temporary:"",width:"200",id:"drawer",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-btn",{staticClass:"white--text",attrs:{flat:""}},[t._v("Home")]),a("v-btn",{staticClass:"white--text",attrs:{flat:"",href:"#features"},on:{click:function(e){e.stopPropagation(),t.drawer=!1}}},[t._v("Features")]),a("v-btn",{staticClass:"white--text",attrs:{flat:"",href:"#download"},on:{click:function(e){e.stopPropagation(),t.drawer=!1}}},[t._v("Download")]),a("v-btn",{staticClass:"white--text",attrs:{flat:"",href:"https://github.com/elliottzheng/CopyTranslator/wiki/Usage-%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97"},on:{click:function(e){e.stopPropagation(),t.drawer=!1}}},[t._v("User Manual")])],1),a("v-footer",{staticClass:"blue darken-2"},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"white--text ml-3"},[t._v("\n                    Made by "),a("a",{staticClass:"white--text",attrs:{href:"https://vuetifyjs.com",target:"_blank"}},[t._v("Vuetify")]),t._v("\n                    and "),a("a",{staticClass:"white--text",attrs:{href:"https://github.com/elliottzheng"}},[t._v("Elliott Zheng")])]),a("div",[a("a",{staticClass:"white--text",attrs:{href:"https://www.freepik.com/free-vector/technology-background-with-gradient-colors_2364158.htm"}},[t._v("Designed by Freepik")])])])],1)],1)],1)},f=[],h={data:function(){return{title:"CopyTranslator",banner1:a("d68e"),banner:a("1100"),drawer:!1,version:"v0.0.7 RC1"}},methods:{toGithub:function(){window.location("https://github.com/elliottzheng/CopyTranslator")}}},x=h,b=a("6544"),g=a.n(b),m=a("7496"),y=a("8336"),C=a("b0af"),w=a("99d9"),_=a("12b2"),j=a("a523"),T=a("549c"),k=a("0e8f"),V=a("553a"),P=a("132d"),E=a("a722"),A=a("8860"),S=a("ba95"),D=a("40fe"),M=a("5d23"),O=a("f774"),B=a("8b9c"),F=a("9910"),z=a("71d9"),I=a("2a7f"),L=a("706c"),G=Object(c["a"])(x,p,f,!1,null,null,null);G.options.__file="Home.vue";var J=G.exports;g()(G,{VApp:m["a"],VBtn:y["a"],VCard:C["a"],VCardText:w["a"],VCardTitle:_["a"],VContainer:j["a"],VContent:T["a"],VFlex:k["a"],VFooter:V["a"],VIcon:P["a"],VLayout:E["a"],VList:A["a"],VListTile:S["a"],VListTileAction:D["a"],VListTileContent:M["a"],VListTileTitle:M["b"],VNavigationDrawer:O["a"],VParallax:B["a"],VSpacer:F["a"],VToolbar:z["a"],VToolbarItems:I["a"],VToolbarSideIcon:L["a"],VToolbarTitle:I["b"]}),s["default"].use(v["a"]);var U=new v["a"]({mode:"history",base:"/copytranslator/",routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),H=a("2f62");s["default"].use(H["a"]);var $=new H["a"].Store({state:{},mutations:{},actions:{}}),W=a("ce5b"),Y=a.n(W);s["default"].use(Y.a,{iconfont:"fa"}),s["default"].config.productionTip=!1,new s["default"]({router:U,store:$,render:function(t){return t(d)}}).$mount("#app")},d68e:function(t,e,a){t.exports=a.p+"img/bg.56b104d4.png"}});
//# sourceMappingURL=app.a34829d5.js.map