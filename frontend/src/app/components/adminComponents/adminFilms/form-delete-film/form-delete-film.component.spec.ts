import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteFilmComponent } from './form-delete-film.component';

describe('FormDeleteFilmComponent', () => {
  let component: FormDeleteFilmComponent;
  let fixture: ComponentFixture<FormDeleteFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeleteFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeleteFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
