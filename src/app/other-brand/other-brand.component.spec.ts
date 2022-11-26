import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBrandComponent } from './other-brand.component';

describe('OtherBrandComponent', () => {
  let component: OtherBrandComponent;
  let fixture: ComponentFixture<OtherBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
