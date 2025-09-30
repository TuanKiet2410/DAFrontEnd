import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoaHoc } from './khoa-hoc';

describe('KhoaHoc', () => {
  let component: KhoaHoc;
  let fixture: ComponentFixture<KhoaHoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhoaHoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhoaHoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
