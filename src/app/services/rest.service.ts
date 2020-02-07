import { Injectable } from '@angular/core';
// import HttpClient
import{ HttpClient } from '@angular/common/http';
//import Observable
import{ Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestService {
// create the object to the http client
  constructor(private http:HttpClient) { }
  // create the function to make only get requests
  public makeGetRequest(url:string):Observable<any>{
    return this.http.get(url)
  };
  // create the function to make post request
  public makePostRequest(url:string, data:any):Observable<any>{
    return this.http.post(url,data)
  };
};

