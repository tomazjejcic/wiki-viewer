webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search>\n</app-search>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_index__ = __webpack_require__("../../../../../src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_component__ = __webpack_require__("../../../../../src/app/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__results_component__ = __webpack_require__("../../../../../src/app/results.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__results_component__["a" /* ResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__core_index__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_3__core_index__["b" /* BaseService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Observable } from 'rxjs/Rx';



var BaseService = (function () {
    function BaseService(http) {
        this.http = http;
    }
    BaseService.prototype.getApi = function (apiUrl) {
        var result$ = this.http
            .get(apiUrl, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return result$;
    };
    BaseService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    BaseService.prototype.handleError = function (error) {
        // log error
        var errorMsg = error.message || "Yikes! There was a problem with our hyperdrive device and we couldn't get data";
        console.error(errorMsg);
        // throw an application level error
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
    };
    return BaseService;
}());
BaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BaseService);

var _a;
//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window_service__ = __webpack_require__("../../../../../src/app/core/window.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__window_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__("../../../../../src/app/core/base.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__base_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/core/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function provideGlobalWindow() {
    // return global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return provideGlobalWindow();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WindowRef);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../../src/app/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"results-container\" *ngIf=\"receivedApiData\">\n\n    <div class=\"list-container\">\n        <div class=\"list\" *ngFor=\"let item of receivedApiData.listArray\">\n\n            <div class=\"item\">\n                <div class=\"item-title\">{{ item.title }}</div>\n                <div class=\"item-description\">{{ item.description }}</div>\n                <div class=\"more-button\" (click)=\"openWiki(item.link)\">\n                    Read article\n                </div>\n            </div>\n\n        </div>\n    </div>    \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/results.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #CDDFF2;\n  height: 100vh;\n  margin: 0px; }\n\n.results-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  right: 0; }\n  .results-container .list-container {\n    position: absolute;\n    overflow: auto;\n    margin: 10px 0 90px 10px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0; }\n    .results-container .list-container .list {\n      padding-right: 10px; }\n      .results-container .list-container .list .item {\n        background: #7e9ab7;\n        width: 100%;\n        margin-top: 12px;\n        border-radius: 5px; }\n        .results-container .list-container .list .item .item-title {\n          color: #CDDFF2;\n          padding: 10px 10px 5px 10px;\n          font-family: \"Roboto\", sans-serif;\n          line-height: 1.5;\n          font-weight: 300;\n          font-size: 18px; }\n        .results-container .list-container .list .item .item-description {\n          color: #270303;\n          padding: 5px 10px 10px 10px;\n          font-family: serif;\n          line-height: 1.3;\n          font-weight: 300;\n          font-size: 16px; }\n        .results-container .list-container .list .item .more-button {\n          background: #274c73;\n          color: #F77F00;\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          height: 30px;\n          width: -webkit-fill-available;\n          width: -moz-available;\n          width: stretch;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          margin: 0 10px 10px 10px;\n          border-radius: 5px;\n          font-size: 12px;\n          font-weight: 200;\n          font-family: \"Roboto\", sans-serif; }\n\n@media (min-width: 768px) {\n  .results-container .list-container {\n    margin: 40px 40px 90px 40px; }\n    .results-container .list-container .list .item .item-title {\n      padding: 20px 20px 5px 20px;\n      font-size: 20px; }\n    .results-container .list-container .list .item .item-description {\n      padding: 10px 20px 20px 20px;\n      font-size: 18px; }\n    .results-container .list-container .list .item .more-button {\n      height: 40px;\n      margin: 0 20px 20px 20px;\n      font-size: 14px; } }\n\n@media (min-width: 993px) {\n  .results-container {\n    width: 80%;\n    margin: auto;\n    left: 0; }\n    .results-container .list-container .list .item {\n      margin-bottom: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_index__ = __webpack_require__("../../../../../src/app/core/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent(winRef) {
        this.winRef = winRef;
    }
    ResultsComponent.prototype.openWiki = function (link) {
        this.winRef.nativeWindow.open(link);
    };
    return ResultsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ResultsComponent.prototype, "receivedApiData", void 0);
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_index__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_index__["a" /* WindowRef */]) === "function" && _a || Object])
], ResultsComponent);

