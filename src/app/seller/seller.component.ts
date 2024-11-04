import { Component, OnInit, } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import{Router}from '@angular/router'
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
constructor(private http:MyserviceService,private route:Router){

}

ngOnInit(): void {
  // this.http.reloadseller();
  this.get();
}
productdefault:boolean=false;
default:boolean=true;
userlist:any=[];
flag=0;
add(data:any){
  let seller={name:data.t1,phone:data.t2,email:data.t3,password:data.t4};
  this.http.getdata(seller)
  let reset=document.getElementById("r1");
  reset?.click();
   this.route.navigate(['home']);
}
get(){
  this.http.sellerlogin()
}


loginsel(data:any){
  this.http.logged(data);
  console.log(data);
}

openlogin(){
  this.default=false;
  // this.productdefault=true;
}
openSignup(){
  this.default=true;
  // this.productdefault=true;
}

}
