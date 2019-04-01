(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: '<h3>About: This application is used to book bus between different cities</h3>'
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    text-decoration: none;\r\n}\r\n\r\na.active{\r\n    color: blue;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCIiwiZmlsZSI6ImFkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLmFjdGl2ZXtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li><a data-toggle=\"tab\" class=\"nav-link active\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">About</a></li>\n    <li><a data-toggle=\"tab\" class=\"nav-link\" routerLink=\"cities\" routerLinkActive=\"active\">Cities</a></li>\n    <li><a data-toggle=\"tab\" class=\"nav-link\" routerLink=\"buses\" routerLinkActive=\"active\">Buses</a></li>\n    <li><button type=\"button\" class=\"btn btn-danger\"  (click)=\"logout()\">Logout</button></li>\n</ul>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
        this.title = 'BookMyBus';
    }
    AdminComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-root',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.guard.ts":
/*!**************************************!*\
  !*** ./src/app/admin/admin.guard.ts ***!
  \**************************************/
/*! exports provided: AdminauthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminauthGuard", function() { return AdminauthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminauthGuard = /** @class */ (function () {
    function AdminauthGuard(router) {
        this.router = router;
        this.loggedInAdmin = false;
    }
    AdminauthGuard.prototype.loggedIn = function (value) {
        this.loggedInAdmin = value;
    };
    AdminauthGuard.prototype.canActivate = function (next, state) {
        if (this.loggedInAdmin === true) {
            return true;
        }
        if (this.loggedInAdmin === false) {
            alert("You are not logged in, please login!!!");
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminauthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminauthGuard);
    return AdminauthGuard;
}());



/***/ }),

/***/ "./src/app/admin/buses/addbus-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/buses/addbus-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1>Add Bus</h1>\r\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"route\">Route</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"route\" name=\"route\" [(ngModel)]=\"route\" required #routeRef=\"ngModel\">\r\n      <div *ngIf=\"routeRef.invalid && (routeRef.dirty || routeRef.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"routeRef.errors.required\">\r\n          Route is required.\r\n        </div>        \r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Descripton</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"description\">      \r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"fromCity\">From City</label>\r\n      <select class=\"form-control\" name=\"fromCity\" #fromCityRef=\"ngModel\" [ngModel]=\"fromCity\">\r\n        <option *ngFor=\"let fromCity of cities\" [ngValue]=\"fromCity\">\r\n          {{fromCity.name}}\r\n        </option>\r\n      </select>              \r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"toCity\">To City</label>\r\n      <select class=\"form-control\" name=\"toCity\" #toCityRef=\"ngModel\" [ngModel]=\"toCity\">\r\n        <option *ngFor=\"let toCity of cities\" [ngValue]=\"toCity\">\r\n          {{toCity.name}}\r\n        </option>\r\n      </select>\r\n      <div *ngIf=\"fromCityRef.value === toCityRef.value\" class=\"alert alert-danger\">\r\n          From City and To City cannot be same.\r\n      </div>        \r\n            \r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"totalSeats\">Total Seats</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"totalSeats\" name=\"totalSeats\" [(ngModel)]=\"totalSeats\">      \r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"formRef.invalid || (fromCityRef.value === toCityRef.value)\">Submit</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/buses/addbus-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/buses/addbus-form.component.ts ***!
  \******************************************************/
/*! exports provided: AddBusFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBusFormComponent", function() { return AddBusFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cities_cities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cities/cities.service */ "./src/app/admin/cities/cities.service.ts");
/* harmony import */ var _buses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buses.service */ "./src/app/admin/buses/buses.service.ts");





var AddBusFormComponent = /** @class */ (function () {
    function AddBusFormComponent(_citiesService, _busesService, router) {
        this._citiesService = _citiesService;
        this._busesService = _busesService;
        this.router = router;
    }
    AddBusFormComponent.prototype.ngOnInit = function () {
        this.getCities();
        this.getBuses();
    };
    AddBusFormComponent.prototype.getCities = function () {
        var _this = this;
        this._citiesService.getCities().subscribe(function (cities) { console.log("setting fetched cities: " + JSON.stringify(cities)); _this.cities = cities; _this.fromCity = _this.cities[0]; _this.toCity = _this.cities[0]; }, function (err) { return console.log(err); });
    };
    AddBusFormComponent.prototype.getBuses = function () {
        var _this = this;
        this._busesService.getBuses().subscribe(function (buses) { console.log("setting fetched buses"); _this.buses = buses; }, function (err) { return console.log(err); });
    };
    AddBusFormComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        var newBus = {
            route: formValue.route,
            description: formValue.description,
            fromCity: formValue.fromCity.name,
            toCity: formValue.toCity.name,
            totalSeats: formValue.totalSeats
        };
        this._busesService.addBus(newBus).subscribe(function (res) {
            console.log("Bus Added successfully");
            _this.getBuses();
            _this.router.navigate(['admin/buses']);
        }, function (err) { return console.log(err); });
    };
    AddBusFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addbus-form',
            template: __webpack_require__(/*! ./addbus-form.component.html */ "./src/app/admin/buses/addbus-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cities_cities_service__WEBPACK_IMPORTED_MODULE_3__["CitiesService"], _buses_service__WEBPACK_IMPORTED_MODULE_4__["BusesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddBusFormComponent);
    return AddBusFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/buses/bus.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/buses/bus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc; \r\n  cursor: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2J1c2VzL2J1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQixDQUFDLGFBQWE7Q0FDL0I7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0NBQ2QiLCJmaWxlIjoiYWRtaW4vYnVzZXMvYnVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgbWFyZ2luOiAuNWVtIDA7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmctbGVmdDogLjRlbTtcclxufVxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7IGN1cnNvcjogaGFuZDtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjY2NjOyBcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/buses/bus.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/buses/bus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Bus Details</h2>\r\n    <table style=\"margin-left:20px\">      \r\n      <tr>\r\n          <td>Route:</td>\r\n          <td>{{bus.route}}</td>\r\n        </tr>\r\n      <tr>\r\n        <td>Description:</td>\r\n        <td>{{bus.description}}</td>\r\n      </tr>  \r\n      <tr>\r\n        <td>From City:</td>\r\n        <td>{{bus.fromCity}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>To City:</td>\r\n        <td>{{bus.toCity}}</td>\r\n      </tr> \r\n      <tr>\r\n        <td>Total Seats:</td>\r\n        <td>{{bus.totalSeats}}</td>\r\n      </tr>      \r\n    </table>\r\n    <button (click)=\"goBack()\">Back</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/buses/bus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/buses/bus.component.ts ***!
  \**********************************************/
/*! exports provided: BusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusComponent", function() { return BusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buses.service */ "./src/app/admin/buses/buses.service.ts");





//import "rxjs/add/operator/map";
var BusComponent = /** @class */ (function () {
    function BusComponent(_busService, route, location) {
        this._busService = _busService;
        this.route = route;
        this.location = location;
        this.bus = {};
    }
    BusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
        });
        this._busService.getBus(this.id).subscribe(function (bus) { return _this.bus = bus; }, function (err) { return console.log(err); });
    };
    BusComponent.prototype.goBack = function () {
        this.location.back();
    };
    BusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./bus.component.html */ "./src/app/admin/buses/bus.component.html"),
            styles: [__webpack_require__(/*! ./bus.component.css */ "./src/app/admin/buses/bus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_buses_service__WEBPACK_IMPORTED_MODULE_4__["BusesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], BusComponent);
    return BusComponent;
}());



/***/ }),

/***/ "./src/app/admin/buses/buses.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/buses/buses.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi9idXNlcy9idXNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/buses/buses.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/buses/buses.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\r\n    <div class='panel-heading'>\r\n        {{title}}\r\n    </div>\r\n    <div class='panel-body'>  \r\n        <div class='row'>\r\n                <div class='col-md-2'>Route:</div>\r\n                <div class='col-md-2'>\r\n                    <input type='text'\r\n                        [(ngModel)]='routeFilter' (ngModelChange)=\"setRouteProperties($event)\" />\r\n                </div>\r\n                <div class='col-md-2'>From City:</div>\r\n                <div class='col-md-2'>\r\n                    <input type='text'\r\n                        [ngModel]='fromCityFilter' (ngModelChange)=\"setFromCityProperties($event)\"/>\r\n                </div>\r\n                <div class='col-md-2'>To City:</div>\r\n                <div class='col-md-2'>\r\n                    <input type='text'\r\n                        [ngModel]='toCityFilter' (ngModelChange)=\"setToCityProperties($event)\"/>\r\n                </div>\r\n        </div>      \r\n        <table class='table table-striped table-condensed' *ngIf='buses && buses.length'>\r\n            <thead>\r\n                <tr>                    \r\n                    <th style=\"min-width: 80px;\">Route</th>\r\n                    <th style=\"min-width: 80px;\">Description</th>  \r\n                    <th style=\"min-width: 80px;\">From City</th> \r\n                    <th style=\"min-width: 80px;\">To City</th> \r\n                    <th style=\"min-width: 80px;\">Total Seats</th>                    \r\n                    <th style=\"width:20px;\"> </th>\r\n                    <th style=\"width:20px;\"> </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor='let bus of filteredBuses'>                    \r\n                    <td><a [routerLink]=\"bus.id\">{{ bus.route }}</a></td>\r\n                    <td>{{ bus.description }}</td>\r\n                    <td>{{ bus.fromCity }}</td>\r\n                    <td>{{ bus.toCity }}</td>\r\n                    <td>{{ bus.totalSeats }}</td>\r\n                    <td><a [routerLink]=\"['/admin/editBus',bus.id]\" class=\"btn btn-xs btn-primary\">Edit</a></td>                   \r\n                    <td><a (click)=\"deleteBus(bus.id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <a routerLink=\"/admin/addBus\" class=\"btn btn-xs btn-primary\" style=\"margin-right: 16px\">Add Bus</a>        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/buses/buses.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/buses/buses.component.ts ***!
  \************************************************/
/*! exports provided: BusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesComponent", function() { return BusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cities_cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cities/cities.service */ "./src/app/admin/cities/cities.service.ts");
/* harmony import */ var _buses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buses.service */ "./src/app/admin/buses/buses.service.ts");




