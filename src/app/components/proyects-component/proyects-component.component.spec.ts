import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsComponentComponent } from './proyects-component.component';

describe('ProyectsComponentComponent', () => {
  let component: ProyectsComponentComponent;
  let fixture: ComponentFixture<ProyectsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
