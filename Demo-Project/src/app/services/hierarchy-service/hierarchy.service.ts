import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HierarchyService {

  private valueSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public showHierarchyIcon: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public value$: Observable<boolean> = this.valueSubject.asObservable();

  hierarchyExpanded = true;

  constructor() { 

  }

  ngOnInit(){
    window.addEventListener("resize",()=>{
      if(window.innerWidth < 1024 && this.hierarchyExpanded){
        this.closeHierarchy();
      }
    })

    if(window.innerWidth < 1024){
      if(this.hierarchyExpanded){
        this.closeHierarchy();
      }
    }
  }

  setValue(newValue: boolean) {
    this.valueSubject.next(newValue);
  }

  closeHierarchy() {
    this.setValue(false);
  }

  openHierarchy() {
    this.setValue(true);
  }
  showHierarchy(){
    this.showHierarchyIcon.next(true);
  }

  hideHierarchy(){
    this.showHierarchyIcon.next(false);
  }

}
