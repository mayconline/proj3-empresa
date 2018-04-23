import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PontosProvider } from '../../providers/pontos/pontos';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-inserir-pontos',
  templateUrl: 'inserir-pontos.html',
})
export class InserirPontosPage {

  ponto:any;
  form:FormGroup;
  

  constructor( private formBuilder:FormBuilder, private pontosProvider:PontosProvider, private usuarioProvider:UsuariosProvider,
    public navCtrl: NavController, public navParams: NavParams, private toast:ToastController) {

     

    this.ponto = this.navParams.data.ponto || {};
    this.createForm();
  }


  private createForm() {

    this.ponto.quantPontos = this.ponto.valor / 10;
    

    this.form = this.formBuilder.group({
      key:[this.ponto.key],
      nota: [this.ponto.nota],
      valor: [this.ponto.valor],
      cpf: [this.ponto.cpf],
      quantPontos:[this.ponto.quantPontos],
      status:[this.ponto.status]
    });
  }



  onSubmit(){
    if(this.form.valid){
        this.pontosProvider.save(this.form.value)
          .then(()=> {
              this.toast.create({ message: 'Pontos inseridos', duration: 3000}).present();
              this.navCtrl.pop();
          })
          .catch((e)=>{
              this.toast.create({ message: 'Falha ao gravar os dados', duration:3000}).present();
              console.error(e);
          })
    }
}


}
