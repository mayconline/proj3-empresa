import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecompensasPage } from './recompensas';
import { ModalRecompensaPageModule } from '../modal-recompensa/modal-recompensa.module';
import { CriarRecompensaPageModule } from '../criar-recompensa/criar-recompensa.module';
import { HistoricoResgatePageModule } from '../historico-resgate/historico-resgate.module';


@NgModule({
  declarations: [
    RecompensasPage,
  ],
  imports: [
    IonicPageModule.forChild(RecompensasPage),
    ModalRecompensaPageModule,
    CriarRecompensaPageModule,
    HistoricoResgatePageModule
  
  ],
})
export class RecompensasPageModule {}
