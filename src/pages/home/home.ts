import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController  } from 'ionic-angular';
import { HostProvider } from '../../providers/host/host';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfilPage } from '../profil/profil';
import { JenisProdukPage } from '../jenis-produk/jenis-produk';
import { JenisUkmPage } from '../jenis-ukm/jenis-ukm';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  home: string = "home-produk";
  isAndroid: boolean = false;
  activeButton: any;
  backupProduk: any;
  backupUkm: any;
  dataProduk: any;
  dataUkm: any;
  keys: any;
  backupFilter: any;
  dataFilter: any;
  dataFilterUkm: any = [];
  dataFilterProduk: any = [];

  
  public isSearchBarOpened = false;
  public filterOpened = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public platform: Platform, 
              public host: HostProvider, 
              public http: HttpClient, 
              public modalCtrl: ModalController,
              private storage: Storage) {
    this.isAndroid = platform.is('android');   
    this.getDataProduk();
    this.getDataUkm();
    this.initDataProduk();
    this.initDataUkm();
  }


  setActiveButton(button){
    this.activeButton = button;
  }

  // DATA PRODUK
  getDataProduk(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept':  'application/*',
      })
    };

  this.http.get(this.host.baseUrl + "/v1/data/kategori-produk", httpOptions)
  .subscribe(
    data => {
      this.dataProduk = [];
      this.keys = Object.keys(data);

      for(let i = 0; i < this.keys.length; i++){
        this.dataProduk.push({
          'key': this.keys[i],
          'data': data[this.keys[i]]
        });
      }

      this.backupProduk = this.dataProduk;
      console.log(this.dataProduk);
    }, (err) => {
      console.log("error : " + err);
      console.log(err);
    });
  }

  itemTapped($event, item){
    this.navCtrl.push(JenisProdukPage, item);
  }

  // DATA UKM
  getDataUkm(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept':  'application/*',
      })
    };

  this.http.get(this.host.baseUrl + "/v1/data/daerah-penjual", httpOptions)
  .subscribe(
    data => {
      this.dataUkm = [];
      this.keys = Object.keys(data);

      for(let i = 0; i < this.keys.length; i++){
        this.dataUkm.push({
          'key': this.keys[i],
          'data': data[this.keys[i]]
        });
      }

      this.backupUkm = this.dataUkm;
      console.log(this.dataUkm);
    }, (err) => {
      console.log("error : " + err);
      console.log(err);
    });
  }


  itemTappedUkm($event, item){
    this.isSearchBarOpened=false;
    this.navCtrl.push(JenisUkmPage, item);
  }
  
  initDataProduk(){
    this.dataProduk = this.backupProduk;
  }

  initDataUkm(){
    this.dataUkm = this.backupUkm;
  }
  
  initDataFilter(){
    this.dataFilterProduk = this.backupFilter;
  }

  onSearch(ev: any) {
    if (this.activeButton != 'ukm') {
      // Reset items back to all of the items
      this.initDataProduk();
  
      // set val to the value of the searchbar
      const val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
        this.dataProduk = this.dataProduk.filter((item) => {
          return (item.key.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      }console.log(this.activeButton);
      console.log(this.dataProduk);
    } 
    if (this.activeButton == 'ukm') {
      // Reset items back to all of the items
      this.initDataUkm();

      // set val to the value of the searchbar
      const val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
        this.dataUkm = this.dataUkm.filter((item) => {
          return (item.key.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }console.log(this.activeButton);
       console.log(this.dataUkm);
    }
  }

  halamanProfile(){
    this.navCtrl.push(ProfilPage);
  }

  // check value checkbox produk
  CheckboxProdukClicked(check: any, item: any) {
    var index = this.dataFilterProduk.indexOf(item.data["0"].bahan);
    if (index > -1) {
      this.dataFilterProduk.splice(index, 1);
    } else {
      this.dataFilterProduk.push(item.data["0"].bahan);
    }
    console.log(check);
    console.log(this.dataFilterProduk);
  }

  // check value checkbox daerah
  CheckboxDaerahClicked(check: any, item: any) {
    var index = this.dataFilterUkm.indexOf(item.data["0"].nama_daerah);
    if (index > -1) {
      this.dataFilterUkm.splice(index, 1);
    } else {
      this.dataFilterUkm.push(item.data["0"].nama_daerah);
    }
    console.log(check);
    console.log(this.dataFilterUkm);
  }
  
  doRefresh(refresher) {
    this.isSearchBarOpened=false;
    this.getDataProduk();
    this.getDataUkm();
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doRefreshButton(button) {
    this.isSearchBarOpened=false;
    this.getDataProduk();
    this.getDataUkm();
    console.log('Begin async operation', button);
  }

  checked(e) {
    console.log("checked");
    console.log(e);
  }

  ionViewDidEnter() {
    
  }

  getFilterProduk($event, item){
    this.filterOpened = false;
    this.getDataFiltered();
  }

  

  getDataFiltered(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept':  'application/*',
      })
    };

    let endpoint = "/v1/data/filter-produk?bahan_baku=";

    for (let i = 0; i < this.dataFilterProduk.length; i++) {
      endpoint = endpoint + this.dataFilterProduk[i] + ",";
    }

    this.http.get(this.host.baseUrl + endpoint, httpOptions)
    .subscribe(
      data => {
        this.dataProduk = [];
        this.keys = Object.keys(data);

        for(let i = 0; i < this.keys.length; i++){
          this.dataProduk.push({
            'key': this.keys[i],
            'data': data[this.keys[i]]
          });
        }

        console.log(this.dataProduk + this.dataUkm);
      }, (err) => {
        console.log("error : " + err);
        console.log(err);
      });

      // ukm
      let endpointUkm = "/v1/data/filter-produk?nama_daerah=";

      for (let i = 0; i < this.dataFilterUkm.length; i++) {
        endpointUkm = endpointUkm + this.dataFilterUkm[i] + ",";
      }

      this.http.get(this.host.baseUrl + endpointUkm, httpOptions)
      .subscribe(
        data => {
          this.dataUkm = [];
          this.keys = Object.keys(data);

          for(let i = 0; i < this.keys.length; i++){
            this.dataUkm.push({
              'key': this.keys[i],
              'data': data[this.keys[i]]
            });
          }
          
          console.log(this.dataUkm);
        }, (err) => {
          console.log("error : " + err);
          console.log(err);
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openFilter(){
    this.filterOpened=true;
    this.isSearchBarOpened=false;
    this.dataFilterProduk = [];
  }

}
