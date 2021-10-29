import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMovieNewComponent } from 'src/app/dialogs/dialog-movie-new/dialog-movie-new.component';
import { environment } from 'src/environments/environment';
import { Movie } from '../../interfaces/movie-list.interface';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() movieInput!:Movie;

  constructor(private abrirDialogo: MatDialog) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie){
    return `${environment.imageBaseUrl}/${movie.poster_path}`;
  }

  openMovieDetailDialog(){
    this.abrirDialogo.open(DialogMovieNewComponent, {
      width: "600px", height: "600px",
      data:{movie_id: this.movieInput?.id }
    })
  }
  
}
