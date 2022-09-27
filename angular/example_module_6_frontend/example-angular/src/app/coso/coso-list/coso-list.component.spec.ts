import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosoListComponent } from './coso-list.component';

describe('CosoListComponent', () => {
  let component: CosoListComponent;
  let fixture: ComponentFixture<CosoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