var BusesComponent = /** @class */ (function () {
    function BusesComponent(_busService, _cityService) {
        this._busService = _busService;
        this._cityService = _cityService;
        this.routeFilter = "";
        this.fromCityFilter = "";
        this.toCityFilter = "";
    }
    BusesComponent.prototype.ngOnInit = function () {
        this.getCities();
        // this.getBuses();
        console.log(this.buses);
    };
    BusesComponent.prototype.setRouteProperties = function (routeFilter) {
        this.routeFilter = routeFilter;
        this.filterBus();
    };
    BusesComponent.prototype.setFromCityProperties = function (fromCityFilter) {
        this.fromCityFilter = fromCityFilter;
        this.filterBus();
    };
    BusesComponent.prototype.setToCityProperties = function (toCityFilter) {
        this.toCityFilter = toCityFilter;
        this.filterBus();
    };
    BusesComponent.prototype.filterBus = function () {
        var _this = this;
        this.filteredBuses = this.buses.filter(function (bus) { return bus.route.toLowerCase().startsWith(_this.routeFilter.toLowerCase())
            && bus.fromCityName.toLowerCase().startsWith(_this.fromCityFilter.toLowerCase()) && bus.toCityName.toLowerCase().startsWith(_this.toCityFilter.toLowerCase()); });
    };
    BusesComponent.prototype.getCities = function () {
        var _this = this;
        this._cityService.getCities().subscribe(function (cities) { _this.cities = cities; _this.getBuses(); }, function (err) { return console.log(err); });
    };
    BusesComponent.prototype.getBuses = function () {
        var _this = this;
        this._busService.getBuses().subscribe(function (buses) {
            _this.buses = buses;
            _this.populateBusName();
            _this.setRouteProperties("");
            _this.setFromCityProperties("");
            _this.setToCityProperties("");
        }, function (err) { return console.log(err); });
    };
    BusesComponent.prototype.populateBusName = function () {
        var _this = this;
        this.buses.map(function (bus) {
            bus.fromCityName = _this.getCityName(bus.fromCity);
            bus.toCityName = _this.getCityName(bus.toCity);
            return bus;
        });
    };
    BusesComponent.prototype.getCityName = function (id) {
        var cityName = "";
        this.cities.forEach(function (city) {
            if (city.id === id) {
                cityName = city.name;
            }
        });
        return cityName;
    };
    BusesComponent.prototype.deleteBuses = function () {
        var _this = this;
        this.buses.forEach(function (bus) {
            if (bus.selected) {
                _this._busService.deleteBus(bus.id).subscribe(function (data) {
                    console.log("Bus deleted successfully.");
                    _this.getBuses();
                }, function (err) { return console.log(err); });
            }
        });
    };
    BusesComponent.prototype.deleteBus = function (busId) {
        var _this = this;
        this._busService.deleteBus(busId).subscribe(function (data) {
            console.log("Bus deleted successfully.");
            _this.getBuses();
        }, function (err) { return console.log(err); });
    };
    BusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buses',
            template: __webpack_require__(/*! ./buses.component.html */ "./src/app/admin/buses/buses.component.html"),
            styles: [__webpack_require__(/*! ./buses.component.css */ "./src/app/admin/buses/buses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_buses_service__WEBPACK_IMPORTED_MODULE_3__["BusesService"], _cities_cities_service__WEBPACK_IMPORTED_MODULE_2__["CitiesService"]])
    ], BusesComponent);
    return BusesComponent;
}());



/***/ }),

/***/ "./src/app/admin/buses/buses.service.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/buses/buses.service.ts ***!
  \**********************************************/
/*! exports provided: BusesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesService", function() { return BusesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BusesService = /** @class */ (function () {
    function BusesService(_http) {
        this._http = _http;
        this._busesUrl = "http://localhost:3000/bus";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    BusesService.prototype.getBuses = function () {
        console.log("Getting buses from service");
        return this._http.get(this._busesUrl + '/buses');
    };
    BusesService.prototype.getBus = function (id) {
        var getBusURL = this._busesUrl + "/" + id;
        return this._http.get(getBusURL);
    };
    BusesService.prototype.addBus = function (newBus) {
        return this._http.post(this._busesUrl, newBus, this.httpOptions);
    };
    BusesService.prototype.updateBus = function (updatedBus) {
        var editBusURL = this._busesUrl + "/" + updatedBus.id;
        return this._http.put(editBusURL, updatedBus, this.httpOptions);
    };
    BusesService.prototype.deleteBus = function (id) {
        var deleteBusURL = this._busesUrl + "/" + id;
        return this._http.delete(deleteBusURL);
    };
    BusesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BusesService);
    return BusesService;
}());



/***/ }),

/***/ "./src/app/admin/buses/editbus-form.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/buses/editbus-form.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Edit Bus</h1>\r\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\"> \r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"route\">Route</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"route\" name=\"route\" [(ngModel)]=\"bus.route\" required #routeRef=\"ngModel\">\r\n        <div *ngIf=\"routeRef.invalid && (routeRef.dirty || routeRef.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"routeRef.errors.required\">\r\n              Route is required.\r\n            </div>        \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"bus.description\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"fromCity\">From City</label>\r\n      <select class=\"form-control\" name=\"fromCity\" [(ngModel)]=\"bus.fromCity\">\r\n        <option *ngFor=\"let fromCity of cities\" [value]=\"fromCity.id\">\r\n          {{fromCity.name}}\r\n        </option>\r\n      </select>         \r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"toCity\">To City</label>\r\n      <select class=\"form-control\" name=\"toCity\" [(ngModel)]=\"bus.toCity\" >\r\n        <option *ngFor=\"let toCity of cities\" [value]=\"toCity.id\">\r\n          {{toCity.name}}\r\n        </option>\r\n      </select>         \r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"totalSeats\">Total Seats</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"totalSeats\" name=\"totalSeats\" [(ngModel)]=\"bus.totalSeats\">      \r\n    </div>\r\n       \r\n    <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/buses/editbus-form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/buses/editbus-form.component.ts ***!
  \*******************************************************/
/*! exports provided: EditBusFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBusFormComponent", function() { return EditBusFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cities_cities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cities/cities.service */ "./src/app/admin/cities/cities.service.ts");
/* harmony import */ var _buses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buses.service */ "./src/app/admin/buses/buses.service.ts");





var EditBusFormComponent = /** @class */ (function () {
    function EditBusFormComponent(_cityService, _busService, route, router) {
        this._cityService = _cityService;
        this._busService = _busService;
        this.route = route;
        this.router = router;
        this.bus = {};
    }
    EditBusFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
            console.log("Obtained id: " + _this.id);
        });
        this._busService.getBus(this.id).subscribe(function (bus) {
            _this.bus = bus;
            console.log("this is bus" + JSON.stringify(bus));
        }, function (err) { return console.log(err); });
        this.getCities();
    };
    EditBusFormComponent.prototype.getCities = function () {
        var _this = this;
        this._cityService.getCities().subscribe(function (cities) { _this.cities = cities; }, function (err) { return console.log(err); });
    };
    EditBusFormComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        console.log("Before constructing updatedBus");
        var updatedBus = {
            id: this.bus.id,
            route: formValue.route,
            description: formValue.description,
            fromCity: formValue.fromCity,
            toCity: formValue.toCity,
            totalSeats: formValue.totalSeats
        };
        console.log("After constructing updatedBus");
        this._busService.updateBus(updatedBus).subscribe(function (res) {
            console.log("Updated successfully");
            _this.router.navigate(['admin/buses']);
        }, function (err) { return console.log(err); });
    };
    EditBusFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'editbus-form',
            template: __webpack_require__(/*! ./editbus-form.component.html */ "./src/app/admin/buses/editbus-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cities_cities_service__WEBPACK_IMPORTED_MODULE_3__["CitiesService"], _buses_service__WEBPACK_IMPORTED_MODULE_4__["BusesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditBusFormComponent);
    return EditBusFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/cities/addcity-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/cities/addcity-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1>Add City</h1>\r\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" required #nameRef=\"ngModel\">\r\n      <div *ngIf=\"nameRef.invalid && (nameRef.dirty || nameRef.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nameRef.errors.required\">\r\n          Name is required.\r\n        </div>        \r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Descripton</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"description\">      \r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"formRef.invalid\">Submit</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/cities/addcity-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/cities/addcity-form.component.ts ***!
  \********************************************************/
/*! exports provided: AddCityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityFormComponent", function() { return AddCityFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities.service */ "./src/app/admin/cities/cities.service.ts");




var AddCityFormComponent = /** @class */ (function () {
    function AddCityFormComponent(_cityService, router) {
        this._cityService = _cityService;
        this.router = router;
    }
    AddCityFormComponent.prototype.ngOnInit = function () {
        this.getCities();
    };
    AddCityFormComponent.prototype.getCities = function () {
        var _this = this;
        this._cityService.getCities().subscribe(function (cities) { console.log("setting fetched cities"); _this.cities = cities; }, function (err) { return console.log(err); });
    };
    AddCityFormComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        var newCity = {
            name: formValue.name,
            description: formValue.description
        };
        this._cityService.addCity(newCity).subscribe(function (res) {
            console.log("City Added successfully");
            _this.getCities();
            _this.router.navigate(['admin/cities']);
        }, function (err) { return console.log(err); });
    };
    AddCityFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addcity-form',
            template: __webpack_require__(/*! ./addcity-form.component.html */ "./src/app/admin/cities/addcity-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cities_service__WEBPACK_IMPORTED_MODULE_3__["CitiesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddCityFormComponent);
    return AddCityFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/cities/cities.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/cities/cities.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi9jaXRpZXMvY2l0aWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/cities/cities.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/cities/cities.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\r\n    <div class='panel-heading'>\r\n        {{title}}\r\n    </div>\r\n    <div class='panel-body'>  \r\n        <div class='row'>\r\n            <div class='col-md-2'>Name:</div>\r\n            <div class='col-md-2'>\r\n                <input type='text'\r\n                    [(ngModel)]='nameFilter' (ngModelChange)=\"setNameProperties($event)\" />\r\n            </div>                    \r\n        </div>        \r\n        <table class='table table-striped table-condensed' *ngIf='cities && cities.length'>\r\n            <thead>\r\n                <tr>                    \r\n                    <th style=\"min-width: 80px;\">Name</th>\r\n                    <th style=\"min-width: 80px;\">Description</th>                    \r\n                    <th style=\"width:20px;\"> </th>\r\n                    <th style=\"width:20px;\"> </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor='let city of filteredCities'>                    \r\n                    <td><a [routerLink]=\"city.id\">{{ city.name }}</a></td>\r\n                    <td>{{ city.description }}</td>\r\n                    <td><a [routerLink]=\"['/admin/editCity',city.id]\" class=\"btn btn-xs btn-primary\">Edit</a></td>                   \r\n                    <td><a (click)=\"deleteCity(city.id)\" class=\"btn btn-xs btn-danger\">Delete</a></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <a routerLink=\"/admin/addCity\" class=\"btn btn-xs btn-primary\" style=\"margin-right: 16px\">Add City</a>        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/cities/cities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/cities/cities.component.ts ***!
  \**************************************************/
/*! exports provided: CitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function() { return CitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities.service */ "./src/app/admin/cities/cities.service.ts");



var CitiesComponent = /** @class */ (function () {
    function CitiesComponent(_cityService) {
        this._cityService = _cityService;
        this.nameFilter = "";
    }
    CitiesComponent.prototype.ngOnInit = function () {
        this.getCities();
        console.log(this.cities);
    };
    CitiesComponent.prototype.setNameProperties = function (nameFilter) {
        this.nameFilter = nameFilter;
        this.filterCity();
    };
    CitiesComponent.prototype.filterCity = function () {
        var _this = this;
        this.filteredCities = this.cities.filter(function (city) { return city.name.toLowerCase().startsWith(_this.nameFilter.toLowerCase()); });
    };
    CitiesComponent.prototype.getCities = function () {
        var _this = this;
        this._cityService.getCities().subscribe(function (cities) { _this.cities = cities; _this.setNameProperties(""); }, function (err) { return console.log(err); });
    };
    CitiesComponent.prototype.deleteCities = function () {
        var _this = this;
        this.cities.forEach(function (city) {
            if (city.selected) {
                _this._cityService.deleteCity(city.id).subscribe(function (data) {
                    console.log("City deleted successfully.");
                    _this.getCities();
                }, function (err) { return console.log(err); });
            }
        });
    };
    CitiesComponent.prototype.deleteCity = function (cityId) {
        var _this = this;
        this._cityService.deleteCity(cityId).subscribe(function (data) {
            console.log("City deleted successfully.");
            _this.getCities();
        }, function (err) { return console.log(err); });
    };
    CitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cities',
            template: __webpack_require__(/*! ./cities.component.html */ "./src/app/admin/cities/cities.component.html"),
            styles: [__webpack_require__(/*! ./cities.component.css */ "./src/app/admin/cities/cities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cities_service__WEBPACK_IMPORTED_MODULE_2__["CitiesService"]])
    ], CitiesComponent);
    return CitiesComponent;
}());



/***/ }),

/***/ "./src/app/admin/cities/cities.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/cities/cities.service.ts ***!
  \************************************************/
