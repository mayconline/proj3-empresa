import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarNoticiaPage } from './criar-noticia';

@NgModule({
  declarations: [
    CriarNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarNoticiaPage),
  ],
})
export class CriarNoticiaPageModule {}
