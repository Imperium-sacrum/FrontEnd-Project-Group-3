import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portafolio1Component } from './portafolio-1.component';

describe('Portafolio1Component', () => {
  let component: Portafolio1Component;
  let fixture: ComponentFixture<Portafolio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Portafolio1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portafolio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
