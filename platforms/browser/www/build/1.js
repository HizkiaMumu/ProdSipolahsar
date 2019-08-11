webpackJsonp([1],{

/***/ 300:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_host_host__ = __webpack_require__(105);
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
    function FilterPage(navCtrl, navParams, viewCtrl, host, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.host = host;
        this.http = http;
        this.selectedArray = [];
        this.getBahanBaku();
        this.initData();
    }
    FilterPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    // DATA Filter
    FilterPage.prototype.getBahanBaku = function () {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/*',
            })
        };
        this.http.get(this.host.baseUrl + "/v1/data/kategori-produk", httpOptions)
            .subscribe(function (data) {
            _this.dataFilter = [];
            _this.keys = Object.keys(data);
            for (var i = 0; i < _this.keys.length; i++) {
                _this.dataFilter.push({
                    'key': _this.keys[i],
                    'data': data[_this.keys[i]]
                });
            }
            _this.item = _this.dataFilter;
            console.log(_this.dataFilter);
        }, function (err) {
            console.log("error : " + err);
            console.log(err);
        });
    };
    FilterPage.prototype.initData = function () {
        this.dataFilter = this.item;
    };
    FilterPage.prototype.getFilterProduk = function (item, $event) {
        return this.item.map(function (itemProduk) {
            return itemProduk.data["0"].nama_produk;
        });
    };
    FilterPage.prototype.CheckboxProdukClicked = function (item, $event) {
        if (item == 'checked') {
            console.log('Checked Produk :' + item.data["0"].nama_produk);
        }
        else {
            console.log('Unchecked');
        }
    };
    FilterPage.prototype.CheckboxDaerahClicked = function (item, $event) {
        console.log('Checked Daerah : ' + item.data["0"].nama_daerah);
    };
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"C:\xampp\htdocs\sipolahsar_v1-master\src\pages\filter\filter.html"*/'<!-- HEADER -->\n<ion-header>\n  <ion-navbar color="darkBlue">\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8 style="margin: auto;">\n        <ion-title style="text-align: center">Filter Produk</ion-title>\n      </ion-col>\n      <ion-col col-2>\n        <ion-buttons end>\n          <button ion-button (click)="closeModal()" style="font-size: 2rem;">X</button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>   \n</ion-header>\n\n<!-- BODY -->\n<ion-content padding>\n  <ion-item color="filterColor01" style="min-height: 30px;">\n    <ion-label no-margin style="font-size: 1rem; text-align: center;">\n      Bahan Baku Produk\n    </ion-label>\n  </ion-item>\n\n  <ion-scroll scrollY="true" style="vertical-align: baseline;">\n    <!-- Default Checkbox -->\n    <div color="filterColor02">\n      <div *ngIf="this.dataFilter == null" class="loading">\n        <img src="assets/icon/Spinner-0.5s-200px.gif" class="img-loading">\n      </div>\n      <div *ngIf="this.dataFilter != null">\n        <ion-item *ngFor="let item of this.dataFilter; let i = index">\n          <ion-label color="filterColor01" style="text-transform: capitalize;">{{ item.data["0"].nama_produk }}</ion-label>\n          <ion-checkbox (click)="CheckboxProdukClicked(item, $event)"></ion-checkbox>\n        </ion-item>\n      </div>\n    </div>\n  </ion-scroll>\n\n  <ion-item color="filterColor01" style="min-height: 30px;">\n    <ion-label no-margin style="font-size: 1rem; text-align: center;">\n      Daerah\n    </ion-label>\n  </ion-item>\n\n  <ion-scroll scrollY="true" style="margin-bottom: 10px;">\n    <div color="filterColor02">\n      <div *ngIf="this.dataFilter == null" class="loading">\n          <img src="assets/icon/Spinner-0.5s-200px.gif" class="img-loading">\n      </div>\n      <div *ngIf="this.dataFilter != null">\n        <ion-item *ngFor="let item of this.dataFilter; let i = index">\n          <ion-label color="filterColor01" style="text-transform: uppercase; text-transform: capitalize">{{ item.data["0"].nama_daerah }}</ion-label>\n          <ion-checkbox (click)="CheckboxDaerahClicked(item, $event)"></ion-checkbox>\n        </ion-item>\n      </div>\n   </div>\n  </ion-scroll>\n \n  \n  <ion-item color="filterColor02" style="min-height: 30px;" (click)="getFilterProduk(item, $event)">\n      <ion-label no-margin style="font-size: 1rem; text-align: center;">\n        Terapkan\n      </ion-label>\n  </ion-item>'/*ion-inline-end:"C:\xampp\htdocs\sipolahsar_v1-master\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_host_host__["a" /* HostProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=1.js.map