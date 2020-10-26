import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Homechild1Component } from './homechild1/homechild1.component';
import { Homechild2Component } from './homechild2/homechild2.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: 'book', component: Homechild1Component},
    {path: 'book2', component: Homechild2Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
