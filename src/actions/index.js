export const incNumber=(num)=>{
     return{
        type:"INCREMENT",
        payload:num
     }
        
     
}

export const decNumber=()=>{
    return{
        type:"DECREMENT"
    }
   
}
// export const logIn=()=>{
//      return{
//         type:"LogIn"
//      }
// }
// export const logOut=()=>{
//     return{
//        type:"LogOut"
//     }
// }
export const TOGGLE_AUTH=()=>{
    return{
       type:"TOGGLE_AUTH"
    }
}
