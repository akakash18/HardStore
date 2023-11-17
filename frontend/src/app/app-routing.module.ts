import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
//Defining routes
{path:'products',component:ProductListComponent},
{path:'create-product',component:CreateProductComponent},
{path:'update-product/:id',component:UpdateProductComponent},
{path:'product-details/:id',component:ProductDetailsComponent},
{path:'home',component:HomeComponent},
{path:'',redirectTo:'products',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//take the routes array
  exports: [RouterModule]
})
export class AppRoutingModule { }
