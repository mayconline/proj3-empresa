import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';







@IonicPage()
@Component({
  selector: 'page-configure',
  templateUrl: 'configure.html',
})
export class ConfigurePage {

  user: any = {};

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {


  }


 



  //Navegar entre Paginas//
  irRecompensas() {
    this.navCtrl.push('RecompensasPage')
  }

 

  irUsuarios() {
    this.navCtrl.push('UsuariosPage')
  }

  irPontos() {
    this.navCtrl.push('PontosPage')
  }

  irNew() {
    this.navCtrl.push('NoticiasPage')
  }

}

