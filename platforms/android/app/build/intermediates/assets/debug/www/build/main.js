webpackJsonp([11],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailProdukPage; });
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


var DetailProdukPage = (function () {
    function DetailProdukPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.data;
        console.log('**navParams:', this.navParams);
    }
    DetailProdukPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DetailProdukPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailProdukPage');
    };
    DetailProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-produk',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\detail-produk\detail-produk.html"*/'<!-- HEADER -->\n<ion-header>\n  <ion-navbar color="darkBlue">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n          <ion-buttons start>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-8 style="margin: auto;">\n          <ion-title style="text-align:center;">\n            Detail Produk\n          </ion-title>\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<!-- BODY -->\n<ion-content>\n  <ion-navbar style="background-color: rgb(142, 142, 142); height: 130px;" >\n    <img src="assets/imgs/logo2.png" width="20%" height="auto" class="image">\n    <p style="font-size: 1.5rem; text-align: center; padding: 3px 0px 0px 0px; margin: 0px !important; color:darkblue;">{{ this.item.brand }}</p>\n    <p style="font-size: 1rem; text-align: center; padding: 0px 0px 0px 0px; margin: 0px !important; color:rgb(34, 34, 34);">{{ this.item.nama_lengkap }}</p>\n  </ion-navbar>\n  <ion-navbar color="white">\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Daerah</p>\n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.nama_daerah }}</p>\n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Pemasaran</p>\n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.pemasaran }}</p>\n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Jenis Produk</p>\n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.jenis_produk }}</p>\n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Bahan baku</p>\n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.bahan }}</p>\n        </b>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n  <ion-navbar color="white">\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Nama Produk</p>\n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.nama_produk }}</p>\n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Kebutuhan Produk</p>\n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.kebutuhan }}</p>\n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Keterangan</p>\n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.keterangan }}</p>\n        </b>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-content>\n'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\detail-produk\detail-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailProdukPage);
    return DetailProdukPage;
}());

//# sourceMappingURL=detail-produk.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailUkmPage; });
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


var DetailUkmPage = (function () {
    function DetailUkmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.data;
        console.log('**navParams:', this.navParams);
    }
    DetailUkmPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DetailUkmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailUkmPage');
    };
    DetailUkmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-ukm',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\detail-ukm\detail-ukm.html"*/'<!-- HEADER -->\n<ion-header>\n  <ion-navbar color="darkBlue">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col col-2 style="padding: 5px;">\n          <ion-buttons start>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-8 style="margin: auto;">\n          <ion-title style="text-align:center;">\n            Detail UKM\n          </ion-title>\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n   \n<!-- BODY -->\n<ion-content>\n  <ion-navbar style="background-color: rgb(230, 230, 230); height: 130px;">\n    <img src="assets/imgs/logo2.png" width="20%" height="auto" class="image">\n    <p style="font-size: 1.5rem; text-align: center; padding: 3px 0px 0px 0px; margin: 0px !important; color:darkblue;">{{ this.item.brand }}</p>\n    <p style="font-size: 1rem; text-align: center; padding: 0px 0px 0px 0px; margin: 0px !important; color:rgb(34, 34, 34);">{{ this.item.nama_lengkap }}</p>\n  </ion-navbar>\n  <ion-navbar color="white">\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Daerah</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.nama_daerah }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Alamat</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.25rem;">{{ this.item.alamat }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">No. Hp</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.no_hp }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n  <ion-navbar color="white">\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">PIRT</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.pirt }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Halal</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.halal }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">SIUP</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.siup }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">TDI/TC</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.tdi_tdp }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">Badan Hukum</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.badan_hukum }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n        <p style="font-size: 1.5rem;color:rgb(142, 142, 142);">E-mail</p>  \n      </ion-col>\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n        <b>\n          <p style="font-size: 1.5rem;">{{ this.item.email }}</p>  \n        </b>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-content>\n'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\detail-ukm\detail-ukm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailUkmPage);
    return DetailUkmPage;
}());

