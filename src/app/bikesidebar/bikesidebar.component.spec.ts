import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesidebarComponent } from './bikesidebar.component';

describe('BikesidebarComponent', () => {
  let component: BikesidebarComponent;
  let fixture: ComponentFixture<BikesidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikesidebarComponent]
    });
    fixture = TestBed.createComponent(BikesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
