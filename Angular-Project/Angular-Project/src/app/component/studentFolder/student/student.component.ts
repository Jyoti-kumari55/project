import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList: any = [];
  showTable: boolean = true;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudentList();
  }

  getAllStudentList() {
    this.studentService.studentList().subscribe((result: any) => {
      this.studentList = result.Student;
      // console.log(this.studentList)
    })
  }

  // viewSelectedFolder(item: any) {
  //   this.showTable = false;
  //   console.log('view data', item)
  // }

}
