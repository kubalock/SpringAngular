import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../shared/city/city.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit, OnDestroy  {

  city: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cityService: CityService,
              private giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.cityService.get(id).subscribe((city: any) => {
          if (city) {
            this.city = city;
            this.city.href = city._links.self.href;
            this.giphyService.get(city.name).subscribe(url => city.giphyUrl = url);
          } else {
            console.log(`City with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/city-list']);
  }

  save(form: NgForm) {
    this.cityService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.cityService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