/*! exports provided: CitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesService", function() { return CitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CitiesService = /** @class */ (function () {
    function CitiesService(_http) {
        this._http = _http;
        this._citiesUrl = "http://localhost:3000/city";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CitiesService.prototype.getCities = function () {
        console.log("Getting cities from service");
        return this._http.get(this._citiesUrl);
    };
    CitiesService.prototype.getCity = function (id) {
        var getCityURL = this._citiesUrl + "/" + id;
        return this._http.get(getCityURL);
    };
    CitiesService.prototype.addCity = function (newCity) {
        return this._http.post(this._citiesUrl, newCity, this.httpOptions);
    };
    CitiesService.prototype.updateCity = function (updatedCity) {
        var editCityURL = this._citiesUrl + "/" + updatedCity.id;
        return this._http.put(editCityURL, updatedCity, this.httpOptions);
    };
    CitiesService.prototype.deleteCity = function (id) {
        var deleteCityURL = this._citiesUrl + "/" + id;
        return this._http.delete(deleteCityURL);
    };
    CitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CitiesService);
    return CitiesService;
}());



/***/ }),

/***/ "./src/app/admin/cities/city.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/cities/city.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc; \r\n  cursor: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2NpdGllcy9jaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCLENBQUMsYUFBYTtDQUMvQjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7Q0FDZCIsImZpbGUiOiJhZG1pbi9jaXRpZXMvY2l0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogM2VtO1xyXG4gIG1hcmdpbjogLjVlbSAwO1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogI2NjYzsgXHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/cities/city.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/cities/city.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>City Details</h2>\r\n    <table style=\"margin-left:20px\">      \r\n      <tr>\r\n          <td>Name:</td>\r\n          <td>{{city.name}}</td>\r\n        </tr>\r\n      <tr>\r\n        <td>Description:</td>\r\n        <td>{{city.description}}</td>\r\n      </tr>      \r\n    </table>\r\n    <button (click)=\"goBack()\">Back</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/cities/city.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/cities/city.component.ts ***!
  \************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cities.service */ "./src/app/admin/cities/cities.service.ts");





//import "rxjs/add/operator/map";
var CityComponent = /** @class */ (function () {
    function CityComponent(_cityService, route, location) {
        this._cityService = _cityService;
        this.route = route;
        this.location = location;
        this.city = {};
    }
    CityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
        });
        this._cityService.getCity(this.id).subscribe(function (city) { return _this.city = city; }, function (err) { return console.log(err); });
    };
    CityComponent.prototype.goBack = function () {
        this.location.back();
    };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/admin/cities/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/admin/cities/city.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cities_service__WEBPACK_IMPORTED_MODULE_4__["CitiesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/admin/cities/editcity-form.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/cities/editcity-form.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Edit City</h1>\r\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\"> \r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"city.name\" required #nameRef=\"ngModel\">\r\n        <div *ngIf=\"nameRef.invalid && (nameRef.dirty || nameRef.touched)\" class=\"alert alert-danger\">\r\n            <div *ngIf=\"nameRef.errors.required\">\r\n              Name is required.\r\n            </div>        \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"city.description\">\r\n    </div>\r\n       \r\n    <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/cities/editcity-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/cities/editcity-form.component.ts ***!
  \*********************************************************/
/*! exports provided: EditCityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCityFormComponent", function() { return EditCityFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities.service */ "./src/app/admin/cities/cities.service.ts");




var EditCityFormComponent = /** @class */ (function () {
    function EditCityFormComponent(_cityService, route, router) {
        this._cityService = _cityService;
        this.route = route;
        this.router = router;
        this.city = {};
    }
    EditCityFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
            console.log("Obtained id: " + _this.id);
        });
        this._cityService.getCity(this.id).subscribe(function (city) { return _this.city = city; }, function (err) { return console.log(err); });
    };
    EditCityFormComponent.prototype.getCities = function () {
        var _this = this;
        this._cityService.getCities().subscribe(function (cities) { return _this.cities = cities; }, function (err) { return console.log(err); });
    };
    EditCityFormComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        console.log("Before constructing updatedCity");
        var updatedCity = {
            id: this.city.id,
            name: formValue.name,
            description: formValue.description
        };
        console.log("After constructing updatedCity");
        this._cityService.updateCity(updatedCity).subscribe(function (res) {
            console.log("Updated successfully");
            _this.router.navigate(['admin/cities']);
        }, function (err) { return console.log(err); });
    };
    EditCityFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'editcity-form',
            template: __webpack_require__(/*! ./editcity-form.component.html */ "./src/app/admin/cities/editcity-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cities_service__WEBPACK_IMPORTED_MODULE_3__["CitiesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditCityFormComponent);
    return EditCityFormComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");




var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
        //loadChildren: '../admin/admin.module#AdminModule'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tootlbar-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .tootlbar-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  /* Absolute Center Spinner */\r\n  \r\n  .loading {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  /* Transparent Overlay */\r\n  \r\n  .loading:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n  }\r\n  \r\n  /* :not(:required) hides these rules from IE9 and below */\r\n  \r\n  .loading:not(:required) {\r\n    /* hide \"loading...\" text */\r\n    font: 0/0 a;\r\n    color: transparent;\r\n    text-shadow: none;\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n  \r\n  .loading:not(:required):after {\r\n    content: '';\r\n    display: block;\r\n    font-size: 10px;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin-top: -0.5em;\r\n    -webkit-animation: spinner 1500ms infinite linear;\r\n    animation: spinner 1500ms infinite linear;\r\n    border-radius: 0.5em;\r\n    box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n  }\r\n  \r\n  /* Animation */\r\n  \r\n  @-webkit-keyframes spinner {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes spinner {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0dBQ2pCOztFQUVEO0lBQ0UsZUFBZTtHQUNoQjs7RUFFRCw2QkFBNkI7O0VBQzdCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztHQUNWOztFQUVELHlCQUF5Qjs7RUFDekI7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0dBQ25DOztFQUVELDBEQUEwRDs7RUFDMUQ7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFVBQVU7R0FDWDs7RUFFRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUlsRCwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBRXJCLHlTQUF5UztHQUMxUzs7RUFFRCxlQUFlOztFQUVmO0lBQ0U7TUFDRSxnQ0FBZ0M7TUFJaEMsd0JBQXdCO0tBQ3pCO0lBQ0Q7TUFDRSxrQ0FBa0M7TUFJbEMsMEJBQTBCO0tBQzNCO0dBQ0Y7O0VBaUNEO0lBQ0U7TUFDRSxnQ0FBZ0M7TUFJaEMsd0JBQXdCO0tBQ3pCO0lBQ0Q7TUFDRSxrQ0FBa0M7TUFJbEMsMEJBQTBCO0tBQzNCO0dBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vdGxiYXItaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b290bGJhci1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFic29sdXRlIENlbnRlciBTcGlubmVyICovXHJcbiAgLmxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYW5zcGFyZW50IE92ZXJsYXkgKi9cclxuICAubG9hZGluZzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcbiAgXHJcbiAgLyogOm5vdCg6cmVxdWlyZWQpIGhpZGVzIHRoZXNlIHJ1bGVzIGZyb20gSUU5IGFuZCBiZWxvdyAqL1xyXG4gIC5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpIHtcclxuICAgIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gICAgZm9udDogMC8wIGE7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAubG9hZGluZzpub3QoOnJlcXVpcmVkKTphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNWVtO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAtbXMtYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgLTEuNWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xyXG4gIH1cclxuICBcclxuICAvKiBBbmltYXRpb24gKi9cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n        <span *ngIf=\"showLoader\" class=\"loading\"></span>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
        this.title = 'busbooking';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            console.log("vlue of loader is" + val);
            _this.showLoader = val;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_bookbus_bookbus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/bookbus/bookbus.component */ "./src/app/users/bookbus/bookbus.component.ts");
/* harmony import */ var _users_bookhistory_bookhistory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/bookhistory/bookhistory.component */ "./src/app/users/bookhistory/bookhistory.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _users_bus_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/bus.pipe */ "./src/app/users/bus.pipe.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/about/about.component */ "./src/app/admin/about/about.component.ts");
/* harmony import */ var _admin_cities_cities_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/cities/cities.component */ "./src/app/admin/cities/cities.component.ts");
/* harmony import */ var _admin_cities_city_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/cities/city.component */ "./src/app/admin/cities/city.component.ts");
/* harmony import */ var _admin_cities_addcity_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/cities/addcity-form.component */ "./src/app/admin/cities/addcity-form.component.ts");
/* harmony import */ var _admin_cities_editcity_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/cities/editcity-form.component */ "./src/app/admin/cities/editcity-form.component.ts");
/* harmony import */ var _admin_cities_cities_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/cities/cities.service */ "./src/app/admin/cities/cities.service.ts");
/* harmony import */ var _admin_buses_buses_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/buses/buses.component */ "./src/app/admin/buses/buses.component.ts");
/* harmony import */ var _admin_buses_bus_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/buses/bus.component */ "./src/app/admin/buses/bus.component.ts");
/* harmony import */ var _admin_buses_addbus_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/buses/addbus-form.component */ "./src/app/admin/buses/addbus-form.component.ts");
/* harmony import */ var _admin_buses_editbus_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/buses/editbus-form.component */ "./src/app/admin/buses/editbus-form.component.ts");
/* harmony import */ var _admin_buses_buses_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/buses/buses.service */ "./src/app/admin/buses/buses.service.ts");
/* harmony import */ var _admin_admin_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin.guard */ "./src/app/admin/admin.guard.ts");
/* harmony import */ var _users_user_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./users/user.guard */ "./src/app/users/user.guard.ts");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader.service.ts");































