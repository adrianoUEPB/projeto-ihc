import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateServidorFormComponent } from './template-servidor-form.component';

describe('TemplateServidorFormComponent', () => {
  let component: TemplateServidorFormComponent;
  let fixture: ComponentFixture<TemplateServidorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateServidorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateServidorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
