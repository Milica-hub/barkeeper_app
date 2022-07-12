import { HttpClient } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { CocktailsService } from '../services/cocktails.service';

import { CocktailsSearchComponent } from './cocktails-search.component';

describe('CocktailsSearchComponent', () => {
  let component: CocktailsSearchComponent;
  let fixture: ComponentFixture<CocktailsSearchComponent>;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    await TestBed.configureTestingModule({
      declarations: [ CocktailsSearchComponent ],
      providers: [ {provide: HttpClient, useValue: httpClientSpy}]
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

  it("H1 tag should be Barkeeper", () => {
    var h1: HTMLElement = fixture.nativeElement.querySelector("h1");
    expect(h1.textContent).toEqual("Barkeeper");  
  })

  it('button search', () => {
    spyOn(component, 'search');
    component.search('d');
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('.search-button')).nativeElement.click();
    expect(component.search).toHaveBeenCalled();
  })

  it('should call remote api', fakeAsync((done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(1));
    component.search('t');
    expect(component.cocktails).toEqual(1);
    expect(httpClientSpy.get).toHaveBeenCalled();
    done;
  }));
});
