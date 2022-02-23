import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdnsComponent } from './rdns.component';

describe('RdnsComponent', () => {
  let component: RdnsComponent;
  let fixture: ComponentFixture<RdnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
