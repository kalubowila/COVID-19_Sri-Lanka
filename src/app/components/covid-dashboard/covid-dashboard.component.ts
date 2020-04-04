import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CovidExternalApiService } from 'src/app/services/covid-external-api.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.scss']
})
export class CovidDashboardComponent implements OnInit {

  public cData: any;
  public cHospitalData: any;
  public errMsg: string = "";

  constructor(private _covidService: CovidExternalApiService) { }

  ngOnInit(): void {
    this.callApi(); //first call

    //interval call in every 5 min
    interval(1000 * 60 * 5).subscribe(n => {
      this.callApi();
    });
  }

  callApi(): void {
    this._covidService.getCovidData()
      .subscribe(
        data => {
          this.cData = data.data;
          this.cHospitalData = data.data.hospital_data;
        },
        error => this.errMsg = error);
  }

}
