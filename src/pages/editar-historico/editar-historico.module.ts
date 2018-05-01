import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarHistoricoPage } from './editar-historico';

@NgModule({
  declarations: [
    EditarHistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarHistoricoPage),
  ],
})
export class EditarHistoricoPageModule {}
