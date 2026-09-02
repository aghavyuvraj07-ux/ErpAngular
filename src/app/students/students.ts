import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../services/student';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements OnInit {

  students: any[] = [];

  constructor(
    private studentService: Student,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (data: any) => {
        this.students = data;
        console.log('Students:', this.students);
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Student API Error:', error);
      }
    });
  }
}