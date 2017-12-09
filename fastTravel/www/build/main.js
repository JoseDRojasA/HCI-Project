webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageModule", function() { return UserDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_details__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserDetailsPageModule = (function () {
    function UserDetailsPageModule() {
    }
    return UserDetailsPageModule;
}());
UserDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_details__["a" /* UserDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_details__["a" /* UserDetailsPage */]),
        ],
    })
], UserDetailsPageModule);

//# sourceMappingURL=user-details.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity-details/activity-details.module": [
		153
	],
	"../pages/login/login.module": [
		155
	],
	"../pages/register-form/register-form.module": [
		159
	],
	"../pages/rute-details/rute-details.module": [
		160
	],
	"../pages/user-details/user-details.module": [
		111
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsPageModule", function() { return ActivityDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_details__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityDetailsPageModule = (function () {
    function ActivityDetailsPageModule() {
    }
    return ActivityDetailsPageModule;
}());
ActivityDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activity_details__["a" /* ActivityDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_details__["a" /* ActivityDetailsPage */]),
        ],
    })
], ActivityDetailsPageModule);

//# sourceMappingURL=activity-details.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityDetailsPage = (function () {
    function ActivityDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activity = this.navParams.get('activity');
        this.image = 0;
        this.changeImage();
    }
    ActivityDetailsPage.prototype.changeImage = function () {
        /*
        setTimeout(() => {
          if (this.image < this.activity.images.length - 1) {
            this.image++;
          } else {
            this.image = 0;
          }
          console.log(this.image);
          this.changeImage();
        }, 2000);
        */
    };
    return ActivityDetailsPage;
}());
ActivityDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-activity-details',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/activity-details/activity-details.html"*/'<!--\n  Generated template for the ActivityDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{activity.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<div class="image">\n\n  <img style="\n    padding-top: 55px;\n    " src="{{\'assets/imgs/\' + activity.images[image]}}" />\n\n  <div class="background">\n\n  </div>\n  <div class="recommendations">\n    <span class="travelling">Recomendaciones</span>\n    <ul>\n      <ng-template ngFor let-recommendation [ngForOf]="activity.recommendations">\n        <li>{{recommendation}}</li>\n      </ng-template>\n    </ul>\n  </div>\n</div>\n<div class="time_price">\n  <table>\n    <tbody>\n      <tr>\n        <td>\n          {{\'USD \' + activity.price}}\n        </td>\n        <td>\n          {{activity.time + \' minutos\'}}\n        </td>\n      </tr>\n      <tr>\n        <td>\n        </td>\n        <td>\n          240 votos\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class="ranking-container">\n  <ion-range min="1" max="5" step="1" snaps="true" [(ngModel)]="activity.scores[0]" color="danger">\n    <ion-icon range-right color="brown" name="flag"></ion-icon>\n  </ion-range>\n\n  <ion-range min="1" max="5" step="1" snaps="true" [(ngModel)]="activity.scores[1]" color="danger">\n    <ion-icon range-right color="brown" name="flag"></ion-icon>\n  </ion-range>\n\n  <ion-range min="1" max="5" step="1" snaps="true" [(ngModel)]="activity.scores[2]" color="danger" style="border-bottom: #f0ca68 2px solid;">\n    <ion-icon range-right color="brown" name="flag"></ion-icon>\n  </ion-range>\n</div>\n<div class="ranking-container">\n  <table *ngFor="let comment of activity.comments">\n    <tbody>\n      <tr>\n        <td style="width: 70px;">\n          <img class="user-image" src="{{\'assets/imgs/\' + comment.image}}">\n        </td>\n        <td>\n          <p class="user-name">\n            {{comment.user}}\n          </p>\n\n          <p class="user-comment">\n            {{comment.comment}}\n          </p>\n          <div>\n            <table class="icon-table">\n              <tr>\n                <td class="points-td">\n                  <ion-icon name="ios-thumbs-up-outline"></ion-icon>\n                  <label>{{comment.stars[0]}}</label>\n\n                  <ion-icon name="ios-thumbs-down-outline"></ion-icon>\n                  <label>{{comment.stars[1]}}</label>\n\n                  <ion-icon name="ios-text-outline"></ion-icon>\n                  <label>Comentar</label>\n                </td>\n\n                <td>\n                  {{comment.date}}\n                </td>\n              </tr>\n            </table>\n\n\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/activity-details/activity-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ActivityDetailsPage);

//# sourceMappingURL=activity-details.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global_resources_class__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_form_register_form__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, globalResources) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalResources = globalResources;
        this.user = {
            user: undefined,
            password: undefined,
            name: undefined,
            picture: undefined,
            lastName: undefined,
            travelLevel: undefined
        };
        this.filled = false;
    }
    LoginPage.prototype.checkUser = function () {
        this.filled = this.user.user !== undefined &&
            this.user.user.length !== 0 &&
            this.user.password !== undefined &&
            this.user.password.length !== 0;
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__register_form_register_form__["a" /* RegisterFormPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ingreso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="globalResources.user === undefined">\n  <div class="center-text">\n    <img src="assets/imgs/logo.jpg">\n  </div>\n\n\n  <ion-item>\n    <ion-label floating>Usuario</ion-label>\n    <ion-input type="text" [(ngModel)]="user.user" (ngModelChange)="checkUser()"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Contraseña</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password" (ngModelChange)="checkUser()"></ion-input>\n  </ion-item>\n\n  <div padding>\n    <button ion-button color="primary" block [disabled]="!filled">Ingresar</button>\n  </div>\n  <div padding>\n    <label class="blue" (click)="goToRegister()">No estas registrado? Registrate</label>\n  </div>\n</ion-content>\n<ion-content padding *ngIf="globalResources.user !== undefined">\n  <ion-item>\n    <ion-label>Usuario</ion-label>\n    <ion-label>{{globalResources.user.user}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-label>{{globalResources.user.name + \' \' + globalResources.user.lastName}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Nivel de viaje</ion-label>\n    <ion-label>{{globalResources.user.travelLevel}}</ion-label>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__app_global_resources_class__["a" /* GlobalResources */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_details_user_details__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global_resources_class__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_database_class__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterFormPage = (function () {
    function RegisterFormPage(navCtrl, navParams, database, globalResources) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.globalResources = globalResources;
        this.user = {
            user: undefined,
            password: undefined,
            name: undefined,
            lastName: undefined,
            picture: undefined,
            travelLevel: 1
        };
        this.filled = false;
    }
    RegisterFormPage.prototype.ngAfterViewInit = function () {
        if (this.globalResources.user !== undefined) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__user_details_user_details__["a" /* UserDetailsPage */]);
        }
    };
    RegisterFormPage.prototype.checkUser = function () {
        this.filled = this.user.lastName !== undefined &&
            this.user.lastName.length !== 0 &&
            this.user.name !== undefined &&
            this.user.name.length !== 0 &&
            this.user.password !== undefined &&
            this.user.password.length !== 0 &&
            this.user.user !== undefined &&
            this.user.user.length !== 0;
    };
    RegisterFormPage.prototype.saveUser = function () {
        this.database.users[this.user.user] = this.user.password;
        this.globalResources.user = this.user;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    return RegisterFormPage;
}());
RegisterFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-register-form',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/register-form/register-form.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Nombres</ion-label>\n    <ion-input type="text" [(ngModel)]="user.name" (ngModelChange)="checkUser()"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Apellidos</ion-label>\n    <ion-input type="text" [(ngModel)]="user.lastName" (ngModelChange)="checkUser()"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Usuario</ion-label>\n    <ion-input type="text" [(ngModel)]="user.user" (ngModelChange)="checkUser()"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Contraseña</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password" (ngModelChange)="checkUser()"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Nivel de viajero</ion-label>\n    <ion-range min="1" max="3" step="1" snaps="true" color="danger" [(ngModel)]="user.travelLevel">\n      <ion-icon range-left small color="danger" name="star-outline"></ion-icon>\n      <ion-icon range-right color="danger" name="star"></ion-icon>\n    </ion-range>\n  </ion-item>\n  <div padding>\n    <button ion-button color="primary" block [disabled]="!filled" (click)="saveUser()">Registrar</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/register-form/register-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__app_database_class__["a" /* Database */],
        __WEBPACK_IMPORTED_MODULE_2__app_global_resources_class__["a" /* GlobalResources */]])
], RegisterFormPage);

