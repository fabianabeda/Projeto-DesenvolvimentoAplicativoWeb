import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisUsuComponent } from './imoveis-usu.component';

describe('ImoveisUsuComponent', () => {
  let component: ImoveisUsuComponent;
  let fixture: ComponentFixture<ImoveisUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveisUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
