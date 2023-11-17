import { Component } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product: Product={productName:'',quantity:'',price:''};
  empId:number;
  //inject service and route
  constructor(private productService:ProductService,
    private router:Router, private route: ActivatedRoute){
    
  }

  ngOnInit(){
    //get it from the route
    //activaterout
    this.empId=this.route.snapshot.params['id'];
    this.productService.getProductById(this.empId).subscribe(data=>{
      this.product=data;
      console.log(data);
  })
 

  }
  saveProduct(){
    this.productService.updateProduct(this.empId,this.product).subscribe(data=>{
      this.goToProductList();
      console.log(data);
    },
    error=>console.log(error)
    );
  }

  
  //once new data submit, NAVIGATE to the emp list page
  goToProductList(){
    this.router.navigate(['/products'])
  }
  onSubmit(){
    this.saveProduct();
  }
}
