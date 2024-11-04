import { Component, EventEmitter, OnInit } from '@angular/core';
import{ActivatedRoute, Router}from '@angular/router';
import{MyserviceService}from '../services/myservice.service'

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  Productlist:any=[];
constructor(private service:MyserviceService,private router:Router,private activeRoute:ActivatedRoute){

}
removeCart:boolean=false;
Productid2:any="";
productdata:any="";
ngOnInit(): void {
  // alert("hello")
  this.showingPrdocts();
  let proid=this.activeRoute.snapshot.paramMap.get('Productid')
  let pro=proid && String(proid)
  console.log(pro)
  
   this.service.GetProducts2("010f").subscribe((res)=>{
    console.log(res)
    this.productdata=res
   })

   this. getCtegorylist()


  let user=localStorage.getItem('SingleUser');
  console.log("userr")
  if(user){
    console.log(proid)
    let userid= user && JSON.parse(user).id;
    this.service.getCartlist(userid);
    this.service.CarData.subscribe((result)=>{
      
    let item = result.filter((item:any)=>proid?.toString()===item.proid?.toString())
    console.log(item)
    
    // if(item.length){
    //     this.removeCart=true
    // }
    })
    
  }

  
}
showingPrdocts(){
  this.service.GetProducts().subscribe((result)=>{

   this.Productlist=result;
   
  })
}


opensinglepage:boolean=false;
SingleProduct(Proid:any){ 
   this.Productid2=Proid;
   console.log("clicked");
   console.log(this.Productid2)
    this.opensinglepage=true;
  }
  CloseSinglePage(){
    this.opensinglepage=false;
  }
categoryitem:any=[];
showcategoryproduct:boolean=false;
  productCategory(data:any){
    console.log(data)
    this.service.Showcategory(data).subscribe((result)=>{
   this.categoryitem=result;
   console.log(result)
   this.showcategoryproduct=true
    })

  }
  

  
firstimg:boolean=false;
Source:any="";
Showbackground:boolean=false
  changeImg(data:any){
    this.Source=data ;
    console.log(this.Source);
    this.firstimg=true;
    if(data===this.Source){
      this.Showbackground=true
    }
  }
  chnageind1:boolean=false
  chnageind2:boolean=false
  chnageind3:boolean=false
  
  firstindicator(){
     this.chnageind1=true
     this.chnageind2=false
     this.chnageind3=false
  }
  secondindicator(){
     this.chnageind2=true
     this.chnageind1=false
     this.chnageind3=false
  }
  thirdindicator(){
    this.chnageind3=true
    this.chnageind1=false
    this.chnageind2=false
  }
  count:any=1;
  increasequantity(){
  this.count++
 
  }
  decreasequantity(){
    if(this.count>0){
      this.count--
    }
  }
  
  Product:any=""
  singleuserid=""
Removecart:boolean=false
actPrice:any=0
  addtoCart(id:any){
    
   for(let item of this.Productlist){
    if(item.id==id){
      console.log(item)
      this.Product=item
      this.Product.quantity=this.count
      this.actPrice=parseInt(this.Product.p2)
      if(!localStorage.getItem('User')){
         this.service.localaddtocart(this.Product)
      }else{
          console.log("user logged")
          let user=localStorage.getItem('SingleUser');
          let userid= user && JSON.parse(user).id
          let cartdata={
            ...this.Product,
            userid,
            productid:this.Product.id,
            actualprice:this.count*this.actPrice
          }
          
          delete cartdata.id;
          console.log(cartdata)
          this.service.AddCart(cartdata).subscribe((result)=>{
            console.log(result)
            if(result){
              this.service.getCartlist(userid)
            }
          })
      }
     
    }
   }
  
  }
  Categorylist:any=[]
   getCtegorylist(){
    this.service.CatNameget().subscribe((result)=>{
    this.Categorylist=result
    console.log(this.Categorylist)
    })
    
   }
  
  }
 





