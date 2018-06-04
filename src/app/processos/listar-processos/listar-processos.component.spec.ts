import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProcessosComponent } from './listar-processos.component';

describe('ListarProcessosComponent', () => {
  let component: ListarProcessosComponent;
  let fixture: ComponentFixture<ListarProcessosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProcessosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
