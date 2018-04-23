import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PontosPage } from './pontos';
import { InserirPontosPageModule } from '../inserir-pontos/inserir-pontos.module';

@NgModule({
  declarations: [
    PontosPage,
  ],
  imports: [
    IonicPageModule.forChild(PontosPage),
    InserirPontosPageModule
  ],
})
export class PontosPageModule {}
