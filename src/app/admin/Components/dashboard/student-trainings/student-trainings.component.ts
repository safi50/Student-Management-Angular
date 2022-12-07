import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../model/student';


@Component({
  selector: 'app-student-trainings',
  templateUrl: './student-trainings.component.html',
  styleUrls: ['./student-trainings.component.css']
})
export class StudentTrainingsComponent {

  studentDetailsForm = new FormGroup({
    u_id: new FormControl(),
    u_name: new FormControl(),
    u_email: new FormControl(),
    u_password: new FormControl(),
    u_phone: new FormControl(),
    u_department: new FormControl()
  });



  studentObj: Student = {
    _id: '',
    name: '',
    email: '',
    password: '',
    phone: 0,
    department: ''
  }

  constructor(private fb: FormBuilder) { }




  updateStudent(student: Student) {


  }

  fillForm(student: Student) {
    this.studentDetailsForm.setValue({
      u_id: student._id,
      u_name: student.name,
      u_email: student.email,
      u_password: student.password,
      u_phone: student.phone,
      u_department: student.department
    });
  }


}
