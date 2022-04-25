import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelCadasComodosComponent } from './imovel-cadas-comodos.component';

describe('ImovelCadasComodosComponent', () => {
  let component: ImovelCadasComodosComponent;
  let fixture: ComponentFixture<ImovelCadasComodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelCadasComodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelCadasComodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
