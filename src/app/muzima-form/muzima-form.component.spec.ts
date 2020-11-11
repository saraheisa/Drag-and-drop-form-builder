import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuzimaFormComponent } from './muzima-form.component';

describe('MuzimaFormComponent', () => {
  let component: MuzimaFormComponent;
  let fixture: ComponentFixture<MuzimaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuzimaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuzimaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
