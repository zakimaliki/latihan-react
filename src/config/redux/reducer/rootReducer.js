import { combineReducers } from "redux";
import monthReducer from "./monthReducer";


const rootReducer = combineReducers({
    month: monthReducer
})

export default rootReducer;