import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { first } from 'rxjs/operators';

import { Cocktail } from '../models/cocktail';
import { CocktailsService } from '../services/cocktails.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-cocktails-search',
  templateUrl: './cocktails-search.component.html',
  styleUrls: ['./cocktails-search.component.css'],
})
export class CocktailsSearchComponent implements OnInit {

  public isLoading;
  public isError;
  cocktails: any;
  drinks: Cocktail[] = [];
  chosenLanguage: string = "en";
  error: string = "Error...";
  first: boolean = true;  //to make sure no results alert doesnt appear on at the session start

  constructor(private cocktailsService: CocktailsService, private loadService: LoadService) {
    this.isLoading = this.loadService.isLoading;
    this.isError = this.loadService.isError;
   }

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

  language(lang: string){
    this.chosenLanguage=lang;
  }

  ngOnInit(): void {
  }

}
