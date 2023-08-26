import changeTheNumber from "./upDown";
import ToggleButton from "./login";
import { combineReducers } from "redux";

const  rootReducer = combineReducers({
    changeTheNumber,
   ToggleButton
})
export default rootReducer;