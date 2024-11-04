import { EventEmitter, Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import{Router}from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  CarData= new EventEmitter<[] | []>()
  WishData= new EventEmitter<[] | []>()
 isloggedin:boolean=false;
  constructor(private http:HttpClient, private router:Router) { 
    
  }
  getdata(data:any){
    return this.http.post("http://localhost:3000/seller",data,{observe:'response'}).subscribe((result)=>{
      // if(result){
      //   this.router.navigate(['home']);
      // }
      this.isloggedin=true;
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['home']);
       console.log(result);
    });
  }
  // reloadseller(){
  //   if(localStorage.getItem('seller')){
  //     this.isloggedin=true;
  //     this.router.navigate(['home']);

  //   }
  // }'
  userlist:any=[];
  sellerlogin(){
    return this.http.get("http://localhost:3000/seller").subscribe((result:any)=>{
      this.userlist=result;
     
  
    });;
  }
  logged(data:any){
    localStorage.setItem('seller',JSON.stringify(this.userlist));
    let seller={email:data.l1,password:data.l2}
    
    
   for(let i of this.userlist){
     console.log(i)
     if(i.email===seller.email && i.password===seller.password){
      this.isloggedin=true;
      
      this.router.navigate(['home']);
       
       this.router.navigate(['/home'])
       break
     }
    
     
   }
 }
  //------------------------------------------seller login registration auth local storage ends------------------//
PostProducts(data:any){
 return this.http.post("http://localhost:3000/Products",data)
};
GetProducts(){
  return this.http.get("http://localhost:3000/Products");
}

GetProducts2(id:any){
  return this.http.get("http://localhost:3000/Products?id="+id);
}
//-------------------------------------------inserting products and showing products done-----------------//

Deleing(id:any){
  return this.http.delete(`http://localhost:3000/Products/${id}`)
  }

  Updating(id:any,data:any){
      return this.http.put(`http://localhost:3000/Products/${id}`,data)
  }


  //------------------------------userlogin------------------------------//
  getUser(data:any){
    return this.http.post("http://localhost:3000/User",data)
  }
  matchUser(){
    return this.http.get("http://localhost:3000/User")
  }

  //-----------------------------------cartadd------------------------------//
 
  localaddtocart(data:any){
     let cartdata=[];
     let localCart=localStorage.getItem('localCart');
     if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]))
     }
     else{
      cartdata=JSON.parse(localCart);
      cartdata.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartdata));
      
     }
     this.CarData.emit(cartdata)
  }

  AddCart(data:any){
    return this.http.post("http://localhost:3000/Cart",data)
  }

  getCartlist(idofuser:any){
    return this.http.get<any>("http://localhost:3000/Cart?userid="+idofuser,
      {observe:'response'}).subscribe((result)=>{
        console.log(result)
        if(result && result.body){
          this.CarData.emit(result.body)
          console.log(result.body)
        }
       
      })

    
  }

  Showcategory(category:any){
   return this.http.get("http://localhost:3000/Products?p5="+category)
  }

  CategoryName(catname:any){
   return this.http.post("http://localhost:3000/CategoryName",catname)
  }
  CatNameget(){
    return this.http.get("http://localhost:3000/CategoryName")
  }

  Showcategory2(category:any){
    return this.http.get("http://localhost:3000/Products?id="+category)
   }
   localWishlist(data:any){
    let cartdata=[];
     let localWish=localStorage.getItem('localWish');
     if(!localWish){
      localStorage.setItem('localWish',JSON.stringify([data]))
     }
     else{
      cartdata=JSON.parse(localWish);
      cartdata.push(data);
      localStorage.setItem('localWish',JSON.stringify(cartdata));
      
     }
     this.WishData.emit(cartdata)

   }
  
   currentCart(){
    let user=localStorage.getItem('SingleUser');
    let userid= user && JSON.parse(user).id;
    console.log(userid)
   return  this.http.get("http://localhost:3000/Cart?userid="+userid )
   }

   RemoveCart(id:any){
    
       return this.http.delete(`http://localhost:3000/Cart/${id}`)
   }
   
}
