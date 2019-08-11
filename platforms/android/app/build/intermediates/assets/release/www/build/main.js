webpackJsonp([11],{

/***/ 100:
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


/**
 * Generated class for the DetailProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-detail-produk',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\detail-produk\detail-produk.html"*/`<!--\n\n  Generated template for the JenisProdukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="darkBlue">\n\n      <ion-grid no-padding>\n\n        <ion-row>\n\n          <ion-col col-2 style="padding: 5px;">\n\n            <ion-buttons start>\n\n              <button ion-button icon-only (click)="back()">\n\n                  <ion-icon name="ios-arrow-back"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n          <ion-col col-10>\n\n            <ion-title style="text-align: center; margin-right: 50px; padding-top: 8px;">\n\n              Detail Produk\n\n            </ion-title>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <ion-navbar color="grey">\n\n      <img src="assets/imgs/logo2.png" width="20%" height="auto" class="image">\n\n      <p style="font-size: 1.5rem; text-align: center; padding: 3px 0px 0px 0px; margin: 0px !important; color:darkblue;">Calsiumina</p>\n\n      <p style="font-size: 1rem; text-align: center; padding: 0px 0px 0px 0px; margin: 0px !important; color:rgb(34, 34, 34);">Ema Renita</p>\n\n    </ion-navbar>\n\n    <ion-navbar color="white">\n\n      <ion-row>\n\n        <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n          <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Daerah</p>  \n\n        </ion-col>\n\n        <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n          <b>\n\n            <p style="font-size: 1.5rem;">Balikpapan</p>  \n\n          </b>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n          <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Pemasaran</p>  \n\n        </ion-col>\n\n        <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n          <b>\n\n            <p style="font-size: 1.5rem;">Balikpapan dan sekitarnya</p>  \n\n          </b>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n          <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Jenis Produk</p>  \n\n        </ion-col>\n\n        <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n          <b>\n\n            <p style="font-size: 1.5rem;">Abon</p>  \n\n          </b>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n          <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Bahan baku</p>  \n\n        </ion-col>\n\n        <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n          <b>\n\n            <p style="font-size: 1.5rem;">Ikan Lele</p>  \n\n          </b>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-navbar>\n\n    <ion-row>\n\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n        <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Nama Produk</p>  \n\n      </ion-col>\n\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n        <b>\n\n          <p style="font-size: 1.5rem;">Abon</p>  \n\n        </b>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n        <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Kebutuhan Produk</p>  \n\n      </ion-col>\n\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n        <b>\n\n          <p style="font-size: 1.5rem;">Ikan Tuna 100 kg</p>  \n\n        </b>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n        <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Keterangan</p>  \n\n      </ion-col>\n\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n        <b>\n\n          <p style="font-size: 1.5rem;">-</p>  \n\n        </b>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\detail-produk\detail-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailProdukPage);
    return DetailProdukPage;
}());

//# sourceMappingURL=detail-produk.js.map

/***/ }),

/***/ 101:
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


/**
 * Generated class for the DetailUkmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailUkmPage = (function () {
    function DetailUkmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailUkmPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DetailUkmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailUkmPage');
    };
    DetailUkmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-ukm',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\detail-ukm\detail-ukm.html"*/`<!--\n\n  Generated template for the JenisProdukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="darkBlue">\n\n      <ion-grid no-padding>\n\n        <ion-row>\n\n          <ion-col col-2 style="padding: 5px;">\n\n            <ion-buttons start>\n\n              <button ion-button icon-only (click)="back()">\n\n                  <ion-icon name="ios-arrow-back"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n          <ion-col col-10>\n\n            <ion-title style="text-align: center; margin-right: 50px; padding-top: 8px;">\n\n              Detail UKM\n\n            </ion-title>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <ion-navbar color="grey">\n\n      <img src="assets/imgs/logo2.png" width="20%" height="auto" class="image">\n\n      <p style="font-size: 1.5rem; text-align: center; padding: 3px 0px 0px 0px; margin: 0px !important; color:darkblue;">Krupuk ikan patin</p>\n\n      <p style="font-size: 1rem; text-align: center; padding: 0px 0px 0px 0px; margin: 0px !important; color:rgb(34, 34, 34);">Dayang Sumbi</p>\n\n    </ion-navbar>\n\n    <ion-navbar color="white">\n\n      <ion-row>\n\n        <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n          <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Daerah</p>  \n\n        </ion-col>\n\n        <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n          <b>\n\n            <p style="font-size: 1.5rem;">Kabupaten Cirebon</p>  \n\n          </b>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n          <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Alamat</p>  \n\n        </ion-col>\n\n        <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n          <b>\n\n            <p style="font-size: 1.25rem;">Jln. Ngebei Rt 03 Rw 01 Blok 1 Desa Cikalahang Kec.dukupuntung Kab.cirebon</p>  \n\n          </b>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n          <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">No. Hp</p>  \n\n        </ion-col>\n\n        <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n          <b>\n\n            <p style="font-size: 1.5rem;">085247443124</p>  \n\n          </b>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-navbar>\n\n    <ion-row>\n\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n        <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">PIRT</p>  \n\n      </ion-col>\n\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n        <b>\n\n          <p style="font-size: 1.5rem;">-</p>  \n\n        </b>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n        <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Halal</p>  \n\n      </ion-col>\n\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n        <b>\n\n          <p style="font-size: 1.5rem;">Sedang Proses</p>  \n\n        </b>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n        <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">SIUP</p>  \n\n      </ion-col>\n\n      <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n        <b>\n\n          <p style="font-size: 1.5rem;">-</p>  \n\n        </b>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n          <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">TDI/TC</p>  \n\n        </ion-col>\n\n        <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n          <b>\n\n            <p style="font-size: 1.5rem;">-</p>  \n\n          </b>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n            <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">Badan Hukum</p>  \n\n          </ion-col>\n\n          <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n            <b>\n\n              <p style="font-size: 1.5rem;">-</p>  \n\n            </b>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-4 style="padding: 5px 5px 5px 10px !important">\n\n              <p style="font-size: 1.5rem;color:rgb(124, 124, 124);">E-mail</p>  \n\n            </ion-col>\n\n            <ion-col col-8 style="padding: 5px 5px 5px 4px !important">\n\n              <b>\n\n                <p style="font-size: 1.5rem;">-</p>  \n\n              </b>\n\n            </ion-col>\n\n          </ion-row>\n\n  </ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\detail-ukm\detail-ukm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailUkmPage);
    return DetailUkmPage;
}());

