import {Component, OnInit} from '@angular/core';
import {HomeService} from '../service/home.service';
import {Category} from '../model/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listCategory: Category[] = [];
  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.homeService.getCategory().subscribe((category: any) => {
      this.listCategory = category.content;
      console.log(category);
    });
  }
}
