import { DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_ALL_CLIENT_FAIL, GET_ALL_CLIENT_SUCCESS, GET_ALL_LAWYER_FAIL, GET_ALL_LAWYER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_LOADING, GET_ALL_USER_SUCCESS, GET_SEARCH_FAIL, GET_SEARCH_SUCCESS, GET_USER_FAIL, GET_USER_SUCCESS } from "../const/admin";


const initialState = { loading: false, error: null,oneUser : {}, User: {},Users : [] };

export const admin = (state=initialState,{type,payload}) => {
    switch (type) {
        case GET_ALL_USER_LOADING:
            return ({...state,loading : true})
        case GET_ALL_USER_SUCCESS:
            return ({...state,loading : false,Users : payload})
        case GET_ALL_USER_FAIL:
            return ({...state,loading : false,error : payload})
        case GET_ALL_LAWYER_SUCCESS:
            return ({...state,loading : false,Users : payload})
        case GET_ALL_LAWYER_FAIL:
            return ({...state,loading : false,error : payload})
        case GET_ALL_CLIENT_SUCCESS:
            return ({...state,loading : false,Users : payload})
        case GET_ALL_CLIENT_FAIL:
            return ({...state,loading : false,error : payload})
        case DELETE_USER_SUCCESS:
            return ({...state,loading : false,User : payload})
        case DELETE_USER_FAIL:
            return ({...state,loading : false, error : payload})
        case GET_USER_SUCCESS:
            return ({...state,loading : false,oneUser : payload})
        case GET_USER_FAIL:
            return ({...state,loading : false, error : payload})
        case GET_SEARCH_SUCCESS:
            return ({...state,loading : false,Users : payload})
        case GET_SEARCH_FAIL:
            return ({...state,loading : false, error : payload})
        default:return state;
    }
}