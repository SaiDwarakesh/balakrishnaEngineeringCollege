import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBadgeComponent } from './smart-badge.component';

describe('SmartBadgeComponent', () => {
  let component: SmartBadgeComponent;
  let fixture: ComponentFixture<SmartBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
