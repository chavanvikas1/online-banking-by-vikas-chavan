import { PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS, SINGLE_PAYMENT_FAIL, SINGLE_PAYMENT_REQUEST, SINGLE_PAYMENT_SUCCESS } from "../Constant/PaymentConstant"

export const paymentreducer=(state={},action)=>{
    switch (action.type) {
        case PAYMENT_REQUEST:return {...state,isloading:true}
        case PAYMENT_SUCCESS:return {...state,isloading:false,paymentdata:action.payload}
        case PAYMENT_FAIL:return {...state,isloading:false,error:action.payload}
        default:return state

            
    }
}
export const allpaymentreducer=(state={},action)=>{
    switch (action.type) {
        case SINGLE_PAYMENT_REQUEST:return {...state,isloading:true}
        case SINGLE_PAYMENT_SUCCESS:return {...state,isloading:false,allpayment:action.payload}
        case SINGLE_PAYMENT_FAIL:return {...state,isloading:false,error:action.payload}
        default:return state

            
    }
}