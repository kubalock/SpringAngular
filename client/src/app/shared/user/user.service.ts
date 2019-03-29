import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public API = '//localhost:8080';

constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get(this.API + '/users/' + id);
  }

  getUserTeam(id: string) {
    return this.http.get(this.API + '/users/' + + id + '/team');
  }

}
