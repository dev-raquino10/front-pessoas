import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPessoasComponent } from './modal-pessoas.component';

describe('ModalPessoasComponent', () => {
  let component: ModalPessoasComponent;
  let fixture: ComponentFixture<ModalPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
