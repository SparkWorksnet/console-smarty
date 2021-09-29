(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[346],{

/***/ 84253:
/*!***********************************************************!*\
  !*** ./src/app/group/group-components/group.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupComponent": function() { return /* binding */ GroupComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/api */ 17915);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _things_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./things-table.component */ 58929);






function GroupComponent_div_0_app_things_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-things-table", 9);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("things", ctx_r1.things);
} }
function GroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, GroupComponent_div_0_app_things_table_9_Template, 1, 1, "app-things-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.group.attributes.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.group.attributes.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.things !== null);
} }
var GroupComponent = /** @class */ (function () {
    function GroupComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.group = null;
        this.things = null;
        this.subtitle = 'This is some text within a card block.';
        this.groupId = null;
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.groupId = params.get('groupId');
        });
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.group = response.data;
        })
            .catch(function (error) {
            console.log(error.response);
        });
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThings, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.things = response.data.things;
            console.log(_this.things);
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    GroupComponent.prototype.ngAfterViewInit = function () {
    };
    GroupComponent.ɵfac = function GroupComponent_Factory(t) { return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
    GroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GroupComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "col-lg-9", "col-md-6"], [3, "things", 4, "ngIf"], [3, "things"]], template: function GroupComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GroupComponent_div_0_Template, 10, 3, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.group !== null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _things_table_component__WEBPACK_IMPORTED_MODULE_1__.ThingsTableComponent], encapsulation: 2 });
    return GroupComponent;
}());



/***/ }),

/***/ 6524:
/*!************************************************************!*\
  !*** ./src/app/group/group-components/groups.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsComponent": function() { return /* binding */ GroupsComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ 17915);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);





function GroupsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", group_r1.group, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", group_r1.attributes.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", group_r1.attributes.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/console/groups/", group_r1.group, "");
} }
var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
        this.groups = null;
        this.subtitle = 'This is some text within a card block.';
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroups, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.groups = response.data.groups;
            console.log(_this.groups);
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    GroupsComponent.prototype.ngAfterViewInit = function () {
    };
    GroupsComponent.ɵfac = function GroupsComponent_Factory(t) { return new (t || GroupsComponent)(); };
    GroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GroupsComponent, selectors: [["ng-component"]], decls: 18, vars: 1, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "lstick"], [1, "table-responsive"], [1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "btn-xs", 3, "routerLink"], [1, "fa", "fa-arrow-right"]], template: function GroupsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Groups List");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "id");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, GroupsComponent_tr_17_Template, 10, 4, "tr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groups);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], encapsulation: 2 });
    return GroupsComponent;
}());



/***/ }),

/***/ 9698:
/*!******************************************************************!*\
  !*** ./src/app/group/group-components/latest-modal.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatestModalComponent": function() { return /* binding */ LatestModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _latest_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latest-table.component */ 8189);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-humanize-duration */ 99778);




var _c0 = function () { return { delimiter: " and ", largest: 1, round: true }; };
function LatestModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Latest Values ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "humanizeDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LatestModalComponent_ng_template_0_Template_button_click_6_listener() { var modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-latest-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LatestModalComponent_ng_template_0_Template_button_click_12_listener() { var modal_r2 = ctx.$implicit; return modal_r2.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, ctx_r1.nowTime - ctx_r1.thing.lastUpdate, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0)), " ago) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sensorValues", ctx_r1.sensorValues)("sensorUnits", ctx_r1.sensorUnits);
} }
var LatestModalComponent = /** @class */ (function () {
    function LatestModalComponent(modalService) {
        this.modalService = modalService;
        this.objectKeys = Object.keys;
        this.thing = {};
        this.sensorValues = {};
        this.sensorUnits = {};
        this.nowTime = new Date().getTime();
    }
    LatestModalComponent.prototype.ngOnInit = function () {
        if (this.thing.hasOwnProperty('lastSensorValues')) {
            this.sensorValues = this.thing['lastSensorValues'];
        }
        if (this.thing.hasOwnProperty('sensorUnits')) {
            this.sensorUnits = this.thing['sensorUnits'];
        }
    };
    LatestModalComponent.prototype.ngAfterViewInit = function () {
    };
    LatestModalComponent.prototype.openModal = function (content3) {
        this.modalService.open(content3, { size: 'lg' });
    };
    LatestModalComponent.ɵfac = function LatestModalComponent_Factory(t) { return new (t || LatestModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
    LatestModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LatestModalComponent, selectors: [["app-latest-modal"]], inputs: { thing: "thing" }, decls: 4, vars: 0, consts: [["content3", ""], [1, "btn", "btn-primary", "btn-rounded", "btn-xs", 3, "click"], [1, "fa", "fa-th-list"], [1, "modal-header"], [1, "modal-title"], [1, "pull-right", "text-muted"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "sensorValues", "sensorUnits"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function LatestModalComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LatestModalComponent_ng_template_0_Template, 14, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LatestModalComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx.openModal(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_latest_table_component__WEBPACK_IMPORTED_MODULE_0__.LatestTableComponent], pipes: [ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_3__.NgxHumanizeDurationPipe], encapsulation: 2 });
    return LatestModalComponent;
}());



/***/ }),