var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'user', component: _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"],
        children: [
            { path: 'bookBus', component: _users_bookbus_bookbus_component__WEBPACK_IMPORTED_MODULE_11__["BookbusComponent"],
                canActivate: [_users_user_guard__WEBPACK_IMPORTED_MODULE_29__["UserguardGuard"]] },
            { path: 'bookings', component: _users_bookhistory_bookhistory_component__WEBPACK_IMPORTED_MODULE_12__["BookhistoryComponent"],
                canActivate: [_users_user_guard__WEBPACK_IMPORTED_MODULE_29__["UserguardGuard"]] }
        ]
    },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
        canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_28__["AdminauthGuard"]],
        children: [
            { path: 'admin', component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"] },
            { path: 'cities', component: _admin_cities_cities_component__WEBPACK_IMPORTED_MODULE_18__["CitiesComponent"] },
            { path: 'cities/:id', component: _admin_cities_city_component__WEBPACK_IMPORTED_MODULE_19__["CityComponent"] },
            { path: 'addCity', component: _admin_cities_addcity_form_component__WEBPACK_IMPORTED_MODULE_20__["AddCityFormComponent"] },
            { path: 'editCity/:id', component: _admin_cities_editcity_form_component__WEBPACK_IMPORTED_MODULE_21__["EditCityFormComponent"] },
            { path: 'buses', component: _admin_buses_buses_component__WEBPACK_IMPORTED_MODULE_23__["BusesComponent"] },
            { path: 'buses/:id', component: _admin_buses_bus_component__WEBPACK_IMPORTED_MODULE_24__["BusComponent"] },
            { path: 'addBus', component: _admin_buses_addbus_form_component__WEBPACK_IMPORTED_MODULE_25__["AddBusFormComponent"] },
            { path: 'editBus/:id', component: _admin_buses_editbus_form_component__WEBPACK_IMPORTED_MODULE_26__["EditBusFormComponent"] }
        ] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"],
                _users_bookbus_bookbus_component__WEBPACK_IMPORTED_MODULE_11__["BookbusComponent"],
                _users_bookhistory_bookhistory_component__WEBPACK_IMPORTED_MODULE_12__["BookhistoryComponent"],
                _users_bus_pipe__WEBPACK_IMPORTED_MODULE_15__["BusPipe"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                _admin_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                _admin_cities_cities_component__WEBPACK_IMPORTED_MODULE_18__["CitiesComponent"],
                _admin_cities_city_component__WEBPACK_IMPORTED_MODULE_19__["CityComponent"],
                _admin_cities_addcity_form_component__WEBPACK_IMPORTED_MODULE_20__["AddCityFormComponent"],
                _admin_cities_editcity_form_component__WEBPACK_IMPORTED_MODULE_21__["EditCityFormComponent"],
                _admin_buses_buses_component__WEBPACK_IMPORTED_MODULE_23__["BusesComponent"],
                _admin_buses_bus_component__WEBPACK_IMPORTED_MODULE_24__["BusComponent"],
                _admin_buses_addbus_form_component__WEBPACK_IMPORTED_MODULE_25__["AddBusFormComponent"],
                _admin_buses_editbus_form_component__WEBPACK_IMPORTED_MODULE_26__["EditBusFormComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_14__["OwlNativeDateTimeModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _admin_cities_cities_service__WEBPACK_IMPORTED_MODULE_22__["CitiesService"], _admin_buses_buses_service__WEBPACK_IMPORTED_MODULE_27__["BusesService"], _loader_service__WEBPACK_IMPORTED_MODULE_30__["LoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loader.service.ts":
/*!***********************************!*\
  !*** ./src/app/loader.service.ts ***!
  \***********************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        console.log("we are inside the laoder");
        this.status.next(value);
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = 'http://localhost:3000/user';
        this.socialUserUrl = 'http://localhost:3000/socialUser';
    }
    LoginService.prototype.auth = function (authConfig) {
        window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?client_id=' + authConfig.linkedin.clientId + '&redirect_uri=' + authConfig.linkedin.redirectURI + '&response_type=code';
    };
    LoginService.prototype.getUsersByName = function (email) {
        console.log(this.baseUrl + "/users/name/" + email);
        return this.http.get(this.baseUrl + "/userByMail/" + email);
    };
    LoginService.prototype.registerApplication = function (user) {
        return this.http.post(this.baseUrl + '/createUser', user);
    };
    LoginService.prototype.loginUser = function (user) {
        console.log("going to call login servce" + user);
        return this.http.post(this.baseUrl + '/loginUser', user);
    };
    LoginService.prototype.socialLogin = function () {
        return this.http.get(this.baseUrl + "/socialLogin", { responseType: 'text' });
    };
    LoginService.prototype.getUsersBySocialId = function (socialId) {
        return this.http.get(this.socialUserUrl + "/userBySocialId/" + socialId);
    };
    LoginService.prototype.registerSocialUser = function (socialUser) {
        return this.http.post(this.socialUserUrl + '/createSocialUser', socialUser);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n    height :80px;\r\n    background :#001f33;\r\n    padding-top: 20px;\r\n    padding-right: 10px;\r\n    padding-bottom: 20px;\r\n    padding-left: 10px;   \r\n    text-align: center;\r\n    color:white;\r\n  }\r\n  \r\n  .links{\r\n    height :50px;\r\n    background :#99d6ff;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n    color:black;\r\n  }\r\n  \r\n  .footer{\r\n    height :30px;\r\n    background :#001f33;\r\n    padding-top: 2px;\r\n    padding-bottom:2px;   \r\n    text-align: center;\r\n    color:white;\r\n  }\r\n  \r\n  .mainbody{\r\n    height :450px;\r\n    background :#99d6ff;\r\n    padding-top: 2px;\r\n    padding-bottom:2px;   \r\n    color:white;\r\n  }\r\n  \r\n  .content{\r\n    height :400px;\r\n    background :#e6f5ff;\r\n    padding-top: 20px;\r\n    padding-bottom:20px; \r\n    padding-left: 20px;\r\n    padding-right:20px;\r\n    color:black;  \r\n    border-radius: 20px;\r\n  }\r\n  \r\n  .container-fluid {\r\n    padding-right:0;\r\n    padding-left:0;\r\n    margin-right:auto;\r\n    margin-left:auto\r\n  }\r\n  \r\n  /* a {border: 1px solid #666666;\r\n   background :#001f33 ; \r\n   border-radius: 2px; \r\n   box-shadow: 1px 1px 5px black; \r\n   color: white;\r\n   font-weight: bold; \r\n   padding: 2px; \r\n   text-decoration: none;\r\n   width :250px\r\n  } */\r\n  \r\n  /* a.active {text-decoration: underline;\r\n        color:#e6f5ff;\r\n  } */\r\n  \r\n  th{\r\n    padding-right: 2px;\r\n    padding-left: 2px;\r\n    padding-bottom: 2px;\r\n    padding-top: 2px;\r\n    width:20px;\r\n    font-size: 15px;\r\n}\r\n  \r\n  .emptyField{\r\n    color: red;\r\n    font-style: italic;\r\n    padding-right: 1px;\r\n    padding-left: 1px;\r\n    padding-bottom: 1px;\r\n    padding-top: 1px;\r\n    font-size: 12px;   \r\n}\r\n  \r\n  .section {\r\n\tposition: relative;\r\n\theight: 100vh;\r\n}\r\n  \r\n  .section .section-center {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\tright: 0;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\r\n}\r\n  \r\n  #booking {\r\n  font-family: 'Montserrat', sans-serif;\r\n  background: url('background.jpg') no-repeat;\r\n\r\n\t/* background-image: url('../../img/background.jpg'); */\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n}\r\n  \r\n  #booking::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\ttop: 0;\r\n\tbackground: rgba(47, 103, 177, 0.6);\r\n}\r\n  \r\n  .booking-form {\r\n\tbackground-color: #fff;\r\n\tpadding: 50px 20px;\r\n\tbox-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);\r\n\tborder-radius: 4px;\r\n}\r\n  \r\n  .booking-form .form-group {\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n  \r\n  .booking-form .form-control {\r\n\tbackground-color: #ebecee;\r\n\tborder-radius: 4px;\r\n\tborder: none;\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #3e485c;\r\n\tfont-size: 14px;\r\n}\r\n  \r\n  .booking-form .form-control::-webkit-input-placeholder {\r\n\tcolor: rgba(62, 72, 92, 0.3);\r\n}\r\n  \r\n  .booking-form .form-control::-ms-input-placeholder {\r\n\tcolor: rgba(62, 72, 92, 0.3);\r\n}\r\n  \r\n  .booking-form .form-control::placeholder {\r\n\tcolor: rgba(62, 72, 92, 0.3);\r\n}\r\n  \r\n  .booking-form input[type=\"date\"].form-control:invalid {\r\n\tcolor: rgba(62, 72, 92, 0.3);\r\n}\r\n  \r\n  .booking-form select.form-control {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\n  \r\n  .booking-form select.form-control+.select-arrow {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\tbottom: 4px;\r\n\twidth: 32px;\r\n\tline-height: 32px;\r\n\theight: 32px;\r\n\ttext-align: center;\r\n\tpointer-events: none;\r\n\tcolor: rgba(62, 72, 92, 0.3);\r\n\tfont-size: 14px;\r\n}\r\n  \r\n  .booking-form select.form-control+.select-arrow:after {\r\n\tcontent: '\\279C';\r\n\tdisplay: block;\r\n\t-webkit-transform: rotate(90deg);\r\n\ttransform: rotate(90deg);\r\n}\r\n  \r\n  .booking-form .form-label {\r\n\tdisplay: inline-block;\r\n\tcolor: #3e485c;\r\n\tfont-weight: 700;\r\n\tmargin-bottom: 6px;\r\n\tmargin-left: 7px;\r\n}\r\n  \r\n  .booking-form .submit-btn {\r\n\tdisplay: inline-block;\r\n\tcolor: #fff;\r\n\tbackground-color: #1e62d8;\r\n\tfont-weight: 700;\r\n\tpadding: 14px 30px;\r\n\tborder-radius: 4px;\r\n\tborder: none;\r\n\ttransition: 0.2s all;\r\n}\r\n  \r\n  .booking-form .submit-btn:hover,\r\n.booking-form .submit-btn:focus {\r\n\topacity: 0.9;\r\n}\r\n  \r\n  .booking-cta {\r\n\tmargin-top: 80px;\r\n\tmargin-bottom: 30px;\r\n}\r\n  \r\n  .booking-cta h1 {\r\n\tfont-size: 52px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n}\r\n  \r\n  .booking-cta p {\r\n\tfont-size: 16px;\r\n\tcolor: rgba(255, 255, 255, 0.8);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiOztFQUVEO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7R0FDYjs7RUFFRDtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiOztFQUVEO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjs7RUFFRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixvQkFBb0I7R0FDckI7O0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7R0FDakI7O0VBQ0Q7Ozs7Ozs7OztNQVNJOztFQUNKOztNQUVJOztFQUNKO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkI7O0VBQ0Q7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0VBTUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkOztFQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxRQUFRO0NBQ1IsU0FBUztDQUNULG9DQUFvQztDQUNwQyw0QkFBNEI7Q0FDNUI7O0VBRUQ7RUFDRSxzQ0FBc0M7RUFDdEMsNENBQWlEOztDQUVsRCx3REFBd0Q7Q0FDeEQsdUJBQXVCO0NBQ3ZCLDRCQUE0QjtDQUM1Qjs7RUFFRDtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsT0FBTztDQUNQLG9DQUFvQztDQUNwQzs7RUFFRDtDQUNDLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FFbkIsaURBQWlEO0NBQ2pELG1CQUFtQjtDQUNuQjs7RUFFRDtDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEI7O0VBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixhQUFhO0NBRWIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEI7O0VBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0I7O0VBTUQ7Q0FDQyw2QkFBNkI7Q0FDN0I7O0VBRkQ7Q0FDQyw2QkFBNkI7Q0FDN0I7O0VBRUQ7Q0FDQyw2QkFBNkI7Q0FDN0I7O0VBRUQ7Q0FDQyx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQjs7RUFFRDtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCLGdCQUFnQjtDQUNoQjs7RUFFRDtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsaUNBQWlDO0NBQ2pDLHlCQUF5QjtDQUN6Qjs7RUFFRDtDQUNDLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakI7O0VBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixhQUFhO0NBRWIscUJBQXFCO0NBQ3JCOztFQUVEOztDQUVDLGFBQWE7Q0FDYjs7RUFFRDtDQUNDLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEI7O0VBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsMEJBQTBCO0NBQzFCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakI7O0VBRUQ7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0NBQWdDO0NBQ2hDIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIGhlaWdodCA6ODBweDtcclxuICAgIGJhY2tncm91bmQgOiMwMDFmMzM7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDsgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICAubGlua3N7XHJcbiAgICBoZWlnaHQgOjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kIDojOTlkNmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlcntcclxuICAgIGhlaWdodCA6MzBweDtcclxuICAgIGJhY2tncm91bmQgOiMwMDFmMzM7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MnB4OyAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluYm9keXtcclxuICAgIGhlaWdodCA6NDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kIDojOTlkNmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjJweDsgICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudHtcclxuICAgIGhlaWdodCA6NDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kIDojZTZmNWZmO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4OyBcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgIGNvbG9yOmJsYWNrOyAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MDtcclxuICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvXHJcbiAgfVxyXG4gIC8qIGEge2JvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XHJcbiAgIGJhY2tncm91bmQgOiMwMDFmMzMgOyBcclxuICAgYm9yZGVyLXJhZGl1czogMnB4OyBcclxuICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggYmxhY2s7IFxyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgcGFkZGluZzogMnB4OyBcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICB3aWR0aCA6MjUwcHhcclxuICB9ICovXHJcbiAgLyogYS5hY3RpdmUge3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGNvbG9yOiNlNmY1ZmY7XHJcbiAgfSAqL1xyXG4gIHRoe1xyXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmVtcHR5RmllbGR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5zZWN0aW9uIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNlY3Rpb24gLnNlY3Rpb24tY2VudGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNib29raW5nIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWcvYmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdDtcclxuXHJcblx0LyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9pbWcvYmFja2dyb3VuZC5qcGcnKTsgKi9cclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuI2Jvb2tpbmc6OmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHRvcDogMDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMDMsIDE3NywgMC42KTtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOiA1MHB4IDIwcHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDIwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDVweCAyMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSAuZm9ybS1ncm91cCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ViZWNlZTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGhlaWdodDogNDBweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRjb2xvcjogIzNlNDg1YztcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IHJnYmEoNjIsIDcyLCA5MiwgMC4zKTtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IHJnYmEoNjIsIDcyLCA5MiwgMC4zKTtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IHJnYmEoNjIsIDcyLCA5MiwgMC4zKTtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXS5mb3JtLWNvbnRyb2w6aW52YWxpZCB7XHJcblx0Y29sb3I6IHJnYmEoNjIsIDcyLCA5MiwgMC4zKTtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5ib29raW5nLWZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCsuc2VsZWN0LWFycm93IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDBweDtcclxuXHRib3R0b206IDRweDtcclxuXHR3aWR0aDogMzJweDtcclxuXHRsaW5lLWhlaWdodDogMzJweDtcclxuXHRoZWlnaHQ6IDMycHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGNvbG9yOiByZ2JhKDYyLCA3MiwgOTIsIDAuMyk7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2wrLnNlbGVjdC1hcnJvdzphZnRlciB7XHJcblx0Y29udGVudDogJ1xcMjc5Qyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIC5mb3JtLWxhYmVsIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Y29sb3I6ICMzZTQ4NWM7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRtYXJnaW4tYm90dG9tOiA2cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDdweDtcclxufVxyXG5cclxuLmJvb2tpbmctZm9ybSAuc3VibWl0LWJ0biB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxZTYyZDg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nOiAxNHB4IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG5cdHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG59XHJcblxyXG4uYm9va2luZy1mb3JtIC5zdWJtaXQtYnRuOmhvdmVyLFxyXG4uYm9va2luZy1mb3JtIC5zdWJtaXQtYnRuOmZvY3VzIHtcclxuXHRvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5ib29raW5nLWN0YSB7XHJcblx0bWFyZ2luLXRvcDogODBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uYm9va2luZy1jdGEgaDEge1xyXG5cdGZvbnQtc2l6ZTogNTJweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5ib29raW5nLWN0YSBwIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div id=\"booking\" class=\"section\">\n        <div class=\"section-center\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-7 col-md-push-5\">\n                        <div class=\"booking-cta\">\n                            <h1>Book Your Bus</h1>\n                        </div>\n                    </div>\n                    <div class=\"booking-form col-md-4 col-md-pull-7\" *ngIf=\"signInFlag\">\n                        <form class=\"login-form\" [formGroup]=\"inputForm\" (ngSubmit)=\"login(inputForm.value)\">\n                            <div class=\"form-group\">\n                                <span class=\"form-label\">Log In</span>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <div class=\"form-group\">\n                                        <span for=\"username\" class=\"form-label\">Username</span>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\" Enter Username\"\n                                            formControlName=\"username\" name=\"username\" id=\"username\" />\n                                        <div class=\"alert alert-warning\"\n                                            *ngIf=\"inputForm.controls.username.invalid && (inputForm.controls.username.dirty || inputForm.controls.username.touched)\">\n                                            <p *ngIf=\"inputForm.controls.username.errors.required\">Please Enter\n                                                Username</p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-12\">\n                                    <div class=\"form-group\">\n                                        <span for=\"password\" class=\"form-label\">Password</span>\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n                                            formControlName=\"password\" name=\"password\" id=\"password\" />\n                                        <div class=\"alert alert-warning\"\n                                            *ngIf=\"inputForm.controls.password.invalid && (inputForm.controls.password.dirty || inputForm.controls.password.touched)\">\n                                            <p *ngIf=\"inputForm.controls.password.errors.required\">Please Enter\n                                                Password</p>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-12\">\n                                    <div class=\"form-group\">\n                                        <div class=\"card-footer\">\n                                            <div class=\"d-flex justify-content-center\">\n                                                Don't have an account?\n                                                <button type=\"submit\" class=\"btn btn-link\" (click)=\"SignUp()\">Sign\n                                                    Up</button>\n                                            </div>\n                                            <div class=\"d-flex justify-content-center\">\n                                                <button type=\"button\" class=\"btn btn-link\" (click)=\"social()\">LinkedIn\n                                                    SignIN</button>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-btn\">\n                                <button type=\"submit\" class=\"submit-btn\" [disabled]=\"inputForm.controls.username.invalid \n                      || inputForm.controls.password.invalid\">Login</button>\n                            </div>\n                        </form>\n                    </div>\n\n                    <div class=\"booking-form col-md-5 col-md-pull-7 \" *ngIf=\"signUpFlag\">\n                        <form [formGroup]=\"signUpForm\" (ngSubmit)=\"addUser(signUpForm.value)\">\n                            <div class=\"form-group\">\n                                <span class=\"form-label\">Sign Up</span>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <span for=\"firstName\" class=\"form-label\">First Name</span>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\"\n                                            formControlName=\"firstName\" name=\"firstName\" id=\"firstName\"\n                                            [formGroup]=\"signUpForm\" />\n                                    \n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <span for=\"lastName\" class=\"form-label\">last Name</span>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\"\n                                            name=\"lastName\" id=\"lastName\" placeholder=\" Enter Last Name\"\n                                            [formGroup]=\"signUpForm\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <span for=\"password\" class=\"form-label\">Password</span>\n                                        <input type=\"password\" class=\"form-control\" formControlName=\"password\"\n                                            name=\"password\" id=\"password\" placeholder=\" Enter Password\"\n                                            [formGroup]=\"signUpForm\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <span for=\"confirmPassword\" class=\"form-label\">Confirm Password</span>\n                                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\n                                            name=\"confirmPassword\" id=\"confirmPassword\"\n                                            placeholder=\" Enter confirm Password\" [formGroup]=\"signUpForm\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <span for=\"Location\" class=\"form-label\">Location</span>\n                                        <select name=\"location\" formControlName=\"location\" [formGroup]=\"signUpForm\">\n                                            <option value=\"Pune\">Pune</option>\n                                            <option value=\"Bangalore\">Bangalore</option>\n                                            <option value=\"Chennai\">Chennai</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <span for=\"phoneNumber\" class=\"form-label\">Phone Number</span>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\"\n                                            name=\"phoneNumber\" id=\"phoneNumber\" placeholder=\" Enter Phone Number\"\n                                            [formGroup]=\"signUpForm\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <span for=\"emailId\" class=\"form-label\">Email-ID</span>\n                                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\"\n                                            id=\"email\" placeholder=\" Enter Email\" [formGroup]=\"signUpForm\" />\n                                    </div>\n                                </div>\n\n                                <div class=\"col-sm-12\">\n                                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"signUpForm.controls.firstName.invalid \n                                                || signUpForm.controls.location.invalid\n                                                || signUpForm.controls.lastName.invalid\n                                                || signUpForm.controls.password.invalid\n                                                || signUpForm.controls.confirmPassword.invalid\n                                                || signUpForm.controls.phoneNumber.invalid\n                                                || signUpForm.controls.email.invalid\">\n                                        SIGNUP </button>\n\n\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"emptyField\"\n                                            *ngIf=\"signUpForm.controls.firstName.invalid && (signUpForm.controls.firstName.dirty || signUpForm.controls.firstName.touched)\">\n                                            <p *ngIf=\"signUpForm.controls.firstName.errors.required\">Please Enter First\n                                                Name</p>\n                                            <p *ngIf=\"signUpForm.controls.firstName.errors.pattern\">Please enter valid\n                                                First name</p>\n                                        </div>\n\n                                        <div class=\"emptyField\"\n                                            *ngIf=\"signUpForm.controls.lastName.invalid && (signUpForm.controls.lastName.dirty || signUpForm.controls.lastName.touched)\">\n                                            <p *ngIf=\"signUpForm.controls.lastName.errors.required\">Please Enter last\n                                                Name</p>\n                                            <p *ngIf=\"signUpForm.controls.lastName.errors.pattern\">Please enter valid\n                                                Last name</p>\n                                        </div>\n\n                                        <div class=\"emptyField\"\n                                            *ngIf=\"signUpForm.controls.password.invalid && (signUpForm.controls.password.dirty || signUpForm.controls.password.touched)\">\n                                            <p *ngIf=\"signUpForm.controls.password.errors.required\">Please Enter\n                                                Password</p>\n                                            <p *ngIf=\"signUpForm.controls.password.errors.pattern\">Password length must\n                                                be between 8 to 12\n                                            </p>\n                                        </div>\n\n                                        <div class=\"emptyField\"\n                                            *ngIf=\"signUpForm.controls.confirmPassword.invalid && (signUpForm.controls.confirmPassword.dirty || signUpForm.controls.confirmPassword.touched)\">\n                                            <p *ngIf=\"signUpForm.controls.confirmPassword.errors.required\">Please Enter\n                                                Confirm Password\n                                            </p>\n                                            <p *ngIf=\"signUpForm.controls.confirmPassword.errors.isError\">Password and\n                                                Confirm Must be\n                                                same</p>\n                                        </div>\n\n                                        <div class=\"emptyField\"\n                                            *ngIf=\"signUpForm.controls.location.invalid && (signUpForm.controls.location.dirty || signUpForm.controls.location.touched)\">\n                                            <p *ngIf=\"signUpForm.controls.location.errors.required\">Please select\n                                                Location</p>\n                                        </div>\n\n                                        <div class=\"emptyField\"\n                                            *ngIf=\"signUpForm.controls.phoneNumber.invalid && (signUpForm.controls.phoneNumber.dirty || signUpForm.controls.phoneNumber.touched)\">\n                                            <p *ngIf=\"signUpForm.controls.phoneNumber.errors.required\">Contact Number is\n                                                required</p>\n                                            <p *ngIf=\"signUpForm.controls.phoneNumber.errors.pattern\">Please enter valid\n                                                Contact No</p>\n                                        </div>\n\n                                        <div class=\"emptyField\"\n                                            *ngIf=\"signUpForm.controls.email.invalid && (signUpForm.controls.email.dirty || signUpForm.controls.email.touched)\">\n                                            <p *ngIf=\"signUpForm.controls.email.errors.required\">Email is required</p>\n                                            <p *ngIf=\"signUpForm.controls.email.errors.pattern\">Please enter valid email\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <!-- </div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _admin_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin/admin.guard */ "./src/app/admin/admin.guard.ts");
/* harmony import */ var _users_user_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users/user.guard */ "./src/app/users/user.guard.ts");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader.service */ "./src/app/loader.service.ts");










var LoginComponent = /** @class */ (function () {
    // constructor(private router: Router , private loginService : LoginService,private adminGuard : AdminauthGuard,private empGuard:EmpguardGuard) {
    // }
    function LoginComponent(router, loginService, adminGuard, userGuard, loaderService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.adminGuard = adminGuard;
        this.userGuard = userGuard;
        this.loaderService = loaderService;
        this.signInFlag = true;
        this.signUpFlag = false;
        this.adminFlag = false;
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.adminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('admin@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.specPattern = "^[a-zA-Z ]*$";
        this.phonePattern = "^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$";
        this.expPattern = "^(2[01]|[12][0-9]|[1-9])$ ";
        this.passwordPattern = "^.{8,12}$";
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.specPattern)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.specPattern)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.passwordPattern)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [this.passValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.phonePattern)])
        });
        this.authServerBaseUrl = 'http://localhost:3000';
        this.config = {
            "loginRoute": "login",
            "linkedin": {
                "authEndpoint": this.authServerBaseUrl + "/auth/linkedin",
                "clientId": "81nv211t2onjlb",
                //  "redirectURI" : this.authServerBaseUrl+"/auth/linkedin/callback"
                "redirectURI": "http://127.0.0.1:3000/auth/linkedin"
                //"redirectURI" : "https://127.0.0.1:4200/login"
            }
        };
        this.signUpForm.controls.password.valueChanges
            .subscribe(function (x) { return _this.signUpForm.controls.confirmPassword.updateValueAndValidity(); });
    }
    // ngOnInit() {
    //   this.adminGuard.loggedIn(false);  
    //   this.empGuard.loggedIn(false);
    // }
    LoginComponent.prototype.ngOnInit = function () {
        this.adminGuard.loggedIn(false);
        this.userGuard.loggedIn(false);
    };
    LoginComponent.prototype.SignIn = function () {
        this.adminFlag = false;
        this.signInFlag = true;
        this.signUpFlag = false;
        //alert("inside signin");
    };
    LoginComponent.prototype.SignUp = function () {
        this.adminFlag = false;
        this.signInFlag = false;
        this.signUpFlag = true;
        //alert("inside signup");
    };
    LoginComponent.prototype.LoginAsAdmin = function () {
        this.adminFlag = true;
        this.signInFlag = false;
        this.signUpFlag = false;
        // alert("inside admin");
    };
    //public auth(provider:string, authConfig: any):void{
    LoginComponent.prototype.social = function () {
        this.userGuard.loggedIn(true);
        this.loginService.auth(this.config);
    };
    LoginComponent.prototype.passValidator = function (control) {
        if (control && (control.value != null || control.value !== undefined)) {
            var cnfPassword = control.value;
            var passControl = control.root.get('password');
            if (passControl) {
                var passValue = passControl.value;
                if (passValue !== cnfPassword || passValue === '') {
                    return {
                        isError: true
                    };
                }
                ;
                return null;
            }
        }
    };
    LoginComponent.prototype.login = function (inputForm) {
        var _this = this;
        this.loaderService.display(true);
        this.loginService.loginUser(inputForm)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            localStorage.clear();
            var decodedTokenRole = JSON.parse(JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_4__(data))).role;
            localStorage.setItem('token', data.toString());
            if (JSON.parse(JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_4__(data))).role === 'user') {
                _this.userGuard.loggedIn(true);
                _this.router.navigate(['user']);
            }
            else {
                _this.adminGuard.loggedIn(true);
                _this.router.navigate(['admin']);
            }
        }, function (error) {
            _this.loaderService.display(false);
            localStorage.clear();
            alert(error.error.message);
        });
    };
    ;
    LoginComponent.prototype.addUser = function (signUpForm) {
        var _this = this;
        this.loaderService.display(true);
        this.loginService.getUsersByName(this.signUpForm.value.email)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            alert("User with this e mail already exist , please use different email id");
        }, function (error) {
            _this.loaderService.display(false);
            _this.loginService.registerApplication(signUpForm)
                .subscribe(function (data) {
                alert("User registered successfully, please check your mailbox.");
                _this.SignIn();
                //this.router.navigate(['/admin/dashEmployee']);
            });
        });
    };
    ;
    LoginComponent.prototype.handleServerError = function (error) {
        this.errorArr = [];
        if (error.status === 500 || error.status === 400) {
            alert(error.error.errorMessage);
        }
        else if ((error.status === 404 && this.inputForm.value.username != 'admin') || error.status === 422) {
            alert("There is no such user !!!");
            this.router.navigate['/login'];
        }
        else if (error.status === 406) {
            error.error.error.forEach(function (element) {
                alert(element);
            });
        }
    };
    LoginComponent.prototype.handleSuccessErrorGrowls = function (data) {
        if (data['message']) {
            alert(data['message']);
        }
        else if (data['success']) {
            alert(data['message']);
        }
        else if (data['info']) {
            alert(data['message']);
        }
        else {
            alert(data['message']);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _admin_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminauthGuard"], _users_user_guard__WEBPACK_IMPORTED_MODULE_7__["UserguardGuard"], _loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/bookbus/DateValidation.ts":
/*!*************************************************!*\
  !*** ./src/app/users/bookbus/DateValidation.ts ***!
  \*************************************************/
/*! exports provided: DateValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidation", function() { return DateValidation; });
var DateValidation = /** @class */ (function () {
    function DateValidation() {
    }
    DateValidation.ValidDate = function (control) {
        var date1 = new Date().toISOString().slice(0, 10);
        console.log("type is " + Date.parse(new Date().toISOString()));
        console.log("type is " + typeof (date1));
        var date = +date1;
        console.log("type is " + typeof (date));
        console.log("today date" + date);
        var bdate = control.value; // to get value in input tag
        var bdate1 = bdate;
        console.log("b date is " + Date.parse(bdate1));
        console.log("bdate is " + bdate);
        if (Date.parse(new Date().toISOString()) > Date.parse(bdate1)) {
            console.log("inside the if stmt");
            return {
                DateValid: {
                    DateValid: true
                }
            };
        }
        return null;
    };
    return DateValidation;
}());



/***/ }),

