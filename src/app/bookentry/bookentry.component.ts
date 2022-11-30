import { Component } from '@angular/core';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent {
  description=""
  name=""
  price=""
  image=""

  readvalue=()=>
  {
    
     let data:any={
      
      "name":this.name,
      "description":this.description,
      "price":this.price,
      "image":this.image
    }
    console.log(data)
    
  }

}
