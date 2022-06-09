import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  Faculty!: FormGroup;
  submitted: boolean = false;

  course: any = [
    { name: 'C', value: 0 },
    { name: 'C++', value: 1 },
    { name: 'Java', value: 2 },
    { name: 'Python', value: 3 },
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.Faculty = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      course: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Faculty', this.Faculty.value);
  }

  selectCosurse(item: any) {
    console.log(item)
  }

}
