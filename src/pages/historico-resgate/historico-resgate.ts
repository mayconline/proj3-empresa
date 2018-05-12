import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { VendasProvider } from '../../providers/vendas/vendas';


@IonicPage()
@Component({
  selector: 'page-historico-resgate',
  templateUrl: 'historico-resgate.html',
})
export class HistoricoResgatePage {
  user:any = {};
  resgates:any;
  entregues:any;
  

  constructor( private afAuth:AngularFireAuth, private resgateService:VendasProvider,
    public authService:AuthServiceProvider, private toast:ToastController,
    public navCtrl: NavController, public navParams: NavParams) {

    
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



  sair(){
    this.authService.logout();
  }



  editHist(resgate){
    this.navCtrl.push('EditarHistoricoPage',  {resgate:resgate})

  }


  removerResgate(key:string){
    this.resgateService.remove(key)
      .then(()=>{

        this.toast.create({ message: 'Removido com Sucesso', duration:3000}).present();
        
      })
      .catch((e)=>{
        
        this.toast.create({ message: 'Falha ao remover ', duration:3000}).present();
        console.error(e);

      })
 }
  


  ionViewWillLoad(){
    this.resgates = this.resgateService.getUserAll();
    this.entregues = this.resgateService.getUserAllEntregue();
    

  }


}
