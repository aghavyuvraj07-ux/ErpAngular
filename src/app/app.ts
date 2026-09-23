import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Courses } from './courses/courses';
import { Students } from './students/students';
import { Payments } from './payments/payments';

import { Course } from './services/course';
import { Student } from './services/student';
import { Payment } from './services/payment';

@Component({
  selector: 'app-root',
  imports: [Courses, Students, Payments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  courseCount = 0;
  studentCount = 0;
  paymentCount = 0;

  constructor(
    private courseService: Course,
    private studentService: Student,
    private paymentService: Payment,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({
      next: (data: any) => {
        this.courseCount = data.length;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Course Count Error:', error);
      }
    });

    this.studentService.getStudents().subscribe({
      next: (data: any) => {
        this.studentCount = data.length;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Student Count Error:', error);
      }
    });

    this.paymentService.getPayments().subscribe({
      next: (data: any) => {
        this.paymentCount = data.length;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Payment Count Error:', error);
      }
    });
  }
}