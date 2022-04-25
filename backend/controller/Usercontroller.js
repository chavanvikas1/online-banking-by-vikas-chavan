const user=require("../model/UserModel")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.createuser=async(req,res)=>{
    try {
        const salt= await bcrypt.genSaltSync(10)
        const password= await bcrypt.hashSync(req.body.password,salt)
        const result=await user.create({...req.body,password})
        res.json({
            count :result.length,
            message:"user created",
            success:true,
            data:result
        })
        
    } catch (error) {
        res.json({
            message:"error"+error,
            error:error
        })
        
    }
}
exports.alldata=async(req,res)=>{
    try {
        const result=await user.find()
        res.status(200).json({
            count :result.length,
            message:"user created",
            data:result
        })

        
    } catch (error) {
        res.status(401).json({
            message:"error"+error,
            error:error
        })
        
    }
}
exports.singledata= async(req,res)=>{
    // console.log(req.body);
    // const {id} =req.body;
    // console.log(id);
    try {
        const result=await user.findOne({_id:req.params.id})
        res.json({
            message:"user id find",
            data:result
        })  
    } catch (error) {
        res.status(401).json({
            message:"error"+error,
            error:error
        })
        
    }
}
exports.updatedata=async(req,res)=>{
    try {
        console.log(req.params.id);
        const result=await user.findByIdAndUpdate(req.params.id,req.body ,{new:true})
        res.json({
            count :result.length,
            message:"user updated",
            data:result
        })

        
    } catch (error) {
        res.status(401).json({
            message:"error"+error,
            error:error
        })
        
    }
}
