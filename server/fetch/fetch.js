//import mssql module
let mssql = require("mssql");
//import db_properties
let obj = require("../config/db_properties");
//create and export the module
module.exports = require("express").Router()
                                .get("/",(req,res)=>{
    //connect to SQLServer
    mssql.connect(obj,(err)=>{
        if(err){
            console.log("connection error");
        }else{
            //create the query object
            //query object used to execute the SQLQueries
            let queryObj = new mssql.Request();
            //execute the SQLQuery
            queryObj.query(`select * from products`,
                                (err,records)=>{
                if(err){
                    console.log("query failed");
                }else{
                    res.send(records.recordset);
                }
                //close the connection
                mssql.close();
            });
        }
    });
});