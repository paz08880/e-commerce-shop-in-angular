import { products } from 'src/app/models/material/products.model';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-img',
  templateUrl: './dialog-img.component.html',
  styleUrls: ['./dialog-img.component.scss']
})
export class DialogImgComponent implements OnInit {

  constructor(public ProductService:ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  getIdOfProduct:number;
  productItem:products[];

  ngOnInit(): void {
    this.getItem(this.data.dataKey);
  }

  getItem(id:number){
    try{
    this.ProductService.selectId(id).subscribe(results => {
      this.productItem = results;
      console.log(this.productItem);

    })
  } catch (error){
    alert("יש בעיה עם מוצר זה, אנא נסה שוב מאוחר יותר");
  }


  }


};




