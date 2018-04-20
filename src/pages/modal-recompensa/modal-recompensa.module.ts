import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRecompensaPage } from './modal-recompensa';
import { HistoricoResgatePageModule } from '../historico-resgate/historico-resgate.module';

@NgModule({
  declarations: [
    ModalRecompensaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRecompensaPage),
    HistoricoResgatePageModule
  ],
})
export class ModalRecompensaPageModule {}
