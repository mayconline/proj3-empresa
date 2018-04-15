import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor( private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }


  // Login no Firebase //
  async logar(user:User){

await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(() => {
        this.navCtrl.setRoot('ConfigurePage');
      })

      .catch((error: any) => {
            let toast = this.toast.create({ duration: 3000, position: 'bottom' });
            if (error.code == 'auth/invalid-email') {
              toast.setMessage('e-mail invalido');
            } else if (error.code == 'auth/user-disabled') {
              toast.setMessage('usuário desativado');
            } else if (error.code == 'auth/user-not-found') {
              toast.setMessage('usuário não cadastrado');
            } else if (error.code == 'auth/wrong-password') {
              toast.setMessage('senha errada');
            }
  toast.present();    
                          });
};
 
// Funcoes de Navegacao //
registrese(){
    this.navCtrl.push('RegistroPage');

  };

 irResetPage(){

  this.navCtrl.push('ResetSenhaPage');   

 } 

}
