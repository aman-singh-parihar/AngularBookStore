import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES } from '../mocks/mock-categories';
import { Category } from '../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = CATEGORIES
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  AddCategory(){
    this.router.navigate(['addCategory']);
  }
}
