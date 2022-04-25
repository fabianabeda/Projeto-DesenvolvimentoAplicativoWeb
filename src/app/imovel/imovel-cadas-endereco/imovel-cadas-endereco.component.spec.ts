import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelCadasEnderecoComponent } from './imovel-cadas-endereco.component';

describe('ImovelCadasEnderecoComponent', () => {
  let component: ImovelCadasEnderecoComponent;
  let fixture: ComponentFixture<ImovelCadasEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelCadasEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelCadasEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
