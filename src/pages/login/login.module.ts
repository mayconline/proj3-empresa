import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegistroPageModule } from '../registro/registro.module';
import { ConfigurePageModule } from '../configure/configure.module';
import { ResetSenhaPageModule } from '../reset-senha/reset-senha.module';
import { TabsPageModule } from '../tabs/tabs.module';



@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    RegistroPageModule,
    ConfigurePageModule,
    ResetSenhaPageModule,
    TabsPageModule
    
  ],
})
export class LoginPageModule {}
