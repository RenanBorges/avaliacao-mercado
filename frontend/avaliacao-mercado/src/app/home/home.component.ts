import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}
  imagePath: string = 'https://localhost:5001/images/';
  products: Product[] = [];
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((prods) => {
      this.products = prods.map((p: Product) => ({
        ...p,
        image: this.imagePath + p.image,
      }));
    });
  }

  editProduct(prod: Product) {
    console.log(prod);
  }
}
