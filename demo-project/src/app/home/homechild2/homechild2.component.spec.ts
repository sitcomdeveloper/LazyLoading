import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homechild2Component } from './homechild2.component';

describe('Homechild2Component', () => {
  let component: Homechild2Component;
  let fixture: ComponentFixture<Homechild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homechild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homechild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
