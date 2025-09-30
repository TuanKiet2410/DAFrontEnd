import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eror } from './eror';

describe('Eror', () => {
  let component: Eror;
  let fixture: ComponentFixture<Eror>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eror]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eror);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
