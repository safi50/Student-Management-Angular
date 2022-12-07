import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminData } from 'src/app/admin/service/admin-data.ts.service';
import { Student } from '../../../../model/student';
import { Router } from '@angular/router';

import { StudentService } from 'src/app/Shared/student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  studentList: Student[] = [];

  numStudents = 0;

  studentDetailsForm = new FormGroup({
    s_id: new FormControl(),
    s_name: new FormControl(),
    s_email: new FormControl(),
    s_password: new FormControl(),
    s_phone: new FormControl(),
    s_department: new FormControl()
  });

  updateStudentDetailsForm = new FormGroup({
    s_id: new FormControl(),
    s_name: new FormControl(),
    s_email: new FormControl(),
    s_password: new FormControl(),
    s_phone: new FormControl(),
    s_department: new FormControl()
  });




  studentObj: Student = {
    _id: '',
    name: '',
    email: '',
    password: '',
    phone: 0,
    department: ''
  }

  constructor(private fb: FormBuilder, private studentService: StudentService) { }


  getAllStudents() {
    this.studentService.getStudents().subscribe(
      (data: any) => {
        console.log(data);

        this.studentList = data['msg'];
        this.numStudents = this.studentList.length;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.studentDetailsForm = this.fb.group({
      s_id: ['', [Validators.required, CustomValidator.numeric, Validators.minLength(6), Validators.maxLength(6)]],
      s_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      s_email: ['', [Validators.required, Validators.email]],
      s_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      s_phone: ['', [Validators.required, CustomValidator.numeric, Validators.minLength(11), Validators.maxLength(11)]],
      s_department: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });


    this.getAllStudents();

  }

  onClose() {
    this.studentDetailsForm.reset();
  }

  addNewStudent() {
    console.log(this.studentDetailsForm.value);
    this.studentObj.name = this.studentDetailsForm.value.s_name;
    this.studentObj._id = this.studentDetailsForm.value.s_id;
    this.studentObj.email = this.studentDetailsForm.value.s_email;
    this.studentObj.password = this.studentDetailsForm.value.s_password;
    this.studentObj.phone = this.studentDetailsForm.value.s_phone;
    this.studentObj.department = this.studentDetailsForm.value.s_department;
    this.onClose();

    this.studentService.createStudent(this.studentObj).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
    this.getAllStudents();
    this.ngOnInit();


  }

  fillForm(student: Student) {
    this.studentObj = student;
    console.log(this.studentObj);

    this.studentDetailsForm.setValue({
      s_id: student._id,
      s_name: student.name,
      s_email: student.email,
      s_password: student.password,
      s_phone: student.phone,
      s_department: student.department
    });

  }

  updateStudent() {
    this.studentObj.name = this.studentDetailsForm.value.s_name;
    this.studentObj._id = this.studentDetailsForm.value.s_id;
    this.studentObj.email = this.studentDetailsForm.value.s_email;
    this.studentObj.password = this.studentDetailsForm.value.s_password;
    this.studentObj.phone = this.studentDetailsForm.value.s_phone;
    this.studentObj.department = this.studentDetailsForm.value.s_department;

    this.studentService.updateStudent(this.studentObj).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
    // this.onClose();
    this.getAllStudents();

  }

  delStudent(student: Student) {
    this.studentService.deleteStudent(student._id).subscribe(
      (data: any) => {
        console.log(data);
        var index = this.studentList.indexOf(student);
        this.studentList.splice(index, 1);
        this.numStudents -= 1;
      }
    )
    // this.getAllStudents();
  }







}





export class CustomValidator {
  // Number only validation
  static numeric(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

    return null;
  }
}