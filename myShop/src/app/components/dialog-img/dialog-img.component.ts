import { products } from './../../models/material/products.model';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import {ProductsComponent } from 'src/app/components/products/products.component';
@Component({
  selector: 'app-dialog-img',
  templateUrl: './dialog-img.component.html',
  styleUrls: ['./dialog-img.component.scss']
})
export class DialogImgComponent implements OnInit {

  constructor(public ProductService:ProductService) { }


  getIdOfProduct:products[];

  ngOnInit(): void {
   this.getItem();
  }

  getItem(){

  }
    /*
    this.ProductService.selectId().subscribe(getProducts => {
      this.getIdOfProduct = getProducts;
      console.log(this.getIdOfProduct);

    })


*/
}
