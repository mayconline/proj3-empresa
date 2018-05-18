import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurePage } from './configure';
import { UsuariosPageModule } from '../usuarios/usuarios.module';
import { PontosPageModule } from '../pontos/pontos.module';

import { NoticiasPageModule } from '../noticias/noticias.module';



@NgModule({
  declarations: [
    ConfigurePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurePage),
    UsuariosPageModule,
    PontosPageModule,
    NoticiasPageModule
  ],
})
export class ConfigurePageModule {}
