import { Person } from '../model/person';
import { PersonService } from './../service/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-information',
  templateUrl: './table-information.component.html',
  styleUrls: ['./table-information.component.css']
})
export class TableInformationComponent implements OnInit {

  people!: Person[];
  //person = new Person();

  constructor(private personService: PersonService) { }

  ngOnInit() : void{
    this.getAll();
  }

  getAll() {
    this.personService.getAll().subscribe(person => this.people = person);
  }
}