/***/ "./src/app/users/bookbus/bookbus.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users/bookbus/bookbus.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\r\n    font-size:20px;\r\n    font-family:serif;\r\n    text-align: center;\r\n    color: aliceblue\r\n    }\r\n    .mbutton {\r\n    font-size:4px;\r\n    font-family:serif;\r\n    text-align: center;\r\n    }\r\n    .obutton{\r\n    font-size:20px;\r\n    width:80px;\r\n    height:45px;\r\n    }\r\n    /* Styles for wrapping the search box */\r\n    .main {\r\n    width: 50%;\r\n    margin: 50px auto;\r\n}\r\n    /* Bootstrap 4 text input with search icon */\r\n    .has-search .form-control {\r\n    padding-left: 2.375rem;\r\n}\r\n    .has-search .form-control-feedback {\r\n    position: absolute;\r\n    z-index: 2;\r\n    display: block;\r\n    width: 2.375rem;\r\n    height: 2.375rem;\r\n    line-height: 2.375rem;\r\n    text-align: center;\r\n    pointer-events: none;\r\n    color: #aaa;\r\n}\r\n    .options{\r\n        font-size:20px;\r\n        font-display: bold;\r\n        font-family:serif;\r\n        font-family: 'Courier New', Courier, monospace;\r\n        padding: 10px !important;\r\n        font: outline;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL2Jvb2tidXMvYm9va2J1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0tBQ2Y7SUFDRDtJQUNBLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0tBQ2xCO0lBQ0Q7SUFDQSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7S0FDWDtJQUNELHdDQUF3QztJQUU1QztJQUNJLFdBQVc7SUFDWCxrQkFBa0I7Q0FDckI7SUFFRCw2Q0FBNkM7SUFFN0M7SUFDSSx1QkFBdUI7Q0FDMUI7SUFFRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtDQUNmO0lBRUc7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQiwrQ0FBK0M7UUFDL0MseUJBQXlCO1FBQ3pCLGNBQWM7S0FDakIiLCJmaWxlIjoidXNlcnMvYm9va2J1cy9ib29rYnVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YSB7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGZvbnQtZmFtaWx5OnNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZVxyXG4gICAgfVxyXG4gICAgLm1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOjRweDtcclxuICAgIGZvbnQtZmFtaWx5OnNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm9idXR0b257XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIHdpZHRoOjgwcHg7XHJcbiAgICBoZWlnaHQ6NDVweDtcclxuICAgIH1cclxuICAgIC8qIFN0eWxlcyBmb3Igd3JhcHBpbmcgdGhlIHNlYXJjaCBib3ggKi9cclxuXHJcbi5tYWluIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuLyogQm9vdHN0cmFwIDQgdGV4dCBpbnB1dCB3aXRoIHNlYXJjaCBpY29uICovXHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIuMzc1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbiAgICAub3B0aW9uc3tcclxuICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6c2VyaWY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udDogb3V0bGluZTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/users/bookbus/bookbus.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/bookbus/bookbus.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" *ngIf=\"buses.length == 0\">\n  <strong>Warning!</strong> No Buses In Database........\n</div>\n<div *ngIf=\"flagM\" class=\"input-group col-md-12\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search Buses Based On Keyword In List\" #val>\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"searchIssues(val.value)\">\n      <i class=\"fa fa-search\"></i>\n    </button>\n  </div>\n</div>\n<div *ngIf=\"flagM\" class=\"col-md-12\">\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th class=\"data\">Route</th>\n        <th class=\"data\">Description</th>\n        <th class=\"data\">From</th>\n        <th class=\"data\">To</th>\n        <th class=\"data\">Seating Capacity</th>\n        <th class=\"data\">Book</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let bus of buses | bus:searchText\">\n        <td class=\"data\">{{bus.route}}</td>\n        <td class=\"data\">{{bus.description}}</td>\n        <td class=\"data\">{{bus.fromCity}}</td>\n        <td class=\"data\">{{bus.toCity}}</td>\n        <td class=\"data\">{{bus.totalSeats}}</td>\n        <td><button class=\"btn btn-danger obutton\" (click)=\"bookBus(bus)\">Book</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div *ngIf=\"flagT\">\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit(searchForm.value)\">\n        <div *ngIf=\"flagT\" class=\"col-*-10\">\n          <label class=\" control-label\"><strong>DATE OF JOURNEY:</strong></label>\n          <div class=\" options inputGroupContainer\">\n            <!-- <div><input [disabled] =\"true\" type=\"date\" id=\"bdate\" formControlName=\"bdate\" name=\"bdate\" placeholder=\"Enter Date\" [formGroup]=\"searchForm\" (change)=\"dateEnyered()\"></div> -->\n            <div><input [min]=\"min\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" name=\"bdate\" id=\"bdate\" readonly\n                placeholder=\"\" formControlName=\"bdate\" [disabled]=\"dateSelect\" (dateTimeChange)=\"dateEntered()\">\n              <owl-date-time #dt1 [pickerType]=\"'calendar'\" [pickerMode]=\"'dialog'\"></owl-date-time>\n            </div>\n          </div>\n          <div class=\"options\" *ngIf=\"emailFlag\">\n            Email : <input type=\"text\" id=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Enter EMail\"\n              [formGroup]=\"searchForm\">\n            <div\n              *ngIf=\"searchForm.controls.email.invalid && (searchForm.controls.email.dirty || searchForm.controls.email.touched)\">\n              <p *ngIf=\"searchForm.controls.email.errors.required\">Email is required</p>\n              <p *ngIf=\"searchForm.controls.email.errors.pattern\">Please enter valid email\n            </div>\n          </div>\n          <div class=\"options\" *ngIf=\"showSeats\">\n            <strong>AVAILABLE SEATS FOR THIS DATE :</strong> {{seatsLeft}}<br> <strong>TOTAL SEATS TO BOOK :</strong>\n            <input type=\"number\" id=\"seats\" formControlName=\"seats\" name=\"seats\" placeholder=\"\" [formGroup]=\"searchForm\"\n              min=\"1\" max=\"3\"><strong>( BETWEEN 1 AND 3 )</strong> <br><br>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"searchForm.controls.seats.invalid\">\n              Book Bus\n            </button>\n          </div>\n          <div class=\"options\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"cancel()\">\n              Cancel\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div\n      *ngIf=\"searchForm.controls.bdate.invalid && (searchForm.controls.bdate.dirty || searchForm.controls.bdate.touched)\">\n      <p *ngIf=\"searchForm.controls.bdate.errors.DateValid\">Enter A Future Date</p>\n      <div\n        *ngIf=\"searchForm.controls.seats.invalid && (searchForm.controls.seats.dirty || searchForm.controls.seats.touched)\">\n        <p *ngIf=\"searchForm.controls.seats.errors.DateValid\">Enter valid seats</p>\n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/users/bookbus/bookbus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/bookbus/bookbus.component.ts ***!
  \****************************************************/
