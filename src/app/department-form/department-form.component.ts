import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  depName = "";

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
  }


  save() {
    
    this.departmentService.addDepartment({ name: this.depName })
    this.clear();
    
  }

  clear() {
  
    this.depName = "";

  }



}
