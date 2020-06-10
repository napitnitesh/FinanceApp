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
  this.categoryService.getAllCategories().subscribe(res=>{
    this.categories=res
    console.log(res)
  })

  }
  deleteCategory(id){
    console.log("in delete")
    this.categoryService.deleteCategory(id)


  }

}