/***/ 8189:
/*!******************************************************************!*\
  !*** ./src/app/group/group-components/latest-table.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatestTableComponent": function() { return /* binding */ LatestTableComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);



function LatestTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sensor_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sensor_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.sensorValues[sensor_r1], "\u00A0", ctx_r0.sensorUnits[sensor_r1], "");
} }
var LatestTableComponent = /** @class */ (function () {
    function LatestTableComponent(modalService) {
        this.modalService = modalService;
        this.objectKeys = Object.keys;
        this.sensorValues = {};
        this.sensorUnits = {};
    }
    LatestTableComponent.prototype.ngOnInit = function () {
    };
    LatestTableComponent.prototype.ngAfterViewInit = function () {
    };
    LatestTableComponent.ɵfac = function LatestTableComponent_Factory(t) { return new (t || LatestTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
    LatestTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatestTableComponent, selectors: [["app-latest-table"]], inputs: { sensorValues: "sensorValues", sensorUnits: "sensorUnits" }, decls: 9, vars: 1, consts: [[1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle"], [4, "ngFor", "ngForOf"]], template: function LatestTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "measureName");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "value");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LatestTableComponent_tr_8_Template, 5, 3, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.sensorValues));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });
    return LatestTableComponent;
}());



/***/ }),

/***/ 84296:
/*!***********************************************************!*\
  !*** ./src/app/group/group-components/thing.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingComponent": function() { return /* binding */ ThingComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/api */ 17915);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _latest_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./latest-table.component */ 8189);
/* harmony import */ var _ts_graph_ts_graph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts-graph/ts-graph.component */ 8406);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-humanize-duration */ 99778);








function ThingComponent_div_0_table_26_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var attribute_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](attribute_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.thing.attributes[attribute_r3]);
} }
function ThingComponent_div_0_table_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "key");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ThingComponent_div_0_table_26_tr_8_Template, 5, 2, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.objectKeys(ctx_r1.thing.attributes));
} }
var _c0 = function () { return { delimiter: " and ", largest: 1, round: true }; };
function ThingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "typeName");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ThingComponent_div_0_table_26_Template, 9, 1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Latest Values ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "humanizeDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "app-latest-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "app-ts-graph", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.thing.thing);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.thing.group, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.thing.typeName, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.thing.status, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.thing !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](35, 10, ctx_r0.nowTime - ctx_r0.thing.lastUpdate, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0)), " ago) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sensorValues", ctx_r0.sensorValues)("sensorUnits", ctx_r0.sensorUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sensorValues", ctx_r0.sensorValues)("sensorUnits", ctx_r0.sensorUnits);
} }
var ThingComponent = /** @class */ (function () {
    function ThingComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.objectKeys = Object.keys;
        this.thing = null;
        this.sensorValues = {};
        this.sensorUnits = {};
        this.nowTime = new Date().getTime();
        this.subtitle = 'This is some text within a card block.';
        this.groupId = null;
        this.thingId = null;
    }
    ThingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.groupId = params.get('groupId');
            _this.thingId = params.get('thingId');
        });
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_4__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThing + this.thingId, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.thing = response.data;
            if (_this.thing.hasOwnProperty('lastSensorValues')) {
                _this.sensorValues = _this.thing['lastSensorValues'];
            }
            if (_this.thing.hasOwnProperty('sensorUnits')) {
                _this.sensorUnits = _this.thing['sensorUnits'];
            }
            console.log(_this.thing);
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    ThingComponent.prototype.ngAfterViewInit = function () {
    };
    ThingComponent.ɵfac = function ThingComponent_Factory(t) { return new (t || ThingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    ThingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ThingComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "lstick"], [1, "card-text"], [1, "label", "label-info", "label-rounded"], [1, "col-lg-9", "col-md-6"], [1, "table-responsive"], ["class", "table vm no-th-brd pro-of-month mb-0 v-middle", 4, "ngIf"], [1, "col-lg-4", "col-md-4"], [1, "pull-right", "text-muted"], [3, "sensorValues", "sensorUnits"], [1, "col-lg-8", "col-md-8"], [1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle"], [4, "ngFor", "ngForOf"]], template: function ThingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThingComponent_div_0_Template, 39, 14, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.thing !== null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _latest_table_component__WEBPACK_IMPORTED_MODULE_1__.LatestTableComponent, _ts_graph_ts_graph_component__WEBPACK_IMPORTED_MODULE_2__.TsGraphComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_7__.NgxHumanizeDurationPipe], encapsulation: 2 });
    return ThingComponent;
}());



