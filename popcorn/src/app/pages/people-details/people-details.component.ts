import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleResponse } from 'src/app/interfaces/people.interface';
import { MovieService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  people!: PeopleResponse;

  constructor(private PeopleService: MovieService,private Route: ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.Route.snapshot.paramMap.get('id');
    this.PeopleService.getPeopleDetails(id!).subscribe(result =>{
      this.people= result
    })
  }
  getPersonImageUrl(person: PeopleResponse){
    return `${environment.imageBaseUrl}/${person.profile_path}`;
  }
  
  
}
