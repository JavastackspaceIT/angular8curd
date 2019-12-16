import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id: number;
  data: Student;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Student();
  }
  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }
  update() {
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['list']);
    });
  }
}
