import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../shared/team/team.service';
import { UserService } from '../shared/user/user.service';
import { NgForm } from '@angular/forms';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-user-selected',
  templateUrl: './user-selected.component.html',
  styleUrls: ['./user-selected.component.css']
})
export class UserSelectedComponent implements OnInit {

  team: any = {};
  teamTrue = false;
  user: any = {};

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
        this.userService.get(this.id).subscribe(result => {
          this.user = result;
          this.userService.getUser(this.user.username).subscribe(result => {
            this.user = result;
            this.giphyService.get(this.user.username).subscribe(url => this.user.giphyUrl = url);
          })
        });
      }
  });
}
}
