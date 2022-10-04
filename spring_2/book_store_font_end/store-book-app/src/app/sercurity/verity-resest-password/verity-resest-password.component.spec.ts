import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerityResestPasswordComponent } from './verity-resest-password.component';

describe('VerityResestPasswordComponent', () => {
  let component: VerityResestPasswordComponent;
  let fixture: ComponentFixture<VerityResestPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerityResestPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerityResestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
