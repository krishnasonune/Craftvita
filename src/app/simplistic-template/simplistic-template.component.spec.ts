import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplisticTemplateComponent } from './simplistic-template.component';

describe('SimplisticTemplateComponent', () => {
  let component: SimplisticTemplateComponent;
  let fixture: ComponentFixture<SimplisticTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimplisticTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplisticTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
