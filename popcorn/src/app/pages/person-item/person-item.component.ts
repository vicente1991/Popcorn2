import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from '../../interfaces/people-popular.interface';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() personInput!:Person;
  constructor() { }

  ngOnInit(): void {
  }

  getPersonImageUrl(person: Person){
    return `${environment.imageBaseUrl}/${person.profile_path}`;
  }
}
