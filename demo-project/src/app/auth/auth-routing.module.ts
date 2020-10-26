import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from '../home/home.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:AuthComponent,children:[
    {path:'',component:LoginComponent},
  ]},
  // {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
