import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  private nextID : number = 0;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();


  private dataFromServer: any[] = [
    { id: 1, name: "Laptop", department_id: 4, price: 4000, description: 'Laptop Description' },
    { id: 2, name: "Shirt", department_id: 1, price: 10, description: 'Shirt Description' },
    { id: 3, name: "Polo", department_id: 1, price: 40, description: 'Polo Description' },
    { id: 4, name: "Mouse", department_id: 3, price: 20, description: 'Mouse Description' }
  ]

  constructor(
    private departmentService: DepartmentService
  ) { 

    for( let p of this.dataFromServer) {

      this.products.push(
        { id: p.id, 
          name: p.name,
          price: p.price, 
          description: p.description,
          department: this.departmentService.getDepartmentById(p.department_id)
        }
      );

      this.nextID = ++p.id;

    }

  }

  getProducts(): Product[] {

    return this.products;

  }

  addProduct(p: Product) {

    let newProd = { id: this.nextID++, ...p };
    this.products.push(newProd);

    console.log(this.products);
    this.onNewProduct.emit(newProd);

  }

}
