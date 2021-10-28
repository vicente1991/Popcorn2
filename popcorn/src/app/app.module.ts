import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { DialogMovieNewComponent } from './dialogs/dialog-movie-new/dialog-movie-new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { MoviesPopularListComponent } from './pages/movies-popular-list/movies-popular-list.component';
import { MoviesItemComponent } from './pages/movies-item/movies-item.component';
import { PersonItemComponent } from './pages/person-item/person-item.component';
import { PopularPeopleComponent } from './pages/popular-people/popular-people.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MoviesPopularListComponent,
    MoviesItemComponent,
    PersonItemComponent,
    PopularPeopleComponent,
    DialogMovieNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogMovieNewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }