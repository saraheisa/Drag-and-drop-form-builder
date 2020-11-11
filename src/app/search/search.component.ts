import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isSearchFocused = false;
  searchText: String;

  @Output() searchTextEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setSearchText() {
    this.searchTextEmitter.emit(this.searchText);
  }

}
