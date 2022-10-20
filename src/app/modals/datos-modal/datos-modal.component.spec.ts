import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosModalComponent } from './datos-modal.component';

describe('DatosModalComponent', () => {
  let component: DatosModalComponent;
  let fixture: ComponentFixture<DatosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
