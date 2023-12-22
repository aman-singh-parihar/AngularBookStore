import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category!: Category;
  constructor() {
    this.category = {
      id: 0,
      categoryName: "",
      displayOrder: 0
    };
  }

  ngOnInit(): void {
  }
  AddCategory(categoryForm:any) {
    console.log(categoryForm);
  }

}
