import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { OnesignalProvider } from '../providers/onesignal/onesignal';
import {isCordovaAvailable} from './app.cordova.habilitado';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any
  user$:Subscription;
  userinfo$:Subscription;
  roleUser:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth,
    private authService:AuthServiceProvider, oneSignalProvider:OnesignalProvider ) {

  
  this.user$ =  afAuth.authState.subscribe(user=>{
    
        if(user){

          this.userinfo$ =   this.authService.getUserInfo().subscribe(userData => {
                this.roleUser = userData.role;
               
            if(this.roleUser==='admin') {
                       this.rootPage = 'TabsPage';
                         } else {
                          this.rootPage = 'Error403Page'
                         }
    
  
          })
          

        } else{
          this.rootPage = 'LoginPage'
        }
    });

   


    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();

      //statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#8A2BE2');
      splashScreen.hide();


      if(isCordovaAvailable()){  oneSignalProvider.init();

        oneSignalProvider.envioOneSigPeloSegment();
        
        //obtem o id do usuario//
       // oneSignalProvider.obterOneUserId();
        //envio de mensagem pasando id e a mensagem //
        //oneSignalProvider.enviarOneSig("78cf31ff-90aa-4941-82c8-de513bdc0691","Testando" );
      }
      
    });
  }

  ionViewWillUnload(){
    this.user$.unsubscribe();
    this.userinfo$.unsubscribe();
  
   
    
  }
  

}

