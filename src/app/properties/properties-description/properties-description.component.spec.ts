import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDescriptionComponent } from './properties-description.component';

describe('PropertiesDescriptionComponent', () => {
  let component: PropertiesDescriptionComponent;
  let fixture: ComponentFixture<PropertiesDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
