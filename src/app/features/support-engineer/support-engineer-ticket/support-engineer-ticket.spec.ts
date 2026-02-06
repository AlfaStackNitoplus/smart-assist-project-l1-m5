import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportEngineerTicket } from './support-engineer-ticket';

describe('SupportEngineerTicket', () => {
  let component: SupportEngineerTicket;
  let fixture: ComponentFixture<SupportEngineerTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportEngineerTicket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportEngineerTicket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