//# sourceMappingURL=detail-ukm.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_host_host__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_profil__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jenis_produk_jenis_produk__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jenis_ukm_jenis_ukm__ = __webpack_require__(105);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, platform, host, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.host = host;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.home = "home-produk";
        this.isAndroid = false;
        this.isSearchBarOpened = false;
        this.test = [
            { id: 1,
                jenis_produk: 'TEST PRODUK 1',
                foto: 'assets/icon/item 1.svg'
            },
            { id: 2,
                jenis_produk: 'TEST PRODUK 2',
                foto: 'assets/icon/Location.svg'
            },
            { id: 3,
                jenis_produk: 'TEST PRODUK 3',
                foto: 'assets/icon/item 1.svg'
            },
        ];
        this.test_ukm = [
            { id: 1,
                jenis_ukm: 'TEST UKM 1',
                foto: 'assets/imgs/Logo Daerah/Bekasi.jpg'
            },
            { id: 2,
                jenis_ukm: 'TEST UKM 2',
                foto: 'assets/imgs/Logo Daerah/Kabupaten Bandung.png'
            },
            { id: 3,
                jenis_ukm: 'TEST UKM 3',
                foto: 'assets/imgs/Logo Daerah/Kabupaten Garut.jpg'
            },
        ];
        this.isAndroid = platform.is('android');
    }
    HomePage.prototype.setActiveButton = function (button) {
        this.activeButton = button;
    };
    HomePage.prototype.itemTapped = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__jenis_produk_jenis_produk__["a" /* JenisProdukPage */], item);
    };
    HomePage.prototype.itemTappedUkm = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__jenis_ukm_jenis_ukm__["a" /* JenisUkmPage */], item);
    };
    HomePage.prototype.onSearch = function (event) {
        console.log(event.target.value);
    };
    HomePage.prototype.halamanProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profil_profil__["a" /* ProfilPage */]);
    };
    HomePage.prototype.openModal = function () {
        var data = { message: 'success' };
        var modalPage = this.modalCtrl.create('FilterPage', data);
        modalPage.present();
    };
    HomePage.prototype.getKategoriProduk = function () {
        var _this = this;
        this.http.get(this.host.baseUrl + "/data/kategori-produk")
            .subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.getKategoriProduk();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\home\home.html"*/`<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkBlue" no-padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-7 *ngIf="!isSearchBarOpened" style="padding-bottom: 0px !important; padding-top: 0px !important; max-width: 85%;">\n\n          <img src="assets/imgs/Logo/Logo Sipolahsar Landscape-01.png" class="image" (click)="halamanProfile()">\n\n        </ion-col>\n\n        <ion-buttons no-padding>\n\n          <button *ngIf="!isSearchBarOpened"  (click)="openModal()" style="border:0px; background: none;">\n\n            <ion-icon ios="ios-options" md="ios-options" color="light" style="font-size: 25px; margin-left: 30px; padding-top: 12px; margin-right: 10px;"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n          <ion-searchbar *ngIf="isSearchBarOpened" showCancelButton="true" (search)="onSearch($event)" (ionCancel)="isSearchBarOpened=false"></ion-searchbar>\n\n          <ion-buttons end>\n\n            <button *ngIf="!isSearchBarOpened" (click)="isSearchBarOpened=true" style="border:0px; background: none;">\n\n              <ion-icon class="icon-button" name="md-search" style="font-size: 15px;"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <ion-segment [(ngModel)]="home" color="darkBlue">\n\n    <ion-segment-button value="home-produk" icon-start (click)="this.setActiveButton(\'produk\')">\n\n      <img src="/assets/icon/Produk_grey.svg" width="25px" height="25px" style="margin-top:7px;" *ngIf="this.activeButton != \'produk\'">\n\n      <img src="/assets/icon/Produk_white.svg" width="25px" height="25px" style="margin-top:7px;" *ngIf="this.activeButton == \'produk\'">\n\n      Daftar Produk\n\n    </ion-segment-button>\n\n    <ion-segment-button value="home-ukm" icon-start (click)="this.setActiveButton(\'ukm\')">\n\n      <img src="/assets/icon/Ukm_grey.svg" width="25px" height="25px" style="margin-top:7px;" *ngIf="this.activeButton != \'ukm\'">\n\n      <img src="/assets/icon/Ukm_white.svg" width="25px" height="25px" style="margin-top:7px;" *ngIf="this.activeButton == \'ukm\'">\n\n      Daftar UKM\n\n    </ion-segment-button>\n\n</ion-segment> -->\n\n\n\n<ion-list>\n\n  <ion-list-header>\n\n    <ion-segment [(ngModel)]="home" color="darkBlue">\n\n        <ion-segment-button value="home-produk" icon-start (click)="this.setActiveButton(\'produk\')">\n\n          <ion-row center>\n\n            <ion-col col-2 class="category-button-img">\n\n              <img src="assets/icon/Produk_grey.svg" width="auto" height="20px" *ngIf="this.activeButton != \'produk\'">\n\n              <img src="assets/icon/Produk_white.svg" width="auto" height="20px" *ngIf="this.activeButton == \'produk\'">\n\n            </ion-col>\n\n            <ion-col col-10 class="category-button-txt">\n\n                Daftar Produk\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="home-ukm" icon-start (click)="this.setActiveButton(\'ukm\')">\n\n          <ion-row center>\n\n            <ion-col col-2 class="category-button-img">\n\n              <img src="assets/icon/UKM_grey.svg" width="auto" height="20px"  *ngIf="this.activeButton != \'ukm\'">\n\n              <img src="assets/icon/UKM_white.svg" width="auto" height="20px" *ngIf="this.activeButton == \'ukm\'">\n\n            </ion-col>\n\n            <ion-col col-10 class="category-button-txt">\n\n              Daftar UKM\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-list-header>\n\n</ion-list>\n\n\n\n  <div [ngSwitch]="home">\n\n    <ion-list *ngSwitchCase="\'home-produk\'">\n\n        <button ion-item *ngFor="let item of test" (click)="this.itemTapped($event, item)">\n\n            <ion-avatar item-start style="margin-top: 0px;">\n\n              <img style="border-radius: 100%;" src="{{ item.foto }}" alt="" width="25px">\n\n            </ion-avatar>\n\n              <h2><b>{{ item.jenis_produk }}</b></h2> \n\n              <p>3 Merek</p>\n\n              <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n\n        </button>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'home-ukm\'">\n\n            <button ion-item *ngFor="let item of test_ukm" (click)="this.itemTappedUkm($event, item)">\n\n                <ion-avatar item-start style="margin-top: 0px;">\n\n                  <img style="border-radius: 100%;" src="assets/icon/Location.svg" alt="" width="25px">\n\n                </ion-avatar>\n\n                  <h2><b>{{ item.jenis_ukm }}</b></h2> \n\n                  <p>3 UKM</p>\n\n                  <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n\n            </button>\n\n    </ion-list>\n\n\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
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


/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
            selector: 'page-profil',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\profil\profil.html"*/`<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-shadow no-border padding style="background-color:rgb(164, 137, 255); padding: 0px !important;">\n\n\n\n  <ion-navbar color="purple">\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n  <img src="assets/imgs/Logo/Logo Sipolahsar Landscape-01.png" class="img" alt="">\n\n  </ion-header>\n\n\n\n<ion-content padding style="background-color:rgb(164, 137, 255);">\n\n  <hr class="hr">\n\n  <p style="text-align:center;"><b>Daftar UKM/Produk</b></p>\n\n  <p style="text-align:center; color:blue; font-size: 11px; padding: 0 50px;">Untuk mendaftarkan UKM/Produk anda dapat melalui cabang kantor</p>\n\n\n\n  <button class="button"><a href="https://www.google.com/maps/place/School+SMK+Negeri+2+Balikpapan,+Jl.+Soekarno+Hatta,+Gunung+Samarinda+III,+North+Balikpapan,+Balikpapan+City,+East+Kalimantan+76125/@-1.2343785,116.8435129,18z/data=!4m2!3m1!1s0x2df148c944618985:0x6e5c97bc73558481" style="font-size: 11px !important;">Lokasi</a></button>\n\n  <hr style="margin-top: 10px !important;">\n\n  <p style="text-align:center;"><b>Peta Aplikasi</b></p>\n\n  <p style="text-align:center;"><a href="#">Daftar UKM</a></p>\n\n  <p style="text-align:center;"><a href="#">Daftar Produk Penjualan</a></p>\n\n</ion-content>\n\n<ion-footer padding style="background-color:rgb(164, 137, 255);">\n\n    <ion-toolbar>\n\n      <p style="text-align:center;"><b>Terhubung Dengan Kami</b></p>\n\n        <div class="logo">\n\n          <a href="#"><img src="assets/imgs/logo41.png" style="width: 40px;height: 40px;" alt=""></a>\n\n          <a href="#"><img src="assets/imgs/logo42.png" style="width: 40px;height: 40px;" alt=""></a>\n\n          <a href="#"><img src="assets/imgs/logo43.png" style="width: 40px;height: 40px;" alt=""></a>\n\n          <a href="#"><img src="assets/imgs/logo44.png" style="width: 40px;height: 40px;" alt=""></a>\n\n        </div>\n\n        <button class="button2"><a href="www.sipolahsar-dkpjabar.com">www.sipolahsar-dkpjabar.com</a></button>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JenisProdukPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_produk_detail_produk__ = __webpack_require__(100);
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
 * Generated class for the JenisProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JenisProdukPage = (function () {
    function JenisProdukPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.jenis = [
            { id: 1,
                jenis_produk: 'TEST PRODUK 1 JENIS A',
                foto: '/assets/icon/item 1.svg',
                daerah: 'Balikpapan',
                pemasaran: 'Balikpapan Kota',
                nama_produk: 'Calsumina',
                bahan_baku: 'Abon',
                kebutuhan_produk: 'Ikan tuna 100kg',
                keterangan: '-'
            },
            { id: 2,
                jenis_produk: 'TEST PRODUK 2 JENIS B',
                foto: '/assets/icon/Location.svg',
                daerah: 'Samarinda',
                pemasaran: 'Samarinda Kota',
                nama_produk: 'Calsumina Samarinda',
                bahan_baku: 'Abon',
                kebutuhan_produk: 'Ikan tuna 100kg',
                keterangan: '-'
            },
            { id: 3,
                jenis_produk: 'TEST PRODUK 3 JENIS C',
                foto: '/assets/icon/item 1.svg',
                daerah: 'Bandung',
                pemasaran: 'Bandung Kota',
                nama_produk: 'Calsumina Bandung',
                bahan_baku: 'Abon',
                kebutuhan_produk: 'Ikan tuna 100kg',
                keterangan: '-'
            },
        ];
        this.item = this.navParams.data;
        console.log('**navParams:', this.navParams);
    }
    JenisProdukPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    JenisProdukPage.prototype.itemTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_produk_detail_produk__["a" /* DetailProdukPage */]);
    };
    JenisProdukPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JenisProdukPage');
    };
    JenisProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jenis-produk',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\jenis-produk\jenis-produk.html"*/`<!--\n\n  Generated template for the JenisProdukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="darkBlue" no-padding>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-2 *ngIf="!isSearchBarOpened">\n\n            <ion-buttons start>\n\n              <button ion-button icon-only (click)="back()">\n\n                  <ion-icon name="ios-arrow-back"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n          <ion-col col-8 *ngIf="!isSearchBarOpened" style="padding-bottom: 0px !important; padding-top: 0px !important;">\n\n            <ion-title style="font-size: 24px; text-transform: none;">\n\n              <p style="margin: 0px !important; margin-top: 10px !important; margin-left: 35px !important;">\n\n                {{ item.jenis_produk }}\n\n              </p>\n\n            </ion-title>\n\n          </ion-col>\n\n            <ion-searchbar *ngIf="isSearchBarOpened" showCancelButton="true" (search)="onSearch($event)" (ionCancel)="isSearchBarOpened=false"></ion-searchbar>\n\n            <ion-buttons end>\n\n              <button *ngIf="!isSearchBarOpened" (click)="isSearchBarOpened=true" style="border:0px; background: none; margin-bottom: 10px;">\n\n                <ion-icon class="icon-button" name="md-search" style="font-size: 15px;"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n      <img src="{{ item.foto }}" width="50%" height="auto" class="image">\n\n\n\n      <hr style="color: #dedede; margin-bottom: 1px !important;">\n\n\n\n      <ion-list>\n\n          <button ion-item (click)="this.itemTapped()">\n\n              <ion-avatar item-start style="margin-top: 0px;">\n\n                <img style="border-radius: 100%;" src="assets/icon/item 1.svg" alt="" width="25px">\n\n              </ion-avatar>\n\n                <h2><b>Abon</b></h2> \n\n                <p>14 Merek</p>\n\n                <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n\n          </button>\n\n          <button ion-item>\n\n              <ion-avatar item-start style="margin-top: 0px;">\n\n                <img style="border-radius: 100%;" src="assets/icon/item 1.svg" alt="" width="25px">\n\n              </ion-avatar>\n\n                <h2><b>Abon</b></h2> \n\n                <p>14 Merek</p>\n\n                <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n\n          </button>\n\n          <button ion-item>\n\n              <ion-avatar item-start style="margin-top: 0px;">\n\n                <img style="border-radius: 100%;" src="assets/icon/item 1.svg" alt="" width="25px">\n\n              </ion-avatar>\n\n                <h2><b>Abon</b></h2> \n\n                <p>14 Merek</p>\n\n                <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n\n          </button>\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\jenis-produk\jenis-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], JenisProdukPage);
    return JenisProdukPage;
}());

