import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected =  new EventEmitter<Recipe>();

  recipes: Recipe[]= [
    new Recipe('A test recipe','This is simply a test','https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
    new Recipe('Another test recipe','This is simply a test','https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg')
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
