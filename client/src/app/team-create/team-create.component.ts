import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../shared/team/team.service';
import { UserService } from '../shared/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  team: any = {};
  user: any = {};

  //sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private teamService: TeamService,
              private userService: UserService) { }

  ngOnInit() {
    this.user.user_id = sessionStorage.getItem('user_id');
  }

  create(form: NgForm) {
    this.team.team_name = form.name;
    this.team.team_description = form.description;
    this.team.team_leader = form.team_leader;
    this.teamService.create(this.team).subscribe();
    this.gotoHome();
  }


  gotoHome() {
    this.router.navigate(['/dashboard']);
  }
}
