import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilmsComponent } from './table-films.component';

describe('TableFilmsComponent', () => {
  let component: TableFilmsComponent;
  let fixture: ComponentFixture<TableFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
