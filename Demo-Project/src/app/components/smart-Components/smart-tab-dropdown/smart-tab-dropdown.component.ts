import { NgClass } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink,  } from '@angular/router';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'smart-tab-dropdown',
  standalone: true,
  imports: [NgClass, RouterLink, SatPopoverModule],
  templateUrl: './smart-tab-dropdown.component.html',
  styleUrl: './smart-tab-dropdown.component.css'
})
export class SmartTabDropdownComponent {

  subTabs : any;
  dropdown : boolean = false;
  closeTimeOut:any;
  isMouseInPopover:boolean = false;
  currentParams:any;
  selectedSubTabIndex: number | null = null;

  @ViewChild('popover') popover: any;
  @Input() selected = false;
  @Input('selectedSubTabIndex')  set _selectedSubTabIndex(data:any)
  {
    this.selectedSubTabIndex = data;
    if(this.selectedSubTabIndex)
    {
      this.selectedTabIndex = this.selectedSubTabIndex;
    }
    else
    {
      this.selectedTabIndex = this.subTabs.findIndex((tab:any)=> this.route.url.includes(tab.route) );
    }
  }
  @Output() tabChange =  new EventEmitter();
  selectedTabIndex: number = -1;
  @Input() size: string = 'default'; 

  @Input("subTabs") 
  set _subTabs(data:any){
    this.subTabs = data;
    this.setIndex();
  }
  isHoverEnabled = true;
  private routeSubscription!: Subscription;
  ngOnInit(){
    this.isHoverEnabled = window.innerWidth > 640; 
  //   this.routeSubscription = this.route.events.subscribe((event:any)=>{
  //     if(event as NavigationEnd){
  //       this.setIndex();
  //     // }
  //   }
  // });

  this.setIndex();
}

  constructor(private route: Router, private activatedRoute:ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentParams = params; 

    });
  }

  setIndex(){
    if(this.selectedSubTabIndex)
    {
      this.selectedTabIndex = this.selectedSubTabIndex;
    }
    else
    {
      this.selectedTabIndex = this.subTabs.findIndex((tab:any)=> this.route.url.includes(tab.route) );
    }
    this.tabChanged(this.selectedTabIndex);
  }

  tabChanged(index:any){
    this.selectedTabIndex = index
    this.tabChange.emit(this.selectedTabIndex);
  }

  onTriggerMouseLeave(){
    this.closeTimeOut = setTimeout(() => {
      if (!this.isMouseInPopover) {
        this.closePopOver();
      }
    }, 200);
  }

  closePopOver(){
    this.popover.close();
  }

  onMouseEntered(){
    clearTimeout(this.closeTimeOut);
    this.isMouseInPopover=true;
  }

  onMouseLeave() {
    this.isMouseInPopover=false;
    this.closeTimeOut = setTimeout(()=>{
      if(!this.isMouseInPopover){
        this.closePopOver();
      }
    },200)
  }

  onTriggerMouseEnter(){
    if(this.popover.isOpen()){
      clearTimeout(this.closeTimeOut);
      this.isMouseInPopover=false;
    }
    else{
      this.popover.open();
    }
  }
}
