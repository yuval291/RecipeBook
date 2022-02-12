import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 
  @ViewChild('f') slForm:NgForm;

  submitted=false;
  subsciption: Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem: Ingredient;
  
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
    this.subsciption= this.shoppingListService.startedEditing
      .subscribe(
        (index:number)=>{
          this.editedItemIndex=index;
          this.editMode=true;
          this.editedItem=this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }
  
  ngOnDestroy(): void {
      this.subsciption.unsubscribe();
  }

  onSubmit(form:NgForm){
    const value= form.value;
    const newIngreident = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngreident)
    }else{
      this.shoppingListService.addIngredient(newIngreident);  
    }
    this.editMode=false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }



}
