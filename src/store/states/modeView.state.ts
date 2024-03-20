import { createSlice  } from "@reduxjs/toolkit";

const modeViewSlice =createSlice({
    name: 'modeView',
    initialState: true,
    reducers:{
        setModeViewG:(state)=> !state

    }
})


export const {setModeViewG}=modeViewSlice.actions
export default modeViewSlice.reducer