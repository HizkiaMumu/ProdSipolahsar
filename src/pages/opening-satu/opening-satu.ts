import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-opening-satu',
  templateUrl: 'opening-satu.html',
})
export class OpeningSatuPage {

  @ViewChild(Slides) slides: Slides;
  buttonText: any = 'Skip';
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex == 0) {
      this.buttonText = 'Skip';
    } else if (currentIndex != 0) {
      this.buttonText = 'Saya Mengerti';
    }
    console.log('Current index is', currentIndex);
  }

  continue() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpeningSatuPage');
  }

}
