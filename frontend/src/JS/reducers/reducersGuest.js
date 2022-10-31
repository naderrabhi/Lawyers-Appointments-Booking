import { GET_ALL_LAWYER_GUEST_FAIL, GET_ALL_LAWYER_GUEST_LOADING, GET_ALL_LAWYER_GUEST_SUCCESS, GET_ONE_LAWYER_GUEST_FAIL, GET_ONE_LAWYER_GUEST_SUCCESS } from "../const/constGuest";


const initialState = { loading: false, error: null,oneLawyer : {}, lawyers: [] };

export const reducersGuest = (state=initialState,{type,payload}) => {
    switch (type) {
        case GET_ALL_LAWYER_GUEST_LOADING:
            return ({...state,loading:true})
        case GET_ALL_LAWYER_GUEST_SUCCESS:
            return ({...state,loading:false,lawyers : payload})
        case GET_ALL_LAWYER_GUEST_FAIL:
            return ({...state,loading:false,error:payload})
        case GET_ONE_LAWYER_GUEST_SUCCESS:
            return ({...state,loading:false,oneLawyer : payload})
        case GET_ONE_LAWYER_GUEST_FAIL:
            return ({...state,loading:false,error:payload})
        default: return state
    }
}