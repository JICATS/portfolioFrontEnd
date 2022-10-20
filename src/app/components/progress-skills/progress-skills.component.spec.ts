import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSkillsComponent } from './progress-skills.component';

describe('ProgressSkillsComponent', () => {
  let component: ProgressSkillsComponent;
  let fixture: ComponentFixture<ProgressSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
