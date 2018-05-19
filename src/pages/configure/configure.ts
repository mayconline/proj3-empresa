import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-configure',
  templateUrl: 'configure.html',
})
export class ConfigurePage {

  user:any = {}; 

  constructor( private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {
  
      //verifica os dados do usuario logado //
      
    this.afAuth.authState.subscribe(firebaseUser =>{
        if(firebaseUser){
          const usuarioLogado = authService.getUserInfo().subscribe(userData =>{
            this.user = userData;

            usuarioLogado.unsubscribe();

          })
        }else {
          this.user = {};
        }
    })
  }




ionViewDidLoad(){
  console.log(this.user);
}

//Navegar entre Paginas//
irRecompensas(){
  this.navCtrl.push('RecompensasPage')
}

sair(){
  this.authService.logout();
}

irUsuarios(){
  this.navCtrl.push('UsuariosPage')
}

irPontos(){
  this.navCtrl.push('PontosPage')
}

irNew(){
  this.navCtrl.push('NoticiasPage')
}

}

