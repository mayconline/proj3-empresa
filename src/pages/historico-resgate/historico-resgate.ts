import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { VendasProvider } from '../../providers/vendas/vendas';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { tap, map, take } from 'rxjs/operators'

@IonicPage()
@Component({
  selector: 'page-historico-resgate',
  templateUrl: 'historico-resgate.html',
})
export class HistoricoResgatePage {
  user: any = {};

  resgates: Observable<any>;
  entregues: any;
  status: any = "solicitados"

  ptbr = moment.locale('pt-br');
  dataHoje: any;
  mesHoje:any;
  dataFinal:any;

  constructor(private afAuth: AngularFireAuth, private resgateService: VendasProvider,
    public authService: AuthServiceProvider, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams,
    public modal: ModalController) {

      


    this.dataAtual();

  }

  date:boolean = false;
  clickDate(){
    this.date = !this.date;
  }

  searchBarOpen:boolean = false;

  barClick(){
    this.searchBarOpen = !this.searchBarOpen;
   
  }

  dataAtual() {

    this.dataHoje = moment.locale('pt-br');

    this.dataHoje =  moment().toJSON();
    this.mesHoje = moment().format('MMMM');
    this.anoHoje = moment().format('YYYY');
    //console.log(this.mesHoje)

  
  }

  armeses = ['janeiro', 'fevereiro', 'março','abril', 'maio',
  'junho','julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  
  anoHoje:any;
  anos =['2018', '2019', '2020','2021'];

  abrirModal(resgate: Observable<any>) {

    const meuModal = this.modal.create('ModalResgatePage', { resgate: resgate })
    meuModal.present();
 
  }


  sair() {
    this.authService.logout();
  }



  editHist(resgate) {
    this.navCtrl.push('EditarHistoricoPage', { resgate: resgate })

  }


  removerResgate(key: string) {
    this.resgateService.remove(key)
      .then(() => {

        this.toast.create({ message: 'Removido com Sucesso', duration: 3000 }).present();

      })
      .catch((e) => {

        this.toast.create({ message: 'Falha ao remover ', duration: 3000 }).present();
        console.error(e);

      })
  }


  obterUser() {
    this.afAuth.authState.subscribe(firebaseUser => {
      if (firebaseUser) {
        const usuarioLogado = this.authService.getUserInfo().subscribe(userData => {
          this.user = userData;


        })
      } else {
        this.user = {};
      }
    })

  }


 

  ionViewWillLoad() {
   this.resgates = this.resgateService.getUserAll();
    
    this.entregues = this.resgateService.getUserAllEntregue();
    this.obterUser();
    
  }

  // searchbar //

  getItems(ev: any) {
    // Reset items back to all of the items
    this.resgates = this.resgateService.getUserAll();
    

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.resgates = this.resgates
        .map(resgateList => resgateList.filter((v) => {
           
               return v.cpf.toLowerCase().indexOf(val.toLowerCase()) !== -1;
            
        }));
     
    }
  } // searchbar selecione user //

  // searchbar historico//

  getHist(ev: any) {
    // Reset items back to all of the items
    
    this.entregues = this.resgateService.getUserAllEntregue();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.entregues = this.entregues
        .map(entregueList => entregueList.filter((v) => {
           
               return v.cpf.toLowerCase().indexOf(val.toLowerCase()) !== -1;
            
        }));
     
    }
  } // searchbar //



 // infinity scroll

  /*
  ionViewDidEnter() {
  this.resgates = this.resgateService.historicos$
  this.resgateService.nextPage().pipe(take(1)).subscribe();
    
  
  }
    

  
  doInfinite(infiniteScroll): Promise<void> { 
    if (!this.resgateService.finished) { 
       return new Promise((resolve, reject) => {
          this.resgateService.nextPage() 
             .pipe(take(1))
             .subscribe(movies => {
             
                resolve();
             });
       });
    }
    return Promise.resolve();
 }


 doRefresh(refresher) {
 
  
  

  setTimeout(() => {
    
   
    refresher.complete();
  }, 2000);
}
*/

  //
}
