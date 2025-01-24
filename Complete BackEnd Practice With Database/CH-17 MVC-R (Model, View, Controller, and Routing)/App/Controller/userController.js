const { enquiryModel } = require("../Model/Enquiry.Model")

//getData
const getData = async (req,res) => {
    let enquiryList = await enquiryModel.find();
    res.status(200).json(
      {
        status:1,
        message:"Enquiry List of All the student",
        data:enquiryList
      })
  }

//Post
const createData =async (req,res) => {
    res.setHeader("Content-Type","text/plain")
    let {name,email,phone,message} = req.body;
    let enquiry = new enquiryModel({name,email,phone,message})
    await enquiry.save().then(()=>{
          res.send({
            status:1,
            msge:"Enquiry saved successully"
          })
    }).catch((err) => {
        res.send({
            status:0,
            msge:"Error while saving enquiry",error:err
          })
    })
    res.send("Data Received.....");
}

//UpdateData
const updateData = async (req,res) => {
    const enquiryId = req.params.id;
    const {name,email,phone,message} = req.body;
    let updateobj = {
        name:name,
        email:email,
        phone:phone,
        message:message
    } 
    const updateData = await enquiryModel.updateOne({_id:enquiryId},{updateobj})
    res.send({
        status:1,
        message:"Successfully data Updated....",
        id:enquiryId,
        delRes:updateData
    })
}

//DeleteData

 const deleteData = async (req,res) => {
    let enquiryId = req.params.id;
    let deleteEnquiry= await enquiryModel.deleteOne({_id:enquiryId});
    res.send({
        status:1,
        message:"Successfully data deleted....",
        id:enquiryId,
        delRes:deleteEnquiry
    })
}
module.exports  = {getData,createData,updateData,deleteData}