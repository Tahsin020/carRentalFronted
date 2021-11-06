import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/add",component:CarAddComponent},
  {path:"brands/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"colors/add",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"rentals/add",component:RentalAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
