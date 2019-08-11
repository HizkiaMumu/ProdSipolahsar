webpackJsonp([1],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPageModule = (function () {
    function FilterPageModule() {
    }
    FilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]),
            ],
        })
    ], FilterPageModule);
    return FilterPageModule;
}());

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = (function () {
    function FilterPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FilterPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\filter\filter.html"*/`<!--\n\n  Generated template for the ModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkBlue">\n\n    <ion-title style="padding: 0px 12px 0px 110px">Filter Produk</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()" style="font-size: 2rem;">X</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n      \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item color="filterColor01" style="min-height: 30px;">\n\n    <ion-label no-margin style="font-size: 1rem; text-align: center;">\n\n      Bahan Baku Produk\n\n    </ion-label>\n\n  </ion-item>\n\n  <!-- Default Checkbox -->\n\n  <div color="filterColor02">\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Abon</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Bakso</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Keripik</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Kerupuk</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Bandeng</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Kamar Mandi</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Kamar Anak</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n  </div>\n\n\n\n  <ion-item color="filterColor01" style="min-height: 30px;">\n\n    <ion-label no-margin style="font-size: 1rem; text-align: center;">\n\n      Daerah\n\n    </ion-label>\n\n  </ion-item>\n\n\n\n   <div color="filterColor02">\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Dinding</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Langit</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Lantai</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Atap</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="filterColor01">Furnitur</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n  </div>\n\n\n\n<ion-item color="filterColor02" style="min-height: 30px;">\n\n    <ion-label no-margin style="font-size: 1rem; text-align: center;">\n\n      Terapkan\n\n    </ion-label>\n\n</ion-item>\n\n<!-- Checkboxes in a List -->\n\n<ion-list>\n\n  <ion-item *ngFor="let entry of form">\n\n    <ion-label>{{entry.val}}</ion-label>\n\n    <ion-checkbox slot="end" [(ngModel)]="entry.isChecked"></ion-checkbox>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=1.js.map