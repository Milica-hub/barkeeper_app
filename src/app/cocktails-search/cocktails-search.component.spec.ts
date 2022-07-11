import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsSearchComponent } from './cocktails-search.component';

describe('CocktailsSearchComponent', () => {
  let component: CocktailsSearchComponent;
  let fixture: ComponentFixture<CocktailsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
