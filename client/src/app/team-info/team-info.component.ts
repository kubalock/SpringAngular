import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../shared/team/team.service';
import { UserService } from '../shared/user/user.service';
import { NgForm } from '@angular/forms';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  team: any = {};
  teamTrue = false;
  user: any = {};
  users: Array<any>;
  teamLeader = false;
  sub: Subscription;

  id: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private teamService: TeamService,
              private giphyService: GiphyService,
              private userService: UserService) { }

  ngOnInit() {
    if (sessionStorage.getItem('team_id') != 'undefined') {
    this.id = sessionStorage.getItem('team_id');
    this.teamService.get(this.id).subscribe((team: any) => {
      if (team) {
        this.teamTrue = true;
        this.team = team;
        if(this.team.team_leader == sessionStorage.getItem('user_id')) {
          this.teamLeader = true;
        }
        //console.log(this.team);
        this.team.href = team._links.self.href;
        this.teamService.getTeamUsers(this.id).subscribe((data: any) => {
          this.users = data;
          for(const user of this.users) {
            this.giphyService.get(user.username).subscribe(url => user.giphyUrl = url);
          }
        });
      }
    });
  }
}


leaveTeam() {
  this.userService.getUser(sessionStorage.getItem('username')).subscribe((user: any) => {
    this.user.user_id = user.user_id;
    this.user.team = null;
    this.userService.leaveTeam(this.user).subscribe(result => {
    sessionStorage.setItem("team_id", "undefined");
    this.gotoList();
    });
  });
}

deleteTeam() {
  this.teamService.remove(sessionStorage.getItem('team_id')).subscribe();
  sessionStorage.setItem('team_id', 'undefined');
  this.gotoList();
}

gotoList() {
  this.router.navigate(['/team-list']);
}
}
