import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule   // ✅ IMPORTANT
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  enquiryForm!: FormGroup;
  successMsg = '';
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private enquiryService: EnquiryService
  ) {
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submitEnquiry() {
    if (this.enquiryForm.invalid) return;

    this.enquiryService.sendEnquiry(this.enquiryForm.value).subscribe({
      next: () => {
        this.successMsg = 'Enquiry sent successfully!';
        this.enquiryForm.reset();
      },
      error: () => {
        this.errorMsg = 'Something went wrong. Please try again.';
      }
    });
  }
}
