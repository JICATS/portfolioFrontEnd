import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBasicComponent } from './datos-basic.component';

describe('DatosBasicComponent', () => {
  let component: DatosBasicComponent;
  let fixture: ComponentFixture<DatosBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
