import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../shared/team/team.service';
import { NgForm } from '@angular/forms';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  team: any = {};
  users: Array<any>;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private teamService: TeamService,
              private giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.teamService.get(id).subscribe((team: any) =>{
          if (team) {
            this.team = team;
            this.team.href = team._links.self.href;
            this.teamService.getTeamUsers(id).subscribe((data: any) => {
              this.users = data;
              for (const user of this.users) {
                this.giphyService.get(user.username).subscribe(url => user.giphyUrl = url);
              }
            });
          }
           else {
            console.log('Team not found');
            this.gotoList();
          }
        });
      }
    });
  }

gotoList() {
  this.router.navigate(['/team-list']);
}
}
