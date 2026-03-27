import { NgClass } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'smart-tab',
  standalone: true,
  imports: [NgClass],
  templateUrl: './smart-tab.component.html',
  styleUrl: './smart-tab.component.css'
})
export class SmartTabComponent {
  @Input() selected = false;
  @Input() size: string = 'default'; 
  @Input() disableStatus =false;
  isHoverEnabled = true;

  ngOnInit() {
    this.isHoverEnabled = window.innerWidth > 640; 
  }
}
