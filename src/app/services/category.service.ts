import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories=[]


  constructor() {
    this.categories.push("Food")
    this.categories.push("Entertainment")
   }

  addCategory(categoryName:string){
    this.categories.push(categoryName)

  }

  deleteCategory(id){
    this.categories.splice(id,1)

  }
  getAllCategories(){
    return this.categories

  }
}
