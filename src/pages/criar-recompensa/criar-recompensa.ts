import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RecompensasProvider } from '../../providers/recompensas/recompensas';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-criar-recompensa',
  templateUrl: 'criar-recompensa.html',
})
export class CriarRecompensaPage {

  title:string;
  form:FormGroup;
  recompensa:any;

  constructor( private formBuilder: FormBuilder,private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams, private recompProvider:RecompensasProvider) {

      this.recompensa = this.navParams.data.recompensa || {};
      this.createForm();
      this.modificarTitle();
  }


  private modificarTitle(){
    this.title = this.navParams.data.recompensa ? 'Alterar Recompensa' : 'Criar Recompensa';
  }
  
  createForm(){
      this.form = this.formBuilder.group({
        key:[this.recompensa.key],
        nome:[this.recompensa.nome, Validators.required],
        pontos:[this.recompensa.pontos, Validators.required]
      })
  }

//metodo de criar / editar //

  onSubmit(){
      if(this.form.valid){
          this.recompProvider.save(this.form.value)
            .then(()=> {
                this.toast.create({ message: 'Recompensa Adicionada', duration: 3000}).present();
                this.navCtrl.pop();
            })
            .catch((e)=>{
                this.toast.create({ message: 'Falha ao gravar os dados', duration:3000}).present();
                console.error(e);
            })
      }
  }  

}
