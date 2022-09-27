import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosoCreateComponent } from './coso-create.component';

describe('CosoCreateComponent', () => {
  let component: CosoCreateComponent;
  let fixture: ComponentFixture<CosoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
