import { Component } from '@angular/core';
import { PersonService } from 'src/app/person/service/person.service';
import { PersonModel } from './modelParaCadastro/personModel';
import { HttpBackend, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  newPerson : PersonModel = new PersonModel();

  constructor(private personService: PersonService) { }
  
  onSubmit() {
    // Use o serviço para enviar os dados para o backend
    this.personService.add(this.newPerson).subscribe(
      (resposta) => {
        console.log(resposta);
      }
    );
    alert("Usuário cadastrado com sucesso!");
    this.newPerson.age = 0;
    this.newPerson.name = '';
    this.newPerson.email = '';
    this.newPerson.lastName = '';
  }
}