//# sourceMappingURL=jenis-produk.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JenisUkmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_ukm_detail_ukm__ = __webpack_require__(101);
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
 * Generated class for the JenisUkmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JenisUkmPage = (function () {
    function JenisUkmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.data;
        console.log('**navParams:', this.navParams);
    }
    JenisUkmPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    JenisUkmPage.prototype.itemTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_ukm_detail_ukm__["a" /* DetailUkmPage */]);
    };
    JenisUkmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JenisUkmPage');
    };
    JenisUkmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jenis-ukm',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\jenis-ukm\jenis-ukm.html"*/`<!--\n\n  Generated template for the JenisProdukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="darkBlue" no-padding>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-2 *ngIf="!isSearchBarOpened">\n\n            <ion-buttons start>\n\n              <button ion-button icon-only (click)="back()">\n\n                  <ion-icon name="ios-arrow-back"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-col>\n\n          <ion-col col-8 *ngIf="!isSearchBarOpened" style="padding-bottom: 0px !important; padding-top: 0px !important;">\n\n            <ion-title style="font-size: 24px; text-transform: none;">\n\n              <p style="margin: 0px !important; margin-top: 10px !important; margin-left: 50px !important;">\n\n                {{ item.jenis_ukm }}\n\n              </p>\n\n            </ion-title>\n\n          </ion-col>\n\n            <ion-searchbar *ngIf="isSearchBarOpened" showCancelButton="true" (search)="onSearch($event)" (ionCancel)="isSearchBarOpened=false"></ion-searchbar>\n\n            <ion-buttons end>\n\n              <button *ngIf="!isSearchBarOpened" (click)="isSearchBarOpened=true" style="border:0px; background: none; margin-bottom: 10px;">\n\n                <ion-icon class="icon-button" name="md-search" style="font-size: 15px;"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n      <img src="{{ item.foto }}" width="50%" height="auto" class="image">\n\n\n\n      <hr style="color: #dedede; margin-bottom: 1px !important;">\n\n\n\n      <ion-list>\n\n          <button ion-item (click)="this.itemTapped()">\n\n              <ion-avatar item-start style="margin-top: 0px;">\n\n                <img style="border-radius: 100%;" src="assets/icon/item 1.svg" alt="" width="25px">\n\n              </ion-avatar>\n\n                <h2><b>Krupuk ikan patin</b></h2> \n\n                <p>Dayang Sumbi</p>\n\n                <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n\n          </button>\n\n          <button ion-item>\n\n              <ion-avatar item-start style="margin-top: 0px;">\n\n                <img style="border-radius: 100%;" src="assets/icon/item 1.svg" alt="" width="25px">\n\n              </ion-avatar>\n\n                <h2><b>Abon</b></h2> \n\n                <p>14 Merek</p>\n\n                <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n\n          </button>\n\n          <button ion-item>\n\n              <ion-avatar item-start style="margin-top: 0px;">\n\n                <img style="border-radius: 100%;" src="assets/icon/item 1.svg" alt="" width="25px">\n\n              </ion-avatar>\n\n                <h2><b>Abon</b></h2> \n\n                <p>14 Merek</p>\n\n                <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n\n          </button>\n\n      </ion-list>\n\n\n\n  </ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\jenis-ukm\jenis-ukm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], JenisUkmPage);
    return JenisUkmPage;
}());

