import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';




@IonicPage()
@Component({
  selector: 'page-configure',
  templateUrl: 'configure.html',
})
export class ConfigurePage {

  

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {
  }


 /* async sair(){
    await this.afAuth.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }*/

  

//Navegar entre Paginas//
irRecompensas(){
  this.navCtrl.push('RecompensasPage')
}

sair(){
  this.authService.logout();
}

}

//data && data.email && data.uid