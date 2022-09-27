import {Component, OnInit} from '@angular/core';
import {PatientPeople} from '../../model/patientPeople';
import {ToastrService} from 'ngx-toastr';
import {Patient} from '../../model/patient';
import {PeoplePatientService} from '../../service/peoplePatientService';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientService} from '../../service/patientService';

@Component({
  selector: 'app-list',
  templateUrl: './list-component.html',
  styleUrls: ['./list-component.css']
})
export class ListComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    namePeoplePatient: new FormControl(''),
    doctor: new FormControl(''),
    codePeoplePatient: new FormGroup({
      codePeoplePatient: new FormControl('')
    })
  });

  patientList: Patient[] = [];
  patientPeopleList: PatientPeople[] = [];
  nameDelete: string;
  idDelete: number;
  totalPages: number;
  number: number;

  // tslint:disable-next-line:max-line-length
  constructor(private patientService: PatientService, private toastrService: ToastrService, private peoplePatientService: PeoplePatientService) {
  }

  ngOnInit(): void {
    this.getAllPatient(0);
  }

  getAllPatient(page: number) {
    // @ts-ignore
    // tslint:disable-next-line:variable-name
    this.patientService.getAll(page).subscribe(({content, number: number, totalPages: totalPages}: Patient[]) => {
      this.totalPages = totalPages;
      this.number = number;
      this.patientList = content;
    });
    this.peoplePatientService.getAllPeoplePatient().subscribe(codePeoplePatientList => {
      this.patientPeopleList = codePeoplePatientList;
    });
  }

  openDelete(patient: Patient) {
    this.nameDelete = patient.namePeoplePatient;
    this.idDelete = patient.id;
  }

  delete(idDelete: number) {
    this.patientService.delete(idDelete).subscribe(() => {
      this.ngOnInit();
      this.toastrService.success('Xóa thành công', '--Đã thực hiện--', {
        timeOut: 2000, progressBar: false
      });
    });
  }

  goPrevious() {
    let numberPage: number = this.number;
    if (numberPage > 0) {
      numberPage--;
      this.getAllPatient(numberPage);
    }
  }

  goNext() {
    let numberPage: number = this.number;
    if (numberPage < this.totalPages - 1) {
      numberPage++;
      this.getAllPatient(numberPage);
    }
  }

  searchForms() {
    this.patientService.codePeoplePatientSearch(
      this.searchForm.value.codePeoplePatient.codePeoplePatient,
      this.searchForm.value.namePeoplePatient,
      this.searchForm.value.doctor).subscribe(value => {
      console.log(value);
      this.patientList = value;
    });
  }
}
