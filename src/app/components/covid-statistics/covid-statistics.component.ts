import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-covid-statistics',
  templateUrl: './covid-statistics.component.html',
  styleUrls: ['./covid-statistics.component.scss']
})
export class CovidStatisticsComponent implements OnChanges {

  @Input('cData') public cData;

  public totalConfirmed: object = {
    "title": "Total Confirmed",
    "value": 0,
    "icon": "local_hospital",
    "cardType": "card-header-warning"
  };

  public totalActive: object = {
    "title": "Total Active",
    "value": 0,
    "icon": "alarm_add",
    "cardType": "card-header-rose"
  };

  public totalRecovered: object = {
    "title": "Total Recovered",
    "value": 0,
    "icon": "directions_walk",
    "cardType": "card-header-success"
  };

  public totalDeaths: object = {
    "title": "Total Deaths",
    "value": 0,
    "icon": "airline_seat_flat",
    "cardType": "card-header-danger"
  };

  constructor() { }

  ngOnChanges(): void {
    this.initStatData();
  }

  initStatData(): void {
    this.totalConfirmed['value'] = this.cData?.local_total_cases;
    this.totalActive['value'] = this.cData?.local_active_cases;
    this.totalRecovered['value'] = this.cData?.local_recovered;
    this.totalDeaths['value'] = this.cData?.local_deaths;
  }

}
