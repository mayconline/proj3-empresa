import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the ConfigurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configure',
  templateUrl: 'configure.html',
})
export class ConfigurePage {

  

  constructor( private afAuth: AngularFireAuth, private toast: ToastController ,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: ` Seja Bem Vindo : ${data.email},`,
          duration:3000
      }).present();

      } else {

        this.toast.create({
          message: ` Não foi possivel se autenticar`,
          duration:3000
      }).present();

      }
        
    });
  }

}
