import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }
  
  getSearchResults(s: string): Observable<Cocktail[]> {
    return this.http.get<any>(`${this.cocktailUrl}/search.php?s=${s}`);
  }
}
