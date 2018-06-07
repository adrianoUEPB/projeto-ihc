import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorListaComponent } from './servidor-lista.component';

describe('ServidorListaComponent', () => {
  let component: ServidorListaComponent;
  let fixture: ComponentFixture<ServidorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServidorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
