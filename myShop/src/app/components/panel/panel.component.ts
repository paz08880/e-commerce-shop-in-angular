import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/models/material/products.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  listOfProducts!:products[];
  constructor(public ProductService:ProductService,) { }

  ngOnInit(): void {
    this.reloadItems();
  }
  reloadItems(){
    this.ProductService.getAllProducts().subscribe(getProducts => {
      this.listOfProducts = getProducts;
    })
  }



}


