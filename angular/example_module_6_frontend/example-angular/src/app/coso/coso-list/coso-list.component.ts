import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CosoService} from '../service/coso.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Coso} from '../model/coso';

@Component({
  selector: 'app-coso-list',
  templateUrl: './coso-list.component.html',
  styleUrls: ['./coso-list.component.css']
})
export class CosoListComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    tenCoSo: new FormControl('')
  });
  tenCoSoSearch = '';
  coSoList: Coso[] = [];
  number: number;
  indexPagination = 0;
  totalPage: string[];
  numberOfElement = 0;
  totalElements = 0;
  pageSize: number;
  previousPageStyle = 'inline-block';
  nextPageStyle = 'inline-block';
  displayPagination = 'inline-block';
  nameDelete: string;
  idDelete: number;


  constructor(private cosoService: CosoService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.cosoService.getListAndSearch(this.indexPagination, this.tenCoSoSearch, this.pageSize).subscribe((data?: any) => {
        if (data === null) {
          this.totalPage = new Array(0);
          this.displayPagination = 'none';
        } else {
          this.number = data?.number;
          this.pageSize = data?.size;
          this.numberOfElement = data?.numberOfElements;
          this.coSoList = data.content;
          console.log(this.coSoList);
          this.totalElements = data?.totalElements;
        }
        this.checkPreviousAndNext();
      }, error => {
        this.coSoList = null;
      }
    );
  }

  previousPage(event: any) {
    event.preventDefault();
    this.indexPagination--;
    this.ngOnInit();
  }

  nextPage(event: any) {
    event.preventDefault();
    this.indexPagination++;
    this.ngOnInit();
  }

  checkPreviousAndNext() {
    if (this.indexPagination === 0) {
      this.previousPageStyle = 'none';
    } else if (this.indexPagination !== 0) {
      this.previousPageStyle = 'inline-block';
    }
    if (this.indexPagination < (this.totalPage.length - 1)) {
      this.nextPageStyle = 'inline-block';
    } else if (this.indexPagination === (this.totalPage.length - 1) || this.indexPagination > (this.totalPage.length - 1)) {
      this.nextPageStyle = 'none';
    }
  }

  checkRegex(titleSearch: string): boolean {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return format.test(titleSearch);
  }

  searchAds() {
    this.tenCoSoSearch = this.searchForm.value.tenCoSo;
    if (this.checkRegex(this.searchForm.value.tenCoSo)) {
      this.indexPagination = 0;
      this.totalPage = new Array(0);
      this.coSoList = [];
      this.displayPagination = 'none';
      this.checkPreviousAndNext();
    } else {
      this.indexPagination = 0;
      this.displayPagination = 'inline-block';
      this.getList();
    }
  }

  openDelete(coSo: Coso) {
    this.nameDelete = coSo.tenCoSo;
    this.idDelete = coSo.id;
    console.log(this.idDelete);
  }

  delete(idDelete: number) {
    this.cosoService.delete(idDelete).subscribe(() => {
      this.ngOnInit();
      this.toastrService.success('Xóa thành công', '--Đã thực hiện--', {
        timeOut: 2000, progressBar: false
      });
    });
  }

}
