import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamSelectedComponent } from './team-selected/team-selected.component';
import { UserSelectedComponent } from './user-selected/user-selected.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
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
    path: 'team',
    component: TeamInfoComponent
  },
  {
    path: 'user/:id',
    component: UserSelectedComponent
  },
  {
    path: 'create-team',
    component: TeamCreateComponent
  },
  {
     path: 'team/:id',
     component: TeamSelectedComponent
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
