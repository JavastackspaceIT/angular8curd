import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  data: Student;
  constructor(
    public apiService: ApiService,
    public router: Router,
    private http: HttpClient
  ) {
    this.data = new Student();
  }
  ngOnInit() {
  }
  submitForm() {
   // this.getIMDBData();
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });
  }
}
