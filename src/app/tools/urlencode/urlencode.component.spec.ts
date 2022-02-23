import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLEncodeComponent } from './urlencode.component';

describe('URLEncodeComponent', () => {
  let component: URLEncodeComponent;
  let fixture: ComponentFixture<URLEncodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URLEncodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(URLEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
