import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateFilmComponent } from './form-create-film.component';

describe('FormCreateFilmComponent', () => {
  let component: FormCreateFilmComponent;
  let fixture: ComponentFixture<FormCreateFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreateFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
