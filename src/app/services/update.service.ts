import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

import CRUD from '../urls/urls';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private rest:RestService) { }
  public updateProduct(data:any):any{
    return this.rest.makePostRequest(CRUD.Base_URL + "/update",data);
  };
};