//# sourceMappingURL=register-form.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global_resources_class__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserDetailsPage = (function () {
    function UserDetailsPage(navCtrl, navParams, globalResources) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalResources = globalResources;
        this.user = this.globalResources.user;
    }
    UserDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserDetailsPage');
    };
    return UserDetailsPage;
}());
UserDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-user-details',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/user-details/user-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Información del usuario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  {{user.name}}\n</ion-content>'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/user-details/user-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__app_global_resources_class__["a" /* GlobalResources */]])
], UserDetailsPage);

//# sourceMappingURL=user-details.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormPageModule", function() { return RegisterFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_form__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterFormPageModule = (function () {
    function RegisterFormPageModule() {
    }
    return RegisterFormPageModule;
}());
RegisterFormPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register_form__["a" /* RegisterFormPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_form__["a" /* RegisterFormPage */]),
        ],
    })
], RegisterFormPageModule);

//# sourceMappingURL=register-form.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteDetailsPageModule", function() { return RuteDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rute_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RuteDetailsPageModule = (function () {
    function RuteDetailsPageModule() {
    }
    return RuteDetailsPageModule;
}());
RuteDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__rute_details__["a" /* RuteDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rute_details__["a" /* RuteDetailsPage */]),
        ],
    })
], RuteDetailsPageModule);

