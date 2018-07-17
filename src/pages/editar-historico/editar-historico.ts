import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VendasProvider } from '../../providers/vendas/vendas';

/**
 * Generated class for the EditarHistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-historico',
  templateUrl: 'editar-historico.html',
})
export class EditarHistoricoPage {
resgate: any;
form:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder:FormBuilder, 
    private resgateService:VendasProvider, private toast:ToastController) {
  }


  createForm(){
    this.form = this.formBuilder.group({
      key:[this.resgate.key],
    status:[this.resgate.status],
    dias:[this.resgate.dias]
 
    }); 
   }

//metodo de criar / editar //

onSubmit(){
  if(this.form.valid){
      this.resgateService.trocarStatus(this.form.value)
        .then(()=> {
            this.toast.create({ message: 'Status Alterado', duration: 3000}).present();
            this.navCtrl.pop();
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
