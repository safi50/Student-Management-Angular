import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:3001';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }


  createStudent(student: Student) {
    return this.http.post(`${this.baseUrl}/add`, student, { headers: this.headers });
  }

  getStudents() {
    return this.http.get(`${this.baseUrl}/get`, { headers: this.headers });
  }

  updateStudent(student: Student) {
    return this.http.put(`${this.baseUrl}/update`, student, { headers: this.headers });
  }

  deleteStudent(_id: string) {
    return this.http.delete(`${this.baseUrl}/delete/${_id}`, { headers: this.headers });
  }




}


