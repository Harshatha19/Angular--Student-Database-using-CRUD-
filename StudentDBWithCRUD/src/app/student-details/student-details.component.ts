import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
studentList: Student[] = [];
studentObj: Student  = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  mobile: ''
}
id:string = '';
first_name : string = '';
last_name: string = '';
email: string = '';
mobile: string = ''; 

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents(){
    this.dataservice.getAllStudents().subscribe(res => {
this.studentList = res.map((e:any) =>{ 
  const data = e.payload.doc.data();
data.id = e.payload.doc.id; 
return data; 
})
//  }, err => {
// alert('error while fetching data');
    })
  }

  resetForm(){
    this.id = '';
this.first_name  = '';
this.last_name = '';
this.email = '';
this.mobile = ''; 
  }
  addStudent(){
if(this.first_name == '' || this.last_name == '' || this.email == '' || this.mobile == ''){
  alert('Fill the details');
}
this.studentObj.id = '';
this.studentObj.email = this.email;
this.studentObj.first_name = this.first_name;
this.studentObj.last_name = this.last_name;

this.dataservice.createStudent(this.studentObj);
this.resetForm(); 
  }

  updatestudent(){

  }

  deleteStudent(student: Student) {
    this.dataservice.deleteStudent(student);  
  }
}
