import { ProductService } from './../../service/product.service';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { products } from 'src/app/models/material/products.model';
import {MatDialog} from '@angular/material/dialog';
import { DialogImgComponent } from 'src/app/components/dialog-img/dialog-img.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  item:products[];
  products!:products[];
  constructor(private ProductService:ProductService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadItems();
  }
  reloadItems(){
    this.ProductService.getAllProducts().subscribe(getProducts => {
      this.products = getProducts;
    })
  }
  addToCart(){
    this.ProductService.addToCart();
  }
  async deleteProduct(id:number){
    try{
    await this.ProductService.deleteProduct(id).toPromise();
    this.reloadItems();
    alert("המוצר נימחק בהצלחה")
  } catch {
    alert("המוצר אינו ניתן למחיקה")
  }
  }

   openDialog(id:number) {
     try{
    this.ProductService.selectId(id).subscribe(results => {
      this.item = results;
      console.log(this.item)

    })
  } catch (error){
    alert("יש בעיה עם מוצר זה, אנא נסה שוב מאוחר יותר");
  }

    this.dialog.open(DialogImgComponent);
  }

}

