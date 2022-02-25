import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoderTwoInOneOutComponent } from './encoder-two-in-one-out.component';

describe('EncoderTwoInOneOutComponent', () => {
  let component: EncoderTwoInOneOutComponent;
  let fixture: ComponentFixture<EncoderTwoInOneOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoderTwoInOneOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoderTwoInOneOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
