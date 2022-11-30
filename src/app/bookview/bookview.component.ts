import { Component } from '@angular/core';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent {
  book:any=[
    {
      "image":"https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/code-name-god_FrontImage_809.jpg",
      "name":"code name god",
      "price":14
    },
    {
      "image":"https://www.oberlo.com/media/1603897577-image22-1.jpg?w=1824&fit=max",
      "name":"harry potter",
      "price":29
    },
    {
      "image":"http://www.targetacademy.in/wp-content/uploads/2019/04/519BiBsrJPL.jpg",
      "name":"dreamland",
      "price":18
    },
    {
      "image":"https://img.etimg.com/photo/msid-53575653,quality-100/.jpg",
      "name":"name of the wind",
      "price":20
    },
    {
      "image":"https://www.powells.com/portals/0/Images/9780735223721.jpeg",
      "name":"know by name",
      "price":19
    },
    {
      "image":"https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/code-name-god_FrontImage_809.jpg",
      "name":"god",
      "price":14
    },
    {
      "image":"https://akm-img-a-in.tosshub.com/sites/dailyo//story/embed/201508/tintin_080915081945.jpg",
      "name":"tintin",
      "price":19
    }
    
  ]

}
