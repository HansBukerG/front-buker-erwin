import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPAgeComponent } from './footer-page.component';

describe('FooterPAgeComponent', () => {
  let component: FooterPAgeComponent;
  let fixture: ComponentFixture<FooterPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