//# sourceMappingURL=detail-ukm.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opening_satu_opening_satu__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingPage = (function () {
    function LoadingPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__opening_satu_opening_satu__["a" /* OpeningSatuPage */]);
        }, 4000);
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoadingPage');
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loading',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\loading\loading.html"*/'<!-- BODY -->\n<ion-content padding style="background-color: rgb(6, 0, 91);">\n  <img src="assets/imgs/Logo/logo sipolahsar logo wht.png" class="image">\n  <img src="assets/icon/Spinner-0.5s-200px.gif" class="loading">\n</ion-content>'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningSatuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpeningSatuPage = (function () {
    function OpeningSatuPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.buttonText = 'Skip';
    }
    OpeningSatuPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 0) {
            this.buttonText = 'Skip';
        }
        else if (currentIndex != 0) {
            this.buttonText = 'Saya Mengerti';
        }
        console.log('Current index is', currentIndex);
    };
    OpeningSatuPage.prototype.continue = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OpeningSatuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpeningSatuPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], OpeningSatuPage.prototype, "slides", void 0);
    OpeningSatuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opening-satu',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\opening-satu\opening-satu.html"*/'<!-- HEADER -->\n<ion-header></ion-header>\n\n<!-- BODY -->\n<ion-content padding>\n  <div class="slide-zoom">\n    <ion-slides pager (ionSlideDidChange)="slideChanged()">\n      <ion-slide style="color: white; background-color: rgb(140, 148, 206)">\n      <h1 class="slide-title" style="font-size: 3rem; margin-top: 50%;">Selamat Datang</h1>\n      <p style="font-size: 1.2rem;">SIPOLAHSAR kependekan dari Sistem Informasi Pengolah dan Pemasar oleh Dinas Kelautan dan Perikanan Provinsi Jawa Barat yang berfungsi sebagai aplikasi untuk menampilkan produk-produk kelautan dan perikanan di Provinsi Jawa Barat</p>\n      <img src="assets/imgs/screen 1.png" class="slide-image"/>\n    </ion-slide>\n    <ion-slide style="color: rgb(99, 99, 99);background-color: #FFF;">\n      <img src="assets/imgs/screen 2.png" class="slide-image" style="margin-top: 10%;"/>\n      <h1 class="slide-title" style="font-size:3rem; margin-top: 30%;">UKM dan Produk</h1>\n      <p style="font-size : 1.2rem;">Anda bisa mendapatkan informasi lengkap terkait UKM di Jawa Barat yang menghasilkan produk-produk kelautan dan perikanan berkualitas tinggi. Silakan hubungi kontak yang tertera di dalam bagian UKM.</p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n\n<!-- FOOTER -->\n<ion-footer >\n  <ion-toolbar *ngIf="this.buttonText == \'Skip\'">\n    <ion-buttons end>\n        <button ion-button clear color="light" (click)="this.continue()"  style="text-transform: none;" >{{ this.buttonText }}</button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color="darkBlue2" *ngIf="this.buttonText != \'Skip\'">\n    <ion-buttons end>\n      <button ion-button clear color="light" (click)="this.continue()"  style="text-transform: none;">{{ this.buttonText }}</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\opening-satu\opening-satu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OpeningSatuPage);
    return OpeningSatuPage;
}());

