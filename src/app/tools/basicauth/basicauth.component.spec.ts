import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicauthComponent } from './basicauth.component';

describe('BasicauthComponent', () => {
  let component: BasicauthComponent;
  let fixture: ComponentFixture<BasicauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
