import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolHeadComponent } from './tool-head.component';

describe('ToolHeadComponent', () => {
  let component: ToolHeadComponent;
  let fixture: ComponentFixture<ToolHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
