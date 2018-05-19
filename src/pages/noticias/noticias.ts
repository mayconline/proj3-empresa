import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private newservice: NewsProvider, private toast:ToastController) {
  }



//metodos de crud //

criarNew(){
  this.navCtrl.push('CriarNoticiaPage');
}


editarNew(noticia:any){
  this.navCtrl.push('CriarNoticiaPage', {noticia:noticia});

}


 removerNew(noticia:any){
   this.newservice.remove(noticia)
     .then(()=>{

       this.toast.create({ message: 'Removido com Sucesso', duration:3000}).present();
       
     })
     .catch((e)=>{
       
       this.toast.create({ message: 'Falha ao remover ', duration:3000}).present();
       console.error(e);

     })
}



   // searchbar //

   getItems(ev: any) {
    // Reset items back to all of the items
    this.noticias = this.newservice.getAll();
    

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.noticias = this.noticias
        .map(newList => newList.filter((v) => {
           
               return v.titulo.toLowerCase().indexOf(val.toLowerCase()) !== -1;
            
        }));
     
    }
  } // searchbar selecione user //


 
ionViewWillLoad(){
  //recupera e inicializa os itens do banco //
  
this.noticias = this.newservice.getAll();


} 



 // 
}
