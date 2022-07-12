import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Subject } from 'rxjs';

import { LoadService } from './load.service';

describe('LoadService', () => {
  let load: Subject<boolean>;
  let err: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  let service: LoadService;

  beforeEach(() => {
    load = new Subject();
    
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call show', (done) => {
    service.show();
    load.subscribe(() => {
      expect(true).toBe(true);
      done();
    })
    err.subscribe(() => {
      expect(false).toBe(false);
      done();
    })
  })
  it('should call hide', (done) => {
    service.hide();
    load.subscribe(() => {
      expect(false).toBe(false);
      done();
    })
    err.subscribe(() => {
      expect(false).toBe(false);
      done();
    })
  })
  it('should call fail', (done) => {
    service.fail();
    load.subscribe(() => {
      expect(false).toBe(false);
      done();
    })
    err.subscribe(() => {
      expect(true).toBe(true);
      done();
    })
  })
});
