import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

const modeViewSlice =createSlice({
    name: 'modeView',
    initialState: true,
    reducers:{
        setModeViewG:(state, action: PayloadAction<boolean>)=> action.payload

    }
})


export const {setModeViewG}=modeViewSlice.actions
export default modeViewSlice.reducer