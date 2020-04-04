import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidStatisticsComponent } from './components/covid-statistics/covid-statistics.component';
import { CovidStatisticCardComponent } from './components/covid-statistic-card/covid-statistic-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidDashboardComponent } from './components/covid-dashboard/covid-dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { CovidHospitalGridComponent } from './components/covid-hospital-grid/covid-hospital-grid.component'

@NgModule({
  declarations: [
    AppComponent,
    CovidStatisticsComponent,
    CovidStatisticCardComponent,
    CovidDashboardComponent,
    CovidHospitalGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
