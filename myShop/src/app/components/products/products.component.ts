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
  dialogRef: any;
  constructor(private ProductService:ProductService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadItems();
  }
  reloadItems(){
    this.ProductService.getAllProducts().subscribe(getProducts => {
      this.products = getProducts;
    })
  }
  addToCart(id:number){
    this.ProductService.addToCart(id);
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

      this.dialogRef = this.dialog.open(DialogImgComponent, {
      width: '330px',
      height: '400px',
      data: {
        dataKey: id
      }
    });

 }}

