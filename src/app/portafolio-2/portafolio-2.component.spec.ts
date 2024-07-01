import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portafolio2Component } from './portafolio-2.component';

describe('Portafolio2Component', () => {
  let component: Portafolio2Component;
  let fixture: ComponentFixture<Portafolio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Portafolio2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portafolio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
