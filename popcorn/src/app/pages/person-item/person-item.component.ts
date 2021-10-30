import { Component, Input, OnInit } from '@angular/core';
import { PeopleResponse } from 'src/app/interfaces/people.interface';
import { MovieService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment';
import { Person } from '../../interfaces/people-popular.interface';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() personInput!:Person;
  people!: PeopleResponse
  constructor(private peopleService : MovieService) { }
  

  ngOnInit(): void {
    this.peopleService.getPeople(this.personInput.id).subscribe(result =>{
      this.people= result
    })
  }

  getPersonImageUrl(person: Person){
    return `${environment.imageBaseUrl}/${person.profile_path}`;
  }
}
