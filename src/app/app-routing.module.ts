import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UsersComponent} from "./users/users.component";
import {FluxMonthComponent} from "./flux-month/flux-month.component";
import {SalaryAvgRateComponent} from "./salary/salary-avg-rate/salary-avg-rate.component";
import {SalaryBonusesComponent} from "./salary/salary-bonuses/salary-bonuses.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'flux/month', component: FluxMonthComponent },
  { path: 'salary/avg', component: SalaryAvgRateComponent },
  { path: 'salary/bonuses/by/types', component: SalaryBonusesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
