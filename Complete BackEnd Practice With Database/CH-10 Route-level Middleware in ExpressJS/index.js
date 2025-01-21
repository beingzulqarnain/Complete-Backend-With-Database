const { log } = require("console");
const express = require("express");
const { myTokencode } = require("./CheckMiddleware");
const app = express();
const PORT = 8000;
app.use(express.json())

// let myPass = 123;



// const myPassword = (req,res,next) => {
//     console.log(req.query.pass);
    
//     if(req.query.pass == "" || req.query.pass == undefined){
//      res.send({
//          status:0,
//          message:"Please Fill the Password....."
//      })
//     }
//     if(req.query.pass != myPass){
//      res.send({
//          status:0,
//          message:"Please Fill the Correct Password....."
//      })
//     }
//     next();
// }

// app.use(myPassword);
// function Loginmiddleware(req,res,next){
    //     console.log("Logged the user"); 
    //     next();   
    // }
    
    // app.use(Loginmiddleware);
    
    
    
    app.get("/",(req,res) => {
        console.log("Home page ");
        res.send("Home Page Please Login")
    })
    app.get("/products",myTokencode,(req,res) => {
        console.log("Products Page");
        res.send({
            id:1234,
            product_name:"Iphone pro max 14",
            model:"Iphone-2016",
            color:"golden",
            additional_feature:[
                {
                    charging:"support",
                    warantee:"2 years",
                    backup:"support",
                    updatedSupport:"new version released"
                }
            ]
        })
        
    })
    app.get("/movies",(req,res) => {
        console.log("Movies page");
        res.send({
            id:3423323,
            name:"Movies",
            category:"18+",
            movies_detail:[
                {
                    movies_name:"Rock Star 2021",
                    duration:"2 hours 33 minutes",
                    resolution:"4k",
                trailor:"2 minutes",
                city:"America"
            }
        ]
    })
})


app.get("/news",(req,res) => {
    res.send("News Data at ")
})
app.get("/news/:id",(req,res) => {
    let currentId = req.params.id;
    res.send("News Data at " + currentId)
})
app.post("/news",(req,res) =>{
    console.log(req.body);
    res.send({
        
        // UserData:req.body,
        // UserData:req.query,
    })
})

app.use(myTokencode);
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
})