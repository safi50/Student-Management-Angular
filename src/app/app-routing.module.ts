import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/Components/dashboard/dashboard.component';
import { StudentTrainingsComponent } from './admin/Components/dashboard/student-trainings/student-trainings.component';
import { LoginComponent } from './admin/Components/login/login.component';
import { AdminGuard } from './service/admin.guard';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
      { path: 'update', component: StudentTrainingsComponent },
    ]
  },
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
