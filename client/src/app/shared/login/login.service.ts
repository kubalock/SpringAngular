import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
public API = '//localhost:8080';
public USER_API = this.API + '/user/';

  constructor(private http: HttpClient) { }

  getUser(username: String) {
    return this.http.get(this.USER_API + username);
  }
}
