import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = [
    { icon: 'fa-map-marker', title: 'Address', detail1: 'SRK Plaza, NH5, Ongole -', detail2: '523001, AP, INDIA.' },
    { icon: 'fa-phone', title: 'Call Us', detail1: '+91 98482 46222', detail2: '' },
    { icon: 'fa-envelope', title: 'Email Us', detail1: 'info@balakrishnaengg.com', detail2: '' },
    { icon: 'fa-clock-o', title: 'Open Time', detail1: 'Mon - Sat (10:00AM - 05:30PM)', detail2: '' }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted', this.formData);
    alert('Message sent successfully!');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