/***/ }),

/***/ 58929:
/*!******************************************************************!*\
  !*** ./src/app/group/group-components/things-table.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingsTableComponent": function() { return /* binding */ ThingsTableComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _latest_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latest-modal.component */ 9698);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-humanize-duration */ 99778);





function ThingsTableComponent_table_6_tr_15_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 14);
} }
function ThingsTableComponent_table_6_tr_15_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 15);
} }
var _c0 = function () { return { delimiter: " and ", largest: 1, round: true }; };
function ThingsTableComponent_table_6_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ThingsTableComponent_table_6_tr_15_i_9_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ThingsTableComponent_table_6_tr_15_i_10_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "humanizeDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-latest-modal", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var thing_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](thing_r2.thing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](thing_r2.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/console/groups/", thing_r2.group, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](thing_r2.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", thing_r2.status === "ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", thing_r2.status === "OFFLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 10, ctx_r1.nowTime - thing_r2.lastUpdate, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0)), " ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("thing", thing_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/console/groups/", thing_r2.group, "/thing/", thing_r2.thing, "");
} }
function ThingsTableComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "online");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ThingsTableComponent_table_6_tr_15_Template, 19, 14, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.things);
} }
var ThingsTableComponent = /** @class */ (function () {
    function ThingsTableComponent() {
        this.things = null;
        this.nowTime = new Date().getTime();
        this.subtitle = 'This is some text within a card block.';
    }
    ThingsTableComponent.prototype.ngOnInit = function () {
    };
    ThingsTableComponent.prototype.ngAfterViewInit = function () {
    };
    ThingsTableComponent.ɵfac = function ThingsTableComponent_Factory(t) { return new (t || ThingsTableComponent)(); };
    ThingsTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThingsTableComponent, selectors: [["app-things-table"]], inputs: { things: "things" }, decls: 7, vars: 1, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [1, "lstick"], [1, "table-responsive"], ["class", "table vm no-th-brd pro-of-month mb-0 v-middle", 4, "ngIf"], [1, "table", "vm", "no-th-brd", "pro-of-month", "mb-0", "v-middle"], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["class", "fa fa-check-circle fa-2x", "style", "color: #06d79c", 4, "ngIf"], ["class", "fa fa-times-circle fa-2x", "style", "color: #6c757d", 4, "ngIf"], [3, "thing"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", "btn-xs", 3, "routerLink"], [1, "fa", "fa-arrow-right"], [1, "fa", "fa-check-circle", "fa-2x", 2, "color", "#06d79c"], [1, "fa", "fa-times-circle", "fa-2x", 2, "color", "#6c757d"]], template: function ThingsTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Things List");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ThingsTableComponent_table_6_Template, 16, 1, "table", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.things !== null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _latest_modal_component__WEBPACK_IMPORTED_MODULE_0__.LatestModalComponent], pipes: [ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_4__.NgxHumanizeDurationPipe], encapsulation: 2 });
    return ThingsTableComponent;
}());



/***/ }),

/***/ 34201:
/*!************************************************************!*\
  !*** ./src/app/group/group-components/things.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingsComponent": function() { return /* binding */ ThingsComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ 17915);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _things_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./things-table.component */ 58929);




