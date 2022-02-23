import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeJsonComponent } from './code-json.component';

describe('CodeJsonComponent', () => {
  let component: CodeJsonComponent;
  let fixture: ComponentFixture<CodeJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
