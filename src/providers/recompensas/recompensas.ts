
import { Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class RecompensasProvider {

    private PATH = 'recompensas/';

  constructor( private afDb: AngularFireDatabase) {
    
    
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

  save(recompensa:any){
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

  }


  remove(key:string){
    return this.afDb.list(this.PATH).remove(key);

  }


  getDestaque(){
    
    return this.afDb.list(this.PATH, ref=> ref.orderByChild('destaque').equalTo(true))
    .snapshotChanges()
    .map(changes =>{
        return changes.map(recomp =>({ key: recomp.payload.key,...recomp.payload.val() }));


    })
  }


}
