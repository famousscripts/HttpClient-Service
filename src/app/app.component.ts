import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  // This is the service which can be accessable in other components

 constructor(private http: HttpClient) { }
  httpData;
  searchTearm = 2;
 ngOnInit(): void {

  // This data is subscribed in console
  // this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data => console.log(data))  

  // All data list will be displayed over here

   //this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(mydata => this.displayData(mydata));

   // Filtering pertcular 
   
   this.http.get('https://jsonplaceholder.typicode.com/todos?id='+this.searchTearm).pipe(map(res => res)).subscribe(data => this.displayDataone(data));

 }
 /*
 displayData(mysamedata) {
   this.httpData = mysamedata;
 } */
 displayDataone(mysamedata) {
  this.httpData = mysamedata;
}
     
}
