import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcryptComponent } from './bcrypt.component';

describe('BcryptComponent', () => {
  let component: BcryptComponent;
  let fixture: ComponentFixture<BcryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcryptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
