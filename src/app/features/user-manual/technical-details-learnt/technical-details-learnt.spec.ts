import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDetailsLearnt } from './technical-details-learnt';

describe('TechnicalDetailsLearnt', () => {
  let component: TechnicalDetailsLearnt;
  let fixture: ComponentFixture<TechnicalDetailsLearnt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalDetailsLearnt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalDetailsLearnt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
