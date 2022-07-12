import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { Cocktail } from '../models/cocktail';
/**
 * Cocktails service is a http service to get data from cocktail API
 * @class CocktailsService
 */
@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
/**
 * Base API url
 * @memberof CocktailsService
 */
  private cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
/**
 * Creates instance of HttpClient
 */
  constructor(private http: HttpClient) { }
/**
 * get cocktails with names containing user's search term from api
 */  
  getSearchResults(s: string): Observable<Cocktail[]> {
    return this.http.get<any>(`${this.cocktailUrl}/search.php?s=${s}`);
  }
}
