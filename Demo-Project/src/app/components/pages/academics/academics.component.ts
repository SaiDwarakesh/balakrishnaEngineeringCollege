import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.scss'
})
export class AcademicsComponent {
  intermediateCourses = [
    { title: 'MPC', sub: 'Mathematics, Physics, Chemistry' },
    { title: 'BiPC', sub: 'Biology, Physics, Chemistry' },
    { title: 'CEC', sub: 'Commerce, Economics, Civics' }
  ];

  degreeCourses = [
    { name: 'B.Sc', spec: 'Maths, Physics, Computer Science' },
    { name: 'B.Sc', spec: 'Maths, Statistics, Computer Science' },
    { name: 'B.Sc', spec: 'Maths, Electronics, Computer Science' },
    { name: 'B.Sc', spec: 'Maths, Physics, Chemistry' },
    { name: 'B.Sc', spec: 'Maths, Chemistry, Computer Science' },
    { name: 'B.Sc', spec: 'Biotech, Botany, Chemistry' },
    { name: 'B.Sc', spec: 'Zoology, Biology, Chemistry' },
    { name: 'B.C.A', spec: 'Bachelor of Computer Applications' },
    { name: 'B.B.A', spec: 'Bachelor of Business Administration' },
    { name: 'B.Com', spec: 'Computers' },
    { name: 'B.A', spec: 'Politics, Economics, History' },
    { name: 'B.Sc (Honours)', spec: 'Computer Application' },
    { name: 'B.Sc (Honours)', spec: 'Chemistry' },
    { name: 'B.Sc (Honours)', spec: 'Computer Science' },
    { name: 'B.Sc (Honours)', spec: 'English' }
  ];

  higherCourses = [
    { name: 'M.Sc', spec: 'Organic Chemistry, Maths, Physics, Computer Science' },
    { name: 'M.Com', spec: '-' },
    { name: 'B.Ed', spec: 'Diploma in Education' }
  ];
}
