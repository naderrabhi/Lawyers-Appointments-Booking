const { POST_PROFILE_SUCCESS, POST_PROFILE_FAIL, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } = require("../const/constProfile");


const initialState = { loading: false, error: null,newProfile : {}, Profile: {} };

export const reducersProfile = (state=initialState,{type,payload}) => {
    switch (type) {
        case POST_PROFILE_SUCCESS:
            return ({...state,loading : false,newProfile : payload})
        case POST_PROFILE_FAIL:
            return ({...state,loading:false,error : payload})
        case GET_PROFILE_SUCCESS:
            return ({...state,loading : false,Profile : payload})
        case GET_PROFILE_FAIL:
            return ({...state,loading:false,error : payload})
        default:return state
    }
}