//# sourceMappingURL=opening-satu.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_host_host__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_profil__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jenis_produk_jenis_produk__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jenis_ukm_jenis_ukm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(48);
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
    function HomePage(navCtrl, navParams, platform, host, http, modalCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.host = host;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.home = "home-produk";
        this.isAndroid = false;
        this.dataFilterUkm = [];
        this.dataFilterProduk = [];
        this.isSearchBarOpened = false;
        this.filterOpened = false;
        this.isAndroid = platform.is('android');
        this.getDataProduk();
        this.getDataUkm();
        this.initDataProduk();
        this.initDataUkm();
    }
    HomePage.prototype.setActiveButton = function (button) {
        this.activeButton = button;
    };
    // DATA PRODUK
    HomePage.prototype.getDataProduk = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/*',
            })
        };
        this.http.get(this.host.baseUrl + "/v1/data/kategori-produk", httpOptions)
            .subscribe(function (data) {
            _this.dataProduk = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataProduk.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            _this.backupProduk = _this.dataProduk;
            console.log(_this.dataProduk);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    HomePage.prototype.itemTapped = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__jenis_produk_jenis_produk__["a" /* JenisProdukPage */], item);
    };
    // DATA UKM
    HomePage.prototype.getDataUkm = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/*',
            })
        };
        this.http.get(this.host.baseUrl + "/v1/data/daerah-penjual", httpOptions)
            .subscribe(function (data) {
            _this.dataUkm = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataUkm.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            _this.backupUkm = _this.dataUkm;
            console.log(_this.dataUkm);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    HomePage.prototype.itemTappedUkm = function ($event, item) {
        this.isSearchBarOpened = false;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__jenis_ukm_jenis_ukm__["a" /* JenisUkmPage */], item);
    };
    HomePage.prototype.initDataProduk = function () {
        this.dataProduk = this.backupProduk;
    };
    HomePage.prototype.initDataUkm = function () {
        this.dataUkm = this.backupUkm;
    };
    HomePage.prototype.initDataFilter = function () {
        this.dataFilterProduk = this.backupFilter;
    };
    HomePage.prototype.onSearch = function (ev) {
        if (this.activeButton != 'ukm') {
            // Reset items back to all of the items
            this.initDataProduk();
            // set val to the value of the searchbar
            var val_1 = ev.target.value;
            // if the value is an empty string don't filter the items
            if (val_1 && val_1.trim() !== '') {
                this.dataProduk = this.dataProduk.filter(function (item) {
                    return (item.key.toLowerCase().indexOf(val_1.toLowerCase()) > -1);
                });
            }
            console.log(this.activeButton);
            console.log(this.dataProduk);
        }
        if (this.activeButton == 'ukm') {
            // Reset items back to all of the items
            this.initDataUkm();
            // set val to the value of the searchbar
            var val_2 = ev.target.value;
            // if the value is an empty string don't filter the items
            if (val_2 && val_2.trim() !== '') {
                this.dataUkm = this.dataUkm.filter(function (item) {
                    return (item.key.toLowerCase().indexOf(val_2.toLowerCase()) > -1);
                });
            }
            console.log(this.activeButton);
            console.log(this.dataUkm);
        }
    };
    HomePage.prototype.halamanProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profil_profil__["a" /* ProfilPage */]);
    };
    // check value checkbox produk
    HomePage.prototype.CheckboxProdukClicked = function (check, item) {
        var index = this.dataFilterProduk.indexOf(item.data["0"].bahan);
        if (index > -1) {
            this.dataFilterProduk.splice(index, 1);
        }
        else {
            this.dataFilterProduk.push(item.data["0"].bahan);
        }
        console.log(check);
        console.log(this.dataFilterProduk);
    };
    // check value checkbox daerah
    HomePage.prototype.CheckboxDaerahClicked = function (check, item) {
        var index = this.dataFilterUkm.indexOf(item.data["0"].nama_daerah);
        if (index > -1) {
            this.dataFilterUkm.splice(index, 1);
        }
        else {
            this.dataFilterUkm.push(item.data["0"].nama_daerah);
        }
        console.log(check);
        console.log(this.dataFilterUkm);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.isSearchBarOpened = false;
        this.getDataProduk();
        this.getDataUkm();
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.doRefreshButton = function (button) {
        this.isSearchBarOpened = false;
        this.getDataProduk();
        this.getDataUkm();
        console.log('Begin async operation', button);
    };
    HomePage.prototype.checked = function (e) {
        console.log("checked");
        console.log(e);
    };
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.getFilterProduk = function ($event, item) {
        this.filterOpened = false;
        this.getDataFiltered();
    };
    HomePage.prototype.getDataFiltered = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/*',
            })
        };
        var endpoint = "/v1/data/filter-produk?bahan_baku=";
        for (var i = 0; i < this.dataFilterProduk.length; i++) {
            endpoint = endpoint + this.dataFilterProduk[i] + ",";
        }
        this.http.get(this.host.baseUrl + endpoint, httpOptions)
            .subscribe(function (data) {
            _this.dataProduk = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataProduk.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            console.log(_this.dataProduk + _this.dataUkm);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
        // ukm
        var endpointUkm = "/v1/data/filter-produk?nama_daerah=";
        for (var i = 0; i < this.dataFilterUkm.length; i++) {
            endpointUkm = endpointUkm + this.dataFilterUkm[i] + ",";
        }
        this.http.get(this.host.baseUrl + endpointUkm, httpOptions)
            .subscribe(function (data) {
            _this.dataUkm = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataUkm.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            console.log(_this.dataUkm);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.openFilter = function () {
        this.filterOpened = true;
        this.isSearchBarOpened = false;
        this.dataFilterProduk = [];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\home\home.html"*/'<!-- Header -->\n<ion-header>\n  <ion-navbar color="darkBlue">\n    <ion-grid *ngIf="!filterOpened">\n      <ion-row>\n        <ion-col col-9 *ngIf="!isSearchBarOpened">\n          <img src="assets/imgs/Logo/Logo Sipolahsar Landscape-01.png" height="45px" width="auto" class="image" (click)="halamanProfile()">\n        </ion-col>\n        <ion-col *ngIf="!isSearchBarOpened"col-1 style="margin: auto; text-align: left;">\n          <ion-buttons no-padding style="text-align: center;">\n            <button (click)="this.openFilter()" style="border:0px; background: none; margin-left: -10px;">\n              <ion-icon ios="ios-options" md="ios-options" color="light" class="icon-filter"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n          <ion-searchbar *ngIf="isSearchBarOpened" (ionInput)="onSearch($event)"></ion-searchbar>     \n          <ion-buttons>\n              <button ion-button icon-only class="ion-icon-close-searchbar" *ngIf="isSearchBarOpened" (click)=\'doRefreshButton($event)\'>\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-buttons>  \n          <ion-col col-2 style="margin: auto;" *ngIf="!isSearchBarOpened">\n          <ion-buttons end>\n            <button (click)="isSearchBarOpened=true" style="border:0px; background: none;">\n              <ion-icon class="icon-button" name="md-search" style="font-size: 15px;"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row *ngIf="filterOpened">\n      <ion-col col-2></ion-col>\n      <ion-col col-8 style="margin: auto;">\n        <ion-title style="text-align: center">Filter Produk</ion-title>\n      </ion-col>\n      <ion-col col-2>\n        <ion-buttons end>\n          <button ion-button (click)="filterOpened=false" style="font-size: 2rem;">X</button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<!-- Segment Button -->\n<ion-content padding>\n  \n  <ion-list *ngIf="!filterOpened">\n    <ion-list-header>\n      <ion-segment [(ngModel)]="home" color="darkBlue">\n        <ion-segment-button value="home-produk" icon-start (click)="this.setActiveButton(\'produk\')">\n          <ion-row center>\n                <ion-col col-2 class="category-button-img-produk">\n                  <img src="assets/icon/Produk_grey.svg" width="auto" height="20px" *ngIf="this.activeButton != \'produk\'">\n                  <img src="assets/icon/Produk_white.svg" width="auto" height="20px" *ngIf="this.activeButton == \'produk\'">\n                </ion-col>\n                <ion-col col-10 class="category-button-txt-produk">\n                  Daftar Produk\n                </ion-col>\n              </ion-row>\n            </ion-segment-button>\n            <ion-segment-button value="home-ukm" icon-start (click)="this.setActiveButton(\'ukm\')">\n              <ion-row center>\n                <ion-col col-2 class="category-button-img-ukm">\n                  <img src="assets/icon/UKM_grey.svg" width="auto" height="20px"  *ngIf="this.activeButton != \'ukm\'">\n                  <img src="assets/icon/UKM_white.svg" width="auto" height="20px" *ngIf="this.activeButton == \'ukm\'">\n                </ion-col>\n                <ion-col col-10 class="category-button-txt-ukm">\n                  Daftar UKM\n                </ion-col>\n              </ion-row>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-list-header>\n      </ion-list>\n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Tarik Untuk Menyegarkan"\n          refreshingSpinner="circles"\n          refreshingText="Menyegarkan..."\n          >\n        </ion-refresher-content>\n      </ion-refresher>\n      <!-- Body -->\n      \n      <!-- LIST PRODUK -->\n      <div [ngSwitch]="home" *ngIf="!filterOpened">\n        <ion-list *ngSwitchCase="\'home-produk\'">\n          <div *ngIf="this.dataProduk == null" class="loading">\n              <img src="assets/icon/Spinner-0.5s-200px.gif" class="img-loading">\n          </div>\n          <div *ngIf="this.dataProduk != null">\n            <button ion-item *ngFor="let item of this.dataProduk; let i = index" (click)="this.itemTapped($event, item)">\n              <ion-avatar item-start style="margin-top: 0px;">\n              <img style="border-radius: 100%;" src="{{ item.foto }}" alt="" width="25px">\n              </ion-avatar>\n              <h2><b>{{ item.key }}</b></h2>\n              <p>{{ item.data.length }} Merk</p>\n              <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n            </button>\n          </div>\n        </ion-list>\n    \n        <!-- LIST UKM -->\n        <ion-list *ngSwitchCase="\'home-ukm\'">\n          <div *ngIf="this.dataUkm == null" class="loading">\n              <img src="assets/icon/Spinner-0.5s-200px.gif" class="img-loading">\n          </div>\n          <div *ngIf="this.dataUkm != null">\n            <button ion-item *ngFor="let item of this.dataUkm; let i = index" (click)="this.itemTappedUkm($event, item)">\n              <ion-avatar item-start style="margin-top: 0px;">\n              <img style="border-radius: 100%;" src="assets/icon/Location.svg" alt="" width="25px">\n              </ion-avatar>\n              <h2><b>{{ item.key }}</b></h2>\n              <p> {{ item.data.length }} UKM</p>\n              <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n            </button>\n          </div>\n        </ion-list>\n      </div>\n\n    </ion-content>\n\n  <!-- Filter -->\n    <ion-item *ngIf="filterOpened" color="filterColor01" style="margin-top:18%; min-height: 30px; width: 95%; margin-left: 8px !important; margin-right: 8px !important; border-radius: 100px;">\n        <ion-label no-margin style="font-size: 1rem; text-align: center;">\n          Bahan Baku Produk\n        </ion-label>\n      </ion-item>\n  \n      <ion-scroll *ngIf="filterOpened" scrollY="true" style="vertical-align: baseline;">\n        <!-- Default Checkbox -->\n        <div color="filterColor02">\n          <div *ngIf="this.backupProduk == null" class="loading-filter">\n            <img src="assets/icon/Spinner-0.5s-200px.gif" class="img-loading-filter">\n          </div>\n          <div *ngIf="this.backupProduk != null">\n            <ion-item *ngFor="let item of this.backupProduk; let i = index">\n              <ion-label color="filterColor01" style="text-transform: capitalize;">{{ item.data["0"].bahan }}</ion-label>\n              <ion-checkbox (ionChange)="checked($event)" (click)="CheckboxProdukClicked(this, item)"></ion-checkbox>\n            </ion-item>\n          </div>\n        </div>\n      </ion-scroll>\n  \n      <ion-item *ngIf="filterOpened" color="filterColor01" style="min-height: 30px; width: 95%; margin-left: 8px !important; margin-right: 8px !important; border-radius: 100px;">\n        <ion-label no-margin style="font-size: 1rem; text-align: center;">\n          Daerah\n        </ion-label>\n      </ion-item>\n  \n      <ion-scroll *ngIf="filterOpened" scrollY="true" style="min-height: 30px; width: 95%; margin-left: 8px !important; margin-right: 8px !important; border-radius: 100px; margin-bottom: 10px !important">\n          <div color="filterColor02">\n            <div *ngIf="this.backupUkm == null" class="loading-filter">\n              <img src="assets/icon/Spinner-0.5s-200px.gif" class="img-loading-filter">\n            </div>\n            <div *ngIf="this.backupUkm != null">\n            <ion-item *ngFor="let item of this.backupUkm; let i = index">\n              <ion-label color="filterColor01" style="text-transform: uppercase; text-transform: capitalize">{{ item.data["0"].nama_daerah }}</ion-label>\n              <ion-checkbox (ionChange)="checked($event)" (click)="CheckboxDaerahClicked(this, item)"></ion-checkbox>\n            </ion-item>\n          </div>\n        </div>\n      </ion-scroll>\n      \n      \n      <ion-item *ngIf="filterOpened" color="filterColor02" style="min-height: 30px; width: 95%; margin-left: 8px !important; margin-right: 8px !important; border-radius: 100px;" (click)="getFilterProduk(item, $event)">\n          <ion-label no-margin style="font-size: 1rem; text-align: center;">\n            Terapkan\n          </ion-label>\n      </ion-item>\n    <!-- END FILTER -->'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_host_host__["a" /* HostProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
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


var ProfilPage = (function () {
    function ProfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\profil\profil.html"*/'<!-- HEADER -->\n<ion-header no-shadow no-border padding style="background-color:white; padding: 0px !important;">\n  <ion-navbar color="white">\n    <ion-title></ion-title>\n  </ion-navbar>\n  <img src="assets/imgs/Logo/Logo Sipolahsar Landscape-01.png" class="img" alt="">\n</ion-header>\n\n<!-- BODY -->\n<ion-content padding style="background-color:#FFF;">\n  <hr class="hr">\n  <p style="text-align:center;"><b>Daftar UKM/Produk</b></p>\n  <p style="text-align:center; color:rgb(0, 0, 255); font-size: 11px; padding: 0 50px;">Untuk mendaftarkan UKM/Produk anda dapat melalui cabang kantor</p>\n\n  <button class="button"><a href="https://www.google.com/maps/place/School+SMK+Negeri+2+Balikpapan,+Jl.+Soekarno+Hatta,+Gunung+Samarinda+III,+North+Balikpapan,+Balikpapan+City,+East+Kalimantan+76125/@-1.2343785,116.8435129,18z/data=!4m2!3m1!1s0x2df148c944618985:0x6e5c97bc73558481" style="font-size: 11px !important;">Lokasi</a></button>\n  <hr class="hr">\n  <p style="text-align:center; margin-top: 20px;"><b>Peta Aplikasi</b></p>\n  <p style="text-align:center;"><a href="#">Daftar UKM</a></p>\n  <p style="text-align:center;"><a href="#">Daftar Produk Penjualan</a></p>\n</ion-content>\n\n<!-- FOOTER -->\n<ion-footer padding style="background-color:#FFF;">\n  <ion-toolbar>\n    <p style="text-align:center;"><b>Terhubung Dengan Kami</b></p>\n    <hr class="hr">\n    <div class="logo">\n      <a href="#"><img src="assets/imgs/logo41.png" style="width: 40px;height: 40px;" alt=""></a>\n      <a href="#"><img src="assets/imgs/logo42.png" style="width: 40px;height: 40px;" alt=""></a>\n      <a href="#"><img src="assets/imgs/logo43.png" style="width: 40px;height: 40px;" alt=""></a>\n      <a href="#"><img src="assets/imgs/logo44.png" style="width: 40px;height: 40px;" alt=""></a>\n    </div>\n    <button class="button2"><a href="www.sipolahsar-dkpjabar.com">www.sipolahsar-dkpjabar.com</a></button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JenisProdukPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_produk_detail_produk__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JenisProdukPage = (function () {
    function JenisProdukPage(navCtrl, navParams, modalCtrl, storage, http, host) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.host = host;
        this.dataFilterUkm = [];
        this.dataFilterProduk = [];
        this.isSearchBarOpened = false;
        this.item = this.navParams.data;
        this.backupDetailProduk = this.item;
        console.log('**navParams:', this.backupDetailProduk);
        this.getDataProduk();
        this.getDataUkm();
    }
    // DATA UKM
    JenisProdukPage.prototype.getDataUkm = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/*',
            })
        };
        this.http.get(this.host.baseUrl + "/v1/data/daerah-penjual", httpOptions)
            .subscribe(function (data) {
            _this.dataUkm = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataUkm.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            _this.backupUkm = _this.dataUkm;
            console.log(_this.dataUkm);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    // DATA PRODUK
    JenisProdukPage.prototype.getDataProduk = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/*',
            })
        };
        this.http.get(this.host.baseUrl + "/v1/data/kategori-produk", httpOptions)
            .subscribe(function (data) {
            _this.dataProduk = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataProduk.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            _this.backupProduk = _this.dataProduk;
            console.log(_this.dataProduk);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    JenisProdukPage.prototype.back = function () {
        this.navCtrl.pop();
        this.isSearchBarOpened = false;
    };
    JenisProdukPage.prototype.itemTapped = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_produk_detail_produk__["a" /* DetailProdukPage */], item);
    };
    JenisProdukPage.prototype.initData = function () {
        this.item = this.backupDetailProduk;
    };
    JenisProdukPage.prototype.onSearch = function (ev) {
        // Reset items back to all of the items
        this.initData();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.item.data = this.item.data.filter(function (item) {
                return (item.brand.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        console.log(this.item.data);
    };
    JenisProdukPage.prototype.doRefresh = function (refresher) {
        this.isSearchBarOpened = false;
        this.navParams.data;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    JenisProdukPage.prototype.doRefreshButton = function (button) {
        this.isSearchBarOpened = false;
        this.navParams.data;
        console.log('Begin async operation', button);
    };
    JenisProdukPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JenisProdukPage');
    };
    JenisProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jenis-produk',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\jenis-produk\jenis-produk.html"*/'<!-- HEADER -->\n<ion-header>\n  <ion-navbar color="darkBlue" no-padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2 *ngIf="!isSearchBarOpened" style="margin:auto;" no-padding>\n          <ion-buttons start>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-8 *ngIf="!isSearchBarOpened" no-padding>\n          <ion-title style="font-size: 24px; text-transform: none;">\n            <p class="text-toolbar">\n              {{ item.key }}\n            </p>\n          </ion-title>\n        </ion-col>\n        <ion-searchbar *ngIf="isSearchBarOpened" (ionInput)="onSearch($event)"></ion-searchbar>     \n        <ion-buttons>\n          <button ion-button icon-only class="ion-icon-close-searchbar" *ngIf="isSearchBarOpened" (click)=\'doRefreshButton($event)\'>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>        \n        <ion-col col-2 *ngIf="!isSearchBarOpened" style="margin: auto; text-align: center;" no-padding>\n          <ion-buttons end>\n              <button *ngIf="!isSearchBarOpened" (click)="isSearchBarOpened=true" style="border:0px; background: none;">\n                <ion-icon class="icon-button" name="md-search" style="font-size: 15px;"></ion-icon>\n              </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<!-- BODY -->\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Tarik untuk menyegarkan"\n      refreshingSpinner="circles"\n      refreshingText="Menyegarkan...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <img src="{{ item.foto }}" width="50%" height="auto" class="image">\n\n  <hr style="color: #dedede; margin-bottom: 1px !important;">\n\n  <ion-list>\n    <button ion-item *ngFor="let item of this.item?.data; let i = index" (click)="this.itemTapped(item)">\n      <ion-avatar item-start style="margin-top: 0px;">\n        <img style="border-radius: 100%;" src="assets/icon/item 1.svg" alt="" width="25px">\n      </ion-avatar>\n      <h2>\n        <b>{{ item.brand }}</b>\n      </h2>\n      <p>{{ item.nama_lengkap }}</p>\n      <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\jenis-produk\jenis-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */]])
    ], JenisProdukPage);
    return JenisProdukPage;
}());

