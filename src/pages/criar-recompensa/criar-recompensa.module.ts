import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarRecompensaPage } from './criar-recompensa';

@NgModule({
  declarations: [
    CriarRecompensaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarRecompensaPage),
  ],
})
export class CriarRecompensaPageModule {}
