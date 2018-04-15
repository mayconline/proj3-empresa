import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User;

  constructor( private afAuth: AngularFireAuth, private toast:ToastController, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async registrar(user: User){

    let toast = this.toast.create({ duration: 3000, position: 'bottom' });

    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    
    .then((user:any) =>{
    
      user.sendEmailVerification();

          toast.setMessage('Usuário criado com sucesso.');
          toast.present();  

        this.navCtrl.setRoot('LoginPage');
    })

    .catch((error:any)=>{

      if (error.code  == 'auth/email-already-in-use') {
        toast.setMessage('O e-mail digitado já está em uso.');
      } else if (error.code  == 'auth/invalid-email') {
        toast.setMessage('e-mail invalido');
      } else if (error.code  == 'auth/operation-not-allowed') {
        toast.setMessage('Sem autorização para criar usuarios');
      } else if (error.code  == 'auth/weak-password') {
        toast.setMessage('Senha minima de 6 caracteres');
      }
toast.present();
    });

    /*try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.push('LoginPage');
      }
    }
      catch(e){
        console.error(e);
      }*/


  }



  voltarLogin(){
    this.navCtrl.setRoot('LoginPage');
  }

}
