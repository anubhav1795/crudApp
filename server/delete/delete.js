let mssql = require("mssql");
module.exports = require("express").Router()            
                 .post("/",(req,res)=>{
    mssql.connect(require("../config/db_properties"),
                            (err)=>{
        if(err){
            console.log("connection failed");
        }else{
            let queryObj = new mssql.Request();
            queryObj.query(`delete from products where p_id=${req.body.p_id}`,
                                (err,result)=>{
                if(err){
                    res.send({delete:"fail"});
                }else{
                    res.send({delete:"success"})
                }
                mssql.close();
            });
        }
    });
});