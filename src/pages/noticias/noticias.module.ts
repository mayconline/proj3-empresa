import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasPage } from './noticias';
import { CriarNoticiaPageModule } from '../criar-noticia/criar-noticia.module';

@NgModule({
  declarations: [
    NoticiasPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasPage),
    CriarNoticiaPageModule
  ],
})
export class NoticiasPageModule {}
