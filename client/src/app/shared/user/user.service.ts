import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public API = '//localhost:8080';
  public USERS_API = this.API + '/users/';

constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get(this.API + '/users/' + id);
  }

  getUser(username: String) {
    return this.http.get(this.API + '/user/' + username);
  }

  getUserTeam(id: string) {
    return this.http.get(this.API + '/users/' + id + '/team');
  }

  leaveTeam(user: any) {
    return this.http.put(this.API + '/leaveTeam/' + user.user_id, user);
  }

  joinTeam(user: any) {
    return this.http.put(this.API + '/joinTeam/' + user.user_id + '/'+ user.joinId, user);
  }

}
