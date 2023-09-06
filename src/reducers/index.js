import changeTheNumber from "./upDown";
import ToggleButton from "./login";
import themeReducer from "./themeReducer";
import {combineReducers} from "redux";

const rootReducer=combineReducers({
   changeTheNumber,
   ToggleButton,
   themeReducer
})
export default rootReducer;