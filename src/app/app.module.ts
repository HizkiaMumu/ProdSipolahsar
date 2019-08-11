import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HostProvider } from '../providers/host/host'; 
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';
import { LoadingPage } from '../pages/loading/loading';
import { OpeningSatuPage } from '../pages/opening-satu/opening-satu';
import { JenisProdukPage } from '../pages/jenis-produk/jenis-produk';
import { JenisUkmPage } from '../pages/jenis-ukm/jenis-ukm';
import { ProfilPage } from '../pages/profil/profil';
import { DetailProdukPage } from '../pages/detail-produk/detail-produk';
import { DetailUkmPage } from '../pages/detail-ukm/detail-ukm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    OpeningSatuPage,
    LoadingPage,
    ProfilPage,
    JenisProdukPage,
    JenisUkmPage,
    DetailProdukPage,
    DetailUkmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    OpeningSatuPage,
    LoadingPage,
    ProfilPage,
    JenisProdukPage,
    JenisUkmPage,
    DetailProdukPage,
    DetailUkmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HostProvider
  ]
})
export class AppModule {}
