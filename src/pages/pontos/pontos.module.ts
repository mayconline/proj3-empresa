import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PontosPage } from './pontos';
import { InserirPontosPageModule } from '../inserir-pontos/inserir-pontos.module';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    PontosPage,
  ],
  imports: [
    IonicPageModule.forChild(PontosPage),
    InserirPontosPageModule,
    BrMaskerModule
   
  ],
})
export class PontosPageModule {}
