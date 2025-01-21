const Http = require("http");
const server = Http.createServer((req,res) => {
   if(req.url === "/"){
    res.write("Home page");
    res.end();
}
if(req.url === "/about"){
    res.write("About page");
    res.end();
}
if(req.url === "/services"){
    let obj= {
        status:1,
        data:[
            {
                name:"Haroon",
                rollNumber:1234,
                From:"Mardan",
                gender:"male",
                city:"Peshawar"
            }
        ]
    }
    res.write(JSON.stringify(obj))
    res.end();
}
if(req.url === "/product/:id"){
    res.write("404 | page");
    res.end();
   }
})

const PORT = 3001;
server.listen(PORT,() => {
    console.log(`Server is listening at ${PORT}`);
    
})