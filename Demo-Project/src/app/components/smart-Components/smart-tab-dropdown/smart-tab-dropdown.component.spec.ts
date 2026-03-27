import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTabDropdownComponent } from './smart-tab-dropdown.component';

describe('SmartTabDropdownComponent', () => {
  let component: SmartTabDropdownComponent;
  let fixture: ComponentFixture<SmartTabDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartTabDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTabDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
