const express=require("express")
const { createpayment, singlepayment, allpayment } = require("../controller/paymentcontroller")

const router=express.Router()
router.route("/payment").post(createpayment)
// router.route("/singlepayment/:id").get(singlepayment)
router.route("/allpayment").get(allpayment)
module.exports=router