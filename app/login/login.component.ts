import { Component, Injectable} from '@angular/core';
import { ConnectService } from '../connect.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
 })

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private connect:ConnectService,private router:Router){}
    Username1:string='';
    Password1:string='';

  onSubmit(){
    console.log("submit func");
    this.connect.setuser(this.Username1,this.Password1);
    this.router.navigate(['/Signup']);
  }

}