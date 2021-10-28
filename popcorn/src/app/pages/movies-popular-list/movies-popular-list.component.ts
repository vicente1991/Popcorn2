import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie-list.interface';
import { MovieService } from '../../service/movies.service';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {
  popularMovies: Movie[] = [];

  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(popularMoviesResponse=>{
      this.popularMovies= popularMoviesResponse.results;
    });
    
  }

}
