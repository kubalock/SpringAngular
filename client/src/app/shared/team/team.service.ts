import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TeamService {
  public API = '//localhost:8080';
  public TEAM_API = this.API + '/teams';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
  return this.http.get('//localhost:8080/allTeams');
}

  get(id: string) {
    return this.http.get(this.TEAM_API + '/' + id);
  }

  getTeamUsers(id: string) {
    return this.http.get(this.API + '/team/' + id + '/users');
  }

  remove(id: string) {
    return this.http.put(this.API + '/removeTeam/' + id, id);
  }

  create(team: any) {
    return this.http.post(this.API + '/createTeam/' + team.team_name + '/' + team.team_description + '/' + team.team_leader, team);
  }
}
