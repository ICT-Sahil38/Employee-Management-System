import { Component,OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Cusername:string = '';
  Cpass1:string = '';
  credentials:{username:string,password:string}={username:"",password:""}
  constructor(private connect:ConnectService,private router:Router){}
  ngOnInit(): void {
   this.credentials= this.connect.getuser();
  }
  onSubmit(){
    if(this.Cusername == this.credentials.username && this.Cpass1 == this.credentials.password){
      this.router.navigate(['/Addemp']);
    }
    else{
      alert("Credentials does not match")
    }
  }
}
