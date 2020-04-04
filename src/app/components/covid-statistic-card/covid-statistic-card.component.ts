import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-covid-statistic-card',
  templateUrl: './covid-statistic-card.component.html',
  styleUrls: ['./covid-statistic-card.component.scss']
})
export class CovidStatisticCardComponent implements OnInit {

  @Input('statisticData') public covidStatData;

  constructor() { }

  ngOnInit(): void {
  }

}
