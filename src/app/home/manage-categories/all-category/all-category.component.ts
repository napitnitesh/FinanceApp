import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  categories=[]
  constructor(public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categories=this.categoryService.getAllCategories()

  }

}
