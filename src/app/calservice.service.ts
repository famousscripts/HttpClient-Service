import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalserviceService {

  constructor() { }
  // Calculating two values with add() method
  nunVal = [12, 14, 20, 30, 34, 43];

  myValues() {
    return "These numeric values are in array format and can be access through";
  }

}
