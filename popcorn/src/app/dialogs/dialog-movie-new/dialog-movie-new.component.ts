import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/interfaces/movie-list.interface';
import { MovieResponse } from 'src/app/interfaces/movie.interface';
import { MovieService } from 'src/app/service/movies.service';

export interface DialogMovieNewData {
  movie_id: number;
}

@Component({
  selector: 'app-dialog-movie-new',
  templateUrl: './dialog-movie-new.component.html',
  styleUrls: ['./dialog-movie-new.component.css']
})
export class DialogMovieNewComponent implements OnInit {
  movie!:MovieResponse;
  movieTitle = '';
  dialogTitle = '';
  hasErrors = false;

  constructor(
    private movieService: MovieService, 
    public dialogRef: MatDialogRef<DialogMovieNewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieNewData) { }

  ngOnInit(): void {
    console.log(this.movie)
    this.movieService.getOverviewMovie(this.data.movie_id).subscribe(movieResult => {
      this.movie = movieResult;
      
    });
  }

  saveMovie() {
    if(this.movieTitle == '') {
      this.hasErrors = true;
    } else {
      this.hasErrors = false;
      this.movieService.addMovie(this.movieTitle).subscribe(result => {
        // Cerrar el cuadro de diálogo
        // Si en el método close() le paso un valor, ese es el valor del 
        // retorno para el componente padre
        this.dialogRef.close(true);
      }, error => {
        this.dialogRef.close(false);
      });
    }
  }

}
