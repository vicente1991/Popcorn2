import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from './pages/movies-popular-list/movies-popular-list.component';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import { PopularPeopleComponent } from './pages/popular-people/popular-people.component';

const routes: Routes = [
  {path: 'people', component: PopularPeopleComponent},
  {path: 'movies', component: MoviesPopularListComponent},
  {path: 'details/:id', component:PeopleDetailsComponent},
  {path: '',pathMatch: 'full', redirectTo:'/people'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
