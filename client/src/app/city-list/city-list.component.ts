import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/city/city.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: Array<any>;

  constructor(private cityService: CityService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.cityService.getAll().subscribe(data => {
      this.cities = data;
      for (const city of this.cities) {
        this.giphyService.get(city.name).subscribe(url => city.giphyUrl = url);
      }
    });
  }

}
