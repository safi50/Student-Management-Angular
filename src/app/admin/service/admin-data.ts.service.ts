import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminData {

  dataUrl: string = "http://localhost:3001/add";
  constructor(private http: HttpClient) { }

  addStudent(studentObj: Student): Observable<Student> {
    return this.http.post<Student>(this.dataUrl, studentObj);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.dataUrl);
  }

}
