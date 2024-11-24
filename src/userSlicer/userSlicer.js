import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    username:''
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signup:(state,action ) =>{
            state.username = action.payload
        }
    }

})

export const {signup} = userSlice.actions
export default userSlice.reducer
