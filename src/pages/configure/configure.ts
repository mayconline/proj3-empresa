import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-configure',
  templateUrl: 'configure.html',
})
export class ConfigurePage {

  

  constructor( private afAuth: AngularFireAuth, private toast: ToastController ,
    public navCtrl: NavController, public navParams: NavParams) {
  }


  async sair(){
    await this.afAuth.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
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
          message: `Deslogado com Sucesso `,
          duration:3000
      }).present();

      }
        
    });
  }

}
