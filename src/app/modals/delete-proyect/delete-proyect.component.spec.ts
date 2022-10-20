import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProyectComponent } from './delete-proyect.component';

describe('DeleteProyectComponent', () => {
  let component: DeleteProyectComponent;
  let fixture: ComponentFixture<DeleteProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
