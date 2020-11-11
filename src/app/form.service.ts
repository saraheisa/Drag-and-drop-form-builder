import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private form;

  constructor() { }

  setForm(form) {
    this.form = form;
  }

  getForm() {
    return this.form;
  }

}