//# sourceMappingURL=rute-details.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activity_details_activity_details__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_database_class__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RuteDetailsPage = (function () {
    function RuteDetailsPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.rute = this.database.rutes[this.navParams.get('rute').title];
    }
    RuteDetailsPage.prototype.viewActivityDetail = function (activity, event) {
        if (event.deltaX < 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__activity_details_activity_details__["a" /* ActivityDetailsPage */], {
                'activity': activity
            });
        }
    };
    return RuteDetailsPage;
}());
RuteDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-rute-details',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/rute-details/rute-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{rute.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher pulling-icon="ion-load-d" spinner="ios-small"></ion-refresher>\n  <ng-template ngFor let-town [ngForOf]="rute.towns">\n    <div class="divider-title">{{town.name}}</div>\n    <ul class="timeline">\n      <ng-template ngFor let-place [ngForOf]="town.places">\n        <ng-template ngFor let-activity [ngForOf]="place.activities">\n          <li (swipe)="viewActivityDetail(activity, $event)">\n            <div class="timeline-thumb bg-color-yellow timeline-icon">\n              <!--<img src="{{activity.images[0]}}"> -->\n            </div>\n            <div class="timeline-item">\n              <h6 style="padding-top: 10px; margin: 0; font-size: 22px;" class="travelling">{{place.name}}</h6>\n              <h6>{{activity.name}}</h6>\n              <div class="timeline-stats">\n                {{activity.price | currency}}\n                <span class="pos-absolute-right">\n                  {{activity.time + \' minutos\'}}</span>\n              </div>\n            </div>\n          </li>\n        </ng-template>\n      </ng-template>\n    </ul>\n  </ng-template>\n</ion-content>'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/rute-details/rute-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__app_database_class__["a" /* Database */]])
], RuteDetailsPage);

