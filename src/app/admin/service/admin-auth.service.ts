import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


export interface admin {
  username: string;
  password: string;

}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  adminUsername: string = environment.adminUsername;
  adminPassword: string = environment.adminPassword;

  constructor(private http: HttpClient, private router: Router) { }



  //FOR ADMIN LOGIN
  adminLogin(username: string, password: string) {

    if (username === this.adminUsername && password === this.adminPassword) {
      console.log("Admin Login Successful");
      localStorage.setItem('token', (Math.random() + 1).toString(36).substring(7));
      this.router.navigate(['/admin/dashboard']);
    } else {
      console.log("Admin Login Failed");
      alert("Login Failed! Please try again");
      this.router.navigate(['/admin/login']);


    }

  }

  //TO CHECK IF ADMIN IS LOGGED IN
  adminLoggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }



}