//# sourceMappingURL=jenis-produk.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JenisUkmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_ukm_detail_ukm__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_host_host__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JenisUkmPage = (function () {
    function JenisUkmPage(navCtrl, navParams, modalCtrl, storage, http, host) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.http = http;
        this.host = host;
        this.dataFilterUkm = [];
        this.dataFilterProduk = [];
        this.isSearchBarOpened = false;
        this.item = this.navParams.data;
        this.backupDetailUkm = this.item;
        console.log('**navParams:', this.backupDetailUkm);
        this.getDataProduk();
        this.getDataUkm();
    }
    // DATA UKM
    JenisUkmPage.prototype.getDataUkm = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/*',
            })
        };
        this.http.get(this.host.baseUrl + "/v1/data/daerah-penjual", httpOptions)
            .subscribe(function (data) {
            _this.dataUkm = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataUkm.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            _this.backupUkm = _this.dataUkm;
            console.log(_this.dataUkm);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    // DATA PRODUK
    JenisUkmPage.prototype.getDataProduk = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/*',
            })
        };
        this.http.get(this.host.baseUrl + "/v1/data/kategori-produk", httpOptions)
            .subscribe(function (data) {
            _this.dataProduk = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataProduk.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            _this.backupProduk = _this.dataProduk;
            console.log(_this.dataProduk);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    JenisUkmPage.prototype.back = function () {
        this.navCtrl.pop();
        this.isSearchBarOpened = false;
    };
    JenisUkmPage.prototype.itemTapped = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_ukm_detail_ukm__["a" /* DetailUkmPage */], item);
    };
    JenisUkmPage.prototype.initData = function () {
        this.item = this.backupDetailUkm;
    };
    JenisUkmPage.prototype.onSearch = function (ev) {
        // Reset items back to all of the items
        this.initData();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.item.data = this.item.data.filter(function (item) {
                return (item.brand.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        console.log(this.item.data);
    };
    JenisUkmPage.prototype.doRefresh = function (refresher) {
        this.isSearchBarOpened = false;
        this.item;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    JenisUkmPage.prototype.doRefreshButton = function (button) {
        this.isSearchBarOpened = false;
        this.item;
        console.log('Begin async operation', button);
    };
    JenisUkmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JenisUkmPage');
    };
    JenisUkmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jenis-ukm',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\jenis-ukm\jenis-ukm.html"*/'<!-- HEADER -->\n<ion-header>\n  <ion-navbar color="darkBlue" no-padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2 *ngIf="!isSearchBarOpened" style="margin:auto;" no-padding>\n          <ion-buttons start>\n            <button ion-button icon-only (click)="back()">\n                <ion-icon name="ios-arrow-back"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-8 *ngIf="!isSearchBarOpened" no-padding>\n          <ion-title style="font-size: 24px; text-transform: none;">\n            <p class="text-toolbar">\n              {{ item.key }}\n            </p>\n          </ion-title>\n        </ion-col>\n        <ion-searchbar *ngIf="isSearchBarOpened" (ionInput)="onSearch($event)"></ion-searchbar>     \n        <ion-buttons>\n            <button ion-button icon-only class="ion-icon-close-searchbar" *ngIf="isSearchBarOpened" (click)=\'doRefreshButton($event)\'>\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-buttons>  \n          <ion-col col-2 style="margin: auto;" *ngIf="!isSearchBarOpened">\n          <ion-buttons end>\n            <button (click)="isSearchBarOpened=true" style="border:0px; background: none;">\n              <ion-icon class="icon-button" name="md-search" style="font-size: 15px;"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<!-- BODY -->\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Tarik untuk menyegarkan"\n          refreshingSpinner="circles"\n          refreshingText="Menyegarkan...">\n        </ion-refresher-content>\n      </ion-refresher>\n  <img src="{{ item.foto }}" width="50%" height="auto" class="image">\n\n  <hr style="color: #dedede; margin-bottom: 1px !important;">\n\n  <ion-list>\n    <button ion-item *ngFor="let item of this.item?.data; let i = index" (click)="this.itemTapped(item)">\n      <ion-avatar item-start style="margin-top: 0px;">\n        <img style="border-radius: 100%;" src="assets/icon/item 1.svg" alt="" width="25px">\n      </ion-avatar>\n      <h2>\n        <b>{{ item.brand }}</b>\n      </h2>\n      <p>{{ item.nama_lengkap }}</p>\n      <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\jenis-ukm\jenis-ukm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_host_host__["a" /* HostProvider */]])
    ], JenisUkmPage);
    return JenisUkmPage;
}());

