import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSomethingComponent } from './list-something.component';

describe('ListSomethingComponent', () => {
  let component: ListSomethingComponent;
  let fixture: ComponentFixture<ListSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
