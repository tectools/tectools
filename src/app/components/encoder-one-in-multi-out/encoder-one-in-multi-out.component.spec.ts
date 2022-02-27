import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoderOneInMultiOutComponent } from './encoder-one-in-multi-out.component';

describe('EncoderOneInMultiOutComponent', () => {
  let component: EncoderOneInMultiOutComponent;
  let fixture: ComponentFixture<EncoderOneInMultiOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoderOneInMultiOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoderOneInMultiOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
