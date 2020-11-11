import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  @Input() form: any;
  @Input() withControls: boolean;
  @Output() deleteFormEmitter = new EventEmitter();

  constructor( private router: Router, private formService: FormService ) { }

  ngOnInit() { }

  delete() {
    this.deleteFormEmitter.emit('true');
  }

  openFormBuilder() {
    this.formService.setForm(this.form);
    this.router.navigate(['formBuilder']);
  }

}
