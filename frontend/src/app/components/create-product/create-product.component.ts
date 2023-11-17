import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Product={productName:'',quantity:'',price:''};

  constructor(private productService:ProductService,private router:Router){

  }

  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data=>{
      this.goToProductList();
      console.log(data);
    },
    error=>console.log(error)
    );
  }

  //once new data submit, NAVIGATE to the product list page
  goToProductList(){
    this.router.navigate(['/products'])
  }

  onSubmit(){
    this.saveProduct();
    
  }
}
