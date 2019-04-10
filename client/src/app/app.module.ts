import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarEditComponent } from './car-edit/car-edit.component';

import { FormsModule } from '@angular/forms';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamSelectedComponent } from './team-selected/team-selected.component';
import { UserSelectedComponent } from './user-selected/user-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    CityListComponent,
    CityEditComponent,
    TeamListComponent,
    TeamInfoComponent,
    UserComponent,
    IndexComponent,
    LoginComponent,
    TeamCreateComponent,
    TeamSelectedComponent,
    UserSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
