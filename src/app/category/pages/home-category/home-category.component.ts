import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css'],
})
export class HomeCategoryComponent implements OnInit {
  constructor(
    private readonly categoryService: CategoryService,
    private formbuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) {}
  categories: Category[] = [];

  public formCreateCategory!: FormGroup;
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log('categories', categories);
    });

    this.formCreateCategory = this.formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
    });
    console.log('formCreateCategory', this.formCreateCategory);
  }
  createCategory(e: SubmitEvent) {
    e.preventDefault();
    console.log('crear categoría', this.formCreateCategory.value);
    this.categoryService
      .createCategory(this.formCreateCategory.value)
      .subscribe((category) => {
        console.log('hola, se suscribió', category);
        this.categories.push(category);
      });
    this.formCreateCategory.reset();
  }

  confirmDelete(id: string) {
    console.log('hola confirm', id);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //Actual logic to perform a confirmation
        console.log('se aceptó', id);
      },
      // reject: () => {
      //   console.log('se rechazó', id);
      // },
      key: 'positionDialog',
    });
  }
}
