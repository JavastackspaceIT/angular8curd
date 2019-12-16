import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userregisteration',
  templateUrl: './userregisteration.component.html',
  styleUrls: ['./userregisteration.component.css']
})
export class UserregisterationComponent implements OnInit {
  userdata: any[];
  formGroup: FormGroup;
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  constructor(private userservice: UserService , private fb: FormBuilder) {
    this.formGroup = fb.group({
      firstName: ['', Validators.required],
      lastName: [],
      email: ['', Validators.required],
      address: this.fb.group({
        address1: ['', Validators.required],
        address2: []
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  ngOnInit() {
  }


  onSubmit() {
  //  console.log(this.formGroup.value);
  // tslint:disable-next-line:prefer-const
  this.userservice.getHeroes().subscribe(
    userdata => this.userdata = userdata
   );
  }
  get aliases() {
    return this.formGroup.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


}
