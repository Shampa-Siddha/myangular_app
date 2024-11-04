import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListComponent } from './list/list.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { FooterComponent } from './footer/footer.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { register } from 'swiper/element/bundle';
import { CategoriesComponent } from './categories/categories.component';

register();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerComponent,
    UserLoginComponent,
    LogoutComponent,
    AddProductComponent,
    ListComponent,
    ShowProductsComponent,
    SellerProductListComponent,
    FooterComponent,
    CartpageComponent,
    UserlogoutComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
