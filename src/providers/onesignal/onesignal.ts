import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { OneSignal, OSNotificationPayload} from '@ionic-native/onesignal';

import {oneSignalAppId, senderId, restAPI} from './onesigConfig';


@Injectable()
export class OnesignalProvider {

  constructor(public oneSignal:OneSignal, public httpClient:HttpClient) {
  
  }

  private onPushReceived(payload:OSNotificationPayload){
    alert('push received' + payload.body);
  }

  private onPushOpened(payload:OSNotificationPayload){
    alert('push opened' + payload.body);
  }

  init(){

  

      this.oneSignal.startInit( oneSignalAppId, senderId );
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      
      this.oneSignal.handleNotificationReceived().subscribe(() => { 

          data=> this.onPushReceived(data.payload);
       
       });
    
       this.oneSignal.handleNotificationOpened().subscribe(() => {
        data => this.onPushOpened(data.notification.payload);
      });
       
    
      this.oneSignal.endInit();
    

    }
 

   obterOneUserId(){
     this.oneSignal.getPermissionSubscriptionState().then(data=> {

      data.permissionStatus.hasPrompted;
      data.permissionStatus.status;
      data.subscriptionStatus.subscribed;
      data.subscriptionStatus.userSubscriptionSetting;
      data.subscriptionStatus.pushToken;

      var OneID = data.subscriptionStatus.userId;
      alert('id do usuario'+ OneID );


     })
     .catch((e)=>e);

      
     
   }

   // metodo para enviar mensagem onesignal

   enviarOneSigPeloPlayerId( oneID, mensagem){
    //this.oneSignal.getIds().then(data=>{
       
      var notificationObj = {
        contents:{en: mensagem },
        include_player_ids: [oneID]   
      }
      this.oneSignal.postNotification(notificationObj);

    // })
    // .catch((e)=>e);
   }

   envioOneSigPeloSegment(){

    const httpOptions = {
      headers:new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic "+restAPI
      })

    }

    var body = {           
      "app_id":oneSignalAppId,
      "contents":{"en": "Enviando para o CLiente" },
      "included_segments":["clientes"]

    };

    return this.httpClient.post('https://onesignal.com:443/api/v1/notifications',body,httpOptions )
    .subscribe((data)=>{ console.log(data)});

   }


   enviarTag(key,valorA){
    this.oneSignal.sendTag(key,valorA);
   
  }
  
  deleteTag(user_UID){
    this.oneSignal.deleteTag(user_UID);
  }


  envioOneSigPeloFiltro(titulo, mensagem, uidUser, imgbig){

    const httpOptions = {
      headers:new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic "+restAPI
      })

    }

    var body = {           
      "app_id":oneSignalAppId,
      "contents":{"en": mensagem},
      "headings":{"en": titulo},
      filters:[
       
      {"field":"tag","key":"uid_user","relation":"=","value":uidUser}
        
      ]
    //  "big_picture":imgbig
   // "large_icon":imgbig,
   //"small_icon":"ic_stat_onesignal_default"

    };

    return this.httpClient.post('https://onesignal.com:443/api/v1/notifications',body,httpOptions )
    .subscribe((data)=>{ console.log(data)});

   }





}
