import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {Category} from '../model/category';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getLiteraryVn(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/book-store/literary-vn`);
  }

  getAllLiteraryVn(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/book-store/literary-vn-more`);
  }

  getLiteraryNational(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/book-store/literary-national`);
  }

  getAllLiteraryNational(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/book-store/literary-national-more`);
  }


  getLiteraryChildren(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/book-store/literary-children`);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + `/book-store/category`);
  }
}
