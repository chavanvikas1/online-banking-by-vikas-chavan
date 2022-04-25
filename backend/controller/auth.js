const user=require("../model/UserModel")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


    const login = async(req,res)=>{
    try {
        const {email,password}=req.body
    const result =await user.findOne({email})
    if(!result){
        return res.status(401).json({
            success:false,
            massage:"email not found"
            
        })
    }

const verify = await bcrypt.compare(password,result.password)

    if(!verify){
        return res.status(401).json({
            success:false,
            massage:"please enter valid password",
            data:null
        })
    }
    const token = jwt.sign({id:result._id},process.env.SECRET_KEY)
    res.json({
        success:true,
        massage:"you are log in",
        data:{
            name:result.name,
           email: result.email,
           isAdmin:result.isAdmin,
           id:result._id,
        },
        token
    })
    } catch (error) {
        res.status(401).json({
            success:false,
            massage:"something went wrong"
        })
    }
}
module.exports=login;

