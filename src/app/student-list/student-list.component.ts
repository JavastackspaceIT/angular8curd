import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsData: any;
  constructor(
    public apiService: ApiService
  ) {
    this.studentsData = [];
  }
  ngOnInit() {
    this.getAllStudents();
  }
  getAllStudents() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.studentsData = response;
    });
  }
  delete(item) {
    this.apiService.deleteItem(item.id).subscribe(Response => {
      this.getAllStudents();
    });
  }
}
