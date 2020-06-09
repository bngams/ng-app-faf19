import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;


  constructor(private customValidator: CustomValidator) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, this.customValidator.validate]),
      price: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    console.log(this.productForm.value);
  }

}
