const express = require("express");
const router = express.Router();
const {getData,createData,updateData,deleteData} = require("../Controller/userController")


//get
router.get("/enquiry-list",getData)
//post
router.post("/enquiry-insert",createData)
//Update Api
router.put("/enquiry-update/:id",updateData)
//Delete Api
router.delete("/enquiry-delete/:id",deleteData)

module.exports = router;