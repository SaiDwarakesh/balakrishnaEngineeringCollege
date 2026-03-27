import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SmartTabComponent } from '../smart-tab/smart-tab.component';
import { SmartTabDropdownComponent } from '../smart-tab-dropdown/smart-tab-dropdown.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { SmartBadgeComponent } from '../smart-badge/smart-badge.component';
import { NavService } from '../../../services/nav-service/nav-service.service';
import { SmartTooltip } from '../../../directives/smart-tooltip/tooltip.directive';


@Component({
  selector: 'smart-tab-group',
  standalone: true,
  imports: [
    SmartTabComponent,
    SmartTabDropdownComponent,
    RouterLink,
    NgClass,
    NgTemplateOutlet,
    SmartTooltip,
    SmartBadgeComponent,
  ],
  templateUrl: './smart-tab-group.component.html',
})
export class SmartTabGroupComponent {

  @ContentChildren('SmartTab', { read: TemplateRef }) TabTemplate!: QueryList<TemplateRef<any>>;

  tabs: any;
  canScrollLeft = false;
  canScrollRight = false;
  showNavButtons = false;
  currentParams: any;
  overFlowStatus:any;
  @Input() size: string = 'default';

  @ViewChild('tabsWrapper') tabsWrapper!: ElementRef<HTMLDivElement>;
  @Input() routing = false;

  @Input("tabs")
  set _tabs(data: any) {
    this.tabs = data;
    setTimeout(() => {
      this.checkOverflow();
    }, 100);
  }

  @Input() selectedTabIndex = 0;
  @Input() selectedSubTabIndex : number | null = null;
  @Output() selectedTabIndexChange = new EventEmitter<number>();
  @Output() selectedSubTabIndexChange = new EventEmitter<number>();
  @Input('checkOverFlow')
  set _checkOverFlow(data:any){
    if(data){
      this.checkOverflow();
    }
  }


  @HostListener('window:resize')
  onResize(): void {
    this.checkOverflow();
  }

  constructor(private route: Router, private cdr: ChangeDetectorRef, private navService: NavService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.currentParams = params; // Store current params
      // this.selectedTabIndex = this.currentParams['selectedTabIndex']
    });

  }
  ngOnInit() {
     setTimeout(() => {
      this.checkOverflow();
    }, 1000);
  }



  ngAfterViewInit(): void {

    this.navService.value$.subscribe(value => {
      setTimeout(() => {
        this.checkOverflow();
      }, 300)
    });
    setTimeout(() => {
      this.checkOverflow();
    }, 1000);

    this.cdr.detectChanges();

    this.getActiveTabVisible()
  }

  setIndex(idx: number) {
    this.selectedTabIndex = idx;
    // this.setQueryParams();

    // this.tabs.forEach((tab: any, index: number) => {
    //   if (this.route.url == tab.route) {
    //     this.selectedTabIndex = index;
    //   }
    //   else if (this.route.url.includes(tab.route) && tab.subTabs) {
    //     tab.subTabs.forEach((subTab: any) => {
    //       if (this.route.url == subTab.route) {
    //         this.selectedTabIndex = index;
    //       }
    //     })
    //   }
    // });

    this.selectedTabIndexChange.emit(this.selectedTabIndex);
  }

  // setQueryParams(){
  //   this.route.navigate([], {
  //     queryParams: { selectedTabIndex: this.selectedTabIndex },
  //     queryParamsHandling: 'merge',
  //   });
  // }

  checkOverflow() {
    const wrapper = this.tabsWrapper.nativeElement;
    this.showNavButtons = wrapper.scrollWidth > wrapper.clientWidth;
    this.updateScrollButtons();
    this.cdr.detectChanges();

  }

  updateScrollButtons() {
    const wrapper = this.tabsWrapper.nativeElement;
    this.canScrollLeft = wrapper.scrollLeft > 0 ? true : false;
    this.canScrollRight = wrapper.scrollLeft + 1 < (wrapper.scrollWidth - wrapper.clientWidth);
    this.cdr.detectChanges();
  }

  scrollLeft(): void {
    this.tabsWrapper.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(() => {
      this.updateScrollButtons();
    }, 300)

  }

  scrollRight(): void {
    this.tabsWrapper.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(() => {
      this.updateScrollButtons();
    }, 500)
  }

  getActiveTabVisible() {

  }

  setSubTabIndex(subTabIndex: number, tabIndex:number) {
    if (subTabIndex !=-1) {
      this.selectedSubTabIndexChange.emit(subTabIndex);
      this.setIndex(tabIndex)


    }
  }
}
