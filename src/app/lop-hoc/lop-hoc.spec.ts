import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopHoc } from './lop-hoc';

describe('LopHoc', () => {
  let component: LopHoc;
  let fixture: ComponentFixture<LopHoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LopHoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LopHoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
