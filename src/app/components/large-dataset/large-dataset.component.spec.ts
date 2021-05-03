import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeDatasetComponent } from './large-dataset.component';

describe('LargeDatasetComponent', () => {
  let component: LargeDatasetComponent;
  let fixture: ComponentFixture<LargeDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeDatasetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
