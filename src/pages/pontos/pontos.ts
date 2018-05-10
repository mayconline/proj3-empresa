import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the PontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pontos',
  templateUrl: 'pontos.html',
})
export class PontosPage {

  usuarios:Observable<any>;

  constructor( private usuarioProvider: UsuariosProvider,private toast:ToastController,
    public navCtrl: NavController, public navParams: NavParams) {

   
      this.usuarios = this.usuarioProvider.getUserAll();
  }



// crud //
/*
  inserirPonto(){
    this.navCtrl.push('InserirPontosPage');
  }*/


inserirPonto(usuario:any){
    this.navCtrl.push('InserirPontosPage', {usuario:usuario});

  }
/*
   removerPonto(key:string){
     this.pontosService.remove(key)
       .then(()=>{

         this.toast.create({ message: 'Removido com Sucesso', duration:3000}).present();
         
       })
       .catch((e)=>{
         
         this.toast.create({ message: 'Falha ao remover ', duration:3000}).present();
         console.error(e);

       })
  }*/
  

}
