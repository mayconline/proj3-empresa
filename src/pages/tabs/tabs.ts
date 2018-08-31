import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabsRoot = 'ConfigurePage'
  tabsRoot2 = 'HistoricoResgatePage'
  tabsRoot3 = 'DestaquesPage'


  constructor(public navCtrl: NavController) {}

 // user$:Subscription;
 /*
  ionViewDidLoad() {
   this.user$ =  this.afAuth.authState.subscribe(user => {
      if(user){
        this.toast.create({
          message: ` Seja Bem Vindo : ${user.email}`,
          duration:3000
      }).present();


      } else {

        this.toast.create({
          message: `Deslogado com Sucesso `,
          duration:3000
      }).present();

      }
        
    });
  }


  
ionViewWillUnload(){
  this.user$.unsubscribe();  
}*/

}
