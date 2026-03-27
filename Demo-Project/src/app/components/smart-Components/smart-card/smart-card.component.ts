import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'smart-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './smart-card.component.html',
  styleUrl: './smart-card.component.css'
})
export class SmartCardComponent {
  @Input() hoverType:string='';
  @Input() round = 'default';
  @Input() bgColor = 'white';
  @Input() border = 'default';
  @Input() boxShadow = 'default'
  enableBoxShadow : boolean = false;
  boxShadowHoverType : any;

  @Input('hoverShadow')
  set _hoverShadow(data :any){
    if(data != undefined){
      this.enableBoxShadow = true;
      this.boxShadowHoverType = data;
    }
  }
}
