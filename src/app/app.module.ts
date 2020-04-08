import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidStatisticsComponent } from './components/covid-statistics/covid-statistics.component';
import { CovidStatisticCardComponent } from './components/covid-statistic-card/covid-statistic-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidDashboardComponent } from './components/covid-dashboard/covid-dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { CovidHospitalGridComponent } from './components/covid-hospital-grid/covid-hospital-grid.component';
import { CovidStatisticChartComponent } from './components/covid-statistic-chart/covid-statistic-chart.component';
import { FooterComponent } from './components/shared/footer/footer.component'
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    CovidStatisticsComponent,
    CovidStatisticCardComponent,
    CovidDashboardComponent,
    CovidHospitalGridComponent,
    CovidStatisticChartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
