
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthServiceProvider {

  private PATH = 'userProfile/'

  constructor(private afAuth:AngularFireAuth, private afDb: AngularFireDatabase ) {
   
  }


//criar usuario //
  registrar(user:any) {

    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then((firebaseUser: firebase.User) => {
          // Criando o profile do usuario
          this.afDb.object(this.PATH + firebaseUser.uid).set({
            
            name: user.name,
            cpf: user.cpf,
            email:user.email

          });
          resolve();
        })
        .catch(e => {
          reject(e);
        });
});

  }

  //logar usuario //

  login(user:any){

    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then((firebaseUser: firebase.User) => {
          resolve();
        })
        .catch(e => {
          reject(e);
        });
});

  }

    // logout usuario //
logout(){
  this.afAuth.auth.signOut();
}

//reset de senha //
resetPassword(email: string) {
  return this.afAuth.auth.sendPasswordResetEmail(email);
}


} 

// querys futuras //

/* public getUserType() {
    // Pego o tipo do usuario logado
    return this.db.object(this.PATH + this.auth.auth.currentUser.uid)
      .snapshotChanges().map(changes => {
        // retorno apenas a propriedade userType
        return changes.payload.val().userType || 0;
      });
  }

  getUserInfo() {
    return this.db.object(this.PATH + this.auth.auth.currentUser.uid)
      .snapshotChanges()
      .map(changes => {
        return { key: changes.key, ...changes.payload.val() };
      });
} */