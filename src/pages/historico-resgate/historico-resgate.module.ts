import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoResgatePage } from './historico-resgate';
import { EditarHistoricoPageModule } from '../editar-historico/editar-historico.module';
import { ModalResgatePageModule } from '../modal-resgate/modal-resgate.module';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    HistoricoResgatePage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoResgatePage),
    EditarHistoricoPageModule,
   ModalResgatePageModule,
   BrMaskerModule
  ],
})
export class HistoricoResgatePageModule {}
