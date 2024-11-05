import { createReducer } from "@reduxjs/toolkit"
import { searchCity, setCity } from "../actions/cityActions.js"
const initialState = {
    loading: true,
    cities: [],
    error: "",
    search: []
}

const cityReducer = createReducer(initialState, (builder)=>{
    builder.addCase(setCity.pending, (state)=>{
        state.loading = true
    })
    .addCase(setCity.fulfilled, (state, action)=>{
        state.loading = false
        state.cities = action.payload
    })
    .addCase(setCity.rejected, (state, action)=>{
        state.loading = false
        state.error = action.payload      
    })
    .addCase(searchCity, (state, action)=>{
        state.search = action.payload
    })
})

export {cityReducer}