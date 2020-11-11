import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchText;
  isSearchFocused = false;

  forms = [
    {
      name: 'Form Name',
      description: 'a basic form',
      sections: []
    },
    {
      name: 'Registeration Form',
      description: 'simple registeration form',
      sections: []
    },
    {
      name: 'Encounter Form',
      description: 'first encounter form',
      sections: []
    }
  ];

  templates = [
    {
      name: 'Basic Form',
      description: 'a basic form',
      sections: []
    },
    {
      name: 'Registeration Form',
      description: 'simple registeration form',
      sections: []
    },
    {
      name: 'Encounter Form',
      description: 'first encounter form',
      sections: []
    }
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '600px',
      data: {forms: this.forms, templates: this.templates}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  setSearchText(data) {
    this.searchText = data;
  }

  deleteForm(index) {
    this.forms.splice(index, 1);
  }

  ngOnInit() {
  }

}
