import { Injectable } from '@angular/core';
// import rest services 
import {RestService} from './rest.service';
// import crud 
import  CRUD  from '../urls/urls';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
//inject rest service
  constructor(private rest:RestService) { }
  //create the function
  public getProducts():any{
    return this.rest.makeGetRequest(CRUD.Base_URL + "/fetch");
  };
};
