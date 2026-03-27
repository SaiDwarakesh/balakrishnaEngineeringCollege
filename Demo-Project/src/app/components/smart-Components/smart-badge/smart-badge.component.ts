import { NgClass } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'smart-badge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './smart-badge.component.html',
  styleUrl: './smart-badge.component.css'
})
export class SmartBadgeComponent {
  @Input() weight = 'medium';
  @Input() size='default';
  @Input() Type='primary';
  @Input() round ='default';
  @Input() colorInversion:boolean=false;
  @Input() applyCustomColor:boolean=false;
  @Input() badgeBackgroundColor:any='#ffffff';
  @Input() badgeTextColor:any='#000000';
}
