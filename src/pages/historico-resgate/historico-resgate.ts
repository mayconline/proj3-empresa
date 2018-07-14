import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { VendasProvider } from '../../providers/vendas/vendas';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

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

  constructor(private afAuth: AngularFireAuth, private resgateService: VendasProvider,
    public authService: AuthServiceProvider, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams,
    public modal: ModalController) {


    this.dataAtual();

  }


  dataAtual() {

    this.dataHoje = moment.locale('pt-br');

    this.dataHoje =  moment().toJSON();
  
  }

 

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
    console.log(this.resgates)
    this.entregues = this.resgateService.getUserAllEntregue();
    this.obterUser();


  }

  //
}
