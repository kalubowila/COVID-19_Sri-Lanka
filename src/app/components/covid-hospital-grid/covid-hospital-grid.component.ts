import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-covid-hospital-grid',
  templateUrl: './covid-hospital-grid.component.html',
  styleUrls: ['./covid-hospital-grid.component.scss']
})
export class CovidHospitalGridComponent implements OnChanges {

  @Input('cHospitalData') public hospitalData;
  public totalRecords: number;
  public page: number = 1;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalRecords = this.hospitalData?.length;
  }
}
