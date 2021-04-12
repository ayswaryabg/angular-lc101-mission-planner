import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperinmentsComponent } from './experinments.component';

describe('ExperinmentsComponent', () => {
  let component: ExperinmentsComponent;
  let fixture: ComponentFixture<ExperinmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperinmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
