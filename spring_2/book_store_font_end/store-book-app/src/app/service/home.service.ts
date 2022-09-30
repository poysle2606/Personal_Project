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
    return this.http.get<Book[]>(API_URL + `/literary-vn`);
  }

  getLiteraryNational(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/literary-national`);
  }

  getLiteraryChildren(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/literary-children`);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + `/category`);
  }
}
