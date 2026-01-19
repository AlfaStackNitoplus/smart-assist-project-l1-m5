import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportEngineer } from './support-engineer';

describe('SupportEngineer', () => {
  let component: SupportEngineer;
  let fixture: ComponentFixture<SupportEngineer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportEngineer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportEngineer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
