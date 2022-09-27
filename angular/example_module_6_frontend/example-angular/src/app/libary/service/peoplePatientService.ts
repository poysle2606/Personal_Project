import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PatientPeople} from '../model/patientPeople';

const URL_PEOPLEPATIENT = `${environment.apiUrlPeoplePatient}`;

@Injectable({
  providedIn: 'root'
})
export class PeoplePatientService {
  constructor(private httpClient: HttpClient) {
  }

  getAllPeoplePatient(): Observable<PatientPeople[]> {
    return this.httpClient.get<PatientPeople[]>(URL_PEOPLEPATIENT);
  }

  findById(id: number): Observable<PatientPeople> {
    return this.httpClient.get<PatientPeople>(`${URL_PEOPLEPATIENT}/${id}`);
  }
}
