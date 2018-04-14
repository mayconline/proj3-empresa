import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor( private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }


  
  async logar(user:User){
    
    try{
     const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      if (result){
        this.navCtrl.setRoot('ConfigurePage');
      }
    
    }
      catch(e){
        console.error(e);
      }
    
  }
  registrese(){
    this.navCtrl.push('RegistroPage');
  }

}
