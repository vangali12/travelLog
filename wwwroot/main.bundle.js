webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n    \r\nheader {\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    background: lightgray;\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    border-bottom: 0.5px solid slategray;\r\n}\r\n    \r\nheader div h1 {\r\n    font-size: 50pt;\r\n    font-family: 'Arima Madurai', cursive;\r\n}\r\n    \r\nsection {\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    height: 80vh;\r\n    font-family: 'Quicksand', sans-serif;\r\n}\r\n    \r\n.topRow {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 1vh;\r\n    margin-bottom: 1vh;\r\n}\r\n    \r\n.topRow a {\r\n    margin-left: 5vw;\r\n    margin-right: 5vw;\r\n    vertical-align: middle;\r\n    font-family: 'Merriweather', serif;\r\n    color: darkgray;\r\n}\r\n    \r\n.bigNav {\r\n    font-size: 3vh;\r\n}\r\n    \r\n.row {\r\n    height: 100%;\r\n}\r\n    \r\n.leftSide {\r\n    text-align: center;\r\n}\r\n    \r\n.rightSide img {\r\n    max-width: 100%;\r\n}\r\n    \r\n.rightSide {\r\n    vertical-align: middle;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css\" integrity=\"sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy\" crossorigin=\"anonymous\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Arima+Madurai|Merriweather|Quicksand\" rel=\"stylesheet\">\r\n  <title>About</title>\r\n</head>\r\n<body>\r\n  <header class=\"container-fluid\">\r\n    <div topRow>\r\n        <h1>Oh, what a trip!</h1> \r\n    </div>  \r\n    <div class=\"topRow\">\r\n        <a href=\"/about\">About Me</a>\r\n        <a class=\"bigNav\" href=\"/\">Home</a>\r\n        <a href=\"/allTrips\">All Trips</a>\r\n      </div>\r\n  </header>\r\n  <section class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 leftSide\">\r\n        <h1>Hi!</h1>\r\n        <h1>My name is Alisa Marie.</h1>\r\n        <h2>I love traveling.</h2>\r\n        <p>This site is dedicated to documenting my travels in hopes of inspiring others to buy that plane ticket or get behind that steering wheel and get exploring!</p>\r\n        <p>I've realized that the world is a big place. There is so much to see and so many people to meet. Learning about different cultures and people groups gives us a better understanding of the human experience and opens up the opportunity to change the world for the better</p>\r\n        <h2>So get up, get out and explore!</h2>\r\n      </div>\r\n      <div class=\"col-md-6 rightSide\">\r\n        <img src=\"./../../assets/image.jpg\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </section>\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "../../../../../src/app/all/all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    background: lightgray;\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    border-bottom: 0.5px solid slategray;\r\n}\r\n\r\nheader div h1 {\r\n    font-size: 50pt;\r\n    font-family: 'Arima Madurai', cursive;\r\n}\r\n\r\n.container {\r\n    width: 80vw;\r\n}\r\n\r\n.topRow {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 1vh;\r\n    margin-bottom: 1vh;\r\n}\r\n\r\n.topRow a {\r\n    margin-left: 5vw;\r\n    margin-right: 5vw;\r\n    vertical-align: middle;\r\n    font-family: 'Merriweather', serif;\r\n    color: darkgray;\r\n}\r\n\r\n.bigNav {\r\n    font-size: 3vh;\r\n}\r\n\r\nsection {\r\n    padding-top: 4vh;\r\n    padding-bottom: 1vh;\r\n}\r\n\r\nsection .shell a {\r\n    font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\n.collage {\r\n    -webkit-column-count: 3;\r\n    -webkit-column-gap:   0px;\r\n    -moz-column-count:    3;\r\n    -moz-column-gap:      0px;\r\n    column-count:         3;\r\n    column-gap:           0px;\r\n    text-align: center;\r\n}\r\n\r\n.collage .shell {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n    position: relative;\r\n    display: block\r\n}\r\n\r\n.collage .shell h4 {\r\n    line-break: 18pt;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .collage {\r\n        -webkit-column-count: 4;\r\n        column-count:         4;\r\n    }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n    .collage {\r\n        -webkit-column-count: 3;\r\n        column-count:         3;\r\n    }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    #photos {\r\n        -webkit-column-count: 2;\r\n        column-count:         2;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .collage {\r\n        -webkit-column-count: 1;\r\n        column-count:         1;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css\" integrity=\"sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy\" crossorigin=\"anonymous\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Arima+Madurai|Merriweather|Quicksand\" rel=\"stylesheet\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n    <header class=\"container-fluid\">\r\n        <div topRow>\r\n            <h1>Oh, what a trip!</h1> \r\n        </div>  \r\n        <div class=\"topRow\">\r\n            <a href=\"/about\">About Me</a>\r\n            <a class=\"bigNav\" href=\"/\">Home</a>\r\n            <a href=\"/allTrips\">All Trips</a>\r\n        </div>\r\n    </header>\r\n    <section class=\"collage container\">\r\n        <div class=\"shell\" *ngFor=\"let trip of apiTrips\" id=\"collage\">\r\n            <p><a [routerLink]=\"['/trip/', trip.tripid]\">{{ trip.city }}, {{ trip.country }} - {{ trip.startDate | date: mediumDate }}</a></p>\r\n        </div>\r\n    </section>\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/all/all.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var AllComponent = /** @class */ (function () {
    function AllComponent(_httpService) {
        this._httpService = _httpService;
        this.apiTrips = [];
    }
    AllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.get('/api/home').subscribe(function (trips) {
            _this.apiTrips = trips.json();
        });
    };
    AllComponent = __decorate([
        core_1.Component({
            selector: 'app-all',
            template: __webpack_require__("../../../../../src/app/all/all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AllComponent);
    return AllComponent;
}());
exports.AllComponent = AllComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var trip_component_1 = __webpack_require__("../../../../../src/app/trip/trip.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var all_component_1 = __webpack_require__("../../../../../src/app/all/all.component.ts");
var routes = [
    { path: '', pathMatch: 'full', component: home_component_1.HomeComponent },
    { path: 'trip/:id', pathMatch: 'full', component: trip_component_1.TripComponent },
    { path: 'about', pathMatch: 'full', component: about_component_1.AboutComponent },
    { path: 'allTrips', pathMatch: 'full', component: all_component_1.AllComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var trip_component_1 = __webpack_require__("../../../../../src/app/trip/trip.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var all_component_1 = __webpack_require__("../../../../../src/app/all/all.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                trip_component_1.TripComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                all_component_1.AllComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAD9eAxgKcTZ74kqRmoMdc2mmXv_9awzGQ'
                })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 80vh;\r\n    width: 100%\r\n}\r\n\r\nheader {\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    background: lightgray;\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    border-bottom: 0.5px solid slategray;\r\n}\r\n\r\nheader div h1 {\r\n    font-size: 50pt;\r\n    font-family: 'Arima Madurai', cursive;\r\n}\r\n\r\nsection {\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n}\r\n\r\n.topRow {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 1vh;\r\n    margin-bottom: 1vh;\r\n}\r\n\r\n.topRow a {\r\n    margin-left: 5vw;\r\n    margin-right: 5vw;\r\n    vertical-align: middle;\r\n    font-family: 'Merriweather', serif;\r\n    color: darkgray;\r\n}\r\n\r\n.bigNav {\r\n    font-size: 3vh;\r\n}\r\n\r\ndiv {\r\n    font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\ndiv h2 {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css\" integrity=\"sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy\" crossorigin=\"anonymous\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Arima+Madurai|Merriweather|Quicksand\" rel=\"stylesheet\">\r\n  <title>TraveLog</title>\r\n</head>\r\n<body>\r\n  <header class=\"container-fluid\">\r\n    <div topRow>\r\n        <h1>Oh, what a trip!</h1> \r\n    </div>  \r\n    <div class=\"topRow\">\r\n        <a href=\"/about\">About Me</a>\r\n        <a class=\"bigNav\" href=\"/\">Home</a>\r\n        <a href=\"/allTrips\">All Trips</a>\r\n      </div>\r\n  </header>\r\n  <section class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n            <div *ngFor=\"let place of apiTrips\">\r\n              <agm-marker [latitude]=\"place.latitude\" [longitude]=\"place.longitude\" (markerClick)=\"markerClicked(place.tripid)\" [label]=\"place.id\"></agm-marker>\r\n            </div>\r\n        </agm-map>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <h2>Hi. My name is Alisa. I'm out here living my best life. Cheers.</h2>\r\n        <hr>\r\n        <p *ngIf=\"activeTrip == undefined\">Click on a map marker to see trip details!</p>\r\n        <div *ngIf=\"activeTrip != undefined\">\r\n          <h3><a [routerLink]=\"['/trip/', activeTrip.tripid]\">{{ activeTrip.city }}<span *ngIf=\"activeTrip.state != null\">, {{ activeTrip.state }}</span>, {{ activeTrip.country }}</a></h3>\r\n          <p>{{ activeTrip.startDate | date: mediumDate}} <span *ngIf=\"activeTrip.startDate != activeTrip.endDate\">- {{ activeTrip.endDate | date: mediumDate }}</span></p>\r\n          <p>{{ activeTrip.description }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
        this.latitude = 47.581526;
        this.longitude = -122.169673;
        this.apiTrips = [];
        this.allActivePosts = [];
        this.sneakPeak = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.get('/api/home').subscribe(function (trips) {
            _this.apiTrips = trips.json();
        });
    };
    HomeComponent.prototype.markerClicked = function (tripNum) {
        this.allActivePosts = [];
        this.sneakPeak = [];
        for (var i = 0; i < this.apiTrips.length; i++) {
            if (this.apiTrips[i]['tripid'] == tripNum) {
                this.activeTrip = this.apiTrips[i];
            }
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/trip/trip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    background: lightgray;\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    border-bottom: 0.5px solid slategray;\r\n    position: fixed;\r\n    z-index: 15;\r\n}\r\n\r\nheader div h1 {\r\n    font-size: 50pt;\r\n    font-family: 'Arima Madurai', Helvetica, cursive;\r\n}\r\n\r\nsection {\r\n    padding-top: 20vh;\r\n    padding-bottom: 1vh;\r\n    text-align: center;\r\n    font-family: 'Quicksand', Helvetica, sans-serif;\r\n    padding-left: 10vw;\r\n    padding-right: 10vw;\r\n}\r\n\r\n.topRow {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 1vh;\r\n    margin-bottom: 1vh;\r\n}\r\n\r\n.topRow a {\r\n    margin-left: 5vw;\r\n    margin-right: 5vw;\r\n    vertical-align: middle;\r\n    font-family: 'Merriweather', serif;\r\n    color: darkgray;\r\n}\r\n\r\n.bigNav {\r\n    font-size: 3vh;\r\n}\r\n\r\n.collage {\r\n    line-height: 0;\r\n    -webkit-column-count: 4;\r\n    -webkit-column-gap:   0px;\r\n    -moz-column-count:    4;\r\n    -moz-column-gap:      0px;\r\n    column-count:         4;\r\n    column-gap:           0px;\r\n    padding-left: 8vw;\r\n    padding-right: 8vw;\r\n}\r\n\r\n.collage img {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n    padding: 0.75em;\r\n    position: relative;\r\n    display: block\r\n}\r\n\r\n.collage img:hover {\r\n    opacity: 0.4;\r\n}\r\n\r\n.collage .shell {\r\n    width: 100% !important;\r\n    height: auto !important;\r\n    position: relative;\r\n    display: block\r\n}\r\n\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 1;\r\n}\r\n\r\n.collage div .titleText {\r\n    font-size: 20pt;\r\n    line-height: 18pt;\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    text-align: center;\r\n    font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\n.collage div h2 {\r\n    font-size: 20pt;\r\n    line-height: 20pt;\r\n}\r\n\r\n.collage div .textContent {\r\n    line-height: 12pt;\r\n}\r\n\r\n.collage div .textbox {\r\n    padding: 0.75em;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .collage {\r\n        -webkit-column-count: 3;\r\n        column-count:         3;\r\n    }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n    .collage {\r\n        -webkit-column-count: 2;\r\n        column-count:         2;\r\n    }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    #photos {\r\n        -webkit-column-count: 2;\r\n        column-count:         2;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .collage {\r\n        -webkit-column-count: 1;\r\n        column-count:         1;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trip/trip.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css\" integrity=\"sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy\" crossorigin=\"anonymous\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Arima+Madurai|Merriweather|Quicksand\" rel=\"stylesheet\">\r\n  <title>{{ apiPosts[0].trip.city }}</title>\r\n</head>\r\n<body>\r\n  <header class=\"container-fluid\">\r\n      <div topRow>\r\n          <h1>Oh, what a trip!</h1>\r\n      </div>  \r\n      <div class=\"topRow\">\r\n          <a href=\"/about\">About Me</a>\r\n          <a class=\"bigNav\" href=\"/\">Home</a>\r\n          <a href=\"/allTrips\">All Trips</a>\r\n      </div>\r\n  </header>\r\n  <section>\r\n    <h1>{{ apiPosts[0].trip.city }}<span *ngIf=\"apiPosts[0].trip.state != null\">, {{ apiPosts[0].trip.state }}</span>, {{ apiPosts[0].trip.country }}</h1>\r\n    <h3>{{ apiPosts[0].trip.startDate | date: mediumDate }}<span *ngIf=\"apiPosts[0].trip.startDate != apiPosts[0].trip.endDate\"> - {{ apiPosts[0].trip.endDate | date: mediumDate }}</span></h3>\r\n    <h4>{{ apiPosts[0].trip.description }}</h4>\r\n  </section>\r\n  <div class=\"collage\">\r\n    <div class=\"shell\" *ngFor=\"let post of apiPosts\" id=\"collage\">\r\n      <div *ngIf=\"post.type == 'image'\">\r\n          <div class=\"overlay\">\r\n            <p class=\"titleText\">{{ post.title }}</p>\r\n          </div>\r\n          <img  src=\"{{ post.content }}.jpg\" alt=\"post.title\">\r\n      </div>\r\n      <div *ngIf=\"post.type == 'text'\" class=\"textbox\">\r\n        <h2>{{ post.title }}</h2>\r\n        <p class=\"textContent\">{{ post.content }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>"

/***/ }),

/***/ "../../../../../src/app/trip/trip.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var TripComponent = /** @class */ (function () {
    function TripComponent(_httpService, _route) {
        var _this = this;
        this._httpService = _httpService;
        this._route = _route;
        this.tripData = [];
        this.apiPosts = [];
        this._route.paramMap.subscribe(function (params) {
            _this.tripNum = params.get('id');
        });
    }
    TripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.get('/api/home/' + this.tripNum).subscribe(function (posts) {
            _this.apiPosts = posts.json();
        });
    };
    TripComponent = __decorate([
        core_1.Component({
            selector: 'app-trip',
            template: __webpack_require__("../../../../../src/app/trip/trip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trip/trip.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
    ], TripComponent);
    return TripComponent;
}());
exports.TripComponent = TripComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map