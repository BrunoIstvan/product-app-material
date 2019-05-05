import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    { id: 1, name: "Clothing" },
    { id: 2, name: "Books" },
    { id: 3, name: "Electronics" },
    { id: 4, name: "Computers" },
  ];

  private nextID: number = this.departments.length + 1;

  constructor() { }

  getDepartments() {

    return this.departments;

  }

  addDepartment(d: Department) { 
    
    this.departments.push({ id: this.nextID++, ...d });
    console.log(this.departments);

  }

  getDepartmentById(id: number) {

    return this.departments.find(d => d.id == id);

  }

}
