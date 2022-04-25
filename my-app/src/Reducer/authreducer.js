import { AUTH_USER_REQUEST,AUTH_USER_SUCCESS,AUTH_USER_FAIL, AUTH_USER_LOGOUT, ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL, ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, SINGLE_USER_REQUEST, SINGLE_USER_SUCCESS, SINGLE_USER_FAIL } from "../Constant/userConstant";

export const authreducer=(state={},action)=>{
    switch (action.type) {
        case AUTH_USER_REQUEST:return {...state,isloading:true}
        case AUTH_USER_SUCCESS:return {...state,isloading:false,userinfo:action.payload}
        case AUTH_USER_FAIL:return {...state,isloading:false,error:action.payload}
        case AUTH_USER_LOGOUT:return{}
        default:return state

            
    }
}

export const adduserreducer=(state={},action)=>{
    switch (action.type) {
        case ADD_USER_REQUEST:return {...state,isloading:true}
        case ADD_USER_SUCCESS:return {...state,isloading:false,userdata:action.payload}
        case ADD_USER_FAIL:return {...state,isloading:false,error:action.payload}
        default:return state

            
    }
}

export const alldatareducer=(state={},action)=>{
    switch (action.type) {
        case ALL_USER_REQUEST:return {...state,isloading:true}
        case ALL_USER_SUCCESS:return {...state,isloading:false,alldata:action.payload}
        case ALL_USER_FAIL:return {...state,isloading:false,error:action.payload}
        default:return state

            
    }
}
export const updatereducer=(state={},action)=>{
    switch (action.type) {
        case UPDATE_USER_REQUEST:return {...state,isloading:true}
        case UPDATE_USER_SUCCESS:return {...state,isloading:false,updatedata:action.payload}
        case UPDATE_USER_FAIL:return {...state,isloading:false,error:action.payload}
        default:return state

            
    }
}
export const singlereducer=(state={},action)=>{
    switch (action.type) {
        case SINGLE_USER_REQUEST:return {...state,isloading:true}
        case SINGLE_USER_SUCCESS:return {...state,isloading:false,single:action.payload}
        case SINGLE_USER_FAIL:return {...state,isloading:false,error:action.payload}
        default:return state

            
    }
}