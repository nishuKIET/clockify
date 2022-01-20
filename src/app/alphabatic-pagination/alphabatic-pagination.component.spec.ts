import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabaticPaginationComponent } from './alphabatic-pagination.component';

describe('AlphabaticPaginationComponent', () => {
  let component: AlphabaticPaginationComponent;
  let fixture: ComponentFixture<AlphabaticPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabaticPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabaticPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
