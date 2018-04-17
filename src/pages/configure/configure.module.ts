import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurePage } from './configure';
import { RecompensasPageModule } from '../recompensas/recompensas.module';

@NgModule({
  declarations: [
    ConfigurePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurePage),
    RecompensasPageModule
  ],
})
export class ConfigurePageModule {}
