import { Component } from '@angular/core';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  name=""
  aadhar=""
  phno=""
  email=""

  readvalues=()=>
  {
    let data={"name":this.name,"aadhar":this.aadhar,"phno":this.phno,"email":this.email}
    console.log(data)
  }

}
