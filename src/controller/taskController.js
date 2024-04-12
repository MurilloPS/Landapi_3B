const connection= require('../config/db');
const dotenv=require('dotenv').config();

async function storetask(req, res){
    const params= Array(
        req.body.title,
        req.body.description

    );
    const query= "INSERT INTO db_tasks(title, description) VALUES(?,?)";
    connection.query(query, params, (err, results)=>{
        if (results){
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        }else{
            res
                .status(408)
                .json({
                success: false,
                message: "Ops deu merda"
                })
        }
    })
}

module.exports={
    storetask
}