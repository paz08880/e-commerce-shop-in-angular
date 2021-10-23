import { ProductService } from './../../service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements  OnInit {

  cart:number = 0;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit(){
      this.reloadCart();
    };

    reloadCart(){
    this.ProductService.getCart().subscribe(results => {
      this.cart = results;

    })
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    public ProductService:ProductService,
    ) {}

}
