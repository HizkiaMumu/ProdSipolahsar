import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JenisProdukPage } from './jenis-produk';

@NgModule({
  declarations: [
    JenisProdukPage,
  ],
  imports: [
    IonicPageModule.forChild(JenisProdukPage),
  ],
})
export class JenisProdukPageModule {}
