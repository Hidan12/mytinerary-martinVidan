import { createReducer } from "@reduxjs/toolkit"
import { setTheme } from "../actions/themeAction"

const initialState = {
    dark: true
}

const reducerTheme = createReducer(initialState, (builder)=>{
    builder.addCase(setTheme, (state)=>{
        state.dark = !state.dark
    })
})

export {reducerTheme}