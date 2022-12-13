import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  userData = {
    email: 'user@email.com',
    role: 'Admin',
  };

  userName = 'Joaquim';

  name: string = "Bruna"
  age: number = 28
  job = "Estudante"
  hobbies = ['Caminhar', 'Jogar', 'Ler']
  car = {
    name: 'Argo',
    year: 2018
  }

  constructor() { }

  ngOnInit(): void{
    
  }

}
