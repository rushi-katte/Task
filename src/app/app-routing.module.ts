import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'home', component:HomepageComponent},
  {path:"about" , component:AboutComponent},
  {path:"services" , component:ServicesComponent},
  {path:"contact" , component:ContactComponent},
  {path:"signup" , component:SignupComponent},
  {path:'login' , component:LoginComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'regis' , component:RegistrationComponent},
  {path:"**", component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
