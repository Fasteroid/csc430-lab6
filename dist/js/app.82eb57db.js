(function(){var t={5998:function(t,n,e){"use strict";var i=e(9242),r=e(3396);function o(t,n,e,i,o,c){const s=(0,r.up)("DetectImage");return(0,r.wg)(),(0,r.j4)(s,{msg:"What's in the picture?"})}var c=e(7139);const s=["src"],u={key:0};function a(t,n,i,o,a,p){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h1",null,(0,c.zw)(i.msg),1),(0,r._)("div",null,[(0,r._)("img",{class:"image",ref:"img",src:e(1810)("./"+p.getImgIndex+".jpg")},null,8,s)]),(0,r._)("div",null,[(0,r._)("button",{class:"button",onClick:n[0]||(n[0]=t=>p.next())},"Next")]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.predictions,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.index},(0,c.zw)(t.label)+": "+(0,c.zw)(t.probability.toFixed(0)+"%"),1)))),128)),a.predictions.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",u,"hmm....."))])}var p=e(3214),f="dalmatian\nice cream",g={name:"DetectImage",props:{msg:String},data(){return{image:0,numImages:10,labels:f,predictions:[]}},computed:{getImgIndex(){return`${this.image}`}},async mounted(){this.image=this.randomImage(),this.model=new p.f0,await this.model.loadModelAsync("models/model.json"),this.model=Object.freeze(this.model),this.labels=f.split("\n").map((t=>t.trim())),this.predict()},methods:{next(){this.image=this.randomImage(),this.predictions=[],setTimeout(this.predict,500)},randomImage(){let t=Math.floor(Math.random()*this.numImages);return t==this.image&&(t=(t+1)%this.numImages),t},async predict(){let t=await this.model.executeAsync(this.$refs.img),n=t[0];this.predictions=n.map(((t,n)=>({index:n,label:this.labels[n],probability:100*t})))}}},l=e(89);const d=(0,l.Z)(g,[["render",a],["__scopeId","data-v-22baa244"]]);var m=d,h={name:"App",components:{DetectImage:m}};const b=(0,l.Z)(h,[["render",o]]);var v=b;(0,i.ri)(v).mount("#app")},1810:function(t,n,e){var i={"./0.jpg":1359,"./1.jpg":7097,"./2.jpg":7253,"./3.jpg":9672,"./4.jpg":2668,"./5.jpg":1279,"./6.jpg":6245,"./7.jpg":9511,"./8.jpg":3782,"./9.jpg":3187};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=1810},1359:function(t,n,e){"use strict";t.exports=e.p+"img/0.c7626c85.jpg"},7097:function(t,n,e){"use strict";t.exports=e.p+"img/1.4c68f45b.jpg"},7253:function(t,n,e){"use strict";t.exports=e.p+"img/2.5fbc3616.jpg"},9672:function(t,n,e){"use strict";t.exports=e.p+"img/3.9abd054e.jpg"},2668:function(t,n,e){"use strict";t.exports=e.p+"img/4.02140ddd.jpg"},1279:function(t,n,e){"use strict";t.exports=e.p+"img/5.5d9d86f5.jpg"},6245:function(t,n,e){"use strict";t.exports=e.p+"img/6.a9e16b19.jpg"},9511:function(t,n,e){"use strict";t.exports=e.p+"img/7.bf0dc038.jpg"},3782:function(t,n,e){"use strict";t.exports=e.p+"img/8.4c2c4eba.jpg"},3187:function(t,n,e){"use strict";t.exports=e.p+"img/9.87f6c62d.jpg"},6944:function(){},4959:function(){},245:function(){},9103:function(){},3829:function(){},6892:function(){}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,i,r,o){if(!i){var c=1/0;for(p=0;p<t.length;p++){i=t[p][0],r=t[p][1],o=t[p][2];for(var s=!0,u=0;u<i.length;u++)(!1&o||c>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[u])}))?i.splice(u--,1):(s=!1,o<c&&(c=o));if(s){t.splice(p--,1);var a=r();void 0!==a&&(n=a)}}return n}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[i,r,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/csc430-lab6/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var r,o,c=i[0],s=i[1],u=i[2],a=0;if(c.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(u)var p=u(e)}for(n&&n(i);a<c.length;a++)o=c[a],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(p)},i=self["webpackChunkcsc430_lab6"]=self["webpackChunkcsc430_lab6"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(5998)}));i=e.O(i)})();
//# sourceMappingURL=app.82eb57db.js.map