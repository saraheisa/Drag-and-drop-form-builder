import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css', './bootstrap.min.css', './muzima.css']
})
export class SectionComponent implements OnInit {

  @Input() section;
  @Output() selectEmitter = new EventEmitter();

  selected = {};

  constructor() { }

  ngOnInit() {
  }

  select(field) {
    this.selected = field;
    this.selectEmitter.emit(field);
  }

  delete(index) {
    this.section.fields.splice(index, 1);
    if (!this.section.fields.includes(this.selected)) {
      this.selectEmitter.emit({});
      this.selected = {};
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(this.createCopy(event.previousContainer.data),
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  createCopy(data) {
    return JSON.parse(JSON.stringify(data));
  }

}
