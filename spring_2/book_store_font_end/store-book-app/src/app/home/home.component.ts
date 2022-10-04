import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {HomeService} from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  literaryVn: Book[] = [];
  literaryNational: Book[] = [];
  literaryChildren: Book[] = [];
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

  getAll() {
    this.literaryService.getAllLiteraryVn().subscribe((bookVn: any) => {
      if (bookVn != null) {
        this.literaryVn = bookVn.content;
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

  getAllNational() {
    this.literaryService.getAllLiteraryNational().subscribe((book: any) => {
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
}
