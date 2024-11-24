import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    num : 0
}


let counterSlice = createSlice({
    name:'count',
    initialState,
    reducers :{
        count : (state)=>{
            state.num = state.num + 1 
        },
        decount :(state)=>{
            state.num =state.num -1
        }
    }
})

export default counterSlice.reducer
export let {count,decount} = counterSlice.actions