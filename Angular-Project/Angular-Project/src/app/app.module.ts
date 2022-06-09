import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';

import { StudentComponent } from './component/studentFolder/student/student.component';
import { CreateStudentComponent } from './component/studentFolder/create-student/create-student.component';

import { FacultyComponent } from './component/faculty/faculty.component';
import { LibraryComponent } from './component/library/library.component';
import { AboutComponent } from './component/about/about.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Configuration } from '../configuration';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';

import { EditBookComponent } from './component/library/book/edit-book/edit-book.component';
import { ViewBookComponent } from './component/library/book/view-book/view-book.component';
import { AddBookComponent } from './component/library/book/add-book/add-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent,
    FacultyComponent,
    LibraryComponent,
    AboutComponent,
    CreateStudentComponent,
    LoginComponent,
  AddBookComponent,
    EditBookComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[  Configuration, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
