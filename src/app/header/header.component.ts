import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorage: DataStorageService){}

  onSaveData(){
    this.dataStorage.storeRecipes();
  }

  onfetchData(){
    this.dataStorage.fetchRecipes().subscribe();
  }
}
