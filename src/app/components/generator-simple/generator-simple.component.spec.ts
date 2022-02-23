import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorSimpleComponent } from './generator-simple.component';

describe('GeneratorSimpleComponent', () => {
  let component: GeneratorSimpleComponent;
  let fixture: ComponentFixture<GeneratorSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