//# sourceMappingURL=jenis-ukm.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opening_satu_opening_satu__ = __webpack_require__(107);
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
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoadingPage = (function () {
    function LoadingPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__opening_satu_opening_satu__["a" /* OpeningSatuPage */]);
        }, 3000);
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoadingPage');
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loading',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\loading\loading.html"*/`<!--\n\n  Generated template for the LoadingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding style="background-color: rgb(13, 7, 99);">\n\n  <img src="assets/imgs/Logo/logo sipolahsar logo wht.png" class="image">\n\n  <img src="assets/icon/Spinner-0.5s-200px.gif" class="loading">\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpeningSatuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(102);
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
 * Generated class for the OpeningSatuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OpeningSatuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpeningSatuPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]) === "function" && _a || Object)
    ], OpeningSatuPage.prototype, "slides", void 0);
    OpeningSatuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opening-satu',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\opening-satu\opening-satu.html"*/`<!--\n\n  Generated template for the OpeningSatuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="slide-zoom">\n\n    <ion-slides pager (ionSlideDidChange)="slideChanged()">\n\n      <ion-slide style="color: white; background-color: rgb(164, 137, 255)">\n\n      <h1 class="slide-title" style="font-size: 30px; margin-top: 50%;">Selamat Datang</h1>\n\n      <p style="font-size: 11px;">SIPOLAHSAR kependekan dari Sistem Informasi Pengolah dan Pemasar oleh Dinas Kelautan dan Perikanan Provinsi Jawa Barat yang berfungsi sebagai aplikasi untuk menampilkan produk-produk kelautan dan perikanan di Provinsi Jawa Barat</p>\n\n    </ion-slide>\n\n    <ion-slide style="color: white;background-color: rgb(22, 12, 156);">\n\n      <img src="assets/imgs/Logo/Logo Sipolahsar Landscape-01.png" class="slide-image"/>\n\n      <h1 class="slide-title" style="margin-top: 100%;">UKM dan Produk</h1>\n\n      <p style="font-size : 11px;">\n\n        Anda bisa mendapatkan informasi lengkap terkait UKM di Jawa Barat yang menghasilkan produk-produk kelautan dan perikanan berkualitas tinggi. Silakan hubungi kontak yang tertera di dalam bagian UKM.</p>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</div>\n\n\n\n</ion-content>\n\n\n\n\n\n  <ion-footer >\n\n    <ion-toolbar *ngIf="this.buttonText == \'Skip\'">\n\n      <ion-buttons end>\n\n        <button ion-button clear color="light" (click)="this.continue()"  style="text-transform: none;" >{{ this.buttonText }}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n    <ion-toolbar color="darkBlue2" *ngIf="this.buttonText != \'Skip\'">\n\n      <ion-buttons end>\n\n        <button ion-button clear color="light" (click)="this.continue()"  style="text-transform: none;">{{ this.buttonText }}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\opening-satu\opening-satu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], OpeningSatuPage);
    return OpeningSatuPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=opening-satu.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(106);
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
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
        }, 1000);
    };
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\pages\splash\splash.html"*/`<!--\n\n  Generated template for the SplashPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="assets/imgs/Logo/logo.png" width="300" height="300" class="logo2">\n\n  <button class="button" (click)="this.button()">Get Started</button>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-produk/detail-produk.module": [
		286,
		10
	],
	"../pages/detail-ukm/detail-ukm.module": [
		287,
		9
	],
	"../pages/filter/filter.module": [
		296,
		1
	],
	"../pages/home/home.module": [
		288,
		8
	],
	"../pages/jenis-produk/jenis-produk.module": [
		289,
		7
	],
	"../pages/jenis-ukm/jenis-ukm.module": [
		290,
		6
	],
	"../pages/loading/loading.module": [
		291,
		5
	],
	"../pages/menu/menu.module": [
		292,
		0
	],
	"../pages/opening-satu/opening-satu.module": [
		293,
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
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
        this.baseUrl = "http://sipolahsar-dkpjabar.com/api";
        console.log('Hello HostProvider Provider');
    }
    HostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HostProvider);
    return HostProvider;
}());

