import { combineReducers,applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { adduserreducer, alldatareducer, authreducer, singlereducer, updatereducer } from "./Reducer/authreducer"
import { allpaymentreducer, paymentreducer } from "./Reducer/paymentreducer"



const rootreducer=combineReducers({
    // reducers
    login:authreducer,
    alluser:adduserreducer,
    dataall: alldatareducer,
    update:updatereducer,
    singledata:singlereducer,
    payment:paymentreducer,
    allpayment:allpaymentreducer

})
const dd=localStorage.getItem("userdata")?
JSON.parse(localStorage.getItem("userdata")):undefined
const initialstate={
    login:{
        userinfo:dd,
        
    },
}   
const store=createStore(rootreducer,initialstate,composeWithDevTools(applyMiddleware(thunk)))
export default store