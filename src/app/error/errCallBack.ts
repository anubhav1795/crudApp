import {HttpErrorResponse} from "@angular/common/http";
let errCallBack = (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
        console.log("clientside error");
    }else{
        console.log("server side error");
    };
};
export default errCallBack;