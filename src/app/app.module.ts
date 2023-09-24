import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
//date
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// componentes
import { LogInComponent } from './authentication/log-in/log-in.component';
import { PlansComponent } from './authentication/plans/plans.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlotsComponent } from './pages/plots/plots.component';
import { DetailsComponent } from './pages/details/details.component';
import { AccordionSectionComponent } from './components/accordion-section/accordion-section.component';
import { DialogSavePlantComponent } from './components/dialog-save-plant/dialog-save-plant.component';
import { DialogChangePasswordComponent } from './components/dialog-change-password/dialog-change-password.component';
import { DialogSignOffComponent } from './components/dialog-sign-off/dialog-sign-off.component';
import { DialogChangeEmailComponent } from './components/dialog-change-email/dialog-change-email.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DialogDeleteParcelComponent } from './components/dialog-delete-parcel/dialog-delete-parcel.component';
import { DialogAddPlotComponent } from './components/dialog-add-plot/dialog-add-plot.component';
import { DialogConfirmationComponent } from './components/dialog-confirmation/dialog-confirmation.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LogInComponent,
    PlansComponent,
    PlantsComponent,
    LayoutComponent,
    CalendarComponent,
    ForecastComponent,
    NotFoundComponent,
    PlotsComponent,
    DetailsComponent,
    AccordionSectionComponent,
    DialogSavePlantComponent,
    DialogChangePasswordComponent,
    DialogSignOffComponent,
    DialogChangeEmailComponent,
    DialogDeleteParcelComponent,
    DialogAddPlotComponent,
    DialogConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTabsModule,
    GoogleMapsModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogSavePlantComponent
  ]
})
export class AppModule { }