var ThingsComponent = /** @class */ (function () {
    function ThingsComponent() {
        this.things = null;
        this.subtitle = 'This is some text within a card block.';
    }
    ThingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.get(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThings, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.params)
            .then(function (response) {
            _this.things = response.data.things;
            console.log(_this.things);
        })
            .catch(function (error) {
            console.log(error.response);
        });
    };
    ThingsComponent.prototype.ngAfterViewInit = function () {
    };
    ThingsComponent.ɵfac = function ThingsComponent_Factory(t) { return new (t || ThingsComponent)(); };
    ThingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ThingsComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "things"]], template: function ThingsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-things-table", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("things", ctx.things);
        } }, directives: [_things_table_component__WEBPACK_IMPORTED_MODULE_1__.ThingsTableComponent], encapsulation: 2 });
    return ThingsComponent;
}());



/***/ }),

/***/ 8406:
/*!***********************************************************************!*\
  !*** ./src/app/group/group-components/ts-graph/ts-graph.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TsGraphComponent": function() { return /* binding */ TsGraphComponent; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ 17915);
/* harmony import */ var _shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/api.config */ 57778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 86178);







function TsGraphComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sensor_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sensor_r4);
} }
function TsGraphComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
} }
function TsGraphComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Error retrieving data or no data in this interval.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TsGraphComponent_canvas_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 13);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r3.tsChartData)("labels", ctx_r3.tsChartXLabels)("options", ctx_r3.tsChartOptions)("colors", ctx_r3.tsChartColors)("legend", ctx_r3.tsChartLegend)("chartType", ctx_r3.tsChartType);
} }
var TsGraphComponent = /** @class */ (function () {
    function TsGraphComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.objectKeys = Object.keys;
        this.loading = false;
        this.dataError = false;
        this.sensorValues = {};
        this.sensorUnits = {};
        this.measureNames = [];
        this.timeOffset = 6 * 60 * 60 * 1000;
        this.nowTime = new Date().getTime();
        this.startTime = new Date().getTime() - this.timeOffset;
        this.tsChartData = [{ data: [], label: 'Sales' }];
        this.tsChartXLabels = [];
        this.tsChartOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: false
                        },
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ],
                xAxes: [
                    {
                        type: 'time',
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ]
            },
            lineTension: 10,
            responsive: true,
            maintainAspectRatio: false,
            elements: { line: { tension: 0 } }
        };
        this.tsChartColors = [
            {
                // grey
                backgroundColor: 'rgba(6,215,156,0.0)',
                borderColor: 'rgba(57,139,247,1)',
                pointBackgroundColor: 'rgba(57,139,247,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(57,139,247,0.5)'
            },
            {
                // dark grey
                backgroundColor: 'rgba(57,139,247,0.0)',
                borderColor: 'rgba(57,139,247,1)',
                pointBackgroundColor: 'rgba(57,139,247,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(57,139,247,0.5)'
            }
        ];
        this.tsChartLegend = false;
        this.tsChartType = 'line';
        this.groupId = null;
        this.thingId = null;
        this.measureName = '';
    }
    TsGraphComponent.prototype.selectMeasure = function (meas) {
        var _this = this;
        this.loading = true;
        this.dataError = false;
        this.measureName = meas;
        this.tsChartData[0]['label'] = this.measureName;
        this.nowTime = new Date().getTime();
        this.startTime = this.nowTime - this.timeOffset;
        _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__.API.post(_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.apiName, _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathGroup + this.groupId + _shared_api_config__WEBPACK_IMPORTED_MODULE_0__.ApiConfig.paths.pathThing + this.thingId + '/'
            + this.measureName + '/query/timerange', { body: { from: this.startTime, to: this.nowTime } })
            .then(function (response) {
            console.log(response);
            var d = response.data[_this.measureName];
            _this.tsChartData[0]['data'] = d.map(function (e) {
                return e.value;
            });
            _this.tsChartXLabels = d.map(function (e) {
                return e.timestamp;
            });
            _this.loading = false;
        })
            .catch(function (error) {
            _this.loading = false;
            _this.dataError = true;
        });
    };
    TsGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.groupId = params.get('groupId');
            _this.thingId = params.get('thingId');
        });
        this.measureNames = Object.keys(this.sensorValues);
        this.selectMeasure(this.measureNames[0]);
    };
    TsGraphComponent.ɵfac = function TsGraphComponent_Factory(t) { return new (t || TsGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
    TsGraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TsGraphComponent, selectors: [["app-ts-graph"]], inputs: { sensorValues: "sensorValues", sensorUnits: "sensorUnits" }, decls: 14, vars: 4, consts: [[1, "card"], [1, "card-body"], [1, "d-flex"], [1, "card-title", "m-b-5"], [1, "lstick"], [1, "ml-auto"], ["ng-options", "", 1, "custom-select", "b-0", 3, "change"], [4, "ngFor", "ngForOf"], [1, "mt-4", "text-center", 2, "height", "300px", "min-height", "300px"], ["src", "assets/images/loading.gif", "style", "width: 60%; max-width: 200px", "alt", "loading", 4, "ngIf"], [4, "ngIf"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", 4, "ngIf"], ["src", "assets/images/loading.gif", "alt", "loading", 2, "width", "60%", "max-width", "200px"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType"]], template: function TsGraphComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Last 6h data ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TsGraphComponent_Template_select_change_8_listener($event) { return ctx.selectMeasure($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TsGraphComponent_option_9_Template, 2, 1, "option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TsGraphComponent_img_11_Template, 1, 0, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TsGraphComponent_div_12_Template, 2, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TsGraphComponent_canvas_13_Template, 1, 6, "canvas", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.objectKeys(ctx.sensorValues));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.dataError);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__.BaseChartDirective], styles: [""] });
    return TsGraphComponent;
}());



/***/ }),

