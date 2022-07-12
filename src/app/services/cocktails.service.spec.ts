import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Cocktail } from '../models/cocktail';
import { CocktailsService } from './cocktails.service';

describe('CocktailsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let cocktailsService: CocktailsService;

  beforeEach(() => {
/*    TestBed.configureTestingModule({});
    cocktailsService = TestBed.inject(CocktailsService);
*/
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    cocktailsService = new CocktailsService(httpClientSpy);
  });

  it('should be created', () => {
    expect(cocktailsService).toBeTruthy();
  });

  it('should return expected cocktails (HttpClient called once)', (done: DoneFn) => {
    const expectedCocktails: Cocktail[] =
      [{ dateModified: 'd', idDrink: 1, strAlcoholic: 'alc', strCategory: 'cat', strCreativeCommonsConfirmed: 'no', strDrink: 'dr', strDrinkAlternate: 'alt', strDrinkThumb: 'hhg.jpg', strGlass: 'gl', strIBA: 'ib', strImageAttribution: 'ima', strImageSource: 'sor', strIngredient1: 'i', strIngredient2: 'i', strIngredient3: 'i', strIngredient4: 'i', strIngredient5: 'i', strIngredient6: 'i', strIngredient7: 'i', strIngredient8: 'i', strIngredient9: 'i', strIngredient10: 'i', strIngredient11: 'i', strIngredient12: 'i', strIngredient13: 'i', strIngredient14: 'i', strIngredient15: 'i', strInstructions: 'en', strInstructionsDE: 'de', strInstructionsES: 'es', strInstructionsFR: 'fr', strInstructionsIT: 'it', strMeasure1: 'm', strMeasure2: 'm', strMeasure3: 'm', strMeasure4: 'm', strMeasure5: 'm', strMeasure6: 'm', strMeasure7: 'm', strMeasure8: 'm', strMeasure9: 'm', strMeasure10: 'm', strMeasure11: 'm', strMeasure12: 'm', strMeasure13: 'm', strMeasure14: 'm', strMeasure15: 'm', strTags: 'tag', strVideo: 'vid' }, { dateModified: 'd', idDrink: 2, strAlcoholic: 'alc', strCategory: 'cat', strCreativeCommonsConfirmed: 'no', strDrink: 'ar', strDrinkAlternate: 'alt', strDrinkThumb: 'hhg.jpg', strGlass: 'gl', strIBA: 'ib', strImageAttribution: 'ima', strImageSource: 'sor', strIngredient1: 'i', strIngredient2: 'i', strIngredient3: 'i', strIngredient4: 'i', strIngredient5: 'i', strIngredient6: 'i', strIngredient7: 'i', strIngredient8: 'i', strIngredient9: 'i', strIngredient10: 'i', strIngredient11: 'i', strIngredient12: 'i', strIngredient13: 'i', strIngredient14: 'i', strIngredient15: 'i', strInstructions: 'en', strInstructionsDE: 'de', strInstructionsES: 'es', strInstructionsFR: 'fr', strInstructionsIT: 'it', strMeasure1: 'm', strMeasure2: 'm', strMeasure3: 'm', strMeasure4: 'm', strMeasure5: 'm', strMeasure6: 'm', strMeasure7: 'm', strMeasure8: 'm', strMeasure9: 'm', strMeasure10: 'm', strMeasure11: 'm', strMeasure12: 'm', strMeasure13: 'm', strMeasure14: 'm', strMeasure15: 'm', strTags: 'tag', strVideo: 'vid' }];

    httpClientSpy.get.and.returnValue(of(expectedCocktails));
  
    cocktailsService.getSearchResults('dr').subscribe({
      next: cocktails => {
        expect(cocktails)
          .withContext('expected cocktails')
          .toEqual(expectedCocktails);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