/*! exports provided: BookbusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookbusComponent", function() { return BookbusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _DateValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateValidation */ "./src/app/users/bookbus/DateValidation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");










var BookbusComponent = /** @class */ (function () {
    function BookbusComponent(router, userService, loginService, datePipe, loaderService) {
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
        this.datePipe = datePipe;
        this.loaderService = loaderService;
        this.flagT = false;
        this.flagM = false;
        this.emailFlag = false;
        this.showSeats = false;
        this.dateSelect = true;
        this.emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]),
            busid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            totalSeats: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            route: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            seats: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            bdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _DateValidation__WEBPACK_IMPORTED_MODULE_5__["DateValidation"].ValidDate])
        });
        this.empForm = new FormData();
        this.socialForm = new FormData();
        this.flagM = true;
        this.flagT = false;
        this.showSeats = false;
        this.dateSelect = true;
        this.emailFlag = false;
    }
    BookbusComponent.prototype.ngOnInit = function () {
        this.min = new Date();
        this.min.setDate(this.min.getDate());
        this.getBuses();
    };
    BookbusComponent.prototype.bookBus = function (bus) {
        var myData = JSON.stringify(bus);
        var myData1 = JSON.parse(myData);
        this.empForm.append('busid', myData1['id']);
        this.empForm.append('seats', myData1['totalSeats']);
        this.empForm.append('route', myData1['route']);
        this.flagM = false;
        this.flagT = true;
    };
    BookbusComponent.prototype.cancel = function () {
        this.flagM = true;
        this.flagT = false;
    };
    BookbusComponent.prototype.getBuses = function () {
        var _this = this;
        this.userService.getBuses()
            .subscribe(function (data) {
            _this.flagM = true;
            _this.flagT = false;
            _this.buses = data;
        }, function (error) {
            if (error.status === 404) {
                alert("No Buses Present in the database");
            }
            ;
        });
    };
    BookbusComponent.prototype.searchIssues = function (val) {
        this.searchText = val;
    };
    BookbusComponent.prototype.dateEntered = function () {
        var _this = this;
        if (this.searchForm.controls.bdate.valid) {
            this.showSeats = true;
            this.dateSelect = false;
            var bdate_1 = this.datePipe.transform(this.searchForm.value.bdate, 'yyyy-MM-dd');
            var object = {};
            this.empForm.forEach(function (value, key) {
                object[key] = value;
            });
            var json = JSON.stringify(object);
            var myData = JSON.stringify(this.empForm);
            var myData1 = JSON.parse(myData);
            this.userService.getBusStatus(JSON.parse(json).busid, bdate_1)
                .subscribe(function (data) {
                var a = data.seats;
                _this.seatsLeft = (JSON.parse(json).seats - a);
                if (localStorage.getItem('userType') == 'socialFirstTime') {
                    _this.emailFlag = true;
                }
                _this.empForm.append('bdate', bdate_1);
            }, function (error) {
                if (error.status === 404) {
                    alert("No Buses Present in the database");
                }
                ;
            });
        }
    };
    BookbusComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loaderService.display(true);
        var email;
        if (localStorage.getItem('userType') == 'socialFirstTime') {
            email = this.searchForm.value.email;
            localStorage.setItem('socialEmail', email);
            this.socialForm.append('email', email);
            var socialId = JSON.parse(JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('token')))).id;
            this.socialForm.append('socialId', socialId);
            var object1 = {};
            this.socialForm.forEach(function (value, key) {
                object1[key] = value;
            });
            var json1 = JSON.stringify(object1);
            this.loginService.registerSocialUser(JSON.parse(json1))
                .subscribe(function (data) {
            }, function (error) {
            });
        }
        if (localStorage.getItem('userType') == 'social') {
            email = localStorage.getItem('socialEmail');
        }
        if (localStorage.getItem('userType') == null) {
            email = JSON.parse(JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_7__(localStorage.getItem('token')))).email;
        }
        this.empForm.append('email', email);
        if (this.searchForm.value.seats > 3) {
            this.loaderService.display(false);
            alert("Seats Must be bwtween 1 and 3 ");
        }
        else {
            if (this.seatsLeft < this.searchForm.value.seats) {
                this.loaderService.display(false);
                alert("Seats Must be less than " + this.seatsLeft);
            }
            else {
                this.empForm.append('seats', this.searchForm.value.seats);
                var object = {};
                this.empForm.forEach(function (value, key) {
                    object[key] = value;
                });
                var json = JSON.stringify(object);
                this.userService.doBooking(JSON.parse(json))
                    .subscribe(function (data) {
                    _this.loaderService.display(false);
                    alert("Booking Done, lease check your mailbox");
                    _this.router.navigate(['user']);
                }, function (error) {
                    _this.loaderService.display(false);
                });
            }
        }
    };
    BookbusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookbus',
            template: __webpack_require__(/*! ./bookbus.component.html */ "./src/app/users/bookbus/bookbus.component.html"),
            styles: [__webpack_require__(/*! ./bookbus.component.css */ "./src/app/users/bookbus/bookbus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], src_app_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"]])
    ], BookbusComponent);
    return BookbusComponent;
}());



