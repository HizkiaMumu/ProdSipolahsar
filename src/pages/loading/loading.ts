import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpeningSatuPage } from '../opening-satu/opening-satu';

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setTimeout(() => {
      this.navCtrl.setRoot(OpeningSatuPage);
    }, 4000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

}
