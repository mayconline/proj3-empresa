import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
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
  image: any;
  

  


  constructor( private formBuilder: FormBuilder,private toast: ToastController, private camera:Camera,
    public navCtrl: NavController, public navParams: NavParams, private recompProvider:RecompensasProvider,
      private loadingCtrl: LoadingController) {

      
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
        pontos:[this.recompensa.pontos, Validators.required],
        destaque:[this.recompensa.destaque],
        url:[this.recompensa.url ],
        fullPath:[this.recompensa.fullPath]
      
        
        
        
        
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
     targetWidth: 500,
     targetHeight: 500
}
  
  
this.camera.getPicture(options)
.then((imageData) => {

  

  this.image = 'data:image/jpeg;base64,' + imageData;


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
       
        this.loadCreate();
          this.recompProvider.uploadAndSave(this.form.value, this.image)

            
          
            this.navCtrl.pop();

          
            

      }
  }  


loadCreate(){
  let loading = this.loadingCtrl.create({
    content:'Salvando ...'
  });
  loading.present();

  setTimeout(()=>{
    loading.dismiss();
  },5000)

}

/*.then(()=> {
                           
                this.toast.create({ message: 'Recompensa Adicionada', duration: 3000}).present();
                this.navCtrl.pop();
            })
            .catch((e)=>{
                this.toast.create({ message: 'Falha ao gravar os dados', duration:3000}).present();
                console.error(e);
            }) */






}
