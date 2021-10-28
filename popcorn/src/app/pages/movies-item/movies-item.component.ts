import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../../interfaces/movie-list.interface';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() movieInput!:Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie){
    return `${environment.imageBaseUrl}/${movie.poster_path}`;
  }
}
