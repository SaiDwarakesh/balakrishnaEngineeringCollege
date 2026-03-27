import { Component, EventEmitter, inject, Input, Output, output, TemplateRef,  } from '@angular/core';
import { NgClass, NgComponentOutlet, NgStyle, NgTemplateOutlet } from '@angular/common';
import { SmartCardComponent } from '../smart-card/smart-card.component';
import { DialogService } from '../../../services/dialog-service/dialog.service';

@Component({
  selector: 'lib-smart-dialog',
  standalone: true,
  imports: [NgTemplateOutlet, NgComponentOutlet, SmartCardComponent, NgStyle,NgClass],
  templateUrl: './smart-dialog.component.html',
  styleUrl: './smart-dialog.component.css'
})
export class SmartDialogComponent {
  @Input() content! :TemplateRef<any> | any;
  @Input() isTemplate : boolean = false;
  @Input() componentRef :any;
  @Output() onDialogClsoe : EventEmitter<any> = new EventEmitter<any>();
  @Input() backgroundNeed:boolean=true;

  componentInputs : any;
  index = 0;
  title: string = 'Dialog';
  dialogService = inject(DialogService)
  constructor() {
    
  }

  closeDialog(){
    this.dialogService.close(this.componentRef);
    this.onDialogClsoe.emit();
  }
}
