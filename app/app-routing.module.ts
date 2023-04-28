import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddempComponent } from './addemp/addemp.component';

const routes: Routes = [
  { path: '', component: SignUpComponent},
  { path: 'Signup', component: SignUpComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Addemp', component: AddempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
