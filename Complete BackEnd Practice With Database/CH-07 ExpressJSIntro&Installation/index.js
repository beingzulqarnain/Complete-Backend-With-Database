const express = require("express");
const app = express();



app.get("/",(req,res) => {
   res.send({status:1,data:[
    {
        id:1234,
        firstname:"Tariq",
        lastname:"shah",
        maritalStatus:true,
        living:"Peshawar",
        dob:"Lahore",

    }
   ]})
})

app.listen(8000,() => {
    console.log(`Server is running at 8000 port`);
    
})












//INSTALLATION OF EXPRESS JS
//COMMAND OF EXPRESS JS

//npm install express@5.0.0 --> install new version

//EXPRESSJS DEFINITION:
//Express Js is a lightweight and flexible NodeJS framework.It simplifies to building web applications and API's by providing a robust set of features. 

//CORE FEATURES OF EXPRESS JS

// 1) ROUTING: Define applications routes using HTTP methods (GET,POST,UPDATE,DELETE,PATCH).Supports dynamic and nested routes.

// 2) MIDDLEWARE: Functions executed in the request-response cycle.

// 3) TEMPLATING: Integrated with templating engines like EJS, PUG and HANDLEBARS to generate dynamics HTML

// 4) RESTFUL API SUPPORT: Ideal for creating RESTful services with clean and organized code. Simplifies handling JSON and form data.

// 5) Used MVC MODEL: Model View Controller use for maintainability.