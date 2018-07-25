import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PontosPage } from './pontos';
import { InserirPontosPageModule } from '../inserir-pontos/inserir-pontos.module';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { ModalNotasPageModule } from '../modal-notas/modal-notas.module';


@NgModule({
  declarations: [
    PontosPage,
  ],
  imports: [
    IonicPageModule.forChild(PontosPage),
    InserirPontosPageModule,
    BrMaskerModule,
    ModalNotasPageModule
   
  ],
})
export class PontosPageModule {}
