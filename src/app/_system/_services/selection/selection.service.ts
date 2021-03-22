import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  totalRecords$: BehaviorSubject<number> = new BehaviorSubject(0);
  selectionMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  selectedRecords$: BehaviorSubject<string> = new BehaviorSubject('default');

  constructor() { }
}
