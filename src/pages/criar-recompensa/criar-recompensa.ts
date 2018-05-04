import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RecompensasProvider } from '../../providers/recompensas/recompensas';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-criar-recompensa',
  templateUrl: 'criar-recompensa.html',
})
export class CriarRecompensaPage {

  title:string;
  form:FormGroup;
  recompensa:any;
  photo: string;

  


  constructor( private formBuilder: FormBuilder,private toast: ToastController, private camera:Camera,
    public navCtrl: NavController, public navParams: NavParams, private recompProvider:RecompensasProvider) {

      this.recompensa = this.navParams.data.recompensa || {};
      this.createForm();
      this.modificarTitle();
      this.photo = ''; 
  }


  private modificarTitle(){
    this.title = this.navParams.data.recompensa ? 'Alterar Recompensa' : 'Criar Recompensa';
  }
  
  createForm(){
      this.form = this.formBuilder.group({
        key:[this.recompensa.key],
        nome:[this.recompensa.nome, Validators.required],
        pontos:[this.recompensa.pontos, Validators.required],
        destaque:[this.recompensa.destaque],
        photo:[this.photo]
        
        
        
        
      })
  }

  
//camera
  takePicture(type) {
  
  
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
}
  
  
this.camera.getPicture(options)
.then((imageData) => {
  let base64image = 'data:image/jpeg;base64,' + imageData;
  this.photo = base64image;

}, (error) => {
  console.error(error);
})
.catch((error) => {
  console.error(error);
})

  } //

//metodo de criar / editar //

  onSubmit(){
      if(this.form.valid){
          this.recompProvider.uploadAndSave(this.form.value)
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
