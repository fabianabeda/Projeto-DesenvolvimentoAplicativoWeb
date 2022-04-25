import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelCadasDescricaoComponent } from './imovel-cadas-descricao.component';

describe('ImovelCadasDescricaoComponent', () => {
  let component: ImovelCadasDescricaoComponent;
  let fixture: ComponentFixture<ImovelCadasDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelCadasDescricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelCadasDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
