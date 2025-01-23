const express = require("express")
const {dbConnection} = require("./dbConnection");
const { ObjectId } = require("mongodb");
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

//Http Method

//get api
app.get("/student-read",async(req,res) => {
    let mydb= await dbConnection();
    let studentCollections = mydb.collection("Student");
    let data = await studentCollections.find().toArray()
    let resObj = {
        status:1,
        message:"Student Data List!",
        data
        }
    res.send(resObj)
})

//post api
app.post("/student-view",async (req,res) => {
    let mydb= await dbConnection();
    let studentCollections = mydb.collection("Student");
    // let obj = {
    //     fname:req.body.fname,
    //     lname:req.body.lname,
    //     city:req.body.city,
    // }
    let {fname,lname,city} = req.body;
    let obj = {fname,lname,city};
    // console.log(obj);
    let insertRes = await studentCollections.insertOne(obj);
    let resObj = {
        status:1,
        message:"Data Successfully Saved!",
        insertRes
    }
    res.send(resObj);
    // res.send("insert The API")
})

app.delete("/student-delete/:id",async (req,res) => {
    let {id} = req.params;
    let mydb= await dbConnection();
    let studentCollections = mydb.collection("Student");
     let delRes = await studentCollections.deleteOne({_id:new ObjectId(id)})
    // console.log(paramsData);
    let resObj = {
        status:1,
        message:"Data Successfully Deleted!",
        delRes
    }
    res.send(resObj)
})
 
app.put("/student-update/:id",async (req,res) => {
    let {id} = req.params;
    let {fname,lname,city} = req.body;
    let obj = {};
    if(fname !== " " && fname !== undefined && fname !== null){
        obj["fname"] = fname;
    }
    if(lname !== " " && lname !== undefined && lname !== null){
        obj["lname"] = lname;
    }
    if(city !== " " && city !== undefined && city !== null){
        obj["city"] = city;
    }
    let mydb= await dbConnection();
    let studentCollections = mydb.collection("Student");
     let upRes = await studentCollections.updateOne({_id:new ObjectId(id)},{$set:obj})
     let resObj = {
        status:1,
        message:"Data Successfully Updated!",
        upRes
    }
    res.send(resObj)
})
//Server listen
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
})