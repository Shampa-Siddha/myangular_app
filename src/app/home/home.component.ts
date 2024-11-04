import { Component, OnInit,EventEmitter } from '@angular/core';
import{ MyserviceService } from'../services/myservice.service'
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  

//  inputel:any[]=[{"name":"Enter Your name","class":"enter clss","phone":"enter phone","msg":"hello"}];
//  add(){
//   this.inputel.push(this.inputel)
//  }
//  delete(){
//   this.inputel.pop();
//  }
// steplist:any=[{"name":"step1","isactive":"false"},
//   {"name":"step2","isactive":"false"},
//   {"name":"step3","isactive":"false"},];

//   activestep:any=''

//   show(i:any){
//    this.activestep=i;
//    console.log(this.activestep)
   
//   }
  
//   gotostep2(){

//     this.activestep=this.steplist[1];
    
//   }
//   gotostep3(){

//     this.activestep=this.steplist[2];
   
//   }



constructor(private http :MyserviceService, private route:Router,private activeRoute:ActivatedRoute){}
productdata:any=[]
ngOnInit(): void {
  this.getProducts();
  this.counter();
  this.getCtegorylist();

  let proid=this.activeRoute.snapshot.paramMap.get('Proid')
  let pro=proid && String(proid)
  console.log(pro)
  this.http.GetProducts2(pro).subscribe((res)=>{
    console.log(res)
    this.productdata=res
    let cartdata=localStorage.getItem("localWish");
    if(pro && cartdata){
      let item = cartdata && JSON.parse(cartdata)
      let items=[]
     for(let i of item){
      if(i[0].id==pro){
        items.push(pro)
        
      }
     }
     console.log(items.length)
     if(items.length>0){
      
    }
    else{
     
    }
    }
   })
  this. getCtegorylist()
  
 let user=localStorage.getItem('SingleUser');
 console.log("userr")

 
  
  //  let userid= user && JSON.parse(user).id;
  //  this.http.getCartlist(userid);
  
  
   

  
  
   
 
 
}
removeCart:boolean=false;
Productlist:any=[];
 getProducts(){
  this.http.GetProducts().subscribe((result)=>{
     this.Productlist=result;
  })
 }

startValue:number= 0;
 counter(){
 let num1=document.querySelector(".num");
 
 let number=num1?.textContent;
 setInterval(()=>{
  if(this.startValue<200){
      this.startValue++
  }
   
 },1)
 
 }




 NextFun(){
  this.slider("next");
 }

 slider(type:any){
  if(type=="next"){
    const caraousel=document.querySelector(".caraousel");
    const listHtml=document.querySelector(".caraousel .list");
    const items=document.querySelectorAll(".list .item");
    listHtml?.appendChild(items[0]);
  }
 }
 opengalimg:boolean=false;
imgsrc:any=""
 imgClick(source:any){
      this.imgsrc=source;
      this.opengalimg=true;
 }
 Categorylist:any=[]
   getCtegorylist(){
    this.http.CatNameget().subscribe((result)=>{
    this.Categorylist=result
  
    })
    console.log(this.Categorylist)
   }
   singlecatitems:any=[]
   opensinglecat:boolean=false
   openCat(data:any){
      
    this.http.Showcategory(data).subscribe((result)=>{
     
       this.singlecatitems=result;
       console.log(this.singlecatitems)
    })
       this.opensinglecat=true
   }
   
   singlepro:boolean=false
   openSinglePro(id:any){
    this.singlepro=true
    
   }
   Source:any=""
   OpenSource:boolean=false
   gettingimg(src:any){
     this.Source=src
     this.OpenSource=true;
   }
   count:any=1;
   increasequantity(){
   this.count++
  
   }
   decreasequantity(){
     if(this.count>1){
       this.count--
     }
   }


   Product:any=""
   singleuserid=""
 Removecart:boolean=false
 openalert:boolean=false
   addtoCart(id:any){
     
    for(let item of this.Productlist){
     if(item.id==id){
       console.log(item)
       this.Product=item
       this.Product.quantity=this.count
       if(!localStorage.getItem('User')){
          this.http.localaddtocart(this.Product)
       }else{
           console.log("user logged")
           let user=localStorage.getItem('SingleUser');
           let userid= user && JSON.parse(user).id
           let cartdata={
             ...this.Product,
             userid,
             productid:this.Product.id
           }
           
           delete cartdata.id;
           console.log(cartdata)
           this.http.AddCart(cartdata).subscribe((result)=>{
           
             console.log(result)
             if(result){
               this.http.getCartlist(userid)
             }
             this.openalert=true
           })
       }
      
     }
    }
   
   }
opensinglefeaturepro:boolean=false
   Openfeaturesinglepro(id:any){
    
    this.http.Showcategory2(id).subscribe((result)=>{
     console.log(result)
      this.singlecatitems=result;
      console.log(this.singlecatitems)
   })
    
     this.opensinglefeaturepro=true
   }
   closealeert(){
    this.openalert=false
   }
   color: boolean = false;
   datas:any=[]
   wishlist(data:any){
   alert("item added to local storage")
   this.http.Showcategory2(data).subscribe((res)=>{
    
    this.datas=res
    console.log(this.datas)
    
      this.http.localWishlist(this.datas)
   let localwishitems=localStorage.getItem("localWish")
     let wishitems=localwishitems && JSON.parse(localwishitems);
   
   
   
   })
   }

   CloseSinglePage(){
     this.singlepro=false
     this.opensinglefeaturepro=false
     console.log("clicked")
   }
   CloseSinglePage2(){
    this.opensinglecat=false
    
   }
 }