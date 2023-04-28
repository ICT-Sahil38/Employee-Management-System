
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  A: string = '';
  B: string = '';

  setuser(username:string,password:string){
    this.A = username;
    this.B = password;
  }

  getuser(){
    return {username:this.A,password:this.B};
  }
}
