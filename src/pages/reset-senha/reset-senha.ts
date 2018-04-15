import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-reset-senha',
  templateUrl: 'reset-senha.html',
})
export class ResetSenhaPage {

  user = {} as User;

  constructor( private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }


 async resetPass(user:User){

  let toast =  this.toast.create({ duration: 3000, position: 'bottom' });
 await this.afAuth.auth.sendPasswordResetEmail(this.user.email)
  .then(() => { 
        toast.setMessage('Email de Redefinição de Senha Enviado para seu email')
        toast.present();
        this.navCtrl.pop();
    })
  .catch((error:any) =>{
    if (error.code == 'auth/invalid-email') {
      toast.setMessage('O e-mail digitado não é valido.');
    } else if (error.code == 'auth/user-not-found') {
      toast.setMessage('O usuário não foi encontrado.');
    }

toast.present();

  });
}

}
