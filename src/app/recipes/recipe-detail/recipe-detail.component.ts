import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Output() openDrop = new EventEmitter<void>();

  @Input() recipe:Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  openDropdown(){
    this.openDrop.emit();
  }

}
