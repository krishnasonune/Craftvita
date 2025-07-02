import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicTemplate } from './classic-template';

describe('ClassicTemplate', () => {
  let component: ClassicTemplate;
  let fixture: ComponentFixture<ClassicTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
