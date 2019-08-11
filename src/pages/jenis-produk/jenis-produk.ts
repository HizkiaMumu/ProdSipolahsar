import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailProdukPage } from '../detail-produk/detail-produk';
import { HostProvider } from '../../providers/host/host';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-jenis-produk',
  templateUrl: 'jenis-produk.html',
})
export class JenisProdukPage {
  item: any;
  data: any;
  keys: any;
  dataProduk: any;
  backupDetailProduk: any[];  
  activeButton: any;
  backupProduk: any;
  backupUkm: any;
  dataUkm: any;
  backupFilter: any;
  dataFilter: any;
  dataFilterUkm: any = [];
  dataFilterProduk: any = [];
  

  public isSearchBarOpened = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController,
              private storage: Storage,
              public http: HttpClient,
              private host:HostProvider) {
    this.item = this.navParams.data;
    
    this.backupDetailProduk = this.item;
    console.log('**navParams:', this.backupDetailProduk);
    this.getDataProduk();
    this.getDataUkm();
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

  back(){
    this.navCtrl.pop();
  }

  itemTapped(item){
    this.navCtrl.push(DetailProdukPage, item);
  }

  initData(){
    this.item = this.backupDetailProduk;
  }

  onSearch(ev: any) {
    // Reset items back to all of the items
    this.initData();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.item.data = this.item.data.filter((item) => {
        return (item.brand.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    console.log(this.item.data);
  }

  doRefresh(refresher) {
    this.isSearchBarOpened=false;
    this.item.data;
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  doRefreshButton(button) {
    this.isSearchBarOpened=false;
    this.item.data;
    console.log('Begin async operation', button);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JenisProdukPage');
  }

}
