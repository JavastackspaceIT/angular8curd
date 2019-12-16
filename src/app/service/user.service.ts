import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
   public user: any[];

  getHeroes(): Observable<any[]> {
      this.user = [1, 2, 4, 5, 6];
     // tslint:disable-next-line:align
     return of(this.user);
  }
}
