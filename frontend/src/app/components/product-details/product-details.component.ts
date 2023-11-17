import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
id:number;

product: Product={productName:'',quantity:'',price:''};

constructor(private route:ActivatedRoute,private productService:ProductService){

}

ngOnInit(){
  this.id=this.route.snapshot.params['id'];
  this.productService.getProductById(this.id).subscribe(data=>{
    this.product=data;
  })
}
}
