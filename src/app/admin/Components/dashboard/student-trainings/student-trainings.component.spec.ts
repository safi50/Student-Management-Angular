import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTrainingsComponent } from './student-trainings.component';

describe('StudentTrainingsComponent', () => {
  let component: StudentTrainingsComponent;
  let fixture: ComponentFixture<StudentTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
