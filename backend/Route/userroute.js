const express=require("express")
const { createuser, alldata, singledata, updatedata } = require("../controller/Usercontroller")
const router=express.Router()

// const {upload}=require("../middleware/uploadimage")
// router.post("/create",  createuser)
router.route("/create").post(createuser)
router.route("/single/:id").get(singledata)
router.route("/update/:id").put(updatedata)
router.route("/alldata").get(alldata)


module.exports=router 