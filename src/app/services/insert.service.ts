import { Injectable } from '@angular/core';
import { RestService } from "./rest.service";
import CRUD from '../urls/urls';
 
@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private rest:RestService) { }
  public insertProduct(data:any):any{
    // where data is the JSON object 
    //  data contains @p_id @p_name @p_cost
    // data coming from component
    // component reciving data from view
    return this.rest.makePostRequest(CRUD.Base_URL + "/insert",data);
  };
};
