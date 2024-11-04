import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import{MyserviceService}from '../services/myservice.service'
@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit{
  Productlist:any=[];
constructor(private service:MyserviceService,private router:Router){

}
ngOnInit(): void {
  this.showingPrdocts();
}
  showingPrdocts(){
    this.service.GetProducts().subscribe((result)=>{
     this.Productlist=result;
     console.log(this.Productlist);
    })
  }
  delete(ids:any){
    console.log(ids)
     this.service.Deleing(ids).subscribe((result)=>{
      this.showingPrdocts();
      })
  }
  updaproducts:any=""
  openupdatpage:boolean=false;
  openUpdate(id:any){
   for(let item of this.Productlist){
    this.openupdatpage=true
    if(item.id==id){
      this.updaproducts=item;
      
    }
   }
  }

  SubmitUpdated(id:any,product:any){
  this.service.Updating(id,product).subscribe((result)=>{
    this.Productlist=result;
  })
  
  }
}
