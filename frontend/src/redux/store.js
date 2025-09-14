import {configureStore} from "@reduxjs/toolkit"

// import reducers
import authReducer from "./authSlice"
import todoReducer from "./todoSlice"
export default configureStore({

reducer:{
// put the reducers
auth:authReducer,
todo:todoReducer
}


})