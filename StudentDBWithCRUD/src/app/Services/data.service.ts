import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'; 
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private angularfirestore: AngularFirestore) { }

  //add student field
  createStudent(student: Student){
student.id = this.angularfirestore.createId();
return this.angularfirestore.collection('/Students').add(student);
  }

  getAllStudents(){
    return this.angularfirestore.collection('/Students').snapshotChanges();
  }

  deleteStudent(student: Student){
    return this.angularfirestore.doc('/Students/' + student.id).delete();
  }
  updateStudent(student: Student){
    this.deleteStudent(student);
    this.createStudent(student);
  }
}
