import { Component} from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  Empid:number = 0;
  Empname:string='';
  Empfield:string="";

  score:number = 0;

  A1:Array<{
    splice(i: number, arg1: number): unknown;
    score: any;Empid:number,Empname:string,Empfield:string
}> = [];
  add1() {
    this.A1.push({
      Empid: this.Empid, Empname: this.Empname, Empfield: this.Empfield,
      score: 0,
      splice: function (i: number, arg1: number): unknown {
        throw new Error('Function not implemented.');
      }
    });
    this.Empid = 0;
    this.Empname = '';
    this.Empfield = '';
  }

  inc(index:any){
    if(this.A1[index].score < 10){
    this.A1[index].score++;  }}
  dec(index:any){
    if (this.A1[index].score > 0) {
      this.A1[index].score--;
    }  }

  del(i:number){
    this.A1.splice(i, 1);
  }
}
