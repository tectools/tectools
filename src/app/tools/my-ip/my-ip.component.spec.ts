import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIPComponent } from './my-ip.component';

describe('MyIPComponent', () => {
  let component: MyIPComponent;
  let fixture: ComponentFixture<MyIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