//# sourceMappingURL=jenis-ukm.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashPage = (function () {
    function SplashPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    SplashPage.prototype.button = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingPage */]);
        });
    };
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\splash\splash.html"*/'<!-- HEADER -->\n<ion-header></ion-header>\n\n<!-- BODY -->\n<ion-content padding>\n  <img src="assets/imgs/Logo/logo.png" width="90%" height="50%" class="logo_sipolahsar">\n  <button class="button" (click)="this.button()">Get Started</button>\n</ion-content>\n'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-produk/detail-produk.module": [
		290,
		10
	],
	"../pages/detail-ukm/detail-ukm.module": [
		291,
		9
	],
	"../pages/filter/filter.module": [
		296,
		1
	],
	"../pages/home/home.module": [
		298,
		8
	],
	"../pages/jenis-produk/jenis-produk.module": [
		300,
		7
	],
	"../pages/jenis-ukm/jenis-ukm.module": [
		299,
		6
	],
	"../pages/loading/loading.module": [
		292,
		5
	],
	"../pages/menu/menu.module": [
		293,
		0
	],
	"../pages/opening-satu/opening-satu.module": [
		297,
		4
	],
	"../pages/profil/profil.module": [
		294,
		3
	],
	"../pages/splash/splash.module": [
		295,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_host_host__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_loading_loading__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_opening_satu_opening_satu__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_jenis_produk_jenis_produk__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_jenis_ukm_jenis_ukm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_detail_produk_detail_produk__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_detail_ukm_detail_ukm__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_opening_satu_opening_satu__["a" /* OpeningSatuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_jenis_produk_jenis_produk__["a" /* JenisProdukPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_jenis_ukm_jenis_ukm__["a" /* JenisUkmPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_produk_detail_produk__["a" /* DetailProdukPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_detail_ukm_detail_ukm__["a" /* DetailUkmPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-produk/detail-produk.module#DetailProdukPageModule', name: 'DetailProdukPage', segment: 'detail-produk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-ukm/detail-ukm.module#DetailUkmPageModule', name: 'DetailUkmPage', segment: 'detail-ukm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opening-satu/opening-satu.module#OpeningSatuPageModule', name: 'OpeningSatuPage', segment: 'opening-satu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jenis-ukm/jenis-ukm.module#JenisUkmPageModule', name: 'JenisUkmPage', segment: 'jenis-ukm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jenis-produk/jenis-produk.module#JenisProdukPageModule', name: 'JenisProdukPage', segment: 'jenis-produk', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_opening_satu_opening_satu__["a" /* OpeningSatuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_jenis_produk_jenis_produk__["a" /* JenisProdukPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_jenis_ukm_jenis_ukm__["a" /* JenisUkmPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_produk_detail_produk__["a" /* DetailProdukPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_detail_ukm_detail_ukm__["a" /* DetailUkmPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_host_host__["a" /* HostProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__ = __webpack_require__(111);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__["a" /* SplashPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HostProvider = (function () {
    function HostProvider(http) {
        this.http = http;
        this.baseUrl = "http://sipolahsar.dkp.jabarprov.go.id/api";
        console.log('Hello HostProvider Provider');
    }
    HostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HostProvider);
    return HostProvider;
}());

//# sourceMappingURL=host.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map