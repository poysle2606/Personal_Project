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
  view: number;
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

  upHeart(view: number) {
    this.view = view + 1;
  }
}
