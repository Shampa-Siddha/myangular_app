import { Component, OnInit , ElementRef} from '@angular/core';

import{MyserviceService}from '../services/myservice.service';
import{Router} from '@angular/router'


@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit{
  constructor(private route:Router,private _elementRef : ElementRef,private http:MyserviceService,){

  }

  cartitems:any=[];
allcart:any=[]
Prices=0
type:any
 ngOnInit(): void {
 console.log("res")
 this.showPage()
 this.http.currentCart().subscribe((res)=>{
   this.allcart=res
   
    this.allcart.forEach((elem:any) => {
      
      // this.Prices=this.Prices + Number(elem.actualprice)
      // this. Prices=this.Prices + parseFloat(elem.actualprice)
      // this.type=typeof(elem.actualprice)
      this.Prices=this.Prices+elem.actualprice
    });
 })
  
 
 }


 showPage(){
  this.http.currentCart().subscribe((res)=>{
this.allcart=res
  })
 }
 removeCart(cartid:any){
  let user=localStorage.getItem("SingleUser");
  let userid=user && JSON.parse(user).id
console.log(cartid)
this.http.RemoveCart(cartid).subscribe((res)=>{

this.showPage()
if(res){
this.http.getCartlist(userid)
}
})
 }


}
