import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Student {

  private apiUrl = 'http://127.0.0.1:8000/api/students-api/';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(this.apiUrl);
  }
}