import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/people.interface';
import { MovieService } from '../../service/movies.service';

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.css']
})
export class PopularPeopleComponent implements OnInit {
  popularPeople: Person[] = [];
  

  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    this.moviesService.getPopularPeople().subscribe(PopularPeopleResponse=>
      this.popularPeople=PopularPeopleResponse.results);
    
  }

  
}
