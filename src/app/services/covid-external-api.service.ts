import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidExternalApiService {

  private _url: string = "https://hpb.health.gov.lk/api/get-current-statistical";

  constructor(private http: HttpClient) { }

  getCovidData(): Observable<any> {
    return this.http.get(this._url)
      .pipe(retry(1),
        catchError(this.errorHandler)
      );

  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
