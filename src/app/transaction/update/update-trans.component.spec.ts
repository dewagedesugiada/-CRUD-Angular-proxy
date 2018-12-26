import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransComponent } from './update-trans.component';

describe('UpdateTransComponent', () => {
  let component: UpdateTransComponent;
  let fixture: ComponentFixture<UpdateTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
