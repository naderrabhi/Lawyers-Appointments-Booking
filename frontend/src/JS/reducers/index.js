import { combineReducers } from "redux";
import {auth} from "./auth"
import {admin} from "./admin"
import {reducersGuest} from "./reducersGuest"
import {reducersProfile} from "./reducersProfile"
export const reducers = combineReducers({auth,admin,reducersGuest,reducersProfile });