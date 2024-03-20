import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

const modeLanguageSlice =createSlice({
    name: 'modeLanguage',
    initialState: true,
    reducers:{
        setModeLanguageG:(state, action: PayloadAction<boolean>)=> action.payload

    }
})


export const {setModeLanguageG}=modeLanguageSlice.actions
export default modeLanguageSlice.reducer