import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransComponent } from './create-trans.component';

describe('CreateTransComponent', () => {
  let component: CreateTransComponent;
  let fixture: ComponentFixture<CreateTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
