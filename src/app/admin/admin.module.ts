import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StudentDataComponent } from './Components/dashboard/student-data/student-data.component';
import { StudentTrainingsComponent } from './Components/dashboard/student-trainings/student-trainings.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    StudentDataComponent,
    StudentTrainingsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
