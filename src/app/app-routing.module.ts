import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { PlansComponent } from './authentication/plans/plans.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlotsComponent } from './pages/plots/plots.component';
import {DetailsComponent} from "./pages/details/details.component";
import { DialogAddPlotComponent } from './components/dialog-add-plot/dialog-add-plot.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts/login',
  },
  {
    path: 'accounts/login',
    component: LogInComponent,
  },
  {
    path: 'accounts/register',
    component: RegisterFormComponent,
  },
  {
    path: 'accounts/plans',
    component: PlansComponent,
  },
  {
    path: 'plants',
    component: PlantsComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'forecast',
    component: ForecastComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'plots',
    component: PlotsComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
