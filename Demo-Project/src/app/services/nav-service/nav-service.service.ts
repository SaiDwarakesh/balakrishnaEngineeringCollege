import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private valueSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public value$: Observable<boolean> = this.valueSubject.asObservable();

  navExpanded = true;

  constructor() {
    window.addEventListener("resize",()=>{
      if(window.innerWidth < 1024){
        this.closeSidenav();
      }
      else{
        if(this.navExpanded){
          this.expandNav()
        }
        else{
          this.shrinkSideNav();
        }
        
      }
    });

    if(window.innerWidth < 1024){
      if(this.navExpanded){
        this.closeSidenav();
      }
    }
  }
  

  setValue(newValue: boolean) {
    this.valueSubject.next(newValue);   
  }

  toggleSideNav(){
    if(window.innerWidth >= 1024){
      if(!this.navExpanded){
        this.expandNav();
      }
      else{
        this.shrinkSideNav();
      }
    }
    else{
      this.openSideNav();
    }
  }

  expandNav(){
    document.documentElement.style.setProperty('--sidebar-width', '17.5rem');
    document.documentElement.style.setProperty('--nav-padding', '17.5rem');
    this.setValue(true);
    this.navExpanded = true;
  }

  shrinkSideNav(){
    document.documentElement.style.setProperty('--sidebar-width', '5rem');
    document.documentElement.style.setProperty('--nav-padding', '5rem');
    this.setValue(false);
    this.navExpanded = false;
  }

  hoverSideNav(){
    if(!this.navExpanded){
      document.documentElement.style.setProperty('--sidebar-width', '17.5rem');
    }
  }

  leaveSideNav(){
    if(!this.navExpanded){
      document.documentElement.style.setProperty('--sidebar-width', '5rem');
    }
  }

  closeSidenav(){
    document.documentElement.style.setProperty('--sidebar-width', '0px');
    document.documentElement.style.setProperty('--nav-padding', '0px');
    this.setValue(false);
  }

  openSideNav(){
    document.documentElement.style.setProperty('--sidebar-width', '17.5rem');
    this.setValue(true);
  }
}
