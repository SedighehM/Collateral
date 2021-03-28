import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiedbarComponent } from './siedbar.component';

describe('SiedbarComponent', () => {
  let component: SiedbarComponent;
  let fixture: ComponentFixture<SiedbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiedbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
