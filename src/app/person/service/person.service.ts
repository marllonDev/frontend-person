import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


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

  
}
