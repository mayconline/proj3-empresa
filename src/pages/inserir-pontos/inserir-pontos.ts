import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PontosProvider } from '../../providers/pontos/pontos';


import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-inserir-pontos',
  templateUrl: 'inserir-pontos.html',
})
export class InserirPontosPage {

  ponto:any;
  form:FormGroup;
  usuario:any
  

  constructor( private formBuilder:FormBuilder, private pontosProvider:PontosProvider, 
    public navCtrl: NavController, public navParams: NavParams, private toast:ToastController,
  private afDb:AngularFireDatabase) {

      this.usuario = this.navParams.data.usuario || {};

      
      console.log(this.usuario)  
  
    this.createForm();
  
  }

 

    


  private createForm() {
    
    

    this.form = this.formBuilder.group({
     
    
      nota: [''],
      valor: [0],
      cpf: [this.usuario.cpf],
      status:['Creditado'],
      Userkey:[this.usuario.key],
      NomeUser:[this.usuario.name],
      quantPontos:[0]
      
    });
  }

  somaPonto(valor){
   return this.form.value.quantPontos = valor / 10
  }

  insertPontos(quantPontos){
  
  
    return this.usuario.pontos = this.usuario.pontos + quantPontos
  
  };

  // atualiza pontos do usuario ao resgatar um produto 
atualizaPonto(usuario){
  return new Promise((resolve, reject) => {

          this.afDb.list('userProfile/')
            .update(this.usuario.key, {pontos: this.usuario.pontos})
            .then(()=> resolve())
            .catch((e)=> reject(e));
    
  });

};


  onSubmit(){
    if(this.form.valid){
     
      this.somaPonto(this.form.value.valor);
    this.insertPontos(this.form.value.quantPontos)
     
     this.atualizaPonto(this.usuario)

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
