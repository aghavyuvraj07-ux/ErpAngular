import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Payment } from '../services/payment';

@Component({
  selector: 'app-payments',
  imports: [CommonModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css'
})
export class Payments implements OnInit {

  payments: any[] = [];

  constructor(
    private paymentService: Payment,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.paymentService.getPayments().subscribe({
      next: (data: any) => {
        this.payments = [...data];

        console.log('Payments:', this.payments);
        console.log('Payment Count:', this.payments.length);

        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('API Error:', error);
      }
    });
  }
}