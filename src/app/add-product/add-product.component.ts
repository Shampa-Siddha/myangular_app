import { Component } from '@angular/core';
import{Router}from '@angular/router';
import{MyserviceService}from '../services/myservice.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
constructor(private service:MyserviceService ,private router:Router){

}

addingProduct(data:any){
this.service.PostProducts(data).subscribe((result)=>{
console.log(result);
})
}
}
