import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryVnComponent } from './literary-vn.component';

describe('LiteraryVnComponent', () => {
  let component: LiteraryVnComponent;
  let fixture: ComponentFixture<LiteraryVnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteraryVnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteraryVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
