import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorCadastroComponent } from './servidor-cadastro.component';

describe('ServidorCadastroComponent', () => {
  let component: ServidorCadastroComponent;
  let fixture: ComponentFixture<ServidorCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServidorCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
