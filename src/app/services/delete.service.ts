import { Injectable } from '@angular/core';
import { RestService } from "./rest.service";
import CRUD from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private rest:RestService) { }
  public deleteProduct(data:any):any{
    return this.rest.makePostRequest(CRUD.Base_URL + "/delete",data);
  };
};
