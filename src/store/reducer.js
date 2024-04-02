import { combineReducers } from "@reduxjs/toolkit";
import expslice from "./expslice";

const reducers = combineReducers({
    exp:expslice
})
export default reducers