/***/ }),

/***/ "./src/app/users/bookhistory/bookhistory.component.css":
/*!*************************************************************!*\
  !*** ./src/app/users/bookhistory/bookhistory.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data {\r\n\tfont-size:20px;\r\n\tfont-family:serif;\r\n\ttext-align: center;\r\n\tcolor: aliceblue\r\n\t}\r\n\t.mbutton {\r\n\tfont-size:4px;\r\n\tfont-family:serif;\r\n\ttext-align: center;\r\n\t}\r\n\t.obutton{\r\n\tfont-size:20px;\r\n\twidth:80px;\r\n\theight:45px;\r\n\t}\r\n\t/* Styles for wrapping the search box */\r\n\t.main {\r\n\twidth: 50%;\r\n\tmargin: 50px auto;\r\n}\r\n\t/* Bootstrap 4 text input with search icon */\r\n\t.has-search .form-control {\r\n\tpadding-left: 2.375rem;\r\n}\r\n\t.has-search .form-control-feedback {\r\n\tposition: absolute;\r\n\tz-index: 2;\r\n\tdisplay: block;\r\n\twidth: 2.375rem;\r\n\theight: 2.375rem;\r\n\tline-height: 2.375rem;\r\n\ttext-align: center;\r\n\tpointer-events: none;\r\n\tcolor: #aaa;\r\n}\r\n\t.options{\r\n\t\t\tfont-size:20px;\r\n\t\t\tfont-display: bold;\r\n\t\t\tfont-family:serif;\r\n\t\t\tfont-family: 'Courier New', Courier, monospace;\r\n\t\t\tpadding: 10px !important;\r\n\t\t\tfont: outline;\r\n\t}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL2Jvb2toaXN0b3J5L2Jvb2toaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7RUFDZjtDQUNEO0NBQ0EsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixtQkFBbUI7RUFDbEI7Q0FDRDtDQUNBLGVBQWU7Q0FDZixXQUFXO0NBQ1gsWUFBWTtFQUNYO0NBQ0Qsd0NBQXdDO0NBRXpDO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQjtDQUVELDZDQUE2QztDQUU3QztDQUNDLHVCQUF1QjtDQUN2QjtDQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1o7Q0FFQTtHQUNFLGVBQWU7R0FDZixtQkFBbUI7R0FDbkIsa0JBQWtCO0dBQ2xCLCtDQUErQztHQUMvQyx5QkFBeUI7R0FDekIsY0FBYztFQUNmIiwiZmlsZSI6InVzZXJzL2Jvb2toaXN0b3J5L2Jvb2toaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YSB7XHJcblx0Zm9udC1zaXplOjIwcHg7XHJcblx0Zm9udC1mYW1pbHk6c2VyaWY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiBhbGljZWJsdWVcclxuXHR9XHJcblx0Lm1idXR0b24ge1xyXG5cdGZvbnQtc2l6ZTo0cHg7XHJcblx0Zm9udC1mYW1pbHk6c2VyaWY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQub2J1dHRvbntcclxuXHRmb250LXNpemU6MjBweDtcclxuXHR3aWR0aDo4MHB4O1xyXG5cdGhlaWdodDo0NXB4O1xyXG5cdH1cclxuXHQvKiBTdHlsZXMgZm9yIHdyYXBwaW5nIHRoZSBzZWFyY2ggYm94ICovXHJcblxyXG4ubWFpbiB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuLyogQm9vdHN0cmFwIDQgdGV4dCBpbnB1dCB3aXRoIHNlYXJjaCBpY29uICovXHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDIuMzc1cmVtO1xyXG59XHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMi4zNzVyZW07XHJcblx0aGVpZ2h0OiAyLjM3NXJlbTtcclxuXHRsaW5lLWhlaWdodDogMi4zNzVyZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG5cdC5vcHRpb25ze1xyXG5cdFx0XHRmb250LXNpemU6MjBweDtcclxuXHRcdFx0Zm9udC1kaXNwbGF5OiBib2xkO1xyXG5cdFx0XHRmb250LWZhbWlseTpzZXJpZjtcclxuXHRcdFx0Zm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuXHRcdFx0cGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG5cdFx0XHRmb250OiBvdXRsaW5lO1xyXG5cdH0iXX0= */"

/***/ }),

/***/ "./src/app/users/bookhistory/bookhistory.component.html":
/*!**************************************************************!*\
  !*** ./src/app/users/bookhistory/bookhistory.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" *ngIf=\"bookings.length == 0\">\n  <strong>Warning!</strong> No Bookings History........\n</div>\n<div *ngIf=\"bookings.length > 0\">\n  <div class=\"input-group col-md-12\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search Bookings Based On Keyword \" #val>\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"searchIssues(val.value)\">\n        <i class=\"fa fa-search\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"input-group col-md-12\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th class=\"data\">Booking Id</th>\n          <th class=\"data\">Bus ID</th>\n          <th class=\"data\">Route No</th>\n          <th class=\"data\">Booked Seats</th>\n          <th class=\"data\">Email</th>\n          <th class=\"data\">Booking Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let booking of bookings |bus:searchText\">\n          <td class=\"hidden data\">{{booking._id}}</td>\n          <td class=\"data\">{{booking.busid}}</td>\n          <td class=\"data\">{{booking.route}}</td>\n          <td class=\"data\">{{booking.seats}}</td>\n          <td class=\"data\">{{booking.email}}</td>\n          <td class=\"data\">{{booking.bdate| date: 'dd/MM/yyyy'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/bookhistory/bookhistory.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/bookhistory/bookhistory.component.ts ***!
  \************************************************************/
/*! exports provided: BookhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookhistoryComponent", function() { return BookhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader.service */ "./src/app/loader.service.ts");






var BookhistoryComponent = /** @class */ (function () {
    function BookhistoryComponent(router, userService, loaderService) {
        this.router = router;
        this.userService = userService;
        this.loaderService = loaderService;
    }
    BookhistoryComponent.prototype.searchIssues = function (val) {
        this.searchText = val;
    };
    BookhistoryComponent.prototype.ngOnInit = function () {
        this.getBookings();
    };
    BookhistoryComponent.prototype.getBookings = function () {
        var _this = this;
        this.loaderService.display(true);
        var email;
        if (localStorage.getItem('userType') == 'social' || localStorage.getItem('userType') == 'socialFirstTime') {
            email = localStorage.getItem('socialEmail');
        }
        else {
            email = JSON.parse(JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem('token')))).email;
        }
        this.userService.getBookings(email)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            _this.bookings = data;
        }, function (error) {
            _this.loaderService.display(false);
            if (error.status === 404) {
                alert("No Bokkings Present in the database...");
            }
            ;
        });
    };
    BookhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookhistory',
            template: __webpack_require__(/*! ./bookhistory.component.html */ "./src/app/users/bookhistory/bookhistory.component.html"),
            styles: [__webpack_require__(/*! ./bookhistory.component.css */ "./src/app/users/bookhistory/bookhistory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], BookhistoryComponent);
    return BookhistoryComponent;
}());



