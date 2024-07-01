import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portafolio3Component } from './portafolio-3.component';

describe('Portafolio3Component', () => {
  let component: Portafolio3Component;
  let fixture: ComponentFixture<Portafolio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Portafolio3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portafolio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
