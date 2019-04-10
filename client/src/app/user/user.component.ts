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
    if(sessionStorage.getItem("user_id") != null) {
    this.sub = this.route.params.subscribe(params => {
        this.userService.getUser(sessionStorage.getItem('username')).subscribe((user: any) => {
          if (user) {
            this.user = user;
            console.log(this.user);
              if (user.team != null) {
                sessionStorage.setItem('team_id', user.team.team_id);
              } else {
                sessionStorage.setItem('team_id', 'undefined');
              }
          }
        });
    });
  } else {
          this.gotoHome();
  }
}



  gotoHome() {
    this.router.navigate(['/index']);
  }

}
