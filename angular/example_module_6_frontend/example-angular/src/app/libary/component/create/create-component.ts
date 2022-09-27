import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../service/patientService';
import {Router} from '@angular/router';
import {PeoplePatientService} from '../../service/peoplePatientService';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientPeople} from '../../model/patientPeople';
import {checkDay, checkDayEnd, checkDayStart} from '../../../customValidate';

@Component({
  selector: 'app-create',
  templateUrl: './create-component.html',
  styleUrls: ['./create-component.css']
})
export class CreateComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private toastrService: ToastrService, private patientService: PatientService, private router: Router, private peoplePatientService: PeoplePatientService) {
  }

  patientForm = new FormGroup({
    id: new FormControl(),
    codePatient: new FormControl('', [Validators.required]),
    codePeoplePatient: new FormControl('', [Validators.required]),
    // tslint:disable-next-line:max-line-length
    namePeoplePatient: new FormControl('', [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
      '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*' +
      '(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
      '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
    dayStart: new FormControl('', [Validators.required, checkDayStart]),
    dayEnd: new FormControl('', [Validators.required, checkDayEnd]),
    reason: new FormControl('', [Validators.required]),
    method: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
  }, checkDay);

  peoplePatientList: PatientPeople [];

  submit() {
    const patient = this.patientForm.value;
    this.patientService.save(patient).subscribe(() => {
      this.patientForm.reset();
      this.toastrService.success('Thêm mới thành công', '--Đã thực hện--', {
        timeOut: 2000, progressBar: false
      });
      this.router.navigate(['/patient/list']);
    }, err => {
      this.toastrService.error('Lỗi validate Backend');
    });
  }

  ngOnInit(): void {
    this.getAllPeoplePatient();
  }

  getAllPeoplePatient() {
    return this.peoplePatientService.getAllPeoplePatient().subscribe(peoplePatient => {
      this.peoplePatientList = peoplePatient;
    });
  }

}
