import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperinmentComponent } from './experinment.component';

describe('ExperinmentComponent', () => {
  let component: ExperinmentComponent;
  let fixture: ComponentFixture<ExperinmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperinmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
