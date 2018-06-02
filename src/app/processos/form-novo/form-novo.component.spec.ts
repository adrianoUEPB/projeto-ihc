import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovoComponent } from './form-novo.component';

describe('FormNovoComponent', () => {
  let component: FormNovoComponent;
  let fixture: ComponentFixture<FormNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
