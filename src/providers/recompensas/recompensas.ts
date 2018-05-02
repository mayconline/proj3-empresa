
import { Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';



@Injectable()
export class RecompensasProvider {

    private PATH = 'recompensas/';
    
  constructor( private afDb: AngularFireDatabase, private fb:FirebaseApp) {
    
    
  }


  getAll(){
    
    return this.afDb.list(this.PATH, ref=> ref.orderByChild('nome'))
    .snapshotChanges()
    .map(changes =>{
        return changes.map(recomp =>({ key: recomp.payload.key,...recomp.payload.val() }));


    })
  }


  get(key:string){
    
    return this.afDb.object(this.PATH + key)
    .snapshotChanges()
    .map( recomp =>{   
      return {key: recomp.key, ...recomp.payload.val()}  ; 

    })

  }

/*  save(recompensa:any){
      return new Promise((resolve, reject) => {

        if(recompensa.key) {
              this.afDb.list(this.PATH)
                .update(recompensa.key, {nome: recompensa.nome, pontos: recompensa.pontos, destaque: recompensa.destaque})
                .then(()=> resolve())
                .catch((e)=> reject(e));
        }else{
              this.afDb.list(this.PATH)
                .push({ nome: recompensa.nome, pontos: recompensa.pontos, destaque: recompensa.destaque})
                .then(()=> resolve());
                


        }
      });

  } */



 private save(recompensa:any){
    return new Promise((resolve, reject) => {

      if(recompensa.key) {
            this.afDb.list(this.PATH)
              .update(recompensa.key, {nome: recompensa.nome, pontos: recompensa.pontos, destaque: recompensa.destaque})
              .then(()=> resolve())
              .catch((e)=> reject(e));
      }else{
            this.afDb.list(this.PATH)
              .push({ nome: recompensa.nome, pontos: recompensa.pontos, destaque: recompensa.destaque, url:recompensa.url, fullPath:recompensa.fullPath})
              .then(()=> resolve());
              


      }
    });

}


public uploadAndSave(recompensa: any) {
 // let recompensa = { key: recompensa.key, nome: recompensa.nome, pontos: recompensa.pontos, destaque: recompensa.destaque, url:'', fullPath: '' };
 return new Promise((resolve, reject) => {
  if (recompensa.key) {
    this.save(recompensa);
  } else {
    let storageRef = this.fb.storage().ref();
    let basePath = '/recompensas/';
    recompensa.fullPath = basePath + '/' + recompensa.name + '.jpg';
    let uploadTask = storageRef.child(recompensa.fullPath).putString(recompensa.photo, 'base64');

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
       let progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      console.log(progress + "% done");
    },
    (error) => {
      console.error(error);
    },
    () => {
      recompensa.url = uploadTask.snapshot.downloadURL;
      this.save(recompensa);
    });
  }
});
}
 


  remove(key:string){
    return this.afDb.list(this.PATH).remove(key)

  } 

 /* public remove(recompensa: any) {
    return this.recompensa.remove(recompensa.key)
      .then(() => {
        this.removeFile(recompensa.fullPath)
      });
  }*/

  public removeFile(fullPath: string) {
    let storageRef = this.fb.storage().ref();
    storageRef.child(fullPath).delete();
}


  getDestaque(){
    
    return this.afDb.list(this.PATH, ref=> ref.orderByChild('destaque').equalTo(true))
    .snapshotChanges()
    .map(changes =>{
        return changes.map(recomp =>({ key: recomp.payload.key,...recomp.payload.val() }));


    })
  }


}
