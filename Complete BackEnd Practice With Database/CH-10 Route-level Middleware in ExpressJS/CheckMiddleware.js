let myToken = 12345;

const myTokencode = (req,res,next) => {
    if(req.query.token == "" || req.query.token == undefined){
     res.send({
         status:0,
         message:"Please Fill the Token....."
     })
    }
    if(req.query.token != myToken){
     res.send({
         status:0,
         message:"Please Fill the Correct Token....."
     })
    }
    next();
}

module.exports = {myTokencode}