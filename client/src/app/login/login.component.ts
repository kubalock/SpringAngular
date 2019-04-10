import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../shared/login/login.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: {};

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if(sessionStorage.getItem('user_id') != null) {
      this.gotoDashboard();
    }
  }

  login(form: NgForm) {
      this.loginService.getUser(form.value.username).subscribe((user: any) => {
        if (user == null) {
         console.log("User Not Found");
       } else {
        if (user.password == form.value.password) {
          sessionStorage.setItem('user_id', user.user_id);
          sessionStorage.setItem('username', user.username);
          this.gotoDashboard()
        } else {
          console.log("Wrong password");
        }
      }
      })
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
