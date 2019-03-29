import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'team-list',
    component: TeamListComponent
  },
  {
    path: 'team-info/:id',
    component: TeamInfoComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'city-list',
    component: CityListComponent
  },
  {
    path: 'city-add',
    component: CityEditComponent
  },
  {
    path: 'city-edit/:id',
    component: CityEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
