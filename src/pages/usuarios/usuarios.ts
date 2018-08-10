import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';


@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  usuarios:Observable<any>;

  constructor( private usuarioProvider:UsuariosProvider,
    public navCtrl: NavController, public navParams: NavParams) {

   this.usuarios = this.usuarioProvider.getUserAll();
  // this.usuarios = this.usuarioProvider.getUserCpf();
  }


     
  searchBarOpen:boolean = false;
  hideBackButton:boolean = false;

  barClick(){
    this.searchBarOpen = !this.searchBarOpen;
    this.hideBackButton = !this.hideBackButton;
  }


  editarUser(usuario:any){
    this.navCtrl.push('EditarUsuarioPage', {usuario:usuario});

  }



// searchbar //

getItems(ev: any) {
  // Reset items back to all of the items
  this.usuarios = this.usuarioProvider.getUserAll();

  // set val to the value of the searchbar
  let val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.usuarios = this.usuarios
      .map(userList => userList.filter((v) => {
         
             return v.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
          
      }));
   
  }
} // searchbar //



  

}