//# sourceMappingURL=host.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_host_host__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_loading_loading__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_opening_satu_opening_satu__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_jenis_produk_jenis_produk__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_jenis_ukm_jenis_ukm__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profil_profil__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detail_produk_detail_produk__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_detail_ukm_detail_ukm__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_opening_satu_opening_satu__["a" /* OpeningSatuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_jenis_produk_jenis_produk__["a" /* JenisProdukPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_jenis_ukm_jenis_ukm__["a" /* JenisUkmPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_produk_detail_produk__["a" /* DetailProdukPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_ukm_detail_ukm__["a" /* DetailUkmPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-produk/detail-produk.module#DetailProdukPageModule', name: 'DetailProdukPage', segment: 'detail-produk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-ukm/detail-ukm.module#DetailUkmPageModule', name: 'DetailUkmPage', segment: 'detail-ukm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jenis-produk/jenis-produk.module#JenisProdukPageModule', name: 'JenisProdukPage', segment: 'jenis-produk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jenis-ukm/jenis-ukm.module#JenisUkmPageModule', name: 'JenisUkmPage', segment: 'jenis-ukm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opening-satu/opening-satu.module#OpeningSatuPageModule', name: 'OpeningSatuPage', segment: 'opening-satu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_opening_satu_opening_satu__["a" /* OpeningSatuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_jenis_produk_jenis_produk__["a" /* JenisProdukPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_jenis_ukm_jenis_ukm__["a" /* JenisUkmPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_produk_detail_produk__["a" /* DetailProdukPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_ukm_detail_ukm__["a" /* DetailUkmPage */]
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

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__ = __webpack_require__(108);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\sipol\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\xampp\htdocs\sipol\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map