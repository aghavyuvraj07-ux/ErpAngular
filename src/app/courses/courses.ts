import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../services/course';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses implements OnInit {

  courses: any[] = [];

  constructor(
    private courseService: Course,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data: any) => {
        this.courses = data;
        console.log('Courses:', this.courses);
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('API Error:', error);
      }
    });
  }
}