import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {path:'' , component:HomeComponent},
  {path:'signup' , component:SignupComponent},
  {path:'password' , component:PasswordComponent},
  {path:'login' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
