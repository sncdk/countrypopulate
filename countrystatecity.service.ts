import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class CountrystatecityService {

  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json', 
      'X-CSCAPI-KEY': 'NEZRQmlRaVRrNzREUUlLUXFzWHZNeXh0YWZRZ1I0MVB5T2tCVzVlcw=='
    })
  }

  getCountry(): Observable<Country[]>{
    return this.httpclient.get<Country[]>('https://api.countrystatecity.in/v1/countries', {headers: this.httpOptions.headers})
  }

  getStateOfSelectedCountry(countryIso:string): Observable<any>{
    return this.httpclient.get('https://api.countrystatecity.in/v1/countries/${countryIso}/states', {headers: this.httpOptions.headers} )
  }
}
