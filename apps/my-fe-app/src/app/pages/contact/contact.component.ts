import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="page-container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <span class="material-icons">location_on</span>
            <div>
              <h3>Address</h3>
              <p>123 Business Ave, Suite 100<br>New York, NY 10001</p>
            </div>
          </div>
          
          <div class="info-item">
            <span class="material-icons">phone</span>
            <div>
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>
          
          <div class="info-item">
            <span class="material-icons">email</span>
            <div>
              <h3>Email</h3>
              <p>{{"contact@example.com"}}</p>
            </div>
          </div>
          
          <div class="info-item">
            <span class="material-icons">schedule</span>
            <div>
              <h3>Business Hours</h3>
              <p>Mon - Fri: 9AM - 5PM<br>Sat - Sun: Closed</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h2>Send Us a Message</h2>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                formControlName="name" 
                placeholder="Your name"
              >
              @if (formSubmitted && contactForm.get('name')?.hasError('required')) {
                <div class="error-message">Name is required</div>
              }
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                formControlName="email" 
                placeholder="Your email"
              >
              @if (formSubmitted && contactForm.get('email')?.hasError('required')) {
                <div class="error-message">Email is required</div>
              }
              @if (formSubmitted && contactForm.get('email')?.hasError('email')) {
                <div class="error-message">Please enter a valid email</div>
              }
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                formControlName="subject" 
                placeholder="Subject"
              >
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                formControlName="message" 
                rows="5" 
                placeholder="Your message"
              ></textarea>
              @if (formSubmitted && contactForm.get('message')?.hasError('required')) {
                <div class="error-message">Message is required</div>
              }
            </div>
            
            <button type="submit" class="submit-button">Send Message</button>
            
            @if (messageSent) {
              <div class="success-message">
                Your message has been sent! We'll get back to you soon.
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      color: #ff69b4;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .contact-content {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
    
    .contact-info {
      flex: 1;
      min-width: 300px;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
    
    .info-item .material-icons {
      font-size: 2rem;
      color: #ff69b4;
      margin-right: 1rem;
      flex-shrink: 0;
    }
    
    .info-item h3 {
      margin: 0 0 0.5rem 0;
      color: #333;
    }
    
    .info-item p {
      margin: 0;
      text-align: left;
      font-size: 1rem;
    }
    
    .contact-form {
      flex: 2;
      min-width: 300px;
      padding: 2rem;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
    
    .contact-form h2 {
      color: #ff69b4;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    input, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: #ff69b4;
    }
    
    .submit-button {
      display: block;
      width: 100%;
      padding: 0.75rem;
      background-color: #ff69b4;
      color: white;
      border: none;
      border-radius: 4px;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .submit-button:hover {
      background-color: #e0509e;
    }
    
    .error-message {
      color: #d9534f;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    
    .success-message {
      margin-top: 1rem;
      padding: 1rem;
      background-color: #dff0d8;
      color: #3c763d;
      border-radius: 4px;
      text-align: center;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  messageSent = false;
  
  
  constructor(private fb: FormBuilder,private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }
  
  onSubmit() {
    this.formSubmitted = true;
    
    if (this.contactForm.valid) {
      // In a real application, you would send the form data to a server here
      this.contactService.sendContactMessage(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.messageSent = true;
          this.contactForm.reset();
          this.formSubmitted = false;
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        }
      });
      
      // Simulate successful form submission
  }
}
}