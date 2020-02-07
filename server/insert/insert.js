

let mssql = require("mssql");
let obj = require("../config/db_properties");
module.exports = require("express").Router()
                            .post("/",(req,res)=>{
    //req object stores the data coming from client
    //connect to SQLServer
    mssql.connect(obj,(err)=>{
        if(err){
            console.log("connection failed");
        }else{
            //create the queryObj
            let queryObj = new mssql.Request();
            //execute the SQLQuery
            queryObj.query(`insert into products values(${req.body.p_id},
                  '${req.body.p_name}',
                   ${req.body.p_cost})`,
                                    (err,result)=>{
                if(err){
                    res.send({insert:"fail"});
                }else{
                    res.send({insert:"success"});
                }
                mssql.close();
            });
        }
    });
});