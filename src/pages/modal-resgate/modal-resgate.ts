import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalResgatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-resgate',
  templateUrl: 'modal-resgate.html',
})
export class ModalResgatePage {
 
  resgate:any
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public view: ViewController) {
  }


  fechar(){
    this.view.dismiss();
  };

  ionViewWillLoad() { 
    this.resgate = this.navParams.data.resgate || {};
    console.log(this.resgate)
  }

}
