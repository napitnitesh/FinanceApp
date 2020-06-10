import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

categories:Category[]=[]

  constructor(private db:AngularFirestore) {
    let category=new Category()
    category.name="Food"
    this.categories.push(category)
    category=new Category()
    category.name="Entertainment"
    this.categories.push(category)
    this.getAllValuesinDummy()
   }

  addCategory(categoryName:string){
    let category=new Category()
      category.name=categoryName
    this.categories.push(category);

  }

  deleteCategory(id){
    this.categories.splice(id,1)

  }
  getAllCategories(){
    return this.categories

  }
  
  getAllValuesinDummy(){
    this.db.collection("dummy").valueChanges().subscribe(res=>{
      console.log(res)
    })
  }
}
