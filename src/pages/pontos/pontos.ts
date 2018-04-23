import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { PontosProvider } from '../../providers/pontos/pontos';

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

  pontos:Observable<any>;

  constructor( private pontosService:PontosProvider,private toast:ToastController,
    public navCtrl: NavController, public navParams: NavParams) {

    this.pontos = this.pontosService.getAll();
  }


// crud //
  inserirPonto(){
    this.navCtrl.push('InserirPontosPage');
  }


  editarPonto(ponto:any){
    this.navCtrl.push('InserirPontosPage', {ponto:ponto});

  }

   removerPonto(key:string){
     this.pontosService.remove(key)
       .then(()=>{

         this.toast.create({ message: 'Removido com Sucesso', duration:3000}).present();
         
       })
       .catch((e)=>{
         
         this.toast.create({ message: 'Falha ao remover ', duration:3000}).present();
         console.error(e);

       })
  }
  

}
