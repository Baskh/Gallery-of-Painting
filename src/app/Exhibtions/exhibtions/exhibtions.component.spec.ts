import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibtionsComponent } from './exhibtions.component';

describe('ExhibtionsComponent', () => {
  let component: ExhibtionsComponent;
  let fixture: ComponentFixture<ExhibtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibtionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
