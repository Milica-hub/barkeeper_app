import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

/**
 * Load service is used to show if something is loading/failed
 * @class LoadService
 */

@Injectable({
  providedIn: 'root'
})
export class LoadService {
/**
 * stores the loading state in boolean  
 * @memberof LoadService
 */
  isLoading = new Subject<boolean>();
/**
 * stores the error state in boolean  
 * @memberof LoadService
 */
  isError = new BehaviorSubject<boolean>(false);

  constructor() { }
/**
 * set the states to show loading  
 */
  show() {
    this.isLoading.next(true);
    this.isError.next(false);
  }
/**
 * set the states to show neither loading or error is happening  
 */
  hide() {
    this.isLoading.next(false);
    this.isError.next(false);
  }
 /**
 * set the states to show error happened  
 */
  fail() {
    this.isLoading.next(false);
    this.isError.next(true);
  }
}
