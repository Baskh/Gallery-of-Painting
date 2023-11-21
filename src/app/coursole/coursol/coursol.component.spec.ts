import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursolComponent } from './coursol.component';

describe('CoursolComponent', () => {
  let component: CoursolComponent;
  let fixture: ComponentFixture<CoursolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
