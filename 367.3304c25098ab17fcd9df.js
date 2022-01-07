"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[367],{91367:function(H,C,n){n.r(C),n.d(C,{amplify_s3_album:function(){return O}});var v,g=n(26284),T=n(8239),A=n(75134),D=n(47289),M=n(88774),h=n.n(M),m=n(65513),w=n(45013),U=n(77),R=n(53799),K=n(22594),L=n(30031),W=n(84665),b=n(82522),E=n(55210),j=new Uint8Array(16);function x(){if(!v&&!(v="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(j)}var B=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function S(t){return"string"==typeof t&&B.test(t)}for(var o=[],k=0;k<256;++k)o.push((k+256).toString(16).substr(1));function Z(t,r,e){var a=(t=t||{}).random||(t.rng||x)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,r){e=e||0;for(var s=0;s<16;++s)r[e+s]=a[s];return r}return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(o[t[r+0]]+o[t[r+1]]+o[t[r+2]]+o[t[r+3]]+"-"+o[t[r+4]]+o[t[r+5]]+"-"+o[t[r+6]]+o[t[r+7]]+"-"+o[t[r+8]]+o[t[r+9]]+"-"+o[t[r+10]]+o[t[r+11]]+o[t[r+12]]+o[t[r+13]]+o[t[r+14]]+o[t[r+15]]).toLowerCase();if(!S(e))throw TypeError("Stringified UUID is invalid");return e}(a)}var f=new w.k("S3Album"),O=function(){function t(r){var e=this;(0,A.Z)(this,t),(0,m.r)(this,r),this.contentType="binary/octet-stream",this.level=K.A.Public,this.picker=!0,this.pickerText=L.T.PICKER_TEXT,this.albumItems=[],this.imgArr={},this.list=(0,T.Z)(h().mark(function a(){var s,d,l,c,u;return h().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(l=e.level,c=e.track,u=e.identityId,f.debug("Album path: "+(d=void 0===(s=e.path)?"":s)),b.Ke&&"function"==typeof b.Ke.list){i.next=4;break}throw new Error(W.d);case 4:return i.prev=4,i.next=7,b.Ke.list(d,{level:l,track:c,identityId:u});case 7:e.marshal(i.sent),i.next=14;break;case 11:i.prev=11,i.t0=i.catch(4),f.warn(i.t0);case 14:case"end":return i.stop()}},a,null,[[4,11]])})),this.marshal=function(a){a.forEach(function(l){var u=l.key.toLowerCase().split(".")[1];E.i.has(u)&&(!l.contentType||l.contentType&&"binary/octet-stream"===l.contentType)&&(l.contentType=e.getContentType(l))});var s=a.filter(function(l){return l.contentType&&l.contentType.startsWith("image/")}),d=e.filter?e.filter(s):s;d=e.sort?e.sort(d):d,e.albumItems=d,f.debug("album items",e.albumItems),e.constructImgArray(e.albumItems)},this.constructImgArray=function(a){a.map(function(s){e.imgArr["".concat(s.key)]=s.key})},this.handlePick=function(){var a=(0,T.Z)(h().mark(function s(d){var l,c,y,I,p,P;return h().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return y=e.level,I=e.track,p=(void 0===(c=e.path)?"":c)+(0,E.c)(l=d.target.files[0],e.fileToKey),_.prev=3,_.next=6,(0,E.p)(p,l,y,I,l.type,f);case 6:_.next=12;break;case 8:throw _.prev=8,_.t0=_.catch(3),f.error(_.t0),new Error(_.t0);case 12:Object.keys(e.imgArr).includes(p)?(e.albumItems=(0,g.Z)(e.albumItems),e.imgArr[p]="".concat(p,"-").concat(Z())):(P=[].concat((0,g.Z)(e.albumItems),(0,g.Z)(e.filter?e.filter([{key:p}]):[{key:p}])),e.albumItems=e.sort?e.sort(P):P);case 13:case"end":return _.stop()}},s,null,[[3,8]])}));return function(s){return a.apply(this,arguments)}}()}return(0,D.Z)(t,[{key:"getContentType",value:function(e){return(0,U.rI)(e.key,"image/*")}},{key:"componentWillLoad",value:function(){this.list()}},{key:"render",value:function(){var e=this;return(0,m.h)("div",null,(0,m.h)("div",{class:"album-container"},(0,m.h)("div",{class:"grid-row"},this.albumItems.map(function(a){return(0,m.h)("div",{class:"grid-item",key:"key-".concat(a.key)},(0,m.h)("amplify-s3-image",{key:e.imgArr[a.key],imgKey:a.key,level:e.level,path:e.path,identityId:e.identityId,track:e.track,handleOnError:e.handleOnError,handleOnLoad:e.handleOnLoad}),(0,m.h)("span",{class:"img-overlay"}))}))),this.picker&&(0,m.h)("amplify-picker",{pickerText:R.o.get(this.pickerText),inputHandler:function(s){return e.handlePick(s)},acceptValue:"image/*"}))}}]),t}();O.style=":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}"}}]);