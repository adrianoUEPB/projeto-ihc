import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPesquisarComponent } from './form-pesquisar.component';

describe('FormPesquisarComponent', () => {
  let component: FormPesquisarComponent;
  let fixture: ComponentFixture<FormPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPesquisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
