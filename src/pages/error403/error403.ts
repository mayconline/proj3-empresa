import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



@IonicPage()
@Component({
  selector: 'page-error403',
  templateUrl: 'error403.html',
})
export class Error403Page {

  constructor(private authService:AuthServiceProvider) {
  }

  sair(){
 
    this.authService.logout2();
      
  }

  ionViewWillUnload(){
    this.sair();
   
    
  }

}
