import { Component, OnInit } from '@angular/core';
import { FetchService} from '../services/fetch.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { DeleteService } from '../services/delete.service';
import errCallBack from '../error/errCallBack';
@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styles: []
})
export class CrudComponent implements OnInit {
private result :any;
  constructor(private fetch:FetchService,
              private insert:InsertService,
              private update:UpdateService,
              private remove:DeleteService) { }
// Fetching the records and storing it into result

  ngOnInit() {
    this.fetch.getProducts().subscribe((posRes)=>{
      this.result = posRes;
    },errCallBack);
  }
//whenever we click insert button the 
// data should come from view
public insertRecord(data:any){
  this.insert.insertProduct(data).subscribe((posRes)=>{
    if(posRes == "success"){
      this.result.push(data);
    }

  },errCallBack);
}
// whenever we click the update button 
//data should cme from view
public updateRecord(data:any){
  this.update.updateProduct(data).subscribe((posRes)=>{
    if (posRes=="success"){
      this.result.push(data)
    }
  },errCallBack);
}
//whenever we click the delete button 
public deleteRecord(id){
  // id contains "p_id" which we want to delete 
  // result is Array of JSON object
  // make service call
  this.remove.deleteProduct({p_id:id}).subscribe((posRes)=>{
    if(posRes.delete =="success"){
      let i = this.result
              .findIndex((element,index)=>{
                return element.p_id==id;
              })
              this.result.splice(i,1)
    }
  },errCallBack); 
};
};
