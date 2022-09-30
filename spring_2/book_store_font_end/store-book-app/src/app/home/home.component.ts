import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {HomeService} from '../service/home.service';
import {Category} from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  literaryVn: Book[] = [];
  literaryNational: Book[] = [];
  literaryChildren: Book[] = [];
  name?: string;
  codeBook?: number;
  translation?: string;
  production?: string;
  numberPages?: number;
  size?: string;
  price?: number;
  dateStart?: string;
  national?: string;
  view?: number;
  imgUrl?: string;
  author?: string;
  category?: Category;
  constructor(private literaryService: HomeService) { }

  ngOnInit(): void {
    this.getLiteraryVn();
    this.getLiteraryNational();
    this.getLiteraryChildren();
  }

  getLiteraryVn() {
    this.literaryService.getLiteraryVn().subscribe((book: any) => {
      if (book != null) {
        this.literaryVn = book.content;
      }
    });
  }

  getLiteraryNational() {
    this.literaryService.getLiteraryNational().subscribe((book: any) => {
      if (book != null) {
        this.literaryNational = book.content;
      }
    });
  }

  getLiteraryChildren() {
    this.literaryService.getLiteraryChildren().subscribe((book: any) => {
      if (book != null) {
        this.literaryChildren = book.content;
      }
    });
  }

  openDetail(book: Book) {
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
  }
}
