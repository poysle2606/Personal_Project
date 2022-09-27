import {PatientPeople} from './patientPeople';

export interface Patient {
  id?: number;
  codePatient?: string;
  codePeoplePatient?: PatientPeople;
  namePeoplePatient?: string;
  dayStart?: string;
  dayEnd?: string;
  reason?: string;
  method?: string;
  doctor?: string;
}
