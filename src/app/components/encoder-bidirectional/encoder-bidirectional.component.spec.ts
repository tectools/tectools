import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoderBidirectionalComponent } from './encoder-bidirectional.component';

describe('EncoderBidirectionalComponent', () => {
  let component: EncoderBidirectionalComponent;
  let fixture: ComponentFixture<EncoderBidirectionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoderBidirectionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoderBidirectionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
