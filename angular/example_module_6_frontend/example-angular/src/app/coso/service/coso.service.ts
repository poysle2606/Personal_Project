import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {NhanVien} from '../model/nhan-vien';
import {Coso} from '../model/coso';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CosoService {

  constructor(private http: HttpClient) {
  }

  getListNhanVien(): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(`${API_URL}/list`);
  }

  getListAndSearch(page: number, keySearch: string, size: number): Observable<any> {
    return this.http.get<any>(API_URL + '/page?page=' + page + '&ten=' + keySearch + '&size=' + size);
  }

  save(coSo): Observable<Coso> {
    return this.http.post<Coso>(API_URL + '/create', coSo);
  }

  delete(id: number): Observable<Coso> {
    return this.http.delete<Coso>(`${API_URL}/delete/${id}`);
  }

  checkCode(code: string): Observable<string> {
    return this.http.get<string>(API_URL + '/check/' + code);
  }

}
