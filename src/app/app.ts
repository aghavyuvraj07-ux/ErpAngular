import { Component } from '@angular/core';
import { Courses } from './courses/courses';
import { Students } from './students/students';
import { Payments } from './payments/payments';

@Component({
  selector: 'app-root',
  imports: [Courses, Students, Payments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}