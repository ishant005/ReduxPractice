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
export const TOGGLE_AUTH=()=>{
   return{
      type:"TOGGLE_AUTH"
   }
}
export const ToggleTheme=()=>{
   return{
      type:"TOGGLE_THEME"
   }
}