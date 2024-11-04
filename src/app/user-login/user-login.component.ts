import { Component } from '@angular/core';
import{MyserviceService} from '../services/myservice.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private http:MyserviceService ,private route:Router){

  }
  default:boolean=false
  
  openuserlogin(){
    
   this.default=true
  }
  openusersignup(){
    this.default=false
  }
 
  registratioSubmit(data:any){
       this.http.getUser(data).subscribe((response)=>{
        response
       })
  }

  userlist:any=[];
  matchUserLogin(data:any){

     this.http.matchUser().subscribe((response:any)=>{
      this.userlist=response
      console.log(this.userlist)
      for (let i of this.userlist){
        console.log(i.useremail ,data.useremail)
        console.log(i.userpassword ,data.userpassword)
          if (i.useremail==data.useremail && i.userpassword==data.userpassword){
            console.log("yes")
            localStorage.setItem('User',JSON.stringify(this.userlist)) 
            let Users=localStorage.getItem('User')
            
            if(Users){
              let userobj=JSON.parse( Users)
              console.log(userobj)
             
              userobj.forEach((elem:any)=>{
                console.log(elem)
                if(elem.useremail==data.useremail && elem.userpassword==data.userpassword){
                  console.log("done")
                  console.log(elem)
                  localStorage.setItem('SingleUser',JSON.stringify(elem))
                  this.route.navigate(['home/:Proid'])
                  
                  this.locaCartToRemoteCart()
                   
                  
                }
               
              })
              
            }
          //  if(localStorage.getItem('User')){
          //   this.route.navigate(['/home'])
          //  } 
          //   break
          }
      }
     }) 
  }

  results:any=[];
locaCartToRemoteCart(){
  let data=localStorage.getItem('localCart');
  let datas=data && JSON.parse(data);
  console.log(datas)
  let user=localStorage.getItem('SingleUser');
  let UserId=user && JSON.parse(user).id;
  if(datas){
   
   

    datas.forEach((Product:any,index:any)=> {
      console.log(datas.length)
      
      let cartData:any={
        ...Product,
        ProductId:Product.id,
        UserId

      }
      delete cartData.id;
         console.log(cartData)
      setTimeout(()=>{
        this.http.AddCart(cartData).subscribe((result)=>{
          localStorage.removeItem('localCart')
         })
      },500)
     

    });

    console.log("item stored")
  }
  setTimeout(()=>{
    this.http.getCartlist(UserId)
  },2000)
  
}

 
}
