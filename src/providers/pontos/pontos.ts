
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class PontosProvider {

  private PATH = 'pontosGerais/';

  constructor( private afDb:AngularFireDatabase) {
    
  }


  getAll(){
    
    return this.afDb.list(this.PATH, ref=> ref.orderByChild('cpf'))
    .snapshotChanges()
    .map(changes =>{
        return changes.map(p =>({ key: p.payload.key,...p.payload.val() }));


    })
  

}


save(ponto:any){
  return new Promise((resolve, reject) => {

    if(ponto.key) {
          this.afDb.list(this.PATH)
            .update(ponto.key, {nota: ponto.nota, valor: ponto.valor, cpf:ponto.cpf, quantPontos : ponto.quantPontos, 
                                            status: ponto.status})
            .then(()=> resolve())
            .catch((e)=> reject(e));
    }else{
          this.afDb.list(this.PATH)
            .push({nota: ponto.nota, valor: ponto.valor, cpf:ponto.cpf, quantPontos : ponto.quantPontos, 
                                            status: ponto.status})
            .then(()=> resolve());
            


    }
  });

}

remove(key:string){
  return this.afDb.list(this.PATH).remove(key);

}




}