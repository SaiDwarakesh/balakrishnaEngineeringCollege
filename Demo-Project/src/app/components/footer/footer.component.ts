import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
  icon?: string;
}

interface SocialLink {
  name: string;
  url: string;
  svgPath: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  collegeInfo = {
    name: 'Balakrishna Engineering College',
    approvals: [
      'Government of Andhra Pradesh',
      'Affiliated to JNTUK',
      'Accredited by NAAC'
    ],
    location: 'Ongole, Andhra Pradesh',
    phone: '+91 98482 46222',
    email: 'info@balakrishnaengg.com'
  };

  quickLinks: FooterLink[] = [
    { label: 'Home', route: '/', icon: 'assets/icons/nav/home.png' },
    { label: 'About Institution', route: '/about', icon: 'assets/icons/nav/about.png' },
    { label: 'Colleges', route: '/colleges', icon: 'assets/icons/nav/colleges.png' },
    { label: 'Academics', route: '/academics', icon: 'assets/icons/nav/academics.png' },
    { label: 'Admissions', route: '/admissions', icon: 'assets/icons/nav/admissions.png' },
    { label: 'Placements', route: '/placements', icon: 'assets/icons/nav/placements.png' }
  ];

  departments: string[] = [
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Electronics Engineering',
    'Computer Engineering'
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      svgPath: 'M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      svgPath: 'M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.016-.637A10.025 10.025 0 0 0 24 4.557z'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      svgPath: 'M23.498 6.186a2.94 2.94 0 0 0-2.07-2.078C19.58 3.6 12 3.6 12 3.6s-7.58 0-9.428.508a2.94 2.94 0 0 0-2.07 2.078C0 8.042 0 12 0 12s0 3.958.502 5.814a2.94 2.94 0 0 0 2.07 2.078C4.42 20.4 12 20.4 12 20.4s7.58 0 9.428-.508a2.94 2.94 0 0 0 2.07-2.078C24 15.958 24 12 24 12s0-3.958-.502-5.814zM9.6 15.568V8.432L15.818 12 9.6 15.568z'
    }
  ];

  currentYear = new Date().getFullYear();
}
