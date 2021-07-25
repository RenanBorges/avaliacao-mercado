import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ModelProduct, Product } from '../models/product';
import { ProductService } from '../services/product.service';
import * as ProductActions from '../product/store/action/product.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(private _router: Router, private store: Store) {}
  compTitle: string = '';
  submitText: string = '';
  error: string = '';
  img: any;
  imageSrc: string = '';
  product: any;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    image: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.myForm.controls;
  }

  saveProduct(product: ModelProduct, img: any) {
    this.store.dispatch(ProductActions.AddProduct({ product, img }));
  }
  editProduct(product: ModelProduct, img: any, id: string) {
    this.store.dispatch(ProductActions.EditProduct({ product, img, id }));
  }

  submit() {
    if (this.myForm.valid) {
      if (!this.product.id) {
        this.saveProduct(this.myForm.value, this.img);
        this._router.navigate(['']);
      } else {
        this.editProduct(this.myForm.value, this.img, this.product.id);
        this._router.navigate(['']);
      }
    } else {
      this.validateAllFormFields(this.myForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      console.log(file.size);
      if (file.size > 640000) {
        alert('Arquivo muito pesado!');
        this.myForm.patchValue({
          image: '',
        });
      } else {
        reader.onload = () => {
          this.img = file;
          this.imageSrc = reader.result as string;
          this.myForm.patchValue({
            fileSource: reader.result,
          });
        };
      }
    }
  }

  ngOnInit(): void {
    this.product = history.state as Product;

    if (this.product.id) {
      this.compTitle = 'Editar Produto';
      this.submitText = 'Salvar Alterações';
      this.myForm.controls['image'].clearValidators();
      this.myForm.controls['image'].updateValueAndValidity();
      this.myForm.patchValue({
        name: this.product.name,
        price: this.product.price,
        fileSource: this.product.image,
      });
      this.imageSrc = this.product.image;
    } else {
      this.compTitle = 'Novo Produto';
      this.submitText = 'Criar Produto';
    }
  }
}
