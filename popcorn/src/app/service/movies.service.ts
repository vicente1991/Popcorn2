import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, MoviesPopularResponse } from '../interfaces/movie-list.interface';
import { MovieResponse } from '../interfaces/movie.interface';
import { PopularPeopleResponse } from '../interfaces/people-popular.interface';
import { PeopleResponse } from '../interfaces/people.interface';

const movieUrl = `${environment.apiBaseUrl}`;


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }


  getPopularMovies(): Observable<MoviesPopularResponse> {
    return this.http.get<MoviesPopularResponse>(`${movieUrl}/movie/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  getPopularPeople(): Observable<PopularPeopleResponse> {
    return this.http.get<PopularPeopleResponse>(`${movieUrl}/person/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }
  
  addMovie(newTitle: string): Observable<any> {
    return this.http.post('url', {title: newTitle} );
  }
  getOverviewMovie(movie_id: number): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(`${movieUrl}/movie/${movie_id}?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  getPeople(id: number): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${movieUrl}/person/${id}?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }
  getPeopleDetails(id: String): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${movieUrl}/person/${id}?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  }
