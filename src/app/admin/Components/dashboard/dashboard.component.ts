import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: boolean = false;
  trainings: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.showStudentData();
  }

  setOff() {
    this.students = false;
    this.trainings = false;
  }

  showStudentData() {
    this.setOff();
    this.students = true;
  }

  showStudentTrainings() {
    this.setOff();
    this.trainings = true;
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin/login']);

  }


}
