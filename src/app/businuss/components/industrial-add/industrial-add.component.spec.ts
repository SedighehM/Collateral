import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialAddComponent } from './industrial-add.component';

describe('IndustrialAddComponent', () => {
  let component: IndustrialAddComponent;
  let fixture: ComponentFixture<IndustrialAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
