import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RecompensasProvider } from '../../providers/recompensas/recompensas';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the DestaquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destaques',
  templateUrl: 'destaques.html',
})
export class DestaquesPage {

  recompensas: Observable <any>;

  constructor( private recompProvider:RecompensasProvider,
    public navCtrl: NavController, public navParams: NavParams, public app: App) {

      this.recompensas = this.recompProvider.getDestaque();
  }

 
  

 

  voltarLogin(){
    
    this.app.getRootNav().setRoot( 'LoginPage' );
     
   }

 

  ionViewDidLoad() {
    
  }

}
