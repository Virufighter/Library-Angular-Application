import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  admin=""
  password=""
  constructor(private r:Router){}

  login=()=>{
    if (this.admin=="alvin" && this.password=="12345") {
      this.r.navigate(['/entry'])
      
    } else {
      alert("ivalid creditials")
      
    }

  }

}