//# sourceMappingURL=rute-details.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rute_preview_rute_preview__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__rute_preview_rute_preview__["a" /* RutePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__rute_preview_rute_preview__["a" /* RutePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_user_details_user_details_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_register_form_register_form_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_activity_details_activity_details_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_resources_class__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_class__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_rute_details_rute_details_module__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var pages = [
    __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["L" /* NgModule */])({
        declarations: pages,
        entryComponents: pages,
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_1__pages_register_form_register_form_module__["RegisterFormPageModule"],
            __WEBPACK_IMPORTED_MODULE_15__pages_rute_details_rute_details_module__["RuteDetailsPageModule"],
            __WEBPACK_IMPORTED_MODULE_2__pages_activity_details_activity_details_module__["ActivityDetailsPageModule"],
            __WEBPACK_IMPORTED_MODULE_0__pages_user_details_user_details_module__["UserDetailsPageModule"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/activity-details/activity-details.module#ActivityDetailsPageModule', name: 'ActivityDetailsPage', segment: 'activity-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register-form/register-form.module#RegisterFormPageModule', name: 'RegisterFormPage', segment: 'register-form', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rute-details/rute-details.module#RuteDetailsPageModule', name: 'RuteDetailsPage', segment: 'rute-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-details/user-details.module#UserDetailsPageModule', name: 'UserDetailsPage', segment: 'user-details', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* IonicApp */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__database_class__["a" /* Database */],
            __WEBPACK_IMPORTED_MODULE_3__global_resources_class__["a" /* GlobalResources */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_rute_details_rute_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RutePreviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RutePreviewComponent = (function () {
    function RutePreviewComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.stars = new Array();
    }
    RutePreviewComponent.prototype.ngOnChanges = function () {
        for (var i = 0; i < this.rute.stars; i++) {
            this.stars.push(1);
        }
    };
    RutePreviewComponent.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_rute_details_rute_details__["a" /* RuteDetailsPage */], {
            'rute': this.rute
        });
    };
    return RutePreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], RutePreviewComponent.prototype, "rute", void 0);
RutePreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'rute-preview',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/components/rute-preview/rute-preview.html"*/'<img style="\nwidth: 100vw;\nmargin-left: -31px;\nborder-bottom: 5px solid rgb(113, 76, 57);\nmax-width: none; \n" src="{{\'assets/imgs/\' + rute.image}}" (swipe)="goToPage()" />'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/components/rute-preview/rute-preview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], RutePreviewComponent);

//# sourceMappingURL=rute-preview.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuComponent = (function () {
    function MenuComponent() {
        console.log('Hello MenuComponent Component');
        this.text = 'Hello World';
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-menu',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/components/menu/menu.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <label class="fast bebas" style="font-weight: normal;">Fast</label>\n      <label class="route bebas">Route</label>\n    </ion-title>\n  </ion-navbar>\n</ion-header>'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/components/menu/menu.html"*/
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Rutas', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalResources; });
var GlobalResources = (function () {
    function GlobalResources() {
    }
    return GlobalResources;
}());

//# sourceMappingURL=global-resources.class.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
var Database = (function () {
    function Database() {
        this.users = {};
        this.rutes = {
            'San Gil Salvaje': {
                name: 'San Gil Salvaje',
                stars: 5,
                plan: 'Aventura',
                image: 'route_2.png',
                towns: [{
                        name: 'Bucaramanga',
                        department: 'Santander',
                        places: [
                            {
                                name: 'Mesa de los santos',
                                activities: [
                                    {
                                        name: 'Montar bicicleta',
                                        scores: [
                                            5, 4, 4
                                        ],
                                        time: '180',
                                        comments: [{
                                                user: 'Álvaro Ramirez',
                                                stars: [63, 6],
                                                comment: 'Muy buen plan. Se pueden tomar excelentes fotos',
                                                image: 'user_1.png',
                                                date: '22 nov'
                                            }, {
                                                user: 'Tatiana Moreno',
                                                stars: [28, 0],
                                                comment: 'Vistas espectaculares',
                                                image: 'user_6.jpg',
                                                date: '12 sep'
                                            }, {
                                                user: 'Hector Vargas',
                                                stars: [45, 0],
                                                comment: 'Uno de mis sitios favoritos para visitar en Santander',
                                                image: 'user_7.jpg',
                                                date: '13 jun'
                                            }],
                                        images: ['activity_1.jpg'],
                                        price: 0,
                                        recommendations: ['Llevar bebida para hidratarse',
                                            'Se puede llevar bicicleta todoterreno o de ruta']
                                    },
                                    {
                                        name: 'Visitar el mercado campesino',
                                        scores: [
                                            5, 4, 4
                                        ],
                                        time: '120',
                                        comments: [
                                            {
                                                user: 'Juan Lopez',
                                                stars: [4, 5, 4],
                                                comment: 'Muy bonito',
                                                image: 'user_2.png',
                                                date: '08 nov'
                                            }
                                        ],
                                        images: ['activity_2.jpg'],
                                        price: 0,
                                        recommendations: ['Llevar presupuesto por que puede ser un poco costoso']
                                    }
                                ],
                                recommendations: [],
                                comments: []
                            },
                            {
                                name: 'Parque Nacional del Chicamocha',
                                activities: [
                                    {
                                        name: 'Parapente chicamocha',
                                        scores: [4, 4, 4],
                                        time: '40',
                                        price: 5,
                                        images: ['activity_3.jpg'],
                                        comments: [
                                            {
                                                user: 'Liz Rangel',
                                                stars: [5, 5, 4],
                                                comment: 'Al principio te da un poco de miedo' +
                                                    ' pero luego de botarse es lo mejor',
                                                image: 'user_3.png',
                                                date: '22 sep'
                                            }
                                        ],
                                        recommendations: [
                                            'No apto para gente con problemas del corazón',
                                            'Solamente tirate y disfruta'
                                        ]
                                    }
                                ],
                                recommendations: [],
                                comments: []
                            },
                            {
                                name: 'Curiti',
                                activities: [
                                    {
                                        name: 'Cueva de la Vaca',
                                        scores: [5, 5, 4],
                                        time: '120',
                                        comments: [
                                            {
                                                user: 'Tato Albarracin',
                                                stars: [5, 5, 5],
                                                comment: 'Es muy genial ese lugar',
                                                image: 'user_4.png',
                                                date: '17 feb'
                                            }
                                        ],
                                        images: [
                                            'activity_4.jpg'
                                        ],
                                        price: 20,
                                        recommendations: [
                                            'No apto para claustrofóbicos',
                                            'Llevar protección para el agua para las cámaras'
                                        ]
                                    }
                                ],
                                recommendations: [],
                                comments: []
                            }
                        ]
                    }]
            },
            'Chicamocha Extremo': {
                name: 'Chicamocha Extremo',
                stars: 5,
                plan: 'Aventura',
                image: 'route_1.png',
                towns: [
                    {
                        name: 'Chicamocha',
                        department: 'Santander',
                        places: [
                            {
                                name: 'Parque Nacional del Chicamocha',
                                activities: [
                                    {
                                        name: 'Teleférico',
                                        scores: [5, 5, 4],
                                        time: '60',
                                        comments: [{
                                                user: 'Juliana Arango',
                                                stars: [4, 4, 3],
                                                comment: 'Mucha fila, toca mandar a alguien a guardar puesto',
                                                image: 'user_8.jpg',
                                                date: '17 abr'
                                            }],
                                        images: ['activity_5.jpg'],
                                        price: 10,
                                        recommendations: [
                                            'Es un poco costoso pero llegas bastante rapido desde la mesa de los Santos'
                                        ]
                                    },
                                    {
                                        name: 'Columpio',
                                        scores: [5, 4, 3],
                                        time: '60',
                                        comments: [{
                                                user: 'Angie Gutierez',
                                                stars: [4, 5, 4],
                                                comment: 'Llegar temprano ya que se forma mucha cola',
                                                image: 'user_5.png',
                                                date: '17 oct'
                                            }],
                                        images: ['activity_6.jpg'],
                                        price: 10,
                                        recommendations: [
                                            'Llegar lo antes posible ya que suele formarse mucha fila'
                                        ]
                                    }
                                ],
                                comments: [],
                                recommendations: []
                            }
                        ]
                    }
                ]
            }
        };
    }
    return Database;
}());

//# sourceMappingURL=database.class.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_database_class__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, database) {
        this.navCtrl = navCtrl;
        this.database = database;
        var rutes = this.database.rutes;
        this.rutes = new Array();
        for (var i in rutes) {
            this.rutes.push({
                title: rutes[i].name,
                stars: rutes[i].stars,
                image: rutes[i].image
            });
        }
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/home/home.html"*/'<app-menu>\n</app-menu>\n<ion-content padding>\n  <div class="container-fluid">\n    <div class="row">\n      <ng-template ngFor let-rute [ngForOf]="rutes">\n        <div class="col-sm-12">\n          <rute-preview [rute]="rute"></rute-preview>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/jose/Projects/UIS/HCI - Github/fastTravel/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__app_database_class__["a" /* Database */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map