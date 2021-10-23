import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { PanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  {
    path: '',   redirectTo: 'home', pathMatch: 'full' , //start website with this component
  },
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'products',component:ProductsComponent,
  },
  {
    path:'contact',component:ContactComponent,
  },
  {
    path:'panel',component:PanelComponent,
  },
/*
  {
    path: '**', component: PageNotFoundComponent,  // Wildcard route for a 404 page
  },
*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