var _a;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"navbar\">\n        <div class=\"search-container\">\n            <div class=\"search-input-container\">\n                <input #box (keyup.enter)=\"onEnter(box.value)\" type=\"text\" placeholder=\"Search Wikipedia\">\n            </div>\n            <div class=\"search-button-container\">\n                <button (click)=\"onEnter(box.value)\">\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n        </div>\n\n        <div class=\"random-container\">\n            <button (click)=\"openRandomArticle()\">\n                Random article\n            </button>\n        </div>\n    </div>\n\n    <!-- error handling -->\n    <section *ngIf=\"errorMessage\">\n            {{errorMessage}}\n    </section>\n\n    <app-results class=\"results-component\" [receivedApiData]=\"apiResult\">\n    </app-results>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #CDDFF2;\n  height: 100vh;\n  margin: 0px; }\n\n.container {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .container .search-container {\n    height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .container .search-container .search-input-container {\n      background: #CDDFF2;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n      .container .search-container .search-input-container input {\n        background: #CDDFF2;\n        color: #044767;\n        height: -webkit-fill-available;\n        height: -moz-available;\n        height: stretch;\n        width: -webkit-fill-available;\n        width: -moz-available;\n        width: stretch;\n        border: 0px;\n        margin-left: 10px;\n        outline: none;\n        font-size: 20px;\n        font-family: sans-serif; }\n      .container .search-container .search-input-container input::-webkit-input-placeholder {\n        color: #7E7D7D; }\n      .container .search-container .search-input-container input:-ms-input-placeholder {\n        color: #7E7D7D; }\n      .container .search-container .search-input-container input::placeholder {\n        color: #7E7D7D; }\n    .container .search-container .search-button-container {\n      background: #CDDFF2; }\n      .container .search-container .search-button-container button {\n        background-color: transparent;\n        width: 60px;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        outline: none;\n        cursor: pointer;\n        border-width: 0px;\n        font-size: 25px; }\n        .container .search-container .search-button-container button i {\n          color: #F77F00; }\n  .container .random-container {\n    height: 40px;\n    background: #274c73;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .container .random-container button {\n      color: #F77F00;\n      background-color: transparent;\n      cursor: pointer;\n      outline: none;\n      border-width: 0px;\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 200;\n      font-size: 14px; }\n  .container .results-component {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n@media (min-width: 768px) {\n  .container .navbar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n    .container .navbar .search-container {\n      height: 80px;\n      -webkit-box-flex: 5;\n          -ms-flex: 5;\n              flex: 5; }\n      .container .navbar .search-container .search-input-container {\n        background: #b5c4d3; }\n        .container .navbar .search-container .search-input-container input {\n          background: #b5c4d3;\n          margin-left: 20px;\n          font-size: 30px; }\n      .container .navbar .search-container .search-button-container {\n        background: #b5c4d3; }\n        .container .navbar .search-container .search-button-container button {\n          margin-right: 20px;\n          font-size: 30px; }\n    .container .navbar .random-container {\n      -webkit-box-flex: 2;\n          -ms-flex: 2;\n              flex: 2;\n      height: 80px; }\n      .container .navbar .random-container button {\n        font-size: 15px; } }\n\n@media (min-width: 993px) {\n  .container .navbar .search-container .search-button-container button {\n    margin-right: 70px; }\n  .container .navbar .random-container {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .container .navbar .random-container button {\n      margin-right: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_index__ = __webpack_require__("../../../../../src/app/core/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(winRef, baseService) {
        this.winRef = winRef;
        this.baseService = baseService;
        // Variables
        this.searchString = '';
    }
    SearchComponent.prototype.onEnter = function (value) {
        this.searchString = value;
        this.callWikiApi();
    };
    SearchComponent.prototype.openRandomArticle = function () {
        this.winRef.nativeWindow.open('https://en.wikipedia.org/wiki/Special:Random');
    };
    SearchComponent.prototype.callWikiApi = function () {
        var _this = this;
        // build the search query
        this.apiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + this.searchString;
        // search only if there is some query
        if (this.searchString) {
            this.baseService.getApi(this.apiUrl)
                .subscribe(function (data) {
                _this.buildListObject(data);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    // manipulate the api result into a more useful object
    SearchComponent.prototype.buildListObject = function (data) {
        var listObject = {
            title: undefined,
            listArray: []
        };
        listObject.title = data[0];
        data.shift();
        for (var i = 0; i < data[0].length; i++) {
            var obj = {
                title: data[0][i],
                description: data[1][i],
                link: data[2][i],
            };
            listObject.listArray.push(obj);
        }
        this.apiResult = listObject;
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_index__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_index__["a" /* WindowRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_index__["b" /* BaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_index__["b" /* BaseService */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map