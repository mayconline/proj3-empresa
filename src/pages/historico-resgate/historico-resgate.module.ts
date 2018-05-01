import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoResgatePage } from './historico-resgate';
import { EditarHistoricoPageModule } from '../editar-historico/editar-historico.module';

@NgModule({
  declarations: [
    HistoricoResgatePage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoResgatePage),
    EditarHistoricoPageModule
  ],
})
export class HistoricoResgatePageModule {}
