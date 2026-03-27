import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTabComponent } from './smart-tab.component';

describe('SmartTabComponent', () => {
  let component: SmartTabComponent;
  let fixture: ComponentFixture<SmartTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
