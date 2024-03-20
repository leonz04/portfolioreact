import { createSlice } from "@reduxjs/toolkit";


const modeLanguageSlice =createSlice({
    name: 'modeLanguage',
    initialState: true,
    reducers:{
        setModeLanguageG:(state)=> !state

    }
})


export const {setModeLanguageG}=modeLanguageSlice.actions



export default modeLanguageSlice.reducer