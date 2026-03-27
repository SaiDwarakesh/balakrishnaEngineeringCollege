import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-colleges',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './colleges.component.html',
  styleUrl: './colleges.component.scss'
})
export class CollegesComponent {}
