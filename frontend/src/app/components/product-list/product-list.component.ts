import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService:ProductService, private router:Router,
    private reportService:ReportService){//injecting the service

  }

  ngOnInit():void{
    this.getProduct();
  }

  private getProduct(){
    this.productService.getProductsList()
    .subscribe(data=>{
      //sorting the retrieved data by id
      //otherwise angular auto append the updated to the last 
      data.sort((a, b) => a.id - b.id);
      
      this.products=data;
    })
  }
 
  updateProduct(id:number){
    this.router.navigate(['update-product',id]);//navigated to update page
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      //call getProduct() to update the list
      this.getProduct();
    })
  }

  viewProduct(id:number){
    this.router.navigate(['product-details',id]);
  }

  generateReport(){
    this.reportService.generateReport().subscribe((response: Blob) => {
      const file = new Blob([response], { type: 'application/pdf' }); // Modify the type based on your exportFileType
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL); // Open the file in a new window/tab
    });
  }
}
