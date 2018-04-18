import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, ToastController } from 'ionic-angular';
import { RecompensasProvider } from '../../providers/recompensas/recompensas';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-recompensas',
  templateUrl: 'recompensas.html',
})
export class RecompensasPage {
  
  recompensas: Observable<any>;

  constructor( private recompProvider:RecompensasProvider, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams, public app: App, public modal: ModalController) {


      this.recompensas = this.recompProvider.getAll();
    //  this.initializeItems();
 
  }
  
  //navegação
 abrirModal(recompensa: Observable<any>){
   
    const meuModal = this.modal.create('ModalRecompensaPage', {recompensa:recompensa})
    meuModal.present();
    
 }

 voltarLogin(){
    
  this.app.getRootNav().setRoot( 'LoginPage' );
   
 }


/*
  Pontos(){
    this.navCtrl.push('MeusPontosPage');
 }

 meuResgate(){
  this.navCtrl.push('MeusResgatesPage');
 }
*/
  

//metodos de crud //

   criarRecomp(){
     this.navCtrl.push('CriarRecompensaPage');
   }


   editarRecomp(recompensa:any){
     this.navCtrl.push('CriarRecompensaPage', {recompensa:recompensa});

   }

    removerRecomp(key:string){
      this.recompProvider.remove(key)
        .then(()=>{

          this.toast.create({ message: 'Removido com Sucesso', duration:3000}).present();
          
        })
        .catch((e)=>{
          
          this.toast.create({ message: 'Falha ao remover ', duration:3000}).present();
          console.error(e);

        })
   }
    

  
/*   
  nome: string = '';
  produtos: any;

  initializeItems() {
  
    this.produtos =  [{
      nome:'Carro',
      ponto:100
    } ,
    {
      nome:'Blusa',
      ponto:50
    } ];
  
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.produtos = this.produtos.filter((produto) => {
        return (produto.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
*/


  
   

}
