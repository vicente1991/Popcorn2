import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from './pages/movies-popular-list/movies-popular-list.component';
import { PopularPeopleComponent } from './pages/popular-people/popular-people.component';

const routes: Routes = [
  {path: 'people', component: PopularPeopleComponent},
  {path: 'movies', component: MoviesPopularListComponent},
  {path: '',pathMatch: 'full', redirectTo:'/people'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
