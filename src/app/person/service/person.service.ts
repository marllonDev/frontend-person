import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Person } from '../model/person';
import { PersonModel } from 'src/app/pages/cadastro/modelParaCadastro/personModel';


const baseUrl = "/person";

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  
  constructor(private http: HttpClient) {
   }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  add(person : PersonModel): Observable <PersonModel>{
    return this.http.post<PersonModel>(baseUrl, person)
  }
}
