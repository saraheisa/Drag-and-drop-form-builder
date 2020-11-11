import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() option;
  @Output() deleteEmitter = new EventEmitter();
  panelOpenState = true;

  constructor() { }

  ngOnInit() {
  }

  deleteOption() {
    this.deleteEmitter.emit('true');
  }

}
