import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-covid-statistic-chart',
  templateUrl: './covid-statistic-chart.component.html',
  styleUrls: ['./covid-statistic-chart.component.scss']
})
export class CovidStatisticChartComponent implements OnChanges {

  @Input('cData') public cData;

  constructor() { }

  ngOnChanges(): void {
    this.initChart();
  }

  initChart(): void {
    var canvas: any = document.getElementById('covidPieChart');
    var ctx: any = canvas.getContext('2d');

    let covidChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Active", "Recovered", "Deaths"],
        datasets: [{
          label: '',
          data: [this.cData?.local_active_cases, this.cData?.local_recovered, this.cData?.local_deaths],
          backgroundColor: [
            '#FBB16C',
            '#62A742',
            '#E4494D'
          ],
          borderWidth: 0.6
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'left',
          labels: {
            boxWidth: 7,
            fontSize: 11,
            fontColor: '#FFFFFF',
            padding: 8,
            usePointStyle: true
          }
        }
      }
    });

  }

}
