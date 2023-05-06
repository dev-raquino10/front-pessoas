import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPessoasComponent } from './editar-pessoas.component';

describe('EditarPessoasComponent', () => {
  let component: EditarPessoasComponent;
  let fixture: ComponentFixture<EditarPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
