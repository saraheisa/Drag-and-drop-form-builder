import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormService } from '../form.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openBlankFormDialog(): void {
    const dialogRef = this.dialog.open(BlankFormDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Blank Form dialog was closed');
    });
  }

  openTemplatesFormDialog(): void {
    const dialogRef = this.dialog.open(ReuseFormDialogComponent, {
      width: '800px',
      data: { forms: this.data.templates }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Templates Form dialog was closed');
      if (result === 'close') {
        this.dialogRef.close();
      }
    });
  }

  openDuplicateFormDialog(): void {
    const dialogRef = this.dialog.open(ReuseFormDialogComponent, {
      width: '800px',
      data: { forms: this.data.forms }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Templates Form dialog was closed');
      if (result === 'close') {
        this.dialogRef.close();
      }
    });
  }

}

@Component({
  selector: 'app-blank-form-dialog',
  templateUrl: 'blank-form-dialog.html',
  styleUrls: ['./popup.component.css']
})
export class BlankFormDialogComponent {

  name: String;
  description: String;

  constructor(
    private router: Router,
    private formService: FormService,
    public dialogRef: MatDialogRef<BlankFormDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openFormBuilder(): void {
    const form = {
      name: this.name,
      description: this.description,
      sections: []
    };

    this.formService.setForm(form);
    this.router.navigate(['formBuilder']);
    this.dialog.closeAll();
  }

}

@Component({
  selector: 'app-blank-form-dialog',
  templateUrl: 'reuse-form-dialog.html',
  styleUrls: ['./popup.component.css']
})
export class ReuseFormDialogComponent {

  selectedForm;
  searchText: string;

  constructor(
    private router: Router,
    private formService: FormService,
    public dialogRef: MatDialogRef<ReuseFormDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openFormBuilder(): void {
    this.formService.setForm(this.selectedForm);
    this.router.navigate(['formBuilder']);
    this.dialog.closeAll();
  }

  setSearchText(data) {
    this.searchText = data;
  }

}
