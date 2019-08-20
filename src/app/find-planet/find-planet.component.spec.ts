import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPlanetComponent } from './find-planet.component';

describe('FindPlanetComponent', () => {
  let component: FindPlanetComponent;
  let fixture: ComponentFixture<FindPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
