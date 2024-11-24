import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../userSlicer/userSlicer.js'
import counter from '../counterslice/counterSlice.js'



const store = configureStore({
    reducer:{
        user: userSlice,
        count : counter ,
    }
})

export default store



