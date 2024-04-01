import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilmsComponent } from './admin-films.component';

describe('AdminFilmsComponent', () => {
  let component: AdminFilmsComponent;
  let fixture: ComponentFixture<AdminFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
