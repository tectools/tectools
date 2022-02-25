import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLQueryParserComponent } from './urlquery-parser.component';

describe('URLQueryParserComponent', () => {
  let component: URLQueryParserComponent;
  let fixture: ComponentFixture<URLQueryParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URLQueryParserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(URLQueryParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
