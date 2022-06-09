import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { StudentComponent } from './component/studentFolder/student/student.component';
import { FacultyComponent } from './component/faculty/faculty.component';
import { LibraryComponent } from './component/library/library.component';

import { CreateStudentComponent } from './component/studentFolder/create-student/create-student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'student', component: StudentComponent },

  { path: 'create-student', component: CreateStudentComponent },

  { path: 'faculty', component: FacultyComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'about', component: AboutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
