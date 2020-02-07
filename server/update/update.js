let mssql = require("mssql");
let obj = require("../config/db_properties");
module.exports = require("express").Router()
                                .post("/",(req,res)=>{
    mssql.connect(obj,(err)=>{
        if(err){
            console.log("connection failed");
        }else{
            let queryObj = new mssql.Request();
            queryObj.query(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost} where p_id=${req.body.p_id}`,(err,result)=>{
                if(err){
                    res.send({update:"fail"});
                }else{
                    res.send({update:"success"});
                }
                mssql.close();
            });
        }
    });
});