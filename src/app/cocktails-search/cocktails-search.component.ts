import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { first } from 'rxjs/operators';

import { Cocktail } from '../models/cocktail';
import { CocktailsService } from '../services/cocktails.service';
import { LoadService } from '../services/load.service';
/**
 * Component for search input and displaying search results
 * @class CocktailsSearchComponent
*/
@Component({
  selector: 'app-cocktails-search',
  templateUrl: './cocktails-search.component.html',
  styleUrls: ['./cocktails-search.component.css'],
})
export class CocktailsSearchComponent implements OnInit {
/**
 * stores the loading state in boolean  
 * @memberof CocktailsSearchComponent
 */
  public isLoading;
/**
 * stores the error state in boolean  
 * @memberof CocktailsSearchComponent
 */
  public isError;
/**
 * stores the data received from api via service  
 * @memberof CocktailsSearchComponent
 */
  cocktails: any;
/**
 * stores array of data from service to be used in ngFor  
 * @memberof CocktailsSearchComponent
 */
  drinks: Cocktail[] = [];
/**
 * stores the choice language in which recipes are displayed  
 * @memberof CocktailsSearchComponent
 */
  chosenLanguage: string = "en";
/**
 * stores the error status text for display   
 * @memberof CocktailsSearchComponent
 */
  error: string = "Error...";
/**
 * used only to make sure 'no results' message is not displayed before starting a search
 * @memberof CocktailsSearchComponent
 */
  first: boolean = true;  
  /**
 * Creates instances of cocktails service and load service and initialises loading and error subjects 
 */
  constructor(private cocktailsService: CocktailsService, private loadService: LoadService) {
    this.isLoading = this.loadService.isLoading;
    this.isError = this.loadService.isError;
   }
  /**
 * getting search results and deals with loading/error states
 */   
  search (term: string): void {
    this.first = false;
    this.loadService.show();
    this.cocktailsService.getSearchResults(term).pipe(first()).subscribe( data => {
      this.cocktails=data;
      this.drinks=this.cocktails.drinks;
      this.loadService.hide();
      },
      error => {
          this.loadService.fail();
          this.error=error.statusText;
      }
  )
  }
  /**
 * setting a chosen language for recipes
 */   
  language(lang: string){
    this.chosenLanguage=lang;
  }

  ngOnInit(): void {
  }

}
