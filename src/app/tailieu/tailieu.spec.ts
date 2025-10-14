import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tailieu } from './tailieu';

describe('Tailieu', () => {
  let component: Tailieu;
  let fixture: ComponentFixture<Tailieu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tailieu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tailieu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
