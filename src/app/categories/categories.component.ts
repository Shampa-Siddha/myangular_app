import { Component } from '@angular/core';
import{Router}from '@angular/router';
import{MyserviceService}from '../services/myservice.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private http:MyserviceService ,private router:Router){

  }
  addingCat(categoryname:any){
    this.http.CategoryName(categoryname).subscribe((result)=>{
      console.log(result)
      let reset=document.getElementById("r1");
      reset?.click();
       
    })
  }
}
