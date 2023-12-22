import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryComponent } from './category/category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'editCategory/:categoryId', component: EditCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }