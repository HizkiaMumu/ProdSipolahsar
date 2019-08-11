import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoadingPage } from '../loading/loading';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  button() {
    setTimeout(() => {
      this.navCtrl.push(LoadingPage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
