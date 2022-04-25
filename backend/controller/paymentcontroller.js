const payment=require('../model/payment');
const user=require('../model/UserModel');

exports.createpayment=async(req,res)=>{
    try {
        const result=await payment.create(req.body)
        res.json({
            message:"payment created",
            data:result
        })
        
    } catch (error) {
        res.json({
            message:"error"+error,
            error:error
        })
        
    }
}
exports.allpayment=async(req,res)=>{
    try {
        const result=await payment.find()
        res.json({
            message:"payment created",
            data:result
        })
        
    } catch (error) {
        res.json({
            message:"error"+error,
            error:error
        })
        
    }
}
