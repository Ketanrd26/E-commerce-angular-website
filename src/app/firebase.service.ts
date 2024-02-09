import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private auth:AngularFireAuth) { }

  registerBookRide(email: string, password:string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
}
