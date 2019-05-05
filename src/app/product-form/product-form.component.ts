import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { ProductService } from '../services/product.service';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  price: number;
  department: Department;
  description: string;
  departments: Department[];

  constructor(
    private productService: ProductService,
    private departmentService: DepartmentService

  ) { }

  ngOnInit() {

    this.departments = this.departmentService.getDepartments();

  }

  save() {

    this.productService.addProduct({
      name: this.name,
      description: this.description,
      price: this.price,
      department: this.department
    });
    
  }

  clear() {

    this.name = this.description = "";
    this.price = 0;
    this.department = null;
    
  }

}
