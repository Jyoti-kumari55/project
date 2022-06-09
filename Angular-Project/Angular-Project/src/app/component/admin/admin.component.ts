import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/Models/Admin';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm!: FormGroup;
  submitted: boolean = false;
  admin!: Admin;
  constructor(private fb: FormBuilder,private studentService:StudentService ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });    
  }

  onSubmit() {
    // this.submitted = true;
    // if (this.loginForm.invalid) {
    //   return;
    // }
    // else {
      console.log('login page', this.loginForm.value);
    // }
    //this.admin.username=this.loginForm.controls['username'].value;
    //this.admin.password=this.loginForm.controls['password'].value;
    let username=this.loginForm.controls['username'].value;
    let pass=this.loginForm.controls['password'].value;
    this.studentService.saveAdmin(username,pass).subscribe((data)=>
    {

    })
  }

}
