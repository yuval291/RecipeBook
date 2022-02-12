import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
@Injectable()
export class RecipeService{

    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[]= [
        new Recipe(
          'A test recipe',
          'This is simply a test',
          'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
          [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
          ]),
        new Recipe(
          'Another test recipe',
          'This is simply a test',
          'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
          [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
          ])
      ];

      constructor(private shoppinglistService:ShoppingListService){ }
    // -SLICE-:  It will simply return a new array that is an exact copy of it in this utility file.
      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients :Ingredient[]){
        this.shoppinglistService.addIngredients(ingredients);
      }

      getRecipe(id:number){
        return this.recipes[id];
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }

}