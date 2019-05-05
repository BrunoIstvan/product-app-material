import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable) datatable: MatTable<any>;

  prodColumns: string[] = ["id", "name", "department", "price", "description"];
  products: Product[];

  constructor(
    private produtctService: ProductService
  ) { }

  ngOnInit() {

    this.products = this.produtctService.getProducts();
    this.produtctService.onNewProduct.subscribe( p => this.datatable.renderRows() );

  }

}
