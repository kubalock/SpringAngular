import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'client';
  isLoggedIn = {};

constructor(private router: Router,
private route: ActivatedRoute) { }

ngOnInit() {
  if(sessionStorage.getItem('user_id') != null) {
    this.isLoggedIn = true;
  } else {
    this.isLoggedIn = false;
  }
}

  logout() {
          sessionStorage.clear();
          this.gotoHome();
  }

  gotoHome() {
    this.router.navigate(['/index']);
  }
}
