

const initialState={
    isAuthenticated:false,
}
const ToggleButton=(state=initialState,action)=>{
switch(action.type){
    // case "LogIn":
    //     return{
    //         isAuthenticated:true,
    //     }
    //     case "LogOut":
    //         return{
    //             isAuthenticated:false,
    //         }
    //         default:
    //             return state;
    case 'TOGGLE_AUTH':
        return{
            ...state,
            isAuthenticated:!state.isAuthenticated,

        }
        default:
            return state;
}
}
export default ToggleButton;