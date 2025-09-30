import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichKhaiGiang } from './lich-khai-giang';

describe('LichKhaiGiang', () => {
  let component: LichKhaiGiang;
  let fixture: ComponentFixture<LichKhaiGiang>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LichKhaiGiang]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LichKhaiGiang);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
