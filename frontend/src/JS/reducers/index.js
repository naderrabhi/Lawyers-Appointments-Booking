import { combineReducers } from "redux";
import {auth} from './auth'
import {appointment} from './appointment'
import {profile} from './profile'
import {admin} from './admin'
import {user} from './user'
import {alert} from './alert'
import {post} from './post'
export const reducers = combineReducers({auth,admin,appointment,profile,user,alert,post });