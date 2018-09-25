import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VendasProvider } from '../../providers/vendas/vendas';
import { OnesignalProvider } from '../../providers/onesignal/onesignal';



@IonicPage()
@Component({
  selector: 'page-editar-historico',
  templateUrl: 'editar-historico.html',
})
export class EditarHistoricoPage {
resgate: any;

form:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder:FormBuilder, 
    private resgateService:VendasProvider, private toast:ToastController, 
     public onesignalProvider:OnesignalProvider) {
  }


  createForm(){
    this.form = this.formBuilder.group({
      key:[this.resgate.key],
    status:[this.resgate.status],
    Userkey:[this.resgate.Userkey],
    url:[this.resgate.url],
    prodNome:[this.resgate.prodNome]
   
 
    }); 
   }

//metodo de criar / editar //

onSubmit(){
  if(this.form.valid){
      this.resgateService.trocarStatus(this.form.value)
        .then(()=> {
            this.toast.create({ message: 'Status Alterado', duration: 3000}).present();
            this.navCtrl.pop();

            //enviando push notification de alteracao de status para o cliente //
            this.onesignalProvider.envioOneSigPeloFiltro(`Status do Pedido ${this.form.value.prodNome}`, 
            `Foi alterado para ${this.form.value.status} `,
              `${this.form.value.Userkey}`, `${this.form.value.url}` )

        })
        .catch((e)=>{
            this.toast.create({ message: 'Falha ao gravar os dados', duration:3000}).present();
            console.error(e);
        })
  }
}  



  ionViewWillLoad() {
 
 this.resgate = this.navParams.data.resgate || {};
 this.createForm();
 //console.log(this.resgate)

   }
 

}
