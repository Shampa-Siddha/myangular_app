import { Component, OnInit , ElementRef} from '@angular/core';

import{MyserviceService}from '../services/myservice.service';
import{Router} from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private route:Router,private _elementRef : ElementRef,private http:MyserviceService,){

  }
  cartitems=0;

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['home']);
  }

  userlogout(){
    localStorage.removeItem('User');
    localStorage.removeItem('SingleUser');
    this.route.navigate(['/home']);
    
    
  }
   url:any=''
   sellermenu:boolean=false;
  productlist:any='';
  forshowinginhome:boolean=false;
  allcartitems:any=[];
  Price:any=""
  opeoops:boolean=true
  singleusername:any=true;
ngOnInit(): void {
  
let user=localStorage.getItem("SingleUser")
if(user){
   this.singleusername=JSON.parse(user).username

}
  this.route.events.subscribe((val:any)=>{
    
     this.url=val.url;
     
      
     if(val.url){
      if(localStorage.getItem('seller')){
        this.sellermenu=true;
      }
     }
     if(val.url=="/home"){
      this.forshowinginhome=true;
      
     }
     else if(val.url=="/seller"){
      this.forshowinginhome=false;
      
     }

  })

  this.gteProducts();

  let cart=localStorage.getItem('localCart');
  if(cart){
    this.cartitems=JSON.parse(cart).length
  }
  this.http.CarData.subscribe((result)=>{
    
  this.cartitems=result.length;
   console.log( this.cartitems)
   this.allcartitems=result
   if(this.cartitems>0){
    this.opeoops=false
   }
  })


 

}
gteProducts(){
this.http.GetProducts().subscribe((result)=>{
this.productlist=result;

})
}
val:any="";
srchProducts:any=[];
opensrch:boolean=false;
serch(name:any){
  console.log(this.url);
  this.val=name.toLowerCase();
  
  for(let item of this.productlist){
    
   if(item.p1==this.val){
    this.srchProducts=item;
    this.opensrch=true;

   }
   
  }
}
openCart:boolean=false;
openCart2:boolean=false;
cartOpen(){
 this.openCart=!this.openCart
 
}

cartOpen2(){
  
  this.openCart2=!this.openCart2
  }


 

 

}
