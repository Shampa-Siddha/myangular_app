import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { authGuard } from './Authentication/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListComponent } from './list/list.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home/:Proid', pathMatch: 'full' },
  {path:'home/:Proid',component:HomeComponent},
  {path:'seller',component:SellerComponent},
  {path:'userlogin',component:UserLoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'addProduct',component:AddProductComponent,canActivate:[authGuard]},
  {path:'list',component:ListComponent},
  {path:'showProduct/:Productid',component:ShowProductsComponent},
  {path:'sellist',component:SellerProductListComponent},
  {path:'cartpage',component:CartpageComponent},
  {path:'userlogout',component:UserlogoutComponent},
  {path:'addCat',component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
