import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = {};
  team: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.userService.get(id).subscribe((user: any) => {
          if (user) {
            this.user = user;
            this.user.href = user._links.self.href;
            this.userService.getUserTeam(id).subscribe((team: any) => {
              if (team) {
                this.team = team;
                this.team.href = team._links.self.href;
                this.team.team_id = this.team.href.split('/').pop();
              }
            })
          } else {
            console.log('User not found');
          }
        });
      }
    });
  }

}
