import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category';
import {Book} from '../model/book';
import {DetailService} from '../service/detail.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number;
  name: string;
  codeBook: number;
  translation: string;
  production: string;
  numberPages: number;
  size: string;
  price: number;
  dateStart: string;
  national: string;
  view: number;
  imgUrl: string;
  author: string;
  category: Category;
  constructor(private detailService: DetailService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.openDetail(this.id);
    });
  }

  ngOnInit(): void {
  }

  openDetail(id: number) {
    this.detailService.getDetailBook(id).subscribe(book => {
      this.name = book.name;
      this.codeBook = book.codeBook;
      this.translation = book.translation;
      this.production = book.production;
      this.numberPages = book.numberPages;
      this.size = book.size;
      this.price = book.price;
      this.dateStart = book.dateStart;
      this.national = book.national;
      this.view = book.view;
      this.imgUrl = book.imgUrl;
      this.author = book.author;
      this.category = book.category;
    });
  }
}
