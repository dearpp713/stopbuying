(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)s=i[l],r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cad10c7c"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,a[1](s)}r[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://dearpp713.github.io/stopbuying/dist/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("STOP")]),a("span",{staticClass:"font-weight-light"},[t._v("Buying")])]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"https://lihkg.com/thread/1365591/page/1",target:"blank"}},[a("span",{staticClass:"mr-2"},[t._v("Report")]),a("v-icon",[t._v("report")])],1)],1),a("v-content",[a("v-container",{attrs:{fluid:"","grid-list-md":"","pa-2":""}},[a("v-layout",{attrs:{wrap:""}},t._l(t.api.shops,function(e){return a("v-flex",{key:e.title,attrs:{xs12:"",sm6:""}},[a("v-card",{staticClass:"ma-2"},[a("v-img",{staticClass:"white--text",attrs:{contain:!0,src:e.src,height:"200px",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[a("v-card-title",{staticClass:"fill-height align-end",domProps:{textContent:t._s(e.title)}})],1),a("v-chip",{staticClass:"mt-4 ml-6"},[a("v-avatar",{attrs:{left:""}},[a("v-icon",[t._v(t._s(t.getShopIcon(e.type)))])],1),t._v("\n\t\t\t\t\t\t"+t._s(e.type)+"\n\t\t\t\t\t")],1),e.fc?a("v-chip",{staticClass:"mt-4 ml-2",attrs:{color:"success"}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",[t._v("contact_phone")])],1),t._v("\n\t\t\t\t\t\tFactChecked\n\t\t\t\t\t ")],1):t._e(),a("div",[a("blockquote",{staticClass:"blockquote"},[t._v(t._s(e.reason))])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mb-2 mr-2",attrs:{href:e.details,target:"blank"}},[a("small",[t._v(t._s(e.date))]),a("v-icon",[t._v("find_in_page")])],1)],1)],1)],1)}),1)],1)],1)],1)},o=[],s={name:"App",components:{},data:function(){return{api:{shops:[]}}},mounted:function(){var t=this;t.axios.get("https://raw.githubusercontent.com/dearpp713/stopbuying/master/api/shops.json").then(function(e){console.log(e.data.shops),t.api.shops=e.data.shops})},methods:{getShopIcon:function(t){switch(t){case"food":return"fastfood";case"clothes":return"local_offer";case"reading":return"library_books";case"game":return"videogame_asset"}}}},i=s,c=a("2877"),u=a("6544"),l=a.n(u),f=a("7496"),p=a("40dc"),h=a("8212"),v=a("8336"),d=a("b0af"),m=a("99d9"),b=a("cc20"),y=a("a523"),g=a("a75b"),_=a("0e8f"),x=a("132d"),w=a("adda"),C=a("a722"),j=a("2fa4"),k=a("2a7f"),V=Object(c["a"])(i,r,o,!1,null,null,null),O=V.exports;l()(V,{VApp:f["a"],VAppBar:p["a"],VAvatar:h["a"],VBtn:v["a"],VCard:d["a"],VCardActions:m["a"],VCardTitle:m["b"],VChip:b["a"],VContainer:y["a"],VContent:g["a"],VFlex:_["a"],VIcon:x["a"],VImg:w["a"],VLayout:C["a"],VSpacer:j["a"],VToolbarTitle:k["a"]});var P=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HelloWorld")},T=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),n("br"),t._v("please join our online\n        "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},E=[],q={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},I=q,L=Object(c["a"])(I,A,E,!1,null,null,null),F=L.exports;l()(L,{VContainer:y["a"],VFlex:_["a"],VImg:w["a"],VLayout:C["a"]});var M={components:{HelloWorld:F}},W=M,$=Object(c["a"])(W,S,T,!1,null,null,null),B=$.exports;n["a"].use(P["a"]);var D=new P["a"]({routes:[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),H=a("f309");a("5363");n["a"].use(H["a"]);var J=new H["a"]({icons:{iconfont:"mdi"}}),N=a("bc3a"),Q=a.n(N),R=a("a7fe"),z=a.n(R);n["a"].use(z.a,Q.a),n["a"].use(H["a"]),n["a"].config.productionTip=!1,new n["a"]({router:D,vuetify:J,render:function(t){return t(O)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.0c5e665e.js.map