"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[999],{24999:function(g,h,e){e.r(h),e.d(h,{amplify_s3_text_picker:function(){return C}});var P=e(8239),v=e(75134),T=e(47289),D=e(88774),c=e.n(D),_=e(65513),M=e(45013),O=e(53799),y=e(22594),I=e(30031),u=(e(3039),e(55210)),E=new M.k("S3TextPicker"),C=function(){function r(s){(0,v.Z)(this,r),(0,_.r)(this,s),this.contentType="text/*",this.level=y.A.Public,this.fallbackText=I.T.PICKER_TEXT}return(0,T.Z)(r,[{key:"handleInput",value:(s=(0,P.Z)(c().mark(function n(i){var t,o,f,k,p;return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(f=this.level,k=this.track,p=(void 0===(o=this.path)?"":o)+(0,u.c)(t=i.target.files[0],this.fileToKey),t){a.next=5;break}throw new Error("No file was selected");case 5:return a.prev=5,a.next=8,(0,u.p)(p,t,f,k,t.type,E);case 8:this.src=p,a.next=15;break;case 11:throw a.prev=11,a.t0=a.catch(5),E.debug(a.t0),new Error(a.t0);case 15:case"end":return a.stop()}},n,this,[[5,11]])})),function(n){return s.apply(this,arguments)})},{key:"render",value:function(){var l=this;return(0,_.h)(_.H,null,(0,_.h)("amplify-s3-text",{textKey:this.src,path:this.path,level:this.level,track:this.track,identityId:this.identityId,contentType:this.contentType,fallbackText:O.o.get(this.fallbackText)}),(0,_.h)("amplify-picker",{inputHandler:function(i){return l.handleInput(i)},acceptValue:"text/*"}))}}]),r;var s}()}}]);