import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Course {

  private apiUrl = 'http://127.0.0.1:8000/api/courses-api/';

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get(this.apiUrl);
  }
}