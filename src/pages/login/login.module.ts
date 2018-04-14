import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegistroPageModule } from '../registro/registro.module';
import { ConfigurePageModule } from '../configure/configure.module';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    RegistroPageModule,
    ConfigurePageModule
    
  ],
})
export class LoginPageModule {}
