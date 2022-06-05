import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UsersComponent} from "./users/users.component";
import {FluxMonthComponent} from "./flux/flux-month/flux-month.component";
import {SalaryAvgRateComponent} from "./salary/salary-avg-rate/salary-avg-rate.component";
import {SalaryBonusesContainerComponent} from "./salary/salary-bonuses-container/salary-bonuses-container.component";
import {SalaryWorkingHoursComponent} from "./salary/salary-working-hours/salary-working-hours.component";
import {SalaryTotalByMonthsComponent} from "./salary/salary-total-by-months/salary-total-by-months.component";
import {FluxYearsComponent} from "./flux/flux-years/flux-years.component";
import {FluxDeltaMonthsComponent} from "./flux/flux-delta-months/flux-delta-months.component";
import {SalaryDeltaMonthsComponent} from "./salary/salary-delta-months/salary-delta-months.component";
import {FluxQuartersComponent} from "./flux/flux-quarters/flux-quarters.component";
import {FluxDeltaQuartersComponent} from "./flux/flux-delta-quarters/flux-delta-quarters.component";
import {RefluxMonthComponent} from "./reflux/reflux-month/reflux-month.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'flux/month', component: FluxMonthComponent },
  { path: 'flux/quarters', component: FluxQuartersComponent },
  { path: 'flux/years', component: FluxYearsComponent },
  { path: 'flux/delta/months', component: FluxDeltaMonthsComponent },
  { path: 'flux/delta/quarters', component: FluxDeltaQuartersComponent },
  { path: 'salary/avg', component: SalaryAvgRateComponent },
  { path: 'salary/bonuses', component: SalaryBonusesContainerComponent },
  { path: 'salary/working-hours', component: SalaryWorkingHoursComponent },
  { path: 'salary/enrollment/total', component: SalaryTotalByMonthsComponent },
  { path: 'salary/delta/months', component: SalaryDeltaMonthsComponent },
  { path: 'reflux/month', component: RefluxMonthComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
