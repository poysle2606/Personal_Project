import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {CosoService} from '../service/coso.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhanVien} from '../model/nhan-vien';

@Component({
  selector: 'app-coso-create',
  templateUrl: './coso-create.component.html',
  styleUrls: ['./coso-create.component.css']
})
export class CosoCreateComponent implements OnInit {
  nhanVienList: NhanVien[];
  isExitsCode = false;

  constructor(private toastrService: ToastrService, private cosoService: CosoService, private router: Router) {
  }

  coSoForm = new FormGroup({
    id: new FormControl(),
    maCoSo: new FormControl('', [Validators.required]),
    tenCoSo: new FormControl('', [Validators.required]),
    ngayKhaiTruong: new FormControl('', [Validators.required]),
    diaChi: new FormControl('', [Validators.required]),
    nhanVien: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.getAllNhanVien();
  }

  submit() {
    const patient = this.coSoForm.value;
    this.cosoService.save(patient).subscribe(() => {
      this.coSoForm.reset();
      this.toastrService.success('Thêm mới thành công', '--Đã thực hện--', {
        timeOut: 2000, progressBar: false
      });
      this.router.navigate(['/CoSo/list']);
    });
  }

  getAllNhanVien() {
    return this.cosoService.getListNhanVien().subscribe(nhanVien => {
      this.nhanVienList = nhanVien;
      console.log(this.nhanVienList);
    });
  }

  checkCode($event: Event) {
    this.cosoService.checkCode(String($event)).subscribe(
      value => {
        if (value) {
          this.isExitsCode = true;
        } else {
          this.isExitsCode = false;
        }
      }
    );
  }

}
