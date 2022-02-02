import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UsersComponent} from "./users/users.component";
import {FluxMonthComponent} from "./flux-month/flux-month.component";
import {SalaryAvgRateComponent} from "./salary/salary-avg-rate/salary-avg-rate.component";
import {SalaryBonusesContainerComponent} from "./salary/salary-bonuses-container/salary-bonuses-container.component";
import {SalaryWorkingHoursComponent} from "./salary/salary-working-hours/salary-working-hours.component";
import {SalaryTotalByMonthsComponent} from "./salary/salary-total-by-months/salary-total-by-months.component";
import {FluxYearsComponent} from "./flux/flux-years/flux-years.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'flux/month', component: FluxMonthComponent },
  { path: 'flux/years', component: FluxYearsComponent },
  { path: 'salary/avg', component: SalaryAvgRateComponent },
  { path: 'salary/bonuses', component: SalaryBonusesContainerComponent },
  { path: 'salary/working-hours', component: SalaryWorkingHoursComponent },
  { path: 'salary/enrollment/total', component: SalaryTotalByMonthsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
