import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { id: 1, name: 'Turca', type: 'Dog', age: 4 },
    { id: 2, name: 'Tom', type: 'Cat', age: 10 },
    { id: 3, name: 'Frida', type: 'Dog', age: 11 },
    { id: 4, name: 'Bob', type: 'Horse', age: 2 },
  ];
  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals()
   }

  ngOnInit(): void { }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe()
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals))
  }
}
