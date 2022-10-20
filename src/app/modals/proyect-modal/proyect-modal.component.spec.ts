import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectModalComponent } from './proyect-modal.component';

describe('ProyectModalComponent', () => {
  let component: ProyectModalComponent;
  let fixture: ComponentFixture<ProyectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
