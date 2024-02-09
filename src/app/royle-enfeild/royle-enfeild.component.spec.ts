import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyleEnfeildComponent } from './royle-enfeild.component';

describe('RoyleEnfeildComponent', () => {
  let component: RoyleEnfeildComponent;
  let fixture: ComponentFixture<RoyleEnfeildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoyleEnfeildComponent]
    });
    fixture = TestBed.createComponent(RoyleEnfeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
