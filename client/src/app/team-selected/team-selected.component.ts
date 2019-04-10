import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../shared/team/team.service';
import { UserService } from '../shared/user/user.service';
import { NgForm } from '@angular/forms';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-team-selected',
  templateUrl: './team-selected.component.html',
  styleUrls: ['./team-selected.component.css']
})
export class TeamSelectedComponent implements OnInit {
  team: any = {};
  teamTrue = false;
  user: any = {};
  users: Array<any>;

  sub: Subscription;

  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private teamService: TeamService,
              private giphyService: GiphyService,
              private userService: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.teamService.get(this.id).subscribe((team: any) => {
            if(sessionStorage.getItem('team_id') != 'undefined') {
              this.teamTrue = true;
            }
            this.team = team;
            this.teamService.getTeamUsers(this.id).subscribe((data: any) => {
              this.users = data;
              for(const user of this.users) {
                this.giphyService.get(user.username).subscribe(url => user.giphyUrl = url);
              }
            });
          });
      }
    });
  }

  joinTeam() {
    this.userService.getUser(sessionStorage.getItem('username')).subscribe((user: any) => {
      this.user = user;
      this.user.joinId = this.id;
      this.userService.joinTeam(this.user).subscribe(result => {
        sessionStorage.setItem("team_id", this.id);
        this.gotoTeam();
      });
    });
  }

gotoTeam() {
  this.router.navigate(['/team-list']);
}

}
