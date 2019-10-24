import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserPagePage } from './new-user-page.page';

describe('NewUserPagePage', () => {
  let component: NewUserPagePage;
  let fixture: ComponentFixture<NewUserPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
