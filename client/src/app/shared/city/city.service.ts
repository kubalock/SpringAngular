import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CityService {
  public API = '//localhost:8080';
  public CITY_API = this.API + '/cities';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/allCities');
  }

  get(id: string) {
    return this.http.get(this.CITY_API + '/' + id);
  }

  save(city: any): Observable<any> {
    let result: Observable<Object>;
    if(city['href']) {
      result = this.http.put(city.href, city);
    } else {
      result = this.http.post(this.CITY_API, city);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
