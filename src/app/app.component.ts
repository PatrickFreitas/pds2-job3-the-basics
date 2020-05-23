import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  filteredNames = [];
  names: string[] = ['joão', 'maria', 'josé', 'pedro', 'felipe', 'carlos'];

  persons: any = [
    {id: 1, name: 'joao', salary: 5000},
    {id: 2, name: 'maria', salary: 1000},
    {id: 3, name: 'josé', salary: 2000},
    {id: 4, name: 'pedro', salary: 3000},
    {id: 5, name: 'felipe', salary: 10000},
    {id: 6, name: 'carlos', salary: 800},
  ]

  getFullValue(): Number {
    return this.persons.reduce((sum, person) => sum + person.salary, 0)
  }

  search(valor: string) {
    this.filteredNames = [];

    for(var i=0; i < this.names.length; i++) {
      if(this.names[i].toLowerCase().includes(valor.toLowerCase())) {
        this.filteredNames.push(this.names[i]);
      }
    }
  }

  searchById(id) {
    return this.persons.find(person => person.id == id);
  }

  increaseSalary(percent) {
    this.persons.map(person => person.salary += person.salary * percent/100)
  }

  checkSalary(amount: number) {
    return this.persons.every(person => person.salary > amount);
  }

  multipleSearch(inputValue: string) {
    return this.persons.filter((person) => Object.keys(person).some(key => person[key].toString().includes(inputValue)));
  }
}
