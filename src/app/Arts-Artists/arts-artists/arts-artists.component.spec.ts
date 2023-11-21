import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsArtistsComponent } from './arts-artists.component';

describe('ArtsArtistsComponent', () => {
  let component: ArtsArtistsComponent;
  let fixture: ComponentFixture<ArtsArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtsArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
