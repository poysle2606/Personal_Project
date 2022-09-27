import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Patient} from '../model/patient';

const URL_PATIENT = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(URL_PATIENT + '/list?page=' + page);
  }

  finAll(page: number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(URL_PATIENT + '/page?page=' + page);
  }

  save(library): Observable<Patient> {
    return this.httpClient.post<Patient>(URL_PATIENT + '/create', library);
  }

  findById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${URL_PATIENT}/find/${id}`);
  }

  update(id: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${URL_PATIENT}/update/${id}`, patient);
  }

  delete(id: number): Observable<Patient> {
    return this.httpClient.delete<Patient>(`${URL_PATIENT}/delete/${id}`);
  }

  codePeoplePatientSearch(codePeoplePatient: string, namePeoplePatient: string, doctor: string): Observable<Patient[]> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Patient[]>(`${URL_PATIENT}/search?codePeoplePatient=` + codePeoplePatient + '&namePeoplePatient=' + namePeoplePatient + '&doctor=' + doctor);
  }
}

