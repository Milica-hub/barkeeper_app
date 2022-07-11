import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  isLoading = new Subject<boolean>();
  isError = new BehaviorSubject<boolean>(false);

  constructor() { }

  show() {
    this.isLoading.next(true);
    this.isError.next(false);
  }
  hide() {
    this.isLoading.next(false);
    this.isError.next(false);
  }
  fail() {
    this.isLoading.next(false);
    this.isError.next(true);
  }
}
