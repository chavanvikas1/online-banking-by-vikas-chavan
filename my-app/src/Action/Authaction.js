import { AUTH_USER_FAIL, AUTH_USER_REQUEST, AUTH_USER_SUCCESS ,ADD_USER_REQUEST, ALL_USER_REQUEST,ADD_USER_SUCCESS,  ALL_USER_FAIL, AUTH_USER_LOGOUT, ADD_USER_FAIL, ALL_USER_SUCCESS, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, SINGLE_USER_REQUEST, SINGLE_USER_SUCCESS, SINGLE_USER_FAIL} from "../Constant/userConstant"
import axios from "axios"
export const userloginaction=(formdata)=>async(dispatch)=>{
   try {
    dispatch({type:AUTH_USER_REQUEST })
    const {data}=await axios.post("/api/v1/login",formdata)
    console.log(data.data);
    dispatch({type:AUTH_USER_SUCCESS,payload:data.data})
    localStorage.setItem("userdata",JSON.stringify(data.data))


   } catch (error) {
         dispatch({type:AUTH_USER_FAIL,payload:error})
       
   }
     
}
export const userlogoutaction=()=>(dispatch)=>{
    dispatch({type:AUTH_USER_LOGOUT})
    localStorage.removeItem("userdata")
}
export const adduseraction=(formdata)=>async(dispatch)=>{
    try {
        dispatch({type:ADD_USER_REQUEST})
       
        const {data}=await axios.post("/api/v1/user/create",formdata)
        console.log(data);
        dispatch({type:ADD_USER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:ADD_USER_FAIL,payload:error})
        
    }
}
export const alluseraction=()=>async(dispatch)=>{
    try {
        dispatch({type:ALL_USER_REQUEST})
       
        const {data}=await axios.get(`/api/v1/user/alldata`)
        console.warn(data);
        dispatch({type:ALL_USER_SUCCESS,payload:data.data});
        
    } catch (error) {
        dispatch({type:ALL_USER_FAIL,payload:error})
        
    }
}
export const singleaction=(id)=>async(dispatch)=>{
    try {
        console.log(id);
        dispatch({type:SINGLE_USER_REQUEST})  
        const {data}=await axios.get(`http://localhost:5003/api/v1/user/single/${id}`)
        console.warn(data.data);
        dispatch({type:SINGLE_USER_SUCCESS,payload:data.data});
        
    } catch (error) {
        dispatch({type:SINGLE_USER_FAIL,payload:error})
        
    }
}
export const updateaction=(id,formdata)=>async(dispatch)=>{
    try {
        dispatch({type:UPDATE_USER_REQUEST})
       
        const {data}=await axios.put(`http://localhost:5003/api/v1/user/update/${id}`,formdata)
        console.warn(data.data);
        dispatch({type:UPDATE_USER_SUCCESS,payload:data.data});
        
    } catch (error) {
        dispatch({type:UPDATE_USER_FAIL,payload:error})
        
    }
}