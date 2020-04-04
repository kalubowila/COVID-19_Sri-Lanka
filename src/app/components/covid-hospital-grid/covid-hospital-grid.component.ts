import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-covid-hospital-grid',
  templateUrl: './covid-hospital-grid.component.html',
  styleUrls: ['./covid-hospital-grid.component.scss']
})
export class CovidHospitalGridComponent implements OnInit {

  @Input('cHospitalData') public hospitalData;

  constructor() { }

  ngOnInit(): void {
  }
}
