import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the CriarNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-noticia',
  templateUrl: 'criar-noticia.html',
})
export class CriarNoticiaPage {

  title:string;
  form:FormGroup;
  noticia:any;
  image: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private formBuilder:FormBuilder,  private camera:Camera,
private newservice:NewsProvider, private loadingCtrl:LoadingController) {

  this.noticia = this.navParams.data.noticia || {};
  this.createForm();
  this.modificarTitle();
  }

  private modificarTitle(){
    this.title = this.navParams.data.noticia ? 'Alterar Noticia' : 'Criar Noticia';
  }
  
  createForm(){
      this.form = this.formBuilder.group({
        key:[this.noticia.key],
        titulo:[this.noticia.titulo, Validators.required],
        descricao:[this.noticia.descricao, Validators.required],
        destaque:[this.noticia.destaque],
        url:[this.noticia.url ],
        fullPath:[this.noticia.fullPath]
      
        
        
        
        
        
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
     targetWidth: 300,
     targetHeight: 150
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
        this.newservice.uploadAndSave(this.form.value, this.image)

          
        
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




//
}
