"use strict";(self.webpackChunksparkworks_console=self.webpackChunksparkworks_console||[]).push([[152],{87152:function(K,m,a){a.r(m),a.d(m,{GroupModule:function(){return E}});var r=a(61116),d=a(11462),l=a(41190),f=a(42014),g=a(28886),s=a(32821),t=a(69536);function v(e,o){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t.TgZ(8,"a",7),t._UZ(9,"i",8),t.qZA(),t.qZA(),t.qZA()),2&e){var n=o.$implicit;t.xp6(2),t.hij(" ",n.group," "),t.xp6(2),t.hij(" ",n.attributes.name," "),t.xp6(2),t.hij(" ",n.attributes.description," "),t.xp6(2),t.MGl("routerLink","/console/groups/",n.group,"")}}var A=function(){function e(){this.groups=null,this.subtitle="This is some text within a card block."}return e.prototype.ngOnInit=function(){var o=this;g.b.get(s.x.apiName,s.x.paths.pathGroups,s.x.params).then(function(n){o.groups=n.data.groups,console.log(o.groups)}).catch(function(n){console.log(n.response)})},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:18,vars:1,consts:[[1,"card"],[1,"card-body"],[1,"card-title"],[1,"lstick"],[1,"table-responsive"],[1,"table","vm","no-th-brd","pro-of-month","mb-0","v-middle"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","btn-rounded","btn-xs",3,"routerLink"],[1,"fa","fa-arrow-right"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h4",2),t._UZ(3,"span",3),t._uU(4,"Group List"),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"table",5),t.TgZ(7,"thead"),t.TgZ(8,"tr"),t.TgZ(9,"th"),t._uU(10,"id"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Name"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Description"),t.qZA(),t._UZ(15,"th"),t.qZA(),t.qZA(),t.TgZ(16,"tbody"),t.YNc(17,v,10,4,"tr",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(17),t.Q6J("ngForOf",i.groups))},directives:[r.sg,l.yS],encapsulation:2}),e}(),Z=a(41543);function _(e,o){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.qZA()),2&e){var n=o.$implicit,i=t.oxw();t.xp6(2),t.Oqu(n),t.xp6(2),t.AsE("",i.sensorValues[n],"\xa0",i.sensorUnits[n],"")}}var T=function(){function e(o){this.modalService=o,this.objectKeys=Object.keys,this.sensorValues={},this.sensorUnits={}}return e.prototype.ngOnInit=function(){},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.FF))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-latest-table"]],inputs:{sensorValues:"sensorValues",sensorUnits:"sensorUnits"},decls:9,vars:1,consts:[[1,"table","vm","no-th-brd","pro-of-month","mb-0","v-middle"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.TgZ(0,"table",0),t.TgZ(1,"thead"),t.TgZ(2,"tr"),t.TgZ(3,"th"),t._uU(4,"measureName"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"value"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"tbody"),t.YNc(8,_,5,3,"tr",1),t.qZA(),t.qZA()),2&n&&(t.xp6(8),t.Q6J("ngForOf",i.objectKeys(i.sensorValues)))},directives:[r.sg],encapsulation:2}),e}(),h=a(33310),q=function(){return{delimiter:" and ",largest:1,round:!0}};function C(e,o){if(1&e){var n=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"h4",4),t._uU(2,"Latest Values "),t.TgZ(3,"small",5),t._uU(4),t.ALo(5,"humanizeDuration"),t.qZA(),t.qZA(),t.TgZ(6,"button",6),t.NdJ("click",function(){return t.CHM(n).$implicit.dismiss("Cross click")}),t.TgZ(7,"span",7),t._uU(8,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",8),t._UZ(10,"app-latest-table",9),t.qZA(),t.TgZ(11,"div",10),t.TgZ(12,"button",11),t.NdJ("click",function(){return t.CHM(n).$implicit.close("Close click")}),t._uU(13,"Close"),t.qZA(),t.qZA()}if(2&e){var i=t.oxw();t.xp6(4),t.hij(" (",t.xi3(5,3,i.nowTime-i.thing.lastUpdate,t.DdM(6,q))," ago) "),t.xp6(6),t.Q6J("sensorValues",i.sensorValues)("sensorUnits",i.sensorUnits)}}var y=function(){function e(o){this.modalService=o,this.objectKeys=Object.keys,this.thing={},this.sensorValues={},this.sensorUnits={},this.nowTime=(new Date).getTime()}return e.prototype.ngOnInit=function(){this.thing.hasOwnProperty("lastSensorValues")&&(this.sensorValues=this.thing.lastSensorValues),this.thing.hasOwnProperty("sensorUnits")&&(this.sensorUnits=this.thing.sensorUnits)},e.prototype.ngAfterViewInit=function(){},e.prototype.openModal=function(o){this.modalService.open(o,{size:"lg"})},e.\u0275fac=function(n){return new(n||e)(t.Y36(Z.FF))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-latest-modal"]],inputs:{thing:"thing"},decls:4,vars:0,consts:[["content3",""],[1,"btn","btn-primary","btn-rounded","btn-xs",3,"click"],[1,"fa","fa-th-list"],[1,"modal-header"],[1,"modal-title"],[1,"pull-right","text-muted"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"sensorValues","sensorUnits"],[1,"modal-footer"],["type","button",1,"btn","btn-light",3,"click"]],template:function(n,i){if(1&n){var u=t.EpF();t.YNc(0,C,14,7,"ng-template",null,0,t.W1O),t.TgZ(2,"button",1),t.NdJ("click",function(){t.CHM(u);var c=t.MAs(1);return i.openModal(c)}),t._UZ(3,"i",2),t.qZA()}},directives:[T],pipes:[h.Ol],encapsulation:2}),e}();function U(e,o){1&e&&t._UZ(0,"i",14)}function x(e,o){1&e&&t._UZ(0,"i",15)}var I=function(){return{delimiter:" and ",largest:1,round:!0}};function w(e,o){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.TgZ(6,"a",8),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"td"),t.YNc(9,U,1,0,"i",9),t.YNc(10,x,1,0,"i",10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"humanizeDuration"),t.qZA(),t.TgZ(14,"td"),t._UZ(15,"app-latest-modal",11),t._uU(16," \xa0 "),t.TgZ(17,"a",12),t._UZ(18,"i",13),t.qZA(),t.qZA(),t.qZA()),2&e){var n=o.$implicit,i=t.oxw(2);t.xp6(2),t.Oqu(n.thing),t.xp6(2),t.Oqu(n.typeName),t.xp6(2),t.MGl("routerLink","/console/groups/",n.group,""),t.xp6(1),t.Oqu(n.group),t.xp6(2),t.Q6J("ngIf","ONLINE"===n.status),t.xp6(1),t.Q6J("ngIf","OFFLINE"===n.status),t.xp6(2),t.hij(" ",t.xi3(13,10,i.nowTime-n.lastUpdate,t.DdM(13,I))," ago "),t.xp6(3),t.Q6J("thing",n),t.xp6(2),t.hYB("routerLink","/console/groups/",n.group,"/thing/",n.thing,"")}}function O(e,o){if(1&e&&(t.TgZ(0,"table",6),t.TgZ(1,"thead"),t.TgZ(2,"tr"),t.TgZ(3,"th"),t._uU(4,"id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"type"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"group"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"online"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"updated"),t.qZA(),t._UZ(13,"th"),t.qZA(),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,w,19,14,"tr",7),t.qZA(),t.qZA()),2&e){var n=t.oxw();t.xp6(15),t.Q6J("ngForOf",n.things)}}var b=function(){function e(){this.things=null,this.nowTime=(new Date).getTime(),this.subtitle="This is some text within a card block."}return e.prototype.ngOnInit=function(){},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-things-table"]],inputs:{things:"things"},decls:7,vars:1,consts:[[1,"card"],[1,"card-body"],[1,"card-title"],[1,"lstick"],[1,"table-responsive"],["class","table vm no-th-brd pro-of-month mb-0 v-middle",4,"ngIf"],[1,"table","vm","no-th-brd","pro-of-month","mb-0","v-middle"],[4,"ngFor","ngForOf"],[3,"routerLink"],["class","fa fa-check-circle fa-2x","style","color: #06d79c",4,"ngIf"],["class","fa fa-times-circle fa-2x","style","color: #6c757d",4,"ngIf"],[3,"thing"],["type","button",1,"btn","btn-primary","btn-rounded","btn-xs",3,"routerLink"],[1,"fa","fa-arrow-right"],[1,"fa","fa-check-circle","fa-2x",2,"color","#06d79c"],[1,"fa","fa-times-circle","fa-2x",2,"color","#6c757d"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h4",2),t._UZ(3,"span",3),t._uU(4,"Things List"),t.qZA(),t.TgZ(5,"div",4),t.YNc(6,O,16,1,"table",5),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(6),t.Q6J("ngIf",null!==i.things))},directives:[r.O5,r.sg,l.yS,y],pipes:[h.Ol],encapsulation:2}),e}();function N(e,o){if(1&e&&t._UZ(0,"app-things-table",9),2&e){var n=t.oxw(2);t.Q6J("things",n.things)}}function G(e,o){if(1&e&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"h4",5),t._uU(5),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",7),t.YNc(9,N,1,1,"app-things-table",8),t.qZA(),t.qZA()),2&e){var n=t.oxw();t.xp6(5),t.Oqu(n.group.attributes.name),t.xp6(2),t.Oqu(n.group.attributes.description),t.xp6(2),t.Q6J("ngIf",null!==n.things)}}var L=function(){function e(o){this.activatedRoute=o,this.group=null,this.things=null,this.subtitle="This is some text within a card block.",this.groupId=null}return e.prototype.ngOnInit=function(){var o=this;this.activatedRoute.paramMap.subscribe(function(n){o.groupId=n.get("groupId")}),g.b.get(s.x.apiName,s.x.paths.pathGroup+this.groupId,s.x.params).then(function(n){o.group=n.data}).catch(function(n){console.log(n.response)}),g.b.get(s.x.apiName,s.x.paths.pathGroup+this.groupId+s.x.paths.pathThings,s.x.params).then(function(n){o.things=n.data.things,console.log(o.things)}).catch(function(n){console.log(n.response)})},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-lg-3","col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"col-lg-9","col-md-6"],[3,"things",4,"ngIf"],[3,"things"]],template:function(n,i){1&n&&t.YNc(0,G,10,3,"div",0),2&n&&t.Q6J("ngIf",null!==i.group)},directives:[r.O5,b],encapsulation:2}),e}(),k=function(){function e(){this.things=null,this.subtitle="This is some text within a card block."}return e.prototype.ngOnInit=function(){var o=this;g.b.get(s.x.apiName,s.x.paths.pathThings,s.x.params).then(function(n){o.things=n.data.things,console.log(o.things)}).catch(function(n){console.log(n.response)})},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"things"]],template:function(n,i){1&n&&t._UZ(0,"app-things-table",0),2&n&&t.Q6J("things",i.things)},directives:[b],encapsulation:2}),e}();function V(e,o){if(1&e&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&e){var n=o.$implicit;t.xp6(1),t.Oqu(n)}}function F(e,o){1&e&&t._UZ(0,"img",12)}function M(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Error retrieving data or no data in this interval."),t.qZA())}function J(e,o){if(1&e&&t._UZ(0,"canvas",13),2&e){var n=t.oxw();t.Q6J("datasets",n.tsChartData)("labels",n.tsChartXLabels)("options",n.tsChartOptions)("colors",n.tsChartColors)("legend",n.tsChartLegend)("chartType",n.tsChartType)}}var Y=function(){function e(o){this.activatedRoute=o,this.objectKeys=Object.keys,this.loading=!1,this.dataError=!1,this.sensorValues={},this.sensorUnits={},this.measureNames=[],this.timeOffset=216e5,this.nowTime=(new Date).getTime(),this.startTime=(new Date).getTime()-this.timeOffset,this.tsChartData=[{data:[],label:"Sales"}],this.tsChartXLabels=[],this.tsChartOptions={scales:{yAxes:[{ticks:{beginAtZero:!1},gridLines:{color:"rgba(0, 0, 0, 0.1)"}}],xAxes:[{type:"time",gridLines:{color:"rgba(0, 0, 0, 0.1)"}}]},lineTension:10,responsive:!0,maintainAspectRatio:!1,elements:{line:{tension:0}}},this.tsChartColors=[{backgroundColor:"rgba(6,215,156,0.0)",borderColor:"rgba(57,139,247,1)",pointBackgroundColor:"rgba(57,139,247,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(57,139,247,0.5)"},{backgroundColor:"rgba(57,139,247,0.0)",borderColor:"rgba(57,139,247,1)",pointBackgroundColor:"rgba(57,139,247,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(57,139,247,0.5)"}],this.tsChartLegend=!1,this.tsChartType="line",this.groupId=null,this.thingId=null,this.measureName=""}return e.prototype.selectMeasure=function(o){var n=this;this.loading=!0,this.dataError=!1,this.measureName=o,this.tsChartData[0].label=this.measureName,this.nowTime=(new Date).getTime(),this.startTime=this.nowTime-this.timeOffset,g.b.post(s.x.apiName,s.x.paths.pathGroup+this.groupId+s.x.paths.pathThing+this.thingId+"/"+this.measureName+"/query/timerange",{body:{from:this.startTime,to:this.nowTime}}).then(function(i){console.log(i);var u=i.data[n.measureName];n.tsChartData[0].data=u.map(function(p){return p.value}),n.tsChartXLabels=u.map(function(p){return p.timestamp}),n.loading=!1}).catch(function(i){n.loading=!1,n.dataError=!0})},e.prototype.ngOnInit=function(){var o=this;this.activatedRoute.paramMap.subscribe(function(n){o.groupId=n.get("groupId"),o.thingId=n.get("thingId")}),this.measureNames=Object.keys(this.sensorValues),this.selectMeasure(this.measureNames[0])},e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ts-graph"]],inputs:{sensorValues:"sensorValues",sensorUnits:"sensorUnits"},decls:14,vars:4,consts:[[1,"card"],[1,"card-body"],[1,"d-flex"],[1,"card-title","m-b-5"],[1,"lstick"],[1,"ml-auto"],["ng-options","",1,"custom-select","b-0",3,"change"],[4,"ngFor","ngForOf"],[1,"mt-4","text-center",2,"height","300px","min-height","300px"],["src","assets/images/loading.gif","style","width: 60%; max-width: 200px","alt","loading",4,"ngIf"],[4,"ngIf"],["baseChart","",3,"datasets","labels","options","colors","legend","chartType",4,"ngIf"],["src","assets/images/loading.gif","alt","loading",2,"width","60%","max-width","200px"],["baseChart","",3,"datasets","labels","options","colors","legend","chartType"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"h3",3),t._UZ(5,"span",4),t._uU(6,"Last 6h data "),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"select",6),t.NdJ("change",function(p){return i.selectMeasure(p.target.value)}),t.YNc(9,V,2,1,"option",7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",8),t.YNc(11,F,1,0,"img",9),t.YNc(12,M,2,0,"div",10),t.YNc(13,J,1,6,"canvas",11),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(9),t.Q6J("ngForOf",i.objectKeys(i.sensorValues)),t.xp6(2),t.Q6J("ngIf",i.loading),t.xp6(1),t.Q6J("ngIf",!i.loading&&i.dataError),t.xp6(1),t.Q6J("ngIf",!i.loading&&!i.dataError))},directives:[r.sg,r.O5,d.YN,d.Kr,f.jh],styles:[""]}),e}();function j(e,o){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.qZA()),2&e){var n=o.$implicit,i=t.oxw(3);t.xp6(2),t.Oqu(n),t.xp6(2),t.Oqu(i.thing.attributes[n])}}function Q(e,o){if(1&e&&(t.TgZ(0,"table",16),t.TgZ(1,"thead"),t.TgZ(2,"tr"),t.TgZ(3,"th"),t._uU(4,"key"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"value"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"tbody"),t.YNc(8,j,5,2,"tr",17),t.qZA(),t.qZA()),2&e){var n=t.oxw(2);t.xp6(8),t.Q6J("ngForOf",n.objectKeys(n.thing.attributes))}}var D=function(){return{delimiter:" and ",largest:1,round:!0}};function S(e,o){if(1&e&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"h4",5),t._UZ(5,"span",6),t._uU(6),t.qZA(),t.TgZ(7,"p",7),t._uU(8),t.TgZ(9,"span",8),t._uU(10,"group"),t.qZA(),t.qZA(),t.TgZ(11,"p",7),t._uU(12),t.TgZ(13,"span",8),t._uU(14,"typeName"),t.qZA(),t.qZA(),t.TgZ(15,"p",7),t._uU(16),t.TgZ(17,"span",8),t._uU(18,"status"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",9),t.TgZ(20,"div",3),t.TgZ(21,"div",4),t.TgZ(22,"h4",5),t._UZ(23,"span",6),t._uU(24,"Attributes"),t.qZA(),t.TgZ(25,"div",10),t.YNc(26,Q,9,1,"table",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",12),t.TgZ(28,"div",3),t.TgZ(29,"div",4),t.TgZ(30,"h4",5),t._UZ(31,"span",6),t._uU(32,"Latest Values "),t.TgZ(33,"small",13),t._uU(34),t.ALo(35,"humanizeDuration"),t.qZA(),t.qZA(),t._UZ(36,"app-latest-table",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",15),t._UZ(38,"app-ts-graph",14),t.qZA(),t.qZA()),2&e){var n=t.oxw();t.xp6(6),t.Oqu(n.thing.thing),t.xp6(2),t.hij(" ",n.thing.group,"\xa0"),t.xp6(4),t.hij(" ",n.thing.typeName,"\xa0"),t.xp6(4),t.hij(" ",n.thing.status,"\xa0"),t.xp6(10),t.Q6J("ngIf",null!==n.thing),t.xp6(8),t.hij(" (",t.xi3(35,10,n.nowTime-n.thing.lastUpdate,t.DdM(13,D))," ago) "),t.xp6(2),t.Q6J("sensorValues",n.sensorValues)("sensorUnits",n.sensorUnits),t.xp6(2),t.Q6J("sensorValues",n.sensorValues)("sensorUnits",n.sensorUnits)}}var X=function(){function e(o){this.activatedRoute=o,this.objectKeys=Object.keys,this.thing=null,this.sensorValues={},this.sensorUnits={},this.nowTime=(new Date).getTime(),this.subtitle="This is some text within a card block.",this.groupId=null,this.thingId=null}return e.prototype.ngOnInit=function(){var o=this;this.activatedRoute.paramMap.subscribe(function(n){o.groupId=n.get("groupId"),o.thingId=n.get("thingId")}),g.b.get(s.x.apiName,s.x.paths.pathGroup+this.groupId+s.x.paths.pathThing+this.thingId,s.x.params).then(function(n){o.thing=n.data,o.thing.hasOwnProperty("lastSensorValues")&&(o.sensorValues=o.thing.lastSensorValues),o.thing.hasOwnProperty("sensorUnits")&&(o.sensorUnits=o.thing.sensorUnits),console.log(o.thing)}).catch(function(n){console.log(n.response)})},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-lg-3","col-md-6"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"lstick"],[1,"card-text"],[1,"label","label-info","label-rounded"],[1,"col-lg-9","col-md-6"],[1,"table-responsive"],["class","table vm no-th-brd pro-of-month mb-0 v-middle",4,"ngIf"],[1,"col-lg-4","col-md-4"],[1,"pull-right","text-muted"],[3,"sensorValues","sensorUnits"],[1,"col-lg-8","col-md-8"],[1,"table","vm","no-th-brd","pro-of-month","mb-0","v-middle"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&t.YNc(0,S,39,14,"div",0),2&n&&t.Q6J("ngIf",null!==i.thing)},directives:[r.O5,T,Y,r.sg],pipes:[h.Ol],encapsulation:2}),e}(),B=[{path:"groupsstart",data:{title:"Groups",urls:[{title:"Groups",url:"/groupsstart"},{title:"Groups"}]},component:function(){function e(o,n,i){this.zone=o,this.location=n,this.router=i}return e.prototype.ngOnInit=function(){this.location.replaceState("/console/groups"),window.location.reload()},e.prototype.ngAfterViewInit=function(){},e.\u0275fac=function(n){return new(n||e)(t.Y36(t.R0b),t.Y36(r.Ye),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:0,vars:0,template:function(n,i){},encapsulation:2}),e}()},{path:"groups",data:{title:"Groups",urls:[{title:"Groups",url:"/groups"},{title:"Groups"}]},component:A},{path:"groups/:groupId",data:{title:"Group",urls:[{title:"Group",url:"/groups/:groupId"},{title:"Group"}]},component:L},{path:"things",data:{title:"Things",urls:[{title:"Things",url:"/things"},{title:"Things"}]},component:k},{path:"groups/:groupId/thing/:thingId",data:{title:"Thing",urls:[{title:"Thing",url:"/groups/:groupId/thing/:thingId"},{title:"Thing"}]},component:X}],E=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.u5,r.ez,l.Bz.forChild(B),f.m9,h.nq]]}),e}()}}]);