/***/ }),

/***/ "./src/app/users/bus.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/users/bus.pipe.ts ***!
  \***********************************/
/*! exports provided: BusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusPipe", function() { return BusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BusPipe = /** @class */ (function () {
    function BusPipe() {
    }
    BusPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        var filteredList = [];
        if (items.length > 0) {
            searchText = searchText.toLowerCase();
            items.forEach(function (item) {
                var PropValueList = Object.values(item);
                console.log("proplist value is " + PropValueList);
                for (var i = 0; i < PropValueList.length; i++) {
                    if (PropValueList[i]) {
                        if (PropValueList[i].toString().toLowerCase().indexOf(searchText) > -1) {
                            filteredList.push(item);
                            console.log("final list is " + filteredList);
                            break;
                        }
                    }
                }
            });
        }
        return filteredList;
    };
    BusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'bus'
        })
    ], BusPipe);
    return BusPipe;
}());



/***/ }),

/***/ "./src/app/users/user.guard.ts":
/*!*************************************!*\
  !*** ./src/app/users/user.guard.ts ***!
  \*************************************/
/*! exports provided: UserguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserguardGuard", function() { return UserguardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserguardGuard = /** @class */ (function () {
    function UserguardGuard(router) {
        this.router = router;
        this.loggedInUser = false;
    }
    UserguardGuard.prototype.loggedIn = function (value) {
        this.loggedInUser = value;
    };
    UserguardGuard.prototype.canActivate = function (next, state) {
        if (this.loggedInUser === true) {
            return true;
        }
        if (this.loggedInUser === false) {
            alert("You are not logged in, please login!!!");
            this.router.navigate(['/admin']);
            return false;
        }
    };
    UserguardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserguardGuard);
    return UserguardGuard;
}());



/***/ }),

/***/ "./src/app/users/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/users/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/bus';
        this.bookingUrl = 'http://localhost:3000/booking';
    }
    UserService.prototype.getBuses = function () {
        return this.http.get(this.baseUrl + "/buses");
    };
    UserService.prototype.getBusStatus = function (busid, bdate) {
        console.log("busid" + busid);
        console.log("bdate is " + bdate);
        return this.http.get(this.bookingUrl + '/busStatus' + '/' + busid + '/' + bdate);
    };
    UserService.prototype.getBookings = function (email) {
        return this.http.get(this.bookingUrl + '/userBookings' + '/' + email);
    };
    UserService.prototype.doBooking = function (booking) {
        return this.http.post(this.bookingUrl + '/doBooking', booking);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n    height :80px;\r\n    background :#001f33;\r\n    padding-top: 20px;\r\n    padding-right: 10px;\r\n    padding-bottom: 20px;\r\n    padding-left: 10px;   \r\n    text-align: center;\r\n    color:white;\r\n}\r\n\r\n.links{\r\n    height :50px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n    color:black;\r\n}\r\n\r\n.footer{\r\n    height :30px;\r\n    background :#001f33;\r\n    padding-top: 2px;\r\n    padding-bottom:2px;   \r\n    text-align: center;\r\n    color:white;\r\n}\r\n\r\n.content{\r\n    padding-top: 40px;\r\n    padding-bottom:20px; \r\n    padding-left: 20px;\r\n    padding-right:20px;\r\n    color:white\r\n}\r\n\r\n.container-fluid {\r\n    padding-right:0;\r\n    padding-left:0;\r\n    margin-right:auto;\r\n    margin-left:auto\r\n }\r\n\r\na {border: 3px solid 4d94ff;\r\n   background :#4d94ff;\r\n   border-radius: 4px; \r\n   box-shadow: 3px 3px 5px 4d94ff; \r\n   color: rgb(41, 1, 1);\r\n   font-weight: bold; \r\n   padding: 10px; \r\n   text-decoration: none;\r\n   width :300px\r\n  }\r\n\r\na.active {text-decoration: underline;\r\n        color:#e6f5ff;\r\n  }\r\n\r\n.logo{\r\n    height :80px;\r\n    background :#001f33;\r\n    padding-top: 20px;\r\n    padding-right: 10px;\r\n    padding-bottom: 20px;\r\n    padding-left: 10px;   \r\n    text-align: center;\r\n    color:white;\r\n  }\r\n\r\n.footer{\r\n    height :30px;\r\n    background :#001f33;\r\n    padding-top: 2px;\r\n    padding-bottom:2px;   \r\n    text-align: center;\r\n    color:white;\r\n  }\r\n\r\n.mainbody{\r\n    height :450px;\r\n    background :#99d6ff;\r\n    padding-top: 2px;\r\n    padding-bottom:2px;   \r\n    color:white;\r\n  }\r\n\r\n.container-fluid {\r\n    padding-right:0;\r\n    padding-left:0;\r\n    margin-right:auto;\r\n    margin-left:auto\r\n  }\r\n\r\nth{\r\n    padding-right: 2px;\r\n    padding-left: 2px;\r\n    padding-bottom: 2px;\r\n    padding-top: 2px;\r\n    width:20px;\r\n    font-size: 15px;\r\n}\r\n\r\n.emptyField{\r\n    color: red;\r\n    font-style: italic;\r\n    padding-right: 1px;\r\n    padding-left: 1px;\r\n    padding-bottom: 1px;\r\n    padding-top: 1px;\r\n    font-size: 12px;   \r\n}\r\n\r\n.section {\r\n\tposition: relative;\r\n\theight: 100vh;\r\n}\r\n\r\n.section .section-center {\r\n\tposition: absolute;\r\n\ttop: 50;\r\n\tleft: 0;\r\n\tright: 0;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n#booking {\r\n  font-family: 'Montserrat', sans-serif;\r\n  background: url('background.jpg') no-repeat;\r\n\t/* background-image: url('../../img/background.jpg'); */\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n}\r\n\r\n#booking::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\ttop: 0;\r\n\tbackground: rgba(47, 103, 177, 0.6);\r\n}\r\n\r\n.booking-cta {\r\n\tmargin-top: 200px;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.booking-cta h1 {\r\n\tfont-size: 52px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.booking-cta p {\r\n\tfont-size: 16px;\r\n\tcolor: rgba(255, 255, 255, 0.8);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztDQUNkOztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUVELEdBQUcseUJBQXlCO0dBQzFCLG9CQUFvQjtHQUNwQixtQkFBbUI7R0FDbkIsK0JBQStCO0dBQy9CLHFCQUFxQjtHQUNyQixrQkFBa0I7R0FDbEIsY0FBYztHQUNkLHNCQUFzQjtHQUN0QixZQUFZO0dBQ1o7O0FBQ0gsVUFBVSwyQkFBMkI7UUFDN0IsY0FBYztHQUNuQjs7QUFFRDtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7O0FBRUQ7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0dBQ2I7O0FBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7R0FDakI7O0FBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjs7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsUUFBUTtDQUNSLFFBQVE7Q0FDUixTQUFTO0NBQ1Qsb0NBQW9DO0NBQ3BDLDRCQUE0QjtDQUM1Qjs7QUFFRDtFQUNFLHNDQUFzQztFQUN0Qyw0Q0FBaUQ7Q0FDbEQsd0RBQXdEO0NBQ3hELHVCQUF1QjtDQUN2Qiw0QkFBNEI7Q0FDNUI7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFFBQVE7Q0FDUixTQUFTO0NBQ1QsVUFBVTtDQUNWLE9BQU87Q0FDUCxvQ0FBb0M7Q0FDcEM7O0FBR0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCOztBQUdEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdDQUFnQztDQUNoQyIsImZpbGUiOiJ1c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgICBoZWlnaHQgOjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kIDojMDAxZjMzO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtze1xyXG4gICAgaGVpZ2h0IDo1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIGhlaWdodCA6MzBweDtcclxuICAgIGJhY2tncm91bmQgOiMwMDFmMzM7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MnB4OyAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4OyBcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0b1xyXG4gfVxyXG5cclxuIGEge2JvcmRlcjogM3B4IHNvbGlkIDRkOTRmZjtcclxuICAgYmFja2dyb3VuZCA6IzRkOTRmZjtcclxuICAgYm9yZGVyLXJhZGl1czogNHB4OyBcclxuICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNGQ5NGZmOyBcclxuICAgY29sb3I6IHJnYig0MSwgMSwgMSk7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgcGFkZGluZzogMTBweDsgXHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgd2lkdGggOjMwMHB4XHJcbiAgfVxyXG5hLmFjdGl2ZSB7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6I2U2ZjVmZjtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgaGVpZ2h0IDo4MHB4O1xyXG4gICAgYmFja2dyb3VuZCA6IzAwMWYzMztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXJ7XHJcbiAgICBoZWlnaHQgOjMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kIDojMDAxZjMzO1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjJweDsgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICAubWFpbmJvZHl7XHJcbiAgICBoZWlnaHQgOjQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZCA6Izk5ZDZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToycHg7ICAgXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0b1xyXG4gIH1cclxuIFxyXG4gIHRoe1xyXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmVtcHR5RmllbGR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgICBcclxufVxyXG4uc2VjdGlvbiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5zZWN0aW9uLWNlbnRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNib29raW5nIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWcvYmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdDtcclxuXHQvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2ltZy9iYWNrZ3JvdW5kLmpwZycpOyAqL1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4jYm9va2luZzo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0dG9wOiAwO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoNDcsIDEwMywgMTc3LCAwLjYpO1xyXG59XHJcblxyXG5cclxuLmJvb2tpbmctY3RhIHtcclxuXHRtYXJnaW4tdG9wOiAyMDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uYm9va2luZy1jdGEgaDEge1xyXG5cdGZvbnQtc2l6ZTogNTJweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcblxyXG4uYm9va2luZy1jdGEgcCB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn0gIl19 */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"booking\" class=\"section\">\n  <div class=\"section-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-md-push-5\">\n          <div class=\"booking-cta\">\n            <h1>Book Your Bus</h1>\n          </div>\n        </div>\n      </div>\n      <div class=\"links\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <a routerLink=\"bookBus\" routerLinkActive=\"active\">Book Bus</a>&nbsp;&nbsp;&nbsp;&nbsp;\n            <a routerLink=\"bookings\" routerLinkActive=\"active\">Booking History</a>&nbsp;&nbsp;&nbsp;&nbsp;\n          </div>\n          <div class=\"col-sm-2\">\n            <button type=\"button\" class=\"btn btn-danger\"  (click)=\"logout()\">Logout</button>\n          </div>\n        </div>\n        <div>\n          <div class=\"content\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _user_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.guard */ "./src/app/users/user.guard.ts");








var UsersComponent = /** @class */ (function () {
    function UsersComponent(router, route, location, loginService, userGuard) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.loginService = loginService;
        this.userGuard = userGuard;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.queryParamMap.get("token") != null) {
            this.userGuard.loggedIn(true);
            var token = this.route.snapshot.queryParamMap.get("token");
            var socialId = JSON.parse(JSON.stringify(jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token))).id;
            console.log('socialId is ' + socialId);
            this.loginService.getUsersBySocialId(socialId)
                .subscribe(function (data) {
                localStorage.setItem('userType', 'social');
                localStorage.setItem('socialEmail', data[0]['email']);
                localStorage.setItem('token', _this.route.snapshot.queryParamMap.get("token").toString());
                console.log("usertype at initis " + localStorage.getItem('userType'));
            }, function (error) {
                localStorage.setItem('userType', 'socialFirstTime');
                console.log("usertype at initis " + localStorage.getItem('userType'));
                localStorage.setItem('token', _this.route.snapshot.queryParamMap.get("token").toString());
            });
        }
    };
    UsersComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _user_guard__WEBPACK_IMPORTED_MODULE_6__["UserguardGuard"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Moder_Web_Full_Stack\Bus_Booking\busbooking\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map