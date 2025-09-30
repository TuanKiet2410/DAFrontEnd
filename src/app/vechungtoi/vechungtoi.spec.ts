import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vechungtoi } from './vechungtoi';

describe('Vechungtoi', () => {
  let component: Vechungtoi;
  let fixture: ComponentFixture<Vechungtoi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vechungtoi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vechungtoi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
