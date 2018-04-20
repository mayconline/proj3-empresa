import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ConfigurePageModule } from '../configure/configure.module';
import { HistoricoResgatePageModule } from '../historico-resgate/historico-resgate.module';
import { DestaquesPageModule } from '../destaques/destaques.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    ConfigurePageModule,
    HistoricoResgatePageModule,
    DestaquesPageModule
  ]
})
export class TabsPageModule {}
