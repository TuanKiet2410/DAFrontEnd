import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gocbame } from './gocbame';

describe('Gocbame', () => {
  let component: Gocbame;
  let fixture: ComponentFixture<Gocbame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gocbame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gocbame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
