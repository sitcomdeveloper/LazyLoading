import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Homechild1Component } from './homechild1/homechild1.component';
import { Homechild2Component } from './homechild2/homechild2.component';


@NgModule({
  declarations: [HomeComponent, Homechild1Component, Homechild2Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
