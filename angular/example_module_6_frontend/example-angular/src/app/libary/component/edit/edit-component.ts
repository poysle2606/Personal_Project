import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {PatientService} from '../../service/patientService';
import {PeoplePatientService} from '../../service/peoplePatientService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {PatientPeople} from '../../model/patientPeople';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-component.html',
  styleUrls: ['./edit-component.css']
})
export class EditComponent implements OnInit {

  patientForm: FormGroup;
  id: number;
  patientPeopleList: PatientPeople[];

  constructor(private activatedRoute: ActivatedRoute, private patientService: PatientService,
              private peoplePatientService: PeoplePatientService, private router: Router, private toastrService: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPatient(this.id);
    });
  }

  private getPatient(id: number) {
    return this.patientService.findById(id).subscribe(patient => {
      this.patientForm = new FormGroup({
        id: new FormControl(patient.id),
        codePatient: new FormControl(patient.codePatient),
        codePeoplePatient: new FormControl(patient.codePeoplePatient),
        // tslint:disable-next-line:max-line-length
        namePeoplePatient: new FormControl(patient.namePeoplePatient, [Validators.required, Validators.pattern('^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
          '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*' +
          '(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]' +
          '[a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$')]),
        dayStart: new FormControl(patient.dayStart, [Validators.required]),
        dayEnd: new FormControl(patient.dayEnd, [Validators.required]),
        reason: new FormControl(patient.reason, [Validators.required]),
        method: new FormControl(patient.method, Validators.required),
        doctor: new FormControl(patient.doctor, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
    this.getAllPeoplePatient();
  }

  getAllPeoplePatient() {
    return this.peoplePatientService.getAllPeoplePatient().subscribe(peoplePatient => {
      this.patientPeopleList = peoplePatient;
    });
  }

  compare(value, option): boolean {
    return value.codePeoplePatient === option.codePeoplePatient;
  }

  update(id: number) {
    const patient = this.patientForm.value;
    this.patientService.update(id, patient).subscribe(next => {
      console.log(patient);
      this.toastrService.success('Cập nhật  thành công', '--Đã thực hiện--', {
        timeOut: 2000, progressBar: false
      });
      this.router.navigate(['/patient/list']);
    });
  }
}
