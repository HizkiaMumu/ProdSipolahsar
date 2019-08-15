webpackJsonp([1],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(302);
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

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterPage = (function () {
    function FilterPage(navCtrl, navParams, platform, host, http, modalCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.host = host;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.dataFilterUkm = [];
        this.dataFilterProduk = [];
        this.isSearchBarOpened = false;
        this.filterOpened = false;
        this.getDataProduk();
        this.getDataUkm();
    }
    FilterPage.prototype.setActiveButton = function (button) {
        this.activeButton = button;
    };
    // DATA PRODUK
    FilterPage.prototype.getDataProduk = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
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
    // DATA UKM
    FilterPage.prototype.getDataUkm = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
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
    FilterPage.prototype.initDataProduk = function () {
        this.dataProduk = this.backupProduk;
    };
    FilterPage.prototype.initDataUkm = function () {
        this.dataUkm = this.backupUkm;
    };
    FilterPage.prototype.initDataFilter = function () {
        this.dataFilterProduk = this.backupFilter;
    };
    FilterPage.prototype.onSearch = function (ev) {
        if (this.activeButton != 'ukm') {
            // Reset items back to all of the items
            this.initDataProduk();
            // set val to the value of the searchbar
            var val_1 = ev.target.value;
            // if the value is an empty string don't filter the items
            if (val_1 && val_1.trim() != '') {
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
            if (val_2 && val_2.trim() != '') {
                this.dataUkm = this.dataUkm.filter(function (item) {
                    return (item.key.toLowerCase().indexOf(val_2.toLowerCase()) > -1);
                });
            }
            console.log(this.activeButton);
            console.log(this.dataUkm);
        }
    };
    // check value checkbox produk
    FilterPage.prototype.CheckboxProdukClicked = function (check, item) {
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
    FilterPage.prototype.CheckboxDaerahClicked = function (check, item) {
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
    FilterPage.prototype.doRefresh = function (refresher) {
        this.isSearchBarOpened = false;
        this.getDataProduk();
        this.getDataUkm();
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FilterPage.prototype.doRefreshButton = function (button) {
        this.isSearchBarOpened = false;
        this.getDataProduk();
        this.getDataUkm();
        console.log('Begin async operation', button);
    };
    FilterPage.prototype.checked = function (e) {
        console.log("checked");
        console.log(e);
    };
    FilterPage.prototype.ionViewDidEnter = function () {
    };
    FilterPage.prototype.getFilterProduk = function ($event, item) {
        this.filterOpened = false;
        this.getDataFiltered();
    };
    FilterPage.prototype.getDataFiltered = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
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
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"D:\project\sipolahsar_v1-master - Copy\src\pages\filter\filter.html"*/'  <!-- Filter -->\n  <ion-item *ngIf="filterOpened" color="filterColor01" style="margin-top:18%; min-height: 30px; width: 95%; margin-left: 8px !important; margin-right: 8px !important; border-radius: 100px;">\n    <ion-label no-margin style="font-size: 1rem; text-align: center;">\n      Bahan Baku Produk\n    </ion-label>\n  </ion-item>\n\n  <ion-scroll *ngIf="filterOpened" scrollY="true" style="vertical-align: baseline;">\n    <!-- Default Checkbox -->\n    <div color="filterColor02">\n      <div *ngIf="this.backupProduk == null" class="loading-filter">\n        <img src="assets/icon/Spinner-0.5s-200px.gif" class="img-loading-filter">\n      </div>\n      <div *ngIf="this.backupProduk != null">\n        <ion-item *ngFor="let item of this.backupProduk; let i = index">\n          <ion-label color="filterColor01" style="text-transform: capitalize;">{{ item.data["0"].bahan }}</ion-label>\n          <ion-checkbox (ionChange)="checked($event)" (click)="CheckboxProdukClicked(this, item)"></ion-checkbox>\n        </ion-item>\n      </div>\n    </div>\n  </ion-scroll>\n\n  <ion-item *ngIf="filterOpened" color="filterColor01" style="min-height: 30px; width: 95%; margin-left: 8px !important; margin-right: 8px !important; border-radius: 100px;">\n    <ion-label no-margin style="font-size: 1rem; text-align: center;">\n      Daerah\n    </ion-label>\n  </ion-item>\n\n  <ion-scroll *ngIf="filterOpened" scrollY="true" style="min-height: 30px; width: 95%; margin-left: 8px !important; margin-right: 8px !important; border-radius: 100px; margin-bottom: 10px !important">\n      <div color="filterColor02">\n        <div *ngIf="this.backupUkm == null" class="loading-filter">\n          <img src="assets/icon/Spinner-0.5s-200px.gif" class="img-loading-filter">\n        </div>\n        <div *ngIf="this.backupUkm != null">\n        <ion-item *ngFor="let item of this.backupUkm; let i = index">\n          <ion-label color="filterColor01" style="text-transform: uppercase; text-transform: capitalize">{{ item.data["0"].nama_daerah }}</ion-label>\n          <ion-checkbox (ionChange)="checked($event)" (click)="CheckboxDaerahClicked(this, item)"></ion-checkbox>\n        </ion-item>\n      </div>\n    </div>\n  </ion-scroll>\n  \n  \n  <ion-item *ngIf="filterOpened" color="filterColor02" style="min-height: 30px; width: 95%; margin-left: 8px !important; margin-right: 8px !important; border-radius: 100px;" (click)="getFilterProduk(item, $event)">\n      <ion-label no-margin style="font-size: 1rem; text-align: center;">\n        Terapkan\n      </ion-label>\n  </ion-item>'/*ion-inline-end:"D:\project\sipolahsar_v1-master - Copy\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            Storage])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=1.js.map