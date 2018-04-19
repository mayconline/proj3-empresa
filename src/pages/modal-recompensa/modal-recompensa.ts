import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RecompensasProvider } from '../../providers/recompensas/recompensas';
import { async } from '@firebase/util';

/**
 * Generated class for the ModalRecompensaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-recompensa',
  templateUrl: 'modal-recompensa.html',
})
export class ModalRecompensaPage {

 


  constructor( private recompProvider:RecompensasProvider,
    public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {

     
    
  }

  prod = this.navParams.data.recompensa;


  fechar(){
    this.view.dismiss();
  }

  
  ionViewWillLoad() {
   
     
  }


  
   

  

}
