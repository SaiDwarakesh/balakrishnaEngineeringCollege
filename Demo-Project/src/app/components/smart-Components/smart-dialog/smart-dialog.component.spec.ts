import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDialogComponent } from './smart-dialog.component';

describe('SmartDialogComponent', () => {
  let component: SmartDialogComponent;
  let fixture: ComponentFixture<SmartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