/***/ 99346:
/*!***************************************!*\
  !*** ./src/app/group/group.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupModule": function() { return /* binding */ GroupModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _group_components_groups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-components/groups.component */ 6524);
/* harmony import */ var _group_components_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-components/group.component */ 84253);
/* harmony import */ var _group_components_things_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-components/things.component */ 34201);
/* harmony import */ var _group_components_things_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-components/things-table.component */ 58929);
/* harmony import */ var _group_components_latest_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-components/latest-modal.component */ 9698);
/* harmony import */ var _group_components_thing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-components/thing.component */ 84296);
/* harmony import */ var _group_components_latest_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-components/latest-table.component */ 8189);
/* harmony import */ var ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-humanize-duration */ 99778);
/* harmony import */ var _group_components_ts_graph_ts_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-components/ts-graph/ts-graph.component */ 8406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);















var routes = [
    {
        path: 'groups',
        data: {
            title: 'Groups',
            urls: [{ title: 'Groups', url: '/groups' }, { title: 'Groups' }],
        },
        component: _group_components_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent,
    },
    {
        path: 'groups/:groupId',
        data: {
            title: 'Group',
            urls: [{ title: 'Group', url: '/groups/:groupId' }, { title: 'Group' }],
        },
        component: _group_components_group_component__WEBPACK_IMPORTED_MODULE_1__.GroupComponent,
    },
    {
        path: 'things',
        data: {
            title: 'Things',
            urls: [{ title: 'Things', url: '/things' }, { title: 'Things' }],
        },
        component: _group_components_things_component__WEBPACK_IMPORTED_MODULE_2__.ThingsComponent,
    },
    {
        path: 'groups/:groupId/thing/:thingId',
        data: {
            title: 'Thing',
            urls: [{ title: 'Thing', url: '/groups/:groupId/thing/:thingId' }, { title: 'Thing' }],
        },
        component: _group_components_thing_component__WEBPACK_IMPORTED_MODULE_5__.ThingComponent,
    }
];
var GroupModule = /** @class */ (function () {
    function GroupModule() {
    }
    GroupModule.ɵfac = function GroupModule_Factory(t) { return new (t || GroupModule)(); };
    GroupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: GroupModule });
    GroupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
                ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule,
                ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_13__.NgxHumanizeDurationModule,
            ]] });
    return GroupModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](GroupModule, { declarations: [_group_components_group_component__WEBPACK_IMPORTED_MODULE_1__.GroupComponent,
        _group_components_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent,
        _group_components_thing_component__WEBPACK_IMPORTED_MODULE_5__.ThingComponent,
        _group_components_things_component__WEBPACK_IMPORTED_MODULE_2__.ThingsComponent,
        _group_components_things_table_component__WEBPACK_IMPORTED_MODULE_3__.ThingsTableComponent,
        _group_components_latest_modal_component__WEBPACK_IMPORTED_MODULE_4__.LatestModalComponent,
        _group_components_latest_table_component__WEBPACK_IMPORTED_MODULE_6__.LatestTableComponent,
        _group_components_ts_graph_ts_graph_component__WEBPACK_IMPORTED_MODULE_7__.TsGraphComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule,
        ngx_humanize_duration__WEBPACK_IMPORTED_MODULE_13__.NgxHumanizeDurationModule] }); })();


/***/ })

}]);