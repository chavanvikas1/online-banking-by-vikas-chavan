const mongoose=require("mongoose")

const db=async()=>{
try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("connected to mongodb")
} catch (error) {
    console.log("db not connected")
    process.exit()
    
}
}
module.exports=db