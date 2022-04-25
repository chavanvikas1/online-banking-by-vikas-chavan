import axios from "axios"
import { PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS, SINGLE_PAYMENT_FAIL, SINGLE_PAYMENT_REQUEST, SINGLE_PAYMENT_SUCCESS } from "../Constant/PaymentConstant"

export const paymentaction=(paymentdata)=>async(dispatch)=>{
    try {
        dispatch({type:PAYMENT_REQUEST})
       
        const {data}= await axios.post("/api/v1/payment",paymentdata)
        console.log(data);
        dispatch({type:PAYMENT_SUCCESS,payload:data})
        
        
    } catch (error) {
        dispatch({type:PAYMENT_FAIL,payload:error})
        
        
    }

}
export const allpaymentaction=()=>async(dispatch)=>{
    try {
        dispatch({type:SINGLE_PAYMENT_REQUEST})
       
        const {data}= await axios.get(`/api/v1/allpayment`)
        console.log("hgdjsjbs");
        console.log(data);
        dispatch({type:SINGLE_PAYMENT_SUCCESS,payload:data.data})
        
        
    } catch (error) {
        dispatch({type:SINGLE_PAYMENT_FAIL,payload:error})
        
        
    }

}