import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { CreateCategoryDto } from '../interfaces/create-category-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly http: HttpClient) {}
  baseUrl: string = 'http://localhost:5000/api/v1';
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/category/${id}`);
  }

  createCategory(createCategoryDTO: CreateCategoryDto): Observable<Category> {
    return this.http.post<Category>(
      `${this.baseUrl}/categories`,
      createCategoryDTO
    );
  }
  editCategory() {}
  deleteCategory() {}
}
